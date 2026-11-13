# Revisión de tratamientos con la Guía Terapéutica semFYC

Objetivo: actualizar el tratamiento de cada plantilla de tratamiento según la Guía Terapéutica en Atención Primaria de la semFYC (https://guiaterapeutica.net), en 5 partes (`partes.json`). Todo se hace en la rama `revision-semfyc`; **nunca en `main`** (main publica la web y la app). Íñigo revisa y aprueba antes de publicar.

## En cada parte N

1. Rama: trabajar en `revision-semfyc` (traer antes `git fetch origin revision-semfyc` y partir de ella). Si `revision-semfyc/parte-N.md` ya existe, la parte está hecha: no repetirla.
2. Navegador: cargar la skill `anthropic-skills:guia-terapeutica-semfyc` y usar el navegador integrado del PC de Íñigo con su sesión. Si la sesión no está iniciada o el navegador no responde, **no tocar nada**: avisar a Íñigo (mensaje y notificación) de que inicie sesión en https://guiaterapeutica.net desde el navegador de la app de Claude y terminar. La siguiente ejecución la retoma.
3. Para cada plantilla de la parte N:
   - Leer la plantilla en `www/plantillas/*.js` y deducir el problema de salud.
   - Plantillas sin tratamiento farmacológico (evolutivos, controles, información para padres, hojas SEUP, exploraciones): estado «no aplica», sin cambios.
   - Buscar el problema en la guía y leer la entrada completa (elección, dosis, vía, pauta, duración, alternativas, pediatría, embarazo, derivación, fecha de actualización).
   - Si la guía no tiene el problema: estado «no está en la guía», sin cambios.
   - Si la plantilla coincide con la guía: estado «sin cambios».
   - Si difiere: corregir el texto de la plantilla para que fármacos, dosis, pautas y duraciones sean **exactamente** los de la guía, conservando el estilo de la plantilla, sus campos {{...}} y lo que la guía no contradice (medidas generales, signos de alarma). Poner en `revisar` qué se ha cambiado y la fuente: «Actualizado según Guía Terapéutica semFYC (consultada DD/MM/AAAA): …». Añadir en `enlaces` la entrada de la guía. Si la plantilla ya tenía un `revisar` que la guía resuelve, sustituirlo.
   - No añadir nada de memoria ni de otras fuentes. Si algo de la guía es ambiguo, no cambiarlo y anotarlo.
4. `node scripts/validar.mjs` sin errores.
5. Escribir `revision-semfyc/parte-N.md`: tabla con id, título, entrada de la guía (enlace), estado y cambios hechos.
6. Commit en `revision-semfyc` y push. Mensaje a Íñigo con el resumen de la parte (nº actualizadas / sin cambios / no aplica / no encontradas y las 3-5 diferencias más relevantes).
7. En la parte 5, además: `npm ci --ignore-scripts` (con ELECTRON_SKIP_BINARY_DOWNLOAD=1), `npm run word -- revision-semfyc/Plantillas-revision-semfyc.docx`, `revision-semfyc/RESUMEN.md` con todas las partes, commit, push y enviar a Íñigo el Word y el resumen. No fusionar con main: eso lo decide Íñigo.
