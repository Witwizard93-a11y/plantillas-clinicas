#!/usr/bin/env node
/*
  Genera un Word con todas las plantillas de www/plantillas/, para revisarlas y editarlas.

    npm run word                      → dist/Plantillas-Clinicas-<versión>.docx
    npm run word -- otra/ruta.docx

  El documento editado se vuelve a pasar a la app con scripts/importar-word.mjs.
*/
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import * as D from 'docx';
import { validar } from './validar.mjs';
import { CABECERAS, ETIQUETAS, limpiarTexto, ordenar, textoAmbito, textoCorto } from './word-comun.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const pkg = JSON.parse(readFileSync(join(RAIZ, 'package.json'), 'utf8'));

const r = validar();
if (r.errores.length) {
  console.error('✖ El contenido tiene errores; corrígelos antes de exportar:');
  r.errores.forEach((e) => console.error('  - ' + e));
  process.exit(1);
}
const { config, plantillas } = r;
const salida = resolve(process.argv[2] || join(RAIZ, 'dist', `Plantillas-Clinicas-${pkg.version}.docx`));

// ---------------------------------------------------------------- aspecto
const FUENTE = 'Calibri';
const ANCHO = 11906 - 2 * 1134;            // A4 con márgenes de 2 cm
const COL1 = 1600;
const COL2 = ANCHO - COL1;
const GRIS = '475569';
const BORDE = 'CBD5E1';
const COLORES = {
  general: ['1E6B5C', 'DFEEE9'],
  pediatria: ['B4235A', 'FBE3EC'],
  traumatologia: ['A34E00', 'FBEADA'],
  oftalmologia: ['2C45C9', 'E3E7FA']
};
const color = (cat) => (COLORES[cat] || ['1F2937', 'EEF2F7']);

