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
    etiquetas: "diclofenaco metamizol yurelax lyrica pregabalina",
    revisar: "Pregabalina (Lyrica): no ha demostrado beneficio en la cervicalgia ni en la lumbalgia sin radiculalgia, y la exploración de estas plantillas dice «no radiculalgia»; valorad reservarla para el dolor radicular. El último escalón de la pauta (1-1-1) está incompleto.",
    texto: `
Reposo relativo.
Calor local.
Diclofenaco 50 mg cada 8 horas, después de las comidas.
Metamizol 575 mg cada 8 horas, alternando con el diclofenaco si dolor.
Omeprazol 20 mg cada 24 horas, en ayunas.
Yurelax 1 comprimido cada 24 horas, antes de dormir.
Lyrica 75 mg en pauta ascendente:
- 0-0-1 durante 3 días.
- 1-0-1 durante 3 días.
- 1-1-1...
En caso de precisar su retirada, hacerlo de forma descendente.
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
    texto: `
Reposo relativo.
Frío local.
Diclofenaco 50 mg cada 8 horas, después de las comidas.
Metamizol 575 mg cada 8 horas, alternando con el diclofenaco si dolor.
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
    revisar: "Dosis fijas: solo sirven a partir de unos 35-40 kg. En niños, mejor pautar por peso (ibuprofeno 10 mg/kg/dosis cada 8 h; paracetamol 15 mg/kg/dosis cada 6-8 h).",
    texto: `
Reposo relativo.
Ibuprofeno 400 mg cada 8 horas, después de las comidas.
Paracetamol 500 mg cada 8 horas, alternando con el ibuprofeno si dolor.
`
  },

  {
    id: "tr-trat-agitacion",
    categoria: "traumatologia",
    tipo: "tratamiento",
    grupo: "Otros",
    titulo: "Agitación",
    etiquetas: "haloperidol largactil clorpromazina",
    revisar: "Pauta incompleta: falta la dosis de haloperidol en gotas y aclarar la unidad «1/2 sp» de Largactil.",
    texto: `
- Haloperidol gotas.
- Largactil (clorpromazina IM) 1/2 sp.
`
  }

);
