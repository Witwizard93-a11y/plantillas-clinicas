/* =====================================================================
   CÓDIGO IAM
   Fuente: tríptico «Codi IAM. Atenció d'emergència a la malaltia
   cardiovascular». Grup de Treball en Síndrome Coronària Aguda del SEM.
   V 03, abril de 2023 (U100.U00.4.D2.0036), con el aval del PdMCV.
   Documento aportado por Íñigo (CODIGOS/CODIGO IAM.pdf). Traducido del catalán.
   Tipos de bloque: ver la cabecera de rcp.js.
   ===================================================================== */

window.CONTENIDO = window.CONTENIDO || {};

window.CONTENIDO.iam = {
  titulo: "Código IAM",
  subtitulo: "SCA con elevación del ST · Codi IAM · SEM, V 03, abril de 2023",

  bloques: [
    { tipo: "paso", tono: "inicio", titulo: "Dolor torácico sugestivo de SCA",
      texto: "Sobre todo en mujeres, diabéticos y personas mayores, valorar el alto riesgo de SCA sin dolor." },
    { tipo: "paso", tono: "accion", titulo: "ECG hecho y valorado en menos de 10 minutos" },
    { tipo: "paso", tono: "decision", titulo: "¿Cumple criterios ECG de activación del Código IAM?" },
    { tipo: "ramas", ramas: [
      {
        titulo: "Sí",
        subtitulo: "Activar el Código IAM",
        tono: "desfibrilable",
        bloques: [
          { tipo: "paso", tono: "accion", titulo: "Activar el Código IAM",
            texto: "Notificar y anotar la hora del ECG." },
          { tipo: "paso", tono: "decision", titulo: "Tiempo estimado de traslado (ECG - llegada al hospital)" },
          { tipo: "paso", tono: "accion", titulo: "Menos de 90 minutos: angioplastia primaria",
            texto: "Tratamiento inicial del SCA y valorar el riesgo hemorrágico." },
          { tipo: "paso", tono: "accion", titulo: "Más de 90 minutos: fibrinólisis prehospitalaria",
            texto: "Después, traslado a un centro con capacidad de angioplastia primaria 24 h." },
          { tipo: "nota", texto: "Entre 90 y 120 minutos: individualizar." }
        ]
      },
      {
        titulo: "No",
        subtitulo: "No es Código IAM",
        tono: "nodesfibrilable",
        bloques: [
          { tipo: "paso", tono: "decision", titulo: "¿Criterios de SCASEST de muy alto riesgo?" },
          { tipo: "lista", titulo: "SCASEST de muy alto riesgo",
            items: [
              "Inestabilidad hemodinámica o shock cardiogénico.",
              "Dolor torácico recurrente o refractario a pesar del tratamiento.",
              "Arritmias potencialmente mortales.",
              "Complicaciones mecánicas del infarto.",
              "Insuficiencia cardíaca relacionada con el SCASEST.",
              "Elevación transitoria del ST."
            ] },
          { tipo: "paso", tono: "accion", titulo: "Sí: traslado a un centro con capacidad de angioplastia primaria 24 h" },
          { tipo: "paso", tono: "accion", titulo: "No: SCASEST (protocolo específico)" }
        ]
      }
    ] },

    { tipo: "lista", titulo: "Criterios ECG de activación",
      items: [
        "Nueva elevación del ST en el punto J en 2 derivaciones contiguas: 1 mm o más (0,1 mV) en todas las derivaciones excepto V2-V3. En V2-V3: 2 mm o más en hombres mayores de 40 años; 2,5 mm o más en hombres menores de 40 años; 1,5 mm o más en mujeres de cualquier edad.",
        "Descenso del ST de 1 mm o más en 8 o más derivaciones de superficie, con elevación del ST en aVR: sospecha de oclusión del tronco común o enfermedad multivaso.",
        "Elevación persistente del ST de 0,5 mm o más en V7-V9, con descenso especular en V1-V3: sospecha de infarto posterior.",
        "Elevación del ST en derivaciones derechas: sospecha de infarto de ventrículo derecho.",
        "Bloqueo de rama izquierda de nueva aparición: valorar los criterios de Sgarbossa-Smith.",
        "Bloqueo de rama derecha de nueva aparición.",
        "Patrón de De Winter.",
        "Ritmo de marcapasos (imagen de bloqueo de rama izquierda): los criterios de Sgarbossa-Smith también son aplicables, pero menos específicos."
      ] },
    { tipo: "tabla", titulo: "Criterios de Sgarbossa-Smith",
      columnas: ["Criterio", "Puntos"],
      filas: [
        ["Elevación del ST concordante con el QRS, superior a 1 mm, en cualquier derivación", "5"],
        ["Descenso del ST concordante con el QRS, superior a 1 mm, en V1, V2 o V3", "3"],
        ["Elevación o descenso del ST discordante con el QRS, superior al 25 %", "2"]
      ],
      nota: "Una puntuación de 3 o más tiene alta sensibilidad para el diagnóstico de IAM." },

    { tipo: "lista", titulo: "Tratamiento inicial del SCA",
      items: [
        "Valoración integral del paciente e historia clínica completa.",
        "Oxígeno: solo si la SpO2 es inferior al 90 %.",
        "AAS 150-300 mg v.o., masticada. Si la ingesta es imposible: 450 mg i.v. de acetilsalicilato de lisina. No administrar si hay alergia o contraindicación establecida.",
        "Segundo antiagregante: según la estrategia de reperfusión (ver más abajo).",
        "Anticoagulación si angioplastia primaria: bolo de heparina sódica i.v., 70 UI/kg. Si fibrinólisis: ver su apartado. No administrar ante dudas diagnósticas, hemorragia activa o criterios de alto riesgo hemorrágico.",
        "Analgesia: fentanilo 50-75 µg i.v. cada 5-10 min, o cloruro mórfico 4-8 mg i.v. con dosis adicionales de 2 mg cada 5-15 min (máximo 15-20 mg). Los opiáceos pueden enlentecer la absorción de los antiagregantes; en la insuficiencia cardíaca, usar la dosis mínima eficaz.",
        "Nitroglicerina sublingual 0,4 mg. Intravenosa: 10-60 µg/kg/h (diluir 10 mg en 50 ml de SG 5 %; empezar a 5 ml/h y aumentar cada 3-5 min hasta el efecto deseado o la aparición de efectos adversos; máximo 200 µg/min, 60 ml/h).",
        "No administrar nitroglicerina: como diagnóstico diferencial del dolor torácico; con TAS inferior a 90 mmHg; con FC inferior a 50 lpm; ante sospecha de infarto de ventrículo derecho; o si ha tomado inhibidores de la fosfodiesterasa en las últimas 24 h.",
        "Control de la glucemia y de los vómitos."
      ] },

    { tipo: "lista", titulo: "Segundo antiagregante si se decide angioplastia primaria",
      items: [
        "1. ¿Dudas diagnósticas (clínica o ECG), hemorragia activa grave, imposibilidad de vía oral o doble antiagregación previa? Sí: no administrar el segundo antiagregante.",
        "2. ¿Imposibilidad de obtener información del paciente o alto riesgo hemorrágico? Sí: clopidogrel 600 mg v.o.",
        "3. ¿Ictus isquémico o AIT previo, 75 años o más, o menos de 60 kg? Sí: ticagrelor 180 mg v.o.",
        "4. Ninguno de los anteriores: prasugrel 60 mg v.o."
      ] },
    { tipo: "nota", texto: "No administrar antiagregantes ni anticoagulantes ante un ECG dudoso, una parada cardíaca sin ECG claro, alta sospecha de elevación del ST por un trastorno neurológico o un síndrome aórtico agudo." },
    { tipo: "lista", titulo: "Criterios de alto riesgo hemorrágico",
      items: [
        "Anticoagulación oral.",
        "Hemorragia intracraneal previa.",
        "Hemorragia grave (con hospitalización o transfusión) en los últimos 6 meses.",
        "Neoplasia activa.",
        "Cirugía mayor o traumatismo grave en el último mes.",
        "Insuficiencia hepática grave (Child-Pugh C).",
        "Enfermedad terminal o fragilidad manifiesta."
      ] },

    { tipo: "lista", titulo: "Fibrinólisis prehospitalaria",
      items: [
        "Oxígeno: solo si la SpO2 es inferior al 90 %.",
        "AAS 150-300 mg v.o. más clopidogrel (menores de 75 años: 300 mg v.o.; mayores de 75 años: 75 mg v.o.). No administrar prasugrel ni ticagrelor.",
        "Enoxaparina, menores de 75 años sin insuficiencia renal (creatinina inferior a 2,5 mg/dl; inferior a 2 mg/dl en mujeres): bolo de 30 mg i.v. y, a los 15 min, 1 mg/kg s.c. (las primeras dosis no deben superar los 100 mg).",
        "Enoxaparina, mayores de 75 años y/o insuficiencia renal: sin bolo inicial; 0,75 mg/kg s.c. (máximo 75 mg).",
        "Tenecteplasa (TNK): en menos de 10 minutos desde el ECG diagnóstico, en bolo rápido (menos de 10 segundos), ajustada al peso. En mayores de 75 años, el 50 % de la dosis."
      ] },
    { tipo: "tabla", titulo: "Tenecteplasa según el peso",
      columnas: ["Peso (kg)", "TNK (mg)", "Volumen", "Volumen en > 75 años (50 %)"],
      filas: [
        ["< 60", "30", "6 ml", "3 ml"],
        ["> 60-70", "35", "7 ml", "3,5 ml"],
        ["> 70-80", "40", "8 ml", "4 ml"],
        ["> 80-90", "45", "9 ml", "4,5 ml"],
        ["> 90", "50", "10 ml", "5 ml"]
      ],
      nota: "Ampolla de 10 ml." },
    { tipo: "lista", titulo: "Contraindicaciones absolutas de la fibrinólisis",
      items: [
        "Hemorragia cerebral previa o ictus de causa desconocida.",
        "Ictus isquémico en los últimos 6 meses.",
        "Neoplasia o traumatismo del SNC; malformación vascular intracraneal conocida.",
        "Traumatismo, cirugía o lesión en el último mes.",
        "Sospecha de disección aórtica.",
        "Traumatismo o cirugía importante, o traumatismo craneofacial, en los últimos 3 meses.",
        "Sangrado activo conocido (excepto la menstruación).",
        "Sangrado gastrointestinal en el último mes.",
        "Punciones no compresibles recientes (biopsia hepática, punción lumbar, etc.)."
      ] },
    { tipo: "lista", titulo: "Contraindicaciones relativas de la fibrinólisis",
      items: [
        "Accidente isquémico transitorio en los últimos 6 meses.",
        "Tratamiento anticoagulante oral.",
        "Embarazo o primera semana posparto.",
        "HTA refractaria (TAS superior a 180 mmHg y/o diastólica superior a 110 mmHg).",
        "Enfermedad hepática avanzada.",
        "Endocarditis infecciosa.",
        "Úlcera péptica activa.",
        "Maniobras de reanimación prolongadas o reanimación traumática."
      ] },
    { tipo: "tabla", titulo: "Clasificación de Killip-Kimball",
      columnas: ["Killip", "Hallazgos"],
      filas: [
        ["I", "Auscultación normal"],
        ["II", "Estertores crepitantes y/o tercer ruido"],
        ["III", "Edema agudo de pulmón"],
        ["IV", "Shock cardiogénico"]
      ] }
  ],

  revisar: [
    "El tríptico escribe la creatinina en «mg/ml»; aquí consta en mg/dl."
  ],

  fuentes: [
    { titulo: "Tríptico Codi IAM. SEM, V 03, abril de 2023" }
  ]
};
