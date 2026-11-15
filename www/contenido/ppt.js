/* =====================================================================
   CÓDIGO PPT (PACIENTE POLITRAUMATIZADO)
   Fuente: tríptico «Codi PPT. Atenció d'emergència al malalt traumàtic».
   GdT de Trauma de la Junta Clínica del SEM. Revisión de diciembre de
   2017. Documento aportado por Íñigo (CODIGOS/CODIGO PPT.pdf).
   Traducido del catalán.
   Tipos de bloque: ver la cabecera de rcp.js.
   ===================================================================== */

window.CONTENIDO = window.CONTENIDO || {};

window.CONTENIDO.ppt = {
  titulo: "Código PPT",
  subtitulo: "Paciente politraumatizado · Codi PPT · SEM, revisión de diciembre de 2017",

  bloques: [
    { tipo: "paso", tono: "inicio", titulo: "Enfermo traumático",
      texto: "Alerta a la Central de Coordinación del SEM (CECOS): 061 / 112." },
    { tipo: "paso", tono: "decision", titulo: "¿Tiene algún criterio fisiológico?" },
    { tipo: "paso", tono: "accion", titulo: "Sí: activación del Código PPT · prioridad 0" },
    { tipo: "paso", tono: "decision", titulo: "No: ¿tiene algún criterio anatómico?" },
    { tipo: "paso", tono: "accion", titulo: "Sí: activación del Código PPT · prioridad 1" },
    { tipo: "paso", tono: "decision", titulo: "No: ¿tiene mecanismo lesional de riesgo?" },
    { tipo: "paso", tono: "accion", titulo: "Sí: activación del Código PPT · prioridad 2" },
    { tipo: "paso", tono: "decision", titulo: "No: ¿tiene antecedentes relevantes?" },
    { tipo: "paso", tono: "accion", titulo: "Sí: activación del Código PPT · prioridad 3" },

    { tipo: "lista", titulo: "Prioridad 0 · criterios fisiológicos (criterio de box de críticos)",
      items: [
        "FR inferior a 10 rpm (inferior a 20 en menores de 1 año).",
        "FR superior a 29 rpm (todas las edades).",
        "TAS inferior a 90 mmHg (inferior a 70 en menores de 1 año).",
        "Ausencia de pulsos periféricos (todas las edades).",
        "Glasgow de 13 o menos (y/o pérdida transitoria de consciencia en niños menores de 1 año)."
      ] },
    { tipo: "lista", titulo: "Prioridad 1 · criterios anatómicos (criterio de box de críticos)",
      items: [
        "Herida penetrante en cabeza, cuello, torso y/o extremidades (proximales a rodilla y codo).",
        "Fractura de cráneo abierta o hundimiento.",
        "Tórax inestable (volet).",
        "Fractura de pelvis.",
        "Dos o más fracturas de huesos largos proximales (húmero o fémur). En niños menores de 1 año, una o más.",
        "Amputación proximal a tobillo o muñeca.",
        "Extremidad aplastada, con degloving o destrozada (extremidad catastrófica).",
        "Parálisis de extremidad. Déficit motor y/o sensitivo (sospecha de lesión medular).",
        "Quemaduras de grado II o superior (dérmicas y/o de espesor total) con extensión del 15 % o más (todas las edades), o del 10 % o más (en menores de 10 años, mayores de 50 años o embarazadas).",
        "Quemaduras de grado III de más del 5 % (todas las edades).",
        "Quemadura completa de cara o cuello (todas las edades)."
      ] },
    { tipo: "lista", titulo: "Prioridad 2 · mecanismo lesional de riesgo",
      items: [
        "Caídas: adultos, más de 6 m; niños, más de 2-3 veces su altura (en general, más de 3 m).",
        "Colisión de vehículo: intrusión de más de 30 cm en el lugar del acompañante o de más de 45 cm en cualquier otro lugar.",
        "Colisión de vehículo: eyección parcial o completa del vehículo.",
        "Colisión de vehículo: muerte de un acompañante del vehículo.",
        "Colisión de vehículo: datos de telemetría indicadores de riesgo elevado de lesión (en general, velocidad superior a 60 km/h).",
        "Colisión de vehículo contra peatón o ciclista con atropello, desplazamiento o impacto significativo (más de 30 km/h).",
        "Accidente de motocicleta, bicicleta u otro dispositivo móvil (por ejemplo, esquí) a velocidad significativa.",
        "Sospecha de maltrato en niños menores de 3 años.",
        "Objeto que cae desde altura sobre el afectado (valorar peso y altura).",
        "Armas blancas y de fuego."
      ] },
    { tipo: "lista", titulo: "Prioridad 3 · consideraciones especiales",
      items: [
        "Embarazada en estado avanzado de gestación (más de 20 semanas).",
        "Anticoagulación o alteración de la coagulación.",
        "Paciente en tratamiento con diálisis y/o con múltiples patologías.",
        "Niños pequeños y personas de edad avanzada (orientativo: menores de 3 y mayores de 65 años).",
        "Criterio del profesional."
      ] },

    { tipo: "tabla", titulo: "Destino según la prioridad",
      columnas: ["Prioridad", "Adulto", "Pediátrico"],
      filas: [
        ["0 y 1", "Isocrona CAT 3 inferior a 30 min: CAT 3 (considerar CAT 3e). Isocrona CAT 3 superior a 30 min: CAT 3 (considerar CAT 3e) o CAT 2b.", "CAT P3 (considerar CAT P3e) o CAT P2b."],
        ["2", "Isocrona CAT 3 inferior a 30 min: CAT 2b / CAT 2a / CAT 1, o CAT 3 (considerar CAT 3e). Isocrona CAT 3 superior a 30 min: CAT 2b / CAT 2a / CAT 1, o CAT 3 (considerar CAT 3e).", "CAT P2a (considerar CAT P3e / CAT P2b / CAT P1)."],
        ["3", "Hospital de referencia.", "Hospital de referencia."]
      ],
      nota: "Individualizar el destino si hay inestabilidad hemodinámica." },
    { tipo: "lista", titulo: "Traslado",
      items: [
        "Prioridades 0 y 1: traslado, preferentemente con USVA.",
        "Prioridades 2 y 3 (sin criterios fisiológicos ni anatómicos de gravedad): considerar el traslado con USVB."
      ] },

    { tipo: "lista", titulo: "Inmovilización completa de la columna vertebral · traumatismo cerrado",
      items: [
        "Alteración de la consciencia (Glasgow inferior a 15).",
        "Dolor, déficit neurológico y/o motor, deformidad del raquis.",
        "Con mecanismo lesional de riesgo (prioridad 2): intoxicación (alcohol, drogas, fármacos).",
        "Con mecanismo lesional de riesgo: dolor intenso en otro lugar o lesiones que puedan actuar como factor distractor.",
        "Con mecanismo lesional de riesgo: incapacidad para comunicarse (barrera idiomática, niños menores de 3 años, enfermedad, etc.).",
        "Menores de 3 años con mecanismo lesional de riesgo (incluida la sospecha de maltrato) y/o hipotensión mantenida."
      ] },
    { tipo: "lista", titulo: "Inmovilización completa de la columna vertebral · traumatismo penetrante",
      items: ["Sospecha de déficit y/o molestias neurológicas."] },
    { tipo: "nota", texto: "Si hay criterios: traslado con collarín cervical y colchón de vacío hasta la transferencia. En caso de duda, inmovilizar." },

    { tipo: "lista", titulo: "Comunicación de datos",
      items: [
        "Edad y sexo.",
        "Prioridad: 0, criterio fisiológico; 1, criterio anatómico; 2, mecanismo lesional de riesgo; 3, antecedente patológico relevante.",
        "ALFA · tipo de accidente: 0 desconocido; 1 accidente de tráfico; 2 atropello (incluye peatón y ciclista); 3 precipitado/caída; 4 agresión por arma blanca o de fuego; 5 agresión por otros mecanismos; 6 quemado; 7 ahogado (agua dulce, salada u otras); 8 accidente en el metro o ferroviario; 9 otros.",
        "CHARLIE · zona del cuerpo: 0 sin lesiones aparentes; 1 cabeza; 2 cara; 3 cuello; 4 tórax; 5 abdomen; 6 pelvis (ósea); 7 raquis (columna vertebral); 8 extremidades (superiores/inferiores); 9 lesiones externas (incluye quemaduras).",
        "ROMEO · respiración: 0 manejo invasivo de la vía aérea (IOT, mascarilla laríngea, cricotirotomía...); 1 dificultad respiratoria; 2 normal.",
        "HOTEL · estado hemodinámico en adultos: 0 sin pulso; 1 TAS 50-90 mmHg; 2 TAS superior a 90 mmHg.",
        "HOTEL · estado hemodinámico en niños: 0 pulso central no, pulso periférico no; 1 pulso central sí, pulso periférico no; 2 pulso central sí, pulso periférico sí, mala perfusión; 3 pulso central sí, pulso periférico sí, buena perfusión.",
        "GOLF · nivel de consciencia inicial (en la primera valoración del enfermo): GCS, cifra global.",
        "Hora de llegada prevista: hora y minuto.",
        "Para relacionar los datos entre el SEM y los hospitales receptores, hay que facilitar el número de afectado y, si es posible, el CIP."
      ] },

    { tipo: "tabla", titulo: "Transferencia verbal",
      columnas: ["Paso", "Qué", "Contenido"],
      filas: [
        ["P1", "Presentación", "Profesionales y paciente"],
        ["P2", "Prioridad (PPT)", "Crítico (P0/P1). No crítico (P2/P3)"],
        ["P3", "Parámetros vitales", "Constantes fisiológicas"],
        ["P4", "Paciente", ""],
        ["A1", "Antecedentes", "Género, edad, historial. Perfil del paciente"],
        ["A2", "Accidente", "Tipo. ¿Qué ha pasado?"],
        ["A3", "Afectación I", "Anatomía (patrón lesional). ¿Qué tiene?"],
        ["A4", "Afectación II", "ABCDE y reconocimiento secundario. ¿Cómo le afecta?"],
        ["A5", "Atención", "Intervenciones y resultados. ¿Qué le hemos hecho?"],
        ["A6", "Alertas", "Preocupaciones y recomendaciones. ¿Qué nos preocupa?"],
        ["P5", "Papeles", "Documentación clínica"],
        ["P6", "Padres / pareja / iguales", "Información sobre los acompañantes"]
      ] },
    { tipo: "lista", titulo: "Transferencia física",
      items: [
        "1. Camilla del hospital con tablero espinal e inmovilizador pélvico (si está indicado).",
        "2. Colocar las camillas prehospitalaria y hospitalaria juntas, a la misma altura.",
        "3. Transferir al enfermo de la camilla del SEM a la del hospital con el colchón de vacío, con el vacío hecho. Si hay que volver a hacer el vacío, utilizar el aspirador del hospital.",
        "4. Retirar el colchón de vacío con la técnica del puente lateral (asistenciales a cada lado del enfermo y líder en la cabecera).",
        "5. Mantener en todo momento la visión del enfermo: monitorización, control de tubos, sondas y otros dispositivos.",
        "6. Intercambio y recuperación de material. A ser posible, sin retirar el del enfermo."
      ] },

    { tipo: "tabla", titulo: "Escala de Glasgow · adulto",
      columnas: ["Apertura ocular", "Respuesta verbal", "Respuesta motora"],
      filas: [
        ["", "", "6 · Obedece órdenes"],
        ["", "5 · Orientado", "5 · Localiza el estímulo doloroso"],
        ["4 · Espontánea", "4 · Confuso", "4 · Retira al estímulo doloroso"],
        ["3 · Al estímulo verbal", "3 · Palabras inapropiadas", "3 · Respuesta en flexión (decorticación)"],
        ["2 · Al estímulo doloroso", "2 · Sonidos incomprensibles", "2 · Respuesta en extensión (descerebración)"],
        ["1 · No responde", "1 · No responde", "1 · No responde"]
      ],
      nota: "Leve: 14-15. Moderado: 9-13. Grave: 8 o menos." },
    { tipo: "tabla", titulo: "Escala de Glasgow · pediátrico",
      columnas: ["Apertura ocular", "Respuesta verbal", "Respuesta motora"],
      filas: [
        ["", "", "6 · Movimientos espontáneos"],
        ["", "5 · Balbuceo", "5 · Retira al tocar"],
        ["4 · Espontánea", "4 · Irritable", "4 · Retira al dolor"],
        ["3 · Al estímulo verbal", "3 · Llora al dolor", "3 · Flexión anormal"],
        ["2 · Al estímulo doloroso", "2 · Gemidos al dolor", "2 · Extensión anormal"],
        ["1 · No responde", "1 · No responde", "1 · No responde"]
      ],
      nota: "Leve: 14-15. Moderado: 9-13. Grave: 8 o menos." },
    { tipo: "tabla", titulo: "Revised Trauma Score (RTS) · adulto",
      columnas: ["Puntos", "Frecuencia respiratoria (rpm)", "TAS (mmHg)", "Glasgow"],
      filas: [
        ["4", "10-29", "> 89", "13-15"],
        ["3", "> 29", "76-89", "9-12"],
        ["2", "6-9", "50-75", "6-8"],
        ["1", "1-5", "1-49", "4-5"],
        ["0", "0", "0", "3"]
      ],
      nota: "Un RTS inferior a 12 requiere traslado a un centro de trauma especializado." },
    { tipo: "tabla", titulo: "Índice de Trauma Pediátrico (ITP)",
      columnas: ["", "+2", "+1", "-1"],
      filas: [
        ["Peso (kg)", "> 20", "10-20", "< 10"],
        ["Vía aérea", "Normal", "Sostenible", "Insostenible"],
        ["TAS (mmHg)", "> 90", "50-90", "< 50"],
        ["Nivel de consciencia", "Consciente", "Obnubilado", "Coma"],
        ["Heridas", "No", "Menor", "Mayor o penetrante"],
        ["Fracturas", "No", "Cerrada", "Abierta o múltiples"]
      ],
      nota: "Un ITP inferior a 8 requiere traslado a un centro de trauma especializado." }
  ],

  revisar: [
    "El tríptico es la revisión de diciembre de 2017."
  ],

  fuentes: [
    { titulo: "Tríptico Codi PPT. SEM, revisión de diciembre de 2017" }
  ]
};
