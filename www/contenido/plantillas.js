/* =====================================================================
   PLANTILLAS
   Conservadas de la versión 1.1.0: exploraciones de adultos,
   exploraciones de pediatría y exploraciones de traumatología.
   Tratamientos al alta de adultos: nuevos, a partir de la Guía
   Terapéutica semFYC (noviembre de 2026). El resto se diseñará de cero.

   Cada plantilla es un bloque { ... }:
     id        : identificador fijo y único
     categoria : "adultos" | "pediatria" | "traumatologia"
     tipo      : "exploracion" | "tratamiento"
     ambito    : solo en adultos: ["familia"], ["urgencias"] o ambos
     grupo     : (opcional) sección de la lista
     titulo    : nombre visible
     etiquetas : (opcional) palabras extra para la búsqueda
     nota      : (opcional) indicaciones; se ve, pero NO se copia
     enlaces   : (opcional) [{ titulo: "...", url: "https://..." }]
     revisar   : (opcional) observación pendiente de validar
     texto     : contenido en castellano, entre comillas invertidas
     texto_ca  : (opcional) el mismo contenido en catalán

   Campos rellenables dentro del texto:
     {{TA}}                        campo libre; vacío se copia como ___
     {{FC=80}}                     campo libre con valor por defecto
     {{Ojo|OD|OI|AO}}              desplegable; sin elegir se copia OD/OI/AO
     {{Lado|*derecho|izquierdo}}   desplegable con valor por defecto
   ===================================================================== */

window.CONTENIDO = window.CONTENIDO || {};

window.CONTENIDO.plantillasConfig = {
  categorias: [
    { id: "adultos", nombre: "Adultos" },
    { id: "pediatria", nombre: "Pediatría" },
    { id: "traumatologia", nombre: "Traumatología" }
  ],
  ambitos: [
    { id: "familia", nombre: "Familia" },
    { id: "urgencias", nombre: "Urgencias" }
  ],
  tipos: [
    { id: "exploracion", nombre: "Exploraciones" },
    { id: "tratamiento", nombre: "Tratamientos" }
  ]
};

