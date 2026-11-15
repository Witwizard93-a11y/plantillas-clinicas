/* =====================================================================
   CÓDIGO SEPSIS
   Fuente: tríptico «Codi sèpsia. Atenció d'emergència al malalt crític
   amb sospita d'infecció greu». GdT Sèpsia de la Junta Clínica del SEM,
   enero de 2021. Documento aportado por Íñigo
   (CODIGOS/CODIGO SEPSIS.pdf). Traducido del catalán.
   Tipos de bloque: ver la cabecera de rcp.js.
   ===================================================================== */

window.CONTENIDO = window.CONTENIDO || {};

window.CONTENIDO.sepsis = {
  titulo: "Código Sepsis",
  subtitulo: "Codi Sèpsia · SEM, enero de 2021",

  bloques: [
    { tipo: "paso", tono: "inicio", titulo: "Valoración del enfermo: ABCDE" },
    { tipo: "paso", tono: "decision", titulo: "¿Riesgo vital?" },
    { tipo: "ramas", ramas: [
      {
        titulo: "Sí",
        subtitulo: "Riesgo vital",
        tono: "desfibrilable",
        bloques: [
          { tipo: "paso", tono: "accion", titulo: "Actuación inicial" },
          { tipo: "paso", tono: "accion", titulo: "Traslado con alerta de enfermo crítico" },
          { tipo: "paso", tono: "decision", titulo: "¿Sospecha de infección?" },
          { tipo: "paso", tono: "accion", titulo: "Sí: activación del Código Sepsis" },
          { tipo: "paso", tono: "accion", titulo: "No: traslado" }
        ]
      },
      {
        titulo: "No",
        subtitulo: "Sin riesgo vital: escala NEWS",
        tono: "nodesfibrilable",
        bloques: [
          { tipo: "paso", tono: "accion", titulo: "NEWS de 7 o más",
            texto: "Comunicar a la CECOS (IDEAS). ¿Sospecha de infección? Sí: activación del Código Sepsis. No: traslado." },
          { tipo: "paso", tono: "accion", titulo: "NEWS inferior a 7",
            texto: "Comunicar a la CECOS (IDEAS). Valorar el traslado." }
        ]
      }
    ] },

    { tipo: "paso", tono: "farmaco", titulo: "Criterios de activación del Código Sepsis",
      texto: "Riesgo vital o NEWS de 7 o más, con sospecha de infección." },
    { tipo: "nota", texto: "Un paciente con NEWS de 7 o más es potencialmente crítico. Hay que pensar que puede empeorar en poco tiempo." },

    { tipo: "lista", titulo: "Sospecha de infección",
      items: [
        "Una de las principales causas de deterioro clínico son las infecciones. Con riesgo vital o NEWS de 7 o más, se sospecha causa infecciosa si hay fiebre (o sensación de haberla tenido), hipotermia no accidental, o temperatura normal con uno o más de los síntomas siguientes, o deterioro general sin causa que lo explique:",
        "Tos, expectoración.",
        "Molestias urinarias o dolor al orinar, orina oscura o maloliente.",
        "Dolor abdominal, diarreas, vómitos.",
        "Cefalea o alteración del estado mental.",
        "Dolor, inflamación y enrojecimiento de cualquier extremidad.",
        "Úlceras cutáneas, heridas recientes con supuración o enrojecimiento, portador de catéter central con enrojecimiento del punto de entrada o sonda vesical permanente."
      ] },
    { tipo: "lista", titulo: "Factores de riesgo de infección",
      items: [
        "Diabetes mellitus.",
        "Consumo crónico de corticoides o fármacos inmunosupresores (paciente trasplantado, artritis reumatoide, enfermedad inflamatoria intestinal, etc.).",
        "Inmunodeprimidos (esplenectomizados, VIH, hemodiálisis).",
        "Neoplasias activas o tratamiento con quimioterapia.",
        "Infección recientemente diagnosticada o en tratamiento antibiótico.",
        "Intervención quirúrgica o endoscópica (urinaria, biliar) en el último mes.",
        "Heridas quirúrgicas, úlceras cutáneas, portador de catéter venoso central (diálisis, port-a-cath) o sonda vesical.",
        "Paciente mayor de 70 años, con dependencia o en residencia. En estos enfermos hay que valorar el estado basal antes de activar el Código Sepsis o la alerta de enfermo crítico."
      ] },

    { tipo: "lista", titulo: "Criterios de riesgo vital (al menos uno)",
      items: [
        "A · Afectación de la permeabilidad de la vía aérea.",
        "B · Afectación respiratoria: taquipnea superior a 30 rpm o bradipnea inferior a 8 rpm (medida durante 1 minuto); trabajo respiratorio con escala de Patrick superior a 3; cianosis, livideces.",
        "C · Afectación de la circulación: TAS inferior a 90 mmHg (o reducción de la TAS basal superior al 40 %) o TAS superior a 220 mmHg; FC inferior a 40 lpm o superior a 131 lpm.",
        "D · Afectación del nivel de consciencia: somnolencia, estupor, coma, convulsiones.",
        "Los valores alterados de forma aislada de una constante vital (FC, FR, TAS) se han de interpretar según el estado general del enfermo."
      ] },
    { tipo: "tabla", titulo: "Trabajo respiratorio · escala de Patrick",
      columnas: ["Hallazgo", "Puntos"],
      filas: [
        ["No utiliza musculatura accesoria", "0"],
        ["Tensión cervical sin hundimiento", "1"],
        ["No utiliza musculatura subcostal", "2"],
        ["Tiraje subcostal marcado", "3"],
        ["Clavículas hundidas", "4"],
        ["Respiración abdominal", "5"]
      ] },

    { tipo: "lista", titulo: "Valoración inicial y comunicación a la CECOS: IDEAS",
      items: [
        "I · Identificación del enfermo, edad y sexo.",
        "D · Sospecha diagnóstica. Valoración del entorno e identificación del síntoma guía.",
        "E · Estado del paciente: primera impresión y ABCDE, descartar criterios de riesgo vital, escala NEWS.",
        "A · Actuación sobre el enfermo y el entorno. Tratamiento y principales acciones relevantes.",
        "S · Soporte y recursos requeridos. Alerta de enfermo crítico o activación del Código Sepsis, si cumple los criterios."
      ] },

    { tipo: "lista", titulo: "Tratamiento",
      items: [
        "Fluidos: indicados en pacientes con NEWS de 7 o más y EtCO2 inferior a 25 mmHg, índice de perfusión (IP) de 1,4 o menos, índice de shock superior a 0,8 o mala perfusión periférica. Cargas de 500 ml de cristaloides, preferentemente soluciones balanceadas; monitorizar la tolerancia. Evitar los coloides.",
        "Vasopresores: la noradrenalina en perfusión continua es de elección. Dosis máxima: 1 µg/kg/min. Para un paciente de 80 kg: 8 mg en 50 ml de suero glucosado, inicialmente a 3 ml/h, aumentando de 3 en 3 ml/h hasta un máximo de 30 ml/h, hasta una TAM superior a 65-70 mmHg. Hay que monitorizar estrechamente al enfermo.",
        "Analgesia: orientar el foco infeccioso. Si el dolor es de 5/10 o más en la escala EVA, o hay signos clínicos de dolor intenso: fentanilo 50 µg más paracetamol 1 g i.v.",
        "Hiperglucemia: insulina rápida 10 UI s.c. Mantener cifras alrededor de 180 mg/dl durante la asistencia y el traslado. Evitar episodios de hipoglucemia."
      ] },
    { tipo: "lista", titulo: "Objetivos",
      items: [
        "Estado mental normal.",
        "TAM 65-70 mmHg. TAM = TA diastólica + [(TA sistólica - TA diastólica) / 3].",
        "EtCO2 superior a 25 mmHg (35-45).",
        "SpO2 superior al 90 %.",
        "Glucemia inferior a 180 mg/dl."
      ] },

    { tipo: "tabla", titulo: "Cadena de supervivencia en la sepsis grave · objetivos de la primera hora",
      columnas: ["Eslabón", "Adulto"],
      filas: [
        ["Detección", "Riesgo vital. NEWS de 7 o más. Sospecha de infección."],
        ["Resucitación", "20-30 ml/kg de cristaloides. Noradrenalina."],
        ["Control del foco", "Antibiótico en menos de 1 hora. Activación del Código Sepsis."],
        ["Monitorización", "FR, FC, RA, TAM, TRC, EtCO2, índice de perfusión (IP), índice de shock (IS)."],
        ["Objetivos", "TAM 65-70 mmHg. EtCO2 superior a 25 (35-45). SpO2 superior al 90 %. Glucemia inferior a 180 mg/dl. Antibiótico."]
      ] },
    { tipo: "tabla", titulo: "Sepsis grave en niños · manejo inicial",
      columnas: ["Eslabón", "Niños"],
      filas: [
        ["Detección", "Foco. Órganos con disfunción. Mal aspecto. Administrar oxígeno."],
        ["Resucitación", "Cristaloides, 20-60 ml/kg o más para alcanzar los objetivos. Atención a los signos de sobrecarga."],
        ["Control del foco", "Cultivos. Antibiótico en menos de 1 hora. Drenaje precoz en menos de 12 horas. Activación del Código Sepsis."],
        ["Monitorización", "Estado mental normal. Diuresis superior a 1 ml/kg/h. Relleno capilar inferior a 2 segundos. TA normal. Pulso periférico igual al central."],
        ["Valoración", "Soporte inotrópico. UCI pediátrica. Necesidad de ECMO."]
      ] },

    { tipo: "lista", titulo: "Enfermo crítico",
      items: [
        "Subgrupo de pacientes graves que evolucionan de forma desfavorable hacia un fracaso multiorgánico.",
        "Causas más frecuentes: infecciones, problemas cardíacos, problemas neurológicos, traumatismos, intoxicaciones y alergias graves."
      ] }
  ],

  revisar: [
    "En la monitorización, el tríptico usa la sigla «RA» sin desarrollarla. No se ha encontrado su significado; se ha dejado tal cual.",
    "La escala NEWS del tríptico añade matices propios (escala 2 para usuarios de CPAP, BiPAP u oxígeno crónico domiciliario). La calculadora de la app sigue la del RCP."
  ],

  fuentes: [
    { titulo: "Tríptico Codi Sèpsia. SEM, enero de 2021" }
  ]
};
