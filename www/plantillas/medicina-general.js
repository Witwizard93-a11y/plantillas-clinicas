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
    etiquetas: "cistitis fosfomicina monurol nitrofurantoina cefuroxima ciprofloxacino pielonefritis PNA prostatitis",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): fosfomicina en dosis única (en el hombre, segunda dosis a las 48 h; antes 2 sobres separados 24 h); nitrofurantoína si intolerancia; se retira la cefuroxima en la cistitis (la guía no recomienda betalactámicos en la cistitis aguda); PNA sin ingreso: cefuroxima-axetilo cada 12 h durante 7-10 días (antes cada 8 h, 14 días); ciprofloxacino solo en la prostatitis aguda, 14 días (antes 21 días en todo varón).",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Infección urinaria", url: "https://guiaterapeutica.net/problemas/408/infeccion-urinaria" }
    ],
    texto: `
- Cistitis aguda en la mujer: Monurol (fosfomicina trometamol) sobre 3 g, dosis única.
- Si intolerancia a la fosfomicina: nitrofurantoína 100 mg cada 12 h durante 5 días.
- Cistitis aguda en el hombre: Monurol (fosfomicina trometamol) sobre 3 g, dosis única, y una segunda dosis a las 48 h.
- PNA sin ingreso: cefuroxima-axetilo 500 mg cada 12 h durante 7-10 días (alargar a 10 días según evolución; en la pielonefritis subclínica, 14 días con urocultivo antes y después). Adaptar al urocultivo y antibiograma.
- PNA con contraindicación de cefalosporinas: ciprofloxacino 500 mg cada 12 h durante 10-14 días.
- Prostatitis aguda: ciprofloxacino 500 mg cada 12 h durante 14 días (alargar hasta 28 días según evolución). Adaptar al urocultivo y antibiograma.
`
  },

  {
    id: "mg-amigdalitis",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Infecciones",
    titulo: "Amigdalitis",
    etiquetas: "faringoamigdalitis estreptococo penicilina fenoximetilpenicilina azitromicina clindamicina augmentine",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): analgesia con paracetamol o ibuprofeno; antibiótico solo si Centor ≥ 2 y prueba antigénica rápida positiva: fenoximetilpenicilina 500 mg cada 12 h durante 7-10 días (antes amoxicilina/clavulánico de entrada, que la guía deja para la faringitis estreptocócica de repetición); alergia: azitromicina 5 días o clindamicina 150-300 mg cada 8 h (antes 300 mg). La guía no da dosis de amoxicilina/clavulánico: se conserva la de la plantilla.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Faringoamigdalitis aguda", url: "https://guiaterapeutica.net/problemas/13/faringoamigdalitis-aguda" }
    ],
    texto: `
- Paracetamol 0,5-1 g cada 4-6 h vo (máx. 4 g/día; en ancianos o IR grave, máx. 3 g/día; en IH, máx. 2 g/día), o ibuprofeno 400-1.200 mg/día en 1-3 dosis vo.
- Si criterios de Centor ≥ 2 y prueba antigénica rápida positiva: fenoximetilpenicilina (penicilina V) 500 mg cada 12 h durante 7-10 días vo, con el estómago vacío.
- Si alergia a la penicilina: azitromicina 500 mg cada 24 h durante 5 días vo, o clindamicina (Dalacin) 150-300 mg cada 8 h durante 10 días vo.
- Faringitis estreptocócica de repetición: repetir la misma pauta o amoxicilina/clavulánico 875/125 mg cada 8 h durante 10 días (Augmentine).
`
  },

  {
    id: "mg-laringitis",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Infecciones",
    titulo: "Laringitis / accesos de tos / tos perruna",
    etiquetas: "laringitis tos dextrometorfano codeina codeisan azitromicina",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): la laringitis aguda se trata con medidas no farmacológicas; síntomas: AINE (ibuprofeno) y dextrometorfano 15-30 mg cada 6-8 h; codeína 15-30 mg cada 6-8 h solo si no mejora (antes Codeisan 28,7 mg cada 6 h de entrada); antibiótico solo si se sospecha infección bacteriana. Pendiente de decidir: la guía no dice qué antibiótico (se conserva la azitromicina de la plantilla) ni recoge la ebastina en este problema.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Laringitis aguda", url: "https://guiaterapeutica.net/problemas/17/laringitis-aguda-laringitis-cronica-crup" },
      { titulo: "Guía Terapéutica semFYC · Tos aguda", url: "https://guiaterapeutica.net/problemas/133/tos-aguda" }
    ],
    texto: `
- Reposo de la voz, ambiente caliente y húmedo (inhalaciones de vapor), hidratación, gárgaras con antisépticos o productos naturales (miel/limón) y evitar irritantes. No fumar.
- Tratamiento sintomático: AINE (ibuprofeno) y, si la tos afecta la calidad de vida, dextrometorfano 15-30 mg cada 6-8 h vo.
- Si la tos no mejora: codeína 15-30 mg cada 6-8 h vo durante 4 días.
- Solo si se sospecha infección bacteriana: azitromicina 500 mg cada 24 h durante 3 días.
- Valorar Ebastel Forte 20 mg cada 24 h.
`
  },

  {
    id: "mg-zoster-1",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Infecciones",
    titulo: "Herpes zóster: pauta con paracetamol y AINE",
    etiquetas: "zoster valaciclovir linimento solucion secante paracetamol codeina voltaren",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): se indica cuándo dar valaciclovir (dosis sin cambios); se retira el linimento oleocalcáreo con gentamicina (según la guía ningún tratamiento tópico ha demostrado ser eficaz: solución secante si lesiones exudativas y ácido fusídico o mupirocina si sobreinfección), por lo que el título ya no lo menciona; si la analgesia no basta, paracetamol-codeína. La guía recomienda empezar con paracetamol o un AINE sin dar dosis: se conservan las de la plantilla.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Herpes zóster", url: "https://guiaterapeutica.net/problemas/204/herpes-zoster" }
    ],
    texto: `
- Valaciclovir 1 g cada 8 h durante 7 días (si < 72 h de evolución del exantema en > 50 años, diabéticos, inmunodeprimidos, herpes oftálmico u ótico, dolor grave o eccemas severos).
- Lesiones exudativas: solución secante. Si sobreinfección: ácido fusídico o mupirocina pomada, 1 aplicación cada 8 h.
- Paracetamol 1 g cada 8 h, alternado con Voltaren 50 mg cada 8 h.
- Si no es suficiente, sustituir el paracetamol por paracetamol-codeína 500-30 mg cada 6 h vo (máx. 4.000-240 mg/día).
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
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): valaciclovir 1 g cada 8 h durante 7 días (antes cada 24 h) y cuándo indicarlo. Pendiente de decidir: la guía propone como analgésico paracetamol-codeína 500-30 mg cada 6 h (metamizol 1-2 g cada 8 h si dolor intenso no controlado) y sitúa el tramadol como tercer escalón de la neuralgia postherpética; se conservan el paracetamol, el tramadol y el Avental, para los que la guía no da otra pauta en la fase aguda.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Herpes zóster", url: "https://guiaterapeutica.net/problemas/204/herpes-zoster" }
    ],
    texto: `
