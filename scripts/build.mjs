#!/usr/bin/env node
/*
  Prepara la parte web de la app.

    node scripts/build.mjs

  1. Copia la versión de package.json a www/js/app.js.
  2. Comprueba el contenido de www/plantillas/ (scripts/validar.mjs).
  3. dist/web/                     → web/PWA lista para publicar (GitHub Pages, Netlify...).
  4. dist/PlantillasClinicas.html  → un único archivo autónomo: se abre con doble clic
                                     en cualquier PC, sin instalar nada y sin conexión.
  5. dist/vista-previa.html        → igual que el anterior, para la vista previa publicada.
*/
import { createHash } from 'node:crypto';
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { archivosContenido, validar } from './validar.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const WWW = join(RAIZ, 'www');
const DIST = join(RAIZ, 'dist');
const leer = (ruta, cod = 'utf8') => readFileSync(join(WWW, ruta), cod);

// 1. Versión única para web, Windows y Android
const { version } = JSON.parse(readFileSync(join(RAIZ, 'package.json'), 'utf8'));
const rutaApp = join(WWW, 'js', 'app.js');
const appJs = readFileSync(rutaApp, 'utf8');
const appJsVersionado = appJs.replace(/var VERSION_APP = '[^']*';/, `var VERSION_APP = '${version}';`);
if (appJsVersionado !== appJs) writeFileSync(rutaApp, appJsVersionado);

// 2. Comprobación del contenido antes de empaquetar
const revision = validar();
revision.avisos.forEach((a) => console.warn('  aviso: ' + a));
if (revision.errores.length) {
  console.error(`\n✖ ${revision.errores.length} error(es) en www/plantillas/:`);
  revision.errores.forEach((e) => console.error('  - ' + e));
  console.error('');
  process.exit(1);
}
const { bloque: bloqueContenido, rutas: rutasContenido } = archivosContenido();
const contenidos = rutasContenido.map((ruta) => ({ ruta, js: leer(ruta) }));
const sw0 = leer('sw.js');
rutasContenido.forEach((ruta) => {
  if (!sw0.includes(`'${ruta}'`)) console.warn(`  aviso: ${ruta} no está en la lista de sw.js: no funcionará sin conexión en la web.`);
});

// 3. Web/PWA con caché versionada
if (existsSync(DIST)) rmSync(join(DIST, 'web'), { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });
cpSync(WWW, join(DIST, 'web'), { recursive: true });
const hash = createHash('sha256').update(leer('index.html')).update(leer('css/app.css'));
contenidos.forEach((c) => hash.update(c.js));
const resumen = hash.update(appJsVersionado).digest('hex').slice(0, 10);
const sw = sw0.replace('__VERSION__', `${version}-${resumen}`);
writeFileSync(join(DIST, 'web', 'sw.js'), sw);
writeFileSync(join(DIST, 'web', '.nojekyll'), '');

// 4 y 5. Archivo único autónomo
const fuente = leer('fonts/atkinson-hyperlegible-next.woff2', null).toString('base64');
const css = leer('css/app.css').replace(
  /src: url\("\.\.\/fonts\/atkinson-hyperlegible-next\.woff2"\) format\("woff2-variations"\),\s*url\("\.\.\/fonts\/atkinson-hyperlegible-next\.woff2"\) format\("woff2"\);/,
  `src: url(data:font/woff2;base64,${fuente}) format("woff2");`
);
if (css.includes('../fonts/')) throw new Error('No se pudo incrustar la fuente en el CSS');

const favicon = 'data:image/svg+xml;base64,' + Buffer.from(leer('icons/favicon.svg')).toString('base64');
const seguro = (js) => js.replace(/<\/script/gi, '<\\/script');

function archivoUnico(entorno) {
  let html = leer('index.html');
  const sustituir = (buscado, nuevo) => {
    if (!html.includes(buscado)) throw new Error('No encontrado en index.html: ' + buscado);
    html = html.replace(buscado, () => nuevo);
  };
  sustituir('<link rel="manifest" href="manifest.webmanifest">\n', '');
  sustituir('<link rel="apple-touch-icon" href="icons/apple-touch-icon.png">\n', '');
  sustituir('href="icons/favicon.svg"', `href="${favicon}"`);
  sustituir('<link rel="stylesheet" href="css/app.css">', `<style>\n${css}\n</style>`);
  sustituir(bloqueContenido,
    (entorno ? `<script>window.PC_ENTORNO = ${JSON.stringify(entorno)};</script>\n` : '') +
    contenidos.map((c) => `<script>/* ${c.ruta} */\n${seguro(c.js)}\n</script>`).join('\n'));
  sustituir('<script src="js/app.js"></script>', `<script>\n${seguro(appJsVersionado)}\n</script>`);
  return html;
}

writeFileSync(join(DIST, 'PlantillasClinicas.html'), archivoUnico(null));
writeFileSync(join(DIST, 'vista-previa.html'), archivoUnico('vista-previa'));

(revision.resumen || []).forEach((l) => console.log('  ' + l));
console.log(`✔ Web lista (versión ${version}, caché ${resumen})`);
console.log('  dist/web/                    → para publicar como web/PWA');
console.log('  dist/PlantillasClinicas.html → archivo único, se abre con doble clic');
