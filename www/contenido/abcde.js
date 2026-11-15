/* =====================================================================
   ABORDAJE ABCDE
   Fuente: Resuscitation Council UK. The ABCDE approach (publicado en
   2015; actualizado en julio de 2024).
   Cada apartado: { letra, nombre, mirar: [...], actuar: [...] }
   ===================================================================== */

window.CONTENIDO = window.CONTENIDO || {};

window.CONTENIDO.abcde = {
  titulo: "ABCDE",
  subtitulo: "Valoración del paciente crítico o que se deteriora",

  principios: [
    "Valoración inicial completa y revaloración periódica.",
    "Tratar cada problema vital antes de pasar a la letra siguiente.",
    "Comprobar el efecto de cada tratamiento.",
    "Pedir ayuda pronto y repartir tareas en el equipo.",
    "Si no responde y no respira con normalidad: iniciar la RCP."
  ],

  primerosPasos: [
    "Seguridad propia.",
    "Impresión general y respuesta del paciente («¿cómo está?»).",
    "Monitorizar pronto: pulsioxímetro, ECG y tensión arterial no invasiva.",
    "Vía venosa lo antes posible, con extracción de analítica."
  ],

  apartados: [
    {
      letra: "A", nombre: "Vía aérea",
      mirar: [
        "Signos de obstrucción: respiración paradójica (tórax y abdomen en balancín), uso de la musculatura accesoria.",
        "Respiración ruidosa: estridor, sibilancias, gorgoteo.",
        "Nivel de consciencia disminuido.",
        "La cianosis central es un signo tardío."
      ],
      actuar: [
        "La obstrucción de la vía aérea es una emergencia: pedir ayuda experta de inmediato.",
        "Maniobras sencillas primero: apertura de la vía aérea, aspiración, cánula orofaríngea o nasofaríngea. Intubación si fallan.",
        "Oxígeno a alta concentración: mascarilla con reservorio a unos 15 l/min.",
        "Objetivo de SpO2: 94-98 %; 88-92 % si hay riesgo de insuficiencia respiratoria hipercápnica."
      ]
    },
    {
      letra: "B", nombre: "Ventilación",
      mirar: [
        "Signos de dificultad respiratoria: sudoración, cianosis central, musculatura accesoria, respiración abdominal.",
        "Frecuencia respiratoria: normal 12-20 rpm; más de 25 rpm es un signo de alarma.",
        "Profundidad, patrón y simetría de la expansión torácica.",
        "Posición de la tráquea, percusión y auscultación (estridor, sibilancias, matidez, hipofonesis), enfisema subcutáneo."
      ],
      actuar: [
        "Tratar de inmediato las causas que amenazan la vida: asma grave, edema pulmonar, neumotórax a tensión.",
        "Oxígeno a todo paciente crítico.",
        "EPOC con riesgo de hipercapnia: mascarilla Venturi al 28 % (4 l/min) o al 24 % (4 l/min), con objetivo de SpO2 del 88-92 %.",
        "Si la ventilación es insuficiente: ventilar con bolsa y mascarilla y pedir ayuda experta.",
        "Valorar la ventilación no invasiva en pacientes colaboradores sin obstrucción de la vía aérea."
      ]
    },
    {
      letra: "C", nombre: "Circulación",
      mirar: [
        "Color y temperatura de manos y dedos.",
        "Relleno capilar: normal, menos de 2 segundos (tras presionar 5 segundos).",
        "Relleno venoso.",
        "Frecuencia cardíaca y calidad del pulso.",
        "Tensión arterial (presión de pulso normal: 35-45 mmHg).",
        "Auscultación cardíaca.",
        "Diuresis: inferior a 0,5 ml/kg/h indica mala perfusión.",
        "Signos de hemorragia."
      ],
      actuar: [
        "En el shock, considerar la hipovolemia como causa principal hasta que se demuestre lo contrario.",
        "Una o más vías venosas gruesas (14 o 16 G); analítica antes de los fluidos.",
        "Si hay hipotensión: bolo de 500 ml de cristaloide en menos de 15 minutos (250 ml si hay insuficiencia cardíaca o traumatismo). Auscultar crepitantes tras cada bolo.",
        "Revalorar FC y TA cada 5 minutos. Objetivo: la TA habitual del paciente o, si no se conoce, una TAS superior a 100 mmHg.",
        "Frenar o detener los fluidos si aparecen signos de insuficiencia cardíaca.",
        "Pedir ayuda experta si no hay respuesta a bolos repetidos.",
        "ECG de 12 derivaciones pronto si se sospecha un síndrome coronario agudo."
      ]
    },
    {
      letra: "D", nombre: "Neurológico",
      mirar: [
        "Causas de disminución de la consciencia: hipoxia, hipercapnia, hipoperfusión cerebral, sedantes y opioides.",
        "Pupilas.",
        "Nivel de consciencia: AVDN (alerta, voz, dolor, no responde) o escala de Glasgow.",
        "Glucemia capilar."
      ],
      actuar: [
        "Revisar y tratar A, B y C: descartar o tratar la hipoxia y la hipotensión.",
        "Revisar la medicación; antídoto si procede (naloxona en la intoxicación por opioides).",
        "Paciente inconsciente con glucemia inferior a 4,0 mmol/l (72 mg/dl): 50 ml de glucosa al 10 % i.v.; repetir cada minuto si es necesario, hasta 250 ml en total, según el protocolo local.",
        "Posición lateral de seguridad si la vía aérea no está protegida."
      ]
    },
    {
      letra: "E", nombre: "Exposición",
      mirar: [
        "Exponer al paciente lo necesario para explorarlo por completo."
      ],
      actuar: [
        "Respetar la dignidad del paciente.",
        "Minimizar la pérdida de calor."
      ]
    }
  ],

  despues: [
    "Historia clínica completa, revisión de notas, constantes y tendencias.",
    "Revisar la medicación y los resultados.",
    "Decidir el nivel de cuidados que necesita.",
    "Registrar hallazgos, tratamientos y respuesta.",
    "Transmitir la información de forma estructurada (SBAR)."
  ],

  revisar: [
    "El apartado E del documento original es breve; decidid si queréis ampliarlo (qué buscar al exponer) con una fuente concreta."
  ],

  fuentes: [
    { titulo: "Resuscitation Council UK. The ABCDE approach (2024)", url: "https://www.resus.org.uk/resuscitation-guidelines/abcde-approach/" }
  ]
};