- Valaciclovir 1 g cada 8 h durante 7 días (si < 72 h de evolución del exantema en > 50 años, diabéticos, inmunodeprimidos, herpes oftálmico u ótico, dolor grave o eccemas severos).
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
    etiquetas: "escabiosis permetrina sarcop dexclorfeniramina hidroxizina",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): la permetrina se retira con una ducha a las 8-12 h y la segunda aplicación se hace al cabo de 1 semana (antes a las 48 h); se añaden el antihistamínico para el prurito, el tratamiento simultáneo de convivientes y contactos y el lavado de la ropa.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Sarna o escabiosis", url: "https://guiaterapeutica.net/problemas/227/sarna-o-escabiosis" }
    ],
    texto: `
Sarcop crema (permetrina 5 %): 1 aplicación por la noche, del cuello a la punta de los pies, incluidas las plantas (excepto cara y mucosas). Ducharse a las 8-12 h para retirarla y repetir la aplicación al cabo de 1 semana.
- Si prurito: dexclorfeniramina 2-6 mg cada 8-12 h vo, o hidroxizina 25 mg cada 6-8 h vo (máx. 100 mg/día).
- Tratar a la vez (en 24 h) a convivientes y contactos íntimos, aunque no tengan síntomas.
- Lavar a más de 60 °C (mínimo 10 min) la ropa de cama, el pijama y la ropa usada en las 48 h previas; la que no se pueda lavar, en una bolsa cerrada durante 15 días.
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
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): Motilium (domperidona) solo si náuseas o vómitos, máx. 30 mg/día; alternativa: metoclopramida 10 mg cada 8 h. La guía no da dosis de paracetamol ni de las sales de rehidratación: se conservan.",
    enlaces: [
      { titulo: "Diarrea aguda en el adulto (CAMFiC)", url: "https://gestor.camfic.cat/Uploads/ITEM_439_EBLOG_1725.pdf" },
      { titulo: "Guía Terapéutica semFYC · Diarrea aguda. Gastroenteritis aguda", url: "https://guiaterapeutica.net/problemas/246/diarrea-aguda-gastroenteritis-aguda" }
    ],
    texto: `
- Iniciar dieta astringente según demanda.
- Citorsal sobres: diluir en 500 ml de agua, cada 8 horas.
- Paracetamol 1 g cada 8 h si dolor.
- Si náuseas o vómitos: Motilium (domperidona) 10 mg cada 8 h (máx. 30 mg/día) o metoclopramida 10 mg cada 8 h vo.
`
  },

  {
    id: "mg-gastritis",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Digestivo",
    titulo: "Gastritis / epigastralgia",
    etiquetas: "dispepsia epigastralgia omeprazol almax almagato primperan",
    nota: "Solicitar amilasa en orina (normal hasta 1000, en relación con la amilasa plasmática) y Rx de abdomen para ver que no haya dilatación del estómago.",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): omeprazol 20-40 mg/día, máximo 4 semanas; almagato 1-1,5 g entre 1 y 2 h después de cada comida y al acostarse, o a demanda (antes 1 g cada 8 h); medidas de la guía. La guía no recoge Primperan ni paracetamol en este problema: se conservan. Sigue pendiente (no lo trata la guía): para descartar pancreatitis se recomienda hoy la lipasa sérica, más sensible y específica que la amilasa (en orina o en plasma).",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Epigastralgia. Ulcus gastroduodenal", url: "https://guiaterapeutica.net/problemas/254/epigastralgia-ulcus-gastroduodenal" }
    ],
    texto: `
- Dieta blanda según tolerancia. Evitar café, alcohol, tabaco, los alimentos que le causen molestias y los AINE (salvo por indicación médica).
- Omeprazol 20-40 mg cada 24 h, máximo 4 semanas.
- Almax 500 mg (almagato): 1-1,5 g entre 1 y 2 h después de cada comida y al acostarse, o a demanda.
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
    etiquetas: "plantaben plantago fibra",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026, estreñimiento crónico funcional): primero medidas higienicodietéticas; si no hay mejoría, Plantago ovata 3,5-7 g (1-2 sobres) en ayunas por la mañana con 1-2 vasos de agua, con una dosis adicional opcional de 3,5 g por la noche (antes 1 sobre cada 12 h). Si es un estreñimiento agudo, la guía recomienda de elección supositorios de glicerina (otra entrada).",
    enlaces: [
      { titulo: "Estreñimiento crónico (CAMFiC)", url: "https://gestor.camfic.cat/Uploads/ITEM_441_EBLOG_1727.pdf" },
      { titulo: "Guía Terapéutica semFYC · Estreñimiento crónico funcional", url: "https://guiaterapeutica.net/problemas/258/estrenimiento-cronico-funcional" }
    ],
    texto: `
- Dieta rica en fibra (salvado de trigo, frutas como ciruelas o kiwis, legumbres y verduras), más líquidos y actividad física, y hábito deposicional regular.
- Si no hay mejoría: Plantaben (Plantago ovata) 1-2 sobres (3,5-7 g) en ayunas por la mañana con 1-2 vasos de agua; puede tomarse una dosis adicional de 3,5 g por la noche.
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
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026, vértigo periférico): dimenhidrinato 50 mg cada 4-6 h el menor tiempo posible (48-72 h), en lugar de la pauta descendente de 6 días; maniobra de Epley en el VPPB y rehabilitación vestibular. Pendiente de decidir: la guía cita como antiemético la metoclopramida 10 mg cada 8 h y no la domperidona (se conserva); la nota sugiere betahistina, a la que la guía atribuye una eficacia escasa y a veces contradictoria, y la guía no recomienda la sulpirida.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Vértigo periférico", url: "https://guiaterapeutica.net/problemas/59/vertigo-periferico" }
    ],
    texto: `
- Biodramina (dimenhidrinato) 50 mg cada 4-6 h vo o vía rectal, el menor tiempo posible (48-72 h).
- Motilium 10 mg cada 8 h si náuseas o vómitos.
- Si VPPB: maniobra de recolocación de Epley.
- Reposo en cama durante la crisis y, en cuanto se pueda, ejercicios de rehabilitación vestibular.
`
  },

  {
    id: "mg-cefalea",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Neurología",
    titulo: "Cefalea",
    etiquetas: "tensional acido acetilsalicilico paracetamol ibuprofeno diazepam",
    nota: "Signos de alarma: aparición súbita (sobre todo con el ejercicio); curso progresivo, con aumento de intensidad o frecuencia; cambio en las características de una cefalea habitual; signos de HTIC (alteración visual, empeora en decúbito, por la mañana o con Valsalva, náuseas); focalidad neurológica, alteración de la conducta o del nivel de consciencia; fiebre, meningismo o papiledema; inicio después de los 40 años sin cefalea previa; mala respuesta al tratamiento analgésico.",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026, cefalea tensional): analgésico de elección AAS 500 mg cada 6 h, paracetamol o ibuprofeno (antes naproxeno 500 mg cada 12 h durante 7 días). Pendiente de decidir: la guía no recoge el diazepam y desaconseja los relajantes musculares (no son eficaces y producen habituación); tampoco recoge el omeprazol. Se conservan.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Cefalea tensional", url: "https://guiaterapeutica.net/problemas/45/cefalea-tensional" }
    ],
    texto: `
