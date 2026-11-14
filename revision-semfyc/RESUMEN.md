# Revisión de tratamientos con la Guía Terapéutica semFYC · Resumen

13 de noviembre de 2026. Las 116 plantillas de tratamiento repartidas en `partes.json` se han contrastado con la Guía Terapéutica en Atención Primaria de la semFYC (https://guiaterapeutica.net), consultada con la sesión de Íñigo. Casi todas las entradas consultadas figuran como «Revisado: 24 feb. 2026 | Actualizado: 24 feb. 2026»; la de acné vulgar es del 28 oct. 2026. Todo está en la rama `revision-semfyc`; **no se ha tocado `main`** (publica la app). La fusión la decide Íñigo.

Las partes 3 y 4 no se habían hecho en su día; se han hecho en esta misma ejecución, antes de la 5.

## Resultado por partes

| parte | plantillas | actualizadas | sin cambios | no aplica | no están en la guía | detalle |
|---|---|---|---|---|---|---|
| 1 | 24 | 15 | 0 | 5 | 4 | [parte-1.md](parte-1.md) |
| 2 | 24 | 14 | 0 | 2 | 8 | [parte-2.md](parte-2.md) |
| 3 | 24 | 9 | 3 | 4 | 8 | [parte-3.md](parte-3.md) |
| 4 | 24 | 18 | 3 | 0 | 3 | [parte-4.md](parte-4.md) |
| 5 | 20 | 7 | 0 | 6 | 7 | [parte-5.md](parte-5.md) |
| **Total** | **116** | **63** | **6** | **17** | **30** | |

**Plantillas retiradas (14/11/2026).** A petición de Íñigo se han quitado de la app 10 plantillas de Medicina general. Son la exploración «Exploración de columna dorsal» y 9 tratamientos de la parte 1: los 5 de «Evolución y alta» («no aplica») y las 4 «Corticoides: pautas descendentes» («no están en la guía»). Las 63 actualizadas siguen en la app. De los 107 tratamientos revisados que quedan, 6 están sin cambios, 12 no aplican y 26 no están en la guía.

**Plantillas nuevas (14/11/2026).** En Oftalmología, junto a «Conjuntivitis bacteriana», se han añadido «Conjuntivitis vírica» y «Conjuntivitis alérgica», hechas con sus entradas de la guía. Llevan la marca de ejemplo, como el resto de Oftalmología, y un `revisar` para validarlas.

- **Actualizadas:** fármacos, dosis, pautas y duraciones corregidos para que sean los de la guía, conservando el estilo, las marcas, los campos `{{...}}` y lo que la guía no contradice. Cada una lleva en `revisar` qué ha cambiado y la fuente, y en `enlaces` la entrada de la guía.
- **Sin cambios:** la plantilla coincide con la guía.
- **No aplica:** sin tratamiento farmacológico (evolutivos sin fármacos, controles, hojas para padres sin dosis, hojas SEUP).
- **No están en la guía:** la guía no tiene el problema o no da la pauta (perfusiones y sueroterapia iv, pautas hospitalarias, dosis pediátricas que solo figuran para adultos). No se han cambiado; la tabla de cada parte dice qué recoge la guía de lo relacionado.

Nada se ha añadido de memoria ni de otras fuentes. Lo que la guía no recoge se ha conservado y se marca como «a decidir» o «se conservan». Las ambigüedades de la propia guía se anotan sin cambiar la plantilla. `node scripts/validar.mjs` pasa sin errores.

## Cambios más relevantes

- **ITU:** en adultos, fosfomicina 3 g en dosis única en la cistitis de la mujer y cefuroxima 500 mg/12 h 7-10 días en la pielonefritis. En niños con fiebre, cefuroxima axetilo 15-30 mg/kg/12 h 7-10 días; la guía no recoge la cefixima.
- **Amigdalitis:** antibiótico solo si Centor ≥ 2 y prueba rápida positiva. Fenoximetilpenicilina 500 mg/12 h 7-10 días en adultos; en niños, dosis por edad.
- **Otitis media (niños):** amoxicilina de elección, 10 días en menores de 2 años y 5 en mayores; amoxicilina-clavulánico solo si fracasa.
- **Neumonía (niños):** 5-7 días (5 si evoluciona bien), en lugar de 7.
- **Crup:** dexametasona hasta un máximo de 10 mg (antes 16); adrenalina nebulizada 3-5 ml al 1/1.000 + 3 ml de SF.
- **Urticaria:** cetirizina de elección; corticoide oral solo si es grave o hay angioedema, nunca más de 10 días.
- **Anafilaxia:** adrenalina 1/1.000 0,3-0,5 ml im, repetible cada 5-10 min.
- **SCA:** AAS 250 mg; morfina 2-5 mg cada 5-10 min hasta un máximo de 20 mg, mejor NTG iv antes.
- **Flumazenilo:** 0,2 mg iv y después 0,3 y 0,5 mg. La guía no lo recomienda en la intoxicación por agente desconocido.
- **Dolor osteomuscular, lumbalgia y cervicalgia:** paracetamol, ibuprofeno o naproxeno en lugar de diclofenaco oral, dexketoprofeno o metamizol alternado. Diazepam en lugar de miorrelajantes. Fuera la pregabalina en la cervicalgia y la lumbalgia.
- **Conjuntivitis bacteriana:** primero medidas; antibiótico si no mejora en 2-3 días (en niños, eritromicina pomada). Puede ir al colegio si no tiene fiebre.
- **Erosión corneal:** fuera la oclusión; eritromicina pomada solo si hay riesgo de infección.
- **Tiña capitis:** terbinafina por peso durante 6 semanas (antes 2).
- **Megestrol:** solo en cáncer o sida, empezando por 160 mg/día.

## A decidir (lo más importante)

- **Marcas:** la guía no cita marcas. Comprobad que Otix es trimetoprima/polimixina B/dexametasona, Bilina es levocabastina y Casenlax es polietilenglicol 3350. Se les han aplicado las pautas de esos principios activos.
- **Dosis pediátricas que la guía solo da en adultos** o no da: nebulizaciones y corticoide oral en la crisis asmática, pauta domiciliaria tras la crisis, ibuprofeno en el dolor osteomuscular, gotas óticas en menores de 7 años, terbinafina oral en menores de 4 años, polietilenglicol en menores de 2 años.
- **Corticoides orales:** la guía no los da en las picaduras salvo sospecha de anafilaxia. En la urticaria con angioedema usa prednisona (no prednisolona). Las plantillas conservan la Estilsona.
- **Pautas hospitalarias:** perfusiones (NTG, furosemida, heparina, isoprenalina), pautas iv de FA, terapia puente con Clexane + Sintrom, infusores paliativos y fentanilo. La guía no las recoge; en la bradicardia usa adrenalina en perfusión o glucagón, no isoprenalina.
- **Medidas que chocan con la guía:** aire fresco en el crup (la guía, ambiente caliente y húmedo); vuelta al colegio en la varicela y en la tiña capitis (la guía es distinta o lo considera controvertido).
- **Incoherencias de la propia guía:** azitromicina pediátrica en la faringoamigdalitis (5 días con máximo de 30 mg/kg), duración de la OMA en 2-5 años (5 o 7 días), repetición de la budesonida en el crup, frecuencia de las lágrimas artificiales y duración en la pielonefritis subclínica.

## Word de revisión

`Plantillas-revision-semfyc.docx` contiene las 152 plantillas que tiene ahora la app con su texto, nota, enlaces y observaciones. Las 63 actualizadas empiezan su observación por «Actualizado según Guía Terapéutica semFYC (consultada 13/11/2026)». Se generó con `npm run word -- revision-semfyc/Plantillas-revision-semfyc.docx`. Si se edita, se puede devolver a la app con `npm run word:importar`.

## Siguiente paso

Revisar las actualizadas y los «a decidir». En la app, cada observación sale con la etiqueta **Revisar** y el aviso amarillo; al validar una plantilla se borra su `revisar`. Cuando esté conforme, Íñigo decide si fusiona `revision-semfyc` con `main`.
