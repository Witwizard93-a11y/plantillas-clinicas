/* =====================================================================
   TRAUMATOLOGÍA
   Fuente: PLANTILLA_COT.docx. Cada región se ha separado en
   exploración (anamnesis, exploración, RX y diagnóstico) y tratamiento,
   para pegar cada parte en su apartado del informe.
   ===================================================================== */

PLANTILLAS.push(

  /* ───────────── EXPLORACIONES · COLUMNA ───────────── */

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

  /* ───────────── EXPLORACIONES · MIEMBRO SUPERIOR ───────────── */

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

  /* ───────────── EXPLORACIONES · MIEMBRO INFERIOR ───────────── */

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

  /* ───────────── TRATAMIENTOS ───────────── */

  {
    id: "tr-trat-raquis",
    categoria: "traumatologia",
    tipo: "tratamiento",
    grupo: "Columna",
    titulo: "Cervicalgia / lumbalgia: tratamiento",
    etiquetas: "ibuprofeno naproxeno paracetamol tramadol diazepam diclofenaco metamizol yurelax lyrica pregabalina",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): cervicalgia, paracetamol 0,5-1 g cada 4-6 h o ibuprofeno 400-1.200 mg/día; lumbalgia, ibuprofeno 400-1.200 mg/día o naproxeno 500 mg cada 12-24 h, y tramadol 50 mg/día si el dolor es intenso o no mejora (antes diclofenaco 50 mg cada 8 h, que estas entradas no recogen y que, según la de dolor crónico, añade riesgo cardiovascular). Metamizol solo si no puede tomar AINE; se conserva su dosis. Diazepam 5-10 mg cada 12-24 h si hay contractura, insomnio o ansiedad, en lugar de Yurelax: la guía considera escasa la evidencia de los miorrelajantes. Se retira la pregabalina (Lyrica), que resuelve la observación anterior: la guía no la recoge en la cervicalgia ni en la lumbalgia y, en la lumbociatalgia, dice que muestra escaso efecto sobre el dolor neuropático; para ese dolor da amitriptilina (10-25 mg al acostarse, subiendo 10-25 mg cada 3-4 días, máx. 75 mg/día) y después gabapentina. Reposo de no más de 2 días y mantener la actividad. Omeprazol solo si hay riesgo de sangrado digestivo (entrada de dolor crónico).",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Cervicalgia", url: "https://guiaterapeutica.net/problemas/285/cervicalgia" },
      { titulo: "Guía Terapéutica semFYC · Lumbalgia simple", url: "https://guiaterapeutica.net/problemas/321/lumbalgia-simple" },
      { titulo: "Guía Terapéutica semFYC · Lumbociatalgia. Ciática", url: "https://guiaterapeutica.net/problemas/322/lumbociatalgia-ciatica" }
    ],
    texto: `
Reposo relativo, no más de 2 días; mantener la actividad habitual en la medida de lo posible, sin esfuerzos ni sobrecargas.
Calor local.
Cervicalgia: paracetamol 0,5-1 g cada 4-6 horas (máx. 4 g/día; ancianos o IR grave, 3 g/día; IH, 2 g/día) o ibuprofeno 400-1.200 mg al día en 1-3 tomas, después de las comidas.
Lumbalgia: ibuprofeno 400-1.200 mg al día en 1-3 tomas o naproxeno 500 mg cada 12-24 horas, después de las comidas. Si el dolor es intenso o no mejora, asociar tramadol 50 mg al día (máx. 400 mg/día; ancianos o IR crónica, 25 mg/día, máx. 300 mg/día).
Metamizol 575 mg cada 8 horas solo si no puede tomar AINE.
Omeprazol 20 mg cada 24 horas, en ayunas, si hay riesgo de sangrado digestivo.
Si hay contractura muscular, dificultad para dormir o ansiedad: diazepam 5-10 mg cada 12-24 horas, un máximo de 2 semanas.
Ejercicios de estiramiento a partir de la 2.ª semana.
Control por su MAP.
`
  },

  {
    id: "tr-trat-contusion",
    categoria: "traumatologia",
    tipo: "tratamiento",
    grupo: "Contusiones y esguinces",
    titulo: "Contusión / esguince: tratamiento",
    etiquetas: "frio diclofenaco metamizol hombro codo muñeca mano rodilla tobillo pie cadera",
    nota: "Es el tratamiento común de las plantillas de hombro, codo, muñeca, mano, rodilla, tobillo y pie. En la de cadera el documento original no incluía «Frío local».",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): de elección, paracetamol 0,5-1 g cada 4-6 h o diclofenaco tópico cada 6-8 h; si no mejora, naproxeno 500 mg cada 12-24 h o ibuprofeno 400-1.200 mg/día (antes diclofenaco 50 mg oral cada 8 h, alternando con metamizol). Metamizol solo si el paracetamol o los AINE están contraindicados; se conserva su dosis, que la guía no da aquí. Frío 3 veces al día durante 10-15 minutos; el calor es más eficaz a partir de las 48-72 h.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Dolor osteomuscular agudo", url: "https://guiaterapeutica.net/problemas/448/dolor-osteomuscular-agudo" }
    ],
    texto: `
Reposo relativo.
Frío local, 3 veces al día durante 10-15 minutos.
Paracetamol 0,5-1 g cada 4-6 horas (máx. 4 g/día; ancianos o IR grave, 3 g/día; IH, 2 g/día) o diclofenaco tópico 1 aplicación cada 6-8 horas.
Si no mejora: naproxeno 500 mg cada 12-24 horas o ibuprofeno 400-1.200 mg al día en 1-3 tomas, después de las comidas.
Metamizol 575 mg cada 8 horas solo si el paracetamol o los AINE están contraindicados.
Control por su MAP.
`
  },

  {
    id: "tr-trat-fractura-radio",
    categoria: "traumatologia",
    tipo: "tratamiento",
    grupo: "Fracturas",
    titulo: "Fractura de radio distal desplazada: reducción",
    etiquetas: "colles muñeca yeso BABP mepivacaina reduccion cerrada",
    revisar: "Tras la reducción de una fractura desplazada, el seguimiento suele hacerse en consultas de traumatología con control radiológico a la semana, no solo por el MAP. Confirmad el circuito de vuestro centro.",
    texto: `
RX muñeca: fractura de radio distal desplazada.
Procedimientos:
Anestesia intrafocal con mepivacaína.
Reducción cerrada. Inmovilización con yeso BABP.
RX de control.
Tratamiento:
Reposo relativo.
Frío local.
Diclofenaco 50 mg cada 8 horas, después de las comidas.
Metamizol 575 mg cada 8 horas, alternando con el diclofenaco si dolor.
Control por su MAP.
`
  },

  {
    id: "tr-trat-analgesia-ev",
    categoria: "traumatologia",
    tipo: "tratamiento",
    grupo: "Analgesia",
    titulo: "Analgesia endovenosa",
    etiquetas: "enantyum nolotil dexketoprofeno metamizol adolonta tramadol yatrox rescate",
    texto: `
Enantyum 1 ampolla IV cada 8 h.
Nolotil 1 ampolla IV cada 8 h, alternando con el Enantyum.
Omeprazol IV cada 24 h.
Paracetamol 1 g IV cada 8 h (1.er rescate).
Adolonta + 1/2 ampolla de Yatrox IV (2.º rescate).
`
  },

  {
    id: "tr-trat-analgesia-ninos",
    categoria: "traumatologia",
    tipo: "tratamiento",
    grupo: "Analgesia",
    titulo: "Analgesia en niños",
    etiquetas: "pediatria ibuprofeno paracetamol",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): paracetamol de elección y por peso, 10-20 mg/kg cada 4-6 h (máx. 65 mg/kg/día) (antes 500 mg cada 8 h alternando con el ibuprofeno); el AINE, si no mejora. Resuelve en parte la observación anterior sobre las dosis fijas. A decidir: la entrada de dolor osteomuscular agudo no da dosis pediátrica de ibuprofeno (la de lumbalgia simple: 5-10 mg/kg cada 8 h, máx. 400 mg); se conservan 400 mg cada 8 h como valor por defecto. El diclofenaco tópico no tiene datos en menores de 14 años.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Dolor osteomuscular agudo", url: "https://guiaterapeutica.net/problemas/448/dolor-osteomuscular-agudo" }
    ],
    texto: `
Reposo relativo.
Paracetamol {{Paracetamol (mg por dosis)}} mg (10-20 mg/kg) cada 4-6 horas, vía oral (máximo 65 mg/kg al día).
Si no mejora: ibuprofeno {{Ibuprofeno (mg por dosis)=400}} mg cada 8 horas, después de las comidas.
`
  },

  {
    id: "tr-trat-agitacion",
    categoria: "traumatologia",
    tipo: "tratamiento",
    grupo: "Otros",
    titulo: "Agitación",
    etiquetas: "haloperidol midazolam diazepam largactil clorpromazina",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): se completan las dosis de haloperidol (anciano, 0,5-3 mg/día vo, 5-30 gotas; agitación grave, 2,5-5 mg IM cada 30-60 min, máx. 20 mg/24 h) y se añaden el midazolam IM, la asociación de haloperidol y midazolam y el diazepam vo, según el tipo de agitación. Resuelve la falta de dosis del haloperidol de la observación anterior. A decidir: la clorpromazina (Largactil) no figura en la guía y sigue sin aclarar la unidad «1/2 sp»; se conserva.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Agresividad. Agitación psicomotriz", url: "https://guiaterapeutica.net/problemas/60/agresividad-agitacion-psicomotriz" }
    ],
    texto: `
- Entrevista clínica para evitar que la agresividad pase a violencia.
- Agitación en el anciano: haloperidol 0,5-3 mg/día vo (5-30 gotas/día), repartido, si procede, en varias tomas.
- Agitación grave con síntomas psicóticos, patología respiratoria o intoxicación por alcohol o benzodiacepinas: haloperidol 2,5-5 mg IM, si es preciso cada 30-60 min (máx. 20 mg/24 h). En casos graves, haloperidol (media o 1 ampolla) + midazolam (1 ml) en la misma jeringa IM; si es preciso, repetir a los 30-45 min, hasta un máximo de 2-3 dosis.
- Agitación grave con predominio de la ansiedad, intoxicación por cocaína o drogas de diseño, hipertermia o rigidez: midazolam 5 mg (1 ml) IM, repetir cada 30-60 min (máx. 30 mg/24 h).
- Ansiedad, trastornos de personalidad o cuadros situacionales: diazepam 5 mg cada 8-12 h vo.
- Largactil (clorpromazina IM) 1/2 sp.
`
  }

);
