/* =====================================================================
   NEWS · National Early Warning Score (versión original, 2012)
   Fuente: Royal College of Physicians. National Early Warning Score
   (NEWS): standardising the assessment of acute-illness severity in the
   NHS. Londres: RCP, 2012. Tabla de puntuación comprobada con la
   reproducción de Scand J Trauma Resusc Emerg Med. 2016;24:80 (tabla 1).
   Diferencias con el NEWS2: una sola escala de SpO2 y conciencia AVPU
   (sin la confusión de nueva aparición).
   Cada tramo es { hasta: valor máximo incluido, puntos }.
   ===================================================================== */

window.CONTENIDO = window.CONTENIDO || {};

window.CONTENIDO.news = {
  titulo: "NEWS",
  subtitulo: "Escala de alerta precoz, versión original de 2012",
  version: 1,

  tramos: {
    fr: [
      { hasta: 8, puntos: 3 }, { hasta: 11, puntos: 1 }, { hasta: 20, puntos: 0 },
      { hasta: 24, puntos: 2 }, { puntos: 3 }
    ],
    spo2: [
      { hasta: 91, puntos: 3 }, { hasta: 93, puntos: 2 }, { hasta: 95, puntos: 1 }, { puntos: 0 }
    ],
    oxigeno: { aire: 0, oxigeno: 2 },
    tas: [
      { hasta: 90, puntos: 3 }, { hasta: 100, puntos: 2 }, { hasta: 110, puntos: 1 },
      { hasta: 219, puntos: 0 }, { puntos: 3 }
    ],
    fc: [
      { hasta: 40, puntos: 3 }, { hasta: 50, puntos: 1 }, { hasta: 90, puntos: 0 },
      { hasta: 110, puntos: 1 }, { hasta: 130, puntos: 2 }, { puntos: 3 }
    ],
    conciencia: { alerta: 0, vpu: 3 },
    temperatura: [
      { hasta: 35.0, puntos: 3 }, { hasta: 36.0, puntos: 1 }, { hasta: 38.0, puntos: 0 },
      { hasta: 39.0, puntos: 1 }, { puntos: 2 }
    ]
  },

  // Umbrales de respuesta del informe de 2012 (los mismos cortes que el NEWS2)
  respuestas: {
    cero: { riesgo: "Bajo", nivel: "bajo", monitorizacion: "Mínimo cada 12 horas",
      respuesta: ["Continuar la monitorización NEWS habitual."] },
    bajo: { riesgo: "Bajo", nivel: "bajo", monitorizacion: "Mínimo cada 4-6 horas",
      respuesta: ["Informar a la enfermera responsable, que debe valorar al paciente.",
                  "La enfermera decide si hay que aumentar la frecuencia de monitorización o escalar la atención."] },
    rojo: { riesgo: "Bajo-medio (3 puntos en un solo parámetro)", nivel: "medio", monitorizacion: "Mínimo cada hora",
      respuesta: ["Respuesta urgente en planta.",
                  "La enfermera informa al equipo médico responsable, que revisa al paciente y decide si hay que escalar la atención."] },
    medio: { riesgo: "Medio · umbral de respuesta urgente", nivel: "medio", monitorizacion: "Mínimo cada hora",
      respuesta: ["Informar de inmediato al equipo médico responsable.",
                  "Valoración urgente por un clínico o equipo con competencias en el paciente agudo.",
                  "Atención en un entorno con monitorización."] },
    alto: { riesgo: "Alto · umbral de respuesta de emergencia", nivel: "alto", monitorizacion: "Monitorización continua de constantes",
      respuesta: ["Informar de inmediato al equipo médico responsable (al menos un médico de nivel «specialist registrar»).",
                  "Valoración de emergencia por un equipo con competencias en cuidados críticos, incluido el manejo avanzado de la vía aérea.",
                  "Valorar el traslado a una unidad de nivel 2 o 3 (semicríticos o UCI).",
                  "Atención en un entorno con monitorización."] }
  },

  notas: [
    "En el NEWS original hay una sola escala de SpO2 (no existe la escala 2 de la hipercapnia).",
    "Conciencia (AVPU): puntúa 3 si solo responde a la voz (V), al dolor (P) o no responde (U). La confusión de nueva aparición no puntúa en esta versión.",
    "El Royal College of Physicians sustituyó el NEWS por el NEWS2 en 2017. La escalada concreta depende del circuito de cada centro."
  ],

  revisar: [
    "La tabla de puntuación se ha comprobado con una reproducción publicada (Scand J Trauma Resusc Emerg Med 2016, tabla 1), no con el informe original de 2012, que no se ha podido abrir.",
    "Los umbrales de respuesta (0, 1-4, 3 en un parámetro, 5-6, 7 o más) y la frecuencia de monitorización son los del NEWS2, que mantiene los del NEWS de 2012. Comprobarlos con el informe original."
  ],

  fuentes: [
    { titulo: "Royal College of Physicians. National Early Warning Score (NEWS). Londres: RCP, 2012" },
    { titulo: "NEWS as an emergency department predictor of disease severity. Scand J Trauma Resusc Emerg Med. 2016;24:80 (tabla 1)", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4890514/" }
  ],

  aviso: "Traducción no aprobada por el Royal College of Physicians. Consultar la versión original en inglés antes de su uso clínico."
};
