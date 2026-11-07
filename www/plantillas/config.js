/* =====================================================================
   PLANTILLAS CLÍNICAS · configuración del contenido
   =====================================================================
   El contenido está repartido en un archivo por especialidad:
     medicina-general.js · pediatria.js · traumatologia.js · oftalmologia.js

   Cada plantilla es un bloque { ... } dentro de PLANTILLAS.push( ... ).
   Para añadir una, copia un bloque existente, pégalo y cambia:

     id        : identificador fijo y único (no lo cambies después:
                 de él dependen los favoritos de cada usuario)
     categoria : "general" | "pediatria" | "traumatologia" | "oftalmologia"
     tipo      : "exploracion" | "tratamiento"
     ambito    : solo en Medicina general: ["familia"], ["urgencias"] o
                 ["familia", "urgencias"]
     grupo     : (opcional) sección de la lista: "Respiratorio"...
     titulo    : nombre visible
     etiquetas : (opcional) palabras extra para la búsqueda
     texto     : el contenido en castellano, entre comillas invertidas ` `
     texto_ca  : (opcional) el mismo contenido en catalán
     nota      : (opcional) indicaciones para quien la usa; NO se copia
     enlaces   : (opcional) [{ titulo: "...", url: "https://..." }]
     revisar   : (opcional) observación pendiente; se muestra como aviso
                 hasta que el equipo la valide y la borre

   Campos rellenables dentro del texto:
     {{TA}}                campo libre; vacío se copia como ___
     {{FC=80}}             campo libre con valor por defecto
     {{Ojo|OD|OI|AO}}      desplegable; sin elegir se copia OD/OI/AO
                           (si tiene más de 4 opciones, se copia ___)
     {{Lado|*derecho|izquierdo}}  desplegable con valor por defecto
   Usa la misma etiqueta en castellano y en catalán para que lo escrito
   se conserve al cambiar de idioma.

   Tras editar, ejecuta  npm run web  : comprueba el contenido y avisa de
   errores (comas, llaves, categorías mal escritas...).
   ===================================================================== */

window.PLANTILLAS_CONFIG = {
  version: "2026-11-07",

  // Aviso fijo encima de las listas (null para no mostrar ninguno).
  // El aviso de «plantillas con observaciones» aparece solo cuando hay alguna.
  aviso: null,

  categorias: [
    {
      id: "general",
      nombre: "Medicina general",
      corto: "General",
      ambitos: [
        { id: "familia", nombre: "Familia" },
        { id: "urgencias", nombre: "Urgencias" }
      ]
    },
    { id: "pediatria", nombre: "Pediatría", corto: "Pediatría", ambitos: [] },
    { id: "traumatologia", nombre: "Traumatología", corto: "Trauma", ambitos: [] },
    { id: "oftalmologia", nombre: "Oftalmología", corto: "Oftalmo", ambitos: [] }
  ],

  tipos: [
    { id: "exploracion", nombre: "Exploraciones", singular: "Exploración" },
    { id: "tratamiento", nombre: "Tratamientos", singular: "Tratamiento" }
  ]
};

window.PLANTILLAS = window.PLANTILLAS || [];
