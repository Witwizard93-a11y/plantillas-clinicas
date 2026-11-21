/* =====================================================================
   URGENCIAS PEDIÁTRICAS · Protocolos de la SEUP
   Fuente: Sociedad Española de Urgencias de Pediatría (SEUP).
   Protocolos diagnósticos y terapéuticos en Urgencias de Pediatría,
   4.ª edición, febrero de 2024 (https://seup.org/protocolos/).
   Resumen práctico de cada protocolo: no sustituye al documento original.

   Cada protocolo: { id, numero, titulo, texto?, subtitulo?, bloques?, revisar?, fuentes? }
   Un protocolo sin «bloques» aparece en la lista como pendiente.
   Tipos de bloque: los de rcp.js y, además:
     puntuacion { id, titulo, intro?, items: [ { nombre, opciones: [[texto, puntos]] } ],
                  bandas: [{ desde, texto, nivel }], nota? }
       Cada ítem se puntúa eligiendo una opción; las bandas van de mayor a menor «desde».
   ===================================================================== */

window.CONTENIDO = window.CONTENIDO || {};

window.CONTENIDO.urgped = {
  titulo: "Urgencias pediátricas",
  subtitulo: "Protocolos de la SEUP · 4.ª edición, 2024",

  protocolos: [
    { id: "asma", numero: 4, titulo: "Crisis asmática",
      texto: "Pulmonary Score, tratamiento por gravedad, ingreso y alta",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · Paniagua Calzón N, Benito Fernández J",
      bloques: [
        { tipo: "paso", tono: "inicio", titulo: "Crisis asmática",
          items: ["Triaje: motivo de consulta, frecuencia respiratoria y SatO2.",
                  "Estimar la gravedad con el Pulmonary Score y la SatO2."] },

        { tipo: "puntuacion", id: "pulmonary-score", titulo: "Pulmonary Score",
          intro: "Tres ítems de 0 a 3 puntos (total de 0 a 9).",
          items: [
            { nombre: "Frecuencia respiratoria, menor de 6 años",
              opciones: [["Menos de 30", 0], ["31-45", 1], ["46-60", 2], ["Más de 60", 3]] },
            { nombre: "Frecuencia respiratoria, 6 años o más",
              opciones: [["Menos de 20", 0], ["21-35", 1], ["36-50", 2], ["Más de 50", 3]] },
            { nombre: "Sibilancias",
              opciones: [["No", 0], ["Final de la espiración", 1], ["Toda la espiración", 2], ["Inspiración y espiración sin fonendo*", 3]] },
            { nombre: "Uso de la musculatura accesoria",
              opciones: [["No", 0], ["Leve", 1], ["Moderado", 2], ["Máximo", 3]] }
          ],
          grupoUnico: [[0, 1]],
          bandas: [
            { desde: 7, texto: "Crisis grave (PS mayor de 6).", nivel: "alto" },
            { desde: 4, texto: "Crisis moderada (PS 4-6).", nivel: "medio" },
            { desde: 0, texto: "Crisis leve (PS 3 o menos).", nivel: "bajo" }
          ],
          nota: "Puntúa solo una de las dos filas de frecuencia respiratoria, según la edad. *Si no hay sibilancias y el uso de la musculatura accesoria está aumentado, puntuar las sibilancias con 3." },

        { tipo: "tabla", titulo: "Gravedad global: Pulmonary Score y SatO2",
          columnas: ["Gravedad", "Pulmonary Score", "SatO2"],
          filas: [
            ["Leve", "3 o menos", "Más del 94 %"],
            ["Moderada", "4-6", "91-94 %"],
            ["Grave", "Más de 6", "Menos del 91 %"]
          ],
          nota: "Si el PS y la SatO2 no coinciden, se usa el que otorgue mayor gravedad. Una SatO2 inicial menor del 92 % se asocia a mayor riesgo de hospitalización." },

        { tipo: "ramas", ramas: [
          { titulo: "Leve", subtitulo: "PS 3 o menos y SatO2 mayor del 94 %", tono: "nodesfibrilable",
            bloques: [
              { tipo: "paso", tono: "farmaco", titulo: "Salbutamol con MDI y cámara",
                texto: "Tres dosis en la primera hora (cada 20 minutos) y después a demanda según evolución." },
              { tipo: "paso", tono: "accion", titulo: "Corticoide oral si…",
                items: ["No responde de forma inmediata y completa tras la primera dosis de salbutamol.",
                        "Tiene factores de riesgo de crisis grave."] }
            ] },
          { titulo: "Moderada", subtitulo: "PS 4-6 o SatO2 91-94 %", tono: "nodesfibrilable",
            bloques: [
              { tipo: "paso", tono: "farmaco", titulo: "Salbutamol con MDI y cámara + bromuro de ipratropio",
                texto: "Salbutamol: tres dosis en la primera hora (cada 20 minutos). Ipratropio: dos o tres dosis junto a las primeras de salbutamol." },
              { tipo: "paso", tono: "farmaco", titulo: "Corticoide oral precoz",
                texto: "Dexametasona de elección. Indicador de calidad: administrarlo durante la primera hora." },
              { tipo: "paso", tono: "accion", titulo: "Oxígeno si hay gran trabajo respiratorio o hipoxemia",
                texto: "Objetivo SatO2 de 92 % o más." }
            ] },
          { titulo: "Grave", subtitulo: "PS mayor de 6 o SatO2 menor del 91 %", tono: "desfibrilable",
            bloques: [
              { tipo: "paso", tono: "accion", titulo: "Oxígeno", texto: "Objetivo SatO2 de 92 % o más." },
              { tipo: "paso", tono: "farmaco", titulo: "Salbutamol nebulizado + bromuro de ipratropio",
                texto: "La vía nebulizada se reserva para crisis graves y fallo respiratorio. Considerar salbutamol nebulizado continuo si lo tolera." },
              { tipo: "paso", tono: "farmaco", titulo: "Corticoide sistémico precoz",
                texto: "Oral de elección; metilprednisolona i.v. en los casos más graves o si no tolera la vía oral." },
              { tipo: "paso", tono: "farmaco", titulo: "Si no mejora en 1-2 horas: sulfato de magnesio i.v.",
                texto: "También en crisis moderadas que no mejoran con el rescate inicial." }
            ] }
        ] },

        { tipo: "paso", tono: "decision", titulo: "Fallo respiratorio o crisis potencialmente mortal: estabilización",
          items: ["Monitorización completa con capnografía.",
                  "A: postura semiincorporada; valorar secuencia rápida de intubación.",
                  "B: oxígeno al 100 %; valorar oxigenoterapia de alto flujo.",
                  "C: vía periférica y analítica con gasometría.",
                  "Salbutamol + ipratropio nebulizados, corticoide i.v. y sulfato de magnesio i.v.",
                  "Considerar radiografía de tórax."] },

        { tipo: "tabla", titulo: "Fármacos y dosis",
          columnas: ["Fármaco", "Dosis", "Observaciones"],
          filas: [
            ["Salbutamol MDI con cámara (100 µg/puff)", "Peso/3 puffs: mínimo 5, máximo 10. Estandarizada: 5-10 kg, 4 puffs; 10-20 kg, 6 puffs; más de 20 kg, 8 puffs.", "De elección. Menores de 4 años con mascarilla buconasal."],
            ["Salbutamol nebulizado", "0,15 mg/kg: mínimo 2,5 mg, máximo 5 mg (considerar mínimo de 1,5 mg en lactantes pequeños o menores de 10 kg). Estandarizada: menos de 20 kg, 2,5 mg; más de 20 kg, 5 mg.", "Con O2 a 6-8 l/min. Crisis graves y fallo respiratorio."],
            ["Bromuro de ipratropio MDI con cámara", "Menos de 20 kg: 4 puffs. Más de 20 kg: 8 puffs.", "Crisis moderadas y graves. Dos o tres dosis con las primeras de salbutamol."],
            ["Bromuro de ipratropio nebulizado", "Menos de 20 kg: 250 µg. Más de 20 kg: 500 µg.", "Crisis moderadas y graves."],
            ["Dexametasona v.o.", "0,6 mg/kg, máximo 12 mg.", "De elección. Repetir la misma dosis a las 24 horas."],
            ["Prednisona/prednisolona v.o.", "1-2 mg/kg de inicio y después 1-2 mg/kg/día, 3-5 días, en 1-2 dosis. Máximo 60 mg.", "Sin pauta descendente."],
            ["Metilprednisolona i.v.", "1-2 mg/kg de inicio y después 1-2 mg/kg/día. Máximo 125 mg/día.", "Casos más graves o intolerancia oral."],
            ["Sulfato de magnesio i.v.", "40 mg/kg, máximo 2 g, dosis única en 20 minutos.", "No rutinario. Monitorizar la tensión arterial. Contraindicado en insuficiencia renal."]
          ] },

        { tipo: "lista", titulo: "Soporte respiratorio",
          items: ["Oxigenoterapia de alto flujo: considerarla en fallo respiratorio o si, tras el tratamiento intensivo inicial, persiste PS mayor de 6, SatO2 menor del 94 % con mascarilla reservorio o pCO2/EtCO2 mayor de 45 mmHg.",
                  "Si el distrés no mejora en la 1.ª-2.ª hora de alto flujo, no retrasar la ventilación no invasiva.",
                  "Ventilación no invasiva (CPAP o BiPAP): tratamiento de elección en la insuficiencia respiratoria.",
                  "Ketamina: puede considerarse para la sedoanalgesia previa a la intubación en el estatus asmático.",
                  "Adrenalina i.m.: no rutinaria; solo en anafilaxia o broncoconstricción grave refractaria muy seleccionada.",
                  "Heliox y antileucotrienos: evidencia controvertida."] },

        { tipo: "lista", titulo: "Factores de riesgo de crisis asmática grave",
          items: ["Antecedente de crisis graves o de rápido empeoramiento, o ingreso en UCIP.",
                  "Dos o más hospitalizaciones o tres o más visitas a Urgencias en el año previo.",
                  "Múltiples visitas a Urgencias en el mes previo.",
                  "Uso reciente o concomitante de corticoides sistémicos.",
                  "Sin tratamiento actual con corticoides inhalados.",
                  "Seguimiento inadecuado o incumplimiento del tratamiento.",
                  "Sobreutilización de salbutamol en el último mes.",
                  "Alergia alimentaria.",
                  "Dificultad de acceso a Urgencias o problemas psicosociales."] },

        { tipo: "lista", titulo: "Ingreso hospitalario (observación o planta)",
          items: ["Dificultad respiratoria persistente tras el tratamiento inicial.",
                  "Necesidad mantenida de broncodilatador con una frecuencia menor de 2 horas.",
                  "Necesidad de oxígeno suplementario.",
                  "Enfermedad de base grave: cardiopatía, displasia broncopulmonar, fibrosis quística, enfermedad neuromuscular.",
                  "Antecedente de crisis grave o de rápida progresión.",
                  "Mala adherencia o dificultad de acceso a la atención sanitaria."] },

        { tipo: "lista", titulo: "Ingreso en UCIP",
          items: ["Pulmonary Score de gravedad persistente tras el tratamiento inicial.",
                  "SatO2 menor del 90 % con FiO2 mayor de 0,4, o pCO2 mayor de 45 mmHg, a pesar del rescate: valorar alto flujo y, si fracasa o no está disponible, ventilación no invasiva en UCIP.",
                  "Arritmias."] },

        { tipo: "lista", titulo: "Criterios de alta",
          items: ["Estabilidad clínica mantenida, sin recaídas.",
                  "PS de 2 o menos y SatO2 de 92 % o más, sin signos de dificultad respiratoria.",
                  "Familia colaboradora y técnica inhalatoria adecuada.",
                  "Control por su pediatra en 24-48 horas."] },

        { tipo: "lista", titulo: "Tratamiento al alta",
          items: ["Salbutamol MDI con cámara a demanda (5 puffs) y espaciar según tolerancia y control ambulatorio.",
                  "Si recibió dexametasona: segunda dosis a las 24 horas. Si recibió prednisona/prednisolona: completar 3-5 días.",
                  "Revisar la técnica inhalatoria antes del alta.",
                  "Informar a la familia, también por escrito: signos de dificultad respiratoria, manejo en casa, cuándo volver, adherencia y evitar desencadenantes, sobre todo el tabaco."] },

        { tipo: "lista", titulo: "Valorar iniciar o aumentar corticoides inhalados (o derivar al centro de salud)",
          items: ["Asma persistente: síntomas diurnos más de 2 veces por semana o nocturnos más de 2 veces al mes.",
                  "Dos o más episodios con corticoide oral en 6 meses.",
                  "Crisis grave que requirió ingreso.",
                  "Cuatro o más episodios de sibilancias en el último año, con atopia o antecedentes familiares de asma."] }
      ],
      revisar: [
        "La figura del algoritmo del PDF no se puede leer con seguridad: las tres ramas (leve, moderada, grave) se han montado a partir del texto del protocolo."
      ],
      fuentes: [
        { titulo: "SEUP. Diagnóstico y tratamiento de la crisis asmática en Urgencias. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/4_Asma_4ed.pdf" }
      ] },

    { id: "bronquiolitis", numero: 5, titulo: "Bronquiolitis aguda",
      texto: "Escala de Tal modificada, oxígeno, alto flujo, ingreso y alta",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · Benito Fernández J, Paniagua Calzón N",
      bloques: [
        { tipo: "paso", tono: "inicio", titulo: "Bronquiolitis aguda",
          items: ["Primer episodio de dificultad respiratoria con sibilancias o subcrepitantes, precedido de catarro, en menor de 2 años, sin otra causa (criterios de McConnochie).",
                  "Diagnóstico clínico. TEP y ABCDE; si hay fallo respiratorio, aspirar secreciones y dar oxígeno antes de la historia detallada.",
                  "Valorar siempre la gravedad después de aspirar las secreciones nasofaríngeas."] },

        { tipo: "puntuacion", id: "tal-modificada", titulo: "Escala de Tal modificada",
          intro: "Puntuar después de aspirar secreciones. Cuatro ítems de 0 a 3 puntos.",
          items: [
            { nombre: "Frecuencia respiratoria, menor de 6 meses",
              opciones: [["40 o menos", 0], ["41-55", 1], ["56-70", 2], ["Más de 70", 3]] },
            { nombre: "Frecuencia respiratoria, 6 meses o más",
              opciones: [["30 o menos", 0], ["31-45", 1], ["46-60", 2], ["Más de 60", 3]] },
            { nombre: "Sibilancias o crepitantes",
              opciones: [["No", 0], ["Solo en espiración", 1], ["Insp. y esp., con fonendo", 2], ["Insp. y esp., sin fonendo", 3]] },
            { nombre: "Retracciones",
              opciones: [["No", 0], ["Leves: intercostales", 1], ["Moderadas: intercostales", 2], ["Intensas: intercostales y supraesternales, cabeceo", 3]] },
            { nombre: "SatO2",
              opciones: [["95 % o más", 0], ["92-94 %", 1], ["90-91 %", 2], ["89 % o menos", 3]] }
          ],
          grupoUnico: [[0, 1]],
          bandas: [
            { desde: 9, texto: "Bronquiolitis grave (más de 8).", nivel: "alto" },
            { desde: 6, texto: "Bronquiolitis moderada (6-8).", nivel: "medio" },
            { desde: 0, texto: "Bronquiolitis leve (5 o menos).", nivel: "bajo" }
          ],
          nota: "Puntúa solo una de las dos filas de frecuencia respiratoria, según la edad. El protocolo cita también Wood-Downes modificado, RDAI y BROSJOD, sin detallarlas: recomienda usar alguna escala." },

        { tipo: "lista", titulo: "Factores de riesgo de enfermedad grave",
          items: ["Prematuridad de menos de 35 semanas.", "Edad menor de 6 semanas.", "Displasia broncopulmonar.", "Fibrosis quística.",
                  "Cardiopatía congénita con repercusión hemodinámica significativa.", "Inmunodeficiencia.",
                  "Otros: enfermedad neuromuscular, parálisis cerebral y algunas malformaciones congénitas."] },

        { tipo: "lista", titulo: "Pruebas complementarias",
          items: ["En general no son necesarias. Analítica de sangre: rara vez.",
                  "Tira de orina: si fiebre persistente de más de 39,5 °C (infección urinaria en un 5 %).",
                  "Radiografía de tórax: no rutinaria; considerarla si hay deterioro clínico evidente o dudas diagnósticas.",
                  "SatO2: control intermitente con el resto de constantes. Monitorización continua solo si lleva oxígeno.",
                  "Estudio etiológico (antígeno del VRS, PCR): opcional, sobre todo para el control de la infección nosocomial."] },

        { tipo: "paso", tono: "accion", titulo: "Medidas de soporte",
          items: ["Lavado y aspiración nasal, cabecera elevada y tomas fraccionadas.",
                  "Sonda nasogástrica (4-6 ml/kg/h) o vía i.v. (80 % de las necesidades basales si no hay deshidratación) si rechaza la ingesta o está deshidratado.",
                  "Casos graves o inestables: vía aérea, postura semiincorporada, aspirar secreciones, oxígeno a flujo alto y observación hospitalaria tras estabilizar."] },
        { tipo: "paso", tono: "farmaco", titulo: "Oxígeno",
          texto: "Humidificado y caliente (gafas nasales o mascarilla) si la SatO2 se mantiene por debajo del 90-92 %, o si es menor del 92 % con puntuación moderada tras aspirar." },
        { tipo: "paso", tono: "farmaco", titulo: "Oxigenoterapia de alto flujo: rescate si falla el oxígeno convencional",
          items: ["Empezar con 6 l/min o 1 l/kg/min y subir al flujo objetivo en pocos minutos.",
                  "Flujo máximo: hasta 10 kg, 2 l/kg/min (máximo 20 l/min). Más de 10 kg: 2 l/kg/min por los primeros 10 kg y 0,5 l/kg/min por cada kg de más (máximo 40 l/min).",
                  "FiO2 inicial del 50-60 %, ajustada para SatO2 mayor del 93 %.",
                  "Sin mejoría clínica o gasométrica en 2 horas: escalar el soporte respiratorio (CPAP o BiPAP)."] },

        { tipo: "tabla", titulo: "Fármacos",
          columnas: ["Fármaco", "Indicación según el protocolo", "Dosis"],
          filas: [
            ["Salbutamol", "No rutinario. Solo en mayores de 12 meses con atopia o asma personal o familiar, fuera de la epidemia de VRS (noviembre-febrero). Si no responde, no seguir.", "MDI con cámara: 5 puffs. Nebulizado: 0,15 mg/kg (mínimo 1,5 mg, máximo 2,5 mg), con O2 a 6-8 l/min si distrés grave."],
            ["Adrenalina nebulizada", "Rescate en ingresados con bronquiolitis moderada-grave; efecto muy transitorio. Las recomendaciones más recientes la desaconsejan.", "0,5 mg/kg (máximo 3 mg) con SSF; O2 a 6-8 l/min."],
            ["Suero salino hipertónico", "Sin beneficio adicional demostrado.", "—"],
            ["Corticoides orales o inhalados", "Inapropiados.", "—"],
            ["Mucolíticos, antitusivos, teofilina, ipratropio, broncodilatadores orales", "Inapropiados.", "—"],
            ["Antibióticos", "Solo si se sospecha infección bacteriana concomitante.", "—"]
          ] },

        { tipo: "lista", titulo: "Observación u hospitalización",
          items: ["Factor de riesgo: cardiopatía con repercusión hemodinámica, enfermedad pulmonar crónica, inmunodeficiencia o prematuridad de menos de 35 semanas.",
                  "Edad menor de 6 semanas, sea cual sea el distrés.",
                  "Apnea referida por los padres o presenciada.",
                  "Ingesta inadecuada o atragantamientos frecuentes.",
                  "Necesidad de oxígeno para mantener SatO2 mayor del 92 %.",
                  "Puntuación moderada o grave tras aspirar y tras las terapias adicionales.",
                  "Entorno social desfavorable (domicilio lejano, padres poco entrenados)."] },
        { tipo: "lista", titulo: "UCI",
          items: ["Insuficiencia respiratoria grave que no mejora con el tratamiento o que empeora de nuevo en menos de 1 hora.",
                  "Apneas recurrentes con desaturación."] },
        { tipo: "lista", titulo: "Recomendaciones al alta",
          items: ["Aspirar secreciones si hay dificultad respiratoria, sobre todo antes de las tomas, del sueño y de la medicación inhalada.",
                  "Tomas fraccionadas y cabecera de la cuna elevada a 30°.",
                  "Evitar el tabaquismo pasivo. Antitérmicos si hay fiebre.",
                  "No usar fisioterapia ni humedad ambiental: ineficaces y a veces perjudiciales.",
                  "Explicar que puede empeorar y cuándo volver. Dura de media 12 días; hasta un 20 % sigue con síntomas a los 21 días."] }
      ],
      revisar: [
        "Edad de riesgo: el texto dice menor de 6 semanas y el pie de la figura 1, menor de 12 semanas. Se ha puesto 6 semanas.",
        "La figura del algoritmo no se puede leer con seguridad: no se ha asignado tratamiento a cada grado de gravedad."
      ],
      fuentes: [
        { titulo: "SEUP. Diagnóstico y tratamiento de la bronquiolitis aguda en Urgencias. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/5_Bronquiolitis_4ed.pdf" }
      ] },

    { id: "laringitis", numero: 6, titulo: "Laringitis",
      texto: "Escala de Westley, dexametasona y adrenalina nebulizada",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · Guirado Rivas C, Luaces Cubells C",
      bloques: [
        { tipo: "paso", tono: "inicio", titulo: "Laringitis aguda (crup)",
          items: ["Diagnóstico clínico: tos perruna, con o sin estridor inspiratorio o dificultad respiratoria.",
                  "Pruebas complementarias: en general no necesarias.",
                  "Mantener al niño tranquilo y acompañado; evitar manipular la vía aérea o actuaciones que favorezcan el espasmo, incluida la vía venosa.",
                  "Oxígeno si hay hipoxemia, para SatO2 de 93 % o más."] },

        { tipo: "puntuacion", id: "westley", titulo: "Escala de Westley",
          items: [
            { nombre: "Estridor inspiratorio", opciones: [["No", 0], ["Con la agitación", 1], ["En reposo", 2]] },
            { nombre: "Retracciones", opciones: [["No", 0], ["Leves", 1], ["Moderadas", 2], ["Graves", 3]] },
            { nombre: "Ventilación", opciones: [["Normal", 0], ["Hipoventilación leve", 1], ["Hipoventilación moderada-grave", 2]] },
            { nombre: "Cianosis", opciones: [["No", 0], ["Con la agitación", 4], ["En reposo", 5]] },
            { nombre: "Nivel de consciencia", opciones: [["Normal", 0], ["Disminuido", 5]] }
          ],
          bandas: [
            { desde: 12, texto: "Fallo respiratorio inminente (12 o más).", nivel: "alto" },
            { desde: 8, texto: "Laringitis grave (8-11).", nivel: "alto" },
            { desde: 3, texto: "Laringitis moderada (3-7).", nivel: "medio" },
            { desde: 0, texto: "Laringitis leve (2 o menos).", nivel: "bajo" }
          ] },

        { tipo: "tabla", titulo: "Diagnóstico diferencial",
          columnas: ["", "Laringitis (crup)", "Epiglotitis", "Laringotraqueítis bacteriana"],
          filas: [
            ["Inicio", "Progresivo, pródromos de 1-5 días", "Súbito", "Pródromos de 2-5 días"],
            ["Fiebre", "—", "Alta", "Moderada"],
            ["Voz", "Ronca, tos perruna", "Apagada", "Normal"],
            ["Disfagia y babeo", "No", "Sí", "—"],
            ["Otros", "—", "Sentado, cuello en extensión y boca abierta", "Paredes traqueales edematosas"]
          ],
          nota: "Otras causas de estridor: laringitis espasmódica, laringo y traqueomalacia, cuerpo extraño, anillos vasculares, tumor mediastínico, inhalación de tóxicos, estenosis traqueal." },

        { tipo: "ramas", ramas: [
          { titulo: "Leve", subtitulo: "Westley 2 o menos", tono: "nodesfibrilable",
            bloques: [
              { tipo: "paso", tono: "farmaco", titulo: "Dexametasona oral, dosis única",
                texto: "0,15-0,6 mg/kg, máximo 10 mg. Si no tolera la vía oral: budesonida nebulizada 2 mg, dosis única." },
              { tipo: "paso", tono: "fin", titulo: "Alta explicando los signos de alarma" }
            ] },
          { titulo: "Moderada", subtitulo: "Westley 3-7", tono: "nodesfibrilable",
            bloques: [
              { tipo: "paso", tono: "farmaco", titulo: "Adrenalina nebulizada con oxígeno",
                texto: "0,5 mg/kg, máximo 5 mg." },
              { tipo: "paso", tono: "farmaco", titulo: "Dexametasona oral, dosis única",
                texto: "0,15-0,6 mg/kg, máximo 10 mg." }
            ] },
          { titulo: "Grave", subtitulo: "Westley 8 o más", tono: "desfibrilable",
            bloques: [
              { tipo: "paso", tono: "farmaco", titulo: "Adrenalina nebulizada",
                texto: "0,5 mg/kg, máximo 5 mg." },
              { tipo: "paso", tono: "farmaco", titulo: "Corticoide sistémico, dosis única",
                texto: "Dexametasona oral, i.v. o i.m." },
              { tipo: "paso", tono: "decision", titulo: "¿Mejora?",
                items: ["Sí: observar 3-4 horas y alta si la evolución es buena.",
                        "No o empeora: repetir la adrenalina nebulizada, hasta 3 dosis, con al menos 30 minutos entre dosis. Valorar ingreso en planta o UCIP según la respuesta y la gravedad."] },
              { tipo: "nota", texto: "Si precisa intubación: tubo frío de diámetro menor al que le corresponde por edad." }
            ] }
        ] },

        { tipo: "lista", titulo: "Detalles de los fármacos",
          items: ["Dexametasona: actúa a las 2-3 horas y dura 36-72 horas. Un estudio reciente sugiere que 0,15 mg/kg puede ser tan eficaz como 0,6 mg/kg.",
                  "Prednisolona, si no hay dexametasona: 1 mg/kg/día durante 3 días.",
                  "Budesonida nebulizada 2 mg, sea cual sea el peso o la edad: no es de primera línea. Si hay vómitos o intolerancia oral, o en dificultad grave sin vía i.v. rápida (mezclada con la adrenalina en una sola nebulización). No combinar corticoide nebulizado y sistémico.",
                  "Adrenalina nebulizada 1/1.000: actúa a los 10 minutos, pico a los 30 y dura 2 horas. Observar al menos 3-4 horas antes del alta. Darla junto a corticoide evita el empeoramiento al pasar su efecto.",
                  "Heliox (20-30 % de O2), continuo: sobre todo si la respuesta al tratamiento estándar es parcial. Evidencia limitada.",
                  "Aire frío exterior (menos de 10 °C) durante 30 minutos, como complemento de la dexametasona, sobre todo en las moderadas."] },

        { tipo: "lista", titulo: "Criterios de ingreso",
          items: ["Afectación del estado general o deterioro progresivo.", "Puntuación moderada o grave sin mejoría tras el tratamiento.",
                  "Hipoxia.", "Tiraje intenso o taquipnea.", "Cianosis o palidez extrema.", "Disminución del nivel de consciencia.",
                  "Antecedente de obstrucción grave o anomalía estructural de la vía aérea.", "Edad menor de 6 meses.",
                  "Mala respuesta al tratamiento habitual.", "Diagnóstico incierto.", "Ansiedad familiar o entorno sociofamiliar desfavorable.",
                  "Dificultad de acceso a la atención sanitaria.", "Visitas repetidas a Urgencias."] },
        { tipo: "lista", titulo: "Criterios de alta (todos)",
          items: ["Sin estridor en reposo.", "SatO2 normal.", "Sin dificultad respiratoria.", "Buena coloración y buen estado general.",
                  "Buena tolerancia oral a líquidos.", "Posibilidad de volver al hospital si empeora."] }
      ],
      revisar: [
        "Escala de Westley: la tabla del PDF no se lee con seguridad. Los puntos de cada opción son los de la escala de Westley estándar, que encajan con la cabecera de la tabla (0 a 5). Comprobarlos con la tabla 3 del original.",
        "La escala de Taussig del protocolo no se ha incluido: sus puntos tampoco se leen y los cortes del documento se solapan (5 y 7).",
        "El protocolo no define criterios de ingreso en UCIP."
      ],
      fuentes: [
        { titulo: "SEUP. Diagnóstico y tratamiento de la laringitis en Urgencias. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/6_Laringitis_4ed.pdf" }
      ] },

    { id: "anafilaxia", numero: 7, titulo: "Anafilaxia",
      texto: "Criterios, adrenalina i.m., anafilaxia refractaria, observación y alta",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · Olabarri García M",
      bloques: [
        { tipo: "lista", titulo: "Criterios diagnósticos (basta con uno)",
          items: ["1. Inicio agudo (minutos u horas) de afectación de piel o mucosas (urticaria generalizada, prurito, eritema, flushing, edema de labios, úvula o lengua) y al menos uno de: compromiso respiratorio (disnea, sibilancias, estridor, PEF bajo, hipoxemia), o hipotensión o disfunción orgánica (hipotonía, síncope, incontinencia).",
                  "2. Aparición rápida, tras exposición a un alérgeno probable, de dos o más de: afectación de piel o mucosas; compromiso respiratorio; hipotensión o disfunción orgánica; síntomas digestivos persistentes (dolor abdominal, cólico, vómitos).",
                  "3. Hipotensión en minutos u horas tras exposición a un alérgeno conocido para el paciente. Lactantes: TAS menor de 70 mmHg. De 1 a 10 años: TAS menor de 70 + (edad × 2) mmHg. Más de 10 años: TAS menor de 90 mmHg o descenso del 30 % sobre la basal."] },
        { tipo: "nota", texto: "El diagnóstico es clínico. La triptasa es la prueba más útil, pero nunca debe retrasar el tratamiento: extraer en el minuto 0, a los 120 minutos y a las 24 horas. En niños rinde poco." },

        { tipo: "paso", tono: "inicio", titulo: "ABCDE",
          items: ["Retirar el alérgeno si es posible.", "Decúbito supino, salvo dificultad respiratoria.",
                  "Oxígeno con mascarilla reservorio. Monitor y acceso venoso."] },
        { tipo: "paso", tono: "farmaco", titulo: "Adrenalina i.m.: primera línea",
          items: ["0,01 mg/kg (adrenalina 1/1.000 sin diluir: 0,01 ml/kg), máximo 0,5 mg.",
                  "Cara anterolateral del muslo.",
                  "Repetir cada 5 minutos si la respuesta es insuficiente."] },
        { tipo: "ramas", ramas: [
          { titulo: "Shock", subtitulo: "Fallo cardiovascular", tono: "desfibrilable",
            bloques: [ { tipo: "paso", tono: "farmaco", titulo: "SSF 20 ml/kg",
              texto: "Segundo acceso venoso o intraóseo. Repetir la expansión si hace falta." } ] },
          { titulo: "Estridor", subtitulo: "Obstrucción alta", tono: "nodesfibrilable",
            bloques: [ { tipo: "paso", tono: "farmaco", titulo: "Adrenalina nebulizada", texto: "0,5 mg/kg, máximo 5 mg." } ] },
          { titulo: "Broncoespasmo", subtitulo: "Obstrucción baja", tono: "nodesfibrilable",
            bloques: [ { tipo: "paso", tono: "farmaco", titulo: "Salbutamol",
              texto: "MDI 5-10 puffs, o nebulizado (menos de 20 kg, 2,5 mg; más de 20 kg, 5 mg). Repetir si persiste la dificultad respiratoria." } ] }
        ] },
        { tipo: "paso", tono: "decision", titulo: "Sin respuesta tras dos dosis i.m.: anafilaxia refractaria",
          items: ["Adrenalina i.v. en perfusión continua: 0,1-1 µg/kg/min. Preparación: 1 mg de adrenalina 1/1.000 en 100 ml de SSF (1/100.000).",
                  "Si toma betabloqueantes: glucagón i.v. 20-30 µg/kg (máximo 1 mg) y después 5-15 µg/min en perfusión.",
                  "Preparar secuencia rápida de intubación si procede. Contactar con la UCIP."] },

        { tipo: "tabla", titulo: "Segunda línea: nunca retrasan ni sustituyen a la adrenalina",
          columnas: ["Fármaco", "Dosis", "Indicación"],
          filas: [
            ["Dexclorfeniramina i.v.", "0,15 mg/kg cada 6-8 h, máximo 5 mg/dosis, sin diluir y en bolo lento.", "Síntomas cutáneos."],
            ["Hidrocortisona i.v.", "10-15 mg/kg, máximo 500 mg, lenta.", "No rutinaria: asma mal controlado o anafilaxia refractaria a dos dosis de adrenalina."],
            ["Metilprednisolona i.v.", "1-2 mg/kg y después 0,5-2 mg/kg/día en 3 dosis, máximo 120 mg/día.", "Igual que la hidrocortisona. Si se usa, seguir 3 días por vía oral en casa."]
          ] },

        { tipo: "tabla", titulo: "Observación tras controlar los síntomas",
          columnas: ["Tiempo", "Cuándo"],
          filas: [
            ["2 horas", "Buena respuesta (5-10 min) a una sola dosis de adrenalina dada en los primeros 30 minutos, resolución completa, autoinyectable disponible con entrenamiento y vigilancia adecuada en casa."],
            ["6 horas como mínimo", "Ha necesitado dos dosis de adrenalina o tiene reacciones bifásicas previas."],
            ["12 horas como mínimo", "Anafilaxia grave con más de dos dosis; asma grave o insuficiencia respiratoria grave previa; posible absorción continuada del alérgeno; consulta de noche o difícil responder al deterioro; difícil acceso a Urgencias."]
          ],
          nota: "Las reacciones bifásicas aparecen sobre todo en las primeras 6-8 horas, aunque se han descrito hasta las 24 horas." },

        { tipo: "lista", titulo: "Al alta",
          items: ["Instrucciones para evitar el alérgeno.",
                  "Autoinyectable de adrenalina y enseñar a usarlo: 0,15 mg de 10 a 25 kg; 0,3 mg con más de 25 kg. En menores de 10 kg, valorar el riesgo y el beneficio.",
                  "Uso del autoinyectable: sentar al niño en las piernas del cuidador sujetándole las piernas; quitar el tapón; apoyar en el muslo sin golpear y apretar; mantener 10 segundos desde el chasquido; masajear 10 segundos; llamar al 112.",
                  "Derivar a Alergología Infantil."] }
      ],
      revisar: [
        "Salbutamol nebulizado: el texto da 2,5 mg o 5 mg según el peso y la tabla 3, 0,15 mg/kg. Se ha puesto la del texto.",
        "La tabla de tiempos de observación se ha reconstruido a partir del texto del PDF: comprobarla con la tabla 4 del original.",
        "El protocolo no da dosis de antihistamínicos H2 ni del corticoide oral en casa."
      ],
      fuentes: [
        { titulo: "SEUP. Anafilaxia en Urgencias. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/7_Anafilaxia_4ed.pdf" }
      ] },
    { id: "coma", numero: 8, titulo: "Coma",
      texto: "Glasgow, estabilización, exploración por niveles y pruebas",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · Azkunaga Santibañez B",
      bloques: [
        { tipo: "paso", tono: "inicio", titulo: "Estabilización: ABCDE",
          items: ["Monitorizar ritmo y frecuencia cardíaca, frecuencia respiratoria, TA, SatO2 y capnografía.",
                  "Abrir la vía aérea y oxígeno al 100 %. Considerar intubación (en el TCE, con Glasgow de 8 o menos).",
                  "Inmovilización cervical o de columna si hay antecedente traumático.",
                  "Acceso venoso y líquidos si hacen falta para controlar el shock.",
                  "Glucemia urgente: corregir la glucemia y las alteraciones hidroelectrolíticas.",
                  "Analgesia según escala, control de la temperatura y valorar sedantes si hay agitación."] },

        { tipo: "puntuacion", id: "glasgow-ped", titulo: "Escala de Glasgow",
          intro: "AVPU: alerta, responde a la voz, responde al dolor, no responde.",
          items: [
            { nombre: "Apertura ocular", opciones: [["Espontánea", 4], ["Al habla", 3], ["Al dolor", 2], ["No", 1]] },
            { nombre: "Respuesta verbal, niños", opciones: [["Orientado", 5], ["Conversación desorientada", 4], ["Palabras inapropiadas", 3], ["Sonidos incomprensibles", 2], ["Sin sonidos", 1]] },
            { nombre: "Respuesta verbal, lactantes", opciones: [["Sonríe, sigue sonidos y objetos", 5], ["Irritable, consolable", 4], ["Llora con el dolor", 3], ["Se queja ante el dolor", 2], ["No responde", 1]] },
            { nombre: "Respuesta motora", opciones: [["Obedece órdenes", 6], ["Localiza el dolor", 5], ["Se retira al dolor", 4], ["Flexión al dolor", 3], ["Extensión al dolor", 2], ["No responde", 1]] }
          ],
          grupoUnico: [[1, 2]],
          bandas: [
            { desde: 9, texto: "Glasgow mayor de 8.", nivel: "medio" },
            { desde: 0, texto: "Glasgow de 8 o menos: en el TCE, considerar intubación.", nivel: "alto" }
          ],
          nota: "Puntúa solo una de las dos filas de respuesta verbal, según la edad." },

        { tipo: "paso", tono: "farmaco", titulo: "Tratamiento específico",
          items: ["Sospecha de hipertensión intracraneal: suero salino hipertónico al 3 %, 2-6 ml/kg en 15 minutos; perfusión de 0,1-1 ml/kg/h. No usarlo con osmolaridad de más de 360 mOsm/l o sodio de más de 155 mEq/l. Preparación: quitar 55 ml de un SSF de 500 ml y añadir 55 ml de ClNa al 20 % (o 11 ml en uno de 100 ml).",
                  "Sospecha de infección del SNC: antibiótico empírico, con o sin antiviral.",
                  "Estatus epiléptico o sospecha: anticomiciales.",
                  "Valorar lesiones quirúrgicas con Neurocirugía."] },

        { tipo: "tabla", titulo: "Causas",
          columnas: ["Disfunción primaria del SNC", "Alteraciones sistémicas"],
          filas: [
            ["TCE o hemorragia", "Hipoxia"], ["Infección del SNC", "Hipotermia o hipertermia"], ["Tumor cerebral", "Alteraciones metabólicas"],
            ["Convulsiones", "Intoxicaciones"], ["Procesos cerebrovasculares", "Infecciones"], ["Hidrocefalia o disfunción de válvula", "Errores congénitos del metabolismo; otras (invaginación, cardiopatías)"]
          ],
          nota: "Inicio agudo: TCE, lesión vascular, convulsiones, hipoxia. Inicio progresivo: infecciones, intoxicaciones, alteraciones metabólicas." },

        { tipo: "tabla", titulo: "Localización de la lesión",
          columnas: ["Nivel", "Pupilas", "Reflejos vestibulares", "Respiración", "Motora"],
          filas: [
            ["Diencéfalo", "Miosis reactiva", "Aumentados", "Cheyne-Stokes", "Decorticación"],
            ["Mesencéfalo", "Media, no reactiva", "Ausentes", "Hiperventilación", "Descerebración"],
            ["Protuberancia", "Puntiforme o media, no reactiva", "Ausentes", "Apneústica", "Descerebración"],
            ["Bulbo", "Pequeña, reactiva", "Presentes", "Atáxica", "Hipotonía"]
          ] },

        { tipo: "lista", titulo: "Claves de la exploración",
          items: ["Tríada de Cushing (bradicardia, hipertensión, respiración irregular): sugiere aumento de la PIC.",
                  "Reflejo fotomotor conservado: habitual en causas metabólicas; ausente: proceso estructural. Midriasis arreactiva unilateral: compresión del III par.",
                  "Pupilas puntiformes: opiáceos. Dilatadas: anticolinérgicos.",
                  "Irritación meníngea, fontanela, signos de TCE (hemotímpano, ojos de mapache, signo de Battle, otorrea o rinorrea de LCR).",
                  "Lesiones sugestivas de maltrato; exantema purpúrico o variceliforme.",
                  "Fondo de ojo: papiledema; hemorragias retinianas (entre otras causas, maltrato)."] },

        { tipo: "lista", titulo: "Pruebas complementarias",
          items: ["Urgentes: glucemia, hemograma, gasometría venosa, urea, creatinina e iones.",
                  "Sospecha infecciosa: PCR, procalcitonina, cultivos y serologías. Tóxicos en sangre y orina si hay posible exposición o causa desconocida.",
                  "Sobre todo en lactantes: amonio, lactato y muestras para metabolopatías.",
                  "TC (con el paciente estable): sospecha de TCE, signos de HTIC, sospecha de coma estructural o coma de origen desconocido.",
                  "Punción lumbar: sospecha de infección del SNC, o TC no concluyente sin certeza de causa metabólica o tóxica. Solo si está estable, sin signos de HTIC, sin lesión ocupante de espacio en la TC y sin coagulopatía importante.",
                  "EEG: epilepsia conocida o sospecha de convulsión con poca o ninguna actividad motora."] }
      ],
      revisar: [
        "El protocolo no da dosis de antibióticos, aciclovir, anticomiciales, naloxona, flumazenil ni glucosa, ni criterios de ingreso o UCI. Para las dosis de glucosa y anticomiciales, ver el protocolo de estatus epiléptico.",
        "La figura del algoritmo no se puede leer con seguridad."
      ],
      fuentes: [ { titulo: "SEUP. Coma. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/8_Coma_4ed.pdf" } ] },

    { id: "htic", numero: 9, titulo: "Hipertensión intracraneal",
      texto: "Signos de herniación, estabilización y terapia hiperosmolar",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · Míguez Navarro MC, Chacón Pascual A",
      bloques: [
        { tipo: "lista", titulo: "Sospecha clínica",
          items: ["Cefalea de predominio matutino que mejora de pie, vómitos proyectivos sin náusea y edema de papila.",
                  "Lactantes: aumento del perímetro craneal, suturas dehiscentes, fontanela abombada, «ojos en sol poniente».",
                  "Aguda: alteración brusca del estado mental. Subaguda o crónica: alteraciones visuales, diplopía, asimetría pupilar, alteración de la marcha, cambios de conducta."] },
        { tipo: "paso", tono: "decision", titulo: "Signos de herniación inmediata",
          items: ["Coma, anisocoria, cefalea intensa, respiración anormal, hemiplejia, decorticación o descerebración.",
                  "Hipertensión arterial con bradicardia o taquicardia. Tríada de Cushing: hipertensión, bradicardia y depresión respiratoria."] },
        { tipo: "paso", tono: "inicio", titulo: "Estabilización: ABCDE",
          items: ["A: secuencia rápida de intubación (nunca intubar sin fármacos). Control cervical si hay trauma.",
                  "B: evitar hipoxemia e hipercapnia. PaCO2 objetivo de 35-40 mmHg.",
                  "C: tensión arterial normal; evitar hipovolemia (líquidos isotónicos) y sobrecarga. No usar sueros hipotónicos.",
                  "Cabecera a 15-30° y cabeza en línea media.",
                  "Tratar la fiebre. Analgesia y sedación, anticipando estímulos dolorosos.",
                  "Anticonvulsivantes profilácticos si el riesgo es alto (lesión parenquimatosa, fractura deprimida, trauma grave)."] },
        { tipo: "paso", tono: "farmaco", titulo: "Terapia hiperosmolar",
          items: ["Suero salino hipertónico al 3 %: 5 ml/kg i.v. (máximo 250 ml). Repetible cada hora si el sodio no supera 160 mEq/l. Después, 0,5-1,5 ml/kg/h. De elección si hay inestabilidad hemodinámica (no causa diuresis osmótica). Mejor el preparado comercial.",
                  "Manitol al 20 %: 0,5-1 g/kg (2,5-5 ml/kg) en 20-30 minutos, máximo 100 g. Diuresis intensa: vigilar volemia e iones."] },
        { tipo: "paso", tono: "accion", titulo: "Herniación inminente: hiperventilación transitoria",
          texto: "PaCO2 menor de 30 mmHg, solo de forma temporal, por el riesgo de isquemia." },
        { tipo: "paso", tono: "fin", titulo: "TC craneal tras estabilizar y aviso a Neurocirugía",
          texto: "Avisar si la imagen muestra HTIC, si la PIC es mayor de 20 mmHg o si hay signos de herniación. Ingresan todos, la mayoría en UCI, salvo los estables con clínica leve y sin signos de alarma." },

        { tipo: "lista", titulo: "Otras medidas",
          items: ["Dexametasona 0,25-0,5 mg/kg cada 6 h (máximo 16 mg/día): edema vasogénico por lesión con efecto masa (tumor, absceso).",
                  "HTIC refractaria: coma barbitúrico con pentobarbital y EEG; derivación de LCR o craniectomía descompresiva.",
                  "Contraindicados: nitroglicerina y nitroprusiato, ketamina en la hidrocefalia obstructiva, sueros hipotónicos, propofol en perfusión de más de 12 horas."] },
        { tipo: "lista", titulo: "Diagnóstico",
          items: ["Fondo de ojo: el papiledema es muy específico, pero tarda en aparecer.",
                  "TC: prueba inicial. Una TC normal no la descarta: repetir o monitorizar la PIC.",
                  "RM si está estable, sin alteración mental y con sospecha de HTIC crónica. Ecografía transfontanelar si la fontanela lo permite.",
                  "Punción lumbar: sobre todo en el pseudotumor y la sospecha de infección, midiendo la presión de apertura. Contraindicada con focalidad neurológica e imagen normal, o en sospecha de infección del SNC hasta tener neuroimagen. No debe retrasar el antibiótico.",
                  "Diagnóstico diferencial: hipoglucemia, encefalopatía metabólica, intoxicación, estatus no convulsivo, migraña hemipléjica."] },
        { tipo: "lista", titulo: "Pseudotumor cerebri (HTIC idiopática)",
          items: ["Diagnóstico de exclusión: clínica de HTIC, exploración normal salvo papiledema y parálisis del VI par, neuroimagen normal y LCR normal con presión de apertura alta (más de 25 mmHg diagnóstica; 20-25 mmHg patológica si la clínica encaja).",
                  "Restricción de sal y pérdida de peso si hay obesidad.",
                  "Acetazolamida 25-100 mg/kg/día cada 12 h (máximo 2 g/día). Topiramato 0,5-1 mg/kg/día cada 12-24 h (máximo 100 mg/día). Furosemida 1-2 mg/kg/día cada 8-12 h como adyuvante.",
                  "Corticoides en ciclo corto si hay compromiso visual grave al diagnóstico. Cirugía si no responde o hay deterioro visual rápido."] }
      ],
      revisar: [
        "PaCO2 objetivo: el texto dice 35-40 mmHg y el algoritmo, 35-45 mmHg, con hiperventilación moderada a 30-35 mmHg. Se ha puesto la del texto.",
        "El protocolo no da cifras objetivo de SatO2, TA, glucemia, sodio ni temperatura, ni indica el Glasgow para intubar.",
        "La figura del algoritmo no se puede leer con seguridad: el orden de los pasos se ha montado a partir del texto."
      ],
      fuentes: [ { titulo: "SEUP. Síndrome hipertensivo endocraneal. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/9_HTIC_4ed.pdf" } ] },

    { id: "estatus", numero: 10, titulo: "Estatus epiléptico",
      texto: "Benzodiacepinas, segunda línea y estatus refractario, por minutos",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · González Hermosa A",
      bloques: [
        { tipo: "paso", tono: "inicio", titulo: "Minuto 0-5: estabilización",
          items: ["Iniciar tratamiento a los 5 minutos en la crisis tónico-clónica generalizada; a los 10 en la focal.",
                  "A: aspirar, Guedel, lateralizar la cabeza. Intubar si hay depresión respiratoria mantenida.",
                  "B: oxígeno a alta concentración a todos. SpO2 y capnografía.",
                  "C: FC y TA; dos vías venosas y analítica. Evitar sueros hipotónicos.",
                  "D: pupilas, Glasgow, focalidad, signos meníngeos, fontanela.",
                  "Glucemia. Hipoglucemia (plasmática menor de 45 mg/dl o capilar menor de 50-60 mg/dl): glucosa 0,3 g/kg = suero glucosado al 10 % 3 ml/kg, a 2-3 ml/min.",
                  "Antitérmico si la temperatura es mayor de 38 °C."] },
        { tipo: "paso", tono: "farmaco", titulo: "Primera línea: benzodiacepina",
          items: ["Con vía i.v.: midazolam 0,1-0,2 mg/kg o diazepam 0,1-0,2 mg/kg (máximo 5 mg en menores de 5 años, 10 mg en mayores), en 2 minutos.",
                  "Sin vía: midazolam bucal o intranasal 0,3 mg/kg (máximo 10 mg; intranasal, la mitad en cada fosa), midazolam i.m. 0,2 mg/kg (máximo 10 mg) o diazepam rectal 0,5 mg/kg (máximo 10 mg).",
                  "Si no cede a los 5 minutos: segunda dosis de benzodiacepina. Más de dos dosis aumentan el riesgo de depresión respiratoria."] },
        { tipo: "paso", tono: "farmaco", titulo: "Minuto 10-20: segunda línea (igual de eficaces; elegir según el centro y las contraindicaciones)",
          items: ["Levetiracetam 40-60 mg/kg i.v. en 5 min (máximo 4.500 mg). Mantenimiento 25-30 mg/kg/12 h. Si ya toma más de 40 mg/kg/día, usar otro fármaco.",
                  "Valproato 40 mg/kg i.v. en 5 min (máximo 3.000 mg). Mantenimiento 1-2 mg/kg/h. No si ya lo toma a dosis correcta.",
                  "Fenitoína 20 mg/kg i.v. en 20 min (1 mg/kg/min; máximo 1.500 mg), diluida en SSF. Monitorizar ECG y TA."] },
        { tipo: "paso", tono: "decision", titulo: "¿Sigue? Otro fármaco de segunda línea distinto",
          items: ["Fenobarbital 20 mg/kg i.v. en 10-15 min: casi limitado a neonatos; riesgo de depresión respiratoria e hipotensión.",
                  "Lacosamida 10 mg/kg i.v. en 10-15 min (máximo 400 mg): poca experiencia en pediatría.",
                  "Piridoxina 100 mg i.v. (dosis única, no por kg): en lactantes y menores de 3 años con estatus de causa desconocida, tras extraer el estudio metabólico. Monitorizar: riesgo de apnea y colapso."] },
        { tipo: "paso", tono: "fin", titulo: "Más de 30 minutos: estatus refractario, UCIP",
          items: ["Midazolam: bolo 0,2 mg/kg y 0,05-0,4 mg/kg/h (el más usado).",
                  "Propofol: bolo 3-5 mg/kg y 5-10 mg/kg/h.",
                  "Tiopental: bolo 2-3 mg/kg y 3-5 mg/kg/h.",
                  "Monitorización cardiorrespiratoria y EEG continuo; mantener el coma 24-48 h tras ceder y retirar en 12-24 h."] },

        { tipo: "tabla", titulo: "Contraindicaciones y precauciones de la segunda línea",
          columnas: ["Fármaco", "Evitar o vigilar"],
          filas: [
            ["Levetiracetam", "Insuficiencia renal. Puede dar conducta agresiva."],
            ["Valproato", "Hepatopatía, pancreatopatía, hiperamonemia, coagulopatía, enfermedad mitocondrial, metabolopatías. Evitar en menores de 2 años y en niñas o mujeres en edad fértil salvo que no haya alternativa. Primera opción en estatus generalizado primario, mioclónico, no convulsivo y ausencias."],
            ["Fenitoína", "Hipotensión, arritmias, cardiopatía, crisis febril parcial unilateral en menores de 12 meses. Puede empeorar mioclonías y el estatus no convulsivo. Se usa en el estatus focal."]
          ] },

        { tipo: "lista", titulo: "Pruebas complementarias",
          items: ["A todos: glucemia, hemograma, función hepática y renal, iones, calcio, magnesio, gasometría y amonio. Niveles de antiepilépticos si los toma; tóxicos si hay sospecha.",
                  "Punción lumbar en el estatus con fiebre a cualquier edad, salvo contraindicación u otra causa clara; también si se sospecha hemorragia o no recupera la consciencia.",
                  "TC: primer estatus, crisis focal, traumatismo, neoplasia, sospecha de infección o hemorragia, lactantes. Se puede omitir si la causa está clara.",
                  "EEG: no debe retrasar el tratamiento. Continuo si se sospecha estatus no convulsivo o sutil (sin recuperar la consciencia 30 minutos después), o en el refractario."] }
      ],
      revisar: [
        "Dosis de benzodiacepinas i.v.: el texto da diazepam 0,1-0,2 mg/kg y midazolam 0,1-0,2 mg/kg (máximo 5 mg); el algoritmo, diazepam 0,3 mg/kg y midazolam 0,15 mg/kg (máximo 10 mg). Se ha puesto la del texto.",
        "Mantenimiento de fenitoína: 7 mg/kg/día (texto y algoritmo) o 4-7,5 mg/kg/día (tabla 5). No se ha incluido.",
        "Fenobarbital: el texto lo considera de tercera línea y la tabla 5, de segunda.",
        "Glucemia: el algoritmo usa menos de 60 mg/dl como hipoglucemia.",
        "La figura del algoritmo es compleja: los tiempos se han tomado de los textos del propio diagrama."
      ],
      fuentes: [ { titulo: "SEUP. Estatus epiléptico. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/10_Epilepsia_4ed.pdf" } ] },

    { id: "lactante-febril", numero: 11, titulo: "Lactante febril",
      texto: "Por edades, Step-by-Step, antibióticos y antitérmicos",
      subtitulo: "SEUP · 4.ª edición · Mintegi Raso S, Gómez Cortés B, Velasco Zúñiga R",
      bloques: [
        { tipo: "paso", tono: "inicio", titulo: "Fiebre sin foco: 38 °C o más (rectal), sin foco tras historia y exploración",
          texto: "Empezar por el triángulo de evaluación pediátrica." },
        { tipo: "ramas", ramas: [
          { titulo: "TEP alterado", subtitulo: "Sepsis hasta demostrar lo contrario", tono: "desfibrilable",
            bloques: [
              { tipo: "paso", tono: "accion", titulo: "ABCDE",
                items: ["Oxígeno al 100 %; valorar alto flujo.", "Dos vías o intraósea; bolos de 10-20 ml/kg de cristaloide balanceado (o SSF), vigilando la sobrecarga.",
                        "Glucemia capilar. Buscar exantema purpúrico-petequial.",
                        "Analítica, hemocultivo y urocultivo antes del antibiótico, sin retrasarlo. LCR cuando esté estable."] },
              { tipo: "paso", tono: "farmaco", titulo: "Antibiótico precoz",
                items: ["Menor de 1 mes: ampicilina 75 mg/kg + cefotaxima 50 mg/kg. Valorar aciclovir 20 mg/kg si sospecha de herpes.",
                        "Mayor de 1 mes: cefotaxima 75 mg/kg (máximo 3 g). Alergia a betalactámicos: aztreonam 30 mg/kg (máximo 2 g).",
                        "Añadir vancomicina 15 mg/kg (máximo 1 g) si hay mucho SAMR o neumococo resistente; clindamicina 10 mg/kg (máximo 650 mg) si se sospecha shock tóxico estreptocócico."] }
            ] },
          { titulo: "TEP normal", subtitulo: "Según la edad", tono: "nodesfibrilable",
            bloques: [
              { tipo: "paso", tono: "accion", titulo: "21 días o menos",
                texto: "Tira de orina y urocultivo por técnica estéril, analítica con PCT, PCR, neutrófilos y hemocultivo, punción lumbar a todos. Ingreso con antibiótico." },
              { tipo: "paso", tono: "accion", titulo: "22-60 días: Step-by-Step",
                texto: "Orina por bolsa o micción estimulada (si hay leucocituria o nitritos, confirmar por sondaje y urocultivo) y analítica. Observar unas horas (al menos 12 si la fiebre empezó menos de 2 horas antes)." },
              { tipo: "paso", tono: "accion", titulo: "2-24 meses",
                texto: "Descartar infección urinaria y analítica de sangre solo en los grupos indicados abajo." }
            ] }
        ] },

        { tipo: "lista", titulo: "Step-by-Step (60 días o menos, TEP normal)",
          items: ["Factores de riesgo de infección bacteriana invasiva: mal estado general, 21 días o menos, leucocituria y PCT de 0,5 ng/ml o más.",
                  "Bajo riesgo: más de 21 días, TEP normal, tira de orina normal, PCT menor de 0,5 ng/ml, PCR de 20 mg/l o menos y neutrófilos de 10.000/µl o menos. Alta sin antibiótico tras unas horas de observación y control por su pediatra a las 24 h.",
                  "PCR mayor de 20 mg/l o neutrófilos mayor de 10.000/µl aumentan el riesgo, menos que la PCT: control analítico, valorar punción lumbar, antibiótico e ingreso.",
                  "Más de 21 días con vacuna en las 24 h previas o gripe positiva y temperatura menor de 39 °C: puede bastar con descartar infección urinaria.",
                  "Enterovirus positivo en sangre: riesgo muy bajo de infección bacteriana invasiva.",
                  "PECARN (más de 1 mes): bajo riesgo si no está grave, sin leucocituria, PCT menor de 0,5 ng/ml y neutrófilos menor de 4.000/µl."] },

        { tipo: "lista", titulo: "2-24 meses: a quién hacer pruebas",
          items: ["Orina: todos los menores de 6 meses; niñas de 6-24 meses y niños de 6-12 meses con fiebre de 39 °C o más; patología renal o infección urinaria previa; considerarla en fiebre de varios días, sobre todo en niñas.",
                  "Analítica (hemograma, PCT, hemocultivo y PCR de neumococo y meningococo): menores de 6 meses con más de 39 °C; 6-24 meses con 40,5 °C o más; 6-24 meses con 39,5 °C o más sin al menos dos dosis de vacuna antineumocócica conjugada.",
                  "Radiografía de tórax: considerarla con 20.000 leucocitos/µl o más o 10.000 neutrófilos/µl o más, sobre todo en mayores de 1 año o con PCR alta.",
                  "Punción lumbar: no indicada sin irritabilidad, fontanela alterada o meningismo."] },

        { tipo: "tabla", titulo: "Antibióticos con TEP normal",
          columnas: ["Situación", "Pauta"],
          filas: [
            ["Menor de 1 mes, sin pleocitosis", "Ampicilina 50 mg/kg/8 h + gentamicina 4 mg/kg/24 h (cefotaxima 50 mg/kg cada 8 h, o cada 12 h si tiene 7 días o menos, si hay muchas resistencias a gentamicina)."],
            ["Menor de 1 mes, con pleocitosis", "Ampicilina 75 mg/kg/6 h (más de 7 días) o 100 mg/kg/8 h (7 días o menos) + ceftazidima 50 mg/kg/8 h + aciclovir 20 mg/kg/8 h."],
            ["1-2 meses, sin pleocitosis", "Ceftriaxona 50 mg/kg/24 h. Considerar ampicilina 50 mg/kg/6 h si hay mucha Listeria o enterococo."],
            ["1-2 meses, con pleocitosis", "Cefotaxima 75 mg/kg/6 h + vancomicina 15 mg/kg/6 h. Considerar ampicilina 75 mg/kg/6 h si hay mucha Listeria o enterococo."],
            ["Convulsiones, vesículas o encefalitis", "Aciclovir 20 mg/kg/8 h."],
            ["2-24 meses con leucocituria", "Cefixima 8 mg/kg/24 h (máximo 400 mg), 7-10 días, según resistencias locales."],
            ["2-24 meses sin leucocituria, con PCT de 0,5 ng/ml o más, leucocitos de más de 15.000 o neutrófilos de más de 10.000", "Ceftriaxona 50 mg/kg (máximo 2 g) i.m. o i.v.; alta salvo PCT muy elevada."]
          ],
          nota: "Si está bien y el hemocultivo es negativo tras al menos 24 horas, no hace falta seguir el tratamiento." },

        { tipo: "tabla", titulo: "Antitérmicos",
          columnas: ["Fármaco", "Dosis"],
          filas: [
            ["Paracetamol oral", "10-15 mg/kg cada 4-6 h (máximo 5 dosis al día y 75 mg/kg/día)."],
            ["Paracetamol i.v.", "10-15 mg/kg cada 6 h (7,5 mg/kg si pesa menos de 10 kg); máximo 60 mg/kg/día."],
            ["Ibuprofeno oral (más de 3 meses)", "7-10 mg/kg cada 6-8 h, bien hidratado; máximo 40 mg/kg/día."]
          ],
          nota: "No alternar de rutina ni usar medidas físicas." }
      ],
      revisar: [
        "Edad neonatal: el protocolo usa a la vez «21 días o menos» y «menos de 22 días».",
        "Cefotaxima: máximo de 3 g en la sepsis (texto) y de 2 g en 2-24 meses (figura 3).",
        "Orina en 2-24 meses: la figura 3 habla de «todas las niñas y varones menores de 12 meses» en una rama; se ha puesto la del texto.",
        "La tabla de antibióticos del protocolo se basa en una referencia para neonatos de 28 días o menos.",
        "Las figuras del algoritmo no se leen completas: la rama de riesgo intermedio del Step-by-Step es ambigua."
      ],
      fuentes: [ { titulo: "SEUP. Lactante febril. 4.ª ed.", url: "https://seup.org/wp-content/uploads/2025/07/11_Lactante_febril_4ed.pdf" } ] },
    { id: "sepsis", numero: 12, titulo: "Sepsis",
      texto: "Phoenix, primera hora, antibióticos y vasoactivos",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · Gómez Cortés B",
      bloques: [
        { tipo: "paso", tono: "inicio", titulo: "Sospecha: fiebre y TEP alterado (sobre todo circulación o apariencia)",
          texto: "Un TEP normal no la descarta si la evolución es corta. Taquicardia, pulsos débiles, frialdad o piel moteada, relleno capilar lento, color pálido o «sucio», alteración mental. La hipotensión es tardía. Petequias o púrpura: meningococo; eritrodermia: S. pyogenes." },
        { tipo: "paso", tono: "accion", titulo: "0-5 minutos",
          items: ["TEP y ABCDE. Oxígeno al 100 %.", "Monitorizar ECG, TA, EtCO2, FR y SatO2.",
                  "Dos vías periféricas; si hay shock y no hay vía en 5 minutos, intraósea."] },
        { tipo: "paso", tono: "farmaco", titulo: "5-15 minutos: líquidos",
          items: ["Bolo de cristaloide 10-20 ml/kg (balanceado de elección; SSF aceptable), revalorando el ABCDE tras cada bolo.",
                  "Repetir si hace falta, hasta 40-60 ml/kg. Parar si hay sobrecarga: crepitantes, galope, hepatomegalia.",
                  "Valorar alto flujo, CPAP o intubación.",
                  "Analítica: hemocultivo, PCR de meningococo y neumococo, gasometría con lactato, hemograma, iones con calcio iónico, urea, creatinina, GPT, bilirrubina, coagulación, PCT y PCR."] },
        { tipo: "paso", tono: "farmaco", titulo: "15-60 minutos: antibiótico",
          items: ["Menor de 1 mes: ampicilina 75 mg/kg + cefotaxima 50 mg/kg (+ aciclovir 20 mg/kg si sospecha de herpes).",
                  "Mayor de 1 mes: cefotaxima 75 mg/kg (máximo 3 g) + vancomicina 15 mg/kg (máximo 1 g).",
                  "Alergia a betalactámicos: aztreonam 30 mg/kg (máximo 2 g).",
                  "Sospecha de shock tóxico estreptocócico: añadir clindamicina 10 mg/kg (máximo 650 mg).",
                  "En la primera hora si hay shock; en las 3 primeras horas si no lo hay."] },
        { tipo: "paso", tono: "decision", titulo: "Sigue en shock tras 40-60 ml/kg o hay sobrecarga",
          items: ["Adrenalina o noradrenalina, 0,05 µg/kg/min, ajustando al efecto. Por vía periférica o intraósea hasta tener vía central. Si no hay: dopamina 5-10 µg/kg/min.",
                  "Intubación si procede: ketamina probablemente la mejor opción; no usar etomidato.",
                  "Shock refractario a vasoactivos (o sospecha de insuficiencia suprarrenal): hidrocortisona 1-2 mg/kg.",
                  "Hipoglucemia: glucosado al 10 % 3 ml/kg (0,3 g/kg) a 2-3 ml/min; evitar glucemia de más de 180 mg/dl.",
                  "Hipocalcemia (calcio iónico menor de 1,1 mmol/l): gluconato cálcico al 10 % 0,5 ml/kg (50 mg/kg), máximo 2 g."] },
        { tipo: "nota", texto: "Tras estabilizar: SatO2 94-98 %. Punción lumbar contraindicada mientras haya inestabilidad hemodinámica." },

        { tipo: "tabla", titulo: "Phoenix Sepsis Score",
          columnas: ["Componente", "1 punto", "2 puntos", "3 puntos"],
          filas: [
            ["Respiratorio", "PaO2/FiO2 menor de 400 o SatO2/FiO2 menor de 292, con cualquier soporte", "PaO2/FiO2 100-200 o SatO2/FiO2 148-220, con ventilación mecánica", "PaO2/FiO2 menor de 100 o SatO2/FiO2 menor de 148, con ventilación mecánica"],
            ["Cardiovascular (por cada criterio, máximo 6)", "1 vasoactivo, lactato 5-10,9 mmol/l o PAM bajo el umbral", "2 o más vasoactivos, lactato de 11 o más o PAM muy baja", "—"],
            ["Coagulación (máximo 2)", "1 por cada uno: plaquetas menor de 100.000, INR mayor de 1,3, dímero D mayor de 2 mg/l, fibrinógeno menor de 100 mg/dl", "—", "—"],
            ["Neurológico", "Glasgow de 10 o menos", "Pupilas fijas bilaterales", "—"]
          ],
          nota: "Sepsis: sospecha de infección y 2 puntos o más. Shock séptico: sepsis con 1 punto o más cardiovascular." },
        { tipo: "tabla", titulo: "Umbrales de PAM (mmHg) para el componente cardiovascular",
          columnas: ["Edad", "0 puntos si PAM mayor de", "2 puntos si PAM menor de"],
          filas: [["Menos de 1 mes", "30", "17"], ["1-11 meses", "38", "25"], ["1 a menos de 2 años", "43", "31"],
                  ["2 a menos de 5 años", "44", "32"], ["5 a menos de 12 años", "48", "36"], ["12 a menos de 18 años", "51", "38"]] },
        { tipo: "lista", titulo: "Marcadores",
          items: ["Lactato: más de 2 mmol/l sugiere hipoperfusión; más de 3,5-4 se asocia a más mortalidad.",
                  "PCT: la más útil para el riesgo de infección invasiva y para seguir la respuesta.",
                  "PCR de meningococo y neumococo: más sensible y rápida que el hemocultivo y no se altera por el antibiótico previo."] }
      ],
      revisar: [
        "Vancomicina en mayores de 1 mes: el texto la incluye en la pauta base y la figura solo si hay mucho SAMR o neumococo resistente. Se ha puesto la del texto.",
        "Plazo del antibiótico sin shock: 3 horas en el texto; 60 minutos en los objetivos y en la figura.",
        "El protocolo no define criterios de ingreso ni de UCI.",
        "El componente cardiovascular de Phoenix suma 1 o 2 puntos por cada criterio; conviene ver la tabla 1 del original."
      ],
      fuentes: [ { titulo: "SEUP. Sepsis. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/12_Sepsis_4ed.pdf" } ] },

    { id: "shock", numero: 13, titulo: "Shock",
      texto: "Tipos, líquidos, vasoactivos según shock frío o caliente",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · Velasco Zúñiga R",
      bloques: [
        { tipo: "paso", tono: "inicio", titulo: "Reconocer el shock",
          items: ["Compensado: taquicardia, polipnea, palidez, sudoración, agitación, oliguria (TEP con el lado circulatorio alterado).",
                  "Descompensado: alteración del estado mental, hipotensión y, al final, alteración respiratoria.",
                  "Frío: pulsos débiles, piel fría o moteada. Caliente: pulsos saltones, relleno capilar rápido, sin frialdad."] },
        { tipo: "paso", tono: "accion", titulo: "Oxígeno y acceso vascular",
          items: ["Mascarilla con reservorio a FiO2 100 %; después SatO2 94-98 %. Intubar si aumenta el trabajo respiratorio, hay hipoventilación o baja el nivel de consciencia.",
                  "Acceso i.v. o intraóseo en menos de 5 minutos, mejor dos. En neonatos, vena umbilical."] },
        { tipo: "paso", tono: "farmaco", titulo: "Líquidos",
          items: ["Bolos rápidos de 10 ml/kg de cristaloide isotónico (SSF o Ringer lactato) o albúmina al 5 %. Balanceados probablemente de inicio en el shock hipotenso.",
                  "Hasta 40-60 ml/kg en la primera hora, salvo sobrecarga (hepatomegalia, crepitantes, galope). Revalorar tras 3 bolos.",
                  "Corregir pronto la glucemia y la hipocalcemia.",
                  "Sospecha de sepsis: antibiótico de amplio espectro en la primera hora.",
                  "Hemorrágico sin respuesta a los bolos: concentrado de hematíes 10-15 ml/kg; plasma y plaquetas si se alarga la coagulación."] },
        { tipo: "paso", tono: "decision", titulo: "Refractario a líquidos: inotrópicos en la primera hora, por vía periférica",
          texto: "También si la ecografía muestra mala contractilidad o poca colapsabilidad de la cava." },
        { tipo: "ramas", ramas: [
          { titulo: "Shock frío", tono: "nodesfibrilable",
            bloques: [ { tipo: "paso", tono: "farmaco", titulo: "Adrenalina 0,05-0,3 µg/kg/min" } ] },
          { titulo: "Shock caliente", tono: "nodesfibrilable",
            bloques: [ { tipo: "paso", tono: "farmaco", titulo: "Noradrenalina desde 0,05 µg/kg/min", texto: "Subir hasta revertir el shock." } ] }
        ] },
        { tipo: "nota", texto: "Dopamina si no hay adrenalina ni noradrenalina. Segundo fármaco según la clínica y la monitorización (dobutamina, milrinona, levosimendán, vasopresina): el protocolo no da sus dosis. Sospecha de insuficiencia suprarrenal: hidrocortisona. No usar bicarbonato." },

        { tipo: "tabla", titulo: "Tipos de shock y pistas",
          columnas: ["Tipo", "Causas", "Signos"],
          filas: [
            ["Hipovolémico (el más frecuente)", "Vómitos, diarrea, poliuria; hemorragia; tercer espacio (quemaduras, escape capilar)", "Fontanela y ojos hundidos, mucosas secas, pliegue; sangrado o palidez; ascitis, edemas"],
            ["Cardiogénico", "Miocarditis, miocardiopatía, arritmias, metabolopatías, cardiopatía congénita ductus-dependiente en neonatos", "Ingurgitación yugular, hepatomegalia, galope, soplos, tonos apagados, cianosis central"],
            ["Séptico", "Infección", "Fiebre o hipotermia"],
            ["Anafiláctico", "Alérgeno", "Urticaria, angioedema, estridor, sibilancias, vómitos"]
          ] },
        { tipo: "lista", titulo: "Situaciones específicas",
          items: ["Anafiláctico: adrenalina 1/1.000 i.m. 0,01 mg/kg (0,01 ml/kg). Antihistamínicos y salbutamol solo si no ceden tras la primera dosis.",
                  "Neonato con cardiopatía ductus-dependiente: perfusión de prostaglandina E1 hasta el diagnóstico.",
                  "Intubación: ketamina de elección, evitar midazolam y propofol; etomidato contraindicado en el shock séptico; rocuronio.",
                  "Presión intraabdominal alta (tercer espacio, quemados): diuréticos o drenaje; cirugía si la presión intravesical supera 30 mmHg.",
                  "Refractario: ECMO."] },
        { tipo: "lista", titulo: "Objetivos",
          items: ["Acceso en menos de 5 minutos; líquidos en menos de 30; antibiótico e inotrópico en menos de 60.",
                  "En la UCI: relleno capilar menor de 2 s, SvcO2 mayor del 70 %, índice cardíaco 3,3-6 l/min/m²."] }
      ],
      revisar: [
        "Adrenalina i.m. en la anafilaxia: este protocolo pone máximo 0,3 mg y el de anafilaxia, 0,5 mg. Se ha quitado el máximo aquí: comprobarlo.",
        "El protocolo no trata el shock obstructivo ni da dosis de dopamina, dobutamina, milrinona, vasopresina, hidrocortisona, prostaglandina ni fármacos de intubación.",
        "La figura del algoritmo no se lee bien (incluido un umbral de hemoglobina)."
      ],
      fuentes: [ { titulo: "SEUP. Shock. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/13_Shock_4ed.pdf" } ] },

    { id: "sincope", numero: 14, titulo: "Síncope",
      texto: "Tipos, datos de alarma cardíaca y destino",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · González García J, Pérez Alba M",
      bloques: [
        { tipo: "paso", tono: "inicio", titulo: "Pérdida transitoria de consciencia y tono, con recuperación espontánea y completa",
          items: ["TEP alterado: ABCDE, oxígeno, monitor, vía, glucemia capilar.",
                  "Historia: antecedentes, fármacos, episodios previos y familiares; pródromos, desencadenante, postura, ejercicio, color, movimientos, dolor torácico, palpitaciones, duración y recuperación.",
                  "Exploración completa, FC y TA sentado y de pie, glucemia capilar y ECG. Otras pruebas según la sospecha."] },
        { tipo: "lista", titulo: "Datos de alarma (origen cardíaco)",
          items: ["Cardiopatía, arritmia o fármacos de riesgo cardíaco.",
                  "Familiares con cardiopatía, arritmia o muerte súbita o prematura inexplicada.",
                  "Brusco, sin pródromos; dolor torácico o palpitaciones.",
                  "Durante el ejercicio, el sueño o en decúbito.",
                  "Desencadenado por un ruido o un susto (QT largo).",
                  "Precisó RCP.", "Menor de 6 años.",
                  "Soplo patológico, insuficiencia cardíaca, taquicardia o bradicardia persistentes, ritmo irregular.",
                  "ECG anormal para la edad: onda delta, hipertrofia, intervalos anormales, bradicardia excesiva, bloqueo AV."] },
        { tipo: "ramas", ramas: [
          { titulo: "Sin datos de alarma", subtitulo: "Recuperado del todo", tono: "nodesfibrilable",
            bloques: [ { tipo: "paso", tono: "fin", titulo: "Alta",
              items: ["Tranquilizar y enseñar a reconocer y evitar desencadenantes.",
                      "Vasovagal: más agua, alimentos salados, evitar cafeína.",
                      "Con pródromos: tumbarse con las piernas elevadas o ponerse en cuclillas.",
                      "Consultas de Cardiología si son recurrentes pese a estas medidas."] } ] },
          { titulo: "Con datos de alarma", tono: "desfibrilable",
            bloques: [ { tipo: "paso", tono: "accion", titulo: "Ingreso o valoración urgente (Cardiología o Neurología)",
              items: ["Enfermedad cardiovascular.", "Datos de alarma, valorados uno a uno (un antecedente familiar aislado puede ir a consultas).",
                      "Hipotensión ortostática con síncope que no cede con líquidos.", "Alteración neurológica persistente.",
                      "Dudas diagnósticas, estudios pendientes o mucha angustia familiar."] } ] }
        ] },
        { tipo: "tabla", titulo: "Tipos",
          columnas: ["Tipo", "Pistas"],
          filas: [
            ["Reflejo (el más frecuente)", "Vasovagal (emoción, dolor, sangre, estar de pie, calor), situacional (micción, tos, deglución), seno carotídeo, espasmo del sollozo, febril. Suele haber pródromo."],
            ["Hipotensión ortostática", "Hipovolemia, disautonomía, fármacos."],
            ["Cardiogénico", "Arritmias (TSV, TV, QT largo, disfunción sinusal); obstrucción (estenosis aórtica, miocardiopatía hipertrófica, taponamiento, hipertensión pulmonar); miocarditis, miocardiopatía dilatada."],
            ["Metabólico y otros", "Hipoglucemia, tóxicos, golpe de calor, anafilaxia."]
          ],
          nota: "Convulsión: postcrisis, más larga, con la actividad motora típica. En el síncope puede haber clonías breves sin focalidad residual." }
      ],
      revisar: [
        "El protocolo no da cifras de QTc ni criterios de ECG de Brugada, WPW o miocardiopatía hipertrófica, ni menciona la prueba de embarazo."
      ],
      fuentes: [ { titulo: "SEUP. Síncope. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/14_Sincope_4ed.pdf" } ] },

    { id: "crisis-hipertensiva", numero: 15, titulo: "Crisis hipertensiva",
      texto: "Urgencia y emergencia, objetivos de descenso y fármacos",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · Castaño Rivero A, González Calvete L",
      bloques: [
        { tipo: "tabla", titulo: "Clasificación de la tensión arterial (AAP 2017)",
          columnas: ["", "Menores de 13 años", "13 años o más"],
          filas: [
            ["Normal", "Menor del p90", "Menor de 120/80"],
            ["Elevada", "p90 a menos del p95", "120-129 / menos de 80"],
            ["HTA estadio 1", "p95 a menos de p95 + 12 mmHg", "130/80 a 139/89"],
            ["HTA estadio 2", "p95 + 12 mmHg o más", "140/90 o más"],
            ["Crisis hipertensiva", "Más de 30 mmHg sobre el p95, o estadio 2 con síntomas graves", "Más de 180/120, o estadio 2 con síntomas graves"]
          ],
          nota: "Urgencia: sin daño de órganos diana. Emergencia: con daño de órganos diana. Importa más el cambio agudo y los síntomas que la cifra." },
        { tipo: "lista", titulo: "Daño de órganos diana",
          items: ["Encefalopatía hipertensiva (lo más frecuente): letargia, coma, convulsiones.",
                  "Recién nacidos: apnea, cianosis, irritabilidad, rechazo de tomas, convulsiones, insuficiencia cardíaca.",
                  "Ojo: papiledema, hemorragias, exudados. Corazón: insuficiencia cardíaca. Riñón: insuficiencia renal. Anemia hemolítica microangiopática."] },
        { tipo: "paso", tono: "inicio", titulo: "Todas ingresan (UCIP o Nefrología)",
          items: ["ABCDE. Intubar si baja la consciencia, hay insuficiencia respiratoria o estatus; evitar la ketamina.",
                  "Dos vías y analítica. Monitorizar: en la emergencia, TA cada 3-5 minutos las 2 primeras horas (mejor invasiva); en la urgencia, cada 15 minutos y después cada 30-60.",
                  "No bajar rápido la TA si hay hipertensión intracraneal, coartación o vasculopatía cerebral (drepanocitosis, moyamoya). Tratar la causa si la hay (dolor, cocaína, feocromocitoma, preeclampsia)."] },
        { tipo: "ramas", ramas: [
          { titulo: "Emergencia hipertensiva", subtitulo: "Con daño de órganos diana", tono: "desfibrilable",
            bloques: [
              { tipo: "paso", tono: "accion", titulo: "Objetivo",
                texto: "Bajar no más del 25 % de la diferencia entre la TAS actual y la diana en las primeras 8 horas; objetivo final en 24-48 h." },
              { tipo: "paso", tono: "farmaco", titulo: "Labetalol o nicardipino en perfusión",
                texto: "Nicardipino si es menor de 1 año. Evitar labetalol en asma, enfermedad pulmonar crónica del lactante o insuficiencia cardíaca." },
              { tipo: "paso", tono: "decision", titulo: "Sin respuesta en 30 minutos: asociar los dos",
                texto: "Otros 30 minutos sin respuesta: nitroprusiato (o hidralazina si hay enfermedad renal crónica)." }
            ] },
          { titulo: "Urgencia hipertensiva", subtitulo: "Sin daño de órganos diana", tono: "nodesfibrilable",
            bloques: [
              { tipo: "paso", tono: "accion", titulo: "Objetivo", texto: "Descenso progresivo en 24-48 horas." },
              { tipo: "paso", tono: "farmaco", titulo: "Inicio agudo",
                texto: "Bolo i.v. de labetalol, o de hidralazina o nicardipino (menores de 1 año o asmáticos)." },
              { tipo: "paso", tono: "farmaco", titulo: "HTA crónica: descenso más lento",
                texto: "Vía oral: clonidina de elección; alternativas hidralazina o minoxidil. Sin vía oral: bolos i.v. de labetalol, hidralazina o nicardipino." }
            ] }
        ] },
        { tipo: "tabla", titulo: "Fármacos y dosis",
          columnas: ["Fármaco", "Dosis"],
          filas: [
            ["Labetalol i.v.", "Bolo 0,2-1 mg/kg en 1-10 min (máximo 40 mg/dosis), cada 10-15 min hasta 300 mg. Perfusión 0,25-3 mg/kg/h."],
            ["Nicardipino i.v.", "0,5-1 µg/kg/min; subir cada 15-30 min. Máximo 4-5 µg/kg/min en neonatos o 250 µg/min en niños."],
            ["Hidralazina i.v. o i.m.", "0,1-0,5 mg/kg cada 6-8 h (máximo 2 mg/kg/dosis). En la emergencia, 0,15-0,6 mg/kg cada 4 h (máximo 20 mg/dosis)."],
            ["Nitroprusiato i.v.", "0,3-0,5 µg/kg/min y subir; habitual 3-4 µg/kg/min; máximo 8-10 µg/kg/min (y entonces menos de 10 minutos)."],
            ["Clonidina oral", "5-10 µg/kg/día cada 8-12 h, hasta 25 µg/kg/día; máximo 1,2 mg/día."],
            ["Hidralazina oral", "Niños: 0,75-3 mg/kg/día cada 6-12 h; máximo 7 mg/kg/día o 200 mg/día."],
            ["Minoxidil oral", "Menores de 12 años: 0,1-0,2 mg/kg/día de inicio (máximo 5 mg/día). 12 años o más: 5 mg/día de inicio."],
            ["Nifedipino oral", "Controvertido, no recomendado salvo que fallen las otras opciones: 0,04-0,25 mg/kg (máximo 10 mg)."]
          ],
          nota: "Empezar por la dosis más baja. No asociar bolos i.v. Diuréticos solo como coadyuvantes si hay sobrecarga. Evitar enalapril." },
        { tipo: "lista", titulo: "Estudio inicial (sin retrasar el tratamiento)",
          items: ["TA oscilométrica; si es alta, confirmar por auscultación en las cuatro extremidades, con manguito del 40 % del perímetro del brazo.",
                  "Gasometría, hemograma con reticulocitos, bioquímica con iones, urea, creatinina y ácido úrico, renina y aldosterona.",
                  "Orina con proteinuria y urocultivo. Ecografía Doppler renal, ECG, ecocardiograma y radiografía de tórax.",
                  "Según la clínica: tóxicos, test de embarazo, metanefrinas, función tiroidea, TC craneal, fondo de ojo."] }
      ],
      revisar: [
        "Objetivo final: p95 en la emergencia y menor del p90 en la urgencia (13 años o más: menor de 130/80).",
        "La dosis oral de labetalol de la tabla 4 no tiene la vía clara y no se ha incluido.",
        "El protocolo no da criterios de alta."
      ],
      fuentes: [ { titulo: "SEUP. Crisis hipertensiva. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/15_Crisis_hipertensiva_4ed.pdf" } ] },
    { id: "dolor-abdominal", numero: 16, titulo: "Dolor abdominal agudo",
      texto: "Signos de alarma, Alvarado y PAS, pruebas y tratamiento por causa",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · Alonso Cadenas JA, De la Torre Espí M",
      bloques: [
        { tipo: "paso", tono: "inicio", titulo: "TEP y ABCDE",
          items: ["Shock o alteración neurológica: estabilizar antes de la historia detallada (constantes, oxígeno, vía, glucemia, líquidos).",
                  "Valorar el dolor con una escala para la edad y analgesia cuanto antes.",
                  "Sonda nasogástrica a bolsa en obstrucción, traumatismo grave o distensión con vómitos biliosos frecuentes. Dieta absoluta si no se ha descartado cirugía."] },
        { tipo: "lista", titulo: "Signos de alarma: sospecha de abdomen quirúrgico",
          items: ["Dolor de más de 6 horas, cada vez más intenso, sobre todo si está localizado y fijo.",
                  "Vómitos biliosos, progresivos o muy frecuentes.", "Afectación del estado general.", "Palpación abdominal dolorosa.",
                  "Hematoquecia (signo tardío de invaginación).",
                  "Lactantes: letargia, hipotonía o episodios paroxísticos (en la invaginación el dolor puede no ser lo principal).",
                  "Distensión y ausencia de ruidos hidroaéreos."] },

        { tipo: "escala", id: "pas", titulo: "Pediatric Appendicitis Score (PAS)",
          items: [
            ["Anorexia", 1],
            ["Fiebre de más de 38 °C", 1],
            ["Náuseas o vómitos", 1],
            ["Leucocitos de más de 10.000/mm³", 1],
            ["Neutrófilos de más de 7.500/mm³", 1],
            ["Migración del dolor a la FID", 1],
            ["Dolor en la FID al toser, percutir o saltar", 2],
            ["Dolor a la palpación superficial en la FID", 2]
          ],
          bandas: [
            { desde: 8, texto: "Probabilidad alta (8-10): avisar al cirujano.", nivel: "alto" },
            { desde: 4, texto: "Probabilidad intermedia (4-7): ecografía.", nivel: "medio" },
            { desde: 0, texto: "Probabilidad baja (1-3).", nivel: "bajo" }
          ] },
        { tipo: "escala", id: "alvarado", titulo: "Escala de Alvarado",
          items: [
            ["Temperatura de más de 37,3 °C", 1],
            ["Anorexia", 1],
            ["Náuseas o vómitos", 1],
            ["Migración del dolor a la FID", 1],
            ["Dolor a la palpación en la FID", 2],
            ["Blumberg positivo", 1],
            ["Leucocitos de más de 10.000/mm³", 2],
            ["Neutrófilos de más de 7.500/mm³", 1]
          ],
          bandas: [
            { desde: 7, texto: "Riesgo alto (7-10): tratamiento quirúrgico.", nivel: "alto" },
            { desde: 5, texto: "Riesgo intermedio (5-6): observación hospitalaria o pruebas.", nivel: "medio" },
            { desde: 0, texto: "Riesgo bajo (1-4): alta y observación en casa.", nivel: "bajo" }
          ] },

        { tipo: "tabla", titulo: "Causas según la edad",
          columnas: ["Edad", "Dolor abdominal (frecuentes)", "Abdomen agudo"],
          filas: [
            ["Menos de 2 años", "Cólico del lactante, GEA", "Invaginación, apendicitis, vólvulo, hernia incarcerada"],
            ["2-5 años", "GEA, infección urinaria, neumonía, asma, virus, estreñimiento", "Apendicitis, hernia incarcerada, Meckel, bridas, tumores"],
            ["Más de 5 años", "GEA, traumatismos, infección urinaria, dolor funcional, estreñimiento", "Apendicitis, EII, colecistitis, pancreatitis, cetoacidosis, torsión testicular u ovárica, cólico nefrítico, tumores"],
            ["Adolescentes", "Además, dismenorrea", "Además, EIP, hepatitis, embarazo ectópico"]
          ],
          nota: "Si el abdomen es normal, buscar causa fuera: ORL, neumonía, escroto agudo, hernia, púrpura, signos de maltrato. Adolescentes: fecha de la última regla y test de embarazo si tienen relaciones." },

        { tipo: "lista", titulo: "Pruebas complementarias (sin signos de alarma, ninguna)",
          items: ["Ecografía: de elección en la mayoría (apendicitis, invaginación, torsión con Doppler, vía biliar, cólico nefrítico complicado).",
                  "TC: segunda elección, salvo en el traumatismo.",
                  "Radiografía de abdomen: solo si se sospecha obstrucción o perforación.",
                  "Analítica según sospecha: hemograma, PCR y PCT (apendicitis complicada); perfil hepático; amilasa y lipasa; iones y gasometría si hay deshidratación.",
                  "Orina: tira y urocultivo si se sospecha infección urinaria."] },

        { tipo: "tabla", titulo: "Tratamiento específico",
          columnas: ["Cuadro", "Tratamiento"],
          filas: [
            ["Apendicitis no complicada", "Cirugía urgente. Profilaxis: cefoxitina 40 mg/kg, como mucho 60 minutos antes. Alergia a betalactámicos: gentamicina 5 mg/kg + metronidazol 10 mg/kg, cada uno en 30-60 minutos."],
            ["Apendicitis complicada", "Piperacilina-tazobactam 100 mg/kg/8 h (4 g/8 h si más de 40 kg); alternativa meropenem 20 mg/kg/8 h."],
            ["Invaginación", "Enema hidrostático con SSF, con sedoanalgesia y control ecográfico (éxito en el 80-90 %). Cirugía si mal estado, perforación, cabeza de invaginación o fracaso del enema."],
            ["Obstrucción", "Sonda nasogástrica a bolsa hasta la cirugía."],
            ["Torsión ovárica o testicular", "Cirugía urgente."],
            ["Colecistitis", "Ayuno, sueros, antieméticos, analgesia, colecistectomía. No complicada: ampicilina + gentamicina. Complicada o colangitis: cefotaxima + metronidazol."],
            ["Pancreatitis", "Meperidina 0,5-2 mg/kg i.v. cada 3-4 h (máximo 100 mg). Líquidos precoces. Alimentación precoz. Sin antibiótico profiláctico."],
            ["Estreñimiento funcional", "Desde los 6 meses: polietilenglicol 0,5 g/kg/día cada 12 h, subiendo hasta 1,5 g/kg/día (máximo 100 g/día), hasta 7 días; después mantenimiento."],
            ["GEA", "Ver el protocolo de deshidratación."]
          ] },

        { tipo: "lista", titulo: "Traumatismo abdominal cerrado: bajo riesgo si cumple los 7 (regla aún no validada)",
          items: ["Sin signos de traumatismo en la pared ni signo del cinturón.", "Sin dolor, distensión ni lesiones de la pared, y Glasgow mayor de 13.",
                  "Sin aumento de la sensibilidad abdominal.", "Sin traumatismo torácico.", "Sin dolor abdominal.", "Sin disminución del murmullo vesicular.", "Sin vómitos tras el golpe.",
                  "Si hay lesiones cutáneas, dolor, distensión o hematuria: FAST y, según la estabilidad, TC."] },
        { tipo: "lista", titulo: "Destino",
          items: ["Observación en Urgencias: traumatismo de bajo riesgo; invaginación reducida (4-6 horas) con buen estado, buena tolerancia y familia que entienda los signos de empeoramiento; rehidratación i.v. rápida con buena tolerancia posterior.",
                  "Ingreso: traumatismo que no es de bajo riesgo, fracaso de la rehidratación, colecistitis, colangitis, pancreatitis, cólico nefrítico con mal control, EII moderada o sistémica, sospecha de abdomen quirúrgico.",
                  "Si no hay orientación diagnóstica: observar y volver a explorar en unas horas."] }
      ],
      revisar: [
        "La PAS con 1-3 puntos no tiene una actuación concreta en el protocolo.",
        "La figura del algoritmo no se puede leer con seguridad.",
        "El protocolo solo da dosis de analgésicos para la pancreatitis."
      ],
      fuentes: [ { titulo: "SEUP. Dolor abdominal agudo en Urgencias. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/16_Dolor_abdominal_4ed.pdf" } ] },

    { id: "deshidratacion", numero: 17, titulo: "Deshidratación en la gastroenteritis",
      texto: "Gravedad, rehidratación oral, i.v. rápida y ondansetrón",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · García Herrero MA, López López R, Guibert Zafra B",
      bloques: [
        { tipo: "tabla", titulo: "Gravedad",
          columnas: ["Gravedad", "Pérdida de peso", "Déficit", "Escala de Gorelick"],
          filas: [["Leve", "3-5 %", "30-50 ml/kg", "Menos de 3"], ["Moderada", "5-9 %", "50-90 ml/kg", "3-5"], ["Grave", "Más del 9 %", "Más de 90 ml/kg", "6-10"]],
          nota: "Gorelick, 1 punto por cada uno: ojos hundidos, mucosas secas, sin lágrimas, pliegue, mal estado general, pulso radial débil, FC de más de 150, respiración anormal, oliguria, relleno capilar de más de 2 s. Los más útiles: relleno capilar, pliegue y respiración anormal." },
        { tipo: "paso", tono: "decision", titulo: "Shock (relleno de 3 s o más, frialdad, letargia, hipotensión)",
          texto: "Bolos de 10 ml/kg de solución balanceada o SSF, revalorando tras cada uno." },
        { tipo: "ramas", ramas: [
          { titulo: "Rehidratación oral", subtitulo: "De elección", tono: "nodesfibrilable",
            bloques: [
              { tipo: "paso", tono: "farmaco", titulo: "Solución de rehidratación oral en 2-4 horas",
                items: ["Leve: 30-50 ml/kg. Moderada: 50-90 ml/kg.",
                        "Si vomita: 5 ml cada 2-5 minutos y subir según tolerancia.",
                        "Vómitos repetidos: ondansetrón 0,15 mg/kg (máximo 6-8 mg) y probar tolerancia a los 20 minutos. Evitar si hay riesgo de QT largo."] },
              { tipo: "paso", tono: "accion", titulo: "Mantenimiento",
                texto: "Reponer 5-10 ml/kg por cada deposición y 2-5 ml/kg por cada vómito." }
            ] },
          { titulo: "Rehidratación i.v. rápida", subtitulo: "Si la oral no es posible", tono: "nodesfibrilable",
            bloques: [
              { tipo: "paso", tono: "farmaco", titulo: "SSF (o balanceado) con glucosa al 2,5 %",
                items: ["20 ml/kg/h (máximo 700 ml/h) durante 1-4 horas, sin superar el déficit. Revalorar cada hora.",
                        "Sin glucosa si la glucemia es mayor de 140 mg/dl. La hipoglucemia requiere tratamiento propio."] },
              { tipo: "paso", tono: "decision", titulo: "No usarla si…",
                texto: "Menor de 3 meses, inestabilidad hemodinámica, sodio menor de 130 o mayor de 150 mEq/l, cardiopatía, nefropatía u otra enfermedad que altere el manejo del agua y los iones. En ese caso, o si persiste la deshidratación tras 2-4 horas: rehidratación i.v. clásica." }
            ] }
        ] },
        { tipo: "lista", titulo: "No dar rehidratación oral si…",
          items: ["Deshidratación grave (más del 9 %) o inestabilidad hemodinámica.", "Sospecha de íleo.", "Riesgo de aspiración (consciencia disminuida).",
                  "Intestino corto.", "Pérdidas de más de 10 ml/kg/h.", "Relativas: vómitos incoercibles, mala técnica o familia poco colaboradora. La sonda nasogástrica es una buena opción."] },
        { tipo: "lista", titulo: "Rehidratación i.v. clásica",
          items: ["SSF con glucosa al 5 % y potasio 20 mEq/l (con diuresis comprobada y sin hiperpotasemia).",
                  "Necesidades basales más el déficit: en 24 h si es isonatrémica; más despacio cuanto mayor y más lenta sea la alteración del sodio."] },
        { tipo: "lista", titulo: "Analítica: cuándo y qué",
          items: ["Si hay alteración mental, deshidratación grave, clínica de alteración del sodio o el potasio, o necesita rehidratación i.v.",
                  "Iones, osmolaridad, urea y creatinina, gasometría (bicarbonato menor de 17 mEq/l sugiere moderada-grave), glucemia y cetonemia."] },
        { tipo: "lista", titulo: "Acidosis metabólica",
          items: ["Anión gap normal: bicarbonato si pH menor de 7,15-7,20, EB menor de -12 o bicarbonato menor de 10-12 mEq/l.",
                  "Déficit = (HCO3 deseado − actual) × peso × 0,5 (0,8 si el bicarbonato es menor de 5), o 0,3 × EB × peso. Dar 1/3-1/2 en 1-2 horas (1/6 molar: 6 ml = 1 mEq). Vigilar el potasio.",
                  "Anión gap alto (cetosis): no corregir salvo pH menor de 7,1 o hiperpotasemia grave refractaria."] },
        { tipo: "lista", titulo: "Alimentación",
          items: ["Dieta normal para la edad, evitando azúcares rápidos y exceso de grasa.",
                  "No interrumpir la lactancia materna, ni durante la rehidratación. No diluir la fórmula.",
                  "La solución de rehidratación no sustituye a la comida ni sirve para preparar biberones."] }
      ],
      revisar: [
        "El protocolo no da los puntos de cada ítem de Gorelick: se ha puesto 1 punto por ítem, que es lo habitual en esta escala. Comprobarlo con la tabla 5 del original.",
        "Deshidratación grave: más del 9 % en la tabla 2 y 10 % o más en el apartado i.v.",
        "El protocolo no da criterios de ingreso ni de alta, ni habla de racecadotrilo o probióticos."
      ],
      fuentes: [ { titulo: "SEUP. Deshidratación en contexto de gastroenteritis aguda. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/17_Deshidratacion_4ed.pdf" } ] },

    { id: "tce", numero: 18, titulo: "Traumatismo craneal",
      texto: "Grupos de riesgo, TC u observación, ingreso y alta",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · González Balenciaga M",
      bloques: [
        { tipo: "ramas", ramas: [
          { titulo: "Inestable o Glasgow bajo", tono: "desfibrilable",
            bloques: [
              { tipo: "paso", tono: "accion", titulo: "ABCDE",
                items: ["Control cervical si hay riesgo de lesión cervical.", "Intubar si Glasgow menor de 9, AVDN en D o N, inestabilidad o distrés grave.",
                        "Oxígeno al 100 %; monitorizar FC, FR, TA, EtCO2 y SatO2.", "Analgesia (el dolor aumenta la PIC), vía venosa, glucemia capilar.",
                        "Valorar tratamiento de la hipertensión intracraneal (tríada de Cushing, anisocoria)."] },
              { tipo: "paso", tono: "farmaco", titulo: "Ácido tranexámico",
                texto: "Considerar con Glasgow 9-13 sin alteraciones pupilares: 15-20 mg/kg, máximo 1 g." },
              { tipo: "paso", tono: "fin", titulo: "TC si Glasgow menor de 15 o focalidad",
                texto: "Neurocirugía si hay lesión intracraneal, fractura deprimida o de base, diástasis de más de 3 mm o deterioro." }
            ] },
          { titulo: "TCE leve", subtitulo: "Glasgow 14-15", tono: "nodesfibrilable",
            bloques: [
              { tipo: "paso", tono: "decision", titulo: "Riesgo alto: TC tras estabilizar",
                texto: "Menores de 2 años: focalidad, fractura palpable, signos de fractura de base, fontanela tensa, convulsiones." },
              { tipo: "paso", tono: "accion", titulo: "Riesgo intermedio: observar 4-6 horas como mínimo",
                items: ["Menores de 2 años: cefalohematoma no frontal importante, pérdida de consciencia de más de 5 s, vómitos, mecanismo de riesgo, conducta anormal según los padres.",
                        "2 años o más: pérdida de consciencia, vómitos, cefalea intensa, mecanismo de riesgo.",
                        "TC si hay varios factores, si empeora o si es menor de 3 meses (o por preferencia familiar)."] },
              { tipo: "paso", tono: "fin", titulo: "Riesgo bajo: alta",
                texto: "Glasgow 15, asintomático, sin signos de fractura, sin mecanismo de riesgo y sin focalidad." }
            ] }
        ] },
        { tipo: "lista", titulo: "Mecanismos de riesgo",
          items: ["Caída de más de 1,5 m (más de 1 m en menores de 2 años).", "Impacto con objeto contundente.",
                  "Accidente de tráfico con expulsión, vuelco o un fallecido.", "Atropello de peatón o ciclista sin casco.",
                  "Traumatismo no presenciado.", "Zambullida, accidente de moto, herida penetrante."] },
        { tipo: "lista", titulo: "Otras indicaciones de TC",
          items: ["Factores predisponentes de sangrado.", "Sospecha de maltrato (con radiología esquelética).",
                  "La radiografía de cráneo no se recomienda de rutina; la ecografía no sustituye a la TC."] },
        { tipo: "lista", titulo: "Ingreso",
          items: ["Observación o planta: Glasgow menor de 15, focalidad, estado neurológico alterado, intolerancia oral, lesiones extracraneales graves, lesión intracraneal, sospecha de maltrato o cuidadores que no pueden vigilarle.",
                  "UCI: Glasgow menor de 13, focalidad o lesión intracraneal (un hematoma no epidural de menos de 1 cm puede ir a planta)."] },
        { tipo: "lista", titulo: "Al alta: vigilancia por un adulto 24-48 horas. Volver si…",
          items: ["Cefalea intensa o irritabilidad.", "Vómitos repetidos.", "Salida de líquido o sangre por la nariz o los oídos.",
                  "Cambios de conducta, del equilibrio, de la visión o del habla.", "Le cuesta despertarse o mantenerse despierto.",
                  "Movimientos extraños o pérdida de fuerza."] },
        { tipo: "nota", texto: "Maltrato, sobre todo en lactantes: lesiones que no cuadran con la historia, demora en consultar, lesiones geométricas o en zonas protegidas, hemorragias retinianas, otras fracturas." }
      ],
      revisar: [
        "La tabla 1 de grupos de riesgo no se lee bien: no se ven los criterios de riesgo alto de los mayores de 2 años y la asignación por edad es aproximada. Es importante comprobarla con el original.",
        "TCE leve: Glasgow 14-15 en el texto y 13-15 en el indicador de calidad.",
        "La figura del algoritmo no se puede leer con seguridad."
      ],
      fuentes: [ { titulo: "SEUP. Traumatismo craneal. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/18_Trauma_craneal_4ed.pdf" } ] },

    { id: "politrauma", numero: 19, titulo: "Paciente politraumatizado",
      texto: "XABCDE, shock hemorrágico, tranexámico y pruebas",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · Ballestero Díez Y",
      bloques: [
        { tipo: "paso", tono: "inicio", titulo: "Reconocimiento primario en 5-10 minutos",
          texto: "Oxígeno, monitorización completa (ECG, TA, FC, FR, SatO2, EtCO2, temperatura, diuresis, consciencia), dos vías y pedir ayuda. Constantes cada 5 minutos." },
        { tipo: "paso", tono: "accion", titulo: "X: hemorragia externa masiva",
          items: ["Presión directa y compresión proximal.", "Torniquete solo si hay amputación o hemorragia incontrolable.",
                  "Pelvis: cinturón o sábana a la altura de los trocánteres. Inmovilizar las fracturas abiertas de huesos largos."] },
        { tipo: "paso", tono: "accion", titulo: "A: vía aérea y control cervical",
          items: ["Inmovilización cervical bimanual (collarín si no hay manos suficientes).", "Tracción mandibular, aspirar, pinza de Magill, cánula orofaríngea.",
                  "Intubar: parada, vía aérea no sostenible u obstruida, insuficiencia respiratoria grave, shock grave sin respuesta a volumen, Glasgow de 8 o menos, convulsión persistente.",
                  "En apnea, coma o parada, sin fármacos; en el resto, secuencia rápida. Si falla: mascarilla laríngea; punción cricotiroidea si hay edema de glotis o trauma facial grave."] },
        { tipo: "paso", tono: "accion", titulo: "B: ventilación",
          items: ["Oxígeno con FiO2 1.",
                  "Neumotórax a tensión: angiocatéter de 14-16 G en el 2.º espacio intercostal, línea medioclavicular (o 4.º-5.º, línea axilar anterior).",
                  "Neumotórax abierto: apósito impermeable fijado por 3 bordes.",
                  "Hemotórax masivo: drenaje en el 5.º espacio, línea medioaxilar, y tratar el shock."] },
        { tipo: "paso", tono: "farmaco", titulo: "C: circulación",
          items: ["Dos vías del mayor calibre (5 minutos, 2 intentos); si no, intraósea.",
                  "Sin shock grave: bolos de 10 ml/kg de cristaloide balanceado caliente.",
                  "Shock grave: cristaloides hasta 20 ml/kg como máximo y concentrado de hematíes 10-20 ml/kg (máximo 2 concentrados); O negativo sin cruzar si no hay sangre en 10 minutos.",
                  "Hemorragia masiva: hipotensión permisiva (salvo TCE), hemoderivados 1:1:1 y ácido tranexámico en las 3 primeras horas: 15-20 mg/kg (máximo 1 g) y 2 mg/kg/h al menos 8 horas.",
                  "Objetivos: TAS mayor del p5 (más alta si hay TCE), diuresis de más de 1 ml/kg/h, Hb 7-10 g/dl.",
                  "Taponamiento: pericardiocentesis subxifoidea, mejor ecoguiada, en parada o si no aguanta hasta quirófano."] },
        { tipo: "paso", tono: "accion", titulo: "D: neurológico",
          texto: "Glasgow, pupilas, glucemia. Glasgow de 12 o menos o lesión intracraneal: Neurocirugía urgente. Signos de HTIC: cabecera elevada, hiperventilación moderada, osmóticos. Tratar las convulsiones." },
        { tipo: "paso", tono: "accion", titulo: "E: exposición",
          texto: "Desvestir del todo, buscar lesiones que no pueden esperar y evitar la hipotermia (tapar, sueros y gases calientes)." },

        { tipo: "tabla", titulo: "Respuesta a la reposición de volumen",
          columnas: ["Respuesta", "Pérdida estimada", "Actitud"],
          filas: [["Rápida", "Hasta un 20 %", "Estable tras 20 ml/kg."],
                  ["Transitoria", "20-40 %", "Más bolos y hematíes; sugiere hemorragia oculta: valorar cirugía."],
                  ["Nula", "Más del 40 %", "Hematíes inmediatos; descartar neumotórax, taponamiento o shock medular; cirugía inmediata."]] },
        { tipo: "lista", titulo: "Reconocimiento secundario",
          items: ["Historia SAMPLE y mecanismo (alta velocidad, fallecidos, caída de más de 2 pisos, atropello, heridas penetrantes, amputaciones).",
                  "Exploración de cabeza a pies. Sonda orogástrica si se sospecha fractura de base de cráneo. Sondaje vesical si no hay sospecha de lesión uretral.",
                  "Movilizar en bloque; la tabla espinal solo para el traslado.",
                  "Analgesia: fentanilo i.v. 1-5 µg/kg, máximo 50 µg.",
                  "Valorar antibiótico (cefazolina o clindamicina) y profilaxis antitetánica."] },
        { tipo: "lista", titulo: "Pruebas complementarias",
          items: ["Pruebas cruzadas, hemograma, coagulación, gasometría, lactato, iones, función renal, transaminasas, amilasa y lipasa.",
                  "GOT de más de 200 o GPT de más de 125: probable lesión intraabdominal. Más de 50 hematíes por campo: lesión renal o urinaria. Hematocrito menor del 30 %.",
                  "Radiografía lateral cervical y de tórax AP a todos; pelvis si es de alta energía con inestabilidad o signos de fractura.",
                  "eFAST en el inestable (no decide la TC). TC abdominal con contraste en el estable con signos de lesión."] },
        { tipo: "lista", titulo: "UCIP",
          items: ["Riesgo de deterioro o descompensación neurológica.", "Inestabilidad hemodinámica.",
                  "Disfunción grave de un órgano o multiorgánica.", "Necesidad de monitorización invasiva o soporte vital.",
                  "Índice de trauma pediátrico de 8 o menos: grave, traslado a centro de trauma."] }
      ],
      revisar: [
        "Intubación: Glasgow de 8 o menos en el texto y menor de 9 en la figura (es lo mismo).",
        "Hipotensión permisiva: PAM en el p5 en el texto de hemorragia masiva y TAS mayor del p5 en el resto.",
        "El protocolo no da fármacos ni dosis de intubación, ni criterios de activación del equipo de trauma, ni la tabla completa del índice de trauma pediátrico."
      ],
      fuentes: [ { titulo: "SEUP. Manejo del paciente politraumatizado. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/19_Politrauma_4ed.pdf" } ] },
    { id: "electricidad", numero: 20, titulo: "Lesiones por electricidad",
      texto: "Bajo y alto voltaje, rabdomiólisis, observación y alta",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · Escobar Castellanos M, Lorente Romero J, Vázquez López P",
      bloques: [
        { tipo: "paso", tono: "inicio", titulo: "En el lugar",
          items: ["Cortar la corriente. Bajo voltaje: separar con material aislante. Alto voltaje: desconectar (riesgo de arco).",
                  "Parada: RCP. Inmovilización cervical y espinal si hay traumatismo."] },
        { tipo: "paso", tono: "accion", titulo: "Urgencias: ABCDE y a todos ECG, analítica y orina",
          items: ["Oxígeno; ventilar e intubar si hay apnea.",
                  "Shock: SSF y vasoactivos si no mejora; sonda vesical. La hipotensión hace pensar en sangrado por trauma.",
                  "Glasgow y pupilas (tras un rayo, la midriasis arreactiva puede no reflejar el estado neurológico).",
                  "Analítica: hemograma, gasometría, coagulación, función renal, iones (Na, K, Ca, P), CPK, CK-MB, troponina, transaminasas, ácido úrico. Sedimento de orina (mioglobinuria).",
                  "Radiografías y TC craneal según lesiones."] },
        { tipo: "ramas", ramas: [
          { titulo: "Bajo voltaje sin factores de riesgo", subtitulo: "Menos de 1.000 V", tono: "nodesfibrilable",
            bloques: [
              { tipo: "paso", tono: "fin", titulo: "Asintomático con ECG y orina normales: alta sin observación" },
              { tipo: "paso", tono: "accion", titulo: "Síntomas leves o quemadura leve: observar 4-6 horas",
                texto: "Repetir ECG y orina; alta si son normales, con analgesia y tratamiento tópico." }
            ] },
          { titulo: "Alto voltaje, rayo o factores de riesgo", subtitulo: "Quemadura grave, pérdida de consciencia, cardiopatía", tono: "desfibrilable",
            bloques: [
              { tipo: "paso", tono: "accion", titulo: "Ingreso: monitorización 12-24 horas",
                texto: "Monitor cardíaco continuo, vía, sueros, protector gástrico; orina y CPK cada 6 horas; analgesia y cura de quemaduras." }
            ] }
        ] },
        { tipo: "lista", titulo: "Rabdomiólisis y líquidos",
          items: ["No usar las fórmulas de superficie quemada: las lesiones externas no predicen el daño interno.",
                  "Hiperhidratación precoz con SSF o Ringer lactato hasta CPK menor de 5.000 U/l. Sin consenso en el volumen; referencia: 3 l/m²/día (menos de 10 kg: 200 ml/kg/día).",
                  "Diuresis objetivo: más de 100 ml/m²/h (más de 2 ml/kg/h en menores de 10 kg). Cuidado con la sobrecarga si aparece oliguria.",
                  "Sin consenso en alcalinizar ni en el manitol."] },
        { tipo: "lista", titulo: "Síndrome compartimental",
          items: ["Sospecharlo siempre. Retirar vendajes y férulas, extremidad a la altura del corazón (no elevarla), analgesia, oxígeno y evitar la hipotensión.",
                  "Tratamiento: fasciotomía precoz en un centro que pueda medir la presión compartimental."] },
        { tipo: "lista", titulo: "Otros cuidados",
          items: ["Quemaduras como las térmicas; antibiótico tópico en las de 2.º y 3.er grado.", "Omeprazol i.v. por el riesgo de úlcera gástrica.",
                  "Quemadura de la comisura bucal: riesgo de hemorragia a las 2-3 semanas, al caer la escara.",
                  "Después: revisión oftalmológica (cataratas tardías) y otológica con audiometría."] }
      ],
      revisar: [ "El protocolo no da criterios de ingreso en UCI." ],
      fuentes: [ { titulo: "SEUP. Lesiones por electricidad. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/20_Electrocucion_4ed.pdf" } ] },

    { id: "quemaduras", numero: 21, titulo: "Quemaduras",
      texto: "Profundidad, extensión, derivación, Parkland y analgesia",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · Fernández Santervás Y, Melé Casas M",
      bloques: [
        { tipo: "paso", tono: "inicio", titulo: "En el lugar",
          items: ["Térmica: enfriar con agua unos 10 minutos. Nunca hielo. Evitar la hipotermia. Retirar ropa (salvo muy adherida) y joyas.",
                  "Química: quitar toda la ropa e irrigar con agua abundante enseguida.",
                  "Eléctrica: separar con un aislante y desconectar."] },
        { tipo: "paso", tono: "accion", titulo: "ABCDE",
          items: ["Vía aérea: quemadura facial, hollín, estridor, disfonía, esputo carbonáceo o alteración de la consciencia. Oxígeno al 100 %; ante mínimos signos de obstrucción alta, intubación precoz con tubo más pequeño del que corresponde.",
                  "Quemaduras circunferenciales de tórax o abdomen pueden comprometer la ventilación.",
                  "Dos vías (o intraósea). Shock: SSF o Ringer lactato 20 ml/kg, repetible.",
                  "Glucemia. Pensar en CO o cianuro (carboxihemoglobina y lactato).",
                  "Profundidad, extensión y localización. Mantener caliente."] },
        { tipo: "paso", tono: "farmaco", titulo: "Más del 10 % de superficie quemada: líquidos i.v.",
          items: ["Parkland: 4 ml × kg × % de superficie quemada, más las necesidades basales. La mitad en las primeras 8 horas y la otra mitad en 16.",
                  "Primeras 2 horas: 10 ml/kg/h si es menos del 30 %; 20 ml/kg/h si es más del 30 %.",
                  "Cristaloides balanceados; glucosa al 5 % añadida en menores de 20 kg.",
                  "Ajustar a la diuresis: 1-2 ml/kg/h si pesa menos de 30 kg; 0,5-1 ml/kg/h si pesa más.",
                  "Vía central si es más del 20 %. Las expansiones por hipotensión no se descuentan."] },
        { tipo: "tabla", titulo: "Profundidad",
          columnas: ["Grado", "Aspecto", "Dolor", "Curación"],
          filas: [
            ["1.º (superficial)", "Eritema, blanquea, sin ampollas", "Sí", "3-6 días"],
            ["2.º superficial", "Rosada o roja, ampollas íntegras, exudativa, blanquea", "Mucho", "7-21 días, sin cicatriz"],
            ["2.º profundo", "Pálida y moteada, ampollas rotas, no blanquea", "Hipo o hiperalgesia", "Más de 21 días, cicatriz, puede necesitar injerto"],
            ["3.º (espesor total)", "Blanca nacarada a negra, escara, apergaminada", "No", "Raramente sin cirugía"]
          ] },
        { tipo: "tabla", titulo: "Extensión: Lund-Browder (% por zona)",
          columnas: ["Zona", "Menos de 1 año", "1-4 años", "5-9 años", "10-14 años", "Adulto"],
          filas: [
            ["Cabeza", "9,5", "8,5", "6,5", "5,5", "4,5"], ["Muslo (cada uno)", "2,75", "3,25", "4", "4,25", "4,5"],
            ["Pierna (cada una)", "2,5", "2,5", "2,5", "3", "3,25"], ["Cuello", "1", "1", "1", "1", "1"], ["Tronco", "13", "13", "13", "13", "13"],
            ["Brazo (cada uno)", "2", "2", "2", "2", "2"], ["Antebrazo (cada uno)", "1,5", "1,5", "1,5", "1,5", "1,5"],
            ["Mano (cada una)", "1,25", "1,25", "1,25", "1,25", "1,25"], ["Pie (cada uno)", "1,75", "1,75", "1,75", "1,75", "1,75"],
            ["Nalga (cada una)", "2,5", "2,5", "2,5", "2,5", "2,5"], ["Genitales", "1", "1", "1", "1", "1"]
          ],
          nota: "Porcentajes de la cara anterior; la posterior es igual. No contar las de 1.er grado. Palma con dedos del niño: 1 %." },
        { tipo: "lista", titulo: "Derivar a la Unidad de Quemados",
          items: ["Más del 10 % de 2.º grado o más del 2 % de 3.er grado.", "Cara, manos, pies, genitales, periné o grandes articulaciones.",
                  "Eléctricas (también rayo), químicas o con inhalación.", "Con traumatismo o con enfermedad previa que complique la evolución.",
                  "Necesidad de apoyo social, emocional o de rehabilitación."] },
        { tipo: "tabla", titulo: "Analgesia",
          columnas: ["Gravedad", "Fármaco y dosis"],
          filas: [
            ["Menor", "Paracetamol 15 mg/kg v.o. o i.v., o metamizol 20 mg/kg i.v."],
            ["Moderada o grave", "Morfina 0,1 mg/kg i.v. o s.c. (si estable) o fentanilo 1-2 µg/kg i.v."],
            ["Procedimientos (intubación, vías, desbridamiento)", "Ketamina 1-2 mg/kg."]
          ] },
        { tipo: "lista", titulo: "Cura local",
          items: ["Superficiales: lavar y enfriar, analgesia, crema hidratante y protección solar.",
                  "Resto: lavar, desbridar lo desvitalizado y las ampollas rotas, grandes o dolorosas. No puncionar ampollas.",
                  "Gasa no adherente con sulfadiazina argéntica al 0,5-1 % (no en menores de 2 meses) o apósito con plata.",
                  "Vendaje de distal a proximal, firme sin comprimir, en posición funcional.",
                  "Sin antibiótico sistémico profiláctico. Comprobar la vacuna antitetánica."] },
        { tipo: "nota", texto: "Sospechar maltrato (sobre todo en menores de 3 años): retraso en consultar, distribución simétrica, periné y nalgas, patrón en guante o calcetín, bordes netos sin salpicaduras, forma de objeto o de cigarrillo." }
      ],
      revisar: [
        "Temperatura del agua para enfriar: el texto dice «no inferior a 8 °C». No se ha incluido: comprobarla.",
        "Cristaloides balanceados: 8-12 horas en el texto y 24 horas en el resumen.",
        "El protocolo no da criterios de ingreso ni de alta, más allá de la derivación a la Unidad de Quemados."
      ],
      fuentes: [ { titulo: "SEUP. Quemaduras. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/21_Quemaduras_4ed.pdf" } ] },

    { id: "inmersion", numero: 22, titulo: "Lesiones por inmersión",
      texto: "Rescate, tratamiento en Urgencias y observación",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · Pons Morales S",
      bloques: [
        { tipo: "paso", tono: "inicio", titulo: "En el lugar",
          items: ["Rescatar cuanto antes: es lo que más mejora el pronóstico.",
                  "Apnea: ventilación boca a boca enseguida, sin hiperextender el cuello. La ventilación es la prioridad.",
                  "Sin pulso: compresiones, 15:2. Si es por hipotermia o bradicardia extrema, tratar como asistolia.",
                  "No hacer Heimlich ni compresiones para sacar agua.",
                  "Equipo: bolsa y mascarilla con O2 al 100 %, CPAP; intubar si baja la consciencia. Vía venosa o intraósea."] },
        { tipo: "paso", tono: "accion", titulo: "Urgencias: ABCDE",
          items: ["Control cervical; radiografía lateral si hubo zambullida, accidente o caída de altura. Tratarlo como posible politraumatizado y con posible hipotermia.",
                  "Monitorizar SatO2, Glasgow, diuresis, ECG y TA.",
                  "Gasometría, hemograma, glucemia, iones y radiografía de tórax según gravedad (no imprescindible si está asintomático). Alcohol o tóxicos si se sospecha."] },
        { tipo: "paso", tono: "farmaco", titulo: "Soporte",
          items: ["Oxígeno; CPAP o BiPAP si hay edema, atelectasias o baja compliance, si lo permite la situación neurológica.",
                  "Ventilación mecánica si no protege la vía aérea, el esfuerzo es inadecuado o no mejora con la no invasiva.",
                  "Broncodilatadores si hay broncoespasmo. Sin furosemida, antibióticos profilácticos ni corticoides.",
                  "Líquidos balanceados e inotrópicos (adrenalina o noradrenalina).",
                  "Evitar hipo e hiperglucemia y la hipertermia. Edema cerebral: PCO2 25-30 mmHg y manitol."] },
        { tipo: "paso", tono: "accion", titulo: "Hipotermia",
          texto: "Recalentar si es grave (menos de 28 °C) o moderada (28-32 °C) con inestabilidad o coagulopatía, a 0,5-1 °C por hora. En parada o inestabilidad grave, recalentamiento extracorpóreo." },
        { tipo: "ramas", ramas: [
          { titulo: "Sin RCP, asintomático y Glasgow mayor de 13", tono: "nodesfibrilable",
            bloques: [ { tipo: "paso", tono: "fin", titulo: "Observar 6-12 horas", texto: "Alta si la SatO2 y la exploración son normales. Puede empeorar hacia las 12 horas por edema pulmonar." } ] },
          { titulo: "Fallo de algún órgano o sospecha", tono: "desfibrilable",
            bloques: [ { tipo: "paso", tono: "fin", titulo: "UCIP" } ] }
        ] }
      ],
      revisar: [
        "El protocolo usa «moderada» para 28-32 °C al recalentar y para 35-36 °C como neuroprotección.",
        "No da objetivos numéricos de SatO2 ni dosis de fármacos.",
        "La figura del algoritmo no se lee con seguridad."
      ],
      fuentes: [ { titulo: "SEUP. Lesiones por inmersión. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/22_Inmersion_4ed.pdf" } ] },

    { id: "hipotermia", numero: 23, titulo: "Hipotermia. Golpe de calor",
      texto: "Grados, recalentamiento, RCP en hipotermia y enfriamiento",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · Storch de Gracia Calvo P",
      bloques: [
        { tipo: "tabla", titulo: "Hipotermia: temperatura central menor de 35 °C",
          columnas: ["Grado", "Temperatura", "Clínica"],
          filas: [
            ["Leve", "32-35 °C", "Temblor, piloerección, palidez, acrocianosis"],
            ["Moderada", "28-32 °C", "Confusión, torpeza, irritabilidad; después bradicardia, bradipnea, hipotensión"],
            ["Grave", "Menos de 28 °C", "Rigidez, rubor facial, coma con midriasis, arritmias o asistolia (puede parecer muerto)"]
          ],
          nota: "Medir con termómetro que lea menos de 34 °C, por vía vesical, rectal, esofágica o timpánica. No sirven la oral, la axilar ni la de infrarrojos." },
        { tipo: "paso", tono: "inicio", titulo: "TEP y ABCDE",
          items: ["Manipular con cuidado y monitor ECG continuo (arritmias; suelen revertir al recalentar).",
                  "Si se ventila, frecuencias más bajas de lo habitual.",
                  "Moderada o grave: glucosa, iones, función renal, amilasa, hemograma, coagulación, gasometría (no capilar) y ECG."] },
        { tipo: "paso", tono: "accion", titulo: "Recalentamiento",
          items: ["Pasivo, siempre y enseguida: retirar del frío y la ropa mojada y tapar.",
                  "Activo externo (calor radiante, aire caliente): riesgo de caída paradójica de temperatura y arritmias; en moderada o grave, calentar primero el tronco y evitarlo en el traslado.",
                  "Activo interno: oxígeno humidificado a 37 °C y SSF i.v. a 40-44 °C; lavados con suero caliente o circulación extracorpórea en la grave."] },
        { tipo: "paso", tono: "decision", titulo: "RCP en hipotermia",
          items: ["Menos de 30 °C: sin adrenalina y como mucho 3 descargas (la FV responde mal).",
                  "Más de 30 °C: adrenalina cada 6-10 minutos.",
                  "Menos de 28 °C: si no se puede hacer RCP continua, puede retrasarse o hacerse intermitente.",
                  "Asistolia o AESP: volumen i.v."] },

        { tipo: "paso", tono: "inicio", titulo: "Golpe de calor",
          texto: "Fallo de la termorregulación con temperatura habitualmente de más de 40 °C, alteración neurológica (agitación, convulsiones, coma) y posible shock. Clásico (ambiente; piel caliente y seca) o por ejercicio." },
        { tipo: "ramas", ramas: [
          { titulo: "Leve", subtitulo: "Calambres, agotamiento", tono: "nodesfibrilable",
            bloques: [ { tipo: "paso", tono: "fin", titulo: "Reposo en lugar fresco y ventilado, líquidos y alimentos con sal" } ] },
          { titulo: "Golpe de calor", tono: "desfibrilable",
            bloques: [
              { tipo: "paso", tono: "farmaco", titulo: "SSF i.v.", texto: "Si hay shock, bolos de 10 ml/kg rápidos." },
              { tipo: "paso", tono: "accion", titulo: "Enfriamiento rápido",
                texto: "Compresas con agua helada, hielo o bolsas de gel en axilas e ingles, ventilador, inmersión en agua fría. En los muy graves, lavados con suero frío o circulación extracorpórea." },
              { tipo: "paso", tono: "fin", titulo: "Parar al llegar a unos 38,9 °C rectales" }
            ] }
        ] },
        { tipo: "lista", titulo: "Golpe de calor: pruebas y complicaciones",
          items: ["Si hay inestabilidad o clínica neurológica: hemograma, coagulación, función renal y hepática, iones, amilasa, CPK, gasometría, ECG y orina.",
                  "Vigilar convulsiones, shock, arritmias, insuficiencia renal, daño hepático, CID y acidosis."] }
      ],
      revisar: [
        "El protocolo no da criterios de ingreso ni de UCI, ni de ECMO, ni un umbral de potasio.",
        "En el golpe de calor no menciona los antitérmicos."
      ],
      fuentes: [ { titulo: "SEUP. Hipotermia. Golpe de calor. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/23_Hipotermia_4ed.pdf" } ] },
    { id: "mordeduras", numero: 24, titulo: "Mordeduras y picaduras de animales",
      texto: "Herida, antibiótico, tétanos, rabia, víboras, arácnidos, himenópteros y animales marinos",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · Pérez Cánovas C",
      bloques: [
        { tipo: "paso", tono: "inicio", titulo: "TEP y ABCDE",
          texto: "Si está inestable, lo más frecuente es la afectación circulatoria: taponar lo que sangre y expandir volumen. Anamnesis del animal (doméstico o salvaje, vacunación, origen, posibilidad de observarlo) y del niño (inmunosupresión, asplenia). Pruebas en general innecesarias: cultivo si hay infección; radiografía si es punzante cerca del hueso o en cuero cabelludo; TC craneal si puede ser penetrante." },
        { tipo: "paso", tono: "accion", titulo: "Herida",
          items: ["Limpieza (lo más importante): irrigar con SSF sin mucha presión, antiséptico, quitar tejido desvitalizado y cuerpos extraños.",
                  "Analgesia y, si hace falta, sedoanalgesia para explorar.",
                  "Sutura primaria: no infectada, menos de 12 horas (24 en cara), fuera de manos y pies.",
                  "Segunda intención: aplastamiento; manos o pies; más de 12 horas (24 en cara); humana o de gato salvo en cara; inmunodeprimido o asplénico."] },
        { tipo: "lista", titulo: "Profilaxis antibiótica (empezar antes de 12 horas, 3-5 días)",
          items: ["Punzantes, sobre todo de gato.", "Profundas (infradérmicas, óseas o articulares).", "Las que se suturan.",
                  "Manos, pies, cabeza, cuello o genitales.", "Con compromiso vascular o linfático.", "Más de 8 horas con daño importante.", "Inmunodeprimido o asplénico."] },
        { tipo: "nota", texto: "Herida infectada: amoxicilina-clavulánico al menos 10 días. Alergia a penicilina: cefalosporina de 3.ª generación, o cotrimoxazol más clindamicina." },
        { tipo: "tabla", titulo: "Tétanos",
          columnas: ["Vacunación", "Herida limpia", "Herida tetanígena"],
          filas: [
            ["Ninguna, menos de 3 dosis o desconocida", "dT 1 dosis y completar pauta", "dT 1 dosis y completar pauta + IGT"],
            ["3 o 4 dosis", "Nada (1 dosis si hace más de 10 años)", "Nada (1 dosis si hace más de 5 años). IGT solo si es de alto riesgo"],
            ["5 o más dosis", "Nada", "Nada (valorar 1 dosis si hace más de 10 años). IGT solo si es de alto riesgo"]
          ],
          nota: "IGT 250 UI i.m., en otro sitio que la vacuna; 500 UI si la herida tiene más de 24 horas, pesa más de 90 kg, está muy contaminada o infectada. Inmunodeprimidos: IGT en toda herida tetanígena." },
        { tipo: "lista", titulo: "Rabia (España libre salvo Ceuta y Melilla; siempre con Salud Pública)",
          items: ["Murciélago (aunque no se vea mordedura) o animal con rabia confirmada, probable o posible: profilaxis completa.",
                  "Perro o gato sano y vacunado: nada. No vacunado: observarlo 14 días. En Ceuta y Melilla, profilaxis.",
                  "Roedores, conejo, liebre: no precisan (valorar en Ceuta y Melilla).",
                  "Local: lavar con agua y jabón 10-15 minutos y desinfectar.",
                  "Vacuna 1 ml i.m. en deltoides o muslo (nunca glúteo). Inmunocompetente sin vacunación previa: días 0, 3, 7 y 14-28.",
                  "Inmunoglobulina 20 UI/kg, lo más posible infiltrada en la herida, con la primera dosis de vacuna (hasta el día 7). En inmunocompetentes sin vacunación previa el protocolo dice que no se pone: comprobarlo."] },
        { tipo: "tabla", titulo: "Víboras: gravedad (Audebert)",
          columnas: ["Grado", "Clínica", "Actitud"],
          filas: [
            ["0 (seca)", "Sin síntomas, analítica normal", "Observación 6 horas y cura local"],
            ["1 (leve)", "Dolor local limitado", "Observación 24 horas y cura local"],
            ["2 (moderado)", "Inflamación local; vómitos, diarrea, hipotensión; leucocitosis, trombopenia, TP alargado", "Ingreso, suero antiofídico, analgesia y antihistamínico"],
            ["3 (grave)", "Todo el miembro o más; shock, alteración de consciencia; rabdomiólisis, coagulopatía, fallo renal", "UCI, suero antiofídico y soporte"]
          ] },
        { tipo: "lista", titulo: "Víboras: tratamiento",
          items: ["Lavar, vendaje suave y elevar algo el miembro; tratar el dolor. No torniquete, frío, cortar, succionar ni masajear.",
                  "Sin corticoides (solo si hay reacción al suero) ni antibiótico profiláctico.",
                  "Antiveneno si grado 2 o más, más de medio miembro afectado o afectación sistémica en paciente de riesgo. Mejor en las primeras 10 horas.",
                  "Viperfav: 1 vial en 100 ml de SSF a 50 ml/h. Viperatab: 2 viales (8 ml) en 100 ml de SSF en 30 minutos, repetible.",
                  "Analítica: hemograma, coagulación, función hepática y renal, CPK, orina."] },
        { tipo: "paso", tono: "farmaco", titulo: "Himenópteros con anafilaxia: adrenalina i.m. 0,01 mg/kg",
          texto: "Repetible cada 5-15 minutos. Retirar el aguijón, oxígeno, volumen si hay inestabilidad y salbutamol si hay broncoespasmo. Antihistamínico y corticoide no deben retrasar la adrenalina." },
        { tipo: "lista", titulo: "Arácnidos y animales marinos",
          items: ["Arañas y escorpiones: limpiar, reposo, hielo local, analgesia (evitar mórficos según el algoritmo), antihistamínico. Latrodectismo: benzodiacepinas y gluconato cálcico al 10 %.",
                  "Medusas: irrigar con SSF o agua salada, amoníaco, corticoide tópico, analgesia y antihistamínico.",
                  "Peces (araña, raya…): quitar la espina, lavar y sumergir en agua caliente 30-60 minutos. Sin antibiótico profiláctico."] },
        { tipo: "lista", titulo: "Ingreso o derivación",
          items: ["Sepsis o celulitis precoz.", "Afectación de articulación o tendón.", "Punzante profunda o que necesita reconstrucción.",
                  "Aplastamiento grave con pérdida de función.", "Sin respuesta al tratamiento oral.", "Víbora desde grado 2 (UCI en grado 3)."] }
      ],
      revisar: [
        "No da dosis de amoxicilina-clavulánico.",
        "Rabia: el algoritmo pone «0,06 ml/kg» para la inmunoglobulina y el texto 20 UI/kg. He puesto la del texto.",
        "Rabia: la tabla de pautas dice «sin inmunoglobulina» en inmunocompetentes sin vacunación previa, lo que no cuadra con el resto. Lo he dejado señalado.",
        "Criterio de antiveneno: escribe «trombopenia < 15.000», probablemente una errata. No lo he incluido.",
        "Profilaxis frente a VIH y VHB tras mordedura humana: no incluida; está en el protocolo."
      ],
      fuentes: [ { titulo: "SEUP. Mordeduras y picaduras de animales. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/24_Mordeduras_4ed.pdf" } ] },

    { id: "intoxicaciones", numero: 25, titulo: "Intoxicaciones",
      texto: "Estabilización, descontaminación, antídotos y fármacos muy tóxicos",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · Martínez Sánchez L, Mintegi Raso S",
      bloques: [
        { tipo: "paso", tono: "inicio", titulo: "TEP inestable: ABCDE primero",
          items: ["A: intubar si hay depresión neurológica o daño de vía alta (cáusticos, gases irritantes).",
                  "B: oxígeno al 100 % si hay gases asfixiantes (CO, cianhídrico).",
                  "C: SSF 10-20 ml/kg si hay shock. QRS ancho: bicarbonato. Torsade de pointes: sulfato de magnesio.",
                  "D: glucemia. Naloxona si opiáceos o tóxico desconocido con depresión neurológica y respiratoria (sobre todo con miosis). Convulsiones o agitación: benzodiacepinas.",
                  "E: descontaminación externa y temperatura."] },
        { tipo: "paso", tono: "accion", titulo: "Anamnesis y riesgo",
          texto: "Qué, cuánto como máximo, por qué vía, cuándo y qué se ha hecho ya. Hay riesgo si tiene síntomas, la dosis es tóxica o desconocida, no se sabe la sustancia o la exposición fue voluntaria (sobre todo con intención autolítica). Todo niño con riesgo, en observación hasta descartar toxicidad." },
        { tipo: "paso", tono: "decision", titulo: "¿Descontaminación digestiva?",
          texto: "Solo si se cumplen las cuatro: intoxicación real por sustancia recuperable; menos de 2 horas (mejor 1; hasta 6 si hay hipoperistaltismo); consciente sin riesgo de aspiración o intubado; sin contraindicaciones." },
        { tipo: "paso", tono: "farmaco", titulo: "Carbón activado 1 g/kg v.o. (máximo 50 g)",
          items: ["Se puede mezclar con zumo, agua, cola o chocolate (no leche). La sonda nasogástrica no evita la aspiración y da más complicaciones.",
                  "Dosis repetidas (0,25-0,5 g/kg, máximo 25 g, cada 3-6 horas): circulación enterohepática, liberación retardada, megadosis, bezoares.",
                  "No sirve (PHAILS): pesticidas, metales pesados, hidrocarburos, ácidos, álcalis, alcoholes, hierro, litio, disolventes; sales de Mg, K y Na.",
                  "Contraindicado: vía aérea no protegida con baja consciencia, obstrucción, perforación o hemorragia digestiva, cáusticos e hidrocarburos."] },
        { tipo: "lista", titulo: "Otras técnicas",
          items: ["Lavado gástrico: excepcional.",
                  "Irrigación intestinal (PEG, 15 g en 250 ml por SNG): hierro, litio o potasio graves; liberación retardada pasadas 2 horas; paquetes de droga. 500 ml/h (9 meses-6 años), 1.000 ml/h (más de 6 años), 1.500-2.000 ml/h (adolescentes). No a la vez que el carbón.",
                  "Piel y ojos: agua abundante al menos 15 minutos. Cáusticos: es una emergencia dentro del ABCDE.",
                  "Alcalinización urinaria: salicilatos moderados-graves. Depuración extrarrenal en casos graves (alcoholes tóxicos, litio, salicilatos, valproato, teofilina, carbamazepina…)."] },
        { tipo: "tabla", titulo: "Antídotos principales",
          columnas: ["Tóxico", "Antídoto"],
          filas: [
            ["Paracetamol, setas hepatotóxicas", "N-acetilcisteína"], ["Opiáceos", "Naloxona"],
            ["Benzodiacepinas (solo pura, con fallo respiratorio o hemodinámico sin respuesta al soporte)", "Flumazenilo"],
            ["Tricíclicos y bloqueantes del sodio, salicilatos", "Bicarbonato"], ["Organofosforados, carbamatos", "Atropina (+ pralidoxima)"],
            ["Cianuro", "Hidroxocobalamina"], ["Metahemoglobinemia", "Azul de metileno"],
            ["β-bloqueantes, antagonistas del calcio, insulina", "Glucagón (insulina a dosis altas si hipotensión refractaria)"],
            ["Antagonistas del calcio", "Gluconato cálcico"], ["Hierro", "Deferoxamina"], ["Metanol, etilenglicol", "Fomepizol o etanol"],
            ["Digoxina", "Anticuerpos antidigoxina"], ["Extrapiramidalismo", "Biperideno"], ["Isoniazida", "Piridoxina"],
            ["Valproato", "Carnitina"], ["Anestésicos locales; colapso refractario por cardiotóxicos", "Emulsión lipídica"],
            ["Cumarínicos / heparina", "Vitamina K / protamina"], ["Delirio anticolinérgico", "Fisostigmina"]
          ],
          nota: "El protocolo no da dosis de los antídotos. Consultar TOXSEUP o el Servicio de Información Toxicológica." },
        { tipo: "lista", titulo: "Situaciones concretas",
          items: ["Paracetamol con intención autolítica: nivel en plasma desde las 4 horas, y coagulación.",
                  "CO: oxígeno al 100 % y carboxihemoglobina; TC si está en coma y no mejora con oxígeno.",
                  "Cáusticos: ni carbón ni provocar el vómito; valorar vía aérea alta.",
                  "Intención autolítica: observar hasta descartar toxicidad, ECG y valoración por Salud Mental antes del alta."] },
        { tipo: "nota", texto: "Un solo comprimido puede matar a un niño de 10 kg: amlodipino, buprenorfina, clonidina, diltiazem, doxilamina, flecainida, glibenclamida, glipizida, hidromorfona, hidroxicloroquina, metadona, morfina, oxicodona, propafenona, risperidona, rivastigmina, tapentadol, tramadol, teofilina, verapamilo, ziprasidona. Hacer siempre parte de lesiones." }
      ],
      revisar: [
        "El protocolo no da dosis de antídotos (ni la pauta de N-acetilcisteína ni la de naloxona), ni el nomograma de paracetamol. No he añadido dosis de otras fuentes: dime si quieres sacarlas de TOXSEUP.",
        "No define criterios de alta o ingreso más allá de observar hasta descartar toxicidad."
      ],
      fuentes: [ { titulo: "SEUP. Intoxicaciones. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/25_Intoxicaciones_4ed.pdf" } ] },

    { id: "cuerpo-extrano", numero: 26, titulo: "Ingesta-aspiración de cuerpo extraño",
      texto: "Obstrucción, radiografía, pilas de botón, imanes y tiempos de endoscopia",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · Lobeiras Tuñón A",
      bloques: [
        { tipo: "ramas", ramas: [
          { titulo: "Obstrucción completa o inconsciente", tono: "desfibrilable",
            bloques: [ { tipo: "paso", tono: "accion", titulo: "Maniobras de desobstrucción", texto: "Según el protocolo de RCP." } ] },
          { titulo: "Obstrucción incompleta (tose bien)", tono: "nodesfibrilable",
            bloques: [ { tipo: "paso", tono: "accion", titulo: "Oxígeno, posición cómoda, animar a toser",
              texto: "Sin maniobras ni exploraciones invasivas. Observación estrecha. Vía baja: broncoscopia en quirófano." } ] }
        ] },
        { tipo: "paso", tono: "decision", titulo: "Ingesta: ¿hace falta radiografía?",
          items: ["Sin radiografía si se cumple todo: asintomático, menos de 1 cm, no afilado ni alargado, ni pila ni imán, y detector de metales infradiafragmático.",
                  "Si se hace: siempre dos proyecciones (PA y lateral), de cuello a abdomen. Sin detector de metales, radiografía siempre en las monedas."] },
        { tipo: "paso", tono: "farmaco", titulo: "Pila de botón: radiografía siempre",
          items: ["Miel 10 ml cada 10 minutos (máximo 6) hasta la endoscopia, sin retrasarla: mayores de 1 año, asintomáticos y menos de 12 horas. Alternativa: sucralfato 10 ml cada 10 minutos (máximo 3).",
                  "En esófago: endoscopia en menos de 2 horas (valorar TC si han pasado más de 12).",
                  "En estómago con síntomas o con imán: endoscopia en menos de 2 horas. Más allá del estómago con síntomas o imán: cirugía.",
                  "Más allá del esófago y asintomático: radiografía a los 7-14 días (antes si hay síntomas); si no avanza, extraer."] },
        { tipo: "tabla", titulo: "Ingesta: actitud según objeto",
          columnas: ["Objeto", "Actitud"],
          filas: [
            ["Moneda en esófago", "Con síntomas o más de 24 horas: extraer urgente. Asintomática: repetir a las 12-24 horas y extraer si sigue."],
            ["Moneda infradiafragmática", "Casa. Repetir si no sale en 2 semanas; endoscopia si sigue en estómago a las 4 semanas."],
            ["Varios imanes, o imán con metal", "Esófago o estómago: endoscopia. Más allá con síntomas: cirugía; sin síntomas: radiografías seriadas (progresión en 4-6 horas)."],
            ["Afilado radioopaco", "Esófago: endoscopia urgente. Estómago: considerarla. Intestino: radiografías; extraer si hay síntomas o no avanza en 3 días."],
            ["Alargado (más de 5 cm)", "Extracción endoscópica siempre."],
            ["Romo en esófago", "Asintomático: observar unas horas. Síntomas o no pasa en 12-24 horas: endoscopia."],
            ["Impactación alimentaria", "Babeo o dolor cervical: endoscopia urgente. Maneja secreciones: diferida si no se resuelve en 24 horas. Estudiar después (esofagitis eosinofílica)."]
          ],
          nota: "Nada debe estar en el esófago más de 24 horas. No más de 1 hora entre la radiografía y la endoscopia." },
        { tipo: "lista", titulo: "Aspiración",
          items: ["Radiografía de tórax a todos aunque estén asintomáticos; puede ser normal hasta en dos tercios.",
                  "TC si está estable, la radiografía no aclara y la sospecha es moderada-alta.",
                  "Broncoscopia si la clínica o la radiografía lo sugieren, o si la sospecha es alta aunque todo sea normal.",
                  "Larga evolución con inflamación: metilprednisolona 1-2 mg/kg/día 3-7 días.",
                  "Baja sospecha y radiografía normal: casa y revisar a los 2-3 días."] },
        { tipo: "nota", texto: "Volver si hay dolor abdominal, fiebre, vómitos, sangre en heces, tos o dificultad respiratoria. No sirven procinéticos, enemas, glucagón ni cambios de dieta." }
      ],
      revisar: [
        "El protocolo no trata los paquetes de droga.",
        "Pila de botón: el protocolo da también la alternativa de la NASPGHAN (según edad y tamaño, 20 mm). No la he incluido para no mezclar."
      ],
      fuentes: [ { titulo: "SEUP. Ingesta-aspiración de cuerpo extraño. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/26_Ingesta_CE_4ed.pdf" } ] },

    { id: "sedoanalgesia", numero: 27, titulo: "Sedoanalgesia",
      texto: "Preparación, ayuno, fármacos por vía y alta tras el procedimiento",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · Míguez Navarro MC, Fernández Santervás Y, de Ceano Vivas M, Barasoain Millán A, Clerigué Arrieta N, González Posada A",
      bloques: [
        { tipo: "paso", tono: "inicio", titulo: "Preparación",
          items: ["Sedación mínima: un profesional. Moderada o profunda: dos (médico y enfermera) y consentimiento escrito.",
                  "AMPLE y ASA. ASA I-II: médico no anestesista con formación. ASA III: urgenciólogo o intensivista con formación en vía aérea. ASA IV-V o vía aérea anómala: anestesista.",
                  "Material: aspiración, oxígeno, vía aérea, monitor y fármacos de RCP. Capnografía recomendada."] },
        { tipo: "tabla", titulo: "Ayuno (procedimiento no urgente)",
          columnas: ["Riesgo de aspiración", "Líquidos claros", "Leche materna", "Leche artificial y comida"],
          filas: [ ["Nulo", "Sin restricción", "Sin restricción", "2 h"], ["Leve", "Sin restricción", "2 h", "4 h"], ["Moderado", "2 h", "4 h", "6 h"] ],
          nota: "Urgente: el ayuno no contraindica. Óxido nitroso al 50 %: no requiere ayuno." },
        { tipo: "lista", titulo: "Medidas no farmacológicas (siempre)",
          items: ["Padres presentes, distracción, relajación, refuerzo positivo.", "Lactantes: sacarosa al 24 %, 0,1-0,5 ml 1-2 minutos antes, con succión no nutritiva."] },
        { tipo: "tabla", titulo: "Fármacos",
          columnas: ["Fármaco", "Vía y dosis", "Inicio / duración"],
          filas: [
            ["Ketamina", "i.v. 1-2 mg/kg", "1-2 min / 15-20 min"],
            ["Ketamina", "i.m. 3-4 mg/kg (máx. 5 mg/kg, 200 mg)", "3-5 min / 60-90 min"],
            ["Ketamina", "i.n. 5 mg/kg (máx. 100 mg)", "10-20 min / 70 min"],
            ["Midazolam", "v.o. 0,5 mg/kg (máx. 15 mg)", "30 min / 60-90 min"],
            ["Midazolam", "i.n. 0,3-0,5 mg/kg (máx. 10 mg; 1 ml por narina de 5 mg/ml)", "15-20 min / 60 min"],
            ["Midazolam", "i.v. 0,02-0,1 mg/kg (acumulado máx. 6 mg si menos de 12 años, 10 mg si más)", "2-3 min / 20-30 min"],
            ["Fentanilo", "i.v. 1-2 µg/kg en 2-3 min (0,5-1 si menos de 6 meses); i.n. 1,5-2 µg/kg. Máx. 50 µg (menos de 12 años) o 100 µg", "—"],
            ["Propofol", "i.v. lento: 1-2 mg/kg (6 meses-2 años), 0,5-1 mg/kg (más de 2 años); perfusión 0,5-1 mg/kg/h", "1 min / 5-10 min"],
            ["Óxido nitroso", "Inhalado al 30-70 % con O2", "3-5 min / 1-5 min"],
            ["Dexmedetomidina", "i.n. 1-3 µg/kg (máx. 100 µg); i.v. 0,5-2 µg/kg", "i.v. 5-10 min / 30-70 min"]
          ] },
        { tipo: "ramas", ramas: [
          { titulo: "Poco doloroso", subtitulo: "Heridas menores, punción lumbar, vía venosa", tono: "nodesfibrilable",
            bloques: [ { tipo: "paso", tono: "farmaco", titulo: "Anestesia tópica (EMLA en piel intacta, LAT en heridas) o local",
              texto: "Con o sin midazolam v.o., i.n. o i.v., u óxido nitroso en mayores de 1 año que colaboren." } ] },
          { titulo: "Muy doloroso", subtitulo: "Fracturas, luxaciones, heridas complejas", tono: "desfibrilable",
            bloques: [ { tipo: "paso", tono: "farmaco", titulo: "No invasiva: óxido nitroso + fentanilo i.n., o fentanilo i.n. + midazolam i.n." },
                       { tipo: "paso", tono: "farmaco", titulo: "Invasiva: ketamina (la de elección), ketamina + propofol o fentanilo + propofol" } ] }
        ] },
        { tipo: "nota", texto: "Laringoespasmo: recolocar la vía aérea, tracción mandibular y ventilación con presión positiva. Los eventos respiratorios son los más frecuentes, sobre todo al combinar fármacos." },
        { tipo: "lista", titulo: "Alta (desde 30 minutos tras el procedimiento, sin evento adverso mayor)",
          items: ["Vía aérea y respiración conservadas y constantes normales.", "Bien hidratado.",
                  "Consciencia normal para su edad: alerta, reconoce a sus padres, habla, se sienta y anda.",
                  "En casa: vigilar 24 horas, dieta progresiva empezando por líquidos, nada de deporte ni actividades de coordinación.",
                  "Volver si hay cianosis, respiración anormal, somnolencia excesiva, cambios de conducta o vómitos repetidos."] }
      ],
      revisar: [
        "Observación: el texto dice 30 minutos y la lista de comprobación 2 horas si hubo eventos adversos precoces.",
        "Dexmedetomidina i.n.: el inicio aparece como «25-25 min» (errata); no lo he puesto.",
        "El protocolo no da dosis de naloxona ni de flumazenilo, ni de EMLA, LAT o lidocaína."
      ],
      fuentes: [ { titulo: "SEUP. Sedoanalgesia. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/27_Sedoanalgesia_4ed.pdf" } ] },

    { id: "dolor", numero: 28, titulo: "Manejo del dolor",
      texto: "Escalas por edad, escalera analgésica y dosis",
      subtitulo: "SEUP · 4.ª edición, febrero de 2024 · Guerrero Márquez G, Míguez Navarro MC, Sánchez García I, Plana Fernández M, Ramón Llácer M",
      bloques: [
        { tipo: "tabla", titulo: "Escalas según edad",
          columnas: ["Edad", "Escala"],
          filas: [ ["Neonatos", "CRIES, COMFORT, NIPS"], ["1 mes-3 años", "FLACC, CHEOPS, LLANTO"], ["4-7 años", "Caras (FPS-r, Wong-Baker), Oucher"], ["Más de 7 años", "EVA, escala numérica"],
                   ["TEA o discapacidad sin lenguaje", "FLACC-R, NCCPC-R, INRS, PPP"] ],
          nota: "FLACC, EVA y LLANTO (0-10): 1-3 leve, 4-6 moderado, 7-10 intenso." },
        { tipo: "ramas", ramas: [
          { titulo: "Leve", tono: "nodesfibrilable",
            bloques: [ { tipo: "paso", tono: "farmaco", titulo: "Paracetamol (ibuprofeno si predomina la inflamación)" } ] },
          { titulo: "Moderado", tono: "nodesfibrilable",
            bloques: [ { tipo: "paso", tono: "farmaco", titulo: "Metamizol, o codeína o tramadol",
              texto: "Si predomina la inflamación: ibuprofeno, naproxeno, ketorolaco, dexketoprofeno o diclofenaco." } ] },
          { titulo: "Intenso", tono: "desfibrilable",
            bloques: [ { tipo: "paso", tono: "farmaco", titulo: "Morfina, fentanilo o ketamina" } ] }
        ] },
        { tipo: "tabla", titulo: "Dosis",
          columnas: ["Fármaco", "Vía", "Dosis", "Máximo"],
          filas: [
            ["Paracetamol", "v.o.", "10 mg/kg/4 h o 15 mg/kg/6 h (más de 10 años: 0,5-1 g/6 h)", "60 mg/kg/día; 4 g/día"],
            ["Paracetamol", "i.v.", "Menos de 10 kg: 7,5 mg/kg/6 h; 10-50 kg: 15 mg/kg/6 h; más de 50 kg: 1 g/6 h", "30 mg/kg/día (menos de 10 kg); 4 g/día"],
            ["Ibuprofeno", "v.o.", "Más de 3 meses: 5-10 mg/kg/6-8 h; más de 40 kg: 400 mg", "40 mg/kg/día; 1,2 g/día"],
            ["Metamizol", "v.o.", "Más de 3 meses: 12,5-20 mg/kg/6 h", "2 g/8 h; 6 g/día"],
            ["Metamizol", "i.v./i.m.", "6,4-17 mg/kg/dosis (15 años o más: 500-1.000 mg)", "2 g/8 h; 6 g/día"],
            ["Tramadol", "Varias", "Más de 12 años: 50-100 mg/4-6 h; menos de 12 (fuera de ficha): 1-2 mg/kg dosis única", "400 mg/día"],
            ["Codeína", "v.o.", "Más de 12 años: 0,5-1 mg/kg/6 h", "60 mg/dosis; 240 mg/día"],
            ["Ketorolaco", "i.v.", "0,5 mg/kg (más de 16 años: 30 mg/8 h)", "Máximo 2 días"],
            ["Morfina", "i.v.", "0,05-0,1 mg/kg cada 2-4 h, en 5 min", "15 mg/día"],
            ["Fentanilo", "i.n.", "Más de 10 kg: 1-2 µg/kg; repetir 0,3-0,5 µg/kg cada 3-5 min", "100 µg/dosis o 3 µg/kg"],
            ["Fentanilo", "i.v./i.m.", "2-12 años: 1-2 µg/kg cada 30-60 min; más de 12: 25-50 µg cada 1-2 h", "50 µg/dosis"],
            ["Ketamina", "i.v.", "0,5-2 mg/kg", "50 mg"],
            ["Ketamina", "i.m.", "4-5 mg/kg", "100 mg"]
          ] },
        { tipo: "lista", titulo: "Situaciones concretas",
          items: ["Cólico renal: AINE; si es intenso, añadir opioide mayor.", "Cefalea o migraña: AINE; triptanes si fallaron antes.",
                  "Dolor abdominal cólico: metamizol.", "Dolor menstrual: AINE.", "Fracturas: inmovilizar."] },
        { tipo: "lista", titulo: "Vía, reevaluación y alta",
          items: ["Vía menos invasiva posible: oral, intranasal o transmucosa. Evitar i.m. y s.c.",
                  "Reevaluar: intranasal a los 5-10 min, oral a la hora, parenteral o rescate a los 30-60 min.",
                  "Medidas no farmacológicas: familia, distracción, música; sacarosa al 24 % en lactantes de 0-3 meses; frío local.",
                  "Alta: si se espera dolor en las primeras 48-72 horas, pauta fija cada 4-8 horas más rescate; si es intermitente, a demanda."] }
      ],
      revisar: [
        "No he incluido la calculadora FLACC porque no tengo los descriptores de cada ítem del PDF con seguridad.",
        "Diclofenaco en mayores de 14 años aparece como «50 mg/kg/8-12 h» (probable errata); no lo he puesto.",
        "Morfina v.o.: la tabla da 20 mg/día de máximo, distinto del i.v.; no la he incluido."
      ],
      fuentes: [ { titulo: "SEUP. Manejo del dolor en Urgencias. 4.ª ed., 2024", url: "https://seup.org/wp-content/uploads/2024/04/28_Dolor_urgencias_4ed.pdf" } ] }
  ]
};
