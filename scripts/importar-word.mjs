#!/usr/bin/env node
/*
  Pasa a la app un Word de plantillas editado (el que genera exportar-word.mjs).

    npm run word:importar -- Plantillas.docx             → solo informa de los cambios
    npm run word:importar -- Plantillas.docx --aplicar   → reescribe www/plantillas/*.js

  Acepta los cambios marcados con «Control de cambios» como si estuvieran aceptados,
  y convierte en «- » / «1. » las viñetas y numeraciones automáticas de Word.
  Después de --aplicar: revisa el resultado con «git diff» y compila con npm run web.
*/
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import JSZip from 'jszip';
import { DOMParser } from '@xmldom/xmldom';
import { validar } from './validar.mjs';
import { CABECERAS, ETIQUETAS, PREFIJOS, ambitoDesdeTexto, comparable, limpiarTexto, norm, ordenar, textoCorto } from './word-comun.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const WWW = join(RAIZ, 'www');
const W = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main';

// ---------------------------------------------------------------- lectura del .docx

const hijos = (nodo, nombre) => {
  const out = [];
  for (let n = nodo.firstChild; n; n = n.nextSibling) {
    if (n.nodeType === 1 && n.namespaceURI === W && (!nombre || n.localName === nombre)) out.push(n);
  }
  return out;
};
const hijo = (nodo, nombre) => hijos(nodo, nombre)[0] || null;
const atr = (nodo, nombre) => (nodo ? nodo.getAttributeNS(W, nombre) || nodo.getAttribute('w:' + nombre) || '' : '');

function leerEstilos(xml) {
  const estilos = new Map();
  if (!xml) return estilos;
  for (const s of hijos(xml.documentElement, 'style')) {
    const pPr = hijo(s, 'pPr');
    const nivel = pPr && hijo(pPr, 'outlineLvl');
    estilos.set(atr(s, 'styleId'), {
      nombre: atr(hijo(s, 'name'), 'val'),
      base: atr(hijo(s, 'basedOn'), 'val'),
      nivel: nivel ? Number(atr(nivel, 'val')) : null
    });
  }
  return estilos;
}

function leerNumeracion(xml) {
  const abstractos = new Map();
  const nums = new Map();
  if (!xml) return { formato: () => null };
  for (const a of hijos(xml.documentElement, 'abstractNum')) {
    const niveles = new Map();
    for (const l of hijos(a, 'lvl')) niveles.set(Number(atr(l, 'ilvl')), atr(hijo(l, 'numFmt'), 'val') || 'bullet');
    abstractos.set(atr(a, 'abstractNumId'), niveles);
  }
  for (const n of hijos(xml.documentElement, 'num')) nums.set(atr(n, 'numId'), atr(hijo(n, 'abstractNumId'), 'val'));
  return { formato: (numId, ilvl) => (abstractos.get(nums.get(numId)) || new Map()).get(ilvl) || 'bullet' };
}

// Texto visible de un párrafo con los cambios aceptados (sin lo tachado)
function textoParrafo(p) {
  let t = '';
  const visitar = (nodo) => {
    for (let n = nodo.firstChild; n; n = n.nextSibling) {
      if (n.nodeType !== 1 || n.namespaceURI !== W) continue;
      const nom = n.localName;
      if (nom === 'pPr' || nom === 'rPr' || nom === 'del' || nom === 'moveFrom' || nom === 'delText' || nom === 'instrText') continue;
      if (nom === 't') t += n.textContent;
      else if (nom === 'tab') t += '\t';
      else if (nom === 'br' || nom === 'cr') t += '\n';
      else if (nom === 'noBreakHyphen') t += '-';
      else visitar(n);
    }
  };
  visitar(p);
  return t.replace(/ /g, ' ');
}

const marcaBorrada = (p) => {
  const pPr = hijo(p, 'pPr');
  const rPr = pPr && hijo(pPr, 'rPr');
  return !!(rPr && hijo(rPr, 'del'));
};

function nivelTitulo(p, estilos) {
  const pPr = hijo(p, 'pPr');
  if (!pPr) return null;
  const propio = hijo(pPr, 'outlineLvl');
  if (propio) return Number(atr(propio, 'val')) + 1;
  let id = atr(hijo(pPr, 'pStyle'), 'val');
  for (let i = 0; id && i < 10; i++) {
    const e = estilos.get(id);
    if (!e) break;
    if (e.nivel != null && e.nivel < 9) return e.nivel + 1;
    const m = norm(e.nombre).match(/^(?:heading|titulo|título)\s*(\d)$/);
    if (m) return Number(m[1]);
    id = e.base;
  }
  return null;
}

