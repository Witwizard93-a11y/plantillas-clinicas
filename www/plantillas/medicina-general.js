/* =====================================================================
   MEDICINA GENERAL (Familia y Urgencias)
   Fuente: PLANTILLA_RESIS.docx. La sección de pediatría de ese
   documento está en pediatria.js.
   ===================================================================== */

PLANTILLAS.push(

  /* ═════════════ EXPLORACIONES ═════════════ */

  {
    id: "mg-ef-hombre",
    categoria: "general",
    tipo: "exploracion",
    ambito: ["familia", "urgencias"],
    grupo: "Exploración física",
    titulo: "Exploración física general (hombre)",
    etiquetas: "EF normal varon anodina",
    texto: `
Buen estado general. Consciente, orientado y colaborador. Normocoloreado y normohidratado. Hemodinámicamente estable.
- Auscultación cardíaca: ruidos cardíacos regulares, no ausculto soplos, roces ni extratonos. IY-, RHY-.
- Auscultación respiratoria: murmullo vesicular conservado, sin ruidos sobreañadidos.
- Abdomen: se auscultan ruidos hidroaéreos. Blando y depresible, no doloroso a la palpación, sin masas ni visceromegalias. Murphy, Blumberg y McBurney negativos. Puñopercusión lumbar bilateral negativa.
- Extremidades inferiores: sin edemas ni signos de TVP.
- NRL: consciente, orientado en tiempo, espacio y persona, sin alteraciones en el lenguaje. Pupilas simétricas normorreactivas. Pares craneales sin alteraciones, no presenta nistagmo. Tono y fuerza muscular 5/5, sensibilidad superficial conservada. ROT y RCP sin alteraciones. Coordinación correcta. Marcha sin alteraciones aparentes, Romberg negativo. No presenta signos meníngeos.
`,
    texto_ca: `
Bon estat general. Conscient i orientat. Normocolorejat i normohidratat.
AC: tons cardíacs regulars, sense bufs, frecs ni extratons. IJ-, RHJ-.
AR: MVC sense sorolls sobreafegits.
Abdomen: tou i depressible, no dolorós a la palpació, sense masses ni visceromegàlies. Peristaltisme conservat. Blumberg -. PPL -.
EEII sense edemes ni signes de TVP.
NRL: conscient i orientat en temps, espai i persona, sense alteracions del llenguatge. Pupil·les simètriques normoreactives. Parells cranials sense alteracions, no presenta nistagme. To i força muscular 5/5, sensibilitat superficial conservada. ROT i RCP sense alteracions. Coordinació correcta. Marxa sense alteracions aparents. Romberg -. No presenta signes meningis.
`
  },

  {
    id: "mg-ef-mujer",
    categoria: "general",
    tipo: "exploracion",
    ambito: ["familia", "urgencias"],
    grupo: "Exploración física",
    titulo: "Exploración física general (mujer)",
    etiquetas: "EF normal anodina",
    texto: `
Buen estado general. Consciente, orientada y colaboradora. Normocoloreada y normohidratada. Hemodinámicamente estable.
- Auscultación cardíaca: ruidos cardíacos regulares, no ausculto soplos, roces ni extratonos. IY-, RHY-.
- Auscultación respiratoria: murmullo vesicular conservado, sin ruidos sobreañadidos.
- Abdomen: se auscultan ruidos hidroaéreos. Blando y depresible, no doloroso a la palpación, sin masas ni visceromegalias. Murphy, Blumberg y McBurney negativos. Puñopercusión lumbar bilateral negativa.
- Extremidades inferiores: sin edemas ni signos de TVP.
- NRL: consciente, orientada en tiempo, espacio y persona, sin alteraciones en el lenguaje. Pupilas simétricas normorreactivas. Pares craneales sin alteraciones, no presenta nistagmo. Tono y fuerza muscular 5/5, sensibilidad superficial conservada. ROT y RCP sin alteraciones. Coordinación correcta. Marcha sin alteraciones aparentes, Romberg negativo. No presenta signos meníngeos.
`,
    texto_ca: `
Bon estat general. Conscient i orientada. Normocolorejada i normohidratada.
AC: tons cardíacs regulars, sense bufs, frecs ni extratons. IJ-, RHJ-.
AR: MVC sense sorolls sobreafegits.
Abdomen: tou i depressible, no dolorós a la palpació, sense masses ni visceromegàlies. Peristaltisme conservat. Blumberg -. PPL -.
EEII sense edemes ni signes de TVP.
NRL: conscient i orientada en temps, espai i persona, sense alteracions del llenguatge. Pupil·les simètriques normoreactives. Parells cranials sense alteracions, no presenta nistagme. To i força muscular 5/5, sensibilitat superficial conservada. ROT i RCP sense alteracions. Coordinació correcta. Marxa sense alteracions aparents. Romberg -. No presenta signes meningis.
`
  },

  {
    id: "mg-ef-neuro-extensa",
    categoria: "general",
    tipo: "exploracion",
    ambito: ["familia", "urgencias"],
    grupo: "Neurológica",
    titulo: "Exploración neurológica extensa",
    etiquetas: "neuro NRL pares craneales campimetria focalidad",
    texto: `
Vigil, orientado en persona, tiempo y espacio. Lenguaje normofluente sin rasgos afásicos. Obedece órdenes simples y complejas. Campimetría por confrontación sin alteraciones. Pupilas simétricas normorreactivas. Oculomotricidad extrínseca sin restricciones. Niega diplopía. Pares craneales sin alteraciones, no presenta nistagmo ni asimetría facial. Tono, fuerza y sensibilidad superficial conservadas. ROT y RCP sin alteraciones. Coordinación correcta. Romberg negativo. No presenta signos meníngeos.
`
  },

  {
    id: "mg-ef-neuro-apartados",
    categoria: "general",
    tipo: "exploracion",
    ambito: ["familia", "urgencias"],
    grupo: "Neurológica",
    titulo: "Exploración neurológica por apartados",
    etiquetas: "neuro funciones superiores motor sensitivo coordinacion marcha minimental",
    texto: `
- Funciones superiores: consciente y orientado en tiempo, persona y espacio. Atento, lenguaje con fluencia normal sin elementos afásicos (nomina, comprende y repite).
- Pares craneales: pupilas isocóricas normorreactivas a la luz. Agudeza visual normal. Campimetría por confrontación normal. MOE normales sin restricciones ni diplopía. No ptosis. V, VII y pares bajos normales.
- Motor: fuerza 5/5 por grupos musculares, tono normal, trofismo normal. Reflejos miotáticos presentes y simétricos, RCP flexor bilateral. No temblor.
- Sensitivo: sensibilidad superficial conservada.
- Coordinación: no dismetrías, Romberg negativo.
- Marcha normal.
- Signos meníngeos: no rigidez de nuca ni otros signos de irritación meníngea.
- Minimental normal.
`
  },

  {
    id: "mg-ef-orl",
    categoria: "general",
    tipo: "exploracion",
    ambito: ["familia", "urgencias"],
    grupo: "ORL",
    titulo: "Exploración ORL y orofaringe",
    etiquetas: "otoscopia faringe amigdalas garganta oido",
    texto: `
- ORL: otoscopia bilateral normal.
- Orofaringe: no hiperemia faríngea, no hipertrofia amigdalar, no exudados. No abombamientos ni asimetrías, úvula centrada no edematosa. No trismus.
`
  },

  {
    id: "mg-ef-dermatologica",
    categoria: "general",
    tipo: "exploracion",
    ambito: ["familia", "urgencias"],
    grupo: "Dermatología",
    titulo: "Descripción de lesiones cutáneas",
    etiquetas: "dermatologia piel lesion elemental exantema",
    nota: "Historia clínica dermatológica: anamnesis. Examen dermatológico: lesiones elementales primarias y secundarias, distribución y configuración. La descripción debe incluir el número de lesiones, su distribución corporal y el agrupamiento; y, en cada lesión, el tipo de lesión elemental, color, tamaño, forma, si los bordes son netos, si el contorno es regular, si la superficie es lisa o áspera, si está cubierta por costras o escamas, la consistencia y si la base está infiltrada.",
    texto: `
Lesiones cutáneas: {{Número}} lesiones en {{Localización y distribución}}, {{Agrupación|aisladas|agrupadas|confluentes}}.
Lesión elemental: {{Tipo de lesión}}, de color {{Color}}, tamaño {{Tamaño}}, forma {{Forma}}. Bordes {{Bordes|netos|mal definidos}}, contorno {{Contorno|regular|irregular}}. Superficie {{Superficie|lisa|áspera|costrosa|descamativa}}. Consistencia {{Consistencia}}. Base {{Base|no infiltrada|infiltrada}}.
`
  },

  {
    id: "mg-ef-dorsal",
    categoria: "general",
    tipo: "exploracion",
    ambito: ["familia", "urgencias"],
    grupo: "Aparato locomotor",
    titulo: "Exploración de columna dorsal",
    etiquetas: "dorsalgia lumbalgia espalda paravertebral",
    texto: `
Columna dorsal: no hematomas ni equimosis. No deformidades óseas ni crepitación a la palpación. No dolor a la palpación de apófisis espinosas. Dolor a la palpación de musculatura paravertebral dorsal izquierda, derecha anodina.
Resto de la exploración normal.
`
  },

  /* ───────────── Pruebas complementarias ───────────── */

  {
    id: "mg-pc-analitica",
    categoria: "general",
    tipo: "exploracion",
    ambito: ["familia", "urgencias"],
    grupo: "Pruebas complementarias",
    titulo: "Analítica general",
    etiquetas: "hemograma bioquimica coagulacion gasometria venosa AS",
    texto: `
Hemograma: leucocitos {{Leucocitos}} x10^9/L (N {{N %}} %, L {{L %}} %, M {{M %}} %), Hb {{Hb}} g/dL, Hto {{Hto}} %, plaquetas {{Plaquetas}} x10^9/L.
Coagulación: TP {{TP}} %, TTPA {{TTPA}} s, fibrinógeno {{Fibrinógeno}} mg/dL.
Equilibrio venoso: pH {{pH}}, pCO2 {{pCO2}} mmHg, HCO3 {{HCO3}} mmol/L, exceso de base {{EB}}.
Bioquímica: glucosa {{Glucosa}} mg/dL, urea {{Urea}} mg/dL, creatinina {{Creatinina}} mg/dL, Na {{Na}} mmol/L, K {{K}} mmol/L, ALT {{ALT}} U/L, PCR {{PCR}} mg/L, CK {{CK}} U/L.
`
  },

  {
    id: "mg-pc-analitica-normal",
    categoria: "general",
    tipo: "exploracion",
    ambito: ["familia", "urgencias"],
    grupo: "Pruebas complementarias",
    titulo: "Analítica normal",
    etiquetas: "hemograma bioquimica normal",
    texto: `
Analítica con hemograma y bioquímica básica con valores dentro de parámetros normales. Se adjunta.
`
  },

  {
    id: "mg-pc-orina",
    categoria: "general",
    tipo: "exploracion",
    ambito: ["familia", "urgencias"],
    grupo: "Pruebas complementarias",
    titulo: "Estudio de orina",
    etiquetas: "urianalisis sedimento tira urocultivo",
    texto: `
- Urianálisis: proteínas {{Proteínas}}, glucosa {{Glucosa}}, acetoacetato {{Acetoacetato}}, hemoglobina {{Hemoglobina}}, bilirrubina {{Bilirrubina}}, nitritos {{Nitritos}}, esterasa leucocitaria {{Esterasa}}.
- Sedimento: bacterias {{Bacterias}}, eritrocitos {{Eritrocitos}}/campo, leucocitos {{Leucocitos}}/campo.
- Urocultivo pendiente.
`
  },

  {
    id: "mg-pc-ecg",
    categoria: "general",
    tipo: "exploracion",
    ambito: ["familia", "urgencias"],
    grupo: "Pruebas complementarias",
    titulo: "ECG normal",
    etiquetas: "electrocardiograma ritmo sinusal QTc",
    enlaces: [
      { titulo: "Calculadora de QT corregido", url: "https://www.my-ekg.com/formulas-calculos-ekg/calculadora-qt-corregido.php" }
    ],
    texto: `
ECG: RS a {{FC}} lpm, aQRS {{Eje}}º, PR 120-200 ms constante, QRS <120 ms, correcta progresión de R en precordiales. Sin alteraciones agudas de la repolarización. QTc {{QTc}} ms.
`
  },

  {
    id: "mg-pc-ecg-lectura",
    categoria: "general",
    tipo: "exploracion",
    ambito: ["familia", "urgencias"],
    grupo: "Pruebas complementarias",
    titulo: "Lectura rápida del ECG (consulta)",
    etiquetas: "electrocardiograma cuadritos frecuencia calculo",
    revisar: "Corregido respecto al documento: decía «1 cuadrito = 4 ms» (a 25 mm/s son 40 ms) y «FC = n.º de QRS x 6» (en 6 segundos se multiplica por 10).",
    texto: `
1 cuadrito pequeño (1 mm) = 40 ms
1 cuadro grande (5 mm) = 200 ms
FC según cuadros grandes entre dos R: 300 - 150 - 100 - 75 - 60 - 50
30 cuadros grandes = 6 s => FC = n.º de complejos QRS en esos 6 s x 10
`
  },

  {
    id: "mg-pc-rx-torax",
    categoria: "general",
    tipo: "exploracion",
    ambito: ["familia", "urgencias"],
    grupo: "Pruebas complementarias",
    titulo: "Rx de tórax normal",
    etiquetas: "radiografia torax",
    texto: `
Rx tórax: marco óseo conservado, índice cardiotorácico normal (<0,5), senos costofrénicos libres. No observo masas ni imágenes sugestivas de condensación parenquimatosa. Sin signos de insuficiencia cardíaca. Sin signos de redistribución vascular.
`
  },

  {
    id: "mg-pc-rx-abdomen",
    categoria: "general",
    tipo: "exploracion",
    ambito: ["familia", "urgencias"],
    grupo: "Pruebas complementarias",
    titulo: "Rx de abdomen normal",
    etiquetas: "radiografia abdomen litiasis",
    texto: `
Rx abdomen: marco óseo conservado. Aire y heces en marco cólico, no observo imágenes sugestivas de litiasis cálcicas.
`
  },

  {
    id: "mg-pc-tc-craneal",
    categoria: "general",
    tipo: "exploracion",
    ambito: ["urgencias"],
    grupo: "Pruebas complementarias",
    titulo: "TC craneal normal",
    etiquetas: "TAC scanner cerebral",
    texto: `
TC craneal (comentado verbalmente con el servicio de radiología): no se observan signos de isquemia aguda, hemorragia activa ni lesiones ocupantes de espacio.
`
  },

  /* ═════════════ TRATAMIENTOS ═════════════ */

  /* ───────────── Evolución y alta ───────────── */

  {
    id: "mg-evol-alta",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Evolución y alta",
    titulo: "Evolutivo: alta a domicilio",
    etiquetas: "evolucion alta estable",
    texto: `
Estando el paciente hemodinámicamente estable, sin signos de alarma en el momento actual ni clínica que precise de más estudios de manera urgente, se orienta el caso como {{Orientación diagnóstica}} y se decide el alta a domicilio con tratamiento {{Tratamiento}}. Control por su médico de atención primaria y resto de especialistas habituales.
`
  },

  {
    id: "mg-evol-pruebas",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Evolución y alta",
    titulo: "Evolutivo: llegada, pruebas y alta",
    etiquetas: "evolucion ECG radiografia analitica sedimento",
    texto: `
A su llegada a urgencias, paciente hemodinámicamente estable, eupneico, con saturaciones basales correctas. A la exploración física destaca {{Exploración}}. En el ECG se observa {{ECG}}. Radiográficamente, {{Radiografía}}. Analíticamente, {{Analítica}}. El sedimento de orina resulta {{Sedimento}}. Se orienta el caso como {{Orientación diagnóstica}} y se inicia tratamiento {{Tratamiento en urgencias}}, con resolución de la clínica inicial.
Dada la situación de estabilidad hemodinámica, sin signos de alarma en el momento actual ni clínica que precise de más estudios de manera urgente, se decide el alta a domicilio con tratamiento {{Tratamiento al alta}}. Control por su médico de atención primaria y especialistas habituales.
`
  },

  {
    id: "mg-evol-monitorizada",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Evolución y alta",
    titulo: "Evolutivo: observación monitorizada y alta (paciente mujer)",
    etiquetas: "evolucion telemetria monitorizacion",
    texto: `
A su llegada, la paciente presenta buen estado general, consciente y orientada, {{Frecuencia cardíaca|normocárdica|bradicárdica|taquicárdica}}, con tensiones mantenidas, {{Disnea|disneica|sin disnea}}, {{Distrés|con signos de distrés respiratorio|sin signos de distrés respiratorio}}, {{Temperatura=afebril}}. Refiere {{Síntomas o cuadro}} de {{Tiempo de evolución}} de evolución, que {{Afectación|ha afectado|no ha afectado}} a su actividad habitual. A la exploración física destaca {{Exploración}}. Se cursa AG, Rx de tórax y analítica de orina, que muestran {{Resultados}}, {{Infección|con signos de infección activa|sin signos de infección activa}}. En la Rx de tórax, {{Rx de tórax}}. ECG: {{ECG}}. Bajo la orientación diagnóstica de {{Orientación diagnóstica}} iniciamos tratamiento {{Tratamiento}} y dejamos en evolución en urgencias monitorizada. Dada la estabilidad clínica y hemodinámica, sin eventos por telemetría, de acuerdo con la paciente y la familia damos de ALTA recomendando proseguir el tratamiento en domicilio y aconsejando control por su médico de familia y resto de médicos especialistas habituales.
`
  },

  {
    id: "mg-evol-dolor-toracico",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Evolución y alta",
    titulo: "Evolutivo: dolor torácico atípico",
    etiquetas: "evolucion troponina cardiopatia isquemica stent",
    texto: `
Se orienta como un dolor torácico atípico en paciente con cardiopatía isquémica conocida portador de stent farmacoactivo, por lo que se realiza curva de troponina y ECG seriados.
Evoluciona estable, sin disconfort torácico, con curva de marcadores de isquemia miocárdica negativa y ECG sin cambios, por lo que es dado de alta para continuar controles ambulatorios.
`
  },

  {
    id: "mg-control",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Evolución y alta",
    titulo: "Control y signos de alarma",
    etiquetas: "alta seguimiento MAP reconsulta",
    texto: `
Control por su médico de atención primaria y resto de especialistas habituales.
Se dan signos de alarma y normas de reconsulta.
`
  },

  /* ───────────── Corticoides ───────────── */

  {
    id: "mg-cort-prednisona-9",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Corticoides: pautas descendentes",
    titulo: "Prednisona 30 mg (Dacortin), 9 días",
    etiquetas: "corticoide pauta descendente",
    texto: `
Dacortin 30 mg (prednisona):
- 1 comprimido cada día durante 3 días.
- 2/3 de comprimido cada día durante 3 días.
- 1/3 de comprimido cada día durante 3 días, y suspender.
`
  },

  {
    id: "mg-cort-prednisona-17",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Corticoides: pautas descendentes",
    titulo: "Prednisona 30 mg (Dacortin), 17 días",
    etiquetas: "corticoide pauta descendente",
    texto: `
Dacortin 30 mg (prednisona):
- 2 comprimidos cada día durante 5 días.
- 1 y 1/2 comprimidos cada día durante 5 días.
- 1 comprimido cada día durante 4 días.
- 1/2 comprimido cada día durante 3 días, y suspender.
`
  },

  {
    id: "mg-cort-urbason-12",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Corticoides: pautas descendentes",
    titulo: "Metilprednisolona 16 mg (Urbason), 12 días",
    etiquetas: "corticoide pauta descendente",
    texto: `
Urbason 16 mg (metilprednisolona):
- 1-0-0 durante 4 días.
- 1/2-0-0 durante 4 días.
- 1/3-0-0 durante 4 días, y suspender.
`
  },

  {
    id: "mg-cort-dexametasona",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Corticoides: pautas descendentes",
    titulo: "Dexametasona 1 mg, pauta descendente",
    etiquetas: "corticoide pauta descendente",
    texto: `
Dexametasona 1 mg:
- 1-1-1 durante 3 días.
- 1-1-0 durante 3 días.
- 1-1/2-0 durante 3 días.
- 1-0-0 y mantener hasta control con su MAP.
`
  },

  /* ───────────── Infecciones ───────────── */

  {
    id: "mg-itu",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Infecciones",
    titulo: "Infección urinaria (ITU)",
    etiquetas: "cistitis fosfomicina monurol cefuroxima ciprofloxacino pielonefritis PNA",
    revisar: "Fosfomicina: la pauta habitual es una dosis única de 3 g; cuando se dan dos, se separan 48-72 h, no 24 h. PNA sin ingreso: la cefuroxima-axetilo se pauta cada 12 h, 7-10 días. Varones: 21 días de ciprofloxacino solo si se sospecha prostatitis (2-4 semanas); sin afectación prostática suelen bastar 7 días. Fuentes: INFAC 2025 (Osakidetza) y Guía Terapéutica Antimicrobiana del SNS.",
    texto: `
- Monurol (fosfomicina) sobres 3 g, 2 sobres: 1 sobre cada 24 h.
- Cefuroxima 500 mg cada 12 horas durante 7 días (10 días si varón, ITU recidivante, enfermedad de base grave, diabetes, insuficiencia renal o alteraciones urológicas).
- Si varón: ciprofloxacino 500 mg cada 12 h durante 21 días (mejor penetración prostática).
- PNA sin ingreso: cefuroxima 500 mg cada 8 h durante 14 días.
`
  },

  {
    id: "mg-amigdalitis",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Infecciones",
    titulo: "Amigdalitis",
    etiquetas: "faringoamigdalitis estreptococo augmentine clindamicina",
    revisar: "En la faringoamigdalitis estreptocócica, el tratamiento de elección es la penicilina V 500 mg cada 12 h durante 10 días (alternativa: amoxicilina 500 mg cada 12 h). La amoxicilina-clavulánico se reserva para las recurrencias (Guía Terapéutica Antimicrobiana del SNS).",
    texto: `
- Amoxicilina/clavulánico 875/125 mg cada 8 h durante 10 días (Augmentine).
- Si alergia: clindamicina (Dalacin) 300 mg cada 8 h durante 10 días.
`
  },

  {
    id: "mg-laringitis",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Infecciones",
    titulo: "Laringitis / accesos de tos / tos perruna",
    etiquetas: "azitromicina codeisan codeina tos",
    revisar: "La laringitis aguda suele ser vírica y no precisa antibiótico; la azitromicina solo tendría sentido si se sospecha tos ferina.",
    texto: `
- Azitromicina 500 mg cada 24 h durante 3 días.
- Codeisan 28,7 mg cada 6 h durante 4 días.
- Valorar Ebastel Forte 20 mg cada 24 h.
`
  },

  {
    id: "mg-zoster-1",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Infecciones",
    titulo: "Herpes zóster: pauta con linimento",
    etiquetas: "zoster valaciclovir linimento oleocalcareo",
    texto: `
- Valaciclovir 1 g cada 8 h durante 7 días.
- Linimento oleocalcáreo + óxido de zinc al 10 % + gentamicina al 0,1 %.
- Paracetamol 1 g cada 8 h, alternado con Voltaren 50 mg cada 8 h.
`
  },

  {
    id: "mg-zoster-2",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Infecciones",
    titulo: "Herpes zóster: pauta con tramadol",
    etiquetas: "zoster valaciclovir tramadol avental",
    revisar: "Valaciclovir en el herpes zóster: 1 g cada 8 h durante 7 días. La pauta de 1 g cada 24 h corresponde a la supresión del herpes genital.",
    texto: `
- Valaciclovir 1000 mg cada 24 h durante 7 días.
- Paracetamol 1 g cada 8 horas.
- Tramadol 50 mg cada 24 h durante 2 días, cada 12 h durante 2 días y después cada 8 h.
- Avental talco líquido, 1 aplicación al día.
`
  },

  {
    id: "mg-sarna",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Infecciones",
    titulo: "Sarna (escabiosis)",
    etiquetas: "escabiosis permetrina sarcop",
    revisar: "Intervalo: la pauta habitual es repetir la aplicación a los 7 días (así figura en la plantilla de pediatría). El documento decía 48 h y anotaba «yo diría que se repite a los 7 y a los 14 días».",
    texto: `
Sarcop crema (permetrina 5 %): 1 aplicación por la noche, del cuello a los pies, y repetir a las 48 h.
`
  },

  /* ───────────── Digestivo ───────────── */

  {
    id: "mg-diarrea",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Digestivo",
    titulo: "Diarrea aguda / abdominalgia",
    etiquetas: "gastroenteritis GEA citorsal SRO motilium",
    enlaces: [
      { titulo: "Diarrea aguda en el adulto (CAMFiC)", url: "https://gestor.camfic.cat/Uploads/ITEM_439_EBLOG_1725.pdf" }
    ],
    texto: `
- Iniciar dieta astringente según demanda.
- Citorsal sobres: diluir en 500 ml de agua, cada 8 horas.
- Paracetamol 1 g cada 8 h si dolor.
- Motilium 10 mg cada 8 h.
`
  },

  {
    id: "mg-gastritis",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Digestivo",
    titulo: "Gastritis / epigastralgia",
    etiquetas: "dispepsia omeprazol almax primperan",
    nota: "Solicitar amilasa en orina (normal hasta 1000, en relación con la amilasa plasmática) y Rx de abdomen para ver que no haya dilatación del estómago.",
    revisar: "Para descartar pancreatitis se recomienda hoy la lipasa sérica, más sensible y específica que la amilasa (en orina o en plasma).",
    texto: `
- Dieta blanda según tolerancia.
- Omeprazol 20 mg cada 24 h.
- Almax 500 mg, 2 comprimidos cada 8 h (1 h después de las comidas principales).
- Asociar Primperan 10 mg cada 24 h si náuseas (máximo cada 8 h).
- Paracetamol 1 g cada 8 h si dolor.
`
  },

  {
    id: "mg-estrenimiento",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Digestivo",
    titulo: "Estreñimiento",
    etiquetas: "plantaben fibra",
    enlaces: [
      { titulo: "Estreñimiento crónico (CAMFiC)", url: "https://gestor.camfic.cat/Uploads/ITEM_441_EBLOG_1727.pdf" }
    ],
    texto: `
- Plantaben sobres, 1 cada 12 horas.
- Dieta rica en fibra.
`
  },

  /* ───────────── Neurología ───────────── */

  {
    id: "mg-vertigo",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Neurología",
    titulo: "Vértigo",
    etiquetas: "mareo biodramina dimenhidrinato serc betahistina",
    nota: "Valorar Serc 8 mg cada 8 h durante 14 días. Primperan 10 mg cada 24 h si precisa (máximo cada 8 h). Nunca Dogmatil (sulpirida) si Parkinson.",
    texto: `
- Biodramina (dimenhidrinato) 50 mg:
  1-1-1 durante 2 días,
  1-0-1 durante 2 días,
  0-0-1 durante 2 días, y suspender.
- Motilium 10 mg cada 8 h si náuseas o vómitos.
`
  },

  {
    id: "mg-cefalea",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Neurología",
    titulo: "Cefalea",
    etiquetas: "naproxeno diazepam tensional",
    nota: "Signos de alarma: aparición súbita (sobre todo con el ejercicio); curso progresivo, con aumento de intensidad o frecuencia; cambio en las características de una cefalea habitual; signos de HTIC (alteración visual, empeora en decúbito, por la mañana o con Valsalva, náuseas); focalidad neurológica, alteración de la conducta o del nivel de consciencia; fiebre, meningismo o papiledema; inicio después de los 40 años sin cefalea previa; mala respuesta al tratamiento analgésico.",
    texto: `
1. Naproxeno 500 mg cada 12 h durante 7 días.
2. Omeprazol 20 mg cada 24 h durante 7 días.
3. Diazepam 2,5 mg cada 8 h durante 2 días, luego cada 12 h durante 2 días más y finalmente cada 24 h al acostarse durante 2 días, y suspender.
4. Reposo y evitar ruidos y luz excesiva mientras dure la cefalea.
`
  },

  {
    id: "mg-paralisis-facial",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Neurología",
    titulo: "Parálisis facial periférica",
    etiquetas: "bell facial hidroxil",
    nota: "Valorar aciclovir si VHS.",
    revisar: "El tratamiento de elección de la parálisis facial periférica idiopática son los corticoides orales iniciados en las primeras 72 h (por ejemplo, prednisona 50-60 mg/día durante 5-10 días). El ibuprofeno y las vitaminas del grupo B no han demostrado beneficio; el antiviral solo se valora asociado al corticoide en los casos graves.",
    texto: `
- Ibuprofeno 600 mg cada 8 h durante 10 días (1-1-1).
- Omeprazol 20 mg cada 24 h durante 10 días (1-0-0).
- Hidroxil (vitaminas B1-B6-B12) cápsulas cada 8 h (1-1-1).
- Medidas higiénicas: tapar los ojos durante la noche, lágrimas artificiales cada 6 h, gafas oscuras, etc.
`
  },

  /* ───────────── Alergia ───────────── */

  {
    id: "mg-urticaria",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Alergia",
    titulo: "Urticaria / reacción alérgica",
    etiquetas: "ebastel ebastina polaramine dexclorfeniramina corticoide",
    texto: `
- Ebastel Forte 20 mg (ebastina) cada 24 h durante 14 días (1-0-0), o
- Polaramine (dexclorfeniramina) 2 mg cada 8 h (1-1-1) durante 14 días, o
- Valorar pauta descendente de corticoides (Urbason 12 días o Dacortin 9 días).
`
  },

  {
    id: "mg-anafilaxia",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Alergia",
    titulo: "Anafilaxia",
    etiquetas: "adrenalina shock anafilactico glucagon",
    texto: `
- Adrenalina 0,5 mg IM (repetir a los 5-15 min) ± salbutamol ± corticoides.
Si refractaria:
- BIC de adrenalina: diluir 1 mg en 100 ml de SSF (= 0,01 mg/ml). Dosis: 0,5-1 ml/kg/h.
- Glucagón si betabloqueantes: 1-2 mg IV/IM en bolo en 5 min.
- Atropina si bradicardia: 0,5-1 mg en bolo (hasta 3 mg).
- Aminas y UCI.
Al alta, considerar autoinyector de adrenalina: 0,15/0,3 mg según peso.
`
  },

  /* ───────────── Aparato locomotor ───────────── */

  {
    id: "mg-dolor-toracico-mecanico",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Aparato locomotor",
    titulo: "Dolor torácico mecánico / atípico",
    etiquetas: "enantyum dexketoprofeno relajante yurelax robaxin",
    texto: `
- Enantyum sobres 25 mg, 1-1-1 durante 5 días.
- Omeprazol 20 mg, 1-0-0 durante 5 días.
- Asociar relajante muscular hasta resolución clínica:
  - Yurelax 10 mg (ciclobenzaprina): cada 12 h.
  - Robaxin 500 mg (metocarbamol): cada 6-8 h.
  - Robaxisal 380/300 mg (metocarbamol + paracetamol): 2 comprimidos cada 6 h.
`
  },

  {
    id: "mg-contractura",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Aparato locomotor",
    titulo: "Contractura muscular",
    etiquetas: "relajante yurelax robaxin calor",
    texto: `
- Relajante muscular:
  - Yurelax 10 mg (ciclobenzaprina): cada 12 h.
  - Robaxin 500 mg (metocarbamol): cada 6-8 h.
  - Robaxisal 380/300 mg (metocarbamol + paracetamol): 2 comprimidos cada 6 h.
- Paracetamol 1 g cada 8 h.
- Calor local.
`
  },

  {
    id: "mg-lumbalgia",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Aparato locomotor",
    titulo: "Lumbalgia / dorsalgia",
    etiquetas: "naproxeno metamizol calor espalda",
    texto: `
- Reposo relativo. Evitar sobreesfuerzos, sobrecarga de pesos y/o movimientos bruscos.
- Calor local 15-30 min cada 4-6 horas, durante 3 días o hasta mejoría del dolor.
- Alternar naproxeno 550 mg, 1 comprimido cada 12 horas, con metamizol 575 mg, 1 comprimido cada 8 horas, durante 5 días.
- Control evolutivo por su médico de familia si persiste el dolor a pesar de dichas medidas.
- Se explican signos y síntomas de alarma por los que reacudir: fiebre >38 ºC o dolor que no cede a pesar de la analgesia, pérdida de sensibilidad o fuerza en EEII o empeoramiento del estado general.
`
  },

  /* ───────────── Respiratorio ───────────── */

  {
    id: "mg-crisis-asmatica",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Respiratorio",
    titulo: "Crisis asmática: tratamiento",
    etiquetas: "asma ventolin salbutamol atrovent pulmicort symbicort",
    revisar: "El propio documento la marcaba «REVISAR». Además: Pulmicort y Symbicort a la vez duplican el corticoide inhalado, y el antibiótico no está indicado de rutina en la crisis asmática (solo si hay infección bacteriana). Compárala con «Asma: tratamiento al alta».",
    texto: `
- Ventolín (salbutamol) 3 inhalaciones cada 6 horas.
- Atrovent (bromuro de ipratropio) 4 inhalaciones cada 8 horas.
- Pulmicort 2 inhalaciones cada 8 horas.
- Symbicort (corticoide + broncodilatador) 2 inhalaciones cada 12 h.
- Augmentine 875/125 mg cada 8 h, 10 días.
- Si moderada-grave: Dacortin en pauta descendente.
`
  },

  {
    id: "mg-asma-urgencias",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Respiratorio",
    titulo: "Asma: manejo en urgencias (consulta)",
    etiquetas: "crisis asmatica peak flow salbutamol atrovent magnesio actocortina urbason",
    texto: `
Valorar PEF/FEV1 ± GSA (si SatO2 ≤94 %). Peak flow: en boxes siempre, antes de las nebulizaciones.

Leve (>70 %):
- Salbutamol siempre: 2-4 inhalaciones con cámara cada 20 min durante la 1.ª hora; luego, 2 inhalaciones cada 3-4 h.
- Corticoides orales: Urbason 40 mg o prednisona 50 mg durante 5-10 días, sin descenso.

Moderada-grave (70-50 % o <50 %):
- GN o VMK.
- Hudson/NUSS: [salbutamol 2,5-7,5 mg + Atrovent 500 mcg] cada 20 min durante la 1.ª hora; luego, cada 3-4 h.
- Corticoides: v.o. de 1.ª elección; si ingreso (previenen, pero no resuelven el broncoespasmo): dosis de ataque de Actocortina 200-400 mg IV (o Urbason 40 mg IV); luego, Urbason 20 mg cada 8 h.
- Corticoides inhalados: budesonida nebulizada 0,5 mg cada 15 min durante la 1.ª hora; luego, en MDI 400 mcg cada 12 h, o 0,5 mg cada 12 h si nebulizada.
- Sulfato de magnesio (avisar a NML): 2 g en perfusión en 20 min + omeprazol IV.
`
  },

  {
    id: "mg-asma-alta",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Respiratorio",
    titulo: "Asma: tratamiento al alta",
    etiquetas: "foster formodual symbicort urbason salbutamol",
    nota: "LABA (formoterol) + corticoide inhalado. También: Symbicort/Rilast, Duoresp/Biresp/Bufomix o Flutiform. Misma pauta siempre.",
    texto: `
1. Salbutamol 2 inhalaciones, máximo cada 8 h, si precisa.
2. {{Inhalador|Foster Nexthaler|Formodual}} 2 inhalaciones cada 12 h hasta la próxima visita.
3. Urbason 40 mg cada 24 h durante 5-10 días.
4. Omeprazol 20 mg cada 24 h durante 5-10 días.
`
  },

  {
    id: "mg-irvb-urgencias",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Respiratorio",
    titulo: "Infección respiratoria de vías bajas ± broncoespasmo",
    etiquetas: "IRVB bronquitis sibilancias hudson levofloxacino augmentine",
    revisar: "«GN 24 % (3 l/min)»: con gafas nasales, 3 l/min equivalen a ~32 %; el 24 % corresponde a una mascarilla Venturi a 3 l/min.",
    texto: `
- GSA basal. GN 24 % (3 l/min) para SatO2 ≥93 %.
- Hudson (salbutamol 2,5-7,5 mg + Atrovent 500 mcg + SF) cada 20 min durante la 1.ª hora; después, cada 4 h.
- Urbason 20-40 mg IV ahora y después cada 8 h IV, o Actocortina 100-400 mg en bolo IV ahora.
- ATB: Augmentine 1 g cada 8 h IV o levofloxacino 500 mg cada 12 h las 2 primeras dosis y luego cada 24 h.
`
  },

  {
    id: "mg-irvb-alta",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Respiratorio",
    titulo: "Infección respiratoria de vías bajas: tratamiento al alta",
    etiquetas: "IRVB levofloxacino atrovent prochamber",
    texto: `
- Levofloxacino 500 mg cada 24 h.
- Atrovent 4 inhalaciones cada 8 h con cámara espaciadora (Prochamber).
  Alternativa: Atrovent 2 puffs cada 6 h + salbutamol 2 puffs cada 6 h durante 5 días; si mejoría, Atrovent 2 puffs cada 8 h + salbutamol 2 puffs cada 8 h y, según evolución, disminuir a cada 12 h.
- Pauta descendente de corticoides.
`
  },

  {
    id: "mg-oxigenoterapia",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Respiratorio",
    titulo: "Oxigenoterapia: FiO2 según dispositivo (consulta)",
    etiquetas: "oxigeno venturi VMK monaghan reservorio gafas nasales",
    revisar: "La regla «litros x 2 + 20» no coincide con la tabla. Con gafas nasales se estima FiO2 ≈ 20 + 4 x l/min (3 l/min ≈ 32 %); los pares FiO2-flujo de la tabla corresponden a las válvulas Venturi.",
    texto: `
VMK: n.º de litros por minuto x 2 + 20 = % de concentración de oxígeno.
- FiO2 24 %: 3 l/min
- FiO2 26 %: 4 l/min
- FiO2 28 %: 5 l/min
- FiO2 31 %: 8 l/min
- FiO2 35 %: 10 l/min
- FiO2 40 %: 12 l/min
- FiO2 50 %: 15 l/min
Monaghan (reservorio):
- FiO2 70 %: 9 l/min
- FiO2 80 %: 10 l/min
- FiO2 >80 %: 11 l/min
- FiO2 >90 %: 12 l/min
`
  },

  /* ───────────── Cardiovascular ───────────── */

  {
    id: "mg-fa",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Cardiovascular",
    titulo: "Fibrilación auricular",
    etiquetas: "FA anticoagulacion amiodarona flecainida digoxina diltiazem CHA2DS2-VASc",
    nota: "Referencia del documento: pág. 129 del manual HGTiP.",
    revisar: "Digoxina: conviene indicar una dosis máxima acumulada en la impregnación. Flecainida: evitarla si hay cardiopatía estructural o isquémica.",
    enlaces: [
      { titulo: "Manejo de la FA en urgencias (SEC y SEMES)", url: "https://secardiologia.es/images/stories/file/arritmias/publicaciones-arritmias-manejo-paciente-fibrilacion-auricular-fa-urgencias.pdf" },
      { titulo: "Calculadora CHA2DS2-VASc (SAMIUC)", url: "http://www.samiuc.es/index.php/calculadores-medicos/calculadores-cardiovasculares/chads2-vasc-score.html" }
    ],
    texto: `
- Anticoagulación (calcular CHA2DS2-VASc): iniciar Clexane 60 mg cada 12 h (o Clexane 100 mg cada 24 h) + 1/2 comprimido de Sintrom 4 mg cada 24 h, con control al 3.er día para la pauta de Sintrom.
- Amiodarona: dosis de carga de 300 mg (2 ampollas) en 30 min. Mantenimiento: 7-8 ampollas en 250 cc de SG durante 24 h. Iniciar a la vez la vía oral (normalmente 200 mg cada 8 h la 1.ª semana y luego 200 mg/día) para conseguir impregnación y poder suspender la PIV lo antes posible. Pasadas 24 h, plantear CVE si no hay RS. Tras CVE/CVF, valorar tratamiento antiarrítmico crónico.
- Flecainida: dosis de carga de 300 mg v.o. Mantenimiento: 50-100 mg cada 12 h v.o.
- Digoxina: 2 ampollas (0,5 mg) en bolo, luego 0,25 mg cada 2 h hasta control de la FC. Mantenimiento: 0,25 mg/24 h v.o.
- Betabloqueantes: propranolol v.o., hasta 40 mg cada 8 h.
- Diltiazem: dosis inicial de 0,25 mg/kg en 2-3 min IV, luego BIC a 5-15 mg/h IV. Mantenimiento: 60-90 mg cada 8 h v.o. o 120 mg cada 12 h (retard).
Los pacientes sin cardiopatía estructural con un 1.er episodio de FA no necesitan antiarrítmicos al alta.
Si se considera necesaria la reversión a ritmo sinusal en una FA de más de 48 h o de duración indeterminada, hay que descartar antes trombos intracavitarios mediante ecocardiograma transesofágico.
`
  },

  {
    id: "mg-taquicardias",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Cardiovascular",
    titulo: "Taquicardias: TPSV / flutter (adenosina)",
    etiquetas: "TPSV taquicardia supraventricular adenosina",
    texto: `
Adenosina: bolo inicial de 6 mg IV (1 ampolla). Si no es eficaz, repetir con un bolo de 12 mg. Contraindicada en asmáticos y en pacientes tratados con teofilina (antagoniza su efecto); el dipiridamol potencia su efecto. Es muy frecuente la bradicardia sinusal o el BAV transitorio, así como una sensación intensa de calor o náuseas.
`
  },

  {
    id: "mg-eap",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Cardiovascular",
    titulo: "Edema agudo de pulmón",
    etiquetas: "EAP insuficiencia cardiaca furosemida morfina nitroglicerina NTG",
    revisar: "Morfina: la guía ESC 2021 de insuficiencia cardíaca no recomienda su uso rutinario en el EAP. Oxígeno: con gafas nasales, 3 l/min equivalen a ~32 %, no a 24 %. Las diluciones [1] y [2] de NTG están en «Nitroglicerina (BIC)».",
    texto: `
- ECG. Sedestación.
- GN 24 % (3 l/min).
- Furosemida: bolo inicial de 40-60 mg IV. Después, 20 mg IV cada 4-6 h o BIC de furosemida a 4-6 ml/h.
- Morfina (antes, 1 ampolla de Primperan): 1 ampolla de cloruro mórfico (1 ml = 10 mg) en 9 cc de SF [1 %] (1 mg/ml). Dosis habitual: 2-3 mg IV en bolo cada 15-20 min según la respuesta clínica y la TA. Dosis máxima: 10 mg.
- Si TAS >120: BIC de NTG [2] a 4-6 ml/h, o [1] a 10 ml/h inicialmente, que se puede ir aumentando. Control de TA. Reducir a razón de 2 ml/h hasta su retirada.
`
  },

  {
    id: "mg-sca",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Cardiovascular",
    titulo: "SCASEST / SCACEST",
    etiquetas: "sindrome coronario agudo infarto IAM AAS clopidogrel heparina",
    revisar: "Tal como está escrito parece combinar enoxaparina (Clexane) con heparina sódica en perfusión, y no deben asociarse. Aclarar que son alternativas: enoxaparina 1 mg/kg cada 12 h SC, o heparina sódica en bolo + perfusión ajustada por TTPA.",
    texto: `
- AAS 300 mg + clopidogrel 300 mg (600 mg si SCACEST).
- Clexane 100 mg (o bolo de 5.000 UI) + BIC de heparina sódica 24.000 UI/24 h a 10 ml/h.
- BIC de NTG [2]: 4-6 ml/h según TA, hasta 10 ml/h.
`
  },

  /* ───────────── Endocrino y metabolismo ───────────── */

  {
    id: "mg-cad",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Endocrino y metabolismo",
    titulo: "Cetoacidosis diabética",
    etiquetas: "CAD insulina perfusion potasio cetonas",
    revisar: "Falta una advertencia clave: si K <3,3 mmol/l, no iniciar la insulina hasta reponer el potasio. Además, los tramos de K se solapan (3-5 y <3,5).",
    texto: `
- Solicitar cuerpos cetónicos en orina.
- Bolo inicial de NovoRapid 0,1 UI/kg de peso IV/SC.
- BIC de insulina (NovoRapid/Actrapid): 100 UI en 100 o 500 cc de SF, a 6-8 ml/h si [1:1] o a 30-40 ml/h si [1:5].
- BMTest cada hora. Objetivo: reducir 50-100 mg/dl por hora.
- Cuando la glucemia sea <250 mg/dl, administrar SG 5 % (10 %) cada 12 h o más.
- Hidratar: 500 ml cada 30-60 min inicialmente; luego, cada 4-6 h.
- Administrar K si:
  - K 3-5 mmol/l: 10-20 mEq cada 6-8 h.
  - K <3,5 mmol/l: 20-30 mEq cada 6-8 h.
- Control cada 1-2 h (no suele ser necesario administrar HCO3).
- Retirar la BIC solo cuando el EAB sea normal (pH y HCO3); iniciar la insulina basal (Lantus {{UI de Lantus}} UI) 60 min antes de retirarla.
- Prealta: solicitar HbA1c + péptido C + perfil de enfermedad diabética.
`
  },

  {
    id: "mg-hiponatremia",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Endocrino y metabolismo",
    titulo: "Hiponatremia / SIADH",
    etiquetas: "sodio hipoNa suero hipertonico osmolalidad",
    revisar: "Añadir el límite de corrección para evitar la desmielinización osmótica: no subir el sodio más de 10 mmol/l en las primeras 24 h (8 mmol/l en pacientes de riesgo).",
    texto: `
SIADH (osmolalidad baja, VEC normal: sin edemas ni deshidratación):
- Tratar la causa. Restricción hídrica ± sellos de sal ± suero hipertónico (control de AG cada hora).
- Tolvaptán (no en urgencias).
Diagnóstico diferencial:
- Osmolalidad elevada: pensar en hiperglucemia (calcular el Na corregido por la glucosa).
- Osmolalidad normal: pseudohiponatremia; pensar en hiperproteinemia (mieloma) o hiperlipidemia.
- Osmolalidad baja + VEC elevado (edemas, tercer espacio): cirrosis, síndrome nefrótico o ICC.
- Osmolalidad baja + VEC disminuido (deshidratación): solicitar Osm urinaria (>100 mOsm/kg) y Na urinario (diuréticos con Na >20 frente a pérdida de volumen: vómitos, diarreas, quemados). Tratamiento: SF.
Hiponatremia grave (Na <120 o clínica): CORRECCIÓN URGENTE.
- Suero hipertónico al 3 % (SF 0,9 % 500 ml + 60 ml de NaCl 20 %) a 0,5 ml/kg/h.
- Restricción hídrica.
- AG de control en 2 h.
`
  },

  {
    id: "mg-hipopotasemia",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Endocrino y metabolismo",
    titulo: "Hipopotasemia",
    etiquetas: "hipokaliemia potasio boi-k",
    texto: `
Boi-K 25 mEq cada 24 h durante 14 días y control clínico.
`
  },

  {
    id: "mg-tirotoxicosis",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Endocrino y metabolismo",
    titulo: "Tirotoxicosis",
    etiquetas: "hipertiroidismo tiroides metimazol propranolol",
    texto: `
- Explorar bocio. Solicitar TSH y T4. Diagnóstico diferencial con la tiroiditis subaguda (tratamiento: ibuprofeno).
- Evitar AINE.
- Propranolol IV o v.o. hasta normalizar la FC.
- Metimazol (Thyrozol): su efecto tarda 24 h.
- Actocortina 100 mg cada 6-8 h IV.
- Prealta: solicitar AG con perfil tiroideo y anti-TPO.
`
  },

  {
    id: "mg-acidosis-hiperpotasemia",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Endocrino y metabolismo",
    titulo: "Hiperpotasemia y acidosis metabólica",
    etiquetas: "hiperkaliemia potasio bicarbonato gluconato calcico insulina",
    revisar: "Gluconato cálcico: en la hiperpotasemia con cambios en el ECG se administra de forma aguda (10 ml al 10 % en 2-3 min, repetible si persisten), no como pauta cada 8 h.",
    texto: `
Hiperpotasemia:
- ECG / monitorización.
- 500 cc de SG 20 % + 15 UI de insulina a pasar en 2 h. BMTest en 2 h.
- Furosemida 40 mg cada 8 h.
- 1 ampolla de gluconato cálcico cada 8 h.
- Si bloqueo en el ECG: Aleudrina, 10 ampollas de 0,2 mg en 500 ml de SG 5 %; iniciar a 15 ml/h e ir subiendo según la FC.
Acidosis metabólica (pH <7,35 / HCO3 <23 mmol/l):
- Si HCO3 <15 mmol/l, reponer HCO3.
- Exceso de bases x 10 = ml de HCO3 1 M (menos agua, si ICC); o su equivalente en 1/6 M (si se quiere hidratar).
- Mantenimiento: 250 ml de 1/6 M cada 8 h.
- Ejemplo: HCO3 11 mmol/l, EB 12 => 120 ml de HCO3 1 M o 720 ml de HCO3 1/6 M.
`
  },

  /* ───────────── Renal ───────────── */

  {
    id: "mg-fra",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Renal",
    titulo: "Fracaso renal agudo (consulta)",
    etiquetas: "FRA insuficiencia renal aguda prerrenal NTA sedimento",
    revisar: "Corregido: en el síndrome renopulmonar el documento decía «¿hematemesis?»; por el contexto (hemorragia alveolar) es hemoptisis.",
    texto: `
- Prerrenal: hidratación (si ICC, aminas).
- Postrenal: ecografía renovesical y urología.
- Renal (¿nefrotóxicos, contrastes, AINE + IECA, rabdomiólisis?):
  - Sedimento de orina: ¿microhematuria? (solicitar hematíes dismórficos llamando). >100 hematíes/campo: urología (probablemente postrenal). 30-70 hematíes/campo: nefrología.
  - ¿Proteinuria? (normal: 0 mg/dl) ¿Antecedentes de diabetes? Si está alterada, plantear vasculitis: solicitar Prot/Cr y ANCA; si son positivos, avisar a nefrología.
  - ¿Síndrome renopulmonar? ¿Hemoptisis? Solicitar Rx de tórax para descartar hemorragia alveolar.
- FRA (prerrenal evolucionado a NTA, o renal) que no orina pese al tratamiento: insistir con la hidratación con SF; si no, ecografía (¿postrenal?). Administrar furosemida (20-40 mg cada 8 h) solo si HTA o hiperpotasemia.
`
  },

  {
    id: "mg-hematuria",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Renal",
    titulo: "Hematuria (protocolo)",
    etiquetas: "sangre orina ecografia",
    texto: `
- Rx de abdomen.
- Sedimento.
- Analítica.
- Ecografía renovesicoprostática preferente ambulatoria.
`
  },

  /* ───────────── Hepatología ───────────── */

  {
    id: "mg-cirrosis",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Hepatología",
    titulo: "Cirrosis: precauciones e infecciones (consulta)",
    etiquetas: "PBE peritonitis bacteriana espontanea ascitis albumina ceftriaxona",
    revisar: "En la IRA del cirrótico, el patrón prerrenal cursa con Na urinario <20 mmol/l (el documento pone >20). En el líquido ascítico, «quilotórax» debería ser «ascitis quilosa».",
    texto: `
- Nunca HBP, medicación IM, AINE ni BZD (Distraneurine sí).
- Solo SF si shock.
- Inmunodeprimidos: si fiebre, cultivar todo.
Infecciones:
- PBE (líquido ascítico >250 PMN). Tratamiento: suspender nefrotóxicos, laxantes y diuréticos. DRUM (para PVC). SV (control de diuresis). Albúmina 1,5 g/kg de peso (dividir cada 8 h). ATB: ceftriaxona 2 g (si hospitalaria y alto riesgo, meropenem; si bajo riesgo, piperacilina-tazobactam).
- Bacterioascitis (<250 PMN pero cultivo +): si asintomático, no tratar (control en 48 h); si sintomático o empeora la función renal, tratar como PBE.
- Peritonitis bacteriana secundaria (>>>250 PMN o tres criterios: LDH, glucosa, albúmina): hacer TC y avisar a CG.
- Líquido ascítico: trasudado 20-25 de proteínas; exudado >25 de proteínas (¿carcinomatosis peritoneal?); quilotórax >200 de triglicéridos.
- EEC (>500 PMN o >250 y cultivo +): ceftriaxona 2 g, sin albúmina.
IRA en cirróticos: prerrenal FeNa <1 %, Na urinario >20; renal FeNa >2 %, Na urinario >40. Si toma diuréticos, solicitar Cr, urea y Na en orina y en sangre. Tratamiento: albúmina 1 g/kg (dividir cada 8 h) ± SF.
`
  },

  {
    id: "mg-encefalopatia-hepatica",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Hepatología",
    titulo: "Encefalopatía hepática",
    etiquetas: "cirrosis lactitol flapping",
    texto: `
Grados: I, alteración del grado de vigilia, somnolencia; II, flapping; III, estupor; IV, coma.
Etiología: 80 %, hemorragia digestiva, infecciones, diuréticos; 20 %, estreñimiento, antihistamínicos, BZD, hiper/hipoglucemia. Diagnóstico clínico (TC craneal si focalidad).
- Suspender diuréticos.
- SNG si grado III o IV.
- SG.
- Laxantes: grados I-II: 1 sobre de lactitol cada 8 h v.o. + 5 sobres de lactitol cada 8 h por vía rectal. Grados III-IV: 20 sobres en 1 l de agua + balón rectal.
`
  },

  {
    id: "mg-descompensacion-ascitica",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Hepatología",
    titulo: "Descompensación ascítica (DAE)",
    etiquetas: "cirrosis ascitis paracentesis diureticos",
    texto: `
- Aumentar diuréticos y control en hospital de día al día siguiente.
- Si es la 1.ª DAE: orina de 24 h + paracentesis + ingreso para estudio.
`
  },

  {
    id: "mg-hepatitis-aguda",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Hepatología",
    titulo: "Hepatitis aguda (consulta)",
    etiquetas: "transaminasas serologias insuficiencia hepatica",
    texto: `
Transaminasas >10 veces el valor normal o elevación de BD, FA y GGT.
Etiología: viral (>100 veces), fármacos (betalactámicos), isquémica.
Solicitar: IgM VHA, IgM anti-HBc (pueden irse de alta si la coagulación es normal), Ac VHC, ecografía abdominal.
Criterios de gravedad: TP <40 %, INR >1,5, alteración del comportamiento; constituye insuficiencia hepática aguda grave.
Marcadores de fracaso de la función hepática: BD, albúmina, TP.
`
  },

  /* ───────────── Dolor y paliativos ───────────── */

  {
    id: "mg-sedacion-paliativa",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Dolor y paliativos",
    titulo: "Sedación paliativa (pauta)",
    etiquetas: "paliativos morfina midazolam buscapina fentanilo infusor",
    revisar: "Corregido: el documento expresaba el fentanilo en mg; son microgramos (cada ampolla tiene 150 mcg). Revisad que la dosis de 24 h sea la deseada.",
    texto: `
SF 250 ml cada 12 h y asociar:
- Morfina 10-30 mg (o fentanilo 600-750 mcg).
- Midazolam 5-20 mg.
- Buscapina 20-60 mg.
En urgencias se pauta igual, pero en BIC (velocidad 11-12).
Rescates: morfina 2,5 mg IV, midazolam 5 mg IV, Buscapina 20 mg IV, haloperidol 5 mg si agitación.
Rescates con fentanilo: fentanilo 300 mcg (2 ampollas) + midazolam 5 mg.
`
  },

  {
    id: "mg-opioides-orales",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Dolor y paliativos",
    titulo: "Analgesia opioide oral y transdérmica (consulta)",
    etiquetas: "oramorph MST morfina tramadol versatis lidocaina",
    texto: `
- Oramorph 20 mg/ml: 2-4 gotas, como máximo cada 4 h, si disnea o dolor mal controlado.
- MST Continus 5/10/30/60 mg cada 12 h (si venimos de morfina IV, al pasar a vía oral: dosis x 2).
- Tramadol VIR 100 mg/ml: dosis inicial habitual de 50-100 mg (20-40 gotas), seguida de 50 o 100 mg cada 6-8 h, sin sobrepasar 400 mg/día (160 gotas). Tomar con un vaso de agua.
- Versatis parche.
`
  },

  /* ───────────── Perfusiones (BIC) ───────────── */

  {
    id: "mg-bic-nitroglicerina",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Perfusiones (BIC)",
    titulo: "Nitroglicerina (BIC)",
    etiquetas: "NTG solinitrina perfusion",
    texto: `
Solinitrina amp. 5 mg/5 ml (1 mg/ml). Solinitrina Fuerte amp. 50 mg/10 ml (5 mg/ml).
BIC de NTG:
[2] 1 ampolla de 50 mg/10 ml en 250 ml de SG 5 % (frasco de vidrio). Velocidad: 5-8 ml/h.
[1] 5 ampollas de 5 mg/5 ml en 250 ml de SG 5 % (frasco de vidrio). Velocidad: 10 ml/h inicialmente.
Control de TA. Reducir a razón de 2 ml/h hasta su retirada.
`
  },

  {
    id: "mg-bic-furosemida",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Perfusiones (BIC)",
    titulo: "Furosemida (BIC)",
    etiquetas: "seguril diuretico perfusion",
    texto: `
Ampollas de 20 mg/2 ml (10 mg/ml) y de 250 mg/25 ml (10 mg/ml).
- Si función renal alterada: BIC de furosemida con 4 ampollas de 250 mg/25 ml sin diluir [10 mg/ml]. Velocidad máxima (e inicial si FRA): 4 ml/h (1 g/día). Después, reducir a 2 ml/h si hay buenas diuresis.
- Si función renal normal: ampollas de 20-40 mg cada 6 h.
`
  },

  {
    id: "mg-bic-morfina",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Perfusiones (BIC)",
    titulo: "Morfina (bolo y BIC)",
    etiquetas: "cloruro morfico opioide infarto",
    texto: `
Morfina 10 mg/ml (1 %): 1 ampolla en 9 ml de SF. IV lenta (4-5 min).
Dolor asociado a infarto: 4 mg en bolo (2-3 mg si EAP), pudiendo administrar dosis crecientes de 3 mg cada 5-10 min, hasta un máximo de 15 mg.
BIC: jeringa con 2 ampollas al 1 % (2 ml) + 18 ml de SG 5 %. Concentración final: 1 mg/ml.
`
  },

  {
    id: "mg-bic-heparina",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Perfusiones (BIC)",
    titulo: "Heparina sódica (BIC)",
    etiquetas: "HNF anticoagulacion TTPA angina infarto",
    revisar: "Corregido «terapia tromboembólica» por «trombolítica». Como en «SCASEST / SCACEST»: no combinar enoxaparina con la perfusión de heparina sódica.",
    texto: `
- Angina inestable o IAM sin tratamiento trombolítico: dosis inicial en bolo de 5.000 UI, seguida de 32.000 UI/24 h en infusión IV continua ajustada según TTPA.
- IAM con tratamiento trombolítico: dosis inicial en bolo de 5.000 UI (o Clexane 100 mg), seguida de 24.000 UI/24 h a 10 ml/h en infusión IV continua ajustada según TTPA.
Ojo con la función renal.
`
  },

  {
    id: "mg-flumazenilo",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Perfusiones (BIC)",
    titulo: "Flumazenilo",
    etiquetas: "anexate benzodiacepinas intoxicacion",
    texto: `
En las unidades de cuidados intensivos y en el diagnóstico de la inconsciencia de origen desconocido: dosis inicial de 0,3-1 mg. Si pasados 60 segundos no se ha obtenido el grado de conciencia deseado, puede repetirse la dosis hasta que el paciente se despierte, sin sobrepasar una dosis total de 2 mg. Si reaparece la somnolencia, puede administrarse en bolo IV o en infusión IV de 0,1-0,4 mg/h. La velocidad de infusión debe ajustarse individualmente según el grado de conciencia deseado.
`
  },

  {
    id: "mg-isoprenalina",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Perfusiones (BIC)",
    titulo: "Isoprenalina (Aleudrina)",
    etiquetas: "bradicardia aleudrina isoproterenol",
    texto: `
Si tras retirar los betabloqueantes persisten FC bajas. Avisar a cardiología.
BIC: 5 ampollas (0,2 mg x 5 = 5 ml) en 250 ml de SG; empezar a 30 ml/h.
`
  },

  /* ───────────── Otros ───────────── */

  {
    id: "mg-anorexia-ancianos",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia"],
    grupo: "Otros",
    titulo: "Anorexia en ancianos",
    etiquetas: "borea megestrol apetito",
    revisar: "Borea es acetato de megestrol 160 mg: su indicación autorizada es la caquexia-anorexia asociada a neoplasia avanzada, y los criterios de Beers y STOPP desaconsejan su uso en mayores (riesgo trombótico, escaso beneficio). 1 comprimido cada 8 h son 480 mg/día. Revisad la indicación.",
    texto: `
Borea, 1 comprimido cada 8 h.
`
  },

  {
    id: "mg-hoja-boxes",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Otros",
    titulo: "Hoja de tratamiento en boxes",
    etiquetas: "ordenes enfermeria constantes dieta sueroterapia",
    nota: "Restricción hídrica: pág. 761 del manual de referencia del documento.",
    texto: `
- Control de constantes habituales ± BMTest cada {{Frecuencia del BMTest}} (si DM).
- Dieta oral diabética/normal, normosódica/hiposódica / dieta absoluta.
- Sueroterapia (SF, SG al 5 o 10 %) / restricción hídrica.
- Necesidad de oxígeno (gafas a 3 l, Ventimask). P. ej.: O2 con {{Dispositivo de O2}} para saturaciones >92 %.
- Tratamiento de la patología aguda del paciente.
- Medicación habitual del paciente.
`
  },

  {
    id: "mg-exitus",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Otros",
    titulo: "Constatación de éxitus",
    etiquetas: "exitus fallecimiento defuncion muerte",
    texto: `
Avisan por éxitus. Ausencia de reflejos de tronco, midriasis arreactiva, ausencia de reflejo corneal, ausencia de reflejos oculocefálicos, ausencia de ventilación, de latido y de pulso, ECG plano. {{Observaciones}}
Éxitus. Hora: {{Hora}}.
`
  }

);
