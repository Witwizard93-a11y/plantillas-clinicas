# Plantillas Clínicas

App para consultar plantillas de exploración y tratamiento y copiarlas al portapapeles con un clic, para pegarlas en la historia clínica.

**Versión web:** <https://witwizard93-a11y.github.io/plantillas-clinicas/> (se puede instalar como app desde Chrome o Edge y funciona sin conexión).

- **Medicina general** (filtro Familia / Urgencias), **Pediatría**, **Traumatología** y **Oftalmología**.
- En cada categoría, **Exploraciones** y **Tratamientos**.
- Plantillas en **castellano y catalán** cuando el documento original las tenía en los dos idiomas.
- Un mismo código para **Android** (APK), **Windows** (instalador o portable) y **web/PWA** (se instala desde Chrome o Edge).
- Funciona sin conexión. No hay servidor ni analítica: no sale ningún dato del dispositivo.

## Qué incluye

| Función | Para qué sirve |
|---|---|
| Copiar con un clic | Botón en cada plantilla de la lista y en la ficha abierta. |
| Búsqueda global | Busca en todas las categorías, sin importar tildes. En Windows: escribe e **Intro** copia el primer resultado. |
| Campos rellenables | `{{TA}}` crea un campo libre y `{{Ojo\|OD\|OI\|AO}}` un desplegable. Lo vacío se copia como `___` o `OD/OI/AO`; `{{FC=80}}` y `{{Lado\|*derecho\|izquierdo}}` llevan valor por defecto. Lo que se escribe **no se guarda**. |
| Castellano / català | Selector en la ficha y en Ajustes. Lo escrito en los campos se conserva al cambiar de idioma. |
| Notas, enlaces y avisos | La **nota** de cada plantilla se ve pero no se copia. Los **enlaces** (hojas SEUP, calculadoras, guías) se abren fuera de la app. Las plantillas con una observación clínica pendiente llevan la etiqueta **Revisar**; buscar «revisar» las lista todas. |
| Retocar | Cambia el texto solo para esa copia, sin tocar la plantilla. |
| Favoritos | Estrella en la ficha; pestaña propia. |
| Plantillas propias | Crear, editar, duplicar u ocultar plantillas en el dispositivo. Exportar/Importar para pasarlas a otro dispositivo o a un compañero. |
| Tema y letra | Claro, oscuro (guardias) o automático; tres tamaños de texto. |

Atajos en Windows: `Ctrl K` buscar · `↑ ↓` moverse · `Intro` copiar la marcada · `Ctrl Intro` copiar la ficha abierta · `Esc` borrar búsqueda o cerrar · `Ctrl +/-` zoom.

## Instalar

**Android.** Copia el APK al móvil y ábrelo. La primera vez Android pedirá permitir «instalar apps desconocidas» para el gestor de archivos o el navegador. Las actualizaciones se instalan encima, conservando favoritos y plantillas propias, siempre que estén firmadas con la misma clave (`firma-android/`).

**Windows.**
- `PlantillasClinicas-x.y.z-instalador.exe`: se instala para el usuario actual, sin permisos de administrador, con acceso en el escritorio y en el menú Inicio.
- `PlantillasClinicas-x.y.z-portable.exe`: se ejecuta sin instalar.
- No están firmados con un certificado comercial: Windows SmartScreen puede avisar. Pulsa «Más información» → «Ejecutar de todas formas».
- **Ordenadores del trabajo bloqueados**: usa `PlantillasClinicas.html` (doble clic; se abre en Edge o Chrome, sin instalar nada y sin conexión) o la versión web instalada desde Edge (menú `…` → Aplicaciones → Instalar este sitio como una aplicación).

**Web/PWA.** Publica la carpeta `dist/web` (ver más abajo). En Android: Chrome → menú `⋮` → Instalar aplicación. En Windows: Edge o Chrome → icono de instalar en la barra de direcciones.

## Añadir o corregir plantillas

