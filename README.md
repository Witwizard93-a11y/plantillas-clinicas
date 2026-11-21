# Plantillas Clínicas

Versión 2.1.0. Herramientas para la consulta y la urgencia de medicina de familia, con un solo código para web/PWA, Windows (Electron) y Android (Capacitor).

Herramienta de apoyo para profesionales sanitarios: no sustituye al juicio clínico ni a los protocolos del centro.

## Qué incluye

| Sección | Contenido | Fuente |
|---|---|---|
| NEWS2 | Calculadora con los 7 parámetros, escalas 1 y 2 de SpO2, riesgo y respuesta | Royal College of Physicians, 2017 |
| NEWS | Calculadora de la versión original: una sola escala de SpO2 y conciencia AVPU | Royal College of Physicians, 2012 |
| ABCDE | Qué mirar y qué hacer en cada letra | Resuscitation Council UK, 2024 |
| RCP | Adulto y pediátrico; ramas desfibrilable y no desfibrilable; causas reversibles con qué hacer en cada una; en pediatría, dosis calculadas según el peso (o el peso estimado por la edad) | ERC Guidelines 2025; fórmulas de peso APLS 2011 |
| Código IAM | Activación, reperfusión, tratamiento, fibrinólisis | Tríptico SEM, V 03, abril de 2023 |
| Código Ictus | RAPID, RANCOM, tiempo, calculadora RACE, destino, complicaciones | Tríptico SEM, V.03, abril de 2023 |
| Código Sepsis | Riesgo vital, NEWS, sospecha de infección, tratamiento | Tríptico SEM, enero de 2021 |
| Código PPT | Prioridades 0 a 3, destino, inmovilización, transferencia, escalas | Tríptico SEM, revisión de diciembre de 2017 |
| Código Riesgo de Suicidio | Calculadora MINI, activación, factores de riesgo, seguimiento | Tríptico SEM, V 01, junio de 2024 |
| Urgencias pediátricas | 25 protocolos clínicos (n.º 4 a 28), con calculadoras de escalas y dosis por kg calculadas sobre el texto según el peso | SEUP, Protocolos diagnósticos y terapéuticos, 4.ª ed., 2024 |
| Plantillas | 57: exploraciones de adultos (14), pediatría (13) y traumatología (10), y 20 tratamientos al alta de adultos | Versión 1.1.0 y Guía Terapéutica semFYC |

Funciones de las plantillas: búsqueda, campos rellenables y desplegables, castellano y català, favoritos, retocar el texto antes de copiar, plantillas propias con exportar e importar, y filtro Familia/Urgencias en adultos. Favoritos y plantillas propias se guardan solo en el dispositivo.

Lo pendiente de validar está en `REVISION.md` y, dentro de la app, en el recuadro amarillo de cada sección y en la etiqueta «Revisar» de las plantillas.

## Cambios en la versión 2.1.0

- Nuevo apartado Urgencias pediátricas con los 25 protocolos clínicos de la SEUP (4.ª edición, 2024).
- Nueva calculadora NEWS (versión original de 2012), junto a la de NEWS2.
- RCP pediátrica: campo de peso con las dosis calculadas y estimación del peso por la edad. El mismo peso sirve en los protocolos de Urgencias pediátricas.

## Cambios respecto a la versión 1.1.0

- Nuevo: NEWS2, ABCDE, RCP y los cinco códigos del SEM.
- Plantillas: se conservan 37 exploraciones. Se han retirado todos los tratamientos de la versión 1, Oftalmología y cuatro exploraciones (columna dorsal; lactante con cuadro catarral; ABCDE en traumatismo con collarín; exploración completa pediátrica del documento RESIS). Los 20 tratamientos de adultos son nuevos.
- Los favoritos y las plantillas propias de la versión 1 no pasan a la 2: antes de actualizar, exporta las propias desde la versión 1 si las quieres conservar.
- La exportación e importación con Word no está adaptada a la versión 2.
- La versión 1.1.0 está en el historial del repositorio de GitHub y, en la carpeta de trabajo, en `copia-v1.1.0/`.

## Instalar