1. Ácido acetilsalicílico 500 mg cada 6 h vo, o paracetamol 0,5-1 g cada 4-6 h vo (máx. 4 g/día; en ancianos o IR grave, máx. 3 g/día; en IH, máx. 2 g/día), o ibuprofeno 400-1.200 mg/día en 1-3 dosis vo.
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
    etiquetas: "bell facial prednisona corticoide ramsay hunt valaciclovir hidroxil",
    nota: "Valorar aciclovir si VHS.",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): tratamiento de elección prednisona 1 mg/kg/día durante 10 días, lo antes posible y con descenso gradual (sustituye al ibuprofeno 600 mg cada 8 h); Ramsay-Hunt: prednisona + valaciclovir 1 g cada 8 h durante 7 días; protección ocular según la guía. Pendiente de decidir: la guía no recoge el omeprazol ni el Hidroxil (se conservan).",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Parálisis facial", url: "https://guiaterapeutica.net/problemas/54/paralisis-facial" }
    ],
    texto: `
- Prednisona 1 mg/kg/día vo durante 10 días, iniciada lo antes posible; el descenso de la dosis ha de ser gradual (un tercio de la dosis cada 2 días).
- Si síndrome de Ramsay-Hunt: prednisona 1 mg/kg/día vo + valaciclovir 1 g cada 8 h durante 7 días vo.
- Omeprazol 20 mg cada 24 h durante 10 días (1-0-0).
- Hidroxil (vitaminas B1-B6-B12) cápsulas cada 8 h (1-1-1).
- Protección ocular: lágrimas artificiales por el día (cada 6 h), pomada lubricante por la noche, gafas de sol y cierre palpebral por la noche con gasas.
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
    etiquetas: "cetirizina polaramine dexclorfeniramina metilprednisolona prednisona corticoide angioedema",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026, urticaria aguda): antihistamínico de elección cetirizina 10 mg/día (antes ebastina 20 mg), mantenido 5-7 días (antes 14); casos graves: metilprednisolona 40-60 mg im o iv + dexclorfeniramina 5 mg im; urticaria grave con angioedema: antihistamínico 10-15 días + prednisona 0,5 mg/kg/día menos de 10 días con retirada progresiva (sustituye a las pautas de Urbason 12 días o Dacortin 9 días: la guía no recomienda corticoides más de 10 días). La guía no da la dosis oral de dexclorfeniramina en adultos: se conserva la de la plantilla.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Urticaria aguda", url: "https://guiaterapeutica.net/problemas/235/urticaria-aguda" }
    ],
    texto: `
- Cetirizina 10 mg cada 24 h (1-0-0) durante 5-7 días, aunque esté asintomático (si no cede, aumentar hasta 4 veces la dosis estándar), o
- Polaramine (dexclorfeniramina) 2 mg cada 8 h (1-1-1) durante 5-7 días, si se precisa un mayor efecto sedante.
- Casos graves (gran afectación cutánea, síntomas sistémicos o angioedema): metilprednisolona 40-60 mg im o iv (1 mg/kg) + dexclorfeniramina 5 mg im.
- Urticaria grave con angioedema: mantener el antihistamínico 10-15 días y añadir prednisona 0,5 mg/kg/día vo menos de 10 días, con retirada progresiva; reevaluar a las 2 semanas.
- Si compromiso de la vía aérea o cardiovascular: tratar como anafilaxia.
`
  },

  {
    id: "mg-anafilaxia",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Alergia",
    titulo: "Anafilaxia",
    etiquetas: "adrenalina shock anafilactico glucagon metilprednisolona dexclorfeniramina salbutamol",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): adrenalina 1/1.000 0,3-0,5 ml im en el muslo o sc, repetible cada 5-10 min (antes 0,5 mg cada 5-15 min), con metilprednisolona y dexclorfeniramina; broncoespasmo: salbutamol nebulizado; refractaria: dilución y perfusión de adrenalina de la guía (antes 1 mg en 100 ml a 0,5-1 ml/kg/h); glucagón 1-5 mg iv (antes 1-2 mg); observación 6-8 h y corticoide y antihistamínico vo al alta; en lugar del autoinyector de 0,15/0,3 mg, la medicación que la guía recomienda llevar encima. La guía no recoge la atropina ni las aminas: se conservan.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Anafilaxia", url: "https://guiaterapeutica.net/problemas/409/anafilaxia" }
    ],
    texto: `
- Adrenalina 1/1.000: 0,3-0,5 ml IM en el muslo, preferentemente, o SC; se puede repetir cada 5-10 min.
- Metilprednisolona 40-60 mg IM o IV (1 mg/kg) + dexclorfeniramina 5 mg IM.
- Dificultad respiratoria: vía aérea permeable y oxígeno a 6-8 l/min. Broncoespasmo grave: salbutamol nebulizado al 0,5 %, 0,5-1 ml con 2-3 ml de suero (si no se puede nebulizar, media o 1 ampolla SC).
- Hipotensión: elevar las EEII, vía de calibre grueso y suero salino isotónico IV lo antes posible.
Si refractaria:
- PAS < 60 mmHg o deterioro: diluir 0,5-1 mg de adrenalina 1/1.000 en suero salino hasta 10 ml e infundir lentamente hasta un máximo de 5 ml. Si no responde tras repetir dosis cada 5-10 min: perfusión IV de 1 mg de adrenalina 1/1.000 en 250 ml de suero salino a 15-60 microgotas/min.
- Glucagón si betabloqueantes: 1-5 mg IV en bolo administrado en 5 min, junto a la expansión de volumen.
- Atropina si bradicardia: 0,5-1 mg en bolo (hasta 3 mg).
- Aminas y UCI.
Tras estabilizar: observación 6-8 h y, al alta, corticoides y antihistamínicos vo un mínimo de 3-4 días y hasta 10 días.
Si reacciones anafilácticas graves repetidas: llevar consigo adrenalina 1/1.000 (0,3-0,5 ml IM), loratadina 1-2 comprimidos y prednisona 50 mg vo, para tomar en una sola toma y acudir a un centro hospitalario.
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
    etiquetas: "osteomuscular paracetamol diclofenaco naproxeno ibuprofeno diazepam enantyum relajante",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026, dolor osteomuscular agudo; la guía no tiene una entrada de dolor torácico mecánico): elección paracetamol o diclofenaco tópico; si no mejora, naproxeno o ibuprofeno (antes Enantyum: según la guía no consta que el dexketoprofeno sangre menos que el ibuprofeno); los relajantes musculares (ciclobenzaprina, metocarbamol) se sustituyen por diazepam 5-10 mg cada 12-24 h, fármaco de referencia de la guía si contractura, dificultad para dormir o ansiedad. La guía no recoge el omeprazol: se conserva.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Dolor osteomuscular agudo", url: "https://guiaterapeutica.net/problemas/448/dolor-osteomuscular-agudo" }
    ],
    texto: `
- Paracetamol 0,5-1 g cada 4-6 h vo (máx. 4 g/día; en ancianos o IR grave, máx. 3 g/día; en IH, máx. 2 g/día), o diclofenaco tópico, 1 aplicación cada 6-8 h.
- Si no mejora: naproxeno 500 mg cada 12-24 h vo, o ibuprofeno 400-1.200 mg/día en 1-3 tomas vo.
- Omeprazol 20 mg, 1-0-0 durante 5 días.
- Si contractura muscular, dificultad para dormir o ansiedad asociada: añadir diazepam 5-10 mg cada 12-24 h vo.
`
  },

  {
    id: "mg-contractura",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Aparato locomotor",
    titulo: "Contractura muscular",
    etiquetas: "relajante diazepam paracetamol diclofenaco naproxeno yurelax robaxin calor",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026, dolor osteomuscular agudo): paracetamol 0,5-1 g cada 4-6 h (antes 1 g cada 8 h) o diclofenaco tópico; si no mejora, naproxeno o ibuprofeno; para la contractura, diazepam 5-10 mg cada 12-24 h, fármaco de referencia de la guía, en lugar de ciclobenzaprina y metocarbamol (según la guía, las evidencias de los miorrelajantes son escasas); el calor local es más eficaz a partir de las 48-72 h.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Dolor osteomuscular agudo", url: "https://guiaterapeutica.net/problemas/448/dolor-osteomuscular-agudo" }
    ],
    texto: `
- Paracetamol 0,5-1 g cada 4-6 h vo (máx. 4 g/día; en ancianos o IR grave, máx. 3 g/día; en IH, máx. 2 g/día), o diclofenaco tópico, 1 aplicación cada 6-8 h.
- Contractura muscular (o dificultad para dormir o ansiedad asociada): añadir diazepam 5-10 mg cada 12-24 h vo.
- Si no mejora: naproxeno 500 mg cada 12-24 h vo, o ibuprofeno 400-1.200 mg/día en 1-3 tomas vo.
- Calor local, más eficaz a partir de las 48-72 primeras horas.
`
  },

  {
    id: "mg-lumbalgia",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Aparato locomotor",
    titulo: "Lumbalgia / dorsalgia",
    etiquetas: "naproxeno ibuprofeno tramadol paracetamol metamizol calor espalda",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026, lumbalgia simple y dorsalgia): lumbalgia: naproxeno 500 mg cada 12-24 h (antes 550 mg cada 12 h) o ibuprofeno; metamizol solo si no puede tomar AINE (antes alternado con el naproxeno); si dolor intenso o sin mejoría, asociar tramadol; reposo relativo no más de 2 días. Dorsalgia: paracetamol de elección. La guía no da dosis de metamizol en esta entrada: se conserva la de la plantilla.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Lumbalgia simple", url: "https://guiaterapeutica.net/problemas/321/lumbalgia-simple" },
      { titulo: "Guía Terapéutica semFYC · Dorsalgia", url: "https://guiaterapeutica.net/problemas/291/dorsalgia" }
    ],
    texto: `
- Reposo relativo no más de 2 días, manteniendo la actividad habitual. Evitar sobreesfuerzos, sobrecarga de pesos y/o movimientos bruscos. Higiene postural y estiramientos a partir de la 2.ª semana.
- Calor local 15-30 min cada 4-6 horas, durante 3 días o hasta mejoría del dolor.
- Lumbalgia: naproxeno 500 mg cada 12-24 h vo, o ibuprofeno 400-1.200 mg/día en 1-3 dosis vo, durante 5 días (a la menor dosis útil y durante el menor tiempo posible).
- Si no puede tomar AINE: metamizol 575 mg, 1 comprimido cada 8 horas, o paracetamol.
- Lumbalgia con dolor intenso o sin mejoría: asociar tramadol 50 mg/día (máx. 400 mg/día; en ancianos o IR crónica, 25 mg/día, máx. 300 mg/día).
- Dorsalgia: paracetamol 0,5-1 g cada 4-6 h vo (máx. 4 g/día; en ancianos o IR grave, máx. 3 g/día; en IH, máx. 2 g/día).
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
    etiquetas: "asma ventolin salbutamol terbutalina atrovent ipratropio prednisona pulmicort symbicort",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026, crisis asmática): salbutamol 600 µg (6 puffs) con cámara, repetible a los 20-30 min y a los 30-60 min (antes 3 inhalaciones cada 6 h); en la crisis moderada o grave, ipratropio 80-120 µg (4-6 puffs) (antes 4 inhalaciones cada 8 h) y prednisona 1 mg/kg/día vo en lugar de la pauta descendente de Dacortin (la guía no indica duración). Pendiente de decidir: la guía no incluye en la crisis corticoides inhalados (Pulmicort y Symbicort a la vez duplican el corticoide inhalado; el tratamiento de fondo está en «Asma bronquial») ni antibiótico (Augmentine); se conservan.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Asma. Crisis asmática", url: "https://guiaterapeutica.net/problemas/125/asma-crisis-asmatica" }
    ],
    texto: `