// Párrafos de un contenedor (celda o cuerpo), entrando en controles de contenido
function parrafosDe(contenedor) {
  const out = [];
  for (const n of hijos(contenedor)) {
    if (n.localName === 'p') out.push(n);
    else if (n.localName === 'sdt') {
      const c = hijo(n, 'sdtContent');
      if (c) out.push(...parrafosDe(c));
    }
  }
  return out;
}

// Líneas de texto de una celda: une párrafos con la marca borrada y convierte las listas automáticas
function lineasCelda(tc, numeracion) {
  const ps = parrafosDe(tc);
  const lineas = [];
  const contadores = new Map();
  let pendiente = null;
  for (const p of ps) {
    let t = textoParrafo(p);
    const pPr = hijo(p, 'pPr');
    const numPr = pPr && hijo(pPr, 'numPr');
    if (numPr) {
      const numId = atr(hijo(numPr, 'numId'), 'val');
      const ilvl = Number(atr(hijo(numPr, 'ilvl'), 'val') || 0);
      if (numId && numId !== '0') {
        const fmt = numeracion.formato(numId, ilvl);
        const clave = numId + ':' + ilvl;
        for (const k of [...contadores.keys()]) if (k.startsWith(numId + ':') && Number(k.split(':')[1]) > ilvl) contadores.delete(k);
        const n = (contadores.get(clave) || 0) + 1;
        contadores.set(clave, n);
        const sangria = '  '.repeat(ilvl);
        const prefijo = fmt === 'bullet' || fmt === 'none' ? '- ' : fmt === 'lowerLetter' ? String.fromCharCode(96 + n) + ') ' : n + '. ';
        t = sangria + prefijo + t;
      }
    }
    if (pendiente != null) { t = pendiente + t; pendiente = null; }
    if (marcaBorrada(p)) { pendiente = t; continue; }
    lineas.push(...t.split('\n'));
  }
  if (pendiente != null) lineas.push(...pendiente.split('\n'));
  return lineas.map((l) => l.replace(/[ \t]+$/, ''));
}

const filaBorrada = (tr) => {
  const trPr = hijo(tr, 'trPr');
  return !!(trPr && hijo(trPr, 'del'));
};