**Android.** Copia el APK al móvil y ábrelo. La primera vez Android pedirá permitir «instalar apps desconocidas» para el gestor de archivos o el navegador. Las actualizaciones se instalan encima, conservando favoritos y plantillas propias, siempre que estén firmadas con la misma clave (`firma-android/`).

**Windows.**
- `PlantillasClinicas-x.y.z-instalador.exe`: se instala para el usuario actual, sin permisos de administrador, con acceso en el escritorio y en el menú Inicio.
- `PlantillasClinicas-x.y.z-portable.exe`: se ejecuta sin instalar.
- No están firmados con un certificado comercial: Windows SmartScreen puede avisar. Pulsa «Más información» → «Ejecutar de todas formas».
- **Ordenadores del trabajo bloqueados**: usa `PlantillasClinicas.html` (doble clic; se abre en Edge o Chrome, sin instalar nada y sin conexión) o la versión web instalada desde Edge (menú `…` → Aplicaciones → Instalar este sitio como una aplicación).

**Web/PWA.** Publica la carpeta `dist/web` (ver más abajo). En Android: Chrome → menú `⋮` → Instalar aplicación. En Windows: Edge o Chrome → icono de instalar en la barra de direcciones.


## Cambiar el contenido

Todo el contenido clínico está en `www/contenido/`, un archivo por sección: `news2.js`, `news.js`, `abcde.js`, `rcp.js`, `iam.js`, `ictus.js`, `sepsis.js`, `ppt.js`, `suicidio.js`, `urgped.js` (Urgencias pediátricas, protocolos de la SEUP) y `plantillas.js`. Son listas de texto que se pueden corregir con el Bloc de notas; cada archivo explica su formato en la cabecera. `www/js/app.js` y `www/css/app.css` son la lógica y el aspecto.

Después de cada cambio: `npm run validar`. Para publicar una versión nueva, sube el número de `version` en `package.json`.

## Compilar

Requisitos: Node.js 22 o superior. Para Android, además JDK 21 y Android SDK (o Android Studio). El instalador de Windows se compila en Windows (en Linux necesita Wine).

```bash
npm install
npm run servir        # prueba local en http://localhost:8080
npm run validar       # solo comprueba el contenido
npm run web           # dist/web (PWA) y dist/PlantillasClinicas.html (archivo único)
npm run windows       # dist/windows/*.exe
npm run android       # android/app/build/outputs/apk/release/app-release.apk
npm run iconos        # regenera los iconos (requiere: pip install cairosvg pillow)
```

### Compilación automática en GitHub (recomendado)

1. Crea un repositorio y sube esta carpeta. `firma-android/` queda excluida por `.gitignore`: **no la subas**.
2. En el repositorio: *Settings → Secrets and variables → Actions*. Crea los cuatro secretos que aparecen en `firma-android/para-github.txt`.
3. Cada cambio en la rama `main` genera el APK, los ejecutables de Windows y el archivo HTML en *Actions → última ejecución → Artifacts*.
4. Una etiqueta `v2.0.0` crea además una *Release* con todos los archivos para descargar.
5. Web/PWA: *Settings → Pages → Source: GitHub Actions* la publica automáticamente. GitHub Pages es gratuito en repositorios públicos; con un repositorio privado necesita un plan de pago. Alternativa gratuita: arrastra la carpeta `dist/web` a <https://app.netlify.com/drop>.

## Clave de firma de Android

`firma-android/` contiene la clave con la que se firma el APK y sus contraseñas. **Guarda una copia segura.** Si se pierde, la siguiente versión no se podrá instalar encima de la actual: habría que desinstalar (perdiendo favoritos y plantillas propias) y reinstalar.


## Estructura

```
www/                 la app (lo mismo para web, Windows y Android)
  contenido/         contenido clínico, un archivo por sección
  js/app.js          lógica
  css/app.css        aspecto
scripts/             compilación y comprobación del contenido
electron/            ventana de Windows
android/             proyecto de Android (Capacitor)
github-actions/      copia del flujo de compilación (en el repositorio: .github/workflows/compilar.yml)
CODIGOS Y PLANTILLAS/  documentos de origen (solo en la carpeta de trabajo)
copia-v1.1.0/        versión anterior (solo en la carpeta de trabajo)
firma-android/       clave de firma del APK (no subir a internet)
```