window.CONTENIDO.plantillas = [

  /* ───────────── ADULTOS · EXPLORACIONES ───────────── */

  {
    id: "mg-ef-hombre",
    categoria: "adultos",
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
    categoria: "adultos",
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
    categoria: "adultos",
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
    categoria: "adultos",
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
    categoria: "adultos",
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
    categoria: "adultos",
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
    id: "mg-pc-analitica",
    categoria: "adultos",
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
    categoria: "adultos",
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
    categoria: "adultos",
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
    categoria: "adultos",
    tipo: "exploracion",
    ambito: ["familia", "urgencias"],
    grupo: "Pruebas complementarias",
    titulo: "ECG normal",
    etiquetas: "electrocardiograma ritmo sinusal QTc",
    enlaces: [{"titulo":"Calculadora de QT corregido","url":"https://www.my-ekg.com/formulas-calculos-ekg/calculadora-qt-corregido.php"}],
    texto: `
ECG: RS a {{FC}} lpm, aQRS {{Eje}}º, PR 120-200 ms constante, QRS <120 ms, correcta progresión de R en precordiales. Sin alteraciones agudas de la repolarización. QTc {{QTc}} ms.
`
  },

  {
    id: "mg-pc-ecg-lectura",
    categoria: "adultos",
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
    categoria: "adultos",
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
    categoria: "adultos",
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
    categoria: "adultos",
    tipo: "exploracion",
    ambito: ["urgencias"],
    grupo: "Pruebas complementarias",
    titulo: "TC craneal normal",
    etiquetas: "TAC scanner cerebral",
    texto: `
TC craneal (comentado verbalmente con el servicio de radiología): no se observan signos de isquemia aguda, hemorragia activa ni lesiones ocupantes de espacio.
`
  },

  /* ───────────── PEDIATRIA · EXPLORACIONES ───────────── */

  {
    id: "pe-ant-personales",
    categoria: "pediatria",
    tipo: "exploracion",
    grupo: "Antecedentes",
    titulo: "Antecedentes personales",
    etiquetas: "AP alergias vacunas calendario vacunal",
    texto: `
- No alergias medicamentosas conocidas.
- No antecedentes médico-quirúrgicos de interés.
- Vacunas correctas para la edad según calendario vacunal.
- Va {{Escolarización|*al colegio|a la guardería}}.
- No antecedentes epidemiológicos de interés.
`,
    texto_ca: `
- No al·lèrgies medicamentoses conegudes.
- No antecedents mèdico-quirúrgics d’interès.
- Vacunes correctes per a l’edat i calendari vacunal.
- Va {{Escolarización|*a l’escola|a l’escola bressol}}.
- No antecedents epidemiològics d’interès.
`
  },

  {
    id: "pe-ant-perinatales",
    categoria: "pediatria",
    tipo: "exploracion",
    grupo: "Antecedentes",
    titulo: "Antecedentes perinatales",
    etiquetas: "perinatologicos parto apgar lactancia gestacion",
    texto: `
Parto {{Tipo de parto|*eutócico|instrumentado|por cesárea}} a las {{SG}} SG. Gestación bien controlada. Serologías VIH, VHB, lúes y toxoplasma negativas. Cultivo materno para S. agalactiae negativo. Apgar {{Apgar}}. Peso al nacer {{Peso al nacer}} g. Talla {{Talla}} cm. PC {{PC}} cm. Peso al alta {{Peso al alta}} g. Lactancia {{Lactancia|*materna|artificial|mixta}}.
`,
    texto_ca: `
Part {{Tipo de parto|*eutòcic|instrumentat|per cesària}} a les {{SG}} SG. Gestació ben controlada. Serologies VIH, VHB, lues i toxoplasma negatives. Cultiu matern per a S. agalactiae negatiu. Apgar {{Apgar}}. Pes al naixement {{Peso al nacer}} g. Talla {{Talla}} cm. PC {{PC}} cm. Pes a l’alta {{Peso al alta}} g. Alletament {{Lactancia|*matern|artificial|mixt}}.
`
  },


  {
    id: "pe-ef-nina-pequena",
    categoria: "pediatria",
    tipo: "exploracion",
    grupo: "Exploración física",
    titulo: "EF niña pequeña (TEP estable)",
    etiquetas: "exploracion fisica normal lactante triangulo evaluacion pediatrica fontanela",
    texto: `
TRIÁNGULO DE EVALUACIÓN PEDIÁTRICA: ESTABLE
Buen estado general, buena coloración e hidratación. No exantemas ni petequias.
Respiratorio: eupneica. No distrés respiratorio. AR: buena entrada de aire bilateral, no ruidos patológicos.
Cardiovascular: buena perfusión periférica, pulsos presentes y simétricos. Relleno capilar menor de 2 segundos. AC: tonos rítmicos, no soplos.
Abdomen: inspección normal, blando, indoloro. No masas ni megalias. Peristaltismo presente. No signos de irritación peritoneal.
Neurológico: activa y reactiva, fontanela normotensa. Buen tono y movilización de extremidades.
Otorrinolaringología: orofaringe {{Orofaringe|*hiperémica|no hiperémica}} sin exudados. Otoscopia bilateral normal. No adenopatías cervicales.
`,
    texto_ca: `
TRIANGLE D’AVALUACIÓ PEDIÀTRICA: ESTABLE
Bon estat general, bona coloració i hidratació. No exantemes ni petèquies.
Respiratori: eupneica. No distrès respiratori. AR: bona entrada d’aire bilateral, no sorolls patològics.
Cardiovascular: bona perfusió perifèrica, polsos presents i simètrics. Reompliment capil·lar menys de 2 segons. AC: tons cardíacs rítmics, sense bufs.
Abdomen: inspecció normal, tou, indolor, sense masses ni megàlies. Peristaltisme present. No signes d’irritació peritoneal.
Neurològic: activa i reactiva, fontanel·la normotensa. Bon to i mobilització d’extremitats.
Otorrinolaringologia: orofaringe {{Orofaringe|*hiperèmica|no hiperèmica}}, sense exsudats. Otoscòpia bilateral normal. No adenopaties cervicals.
`
  },

  {
    id: "pe-ef-nino-pequeno",
    categoria: "pediatria",
    tipo: "exploracion",
    grupo: "Exploración física",
    titulo: "EF niño pequeño (TEP estable)",
    etiquetas: "exploracion fisica normal lactante triangulo evaluacion pediatrica fontanela",
    texto: `
TRIÁNGULO DE EVALUACIÓN PEDIÁTRICA: ESTABLE
Buen estado general, buena coloración e hidratación. No exantemas ni petequias.
Respiratorio: eupneico. No distrés respiratorio. AR: buena entrada de aire bilateral, no ruidos patológicos.
Cardiovascular: buena perfusión periférica, pulsos presentes y simétricos. Relleno capilar menor de 2 segundos. AC: tonos rítmicos, no soplos.
Abdomen: inspección normal, blando, indoloro. No masas ni megalias. Peristaltismo presente. No signos de irritación peritoneal.
Neurológico: activo y reactivo, fontanela normotensa. Buen tono y movilización de extremidades.
Otorrinolaringología: orofaringe {{Orofaringe|*hiperémica|no hiperémica}} sin exudados. Otoscopia bilateral normal. No adenopatías cervicales.
`,
    texto_ca: `
TRIANGLE D’AVALUACIÓ PEDIÀTRICA: ESTABLE
Bon estat general, bona coloració i hidratació. No exantemes ni petèquies.
Respiratori: eupneic. No distrès respiratori. AR: bona entrada d’aire bilateral, no sorolls patològics.
Cardiovascular: bona perfusió perifèrica, polsos presents i simètrics. Reompliment capil·lar menys de 2 segons. AC: tons cardíacs rítmics, sense bufs.
Abdomen: inspecció normal, tou, indolor, sense masses ni megàlies. Peristaltisme present. No signes d’irritació peritoneal.
Neurològic: actiu i reactiu, fontanel·la normotensa. Bon to i mobilització d’extremitats.
Otorrinolaringologia: orofaringe {{Orofaringe|*hiperèmica|no hiperèmica}}, sense exsudats. Otoscòpia bilateral normal. No adenopaties cervicals.
`
  },

  {
    id: "pe-ef-nina-mayor",
    categoria: "pediatria",
    tipo: "exploracion",
    grupo: "Exploración física",
    titulo: "EF niña mayor (TEP estable)",
    etiquetas: "exploracion fisica normal triangulo evaluacion pediatrica",
    texto: `
TRIÁNGULO DE EVALUACIÓN PEDIÁTRICA: ESTABLE
Buen estado general, buena coloración e hidratación. No exantemas ni petequias.
Respiratorio: eupneica. No distrés respiratorio. AR: buena entrada de aire bilateral, no ruidos patológicos.
Cardiovascular: buena perfusión periférica, pulsos presentes y simétricos. Relleno capilar menor de 2 segundos. AC: tonos rítmicos, no soplos.
Abdomen: inspección normal, blando, indoloro. No masas ni megalias. Peristaltismo presente. No signos de irritación peritoneal.
Neurológico: consciente y orientada. No signos meníngeos ni rigidez de nuca. No focalidades.
Otorrinolaringología: orofaringe {{Orofaringe|*hiperémica|no hiperémica}} sin exudados. Otoscopia bilateral normal. No adenopatías cervicales.
`,
    texto_ca: `
TRIANGLE D’AVALUACIÓ PEDIÀTRICA: ESTABLE
Bon estat general, bona coloració i hidratació. No exantemes ni petèquies.
Respiratori: eupneica. No distrès respiratori. AR: bona entrada d’aire bilateral, no sorolls patològics.
Cardiovascular: bona perfusió perifèrica, polsos presents i simètrics. Reompliment capil·lar menys de 2 segons. AC: tons cardíacs rítmics, sense bufs.
Abdomen: inspecció normal, tou, indolor, sense masses ni megàlies. Peristaltisme present. No signes d’irritació peritoneal.
Neurològic: conscient i orientada. No signes meningis ni rigidesa de clatell. No focalitats.
Otorrinolaringologia: orofaringe {{Orofaringe|*hiperèmica|no hiperèmica}}, sense exsudats. Otoscòpia bilateral normal. No adenopaties cervicals.
`
  },

  {
    id: "pe-ef-nino-mayor",
    categoria: "pediatria",
    tipo: "exploracion",
    grupo: "Exploración física",
    titulo: "EF niño mayor (TEP estable)",
    etiquetas: "exploracion fisica normal triangulo evaluacion pediatrica",
    texto: `
TRIÁNGULO DE EVALUACIÓN PEDIÁTRICA: ESTABLE
Buen estado general, buena coloración e hidratación. No exantemas ni petequias.
Respiratorio: eupneico. No distrés respiratorio. AR: buena entrada de aire bilateral, no ruidos patológicos.
Cardiovascular: buena perfusión periférica, pulsos presentes y simétricos. Relleno capilar menor de 2 segundos. AC: tonos rítmicos, no soplos.
Abdomen: inspección normal, blando, indoloro. No masas ni megalias. Peristaltismo presente. No signos de irritación peritoneal.
Neurológico: consciente y orientado. No signos meníngeos ni rigidez de nuca. No focalidades.
Otorrinolaringología: orofaringe {{Orofaringe|*hiperémica|no hiperémica}} sin exudados. Otoscopia bilateral normal. No adenopatías cervicales.
`,
    texto_ca: `
TRIANGLE D’AVALUACIÓ PEDIÀTRICA: ESTABLE
Bon estat general, bona coloració i hidratació. No exantemes ni petèquies.
Respiratori: eupneic. No distrès respiratori. AR: bona entrada d’aire bilateral, no sorolls patològics.
Cardiovascular: bona perfusió perifèrica, polsos presents i simètrics. Reompliment capil·lar menys de 2 segons. AC: tons cardíacs rítmics, sense bufs.
Abdomen: inspecció normal, tou, indolor, sense masses ni megàlies. Peristaltisme present. No signes d’irritació peritoneal.
Neurològic: conscient i orientat. No signes meningis ni rigidesa de clatell. No focalitats.
Otorrinolaringologia: orofaringe {{Orofaringe|*hiperèmica|no hiperèmica}}, sense exsudats. Otoscòpia bilateral normal. No adenopaties cervicals.
`
  },


  {
    id: "pe-ef-abcde",
    categoria: "pediatria",
    tipo: "exploracion",
    grupo: "Exploración física",
    titulo: "Evaluación ABCDE (TEP inestable)",
    etiquetas: "TEP inestable TAP ABCDE glasgow",
    texto: `
TEP: {{TEP|*inestable|estable}}.
A: vía aérea permeable.
B: eupneico/a, buena entrada de aire bilateral, sin ruidos sobreañadidos ni signos de distrés respiratorio.
C: bien perfundido/a, pulsos presentes, simétricos y bilaterales, relleno capilar <2 segundos. AC: tonos rítmicos, no soplos.
D: Glasgow 15, pupilas isocóricas y normorreactivas, movimientos oculares conservados, pares craneales conservados, fuerza y sensibilidad conservadas, tono correcto. Glucemia normal.
E: no presenta lesiones aparentes. No signos de hipotermia.
`,
    texto_ca: `
TAP: {{TEP|*inestable|estable}}.
A: via aèria permeable.
B: eupneic, bona entrada d’aire bilateral, sense sorolls sobreafegits ni signes de distrès respiratori.
C: ben perfós, polsos presents, simètrics i bilaterals, ompliment capil·lar <2 segons. AC rítmica, sense bufs.
D: Glasgow 15, pupil·les isocòriques i normoreactives, moviments oculars conservats, parells cranials conservats, força i sensibilitat conservades, to correcte. Glucèmia normal.
E: sense altres lesions aparents. No signes d’hipotèrmia.
`
  },


  {
    id: "pe-neuro-pequeno",
    categoria: "pediatria",
    tipo: "exploracion",
    grupo: "Neurológica",
    titulo: "Neurológica: lactante / niño pequeño",
    etiquetas: "NRL neuro fontanela ROT cutaneoplantar",
    texto: `
NRL: activo/a, reactivo/a, fontanela normotensa, pupilas isocóricas con reactividad normal. Movimientos oculares normales. No déficits motores, tono muscular correcto. ROT presentes y simétricos. Reflejo cutaneoplantar flexor bilateral.
`,
    texto_ca: `
NRL: actiu/va i reactiu/va, fontanel·la normotensa, pupil·les isocòriques amb reactivitat normal. Moviments oculars normals. No dèficits motors, to muscular correcte. ROT presents i simètrics, reflex cutaneoplantar flexor bilateral.
`
  },

  {
    id: "pe-neuro-mayor",
    categoria: "pediatria",
    tipo: "exploracion",
    grupo: "Neurológica",
    titulo: "Neurológica: niño mayor",
    etiquetas: "NRL neuro glasgow romberg pares craneales",
    texto: `
NRL: Glasgow 15, pupilas isocóricas y normorreactivas. Pares craneales conservados, no déficits motores ni sensitivos, tono y fuerza muscular conservados. ROT presentes y simétricos. Coordinación y marcha normales. Romberg negativo. No rigidez nucal ni signos meníngeos.
`,
    texto_ca: `
NRL: Glasgow 15, pupil·les isocòriques amb reactivitat normal, parells cranials conservats, no dèficits motors ni sensitius, to i força muscular correctes, ROT presents i simètrics, coordinació i marxa normals, Romberg negatiu. No rigidesa de clatell ni signes meningis.
`
  },

  {
    id: "pe-neuro-breve",
    categoria: "pediatria",
    tipo: "exploracion",
    grupo: "Neurológica",
    titulo: "Neurológica breve: niño mayor",
    etiquetas: "NRL neuro glasgow",
    texto_ca: `
NRL: conscient i orientat. Glasgow 15. Parells cranials conservats. Pupil·les isocòriques i normoreactives. Força i sensibilitat conservades. Marxa normal. Romberg negatiu. ROT presents i simètrics.
`
  },

  {
    id: "pe-oft-normal",
    categoria: "pediatria",
    tipo: "exploracion",
    grupo: "Oftalmológica",
    titulo: "Exploración oftalmológica normal",
    etiquetas: "ojo OFT pupilas conjuntiva",
    texto: `
OFT: movimientos oculares conservados. No dolor a la movilización ocular. Conjuntiva no hiperémica. No se observan cuerpos extraños. No picor ni inflamación. Pupilas isocóricas, simétricas y normorreactivas. No edema de papila.
`,
    texto_ca: `
OFT: moviments oculars conservats. No dolor a la mobilització ocular. Conjuntiva no hiperèmica, no s’observen cossos estranys. No picor ni inflamació. Pupil·les isocòriques, simètriques i normoreactives. No edema de papil·la.
`
  },

  {
    id: "pe-oft-conjuntivitis",
    categoria: "pediatria",
    tipo: "exploracion",
    grupo: "Oftalmológica",
    titulo: "Exploración en conjuntivitis",
    etiquetas: "ojo rojo legaña secrecion fluoresceina fluotest",
    texto: `
OFT: pupilas isocóricas y normorreactivas. Hiperemia conjuntival {{Ojo|*bilateral|derecha|izquierda}} con lagrimeo, sin pérdida visual ni dolor. {{Edema palpebral|*Sin edema palpebral|Edema palpebral}}. Secreción {{Secreción|*acuosa|mucosa|purulenta}}. {{Folículos tarsales|*Sin folículos tarsales|Folículos tarsales}}. {{Adenopatía preauricular|*Sin adenopatía preauricular|Adenopatía preauricular}}.
Fluotest {{Fluotest|*negativo|positivo}}.
`
  },

  {
    id: "pe-pc-analitica",
    categoria: "pediatria",
    tipo: "exploracion",
    grupo: "Pruebas complementarias",
    titulo: "Analítica (pediatría)",
    etiquetas: "hemograma bioquimica gasometria venosa GSV PCR PCT sedimento hemostasia",
    texto: `
Hemograma: leucocitos {{Leucocitos}} (N {{N %}} %, L {{L %}} %, M {{M %}} %), Hb {{Hb}} g/dL, Hto {{Hto}} %, VCM {{VCM}} fL, plaquetas {{Plaquetas}}.
Bioquímica: glucosa {{Glucosa}} mg/dL, urea {{Urea}} mg/dL, creatinina {{Creatinina}} mg/dL, Na {{Na}} mEq/L, K {{K}} mEq/L. PCR {{PCR}} mg/dL. PCT {{PCT}} ng/mL.
GSV: pH {{pH}}, pO2 {{pO2}} mmHg, pCO2 {{pCO2}} mmHg, bicarbonato {{Bicarbonato}} mmol/L.
Sedimento de orina: hematíes {{Hematíes}}/campo, leucocitos {{Leucocitos en orina}}/campo, bacterias {{Bacterias}}.
Hemostasia: INR {{INR}}, TP {{TP}} s, TTPA {{TTPA}} s, fibrinógeno {{Fibrinógeno}} mg/dL.
`
  },

  /* ───────────── TRAUMATOLOGIA · EXPLORACIONES ───────────── */

  {
    id: "tr-exp-cervicalgia",
    categoria: "traumatologia",
    tipo: "exploracion",
    grupo: "Columna",
    titulo: "Cervicalgia",
    etiquetas: "cervical dolor cuello",
    texto: `
Paciente que acude por dolor cervical de {{Días}} días de evolución. No traumatismo previo ni mal gesto. No fiebre.
Exploración física:
Deambulación +.
No dolor a la palpación de apófisis espinosas cervicales.
Dolor a la palpación de musculatura paravertebral cervical.
Dolor a la palpación del trapecio.
No radiculalgia.
Movilidad anteroposterior y lateral dolorosa a nivel cervical.
Sensibilidad y fuerza muscular de EESS conservadas.
ROT conservados, V/N distal OK.
No fiebre ni signos de focalidad neurológica.
RX cervical: no lesiones óseas agudas.
Diagnóstico: cervicalgia.
`
  },

  {
    id: "tr-exp-lumbalgia",
    categoria: "traumatologia",
    tipo: "exploracion",
    grupo: "Columna",
    titulo: "Lumbalgia",
    etiquetas: "lumbar dolor espalda lasegue",
    texto: `
Paciente que acude por dolor lumbar de {{Días}} días de evolución. No traumatismo previo ni mal gesto. No fiebre.
Exploración física:
Deambulación +.
No dolor a la palpación de apófisis espinosas lumbares.
Dolor a la palpación de musculatura paravertebral lumbar.
No radiculalgia.
Lasègue {{Lasègue|*-|+}}, pseudo-Lasègue {{Pseudo-Lasègue|*-|+}}, Bragard {{Bragard|*-|+}}.
Sensibilidad y fuerza muscular de EEII conservadas.
V/N distal OK.
RX lumbar: no lesiones óseas agudas.
Diagnóstico: lumbalgia.
`
  },

  {
    id: "tr-exp-hombro",
    categoria: "traumatologia",
    tipo: "exploracion",
    grupo: "Miembro superior",
    titulo: "Hombro: contusión",
    etiquetas: "hombro caida glenohumeral acromioclavicular",
    texto: `
Paciente que acude por dolor en hombro {{Lado|derecho|izquierdo}} tras caída.
Exploración física:
No deformidades ni hematomas.
Tumefacción en hombro.
Dolor a la palpación de la articulación glenohumeral.
No dolor a la palpación de la articulación acromioclavicular.
Dolor a la palpación de la apófisis coracoides.
Dolor difuso a la palpación del 1/3 proximal del húmero.
BA: antepulsión {{Antepulsión}}, abducción {{Abducción}}, RI {{RI}}, RE {{RE}}.
V/N distal OK.
RX hombro: no lesiones óseas agudas.
Diagnóstico: contusión de hombro.
`
  },

  {
    id: "tr-exp-codo",
    categoria: "traumatologia",
    tipo: "exploracion",
    grupo: "Miembro superior",
    titulo: "Codo: contusión",
    etiquetas: "codo caida epicondilo olecranon",
    texto: `
Paciente que acude por dolor en codo {{Lado|derecho|izquierdo}} tras caída.
Exploración física:
No deformidad ni hematoma.
Tumefacción en {{Localización de la tumefacción}}.
Dolor a la palpación del epicóndilo, epitróclea, olécranon, cabeza del radio, apófisis coronoides.
No dolor a la palpación del epicóndilo, epitróclea, olécranon, cabeza del radio, apófisis coronoides.
BA: flexoextensión {{Flexoextensión}}, pronosupinación {{Pronosupinación}}.
V/N distal OK.
RX codo: no lesiones óseas agudas.
Diagnóstico: contusión de codo.
`
  },

  {
    id: "tr-exp-muneca",
    categoria: "traumatologia",
    tipo: "exploracion",
    grupo: "Miembro superior",
    titulo: "Muñeca: contusión",
    etiquetas: "muñeca caida radio distal tabaquera escafoides",
    texto: `
Paciente que acude por dolor en muñeca {{Lado|derecha|izquierda}} tras caída.
Exploración física:
No deformidades ni hematomas.
Tumefacción en región dorsal de la muñeca.
Dolor a la palpación del radio distal.
No dolor a la palpación de la estiloides radial ni de la estiloides cubital.
No dolor a la palpación de la tabaquera anatómica.
Balance articular: flexoextensión {{Flexoextensión}}, pronosupinación {{Pronosupinación}}.
V/N distal OK.
RX muñeca: no lesiones óseas agudas.
Diagnóstico: contusión de muñeca.
`
  },

  {
    id: "tr-exp-mano",
    categoria: "traumatologia",
    tipo: "exploracion",
    grupo: "Miembro superior",
    titulo: "Mano: contusión",
    etiquetas: "mano caida metacarpiano dedo",
    texto: `
Paciente que acude por dolor en mano {{Lado|derecha|izquierda}} tras caída.
Exploración física:
No deformidades ni hematomas.
Tumefacción en la mano {{Lado|derecha|izquierda}}.
Dolor a la palpación del {{Metacarpiano}} metacarpiano y de la articulación MCF del {{Dedo}} dedo.
No dolor a la palpación de las apófisis estiloides radial ni cubital ni del 1/3 distal del radio.
No dolor a la palpación de metacarpianos ni de falanges.
BA doloroso, limitado.
V/N distal OK.
RX mano: no lesiones óseas agudas.
Diagnóstico: contusión de mano.
`
  },

  {
    id: "tr-exp-cadera",
    categoria: "traumatologia",
    tipo: "exploracion",
    grupo: "Miembro inferior",
    titulo: "Cadera: contusión",
    etiquetas: "cadera caida trocanter thomas",
    texto: `
Paciente que acude por dolor en cadera {{Lado|derecha|izquierda}} tras caída.
No asimetrías de las EEII. Dolor a la rotación interna, externa.
Dolor en trocánter menor, mayor; crepitación a la movilización de la cadera.
Prueba de Thomas + (pérdida de extensión a la flexión de la cadera contralateral sana).
BA normal: flexión 120º, ABD 40º, ADD 25º, RI 45º, RE 45º.
V/N distal OK.
RX cadera y pelvis: no lesiones óseas agudas.
Diagnóstico: contusión de cadera.
`
  },

  {
    id: "tr-exp-rodilla",
    categoria: "traumatologia",
    tipo: "exploracion",
    grupo: "Miembro inferior",
    titulo: "Rodilla: contusión o mal gesto",
    etiquetas: "rodilla menisco mcmurray lachman ligamento",
    texto: `
Paciente que acude por dolor en rodilla {{Lado|derecha|izquierda}} tras {{Mecanismo|contusión|mal gesto}}.
Deambulación +.
No derrame, no tumefacción, no hematoma.
Dolor a la palpación de interlínea interna, externa, de la rótula, de la TTA.
No dolor a la palpación de la TTA ni del hueco poplíteo.
CA, CP - Lachman -. No bostezos.
McMurray + en menisco interno y externo.
McMurray - en menisco interno y externo.
BA: 0-120º. V/N distal conservado.
RX rodilla: no lesiones óseas agudas.
Diagnóstico: contusión de rodilla.
`
  },

  {
    id: "tr-exp-tobillo",
    categoria: "traumatologia",
    tipo: "exploracion",
    grupo: "Miembro inferior",
    titulo: "Tobillo: esguince",
    etiquetas: "tobillo esguince maleolo LPAA ligamento",
    texto: `
Paciente que acude por dolor en tobillo {{Lado|derecho|izquierdo}} tras {{Mecanismo|contusión|mal gesto}}.
Deambulación +.
No deformidades ni hematomas. No crepitación.
Ligera tumefacción a nivel del maléolo externo.
Dolor a la palpación del maléolo externo, LPAA, LPC, LPAP, base del 5.º metatarsiano, maléolo interno y ligamento deltoideo.
No dolor a la palpación del maléolo interno, ligamento deltoideo, base del 5.º metatarsiano, maléolo externo, LPAA, LPC, LPAP.
BA: {{Balance articular}}.
V/N distal conservado.
RX tobillo: no lesiones óseas agudas.
Diagnóstico: esguince de tobillo.
`
  },

  {
    id: "tr-exp-pie",
    categoria: "traumatologia",
    tipo: "exploracion",
    grupo: "Miembro inferior",
    titulo: "Pie: contusión",
    etiquetas: "pie metatarsiano dedo",
    texto: `
Paciente que acude por dolor en pie {{Lado|derecho|izquierdo}} tras {{Mecanismo|contusión|mal gesto}}.
No deformidades ni hematomas.
Tumefacción sobre la región dorsal.
Dolor a la palpación del {{Metatarsiano}} metatarsiano. Dolor a la palpación de la articulación MTF del {{Dedo}} dedo.
No dolor a la palpación de maléolos.
BA doloroso, limitado.
V/N distal OK.
RX pie: no lesiones óseas agudas.
Diagnóstico: contusión de pie.
`
  },

  /* ───────────── ADULTOS · TRATAMIENTOS AL ALTA ─────────────
     Fuente: Guía Terapéutica en Atención Primaria semFYC (guiaterapeutica.net),
     entradas revisadas y actualizadas el 24/02/2026; consultadas el 15/11/2026.
     Dosis y pautas tal como figuran en la guía. */

  {
    id: "ad-tt-nac",
    categoria: "adultos",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Respiratorio",
    titulo: "Neumonía adquirida en la comunidad",
    etiquetas: "NAC neumonia amoxicilina augmentine levofloxacino azitromicina",
    nota: "Elección: amoxicilina 1.000 mg/8 h, 5-7 d (5 d si evolución favorable). Factores de riesgo (DM, IC, IR, alcoholismo, cirrosis, > 65 a, institucionalizados): amoxicilina/clavulánico 875/125 mg/8 h, 5-7 d. Sospecha de atípicos: azitromicina 500 mg/24 h, 3-5 d, o levofloxacino 500 mg/d, 5-7 d. Alergia a penicilina: levofloxacino 500 mg/d, 5-7 d. Bronquiectasias: amoxicilina/clavulánico 875/125 mg/8 h, 7-10 d. Sospecha de Pseudomonas: ciprofloxacino 750 mg/12 h, 14 d. Aspiración: amoxicilina/clavulánico 875/125 mg/8 h, 10-14 d. Niños: amoxicilina 80-90 mg/kg/d en 3 tomas; alergia: azitromicina 10 mg/kg/d 3-5 d (máx. 500 mg/d) o claritromicina 15 mg/kg/d en 2 tomas 5-7 d. Derivar si no responde en 48 h, SatO2 < 92 %, confusión, PAS < 90 o PAD < 60 mmHg, FR > 30/min o edad > 75 a. Sin Rx de control si responde bien.",
    enlaces: [{ titulo: "semFYC · Neumonía adquirida en la comunidad", url: "https://guiaterapeutica.net/problemas/132/neumonia-adquirida-en-la-comunidad" }],
    revisar: "Redactado a partir de la Guía Terapéutica semFYC (24/02/2026). Validar: las dosis concretas elegidas dentro del rango de la guía, el texto de control y los signos de alarma (estos últimos no proceden de la guía).",
    texto: `
- {{Antibiótico|*Amoxicilina 1.000 mg cada 8 h|Amoxicilina/clavulánico 875/125 mg cada 8 h|Levofloxacino 500 mg cada 24 h|Azitromicina 500 mg cada 24 h}} durante {{Días=5}} días.
- Reposo. Beber abundantes líquidos.
- Control por su médico de familia en 48 horas, o antes si empeora.
- Volver a urgencias si no mejora en 48 horas, aumenta la dificultad para respirar o aparece confusión.
`
  },

  {
    id: "ad-tt-epoc",
    categoria: "adultos",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Respiratorio",
    titulo: "Agudización de la EPOC",
    etiquetas: "EPOC reagudizacion exacerbacion prednisona salbutamol ventolin amoxicilina augmentine levofloxacino",
    nota: "Corticoide en agudización moderada-grave: prednisona 0,5 mg/kg de peso ideal/24 h (máx. 40 mg/d), 5 d. Antibiótico si 2-3 criterios (más disnea, más volumen de esputo, esputo purulento): EPOC leve, amoxicilina 1.000 mg/8 h 5 d; EPOC moderada-grave, amoxicilina/clavulánico 875/125 mg/8 h 5 d; alergia a betalactámicos, levofloxacino 500 mg/d 5 d; bronquiectasias, amoxicilina/clavulánico 875/125 mg/8 h 7-10 d; sospecha de Pseudomonas, ciprofloxacino 750 mg/12 h 10-14 d. Derivar a urgencias hospitalarias si hay insuficiencia respiratoria o sospecha de gravedad.",
    enlaces: [{ titulo: "semFYC · EPOC", url: "https://guiaterapeutica.net/problemas/414/epoc" }],
    revisar: "Redactado a partir de la Guía Terapéutica semFYC (24/02/2026). Validar: las dosis concretas elegidas dentro del rango de la guía, el texto de control y los signos de alarma (estos últimos no proceden de la guía).",
    texto: `
- Continuar con su tratamiento inhalado habitual.
- Salbutamol 100 mcg inhalado: 1-2 inhalaciones cada 4-6 horas si precisa (máximo 8 inhalaciones al día).
- Prednisona {{Prednisona mg (0,5 mg/kg peso ideal, máx. 40)}} mg cada 24 horas por la mañana durante 5 días.
- {{Antibiótico|*No precisa|Amoxicilina 1.000 mg cada 8 h durante 5 días|Amoxicilina/clavulánico 875/125 mg cada 8 h durante 5 días|Levofloxacino 500 mg cada 24 h durante 5 días}}.
- No fumar. Revisar la técnica de inhalación.
- Vacunación antigripal anual, frente a la COVID y antineumocócica.
- Control por su médico de familia en los próximos días.
- Volver a urgencias si aumenta la dificultad para respirar, aparece somnolencia o confusión, o no mejora.
`
  },

  {
    id: "ad-tt-pericarditis",
    categoria: "adultos",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Cardiovascular",
    titulo: "Pericarditis aguda",
    etiquetas: "pericarditis idiopatica colchicina ibuprofeno AAS aspirina",
    nota: "Pericarditis idiopática aguda no complicada, bajo riesgo. AAS 750-1.000 mg/8 h 1-2 sem y descenso de 250-500 mg cada 1-2 sem, o ibuprofeno 600 mg/8 h 1-2 sem y descenso de 200-400 mg cada 1-2 sem; siempre con colchicina 0,5 mg/12 h 3-6 m (0,5 mg/d si < 70 kg). Si AINE contraindicados: prednisona 0,2-0,5 mg/kg/d 2-4 sem, descenso lento, más colchicina. Valorar omeprazol. Retirar AAS/AINE de forma gradual cuando esté asintomático (PCR como marcador). Ingreso si fiebre > 38 ºC, comienzo subagudo, derrame importante, taponamiento, traumatismo, miopericarditis, inmunosupresión o anticoagulación; sin respuesta tras 1 sem, ingreso y estudio.",
    enlaces: [{ titulo: "semFYC · Pericarditis idiopática aguda no complicada", url: "https://guiaterapeutica.net/problemas/153/pericarditis-idiopatica-aguda-no-complicada" }],
    revisar: "Redactado a partir de la Guía Terapéutica semFYC (24/02/2026). Validar: las dosis concretas elegidas dentro del rango de la guía, el texto de control y los signos de alarma (estos últimos no proceden de la guía).",
    texto: `
- {{AINE|*Ibuprofeno 600 mg cada 8 h|Ácido acetilsalicílico 750-1.000 mg cada 8 h}} durante {{Semanas=2}} semanas; después, bajar la dosis de forma progresiva según indique su médico.
- Colchicina 0,5 mg cada {{Colchicina cada|*12 horas|24 horas}} durante 3 meses.
- {{Protección gástrica|*Omeprazol 20 mg cada 24 horas en ayunas mientras tome el antiinflamatorio|No precisa}}.
- Reposo mientras tenga síntomas. Evitar el ejercicio físico intenso durante al menos 3 meses.
- Control por su médico de familia en una semana.
- Volver a urgencias si aumenta el dolor, aparece fiebre, dificultad para respirar, mareo o desmayo.
`
  },

  {
    id: "ad-tt-urgencia-hta",
    categoria: "adultos",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Cardiovascular",
    titulo: "Urgencia hipertensiva",
    etiquetas: "HTA hipertension crisis captopril amlodipino",
    nota: "Urgencia hipertensiva: PA ≥ 180/110 mmHg sin daño orgánico. En urgencias: captopril 25-50 mg vo DU; alternativas vo: labetalol 50-100 mg/24 h, atenolol 50 mg/24 h o amlodipino 5-10 mg/24 h. Al alta se puede iniciar tratamiento ambulatorio con uno o dos fármacos; objetivo: reducir la PA media no más del 25 % en 24-48 h.",
    enlaces: [{ titulo: "semFYC · Hipertensión arterial esencial", url: "https://guiaterapeutica.net/problemas/149/hipertension-arterial-esencial" }],
    revisar: "Redactado a partir de la Guía Terapéutica semFYC (24/02/2026). Validar: las dosis concretas elegidas dentro del rango de la guía, el texto de control y los signos de alarma (estos últimos no proceden de la guía).",
    texto: `
- {{Tratamiento al alta|*Amlodipino 5 mg cada 24 horas|Amlodipino 10 mg cada 24 horas|Continuar con su tratamiento habitual}}.
- Dieta con poca sal (menos de 6 g al día) y de tipo mediterráneo. Reducir el alcohol. No fumar.
- Caminar más de 45 minutos al día, 4-5 días a la semana. Tratar el sobrepeso.
- Evitar regaliz, drogas (cocaína, anfetaminas) y fármacos que suben la tensión: antiinflamatorios, corticoides, anticonceptivos y descongestionantes nasales.
- Control de la tensión arterial por su médico de familia o enfermera en 24-48 horas.
- Volver a urgencias si dolor en el pecho, dificultad para respirar, dolor de cabeza intenso, alteración de la visión, pérdida de fuerza o del habla.
`
  },

  {
    id: "ad-tt-fa",
    categoria: "adultos",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Cardiovascular",
    titulo: "Fibrilación auricular",
    etiquetas: "FA arritmia bisoprolol diltiazem digoxina apixaban edoxaban sintrom anticoagulacion CHA2DS2-VA",
    nota: "Control de FC (objetivo < 110 lpm en reposo). FE > 40 %: diltiazem 120-240 mg/d, verapamilo 80-120 mg/8 h, bisoprolol 1,25 mg/d (hasta 10 mg/d) o digoxina 0,125-0,25 mg/d. FE ≤ 40 %: bisoprolol o digoxina. EPOC: diltiazem o verapamilo. Hipertiroidismo: propranolol 80-240 mg/d en 3 tomas. Anticoagulación según CHA2DS2-VA: ≥ 2 indicada; 1, se sugiere; 0 (< 65 a sin FR), no. Apixabán 2,5-5 mg/12 h, edoxabán 30-60 mg/d o acenocumarol/warfarina según INR (AVK obligado si estenosis mitral moderada-grave o prótesis mecánica). Valorar HAS-BLED y corregir factores modificables. Prevención de recurrencias tras ritmo sinusal: derivar a Cardiología.",
    enlaces: [
      { titulo: "semFYC · FA: control de la FC o reversión", url: "https://guiaterapeutica.net/problemas/411/fibrilacion-auricular-control-de-la-frecuencia-cardiaca-o-reversion-a-ritmo-sinusal" },
      { titulo: "semFYC · FA: prevención de embolismos", url: "https://guiaterapeutica.net/problemas/412/fibrilacion-auricular-prevencion-de-embolismos" }
    ],
    revisar: "Redactado a partir de la Guía Terapéutica semFYC (24/02/2026). Validar: las dosis concretas elegidas dentro del rango de la guía, el texto de control y los signos de alarma (estos últimos no proceden de la guía).",
    texto: `
- {{Control de frecuencia|*Bisoprolol 2,5 mg cada 24 horas|Bisoprolol 1,25 mg cada 24 horas|Diltiazem 120 mg cada 24 horas|Digoxina 0,25 mg cada 24 horas}}.
- Anticoagulación: {{Anticoagulante|*Apixabán 5 mg cada 12 horas|Apixabán 2,5 mg cada 12 horas|Edoxabán 60 mg cada 24 horas|No precisa (CHA2DS2-VA 0)}}.
- CHA2DS2-VA: {{CHA2DS2-VA}}. HAS-BLED: {{HAS-BLED}}.
- Evitar el alcohol, las drogas y el ejercicio intenso.
- Control por su médico de familia en una semana para revisar la frecuencia cardíaca y la tolerancia al tratamiento.
- Volver a urgencias si palpitaciones mantenidas, dolor en el pecho, dificultad para respirar, mareo o desmayo, pérdida de fuerza o del habla, o sangrado.
`
  },

  {
    id: "ad-tt-lumbalgia",
    categoria: "adultos",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Aparato locomotor",
    titulo: "Lumbalgia",
    etiquetas: "lumbago dolor lumbar ibuprofeno naproxeno tramadol",
    nota: "Ibuprofeno 400-1.200 mg/d en 1-3 dosis o naproxeno 500 mg/12-24 h, a la menor dosis y el menor tiempo posible. Si no puede tomar AINE: paracetamol o metamizol (paracetamol en embarazo y lactancia). Dolor intenso o sin mejoría: asociar tramadol 50 mg/d (máx. 400 mg/d; ancianos o IR crónica, 25 mg/d, máx. 300 mg/d). Diazepam solo si espasmo o dificultad para dormir, máx. 2 sem. Lumbalgia crónica (> 12 sem): valorar amitriptilina 10-75 mg/d. Los corticoides sistémicos no han demostrado beneficio.",
    enlaces: [{ titulo: "semFYC · Lumbalgia simple", url: "https://guiaterapeutica.net/problemas/321/lumbalgia-simple" }],
    revisar: "Redactado a partir de la Guía Terapéutica semFYC (24/02/2026). Validar: las dosis concretas elegidas dentro del rango de la guía, el texto de control y los signos de alarma (estos últimos no proceden de la guía).",
    texto: `
- {{AINE|*Ibuprofeno 600 mg cada 8 horas|Ibuprofeno 400 mg cada 8 horas|Naproxeno 500 mg cada 12 horas}} con comida durante {{Días=5}} días.
- {{Analgesia de rescate|*No precisa|Tramadol 50 mg cada 24 horas si dolor intenso}}.
- Reposo relativo no más de 2 días. Mantener la actividad habitual, sin esfuerzos ni cargas, con buena postura.
- Calor local. Estiramientos a partir de la segunda semana.
- En la mayoría de los casos mejora en unas 2 semanas.
- Volver a urgencias si pérdida de fuerza en las piernas, alteración de la sensibilidad en la zona genital, dificultad para orinar o controlar las heces, o fiebre.
`
  },

  {
    id: "ad-tt-lumbociatalgia",
    categoria: "adultos",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Aparato locomotor",
    titulo: "Lumbociatalgia",
    etiquetas: "ciatica ciatalgia lumbociatica ibuprofeno paracetamol tramadol amitriptilina gabapentina diazepam",
    nota: "Dolor nociceptivo: ibuprofeno 400-1.200 mg/d o naproxeno 500 mg/12-24 h; alergia a AINE: paracetamol 0,5-1 g/4-6 h (máx. 4 g/d). Sin mejoría: AINE + paracetamol; después añadir tramadol (50-100 mg/d, aumentar 50-100 mg/6-8 h, máx. 400 mg/d); si no, cambiar tramadol por morfina 5-10 mg/4 h. Dolor neuropático: amitriptilina 10-25 mg al acostarse, aumentar 10-25 mg cada 3-4 d (máx. 75 mg/d); sin mejoría, gabapentina 300 mg por la noche, aumentar 300 mg cada 1-2 d hasta 300 mg/8 h (máx. 3.600 mg/d). Alternativa: prednisona 0,5-1 mg/kg/d 7 d (suprimiendo el ibuprofeno). Contractura, insomnio o ansiedad: diazepam 5-10 mg/12-24 h. Autolimitada en unas 6 sem, con pico de dolor a los 10 d.",
    enlaces: [{ titulo: "semFYC · Lumbociatalgia. Ciática", url: "https://guiaterapeutica.net/problemas/322/lumbociatalgia-ciatica" }],
    revisar: "Redactado a partir de la Guía Terapéutica semFYC (24/02/2026). Validar: las dosis concretas elegidas dentro del rango de la guía, el texto de control y los signos de alarma (estos últimos no proceden de la guía).",
    texto: `
- {{AINE|*Ibuprofeno 600 mg cada 8 horas|Naproxeno 500 mg cada 12 horas}} con comida.
- Paracetamol 1 g cada 8 horas, alternando con el antiinflamatorio.
- {{Segundo escalón|*No precisa|Tramadol 50 mg cada 8 horas si dolor intenso|Amitriptilina 10 mg al acostarse (dolor neuropático)}}.
- {{Diazepam|*No precisa|Diazepam 5 mg cada 12 horas si contractura o dificultad para dormir}}.
- Reposo no superior a 2 semanas, alternando con movimiento. Después, ejercicio aeróbico y estiramientos.
- El dolor puede ser intenso, pero suele mejorar semana a semana y resolverse en unas 6 semanas.
- Volver a urgencias si pérdida de fuerza en las piernas, alteración de la sensibilidad en la zona genital, dificultad para orinar o controlar las heces, o fiebre.
`
  },

  {
    id: "ad-tt-amigdalitis",
    categoria: "adultos",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "ORL",
    titulo: "Faringoamigdalitis aguda",
    etiquetas: "amigdalitis faringitis anginas penicilina V Centor estreptococo azitromicina clindamicina",
    nota: "Antibiótico solo si Centor ≥ 2 (fiebre > 38 ºC, exudado, adenitis, ausencia de tos y rinorrea) y prueba antigénica rápida positiva. Fenoximetilpenicilina con el estómago vacío; niños: < 1 a, 125 mg/12 h; 1-5 a, 250 mg/12 h; 6-11 a, 250-500 mg/12 h; > 12 a o > 27 kg, 500 mg/12 h; 7-10 d. Alergia: azitromicina 500 mg/d 5 d (niños 10 mg/kg/d) o clindamicina 150-300 mg/8 h 10 d (niños 15-25 mg/kg/d en 3 tomas). Mononucleosis: reposo relativo por riesgo de rotura de bazo.",
    enlaces: [{ titulo: "semFYC · Faringoamigdalitis aguda", url: "https://guiaterapeutica.net/problemas/13/faringoamigdalitis-aguda" }],
    revisar: "Redactado a partir de la Guía Terapéutica semFYC (24/02/2026). Validar: las dosis concretas elegidas dentro del rango de la guía, el texto de control y los signos de alarma (estos últimos no proceden de la guía).",
    texto: `
- {{Analgésico|*Paracetamol 1 g cada 8 horas|Ibuprofeno 600 mg cada 8 horas}} si dolor o fiebre.
- {{Antibiótico|*No precisa|Penicilina V 500 mg cada 12 horas en ayunas durante 10 días|Azitromicina 500 mg cada 24 horas durante 5 días|Clindamicina 300 mg cada 8 horas durante 10 días}}.
- Beber abundantes líquidos. Humidificar el ambiente. Lavados nasales con suero fisiológico. Reposo relativo.
- Volver a urgencias si no puede tragar líquidos o saliva, dificultad para respirar o abrir la boca, o fiebre que persiste más de 3 días.
`
  },

  {
    id: "ad-tt-oma",
    categoria: "adultos",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "ORL",
    titulo: "Otitis media aguda",
    etiquetas: "OMA otitis otalgia amoxicilina augmentine azitromicina",
    nota: "El 80-90 % se resuelven sin antibiótico. Antibiótico en < 2 a (amoxicilina 80-90 mg/kg/d en 3 tomas, 10 d) y en > 2 a y adultos con clínica grave (fiebre > 39 ºC y otalgia importante), > 48 h sin mejoría o factores de riesgo: amoxicilina 750-1.000 mg/8 h 7 d (niños 80-90 mg/kg/d, 5 d). Fracaso a las 48-72 h: amoxicilina/clavulánico 875/125 mg/8 h 8-10 d o cefuroxima 500 mg/12 h 10-14 d. Alergia a betalactámicos: azitromicina 500 mg/d 3 d (niños 10 mg/kg/d). Fracaso: no respuesta a los 3 d. Derivar urgente si fiebre alta en lactante, mal estado general o sospecha de mastoiditis.",
    enlaces: [{ titulo: "semFYC · Otitis media aguda", url: "https://guiaterapeutica.net/problemas/22/otitis-media-aguda-simple-o-supurada" }],
    revisar: "Redactado a partir de la Guía Terapéutica semFYC (24/02/2026). Validar: las dosis concretas elegidas dentro del rango de la guía, el texto de control y los signos de alarma (estos últimos no proceden de la guía).",
    texto: `
- {{Analgésico|*Ibuprofeno 600 mg cada 8 horas|Paracetamol 1 g cada 8 horas}} si dolor o fiebre.
- {{Antibiótico|*No precisa|Amoxicilina 1.000 mg cada 8 horas durante 7 días|Amoxicilina/clavulánico 875/125 mg cada 8 horas durante 10 días|Azitromicina 500 mg cada 24 horas durante 3 días}}.
- Evitar que entre agua en el oído.
- Control por su médico de familia si no mejora en 2-3 días.
- Volver a urgencias si fiebre alta, mal estado general, o dolor, enrojecimiento o hinchazón detrás de la oreja.
`
  },

  {
    id: "ad-tt-oe",
    categoria: "adultos",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "ORL",
    titulo: "Otitis externa aguda",
    etiquetas: "otitis externa conducto auditivo gotas ciprofloxacino otico",
    nota: "Elección: trimetoprima/polimixina B/dexametasona 5-10 gotas/4-6 h 7-10 d (niños > 7 a: 2-4 gotas). Grave o inmunodeprimido: ciprofloxacino ótico 4-6 gotas/8 h 8-10 d + ciprofloxacino 500-750 mg/12 h vo 10 d. Forúnculo: cefadroxilo 1.000 mg/12 h 5 d (pequeño, sin celulitis, inmunocompetente: mupirocina 2 % 1 aplic/8 h 5-7 d). Con celulitis: amoxicilina/clavulánico 875/125 mg/8 h 5 d; alergia: clindamicina 300 mg/8 h 5 d. Edema importante del CAE: asociar hidrocortisona tópica. Recurrencias: ácido acético 2 % tras baño o piscina. Derivar urgente si sospecha de otitis externa maligna (inmunodeprimidos, diabéticos ancianos, otorrea fétida).",
    enlaces: [{ titulo: "semFYC · Otitis externa aguda", url: "https://guiaterapeutica.net/problemas/20/otitis-externa-aguda" }],
    revisar: "Redactado a partir de la Guía Terapéutica semFYC (24/02/2026). Validar: las dosis concretas elegidas dentro del rango de la guía, el texto de control y los signos de alarma (estos últimos no proceden de la guía).",
    texto: `
- {{Gotas óticas|*Trimetoprima/polimixina B/dexametasona: 5 gotas en el oído afectado cada 6 horas durante 7 días|Ciprofloxacino ótico: 4 gotas en el oído afectado cada 8 horas durante 8 días}}.
- {{Analgésico|*Ibuprofeno 600 mg cada 8 horas|Paracetamol 1 g cada 8 horas}} si dolor.
- Evitar que entre agua en el oído. No usar tapones ni bastoncillos.
- Volver a urgencias si fiebre, hinchazón o enrojecimiento alrededor de la oreja, o no mejora en 3-4 días.
`
  },

  {
    id: "ad-tt-vppb",
    categoria: "adultos",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Neurología",
    titulo: "Vértigo posicional paroxístico benigno",
    etiquetas: "VPPB vertigo Epley biodramina dimenhidrinato",
    nota: "Elección: maniobra de reposición de Epley (VPPB de canal posterior; diagnóstico con Dix-Hallpike). Tratamiento farmacológico solo sintomático y lo más corto posible (48-72 h): dimenhidrinato 50 mg/4-6 h vo o vr; vómitos: metoclopramida 10 mg/8 h; ansiedad: diazepam 5-10 mg/8 h. No se recomienda sulpirida. Betahistina: eficacia escasa fuera del Ménière.",
    enlaces: [{ titulo: "semFYC · Vértigo periférico", url: "https://guiaterapeutica.net/problemas/59/vertigo-periferico" }],
    revisar: "Redactado a partir de la Guía Terapéutica semFYC (24/02/2026). Validar: las dosis concretas elegidas dentro del rango de la guía, el texto de control y los signos de alarma (estos últimos no proceden de la guía).",
    texto: `
- Se ha realizado maniobra de Epley.
- Dimenhidrinato 50 mg cada 8 horas si vértigo o náuseas, durante un máximo de 2-3 días.
- Reposo durante la crisis. En cuanto se encuentre mejor, ejercicios de rehabilitación vestibular en casa.
- Levantarse despacio y evitar movimientos bruscos de la cabeza los primeros días.
- Volver a urgencias si dolor de cabeza intenso, visión doble, dificultad para hablar o caminar, pérdida de fuerza, o vómitos que no ceden.
`
  },

  {
    id: "ad-tt-migrana",
    categoria: "adultos",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Neurología",
    titulo: "Migraña",
    etiquetas: "migrana cefalea jaqueca triptan zolmitriptan rizatriptan maxalt ibuprofeno naproxeno metoclopramida",
    nota: "Crisis leve-moderada: ibuprofeno 400-1.200 mg/d, naproxeno 550-1.000 mg/12 h o AAS 500-1.000 mg/6 h ± antiemético; si no cede a las 2 h, triptán. Crisis moderada-intensa o intolerancia a AINE: zolmitriptán 2,5 mg o rizatriptán 10 mg vo; repetir a las 2 h si no mejora (rizatriptán 5 mg si toma propranolol). Náuseas: metoclopramida 10 mg/8 h. Triptanes contraindicados en HTA no controlada y ECV; no darlos durante el aura. Evitar opioides (incluido tramadol) y combinaciones con codeína, cafeína o barbitúricos. Preventivo si ≥ 3 crisis/mes o crisis prolongadas, intensas o sin respuesta.",
    enlaces: [{ titulo: "semFYC · Cefalea migrañosa. Migraña", url: "https://guiaterapeutica.net/problemas/43/cefalea-migranosa-migrana" }],
    revisar: "Redactado a partir de la Guía Terapéutica semFYC (24/02/2026). Validar: las dosis concretas elegidas dentro del rango de la guía, el texto de control y los signos de alarma (estos últimos no proceden de la guía).",
    texto: `
- En la próxima crisis, tomar el tratamiento lo antes posible: {{Analgésico|*Ibuprofeno 600 mg|Naproxeno 550 mg|Ácido acetilsalicílico 1.000 mg}}.
- {{Triptán|*No precisa|Zolmitriptán 2,5 mg si no cede en 2 horas; se puede repetir a las 2 horas|Rizatriptán 10 mg si no cede en 2 horas; se puede repetir a las 2 horas}}.
- Metoclopramida 10 mg cada 8 horas si náuseas o vómitos.
- Descansar en un lugar sin luz ni ruido.
- Identificar y evitar los desencadenantes: estrés, falta o exceso de sueño, alcohol, tabaco, café, algunos alimentos. Ejercicio regular, dieta equilibrada, beber agua y horario de sueño regular.
- Control por su médico de familia para valorar tratamiento preventivo si tiene 3 o más crisis al mes.
- Volver a urgencias si el dolor es diferente al habitual, muy intenso y brusco, o se acompaña de fiebre, rigidez de nuca, pérdida de fuerza, alteración del habla o de la visión.
`
  },

  {
    id: "ad-tt-gea",
    categoria: "adultos",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Digestivo",
    titulo: "Gastroenteritis aguda",
    etiquetas: "GEA diarrea vomitos sueroral loperamida fortasec metoclopramida primperan",
    nota: "Base: rehidratación oral (fórmula OMS) y realimentación precoz. Náuseas o vómitos: metoclopramida 10 mg/8 h (máx. 5 d) o domperidona 10 mg/8 h (máx. 30 mg/d); intolerancia oral: metoclopramida 10 mg/8 h im. Diarrea con urgencia sin fiebre ni productos patológicos: loperamida 4 mg y 2 mg tras cada deposición (máx. 8 mg/24 h, 5 d). Analgésico o antitérmico: paracetamol o metamizol. Empírico en diarrea enteroinvasiva del adulto: ciprofloxacino 500 mg/12 h 3-5 d (niños: azitromicina 10 mg/kg/d 3-5 d), recogiendo antes coprocultivo. Coprocultivo si sangre, diarrea moderada o grave o > 7 d.",
    enlaces: [{ titulo: "semFYC · Diarrea aguda. Gastroenteritis aguda", url: "https://guiaterapeutica.net/problemas/246/diarrea-aguda-gastroenteritis-aguda" }],
    revisar: "Redactado a partir de la Guía Terapéutica semFYC (24/02/2026). Validar: las dosis concretas elegidas dentro del rango de la guía, el texto de control y los signos de alarma (estos últimos no proceden de la guía).",
    texto: `
- Solución de rehidratación oral en pequeñas tomas frecuentes (sabe mejor fría y con unas gotas de limón).
- Volver a comer pronto, en pequeñas cantidades. Evitar la leche y los lácteos con lactosa (el yogur sí se puede tomar). Pueden ayudar los probióticos.
- {{Antiemético|*No precisa|Metoclopramida 10 mg cada 8 horas si vómitos (máximo 5 días)|Domperidona 10 mg cada 8 horas si vómitos}}.
- {{Antidiarreico|*No precisa|Loperamida: 2 comprimidos (4 mg) al inicio y 1 (2 mg) tras cada deposición líquida, máximo 4 al día y 5 días}}.
- Paracetamol 1 g cada 8 horas si dolor o fiebre.
- Lavado de manos frecuente.
- Volver a urgencias si sangre en las heces, fiebre alta, vómitos que impiden beber, signos de deshidratación (boca seca, orina escasa, mareo) o dura más de 7 días.
`
  },

  {
    id: "ad-tt-itu",
    categoria: "adultos",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Urología",
    titulo: "Infección del tracto urinario",
    etiquetas: "ITU cistitis pielonefritis PNA prostatitis fosfomicina monurol nitrofurantoina cefuroxima ciprofloxacino",
    nota: "Cistitis en la mujer: fosfomicina trometamol 3 g DU; intolerancia: nitrofurantoína 100 mg/12 h 5 d. Cistitis en el hombre: fosfomicina 3 g y segunda dosis a las 48 h. Pielonefritis sin criterios de ingreso: cefuroxima axetilo 500 mg/12 h 7-10 d (si contraindicación de cefalosporinas, ciprofloxacino 500 mg/12 h 10-14 d), adaptar a urocultivo. Prostatitis aguda: ciprofloxacino 500 mg/12 h 14 d (hasta 28 d). Pediatría: sin fiebre, cefuroxima 15-30 mg/kg/12 h 3-4 d o fosfomicina (6-12 a, 2 g; > 12 a, 3 g); con fiebre, cefuroxima 15-30 mg/kg/12 h 7-10 d. Urocultivo en cistitis solo si sospecha de resistencias. No urocultivo de control salvo que persistan o reaparezcan los síntomas.",
    enlaces: [{ titulo: "semFYC · Infección urinaria", url: "https://guiaterapeutica.net/problemas/408/infeccion-urinaria" }],
    revisar: "Redactado a partir de la Guía Terapéutica semFYC (24/02/2026). Validar: las dosis concretas elegidas dentro del rango de la guía, el texto de control y los signos de alarma (estos últimos no proceden de la guía).",
    texto: `
- {{Antibiótico|*Fosfomicina 3 g: 1 sobre en dosis única|Fosfomicina 3 g: 1 sobre y otro a las 48 horas|Nitrofurantoína 100 mg cada 12 horas durante 5 días|Cefuroxima 500 mg cada 12 horas durante 7-10 días|Ciprofloxacino 500 mg cada 12 horas durante 14 días}}.
- Beber agua abundante. Orinar con frecuencia, sobre todo después de las relaciones sexuales.
- Regular el tránsito intestinal. Higiene perineal de delante hacia atrás. Calor local en la parte baja del abdomen.
- Volver a urgencias si fiebre, escalofríos, dolor en la zona lumbar, vómitos o no mejora en 48-72 horas.
`
  },

  {
    id: "ad-tt-colico-renal",
    categoria: "adultos",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Urología",
    titulo: "Cólico renal",
    etiquetas: "colico nefritico litiasis piedra riñon diclofenaco metamizol nolotil tamsulosina",
    nota: "En urgencias: diclofenaco 75 mg im (repetir a la 1-2 h si no mejora) o metamizol 1-2 g vo o im. Según la guía, no hay datos que avalen mantener la analgesia más allá del episodio agudo. Litiasis ureteral distal susceptible de tratamiento conservador: considerar alfabloqueante (tamsulosina 0,2-0,4 mg/d, doxazosina 4 mg/d o alfuzosina 10 mg/d; fuera de ficha técnica). Cálculos < 5 mm en uréter distal: hasta un 98 % de expulsión espontánea. Derivar al hospital si infección urinaria, cólico persistente o riñón único.",
    enlaces: [{ titulo: "semFYC · Litiasis renal. Cólico nefrítico", url: "https://guiaterapeutica.net/problemas/115/litiasis-renal-colico-nefritico" }],
    revisar: "Redactado a partir de la Guía Terapéutica semFYC (24/02/2026). Validar: las dosis concretas elegidas dentro del rango de la guía, el texto de control y los signos de alarma (estos últimos no proceden de la guía).",
    texto: `
- {{Analgésico|*Metamizol 575 mg: 1-2 cápsulas cada 8 horas si dolor|No precisa}}.
- {{Alfabloqueante|*No precisa|Tamsulosina 0,4 mg cada 24 horas hasta la expulsión del cálculo}}.
- Durante el dolor, buscar la postura más cómoda y aplicar calor local (mejor húmedo, o baño de agua caliente). No beber en exceso mientras dure el dolor.
- Fuera de la crisis, beber abundantes líquidos para prevenir nuevos episodios.
- Si expulsa el cálculo, guardarlo para analizarlo.
- Volver a urgencias si fiebre, vómitos que no ceden, dolor que no mejora con la medicación o deja de orinar.
`
  },

  {
    id: "ad-tt-urticaria",
    categoria: "adultos",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Alergia",
    titulo: "Urticaria aguda",
    etiquetas: "urticaria habones alergia cetirizina antihistaminico angioedema prednisona",
    nota: "Cetirizina 10 mg/d (niños: 6 m-2 a, 2,5 mg/24 h; 2-5 a, 5 mg/24 h; 6-12 a, 5 mg/12 h). Mantener 5-7 d aunque esté asintomático; si no cede, aumentar hasta 4 veces la dosis estándar. Casos graves (gran afectación cutánea, síntomas sistémicos o angioedema): metilprednisolona 40-60 mg im o iv y dexclorfeniramina 5 mg im; después, antihistamínico 10-15 d más prednisona 0,5 mg/kg/d menos de 10 d con retirada progresiva y reevaluación a las 2 sem. Embarazo o lactancia: loratadina 10 mg/d o cetirizina 10 mg/d. No usar corticoides ni antihistamínicos tópicos.",
    enlaces: [{ titulo: "semFYC · Urticaria aguda", url: "https://guiaterapeutica.net/problemas/235/urticaria-aguda" }],
    revisar: "Redactado a partir de la Guía Terapéutica semFYC (24/02/2026). Validar: las dosis concretas elegidas dentro del rango de la guía, el texto de control y los signos de alarma (estos últimos no proceden de la guía).",
    texto: `
- Cetirizina 10 mg cada 24 horas durante {{Días=7}} días, aunque desaparezcan los síntomas.
- {{Corticoide|*No precisa|Prednisona 0,5 mg/kg cada 24 horas por la mañana, menos de 10 días, con retirada progresiva}}.
- Evitar el desencadenante si se conoce. Evitar el alcohol, el estrés y los antiinflamatorios (ibuprofeno, aspirina).
- Compresas frías para aliviar el picor.
- Volver a urgencias si hinchazón de labios, lengua o garganta, dificultad para respirar o tragar, mareo o desmayo.
`
  },

  {
    id: "ad-tt-anafilaxia",
    categoria: "adultos",
    tipo: "tratamiento",
    ambito: ["urgencias"],
    grupo: "Alergia",
    titulo: "Anafilaxia: alta tras observación",
    etiquetas: "anafilaxia shock anafilactico adrenalina alergia",
    nota: "Tras estabilizar, observación de 6-8 h por la posibilidad de recidiva; al alta, corticoides y antihistamínicos vo un mínimo de 3-4 d y hasta 10 d. Si hay antecedente de reacciones anafilácticas graves repetidas, llevar consigo y autoadministrarse: adrenalina 1/1.000 (0,3-0,5 ml) im + loratadina 1-2 comp + prednisona 50 mg vo en una toma, y acudir al hospital. Los pacientes con betabloqueantes pueden responder poco a la adrenalina (glucagón iv). Investigar la causa.",
    enlaces: [{ titulo: "semFYC · Anafilaxia", url: "https://guiaterapeutica.net/problemas/409/anafilaxia" }],
    revisar: "Redactado a partir de la Guía Terapéutica semFYC (24/02/2026). Validar: las dosis concretas elegidas dentro del rango de la guía, el texto de control y los signos de alarma (estos últimos no proceden de la guía).",
    texto: `
- Tras {{Horas de observación=6}} horas de observación sin nuevos síntomas, alta a domicilio.
- Prednisona {{Prednisona (mg)}} mg cada 24 horas por la mañana durante {{Días=5}} días.
- {{Antihistamínico|*Cetirizina 10 mg cada 24 horas|Loratadina 10 mg cada 24 horas}} durante el mismo tiempo.
- Evitar el posible desencadenante: {{Desencadenante}}.
- Derivación a Alergología para estudio.
- Volver a urgencias o llamar al 112 si vuelve a aparecer hinchazón de labios, lengua o garganta, dificultad para respirar, mareo o desmayo.
`
  },

  {
    id: "ad-tt-herida-riesgo",
    categoria: "adultos",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Heridas y quemaduras",
    titulo: "Herida con objeto de riesgo (pinchazo accidental)",
    etiquetas: "pinchazo accidental aguja exposicion biologica hepatitis B VIH inmunoglobulina vacuna",
    nota: "Profilaxis de hepatitis B. Fuente HBsAg (–): no vacunado, iniciar vacunación; vacunación incompleta, completarla; vacunado, abstenerse. Fuente HBsAg (+) o desconocida: no vacunado, iniciar vacunación + inmunoglobulina hiperinmune VHB 0,06 ml/kg im; vacunado con anti-HBs ≥ 10 UI/l, abstenerse; vacunado con anti-HBs < 10 UI/l, IGHB (2 dosis con 1 m de intervalo o 1 dosis) y reiniciar vacunación; vacunado con respuesta desconocida, dosis de recuerdo + IGHB. IGHB preferiblemente en las primeras 12-24 h; vacunación antes de 1 sem; en > 50 a e inmunodeprimidos, repetir IGHB a las 4 sem. Fuente VIH +: remitir a atención especializada.",
    enlaces: [{ titulo: "semFYC · Herida con objeto de riesgo", url: "https://guiaterapeutica.net/problemas/309/herida-con-objeto-de-riesgo-de-enfermedades-de-transmision-sanguinea" }],
    revisar: "Redactado a partir de la Guía Terapéutica semFYC (24/02/2026). Validar: las dosis concretas elegidas dentro del rango de la guía, el texto de control y los signos de alarma (estos últimos no proceden de la guía).",
    texto: `
- Se ha dejado sangrar la herida 2-3 minutos, lavado con agua y jabón y aplicado antiséptico.
- Estado vacunal frente a hepatitis B: {{Vacunación VHB|no vacunado|vacunación incompleta|vacunado}}. Serología de la fuente: {{Fuente|HBsAg negativo|HBsAg positivo|desconocida}}.
- Profilaxis: {{Profilaxis VHB|*Iniciar vacunación frente a hepatitis B|Completar vacunación frente a hepatitis B|Inmunoglobulina hiperinmune VHB + iniciar vacunación|No precisa}}.
- Seguimiento serológico por su médico de familia o el servicio de prevención de riesgos laborales.
`
  },

  {
    id: "ad-tt-mordedura",
    categoria: "adultos",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Heridas y quemaduras",
    titulo: "Mordedura (perro, gato o humana)",
    etiquetas: "mordedura perro gato humana augmentine amoxicilina clavulanico tetanos herida",
    nota: "Profilaxis antibiótica (< 8-12 h) si herida suturada, punzante o profunda, desbridada, en manos, cara, muñecas o genitales, o inmunodeprimido; > 8-12 h suele haber infección: tratar. Amoxicilina/clavulánico 875/125 mg/12 h: 3-5 d profilaxis, 5-14 d tratamiento (niños 40-80 mg/kg/d en 3 tomas). Alergia: trimetoprima-sulfametoxazol 160/800 mg/12 h y metronidazol 500 mg/8 h (niños: TMP-SMX 6 sem-5 m 20/100 mg/12 h, 6 m-5 a 40/200 mg/12 h, 6-12 a 80/400 mg/12 h; o clindamicina 10 mg/kg 3 veces al día, máx. 600 mg/dosis). Sutura: la mayoría se dejan abiertas; suturar laceración facial con repercusión estética, o mordedura de perro en tronco, brazo o pierna (no mano ni pie) no infectada, en inmunocompetente, < 12 h (extremidad) o < 24 h (cara), sin aplastamiento ni herida punzante. Tétanos: < 3 dosis o desconocido, primera dosis; 3-4 dosis, 1 dosis si > 5 a de la última; ≥ 5 dosis, no (si > 10 a, valorar según la herida). Valorar con prudencia la rabia. Consulta quirúrgica urgente si laceración facial compleja, herida profunda cerca de hueso, tendón o articulación, compromiso neurovascular o cuerpo extraño no extraíble.",
    enlaces: [{ titulo: "semFYC · Mordeduras", url: "https://guiaterapeutica.net/problemas/326/mordeduras-perros-gatos-y-humanos" }],
    revisar: "Redactado a partir de la Guía Terapéutica semFYC (24/02/2026). Validar: las dosis concretas elegidas dentro del rango de la guía, el texto de control y los signos de alarma (estos últimos no proceden de la guía).",
    texto: `
- Mordedura de {{Animal|perro|gato|humana}} en {{Localización}}. Se ha irrigado con suero fisiológico y limpiado con {{Antiséptico|*clorhexidina|povidona yodada}}. {{Cierre|*Se deja abierta para cierre por segunda intención|Se sutura}}.
- {{Antibiótico|*Amoxicilina/clavulánico 875/125 mg cada 12 horas durante 5 días|Trimetoprima-sulfametoxazol 160/800 mg cada 12 horas + metronidazol 500 mg cada 8 horas durante 5 días|No precisa}}.
- Vacuna antitetánica: {{Tétanos|*no precisa|se administra dosis|se inicia vacunación}}.
- Cura diaria con agua y jabón y antiséptico. Mantener la zona inmovilizada los primeros días.
- Observación del animal: comprobar su vacunación y comunicar cualquier cambio de comportamiento.
- Volver a urgencias si enrojecimiento que se extiende, calor, pus, aumento del dolor, fiebre o líneas rojas desde la herida.
`
  },

  {
    id: "ad-tt-quemadura",
    categoria: "adultos",
    tipo: "tratamiento",
    ambito: ["familia", "urgencias"],
    grupo: "Heridas y quemaduras",
    titulo: "Quemadura",
    etiquetas: "quemadura sulfadiazina argentica silvederma fluocinolona primer segundo grado",
    nota: "1.er grado: fluocinolona acetónido 0,025-1 % 1 aplic/8 h y crema hidratante 3 veces al día. 2.º-3.er grado: sulfadiazina argéntica 1 % o povidona yodada en gel, gasa o tul, 1 aplic/8-12 h, cambiando la gasa o el tul cada 1-2 d; en 2.º grado, cura cada 24 h. No antibiótico sistémico profiláctico. Dolor: paracetamol 0,5-1 g/4-6 h (máx. 4 g/d), metamizol 500 mg/6 h o morfina 1-4 mg/2-4 h iv. Toxoide + gammaglobulina antitetánica 250 UI im si se precisa. Derivar al hospital: 1.er grado > 20 % SC; 2.º grado > 15-25 % (10-20 % en ancianos y niños); 3.er grado > 2 %; quemadura por inhalación, eléctrica, química o por congelación, en zonas especiales, con traumatismo importante o enfermedades previas.",
    enlaces: [{ titulo: "semFYC · Quemaduras", url: "https://guiaterapeutica.net/problemas/337/quemaduras" }],
    revisar: "Redactado a partir de la Guía Terapéutica semFYC (24/02/2026). Validar: las dosis concretas elegidas dentro del rango de la guía, el texto de control y los signos de alarma (estos últimos no proceden de la guía).",
    texto: `
- Quemadura de {{Grado|*1.er grado|2.º grado superficial|2.º grado profundo}} en {{Localización}}, aproximadamente {{% superficie corporal}} % de superficie corporal.
- {{Tratamiento tópico|*Fluocinolona crema 1 aplicación cada 8 horas y crema hidratante 3 veces al día|Sulfadiazina argéntica 1 % 1 aplicación cada 12 horas, con gasa o tul, cura cada 24 horas}}.
- Paracetamol 1 g cada 8 horas si dolor.
- Vacuna antitetánica: {{Tétanos|*no precisa|se administra dosis}}.
- Mantener elevada la zona si afecta a una extremidad.
- Evitar la exposición al sol de la zona hasta 6 meses después de la curación.
- Volver a urgencias si fiebre, pus, mal olor, aumento del enrojecimiento o del dolor.
`
  }
];