const fecha = new Intl.DateTimeFormat('es-ES', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Madrid' }).format(new Date());

const texto = (t, opc = {}) => new D.TextRun({ text: t, font: FUENTE, ...opc });
const parrafo = (hijos, opc = {}) => new D.Paragraph({ children: Array.isArray(hijos) ? hijos : [hijos], ...opc });

// Una línea de plantilla, con los campos {{...}} resaltados
function runsLinea(linea) {
  const partes = linea.split(/(\{\{[^{}]*\}\})/).filter((x) => x !== '');
  if (!partes.length) return [texto('')];
  return partes.map((x) => (/^\{\{/.test(x) ? texto(x, { color: '1D4ED8' }) : texto(x)));
}

function parrafosTexto(t, keepNext) {
  const limpio = limpiarTexto(t);
  if (!limpio) return [parrafo(texto(''), { style: 'TextoPlantilla', keepNext })];
  return limpio.split('\n').map((l) => parrafo(runsLinea(l), { style: 'TextoPlantilla', keepNext }));
}

const sombra = (fill) => ({ type: D.ShadingType.CLEAR, color: 'auto', fill });

function celda(hijos, ancho, opc = {}) {
  return new D.TableCell({
    width: { size: ancho, type: D.WidthType.DXA },
    children: hijos,
    ...opc
  });
}

const valor = (t, opc = {}) => (k) => [parrafo(texto(textoCorto(t), opc), { style: 'Celda', keepNext: k })];

/* Cada fila se describe primero y se construye después, para poder marcar
   «conservar con el siguiente» en todas menos la última: así una plantilla que
   cabe en una página no se parte entre dos. */
function tablaPlantilla(p, cat) {
  const [, suave] = color(cat.id);
  const filas = [];
  const campo = (etiqueta, contenido, fondo) => filas.push({ etiqueta, contenido, fondo });

  campo(ETIQUETAS.id, (k) => [parrafo(texto(p.id, { font: 'Consolas', size: 18, color: '64748B' }), { style: 'Celda', keepNext: k })]);
  if ((cat.ambitos || []).length) campo(ETIQUETAS.ambito, valor(textoAmbito(p, cat)));
  campo(ETIQUETAS.etiquetas, valor(p.etiquetas, { color: GRIS }));
  campo(ETIQUETAS.nota, valor(p.nota));
  campo(ETIQUETAS.revisar, valor(p.revisar, { color: '7A5200' }), textoCorto(p.revisar) ? 'FFF4D6' : null);
  campo(ETIQUETAS.enlaces, Array.isArray(p.enlaces) && p.enlaces.length
    ? (k) => p.enlaces.map((e) => parrafo([
      texto(textoCorto(e.titulo || e.url)),
      texto(' — '),
      new D.ExternalHyperlink({ link: e.url, children: [texto(e.url, { style: 'Hyperlink', size: 18 })] })
    ], { style: 'Celda', keepNext: k }))
    : valor(''));
  if (p.ejemplo) campo(ETIQUETAS.ejemplo, valor('sí'));
  for (const [clave, cabecera] of Object.entries(CABECERAS)) {
    filas.push({ cabecera });
    filas.push({ clave });
  }

  const rows = filas.map((f, i) => {
    const k = i < filas.length - 1;
    if (f.cabecera) {
      return new D.TableRow({
        children: [celda([parrafo(texto(f.cabecera, { bold: true, size: 18, color: GRIS }), { style: 'Celda', keepNext: true })], ANCHO,
          { columnSpan: 2, shading: sombra(suave) })]
      });
    }
    if (f.clave) return new D.TableRow({ children: [celda(parrafosTexto(p[f.clave], k), ANCHO, { columnSpan: 2 })] });
    return new D.TableRow({
      children: [
        celda([parrafo(texto(f.etiqueta, { bold: true, color: GRIS, size: 18 }), { style: 'Celda', keepNext: k })], COL1, { shading: sombra('F1F5F9') }),
        celda(f.contenido(k), COL2, f.fondo ? { shading: sombra(f.fondo) } : {})
      ]
    });
  });

  return new D.Table({
    width: { size: ANCHO, type: D.WidthType.DXA },
    columnWidths: [COL1, COL2],
    layout: D.TableLayoutType.FIXED,
    margins: { top: 50, bottom: 50, left: 100, right: 100 },
    borders: Object.fromEntries(['top', 'bottom', 'left', 'right', 'insideHorizontal', 'insideVertical']
      .map((b) => [b, { style: D.BorderStyle.SINGLE, size: 4, color: BORDE }])),
    rows
  });
}

// ---------------------------------------------------------------- contenido
const arbol = ordenar(plantillas, config);
const marcas = new Map();   // clave → id de marcador para el índice
let nMarca = 0;
const marca = (clave) => { if (!marcas.has(clave)) marcas.set(clave, `m${++nMarca}`); return marcas.get(clave); };

const cuerpo = [];
for (const { cat, tipos } of arbol) {
  const [fuerte] = color(cat.id);
  const total = tipos.reduce((n, t) => n + t.grupos.reduce((m, g) => m + g.plantillas.length, 0), 0);
  if (!total) continue;
  cuerpo.push(new D.Paragraph({
    heading: D.HeadingLevel.HEADING_1,
    children: [new D.Bookmark({ id: marca(cat.id), children: [texto(cat.nombre, { color: fuerte })] })]
  }));
  for (const { tipo, grupos } of tipos) {
    if (!grupos.length) continue;
    cuerpo.push(new D.Paragraph({
      heading: D.HeadingLevel.HEADING_2,
      children: [new D.Bookmark({ id: marca(`${cat.id}|${tipo.id}`), children: [texto(tipo.nombre)] })]
    }));
    for (const g of grupos) {
      cuerpo.push(new D.Paragraph({
        heading: D.HeadingLevel.HEADING_3,
        children: [new D.Bookmark({ id: marca(`${cat.id}|${tipo.id}|${g.nombre}`), children: [texto(g.nombre, { color: fuerte })] })]
      }));
      for (const p of g.plantillas) {
        cuerpo.push(new D.Paragraph({ heading: D.HeadingLevel.HEADING_4, children: [texto(textoCorto(p.titulo))] }));
        cuerpo.push(tablaPlantilla(p, cat));
      }
    }
  }
}

// ---------------------------------------------------------------- portada, instrucciones e índice
const nRevisar = plantillas.filter((p) => textoCorto(p.revisar)).length;
const nCatalan = plantillas.filter((p) => limpiarTexto(p.texto_ca)).length;
const apartado = (t) => parrafo(texto(t), { style: 'Apartado' });
const vineta = (hijos) => parrafo(hijos, { style: 'Celda', numbering: { reference: 'vinetas', level: 0 }, spacing: { after: 60 } });
const b = (t) => texto(t, { bold: true });
const codigo = (t) => texto(t, { font: 'Consolas', size: 19, color: '1D4ED8' });

const resumen = new D.Table({
  width: { size: ANCHO, type: D.WidthType.DXA },
  columnWidths: [ANCHO - 3 * 1700, 1700, 1700, 1700],
  layout: D.TableLayoutType.FIXED,
  margins: { top: 60, bottom: 60, left: 100, right: 100 },
  borders: Object.fromEntries(['top', 'bottom', 'left', 'right', 'insideHorizontal', 'insideVertical']
    .map((x) => [x, { style: D.BorderStyle.SINGLE, size: 4, color: BORDE }])),
  rows: [
    ['Categoría', ...config.tipos.map((t) => t.nombre), 'Total'],
    ...arbol.map(({ cat, tipos }) => {
      const n = tipos.map((t) => t.grupos.reduce((m, g) => m + g.plantillas.length, 0));
      return [cat.nombre, ...n.map(String), String(n.reduce((a, x) => a + x, 0))];
    }),
    ['Total', ...config.tipos.map((t) => String(plantillas.filter((p) => p.tipo === t.id).length)), String(plantillas.length)]
  ].map((celdas, i, todas) => new D.TableRow({
    children: celdas.map((c, j) => celda([parrafo(texto(c, { bold: i === 0 || i === todas.length - 1 }),
      { style: 'Celda', alignment: j ? D.AlignmentType.RIGHT : D.AlignmentType.LEFT })], j ? 1700 : ANCHO - 3 * 1700,
    i === 0 ? { shading: sombra('F1F5F9') } : {}))
  }))
});

const sintaxis = [
  ['{{TA}}', 'Campo libre. Si se deja vacío, se copia ___.'],
  ['{{FC=80}}', 'Campo libre con valor por defecto.'],
  ['{{Ojo|OD|OI|AO}}', 'Desplegable. Sin elegir se copia OD/OI/AO (con más de 4 opciones, ___).'],
  ['{{Lado|*derecho|izquierdo}}', 'Desplegable con la opción marcada con * por defecto.']
];
const tablaSintaxis = new D.Table({
  width: { size: ANCHO, type: D.WidthType.DXA },
  columnWidths: [3400, ANCHO - 3400],
  layout: D.TableLayoutType.FIXED,
  margins: { top: 60, bottom: 60, left: 100, right: 100 },
  borders: Object.fromEntries(['top', 'bottom', 'left', 'right', 'insideHorizontal', 'insideVertical']
    .map((x) => [x, { style: D.BorderStyle.SINGLE, size: 4, color: BORDE }])),
  rows: [['Escribe', 'En la app'], ...sintaxis].map((f, i) => new D.TableRow({
    children: [
      celda([parrafo(i ? codigo(f[0]) : texto(f[0], { bold: true }), { style: 'Celda' })], 3400, i ? {} : { shading: sombra('F1F5F9') }),
      celda([parrafo(texto(f[1], { bold: !i }), { style: 'Celda' })], ANCHO - 3400, i ? {} : { shading: sombra('F1F5F9') })
    ]
  }))
});

const indice = [];
for (const { cat, tipos } of arbol) {
  const [fuerte] = color(cat.id);
  const total = tipos.reduce((n, t) => n + t.grupos.reduce((m, g) => m + g.plantillas.length, 0), 0);
  if (!total) continue;
  indice.push(parrafo([new D.InternalHyperlink({ anchor: marca(cat.id), children: [texto(`${cat.nombre}`, { bold: true, color: fuerte, size: 24 })] }),
    texto(`  ${total}`, { color: GRIS })], { spacing: { before: 200, after: 60 }, keepNext: true }));
  for (const { tipo, grupos } of tipos) {
    if (!grupos.length) continue;
    const hijos = [new D.InternalHyperlink({ anchor: marca(`${cat.id}|${tipo.id}`), children: [texto(tipo.nombre, { bold: true })] }), texto(':  ')];
    grupos.forEach((g, i) => {
      if (i) hijos.push(texto('  ·  ', { color: '94A3B8' }));
      hijos.push(new D.InternalHyperlink({ anchor: marca(`${cat.id}|${tipo.id}|${g.nombre}`), children: [texto(g.nombre, { style: 'Hyperlink' })] }));
      hijos.push(texto(` ${g.plantillas.length}`, { color: '94A3B8', size: 17 }));
    });
    indice.push(parrafo(hijos, { style: 'Celda', indent: { left: 280 }, spacing: { after: 80 } }));
  }
}

const portada = [
  parrafo(texto('Plantillas Clínicas'), { style: 'Portada' }),
  parrafo(texto(`Contenido de la app · versión ${pkg.version} · ${fecha}`), { style: 'Subtitulo' }),
  parrafo(texto(`${plantillas.length} plantillas, tal como las copia la app. ${nCatalan} tienen versión en catalán y ${nRevisar} tienen observaciones pendientes de revisar (casilla «Revisar» en amarillo).`), { spacing: { after: 200 } }),
  resumen,
  apartado('Cómo editar'),
  vineta([texto('Cada plantilla es un '), b('título'), texto(' y una '), b('tabla'), texto('. Lo que hay en el recuadro «Texto en castellano» o «Texto en català» es exactamente lo que la app copia.')]),
  vineta([b('Modificar: '), texto('cambia el título, el texto o cualquier casilla. Cada línea del texto es un párrafo. Escribe los guiones («- ») y los números a mano; si Word los convierte en viñetas automáticas, no pasa nada.')]),
  vineta([b('ID: '), texto('no lo cambies. La app lo usa para recordar los favoritos.')]),
  vineta([b('Añadir: '), texto('copia una plantilla entera (título y tabla), pégala bajo el grupo que toque y escribe '), codigo('nueva'), texto(' en el ID.')]),
  vineta([b('Mover: '), texto('corta y pega el título y la tabla bajo otra categoría, pestaña o grupo. Para crear un grupo, escribe su nombre con el estilo «Título 3».')]),
  vineta([b('Eliminar: '), texto('borra el título y la tabla.')]),
  vineta([b('Catalán: '), texto('rellena el recuadro «Texto en català» con los mismos nombres de campo que en castellano, para que lo escrito se conserve al cambiar de idioma.')]),
  vineta([b('Nota: '), texto('se ve en la app pero no se copia. '), b('Revisar: '), texto('cuando el equipo valide la observación, vacía la casilla y corrige el texto si hace falta. '), b('Enlaces: '), texto('uno por línea, «Título — dirección».')]),
  vineta([b('Ámbito '), texto('(solo Medicina general): Familia, Urgencias o Familia y Urgencias.')]),
  vineta([texto('Activa '), b('Revisar → Control de cambios'), texto(' para que se vea qué se ha cambiado. Al terminar, envía el documento: los cambios se comprueban y se pasan a la app.')]),
  apartado('Campos rellenables'),
  tablaSintaxis,
  parrafo(texto('Usa el mismo nombre de campo en las dos versiones de idioma. Las llaves {{ }} no pueden ocupar varias líneas.', { color: GRIS, size: 19 }), { spacing: { before: 80 } }),
  parrafo(new D.PageBreak()),
  apartado('Índice'),
  ...indice
];

// ---------------------------------------------------------------- documento
const cabecera = (fuerte) => new D.Header({
  children: [parrafo([texto(`Plantillas Clínicas · contenido v${pkg.version}`, { color: '94A3B8', size: 16 })], { alignment: D.AlignmentType.RIGHT })]
});
const pie = new D.Footer({
  children: [parrafo([new D.TextRun({ font: FUENTE, size: 16, color: '94A3B8', children: ['Página ', D.PageNumber.CURRENT, ' de ', D.PageNumber.TOTAL_PAGES] })], { alignment: D.AlignmentType.CENTER })]
});

const encabezado = (size, color, before, after, extra = {}) => ({
  run: { font: FUENTE, size, bold: true, color },
  paragraph: { spacing: { before, after }, keepNext: true, keepLines: true, ...extra }
});

const doc = new D.Document({
  creator: 'Plantillas Clínicas',
  title: `Plantillas Clínicas · contenido ${pkg.version}`,
  description: 'Plantillas de la app para revisar y editar. Se vuelve a importar con scripts/importar-word.mjs.',
  styles: {
    default: {
      document: { run: { font: FUENTE, size: 21 }, paragraph: { spacing: { after: 80, line: 264 } } },
      heading1: encabezado(36, '1F2937', 0, 200, { pageBreakBefore: true }),
      heading2: encabezado(28, '1F2937', 360, 120),
      heading3: encabezado(24, '1F2937', 320, 100, { border: { bottom: { style: D.BorderStyle.SINGLE, size: 6, color: BORDE, space: 2 } } }),
      heading4: encabezado(21, '111827', 260, 80)
    },
    paragraphStyles: [
      { id: 'Portada', name: 'Portada', basedOn: 'Normal', next: 'Normal', run: { font: FUENTE, size: 56, bold: true, color: '1E6B5C' }, paragraph: { spacing: { before: 1200, after: 120 } } },
      { id: 'Subtitulo', name: 'Subtítulo portada', basedOn: 'Normal', next: 'Normal', run: { font: FUENTE, size: 26, color: GRIS }, paragraph: { spacing: { after: 360 } } },
      { id: 'Apartado', name: 'Apartado', basedOn: 'Normal', next: 'Normal', run: { font: FUENTE, size: 28, bold: true, color: '1F2937' }, paragraph: { spacing: { before: 400, after: 140 }, keepNext: true } },
      { id: 'Celda', name: 'Celda', basedOn: 'Normal', next: 'Celda', run: { font: FUENTE, size: 20 }, paragraph: { spacing: { before: 0, after: 20, line: 252 } } },
      { id: 'TextoPlantilla', name: 'Texto de plantilla', basedOn: 'Normal', next: 'TextoPlantilla', run: { font: FUENTE, size: 21 }, paragraph: { spacing: { before: 0, after: 30, line: 264 } } }
    ]
  },
  numbering: {
    config: [{
      reference: 'vinetas',
      levels: [{ level: 0, format: D.LevelFormat.BULLET, text: '•', alignment: D.AlignmentType.LEFT, style: { paragraph: { indent: { left: 360, hanging: 240 } } } }]
    }]
  },
  sections: [{
    properties: {
      page: { size: { width: 11906, height: 16838 }, margin: { top: 1134, right: 1134, bottom: 1134, left: 1134, header: 567, footer: 567 } },
      titlePage: true
    },
    headers: { default: cabecera(), first: new D.Header({ children: [parrafo(texto(''))] }) },
    footers: { default: pie, first: new D.Footer({ children: [parrafo(texto(''))] }) },
    children: [...portada, ...cuerpo]
  }]
});

mkdirSync(dirname(salida), { recursive: true });
writeFileSync(salida, await D.Packer.toBuffer(doc));
console.log(`✔ Word con ${plantillas.length} plantillas: ${salida}`);