- Ventolín (salbutamol) 600 µg (6 puffs) con cámara espaciadora, o terbutalina 1.500 µg (3 puffs). Si no hay respuesta, repetir 4-6 puffs a los 20-30 min; a los 30-60 min se puede repetir una tercera dosis.
- Crisis moderada o grave: añadir Atrovent (bromuro de ipratropio) 80-120 µg (4-6 puffs) y prednisona 1 mg/kg/día vo (si la disnea impide la deglución, hay vómitos o ventilación mecánica: hidrocortisona 100-200 mg iv o metilprednisolona 1-2 mg/kg iv).
- Pulmicort 2 inhalaciones cada 8 horas.
- Symbicort (corticoide + broncodilatador) 2 inhalaciones cada 12 h.
- Augmentine 875/125 mg cada 8 h, 10 días.
- Tranquilizar al paciente; no utilizar fármacos sedantes. Si la crisis es grave y no mejora rápidamente, solicitar ambulancia medicalizada mientras se inicia el tratamiento.
`
  },

  {
    id: "mg-asma-urgencias",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Respiratorio",
    titulo: "Asma: manejo en urgencias (consulta)",
    etiquetas: "crisis asmatica peak flow salbutamol atrovent ipratropio prednisona hidrocortisona metilprednisolona magnesio actocortina urbason",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026, crisis asmática): crisis leve: salbutamol 600 µg (6 puffs) con cámara, repetible a los 20-30 min y a los 30-60 min, sin corticoide oral (la guía lo indica en la moderada o grave); moderada-grave: nebulización de salbutamol 5 mg (antes 2,5-7,5 mg) e ipratropio 0,5 mg en 3 ml de SF; prednisona 1 mg/kg/día vo (antes Urbason 40 mg o prednisona 50 mg) y, si no puede tomarla, hidrocortisona 100-200 mg iv (antes Actocortina 200-400 mg) o metilprednisolona 1-2 mg/kg iv (antes Urbason 40 mg y 20 mg cada 8 h). La guía no da la frecuencia de las nebulizaciones ni la duración del corticoide, ni recoge el oxígeno ni el sulfato de magnesio: se conservan los de la plantilla.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Asma. Crisis asmática", url: "https://guiaterapeutica.net/problemas/125/asma-crisis-asmatica" }
    ],
    texto: `
Valorar PEF/FEV1 ± GSA (si SatO2 ≤94 %). Peak flow: en boxes siempre, antes de las nebulizaciones.
Tranquilizar al paciente; no utilizar fármacos sedantes.

Leve (>70 %):
- Salbutamol 600 µg (6 puffs) con cámara espaciadora, o terbutalina 1.500 µg (3 puffs). Si no hay respuesta, repetir 4-6 puffs a los 20-30 min; a los 30-60 min se puede repetir una tercera dosis.

