/* =====================================================================
   OFTALMOLOGÍA
   Plantillas de EJEMPLO creadas para probar la app (ejemplo: true).
   Sustituidlas por las del equipo; las de oftalmología pediátrica
   están en pediatria.js.
   ===================================================================== */

PLANTILLAS.push(

  /* ───────────── EXPLORACIONES ───────────── */

  {
    id: "of-exp-basica",
    categoria: "oftalmologia",
    tipo: "exploracion",
    grupo: "General",
    titulo: "Exploración oftalmológica básica",
    etiquetas: "AV PIO BMC biomicroscopia fondo de ojo",
    ejemplo: true,
    texto: `
AV sc: OD {{AV OD}} / OI {{AV OI}}.
MOE: conservada, sin diplopía.
Pupilas: isocóricas y normorreactivas, sin DPAR.
BMC:
- Párpados y anejos: sin alteraciones.
- Conjuntiva: blanca, sin secreción.
- Córnea: transparente, fluoresceína negativa.
- Cámara anterior: amplia, Tyndall negativo.
- Cristalino: transparente.
PIO: OD {{PIO OD}} mmHg / OI {{PIO OI}} mmHg.
FO: papila de bordes nítidos y buena coloración. Mácula y vasos sin alteraciones. Retina aplicada.
`
  },

  {
    id: "of-exp-ojo-rojo",
    categoria: "oftalmologia",
    tipo: "exploracion",
    grupo: "Urgencias oftalmológicas",
    titulo: "Ojo rojo: exploración en urgencias",
    etiquetas: "hiperemia conjuntivitis fluoresceina",
    ejemplo: true,
    texto: `
Ojo afecto: {{Ojo|OD|OI|AO}}.
AV sc: OD {{AV OD}} / OI {{AV OI}}.
Párpados: sin edema ni lesiones.
Conjuntiva: hiperemia {{Hiperemia|difusa|periquerática|sectorial}}. Secreción {{Secreción|ausente|serosa|mucopurulenta}}.
Córnea: transparente. Fluoresceína {{Fluoresceína|negativa|positiva}}.
Cámara anterior: formada, Tyndall negativo.
Pupila: normorreactiva.
`
  },

  {
    id: "of-exp-fo",
    categoria: "oftalmologia",
    tipo: "exploracion",
    grupo: "Fondo de ojo",
    titulo: "Fondo de ojo normal",
    etiquetas: "FO papila retina macula oftalmoscopia",
    ejemplo: true,
    texto: `
FO {{Ojo|OD|OI|AO}}: papila de bordes nítidos, coloración normal, excavación {{E/P}}. Relación A/V conservada. Mácula con brillo foveal presente. Retina aplicada en 360°, sin hemorragias ni exudados.
`
  },

  /* ───────────── TRATAMIENTOS ───────────── */

  {
    id: "of-trat-conjuntivitis-bact",
    categoria: "oftalmologia",
    tipo: "tratamiento",
    grupo: "Conjuntiva",
    titulo: "Conjuntivitis bacteriana",
    etiquetas: "colirio antibiotico tobramicina legañas",
    ejemplo: true,
    nota: "Según la Guía Terapéutica semFYC: en las formas leves en pacientes sanos, solo medidas no farmacológicas. Antibiótico si no mejora tras 2-3 días o en inmunodeprimidos o con circunstancias de riesgo (lentes de contacto, diabetes mal controlada, intervención ocular reciente, ojo seco, imposibilidad de seguimiento o empeoramiento). Si la tobramicina está contraindicada: cloranfenicol pomada, 1 aplicación cada 4-6 h durante 5 días. Quinolonas solo en portadores de lentillas, resistencia al tratamiento o sospecha de Pseudomonas. Evitar colirios y pomadas con corticoides. Conjuntivitis hiperaguda (gonocócica) o en menores de 28 días: urgencias de oftalmología.",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): tobramicina 1 gota cada 4-6 h durante 5-7 días (antes cada 4 h durante 7 días), solo si no mejora tras 2-3 días de medidas o si hay circunstancias de riesgo. Se añaden las lágrimas artificiales y el uso individual de toallas, pañuelos y sábanas. Alternativas en la nota.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Conjuntivitis bacteriana", url: "https://guiaterapeutica.net/problemas/355/conjuntivitis-bacteriana" }
    ],
    texto: `
- Limpieza de secreciones con suero fisiológico y gasa estéril, de dentro hacia fuera. Las lágrimas artificiales pueden aliviar los síntomas.
- Si no mejora tras 2-3 días o hay circunstancias de riesgo: tobramicina 3 mg/ml colirio, 1 gota cada 4-6 horas en {{Ojo|OD|OI|AO}} durante 5-7 días.
- Lavado frecuente de manos; toallas, pañuelos y sábanas de uso individual. No usar lentes de contacto hasta la curación.
- Reconsultar si dolor ocular, disminución de la visión, fotofobia o ausencia de mejoría en 48-72 horas.
`
  },

  {
    id: "of-trat-conjuntivitis-virica",
    categoria: "oftalmologia",
    tipo: "tratamiento",
    grupo: "Conjuntiva",
    titulo: "Conjuntivitis vírica",
    etiquetas: "adenovirus contagio ojo rojo lagrimas artificiales compresas frias diclofenaco",
    ejemplo: true,
    nota: "Según la Guía Terapéutica semFYC: es autolimitada y no requiere tratamiento farmacológico. Si se sospecha sobreinfección bacteriana, tratarla como una conjuntivitis bacteriana. La adenovírica es muy contagiosa y puede asociarse a queratoconjuntivitis epidémica: en esos casos, que los niños no vayan a la guardería ni a la escuela hasta que mejoren los síntomas. Valorar la infección por herpes.",
    revisar: "Plantilla nueva (14/11/2026), hecha con la Guía Terapéutica semFYC (consultada 14/11/2026, conjuntivitis vírica). Revisadla antes de usarla.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Conjuntivitis vírica", url: "https://guiaterapeutica.net/problemas/356/conjuntivitis-virica" }
    ],
    texto: `
- No requiere tratamiento farmacológico: es un proceso autolimitado.
- Compresas frías. Lágrimas artificiales si hay sequedad ocular.
- Si hay una sensación intensa de cuerpo extraño: diclofenaco colirio, 1-2 gotas cada 6-8 horas en {{Ojo|OD|OI|AO}} durante 3-5 días.
- Es muy contagiosa: lavado frecuente de manos; toallas, sábanas, almohadas y teclados de ordenador de uso individual; pañuelos desechables.
- Si no se ha curado en 5-7 días, remitir a oftalmología.
`
  },

  {
    id: "of-trat-conjuntivitis-alergica",
    categoria: "oftalmologia",
    tipo: "tratamiento",
    grupo: "Conjuntiva",
    titulo: "Conjuntivitis alérgica",
    etiquetas: "alergia picor prurito colirio antihistaminico levocabastina olopatadina cetirizina loratadina",
    ejemplo: true,
    nota: "Según la Guía Terapéutica semFYC: antihistamínico en colirio como tratamiento sintomático; antihistamínico oral si el paciente está más sintomático o tiene rinoconjuntivitis. Si hay múltiples crisis estacionales, tratamiento preventivo con nedocromilo sódico colirio, 1 gota cada 8-12 h. Corticoides tópicos solo en las reacciones alérgicas graves: al mejorar el cuadro agudo, disminuir la dosis y la frecuencia; en los tratamientos largos, controlar la presión intraocular. El uso diario de vasoconstrictores tópicos puede producir hiperemia ocular de rebote. Niños: levocabastina en > 4 años, 1 gota cada 8-12 h; olopatadina en > 3 años, 1 gota cada 12 h; nedocromilo en > 6 años; cetirizina o loratadina en > 6 años, 10 mg/día (la cetirizina, en 2 tomas si < 13 años); fluorometolona en > 3 años, 1 gota cada 4-6 h.",
    revisar: "Plantilla nueva (14/11/2026), hecha con la Guía Terapéutica semFYC (consultada 13/11/2026, conjuntivitis alérgica). La guía no da signos de alarma ni criterios de derivación en esta entrada. Revisadla antes de usarla.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Conjuntivitis alérgica", url: "https://guiaterapeutica.net/problemas/354/conjuntivitis-alergica" }
    ],
    texto: `
- Evitar el agente que la desencadena. Compresas frías y lágrimas artificiales frescas para aliviar las molestias. Limpiar las secreciones.
- No frotarse los ojos. No usar lentes de contacto mientras haya síntomas.
- {{Colirio antihistamínico|*levocabastina|olopatadina}} colirio, 1 gota cada 12 horas en {{Ojo|OD|OI|AO}}.
- Si hay síntomas generales o rinoconjuntivitis: {{Antihistamínico oral|*cetirizina|loratadina}} 10 mg cada 24 horas, vía oral.
- Si no mejora y la reacción es grave: {{Corticoide en colirio|*fluorometolona al 0,1-0,25 %|dexametasona}}, 1-2 gotas cada 4-6 horas; al mejorar, reducir la dosis y la frecuencia. Si el tratamiento se alarga, controlar la presión intraocular.
`
  },

  {
    id: "of-trat-ojo-seco",
    categoria: "oftalmologia",
    tipo: "tratamiento",
    grupo: "Superficie ocular",
    titulo: "Ojo seco",
    etiquetas: "lagrimas artificiales higiene palpebral carmelosa carbomero",
    ejemplo: true,
    nota: "Según la Guía Terapéutica semFYC: carmelosa al 0,5-1 % en colirio, 1 gota cada 6-12 h, o carbómero al 0,25 % en gel, 1 aplicación por la noche. Las pomadas y los geles complementan las lágrimas y se aplican al acostarse, sobre todo si hay patología palpebral (blefaritis, ectropión, entropión, parálisis facial). Evitar en lo posible los fármacos que reducen la secreción lagrimal (anticolinérgicos, antihistamínicos, antidepresivos tricíclicos, ISRS, diuréticos, betabloqueantes, isotretinoína, ACO, tratamiento hormonal sustitutivo). Las lentes de contacto pueden empeorar el ojo seco.",
    revisar: "Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026): lágrimas sin conservantes, mejor en monodosis; valorar otro tratamiento si no mejora en un mes de uso regular; gel de carbómero por la noche como complemento; higiene palpebral con gasa y agua tibia y más medidas ambientales. A decidir: la guía da la carmelosa al 0,5-1 %, 1 gota cada 6-12 h, y dice que las lágrimas artificiales se aplican unas 4 veces al día; se conservan las 4-6 veces al día de la plantilla.",
    enlaces: [
      { titulo: "Guía Terapéutica semFYC · Ojo seco idiopático. Xerosis ocular idiopática", url: "https://guiaterapeutica.net/problemas/366/ojo-seco-idiopatico-xerosis-ocular-idiopatica" }
    ],
    texto: `
- Lágrimas artificiales sin conservantes (mejor en monodosis): 1 gota en ambos ojos 4-6 veces al día. Si no mejora en un mes de uso regular, valorar otro tratamiento.
- Si es preciso, como complemento: carbómero al 0,25 % en gel, 1 aplicación por la noche, al acostarse.
- Higiene palpebral diaria con una gasa y agua tibia, con masajes circulares (o con toallitas o gel específico), y compresas tibias.
- Evitar ambientes secos, calefacción o aire acondicionado excesivos, corrientes de aire y humo; parpadear con frecuencia al usar pantallas. Gafas si hay mucho viento y gafas de sol. Mantener la humedad de casa entre el 30 y el 50 %.
`
  }

);
