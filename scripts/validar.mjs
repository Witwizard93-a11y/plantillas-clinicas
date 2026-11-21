#!/usr/bin/env node
/*
  Comprueba el contenido de www/contenido/ antes de empaquetar.

    node scripts/validar.mjs

  Ejecuta los archivos de contenido en el mismo orden que index.html y revisa:
  - Plantillas: identificador único, categoría, tipo y ámbito válidos, texto
    presente, campos {{...}} bien cerrados, enlaces correctos.
  - Códigos, RCP y ABCDE: que existan y que sus bloques sean de un tipo conocido.
  - NEWS2: que estén todos los tramos de puntuación.
  Los errores detienen la compilación; los avisos solo se muestran.
*/
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import vm from 'node:vm';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const WWW = join(RAIZ, 'www');

const CLAVES = ['id', 'categoria', 'tipo', 'ambito', 'grupo', 'titulo', 'etiquetas', 'texto', 'texto_ca', 'nota', 'enlaces', 'revisar'];
const TIPOS_BLOQUE = ['paso', 'ramas', 'lista', 'tabla', 'nota', 'race', 'escala', 'puntuacion'];
const RE_CAMPO = /\{\{\s*([^{}|]+?)\s*(?:\|([^{}]*))?\}\}/g;
const norm = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/\s+/g, ' ').trim();

// Archivos de contenido, en el orden en que los carga index.html
export function archivosContenido() {
  const html = readFileSync(join(WWW, 'index.html'), 'utf8').replace(/\r\n/g, '\n');
  const bloque = html.match(/<!-- contenido -->([\s\S]*?)<!-- \/contenido -->/);
  if (!bloque) throw new Error('index.html no tiene el bloque <!-- contenido --> ... <!-- /contenido -->');
  const rutas = [...bloque[1].matchAll(/<script src="([^"]+)"><\/script>/g)].map((m) => m[1]);
  if (!rutas.length) throw new Error('El bloque de contenido de index.html no carga ningún archivo');
  return { html, bloque: bloque[0], rutas };
}

function campos(texto) {
  const lista = [];
  for (const m of texto.matchAll(RE_CAMPO)) {
    let etiqueta = m[1].trim();
    const opciones = m[2] == null ? null : m[2].split('|').map((o) => o.trim());
    if (opciones == null && etiqueta.indexOf('=') > 0) etiqueta = etiqueta.slice(0, etiqueta.indexOf('=')).trim();
    lista.push({ crudo: m[0], etiqueta, clave: norm(etiqueta), opciones });
  }
  return lista;
}

function revisarBloques(bloques, donde, errores) {
  if (!Array.isArray(bloques) || !bloques.length) { errores.push(`${donde}: no tiene bloques.`); return; }
  bloques.forEach((b, i) => {
    const aqui = `${donde} · bloque n.º ${i + 1}`;
    if (!b || !TIPOS_BLOQUE.includes(b.tipo)) { errores.push(`${aqui}: tipo «${b && b.tipo}» desconocido (${TIPOS_BLOQUE.join(', ')}).`); return; }
    if (b.tipo === 'paso' && !b.titulo) errores.push(`${aqui}: el paso no tiene título.`);
    if (b.tipo === 'lista' && (!b.titulo || !Array.isArray(b.items) || !b.items.length)) errores.push(`${aqui}: la lista necesita título e items.`);
    if (b.tipo === 'nota' && !b.texto) errores.push(`${aqui}: la nota no tiene texto.`);
    if (b.tipo === 'tabla') {
      if (!b.titulo || !Array.isArray(b.columnas) || !Array.isArray(b.filas)) errores.push(`${aqui}: la tabla necesita título, columnas y filas.`);
      else b.filas.forEach((f, j) => { if (!Array.isArray(f) || f.length !== b.columnas.length) errores.push(`${aqui} («${b.titulo}»): la fila ${j + 1} no tiene ${b.columnas.length} celdas.`); });
    }
    if (b.tipo === 'escala' && (!b.id || !Array.isArray(b.items) || !Array.isArray(b.bandas))) errores.push(`${aqui}: la escala necesita id, items y bandas.`);
    if (b.tipo === 'puntuacion') {
      if (!b.id || !b.titulo || !Array.isArray(b.items) || !b.items.length || !Array.isArray(b.bandas) || !b.bandas.length) errores.push(`${aqui}: la puntuación necesita id, titulo, items y bandas.`);
      else b.items.forEach((it, j) => { if (!it.nombre || !Array.isArray(it.opciones) || !it.opciones.length || it.opciones.some((o) => !Array.isArray(o) || o.length !== 2 || typeof o[1] !== 'number')) errores.push(`${aqui} («${b.titulo}»): el ítem ${j + 1} necesita nombre y opciones [[texto, puntos]].`); });
    }
    if (b.tipo === 'ramas') {
      if (!Array.isArray(b.ramas) || !b.ramas.length) errores.push(`${aqui}: «ramas» está vacío.`);
      else b.ramas.forEach((r) => revisarBloques(r.bloques, `${aqui} · rama «${r.titulo}»`, errores));
    }
  });
}

