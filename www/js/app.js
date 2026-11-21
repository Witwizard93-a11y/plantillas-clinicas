/* Plantillas Clínicas 2 · lógica de la app.
   El contenido clínico NO está aquí: está en contenido/*.js. */
(function () {
  'use strict';

  var VERSION_APP = '2.1.0';
  var ENTORNO = window.PC_ENTORNO || 'app'; // 'vista-previa' en el archivo único de vista previa
  var C = window.CONTENIDO || {};

  var SECCIONES = [
    { id: 'inicio', nombre: 'Inicio' },
    { grupo: 'Paciente crítico' },
    { id: 'news2', nombre: 'NEWS2', texto: 'Calculadora de alerta precoz', clase: 'tarjeta-critica' },
    { id: 'news', nombre: 'NEWS', texto: 'Calculadora de alerta precoz, versión original de 2012', clase: 'tarjeta-critica' },
    { id: 'abcde', nombre: 'ABCDE', texto: 'Qué mirar y qué hacer en cada letra', clase: 'tarjeta-critica' },
    { id: 'rcp', nombre: 'RCP', texto: 'Ritmos desfibrilables y no desfibrilables · 4 H y 4 T', clase: 'tarjeta-critica' },
    { grupo: 'Códigos' },
    { id: 'iam', nombre: 'Código IAM', texto: 'Activación, reperfusión y tratamiento inicial', clase: 'tarjeta-codigo' },
    { id: 'ictus', nombre: 'Código Ictus', texto: 'Activación, escala RACE y destino', clase: 'tarjeta-codigo' },
    { id: 'sepsis', nombre: 'Código Sepsis', texto: 'Riesgo vital, NEWS y sospecha de infección', clase: 'tarjeta-codigo' },
    { id: 'ppt', nombre: 'Código PPT', texto: 'Politraumatizado: prioridades 0 a 3 y destino', clase: 'tarjeta-codigo' },
    { id: 'suicidio', nombre: 'Código Riesgo de Suicidio', texto: 'MINI, activación y seguimiento', clase: 'tarjeta-codigo' },
    { grupo: 'Pediatría' },
    { id: 'urgped', nombre: 'Urgencias pediátricas', texto: 'Protocolos de la SEUP: manejo y tratamiento', clase: 'tarjeta-pediatria' },
    { grupo: 'Consulta' },
    { id: 'plantillas', nombre: 'Plantillas', texto: 'Adultos, Pediatría y Traumatología, para copiar', clase: 'tarjeta-plantillas' }
  ];

  /* ---------- utilidades ---------- */
  var ESC = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return ESC[c]; }); }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function lista(items, clase) {
    return '<ul class="puntos' + (clase ? ' ' + clase : '') + '">' + items.map(function (i) { return '<li>' + tx(i) + '</li>'; }).join('') + '</ul>';
  }
  function leerLocal(clave) { try { return localStorage.getItem(clave); } catch (e) { return null; } }
  function guardarLocal(clave, valor) { try { localStorage.setItem(clave, valor); } catch (e) {} }

  var temporizadorToast = null;
  function avisar(texto) {
    var t = $('#toast');
    t.textContent = texto;
    t.classList.add('visible');
    clearTimeout(temporizadorToast);
    temporizadorToast = setTimeout(function () { t.classList.remove('visible'); }, 1800);
  }

  function esCapacitor() {
    var cap = window.Capacitor;
    return !!(cap && typeof cap.isNativePlatform === 'function' && cap.isNativePlatform());
  }
  function esElectron() { return !!(window.plantillasNative && window.plantillasNative.plataforma === 'electron'); }
  function puedeDescargar() { return ENTORNO !== 'vista-previa' && !esCapacitor(); }

  function copiarConExecCommand(texto) {
    var ta = document.createElement('textarea');
    ta.value = texto; ta.setAttribute('readonly', '');
    ta.style.position = 'fixed'; ta.style.opacity = '0';
    document.body.appendChild(ta); ta.select();
    var ok = false;
    try { ok = document.execCommand('copy'); } catch (e) {}
    document.body.removeChild(ta);
    return ok;
  }
  function copiarEnNavegador(texto) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(texto).then(function () { return true; }, function () { return copiarConExecCommand(texto); });
    }
    return Promise.resolve(copiarConExecCommand(texto));
  }
  // Windows (Electron) y Android (Capacitor) copian con su portapapeles nativo; la web, con el del navegador.
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
  function copiar(texto, boton) {
    escribirPortapapeles(String(texto)).then(function (ok) {
      if (!ok) { avisar('No se ha podido copiar'); return; }
      avisar('Copiado');
      if (boton) { boton.classList.add('copiado'); setTimeout(function () { boton.classList.remove('copiado'); }, 900); }
    });
  }
  // En Android los enlaces externos se abren fuera de la app sin target.
  function enlaceHTML(url, titulo) {
    return '<a href="' + esc(url) + '"' + (esCapacitor() ? '' : ' target="_blank"') + ' rel="noopener noreferrer">' + esc(titulo) + '</a>';
  }

  /* ---------- piezas comunes ---------- */
  function cabecera(titulo, subtitulo) {
    return '<a class="volver" href="#/inicio">‹ Inicio</a>' +
      '<header class="cabecera"><h1>' + esc(titulo) + '</h1>' + (subtitulo ? '<p>' + esc(subtitulo) + '</p>' : '') + '</header>';
  }
  function pie(doc) {
    var h = '';
    if (doc.revisar && doc.revisar.length) {
      h += '<section class="revisar"><h2>Pendiente de validar</h2>' + lista(doc.revisar) + '</section>';
    }
    if (doc.aviso) h += '<p class="nota">' + esc(doc.aviso) + '</p>';
    if (doc.fuentes && doc.fuentes.length) {
      h += '<section class="fuentes"><strong>Fuentes</strong><ul>' + doc.fuentes.map(function (f) {
        return f.url ? '<li>' + enlaceHTML(f.url, f.titulo) + '</li>' : '<li>' + esc(f.titulo) + '</li>';
      }).join('') + '</ul></section>';
    }
    return h;
  }

  /* ---------- bloques de algoritmo ---------- */
  function bloqueHTML(b, doc) {
    if (b.tipo === 'paso') {
      return '<div class="paso paso-' + esc(b.tono || 'accion') + '"><div class="paso-titulo">' + tx(b.titulo) + '</div>' +
        (b.texto && !b.items ? '<p class="paso-texto">' + tx(b.texto) + '</p>' : '') +
        (b.items && b.texto && b.tono === 'inicio' ? '<p class="paso-texto">' + tx(b.texto) + '</p>' : '') +
        (b.items ? lista(b.items) : '') +
        (b.items && b.texto && b.tono !== 'inicio' ? '<p class="paso-texto">' + tx(b.texto) + '</p>' : '') +
        '</div>';
    }
    if (b.tipo === 'ramas') {
      return '<div class="ramas">' + b.ramas.map(function (r) {
        return '<section class="rama rama-' + esc(r.tono) + '"><div class="rama-cabecera"><div class="rama-titulo">' + esc(r.titulo) + '</div>' +
          (r.subtitulo ? '<div class="rama-subtitulo">' + esc(r.subtitulo) + '</div>' : '') + '</div>' +
          bloquesHTML(r.bloques, doc) + '</section>';
      }).join('') + '</div>';
    }
    if (b.tipo === 'lista') return '<section class="panel"><h2>' + esc(b.titulo) + '</h2>' + lista(b.items) + '</section>';
    if (b.tipo === 'tabla') {
      return '<section class="panel"><h2>' + esc(b.titulo) + '</h2><div class="tabla-caja"><table><thead><tr>' +
        b.columnas.map(function (c) { return '<th scope="col">' + esc(c) + '</th>'; }).join('') + '</tr></thead><tbody>' +
        b.filas.map(function (f) {
          var iMax = b.columnas.map(function (c) { return /^m[aá]x/i.test(c); }).indexOf(true);
          return '<tr>' + f.map(function (c, i) { return '<td>' + tx(c, iMax >= 0 && i !== iMax ? f[iMax] : '', true) + '</td>'; }).join('') + '</tr>';
        }).join('') +
        '</tbody></table></div>' + (b.nota ? '<p class="nota">' + tx(b.nota) + '</p>' : '') + '</section>';
    }
    if (b.tipo === 'nota') return '<p class="nota">' + tx(b.texto) + '</p>';
    if (b.tipo === 'race' && doc && doc.race) return raceHTML(doc.race);
    if (b.tipo === 'escala') return escalaHTML(b);
    if (b.tipo === 'puntuacion') return puntuacionHTML(b);
    return '';
  }
  // Entre dos pasos consecutivos se dibuja una flecha.
  function bloquesHTML(bloques, doc) {
    var h = '<div class="algoritmo">';
    bloques.forEach(function (b, i) {
      var previo = bloques[i - 1];
      var enCadena = previo && (previo.tipo === 'paso' || previo.tipo === 'ramas') && (b.tipo === 'paso' || b.tipo === 'ramas');
      if (enCadena) h += '<div class="flecha" aria-hidden="true"></div>';
      h += bloqueHTML(b, doc);
    });
    return h + '</div>';
  }

  /* ---------- Inicio ---------- */
  function vistaInicio() {
    var h = '<div class="vista vista-ancha"><h1 class="inicio-marca">Plantillas Clínicas</h1>' +
      '<p class="inicio-lema">Herramientas para la consulta y la urgencia de medicina de familia.</p>';
    var abierta = false;
    SECCIONES.forEach(function (s) {
      if (s.grupo) {
        if (abierta) h += '</div>';
        h += '<h2 class="grupo-titulo">' + esc(s.grupo) + '</h2><div class="rejilla">';
        abierta = true;
      } else if (s.id !== 'inicio') {
        h += '<a class="tarjeta ' + esc(s.clase || '') + '" href="#/' + s.id + '"><span class="tarjeta-titulo">' + esc(s.nombre) +
          '</span><span class="tarjeta-texto">' + esc(s.texto) + '</span></a>';
      }
    });
    if (abierta) h += '</div>';
    h += '<p class="pie-inicio">Versión ' + esc(VERSION_APP) + '. Herramienta de apoyo para profesionales sanitarios: no sustituye al juicio clínico ni a los protocolos del centro.</p></div>';
    return h;
  }

  /* ---------- NEWS2 ---------- */
  function newsVacio() { return { fr: '', spo2: '', escala: '1', oxigeno: '', tas: '', fc: '', conciencia: '', temperatura: '' }; }
  var estadosNews = { news2: newsVacio(), news: newsVacio() };
  var newsId = 'news2';                 // calculadora visible: 'news2' o 'news' (original de 2012)
  var news = estadosNews.news2;
  function usarNews(id) { newsId = id; news = estadosNews[id]; }
  var NEWS_CAMPOS = [
    { id: 'fr', nombre: 'Frecuencia respiratoria', unidad: 'rpm', min: 0, max: 80 },
    { id: 'spo2', nombre: 'SpO2', unidad: '%', min: 50, max: 100 },
    { id: 'tas', nombre: 'Tensión arterial sistólica', unidad: 'mmHg', min: 30, max: 300 },
    { id: 'fc', nombre: 'Frecuencia cardíaca', unidad: 'lpm', min: 0, max: 300 },
    { id: 'temperatura', nombre: 'Temperatura', unidad: '°C', min: 25, max: 45, decimal: true }
  ];
  function numero(txt, decimal) {
    var t = String(txt).trim().replace(',', '.');
    if (t === '' || !/^\d+(\.\d+)?$/.test(t)) return null;
    var n = parseFloat(t);
    return decimal ? Math.round(n * 10) / 10 : Math.round(n);
  }
  function porTramos(valor, tramos) {
    for (var i = 0; i < tramos.length; i++) {
      if (tramos[i].hasta === undefined || valor <= tramos[i].hasta) return tramos[i].puntos;
    }
    return null;
  }
  function valorCampo(def) {
    var n = numero(news[def.id], def.decimal);
    if (n === null || n < def.min || n > def.max) return null;
    return n;
  }
  // Devuelve { puntos: {campo: n|null}, total, faltan, alguno3 }
  function calcularNews() {
    var T = C[newsId].tramos, p = {};
    var v = {};
    NEWS_CAMPOS.forEach(function (d) { v[d.id] = valorCampo(d); });
    p.fr = v.fr === null ? null : porTramos(v.fr, T.fr);
    p.tas = v.tas === null ? null : porTramos(v.tas, T.tas);
    p.fc = v.fc === null ? null : porTramos(v.fc, T.fc);
    p.temperatura = v.temperatura === null ? null : porTramos(v.temperatura, T.temperatura);
    p.oxigeno = news.oxigeno === '' ? null : T.oxigeno[news.oxigeno];
    p.conciencia = news.conciencia === '' ? null : T.conciencia[news.conciencia];
    if (v.spo2 === null) p.spo2 = null;
    else if (newsId === 'news') p.spo2 = porTramos(v.spo2, T.spo2);
    else if (news.escala === '1') p.spo2 = porTramos(v.spo2, T.spo2Escala1);
    else if (v.spo2 <= 92) p.spo2 = porTramos(v.spo2, T.spo2Escala2Base);
    else if (news.oxigeno === '') p.spo2 = null;            // hace falta saber si lleva oxígeno
    else p.spo2 = news.oxigeno === 'oxigeno' ? porTramos(v.spo2, T.spo2Escala2ConOxigeno) : 0;
    var total = 0, faltan = 0, alguno3 = false;
    Object.keys(p).forEach(function (k) {
      if (p[k] === null) faltan++; else { total += p[k]; if (p[k] === 3) alguno3 = true; }
    });
    return { puntos: p, valores: v, total: total, faltan: faltan, alguno3: alguno3 };
  }
  function respuestaNews(r) {
    var R = C[newsId].respuestas;
    if (r.total >= 7) return R.alto;
    if (r.total >= 5) return R.medio;
    if (r.alguno3) return R.rojo;
    if (r.total === 0) return R.cero;
    return R.bajo;
  }
  function seg(grupo, valor, texto, actual) {
    return '<button type="button" class="segmento" data-grupo="' + grupo + '" data-valor="' + valor + '" aria-pressed="' + (actual === valor) + '">' + esc(texto) + '</button>';
  }
  function campoNumero(def) {
    return '<div class="campo"><label class="campo-nombre" for="n-' + def.id + '">' + esc(def.nombre) + '</label>' +
      '<span class="puntos-campo" id="p-' + def.id + '">–</span>' +
      '<div class="campo-control"><input type="text" id="n-' + def.id + '" data-campo="' + def.id + '" inputmode="' + (def.decimal ? 'decimal' : 'numeric') +
      '" autocomplete="off" value="' + esc(news[def.id]) + '"><span class="unidad">' + esc(def.unidad) + '</span></div></div>';
  }
  function vistaNews() {
    var d = C[newsId], original = newsId === 'news', porId = {};
    NEWS_CAMPOS.forEach(function (c) { porId[c.id] = c; });
    return '<div class="vista vista-ancha">' + cabecera(d.titulo, d.subtitulo) +
      '<div class="calc"><section class="panel" style="margin-top:0"><div class="campos">' +
      campoNumero(porId.fr) +
      campoNumero(porId.spo2) +
      (original ? '' : '<div class="campo"><span class="campo-nombre">Escala de SpO2</span><span></span>' +
        '<div class="campo-control"><div class="segmentos">' + seg('escala', '1', 'Escala 1', news.escala) + seg('escala', '2', 'Escala 2 (hipercapnia)', news.escala) + '</div></div>' +
        '<p class="campo-ayuda">' + esc(d.notas[0]) + '</p></div>') +
      '<div class="campo"><span class="campo-nombre">Aire u oxígeno</span><span class="puntos-campo" id="p-oxigeno">–</span>' +
        '<div class="campo-control"><div class="segmentos">' + seg('oxigeno', 'aire', 'Aire ambiente', news.oxigeno) + seg('oxigeno', 'oxigeno', 'Oxígeno', news.oxigeno) + '</div></div></div>' +
      campoNumero(porId.tas) +
      campoNumero(porId.fc) +
      '<div class="campo"><span class="campo-nombre">Conciencia</span><span class="puntos-campo" id="p-conciencia">–</span>' +
        '<div class="campo-control"><div class="segmentos">' + seg('conciencia', 'alerta', 'Alerta', news.conciencia) + (original ? seg('conciencia', 'vpu', 'V, P o U', news.conciencia) : seg('conciencia', 'cvpu', 'Confusión nueva, V, P o U', news.conciencia)) + '</div></div>' +
        '<p class="campo-ayuda">' + esc(d.notas[1]) + '</p></div>' +
      campoNumero(porId.temperatura) +
      '</div></section>' +
      '<aside class="calc-resultado"><div class="resultado" id="newsResultado" aria-live="polite"></div>' +
      '<div class="acciones"><button type="button" class="boton boton-primario" id="newsCopiar">Copiar resultado</button>' +
      '<button type="button" class="boton" id="newsBorrar">Borrar</button></div></aside></div>' +
      '<p class="nota">' + esc(original ? d.notas[0] + ' ' + d.notas[2] : d.notas[2]) + '</p>' + pie(d) + '</div>';
  }
  function pintarNews() {
    var r = calcularNews();
    Object.keys(r.puntos).forEach(function (k) {
      var el = $('#p-' + k); if (!el) return;
      var p = r.puntos[k];
      el.textContent = p === null ? '–' : p;
      if (p === null) el.removeAttribute('data-p'); else el.setAttribute('data-p', p);
    });
    NEWS_CAMPOS.forEach(function (def) {
      var inp = $('#n-' + def.id);
      inp.classList.toggle('fuera', String(news[def.id]).trim() !== '' && valorCampo(def) === null);
    });
    var caja = $('#newsResultado'), h;
    if (r.faltan) {
      caja.removeAttribute('data-nivel');
      h = '<div class="resultado-etiqueta">' + esc(C[newsId].titulo) + '</div><div class="resultado-cifra">' + (r.faltan === 7 ? '–' : r.total) + '</div>' +
        '<p class="resultado-pendiente">' + (r.faltan === 7 ? 'Introduce los 7 parámetros.' : 'Puntuación parcial: ' + (r.faltan === 1 ? 'falta 1 parámetro.' : 'faltan ' + r.faltan + ' parámetros.')) + '</p>';
    } else {
      var resp = respuestaNews(r);
      caja.setAttribute('data-nivel', resp.nivel);
      h = '<div class="resultado-etiqueta">' + esc(C[newsId].titulo) + '</div><div class="resultado-cifra">' + r.total + '</div>' +
        '<div class="resultado-riesgo">Riesgo: ' + esc(resp.riesgo) + '</div>' +
        '<div class="resultado-monit">' + esc(resp.monitorizacion) + '</div>' + lista(resp.respuesta);
    }
    caja.innerHTML = h;
    $('#newsCopiar').disabled = r.faltan > 0;
  }
  function textoNews() {
    var r = calcularNews(), v = r.valores, p = r.puntos, resp = respuestaNews(r);
    var t = String(v.temperatura.toFixed(1)).replace('.', ',');
    return C[newsId].titulo + ': ' + r.total + ' puntos. Riesgo: ' + resp.riesgo.toLowerCase() + '.\n' +
      'FR ' + v.fr + ' rpm [' + p.fr + ']; SpO2 ' + v.spo2 + ' %' + (newsId === 'news' ? '' : ' (escala ' + news.escala + ')') + ' [' + p.spo2 + ']; ' +
      (news.oxigeno === 'oxigeno' ? 'con oxígeno' : 'aire ambiente') + ' [' + p.oxigeno + ']; TAS ' + v.tas + ' mmHg [' + p.tas + ']; FC ' + v.fc + ' lpm [' + p.fc + ']; ' +
      'conciencia: ' + (news.conciencia === 'alerta' ? 'alerta' : newsId === 'news' ? 'V/P/U' : 'confusión nueva o V/P/U') + ' [' + p.conciencia + ']; T.ª ' + t + ' °C [' + p.temperatura + '].';
  }

  /* ---------- RACE ---------- */
  var race = { lado: '', facial: '', brazo: '', pierna: '', mirada: '', cortical: '' };
  function raceItems(d) {
    var items = d.items.slice();
    if (race.lado) items.push(d.cortical[race.lado]);
    return items;
  }
  function raceHTML(d) {
    var h = '<section class="panel" id="race"><h2>' + esc(d.titulo) + '</h2><div class="campos">' +
      '<div class="campo"><span class="campo-nombre">Lado de la debilidad</span><span></span><div class="campo-control"><div class="segmentos">' +
      d.lado.map(function (l) { return seg('race-lado', l.id, l.nombre, race.lado); }).join('') + '</div></div></div>';
    raceItems(d).forEach(function (it) {
      var clave = (it.id === 'afasia' || it.id === 'agnosia') ? 'cortical' : it.id;
      h += '<div class="campo"><span class="campo-nombre">' + esc(it.nombre) + '</span><span class="puntos-campo"' + (race[clave] === '' ? '' : ' data-p="' + (race[clave] === '0' ? 0 : 1) + '"') + '>' + (race[clave] === '' ? '–' : race[clave]) + '</span>' +
        '<div class="campo-control"><div class="segmentos">' + it.opciones.map(function (o) { return seg('race-' + clave, String(o[1]), o[0], race[clave]); }).join('') + '</div></div>' +
        '<p class="campo-ayuda">' + esc(it.ayuda) + '</p></div>';
    });
    if (!race.lado) h += '<p class="campo-ayuda" style="padding-top:12px">Elige el lado para valorar la afasia (debilidad derecha) o la agnosia (debilidad izquierda).</p>';
    var claves = ['facial', 'brazo', 'pierna', 'mirada', 'cortical'];
    var completos = race.lado && claves.every(function (k) { return race[k] !== ''; });
    var total = claves.reduce(function (s, k) { return s + (race[k] === '' ? 0 : +race[k]); }, 0);
    h += '</div><div class="resultado" style="margin-top:14px"' + (completos ? ' data-nivel="' + (total >= d.umbral ? 'alto' : 'bajo') + '"' : '') + '>' +
      '<div class="resultado-etiqueta">RACE</div><div class="resultado-cifra">' + (completos ? total : '–') + '</div>' +
      '<p class="resultado-pendiente">' + esc(d.textoUmbral) + '</p></div>' +
      '<div class="acciones"><button type="button" class="boton boton-primario" id="raceCopiar"' + (completos ? '' : ' disabled') + '>Copiar resultado</button>' +
      '<button type="button" class="boton" id="raceBorrar">Borrar</button></div></section>';
    return h;
  }
  function textoRace() {
    var d = C.ictus.race, total = 0, partes = [];
    raceItems(d).forEach(function (it) {
      var clave = (it.id === 'afasia' || it.id === 'agnosia') ? 'cortical' : it.id;
      total += +race[clave];
      partes.push(it.nombre.toLowerCase() + ' ' + race[clave]);
    });
    return 'RACE: ' + total + ' puntos (debilidad del hemicuerpo ' + (race.lado === 'izq' ? 'izquierdo' : 'derecho') + '): ' + partes.join('; ') + '.';
  }

  /* ---------- escala de casillas (bloque "escala") ---------- */
  var escalas = {};
  function bloqueEscala(id) {
    var hallado = null;
    Object.keys(C).forEach(function (k) {
      (C[k].bloques || []).forEach(function (b) { if (b.tipo === 'escala' && b.id === id) hallado = b; });
    });
    ((C.urgped && C.urgped.protocolos) || []).forEach(function (pr) {
      (pr.bloques || []).forEach(function (b) { if (b.tipo === 'escala' && b.id === id) hallado = b; });
    });
    return hallado;
  }
  function totalEscala(b) {
    var m = escalas[b.id] || {};
    return b.items.reduce(function (s, it, i) { return s + (m[i] ? it[1] : 0); }, 0);
  }
  function bandaEscala(b, total) {
    for (var i = 0; i < b.bandas.length; i++) if (total >= b.bandas[i].desde) return b.bandas[i];
    return null;
  }
  function escalaHTML(b) {
    var m = escalas[b.id] || {}, total = totalEscala(b), banda = bandaEscala(b, total);
    var h = '<section class="panel" id="escala-' + esc(b.id) + '"><h2>' + esc(b.titulo) + '</h2><div class="campos">';
    b.items.forEach(function (it, i) {
      h += '<div class="campo"><span class="campo-nombre">' + esc(it[0]) + '</span><span class="puntos-campo"' + (m[i] ? ' data-p="1"' : '') + '>' + it[1] + '</span>' +
        '<div class="campo-control"><div class="segmentos">' +
        '<button type="button" class="segmento" data-escala="' + esc(b.id) + '" data-item="' + i + '" data-valor="0" aria-pressed="' + !m[i] + '">No</button>' +
        '<button type="button" class="segmento" data-escala="' + esc(b.id) + '" data-item="' + i + '" data-valor="1" aria-pressed="' + !!m[i] + '">Sí</button>' +
        '</div></div></div>';
    });
    h += '</div><div class="resultado" style="margin-top:14px"' + (banda ? ' data-nivel="' + banda.nivel + '"' : '') + '>' +
      '<div class="resultado-etiqueta">Puntuación</div><div class="resultado-cifra">' + total + '</div>' +
      '<p class="resultado-riesgo">' + esc(banda ? banda.texto : 'Sin respuestas afirmativas.') + '</p></div>' +
      '<div class="acciones"><button type="button" class="boton boton-primario" data-escala-copiar="' + esc(b.id) + '">Copiar resultado</button>' +
      '<button type="button" class="boton" data-escala-borrar="' + esc(b.id) + '">Borrar</button></div></section>';
    return h;
  }
  function textoEscala(b) {
    var m = escalas[b.id] || {}, total = totalEscala(b), banda = bandaEscala(b, total);
    var si = b.items.filter(function (it, i) { return m[i]; }).map(function (it) { return it[0] + ' Sí (' + it[1] + ').'; });
    return b.titulo.split(' · ')[0] + ': ' + total + ' puntos. ' + (banda ? banda.texto : 'Sin respuestas afirmativas.') + (si.length ? '\n' + si.join(' ') : '');
  }

  /* ---------- puntuaciones con varias opciones por ítem (p. ej. Pulmonary Score) ---------- */
  var puntuaciones = {};
  function bloquePuntuacion(id) {
    var hallado = null;
    function buscar(bloques) {
      (bloques || []).forEach(function (b) {
        if (b.tipo === 'puntuacion' && b.id === id) hallado = b;
        if (b.tipo === 'ramas') b.ramas.forEach(function (r) { buscar(r.bloques); });
      });
    }
    ((C.urgped && C.urgped.protocolos) || []).forEach(function (pr) { buscar(pr.bloques); });
    Object.keys(C).forEach(function (k) { buscar(C[k].bloques); });
    return hallado;
  }
  function grupoDe(b, i) {
    var g = (b.grupoUnico || []).filter(function (x) { return x.indexOf(i) >= 0; })[0];
    return g || [i];
  }
  function estadoPuntuacion(b) {
    var m = puntuaciones[b.id] || {}, total = 0, vistos = {}, completos = true;
    b.items.forEach(function (it, i) {
      if (m[i] != null) total += it.opciones[m[i]][1];
      var g = grupoDe(b, i), clave = g.join(',');
      if (vistos[clave]) return;
      vistos[clave] = true;
      if (!g.some(function (j) { return m[j] != null; })) completos = false;
    });
    var banda = null;
    for (var k = 0; k < b.bandas.length; k++) if (total >= b.bandas[k].desde) { banda = b.bandas[k]; break; }
    return { total: total, completos: completos, banda: banda };
  }
  function puntuacionHTML(b) {
    var m = puntuaciones[b.id] || {}, e = estadoPuntuacion(b);
    var h = '<section class="panel" id="puntuacion-' + esc(b.id) + '"><h2>' + esc(b.titulo) + '</h2>' +
      (b.intro ? '<p class="campo-ayuda" style="margin-bottom:10px">' + esc(b.intro) + '</p>' : '') + '<div class="campos">';
    b.items.forEach(function (it, i) {
      h += '<div class="campo"><span class="campo-nombre">' + esc(it.nombre) + '</span><span class="puntos-campo"' +
        (m[i] != null ? ' data-p="' + it.opciones[m[i]][1] + '"' : '') + '>' + (m[i] != null ? it.opciones[m[i]][1] : '–') + '</span>' +
        '<div class="campo-control"><div class="segmentos">' + it.opciones.map(function (o, j) {
          return '<button type="button" class="segmento" data-punt="' + esc(b.id) + '" data-item="' + i + '" data-valor="' + j + '" aria-pressed="' + (m[i] === j) + '">' + esc(o[0]) + ' <small>(' + o[1] + ')</small></button>';
        }).join('') + '</div></div></div>';
    });
    var texto = e.completos ? (e.banda ? e.banda.texto : '') : 'Faltan ítems por puntuar.';
    h += '</div><div class="resultado" style="margin-top:14px"' + (e.completos && e.banda ? ' data-nivel="' + e.banda.nivel + '"' : '') + '>' +
      '<div class="resultado-etiqueta">Puntuación</div><div class="resultado-cifra">' + e.total + '</div>' +
      '<p class="resultado-riesgo">' + esc(texto) + '</p></div>' +
      (b.nota ? '<p class="nota">' + tx(b.nota) + '</p>' : '') +
      '<div class="acciones"><button type="button" class="boton boton-primario" data-punt-copiar="' + esc(b.id) + '">Copiar resultado</button>' +
      '<button type="button" class="boton" data-punt-borrar="' + esc(b.id) + '">Borrar</button></div></section>';
    return h;
  }
  function textoPuntuacion(b) {
    var m = puntuaciones[b.id] || {}, e = estadoPuntuacion(b);
    var det = b.items.map(function (it, i) { return m[i] != null ? it.nombre + ': ' + it.opciones[m[i]][0] + ' (' + it.opciones[m[i]][1] + ').' : ''; }).filter(Boolean);
    return b.titulo + ': ' + e.total + ' puntos. ' + (e.completos ? (e.banda ? e.banda.texto : '') : 'Incompleto.') + (det.length ? '\n' + det.join(' ') : '');
  }

  /* ---------- Urgencias pediátricas (protocolos SEUP) ---------- */
  function subRuta() {
    var partes = (location.hash || '').replace(/^#\/?/, '').split('/');
    return partes[1] || '';
  }
  function protocoloPorId(id) {
    return ((C.urgped && C.urgped.protocolos) || []).filter(function (p) { return p.id === id; })[0] || null;
  }
  // Si el protocolo tiene dosis por kg, se añade el campo de peso y cada dosis muestra su cálculo al lado.
  function tieneDosisKg(p) { return /\/\s*kg/.test(JSON.stringify(p.bloques)); }
  function cuerpoConDosis(p) {
    if (!tieneDosisKg(p)) return bloquesHTML(p.bloques, p);
    anotarActivo = true;
    try {
      return pesoPanelHTML('Dosis según el peso', 'Con un peso válido, cada dosis por kg del protocolo muestra al lado la dosis calculada (en verde), con el máximo o el mínimo que indique el texto. Comprueba los tramos por edad o peso que dé el propio texto.') +
        bloquesHTML(p.bloques, p);
    } finally { anotarActivo = false; }
  }
  function vistaUrgped() {
    var d = C.urgped, p = protocoloPorId(subRuta());
    if (p && p.bloques) {
      return '<div class="vista vista-ancha"><a class="volver volver-siempre" href="#/urgped">‹ Urgencias pediátricas</a>' +
        '<header class="cabecera"><h1>' + esc(p.titulo) + '</h1>' + (p.subtitulo ? '<p>' + esc(p.subtitulo) + '</p>' : '') + '</header>' +
        cuerpoConDosis(p) + pie(p) + '</div>';
    }
    var hechos = d.protocolos.filter(function (x) { return x.bloques; });
    var pendientes = d.protocolos.filter(function (x) { return !x.bloques; });
    var h = '<div class="vista vista-ancha">' + cabecera(d.titulo, d.subtitulo) + '<div class="rejilla">';
    hechos.forEach(function (x) {
      h += '<a class="tarjeta tarjeta-pediatria" href="#/urgped/' + esc(x.id) + '"><span class="tarjeta-titulo">' + esc(x.titulo) +
        '</span><span class="tarjeta-texto">' + esc(x.texto || '') + '</span></a>';
    });
    h += '</div>';
    if (pendientes.length) {
      h += '<h2 class="grupo-titulo">En preparación</h2><ul class="puntos pendientes">' +
        pendientes.map(function (x) { return '<li>' + esc(x.titulo) + '</li>'; }).join('') + '</ul>';
    }
    h += '<p class="nota">Resumen práctico de los Protocolos diagnósticos y terapéuticos en Urgencias de Pediatría de la SEUP (4.ª edición, 2024). No sustituye al documento original ni al juicio clínico.</p>' +
      '<section class="fuentes"><strong>Fuentes</strong><ul><li>' + enlaceHTML('https://seup.org/protocolos/', 'SEUP · Protocolos') + '</li></ul></section></div>';
    return h;
  }

  /* ---------- vistas de contenido ---------- */
  var rcpVersion = 'adulto';
  function vistaRcp() {
    var d = C.rcp, v = d.versiones.filter(function (x) { return x.id === rcpVersion; })[0] || d.versiones[0];
    return '<div class="vista vista-ancha">' + cabecera(d.titulo, d.subtitulo) +
      '<div class="segmentos segmentos-anchos versiones">' + d.versiones.map(function (x) { return seg('rcp', x.id, x.nombre, v.id); }).join('') + '</div>' +
      (v.dosisPeso ? dosisHTML(v.dosisPeso) : '') +
      bloquesHTML(v.bloques, d) + pie(v) + '</div>';
  }

  /* ---------- Peso del niño: compartido por RCP pediátrica y Urgencias pediátricas ---------- */
  var peso = { kg: '', edad: '', unidad: 'años' };
  var PESO_MIN = 0.5, PESO_MAX = 150;
  function cifra(n) {
    var dec = n < 1 ? 2 : n < 10 ? 1 : 0;
    var f = Math.pow(10, dec), r = Math.round(n * f) / f;
    return String(r).replace('.', ',');
  }
  function pesoValido() {
    var t = String(peso.kg).trim();
    if (!/^\d+([.,]\d+)?$/.test(t)) return null;
    var n = parseFloat(t.replace(',', '.'));
    return n >= PESO_MIN && n <= PESO_MAX ? n : null;
  }
  // Fórmulas APLS 2011 (Seddon et al., ISRN Pediatr 2012): 1-11 meses, 1-5 años y 6-12 años.
  function pesoPorEdad() {
    var t = String(peso.edad).trim();
    if (!/^\d+$/.test(t)) return { error: t === '' ? '' : 'Escribe la edad en números enteros.' };
    var e = +t;
    if (peso.unidad === 'meses') {
      if (e < 1 || e > 11) return { error: 'La fórmula en meses es para 1-11 meses. Por encima, usa años.' };
      return { kg: 0.5 * e + 4, formula: '(0,5 × meses) + 4' };
    }
    if (e < 1 || e > 12) return { error: 'La fórmula por edad es para 1-12 años.' };
    if (e <= 5) return { kg: 2 * e + 8, formula: '(2 × años) + 8' };
    return { kg: 3 * e + 7, formula: '(3 × años) + 7' };
  }
  function pesoPanelHTML(titulo, ayuda) {
    return '<section class="panel peso-panel" style="margin-top:0"><h2>' + esc(titulo) + '</h2><div class="campos">' +
      '<div class="campo"><label class="campo-nombre" for="pesoKg">Peso del niño</label><span></span>' +
      '<div class="campo-control"><input type="text" id="pesoKg" inputmode="decimal" autocomplete="off" value="' + esc(peso.kg) + '"><span class="unidad">kg</span></div></div>' +
      '<div class="campo"><label class="campo-nombre" for="pesoEdad">Sin peso: estimarlo por la edad</label><span></span>' +
      '<div class="campo-control"><input type="text" id="pesoEdad" inputmode="numeric" autocomplete="off" value="' + esc(peso.edad) + '">' +
      '<div class="segmentos">' + seg('peso-unidad', 'meses', 'Meses', peso.unidad) + seg('peso-unidad', 'años', 'Años', peso.unidad) + '</div></div>' +
      '<p class="campo-ayuda" id="pesoEstimado"></p></div></div>' +
      '<p class="resultado-pendiente" id="pesoEstado" aria-live="polite"></p>' +
      '<div class="acciones"><button type="button" class="boton" id="pesoBorrar">Borrar peso</button></div>' +
      (ayuda ? '<p class="campo-ayuda">' + esc(ayuda) + '</p>' : '') +
      '<p class="campo-ayuda">Mejor el peso real o el que digan los padres; si no, un método por talla. La fórmula por edad (APLS 2011) es la última opción y no tiene en cuenta el sobrepeso.</p></section>';
  }
  function pintarPeso() {
    var est = $('#pesoEstimado'); if (!est) return;
    var r = pesoPorEdad();
    est.innerHTML = r.kg ? 'Peso estimado: <strong>' + esc(cifra(r.kg)) + ' kg</strong> · ' + esc(r.formula) + ' <button type="button" class="boton boton-mini" id="pesoUsar" data-kg="' + r.kg + '">Usar este peso</button>' : esc(r.error || '');
    var kg = pesoValido(), inp = $('#pesoKg');
    inp.classList.toggle('fuera', String(peso.kg).trim() !== '' && kg === null);
    $('#pesoEstado').textContent = kg !== null ? 'Dosis calculadas para ' + cifra(kg) + ' kg.' :
      (String(peso.kg).trim() === '' ? 'Escribe el peso y se calculan las dosis.' : 'Peso no válido: entre ' + cifra(PESO_MIN) + ' y ' + PESO_MAX + ' kg.');
    pintarDosis();
    pintarAnotaciones();
  }

  /* ---------- Dosis por kg dentro del texto de los protocolos ---------- */
  // Busca «0,15-0,3 mg/kg», «10 µg/kg/min», «50 mg/kg/día»… y deja al lado un hueco que se rellena con el peso.
  var anotarActivo = false;
  var NUM = '(\\d+(?:,\\d+)?)';
  var UNIDAD = '(mg|µg|mcg|g|ml|l|UI|mEq|mmol|J)(?![a-zA-Záéíóúµ])';
  var TIEMPO = '(\\s*\\/\\s*(?:kg|24\\s*h|\\d+\\s*h|dosis|día|min|h|d)(?![a-zA-Záéíóú]))?';
  var RE_DOSIS = new RegExp(NUM + '(?:\\s*[-–]\\s*' + NUM + ')?\\s*' + UNIDAD + '\\s*\\/\\s*kg' + TIEMPO, 'g');
  var RE_LIMITE = new RegExp('(máximo|máx\\.?|mínimo|mín\\.?)\\s*(?:de\\s*)?(\\d{1,3}(?:\\.\\d{3})+|\\d+(?:,\\d+)?)(?:\\s*[-–]\\s*(\\d+(?:,\\d+)?))?\\s*' + UNIDAD + TIEMPO + '(\\s+en\\s|\\s*\\((?:menos|más|mayor|menor|si|en|neonatos|lactantes|niños|adultos)\\b)?', 'gi');
  var RE_VALOR = new RegExp('()(\\d{1,3}(?:\\.\\d{3})+|\\d+(?:,\\d+)?)(?:\\s*[-–]\\s*(\\d+(?:,\\d+)?))?\\s*' + UNIDAD + TIEMPO + '()', 'g');
  var FACTOR = { mg: ['m', 1], 'µg': ['m', 0.001], g: ['m', 1000], ml: ['v', 1], l: ['v', 1000] };
  function aNumero(s) { return parseFloat(String(s).replace(/\./g, '').replace(',', '.')); }
  function tiempo(s) {
    var t = String(s || '').replace(/[\s\/]/g, '');
    if (t === 'd' || t === 'día' || t === '24h') return 'día';
    if (t === '' || t === 'dosis' || /^\d+h$/.test(t)) return '';   // «/6 h»: cada 6 horas, es dosis a dosis
    return t;
  }
  function convertir(valor, de, a) {
    if (de === a) return valor;
    var x = FACTOR[de], y = FACTOR[a];
    if (!x || !y || x[0] !== y[0]) return null;
    return valor * x[1] / y[1];
  }
  // Lee los límites de un trozo de texto. esMaximoSiempre: columna «Máximo» de una tabla (sin la palabra delante).
  function limitesDe(texto, esMaximoSiempre) {
    var re = esMaximoSiempre ? RE_VALOR : RE_LIMITE, l, r = [];
    re.lastIndex = 0;
    while ((l = re.exec(texto))) {
      if (l[0] === '') { re.lastIndex++; continue; }
      if (l[5] && /kg/.test(l[5])) continue;                 // «máximo 2 mg/kg/dosis»: tope por kg, no absoluto
      // «máximo 6-8 mg»: se toma el valor alto y se avisa para mirar el texto
      r.push({ max: esMaximoSiempre || /^máx/i.test(l[1]), v: aNumero(l[3] || l[2]), rango: !!l[3], u: l[4] === 'mcg' ? 'µg' : l[4], t: tiempo(l[5]), condicional: !!l[6] });
    }
    return r;
  }
  // Aplica un límite a una dosis; devuelve false si no encaja (otra unidad, otro tiempo o con condición).
  function aplicarLimite(datos, lim) {
    var v = convertir(lim.v, lim.u, datos.u);
    if (v === null || lim.condicional || (lim.t !== '' && lim.t !== datos.t)) return false;
    if (lim.t === '' && (datos.t === 'h' || datos.t === 'min')) return false;   // un tope total no limita un ritmo por hora o minuto
    if (lim.max && datos.max == null) datos.max = v;
    if (!lim.max && datos.min == null) datos.min = v;
    if (lim.rango) datos.revisar = 1;
    return true;
  }
  // Devuelve el texto escapado con un <span class="dosis-calc" data-d="…"> tras cada dosis por kg.
  // limitesFila: texto de la columna «Máximo» de la misma fila de una tabla, si la hay.
  // enCelda: en una celda de tabla los límites pueden ir tras un punto («… Máx. 50 µg (menos de 12 años)»).
  function anotar(texto, limitesFila, enCelda) {
    var s = String(texto == null ? '' : texto), out = '', ult = 0, m, hits = [];
    // «máx.», «i.v.», «v.o.» no son puntos finales (se cambian por espacios sin mover las posiciones)
    var plano = s.replace(/(máx|mín)\./gi, '$1 ').replace(/\b([a-z])\.([a-z])\./gi, '$1 $2 ');
    // Un «;» dentro de un paréntesis no corta: «20 mg/kg (1 mg/kg/min; máximo 1.500 mg)»
    var prof = 0;
    plano = plano.replace(/[();]/g, function (c) { if (c === '(') prof++; else if (c === ')') prof = Math.max(0, prof - 1); else if (prof) return ','; return c; });
    RE_DOSIS.lastIndex = 0;
    while ((m = RE_DOSIS.exec(s))) hits.push({ i: m.index, fin: m.index + m[0].length, a: m[1], b: m[2], u: m[3], t: m[4] || '' });
    hits.forEach(function (h, k) {
      h.datos = { a: aNumero(h.a), b: h.b ? aNumero(h.b) : null, u: h.u === 'mcg' ? 'µg' : h.u, t: tiempo(h.t) };
      if (/kg/.test(h.t)) h.datos.omitir = 1;
      if (/^\s*por los primeros|^\s*por cada kg/.test(s.slice(h.fin, h.fin + 25))) h.datos.omitir = 1;
      // Los límites se buscan entre esta dosis y la siguiente, sin pasar de un punto y coma o un punto final.
      var hasta = k + 1 < hits.length ? hits[k + 1].i : s.length;
      var resto = plano.slice(h.fin, hasta), corte = resto.search(enCelda ? /;/ : /;|\.\s|\.$/);
      if (corte >= 0) resto = resto.slice(0, corte);
      // Si hay límites pero ninguno encaja con esta dosis, se avisa para mirar el texto.
      var sueltos = 0, aplicados = 0;
      limitesDe(resto, false).forEach(function (lim) {
        if (aplicarLimite(h.datos, lim)) { aplicados++; return; }
        // «0,01 mg/kg (0,01 ml/kg), máximo 0,5 mg»: el límite es de una dosis anterior con la misma unidad.
        for (var j = k - 1; j >= 0 && j >= k - 2; j--) {
          if (convertir(lim.v, lim.u, hits[j].datos.u) !== null && aplicarLimite(hits[j].datos, lim)) return;
        }
        if (lim.condicional) h.datos.revisar = 1; else sueltos++;
      });
      if (limitesFila) limitesDe(limitesFila, true).forEach(function (lim) { if (aplicarLimite(h.datos, lim)) aplicados++; else sueltos++; });
      if (sueltos && !aplicados) h.datos.revisar = 1;
      // «3-4 mg/kg (máx. 5 mg/kg, 200 mg)»: el tope absoluto vale también para la dosis de antes.
      if (k > 0 && /^\s*\(?\s*(máx|máximo)\b/i.test(plano.slice(hits[k - 1].fin, h.i)) && h.datos.max != null && hits[k - 1].datos.max == null && hits[k - 1].datos.u === h.datos.u && hits[k - 1].datos.t === h.datos.t) hits[k - 1].datos.max = h.datos.max;
    });
    // En una celda, un «Máximo …» suelto al final vale para todas las dosis de la celda que encajen.
    if (enCelda && hits.length) {
      var cola = plano.slice(hits[hits.length - 1].fin), pf = cola.search(/\.\s+(máximo|máx)\b/i);
      if (pf >= 0) limitesDe(cola.slice(pf + 1), false).forEach(function (lim) {
        hits.forEach(function (h) { if (h.datos.max == null && !aplicarLimite(h.datos, lim) && lim.condicional) h.datos.revisar = 1; });
      });
    }
    hits.forEach(function (h, k) {
      // «midazolam 0,1-0,2 mg/kg o diazepam 0,1-0,2 mg/kg (máximo …)»: el límite vale para las dos
      var sig = hits[k + 1];
      if (sig && /^\s+o\s+[^,;.()]{0,30}$/.test(plano.slice(h.fin, sig.i)) && h.datos.u === sig.datos.u && h.datos.t === sig.datos.t) {
        if (h.datos.max == null && sig.datos.max != null) h.datos.max = sig.datos.max;
        if (sig.datos.revisar) h.datos.revisar = 1;
      }
    });
    hits.forEach(function (h) {
      // Si en lo que queda de frase hay un máximo que no se ha podido aplicar a esta dosis, se avisa.
      var frase = plano.slice(h.fin), fin = frase.search(/\.\s|\.$/);
      if (fin >= 0) frase = frase.slice(0, fin);
      if (h.datos.max == null && !h.datos.omitir && /m[aá]x/i.test(frase)) h.datos.revisar = 1;
    });
    hits.forEach(function (h) {
      out += esc(s.slice(ult, h.fin)) + '<span class="dosis-calc" data-d="' + esc(JSON.stringify(h.datos)) + '" hidden></span>';
      ult = h.fin;
    });
    return out + esc(s.slice(ult));
  }
  function tx(s, limitesFila, enCelda) { return anotarActivo ? anotar(s, limitesFila, enCelda) : esc(s); }
  function textoDosisCalc(d, kg) {
    if (d.omitir) return '';
    var unidad = d.u + (d.t ? '/' + d.t : ''), tope = false, suelo = false;
    var vals = [d.a, d.b].filter(function (x) { return x != null; }).map(function (x) {
      var v = x * kg;
      if (d.max != null && v > d.max) { v = d.max; tope = true; }
      if (d.min != null && v < d.min) { v = d.min; suelo = true; }
      return v;
    });
    var cif = vals.length > 1 && cifra(vals[0]) !== cifra(vals[1]) ? cifra(vals[0]) + '-' + cifra(vals[1]) : cifra(vals[vals.length - 1]);
    return cif + ' ' + unidad + (tope ? ' (máximo)' : '') + (suelo ? ' (mínimo)' : '') + (d.revisar ? ' · comprobar el límite del texto' : '');
  }
  function pintarAnotaciones() {
    var kg = pesoValido();
    $$('.dosis-calc').forEach(function (el) {
      var t = kg === null ? '' : textoDosisCalc(JSON.parse(el.getAttribute('data-d')), kg);
      el.textContent = t ? '= ' + t : '';
      el.hidden = !t;
    });
  }

  /* ---------- RCP pediátrica: tabla de dosis según el peso ---------- */
  // Devuelve [{ nombre, texto, tope }] para un peso; tope = se ha aplicado el máximo
  function dosisPorPeso(defs, kg) {
    return defs.map(function (f) {
      var rango = Array.isArray(f.porKg) ? f.porKg : [f.porKg];
      var vals = rango.map(function (x) { return x * kg; });
      var tope = false;
      if (f.max != null) vals = vals.map(function (x) { if (x > f.max) { tope = true; return f.max; } return x; });
      var dosis = vals.length > 1 && vals[0] !== vals[1] ? cifra(vals[0]) + '-' + cifra(vals[1]) : cifra(vals[vals.length - 1]);
      var t = dosis + ' ' + f.unidad, vol = '';
      if (f.volumen) {
        var ml = vals.map(function (x) { return x / f.volumen.porMl; });
        vol = (ml.length > 1 && ml[0] !== ml[1] ? cifra(ml[0]) + '-' + cifra(ml[1]) : cifra(ml[ml.length - 1])) + ' ml ' + f.volumen.texto;
      }
      return { nombre: f.nombre, pauta: f.pauta, texto: t, volumen: vol, tope: tope };
    });
  }
  function dosisHTML(def) {
    return pesoPanelHTML(def.titulo, def.nota) +
      '<section class="panel dosis-peso"><h2>Dosis calculadas</h2><div id="dosisResultado" aria-live="polite"></div></section>';
  }
  function pintarDosis() {
    var v = C.rcp.versiones.filter(function (x) { return x.id === 'pediatrico'; })[0];
    var caja = $('#dosisResultado'); if (!caja || !v || !v.dosisPeso) return;
    var kg = pesoValido();
    if (kg === null) { caja.innerHTML = '<p class="resultado-pendiente">Sin peso válido todavía.</p>'; return; }
    caja.innerHTML = '<div class="tabla-caja"><table><thead><tr><th>Fármaco y pauta</th><th>Dosis para ' + esc(cifra(kg)) + ' kg</th></tr></thead><tbody>' +
      dosisPorPeso(v.dosisPeso.farmacos, kg).map(function (r) {
        return '<tr><td><strong>' + esc(r.nombre) + '</strong><small class="dosis-extra">' + esc(r.pauta) + '</small></td><td><strong class="dosis-cifra">' + esc(r.texto) + '</strong>' + (r.tope ? '<small class="dosis-extra">Dosis máxima</small>' : '') + (r.volumen ? '<small class="dosis-extra">' + esc(r.volumen) + '</small>' : '') + '</td></tr>';
      }).join('') + '</tbody></table></div>';
  }
  function vistaAlgoritmo(d) {
    return '<div class="vista vista-ancha">' + cabecera(d.titulo, d.subtitulo) + bloquesHTML(d.bloques, d) + pie(d) + '</div>';
  }
  function vistaAbcde() {
    var d = C.abcde;
    return '<div class="vista vista-ancha">' + cabecera(d.titulo, d.subtitulo) +
      '<section class="panel" style="margin-top:0"><h2>Principios</h2>' + lista(d.principios) + '</section>' +
      '<section class="panel"><h2>Primeros pasos</h2>' + lista(d.primerosPasos) + '</section>' +
      d.apartados.map(function (a) {
        return '<section class="letra-bloque"><div class="letra" aria-hidden="true">' + esc(a.letra) + '</div><h2 class="letra-nombre">' + esc(a.nombre) + '</h2>' +
          '<div class="letra-cols"><div><h3>Qué mirar</h3>' + lista(a.mirar) + '</div><div><h3>Qué hacer</h3>' + lista(a.actuar) + '</div></div></section>';
      }).join('') +
      '<section class="panel"><h2>Después del ABCDE</h2>' + lista(d.despues) + '</section>' + pie(d) + '</div>';
  }
  /* ---------- Plantillas ---------- */
  // {{Etiqueta}}  {{Etiqueta=valor}}  {{Etiqueta|opción 1|*opción por defecto}}
  var RE_CAMPO = /\{\{\s*([^{}|]+?)\s*(?:\|([^{}]*))?\}\}/g;
  var pl = { cat: '', tipo: 'exploracion', ambito: 'todos', q: '', abierta: '', idioma: leerLocal('pc2.idioma') || 'es', vals: {},
    retoque: null, panel: '', editando: '', aviso: '', fav: leerLista('pc2.favoritos'), propias: leerLista('pc2.propias') };
  function leerLista(clave) { try { var l = JSON.parse(leerLocal(clave) || '[]'); return Array.isArray(l) ? l : []; } catch (e) { return []; } }
  function todas() { return (C.plantillas || []).concat(pl.propias); }
  function esPropia(p) { return pl.propias.indexOf(p) >= 0; }
  function esFav(id) { return pl.fav.indexOf(id) >= 0; }
  function norm(t) { return String(t == null ? '' : t).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
  function limpiarTexto(t) {
    var lineas = String(t == null ? '' : t).replace(/\r\n?/g, '\n').split('\n');
    while (lineas.length && !lineas[0].trim()) lineas.shift();
    while (lineas.length && !lineas[lineas.length - 1].trim()) lineas.pop();
    return lineas.map(function (l) { return l.replace(/[ \t]+$/, ''); }).join('\n');
  }
  function analizarCampo(etiquetaCruda, opcionesCrudas) {
    var etiqueta = String(etiquetaCruda).trim(), defecto = '', opciones = [];
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
      var c = analizarCampo(m[1], m[2]), previo = vistos[c.clave];
      if (!previo) { vistos[c.clave] = c; campos.push(c); continue; }
      if (!previo.opciones.length && c.opciones.length) previo.opciones = c.opciones;
      if (!previo.defecto && c.defecto) previo.defecto = c.defecto;
    }
    return campos;
  }
  function valorEscrito(campo, vals) {
    var v = vals && vals[campo.clave] != null ? String(vals[campo.clave]).trim() : '';
    if (v && campo.opciones.length && campo.opciones.indexOf(v) < 0) return '';
    return v;
  }
  function valorFinal(campo, vals) {
    var corta = campo.opciones.length > 0 && campo.opciones.length <= 4 && campo.opciones.join('/').length <= 40;
    return valorEscrito(campo, vals) || campo.defecto || (corta ? campo.opciones.join('/') : '___');
  }
  function plantillaPorId(id) { return todas().filter(function (p) { return p.id === id; })[0]; }
  function idiomasDe(p) { var l = []; if (p.texto) l.push('es'); if (p.texto_ca) l.push('ca'); return l; }
  function textoBase(p) {
    var ids = idiomasDe(p), id = ids.indexOf(pl.idioma) >= 0 ? pl.idioma : ids[0];
    return limpiarTexto(id === 'ca' ? p.texto_ca : p.texto);
  }
  function rellenar(p) {
    var base = textoBase(p), campos = extraerCampos(base), vals = pl.vals[p.id] || {};
    return base.replace(RE_CAMPO, function (_, et, ops) {
      var c = analizarCampo(et, ops), def = campos.filter(function (x) { return x.clave === c.clave; })[0] || c;
      return valorFinal(def, vals);
    });
  }
  function filtrarPlantillas() {
    var ps = todas(), q = norm(pl.q.trim());
    if (q) {
      var palabras = q.split(/\s+/);
      return ps.filter(function (p) {
        var t = norm([p.titulo, p.grupo, p.etiquetas, p.revisar ? 'revisar' : '', p.texto, p.texto_ca].join(' '));
        return palabras.every(function (w) { return t.indexOf(w) >= 0; });
      });
    }
    if (pl.cat === 'favoritos') return ps.filter(function (p) { return esFav(p.id); });
    return ps.filter(function (p) {
      if (p.categoria !== pl.cat || p.tipo !== pl.tipo) return false;
      if (pl.cat === 'adultos' && pl.ambito !== 'todos' && p.ambito && p.ambito.length && p.ambito.indexOf(pl.ambito) < 0) return false;
      return true;
    });
  }
  function detallePlantillaHTML(p) {
    var base = textoBase(p), campos = extraerCampos(base), vals = pl.vals[p.id] || {}, ids = idiomasDe(p), h = '';
    if (p.revisar) h += '<div class="revisar plantilla-revisar"><h2>Pendiente de validar</h2><p>' + esc(p.revisar) + '</p></div>';
    if (ids.length > 1) {
      var actual = ids.indexOf(pl.idioma) >= 0 ? pl.idioma : ids[0];
      h += '<div class="segmentos plantilla-idioma">' + seg('pl-idioma', 'es', 'Castellano', actual) + seg('pl-idioma', 'ca', 'Català', actual) + '</div>';
    }
    if (campos.length && !(pl.retoque && pl.retoque.id === p.id)) {
      h += '<div class="plantilla-campos">' + campos.map(function (c) {
        var v = valorEscrito(c, vals), control;
        if (c.opciones.length) {
          control = '<select data-pl-campo="' + esc(c.clave) + '"><option value="">' + (c.defecto ? esc(c.defecto) : '—') + '</option>' +
            c.opciones.filter(function (o) { return o !== c.defecto; }).map(function (o) { return '<option' + (o === v ? ' selected' : '') + '>' + esc(o) + '</option>'; }).join('') + '</select>';
        } else {
          control = '<input type="text" data-pl-campo="' + esc(c.clave) + '" value="' + esc(v) + '" placeholder="' + esc(c.defecto || '') + '" autocomplete="off">';
        }
        return '<label class="plantilla-campo"><span>' + esc(c.etiqueta) + '</span>' + control + '</label>';
      }).join('') + '</div>';
    }
    var retocando = pl.retoque && pl.retoque.id === p.id;
    if (retocando) h += '<textarea class="plantilla-retoque" id="plRetoque" rows="10" aria-label="Texto retocado">' + esc(pl.retoque.texto) + '</textarea><p class="campo-ayuda">Cambios solo para esta copia: la plantilla no se modifica.</p>';
    else h += '<pre class="plantilla-texto" id="plTexto">' + esc(rellenar(p)) + '</pre>';
    if (p.nota) h += '<p class="nota"><strong>Nota (no se copia).</strong> ' + esc(p.nota) + '</p>';
    if (p.enlaces && p.enlaces.length) {
      h += '<ul class="plantilla-enlaces">' + p.enlaces.map(function (e) {
        return '<li>' + enlaceHTML(e.url, e.titulo || e.url) + '</li>';
      }).join('') + '</ul>';
    }
    h += '<div class="acciones"><button type="button" class="boton boton-primario" data-pl-copiar="' + esc(p.id) + '">Copiar</button>' +
      '<button type="button" class="boton" data-pl-retocar="' + esc(p.id) + '">' + (retocando ? 'Deshacer retoque' : 'Retocar') + '</button>' +
      (campos.length && !retocando ? '<button type="button" class="boton" data-pl-vaciar="' + esc(p.id) + '">Vaciar campos</button>' : '') +
      (esPropia(p) ? '<button type="button" class="boton" data-pl-editar="' + esc(p.id) + '">Editar</button><button type="button" class="boton boton-peligro" data-pl-eliminar="' + esc(p.id) + '">Eliminar</button>' : '') + '</div>';
    return h;
  }
  function nombreCat(id) {
    var c = C.plantillasConfig.categorias.filter(function (x) { return x.id === id; })[0];
    return c ? c.nombre : id;
  }
  function listaPlantillasHTML() {
    var lista = filtrarPlantillas(), buscando = !!pl.q.trim(), favs = !buscando && pl.cat === 'favoritos', h = '';
    if (!lista.length) {
      return '<div class="vacio"><strong>' + (buscando ? 'Sin resultados' : favs ? 'Todavía no hay favoritos' : 'Todavía no hay plantillas aquí') + '</strong>' +
        (buscando ? 'Prueba con otra palabra.' : favs ? 'Marca la estrella de una plantilla para tenerla aquí.' : 'Esta sección se diseñará de cero. También puedes crear una plantilla propia.') + '</div>';
    }
    var grupo = null;
    lista.forEach(function (p) {
      var g = (buscando || favs) ? nombreCat(p.categoria) + ' · ' + (p.tipo === 'exploracion' ? 'Exploraciones' : 'Tratamientos') : (p.grupo || 'General');
      if (g !== grupo) { grupo = g; h += '<h2 class="grupo-titulo">' + esc(g) + '</h2>'; }
      var abierta = pl.abierta === p.id, fav = esFav(p.id);
      h += '<section class="fila-plantilla' + (abierta ? ' abierta' : '') + '" id="pl-' + esc(p.id) + '">' +
        '<div class="fila-cabecera"><button type="button" class="fila-titulo" data-pl-abrir="' + esc(p.id) + '" aria-expanded="' + abierta + '">' +
        '<span>' + esc(p.titulo) + '</span>' + (p.revisar ? '<span class="etiqueta-revisar">Revisar</span>' : '') + (esPropia(p) ? '<span class="etiqueta-propia">Propia</span>' : '') + '</button>' +
        '<button type="button" class="boton-fav" data-pl-fav="' + esc(p.id) + '" aria-pressed="' + fav + '" aria-label="' + (fav ? 'Quitar de favoritos' : 'Añadir a favoritos') + '">' + (fav ? '★' : '☆') + '</button>' +
        (abierta ? '' : '<button type="button" class="boton boton-fila" data-pl-copiar="' + esc(p.id) + '">Copiar</button>') + '</div>' +
        (abierta ? '<div class="fila-detalle">' + detallePlantillaHTML(p) + '</div>' : '') + '</section>';
    });
    return h;
  }
  function opcion(valor, texto, actual) { return '<option value="' + esc(valor) + '"' + (valor === actual ? ' selected' : '') + '>' + esc(texto) + '</option>'; }
  function panelHTML() {
    var cfg = C.plantillasConfig, h = '';
    if (pl.panel === 'editor') {
      var p = pl.editando ? plantillaPorId(pl.editando) : null;
      var d = p || { categoria: pl.cat === 'favoritos' ? cfg.categorias[0].id : pl.cat, tipo: pl.tipo, ambito: ['familia', 'urgencias'] };
      var amb = d.ambito || [];
      h = '<section class="panel pl-panel" id="plPanel"><h2>' + (p ? 'Editar plantilla propia' : 'Nueva plantilla propia') + '</h2>' +
        '<div class="editor">' +
        '<label class="plantilla-campo"><span>Categoría</span><select id="edCat">' + cfg.categorias.map(function (c) { return opcion(c.id, c.nombre, d.categoria); }).join('') + '</select></label>' +
        '<label class="plantilla-campo"><span>Tipo</span><select id="edTipo">' + cfg.tipos.map(function (t) { return opcion(t.id, t.nombre, d.tipo); }).join('') + '</select></label>' +
        '<label class="plantilla-campo"><span>Ámbito (solo adultos)</span><select id="edAmbito">' + opcion('ambos', 'Familia y Urgencias', amb.length === 1 ? amb[0] : 'ambos') + opcion('familia', 'Familia', amb.length === 1 ? amb[0] : 'ambos') + opcion('urgencias', 'Urgencias', amb.length === 1 ? amb[0] : 'ambos') + '</select></label>' +
        '<label class="plantilla-campo"><span>Grupo (opcional)</span><input type="text" id="edGrupo" value="' + esc(d.grupo || '') + '" autocomplete="off"></label>' +
        '<label class="plantilla-campo editor-ancho"><span>Título</span><input type="text" id="edTitulo" value="' + esc(d.titulo || '') + '" autocomplete="off"></label>' +
        '<label class="plantilla-campo editor-ancho"><span>Texto en castellano</span><textarea id="edTexto" rows="8">' + esc(limpiarTexto(d.texto || '')) + '</textarea></label>' +
        '<label class="plantilla-campo editor-ancho"><span>Texto en catalán (opcional)</span><textarea id="edTextoCa" rows="4">' + esc(limpiarTexto(d.texto_ca || '')) + '</textarea></label>' +
        '<label class="plantilla-campo editor-ancho"><span>Nota (opcional; se ve, pero no se copia)</span><input type="text" id="edNota" value="' + esc(d.nota || '') + '" autocomplete="off"></label>' +
        '</div><p class="campo-ayuda">Campos rellenables: {{TA}} campo libre · {{FC=80}} con valor por defecto · {{Ojo|OD|OI|AO}} desplegable.</p>' +
        (pl.aviso ? '<p class="nota aviso-error">' + esc(pl.aviso) + '</p>' : '') +
        '<div class="acciones"><button type="button" class="boton boton-primario" id="edGuardar">Guardar</button><button type="button" class="boton" data-pl-panel="">Cancelar</button></div></section>';
    } else if (pl.panel === 'exportar') {
      var json = JSON.stringify({ app: 'plantillas-clinicas', version: 2, plantillas: pl.propias }, null, 2);
      h = '<section class="panel pl-panel" id="plPanel"><h2>Exportar mis plantillas</h2>' +
        '<p class="campo-ayuda">' + pl.propias.length + (pl.propias.length === 1 ? ' plantilla propia.' : ' plantillas propias.') + ' Copia este texto o descárgalo como archivo para pasarlo a otro dispositivo o a un compañero.</p>' +
        '<textarea class="plantilla-retoque" id="exTexto" rows="8" readonly>' + esc(json) + '</textarea>' +
        '<div class="acciones"><button type="button" class="boton boton-primario" id="exCopiar">Copiar</button>' + (puedeDescargar() ? '<button type="button" class="boton" id="exDescargar">Descargar archivo</button>' : '') + '<button type="button" class="boton" data-pl-panel="">Cerrar</button></div></section>';
    } else if (pl.panel === 'importar') {
      h = '<section class="panel pl-panel" id="plPanel"><h2>Importar plantillas</h2>' +
        '<p class="campo-ayuda">Pega aquí el texto exportado o elige el archivo. Las plantillas se añaden a las propias; las de la app no cambian.</p>' +
        '<textarea class="plantilla-retoque" id="imTexto" rows="8" placeholder="Pega aquí el texto exportado"></textarea>' +
        '<input type="file" id="imArchivo" accept=".json,application/json,text/plain" class="im-archivo">' +
        (pl.aviso ? '<p class="nota aviso-error">' + esc(pl.aviso) + '</p>' : '') +
        '<div class="acciones"><button type="button" class="boton boton-primario" id="imImportar">Importar</button><button type="button" class="boton" data-pl-panel="">Cancelar</button></div></section>';
    }
    return h;
  }
  function cuerpoPlantillasHTML() {
    var cfg = C.plantillasConfig, buscando = !!pl.q.trim(), h = '';
    if (!buscando) {
      h += '<div class="segmentos segmentos-anchos pl-cats">' + cfg.categorias.map(function (c) { return seg('pl-cat', c.id, c.nombre, pl.cat); }).join('') + seg('pl-cat', 'favoritos', '★ Favoritos', pl.cat) + '</div>';
      if (pl.cat !== 'favoritos') h += '<div class="segmentos segmentos-anchos pl-tipos">' + cfg.tipos.map(function (t) { return seg('pl-tipo', t.id, t.nombre, pl.tipo); }).join('') + '</div>';
      if (pl.cat === 'adultos') h += '<div class="segmentos pl-ambitos">' + seg('pl-ambito', 'todos', 'Todos', pl.ambito) + cfg.ambitos.map(function (a) { return seg('pl-ambito', a.id, a.nombre, pl.ambito); }).join('') + '</div>';
    }
    h += panelHTML() + '<div id="plLista">' + listaPlantillasHTML() + '</div>';
    h += '<section class="pl-propias"><h2 class="grupo-titulo">Mis plantillas</h2><div class="acciones">' +
      '<button type="button" class="boton" data-pl-panel="editor">Nueva plantilla</button>' +
      '<button type="button" class="boton" data-pl-panel="exportar">Exportar</button>' +
      '<button type="button" class="boton" data-pl-panel="importar">Importar</button></div>' +
      '<p class="campo-ayuda">Las plantillas propias y los favoritos se guardan solo en este dispositivo.</p></section>';
    return h;
  }
  function vistaPlantillas() {
    var cfg = C.plantillasConfig;
    if (!pl.cat) pl.cat = cfg.categorias[0].id;
    return '<div class="vista">' + cabecera('Plantillas', 'Exploraciones y tratamientos para copiar en la historia clínica') +
      '<input type="search" class="buscador" id="plBuscar" placeholder="Buscar en las ' + todas().length + ' plantillas" autocomplete="off" spellcheck="false" value="' + esc(pl.q) + '" aria-label="Buscar plantilla">' +
      '<div id="plCuerpo">' + cuerpoPlantillasHTML() + '</div></div>';
  }
  function repintarLista() { $('#plCuerpo').innerHTML = cuerpoPlantillasHTML(); }
  function guardarPropias() { guardarLocal('pc2.propias', JSON.stringify(pl.propias)); }
  function textoACopiar(id) {
    if (pl.retoque && pl.retoque.id === id) return pl.retoque.texto;
    return rellenar(plantillaPorId(id));
  }
  function guardarEditor() {
    var titulo = $('#edTitulo').value.trim(), texto = limpiarTexto($('#edTexto').value), textoCa = limpiarTexto($('#edTextoCa').value);
    if (!titulo) { pl.aviso = 'Falta el título.'; return false; }
    if (!texto && !textoCa) { pl.aviso = 'Falta el texto de la plantilla.'; return false; }
    var p = pl.editando ? plantillaPorId(pl.editando) : null;
    if (!p) { p = { id: 'propia-' + Date.now().toString(36) + Math.floor(Math.random() * 1296).toString(36) }; pl.propias.push(p); }
    p.categoria = $('#edCat').value; p.tipo = $('#edTipo').value; p.titulo = titulo;
    var amb = $('#edAmbito').value;
    if (p.categoria === 'adultos') p.ambito = amb === 'ambos' ? ['familia', 'urgencias'] : [amb]; else delete p.ambito;
    var grupo = $('#edGrupo').value.trim(), nota = $('#edNota').value.trim();
    if (grupo) p.grupo = grupo; else delete p.grupo;
    if (nota) p.nota = nota; else delete p.nota;
    if (texto) p.texto = texto; else delete p.texto;
    if (textoCa) p.texto_ca = textoCa; else delete p.texto_ca;
    guardarPropias();
    pl.cat = p.categoria; pl.tipo = p.tipo; pl.ambito = 'todos'; pl.q = ''; pl.abierta = p.id;
    return true;
  }
  // Devuelve el número de plantillas importadas, o -1 si el texto no vale.
  function importarTexto(txt) {
    var datos;
    try { datos = JSON.parse(txt); } catch (e) { return -1; }
    var lista = Array.isArray(datos) ? datos : (datos && Array.isArray(datos.plantillas) ? datos.plantillas : null);
    if (!lista) return -1;
    var cfg = C.plantillasConfig, n = 0;
    var catOk = function (c) { return cfg.categorias.some(function (x) { return x.id === c; }); };
    lista.forEach(function (o) {
      if (!o || typeof o !== 'object') return;
      var titulo = String(o.titulo || '').trim(), texto = limpiarTexto(o.texto || ''), textoCa = limpiarTexto(o.texto_ca || '');
      if (!titulo || (!texto && !textoCa)) return;
      var p = { id: 'propia-' + Date.now().toString(36) + n.toString(36) + Math.floor(Math.random() * 1296).toString(36),
        categoria: catOk(o.categoria) ? o.categoria : cfg.categorias[0].id, tipo: o.tipo === 'tratamiento' ? 'tratamiento' : 'exploracion', titulo: titulo };
      if (p.categoria === 'adultos' && Array.isArray(o.ambito)) {
        var a = o.ambito.filter(function (x) { return x === 'familia' || x === 'urgencias'; });
        if (a.length) p.ambito = a;
      }
      if (o.grupo) p.grupo = String(o.grupo).trim();
      if (o.nota) p.nota = String(o.nota).trim();
      if (texto) p.texto = texto;
      if (textoCa) p.texto_ca = textoCa;
      // Si ya hay una propia con el mismo título, categoría y tipo, se sustituye.
      var previa = pl.propias.filter(function (x) { return x.titulo === p.titulo && x.categoria === p.categoria && x.tipo === p.tipo; })[0];
      if (previa) { p.id = previa.id; pl.propias[pl.propias.indexOf(previa)] = p; } else pl.propias.push(p);
      n++;
    });
    if (n) guardarPropias();
    return n;
  }

  /* ---------- navegación ---------- */
  function rutaActual() {
    var id = (location.hash || '').replace(/^#\/?/, '').split('/')[0];
    return SECCIONES.some(function (s) { return s.id === id; }) ? id : 'inicio';
  }
  function renderNav(actual) {
    $('#railNav').innerHTML = SECCIONES.map(function (s) {
      if (s.grupo) return '<div class="rail-grupo">' + esc(s.grupo) + '</div>';
      return '<a class="rail-item" href="#/' + s.id + '"' + (s.id === actual ? ' aria-current="page"' : '') + '>' + esc(s.nombre) + '</a>';
    }).join('');
  }
  function render(conservarScroll) {
    var id = rutaActual(), h;
    if (id === 'news2' || id === 'news') { usarNews(id); h = vistaNews(); }
    else if (id === 'abcde') h = vistaAbcde();
    else if (id === 'rcp') h = vistaRcp();
    else if (id === 'urgped') h = vistaUrgped();
        else if (C[id] && C[id].bloques) h = vistaAlgoritmo(C[id]);
    else if (id === 'plantillas') h = vistaPlantillas();
    else h = vistaInicio();
    $('#principal').innerHTML = h;
    renderNav(id);
    if (id === 'news2' || id === 'news') pintarNews();
    if ($('#pesoKg')) pintarPeso();
    var s = SECCIONES.filter(function (x) { return x.id === id; })[0];
    var prot = id === 'urgped' ? protocoloPorId(subRuta()) : null;
    document.title = (id === 'inicio' ? '' : (prot && prot.bloques ? prot.titulo + ' · ' : '') + s.nombre + ' · ') + 'Plantillas Clínicas';
    if (!conservarScroll) window.scrollTo(0, 0);
  }

  /* ---------- tema ---------- */
  function temaGuardado() { return leerLocal('pc2.tema') || 'auto'; }
  function aplicarTema() {
    var t = temaGuardado();
    var oscuro = t === 'oscuro' || (t === 'auto' && window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches);
    document.documentElement.setAttribute('data-tema', oscuro ? 'oscuro' : 'claro');
    var meta = $('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', oscuro ? '#0D1413' : '#F3F6F5');
    try {
      var sb = window.Capacitor && window.Capacitor.Plugins && window.Capacitor.Plugins.SystemBars;
      if (sb && esCapacitor() && sb.setStyle) sb.setStyle({ style: oscuro ? 'DARK' : 'LIGHT' });
    } catch (e) {}
    if (esElectron() && window.plantillasNative.tema) { try { window.plantillasNative.tema(t); } catch (e) {} }
    $('#botonTema').textContent = 'Tema: ' + ({ auto: 'automático', claro: 'claro', oscuro: 'oscuro' })[t];
  }

  /* ---------- eventos ---------- */
  document.addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    if (b.id === 'botonTema') {
      var orden = ['auto', 'claro', 'oscuro'];
      guardarLocal('pc2.tema', orden[(orden.indexOf(temaGuardado()) + 1) % 3]);
      aplicarTema();
      return;
    }
    var grupo = b.getAttribute('data-grupo'), valor = b.getAttribute('data-valor');
    if (grupo === 'rcp') { rcpVersion = valor; render(true); return; }
    if (grupo === 'escala' || grupo === 'oxigeno' || grupo === 'conciencia') {
      news[grupo] = valor;
      $$('[data-grupo="' + grupo + '"]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      pintarNews();
      return;
    }
    if (grupo && grupo.indexOf('race-') === 0) {
      var clave = grupo.slice(5);
      if (clave === 'lado' && race.lado !== valor) race.cortical = '';
      race[clave] = valor;
      var y = window.scrollY; render(true); window.scrollTo(0, y);
      return;
    }
    var ide = b.getAttribute('data-escala');
    if (ide) {
      escalas[ide] = escalas[ide] || {};
      escalas[ide][b.getAttribute('data-item')] = valor === '1';
      var y3 = window.scrollY; render(true); window.scrollTo(0, y3);
      return;
    }
    var idp = b.getAttribute('data-punt');
    if (idp) {
      var bp = bloquePuntuacion(idp), item = +b.getAttribute('data-item');
      puntuaciones[idp] = puntuaciones[idp] || {};
      grupoDe(bp, item).forEach(function (j) { if (j !== item) delete puntuaciones[idp][j]; });
      puntuaciones[idp][item] = +valor;
      var y5 = window.scrollY; render(true); window.scrollTo(0, y5);
      return;
    }
    if (b.hasAttribute('data-punt-copiar')) { copiar(textoPuntuacion(bloquePuntuacion(b.getAttribute('data-punt-copiar'))), b); return; }
    if (b.hasAttribute('data-punt-borrar')) { puntuaciones[b.getAttribute('data-punt-borrar')] = {}; var y6 = window.scrollY; render(true); window.scrollTo(0, y6); return; }
    if (b.hasAttribute('data-escala-copiar')) { copiar(textoEscala(bloqueEscala(b.getAttribute('data-escala-copiar'))), b); return; }
    if (b.hasAttribute('data-escala-borrar')) { escalas[b.getAttribute('data-escala-borrar')] = {}; var y4 = window.scrollY; render(true); window.scrollTo(0, y4); return; }
    if (b.id === 'newsCopiar') { copiar(textoNews(), b); return; }
    if (b.id === 'newsBorrar') { estadosNews[newsId] = newsVacio(); render(true); return; }
    if (b.id === 'pesoBorrar') { peso.kg = ''; peso.edad = ''; $('#pesoKg').value = ''; $('#pesoEdad').value = ''; pintarPeso(); return; }
    if (b.id === 'pesoUsar') { peso.kg = cifra(+b.getAttribute('data-kg')); $('#pesoKg').value = peso.kg; pintarPeso(); return; }
    if (grupo === 'peso-unidad') {
      peso.unidad = valor;
      $$('[data-grupo="peso-unidad"]').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      pintarPeso();
      return;
    }
    if (b.id === 'raceCopiar') { copiar(textoRace(), b); return; }
    if (b.id === 'raceBorrar') { race = { lado: '', facial: '', brazo: '', pierna: '', mirada: '', cortical: '' }; var y2 = window.scrollY; render(true); window.scrollTo(0, y2); return; }
    if (grupo === 'pl-cat' || grupo === 'pl-tipo' || grupo === 'pl-ambito') {
      pl[grupo.slice(3)] = valor; pl.abierta = ''; pl.retoque = null;
      repintarLista();
      return;
    }
    if (grupo === 'pl-idioma') { pl.idioma = valor; guardarLocal('pc2.idioma', valor); repintarLista(); return; }
    var abrir = b.getAttribute('data-pl-abrir');
    if (abrir) {
      pl.abierta = pl.abierta === abrir ? '' : abrir; pl.retoque = null;
      repintarLista();
      var fila = document.getElementById('pl-' + abrir);
      if (fila && pl.abierta) { var r = fila.getBoundingClientRect(); if (r.top < 0 || r.top > window.innerHeight * 0.6) window.scrollTo(0, window.scrollY + r.top - 12); }
      return;
    }
    var pc = b.getAttribute('data-pl-copiar');
    if (pc) { copiar(textoACopiar(pc), b); return; }
    var pv = b.getAttribute('data-pl-vaciar');
    if (pv) { pl.vals[pv] = {}; repintarLista(); return; }
    var pf = b.getAttribute('data-pl-fav');
    if (pf) {
      var ifav = pl.fav.indexOf(pf);
      if (ifav >= 0) pl.fav.splice(ifav, 1); else pl.fav.push(pf);
      guardarLocal('pc2.favoritos', JSON.stringify(pl.fav));
      repintarLista();
      return;
    }
    var pr = b.getAttribute('data-pl-retocar');
    if (pr) {
      pl.retoque = (pl.retoque && pl.retoque.id === pr) ? null : { id: pr, texto: rellenar(plantillaPorId(pr)) };
      repintarLista();
      if (pl.retoque) $('#plRetoque').focus();
      return;
    }
    if (b.hasAttribute('data-pl-panel')) {
      pl.panel = b.getAttribute('data-pl-panel'); pl.editando = ''; pl.aviso = '';
      repintarLista();
      if (pl.panel) $('#plPanel').scrollIntoView({ block: 'start' });
      return;
    }
    var pe = b.getAttribute('data-pl-editar');
    if (pe) { pl.panel = 'editor'; pl.editando = pe; pl.aviso = ''; repintarLista(); $('#plPanel').scrollIntoView({ block: 'start' }); return; }
    var px = b.getAttribute('data-pl-eliminar');
    if (px) {
      if (b.getAttribute('data-confirmar') !== '1') { b.setAttribute('data-confirmar', '1'); b.textContent = 'Confirmar eliminación'; return; }
      pl.propias = pl.propias.filter(function (x) { return x.id !== px; });
      pl.fav = pl.fav.filter(function (x) { return x !== px; });
      guardarPropias(); guardarLocal('pc2.favoritos', JSON.stringify(pl.fav));
      pl.abierta = ''; repintarLista(); avisar('Plantilla eliminada');
      return;
    }
    if (b.id === 'edGuardar') {
      if (guardarEditor()) { pl.panel = ''; pl.editando = ''; pl.aviso = ''; $('#plBuscar').value = ''; avisar('Plantilla guardada'); }
      repintarLista();
      return;
    }
    if (b.id === 'exCopiar') { copiar($('#exTexto').value, b); return; }
    if (b.id === 'exDescargar') {
      try {
        var blob = new Blob([$('#exTexto').value], { type: 'application/json' }), url = URL.createObjectURL(blob), a = document.createElement('a');
        a.href = url; a.download = 'mis-plantillas.json'; document.body.appendChild(a); a.click(); document.body.removeChild(a);
        setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
      } catch (err) { avisar('No se ha podido descargar: usa Copiar'); }
      return;
    }
    if (b.id === 'imImportar') {
      var nimp = importarTexto($('#imTexto').value);
      if (nimp > 0) { pl.panel = ''; pl.aviso = ''; avisar(nimp === 1 ? '1 plantilla importada' : nimp + ' plantillas importadas'); }
      else pl.aviso = nimp === 0 ? 'No hay ninguna plantilla válida en ese texto.' : 'El texto no tiene el formato de exportación.';
      repintarLista();
      return;
    }
  });
  document.addEventListener('input', function (e) {
    if (e.target.id === 'plBuscar') {
      pl.q = e.target.value; pl.abierta = ''; pl.retoque = null;
      repintarLista();
      return;
    }
    if (e.target.id === 'plRetoque') { if (pl.retoque) pl.retoque.texto = e.target.value; return; }
    var plc = e.target.getAttribute && e.target.getAttribute('data-pl-campo');
    if (plc && pl.abierta) {
      pl.vals[pl.abierta] = pl.vals[pl.abierta] || {};
      pl.vals[pl.abierta][plc] = e.target.value;
      $('#plTexto').textContent = rellenar(plantillaPorId(pl.abierta));
      return;
    }
    if (e.target.id === 'pesoKg') { peso.kg = e.target.value; pintarPeso(); return; }
    if (e.target.id === 'pesoEdad') { peso.edad = e.target.value; pintarPeso(); return; }
    var campo = e.target.getAttribute && e.target.getAttribute('data-campo');
    if (!campo) return;
    news[campo] = e.target.value;
    pintarNews();
  });
  document.addEventListener('change', function (e) {
    if (e.target.id !== 'imArchivo' || !e.target.files || !e.target.files[0]) return;
    var lector = new FileReader();
    lector.onload = function () { var t = $('#imTexto'); if (t) t.value = String(lector.result || ''); };
    lector.readAsText(e.target.files[0]);
  });
  window.addEventListener('hashchange', function () { render(false); });
  if (window.matchMedia) {
    var mq = matchMedia('(prefers-color-scheme: dark)');
    if (mq.addEventListener) mq.addEventListener('change', aplicarTema);
  }

  // Para las pruebas automáticas (scripts/probar.mjs)
  window.PC_PRUEBAS = { calcularNews: calcularNews, respuestaNews: respuestaNews, estadoNews: function (n, id) { if (id) usarNews(id); news = n; }, dosisPorPeso: dosisPorPeso, anotar: anotar, textoDosisCalc: textoDosisCalc };

  // Android: el botón Atrás vuelve al inicio y, desde el inicio, minimiza la app.
  function botonAtrasAndroid() {
    if (!esCapacitor()) return;
    var App = window.Capacitor.Plugins && window.Capacitor.Plugins.App;
    if (!App || !App.addListener) return;
    App.addListener('backButton', function () {
      if (rutaActual() === 'urgped' && subRuta()) location.hash = '#/urgped';
      else if (rutaActual() !== 'inicio') location.hash = '#/inicio';
      else if (App.minimizeApp) App.minimizeApp();
      else if (App.exitApp) App.exitApp();
    });
  }
  // Web publicada: funciona sin conexión gracias al service worker.
  function registrarServiceWorker() {
    if (!('serviceWorker' in navigator) || ENTORNO !== 'app' || esCapacitor() || esElectron()) return;
    if (location.protocol !== 'https:' && location.hostname !== 'localhost' && location.hostname !== '127.0.0.1') return;
    window.addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  }

  aplicarTema();
  render(false);
  botonAtrasAndroid();
  registrarServiceWorker();
})();