export async function leerWord(ruta, config) {
  const zip = await JSZip.loadAsync(readFileSync(ruta));
  const leer = async (nombre) => {
    const f = zip.file(nombre);
    return f ? new DOMParser().parseFromString(await f.async('string'), 'text/xml') : null;
  };
  const doc = await leer('word/document.xml');
  if (!doc) throw new Error('No es un documento de Word (.docx) válido.');
  const estilos = leerEstilos(await leer('word/styles.xml'));
  const numeracion = leerNumeracion(await leer('word/numbering.xml'));
  const body = hijo(doc.documentElement, 'body');

  const errores = [];
  const avisos = [];
  const plantillas = [];
  let cat = null; let tipo = null; let grupo = ''; let titulo = null;

  const elementos = [];
  const aplanar = (contenedor) => {
    for (const n of hijos(contenedor)) {
      if (n.localName === 'sdt') { const c = hijo(n, 'sdtContent'); if (c) aplanar(c); } else elementos.push(n);
    }
  };
  aplanar(body);

  for (const el of elementos) {
    if (el.localName === 'p') {
      const nivel = nivelTitulo(el, estilos);
      const t = textoCorto(textoParrafo(el));
      if (nivel === 1) {
        const c = config.categorias.find((x) => norm(x.nombre) === norm(t) || norm(x.corto) === norm(t));
        if (c) { cat = c; tipo = null; grupo = ''; titulo = null; } else if (cat && t) errores.push(`Categoría desconocida (Título 1): «${t}». Las categorías se definen en plantillas/config.js.`);
      } else if (nivel === 2 && cat) {
        const ti = config.tipos.find((x) => norm(x.nombre) === norm(t) || norm(x.singular) === norm(t));
        if (ti) { tipo = ti; grupo = ''; titulo = null; } else if (t) errores.push(`${cat.nombre}: pestaña desconocida (Título 2): «${t}». Usa ${config.tipos.map((x) => x.nombre).join(' o ')}.`);
      } else if (nivel === 3 && cat) {
        grupo = t; titulo = null;
      } else if (nivel === 4 && cat) {
        titulo = t;
      } else if (cat && t && nivel == null) {
        avisos.push(`Texto fuera de las tablas, se ignora: «${t.slice(0, 80)}${t.length > 80 ? '…' : ''}»`);
      }
      continue;
    }
    if (el.localName !== 'tbl' || !cat) continue;

    const filas = hijos(el, 'tr').filter((tr) => !filaBorrada(tr));
    const celdas = (tr) => hijos(tr, 'tc');
    const primera = filas.length && celdas(filas[0])[0];
    if (!primera || norm(lineasCelda(primera, numeracion).join(' ')) !== norm(ETIQUETAS.id)) {
      avisos.push(`${cat.nombre}: hay una tabla que no es de plantilla (su primera casilla no es «ID»); se ignora.`);
      continue;
    }
    const donde = `${cat.nombre} › ${tipo ? tipo.nombre : '?'} › ${grupo || '?'} › ${titulo || '(sin título)'}`;
    if (!tipo) { errores.push(`${donde}: la plantilla no está bajo «Exploraciones» ni «Tratamientos» (Título 2).`); continue; }
    if (!titulo) { errores.push(`${donde}: falta el título de la plantilla (Título 4) encima de la tabla.`); continue; }

    const p = { categoria: cat.id, tipo: tipo.id, grupo, titulo };
    const etiquetas = Object.fromEntries(Object.entries(ETIQUETAS).map(([k, v]) => [norm(v), k]));
    const cabeceras = Object.fromEntries(Object.entries(CABECERAS).map(([k, v]) => [norm(v), k]));
    let modo = null;
    for (const tr of filas) {
      const tcs = celdas(tr);
      if (tcs.length >= 2) {
        const clave = etiquetas[norm(lineasCelda(tcs[0], numeracion).join(' '))];
        const lineas = lineasCelda(tcs[1], numeracion);
        if (!clave) { avisos.push(`${donde}: fila desconocida «${textoCorto(lineasCelda(tcs[0], numeracion).join(' '))}», se ignora.`); continue; }
        if (clave === 'enlaces') {
          p.enlaces = [];
          for (const l of lineas.map(textoCorto).filter(Boolean)) {
            const m = l.match(/https?:\/\/\S+/);
            if (!m) { errores.push(`${donde}: el enlace «${l}» no tiene dirección (https://...).`); continue; }
            const tituloEnlace = l.replace(m[0], '').replace(/[\s—–|:-]+$/, '').replace(/^[\s—–|:-]+/, '').trim();
            p.enlaces.push({ titulo: tituloEnlace || m[0], url: m[0].replace(/[).,;]+$/, '') });
          }
        } else {
          p[clave] = textoCorto(lineas.join(' '));
        }
        modo = null;
      } else if (tcs.length === 1) {
        const lineas = lineasCelda(tcs[0], numeracion);
        const cab = cabeceras[norm(lineas.join(' '))];
        if (cab) { modo = cab; continue; }
        if (modo) { p[modo] = lineas.join('\n'); modo = null; }
      }
    }
    p.id = textoCorto(p.id);
    if (p.ambito != null) p.ambito = ambitoDesdeTexto(p.ambito, cat);
    if (p.ejemplo != null) p.ejemplo = ['si', 'x', 'true', '1'].includes(norm(p.ejemplo));
    if (!limpiarTexto(p.texto) && !limpiarTexto(p.texto_ca)) errores.push(`${donde}: la plantilla no tiene texto.`);
    plantillas.push(p);
  }
  if (!plantillas.length && !errores.length) errores.push('No se ha encontrado ninguna plantilla: ¿es el Word que genera «npm run word»?');
  return { plantillas, errores, avisos };
}

// ---------------------------------------------------------------- comparación y escritura

function slug(t) {
  return norm(t).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').split('-').slice(0, 6).join('-') || 'plantilla';
}