export function validar() {
  const { rutas } = archivosContenido();
  const errores = [];
  const avisos = [];

  const ctx = vm.createContext({ console });
  ctx.window = ctx;
  for (const ruta of rutas) {
    try {
      vm.runInContext(readFileSync(join(WWW, ruta), 'utf8'), ctx, { filename: 'www/' + ruta });
    } catch (e) {
      const linea = (e.stack || '').split('\n').find((l) => l.includes('www/' + ruta)) || '';
      errores.push(`${ruta}: ${e.message}${linea ? ' (' + linea.trim().replace(/^at\s+/, '') + ')' : ''}. Revisa comas, llaves y comillas.`);
    }
  }
  if (errores.length) return { errores, avisos, plantillas: [], rutas };
  const C = ctx.CONTENIDO || {};

  // NEWS2
  const tramos = C.news2 && C.news2.tramos;
  ['fr', 'spo2Escala1', 'spo2Escala2Base', 'spo2Escala2ConOxigeno', 'oxigeno', 'tas', 'fc', 'conciencia', 'temperatura'].forEach((k) => {
    if (!tramos || tramos[k] == null) errores.push(`contenido/news2.js: falta el tramo «${k}».`);
  });
  ['cero', 'bajo', 'rojo', 'medio', 'alto'].forEach((k) => {
    if (!C.news2 || !C.news2.respuestas || !C.news2.respuestas[k]) errores.push(`contenido/news2.js: falta la respuesta «${k}».`);
  });

  // NEWS original (2012)
  const tn = C.news && C.news.tramos;
  ['fr', 'spo2', 'oxigeno', 'tas', 'fc', 'conciencia', 'temperatura'].forEach((k) => {
    if (!tn || tn[k] == null) errores.push(`contenido/news.js: falta el tramo «${k}».`);
  });
  ['cero', 'bajo', 'rojo', 'medio', 'alto'].forEach((k) => {
    if (!C.news || !C.news.respuestas || !C.news.respuestas[k]) errores.push(`contenido/news.js: falta la respuesta «${k}».`);
  });

  // Dosis según el peso (RCP pediátrica)
  ((C.rcp && C.rcp.versiones) || []).forEach((v) => {
    if (!v.dosisPeso) return;
    (v.dosisPeso.farmacos || []).forEach((f, i) => {
      const r = Array.isArray(f.porKg) ? f.porKg : [f.porKg];
      if (!f.nombre || !f.unidad || !r.length || r.some((x) => typeof x !== 'number' || !(x > 0))) errores.push(`contenido/rcp.js: dosis por peso n.º ${i + 1} incompleta.`);
      if (f.max != null && !(f.max > 0)) errores.push(`contenido/rcp.js: máximo no válido en «${f.nombre}».`);
    });
  });

  // Códigos, RCP y ABCDE
  const codigos = ['iam', 'ictus', 'sepsis', 'ppt', 'suicidio'];
  codigos.forEach((k) => {
    if (!C[k] || !C[k].titulo) errores.push(`contenido/${k}.js: falta el contenido o el título.`);
    else revisarBloques(C[k].bloques, `contenido/${k}.js`, errores);
  });
  if (!C.rcp || !Array.isArray(C.rcp.versiones) || !C.rcp.versiones.length) errores.push('contenido/rcp.js: faltan las versiones.');
  else C.rcp.versiones.forEach((v) => revisarBloques(v.bloques, `contenido/rcp.js · ${v.nombre}`, errores));
  // Urgencias pediátricas (SEUP)
  if (!C.urgped || !Array.isArray(C.urgped.protocolos) || !C.urgped.protocolos.length) errores.push('contenido/urgped.js: faltan los protocolos.');
  else {
    const idsP = new Set();
    C.urgped.protocolos.forEach((pr, i) => {
      const donde = `contenido/urgped.js · ${(pr && (pr.id || pr.titulo)) || 'protocolo n.º ' + (i + 1)}`;
      if (!pr.id || !/^[a-z0-9-]+$/.test(pr.id)) errores.push(`${donde}: id ausente o no válido (minúsculas, números y guiones).`);
      else if (idsP.has(pr.id)) errores.push(`${donde}: id repetido.`);
      else idsP.add(pr.id);
      if (!pr.titulo) errores.push(`${donde}: falta el título.`);
      if (pr.bloques != null) revisarBloques(pr.bloques, donde, errores);
    });
  }
  if (!C.abcde || !Array.isArray(C.abcde.apartados) || C.abcde.apartados.length !== 5) errores.push('contenido/abcde.js: deben estar los cinco apartados A, B, C, D y E.');
  if (C.ictus && C.ictus.bloques && C.ictus.bloques.some((b) => b.tipo === 'race') && !C.ictus.race) errores.push('contenido/ictus.js: hay un bloque «race» pero falta la escala.');

  // Plantillas
  const config = C.plantillasConfig;
  if (!config || !Array.isArray(config.categorias) || !Array.isArray(config.tipos) || !Array.isArray(config.ambitos)) {
    errores.push('contenido/plantillas.js: falta plantillasConfig con categorias, ambitos y tipos.');
    return { errores, avisos, plantillas: [], rutas };
  }
  const cats = new Map(config.categorias.map((c) => [c.id, c]));
  const tipos = new Set(config.tipos.map((t) => t.id));
  const ambitos = new Set(config.ambitos.map((a) => a.id));
  const plantillas = Array.isArray(C.plantillas) ? C.plantillas : [];
  const ids = new Set();

  plantillas.forEach((p, i) => {
    const donde = `plantillas.js · ${(p && (p.id || p.titulo)) || 'plantilla n.º ' + (i + 1)}`;
    if (!p || typeof p !== 'object' || Array.isArray(p)) { errores.push(`${donde}: no es un bloque { ... }.`); return; }
    Object.keys(p).forEach((k) => { if (!CLAVES.includes(k)) avisos.push(`${donde}: clave desconocida «${k}» (se ignora).`); });

    if (typeof p.id !== 'string' || !p.id.trim()) errores.push(`${donde}: falta «id».`);
    else if (!/^[a-z0-9-]+$/.test(p.id)) avisos.push(`${donde}: el id debería llevar solo minúsculas, números y guiones.`);
    else if (/^propia-/.test(p.id)) errores.push(`${donde}: los id que empiezan por «propia-» están reservados para las plantillas creadas en el dispositivo.`);
    else if (ids.has(p.id)) errores.push(`${donde}: id repetido.`);
    else ids.add(p.id);

    if (!cats.has(p.categoria)) errores.push(`${donde}: categoría «${p.categoria}» no existe (${[...cats.keys()].join(', ')}).`);
    if (!tipos.has(p.tipo)) errores.push(`${donde}: tipo «${p.tipo}» no existe (${[...tipos].join(', ')}).`);
    if (p.ambito != null) {
      if (!Array.isArray(p.ambito)) errores.push(`${donde}: «ambito» debe ser una lista, por ejemplo ["familia", "urgencias"].`);
      else p.ambito.forEach((a) => { if (!ambitos.has(a)) errores.push(`${donde}: ámbito «${a}» no existe (${[...ambitos].join(', ')}).`); });
      if (p.categoria !== 'adultos') avisos.push(`${donde}: el ámbito solo se usa en adultos.`);
    } else if (p.categoria === 'adultos') avisos.push(`${donde}: sin ámbito (familia/urgencias): saldrá en los dos filtros.`);

    if (typeof p.titulo !== 'string' || !p.titulo.trim()) errores.push(`${donde}: falta «titulo».`);
    ['grupo', 'etiquetas', 'nota', 'revisar'].forEach((k) => {
      if (p[k] != null && typeof p[k] !== 'string') errores.push(`${donde}: «${k}» debe ser texto.`);
    });

    const variantes = [['texto', p.texto], ['texto_ca', p.texto_ca]].filter(([, t]) => t != null);
    variantes.forEach(([k, t]) => { if (typeof t !== 'string') errores.push(`${donde}: «${k}» debe ser texto entre comillas invertidas.`); });
    const conTexto = variantes.filter(([, t]) => typeof t === 'string' && t.trim());
    if (!conTexto.length) errores.push(`${donde}: falta «texto» (o «texto_ca»).`);

    const porIdioma = {};
    conTexto.forEach(([k, t]) => {
      const sinCampos = t.replace(RE_CAMPO, '');
      if (sinCampos.includes('{{') || sinCampos.includes('}}')) errores.push(`${donde}: en «${k}» hay un campo {{ }} mal cerrado.`);
      const lista = campos(t);
      lista.forEach((c) => {
        if (/\n/.test(c.crudo)) errores.push(`${donde}: el campo «${c.crudo.replace(/\s+/g, ' ')}» ocupa varias líneas.`);
        if (!c.etiqueta) errores.push(`${donde}: hay un campo sin nombre en «${k}».`);
        if (c.opciones) {
          if (c.opciones.some((o) => !o)) avisos.push(`${donde}: el desplegable «${c.etiqueta}» tiene una opción vacía.`);
          if (c.opciones.filter((o) => o.startsWith('*')).length > 1) avisos.push(`${donde}: el desplegable «${c.etiqueta}» marca más de una opción por defecto.`);
          if (c.opciones.length < 2) avisos.push(`${donde}: el desplegable «${c.etiqueta}» tiene una sola opción.`);
        }
      });
      porIdioma[k] = lista;
    });
    if (porIdioma.texto && porIdioma.texto_ca) {
      const es = new Map(porIdioma.texto.map((c) => [c.clave, c]));
      const ca = new Map(porIdioma.texto_ca.map((c) => [c.clave, c]));
      [...es.keys()].filter((c) => !ca.has(c)).forEach((c) => avisos.push(`${donde}: el campo «${es.get(c).etiqueta}» no está en catalán.`));
      [...ca.keys()].filter((c) => !es.has(c)).forEach((c) => avisos.push(`${donde}: el campo «${ca.get(c).etiqueta}» no está en castellano.`));
    }

    if (p.enlaces != null) {
      if (!Array.isArray(p.enlaces)) errores.push(`${donde}: «enlaces» debe ser una lista [ ... ].`);
      else p.enlaces.forEach((e, j) => {
        if (!e || typeof e.url !== 'string' || !/^https?:\/\/\S+$/i.test(e.url)) errores.push(`${donde}: el enlace n.º ${j + 1} no tiene una url http(s) válida.`);
        else if (!e.titulo) avisos.push(`${donde}: el enlace ${e.url} no tiene título.`);
      });
    }
  });

  const resumen = config.categorias.map((c) => {
    const deCat = plantillas.filter((p) => p && p.categoria === c.id);
    const porTipo = config.tipos.map((t) => `${deCat.filter((p) => p.tipo === t.id).length} ${t.nombre.toLowerCase()}`).join(', ');
    return `${c.nombre}: ${deCat.length} (${porTipo})`;
  });
  const catalan = plantillas.filter((p) => p && typeof p.texto_ca === 'string' && p.texto_ca.trim()).length;
  const revisar = plantillas.filter((p) => p && typeof p.revisar === 'string' && p.revisar.trim()).length;
  resumen.push(`Plantillas: ${plantillas.length} · con catalán: ${catalan} · pendientes de revisar: ${revisar}`);
  resumen.push(`Códigos: ${codigos.length} · RCP: ${C.rcp.versiones.map((v) => v.nombre.toLowerCase()).join(' y ')} · NEWS2 · ABCDE`);

  return { errores, avisos, plantillas, rutas, resumen, config };
}

// Uso directo: node scripts/validar.mjs
if (import.meta.url === pathToFileURL(process.argv[1] || '').href) {
  const r = validar();
  r.avisos.forEach((a) => console.warn('  aviso: ' + a));
  if (r.errores.length) {
    console.error(`\n✖ ${r.errores.length} error(es) en el contenido:`);
    r.errores.forEach((e) => console.error('  - ' + e));
    process.exit(1);
  }
  console.log('✔ Contenido correcto');
  (r.resumen || []).forEach((l) => console.log('  ' + l));
}
