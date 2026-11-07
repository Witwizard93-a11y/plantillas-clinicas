/* =====================================================================
   Plantillas Clínicas · lógica de la aplicación
   Sin dependencias externas. El mismo código funciona como web/PWA,
   dentro de Electron (Windows) y dentro de Capacitor (Android).
   El contenido está en la carpeta plantillas/ (un archivo por especialidad).
   ===================================================================== */
(function () {
  'use strict';

  var VERSION_APP = '1.1.0';
  var CFG = window.PLANTILLAS_CONFIG || {};
  var CATS = Array.isArray(CFG.categorias) ? CFG.categorias : [];
  var TIPOS = Array.isArray(CFG.tipos) ? CFG.tipos : [];
  var ENTORNO = window.PC_ENTORNO || 'app'; // 'vista-previa' en la versión publicada como artefacto
  var VISTA_FAV = 'favoritos';
  var IDIOMAS = [{ id: 'es', nombre: 'Castellano', corto: 'ES' }, { id: 'ca', nombre: 'Català', corto: 'CA' }];

  if (!CATS.length) CATS = [{ id: 'general', nombre: 'Medicina general', corto: 'General', ambitos: [] }];
  if (!TIPOS.length) TIPOS = [{ id: 'exploracion', nombre: 'Exploraciones', singular: 'Exploración' }, { id: 'tratamiento', nombre: 'Tratamientos', singular: 'Tratamiento' }];
  CATS.forEach(function (c) { if (!Array.isArray(c.ambitos)) c.ambitos = []; });

  /* ------------------------------------------------------------------ */
  /* Utilidades                                                          */
  /* ------------------------------------------------------------------ */

  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }

  var ESCAPES = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return ESCAPES[c]; }); }

  function norm(s) {
    return String(s == null ? '' : s).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  }
  function slug(s) {
    return norm(s).replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 70) || 'plantilla';
  }
  function nuevoId() {
    return 'u-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
  }
  function catDe(id) { for (var i = 0; i < CATS.length; i++) if (CATS[i].id === id) return CATS[i]; return null; }
  function tipoDe(id) { for (var i = 0; i < TIPOS.length; i++) if (TIPOS[i].id === id) return TIPOS[i]; return null; }
  function idiomaInfo(id) { for (var i = 0; i < IDIOMAS.length; i++) if (IDIOMAS[i].id === id) return IDIOMAS[i]; return IDIOMAS[0]; }
  function nombreAmbito(catId, ambId) {
    var c = catDe(catId);
    if (!c) return ambId;
    for (var i = 0; i < c.ambitos.length; i++) if (c.ambitos[i].id === ambId) return c.ambitos[i].nombre;
    return ambId;
  }
  function esVistaValida(v) { return v === VISTA_FAV || !!catDe(v); }
  function indicePorId(lista, id) { for (var i = 0; i < lista.length; i++) if (lista[i] && lista[i].id === id) return i; return -1; }
  function plural(n, uno, varios) { return n + ' ' + (n === 1 ? uno : varios); }
  function cssEsc(s) { return String(s).replace(/["\\]/g, '\\$&'); }

  var mqAncho = window.matchMedia ? window.matchMedia('(min-width: 960px)') : { matches: false };
  var mqOscuro = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : { matches: false };
  function esAncho() { return mqAncho.matches; }
  function escuchar(mq, fn) {
    if (!mq) return;
    if (mq.addEventListener) mq.addEventListener('change', fn);
    else if (mq.addListener) mq.addListener(fn);
  }

  function esCapacitor() {
    var C = window.Capacitor;
    return !!(C && typeof C.isNativePlatform === 'function' && C.isNativePlatform());
  }
  function esElectron() {
    return !!(window.plantillasNative && window.plantillasNative.plataforma === 'electron');
  }

  /* ------------------------------------------------------------------ */
  /* Iconos (SVG en línea, sin peticiones externas)                     */
  /* ------------------------------------------------------------------ */

  var ICONOS = {
    copiar: '<rect x="8.5" y="8.5" width="11.5" height="11.5" rx="2.5"/><path d="M15.5 8.5V6.5A2.5 2.5 0 0 0 13 4H6.5A2.5 2.5 0 0 0 4 6.5V13a2.5 2.5 0 0 0 2.5 2.5h2"/>',
    hecho: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
    buscar: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="M20 20l-4.8-4.8"/>',
    estrella: '<path d="M12 3.6l2.6 5.3 5.8.85-4.2 4.1 1 5.8L12 16.9l-5.2 2.75 1-5.8-4.2-4.1 5.8-.85z"/>',
    ajustes: '<path d="M4 7h9M17.4 7H20M4 17h2.6M11 17h9"/><circle cx="15.2" cy="7" r="2.2"/><circle cx="8.8" cy="17" r="2.2"/>',
    atras: '<path d="M14.5 5.5L8 12l6.5 6.5"/>',
    cerrar: '<path d="M6.5 6.5l11 11M17.5 6.5l-11 11"/>',
    editar: '<path d="M4.5 19.5h3.8L18.6 9.2a2.7 2.7 0 0 0-3.8-3.8L4.5 15.7v3.8z"/><path d="M13.5 6.7l3.8 3.8"/>',
    mas: '<path d="M12 5v14M5 12h14"/>',
    duplicar: '<rect x="8.5" y="8.5" width="11.5" height="11.5" rx="2.5"/><path d="M15.5 8.5V6.5A2.5 2.5 0 0 0 13 4H6.5A2.5 2.5 0 0 0 4 6.5V13a2.5 2.5 0 0 0 2.5 2.5h2"/><path d="M14.25 11.75v5M11.75 14.25h5"/>',
    general: '<path d="M6 3.5v4a3.5 3.5 0 0 0 7 0v-4"/><path d="M9.5 11v3a4.5 4.5 0 0 0 9 0v-2.3"/><circle cx="18.5" cy="9.6" r="2.1"/>',
    pediatria: '<path d="M9 12h.01M15 12h.01"/><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"/><path d="M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"/>',
    traumatologia: '<path d="M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5z"/>',
    oftalmologia: '<path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="3.2"/>',
    favoritos: '<path d="M12 3.6l2.6 5.3 5.8.85-4.2 4.1 1 5.8L12 16.9l-5.2 2.75 1-5.8-4.2-4.1 5.8-.85z"/>',
    importar: '<path d="M12 4v10.5M7.5 10L12 14.5 16.5 10"/><path d="M4.5 15.5V18a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-2.5"/>',
    exportar: '<path d="M12 14.5V4M7.5 8.5L12 4l4.5 4.5"/><path d="M4.5 15.5V18a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2v-2.5"/>',
    papelera: '<path d="M4.5 7h15M10 11v6M14 11v6"/><path d="M6.5 7l.8 11.2a2 2 0 0 0 2 1.8h5.4a2 2 0 0 0 2-1.8L17.5 7"/><path d="M9.5 7V5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2"/>',
    restaurar: '<path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3"/><path d="M4.5 4.5v4h4"/>',
    ocultar: '<path d="M3.5 3.5l17 17"/><path d="M10.4 6.1A9 9 0 0 1 12 6c6 0 9.5 6 9.5 6a16.8 16.8 0 0 1-3.1 3.7M6.4 7.5A16.3 16.3 0 0 0 2.5 12s3.5 6 9.5 6a8.8 8.8 0 0 0 3.8-.8"/><path d="M9.9 9.9a3 3 0 0 0 4.2 4.2"/>',
    instalar: '<rect x="6" y="3" width="12" height="18" rx="2.5"/><path d="M12 7.5v6M9.5 11.2L12 13.7l2.5-2.5M10 17.5h4"/>',
    aviso: '<path d="M12 4.5l8.5 15h-17z"/><path d="M12 10v4.2M12 17h.01"/>',
    info: '<circle cx="12" cy="12" r="8.5"/><path d="M12 11v5M12 8h.01"/>',
    enlace: '<path d="M14 5h5v5M19 5l-8 8"/><path d="M17 13.5V18a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 5 18V9a1.5 1.5 0 0 1 1.5-1.5H11"/>'
  };

  var MARCA_SVG =
    '<svg viewBox="0 0 48 48" aria-hidden="true">' +
    '<rect width="48" height="48" rx="12" fill="#1E6B5C"/>' +
    '<rect x="17.5" y="9" width="19" height="25" rx="3.5" fill="#8FCBBC"/>' +
    '<rect x="11.5" y="13.5" width="19" height="25" rx="3.5" fill="#FFFFFF"/>' +
    '<path d="M16 20.5h10M16 25.5h10M16 30.5h6" stroke="#1E6B5C" stroke-width="2.3" stroke-linecap="round"/>' +
    '<circle cx="34" cy="34" r="6.5" fill="#C8EC3F" stroke="#1E6B5C" stroke-width="2"/>' +
    '<path d="M31.3 34.1l1.9 1.9 3.6-3.7" fill="none" stroke="#1B2600" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
    '</svg>';

  function icono(nombre, clase) {
    return '<svg class="icono' + (clase ? ' ' + clase : '') + '" viewBox="0 0 24 24" aria-hidden="true" focusable="false">' + (ICONOS[nombre] || ICONOS.general) + '</svg>';
  }
  function iconoCat(c) { return c && c.icono && ICONOS[c.icono] ? c.icono : (c && ICONOS[c.id] ? c.id : 'general'); }

  /* ------------------------------------------------------------------ */
  /* Almacenamiento local (con respaldo en memoria si no está disponible) */
  /* ------------------------------------------------------------------ */

  var memoria = {};
  var hayAlmacen = (function () {
    try { var k = '__pc_prueba'; localStorage.setItem(k, '1'); localStorage.removeItem(k); return true; } catch (e) { return false; }
  })();
  function leer(clave, porDefecto) {
    var crudo = null;
    if (Object.prototype.hasOwnProperty.call(memoria, clave)) crudo = memoria[clave];
    else if (hayAlmacen) { try { crudo = localStorage.getItem('pc.' + clave); } catch (e) { crudo = null; } }
    if (crudo == null) return porDefecto;
    try { return JSON.parse(crudo); } catch (e) { return porDefecto; }
  }
  function guardar(clave, valor) {
    var crudo = JSON.stringify(valor);
    if (hayAlmacen) {
      try { localStorage.setItem('pc.' + clave, crudo); delete memoria[clave]; return true; } catch (e) { /* cupo lleno o bloqueado */ }
    }
    memoria[clave] = crudo;
    return false;
  }

  /* ------------------------------------------------------------------ */
  /* Plantillas: normalización y campos rellenables                     */
  /* ------------------------------------------------------------------ */

  // {{Etiqueta}}  {{Etiqueta=valor por defecto}}  {{Etiqueta|opción 1|*opción por defecto|opción 3}}
  var RE_CAMPO = /\{\{\s*([^{}|]+?)\s*(?:\|([^{}]*))?\}\}/g;

  function limpiarTexto(t) {
    var lineas = String(t == null ? '' : t).replace(/\r\n?/g, '\n').split('\n');
    while (lineas.length && !lineas[0].trim()) lineas.shift();
    while (lineas.length && !lineas[lineas.length - 1].trim()) lineas.pop();
    var min = Infinity;
    lineas.forEach(function (l) {
      if (l.trim()) { var m = l.match(/^[ \t]*/)[0].length; if (m < min) min = m; }
    });
    if (!isFinite(min)) min = 0;
    return lineas.map(function (l) { return l.slice(min).replace(/[ \t]+$/, ''); }).join('\n');
  }

  function analizarCampo(etiquetaCruda, opcionesCrudas) {
    var etiqueta = String(etiquetaCruda).trim();
    var defecto = '';
    var opciones = [];
    if (opcionesCrudas == null) {
      var igual = etiqueta.indexOf('=');
      if (igual > 0) { defecto = etiqueta.slice(igual + 1).trim(); etiqueta = etiqueta.slice(0, igual).trim(); }
    } else {
      String(opcionesCrudas).split('|').forEach(function (o) {
        o = o.trim();
        if (!o) return;
        if (o.charAt(0) === '*' && o.length > 1) { o = o.slice(1).trim(); if (!defecto) defecto = o; }
        opciones.push(o);
      });
    }
    return { clave: norm(etiqueta), etiqueta: etiqueta, opciones: opciones, defecto: defecto };
  }

  function extraerCampos(texto) {
    var campos = [], vistos = {}, m;
    RE_CAMPO.lastIndex = 0;
    while ((m = RE_CAMPO.exec(texto))) {
      var c = analizarCampo(m[1], m[2]);
      var previo = vistos[c.clave];
      if (!previo) { vistos[c.clave] = c; campos.push(c); continue; }
      if (!previo.opciones.length && c.opciones.length) previo.opciones = c.opciones;
      if (!previo.defecto && c.defecto) previo.defecto = c.defecto;
    }
    return campos;
  }

  function campoEn(variante, clave) {
    for (var i = 0; i < variante.campos.length; i++) if (variante.campos[i].clave === clave) return variante.campos[i];
    return null;
  }

  // Valor que escribió la persona, si es válido para este campo (un desplegable de otro idioma no vale)
  function valorEscrito(campo, vals) {
    var v = vals && vals[campo.clave] != null ? String(vals[campo.clave]).trim() : '';
    if (v && campo.opciones.length && campo.opciones.indexOf(v) < 0) return '';
    return v;
  }
  // Desplegable sin elegir: las opciones cortas se copian juntas (OD/OI/AO); una lista larga, como ___
  function listaCorta(campo) {
    return campo.opciones.length > 0 && campo.opciones.length <= 4 && campo.opciones.join('/').length <= 40;
  }
  function valorFinal(campo, vals) {
    return valorEscrito(campo, vals) || campo.defecto || (listaCorta(campo) ? campo.opciones.join('/') : '___');
  }

  function idiomaDe(p) { return p.variantes[ajustes.idioma] ? ajustes.idioma : p.idiomas[0]; }
  function varianteDe(p) { return p.variantes[idiomaDe(p)]; }

  function rellenar(p, vals) {
    var vr = varianteDe(p);
    return vr.texto.replace(RE_CAMPO, function (_, et, ops) {
      var base = analizarCampo(et, ops);
      return valorFinal(campoEn(vr, base.clave) || base, vals);
    });
  }

  function limpiarEnlaces(lista) {
    if (!Array.isArray(lista)) return [];
    return lista.filter(function (e) { return e && typeof e.url === 'string' && /^https?:\/\//i.test(e.url); })
      .map(function (e) { return { titulo: String(e.titulo || e.url).trim(), url: e.url.trim() }; });
  }

  function normalizar(p, origen) {
    p = p || {};
    var c = catDe(p.categoria) || CATS[0];
    var t = tipoDe(p.tipo) || TIPOS[0];
    var amb = Array.isArray(p.ambito) ? p.ambito : (p.ambito ? [p.ambito] : []);
    amb = amb.map(norm).filter(function (a, i, arr) {
      return arr.indexOf(a) === i && c.ambitos.some(function (x) { return x.id === a; });
    });
    var titulo = String(p.titulo == null ? '' : p.titulo).trim() || 'Sin título';
    var es = limpiarTexto(p.texto), ca = limpiarTexto(p.texto_ca);
    var variantes = {}, idiomas = [];
    if (es) { variantes.es = { texto: es, campos: extraerCampos(es) }; idiomas.push('es'); }
    if (ca) { variantes.ca = { texto: ca, campos: extraerCampos(ca) }; idiomas.push('ca'); }
    if (!idiomas.length) { variantes.es = { texto: '', campos: [] }; idiomas.push('es'); }
    var etiquetas = Array.isArray(p.etiquetas) ? p.etiquetas.join(' ') : String(p.etiquetas == null ? '' : p.etiquetas);
    var q = {
      id: p.id ? String(p.id) : null,
      categoria: c.id,
      tipo: t.id,
      ambito: amb,
      grupo: String(p.grupo == null ? '' : p.grupo).trim(),
      titulo: titulo,
      etiquetas: etiquetas.trim(),
      texto: es,
      texto_ca: ca,
      variantes: variantes,
      idiomas: idiomas,
      nota: limpiarTexto(p.nota),
      revisar: String(p.revisar == null ? '' : p.revisar).trim(),
      ejemplo: !!p.ejemplo,
      enlaces: limpiarEnlaces(p.enlaces),
      origen: origen
    };
    q._tit = norm(titulo);
    q._meta = norm(q.etiquetas + ' ' + q.grupo + ' ' + amb.map(function (a) { return nombreAmbito(c.id, a); }).join(' '));
    q._busca = norm([
      titulo, q.etiquetas, q.grupo,
      es.replace(RE_CAMPO, ' $1 $2 '), ca.replace(RE_CAMPO, ' $1 $2 '), q.nota,
      q.enlaces.map(function (e) { return e.titulo; }).join(' '),
      c.nombre, t.nombre, q._meta,
      q.revisar ? 'revisar' : '', q.ejemplo ? 'ejemplo' : '', ca ? 'catala catalan' : ''
    ].join(' '));
    return q;
  }

  /* ------------------------------------------------------------------ */
  /* Datos                                                               */
  /* ------------------------------------------------------------------ */

  var base = [];     // plantillas incluidas en la app
  var todas = [];    // las que se muestran (base + propias, sin ocultas)
  var indice = {};   // id -> plantilla
  var favoritos = leer('favoritos', []);
  if (!Array.isArray(favoritos)) favoritos = [];

  function prepararBase() {
    var usados = {};
    base = (Array.isArray(window.PLANTILLAS) ? window.PLANTILLAS : []).map(function (p) {
      var n = normalizar(p, 'base');
      var id = n.id || (n.categoria + '-' + n.tipo + '-' + slug(n.titulo));
      if (usados[id]) {
        if (window.console) console.warn('Plantillas: identificador repetido, revisa la carpeta plantillas/ ->', id);
        var k = 2;
        while (usados[id + '-' + k]) k++;
        id = id + '-' + k;
      }
      usados[id] = true;
      n.id = id;
      return n;
    });
  }

  function leerPropias() { var l = leer('propias', []); return Array.isArray(l) ? l : []; }
  function leerOcultas() { var l = leer('ocultas', []); return Array.isArray(l) ? l : []; }

  function recargar() {
    var mapa = {}, orden = [];
    base.forEach(function (p) { mapa[p.id] = p; orden.push(p.id); });
    leerPropias().forEach(function (l) {
      if (!l || !l.id) return;
      var n = normalizar(l, 'local');
      n.id = String(l.id);
      var previa = mapa[n.id];
      if (previa && previa.origen === 'base') { n.modificada = true; n.original = previa; }
      else { n.propia = true; if (!previa) orden.push(n.id); }
      mapa[n.id] = n;
    });
    var ocultas = {};
    leerOcultas().forEach(function (id) { ocultas[id] = true; });
    todas = [];
    indice = {};
    orden.forEach(function (id) {
      var p = mapa[id];
      indice[id] = p;
      if (!(ocultas[id] && (p.origen === 'base' || p.modificada))) todas.push(p);
    });
  }

  function contarOcultas() {
    var n = 0;
    leerOcultas().forEach(function (id) { if (indice[id]) n++; });
    return n;
  }
  function hayCambiosLocales() { return leerPropias().length > 0 || leerOcultas().length > 0; }
  function esFavorito(id) { return favoritos.indexOf(id) >= 0; }
  function favoritosValidos() {
    var set = {};
    favoritos.forEach(function (id) { set[id] = true; });
    return todas.filter(function (p) { return set[p.id]; });
  }

  /* ------------------------------------------------------------------ */
  /* Estado                                                              */
  /* ------------------------------------------------------------------ */

  var estado = {
    vista: CATS[0].id,
    tipo: TIPOS[0].id,
    ambito: 'todos',
    q: '',
    sel: null,
    detalleAbierto: false,
    editandoTexto: false,
    activo: -1
  };
  var valores = {};   // valores de los campos por plantilla: solo en memoria, nunca se guardan
  var visibles = [];  // plantillas listadas, en el orden de pantalla

  var ajustes = leer('ajustes', {});
  if (!ajustes || typeof ajustes !== 'object') ajustes = {};
  if (['auto', 'claro', 'oscuro'].indexOf(ajustes.tema) < 0) ajustes.tema = 'auto';
  if (['normal', 'grande', 'muy-grande'].indexOf(ajustes.letra) < 0) ajustes.letra = 'normal';
  if (['es', 'ca'].indexOf(ajustes.idioma) < 0) ajustes.idioma = 'es';

  function restaurarVista() {
    var v = leer('vista', null);
    if (v && typeof v === 'object') {
      if (esVistaValida(v.vista)) estado.vista = v.vista;
      if (tipoDe(v.tipo)) estado.tipo = v.tipo;
      if (typeof v.ambito === 'string') estado.ambito = v.ambito;
    }
    var m = /[?&]c=([a-z-]+)/.exec(location.search || '');
    if (m && esVistaValida(m[1])) estado.vista = m[1];
    var h = (location.hash || '').replace(/^#/, '');
    if (esVistaValida(h)) estado.vista = h;
  }
  function guardarVista() { guardar('vista', { vista: estado.vista, tipo: estado.tipo, ambito: estado.ambito }); }

  function ambitoEfectivo() {
    var c = catDe(estado.vista);
    if (!c || !c.ambitos.length) return 'todos';
    return c.ambitos.some(function (a) { return a.id === estado.ambito; }) ? estado.ambito : 'todos';
  }

  function enAmbito(p, amb) { return amb === 'todos' || !p.ambito.length || p.ambito.indexOf(amb) >= 0; }

  function contar(catId, tipoId, amb) {
    var n = 0;
    todas.forEach(function (p) {
      if (p.categoria === catId && (!tipoId || p.tipo === tipoId) && (!amb || enAmbito(p, amb))) n++;
    });
    return n;
  }

  function filtrarVista() {
    var amb = ambitoEfectivo();
    return todas.filter(function (p) { return p.categoria === estado.vista && p.tipo === estado.tipo && enAmbito(p, amb); });
  }

  function buscar(q) {
    var terminos = norm(q).split(/\s+/).filter(Boolean);
    if (!terminos.length) return [];
    var res = [];
    todas.forEach(function (p, orden) {
      for (var i = 0; i < terminos.length; i++) if (p._busca.indexOf(terminos[i]) < 0) return;
      var puntos = 0;
      terminos.forEach(function (t) {
        var pos = p._tit.indexOf(t);
        if (pos === 0) puntos += 6;
        else if (pos > 0) puntos += (p._tit.charAt(pos - 1) === ' ' ? 5 : 3);
        else if (p._meta.indexOf(t) >= 0) puntos += 2;
        else puntos += 1;
      });
      res.push({ p: p, puntos: puntos, orden: orden });
    });
    res.sort(function (a, b) { return b.puntos - a.puntos || a.orden - b.orden; });
    return res.map(function (r) { return r.p; });
  }

  /* ------------------------------------------------------------------ */
  /* Capas (detalle en móvil y ventanas) y botón Atrás                  */
  /* ------------------------------------------------------------------ */

  var pila = [];
  var pendiente = null;
  // En la vista previa (página incrustada) no se toca el historial: el botón Atrás es el de la página que la contiene.
  var usarHistorial = ENTORNO === 'app';

  function apilar(tipo, alCerrar) {
    var conHistoria = false;
    if (usarHistorial) {
      try { history.pushState({ pc: true, n: pila.length + 1 }, ''); conHistoria = true; } catch (e) { /* sin historial */ }
    }
    pila.push({ tipo: tipo, alCerrar: alCerrar, conHistoria: conHistoria });
  }

  function sincronizarPila(n) {
    while (pila.length > n) {
      var c = pila.pop();
      try { c.alCerrar(); } catch (e) { if (window.console) console.error(e); }
    }
    if (pendiente && pila.length <= pendiente.nivel) {
      var fn = pendiente.fn;
      pendiente = null;
      setTimeout(fn, 0);
    }
  }

  function cerrarHasta(nivel, despues) {
    nivel = Math.max(0, nivel || 0);
    var k = pila.length - nivel;
    if (k <= 0) { if (despues) setTimeout(despues, 0); return; }
    pendiente = despues ? { nivel: nivel, fn: despues } : null;
    var todasConHistoria = pila.slice(nivel).every(function (c) { return c.conHistoria; });
    if (!todasConHistoria) { sincronizarPila(nivel); return; }
    var antes = pila.length;
    try { history.go(-k); } catch (e) { sincronizarPila(nivel); return; }
    // Respaldo por si el navegador no devuelve el evento popstate.
    setTimeout(function () { if (pila.length === antes) sincronizarPila(nivel); }, 450);
  }

  function cerrarCapa(despues) { cerrarHasta(pila.length - 1, despues); }
  function cerrarTodo(despues) { cerrarHasta(0, despues); }

  window.addEventListener('popstate', function (e) {
    var n = e.state && e.state.pc ? e.state.n : 0;
    sincronizarPila(Math.min(n, pila.length));
  });

  function actualizarBloqueo() {
    var bloquear = modalAbierto() || (estado.detalleAbierto && !esAncho());
    document.documentElement.classList.toggle('bloqueado', bloquear);
  }

  /* ------------------------------------------------------------------ */
  /* Pintado                                                             */
  /* ------------------------------------------------------------------ */

  function render() {
    document.body.setAttribute('data-cat', estado.vista);
    renderNav();
    renderCabecera();
    renderLista();
    renderDetalle();
    actualizarBloqueo();
  }

  function itemsNav() {
    var items = CATS.map(function (c) {
      return { id: c.id, nombre: c.nombre, corto: c.corto || c.nombre, icono: iconoCat(c), cuenta: contar(c.id) };
    });
    items.push({ id: VISTA_FAV, nombre: 'Favoritos', corto: 'Favoritos', icono: 'favoritos', cuenta: favoritosValidos().length });
    return items;
  }

  function renderNav() {
    var rail = '', barra = '';
    itemsNav().forEach(function (it) {
      var actual = it.id === estado.vista ? ' aria-current="page"' : '';
      rail += '<button type="button" class="rail-item" data-accion="vista" data-vista="' + esc(it.id) + '" data-cat="' + esc(it.id) + '"' + actual + '>' +
        icono(it.icono) + '<span>' + esc(it.nombre) + '</span><span class="cuenta">' + it.cuenta + '</span></button>';
      barra += '<button type="button" class="barra-item" data-accion="vista" data-vista="' + esc(it.id) + '" data-cat="' + esc(it.id) + '"' + actual + '>' +
        '<span class="barra-icono">' + icono(it.icono) + '</span><span class="barra-texto">' + esc(it.corto) + '</span></button>';
    });
    $('#railNav').innerHTML = rail;
    $('#barraInferior').innerHTML = barra;
  }

  function renderCabecera() {
    var c = catDe(estado.vista);
    $('#vistaTitulo').textContent = estado.vista === VISTA_FAV ? 'Favoritos' : c.nombre;

    var pest = $('#pestanas');
    if (estado.q.trim() || estado.vista === VISTA_FAV) {
      pest.hidden = true;
      pest.innerHTML = '';
    } else {
      var amb = ambitoEfectivo();
      pest.hidden = false;
      pest.innerHTML = TIPOS.map(function (t) {
        var sel = t.id === estado.tipo;
        return '<button type="button" role="tab" class="pestana" data-accion="tipo" data-tipo="' + esc(t.id) + '" aria-selected="' + sel + '" tabindex="' + (sel ? '0' : '-1') + '">' +
          esc(t.nombre) + '<span class="cuenta">' + contar(estado.vista, t.id, amb) + '</span></button>';
      }).join('');
    }

    var chips = $('#chips');
    if (!estado.q.trim() && c && c.ambitos.length) {
      var actual = ambitoEfectivo();
      chips.hidden = false;
      chips.innerHTML = [{ id: 'todos', nombre: 'Todas' }].concat(c.ambitos).map(function (a) {
        return '<button type="button" class="chip" data-accion="ambito" data-ambito="' + esc(a.id) + '" aria-pressed="' + (a.id === actual) + '">' + esc(a.nombre) + '</button>';
      }).join('');
    } else {
      chips.hidden = true;
      chips.innerHTML = '';
    }

    var aviso = $('#avisoContenido');
    var partes = [];
    if (CFG.aviso) partes.push(esc(CFG.aviso));
    var nRevisar = todas.filter(function (p) { return p.revisar; }).length;
    if (nRevisar && norm(estado.q.trim()) !== 'revisar') {
      partes.push(esc(plural(nRevisar, 'plantilla tiene', 'plantillas tienen')) + ' observaciones pendientes de revisar. ' +
        '<button type="button" class="boton-enlinea" data-accion="ver-revisar">Ver cuáles</button>');
    }
    aviso.innerHTML = partes.join(' ');
    aviso.hidden = !partes.length;
    $('#borrarBusqueda').hidden = !estado.q;
  }

  function resumen(t) {
    var s = t.replace(/\s+/g, ' ').trim();
    return s.length > 170 ? s.slice(0, 168).replace(/\s+\S*$/, '') + '…' : s;
  }

  function etiquetasDe(p, conContexto) {
    var e = [];
    if (p.revisar) e.push('<span class="etiqueta etiqueta-revisar">Revisar</span>');
    if (p.ejemplo) e.push('<span class="etiqueta etiqueta-propia">Ejemplo</span>');
    if (conContexto) {
      e.push('<span class="etiqueta etiqueta-cat">' + esc(catDe(p.categoria).nombre) + '</span>');
      e.push('<span class="etiqueta">' + esc(tipoDe(p.tipo).singular || tipoDe(p.tipo).nombre) + '</span>');
    }
    p.ambito.forEach(function (a) { e.push('<span class="etiqueta">' + esc(nombreAmbito(p.categoria, a)) + '</span>'); });
    if (p.idiomas.length > 1) e.push('<span class="etiqueta" title="Castellano y català">ES/CA</span>');
    else if (p.idiomas[0] === 'ca') e.push('<span class="etiqueta">Català</span>');
    if (p.propia) e.push('<span class="etiqueta etiqueta-propia">Propia</span>');
    if (p.modificada) e.push('<span class="etiqueta etiqueta-propia">Modificada</span>');
    return e.join('');
  }

  function filaHTML(p, i, conContexto) {
    var etiquetas = etiquetasDe(p, conContexto);
    var clases = 'fila' + (p.id === estado.sel ? ' seleccionada' : '') + (i === estado.activo ? ' activa' : '');
    return '<li class="' + clases + '" data-id="' + esc(p.id) + '" data-i="' + i + '" data-cat="' + esc(p.categoria) + '">' +
      '<button type="button" class="fila-abrir" data-accion="abrir">' +
        '<span class="fila-titulo">' + (esFavorito(p.id) ? icono('estrella') : '') + '<span>' + esc(p.titulo) + '</span></span>' +
        '<span class="fila-vista">' + esc(resumen(rellenar(p, valores[p.id]))) + '</span>' +
        (etiquetas ? '<span class="fila-etiquetas">' + etiquetas + '</span>' : '') +
      '</button>' +
      '<button type="button" class="boton-copiar" data-accion="copiar" aria-label="Copiar ' + esc(p.titulo) + '">' + icono('copiar') + '<span>Copiar</span></button>' +
    '</li>';
  }

  function agruparPorGrupo(lista) {
    var grupos = [], mapa = {}, sueltas = [];
    lista.forEach(function (p) {
      if (!p.grupo) { sueltas.push(p); return; }
      var k = norm(p.grupo);
      if (!mapa[k]) { mapa[k] = { titulo: p.grupo, items: [] }; grupos.push(mapa[k]); }
      mapa[k].items.push(p);
    });
    if (sueltas.length) grupos.push({ titulo: grupos.length ? 'Otras' : '', items: sueltas });
    return grupos;
  }

  function agruparPorSeccion(lista) {
    var grupos = [];
    CATS.forEach(function (c) {
      TIPOS.forEach(function (t) {
        var items = lista.filter(function (p) { return p.categoria === c.id && p.tipo === t.id; });
        if (items.length) grupos.push({ titulo: c.nombre + ': ' + t.nombre.toLowerCase(), items: items });
      });
    });
    return grupos;
  }

  function gruposHTML(grupos) {
    var i = 0, html = '';
    visibles = [];
    grupos.forEach(function (g) {
      html += '<section class="grupo">' + (g.titulo ? '<h2 class="grupo-titulo">' + esc(g.titulo) + '</h2>' : '') + '<ul class="grupo-lista">';
      g.items.forEach(function (p) { visibles.push(p); html += filaHTML(p, i++, false); });
      html += '</ul></section>';
    });
    return html;
  }

  function vacioHTML(titulo, texto, accion) {
    return '<div class="vacio"><p class="vacio-titulo">' + titulo + '</p>' + (texto ? '<p>' + texto + '</p>' : '') + (accion || '') + '</div>';
  }

  function renderLista() {
    var html = '';
    visibles = [];
    var q = estado.q.trim();
    if (q) {
      var res = buscar(q);
      visibles = res;
      if (!res.length) {
        html = vacioHTML('Ninguna plantilla contiene «' + esc(q) + '».', 'Prueba con otra palabra o con el principio del título.',
          '<button type="button" class="boton-secundario" data-accion="borrar-busqueda">Borrar búsqueda</button>');
      } else {
        html = '<p class="resultados-titulo" role="status">' + plural(res.length, 'resultado', 'resultados') + '</p><ul class="grupo-lista">' +
          res.map(function (p, i) { return filaHTML(p, i, true); }).join('') + '</ul>';
      }
    } else if (estado.vista === VISTA_FAV) {
      var favs = favoritosValidos();
      html = favs.length ? gruposHTML(agruparPorSeccion(favs))
        : vacioHTML('Aún no tienes favoritos.', 'Abre una plantilla y pulsa la estrella para tenerla aquí, a un toque.');
    } else {
      var lista = filtrarVista();
      if (lista.length) {
        html = gruposHTML(agruparPorGrupo(lista));
      } else {
        var c = catDe(estado.vista), t = tipoDe(estado.tipo), amb = ambitoEfectivo();
        html = vacioHTML('Aún no hay ' + esc(t.nombre.toLowerCase()) + ' en ' + esc(c.nombre) + (amb !== 'todos' ? ' para ' + esc(nombreAmbito(c.id, amb)) : '') + '.',
          'Crea la primera o pídesela a quien mantiene las plantillas del equipo.',
          '<button type="button" class="boton-secundario" data-accion="nueva">' + icono('mas') + 'Nueva plantilla</button>');
      }
    }
    $('#lista').innerHTML = html;
  }

  function dominio(url) {
    var m = /^https?:\/\/(?:www\.)?([^/:?#]+)/i.exec(url);
    return m ? m[1] : url;
  }

  function enlaceHTML(e) {
    var destino = esCapacitor() ? '' : ' target="_blank"';
    return '<li><a class="enlace" href="' + esc(e.url) + '"' + destino + ' rel="noopener noreferrer">' + icono('enlace') +
      '<span><span class="enlace-titulo">' + esc(e.titulo) + '</span><span class="enlace-dominio">' + esc(dominio(e.url)) + '</span></span></a></li>';
  }

  function renderDetalle() {
    var cont = $('#detalle');
    var p = estado.sel ? indice[estado.sel] : null;
    if (p && todas.indexOf(p) < 0) p = null;
    if (!p) {
      cont.setAttribute('data-cat', estado.vista);
      cont.innerHTML = '<div class="detalle-vacio"><p class="vacio-titulo">Elige una plantilla</p>' +
        '<p>Aquí verás el texto completo y los campos para rellenar antes de copiarla.</p>' +
        '<dl class="atajos"><dt><kbd>Ctrl</kbd> <kbd>K</kbd></dt><dd>Buscar</dd>' +
        '<dt><kbd>↑</kbd> <kbd>↓</kbd></dt><dd>Moverse por la lista</dd>' +
        '<dt><kbd>Intro</kbd></dt><dd>Copiar la plantilla marcada</dd>' +
        '<dt><kbd>Esc</kbd></dt><dd>Borrar la búsqueda</dd></dl></div>';
      return;
    }
    var c = catDe(p.categoria), t = tipoDe(p.tipo);
    var fav = esFavorito(p.id);
    var etiquetas = etiquetasDe(p, false);
    var idioma = idiomaDe(p);
    var vr = varianteDe(p);
    var html = '<header class="detalle-cabecera">' +
      '<button type="button" class="boton-icono solo-movil" data-accion="volver" aria-label="Volver a la lista">' + icono('atras') + '</button>' +
      '<div class="detalle-encabezado">' +
        '<p class="detalle-ruta">' + esc(c.nombre) + ' › ' + esc(t.nombre) + (p.grupo ? ' › ' + esc(p.grupo) : '') + '</p>' +
        '<h2 class="detalle-titulo" id="detalleTitulo" tabindex="-1">' + esc(p.titulo) + '</h2>' +
        (etiquetas ? '<div class="detalle-etiquetas">' + etiquetas + '</div>' : '') +
      '</div>' +
      '<button type="button" class="boton-icono" data-accion="favorito" aria-pressed="' + fav + '" aria-label="' + (fav ? 'Quitar de favoritos' : 'Añadir a favoritos') + '" title="' + (fav ? 'Quitar de favoritos' : 'Añadir a favoritos') + '">' + icono('estrella') + '</button>' +
    '</header>' +
    '<div class="detalle-cuerpo">';

    if (p.revisar) {
      html += '<div class="aviso-plantilla aviso-revisar" role="note">' + icono('aviso') + '<div><p class="aviso-plantilla-titulo">Pendiente de revisar</p><p>' + esc(p.revisar) + '</p></div></div>';
    }
    if (p.ejemplo) {
      html += '<div class="aviso-plantilla" role="note">' + icono('info') + '<div><p class="aviso-plantilla-titulo">Plantilla de ejemplo</p><p>Creada para probar la app. Sustitúyela por la del equipo.</p></div></div>';
    }
    if (p.nota) {
      html += '<div class="nota-plantilla"><p class="nota-plantilla-titulo">Nota (no se copia)</p><div class="nota-plantilla-texto">' + esc(p.nota) + '</div></div>';
    }
    if (p.idiomas.length > 1) {
      html += '<div class="selector-idioma" role="group" aria-label="Idioma del texto">' + p.idiomas.map(function (id) {
        return '<button type="button" data-accion="idioma" data-idioma="' + id + '" aria-pressed="' + (id === idioma) + '" lang="' + id + '">' + esc(idiomaInfo(id).nombre) + '</button>';
      }).join('') + '</div>';
    }

    if (estado.editandoTexto) {
      html += '<textarea class="texto-editable" id="textoEditable" aria-label="Texto que se copiará" spellcheck="true" lang="' + idioma + '">' + esc(rellenar(p, valores[p.id])) + '</textarea>' +
        '<p class="nota">Estos cambios solo afectan a lo que copies ahora; la plantilla no se modifica.</p>';
    } else {
      if (vr.campos.length) html += camposHTML(p, vr);
      html += '<div class="texto-plantilla" id="textoPlantilla" lang="' + idioma + '"></div>';
    }
    if (p.enlaces.length) {
      html += '<div class="enlaces"><p class="enlaces-titulo">Enlaces</p><ul>' + p.enlaces.map(enlaceHTML).join('') + '</ul></div>';
    }
    html += '<div class="detalle-mas">' +
      '<button type="button" class="boton-texto" data-accion="editar">' + icono('editar') + 'Editar plantilla</button>' +
      '<button type="button" class="boton-texto" data-accion="duplicar">' + icono('duplicar') + 'Duplicar</button>' +
    '</div></div>' +
    '<footer class="detalle-pie">' +
      '<button type="button" class="boton-secundario" data-accion="editar-texto" title="Cambiar el texto solo para esta copia">' + (estado.editandoTexto ? 'Descartar cambios' : 'Retocar') + '</button>' +
      '<button type="button" class="boton-primario" data-accion="copiar-detalle">' + icono('copiar') + '<span>Copiar</span></button>' +
    '</footer>';

    cont.setAttribute('data-cat', p.categoria);
    cont.innerHTML = html;
    if (estado.editandoTexto) ajustarAltura($('#textoEditable'));
    else pintarTexto(p);
  }

  function camposHTML(p, vr) {
    var v = valores[p.id] || {};
    var html = '<div class="campos"><div class="campos-cabecera"><h3 class="campos-titulo">Campos para rellenar</h3>' +
      '<button type="button" class="boton-texto" data-accion="vaciar-campos">Vaciar</button></div><div class="campos-rejilla">';
    vr.campos.forEach(function (c, i) {
      var idc = 'campo-' + i;
      var escrito = valorEscrito(c, v);
      var ancho = c.opciones.length && c.opciones.join('/').length > 16;
      html += '<div class="control' + (ancho ? ' control-ancho' : '') + '"><label for="' + idc + '">' + esc(c.etiqueta) + '</label>';
      if (c.opciones.length) {
        var elegido = escrito || c.defecto;
        html += '<select id="' + idc + '" data-campo="' + esc(c.clave) + '">' +
          (c.defecto ? '' : '<option value="">' + esc(listaCorta(c) ? c.opciones.join('/') : 'Elegir…') + '</option>') +
          c.opciones.map(function (o) { return '<option' + (elegido === o ? ' selected' : '') + '>' + esc(o) + '</option>'; }).join('') + '</select>';
      } else {
        html += '<input id="' + idc + '" type="text" data-campo="' + esc(c.clave) + '" value="' + esc(escrito) + '"' +
          (c.defecto ? ' placeholder="' + esc(c.defecto) + '"' : '') + ' autocomplete="off" autocapitalize="off" enterkeyhint="next">';
      }
      html += '</div>';
    });
    html += '</div><p class="nota">Lo que escribas aquí no se guarda. Los campos vacíos se copian como ___</p></div>';
    return html;
  }

  function pintarTexto(p) {
    var cont = $('#textoPlantilla');
    if (!cont) return;
    var v = valores[p.id] || {};
    var vr = varianteDe(p);
    var texto = vr.texto, ultimo = 0, m;
    cont.textContent = '';
    RE_CAMPO.lastIndex = 0;
    while ((m = RE_CAMPO.exec(texto))) {
      if (m.index > ultimo) cont.appendChild(document.createTextNode(texto.slice(ultimo, m.index)));
      var basico = analizarCampo(m[1], m[2]);
      var campo = campoEn(vr, basico.clave) || basico;
      var escrito = valorEscrito(campo, v);
      var span = document.createElement('span');
      span.className = 'campo' + (escrito || campo.defecto ? ' lleno' : '');
      span.textContent = escrito || campo.defecto || (listaCorta(campo) ? campo.opciones.join('/') : campo.etiqueta);
      span.setAttribute('data-accion', 'ir-campo');
      span.setAttribute('data-clave', campo.clave);
      span.title = campo.etiqueta;
      cont.appendChild(span);
      ultimo = m.index + m[0].length;
    }
    if (ultimo < texto.length) cont.appendChild(document.createTextNode(texto.slice(ultimo)));
  }

  function actualizarVistaFila(p) {
    $$('.fila[data-id="' + cssEsc(p.id) + '"] .fila-vista').forEach(function (el) { el.textContent = resumen(rellenar(p, valores[p.id])); });
  }

  function marcarFilas() {
    $$('#lista .fila').forEach(function (li) {
      var i = parseInt(li.getAttribute('data-i'), 10);
      li.classList.toggle('activa', i === estado.activo);
      li.classList.toggle('seleccionada', li.getAttribute('data-id') === estado.sel);
    });
  }

  function filaVisible(i) {
    var li = $('#lista .fila[data-i="' + i + '"]');
    if (li && li.scrollIntoView) li.scrollIntoView({ block: 'nearest' });
    return li;
  }

  function ajustarAltura(ta) {
    if (!ta) return;
    ta.style.height = 'auto';
    ta.style.height = Math.min(Math.max(ta.scrollHeight + 4, 240), Math.round(window.innerHeight * 0.75)) + 'px';
  }

  /* ------------------------------------------------------------------ */
  /* Acciones                                                            */
  /* ------------------------------------------------------------------ */

  function cambiarVista(v) {
    if (!esVistaValida(v)) return;
    var cambia = v !== estado.vista;
    estado.vista = v;
    estado.activo = -1;
    if (estado.q) { estado.q = ''; inputBuscar.value = ''; }
    if (cambia && esAncho()) { estado.sel = null; estado.editandoTexto = false; }
    guardarVista();
    render();
    irArribaLista();
  }

  function irArribaLista() {
    if (esAncho()) { var l = $('#listado'); if (l) l.scrollTop = 0; }
    else window.scrollTo(0, 0);
  }

  function abrirPlantilla(id) {
    var p = indice[id];
    if (!p) return;
    if (estado.sel !== id) estado.editandoTexto = false;
    estado.sel = id;
    var i = visibles.indexOf(p);
    if (i >= 0) estado.activo = i;
    if (!esAncho() && !estado.detalleAbierto) {
      estado.detalleAbierto = true;
      document.body.classList.add('detalle-abierto');
      apilar('detalle', cerrarDetalleUI);
    }
    renderDetalle();
    marcarFilas();
    actualizarBloqueo();
    var d = $('#detalle .detalle-cuerpo');
    if (d) d.scrollTop = 0;
    if (!esAncho()) {
      var titulo = $('#detalleTitulo');
      if (titulo) try { titulo.focus({ preventScroll: true }); } catch (e) { /* */ }
    }
  }

  function cerrarDetalleUI() {
    estado.detalleAbierto = false;
    estado.editandoTexto = false;
    document.body.classList.remove('detalle-abierto');
    actualizarBloqueo();
    var li = estado.sel ? $('#lista .fila[data-id="' + cssEsc(estado.sel) + '"] .fila-abrir') : null;
    if (li) try { li.focus({ preventScroll: true }); } catch (e) { /* */ }
  }

  function moverActivo(delta) {
    if (!visibles.length) return;
    var i = estado.activo < 0 ? (delta > 0 ? 0 : visibles.length - 1) : estado.activo + delta;
    i = Math.max(0, Math.min(visibles.length - 1, i));
    estado.activo = i;
    if (esAncho()) {
      if (estado.sel !== visibles[i].id) estado.editandoTexto = false;
      estado.sel = visibles[i].id;
      renderDetalle();
    }
    marcarFilas();
    var li = filaVisible(i);
    var foco = document.activeElement;
    if (li && foco && foco.classList && foco.classList.contains('fila-abrir')) {
      var b = li.querySelector('.fila-abrir');
      if (b) b.focus({ preventScroll: true });
    }
  }

  function ponerBusqueda(q, desdeCampo) {
    estado.q = q;
    if (!desdeCampo) inputBuscar.value = q;
    estado.activo = q.trim() ? 0 : -1;
    renderCabecera();
    renderLista();
    if (esAncho() && q.trim() && visibles[0]) {
      if (estado.sel !== visibles[0].id) estado.editandoTexto = false;
      estado.sel = visibles[0].id;
      renderDetalle();
      marcarFilas();
    }
    irArribaLista();
  }

  function alternarFavorito(id) {
    if (!indice[id]) return;
    var i = favoritos.indexOf(id);
    if (i >= 0) favoritos.splice(i, 1); else favoritos.push(id);
    var ok = guardar('favoritos', favoritos);
    avisar(i >= 0 ? 'Quitada de favoritos' : 'Añadida a favoritos' + (ok ? '' : ' (solo durante esta sesión)'));
    renderNav();
    renderLista();
    renderDetalle();
  }

  function alternarRetoque() {
    if (!indice[estado.sel]) return;
    estado.editandoTexto = !estado.editandoTexto;
    renderDetalle();
    if (estado.editandoTexto) {
      var ta = $('#textoEditable');
      if (ta) { ta.focus(); try { ta.setSelectionRange(ta.value.length, ta.value.length); } catch (e) { /* */ } }
    }
  }

  function vaciarCampos() {
    var p = indice[estado.sel];
    if (!p) return;
    delete valores[p.id];
    renderDetalle();
    actualizarVistaFila(p);
    var primero = $('#detalle [data-campo]');
    if (primero) primero.focus();
  }

  function cambiarIdioma(id) {
    if (['es', 'ca'].indexOf(id) < 0 || ajustes.idioma === id) return;
    ajustes.idioma = id;
    guardar('ajustes', ajustes);
    renderLista();
    renderDetalle();
    marcarFilas();
    var b = $('#detalle [data-accion="idioma"][data-idioma="' + id + '"]');
    if (b) try { b.focus({ preventScroll: true }); } catch (e) { /* */ }
  }

  /* ------------------------------------------------------------------ */
  /* Portapapeles                                                        */
  /* ------------------------------------------------------------------ */

  function copiarConExecCommand(texto) {
    var previo = document.activeElement;
    var ta = document.createElement('textarea');
    ta.value = texto;
    ta.setAttribute('readonly', '');
    ta.setAttribute('aria-hidden', 'true');
    ta.style.cssText = 'position:fixed;top:0;left:0;width:2px;height:2px;padding:0;border:0;opacity:0;pointer-events:none;';
    document.body.appendChild(ta);
    var ok = false;
    try {
      ta.focus();
      ta.select();
      ta.setSelectionRange(0, texto.length);
      ok = document.execCommand('copy');
    } catch (e) { ok = false; }
    document.body.removeChild(ta);
    if (previo && previo.focus) try { previo.focus({ preventScroll: true }); } catch (e) { /* */ }
    return ok;
  }

  function copiarEnNavegador(texto) {
    if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function' && window.isSecureContext !== false) {
      return navigator.clipboard.writeText(texto).then(function () { return true; }, function () { return copiarConExecCommand(texto); });
    }
    return Promise.resolve(copiarConExecCommand(texto));
  }

  // Devuelve una promesa que se resuelve en true si el texto quedó en el portapapeles.
  function escribirPortapapeles(texto) {
    var nativo = window.plantillasNative;
    if (nativo && typeof nativo.copiar === 'function') {
      return Promise.resolve().then(function () { return nativo.copiar(texto); })
        .then(function (r) { return r === false ? copiarEnNavegador(texto) : true; }, function () { return copiarEnNavegador(texto); });
    }
    var cap = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.Clipboard;
    if (cap && esCapacitor()) {
      return Promise.resolve().then(function () { return cap.write({ string: texto }); })
        .then(function () { return true; }, function () { return copiarEnNavegador(texto); });
    }
    return copiarEnNavegador(texto);
  }

  function textoParaCopiar(p) {
    if (estado.editandoTexto && estado.sel === p.id) {
      var ta = $('#textoEditable');
      if (ta) return ta.value;
    }
    return rellenar(p, valores[p.id]);
  }

  function copiarPlantilla(p, boton) {
    if (!p) return;
    var texto = textoParaCopiar(p);
    escribirPortapapeles(texto).then(function (ok) {
      if (ok) {
        efectoCopiado(boton);
        avisar('Copiado: ' + p.titulo);
        try { if (navigator.vibrate) navigator.vibrate(15); } catch (e) { /* */ }
      } else {
        copiaManual(p, texto);
      }
    });
  }

  function efectoCopiado(boton) {
    if (!boton || !boton.classList) return;
    if (!boton._htmlOriginal) boton._htmlOriginal = boton.innerHTML;
    clearTimeout(boton._temporizador);
    boton.classList.add('copiado');
    boton.innerHTML = icono('hecho') + '<span>Copiado</span>';
    boton._temporizador = setTimeout(function () {
      boton.classList.remove('copiado');
      boton.innerHTML = boton._htmlOriginal;
    }, 1600);
  }

  function botonCopiarDeFila(id) { return $('#lista .fila[data-id="' + cssEsc(id) + '"] .boton-copiar'); }

  var temporizadorAviso = null;
  function avisar(texto, error) {
    var t = $('#toast');
    $('#toastTexto').textContent = texto;
    t.classList.toggle('error', !!error);
    t.classList.add('visible');
    clearTimeout(temporizadorAviso);
    temporizadorAviso = setTimeout(function () { t.classList.remove('visible'); }, error ? 4200 : 2200);
  }

  function copiaManual(p, texto) {
    var m = abrirModal({
      titulo: 'Copia manual',
      cat: p.categoria,
      sinFoco: true,
      cuerpo: '<p>Este dispositivo no ha permitido copiar automáticamente. El texto ya está seleccionado: cópialo con el menú del sistema o con Ctrl+C.</p>' +
        '<textarea class="area" readonly rows="10">' + esc(texto) + '</textarea>'
    });
    var ta = m.querySelector('textarea');
    setTimeout(function () { try { ta.focus(); ta.select(); } catch (e) { /* */ } }, 60);
  }

  /* ------------------------------------------------------------------ */
  /* Ventanas                                                            */
  /* ------------------------------------------------------------------ */

  var contadorModal = 0;
  function modalAbierto() { return !!$('#capaModales .modal-fondo'); }

  function abrirModal(op) {
    var capa = $('#capaModales');
    var idTitulo = 'modal-titulo-' + (++contadorModal);
    var fondo = document.createElement('div');
    fondo.className = 'modal-fondo';
    if (op.cat) fondo.setAttribute('data-cat', op.cat);
    fondo.innerHTML = '<div class="modal" role="dialog" aria-modal="true" aria-labelledby="' + idTitulo + '">' +
      '<div class="modal-cabecera"><h2 class="modal-titulo" id="' + idTitulo + '">' + esc(op.titulo) + '</h2>' +
      '<button type="button" class="boton-icono" data-cerrar aria-label="Cerrar">' + icono('cerrar') + '</button></div>' +
      '<div class="modal-cuerpo">' + op.cuerpo + '</div></div>';
    var previo = document.activeElement;
    capa.appendChild(fondo);
    var modal = fondo.firstChild;
    fondo.addEventListener('click', function (e) {
      if (e.target === fondo || (e.target.closest && e.target.closest('[data-cerrar]'))) cerrarCapa();
    });
    apilar('modal', function () {
      if (fondo.parentNode) fondo.parentNode.removeChild(fondo);
      actualizarBloqueo();
      if (op.alCerrar) op.alCerrar();
      if (previo && previo.focus && document.body.contains(previo)) try { previo.focus({ preventScroll: true }); } catch (e) { /* */ }
    });
    actualizarBloqueo();
    if (op.alMontar) op.alMontar(modal);
    if (!op.sinFoco) {
      var primero = modal.querySelector(op.foco || '.modal-cuerpo input:not([type="file"]), .modal-cuerpo select, .modal-cuerpo textarea, .modal-cuerpo button');
      if (primero) setTimeout(function () { try { primero.focus(); } catch (e) { /* */ } }, 40);
    } else {
      setTimeout(function () { try { modal.querySelector('[data-cerrar]').focus(); } catch (e) { /* */ } }, 40);
    }
    return modal;
  }

  function confirmar(op, siAcepta) {
    abrirModal({
      titulo: op.titulo,
      cat: op.cat,
      sinFoco: true,
      cuerpo: '<p>' + op.texto + '</p><div class="modal-acciones">' +
        '<button type="button" class="boton-secundario" data-cerrar>Cancelar</button>' +
        '<button type="button" class="' + (op.peligro ? 'boton-secundario boton-peligro' : 'boton-primario') + '" data-confirmar>' + esc(op.boton) + '</button></div>',
      alMontar: function (m) {
        m.querySelector('[data-confirmar]').addEventListener('click', function () { cerrarCapa(siAcepta); });
      }
    });
  }

  function seg(grupo, valor, texto) {
    return '<button type="button" data-ajuste="' + grupo + '" data-valor="' + valor + '" aria-pressed="' + (ajustes[grupo] === valor) + '">' + esc(texto) + '</button>';
  }
  function filaAccion(accion, ico, titulo, desc, peligro) {
    return '<button type="button" class="accion' + (peligro ? ' peligro' : '') + '" data-accion="' + accion + '">' + icono(ico) +
      '<span class="accion-texto"><span class="accion-titulo">' + esc(titulo) + '</span>' + (desc ? '<span class="accion-desc">' + esc(desc) + '</span>' : '') + '</span></button>';
  }

  function abrirAjustes() {
    var ocultas = contarOcultas();
    var cuerpo =
      '<section class="modal-seccion"><h3>Preferencias</h3>' +
        '<p class="form-etiqueta">Tema</p><div class="segmentado">' + seg('tema', 'auto', 'Automático') + seg('tema', 'claro', 'Claro') + seg('tema', 'oscuro', 'Oscuro') + '</div>' +
        '<p class="form-etiqueta">Tamaño del texto</p><div class="segmentado">' + seg('letra', 'normal', 'Normal') + seg('letra', 'grande', 'Grande') + seg('letra', 'muy-grande', 'Muy grande') + '</div>' +
        '<p class="form-etiqueta">Idioma de las plantillas</p><div class="segmentado">' + seg('idioma', 'es', 'Castellano') + seg('idioma', 'ca', 'Català') + '</div>' +
        '<p class="ayuda">Se usa en las plantillas que tienen versión en los dos idiomas; las demás se muestran en el idioma en que están escritas.</p>' +
      '</section>' +
      '<section class="modal-seccion"><h3>Plantillas</h3><div class="lista-acciones">' +
        filaAccion('nueva', 'mas', 'Nueva plantilla', 'Se guarda en este dispositivo.') +
        filaAccion('exportar', 'exportar', 'Exportar mis plantillas', 'Tus plantillas propias, cambios y favoritos, para otro dispositivo o un compañero.') +
        filaAccion('importar', 'importar', 'Importar plantillas', 'Añade plantillas exportadas desde esta app.') +
        (ocultas ? filaAccion('mostrar-ocultas', 'restaurar', 'Volver a mostrar las ocultas', plural(ocultas, 'plantilla oculta', 'plantillas ocultas') + '.') : '') +
        (hayCambiosLocales() ? filaAccion('borrar-locales', 'papelera', 'Borrar mis plantillas y cambios', 'Deja solo las plantillas incluidas en la app.', true) : '') +
      '</div></section>' +
      (eventoInstalar ? '<section class="modal-seccion"><h3>Instalación</h3><div class="lista-acciones">' +
        filaAccion('instalar', 'instalar', 'Instalar como aplicación', 'Icono propio, ventana independiente y uso sin conexión.') + '</div></section>' : '') +
      '<section class="modal-seccion acerca"><h3>Acerca de</h3>' +
        '<p>Plantillas Clínicas ' + esc(VERSION_APP) + '. Contenido del ' + esc(CFG.version || '') + ': ' + plural(todas.length, 'plantilla', 'plantillas') + '.</p>' +
        '<p>Las plantillas son orientativas: revisa y adapta su contenido a cada paciente. La app funciona sin conexión, no envía datos a ningún servidor y no guarda lo que escribes en los campos.</p>' +
        (!hayAlmacen ? '<p class="nota-bloque">Este navegador no permite guardar datos: favoritos y plantillas propias se perderán al cerrar.</p>' : '') +
      '</section>';
    abrirModal({
      titulo: 'Ajustes',
      cuerpo: cuerpo,
      sinFoco: true,
      alMontar: function (m) {
        m.addEventListener('click', function (e) {
          var b = e.target.closest ? e.target.closest('[data-ajuste]') : null;
          if (!b) return;
          var grupo = b.getAttribute('data-ajuste');
          ajustes[grupo] = b.getAttribute('data-valor');
          guardar('ajustes', ajustes);
          $$('[data-ajuste="' + grupo + '"]', m).forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
          if (grupo === 'tema') aplicarTema();
          else if (grupo === 'letra') aplicarLetra();
          else { renderLista(); renderDetalle(); marcarFilas(); }
        });
      }
    });
  }

  function aplicarTema() {
    var oscuro = ajustes.tema === 'oscuro' || (ajustes.tema === 'auto' && mqOscuro.matches);
    document.documentElement.setAttribute('data-tema', oscuro ? 'oscuro' : 'claro');
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', oscuro ? '#0D1413' : '#F3F6F5');
    try {
      var sb = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.SystemBars;
      if (sb && esCapacitor() && sb.setStyle) sb.setStyle({ style: oscuro ? 'DARK' : 'LIGHT' });
    } catch (e) { /* */ }
    if (esElectron() && window.plantillasNative.tema) {
      // Se pasa el ajuste (auto/claro/oscuro), no el resultado, para que en "auto" Windows siga mandando.
      try { window.plantillasNative.tema(ajustes.tema); } catch (e) { /* */ }
    }
  }
  function aplicarLetra() { document.documentElement.setAttribute('data-letra', ajustes.letra); }

  /* ---------- Editor de plantillas ---------- */

  function gruposExistentes(catId, tipoId) {
    var vistos = {}, lista = [];
    todas.forEach(function (p) {
      if (p.categoria === catId && p.tipo === tipoId && p.grupo && !vistos[norm(p.grupo)]) { vistos[norm(p.grupo)] = true; lista.push(p.grupo); }
    });
    return lista;
  }

  function abrirEditor(modo, p) {
    var esBase = modo === 'editar' && p && (p.origen === 'base' || p.modificada);
    var d = p ? { categoria: p.categoria, tipo: p.tipo, ambito: p.ambito.slice(), grupo: p.grupo, titulo: p.titulo, etiquetas: p.etiquetas, texto: p.texto, texto_ca: p.texto_ca, nota: p.nota }
      : { categoria: catDe(estado.vista) ? estado.vista : CATS[0].id, tipo: estado.tipo, ambito: ambitoEfectivo() !== 'todos' ? [ambitoEfectivo()] : [], grupo: '', titulo: '', etiquetas: '', texto: '', texto_ca: '', nota: '' };
    if (modo === 'duplicar') d.titulo = d.titulo + ' (copia)';
    var titulo = modo === 'editar' ? 'Editar plantilla' : (modo === 'duplicar' ? 'Duplicar plantilla' : 'Nueva plantilla');

    var opcionesCat = CATS.map(function (c) { return '<option value="' + esc(c.id) + '"' + (c.id === d.categoria ? ' selected' : '') + '>' + esc(c.nombre) + '</option>'; }).join('');
    var opcionesTipo = TIPOS.map(function (t) { return '<option value="' + esc(t.id) + '"' + (t.id === d.tipo ? ' selected' : '') + '>' + esc(t.singular || t.nombre) + '</option>'; }).join('');

    var cuerpo = '<form class="form-editor" novalidate>' +
      (esBase ? '<p class="nota-bloque">Es una plantilla incluida en la app. Los cambios se guardan solo en este dispositivo y puedes volver a la original cuando quieras.</p>' : '') +
      '<div class="form-campo"><label for="ed-titulo">Título</label><input class="entrada" id="ed-titulo" name="titulo" required value="' + esc(d.titulo) + '" autocomplete="off"></div>' +
      '<div class="form-fila">' +
        '<div class="form-campo"><label for="ed-cat">Categoría</label><select class="entrada" id="ed-cat" name="categoria">' + opcionesCat + '</select></div>' +
        '<div class="form-campo"><label for="ed-tipo">Tipo</label><select class="entrada" id="ed-tipo" name="tipo">' + opcionesTipo + '</select></div>' +
      '</div>' +
      '<div class="form-campo" id="ed-bloque-ambito"><p class="form-etiqueta">Ámbito</p><div class="casillas" id="ed-ambitos"></div>' +
        '<p class="ayuda">Si no marcas ninguno, aparece en todos.</p></div>' +
      '<div class="form-fila">' +
        '<div class="form-campo"><label for="ed-grupo">Grupo (opcional)</label><input class="entrada" id="ed-grupo" name="grupo" list="ed-grupos" value="' + esc(d.grupo) + '" autocomplete="off"><datalist id="ed-grupos"></datalist></div>' +
        '<div class="form-campo"><label for="ed-etiquetas">Palabras clave (opcional)</label><input class="entrada" id="ed-etiquetas" name="etiquetas" value="' + esc(d.etiquetas) + '" autocomplete="off"></div>' +
      '</div>' +
      '<div class="form-campo"><label for="ed-texto">Texto</label><textarea class="area" id="ed-texto" name="texto" rows="10" spellcheck="true" lang="es">' + esc(d.texto) + '</textarea>' +
        '<p class="ayuda">Campos: <code>{{TA}}</code> campo libre; <code>{{FC=80}}</code> con valor por defecto; <code>{{Ojo|OD|OI|AO}}</code> desplegable; <code>{{Ojo|*OD|OI}}</code> con OD por defecto.</p></div>' +
      '<div class="form-campo"><label for="ed-texto-ca">Texto en catalán (opcional)</label><textarea class="area area-baja" id="ed-texto-ca" name="texto_ca" rows="5" spellcheck="true" lang="ca">' + esc(d.texto_ca) + '</textarea></div>' +
      '<div class="form-campo"><label for="ed-nota">Nota (no se copia, opcional)</label><textarea class="area area-baja" id="ed-nota" name="nota" rows="3" spellcheck="true">' + esc(d.nota) + '</textarea></div>' +
      '<p class="error-form" id="ed-error" role="alert" hidden></p>' +
      (modo === 'editar' && p ? '<div class="ed-extra">' +
        (p.propia ? '<button type="button" class="boton-secundario boton-peligro" data-ed="eliminar">' + icono('papelera') + 'Eliminar</button>' : '') +
        (p.modificada ? '<button type="button" class="boton-secundario" data-ed="restaurar">' + icono('restaurar') + 'Volver a la original</button>' : '') +
        (esBase ? '<button type="button" class="boton-secundario" data-ed="ocultar">' + icono('ocultar') + 'Ocultar</button>' : '') +
      '</div>' : '') +
      '<div class="modal-acciones modal-acciones-fijas">' +
        '<button type="submit" class="boton-primario">Guardar</button>' +
        '<button type="button" class="boton-secundario" data-cerrar>Cancelar</button>' +
      '</div></form>';

    abrirModal({
      titulo: titulo,
      cat: d.categoria,
      cuerpo: cuerpo,
      foco: '#ed-titulo',
      alMontar: function (m) {
        var form = m.querySelector('form');
        var selCat = m.querySelector('#ed-cat'), selTipo = m.querySelector('#ed-tipo');
        var fondo = m.parentNode;
        function pintarAmbitos(seleccion) {
          var c = catDe(selCat.value);
          var bloque = m.querySelector('#ed-bloque-ambito');
          bloque.hidden = !c.ambitos.length;
          m.querySelector('#ed-ambitos').innerHTML = c.ambitos.map(function (a) {
            return '<label class="casilla"><input type="checkbox" name="ambito" value="' + esc(a.id) + '"' + (seleccion.indexOf(a.id) >= 0 ? ' checked' : '') + '>' + esc(a.nombre) + '</label>';
          }).join('');
          m.querySelector('#ed-grupos').innerHTML = gruposExistentes(selCat.value, selTipo.value).map(function (g) { return '<option value="' + esc(g) + '">'; }).join('');
          fondo.setAttribute('data-cat', selCat.value);
        }
        pintarAmbitos(d.ambito);
        selCat.addEventListener('change', function () { pintarAmbitos([]); });
        selTipo.addEventListener('change', function () { pintarAmbitos($$('#ed-ambitos input:checked', m).map(function (i) { return i.value; })); });

        form.addEventListener('submit', function (e) {
          e.preventDefault();
          var datos = {
            titulo: form.titulo.value.trim(),
            categoria: selCat.value,
            tipo: selTipo.value,
            ambito: $$('#ed-ambitos input:checked', m).map(function (i) { return i.value; }),
            grupo: form.grupo.value.trim(),
            etiquetas: form.etiquetas.value.trim(),
            texto: form.texto.value.replace(/\s+$/, ''),
            texto_ca: form.texto_ca.value.replace(/\s+$/, ''),
            nota: form.nota.value.replace(/\s+$/, '')
          };
          var error = !datos.titulo ? 'Escribe un título.' : (!datos.texto.trim() && !datos.texto_ca.trim() ? 'Escribe el texto de la plantilla.' : '');
          var caja = m.querySelector('#ed-error');
          if (error) { caja.textContent = error; caja.hidden = false; (datos.titulo ? form.texto : form.titulo).focus(); return; }
          guardarPlantilla(modo, p, datos);
        });

        var eliminar = m.querySelector('[data-ed="eliminar"]');
        if (eliminar) eliminar.addEventListener('click', function () {
          confirmar({ titulo: 'Eliminar plantilla', texto: 'Se eliminará «' + esc(p.titulo) + '» de este dispositivo.', boton: 'Eliminar', peligro: true, cat: p.categoria }, function () { eliminarPropia(p); });
        });
        var restaurar = m.querySelector('[data-ed="restaurar"]');
        if (restaurar) restaurar.addEventListener('click', function () {
          confirmar({ titulo: 'Volver a la original', texto: 'Se descartarán tus cambios en «' + esc(p.titulo) + '».', boton: 'Volver a la original', cat: p.categoria }, function () { restaurarOriginal(p); });
        });
        var ocultar = m.querySelector('[data-ed="ocultar"]');
        if (ocultar) ocultar.addEventListener('click', function () { ocultarPlantilla(p); });
      }
    });
  }

  function guardarPlantilla(modo, p, d) {
    var locales = leerPropias();
    var id = modo === 'editar' && p ? p.id : nuevoId();
    var registro = {
      id: id, categoria: d.categoria, tipo: d.tipo, ambito: d.ambito, grupo: d.grupo, titulo: d.titulo, etiquetas: d.etiquetas,
      texto: d.texto, texto_ca: d.texto_ca, nota: d.nota, actualizado: new Date().toISOString()
    };
    // Se conservan los datos que no se editan desde la app (enlaces y observaciones)
    if (p && modo !== 'nueva') {
      if (p.enlaces.length) registro.enlaces = p.enlaces;
      if (p.revisar) registro.revisar = p.revisar;
      if (p.ejemplo && modo === 'editar') registro.ejemplo = true;
    }
    var i = indicePorId(locales, id);
    if (i >= 0) locales[i] = registro; else locales.push(registro);
    var ok = guardar('propias', locales);
    recargar();
    cerrarTodo(function () {
      estado.vista = d.categoria;
      estado.tipo = d.tipo;
      estado.ambito = 'todos';
      estado.q = '';
      inputBuscar.value = '';
      estado.sel = null;
      guardarVista();
      render();
      abrirPlantilla(id);
      avisar(ok ? 'Plantilla guardada' : 'Guardada solo durante esta sesión: el navegador no permite guardar datos', !ok);
    });
  }

  function eliminarPropia(p) {
    guardar('propias', leerPropias().filter(function (l) { return l && l.id !== p.id; }));
    var f = favoritos.indexOf(p.id);
    if (f >= 0) { favoritos.splice(f, 1); guardar('favoritos', favoritos); }
    recargar();
    cerrarTodo(function () {
      estado.sel = null;
      render();
      avisar('Plantilla eliminada');
    });
  }

  function restaurarOriginal(p) {
    guardar('propias', leerPropias().filter(function (l) { return l && l.id !== p.id; }));
    recargar();
    cerrarTodo(function () {
      render();
      if (indice[p.id]) abrirPlantilla(p.id);
      avisar('Plantilla original recuperada');
    });
  }

  function ocultarPlantilla(p) {
    var oc = leerOcultas();
    if (oc.indexOf(p.id) < 0) oc.push(p.id);
    guardar('ocultas', oc);
    recargar();
    cerrarTodo(function () {
      estado.sel = null;
      render();
      avisar('Plantilla oculta. Puedes volver a mostrarla en Ajustes');
    });
  }

  /* ---------- Exportar e importar ---------- */

  function puedeDescargar() { return ENTORNO !== 'vista-previa' && !esCapacitor(); }

  function descargar(nombre, contenido) {
    var blob = new Blob([contenido], { type: 'application/json' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = nombre;
    document.body.appendChild(a);
    a.click();
    setTimeout(function () { URL.revokeObjectURL(url); if (a.parentNode) a.parentNode.removeChild(a); }, 1500);
  }

  function abrirExportar() {
    var datos = { app: 'plantillas-clinicas', formato: 2, exportado: new Date().toISOString(), plantillas: leerPropias(), favoritos: favoritos.slice(), ocultas: leerOcultas() };
    var json = JSON.stringify(datos, null, 2);
    var n = datos.plantillas.length;
    var cuerpo = '<p>' + (n ? plural(n, 'plantilla propia o modificada', 'plantillas propias o modificadas') : 'Ninguna plantilla propia ni modificada') + ' y ' + plural(datos.favoritos.length, 'favorito', 'favoritos') + '.</p>' +
      '<textarea class="area area-codigo" readonly rows="8" aria-label="Contenido exportado">' + esc(json) + '</textarea>' +
      '<div class="modal-acciones">' +
        '<button type="button" class="boton-primario" data-exp="copiar">' + icono('copiar') + '<span>Copiar</span></button>' +
        (puedeDescargar() ? '<button type="button" class="boton-secundario" data-exp="descargar">' + icono('exportar') + 'Descargar archivo</button>' : '') +
      '</div>' +
      '<p class="ayuda">Envíatelo por correo o mensaje y, en el otro dispositivo, usa «Importar plantillas».</p>';
    abrirModal({
      titulo: 'Exportar mis plantillas',
      cuerpo: cuerpo,
      sinFoco: true,
      alMontar: function (m) {
        m.querySelector('[data-exp="copiar"]').addEventListener('click', function (e) {
          var b = e.currentTarget;
          escribirPortapapeles(json).then(function (ok) {
            if (ok) { efectoCopiado(b); avisar('Exportación copiada'); }
            else { var ta = m.querySelector('textarea'); ta.focus(); ta.select(); avisar('Selecciona el texto y cópialo', true); }
          });
        });
        var d = m.querySelector('[data-exp="descargar"]');
        if (d) d.addEventListener('click', function () {
          descargar('plantillas-clinicas-' + new Date().toISOString().slice(0, 10) + '.json', json);
        });
      }
    });
  }

  function importarTexto(texto) {
    var datos;
    try { datos = JSON.parse(String(texto).replace(/^\uFEFF/, '')); } catch (e) {
      return { error: 'El contenido no es válido. Comprueba que has pegado el texto exportado completo.' };
    }
    var lista = Array.isArray(datos) ? datos : (datos && Array.isArray(datos.plantillas) ? datos.plantillas : null);
    if (!lista) return { error: 'No hay plantillas en ese contenido.' };
    var validas = lista.filter(function (p) {
      return p && typeof p === 'object' && String(p.titulo == null ? '' : p.titulo).trim() &&
        (String(p.texto == null ? '' : p.texto).trim() || String(p.texto_ca == null ? '' : p.texto_ca).trim());
    });
    var locales = leerPropias();
    var nuevas = 0, actualizadas = 0;
    validas.forEach(function (p) {
      var reg = {
        id: p.id ? String(p.id) : nuevoId(),
        categoria: p.categoria, tipo: p.tipo, ambito: Array.isArray(p.ambito) ? p.ambito : (p.ambito ? [p.ambito] : []),
        grupo: p.grupo || '', titulo: String(p.titulo).trim(), etiquetas: Array.isArray(p.etiquetas) ? p.etiquetas.join(' ') : (p.etiquetas || ''),
        texto: limpiarTexto(p.texto), texto_ca: limpiarTexto(p.texto_ca), nota: limpiarTexto(p.nota),
        actualizado: p.actualizado || new Date().toISOString()
      };
      var enlaces = limpiarEnlaces(p.enlaces);
      if (enlaces.length) reg.enlaces = enlaces;
      if (p.revisar) reg.revisar = String(p.revisar);
      var i = indicePorId(locales, reg.id);
      if (i >= 0) { locales[i] = reg; actualizadas++; } else { locales.push(reg); nuevas++; }
    });
    guardar('propias', locales);
    if (datos && Array.isArray(datos.favoritos)) {
      datos.favoritos.forEach(function (id) { if (typeof id === 'string' && favoritos.indexOf(id) < 0) favoritos.push(id); });
      guardar('favoritos', favoritos);
    }
    if (datos && Array.isArray(datos.ocultas)) {
      var oc = leerOcultas();
      datos.ocultas.forEach(function (id) { if (typeof id === 'string' && oc.indexOf(id) < 0) oc.push(id); });
      guardar('ocultas', oc);
    }
    recargar();
    return { nuevas: nuevas, actualizadas: actualizadas, descartadas: lista.length - validas.length };
  }

  function abrirImportar() {
    var cuerpo = '<p>Elige el archivo exportado o pega su contenido. Las plantillas con el mismo identificador se actualizan; el resto se añaden.</p>' +
      '<label class="boton-secundario boton-archivo">' + icono('importar') + 'Elegir archivo<input type="file" accept=".json,application/json,text/plain"></label>' +
      '<textarea class="area area-codigo" rows="7" placeholder="…o pega aquí el contenido exportado" aria-label="Contenido para importar"></textarea>' +
      '<p class="error-form" role="alert" hidden></p>' +
      '<div class="modal-acciones"><button type="button" class="boton-primario" data-imp="importar">Importar</button></div>';
    abrirModal({
      titulo: 'Importar plantillas',
      cuerpo: cuerpo,
      sinFoco: true,
      alMontar: function (m) {
        var ta = m.querySelector('textarea'), error = m.querySelector('.error-form');
        function procesar(texto) {
          if (!String(texto).trim()) { error.textContent = 'Pega el contenido exportado o elige un archivo.'; error.hidden = false; return; }
          var r = importarTexto(texto);
          if (r.error) { error.textContent = r.error; error.hidden = false; return; }
          cerrarTodo(function () {
            render();
            var partes = [];
            if (r.nuevas) partes.push(plural(r.nuevas, 'nueva', 'nuevas'));
            if (r.actualizadas) partes.push(plural(r.actualizadas, 'actualizada', 'actualizadas'));
            avisar(partes.length ? 'Importadas: ' + partes.join(', ') : 'No había plantillas nuevas');
          });
        }
        m.querySelector('input[type="file"]').addEventListener('change', function (e) {
          var f = e.target.files && e.target.files[0];
          if (!f) return;
          var lector = new FileReader();
          lector.onload = function () { ta.value = String(lector.result || ''); procesar(ta.value); };
          lector.onerror = function () { error.textContent = 'No se ha podido leer el archivo.'; error.hidden = false; };
          lector.readAsText(f, 'utf-8');
        });
        m.querySelector('[data-imp="importar"]').addEventListener('click', function () { procesar(ta.value); });
      }
    });
  }

  /* ------------------------------------------------------------------ */
  /* Eventos                                                             */
  /* ------------------------------------------------------------------ */

  var inputBuscar = $('#buscar');

  function idDeFila(el) {
    var li = el.closest ? el.closest('.fila') : null;
    return li ? li.getAttribute('data-id') : null;
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-accion]') : null;
    if (!el) return;
    var accion = el.getAttribute('data-accion');
    switch (accion) {
      case 'vista': cambiarVista(el.getAttribute('data-vista')); break;
      case 'tipo':
        estado.tipo = el.getAttribute('data-tipo');
        estado.activo = -1;
        guardarVista();
        renderCabecera();
        renderLista();
        irArribaLista();
        break;
      case 'ambito':
        estado.ambito = el.getAttribute('data-ambito');
        estado.activo = -1;
        guardarVista();
        renderCabecera();
        renderLista();
        break;
      case 'abrir': abrirPlantilla(idDeFila(el)); break;
      case 'copiar': copiarPlantilla(indice[idDeFila(el)], el); break;
      case 'copiar-detalle': copiarPlantilla(indice[estado.sel], el); break;
      case 'volver': cerrarCapa(); break;
      case 'favorito': alternarFavorito(estado.sel); break;
      case 'editar-texto': alternarRetoque(); break;
      case 'vaciar-campos': vaciarCampos(); break;
      case 'idioma': cambiarIdioma(el.getAttribute('data-idioma')); break;
      case 'ir-campo': {
        var control = $('#detalle [data-campo="' + cssEsc(el.getAttribute('data-clave')) + '"]');
        if (control) control.focus();
        break;
      }
      case 'editar': if (indice[estado.sel]) abrirEditor('editar', indice[estado.sel]); break;
      case 'duplicar': if (indice[estado.sel]) abrirEditor('duplicar', indice[estado.sel]); break;
      case 'nueva': abrirEditor('nueva', null); break;
      case 'ajustes': abrirAjustes(); break;
      case 'exportar': abrirExportar(); break;
      case 'importar': abrirImportar(); break;
      case 'ver-revisar': ponerBusqueda('revisar'); break;
      case 'mostrar-ocultas':
        guardar('ocultas', []);
        recargar();
        cerrarTodo(function () { render(); avisar('Se muestran de nuevo todas las plantillas'); });
        break;
      case 'borrar-locales':
        confirmar({ titulo: 'Borrar mis plantillas y cambios', texto: 'Se eliminarán tus plantillas propias y tus cambios, y se mostrarán de nuevo las ocultas. Los favoritos se mantienen.', boton: 'Borrar', peligro: true }, function () {
          guardar('propias', []);
          guardar('ocultas', []);
          recargar();
          cerrarTodo(function () { estado.sel = null; render(); avisar('Plantillas restablecidas'); });
        });
        break;
      case 'instalar':
        if (eventoInstalar) {
          var ev = eventoInstalar;
          eventoInstalar = null;
          cerrarTodo(function () { try { ev.prompt(); } catch (err) { /* */ } });
        }
        break;
      case 'borrar-busqueda': ponerBusqueda(''); inputBuscar.focus(); break;
    }
  });

  inputBuscar.addEventListener('input', function () { ponerBusqueda(inputBuscar.value, true); });
  $('#borrarBusqueda').addEventListener('click', function () { ponerBusqueda(''); inputBuscar.focus(); });

  var detalle = $('#detalle');
  function alCambiarCampo(e) {
    var el = e.target;
    if (!el.getAttribute || !el.hasAttribute('data-campo')) return;
    var p = indice[estado.sel];
    if (!p) return;
    var v = valores[p.id] || (valores[p.id] = {});
    v[el.getAttribute('data-campo')] = el.value;
    pintarTexto(p);
    actualizarVistaFila(p);
  }
  detalle.addEventListener('input', function (e) {
    if (e.target && e.target.id === 'textoEditable') { ajustarAltura(e.target); return; }
    alCambiarCampo(e);
  });
  detalle.addEventListener('change', alCambiarCampo);
  detalle.addEventListener('keydown', function (e) {
    // Intro en un campo pasa al siguiente; en el último, al botón Copiar.
    if (e.key !== 'Enter' || e.ctrlKey || e.metaKey || !e.target.hasAttribute || !e.target.hasAttribute('data-campo') || e.target.tagName !== 'INPUT') return;
    e.preventDefault();
    var controles = $$('#detalle [data-campo]');
    var i = controles.indexOf(e.target);
    var siguiente = controles[i + 1] || $('#detalle [data-accion="copiar-detalle"]');
    if (siguiente) siguiente.focus();
  });

  document.addEventListener('keydown', function (e) {
    var t = e.target || document.body;
    var etiqueta = t.tagName || '';
    var enCampo = etiqueta === 'INPUT' || etiqueta === 'TEXTAREA' || etiqueta === 'SELECT' || t.isContentEditable;
    var enBuscador = t === inputBuscar;
    var mod = e.ctrlKey || e.metaKey;

    if (modalAbierto()) {
      if (e.key === 'Escape') { e.preventDefault(); cerrarCapa(); }
      return;
    }
    if (mod && (e.key === 'k' || e.key === 'K' || ((e.key === 'f' || e.key === 'F') && !enCampo))) {
      e.preventDefault();
      enfocarBuscador();
      return;
    }
    if (mod && e.key === 'Enter') {
      if (indice[estado.sel]) { e.preventDefault(); copiarPlantilla(indice[estado.sel], $('#detalle [data-accion="copiar-detalle"]')); }
      return;
    }
    if (e.key === 'Escape') {
      if (estado.detalleAbierto) { e.preventDefault(); cerrarCapa(); return; }
      if (estado.editandoTexto && t.id === 'textoEditable') { e.preventDefault(); alternarRetoque(); return; }
      if (estado.q) { e.preventDefault(); ponerBusqueda(''); if (enBuscador) inputBuscar.focus(); return; }
      if (enBuscador) inputBuscar.blur();
      return;
    }
    if (enCampo && !enBuscador) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      if (t.getAttribute && t.getAttribute('role') === 'tab') return;
      e.preventDefault();
      moverActivo(e.key === 'ArrowDown' ? 1 : -1);
      return;
    }
    if (e.key === 'Enter' && (enBuscador || t === document.body || t === document.documentElement)) {
      // Solo copia si hay una plantilla marcada o una búsqueda escrita: Intro "suelto" no pisa el portapapeles.
      var indiceCopia = estado.activo >= 0 ? estado.activo : (enBuscador && estado.q.trim() ? 0 : -1);
      var p = visibles[indiceCopia];
      if (p) { e.preventDefault(); copiarPlantilla(p, botonCopiarDeFila(p.id)); }
      return;
    }
    if (!enCampo && !mod && !e.altKey && e.key && e.key.length === 1 && e.key !== ' ' && esAncho()) {
      enfocarBuscador(true);
    }
  });

  // Flechas izquierda/derecha entre pestañas (patrón de pestañas accesible)
  $('#pestanas').addEventListener('keydown', function (e) {
    if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
    var tabs = $$('#pestanas [role="tab"]');
    var i = tabs.indexOf(document.activeElement);
    if (i < 0) return;
    var j = (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    tabs[j].click();
    var nueva = $$('#pestanas [role="tab"]')[j];
    if (nueva) nueva.focus();
  });

  function enfocarBuscador(sinSeleccionar) {
    if (!esAncho()) irArribaLista();
    inputBuscar.focus();
    if (!sinSeleccionar) try { inputBuscar.select(); } catch (e) { /* */ }
  }

  function alDesplazar() {
    var y = esAncho() ? $('#listado').scrollTop : (window.pageYOffset || document.documentElement.scrollTop);
    $('.cabecera').classList.toggle('con-borde', y > 4);
  }
  window.addEventListener('scroll', alDesplazar, { passive: true });
  $('#listado').addEventListener('scroll', alDesplazar, { passive: true });

  escuchar(mqAncho, function () {
    if (esAncho() && estado.detalleAbierto) {
      estado.detalleAbierto = false;
      document.body.classList.remove('detalle-abierto');
      pila = pila.filter(function (c) { return c.tipo !== 'detalle'; });
    }
    render();
  });
  escuchar(mqOscuro, function () { if (ajustes.tema === 'auto') aplicarTema(); });

  var eventoInstalar = null;
  window.addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); eventoInstalar = e; });
  window.addEventListener('appinstalled', function () { eventoInstalar = null; avisar('Aplicación instalada'); });

  /* ------------------------------------------------------------------ */
  /* Plataformas                                                         */
  /* ------------------------------------------------------------------ */

  function configurarAndroid() {
    if (!esCapacitor()) return;
    var App = window.Capacitor.Plugins && window.Capacitor.Plugins.App;
    if (!App || !App.addListener) return;
    App.addListener('backButton', function () {
      if (pila.length) cerrarCapa();
      else if (estado.q) ponerBusqueda('');
      else if (App.minimizeApp) App.minimizeApp();
      else if (App.exitApp) App.exitApp();
    });
  }

  function registrarServiceWorker() {
    if (!('serviceWorker' in navigator) || ENTORNO !== 'app' || esCapacitor() || esElectron()) return;
    if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') return;
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () { /* sin conexión o no permitido */ });
    });
  }

  /* ------------------------------------------------------------------ */
  /* Arranque                                                            */
  /* ------------------------------------------------------------------ */

  function iniciar() {
    $$('[data-icono]').forEach(function (el) { el.innerHTML = icono(el.getAttribute('data-icono')); el.style.display = 'inline-flex'; });
    var marca = $('.marca-icono');
    if (marca) marca.innerHTML = MARCA_SVG;
    var atajo = $('#atajoBuscar');
    if (atajo && /Mac|iPhone|iPad/.test(navigator.platform || '')) atajo.textContent = '⌘ K';

    prepararBase();
    recargar();
    aplicarTema();
    aplicarLetra();
    restaurarVista();
    if (usarHistorial) try { history.replaceState({ pc: true, n: 0 }, ''); } catch (e) { /* */ }
    render();
    configurarAndroid();
    registrarServiceWorker();

    var punteroFino = window.matchMedia && window.matchMedia('(pointer: fine)').matches;
    if (esAncho() && punteroFino) setTimeout(function () { try { inputBuscar.focus({ preventScroll: true }); } catch (e) { /* */ } }, 60);

    // Ganchos para pruebas automáticas
    window.__plantillas = { estado: estado, todas: function () { return todas; }, rellenar: rellenar, buscar: buscar, version: VERSION_APP, ajustes: ajustes };
  }

  iniciar();
})();
