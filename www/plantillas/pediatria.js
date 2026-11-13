/* =====================================================================
   PEDIATRÍA
   Fuentes: 0_Plantilla_Pedia_Merli.rtf y la sección de pediatría de
   PLANTILLA_RESIS.docx. Cuando las dos tenían la misma plantilla se han
   fusionado; las diferencias que importan están en «revisar».
   Las hojas de la SEUP enlazadas son las vigentes (las direcciones
   antiguas del documento ya no funcionan).
   ===================================================================== */

(function () {
  var SEUP = "https://seup.org/wp-content/uploads/";
  var hoja = {
    anafilaxia:     { titulo: "SEUP · Anafilaxia", url: SEUP + "2025/05/2_Anafilaxia.pdf" },
    bronquiolitis:  { titulo: "SEUP · Bronquiolitis", url: SEUP + "2026/01/4_Bronquiolitis.pdf" },
    catarro:        { titulo: "SEUP · Catarro de vías altas", url: SEUP + "2025/05/5_Catarro.pdf" },
    cefalea:        { titulo: "SEUP · Cefalea", url: SEUP + "2025/05/6_Cefalea.pdf" },
    colico:         { titulo: "SEUP · Cólico del lactante", url: SEUP + "2025/05/7_Colico.pdf" },
    convulsion:     { titulo: "SEUP · Convulsión febril", url: SEUP + "2025/05/10_Convulsion.pdf" },
    asma:           { titulo: "SEUP · Crisis asmática", url: SEUP + "2025/05/11_Crisisasma.pdf" },
    dolorAbdominal: { titulo: "SEUP · Dolor abdominal", url: SEUP + "2025/05/12_Dolorabdominal.pdf" },
    sollozo:        { titulo: "SEUP · Espasmos del sollozo", url: SEUP + "2025/05/13_Sollozos.pdf" },
    estrenimiento:  { titulo: "SEUP · Estreñimiento", url: SEUP + "2025/05/14_Estren%CC%83imiento.pdf" },
    fiebre:         { titulo: "SEUP · Fiebre", url: SEUP + "2025/05/15_Fiebre.pdf" },
    gea:            { titulo: "SEUP · Gastroenteritis aguda", url: SEUP + "2025/05/16_Gastroente.pdf" },
    laringitis:     { titulo: "SEUP · Laringitis", url: SEUP + "2025/05/19_Laringitis.pdf" },
    neumonia:       { titulo: "SEUP · Neumonía", url: SEUP + "2025/05/20_Neumonia.pdf" },
    otitis:         { titulo: "SEUP · Otitis media aguda", url: SEUP + "2025/05/21_Otitis_media.pdf" },
    sincope:        { titulo: "SEUP · Síncope", url: SEUP + "2025/05/22_Sincope.pdf" },
    tce:            { titulo: "SEUP · Traumatismo craneal", url: SEUP + "2025/08/24_Traumatismo-craneal_nueva.pdf" },
    urticaria:      { titulo: "SEUP · Urticaria", url: SEUP + "2025/05/25_Urticaria.pdf" },
    vomitos:        { titulo: "SEUP · Vómitos", url: SEUP + "2025/05/27_Vomitos.pdf" }
  };

  var todasLasHojas = [
    { titulo: "SEUP · Índice de hojas informativas (también en árabe, chino, rumano y ruso)", url: "https://seup.org/hojas-informativas/" },
    { titulo: "SEUP · Alteraciones conductuales", url: SEUP + "2025/05/1_alteraciones.pdf" },
    hoja.anafilaxia,
    { titulo: "SEUP · Ansiedad", url: SEUP + "2025/05/3_Ansiedad.pdf" },
    hoja.bronquiolitis, hoja.catarro, hoja.cefalea, hoja.colico,
    { titulo: "SEUP · Conducta autolesiva", url: SEUP + "2025/05/8_Autolesiva.pdf" },
    { titulo: "SEUP · Conducta suicida", url: SEUP + "2025/05/9_Suicida.pdf" },
    hoja.convulsion, hoja.asma, hoja.dolorAbdominal, hoja.sollozo, hoja.estrenimiento,
    hoja.fiebre, hoja.gea,
    { titulo: "SEUP · Golpe de calor", url: SEUP + "2025/05/17_Golpecalor.pdf" },
    { titulo: "SEUP · Intoxicaciones", url: SEUP + "2025/05/18_Intoxicacion.pdf" },
    hoja.laringitis, hoja.neumonia, hoja.otitis, hoja.sincope,
    { titulo: "SEUP · Trastornos de la conducta alimentaria", url: SEUP + "2025/05/23_GuiaConductaaliment.pdf" },
    hoja.tce, hoja.urticaria,
    { titulo: "SEUP · Procedimientos de sedoanalgesia", url: SEUP + "2025/05/26_Procedimientos.pdf" },
    hoja.vomitos
  ];

  PLANTILLAS.push(

    /* ═════════════ EXPLORACIONES ═════════════ */

    /* ───────────── Antecedentes ───────────── */

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

    /* ───────────── Anamnesis ───────────── */

    {
      id: "pe-anam-lactante-catarral",
      categoria: "pediatria",
      tipo: "exploracion",
      grupo: "Anamnesis",
      titulo: "Lactante con cuadro catarral y dificultad respiratoria",
      etiquetas: "enfermedad actual motivo de consulta bronquiolitis",
      texto: `
Lactante de {{Edad}} que acude a urgencias por cuadro catarral y dificultad respiratoria de {{Días de evolución}} días de evolución, que ha ido empeorando en las últimas horas, con inicio de fiebre de máximo {{T.ª máxima}} ºC.
`
    },

    /* ───────────── Exploración física ───────────── */

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
      id: "pe-ef-tep-estable",
      categoria: "pediatria",
      tipo: "exploracion",
      grupo: "Exploración física",
      titulo: "EF completa (TEP estable, documento RESIS)",
      etiquetas: "exploracion fisica normal triangulo evaluacion pediatrica blumberg murphy",
      revisar: "Las dos versiones del documento no coinciden: en castellano «orofaringe no hiperémica» y «consciente y orientado»; en catalán «orofaringe hiperèmica» y «FNT» (fontanela normotensa, propio de lactantes). Se ha dejado la orofaringe como desplegable con el valor de cada versión; decidid cuál va por defecto.",
      texto: `
TEP estable.
Buen estado general, buena coloración e hidratación. No exantemas ni petequias.
ORL: orofaringe {{Orofaringe|*no hiperémica|hiperémica}} sin exudados. Otoscopia bilateral normal. No adenopatías cervicales.
Respiratorio: eupneico, no tiraje. AR: buena entrada de aire bilateral, no ruidos patológicos.
Cardiovascular: buena perfusión periférica, pulsos presentes y simétricos, relleno capilar <2". AC: tonos rítmicos, no soplos.
Abdomen: blando, depresible, no doloroso a la palpación. No masas ni visceromegalias palpables. Peristaltismo presente. No signos de irritación peritoneal. Blumberg y Murphy negativos. PPL bilateral negativa.
NRL: activo y reactivo. Consciente y orientado. No rigidez nucal ni otros signos meníngeos. No focalidades.
`,
      texto_ca: `
TRIANGLE D’AVALUACIÓ PEDIÀTRICA: ESTABLE
Bon estat general, bona coloració i hidratació. No exantemes ni petèquies.
AR: eupneic. Bona entrada d’aire bilateral, no sorolls patològics.
CV: bona perfusió perifèrica, polsos presents i simètrics, ompliment capil·lar <2". Tons cardíacs rítmics, sense bufs.
ABD: tou, indolor, sense masses ni megàlies. Peristaltisme present. No signes d’irritació peritoneal. Blumberg negatiu. Murphy negatiu. PPL bilateral negativa.
NRL: actiu i reactiu, FNT. No rigidesa nucal ni altres signes meningis.
ORL: orofaringe {{Orofaringe|*hiperèmica|no hiperèmica}}, sense exsudats. Otoscòpia normal. No adenopaties cervicals.
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
      id: "pe-ef-abcde-trauma",
      categoria: "pediatria",
      tipo: "exploracion",
      grupo: "Exploración física",
      titulo: "ABCDE en traumatismo con collarín",
      etiquetas: "trauma politrauma TAP inmovilizacion cervical collari",
      texto_ca: `
TAP: {{TEP|*estable|inestable}}.
A: via aèria permeable. Immobilització cervical amb collarí.
B: eupneic, bona entrada d’aire bilateral, sense sorolls sobreafegits.
C: ben perfós. AC rítmica, sense bufs.
D: Glasgow 15, pupil·les isocòriques i normoreactives, parells cranials conservats, moviments oculars conservats, força i sensibilitat conservades, to correcte.
E: sense altres lesions aparents.
`
    },

    /* ───────────── Neurológica ───────────── */

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

    /* ───────────── Oftalmológica ───────────── */

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

    /* ───────────── Pruebas complementarias ───────────── */

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

    /* ═════════════ TRATAMIENTOS ═════════════ */

    /* ───────────── Evolución en urgencias ───────────── */

    {
      id: "pe-evol-bronquitis",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Evolución en urgencias",
      titulo: "Evolutivo: bronquitis / bronquiolitis / asma",
      etiquetas: "evolucion nebulizacion salbutamol atrovent ipratropio wood-downes ferres HSJD",
      nota: "Salbutamol nebulizado: 0,15 mg/kg (0,03 ml/kg de la solución de 5 mg/ml). Bromuro de ipratropio: 250 mcg si <20 kg; 500 mcg si >20 kg.",
      texto: `
{{Escala|Score HSJD|Wood-Downes modificada por Ferrés}}: {{Puntuación}}, crisis {{Gravedad|leve|moderada|grave}}.
Se administra nebulización de salbutamol {{Salbutamol (mg)}} mg y bromuro de ipratropio {{Ipratropio (mcg)|250|500}} mcg, y se inician corticoides orales a {{Corticoide (mg/kg)=2}} mg/kg.
Dada la mejoría clínica y auscultatoria, se decide el alta a domicilio con tratamiento y control por su pediatra.
`
    },

    {
      id: "pe-evol-laringitis-leve",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Evolución en urgencias",
      titulo: "Evolutivo: laringitis leve (dexametasona)",
      etiquetas: "evolucion westley crup dexametasona",
      texto: `
Score de Westley modificado por Mintegi: {{Puntuación Westley}}. Se administra dexametasona oral a {{Dexametasona (mg/kg)=0,15}} mg/kg.
Tras {{Horas de observación}} horas de observación, dada la mejoría clínica y auscultatoria, se decide el alta a domicilio con tratamiento y control por su pediatra.
`
    },

    {
      id: "pe-evol-laringitis-grave",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Evolución en urgencias",
      titulo: "Evolutivo: laringitis moderada-grave (adrenalina)",
      etiquetas: "evolucion westley crup adrenalina nebulizada dexametasona",
      nota: "Crup grave según la Guía Terapéutica semFYC: adrenalina nebulizada 3-5 ml al 1/1.000 (1 amp/1 ml) + 3 ml de suero fisiológico, y dexametasona 0,15-0,6 mg/kg vo en dosis única (máx. 10 mg). Alternativa a la dexametasona: budesonida nebulizada 2 mg en dosis única.",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): adrenalina nebulizada 3-5 ml al 1/1.000 + 3 ml de suero fisiológico (antes 0,5 mg/kg, máx. 5 mg). Dexametasona con un máximo de 10 mg: pasa a ser un campo, con 0,6 mg/kg por defecto.",
      enlaces: [
        { titulo: "Guía Terapéutica semFYC · Laringitis aguda. Laringitis crónica. Crup", url: "https://guiaterapeutica.net/problemas/17/laringitis-aguda-laringitis-cronica-crup" }
      ],
      texto: `
Score de Westley modificado por Mintegi: {{Puntuación Westley}}. Se administra nebulización de adrenalina al 1/1.000 {{ml de adrenalina}} ml + 3 ml de suero fisiológico y dexametasona {{Dexametasona (mg/kg)=0,6}} mg/kg vía oral.
Tras {{Horas de observación}} horas de observación, dada la mejoría clínica y auscultatoria, se decide el alta a domicilio con tratamiento y control por su pediatra.
`
    },

    {
      id: "pe-evol-gea-deshidratacion",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Evolución en urgencias",
      titulo: "Evolutivo: GEA con deshidratación leve",
      etiquetas: "evolucion gastroenteritis vomitos sueroterapia carga SSF",
      texto: `
A su llegada a urgencias presenta signos de deshidratación leve. Se intenta tolerancia oral, pero persisten los vómitos, por lo que se deja en dieta absoluta. Se extrae analítica sanguínea, que muestra acidosis metabólica compensada; se administra una carga de SSF a 20 ml/kg e.v. y se inicia perfusión e.v. de mantenimiento.
`
    },

    {
      id: "pe-evol-gea-hipoglucemia",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Evolución en urgencias",
      titulo: "Evolutivo: GEA con deshidratación e hipoglucemia",
      etiquetas: "evolucion gastroenteritis vomitos hipoglucemia SG 10 bolo",
      texto: `
A su llegada a urgencias presenta signos de deshidratación leve-moderada e hipoglucemia sintomática, por lo que se administra un bolo de SG 10 % a 2 ml/kg y posteriormente se mantiene en normoglucemia. Se intenta tolerancia oral, pero persisten los vómitos, por lo que se deja en dieta absoluta. Se extrae analítica sanguínea, que muestra acidosis metabólica compensada; se administra una carga de SSF a 20 ml/kg e.v. y se inicia perfusión e.v. de mantenimiento.
`
    },

    /* ───────────── Respiratorio ───────────── */

    {
      id: "pe-bronquiolitis",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Respiratorio",
      titulo: "Bronquiolitis",
      etiquetas: "VRS lactante lavados nasales",
      enlaces: [hoja.bronquiolitis],
      texto: `
- Hidratación abundante.
- Posición semiincorporada, también para dormir.
- Lavados nasales con suero fisiológico.
- Fraccionar las tomas.
- Reacudir si: disminución de la ingesta a menos de la mitad de lo habitual, aumento de la dificultad respiratoria (más de 60 respiraciones por minuto, tiraje supraclavicular, aleteo nasal), somnolencia excesiva o pausas respiratorias.
`
    },

    {
      id: "pe-bronquitis-asma",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Respiratorio",
      titulo: "Bronquitis / asma",
      etiquetas: "broncoespasmo sibilancias salbutamol ventolin estilsona",
      revisar: "En el documento RESIS esta pauta servía también para la bronquiolitis. En la bronquiolitis no se recomiendan de rutina ni el salbutamol ni los corticoides: para ella está la plantilla «Bronquiolitis».",
      enlaces: [hoja.asma],
      texto: `
- Hidratación abundante.
- Posición semiincorporada, también para dormir.
- Lavados nasales con suero fisiológico o sonarse mucho la nariz.
- Fraccionar las tomas si precisa.
- Salbutamol {{Pufs de salbutamol=2}} pufs con cámara cada 4 horas, hasta control por su pediatra en 48 horas.
- Estilsona (7 mg/ml) {{ml de Estilsona}} ml cada 12 horas durante 3 días, vía oral.
- Paracetamol (100 mg/ml) {{ml de paracetamol}} ml cada 4-6 horas, vía oral, solo si dolor o fiebre.
- Debe permanecer tranquilo, sin correr ni hacer ejercicio, durante 3-4 días para que no empeore.
- Reacudir si empeoramiento clínico con dificultad respiratoria más intensa.
`
    },

    {
      id: "pe-crisis-asma-padres",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Respiratorio",
      titulo: "Crisis asmática: información para padres",
      etiquetas: "asma recomendaciones padres camara inhalacion",
      enlaces: [hoja.asma],
      texto: `
Durante una crisis asmática:
- Mantener al niño sentado, en reposo, sin que haga ejercicio hasta que la crisis esté controlada.
- Empezar el tratamiento recomendado por el pediatra (Ventolin, Terbasmin).
- Si tiene fiebre, darle antitérmicos.
- Evitar los ambientes con humo.
Consultar en urgencias si:
- Está muy agitado o somnoliento, o se pone morado o pálido.
- La dificultad respiratoria empeora: respira cada vez más deprisa, se le marcan las costillas, mueve mucho el abdomen o se le hunde el pecho.
- Necesita inhalaciones muy frecuentes, cada 2 horas o menos.
Cuando acuda a urgencias, lleve la cámara de inhalación que usa habitualmente.
Cuestiones importantes:
- Los niños asmáticos no siempre son alérgicos. En la infancia, el desencadenante más frecuente de las crisis son los catarros.
- Las crisis asmáticas a veces empiezan solo con tos.
- Los inhaladores que precisan cámara deben administrarse siempre con ella, nunca directamente en la boca, porque hacen menos efecto.
- Los hijos de padres fumadores padecen más enfermedades respiratorias.
`
    },

    {
      id: "pe-laringitis",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Respiratorio",
      titulo: "Laringitis",
      etiquetas: "crup tos perruna estridor westley dexametasona",
      nota: "Escala de Westley en ≤6 años. Crup, según la Guía Terapéutica semFYC: dexametasona 0,15-0,6 mg/kg v.o., dosis única (máx. 10 mg); 0,15 mg/kg parece igual de eficaz que las dosis superiores. Alternativa: budesonida nebulizada 2 mg en dosis única.",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): dosis máxima de dexametasona 10 mg (antes 16 mg) y budesonida nebulizada como alternativa, en la nota. A decidir: para el crup la guía recomienda las medidas de la laringitis aguda, que incluyen el descanso en ambiente caliente y húmedo (inhalaciones de vapor); la plantilla aconseja aire húmedo y fresco. No se ha cambiado.",
      enlaces: [
        { titulo: "Escala de Westley (UpToDate, requiere suscripción)", url: "https://www.uptodate.com/contents/calculator-westley-croup-severity-score-appropriate-for-use-in-children-6-years-of-age" },
        hoja.laringitis,
        { titulo: "Guía Terapéutica semFYC · Laringitis aguda. Laringitis crónica. Crup", url: "https://guiaterapeutica.net/problemas/17/laringitis-aguda-laringitis-cronica-crup" }
      ],
      texto: `
- Hidratación abundante.
- Posición semiincorporada, también para dormir.
- Lavados nasales con suero fisiológico o sonarse mucho la nariz.
- Si accesos de tos, acercarle a respirar aire húmedo y fresco (abriendo la ventana o el congelador).
- Si decaimiento o molestias de garganta, ibuprofeno ({{Concentración de ibuprofeno|*20 mg/ml|40 mg/ml}}) {{ml de ibuprofeno}} ml de forma puntual.
- Debe permanecer tranquilo, sin correr ni hacer ejercicio, durante 3-4 días para que no empeore.
- Reacudir si empeoramiento clínico: dificultad respiratoria o retracción torácica, estridor en reposo, palidez o cianosis, ataques de tos intensos, síntomas durante más de 7 días, dificultad para tragar o babeo.
`
    },

    {
      id: "pe-laringitis-alta-ca",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Respiratorio",
      titulo: "Laringitis: recomendaciones al alta (catalán)",
      etiquetas: "crup recomanacions alta pares estridor",
      texto_ca: `
LARINGITIS: RECOMANACIONS A L’ALTA
Què és la laringitis?
És una inflamació de la laringe produïda, generalment, per una infecció vírica. Sol presentar-se, després d’uns dies de refredat, amb tos de gos, afonia, ronquera, mal de gola, febre i, de vegades, un soroll en agafar aire (estridor) i dificultat per respirar. Sol empitjorar a la nit.
Què heu de fer a casa?
- Mantenir el nen incorporat, sobretot per dormir, ja que això l’ajudarà a respirar millor.
- Fer rentats nasals amb sèrum fisiològic per retirar la mucositat, preferiblement abans de menjar, i tantes vegades com calgui.
- És normal que el nen mengi menys. No el forceu a menjar. Doneu-li l’alimentació en preses més petites i més freqüents, per evitar que es cansi. Oferiu-li líquids (aigua).
- Evitar els ambients amb irritants respiratoris (fum de tabac, etc.).
- Si el nen té febre, doneu-li l’antitèrmic recomanat.
Quan heu de consultar a urgències?
- Quan faci soroll en agafar aire (estridor) encara que el nen estigui tranquil.
- Si la dificultat respiratòria empitjora: respira cada vegada més de pressa, se li marquen les costelles, mou molt l’abdomen o se li enfonsa el pit.
- Si el nen té dificultat per empassar la saliva o treu molta bava.
- Si està més adormit o irritable.
Qüestions importants:
- La majoria de laringitis són lleus, benignes i autolimitades.
- No necessiten tractament antibiòtic.
- No s’han de donar medicaments per a la tos.
`
    },

    {
      id: "pe-neumonia",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Respiratorio",
      titulo: "Neumonía",
      etiquetas: "NAC amoxicilina",
      nota: "Según la Guía Terapéutica semFYC: amoxicilina 80-90 mg/kg/día repartidos cada 8 h durante 5-7 días (5 días si la evolución clínica es favorable). Amoxicilina-clavulánico, 80-90 mg de amoxicilina/kg/día en 3 tomas durante 5-7 días, si hay factores de riesgo, como no estar vacunado de H. influenzae. Alergia a la penicilina: azitromicina 10 mg/kg/día durante 3-5 días (máx. 500 mg/día) o claritromicina 15 mg/kg/día en 2 tomas durante 5-7 días. Sospecha de gérmenes atípicos: azitromicina 10 mg/kg/día durante 3-5 días (máx. 500 mg/día). Doxiciclina y quinolonas no deben utilizarse en niños. Reevaluar a las 48 h.",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): antibiótico durante 5-7 días, 5 si la evolución es favorable (antes 7 días). Dosis por peso, indicación de amoxicilina-clavulánico y alternativas en la nota. Se añade el reposo. A decidir: el documento daba amoxicilina-clavulánico a los menores de 6 meses; la guía lo indica si hay factores de riesgo, como no estar vacunado de H. influenzae.",
      enlaces: [
        hoja.neumonia,
        { titulo: "Guía Terapéutica semFYC · Neumonía adquirida en la comunidad", url: "https://guiaterapeutica.net/problemas/132/neumonia-adquirida-en-la-comunidad" }
      ],
      texto: `
- Hidratación abundante y reposo.
- Posición semiincorporada, también para dormir.
- Lavados nasales con suero fisiológico o sonarse mucho la nariz.
- Si fiebre o dolor, paracetamol (100 mg/ml) {{ml de paracetamol}} ml cada 4-6 horas, vía oral.
- {{Antibiótico|*Amoxicilina (250 mg/5 ml)|Amoxicilina-clavulánico (250 mg/5 ml)}} {{ml de antibiótico}} ml cada 8 horas durante {{Días de antibiótico|*5|7}} días, vía oral.
- Control evolutivo por su pediatra en 24-48 horas.
- Reacudir si empeoramiento clínico (dificultad respiratoria, persistencia de la fiebre tras dos días de antibiótico, no tolerancia del antibiótico...).
`
    },

    {
      id: "pe-resfriado",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Respiratorio",
      titulo: "Resfriado / catarro de vías altas",
      etiquetas: "catarro CVA mocos",
      enlaces: [hoja.catarro],
      texto: `
- Hidratación abundante.
- Posición semiincorporada, también para dormir.
- Lavados nasales con suero fisiológico o sonarse mucho la nariz.
- Si dolor o fiebre: {{ml de antitérmico}} ml de {{Antitérmico|*paracetamol (100 mg/ml) cada 4-6 horas|ibuprofeno (20 mg/ml) cada 6-8 horas}}, vía oral.
- Control evolutivo por su pediatra en 24-48 horas.
- Reacudir si empeoramiento clínico con dificultad respiratoria.
`
    },

    /* ───────────── ORL y boca ───────────── */

    {
      id: "pe-amigdalitis",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "ORL y boca",
      titulo: "Amigdalitis",
      etiquetas: "faringoamigdalitis estreptococo penilevel penicilina",
      nota: "Según la Guía Terapéutica semFYC: antibiótico solo si hay 2 o más criterios de Centor (fiebre > 38 ºC, exudado faringoamigdalar, adenitis regional, ausencia de tos y rinorrea) y la prueba antigénica rápida es positiva. Penicilina V cada 12 h durante 7-10 días, con el estómago vacío: < 1 año, 125 mg; 1-5 años, 250 mg; 6-11 años, 250-500 mg; > 12 años o > 27 kg, 500 mg. Si hay intolerancia digestiva o problema de cumplimentación: penicilina benzatina im en dosis única (≥ 25 kg, 1.200.000 UI; < 25 kg, 600.000 UI). Alergia a la penicilina: azitromicina, o clindamicina 15-25 mg/kg/día en 3 tomas durante 10 días. Analgesia: ibuprofeno 5-10 mg/kg cada 4-6 h (máx. 40 mg/kg/día) o paracetamol 10-15 mg/kg cada 4-6 h vo o vr (máx. 60-80 mg/kg/día).",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): penicilina V solo si Centor ≥ 2 y prueba antigénica rápida positiva, con dosis por edad (> 12 años o > 27 kg, 500 mg cada 12 h), durante 7-10 días (antes 10) y con el estómago vacío; resuelve la observación anterior sobre el corte de peso. Ibuprofeno cada 4-6 h (antes 6-8 h). Se añaden los líquidos y el reposo relativo. A decidir: la dosis pediátrica de azitromicina de la guía (10 mg/kg/día en 1 toma durante 5 días consecutivos, máx. 30 mg/kg) no cuadra, porque 5 días suman 50 mg/kg; no se ha copiado en la nota.",
      enlaces: [
        { titulo: "Guía Terapéutica semFYC · Faringoamigdalitis aguda", url: "https://guiaterapeutica.net/problemas/13/faringoamigdalitis-aguda" }
      ],
      texto: `
- Ibuprofeno (20 mg/ml) {{ml de ibuprofeno}} ml cada 4-6 horas si dolor o temperatura >38 ºC con malestar general.
- Abundantes líquidos y reposo relativo. Dieta blanda; mejor alimentos fríos. Evitar alimentos muy calientes o picantes.
- Penilevel (penicilina V) sobres de 250 mg: {{Sobres de Penilevel|1 sobre|2 sobres}} cada 12 horas durante {{Días de penicilina=10}} días, vía oral, con el estómago vacío.
- Control evolutivo por su pediatra en 24-48 horas.
- Reacudir si empeoramiento clínico o signos de alarma (se explican).
`
    },

    {
      id: "pe-otitis-externa",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "ORL y boca",
      titulo: "Otitis externa",
      etiquetas: "oido otix ciflot ciprofloxacino gotas",
      nota: "Según la Guía Terapéutica semFYC: trimetoprima/polimixina B/dexametasona en niños > 7 años, 2-4 gotas cada 4-6 h durante 7-10 días (no da dosis para menores de 7 años; contraindicada si hay perforación timpánica). Ciprofloxacino ótico solo en la otitis externa extensa grave o en inmunodeprimidos, con dosis solo para adultos. Si hay dolor, paracetamol o ibuprofeno. Derivar al especialista para limpieza si es recurrente, no responde o hay otorrea importante u otomicosis.",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): Otix 2-4 gotas cada 4-6 h durante 7-10 días (antes 2 gotas cada 8 h durante 7 días), que es la pauta de la guía para trimetoprima/polimixina B/dexametasona en niños mayores de 7 años. La guía no cita marcas: comprobad que Otix es esta asociación. Se añade no usar tapones. A decidir: la guía no da dosis para menores de 7 años ni dosis pediátrica de ciprofloxacino ótico, que reserva para la otitis extensa grave o en inmunodeprimidos; se conserva la pauta de Ciflot.",
      enlaces: [
        { titulo: "Guía Terapéutica semFYC · Otitis externa aguda", url: "https://guiaterapeutica.net/problemas/20/otitis-externa-aguda" }
      ],
      texto: `
- Evitar la entrada de agua y la manipulación del oído afecto durante 7-10 días. No utilizar tapones.
- Ibuprofeno (20 mg/ml) {{ml de ibuprofeno}} ml cada 8 horas durante 3 días; después, solo si dolor o fiebre.
- {{Gotas óticas|*Otix 2-4 gotas en el oído afecto cada 4-6 horas durante 7-10 días|Ciflot (ciprofloxacino 0,2 %) 1 monodosis cada 12 horas durante 7 días}}.
- Si perforación timpánica: ciprofloxacino ótico (Ciflot, Ciproxina o Baycip) 2 gotas en el oído afecto cada 8 horas durante 7 días.
- Control evolutivo por su pediatra en 24-48 horas.
- Reacudir si empeoramiento clínico (fiebre, otorrea intensa, malestar general...).
`
    },

    {
      id: "pe-otitis-media",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "ORL y boca",
      titulo: "Otitis media aguda",
      etiquetas: "OMA oido amoxicilina",
      nota: "Según la Guía Terapéutica semFYC: amoxicilina 80-90 mg/kg/día en 3 tomas; en < 2 años, durante 10 días; en > 2 años, solo si la clínica es grave (fiebre > 39 ºC y otalgia importante), si no mejora en 48 h o si hay factores de riesgo, durante 5 días (para 2-5 años las observaciones dicen 7 días). Si fracasa la amoxicilina a las 48-72 h: amoxicilina-clavulánico 80-90 mg/kg/día + 10 mg/kg/día en 3 tomas, o cefuroxima axetilo 30 mg/kg/día en 2 tomas, durante 10 días. Alergia a betalactámicos: azitromicina 10 mg/kg/día en 1 toma durante 3 días consecutivos (máx. 30 mg/kg). Analgesia: paracetamol 10-15 mg/kg cada 4-6 h (máx. 60 mg/kg/día) o ibuprofeno 5-10 mg/kg cada 6-8 h (máx. 40 mg/kg/día). El 80-90 % de las OMA se resuelven sin antibióticos.",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): amoxicilina de elección; amoxicilina-clavulánico solo si fracasa la amoxicilina a las 48-72 h (antes, según el documento, en los menores de 6 meses). Duración de 10 días en menores de 2 años y de 5 días en mayores (antes 10 días en todos). Indicaciones y alternativas en la nota. Ambigüedad: para 2-5 años la tabla de la guía da 5 días y sus observaciones, 7. Sigue pendiente: la concentración de amoxicilina-clavulánico no coincide entre documentos (100 mg/ml en RESIS y 250 mg/5 ml en pediatría) y cambia los ml; comprobad qué presentación usáis. La plantilla de pediatría la titulaba «otitis interna»; por el contenido es otitis media.",
      enlaces: [
        hoja.otitis,
        { titulo: "Guía Terapéutica semFYC · Otitis media aguda simple o supurada", url: "https://guiaterapeutica.net/problemas/22/otitis-media-aguda-simple-o-supurada" }
      ],
      texto: `
- Evitar la entrada de agua y la manipulación del oído afecto durante 7-10 días.
- Ibuprofeno (20 mg/ml) {{ml de ibuprofeno}} ml cada 8 horas durante 3 días; después, solo si dolor o fiebre.
- {{Antibiótico|*Amoxicilina (250 mg/5 ml)|Amoxicilina-clavulánico (100 mg/ml)|Amoxicilina-clavulánico (250 mg/5 ml)}} {{ml de antibiótico}} ml cada 8 horas durante {{Días de antibiótico|*10|7|5}} días, vía oral.
- Control evolutivo por su pediatra en 24-48 horas.
- Reacudir si empeoramiento clínico (fiebre, otorrea intensa, malestar general...).
`
    },

    {
      id: "pe-otomicosis",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "ORL y boca",
      titulo: "Otomicosis externa",
      etiquetas: "hongos oido fungowas",
      texto: `
- Fungowas 3-4 gotas cada 12 horas.
- Si secreción muy abundante o persistente, derivar a ORL para aspiración.
`
    },

    {
      id: "pe-herpangina",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "ORL y boca",
      titulo: "Herpangina / gingivoestomatitis herpética",
      etiquetas: "aftas boca coxsackie aloclair aciclovir",
      nota: "Gingivoestomatitis herpética según la Guía Terapéutica semFYC: aciclovir oral en la primoinfección en < 12 años con dolor y deshidratación, 15 mg/kg 5 veces al día durante 7 días; en > 12 años con síntomas graves, valaciclovir 1 g cada 8 h durante 7 días. Es más eficaz si se empieza antes de las 72 h. Tratar el dolor con analgésicos orales; en niños pequeños no usar anestésicos tópicos (para evitar mordeduras). El aciclovir tópico no ha demostrado eficacia. La herpangina no figura en la guía.",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): en la gingivoestomatitis herpética se añaden el aciclovir oral (15 mg/kg 5 veces al día durante 7 días, si es una primoinfección en menores de 12 años con dolor y deshidratación), la ingesta adecuada de líquidos y la vaselina para evitar adherencias. A decidir: la guía no da la dosis del analgésico ni recoge Aloclair, y no tiene entrada de herpangina; se conservan.",
      enlaces: [
        { titulo: "Guía Terapéutica semFYC · Gingivoestomatitis herpética", url: "https://guiaterapeutica.net/problemas/430/gingivoestomatitis-herpetica" }
      ],
      texto: `
- Alimentos templados y dieta blanda. Asegurar una ingesta adecuada de líquidos.
- Ibuprofeno (20 mg/ml) {{ml de ibuprofeno}} ml cada 6 horas.
- Aloclair Plus spray o gel.
- Suero de rehidratación oral, uno al día (riesgo de deshidratación solo en la gingivoestomatitis).
- Gingivoestomatitis herpética: aplicar vaselina para evitar adherencias. Si hay dolor y deshidratación: aciclovir oral {{Aciclovir (mg por toma)}} mg 5 veces al día durante 7 días.
`
    },

    {
      id: "pe-muguet",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "ORL y boca",
      titulo: "Muguet oral (candidiasis orofaríngea)",
      etiquetas: "candida nistatina mycostatin boca lactante",
      nota: "Según la Guía Terapéutica semFYC: nistatina 2-4 ml cada 6 h durante 7-14 días (enjuagar, mantener la solución en la boca varios minutos y deglutir). Alternativa: fluconazol 6 mg/kg el 1.er día y seguir con 3 mg/kg durante 14 días. En recién nacidos o si no mejora: miconazol en gel oral al 2 %, lactantes 25 mg cada 6 h y niños 50 mg cada 6 h, durante 7-28 días.",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): nistatina 2-4 ml cada 6 h durante 7-14 días (antes 1, 2 o 3-5 ml según la edad, durante 7-10 días). A decidir: el documento daba 1 ml a los menores de 1 mes; para los recién nacidos la guía propone miconazol en gel oral (en la nota).",
      enlaces: [
        { titulo: "Guía Terapéutica semFYC · Candidiasis oral", url: "https://guiaterapeutica.net/problemas/6/candidiasis-oral" }
      ],
      texto: `
Nistatina tópica {{Dosis de nistatina|2 ml|3 ml|4 ml}} cada 6 horas durante 7-14 días. Aplicar y repartir con una gasa por toda la boca; también en el chupete, las tetinas y el pezón.
`,
      texto_ca: `
Nistatina tòpica {{Dosis de nistatina|2 ml|3 ml|4 ml}} cada 6 hores durant 7-14 dies. Aplicar i repartir amb una gasa per tota la boca; també al xumet, les tetines i el mugró.
`
    },

    /* ───────────── Digestivo ───────────── */

    {
      id: "pe-gea",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Digestivo",
      titulo: "Gastroenteritis aguda (GEA)",
      etiquetas: "diarrea vomitos suero rehidratacion oral SRO",
      nota: "Referencia habitual para reponer pérdidas: unos 2 ml/kg por cada vómito y 10 ml/kg por cada deposición diarreica.",
      enlaces: [hoja.gea, hoja.vomitos],
      texto: `
- Si vomita o hace una deposición diarreica, esperar 30 minutos y ofrecer suero de rehidratación oral en poca cantidad y de forma frecuente (idealmente {{ml por vómito}} ml por cada vómito y {{ml por deposición}} ml por cada deposición diarreica).
- Cuando tolere bien el suero, ofrecer dieta progresiva según tolerancia, sin forzar (de fácil digestión, sin grasas ni fritos).
- Paracetamol (100 mg/ml) {{ml de paracetamol}} ml cada 4-6 horas si fiebre o dolor.
- Control evolutivo por su pediatra en 24-48 horas.
- Se explican los signos de alarma para acudir a urgencias: signos de deshidratación (ojos hundidos, mucosas secas o pastosas, menos orina), decaimiento o malestar general intenso.
`
    },

    {
      id: "pe-dolor-abdominal",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Digestivo",
      titulo: "Dolor abdominal: información para padres",
      etiquetas: "abdominalgia barriga recomendaciones",
      enlaces: [hoja.dolorAbdominal],
      texto: `
- Paracetamol (100 mg/ml) {{ml de paracetamol}} ml cada 4-6 horas si dolor.
El dolor abdominal es muy frecuente y suele deberse a procesos casi siempre benignos (estreñimiento, gases, diarrea, «nervios»). Algunas enfermedades fuera del abdomen también pueden provocarlo (anginas, catarro, neumonía, otitis).
En casa:
- Intentar valorar la intensidad sin preguntar al niño continuamente. Observar si juega, si el dolor desaparece al dormir, si le despierta por la noche o si le obliga a reposar.
- Dejar que mantenga su actividad normal.
- Tener en cuenta cuándo hizo la última deposición y cómo era.
- En principio, mantener una dieta normal, sin forzarle a comer.
- Observar si aparecen otros síntomas: vómitos, fiebre, cambios en el color de la orina o de las heces.
- En el 90 % de los niños con dolor abdominal recurrente no se encuentra ninguna enfermedad.
Consultar en urgencias si:
- Tiene mal estado general, está decaído o pálido.
- El dolor se vuelve continuo y cada vez más intenso, de modo que no mantiene su actividad habitual o duerme mal.
- El dolor se localiza en el lado derecho del abdomen.
- Tiene vómitos continuos, verdosos o con sangre.
- Las deposiciones son negras, como alquitrán, o tienen sangre roja.
- El abdomen está tenso, duro o hinchado.
- Ha sido operado del abdomen recientemente.
`
    },

    {
      id: "pe-colicos",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Digestivo",
      titulo: "Cólicos del lactante",
      etiquetas: "llanto colico recomendaciones padres",
      enlaces: [hoja.colico],
      texto: `
- Mantener la calma: es un proceso benigno y pasajero.
- Consolar e intentar saber por qué llora: hambre, sed, cambio de pañal, calor, frío.
- Procurar un ambiente tranquilo y relajado; no transmitir ansiedad al niño.
- Pueden ser útiles los masajes en el abdomen, los paseos en carrito o en coche y la música suave.
- No darle ningún medicamento ni cambiar de leche sin consultar con el pediatra.
- En la actualidad no existe ningún tratamiento con efectividad probada.
Consultar si el llanto se acompaña de palidez, sudoración, decaimiento intenso o rechazo de las tomas, o si presenta fiebre, vómitos o deposiciones con sangre.
`
    },

    {
      id: "pe-estrenimiento",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Digestivo",
      titulo: "Estreñimiento",
      etiquetas: "casenlax casenfibra macrogol glicerina fibra",
      nota: "Casenlax según el documento: 6 meses-1 año, 1 sobre de 4 g al día; 1-4 años, 1-2 sobres de 4 g; 4-8 años, 2-4 sobres de 4 g; >8 años, 1-2 sobres de 10 g. Según la Guía Terapéutica semFYC, si no mejora con las medidas: polietilenglicol 3350, 2-6 años 6,9 g/día y 7-11 años 13,8 g/día; Plantago ovata en > 3 años, 33-50 % de la dosis de adulto (3,5-7 g); o lactulosa (< 1 año, 5 ml/día; 1-6 años, 10 ml/día al inicio y 5-10 ml/día de mantenimiento; 7-14 años, 20 ml/día al inicio y 10-15 ml/día de mantenimiento).",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): supositorio de glicerina infantil, 1-2 al día (antes sin dosis). A decidir: la guía da el polietilenglicol 3350 en gramos por edad (2-6 años, 6,9 g/día; 7-11 años, 13,8 g/día), que no encajan con los sobres de 4 y 10 g de Casenlax ni con las dosis del documento, y no da dosis para menores de 2 años. La guía no cita marcas: comprobad que Casenlax es polietilenglicol 3350. Casenfibra no figura en la guía; se conserva.",
      enlaces: [
        hoja.estrenimiento,
        { titulo: "Guía Terapéutica semFYC · Estreñimiento crónico funcional", url: "https://guiaterapeutica.net/problemas/258/estrenimiento-cronico-funcional" },
        { titulo: "Guía Terapéutica semFYC · Estreñimiento agudo", url: "https://guiaterapeutica.net/problemas/257/estrenimiento-agudo" }
      ],
      texto: `
- Dieta rica en fibra (pan, pasta o cereales integrales, verduras y varias piezas de fruta al día) e hidratación abundante (5-6 vasos de agua al día). Ejercicio físico regular (al menos 3 días a la semana, 1 hora seguida). Hábito de sentarse en el baño cada día 10-15 minutos.
- Si dolor o malestar con las deposiciones, o heces duras: supositorio de glicerina infantil, 1-2 al día, de forma puntual.
- Casenfibra 5-15 ml de jarabe una vez al día o 1-3 barritas al día, vía oral. Si no es suficiente, Casenlax {{Dosis de Casenlax|1 sobre de 4 g|1-2 sobres de 4 g|2-4 sobres de 4 g|1-2 sobres de 10 g}} al día, vía oral.
- Si dolor o fiebre: paracetamol (100 mg/ml) {{ml de paracetamol}} ml cada 4-6 horas.
- Control evolutivo por su pediatra en 24-48 horas.
- Reacudir si empeoramiento clínico.
`
    },

    {
      id: "pe-fisura-anal",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Digestivo",
      titulo: "Fisura anal",
      etiquetas: "rectorragia ruscus cohortan banos de asiento",
      nota: "Alternativa: Sinalar rectal (lleva corticoide). Según la Guía Terapéutica semFYC, la mayoría responden a las medidas higienicodietéticas (baños de asiento con agua templada y dieta rica en fibra, sin laxantes). Analgesia: paracetamol 10-15 mg/kg en 4-6 tomas al día (máx. 60 mg/kg/día).",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): se añaden los baños de asiento con agua templada (no caliente) durante 10-15 minutos después de cada deposición, durante 1-2 semanas, y el paracetamol si hay dolor, que son el tratamiento de la guía. A decidir: Ruscus Llorens, Cohortan y Sinalar no figuran en la guía; se conservan.",
      enlaces: [
        { titulo: "Guía Terapéutica semFYC · Fisura anal", url: "https://guiaterapeutica.net/problemas/260/fisura-anal" }
      ],
      texto: `
- Baños de asiento con agua templada (no caliente) durante 10-15 minutos después de cada deposición o cuando sea necesario, durante 1-2 semanas.
- Dieta rica en fibra, verduras y frutas, y beber 1,5-2 litros de agua al día.
- Si dolor: paracetamol (100 mg/ml) {{ml de paracetamol}} ml 4-6 veces al día, vía oral.
- Ruscus Llorens o Cohortan rectal cada 12 horas durante 5 días.
`
    },

    {
      id: "pe-oxiuros",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Digestivo",
      titulo: "Oxiuros (mayores de 2 años)",
      etiquetas: "lombrices enterobius mebendazol lomper picor anal",
      nota: "Solo en mayores de 2 años: el mebendazol está contraindicado en menores de 2 años y en el embarazo. Alternativa según la Guía Terapéutica semFYC (y de elección en el embarazo): pamoato de pirantel 11 mg/kg vo en dosis única (máx. 1 g).",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): tratar a toda la familia, aunque no tenga síntomas (antes «contactos cercanos»), y medidas higiénicas para toda la familia durante 2 semanas. La guía da dosis única y dice que algunos autores aconsejan repetirla a las 2 semanas; se conserva la repetición. Pirantel como alternativa en la nota.",
      enlaces: [
        { titulo: "Guía Terapéutica semFYC · Parásitos intestinales. Helmintiasis", url: "https://guiaterapeutica.net/problemas/416/parasitos-intestinales-helmintiasis" }
      ],
      texto: `
- Mebendazol (Lomper 100 mg comprimidos o suspensión 100 mg/5 ml): 100 mg (5 ml) vía oral, dosis única hoy, y repetir a las 2 semanas.
- Debe tomarlo también toda la familia, aunque no tenga síntomas (adultos: 1 comprimido de 100 mg en cada dosis).
- Durante 2 semanas, toda la familia: lavarse las manos y cepillarse las uñas antes de cada comida y después de ir al baño, ducharse nada más levantarse y dormir con ropa interior y pijama cerrado para evitar el rascado.
- Lavar a fondo la ropa interior y la de cama, a alta temperatura.
`
    },

    /* ───────────── Piel ───────────── */

    {
      id: "pe-dermatitis-atopica",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Piel",
      titulo: "Dermatitis atópica",
      etiquetas: "eccema emolientes corticoide topico hidroxicina",
      nota: "Según la Guía Terapéutica semFYC: betametasona al 0,05-0,1 %, 1 aplicación cada 12 h durante 5 días y después un corticoide de baja potencia 1 vez al día; en niños pequeños, hidrocortisona al 0,25-1 %, 1-2 aplicaciones al día durante 1-2 semanas, con reducción progresiva. Prurito: hidroxizina 2 mg/kg/día en 2-3 tomas vo (los antihistamínicos sedantes, por la noche; no usar antihistamínicos tópicos). Sobreinfección: amoxicilina-clavulánico 40-80 mg/kg/día en 3 tomas durante 5-7 días. Sin mejoría, intolerancia a los corticoides o lesiones en cara, cuello o pliegues: tacrolimus al 0,03 % 2 veces al día en > 2 años. Mantenimiento, si los emolientes no bastan: corticoide de potencia moderada 1 vez por semana. Casos graves o con muchas recurrencias: derivar a dermatología.",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): emolientes 1-2 veces al día, justo después del baño; medidas generales; no aplicar el corticoide en pliegues, cuello ni cara, y reducirlo de forma progresiva. Prurito, sobreinfección, tacrolimus y mantenimiento en la nota. A decidir: la guía da betametasona cada 12 h durante 5 días o, en niños pequeños, hidrocortisona 1-2 veces al día durante 1-2 semanas, pero también dice que una aplicación al día es tan eficaz como más frecuente, y no cita marcas: se conservan las marcas y la pauta de la plantilla (cada 24 h, 3-5 días). Se mantiene: el documento ponía Peitel (prednicarbato) junto a los emolientes y se pasó a los brotes.",
      enlaces: [
        { titulo: "Guía Terapéutica semFYC · Dermatitis atópica", url: "https://guiaterapeutica.net/problemas/185/dermatitis-atopica" }
      ],
      texto: `
- Emolientes a diario, 1-2 veces al día y justo después del baño: crema para pieles atópicas (p. ej., la de Mercadona), Xeramance Plus o Leti AT4.
- Ropa de algodón (evitar la lana y los tejidos sintéticos), jabones suaves y ducha corta con agua templada mejor que baños largos. Evitar la calefacción excesiva y los irritantes. Aclarar bien la ropa y no usar suavizantes.
- En los brotes, corticoide tópico cada 24 horas durante 3-5 días: Peitel crema (o solución en el cuero cabelludo), Nutrasona (ISDIN), Lactisona, Lexxema o Betnovate. No aplicarlo en los pliegues de axilas e ingles, el cuello ni la cara. A medida que mejore, reducirlo de forma progresiva y aumentar los emolientes.
`
    },

    {
      id: "pe-dermatitis-panal",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Piel",
      titulo: "Dermatitis del pañal",
      etiquetas: "culito zinc mitosyl candida lassar",
      nota: "Pasta Lassar según la Guía Terapéutica semFYC: 1 aplicación cada 12-24 h, en capa fina tras limpiar y secar la zona; se retira con aceite. Fórmula: óxido de cinc 10 g, almidón 10 g y vaselina 20 g (también hay presentaciones comercializadas).",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): clotrimazol al 1 % cada 12 h durante 1-2 semanas (antes 7 días). Se añaden la pasta Lassar (elección en la guía), las medidas (aire, cambios frecuentes, limpieza suave, sin toallitas, perfumes ni talco) y aplicar el corticoide suave antes de la pasta o crema barrera. A decidir: la guía no da la pauta del corticoide ni recoge las marcas; se conservan.",
      enlaces: [
        { titulo: "Guía Terapéutica semFYC · Dermatitis del pañal", url: "https://guiaterapeutica.net/problemas/187/dermatitis-del-panal" }
      ],
      texto: `
- Mantener la zona del pañal lo más limpia y seca posible: dejarla al aire el máximo tiempo posible, cambiar el pañal en cuanto orine o haga deposición y limpiar con suavidad. Evitar las toallitas, los perfumes y el talco.
- Crema o pasta barrera con zinc en cada cambio de pañal hasta la mejoría, en capa fina sobre la piel limpia y seca: pasta Lassar (se retira con aceite), Nutraisdin ZN40, Mitosyl o Cicalfate de Avène.
- Si no mejora, corticoide tópico suave, siempre antes de la pasta o crema barrera: Nutrasona cada 12-24 horas durante 5-7 días.
- Si no mejora o sospecha de cándida, antifúngico: Nutraisdin AF o clotrimazol al 1 % cada 12 horas durante 1-2 semanas.
`
    },

    {
      id: "pe-dermatitis-perioral",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Piel",
      titulo: "Dermatitis perioral por la saliva",
      etiquetas: "boca babas nutraisdin",
      texto: `
Nutraisdin reparador perioral cada 8-12 horas hasta la mejoría clínica.
`
    },

    {
      id: "pe-acne",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Piel",
      titulo: "Acné",
      etiquetas: "adolescente clindamicina peroxido benzoilo adapaleno doxiciclina",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): se añade el adapaleno al 0,1 % por la noche si hay comedones. Las tetraciclinas orales pasan a doxiciclina 100 mg/día durante 3-6 meses, siempre con el tratamiento tópico (peróxido de benzoílo + adapaleno) y evitándola en primavera y verano. Se añaden las medidas y la derivación del acné grave. La guía da estas dosis en la columna de adultos.",
      enlaces: [
        { titulo: "Guía Terapéutica semFYC · Acné vulgar", url: "https://guiaterapeutica.net/problemas/449/acne-vulgar" },
        { titulo: "Guía Terapéutica semFYC · Acné inflamatorio leve-moderado (grado I-II)", url: "https://guiaterapeutica.net/problemas/177/acne-inflamatorio-leve-moderado-grado-i-ii" }
      ],
      texto: `
Escalonado según la intensidad (la respuesta tarda 8-12 semanas):
1. Lavar la zona con agua y jabón neutro o gel para pieles acneicas (Avène o Bactopur gel), no más de 1-2 veces al día, y secar bien. No manipular las lesiones. Evitar las cremas hidratantes y los cosméticos grasos.
2. Si hay comedones: adapaleno al 0,1 % en crema o gel, 1 aplicación por la noche.
3. Si hay lesiones inflamatorias: añadir clindamicina tópica (Clinwash) por la mañana y peróxido de benzoilo tópico por la noche.
4. Acné moderado o sin respuesta: añadir doxiciclina 100 mg al día, vía oral, durante 3-6 meses (evitarla en primavera y verano por el riesgo de fotosensibilidad).
No usar antibióticos orales ni tópicos solos. Acné grave (nódulos, cicatrices, muy extenso o sin respuesta a 6 meses de tratamiento): derivar a dermatología.
`
    },

    {
      id: "pe-impetigo",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Piel",
      titulo: "Impétigo",
      etiquetas: "mupirocina bactroban costras melicericas",
      texto: `
- Mupirocina pomada cada 8 horas durante 7 días.
- No aplicar Betadine ni otras sustancias.
- Evitar la manipulación y el rascado de las lesiones.
- No bañarse en la piscina.
- Protección solar.
- Control por su pediatra al finalizar el tratamiento.
`
    },

    {
      id: "pe-picadura",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Piel",
      titulo: "Picadura de insecto / avispa / abeja",
      etiquetas: "picadura mosquito vaspit polaramine hidrocortisona",
      nota: "Según la Guía Terapéutica semFYC: hidrocortisona al 1 %, 1 aplicación al día en niños, si la reacción local es intensa y persistente o hay prurito intenso; si la lesión es importante, corticoide de potencia moderada o alta durante menos de 7 días, evitando los de potencia elevada en cara, pliegues y piel fina. Dexclorfeniramina en > 2 años: 0,15-0,30 mg/kg/día en 3-4 tomas. No usar antihistamínicos tópicos. Dolor: paracetamol o ibuprofeno. Si hay infección, considerar amoxicilina-clavulánico. Si se sospecha anafilaxia: adrenalina im y prednisona 1 mg/kg (máx. 50 mg) durante 5-7 días.",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): medidas locales; corticoide tópico de la guía, hidrocortisona al 1 % 1 vez al día, si la reacción local es intensa o persistente (Vaspit queda como opción); Polaramine en 3-4 tomas al día en mayores de 2 años (antes cada 12 h). A decidir: la guía solo da corticoide oral si se sospecha anafilaxia (prednisona 1 mg/kg, máx. 50 mg, 5-7 días); se conserva la Estilsona. No da la dosis de amoxicilina-clavulánico ni recoge Vaspit ni Bactroban; se conservan.",
      enlaces: [
        { titulo: "Guía Terapéutica semFYC · Picaduras por insectos, garrapatas, medusas y pez araña", url: "https://guiaterapeutica.net/problemas/217/picaduras-por-insectos-garrapatas-medusas-y-pez-arana-dermatitis-por-orugas-o-caterpillar" }
      ],
      texto: `
- Lavar la picadura con agua y jabón y aplicar compresas frías. Si queda el aguijón, retirarlo raspando suavemente la piel, sin apretar ni tirar de él. Puede aplicarse loción de calamina, salvo en la cara y los genitales.
- Si la reacción local es intensa o persistente: {{Corticoide tópico|*hidrocortisona al 1 % en crema 1 vez al día|Vaspit pomada cada 12 horas durante 5 días}} sobre las lesiones.
- Si hay mucho picor (mayores de 2 años): Polaramine {{ml de Polaramine}} ml 3-4 veces al día durante 5 días, vía oral.
- Estilsona {{ml de Estilsona}} ml cada 12 horas durante 3 días, vía oral.
- Si infección: Bactroban pomada cada 12 horas durante 7 días o amoxicilina-clavulánico 50 mg/kg/día repartido cada 8 horas, vía oral, durante 7 días.
`
    },

    {
      id: "pe-escabiosis",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Piel",
      titulo: "Escabiosis (sarna)",
      etiquetas: "sarna permetrina sarcop picor",
      nota: "Según la Guía Terapéutica semFYC: la permetrina es segura en niños de más de 2 meses; suelen bastar 30 g por aplicación. Prurito en > 2 años: dexclorfeniramina 0,15-0,30 mg/kg/día en 3-4 tomas o hidroxizina 1-2 mg/kg/día en 2-3 tomas. Si fracasa el tratamiento: ivermectina 200 µg/kg vo en dosis única, solo a partir de 15 kg. No hace falta tratar a perros ni gatos.",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): retirar la permetrina con una ducha a las 8-14 h; tratar a la vez a todos los convivientes y contactos íntimos, aunque no tengan síntomas (antes, los padres solo si tenían lesiones), lo que resuelve parte de la observación anterior; ropa usada en las 48 h previas a más de 60 ºC y, la que no se pueda lavar, en bolsa cerrada 15 días (antes 3); no lavarse las manos tras aplicarla. Dosis del antihistamínico y alternativas en la nota. Sigue pendiente: según la ficha técnica de Sarcop, en lactantes se aplica también en cuero cabelludo, cuello, frente y sienes; la guía indica aplicarla desde el cuello hasta los pies, salvo la cara y las mucosas, y no trata el caso de los lactantes.",
      enlaces: [
        { titulo: "Guía Terapéutica semFYC · Sarna o escabiosis", url: "https://guiaterapeutica.net/problemas/227/sarna-o-escabiosis" }
      ],
      texto: `
- Permetrina 5 % (Sarcop crema): aplicar por la noche, después de la ducha, por todo el cuerpo desde el cuello hasta la punta de los pies (incluidas las plantas), sin dejar ninguna zona salvo la cara y las mucosas, con especial cuidado en axilas, ingles, genitales, ombligo, entre los dedos y debajo de las uñas. Retirarla con una ducha con agua tibia a las 8-14 horas (mínimo 8). Repetir a los 7 días.
- Cortar las uñas antes de aplicarla y no lavarse las manos después.
- Deben tratarse a la vez (en 24 horas) todos los convivientes y contactos íntimos, aunque no tengan síntomas.
- Lavar la ropa de cama, el pijama y la ropa usada en las 48 horas anteriores a más de 60 ºC (mínimo 10 minutos) o en seco; la que no se pueda lavar, guardarla en una bolsa cerrada durante 15 días. No compartir ropa ni ropa de cama.
- Polaramine si picor (mayores de 2 años). El picor puede durar 1-2 semanas aunque el tratamiento haya funcionado.
`
    },

    {
      id: "pe-tina-cutanea",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Piel",
      titulo: "Tiña cutánea / candidiasis cutánea / pitiriasis versicolor",
      etiquetas: "hongos dermatofitos terbinafina lamisil ketoconazol clotrimazol",
      nota: "Pitiriasis versicolor, según la Guía Terapéutica semFYC: el ketoconazol en gel se extiende por todo el cuerpo, se mantiene 10-15 minutos y después hay que ducharse; no es contagiosa y la luz solar acelera la repigmentación.",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): tiña, terbinafina tópica 1 vez al día durante 2 semanas, o clotrimazol al 1 % cada 12 h durante 4 semanas (antes terbinafina cada 12 h durante 1 mes, y ketoconazol como alternativa); candidiasis cutánea, clotrimazol al 1 % cada 12 h durante 3-4 semanas; pitiriasis versicolor, ketoconazol al 2 % 1 vez al día durante 4 semanas. Se añaden las medidas. En la tiña corporis la guía solo tiene columna de adultos.",
      enlaces: [
        { titulo: "Guía Terapéutica semFYC · Tiña de la cara. Tiña corporis. Tiña cruris", url: "https://guiaterapeutica.net/problemas/230/dermatomicosis-tina-de-la-cara-tina-emcorporisem-tina-emcrurisem" },
        { titulo: "Guía Terapéutica semFYC · Candidiasis interdigital. Intertrigo candidiásico", url: "https://guiaterapeutica.net/problemas/181/dermatomicosis-candidiasis-interdigital-intertrigo-candidiasico" },
        { titulo: "Guía Terapéutica semFYC · Pitiriasis versicolor", url: "https://guiaterapeutica.net/problemas/220/dermatomicosis-pitiriasis-versicolor" }
      ],
      texto: `
{{Diagnóstico|*Tiña: Lamisil (terbinafina) crema 1 vez al día sobre las lesiones durante 2 semanas. Alternativa: clotrimazol al 1 % cada 12 horas durante 4 semanas|Candidiasis cutánea: clotrimazol al 1 % cada 12 horas durante 3-4 semanas|Pitiriasis versicolor: ketoconazol al 2 % en gel o crema 1 vez al día durante 4 semanas}}.
Mantener la zona seca y no compartir la ropa. La tiña contagia hasta 10-15 días después de empezar el tratamiento, pero no hace falta dejar de ir al colegio.
`
    },

    {
      id: "pe-tina-capitis",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Piel",
      titulo: "Tiña capitis",
      etiquetas: "tinea cuero cabelludo terbinafina hongos querion",
      nota: "Antes de iniciar el tratamiento, tomar cultivo (extraer 1-2 pelos y frotis con medio) y empezar el tratamiento de forma empírica. Terbinafina oral según la Guía Terapéutica semFYC, en niños > 4 años: < 25 kg, 125 mg/día; 25-35 kg, 187,5 mg/día; > 35 kg, 250 mg/día; durante 6 semanas. Alternativa: itraconazol 5 mg/kg/día durante 6 semanas (si no mejora, 3-5 mg/kg/día durante 4-6 semanas). La terbinafina es de elección si es Trichophyton; si es Microsporum, griseofulvina (no comercializada en España), y el tratamiento oral puede alargarse un 50-100 %. El champú de sulfuro de selenio acelera la resolución. Estudiar a los convivientes y tratar con champú antifúngico a los portadores asintomáticos (en la tiña por T. tonsurans, a toda la familia).",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): terbinafina oral por peso en mayores de 4 años (125 mg/día si < 25 kg, 187,5 mg/día si 25-35 kg y 250 mg/día si > 35 kg) durante 6 semanas (antes 125 mg durante 2 semanas). Sustituye a la observación anterior. Se añaden las medidas (limpieza, retirada de costras y depilación de los pelos afectados; desinfectar los peines; no compartir peines ni gorros). A decidir: la guía no da dosis de terbinafina para menores de 4 años, dice que la prohibición de ir al colegio es controvertida (contagia hasta 10-15 días tras empezar el tratamiento) y no recoge Hibiscrub ni Augmentine; se conservan.",
      enlaces: [
        { titulo: "Guía Terapéutica semFYC · Tiña capitis. Tiña de la barba", url: "https://guiaterapeutica.net/problemas/229/dermatomicosis-tina-emcapitisem-tina-de-la-barba" }
      ],
      texto: `
- Terbinafina {{Dosis de terbinafina|*125 mg|187,5 mg|250 mg}} cada 24 horas durante 6 semanas, vía oral.
- Limpieza de las lesiones, retirada de las costras y depilación de los pelos afectados. Desinfectar los peines de casa y no compartir peines ni gorros.
- Ibuprofeno si dolor.
- Si sobreinfección: Augmentine (100 mg/ml) {{ml de Augmentine}} ml cada 8 horas durante 7 días.
- Hibiscrub champú cada 24 horas durante 2 semanas.
- No ir a la escuela hasta que remitan las lesiones.
`
    },

    {
      id: "pe-urticaria",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Piel",
      titulo: "Urticaria",
      etiquetas: "habones alergia polaramine estilsona cetirizina",
      nota: "Según la Guía Terapéutica semFYC: cetirizina de elección (6 meses-2 años, 2,5 mg cada 24 h; 2-5 años, 5 mg cada 24 h; 6-12 años, 5 mg cada 12 h); dexclorfeniramina si se necesita la vía im o más efecto sedante (> 2 años: 0,15-0,3 mg/kg/día en 3-4 tomas). Mantener el antihistamínico 5-7 días aunque esté asintomático; si no cede, se puede aumentar hasta 4 veces la dosis estándar. Casos graves (gran afectación cutánea, síntomas sistémicos o angioedema): metilprednisolona 2 mg/kg im o iv en < 14 años. Con angioedema: antihistamínico durante 10-15 días y prednisona 0,5 mg/kg/día vo menos de 10 días, con retirada progresiva. Los corticoides y los antihistamínicos tópicos no son útiles. Riesgo vital: tratar como anafilaxia. Alternativa de la plantilla, que no figura en esta entrada: Atarax (hidroxicina 10 mg/5 ml) 0,5 mg/kg cada 6 h.",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): cetirizina de elección (2,5 mg/24 h de 6 meses a 2 años; 5 mg/24 h de 2 a 5 años; 5 mg/12 h de 6 a 12 años) durante 5-7 días; Polaramine si se busca más sedación. Corticoide oral solo si hay angioedema o urticaria grave (antes Estilsona en todos los casos). Se añaden evitar los AINE y la aspirina, y las compresas frías. A decidir: con angioedema la guía da prednisona 0,5 mg/kg/día menos de 10 días, con retirada progresiva, y el antihistamínico 10-15 días; se conserva la Estilsona 3 días.",
      enlaces: [
        hoja.urticaria, hoja.anafilaxia,
        { titulo: "Guía Terapéutica semFYC · Urticaria aguda", url: "https://guiaterapeutica.net/problemas/235/urticaria-aguda" }
      ],
      texto: `
- Cetirizina {{Dosis de cetirizina|2,5 mg cada 24 horas|5 mg cada 24 horas|5 mg cada 12 horas}} durante 5-7 días, vía oral, aunque desaparezcan los habones.
- Si se necesita más efecto sedante, en su lugar (mayores de 2 años): Polaramine (2 mg/5 ml) {{ml de Polaramine}} ml cada {{Polaramine cada (horas)|*8|6-8}} horas durante 5-7 días, vía oral.
- Solo si hay angioedema o urticaria grave: Estilsona (7 mg/ml) {{ml de Estilsona}} ml cada 12 horas durante 3 días, vía oral.
- Compresas frías si hay picor. Ropa poco ajustada, preferiblemente de algodón.
- Evitar jabones, colonias u otros irritantes de la piel durante las próximas semanas. Evitar los antiinflamatorios (como el ibuprofeno) y la aspirina.
- Reacudir si sensación de dificultad respiratoria o edemas.
- Control evolutivo por su pediatra en 2-3 días.
`
    },

    {
      id: "pe-varicela",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Piel",
      titulo: "Varicela",
      etiquetas: "exantema vesiculas calamina polaramine aciclovir",
      nota: "Según la Guía Terapéutica semFYC: en niños < 12 años sanos, tratamiento sintomático. Paracetamol 10-15 mg/kg cada 6-8 h. Dexclorfeniramina en > 2 años: 0,15-0,30 mg/kg/día en 3-4 tomas. Niños < 12 años tratados con corticoides con riesgo de complicaciones graves: aciclovir oral 20 mg/kg/dosis (máx. 800 mg/dosis) 4 veces al día durante 5 días. Adolescentes no vacunados (riesgo de complicaciones): valaciclovir 1 g cada 8 h durante 7 días, antes de las 24 h de la erupción. Varicela grave (neumonía, encefalitis, hepatitis, trombocitopenia) o inmunodeprimidos: remitir al hospital para aciclovir iv.",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): paracetamol cada 6-8 h (antes 4-6 h); Polaramine 3-4 veces al día en mayores de 2 años (se retira la opción de cada 12 h). Se añaden evitar el calor y el rascado, la dieta blanda si hay lesiones en la boca y las uñas cortas. Antivíricos para los grupos de riesgo, en la nota. A decidir: la guía dice que hay riesgo de contagio hasta el desprendimiento de las costras; la plantilla permite volver al colegio cuando todas las lesiones son costras. No se ha cambiado.",
      enlaces: [
        { titulo: "Guía Terapéutica semFYC · Varicela", url: "https://guiaterapeutica.net/problemas/237/varicela" }
      ],
      texto: `
- Solución de calamina tópica en la piel.
- Evitar el calor y el rascado de las lesiones. Mantener las uñas cortas y limpias y lavar las manos con frecuencia.
- Dieta blanda si hay lesiones en la boca.
- Si dolor o fiebre, paracetamol (100 mg/ml) {{ml de paracetamol}} ml cada 6-8 horas, vía oral.
- Si mucho picor (mayores de 2 años): Polaramine (2 mg/5 ml) {{ml de Polaramine}} ml 3-4 veces al día durante 5 días, vía oral.
- Si sobreinfección de alguna lesión: Bactroban (mupirocina) pomada sobre la lesión cada 12 horas durante 5-7 días.
- Evitar el contacto con embarazadas o bebés que no hayan pasado la varicela.
- No acudir al colegio o a la guardería hasta que ceda la fiebre y todas las lesiones sean costras.
- Control por su pediatra en 2-3 días.
`
    },

    /* ───────────── Ojos ───────────── */

    {
      id: "pe-conjuntivitis",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Ojos",
      titulo: "Conjuntivitis",
      etiquetas: "ojo rojo legañas tobrex tobramicina bilina eritromicina",
      nota: "Según la Guía Terapéutica semFYC: en las formas leves, solo medidas no farmacológicas; antibiótico si no mejora tras 2-3 días o si hay circunstancias de riesgo (inmunodepresión, lentes de contacto, diabetes mal controlada, cirugía ocular reciente, ojo seco, imposibilidad de seguimiento o empeoramiento). Niños > 28 días: eritromicina pomada al 0,5 %, 1 aplicación cada 4-6 h durante 5-7 días. Niños > 1 año con contraindicación o intolerancia a la eritromicina: tobramicina colirio 1 gota cada 4-6 h o pomada 1 aplicación cada 8 h, durante 5-7 días. Menores de 28 días o conjuntivitis hiperaguda: remitir a urgencias de oftalmología. Evitar colirios y pomadas con corticoides. Alérgica: levocabastina en > 4 años, 1 gota cada 8-12 h, u olopatadina en > 3 años, 1 gota cada 12 h. Alternativa de la plantilla, que no figura en la guía: Oftalmowell colirio (polimixina B, neomicina y gramicidina; a partir de 2 años), 4 veces al día durante 5 días.",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): en las formas leves, lavados y medidas higiénicas, y antibiótico solo si no mejora tras 2-3 días. En niños, eritromicina pomada al 0,5 % cada 4-6 h durante 5-7 días; Tobrex (> 1 año) si la eritromicina está contraindicada o no se tolera: colirio cada 4-6 h o pomada cada 8 h, 5-7 días (antes colirio cada 4 u 8 h 7 días más pomada por la noche); resuelve la observación anterior. Puede ir a la guardería o al colegio si no tiene fiebre ni malestar (antes no hasta la resolución). Bilina 1 gota cada 8-12 h (antes 2 gotas cada 12 h), que es la pauta de la guía para la levocabastina en mayores de 4 años: la guía no cita marcas; comprobad que Bilina es levocabastina.",
      enlaces: [
        { titulo: "Guía Terapéutica semFYC · Conjuntivitis bacteriana", url: "https://guiaterapeutica.net/problemas/355/conjuntivitis-bacteriana" },
        { titulo: "Guía Terapéutica semFYC · Conjuntivitis alérgica", url: "https://guiaterapeutica.net/problemas/354/conjuntivitis-alergica" }
      ],
      texto: `
- Lavados oculares con suero fisiológico si hay secreciones; las lágrimas artificiales pueden aliviar las molestias.
- Si no mejora tras 2-3 días de lavados: {{Antibiótico ocular|*eritromicina pomada oftálmica al 0,5 % 1 aplicación cada 4-6 horas durante 5-7 días|Tobrex colirio (0,3 %) 1 gota en el ojo afecto cada 4-6 horas durante 5-7 días|Tobrex pomada 1 aplicación cada 8 horas durante 5-7 días}}.
- Lavado frecuente de manos; toallas, pañuelos y sábanas de uso individual.
- No ir a la piscina ni a la playa.
- Puede ir a la guardería o al colegio, salvo que tenga fiebre o malestar.
- Si conjuntivitis alérgica: Bilina colirio 1 gota en cada ojo cada 8-12 horas durante 7 días. Compresas frías y evitar frotarse los ojos.
- Reconsultar con su pediatra si mala evolución.
`
    },

    {
      id: "pe-erosion-corneal",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Ojos",
      titulo: "Erosión corneal",
      etiquetas: "cornea traumatismo ocular epitelizante oculos",
      nota: "Según la Guía Terapéutica semFYC: hay riesgo de infección si la erosión la ha causado material contaminado u orgánico, uñas, etc. (bajo con papel o metales). Si la han causado lentes de contacto, materia vegetal o un arañazo, la guía da ciprofloxacino (o tobramicina si las quinolonas están contraindicadas), con dosis solo de adultos. No dar corticoides ni anestésicos tópicos para casa. Derivar con urgencia si se sospecha penetración ocular (Seydell +), si la erosión es muy extensa o si no mejora en 48 h.",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): antibiótico solo si hay riesgo de infección, eritromicina pomada cada 6-8 h durante 3-5 días (antes Tobrex u otra pomada con antibiótico). Se retira la oclusión: la guía no aconseja tapar con vendaje compresivo, lo que resuelve la observación anterior. Se añaden las gafas de sol, el analgésico oral y el control a las 24 h. A decidir: Oculos Epitelizante no figura en la guía (que prefiere las pomadas por su efecto lubricante); se conserva.",
      enlaces: [
        { titulo: "Guía Terapéutica semFYC · Úlceras y erosiones corneales. Cuerpo extraño corneal", url: "https://guiaterapeutica.net/problemas/357/ulceras-y-erosiones-corneales-cuerpo-extrano-corneal" }
      ],
      texto: `
- Si hay riesgo de infección (erosión por material contaminado u orgánico, uñas...): eritromicina pomada oftálmica 1 aplicación cada 6-8 horas durante 3-5 días.
- Pomada Oculos Epitelizante cada 8 horas (no financiada).
- No es aconsejable tapar el ojo. Gafas de sol.
- Analgésico oral si dolor.
- Control en 24 horas. Reconsultar si no mejora en 48 horas.
`
    },

    /* ───────────── Genitourinario ───────────── */

    {
      id: "pe-itu",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Genitourinario",
      titulo: "Infección urinaria (ITU)",
      etiquetas: "cefuroxima cefixima denvar urocultivo pielonefritis",
      nota: "Si es menor de 3 meses: ingreso. Según la Guía Terapéutica semFYC: ITU con fiebre, cefuroxima axetilo 15-30 mg/kg cada 12 h durante 7-10 días vo; ITU sin fiebre, cefuroxima axetilo 15-30 mg/kg cada 12 h durante 3-4 días, o fosfomicina trometamol en dosis única (6-12 años, 2 g; > 12 años, 3 g). Adaptar al urocultivo y al antibiograma. Derivar a los niños muy pequeños, con factores de riesgo (uropatía previa), afectación del estado general o sin respuesta al tratamiento oral en 48 h. En los no continentes (aprox. < 2 años), recoger la orina por método estéril (sonda o punción suprapúbica).",
      revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): en la ITU con fiebre, cefuroxima axetilo 15-30 mg/kg cada 12 h durante 7-10 días (antes cefixima 8 mg/kg/día durante 10 días; la guía no recoge la cefixima en niños). Sustituye a la observación anterior sobre la dosis máxima de cefixima. La ITU sin fiebre y los criterios de derivación, en la nota.",
      enlaces: [
        { titulo: "Guía Terapéutica semFYC · Infección urinaria", url: "https://guiaterapeutica.net/problemas/408/infeccion-urinaria" }
      ],
      texto: `
- Si fiebre o dolor, paracetamol (100 mg/ml) {{ml de paracetamol}} ml cada 4-6 horas.
- Cefuroxima axetilo ({{Presentación de cefuroxima}}) {{ml de cefuroxima}} ml cada 12 horas durante {{Días de antibiótico|*10|7}} días, vía oral.
- Control evolutivo por su pediatra en 24-48 horas.
- Reacudir si empeoramiento clínico (malestar general intenso con escalofríos, persistencia de la fiebre tras dos días de antibiótico, no tolerancia del antibiótico...).
- Llamar en 2-3 días a urgencias de pediatría, por la mañana, para conocer el resultado del urocultivo.
`
    },

    {
      id: "pe-balanopostitis",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Genitourinario",
      titulo: "Balanopostitis",
      etiquetas: "prepucio glande fimosis betnovate",
      texto: `
- Lavados frecuentes con agua de manzanilla tibia.
- Masajear para drenar la secreción.
- Betnovate pomada cada 12 horas durante 5-7 días (betametasona; para las adherencias).
- Terramicina si sobreinfección.
`
    },

    {
      id: "pe-vulvovaginitis",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Genitourinario",
      titulo: "Vulvovaginitis",
      etiquetas: "vulva picor rosalgin",
      texto: `
Lavados con gel íntimo y baños de asiento con Rosalgin sobres cada 12-24 horas durante 5 días.
`
    },

    /* ───────────── Neurología ───────────── */

    {
      id: "pe-cefalea",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Neurología",
      titulo: "Cefalea",
      etiquetas: "dolor de cabeza paracetamol signos de alarma",
      enlaces: [hoja.cefalea],
      texto: `
- Paracetamol (100 mg/ml) {{ml de paracetamol}} ml cada 4-6 horas, vía oral.
- Acudir a urgencias si:
  - Tiene fiebre, se queja de dolor de cabeza intenso y vomita varias veces.
  - Duerme mucho más de lo habitual o cuesta despertarle.
  - Tiene otros síntomas neurológicos: ve mal, no mueve bien los brazos o las piernas, camina o habla con dificultad.
  - La cefalea es muy intensa y no responde al tratamiento habitual.
`
    },

    {
      id: "pe-tce",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Neurología",
      titulo: "Traumatismo craneoencefálico (TCE)",
      etiquetas: "golpe cabeza traumatismo craneal observacion domiciliaria",
      enlaces: [hoja.tce],
      texto: `
- Observación domiciliaria durante 24-48 horas.
- Despertarle por la noche al menos 1-2 veces y comprobar que está bien y reacciona con normalidad.
- Si fiebre o dolor, paracetamol (100 mg/ml) {{ml de paracetamol}} ml cada 4-6 horas.
- Reacudir si empeoramiento clínico (disminución de la conciencia, vómitos repetidos, cefalea intensa, comportamiento anómalo...).
- Control evolutivo por su pediatra en 24-48 horas.
`
    },

    {
      id: "pe-convulsion-febril",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Neurología",
      titulo: "Convulsión febril: información para padres",
      etiquetas: "crisis febril recomendaciones padres",
      enlaces: [hoja.convulsion],
      texto: `
- Ante una convulsión febril: tumbar al niño de lado, lejos de objetos con los que pueda golpearse. No intentar introducirle nada en la boca. Conviene que lo valore un médico que confirme el diagnóstico: acudir al centro de salud o al hospital más cercano.
- Consultar en urgencias si se repite la convulsión, si está adormilado, decaído o, por el contrario, muy irritable, o si se queja de dolor de cabeza intenso y vomita.
`
    },

    {
      id: "pe-espasmos-sollozo",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Neurología",
      titulo: "Espasmos del sollozo: información para padres",
      etiquetas: "apnea emotiva rabieta recomendaciones padres",
      enlaces: [hoja.sollozo],
      texto: `
Qué hacer en casa:
- Los espasmos del sollozo suelen ceder solos en pocos segundos, sin necesidad de hacer nada.
- Lo principal es mantener la calma. No agitarle ni golpearle: no hará que el espasmo termine antes. Tampoco es necesario hacer el boca a boca ni otras maniobras de reanimación.
- Es importante no mostrar excesiva preocupación, para que el niño no obtenga ventajas ni se provoque más episodios.
- No angustiarse porque llore o tenga rabietas; seguir reprendiéndole y corrigiéndole cuando sea necesario.
Cuándo consultar en urgencias:
- Si es menor de 6 meses.
- Si tarda más de 5 minutos en recuperarse.
- Si no está completamente normal después del episodio.
- Si el espasmo no lo ha desencadenado un golpe, un susto, una frustración o una regañina.
Cuestiones importantes:
- Es un cuadro benigno que no produce daños ni a corto ni a largo plazo.
- Son muy frecuentes en la infancia, sobre todo a los 2-3 años, aunque pueden repetirse hasta los 5.
- Algunos niños pierden el conocimiento unos segundos e incluso tienen 2 o 3 sacudidas de brazos o piernas, sin que ello empeore el pronóstico.
- Es habitual que alguno de los padres o hermanos haya tenido episodios parecidos.
`
    },

    {
      id: "pe-meningitis-aseptica",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Neurología",
      titulo: "Meningitis aséptica: información para padres",
      etiquetas: "meningitis viral linfocitaria recomendaciones padres",
      texto: `
Qué hacer en casa:
- Ibuprofeno (20 mg/ml) {{ml de ibuprofeno}} ml si fiebre o dolor.
- Mantenerle en casa en reposo durante 48-72 horas; puede caminar, evitando esfuerzos.
- Dieta habitual.
- Si vomita, esperar unos 30 minutos y después darle líquidos en pequeñas cantidades (una cucharada o un sorbo cada 5 minutos). Luego, ofrecer comida también en pequeñas tomas, sin forzar.
Cuándo consultar en urgencias:
- Dolor de cabeza intenso que no cede con los analgésicos pautados.
- Vómitos repetidos o no tolera sólidos ni líquidos.
- Fiebre de más de 39 ºC.
- Cualquier signo de afectación neurológica: duerme mucho, cuesta despertarle, convulsiona, pierde fuerza en las extremidades, no ve bien o habla con dificultad.
`
    },

    {
      id: "pe-sincope",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Neurología",
      titulo: "Síncope: información para padres",
      etiquetas: "desmayo lipotimia recomendaciones padres",
      enlaces: [hoja.sincope],
      texto: `
Qué hacer:
- Si conoce las situaciones que le causan los desmayos, evitarlas o cambiarlas.
- Cuando empiece a sentirse mal, sentarse o tumbarse de inmediato y respirar lenta y profundamente.
- Si pierde la conciencia, tumbarle con las piernas elevadas y la cabeza de lado.
- Cuando el malestar y la sensación de debilidad hayan desaparecido, puede incorporarse despacio.
- Los niños con tendencia a los síncopes deben beber más líquidos a diario.
Cuándo consultar en urgencias:
- Si tarda más de 5 minutos en recuperar el conocimiento.
- Si el síncope se produce con el ejercicio, al hacer un esfuerzo o estando sentado.
- Si se acompaña de sacudidas de las extremidades o, al final, se orina.
`
    },

    /* ───────────── Fiebre y dolor ───────────── */

    {
      id: "pe-fiebre",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Fiebre y dolor",
      titulo: "Fiebre: información para padres",
      etiquetas: "febricula antitermicos recomendaciones padres",
      enlaces: [hoja.fiebre],
      texto: `
Qué hacer en casa:
- No decidir que tiene fiebre tocándole la frente: usar el termómetro.
- Mantener una temperatura ambiente agradable y no abrigarle en exceso.
- Ofrecer abundantes líquidos, sin forzarle.
- No es necesario bajar la fiebre siempre, solo si el niño está molesto.
- Usar las dosis de antitérmico recomendadas por su pediatra y respetar los intervalos, aunque la fiebre reaparezca antes. Siempre que se pueda, por boca y no por vía rectal.
- No es aconsejable alternar antitérmicos, por el riesgo de errores en la dosis.
- Los baños con agua templada bajan poco la fiebre. No usar compresas de alcohol ni de agua fría.
Cuándo acudir a urgencias:
- Si es menor de 3 meses.
- Si está adormilado, decaído o, por el contrario, muy irritable.
- Si ha tenido una convulsión por primera vez.
- Si se queja de dolor de cabeza intenso y vomita varias veces.
- Si respira con dificultad.
- Si aparecen manchas rojas en la piel que no desaparecen al presionar.
Cuestiones importantes:
- La fiebre no es siempre mala ni provoca lesiones importantes: es la respuesta del cuerpo para que las defensas luchen contra la infección.
- La fiebre no produce daños en el cerebro por debajo de 42 ºC.
- Los antitérmicos no curan la infección; solo ayudan a que el niño se sienta mejor.
`
    },

    {
      id: "pe-analgesia",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Fiebre y dolor",
      titulo: "Analgesia: información para padres",
      etiquetas: "dolor paracetamol ibuprofeno recomendaciones padres",
      texto: `
- Los analgésicos tardan unos 20-30 minutos en empezar a hacer efecto y alcanzan su máximo a las 1-2 horas. Si el tratamiento no controla el dolor, o el dolor vuelve en cuanto pasa el efecto, conviene consultar al pediatra.
- Tratar el dolor no enmascara una enfermedad seria: da tiempo y mejora el estado del niño. Una vez calmado, se puede consultar al pediatra para conocer su origen y tratarlo.
- El paracetamol es más seguro que el ibuprofeno y se usará cuando haya fiebre sin otros síntomas o cuando haya dolor abdominal, vómitos o diarrea. El ibuprofeno es más útil si hay un proceso inflamatorio, como amigdalitis u otitis, con o sin fiebre.
`
    },

    /* ───────────── Otros ───────────── */

    {
      id: "pe-tromboflebitis",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Otros",
      titulo: "Tromboflebitis superficial",
      etiquetas: "flebitis via venosa thrombocid arnica",
      texto: `
Thrombocid 3 veces al día durante una semana y, después, crema de árnica hasta el día del control.
`
    },

    /* ───────────── Información para padres ───────────── */

    {
      id: "pe-hojas-seup",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Información para padres",
      titulo: "Hojas informativas para padres (SEUP)",
      etiquetas: "hoja informativa padres folleto recomendaciones SEUP",
      nota: "Abre la hoja en los enlaces para imprimirla o enviarla. Muchas tienen versión en árabe, chino, rumano y ruso en el índice de la SEUP.",
      enlaces: todasLasHojas,
      texto: `
Se entrega la hoja informativa para padres de la SEUP «{{Hoja informativa|Anafilaxia|Bronquiolitis|Catarro de vías altas|Cefalea|Cólico del lactante|Convulsión febril|Crisis asmática|Dolor abdominal|Espasmos del sollozo|Estreñimiento|Fiebre|Gastroenteritis aguda|Golpe de calor|Intoxicaciones|Laringitis|Neumonía|Otitis media aguda|Síncope|Traumatismo craneal|Urticaria|Vómitos}}».
`
    }

  );
})();