Moderada-grave (70-50 % o <50 %):
- GN o VMK.
- Hudson/NUSS: [salbutamol 5 mg + Atrovent 0,5 mg, cada uno diluido en 3 ml de SF; se pueden mezclar] cada 20 min durante la 1.ª hora; luego, cada 3-4 h.
- Corticoides: prednisona 1 mg/kg/día v.o. de 1.ª elección, durante 5-10 días, sin descenso. Si la disnea impide la deglución, hay vómitos o ventilación mecánica (previenen, pero no resuelven el broncoespasmo): hidrocortisona (Actocortina) 100-200 mg IV o metilprednisolona (Urbason) 1-2 mg/kg IV.
- Corticoides inhalados: budesonida nebulizada 0,5 mg (diluida en 3 ml de SF) cada 15 min durante la 1.ª hora; luego, en MDI 400 mcg cada 12 h, o 0,5 mg cada 12 h si nebulizada.
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
    etiquetas: "foster formodual symbicort prednisona urbason salbutamol",
    nota: "LABA (formoterol) + corticoide inhalado. También: Symbicort/Rilast, Duoresp/Biresp/Bufomix o Flutiform. Misma pauta siempre.",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): salbutamol de rescate con cámara espaciadora; corticoide oral: prednisona 1 mg/kg/día vo (antes Urbason 40 mg/día), conservando los 5-10 días de la plantilla (la guía no indica duración). Pendiente de decidir: la guía da las dosis por principio activo y no por inhalaciones de cada marca (asma moderada: beclometasona 100-200 µg/12 h + formoterol 4,5-9 µg/12 h; grave: 200-400 µg + 9-12 µg/12 h) y no recoge el omeprazol. Se conservan.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Asma bronquial", url: "https://guiaterapeutica.net/problemas/126/asma-bronquial" },
      { titulo: "Guía Terapéutica semFYC · Asma. Crisis asmática", url: "https://guiaterapeutica.net/problemas/125/asma-crisis-asmatica" }
    ],
    texto: `
1. Salbutamol (con cámara espaciadora) 2 inhalaciones, máximo cada 8 h, si precisa (rescate).
2. {{Inhalador|Foster Nexthaler|Formodual}} 2 inhalaciones cada 12 h hasta la próxima visita.
3. Prednisona 1 mg/kg/día vo durante 5-10 días.
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
    etiquetas: "FA anticoagulacion apixaban edoxaban acenocumarol amiodarona flecainida digoxina bisoprolol diltiazem CHA2DS2-VA",
    nota: "Referencia del documento: pág. 129 del manual HGTiP.",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026, FA: control de la FC y prevención de embolismos): escala CHA2DS2-VA (TAO si ≥ 2; sugerida si = 1) y ACOD (apixabán, edoxabán) como alternativa al acenocumarol en la FA no valvular; amiodarona oral 200 mg cada 8 h durante 8-10 días y luego 100-200 mg/día (antes 1 semana y 200 mg/día); flecainida solo con FE normal y sin cardiopatía estructural o isquémica; digoxina de mantenimiento 0,125-0,25 mg/día (antes 0,25); betabloqueante de elección bisoprolol (propranolol 80-240 mg/día solo si hipertiroidismo; antes propranolol hasta 40 mg cada 8 h); diltiazem oral 120-240 mg/día (antes 60-90 mg cada 8 h o 120 mg cada 12 h); FC objetivo < 110 lpm; TAO alrededor de la cardioversión. Pendiente de decidir (la guía no da pautas IV ni de terapia puente): amiodarona, digoxina y diltiazem IV, y Clexane + Sintrom al inicio; sigue pendiente indicar una dosis máxima acumulada en la impregnación con digoxina.",
    enlaces: [
      { titulo: "Manejo de la FA en urgencias (SEC y SEMES)", url: "https://secardiologia.es/images/stories/file/arritmias/publicaciones-arritmias-manejo-paciente-fibrilacion-auricular-fa-urgencias.pdf" },
      { titulo: "Calculadora CHA2DS2-VASc (SAMIUC)", url: "http://www.samiuc.es/index.php/calculadores-medicos/calculadores-cardiovasculares/chads2-vasc-score.html" },
      { titulo: "Guía Terapéutica semFYC · FA: control de la frecuencia o reversión", url: "https://guiaterapeutica.net/problemas/411/fibrilacion-auricular-control-de-la-frecuencia-cardiaca-o-reversion-a-ritmo-sinusal" },
      { titulo: "Guía Terapéutica semFYC · FA: prevención de embolismos", url: "https://guiaterapeutica.net/problemas/412/fibrilacion-auricular-prevencion-de-embolismos" }
    ],
    texto: `
- Anticoagulación (calcular CHA2DS2-VA: TAO indicado si ≥ 2 y sugerido si = 1; no si < 65 años sin factores de riesgo, CHA2DS2-VA = 0): iniciar Clexane 60 mg cada 12 h (o Clexane 100 mg cada 24 h) + 1/2 comprimido de Sintrom 4 mg cada 24 h, con control al 3.er día para la pauta de Sintrom. En la FA no valvular, alternativas: apixabán 5 mg cada 12 h (2,5 mg cada 12 h si 2 de estos 3: creatinina ≥ 1,5 mg/dl, edad ≥ 80 años, peso ≤ 60 kg) o edoxabán 60 mg/día (30 mg/día si peso ≤ 60 kg o tratamiento con inhibidores potentes de la glicoproteína P); contraindicados si FG < 15 ml/min.
- Amiodarona: dosis de carga de 300 mg (2 ampollas) en 30 min. Mantenimiento: 7-8 ampollas en 250 cc de SG durante 24 h. Iniciar a la vez la vía oral (200 mg cada 8 h durante 8-10 días; después, la dosis más baja posible, 100-200 mg/día) para conseguir impregnación y poder suspender la PIV lo antes posible. Pasadas 24 h, plantear CVE si no hay RS. Tras CVE/CVF, valorar tratamiento antiarrítmico crónico.
- Flecainida (solo si FE normal y sin cardiopatía estructural o isquémica): dosis de carga de 300 mg v.o. Mantenimiento: 50-100 mg cada 12 h v.o.
- Digoxina: 2 ampollas (0,5 mg) en bolo, luego 0,25 mg cada 2 h hasta control de la FC. Mantenimiento: 0,125-0,25 mg/24 h v.o.
- Betabloqueantes: bisoprolol 1,25 mg/día v.o., aumentando según tolerancia hasta 10 mg/día. Si hipertiroidismo: propranolol 80-240 mg/día v.o. en 3 tomas.
- Diltiazem (no si disfunción sistólica de VI ni WPW): dosis inicial de 0,25 mg/kg en 2-3 min IV, luego BIC a 5-15 mg/h IV. Mantenimiento: 120-240 mg/día v.o.
Objetivo inicial: FC < 110 lpm en reposo.
Los pacientes sin cardiopatía estructural con un 1.er episodio de FA no necesitan antiarrítmicos al alta.
Si se considera necesaria la reversión a ritmo sinusal en una FA de más de 48 h o de duración indeterminada: TAO al menos 3 semanas antes y mínimo 1 mes después de la cardioversión, salvo que un ecocardiograma transesofágico descarte trombos en la aurícula izquierda (cardioversión precoz, administrando heparina previamente). Si la FA se inició hace menos de 48 h, no precisa TAO previo.
`
  },

  {
    id: "mg-taquicardias",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Cardiovascular",
    titulo: "Taquicardias: TPSV / flutter (adenosina)",
    etiquetas: "TPSV taquicardia supraventricular adenosina verapamilo maniobras vagales flutter cardioversion",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026, taquicardia paroxística y flúter auricular): primero maniobras vagales si es bien tolerada; adenosina en bolo rápido de 6 mg y, si no es eficaz, 12 mg cada 1-2 min hasta efectividad (máx. 3 bolos; antes un solo bolo de 12 mg); en asmáticos, atópicos o recurrencia tras adenosina, verapamilo 5 mg IV lento; cardioversión eléctrica si no responde y hay mala tolerancia. Flúter: la adenosina solo enlentece transitoriamente la arritmia y la primera elección es la cardioversión eléctrica.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Taquicardia paroxística", url: "https://guiaterapeutica.net/problemas/157/taquicardia-paroxistica" },
      { titulo: "Guía Terapéutica semFYC · Flúter auricular", url: "https://guiaterapeutica.net/problemas/148/fluter-auricular" }
    ],
    texto: `
