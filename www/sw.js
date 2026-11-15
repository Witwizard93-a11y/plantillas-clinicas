/* Service worker de Plantillas Clínicas: permite usar la app sin conexión.
   Estrategia: responde desde la caché al instante y la actualiza en segundo
   plano; los cambios de contenido llegan en la siguiente apertura.
   scripts/build.mjs sustituye __VERSION__ por un resumen del contenido. */
'use strict';

var CACHE = 'plantillas-__VERSION__';
var ARCHIVOS = [
  './',
  'index.html',
  'css/app.css',
  'contenido/news2.js',
  'contenido/abcde.js',
  'contenido/rcp.js',
  'contenido/iam.js',
  'contenido/ictus.js',
  'contenido/sepsis.js',
  'contenido/ppt.js',
  'contenido/suicidio.js',
  'contenido/plantillas.js',
  'js/app.js',
  'fonts/atkinson-hyperlegible-next.woff2',
  'manifest.webmanifest',
  'icons/favicon.svg',
  'icons/icon-192.png',
  'icons/icon-512.png',
  'icons/maskable-512.png',
  'icons/apple-touch-icon.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE)
      .then(function (cache) { return cache.addAll(ARCHIVOS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys()
      .then(function (claves) {
        return Promise.all(claves.filter(function (k) { return k.indexOf('plantillas-') === 0 && k !== CACHE; })
          .map(function (k) { return caches.delete(k); }));
      })
      .then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  var peticion = e.request;
  if (peticion.method !== 'GET') return;
  if (new URL(peticion.url).origin !== self.location.origin) return;
  var esNavegacion = peticion.mode === 'navigate';

  e.respondWith(caches.open(CACHE).then(function (cache) {
    return cache.match(peticion, { ignoreSearch: esNavegacion }).then(function (enCache) {
      var red = fetch(peticion).then(function (respuesta) {
        if (respuesta && respuesta.ok && respuesta.type === 'basic') cache.put(esNavegacion ? './' : peticion, respuesta.clone());
        return respuesta;
      }).catch(function () { return null; });

      if (enCache) { e.waitUntil(red); return enCache; }
      return red.then(function (respuesta) {
        if (respuesta) return respuesta;
        if (esNavegacion) return cache.match('./');
        return new Response('Sin conexión', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
      });
    });
  }));
});