El contenido está en **`www/plantillas/`**, un archivo por especialidad: `medicina-general.js`, `pediatria.js`, `traumatologia.js` y `oftalmologia.js`. Las categorías y tipos se definen en `config.js`, cuya cabecera explica cada campo. Ejemplo:

```js
{
  id: "pe-conjuntivitis",             // único y fijo: de él dependen los favoritos
  categoria: "pediatria",             // "general", "pediatria", "traumatologia" u "oftalmologia"
  tipo: "tratamiento",                // "exploracion" o "tratamiento"
  grupo: "Ojos",                      // opcional: sección de la lista
  titulo: "Conjuntivitis",
  etiquetas: "ojo rojo tobrex",       // opcional: palabras para la búsqueda
  nota: "Alternativa: ...",           // opcional: se ve, pero no se copia
  enlaces: [{ titulo: "SEUP · Fiebre", url: "https://..." }],   // opcional
  revisar: "Frecuencia del Tobrex...",   // opcional: aviso hasta que el equipo lo valide
  texto: `
- Tobrex colirio 1 gota cada {{Tobrex cada (horas)|*4|8}} horas durante 7 días.
`,
  texto_ca: `                          // opcional: versión en catalán
- Tobrex col·liri 1 gota cada {{Tobrex cada (horas)|*4|8}} hores durant 7 dies.
`
},
```

En Medicina general se añade `ambito: ["familia"]`, `["urgencias"]` o ambos. Usa la misma etiqueta de campo en castellano y en catalán para que lo escrito se conserve al cambiar de idioma.

Cuando el equipo valide una observación, **borra la línea `revisar`** de esa plantilla (y corrige el texto si hace falta). El aviso de «pendientes de revisar» desaparece solo cuando no queda ninguna. Las plantillas de oftalmología llevan `ejemplo: true` hasta que se sustituyan por las del servicio.

Después de editar:

```bash
npm run validar       # comprueba comas, llaves, ids repetidos, categorías, campos {{ }} y enlaces
```

Sube la versión en `package.json` (por ejemplo `"version": "1.1.1"`) y vuelve a compilar. La versión se aplica a la vez a la web, a Windows y a Android. `npm run web` también valida y no compila si hay errores.

Las plantillas creadas desde la propia app se guardan solo en ese dispositivo. Para incorporarlas a la app de todos: **Ajustes → Exportar mis plantillas** y añadir ese contenido al archivo de su especialidad.

`REVISION.md` resume qué se ha incorporado de cada documento, qué se ha corregido y qué observaciones clínicas quedan pendientes.

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
4. Una etiqueta `v1.1.1` crea además una *Release* con todos los archivos para descargar.
5. Web/PWA: *Settings → Pages → Source: GitHub Actions* la publica automáticamente. GitHub Pages es gratuito en repositorios públicos; con un repositorio privado necesita un plan de pago. Alternativa gratuita: arrastra la carpeta `dist/web` a <https://app.netlify.com/drop>.

## Clave de firma de Android

`firma-android/` contiene la clave con la que se firma el APK y sus contraseñas. **Guarda una copia segura.** Si se pierde, la siguiente versión no se podrá instalar encima de la actual: habría que desinstalar (perdiendo favoritos y plantillas propias) y reinstalar.

## Estructura

```
www/                 la app (HTML, CSS, JS): la misma para todas las plataformas
  plantillas/        el contenido: config.js y un archivo por especialidad
  js/app.js          la lógica
android/             proyecto Android (Capacitor 8)
electron/            envoltorio de escritorio para Windows (Electron)
scripts/             compilación web, validación del contenido, iconos y servidor local
assets/, build/      iconos de Android y Windows
firma-android/       clave de firma del APK (no subir a internet)
.github/workflows/   compilación automática
```

Licencias de terceros: tipografía Atkinson Hyperlegible Next (SIL Open Font License, `www/fonts/`), Electron y Capacitor (MIT).