Taquicardia bien tolerada y con estabilidad hemodinámica: maniobras vagales (Valsalva, tos continua, estimulación de náuseas, masaje unilateral del seno carotídeo con monitor ECG, vía venosa y atropina preparada).
Adenosina (si fracasan las maniobras vagales o en taquicardias con QRS estrecho mal toleradas): bolo rápido inicial de 6 mg IV (1 ampolla). Si no es eficaz, repetir bolos de 12 mg cada 1-2 min hasta efectividad (máx. 3 bolos). Contraindicada en asmáticos y en pacientes tratados con teofilina (antagoniza su efecto); el dipiridamol potencia su efecto. Es muy frecuente la bradicardia sinusal o el BAV transitorio, así como una sensación intensa de calor o náuseas.
QRS estrecho en asmáticos, atópicos o recurrencia después de adenosina: verapamilo 5 mg IV en bolo lento (2-3 min) y repetir 3 bolos (máx. cada 30 min).
Si no responde al tratamiento farmacológico y hay mala tolerancia: cardioversión eléctrica (100, 200, 360 J).
Flúter: la adenosina solo enlentece transitoriamente la arritmia (permite ver la actividad auricular y hacer el diagnóstico). Tratamiento de primera elección: cardioversión eléctrica escalonada (20-50-100-200-360 J).
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
    etiquetas: "sindrome coronario agudo infarto IAM AAS clopidogrel heparina nitroglicerina",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026, sospecha de síndrome coronario agudo): AAS 250 mg masticado (antes 300 mg); carga de clopidogrel según la guía (SCACEST < 75 años: 300 mg antes de fibrinólisis y 600 mg antes de ICP primaria; SCASEST < 75 años: 300 mg; > 75 años: 75 mg); nitroglicerina sublingual de elección y NTG IV a 5 ml/h (antes 4-6 ml/h hasta 10 ml/h) si el dolor no cede; oxígeno si SatO2 < 90 %. Sigue pendiente (la guía solo indica anticoagular en la urgencia hospitalaria, sin dosis): tal como está escrito parece combinar enoxaparina (Clexane) con heparina sódica en perfusión, y no deben asociarse; aclarar que son alternativas.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Sospecha de síndrome coronario agudo", url: "https://guiaterapeutica.net/problemas/142/cardiopatia-isquemica-sospecha-de-sindrome-coronario-agudo" }
    ],
    texto: `
- AAS 250 mg vo (masticado) + clopidogrel: SCACEST en < 75 años, 300 mg antes de fibrinólisis y 600 mg antes de ICP primaria; SCASEST en < 75 años, 300 mg; en > 75 años, 75 mg. No dar la carga del 2.º antiagregante si ya tomaba doble antiagregación, DM o IAM extenso. Alergia a AAS: clopidogrel 300-600 mg.
- Nitroglicerina sublingual 0,4-0,8 mg (1-2 puffs) o 0,8-1 mg vo (1 comprimido), repetible hasta 4 veces cada 5-10 min (no si PAS < 90 mmHg, FC < 50 o > 100 lpm, IAM de VD o inhibidores de la fosfodiesterasa-5 en las 24 h previas).
- Oxígeno a 3-4 l/min (gafas nasales) o al 35-40 % (mascarilla) si SatO2 < 90 %.
- Clexane 100 mg (o bolo de 5.000 UI) + BIC de heparina sódica 24.000 UI/24 h a 10 ml/h.
- Si el dolor no cede con NTG sublingual: BIC de NTG [2] (50 mg en 250 ml de SG 5 %) a 5 ml/h, según TA.
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
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026, hiponatremia): límite de corrección (nunca más de 10 mEq/l en las primeras 24 h y máximo 8 mEq/l en los días siguientes), restricción hídrica de 800-1.500 ml/día y retirada de los fármacos que favorecen la hiponatremia. La guía es de manejo ambulatorio (deriva a urgencias hospitalarias si Na < 125 mmol/l o síntomas graves) y no recoge el suero hipertónico, los sellos de sal ni el tolvaptán: se conservan.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Hiponatremia", url: "https://guiaterapeutica.net/problemas/443/hiponatremia" }
    ],
    texto: `
Nunca corregir más de 10 mEq/l en las primeras 24 h y máximo 8 mEq/l en los días siguientes.
SIADH (osmolalidad baja, VEC normal: sin edemas ni deshidratación):
- Tratar la causa (suspender los fármacos que la favorecen: diuréticos tiazídicos, antidepresivos, antiepilépticos, desmopresina). Restricción hídrica (800-1.500 ml/día) ± sellos de sal ± suero hipertónico (control de AG cada hora).
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
    etiquetas: "hipokaliemia potasio cloruro potasico boi-k",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): en la hipopotasemia moderada, potasio 20-80 mEq/día en varias tomas con alimentos (antes 25 mEq en una toma); en la leve suelen bastar los alimentos ricos en potasio; la grave (< 2,5 mEq/l) o con síntomas graves se deriva a urgencias hospitalarias; tratar la causa y corregir el magnesio. La guía prefiere el cloruro potásico; Boi-K y la duración de 14 días no figuran en ella y se conservan.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Hipopotasemia", url: "https://guiaterapeutica.net/problemas/442/hipopotasemia" }
    ],
    texto: `
- Hipopotasemia leve (3,0-3,5 mEq/l): suele bastar con alimentos ricos en potasio (plátano, naranja, kiwi, tomate, espinacas, frutos secos, zumos de frutas).
- Moderada (2,5-3,0 mEq/l): potasio 20-80 mEq/día repartido en varias tomas, con alimentos (Boi-K 25 mEq; la guía prefiere el cloruro potásico: potasio 600 mg = 8 mEq), durante 14 días y control clínico.
- Grave (< 2,5 mEq/l) o síntomas graves (arritmias, debilidad muscular, alteraciones del ECG): derivar a urgencias hospitalarias.
- Tratar la causa; si hay hipomagnesemia, corregir a la vez el magnesio.
`
  },

  {
    id: "mg-tirotoxicosis",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Endocrino y metabolismo",
    titulo: "Tirotoxicosis",
    etiquetas: "hipertiroidismo tiroides metimazol tiamazol propranolol",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026, hipertiroidismo y tiroiditis subaguda): propranolol oral 20-40 mg cada 8 h durante 2-3 semanas; metimazol con dosis inicial según gravedad (15, 30-40 o 60 mg/día en 3 tomas durante 4-6 semanas) y control del hemograma; la tiroiditis subaguda se trata con AAS 0,5-1 g cada 6-8 h (antes ibuprofeno). Pendiente de decidir: la guía no recoge el propranolol IV, la Actocortina IV ni el aviso de evitar AINE (que choca con el AAS de la tiroiditis); se conservan.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Hipertiroidismo", url: "https://guiaterapeutica.net/problemas/172/tiroides-hipertiroidismo" },
      { titulo: "Guía Terapéutica semFYC · Tiroiditis subaguda", url: "https://guiaterapeutica.net/problemas/175/tiroides-tiroiditis-subaguda-de-de-quervain" }
    ],
    texto: `
- Explorar bocio. Solicitar TSH y T4. Diagnóstico diferencial con la tiroiditis subaguda (tratamiento: ácido acetilsalicílico 0,5-1 g cada 6-8 h durante 2-3 semanas vo; si no hay mejoría en 3-5 días, prednisona 40-60 mg/día durante 7-10 días vo, con descenso gradual durante 4-6 semanas).
- Evitar AINE.
- Propranolol IV, o 20-40 mg cada 8 h v.o. durante 2-3 semanas, hasta normalizar la FC (alivia los síntomas hasta que actúa el antitiroideo).
- Metimazol (Thyrozol): su efecto tarda 24 h. Dosis inicial: 15 mg/día si hipertiroidismo leve, 30-40 mg/día si moderado y 60 mg/día si severo, en 3 tomas, durante 4-6 semanas v.o. Controlar el hemograma (riesgo de agranulocitosis).
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
    etiquetas: "cirrosis lactitol lactulosa rifaximina flapping",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): se añaden la corrección del factor desencadenante y la restricción proteica (40-70 g/día), que son el tratamiento de elección; evitar fármacos depresores del SNC, sobre todo BZD (haloperidol si agitación grave); rifaximina para reducir las recurrencias y profilaxis secundaria con lactulosa (2-3 deposiciones al día) tras un primer episodio. La guía no da dosis de lactitol ni recoge la SNG ni el SG: se conserva la pauta de la plantilla.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Encefalopatía hepática", url: "https://guiaterapeutica.net/problemas/252/encefalopatia-hepatica" }
    ],
    texto: `
