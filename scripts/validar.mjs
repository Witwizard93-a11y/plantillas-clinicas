#!/usr/bin/env node
/*
  Comprueba el contenido de www/plantillas/ antes de empaquetar.

    node scripts/validar.mjs

  Ejecuta los archivos de contenido en el mismo orden que index.html y
  revisa cada plantilla: identificador único, categoría y tipo válidos,
  texto presente, campos {{...}} bien cerrados, enlaces correctos...
  Los errores detienen la compilación; los avisos solo se muestran.
*/
import { readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import vm from 'node:vm';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const WWW = join(RAIZ, 'www');

const CLAVES = ['id', 'categoria', 'tipo', 'ambito', 'grupo', 'titulo', 'etiquetas', 'texto', 'texto_ca',
  'nota', 'enlaces', 'revisar', 'ejemplo'];
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
    const crudo = m[0];
    let etiqueta = m[1].trim();
    const opciones = m[2] == null ? null : m[2].split('|').map((o) => o.trim());
    if (opciones == null && etiqueta.indexOf('=') > 0) etiqueta = etiqueta.slice(0, etiqueta.indexOf('=')).trim();
    lista.push({ crudo, etiqueta, clave: norm(etiqueta), opciones });
  }
  return lista;
}

export function validar() {
  const { rutas } = archivosContenido();
  const errores = [];
  const avisos = [];
  const fuentes = {};

  const ctx = vm.createContext({ console });
  ctx.window = ctx;
  for (const ruta of rutas) {
    const codigo = readFileSync(join(WWW, ruta), 'utf8');
    fuentes[ruta] = codigo;
    const antes = Array.isArray(ctx.PLANTILLAS) ? ctx.PLANTILLAS.length : 0;
    try {
      vm.runInContext(codigo, ctx, { filename: 'www/' + ruta });
    } catch (e) {
      const linea = (e.stack || '').split('\n').find((l) => l.includes('www/' + ruta)) || '';
      errores.push(`${ruta}: ${e.message}${linea ? ' (' + linea.trim().replace(/^at\s+/, '') + ')' : ''}. Revisa comas, llaves y comillas invertidas (\`).`);
      continue;
    }
    const despues = Array.isArray(ctx.PLANTILLAS) ? ctx.PLANTILLAS.length : 0;
    if (ruta !== 'plantillas/config.js' && despues === antes) avisos.push(`${ruta}: no añade ninguna plantilla.`);
    for (let i = antes; i < despues; i++) {
      const p = ctx.PLANTILLAS[i];
      if (p && typeof p === 'object') Object.defineProperty(p, '__archivo', { value: ruta, enumerable: false });
    }
  }
  if (errores.length) return { errores, avisos, plantillas: [], fuentes, rutas };

  const config = ctx.PLANTILLAS_CONFIG;
  if (!config || !Array.isArray(config.categorias) || !Array.isArray(config.tipos)) {
    errores.push('plantillas/config.js: falta PLANTILLAS_CONFIG con categorias y tipos.');
    return { errores, avisos, plantillas: [], fuentes, rutas };
  }
  const cats = new Map(config.categorias.map((c) => [c.id, c]));
  const tipos = new Set(config.tipos.map((t) => t.id));
  const plantillas = Array.isArray(ctx.PLANTILLAS) ? ctx.PLANTILLAS : [];
  const ids = new Map();

  plantillas.forEach((p, i) => {
    const donde = `${(p && p.__archivo) || '?'} · ${(p && (p.id || p.titulo)) || 'plantilla n.º ' + (i + 1)}`;
    if (!p || typeof p !== 'object' || Array.isArray(p)) { errores.push(`${donde}: no es un bloque { ... }.`); return; }

    Object.keys(p).forEach((k) => { if (!CLAVES.includes(k)) avisos.push(`${donde}: clave desconocida «${k}» (se ignora).`); });

    if (typeof p.id !== 'string' || !p.id.trim()) errores.push(`${donde}: falta «id».`);
    else if (!/^[a-z0-9-]+$/.test(p.id)) avisos.push(`${donde}: el id debería llevar solo minúsculas, números y guiones.`);
    else if (ids.has(p.id)) errores.push(`${donde}: id repetido (también en ${ids.get(p.id)}).`);
    else ids.set(p.id, p.__archivo);

    const cat = cats.get(p.categoria);
    if (!cat) errores.push(`${donde}: categoría «${p.categoria}» no existe (${[...cats.keys()].join(', ')}).`);
    if (!tipos.has(p.tipo)) errores.push(`${donde}: tipo «${p.tipo}» no existe (${[...tipos].join(', ')}).`);
    if (cat) {
      const validos = (cat.ambitos || []).map((a) => a.id);
      const amb = p.ambito == null ? [] : (Array.isArray(p.ambito) ? p.ambito : [p.ambito]);
      amb.forEach((a) => { if (!validos.includes(a)) errores.push(`${donde}: ámbito «${a}» no existe en ${cat.nombre}.`); });
      if (validos.length && !amb.length) avisos.push(`${donde}: sin ámbito (${validos.join('/')}): no saldrá al filtrar por ámbito.`);
    }

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
      [...es.keys()].filter((c) => ca.has(c) && !!es.get(c).opciones !== !!ca.get(c).opciones)
        .forEach((c) => avisos.push(`${donde}: «${es.get(c).etiqueta}» es desplegable en un idioma y libre en el otro.`));
    }

    if (p.enlaces != null) {
      if (!Array.isArray(p.enlaces)) errores.push(`${donde}: «enlaces» debe ser una lista [ ... ].`);
      else p.enlaces.forEach((e, j) => {
        if (!e || typeof e.url !== 'string' || !/^https?:\/\/\S+$/i.test(e.url)) errores.push(`${donde}: el enlace n.º ${j + 1} no tiene una url http(s) válida.`);
        else if (!e.titulo) avisos.push(`${donde}: el enlace ${e.url} no tiene título.`);
      });
    }
    if (p.ejemplo != null && typeof p.ejemplo !== 'boolean') avisos.push(`${donde}: «ejemplo» debería ser true o false.`);
  });

  const resumen = config.categorias.map((c) => {
    const deCat = plantillas.filter((p) => p && p.categoria === c.id);
    const porTipo = config.tipos.map((t) => `${deCat.filter((p) => p.tipo === t.id).length} ${t.nombre.toLowerCase()}`).join(', ');
    return `${c.nombre}: ${deCat.length} (${porTipo})`;
  });
  const total = plantillas.length;
  const catalan = plantillas.filter((p) => p && typeof p.texto_ca === 'string' && p.texto_ca.trim()).length;
  const revisar = plantillas.filter((p) => p && typeof p.revisar === 'string' && p.revisar.trim()).length;
  const enlaces = plantillas.reduce((n, p) => n + (p && Array.isArray(p.enlaces) ? p.enlaces.length : 0), 0);
  resumen.push(`Total: ${total} · con catalán: ${catalan} · pendientes de revisar: ${revisar} · enlaces: ${enlaces}`);

  return { errores, avisos, plantillas, fuentes, rutas, resumen };
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