function asignarIds(plantillas, actuales) {
  const usados = new Set(plantillas.map((p) => p.id).filter((id) => id && norm(id) !== 'nueva'));
  const errores = [];
  const vistos = new Set();
  for (const p of plantillas) {
    if (!p.id || norm(p.id) === 'nueva') {
      let base = `${PREFIJOS[p.categoria] || p.categoria}-${slug(p.titulo)}`;
      let id = base; let n = 2;
      while (usados.has(id) || actuales.has(id)) id = `${base}-${n++}`;
      p.id = id; p.__nueva = true; usados.add(id);
    } else if (!/^[a-z0-9-]+$/.test(p.id)) {
      errores.push(`ID no válido «${p.id}» (${p.titulo}): solo minúsculas, números y guiones.`);
    }
    if (vistos.has(p.id)) errores.push(`ID repetido «${p.id}»: dos plantillas no pueden compartirlo (¿has copiado una sin escribir «nueva»?).`);
    vistos.add(p.id);
  }
  return errores;
}

const NOMBRES = {
  categoria: 'categoría', tipo: 'pestaña', ambito: 'ámbito', grupo: 'grupo', titulo: 'título', etiquetas: 'etiquetas',
  nota: 'nota', revisar: 'revisar', enlaces: 'enlaces', ejemplo: 'ejemplo', texto: 'texto', texto_ca: 'texto en catalán'
};

export function compararCon(actuales, nuevas) {
  const porId = new Map(actuales.map((p) => [p.id, p]));
  const ids = new Set(nuevas.map((p) => p.id));
  const informe = { nuevas: [], eliminadas: [], modificadas: [], iguales: 0 };
  for (const p of nuevas) {
    const a = porId.get(p.id);
    if (!a) { informe.nuevas.push(p); continue; }
    const ca = comparable(a); const cn = comparable(p);
    const cambios = Object.keys(NOMBRES).filter((k) => JSON.stringify(ca[k]) !== JSON.stringify(cn[k]));
    if (cambios.length) informe.modificadas.push({ p, cambios: cambios.map((k) => NOMBRES[k]) });
    else informe.iguales++;
  }
  informe.eliminadas = actuales.filter((p) => !ids.has(p.id));
  return informe;
}