Grados: I, alteración del grado de vigilia, somnolencia; II, flapping; III, estupor; IV, coma.
Etiología: 80 %, hemorragia digestiva, infecciones, diuréticos; 20 %, estreñimiento, antihistamínicos, BZD, hiper/hipoglucemia. Diagnóstico clínico (TC craneal si focalidad).
- Corregir el factor desencadenante (HDA, dieta rica en proteínas, estreñimiento, infecciones, fármacos, IR, hipopotasemia, hipoglucemia). Restricción proteica (40-70 g/día).
- Suspender diuréticos.
- SNG si grado III o IV.
- SG.
- Laxantes (lactulosa o lactitol): grados I-II: 1 sobre de lactitol cada 8 h v.o. + 5 sobres de lactitol cada 8 h por vía rectal. Grados III-IV: 20 sobres en 1 l de agua + balón rectal.
- Evitar los fármacos depresores del SNC, especialmente las BZD. Si agitación grave: haloperidol.
- Para reducir las recurrencias: rifaximina 400 mg cada 8 h o 550 mg cada 12 h. Tras un primer episodio manifiesto, profilaxis secundaria con lactulosa ajustada a 2-3 deposiciones al día.
`
  },

  {
    id: "mg-descompensacion-ascitica",
    categoria: "general",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Hepatología",
    titulo: "Descompensación ascítica (DAE)",
    etiquetas: "cirrosis ascitis paracentesis diureticos espironolactona furosemida",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026, ascitis): se concreta el aumento de diuréticos (espironolactona 25-100 mg/día, máx. 400 mg/día; si no hay mejoría o ascitis moderada, asociar furosemida 20-120 mg/día en 2-3 tomas, máx. 160 mg/día), el peso diario con la pérdida máxima de peso, la restricción de sodio y evitar AINE, IECA y ARA II.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Ascitis", url: "https://guiaterapeutica.net/problemas/242/ascitis" }
    ],
    texto: `
- Aumentar diuréticos: espironolactona 25-100 mg/día v.o. (máx. 400 mg/día); si no hay mejoría (o ascitis moderada), asociar furosemida 20-120 mg/día en 2-3 tomas v.o. (máx. 160 mg/día). Control en hospital de día al día siguiente.
- Pesarse a diario: pérdida máxima de 0,5 kg/día si no hay edemas y de 1 kg/día si hay edemas. Restricción de sodio. Ajustar, suspender o evitar AINE, IECA y ARA II.
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
    etiquetas: "paliativos morfina midazolam buscapina butilescopolamina levopromazina haloperidol fentanilo infusor",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026, paciente al final de la vida): se añaden los requisitos (síntoma refractario, información y consentimiento), la inducción con midazolam (2,5-5 mg sc en bolo, o 5-10 mg si ya tomaba benzodiazepinas, repetible cada 15-30 min), la levopromazina 25-75 mg/día sc si hay mala respuesta al midazolam y que la morfina no es un sedante. Pendiente de decidir (la guía no da pautas de infusor de 12 h): midazolam en infusión continua 30-120 mg/24 h (máx. 150-200 mg/día; dosis inicial en infusor 0,4-0,8 mg/h, o 1-2 mg/h si ya tomaba benzodiazepinas); butilescopolamina para los estertores 10-20 mg cada 6 h sc; haloperidol 0,5-5 mg cada 2-12 h; el fentanilo no figura en la guía. Sigue pendiente: el fentanilo va en microgramos (cada ampolla tiene 150 mcg); revisad que la dosis de 24 h sea la deseada.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Paciente al final de la vida", url: "https://guiaterapeutica.net/problemas/415/paciente-al-final-de-la-vida" }
    ],
    texto: `
Antes: asegurar que el síntoma es refractario a los tratamientos disponibles, informar al paciente y a la familia y solicitar el consentimiento.
Inducción: midazolam 2,5-5 mg sc en bolo (5-10 mg si ya tomaba benzodiazepinas); si no responde, repetir la misma dosis cada 15-30 min hasta lograr la sedación.
SF 250 ml cada 12 h y asociar:
- Morfina 10-30 mg (o fentanilo 600-750 mcg).
- Midazolam 5-20 mg.
- Buscapina 20-60 mg.
En urgencias se pauta igual, pero en BIC (velocidad 11-12).
Rescates: morfina 2,5 mg IV, midazolam 5 mg IV, Buscapina 20 mg IV, haloperidol 5 mg si agitación.
Rescates con fentanilo: fentanilo 300 mcg (2 ampollas) + midazolam 5 mg.
Si mala respuesta al midazolam: asociar levopromazina 25-75 mg/día sc.
La morfina no es un sedante sino un analgésico: para la sedación deben usarse fármacos con perfil sedante (midazolam, haloperidol).
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
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): la dosis de morfina oral pasa a mg, como en la guía (antes Oramorph 2-4 gotas como máximo cada 4 h; la guía no da la equivalencia en gotas). Disnea o tos intensa sin dolor: inicialmente 2,5-5 mg cada 4 h (máx. 15-20 mg cada 4 h). Dolor: inicialmente 5-10 mg cada 4 h (ancianos, 2,5-5 mg). Formas retard solo con el dolor controlado más de 3 días; rescates de una sexta parte de la dosis diaria. Tramadol 50 mg/día, máx. 400 mg/día; ancianos o IR crónica, 25 mg/día, máx. 300 mg/día (antes 50-100 mg y después 50 o 100 mg cada 6-8 h). A decidir: la guía solo da la conversión a la vía subcutánea (la mitad de la dosis oral), no la de la IV; se conserva «dosis x 2». Tampoco recoge el parche de lidocaína (Versatis); se conserva.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Dolor crónico nociceptivo y neuropático", url: "https://guiaterapeutica.net/problemas/1/dolor-cronico-nociceptivo-y-neuropatico" },
      { titulo: "Guía Terapéutica semFYC · Paciente al final de la vida", url: "https://guiaterapeutica.net/problemas/415/paciente-al-final-de-la-vida" }
    ],
    texto: `
- Morfina oral (Oramorph 20 mg/ml):
  - Disnea o tos intensa (sin dolor): inicialmente 2,5-5 mg cada 4 h vo (máx. 15-20 mg cada 4 h).
  - Dolor: inicialmente 5-10 mg cada 4 h vo (ancianos: 2,5-5 mg cada 4 h).
  - Doblar la dosis si tomaba opiáceos menores. No asociar morfina con opiáceos menores.
