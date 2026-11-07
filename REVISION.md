# Revisión del contenido · versión 1.1.0

7 de noviembre de 2026. Este documento resume cómo se han incorporado las plantillas del equipo, qué se ha corregido y qué queda pendiente de validar. Las observaciones pendientes también se ven dentro de la app: etiqueta **Revisar** y aviso amarillo en la ficha. Buscar «revisar» las lista todas.

## Origen del contenido

| Documento | En la app | Plantillas |
|---|---|---|
| `PLANTILLA_RESIS.docx` | Medicina general (y la parte de pediatría, fusionada con la siguiente) | 73 |
| `0_Plantilla_Pedia_Merli.rtf` | Pediatría | 66 |
| `PLANTILLA_COT.docx` | Traumatología | 16 |
| — | Oftalmología: siguen siendo de ejemplo, a la espera de las del servicio | 5 |

## Cómo se ha organizado

- Cada documento se ha repartido en **Exploraciones** y **Tratamientos**, con grupos dentro de cada pestaña (Respiratorio, Piel, Columna, Evolución en urgencias...).
- **Traumatología**: cada región del documento se ha separado en exploración (anamnesis, exploración, RX y diagnóstico) y tratamiento, para pegar cada parte en su apartado del informe.
- **Ámbito Familia/Urgencias** de Medicina general: lo he asignado según el contenido (perfusiones, cetoacidosis o EAP solo en Urgencias; corticoides, ITU o lumbalgia en ambos). Corregidlo donde no encaje.
- **Castellano y catalán**: 14 plantillas tienen las dos versiones (las que ya venían así en los documentos) y 3 están solo en catalán (ABCDE en traumatismo, neurológica breve y recomendaciones al alta de laringitis).
- Los huecos de los documentos («…», «___», «x ml») se han convertido en **campos rellenables**. Donde el documento ofrecía alternativas («hiperémica / no hiperémica», «cada 6-8 / cada 12 h») hay un desplegable con la opción del documento por defecto.
- Las indicaciones para quien usa la plantilla (dosis por peso, «si menor de 3 meses: ingreso», referencias a manuales) están en la **nota**, que se ve pero no se copia.
- Los enlaces del documento están en **Enlaces**. Las hojas para padres de la SEUP enlazan a sus versiones actuales: las direcciones antiguas del documento ya no funcionan.

## Corregido directamente

Errores evidentes. Los que afectan a dosis o unidades llevan además la etiqueta Revisar para que el equipo los confirme.

- **Lectura rápida del ECG**: 1 cuadrito = 40 ms (no 4 ms); en 6 segundos, FC = QRS × 10 (no × 6).
- **Sedación paliativa**: fentanilo en microgramos (600-750 mcg; rescate 300 mcg), no en miligramos.
- **Heparina sódica**: «terapia tromboembólica» → «trombolítica».
- **Fracaso renal agudo**: en el síndrome renopulmonar, «¿hematemesis?» → «¿hemoptisis?».
- **Otitis** (pediatría): «otitis interna» → otitis media aguda.
- **Oftalmowell**: el documento decía «polimixina + neomicina + bacitracina»; el colirio lleva polimixina B, neomicina y gramicidina, y está indicado a partir de 2 años.
- **Dermatitis atópica**: Peitel (prednicarbato, un corticoide) estaba entre los emolientes; ahora está en el escalón de los brotes.
- Erratas y nombres comerciales: Murphy, calamina, Mitosyl, Leti AT4, «bebés que no hayan pasado la varicela», «permeable.0».
- Catalán: fontanel·la, mobilització, distrès, glucèmia, cossos estranys, xumet, picor (el documento ponía «cuor»).

## Plantillas fusionadas

Cuando la plantilla de pediatría y el documento RESIS tenían la misma pauta, se ha hecho una sola. Las diferencias se han resuelto así:

- **Amigdalitis, bronquitis/asma, GEA, ITU, estreñimiento, cefalea, TCE, escabiosis**: se suma lo que aportaba cada versión (por ejemplo, despertar por la noche en el TCE o los ml por vómito y deposición en la GEA).
- **Resfriado** (paracetamol o ibuprofeno), **urticaria** (Polaramine cada 8 o 6-8 h), **varicela** (Polaramine cada 6-8 o 12 h), **otitis externa** (Otix o Ciflot) y **conjuntivitis** (Tobrex cada 4 u 8 h): desplegable con las dos opciones.
- **Bronquiolitis** queda separada de bronquitis/asma, como en la plantilla de pediatría.

## No incorporado

- Tres enlaces a carpetas privadas de Google Drive de RESIS: «Sintrom. Coagulación. INR», «TEP» y «Tríptico diabetes». Si me pasáis su contenido, lo añado.
- El enlace de la calculadora de sodio corregido de la SED (ya no existe).
- Las tres imágenes de RESIS (FA, heparina y flumazenilo): en el archivo están en blanco.
- «Listar en consulta rápida asma» (nota interna de RESIS).
- Dos fragmentos sueltos del final de COT: «Reducció tancada» y «cabestrell Gill-Christ».
- Hojas SEUP que ya no publica: analgesia, varicela, meningitis aséptica, técnica de inhalación (cámara y Turbuhaler), evaluación y alivio del dolor, presencia de familiares y accidentes infantiles. Sus plantillas se mantienen, sin enlace.

## Observaciones pendientes de revisar (36)

Sugerencias clínicas sobre el contenido original, contrastadas con fichas técnicas (CIMA) y guías (Guía Terapéutica Antimicrobiana del SNS, Guía ABE, INFAC, ESC). Cuando el equipo decida, hay que corregir el texto si procede y **borrar la línea `revisar`** de la plantilla en `www/plantillas/`.

### Medicina general (22)

