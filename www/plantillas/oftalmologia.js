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
    texto: `
- Limpieza de secreciones con suero fisiológico y gasa estéril, de dentro hacia fuera.
- Tobramicina 3 mg/ml colirio: 1 gota cada 4 horas en {{Ojo|OD|OI|AO}} durante 7 días.
- Lavado frecuente de manos; no compartir toallas. No usar lentes de contacto hasta la curación.
- Reconsultar si dolor ocular, disminución de la visión, fotofobia o ausencia de mejoría en 48-72 horas.
`
  },

  {
    id: "of-trat-ojo-seco",
    categoria: "oftalmologia",
    tipo: "tratamiento",
    grupo: "Superficie ocular",
    titulo: "Ojo seco",
    etiquetas: "lagrimas artificiales higiene palpebral",
    ejemplo: true,
    texto: `
- Lágrimas artificiales sin conservantes: 1 gota en ambos ojos 4-6 veces al día.
- Higiene palpebral diaria con toallitas o gel específico y compresas tibias.
- Evitar ambientes secos y corrientes de aire; parpadear con frecuencia al usar pantallas.
`
  }

);