- MST Continus 5/10/30/60 mg cada 12 h vo, con la dosis en función del dolor y de las dosis de rescate. Las formas retard se reservan para cuando el dolor está controlado más de 3 días, y no pueden masticarse ni machacarse (peligro de sobredosis por absorción rápida). Si venimos de morfina IV, al pasar a vía oral: dosis x 2 (la dosis subcutánea es la mitad de la oral).
- Rescates: una sexta parte de la dosis total diaria. Si precisa más de 4 rescates en 24 h, ajustar la dosis base. En Atención Primaria se aconseja no superar los 100 mg/día de morfina.
- Tramadol VIR 100 mg/ml (50 mg equivalen a 20 gotas o 0,50 ml): 50 mg/día, sin sobrepasar 400 mg/día (160 gotas). En ancianos o IR crónica, 25 mg/día (máx. 300 mg/día). En mayores de 75 años, ajustar la dosis. Tomar con un vaso de agua.
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
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): dolor del SCA que no cede con nitroglicerina sublingual, 2-5 mg en bolo IV lento cada 5-10 min hasta que desaparezca el dolor, máx. 20 mg (antes 4 mg y dosis crecientes de 3 mg hasta 15 mg). La guía propone antes la nitroglicerina IV y reserva la morfina para el dolor muy intenso e intratable. Fallo ventricular izquierdo: 3 mg en bolo IV lento con furosemida 20-40 mg IV (antes 2-3 mg si EAP). Se añaden la meperidina para el dolor con hipotensión o bradicardia y la naloxona. La guía no recoge la BIC; se conserva.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Cardiopatía isquémica. Sospecha de síndrome coronario agudo", url: "https://guiaterapeutica.net/problemas/142/cardiopatia-isquemica-sospecha-de-sindrome-coronario-agudo" }
    ],
    texto: `
Morfina 10 mg/ml (1 %): 1 ampolla en 9 ml de SF. IV lenta (4-5 min).
Dolor asociado a infarto que no cede con nitroglicerina sublingual: 2-5 mg en bolo IV lento cada 5-10 min hasta que desaparezca el dolor (máx. 20 mg). Antes, nitroglicerina IV: reservar la morfina para el dolor muy intenso e intratable, porque aumenta la mortalidad al interferir en la acción de los antiagregantes.
Fallo ventricular izquierdo (EAP): 3 mg en bolo IV lento, con furosemida 20-40 mg IV.
Dolor persistente con hipotensión (PAS < 90 mmHg) y/o bradicardia: meperidina 25 mg cada 5-10 min en bolo IV lento hasta que ceda el dolor (máx. 100 mg).
Sobredosis de morfina: naloxona 1 ampolla de 0,4 mg IV lenta (sin diluir).
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
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): intoxicación por benzodiacepinas, 0,2 mg IV en 1-2 min; esperar 5-10 min y, si no responde, 0,3 y 0,5 mg IV cada 1-2 min hasta el efecto deseado (antes 0,3-1 mg, repetible hasta 2 mg). Se retira su uso en la inconsciencia de origen desconocido: la guía no lo recomienda en la intoxicación por agente desconocido ni como parte del «cóctel de coma». Se añaden las situaciones en que no debe darse y la dosis pediátrica. A decidir: la pauta de UCI (0,3-1 mg, máx. 2 mg) y la perfusión de 0,1-0,4 mg/h no figuran en la guía; se conservan.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Intoxicación aguda por medicamento conocido", url: "https://guiaterapeutica.net/problemas/427/intoxicacion-aguda-por-medicamento-conocido" },
      { titulo: "Guía Terapéutica semFYC · Intoxicación aguda por agente desconocido y con alteración de la consciencia", url: "https://guiaterapeutica.net/problemas/311/intoxicacion-aguda-por-agente-desconocido-y-con-alteracion-de-la-consciencia" }
    ],
    texto: `
- Intoxicación por benzodiacepinas: dosis inicial de 0,2 mg IV (en 1-2 min). Esperar 5-10 min. Si no hay respuesta, las dosis siguientes serán de 0,3 y 0,5 mg IV, cada 1-2 min hasta lograr el efecto deseado.
- Si toma benzodiacepinas de forma crónica o tiene antecedentes de trastorno convulsivo, evitarlo, por la posibilidad de precipitar un síndrome de abstinencia. Algunos expertos aconsejan una dosis inicial de 0,1 mg IV y seguir con 0,2, 0,3 y 0,5 mg IV a intervalos de 10-15 min.
- No se recomienda en la intoxicación por agente desconocido. No administrarlo de forma rutinaria como parte del «cóctel de coma» en la obnubilación indiferenciada, ni si hay una convulsión presenciada o sospechada, si se sospecha la ingesta conjunta de proconvulsivos (p. ej., antidepresivos tricíclicos o bupropión), si toma una benzodiacepina por un trastorno convulsivo o en la sobredosis iatrogénica por el tratamiento del estado epiléptico.
- Niños pequeños con sedación profunda tras la ingesta accidental de una benzodiacepina: 0,01 mg/kg IV lenta en 1-2 min (máx. 0,2 mg). Repetir a intervalos de 1 min (o más), hasta cuatro dosis de 0,005-0,01 mg/kg (máx. 0,2 mg por dosis) o hasta lograr el efecto deseado. Dosis total máxima: 1 mg o 0,05 mg/kg.
- En UCI: dosis inicial de 0,3-1 mg. Si pasados 60 segundos no se ha obtenido el grado de conciencia deseado, puede repetirse la dosis hasta que el paciente se despierte, sin sobrepasar una dosis total de 2 mg.
- Si reaparece la somnolencia, puede administrarse en bolo IV o en infusión IV de 0,1-0,4 mg/h. La velocidad de infusión debe ajustarse individualmente según el grado de conciencia deseado.
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
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): el tratamiento de elección son las medidas no farmacológicas, tratar la causa y retirar los fármacos que causan anorexia. Acetato de megestrol solo si hay cáncer o sida con expectativa de vida corta, pero superior a 1 mes: iniciar con 160 mg/día y aumentar según la respuesta, 320-800 mg/día en 2-3 tomas (antes Borea 1 comprimido cada 8 h, sin indicación). La guía advierte del mayor riesgo de tromboembolismo (criterios de Beers) y de retención de líquidos. Con expectativa inferior a 1 mes, dexametasona 2-4 mg/día. Sustituye a la observación anterior sobre la indicación.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Anorexia (como síntoma)", url: "https://guiaterapeutica.net/problemas/160/anorexia-como-sintoma" },
      { titulo: "Guía Terapéutica semFYC · Paciente al final de la vida", url: "https://guiaterapeutica.net/problemas/415/paciente-al-final-de-la-vida" }
    ],
    texto: `
- Comidas frecuentes, en pequeñas cantidades, líquidas o semilíquidas, frías, de alto contenido calórico y proteico. Evitar los malos olores o los olores fuertes. Comer en compañía, con comida bien preparada, variada y condimentada.
- Tratar la causa y retirar, si es posible, los fármacos que causan anorexia (teofilina, AINE, amiodarona, laxantes, clorpromazina...).
- Solo si hay cáncer o sida con expectativa de vida corta, pero superior a 1 mes: acetato de megestrol (Borea), iniciar con 160 mg/día y aumentar según la respuesta (320-800 mg/día en 2-3 tomas, vo). Su efecto se aprecia a partir de las 2 semanas. Aumenta el riesgo de tromboembolismo y de retención de líquidos.
- Si la expectativa de vida es inferior a 1 mes: dexametasona 2-4 mg/día en 1-2 tomas vo. Evitar más de 1 mes y retirarla de forma gradual.
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