| Plantilla | Observación |
|---|---|
| Lectura rápida del ECG (consulta) | Corregido respecto al documento: decía «1 cuadrito = 4 ms» (a 25 mm/s son 40 ms) y «FC = n.º de QRS x 6» (en 6 segundos se multiplica por 10). |
| Infección urinaria (ITU) | Fosfomicina: la pauta habitual es una dosis única de 3 g; cuando se dan dos, se separan 48-72 h, no 24 h. PNA sin ingreso: la cefuroxima-axetilo se pauta cada 12 h, 7-10 días. Varones: 21 días de ciprofloxacino solo si se sospecha prostatitis (2-4 semanas); sin afectación prostática suelen bastar 7 días. Fuentes: INFAC 2025 (Osakidetza) y Guía Terapéutica Antimicrobiana del SNS. |
| Amigdalitis | En la faringoamigdalitis estreptocócica, el tratamiento de elección es la penicilina V 500 mg cada 12 h durante 10 días (alternativa: amoxicilina 500 mg cada 12 h). La amoxicilina-clavulánico se reserva para las recurrencias (Guía Terapéutica Antimicrobiana del SNS). |
| Laringitis / accesos de tos / tos perruna | La laringitis aguda suele ser vírica y no precisa antibiótico; la azitromicina solo tendría sentido si se sospecha tos ferina. |
| Herpes zóster: pauta con tramadol | Valaciclovir en el herpes zóster: 1 g cada 8 h durante 7 días. La pauta de 1 g cada 24 h corresponde a la supresión del herpes genital. |
| Sarna (escabiosis) | Intervalo: la pauta habitual es repetir la aplicación a los 7 días (así figura en la plantilla de pediatría). El documento decía 48 h y anotaba «yo diría que se repite a los 7 y a los 14 días». |
| Gastritis / epigastralgia | Para descartar pancreatitis se recomienda hoy la lipasa sérica, más sensible y específica que la amilasa (en orina o en plasma). |
| Parálisis facial periférica | El tratamiento de elección de la parálisis facial periférica idiopática son los corticoides orales iniciados en las primeras 72 h (por ejemplo, prednisona 50-60 mg/día durante 5-10 días). El ibuprofeno y las vitaminas del grupo B no han demostrado beneficio; el antiviral solo se valora asociado al corticoide en los casos graves. |
| Crisis asmática: tratamiento | El propio documento la marcaba «REVISAR». Además: Pulmicort y Symbicort a la vez duplican el corticoide inhalado, y el antibiótico no está indicado de rutina en la crisis asmática (solo si hay infección bacteriana). Compárala con «Asma: tratamiento al alta». |
| Infección respiratoria de vías bajas ± broncoespasmo | «GN 24 % (3 l/min)»: con gafas nasales, 3 l/min equivalen a ~32 %; el 24 % corresponde a una mascarilla Venturi a 3 l/min. |
| Oxigenoterapia: FiO2 según dispositivo (consulta) | La regla «litros x 2 + 20» no coincide con la tabla. Con gafas nasales se estima FiO2 ≈ 20 + 4 x l/min (3 l/min ≈ 32 %); los pares FiO2-flujo de la tabla corresponden a las válvulas Venturi. |
| Fibrilación auricular | Digoxina: conviene indicar una dosis máxima acumulada en la impregnación. Flecainida: evitarla si hay cardiopatía estructural o isquémica. |
| Edema agudo de pulmón | Morfina: la guía ESC 2021 de insuficiencia cardíaca no recomienda su uso rutinario en el EAP. Oxígeno: con gafas nasales, 3 l/min equivalen a ~32 %, no a 24 %. Las diluciones [1] y [2] de NTG están en «Nitroglicerina (BIC)». |
| SCASEST / SCACEST | Tal como está escrito parece combinar enoxaparina (Clexane) con heparina sódica en perfusión, y no deben asociarse. Aclarar que son alternativas: enoxaparina 1 mg/kg cada 12 h SC, o heparina sódica en bolo + perfusión ajustada por TTPA. |
| Cetoacidosis diabética | Falta una advertencia clave: si K <3,3 mmol/l, no iniciar la insulina hasta reponer el potasio. Además, los tramos de K se solapan (3-5 y <3,5). |
| Hiponatremia / SIADH | Añadir el límite de corrección para evitar la desmielinización osmótica: no subir el sodio más de 10 mmol/l en las primeras 24 h (8 mmol/l en pacientes de riesgo). |
| Hiperpotasemia y acidosis metabólica | Gluconato cálcico: en la hiperpotasemia con cambios en el ECG se administra de forma aguda (10 ml al 10 % en 2-3 min, repetible si persisten), no como pauta cada 8 h. |
| Fracaso renal agudo (consulta) | Corregido: en el síndrome renopulmonar el documento decía «¿hematemesis?»; por el contexto (hemorragia alveolar) es hemoptisis. |
| Cirrosis: precauciones e infecciones (consulta) | En la IRA del cirrótico, el patrón prerrenal cursa con Na urinario <20 mmol/l (el documento pone >20). En el líquido ascítico, «quilotórax» debería ser «ascitis quilosa». |
| Sedación paliativa (pauta) | Corregido: el documento expresaba el fentanilo en mg; son microgramos (cada ampolla tiene 150 mcg). Revisad que la dosis de 24 h sea la deseada. |
| Heparina sódica (BIC) | Corregido «terapia tromboembólica» por «trombolítica». Como en «SCASEST / SCACEST»: no combinar enoxaparina con la perfusión de heparina sódica. |
| Anorexia en ancianos | Borea es acetato de megestrol 160 mg: su indicación autorizada es la caquexia-anorexia asociada a neoplasia avanzada, y los criterios de Beers y STOPP desaconsejan su uso en mayores (riesgo trombótico, escaso beneficio). 1 comprimido cada 8 h son 480 mg/día. Revisad la indicación. |

### Pediatría (10)

