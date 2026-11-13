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
      nota: "Según el documento: amoxicilina-clavulánico si es menor de 6 meses y amoxicilina si es mayor de 6 meses.",
      revisar: "La plantilla de pediatría la titulaba «otitis interna»; por el contenido es otitis media. La concentración de amoxicilina-clavulánico no coincide entre documentos (100 mg/ml en RESIS y 250 mg/5 ml en pediatría) y cambia los ml: comprobad qué presentación usáis.",
      enlaces: [hoja.otitis],
      texto: `
- Evitar la entrada de agua y la manipulación del oído afecto durante 7-10 días.
- Ibuprofeno (20 mg/ml) {{ml de ibuprofeno}} ml cada 8 horas durante 3 días; después, solo si dolor o fiebre.
- {{Antibiótico|*Amoxicilina (250 mg/5 ml)|Amoxicilina-clavulánico (100 mg/ml)|Amoxicilina-clavulánico (250 mg/5 ml)}} {{ml de antibiótico}} ml cada 8 horas durante 10 días, vía oral.
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
      etiquetas: "aftas boca coxsackie aloclair",
      texto: `
- Alimentos templados y dieta blanda.
- Ibuprofeno (20 mg/ml) {{ml de ibuprofeno}} ml cada 6 horas.
- Aloclair Plus spray o gel.
- Suero de rehidratación oral, uno al día (riesgo de deshidratación solo en la gingivoestomatitis).
`
    },

    {
      id: "pe-muguet",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "ORL y boca",
      titulo: "Muguet oral (candidiasis orofaríngea)",
      etiquetas: "candida nistatina mycostatin boca lactante",
      nota: "Dosis según el documento: <1 mes, 1 ml cada 6 h; <1 año, 2 ml cada 6 h; >1 año, 3-5 ml cada 6 h.",
      texto: `
Nistatina tópica {{Dosis de nistatina|1 ml|2 ml|3-5 ml}} cada 6 horas durante 7-10 días. Aplicar y repartir con una gasa por toda la boca; también en el chupete, las tetinas y el pezón.
`,
      texto_ca: `
Nistatina tòpica {{Dosis de nistatina|1 ml|2 ml|3-5 ml}} cada 6 hores durant 7-10 dies. Aplicar i repartir amb una gasa per tota la boca; també al xumet, les tetines i el mugró.
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
      nota: "Casenlax según el documento: 6 meses-1 año, 1 sobre de 4 g al día; 1-4 años, 1-2 sobres de 4 g; 4-8 años, 2-4 sobres de 4 g; >8 años, 1-2 sobres de 10 g.",
      enlaces: [hoja.estrenimiento],
      texto: `
- Dieta rica en fibra (pan, pasta o cereales integrales, verduras y varias piezas de fruta al día) e hidratación abundante (5-6 vasos de agua al día). Ejercicio físico regular (al menos 3 días a la semana, 1 hora seguida). Hábito de sentarse en el baño cada día 10-15 minutos.
- Si dolor o malestar con las deposiciones, o heces duras: supositorio de glicerina de forma puntual.
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
      etiquetas: "rectorragia ruscus cohortan",
      nota: "Alternativa: Sinalar rectal (lleva corticoide).",
      texto: `
- Ruscus Llorens o Cohortan rectal cada 12 horas durante 5 días.
- Dieta rica en fibra, verduras y frutas, y beber 1,5-2 litros de agua al día.
`
    },

    {
      id: "pe-oxiuros",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Digestivo",
      titulo: "Oxiuros (mayores de 2 años)",
      etiquetas: "lombrices enterobius mebendazol lomper picor anal",
      nota: "Solo en mayores de 2 años.",
      texto: `
- Mebendazol (Lomper 100 mg comprimidos o suspensión 100 mg/5 ml): 100 mg (5 ml) vía oral, dosis única hoy, y repetir a las 2 semanas.
- Se recomienda que lo tomen también los contactos cercanos (adultos: 1 comprimido de 100 mg en cada dosis).
- Lavar toda la ropa, también la de cama, a alta temperatura.
`
    },

    /* ───────────── Piel ───────────── */

    {
      id: "pe-dermatitis-atopica",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Piel",
      titulo: "Dermatitis atópica",
      etiquetas: "eccema emolientes corticoide topico",
      revisar: "Reordenada: el documento ponía Peitel (prednicarbato, un corticoide) junto a los emolientes; se ha pasado a los brotes.",
      texto: `
- Emolientes a diario: crema para pieles atópicas (p. ej., la de Mercadona), Xeramance Plus o Leti AT4.
- En los brotes, corticoide tópico cada 24 horas durante 3-5 días: Peitel crema (o solución en el cuero cabelludo), Nutrasona (ISDIN), Lactisona, Lexxema o Betnovate.
`
    },

    {
      id: "pe-dermatitis-panal",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Piel",
      titulo: "Dermatitis del pañal",
      etiquetas: "culito zinc mitosyl candida",
      texto: `
- Mantener la zona del pañal lo más limpia y seca posible.
- Crema reparadora con zinc en cada cambio de pañal hasta la mejoría: Nutraisdin ZN40, Mitosyl o Cicalfate de Avène.
- Si no mejora, corticoide tópico: Nutrasona cada 12-24 horas durante 5-7 días.
- Si no mejora o sospecha de cándida, antifúngico: Nutraisdin AF o clotrimazol pomada cada 12 horas durante 7 días.
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
      etiquetas: "adolescente clindamicina peroxido benzoilo",
      texto: `
Escalonado según la intensidad:
1. Jabón Avène o Bactopur gel cada 12-24 horas.
2. Añadir clindamicina tópica (Clinwash) por la mañana y peróxido de benzoilo tópico por la noche.
3. Tetraciclinas orales.
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
      etiquetas: "picadura mosquito vaspit polaramine",
      texto: `
