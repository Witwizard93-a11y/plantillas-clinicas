/* =====================================================================
   CÓDIGO ICTUS
   Fuente: tríptico «Codi ICTUS. Atenció d'emergència a la malaltia
   vascular cerebral». Grup de Treball en Ictus del SEM. V.03, abril de
   2023 (U100.U00.4.D2.0039). Documento aportado por Íñigo
   (CODIGOS/CODIGO ICTUS.pdf). Traducido del catalán.
   Tipos de bloque: ver la cabecera de rcp.js.
   ===================================================================== */

window.CONTENIDO = window.CONTENIDO || {};

window.CONTENIDO.ictus = {
  titulo: "Código Ictus",
  subtitulo: "Codi Ictus · SEM, V.03, abril de 2023",

  bloques: [
    { tipo: "paso", tono: "inicio", titulo: "Sospecha de ictus" },
    { tipo: "paso", tono: "decision", titulo: "Test RAPID · estado clínico actual",
      items: [
        "¿Ríe asimétricamente?",
        "¿Tiene dificultades para levantar los brazos o mantenerlos levantados?",
        "¿Habla con dificultad (disartria)?"
      ],
      texto: "Sí: RAPID positivo." },
    { tipo: "paso", tono: "decision", titulo: "Test RANCOM · estado clínico previo",
      items: ["¿Necesitaba ayuda para vestirse, moverse o ir al baño?"],
      texto: "No: RANCOM negativo." },
    { tipo: "paso", tono: "decision", titulo: "Tiempo de evolución",
      items: ["Síntomas de menos de 24 horas de evolución (incluido el AIT).", "Inicio incierto.", "Ictus del despertar."],
      texto: "Sí a cualquiera de los tres." },
    { tipo: "paso", tono: "accion", titulo: "Activación del Código Ictus",
      texto: "Alertar a la CECOS del SEM. Activar siempre a través de la CECOS y comunicar cualquier puntuación de la escala RACE." },

    { tipo: "lista", titulo: "Recordar",
      items: [
        "Sospecha de ictus de territorio posterior (vertebrobasilar): vértigo, diplopía y ataxia. También hay que activar el Código Ictus.",
        "Activar el Código Ictus también en el paciente pediátrico.",
        "La sospecha de hemorragia subaracnoidea no es un Código Ictus: tiene un circuito específico."
      ] },

    { tipo: "race" },

    { tipo: "ramas", ramas: [
      {
        titulo: "Adulto",
        subtitulo: "15 años o más, sin límite superior de edad",
        tono: "desfibrilable",
        bloques: [
          { tipo: "paso", tono: "decision", titulo: "Escala RACE" },
          { tipo: "paso", tono: "accion", titulo: "RACE 0-4",
            texto: "CRI más cercano (CTI, CPI o C-TI). Aviso de Código Ictus." },
          { tipo: "paso", tono: "accion", titulo: "RACE 5-9",
            texto: "Llamada al neurólogo referente." },
          { tipo: "paso", tono: "decision", titulo: "¿El centro de referencia hace trombectomía mecánica?" },
          { tipo: "paso", tono: "accion", titulo: "Sí",
            texto: "Centro de trombectomía más cercano (CTI, o CPI en horario de trombectomía). Aviso de Código Ictus." },
          { tipo: "paso", tono: "decision", titulo: "No: ¿candidato a tPA?" },
          { tipo: "paso", tono: "accion", titulo: "Candidato a tPA",
            texto: "CRI más cercano (CPI o C-TI). Aviso de Código Ictus." },
          { tipo: "paso", tono: "accion", titulo: "No candidato a tPA",
            texto: "Centro de trombectomía más cercano (CTI, o CPI en horario de trombectomía). Aviso de Código Ictus." }
        ]
      },
      {
        titulo: "Pediátrico",
        subtitulo: "Menos de 15 años",
        tono: "nodesfibrilable",
        bloques: [
          { tipo: "paso", tono: "accion", titulo: "Código Ictus pediátrico",
            texto: "CRI pediátrico más cercano. Aviso de Código Ictus." }
        ]
      }
    ] },

    { tipo: "lista", titulo: "Candidato a tPA",
      items: [
        "Tiempo estimado de llegada al CRI inferior a 4 horas desde el inicio de los síntomas.",
        "Sin anticoagulación.",
        "Sin intervenciones quirúrgicas en los últimos 15 días.",
        "Sin antecedentes de hemorragia cerebral."
      ] },
    { tipo: "tabla", titulo: "Siglas",
      columnas: ["Sigla", "Significado"],
      filas: [
        ["CRI", "Centro de referencia de ictus"],
        ["CTI", "Centro terciario de ictus"],
        ["CPI", "Centro primario de ictus"],
        ["C-TI", "Centro teleictus"],
        ["TM", "Trombectomía mecánica"]
      ] },

    { tipo: "lista", titulo: "Datos que hay que transmitir a la central de coordinación (registro SITREM)",
      items: [
        "Número CIP y número de DNI/NIF.",
        "Hora de inicio de los síntomas (si es del despertar, la hora a la que se fue a dormir; o la última vez que estaba bien).",
        "Toma o no anticoagulantes.",
        "RAPID y RANCOM.",
        "Escala clínica RACE (puntuación).",
        "Glucemia capilar.",
        "Presión arterial.",
        "Frecuencia cardíaca.",
        "Temperatura."
      ] },

    { tipo: "lista", titulo: "Manejo de las complicaciones agudas",
      items: [
        "Agitación psicomotriz: valorar haloperidol 2,5-5 mg i.v. Monitorizar el ritmo ECG; atención a los efectos extrapiramidales. Evitar las benzodiacepinas.",
        "Arritmias: tratar las que provoquen inestabilidad hemodinámica, según las guías de actuación.",
        "Coma (GCS inferior a 9): para preservar y garantizar una vía aérea permeable, valorar su aislamiento con intubación traqueal.",
        "Crisis comicial: benzodiacepinas i.v. No de forma profiláctica.",
        "Hipotensión arterial: descartar situaciones que requieran un tratamiento específico y tratarlas. No administrar sueros hipotónicos respecto al plasma (suero glucosado, Ringer lactato). Valorar fármacos vasoactivos en situación de shock.",
        "Hipertensión intracraneal: situación crítica en la que la sospecha diagnóstica es clínica y las opciones terapéuticas son muy limitadas. Si se sospecha herniación: valoración inicial A, B, C, sedestación a 30° e hipertónico. Valorar individualmente la necesidad de aislar la vía aérea.",
        "Hipoglucemia (inferior a 60 mg/dl): determinarla en todo paciente agitado o con focalidad neurológica. Corregir con glucosa intravenosa (mantener glucemias superiores a 70 mg/dl).",
        "Hipertermia (más de 37,5 °C): paracetamol 1 g i.v. Evitar el ácido acetilsalicílico. Se ha relacionado con el empeoramiento del área de isquemia."
      ] },
    { tipo: "lista", titulo: "Emergencia hipertensiva",
      items: [
        "TAS superior a 220 mmHg y/o TAD superior a 120 mmHg: labetalol o urapidilo.",
        "Objetivo: disminuir la tensión arterial un 10 % inicial. Evitar los hipotensores sublinguales.",
        "Control de la HTA: ambiente tranquilo, tratar el dolor y la hipoxia. Revalorar la TA.",
        "Solo tratar (unidad medicalizada) si la TAS es superior a 220 y/o la TAD superior a 120 mmHg; evitar reducciones superiores al 15 %.",
        "Labetalol i.v.: 10 mg en 1-2 min; repetir cada 10 min hasta un máximo de 150 mg, o bomba de perfusión continua (100 mg en 80 ml de SF, a 2-10 ml/h).",
        "Si los betabloqueantes están contraindicados: urapidilo, 10 mg en bolo lento y continuar con perfusión de 4-8 mg/h en suero fisiológico."
      ] },
    { tipo: "tabla", titulo: "Hiperglucemia (más de 180 mg/dl): insulina rápida en bolo i.v.",
      columnas: ["Glucemia capilar", "Insulina rápida"],
      filas: [
        ["< 150 mg/dl", "0 UI"],
        ["150-250 mg/dl", "4 UI"],
        ["250-350 mg/dl", "8 UI"],
        ["> 350 mg/dl", "12 UI"]
      ],
      nota: "Objetivo: reducir hasta 180 mg/dl en la fase aguda. Evitar las hipoglucemias iatrogénicas." }
  ],

  race: {
    titulo: "Escala RACE",
    lado: [
      { id: "izq", nombre: "Hemicuerpo izquierdo" },
      { id: "der", nombre: "Hemicuerpo derecho" }
    ],
    items: [
      { id: "facial", nombre: "Paresia facial",
        ayuda: "Pedir que sonría o enseñe los dientes. Si no comprende o no colabora, provocar la mueca presionando con los dedos detrás de las orejas.",
        opciones: [["Ausente", 0], ["Ligera", 1], ["Moderada / grave", 2]] },
      { id: "brazo", nombre: "Paresia del brazo",
        ayuda: "Brazos levantados a 45° si está tumbado o a 90° si está sentado. Se puntúa el tiempo que los mantiene contra la gravedad.",
        opciones: [["Ausente / ligera (más de 10 s)", 0], ["Moderada (menos de 10 s)", 1], ["Grave (no lo levanta)", 2]] },
      { id: "pierna", nombre: "Paresia de la pierna",
        ayuda: "Piernas levantadas a 30° con el paciente tumbado, flexionando las rodillas si es necesario. Se puntúa el tiempo que las mantiene.",
        opciones: [["Ausente / ligera (más de 5 s)", 0], ["Moderada (menos de 5 s)", 1], ["Grave (no la levanta)", 2]] },
      { id: "mirada", nombre: "Desviación oculocefálica",
        ayuda: "Tendencia a girar la cabeza y dirigir la mirada hacia un lado. La dirección de la mirada es hacia el lado contrario al de la debilidad.",
        opciones: [["Ausente", 0], ["Presente", 1]] }
    ],
    cortical: {
      der: { id: "afasia", nombre: "Afasia",
        ayuda: "Dos órdenes, siempre las mismas: 1) cierre los ojos; 2) haga un puño con la mano.",
        opciones: [["Obedece las 2 órdenes", 0], ["Obedece 1 orden", 1], ["No obedece ninguna orden", 2]] },
      izq: { id: "agnosia", nombre: "Agnosia",
        ayuda: "1) Asomatognosia: colocar el brazo o la mano izquierda delante de la cara y preguntar «¿de quién es este brazo?». 2) Anosognosia: preguntar si puede mover los dos brazos y aplaudir.",
        opciones: [["Hace bien las 2 pruebas", 0], ["Falla 1 prueba", 1], ["Falla las 2 pruebas", 2]] }
    },
    umbral: 5,
    textoUmbral: "5 o más: alta probabilidad de oclusión arterial e ictus grave. Comunicar a la CECOS cualquier puntuación."
  },

  fuentes: [
    { titulo: "Tríptico Codi Ictus. SEM, V.03, abril de 2023" }
  ]
};