| Plantilla | Observación |
|---|---|
| EF completa (TEP estable, documento RESIS) | Las dos versiones del documento no coinciden: en castellano «orofaringe no hiperémica» y «consciente y orientado»; en catalán «orofaringe hiperèmica» y «FNT» (fontanela normotensa, propio de lactantes). Se ha dejado la orofaringe como desplegable con el valor de cada versión; decidid cuál va por defecto. |
| Bronquitis / asma | En el documento RESIS esta pauta servía también para la bronquiolitis. En la bronquiolitis no se recomiendan de rutina ni el salbutamol ni los corticoides: para ella está la plantilla «Bronquiolitis». |
| Amigdalitis | Corte de peso de la penicilina V: la Guía ABE y la Guía Terapéutica Antimicrobiana del SNS indican 250 mg cada 12 h si <27 kg y 500 mg cada 12 h si ≥27 kg, durante 10 días (el documento pone 25 kg). |
| Otitis media aguda | La plantilla de pediatría la titulaba «otitis interna»; por el contenido es otitis media. La concentración de amoxicilina-clavulánico no coincide entre documentos (100 mg/ml en RESIS y 250 mg/5 ml en pediatría) y cambia los ml: comprobad qué presentación usáis. |
| Dermatitis atópica | Reordenada: el documento ponía Peitel (prednicarbato, un corticoide) junto a los emolientes; se ha pasado a los brotes. |
| Escabiosis (sarna) | Según la ficha técnica de la permetrina (Sarcop, a partir de 2 meses), en lactantes se aplica también en cuero cabelludo, cuello, frente y sienes, evitando ojos y boca; la plantilla excluye cabeza y cara. Conviene además tratar a la vez a todos los convivientes, aunque no tengan lesiones. |
| Tiña capitis | La terbinafina oral se dosifica por peso: 62,5 mg/día si <20 kg, 125 mg/día si 20-40 kg y 250 mg/día si >40 kg, durante 2-4 semanas en Trichophyton. Frente a Microsporum responde peor: es preferible la griseofulvina. |
| Conjuntivitis | Frecuencia del Tobrex: RESIS pone cada 4 horas y la plantilla de pediatría cada 8. Según la ficha técnica, en infecciones leves o moderadas son 1-2 gotas cada 4 horas, y está indicado a partir de 1 año. |
| Erosión corneal | La oclusión no se recomienda de rutina en la erosión corneal: no acelera la curación ni reduce el dolor (revisión Cochrane). |
| Infección urinaria (ITU) | El máximo de la cefixima es 400 mg al día; el documento RESIS ponía 400 mg por dosis. |

### Traumatología (4)

| Plantilla | Observación |
|---|---|
| Cervicalgia / lumbalgia: tratamiento | Pregabalina (Lyrica): no ha demostrado beneficio en la cervicalgia ni en la lumbalgia sin radiculalgia, y la exploración de estas plantillas dice «no radiculalgia»; valorad reservarla para el dolor radicular. El último escalón de la pauta (1-1-1) está incompleto. |
| Fractura de radio distal desplazada: reducción | Tras la reducción de una fractura desplazada, el seguimiento suele hacerse en consultas de traumatología con control radiológico a la semana, no solo por el MAP. Confirmad el circuito de vuestro centro. |
| Analgesia en niños | Dosis fijas: solo sirven a partir de unos 35-40 kg. En niños, mejor pautar por peso (ibuprofeno 10 mg/kg/dosis cada 8 h; paracetamol 15 mg/kg/dosis cada 6-8 h). |
| Agitación | Pauta incompleta: falta la dosis de haloperidol en gotas y aclarar la unidad «1/2 sp» de Largactil. |


## Novedades de la app en la versión 1.1.0

- Dos categorías nuevas: Pediatría y Traumatología (barra inferior con cinco secciones en el móvil).
- Plantillas bilingües castellano/catalán, con selector en la ficha y preferencia en Ajustes.
- Notas que no se copian, enlaces y avisos de revisión en la ficha.
- Valores por defecto en los campos (`{{FC=80}}`, `{{Lado|*derecho|izquierdo}}`). Un desplegable de más de cuatro opciones sin elegir se copia como `___`.
- El editor de plantillas propias admite texto en catalán y nota; Exportar/Importar los conserva.
- Contenido repartido en un archivo por especialidad (`www/plantillas/`) y comprobación automática antes de compilar (`npm run validar`).