- Vaspit pomada sobre las lesiones cada 12 horas durante 5 días.
- Polaramine {{ml de Polaramine}} ml cada 12 horas durante 5 días, vía oral.
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
      revisar: "Según la ficha técnica de la permetrina (Sarcop, a partir de 2 meses), en lactantes se aplica también en cuero cabelludo, cuello, frente y sienes, evitando ojos y boca; la plantilla excluye cabeza y cara. Conviene además tratar a la vez a todos los convivientes, aunque no tengan lesiones.",
      texto: `
- Permetrina 5 % (Sarcop crema): aplicar por todo el cuerpo, excepto cabeza y cara, por la noche después de la ducha, y dejar actuar durante la noche. Repetir a los 7 días.
- Lavar toda la ropa, incluida la de cama, a 60 ºC, o guardarla en una bolsa cerrada durante 3 días.
- Cortar las uñas.
- Polaramine si picor.
- Los padres deberán tratarse si aparecen lesiones.
`
    },

    {
      id: "pe-tina-cutanea",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Piel",
      titulo: "Tiña cutánea / candidiasis cutánea / pitiriasis versicolor",
      etiquetas: "hongos dermatofitos terbinafina lamisil ketoconazol",
      texto: `
Lamisil (terbinafina) crema cada 12 horas sobre las lesiones durante 1 mes. Alternativa: ketoconazol tópico.
`
    },

    {
      id: "pe-tina-capitis",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Piel",
      titulo: "Tiña capitis",
      etiquetas: "tinea cuero cabelludo terbinafina hongos querion",
      nota: "Antes de iniciar el tratamiento, tomar cultivo: extraer 1-2 pelos y frotis con medio.",
      revisar: "La terbinafina oral se dosifica por peso: 62,5 mg/día si <20 kg, 125 mg/día si 20-40 kg y 250 mg/día si >40 kg, durante 2-4 semanas en Trichophyton. Frente a Microsporum responde peor: es preferible la griseofulvina.",
      texto: `
- Terbinafina 125 mg cada 24 horas durante 2 semanas.
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
      etiquetas: "habones alergia polaramine estilsona",
      nota: "Alternativa al Polaramine: Atarax (hidroxicina 10 mg/5 ml) 0,5 mg/kg cada 6 h.",
      enlaces: [hoja.urticaria, hoja.anafilaxia],
      texto: `
- Polaramine (2 mg/5 ml) {{ml de Polaramine}} ml cada {{Polaramine cada (horas)|*8|6-8}} horas durante 5-7 días, vía oral.
- Estilsona (7 mg/ml) {{ml de Estilsona}} ml cada 12 horas durante 3 días, vía oral.
- Ropa poco ajustada, preferiblemente de algodón.
- Evitar jabones, colonias u otros irritantes de la piel durante las próximas semanas.
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
      etiquetas: "exantema vesiculas calamina polaramine",
      texto: `
- Solución de calamina tópica en la piel.
- Higiene frecuente de manos y uñas.
- Si dolor o fiebre, paracetamol (100 mg/ml) {{ml de paracetamol}} ml cada 4-6 horas, vía oral.
- Si mucho picor: Polaramine (2 mg/5 ml) {{ml de Polaramine}} ml cada {{Polaramine cada (horas)|*6-8|12}} horas durante 5 días, vía oral.
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
      etiquetas: "ojo rojo legañas tobrex tobramicina bilina",
      nota: "Alternativa: Oftalmowell colirio (polimixina B, neomicina y gramicidina; a partir de 2 años), 4 veces al día durante 5 días.",
      revisar: "Frecuencia del Tobrex: RESIS pone cada 4 horas y la plantilla de pediatría cada 8. Según la ficha técnica, en infecciones leves o moderadas son 1-2 gotas cada 4 horas, y está indicado a partir de 1 año.",
      texto: `
- Lavados oculares con suero fisiológico y, después, Tobrex colirio (0,3 %) 1 gota en el ojo afecto cada {{Tobrex cada (horas)|*4|8}} horas durante 7 días.
- Tobrex pomada 1 vez al día, por la noche, en ambos ojos.
- No ir a la piscina ni a la playa.
- No acudir a la guardería o al colegio hasta la resolución del cuadro.
- Si conjuntivitis alérgica: Bilina colirio 2 gotas en cada ojo cada 12 horas durante 7 días.
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
      revisar: "La oclusión no se recomienda de rutina en la erosión corneal: no acelera la curación ni reduce el dolor (revisión Cochrane).",
      texto: `
- Pomada Oculos Epitelizante cada 8 horas (no financiada); si no, Tobrex u otra pomada con antibiótico.
- Oclusión ocular durante 24 horas.
`
    },

    /* ───────────── Genitourinario ───────────── */

    {
      id: "pe-itu",
      categoria: "pediatria",
      tipo: "tratamiento",
      grupo: "Genitourinario",
      titulo: "Infección urinaria (ITU)",
      etiquetas: "cefixima denvar urocultivo pielonefritis",
      nota: "Si es menor de 3 meses: ingreso.",
      revisar: "El máximo de la cefixima es 400 mg al día; el documento RESIS ponía 400 mg por dosis.",
      texto: `
- Si fiebre o dolor, paracetamol (100 mg/ml) {{ml de paracetamol}} ml cada 4-6 horas.
- Cefixima (Denvar 100 mg/5 ml) 8 mg/kg/día repartido cada 12 horas: {{ml de Denvar}} ml cada 12 horas (o comprimidos de 200 mg) durante 10 días, vía oral.
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