const js = (s) => JSON.stringify(String(s));
const literal = (t) => '`\n' + limpiarTexto(t).replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${') + '\n`';

function objetoJs(p) {
  const l = [];
  const c = comparable(p);
  l.push(`id: ${js(c.id)}`, `categoria: ${js(c.categoria)}`, `tipo: ${js(c.tipo)}`);
  if (c.ambito.length) l.push(`ambito: [${c.ambito.map(js).join(', ')}]`);
  l.push(`grupo: ${js(c.grupo)}`, `titulo: ${js(c.titulo)}`);
  if (c.etiquetas) l.push(`etiquetas: ${js(c.etiquetas)}`);
  if (c.nota) l.push(`nota: ${js(c.nota)}`);
  if (c.revisar) l.push(`revisar: ${js(c.revisar)}`);
  if (c.enlaces.length) {
    l.push('enlaces: [\n' + c.enlaces.map((e) => `      { titulo: ${js(e.titulo)}, url: ${js(e.url)} }`).join(',\n') + '\n    ]');
  }
  if (c.ejemplo) l.push('ejemplo: true');
  if (c.texto) l.push(`texto: ${literal(c.texto)}`);
  if (c.texto_ca) l.push(`texto_ca: ${literal(c.texto_ca)}`);
  return '  {\n' + l.map((x) => '    ' + x).join(',\n') + '\n  }';
}

function archivoJs(cabecera, bloques) {
  return (cabecera ? cabecera.trimEnd() + '\n\n' : '') + 'PLANTILLAS.push(\n' + bloques.join('') + '\n);\n';
}

export function generarArchivos(plantillas, config, actuales) {
  const archivos = new Map();
  const deCategoria = (id) => {
    const a = actuales.find((p) => p.categoria === id);
    return a && a.__archivo;
  };
  for (const { cat, tipos } of ordenar(plantillas, config)) {
    const ruta = deCategoria(cat.id);
    const total = tipos.reduce((n, t) => n + t.grupos.reduce((m, g) => m + g.plantillas.length, 0), 0);
    if (!total) {
      if (ruta) archivos.set(ruta, { cat, contenido: archivoJs(cabeceraDe(ruta), ['\n']) });
      continue;
    }
    if (!ruta) throw new Error(`No hay archivo para la categoría ${cat.nombre}: añádelo a index.html y sw.js.`);
    const bloques = [];
    for (const { tipo, grupos } of tipos) {
      if (!grupos.length) continue;
      bloques.push(`\n  /* ═════════════ ${tipo.nombre.toUpperCase()} ═════════════ */\n`);
      for (const g of grupos) {
        bloques.push(`\n  /* ───────────── ${g.nombre} ───────────── */\n\n`);
        bloques.push(g.plantillas.map(objetoJs).join(',\n\n'));
        bloques.push(',\n');
      }
    }
    // la última coma sobra
    const ultimo = bloques.length - 1;
    bloques[ultimo] = bloques[ultimo].replace(/,\n$/, '\n');
    archivos.set(ruta, { cat, contenido: archivoJs(cabeceraDe(ruta), bloques) });
  }
  return archivos;
}

function cabeceraDe(ruta) {
  try {
    const actual = readFileSync(join(WWW, ruta), 'utf8');
    const m = actual.match(/^\s*\/\*[\s\S]*?\*\//);
    return m ? m[0].trim() : '';
  } catch { return ''; }
}

// ---------------------------------------------------------------- uso directo

if (import.meta.url === pathToFileURL(process.argv[1] || '').href) {
  const args = process.argv.slice(2);
  const aplicar = args.includes('--aplicar');
  const ruta = args.find((a) => !a.startsWith('--'));
  if (!ruta) {
    console.error('Uso: npm run word:importar -- Plantillas.docx [--aplicar]');
    process.exit(2);
  }
  const actual = validar();
  if (actual.errores.length) {
    console.error('✖ El contenido actual de www/plantillas/ tiene errores; corrígelos antes de importar.');
    process.exit(1);
  }
  const { plantillas, errores, avisos } = await leerWord(resolve(ruta), actual.config);
  errores.push(...asignarIds(plantillas, new Set(actual.plantillas.map((p) => p.id))));
  avisos.forEach((a) => console.warn('  aviso: ' + a));
  if (errores.length) {
    console.error(`\n✖ ${errores.length} problema(s) en el Word; no se ha cambiado nada:`);
    errores.forEach((e) => console.error('  - ' + e));
    process.exit(1);
  }

  const inf = compararCon(actual.plantillas, plantillas);
  const nombre = (p) => `${p.id} · ${textoCorto(p.titulo)}`;
  console.log(`Word: ${plantillas.length} plantillas · sin cambios: ${inf.iguales}`);
  if (inf.nuevas.length) { console.log(`\nNuevas (${inf.nuevas.length}):`); inf.nuevas.forEach((p) => console.log(`  + ${nombre(p)}  [${p.categoria} › ${p.tipo} › ${p.grupo}]`)); }
  if (inf.modificadas.length) { console.log(`\nModificadas (${inf.modificadas.length}):`); inf.modificadas.forEach(({ p, cambios }) => console.log(`  ~ ${nombre(p)}: ${cambios.join(', ')}`)); }
  if (inf.eliminadas.length) { console.log(`\nEliminadas (${inf.eliminadas.length}):`); inf.eliminadas.forEach((p) => console.log(`  - ${nombre(p)}`)); }
  if (!inf.nuevas.length && !inf.modificadas.length && !inf.eliminadas.length) {
    console.log('\nEl Word coincide con la app: no hay nada que cambiar.');
    process.exit(0);
  }
  if (!aplicar) {
    console.log('\nNo se ha escrito nada. Para pasar los cambios a la app, repite con --aplicar.');
    process.exit(0);
  }

  const archivos = generarArchivos(plantillas, actual.config, actual.plantillas);
  for (const [r, { contenido }] of archivos) writeFileSync(join(WWW, r), contenido);
  const despues = validar();
  despues.avisos.forEach((a) => console.warn('  aviso: ' + a));
  if (despues.errores.length) {
    console.error(`\n✖ Tras importar, el contenido tiene ${despues.errores.length} error(es). Revisa el Word o deshaz con «git checkout www/plantillas»:`);
    despues.errores.forEach((e) => console.error('  - ' + e));
    process.exit(1);
  }
  console.log(`\n✔ Escritos ${[...archivos.keys()].join(', ')}`);
  (despues.resumen || []).forEach((l) => console.log('  ' + l));
  console.log('Revisa los cambios con «git diff www/plantillas», sube la versión en package.json y compila.');
}
