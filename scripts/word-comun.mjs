/*
  Utilidades compartidas por exportar-word.mjs e importar-word.mjs.
  El Word de plantillas tiene esta estructura, que el importador espera:

    Título 1   categoría       (nombre de PLANTILLAS_CONFIG.categorias)
    Título 2   pestaña         (Exploraciones / Tratamientos)
    Título 3   grupo
    Título 4   título de la plantilla, seguido de su tabla:
               ID · Ámbito · Etiquetas · Nota · Revisar · Enlaces · Ejemplo
               «Texto en castellano» + recuadro con el texto
               «Texto en català» + recuadro con el texto
*/

export const ETIQUETAS = {
  id: 'ID',
  ambito: 'Ámbito',
  etiquetas: 'Etiquetas',
  nota: 'Nota',
  revisar: 'Revisar',
  enlaces: 'Enlaces',
  ejemplo: 'Ejemplo'
};

export const CABECERAS = {
  texto: 'Texto en castellano',
  texto_ca: 'Texto en català'
};

// Prefijo del id de las plantillas nuevas, por categoría
export const PREFIJOS = { general: 'mg', pediatria: 'pe', traumatologia: 'tr', oftalmologia: 'of' };

export const norm = (s) => String(s == null ? '' : s).normalize('NFD').replace(/[̀-ͯ]/g, '')
  .toLowerCase().replace(/\s+/g, ' ').trim();

// Igual que limpiarTexto() de www/js/app.js: lo que la app copia de verdad
export function limpiarTexto(t) {
  const lineas = String(t == null ? '' : t).replace(/\r\n?/g, '\n').split('\n');
  while (lineas.length && !lineas[0].trim()) lineas.shift();
  while (lineas.length && !lineas[lineas.length - 1].trim()) lineas.pop();
  let min = Infinity;
  lineas.forEach((l) => { if (l.trim()) min = Math.min(min, l.match(/^[ \t]*/)[0].length); });
  if (!isFinite(min)) min = 0;
  return lineas.map((l) => l.slice(min).replace(/[ \t]+$/, '')).join('\n');
}

export const textoCorto = (s) => String(s == null ? '' : s).replace(/\s+/g, ' ').trim();

export function ambitosLista(p) {
  return p.ambito == null ? [] : (Array.isArray(p.ambito) ? p.ambito : [p.ambito]);
}

export function textoAmbito(p, cat) {
  const ids = ambitosLista(p);
  const nombres = (cat.ambitos || []).filter((a) => ids.includes(a.id)).map((a) => a.nombre);
  return nombres.join(' y ');
}

export function ambitoDesdeTexto(texto, cat) {
  const t = norm(texto);
  return (cat.ambitos || []).filter((a) => t.includes(norm(a.nombre)) || t.split(/[^a-z]+/).includes(a.id)).map((a) => a.id);
}

/* Agrupa las plantillas en el orden del Word: categoría → pestaña → grupo (por orden de
   aparición) → plantilla (por orden en los archivos). */
export function ordenar(plantillas, config) {
  return config.categorias.map((cat) => ({
    cat,
    tipos: config.tipos.map((tipo) => {
      const grupos = [];
      plantillas.filter((p) => p.categoria === cat.id && p.tipo === tipo.id).forEach((p) => {
        const nombre = textoCorto(p.grupo) || 'Sin grupo';
        let g = grupos.find((x) => x.nombre === nombre);
        if (!g) grupos.push(g = { nombre, plantillas: [] });
        g.plantillas.push(p);
      });
      return { tipo, grupos };
    })
  }));
}

// Forma comparable de una plantilla (lo que importa para la app)
export function comparable(p) {
  const c = {
    id: p.id,
    categoria: p.categoria,
    tipo: p.tipo,
    ambito: ambitosLista(p).slice().sort(),
    grupo: textoCorto(p.grupo),
    titulo: textoCorto(p.titulo),
    etiquetas: textoCorto(p.etiquetas),
    nota: textoCorto(p.nota),
    revisar: textoCorto(p.revisar),
    enlaces: (Array.isArray(p.enlaces) ? p.enlaces : []).map((e) => ({ titulo: textoCorto(e.titulo || e.url), url: String(e.url).trim() })),
    ejemplo: !!p.ejemplo,
    texto: limpiarTexto(p.texto),
    texto_ca: limpiarTexto(p.texto_ca)
  };
  return c;
}
