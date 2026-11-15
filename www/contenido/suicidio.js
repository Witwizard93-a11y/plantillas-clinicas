/* =====================================================================
   CÓDIGO RIESGO DE SUICIDIO
   Fuente: tríptico «Codi Risc Suïcidi. Atenció d'emergència a la sospita
   de risc de suïcidi». Grup de Treball en malalties mentals del SEM.
   V 01, junio de 2024 (U100.U00.0.D2.00400). Documento aportado por
   Íñigo (CODIGOS/CODIGO suicidio.pdf). Traducido del catalán.
   Tipos de bloque: ver la cabecera de rcp.js. Además:
     escala { id, titulo, intro?, items: [[texto, puntos]], bandas: [{ desde, texto, nivel }] }
   ===================================================================== */

window.CONTENIDO = window.CONTENIDO || {};

window.CONTENIDO.suicidio = {
  titulo: "Código Riesgo de Suicidio",
  subtitulo: "Codi Risc Suïcidi · SEM, V 01, junio de 2024",

  bloques: [
    { tipo: "paso", tono: "inicio", titulo: "Sospecha de riesgo de suicidio" },
    { tipo: "paso", tono: "decision", titulo: "MINI (mini entrevista neuropsiquiátrica internacional)" },
    { tipo: "ramas", ramas: [
      {
        titulo: "10 puntos o más",
        subtitulo: "Riesgo alto",
        tono: "desfibrilable",
        bloques: [
          { tipo: "paso", tono: "accion", titulo: "Activación del Código Riesgo de Suicidio",
            texto: "Alerta a la Central de Coordinación Sanitaria del SEM (CECOS): 061 / 112. Activación de recursos. Acompañamiento telefónico continuo." },
          { tipo: "paso", tono: "accion", titulo: "Tentativa de suicidio",
            items: ["Valoración del estado del paciente.", "Contención."] },
          { tipo: "paso", tono: "accion", titulo: "Traslado al hospital de referencia CRS" },
          { tipo: "paso", tono: "fin", titulo: "Seguimiento posterior al alta hospitalaria",
            texto: "061 Salut Respon." }
        ]
      },
      {
        titulo: "1-9 puntos",
        subtitulo: "Riesgo bajo (1-5) o medio (6-9)",
        tono: "nodesfibrilable",
        bloques: [
          { tipo: "paso", tono: "accion", titulo: "Consejo telefónico" },
          { tipo: "paso", tono: "accion", titulo: "Información de los dispositivos de la red disponibles",
            items: ["Atención primaria.", "Salud mental."] }
        ]
      }
    ] },
    { tipo: "nota", texto: "Excepcionalmente, la valoración clínica de la comorbilidad y de los factores de riesgo presentes en el paciente con riesgo moderado o medio puede aconsejar incrementar el nivel de sospecha inicial a un nivel de riesgo alto." },

    { tipo: "escala", id: "mini", titulo: "MINI · durante el último mes...",
      items: [
        ["¿Ha pensado que estaría mejor muerto/a?", 1],
        ["¿Ha querido hacerse daño?", 2],
        ["¿Ha pensado en el suicidio?", 6],
        ["¿Ha planeado cómo hacerlo?", 10],
        ["¿Lo ha intentado recientemente?", 10],
        ["¿Lo ha intentado en algún momento de su vida?", 4]
      ],
      bandas: [
        { desde: 10, texto: "Riesgo de suicidio alto: activación del código.", nivel: "alto" },
        { desde: 6, texto: "Riesgo de suicidio medio.", nivel: "medio" },
        { desde: 1, texto: "Riesgo de suicidio bajo.", nivel: "bajo" }
      ] },

    { tipo: "lista", titulo: "Identificación de factores de riesgo",
      items: [
        "Estar deprimido/a (depresión mayor).",
        "Diagnóstico psiquiátrico de: trastorno depresivo, trastorno psicótico, trastorno bipolar, trastorno límite de la personalidad, trastorno de la conducta alimentaria.",
        "Impulsividad, agresividad, agitación, nivel de consciencia alterado.",
        "Consumo excesivo y/o dependencia del alcohol.",
        "Consumo y/o adicción a otras sustancias.",
        "Enfermedades orgánicas graves.",
        "Otros factores de riesgo: género masculino; más de 65 años o adolescente; problemas sociales; acontecimientos vitales estresantes en los últimos 3 meses (laborales, de pareja, económicos, de familia).",
        "Acceso a armas, tóxicos y otros medios letales, o situaciones de violencia.",
        "Antecedentes familiares (primer grado) de suicidio consumado."
      ] },
    { tipo: "lista", titulo: "Seguimiento proactivo · 061 Salut Respon",
      items: [
        "Seguimiento CRS a los 30 días del alta hospitalaria:",
        "¿Ha recibido la llamada de su CSM?",
        "¿Tiene día de visita confirmado?",
        "¿Se encuentra mejor?",
        "¿Ha sido visitado en su CSM?"
      ] }
  ],

  revisar: [
    "El tríptico pone «+ 10 punts» para el riesgo alto; se ha interpretado como 10 puntos o más."
  ],

  fuentes: [
    { titulo: "Tríptico Codi Risc Suïcidi. SEM, V 01, junio de 2024" }
  ]
};
