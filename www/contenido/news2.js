/* =====================================================================
   NEWS2 · National Early Warning Score 2
   Fuente: Royal College of Physicians. National Early Warning Score
   (NEWS) 2. Londres: RCP, 2017. Chart 1 (puntuación), Chart 2 (umbrales)
   y Chart 4 (respuesta clínica).
   Cada tramo es { hasta: valor máximo incluido, puntos }. El último
   tramo no lleva «hasta» (todo lo que quede por encima).
   ===================================================================== */

window.CONTENIDO = window.CONTENIDO || {};

window.CONTENIDO.news2 = {
  titulo: "NEWS2",
  subtitulo: "Escala de alerta precoz en el paciente agudo",

  tramos: {
    fr: [
      { hasta: 8, puntos: 3 }, { hasta: 11, puntos: 1 }, { hasta: 20, puntos: 0 },
      { hasta: 24, puntos: 2 }, { puntos: 3 }
    ],
    spo2Escala1: [
      { hasta: 91, puntos: 3 }, { hasta: 93, puntos: 2 }, { hasta: 95, puntos: 1 }, { puntos: 0 }
    ],
    // Escala 2: hasta 92 % puntúa igual con aire o con oxígeno.
    spo2Escala2Base: [
      { hasta: 83, puntos: 3 }, { hasta: 85, puntos: 2 }, { hasta: 87, puntos: 1 }, { hasta: 92, puntos: 0 }
    ],
    // Escala 2, SpO2 >= 93 % CON oxígeno (con aire ambiente: 0 puntos).
    spo2Escala2ConOxigeno: [
      { hasta: 94, puntos: 1 }, { hasta: 96, puntos: 2 }, { puntos: 3 }
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
    conciencia: { alerta: 0, cvpu: 3 },
    temperatura: [
      { hasta: 35.0, puntos: 3 }, { hasta: 36.0, puntos: 1 }, { hasta: 38.0, puntos: 0 },
      { hasta: 39.0, puntos: 1 }, { puntos: 2 }
    ]
  },

  // Chart 2 (riesgo) y Chart 4 (frecuencia de monitorización y respuesta)
  respuestas: {
    cero: {
      riesgo: "Bajo",
      nivel: "bajo",
      monitorizacion: "Mínimo cada 12 horas",
      respuesta: ["Continuar la monitorización NEWS habitual."]
    },
    bajo: {
      riesgo: "Bajo",
      nivel: "bajo",
      monitorizacion: "Mínimo cada 4-6 horas",
      respuesta: [
        "Informar a la enfermera responsable, que debe valorar al paciente.",
        "La enfermera decide si hay que aumentar la frecuencia de monitorización o escalar la atención."
      ]
    },
    rojo: {
      riesgo: "Bajo-medio (3 puntos en un solo parámetro)",
      nivel: "medio",
      monitorizacion: "Mínimo cada hora",
      respuesta: [
        "Respuesta urgente en planta.",
        "La enfermera informa al equipo médico responsable, que revisa al paciente y decide si hay que escalar la atención."
      ]
    },
    medio: {
      riesgo: "Medio · umbral de respuesta urgente",
      nivel: "medio",
      monitorizacion: "Mínimo cada hora",
      respuesta: [
        "Informar de inmediato al equipo médico responsable.",
        "Valoración urgente por un clínico o equipo con competencias en el paciente agudo.",
        "Atención en un entorno con monitorización."
      ]
    },
    alto: {
      riesgo: "Alto · umbral de respuesta de emergencia",
      nivel: "alto",
      monitorizacion: "Monitorización continua de constantes",
      respuesta: [
        "Informar de inmediato al equipo médico responsable (al menos un médico de nivel «specialist registrar»).",
        "Valoración de emergencia por un equipo con competencias en cuidados críticos, incluido el manejo avanzado de la vía aérea.",
        "Valorar el traslado a una unidad de nivel 2 o 3 (semicríticos o UCI).",
        "Atención en un entorno con monitorización."
      ]
    }
  },

  notas: [
    "Escala 2 de SpO2: solo en pacientes con insuficiencia respiratoria hipercápnica y objetivo de saturación del 88-92 %, por indicación de un clínico competente.",
    "Conciencia: puntúa 3 la confusión de nueva aparición (C) o la respuesta solo a la voz (V), al dolor (P) o la ausencia de respuesta (U).",
    "La respuesta clínica es la del documento original (hospital del NHS). La escalada concreta depende del circuito de cada centro."
  ],

  fuentes: [
    { titulo: "Royal College of Physicians. NEWS2 (2017)", url: "https://www.rcp.ac.uk/resources/national-early-warning-score-news-2/" }
  ],

  aviso: "Traducción no aprobada por el Royal College of Physicians. Consultar la versión original en inglés antes de su uso clínico."
};
