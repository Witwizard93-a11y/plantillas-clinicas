# Revisión del contenido · versión 2.0.0

15 de noviembre de 2026. Qué fuente tiene cada sección, qué se ha comprobado y qué queda pendiente de validar por el equipo.

## Fuentes

| Sección | Fuente | Cómo se ha obtenido |
|---|---|---|
| NEWS2 | Royal College of Physicians, NEWS2 (2017), Charts 1, 2 y 4 | Traducción propia, no aprobada por el RCP |
| ABCDE | Resuscitation Council UK, The ABCDE approach (2024) | Resumen traducido |
| RCP adulto | ERC Guidelines 2025, Adult Advanced Life Support | Resumen traducido |
| RCP pediátrico | ERC Guidelines 2025, Paediatric Life Support (póster del algoritmo) | Traducción del póster |
| Causas reversibles, columna «Qué hacer» | Resuscitation Council UK 2025 (basado en ERC 2025): Special circumstances y Paediatric life support | Resumen traducido |
| Código IAM | Tríptico Codi IAM, SEM, V 03, abril de 2023 | Leído del PDF (imagen) y traducido del catalán |
| Código Ictus | Tríptico Codi Ictus, SEM, V.03, abril de 2023 | Leído del PDF (imagen) y traducido del catalán |
| Código Sepsis | Tríptico Codi Sèpsia, SEM, enero de 2021 | Leído del PDF (imagen) y traducido del catalán |
| Código PPT | Tríptico Codi PPT, SEM, revisión de diciembre de 2017 | Leído del PDF (imagen) y traducido del catalán |
| Código Riesgo de Suicidio | Tríptico Codi Risc Suïcidi, SEM, V 01, junio de 2024 | Leído del PDF (imagen) y traducido del catalán |
| Exploraciones (37) | Versión 1.1.0 | Texto idéntico al de la versión 1.1.0 |
| Tratamientos de adultos (20) | Guía Terapéutica semFYC (actualización del 24/02/2026) | Redacción nueva |

## Decisiones tomadas por Íñigo

- NEWS2: calculadora dada por buena.
- Código Sepsis: IP es el índice de perfusión e IS el índice de shock; en fluidos, índice de perfusión de 1,4 o menos. La referencia «Valorar 3.14» del algoritmo se omite.
- Código PPT: Glasgow grave, 8 o menos. Sin leyenda de categorías de hospital.
- Código Riesgo de Suicidio: riesgo alto, 10 puntos o más.
- ABCDE: no se amplía.
- Causas reversibles: columna «Qué hacer» en adulto y en pediátrico.

## Pendiente de validar

1. **Tratamientos de adultos (20).** Todos llevan la etiqueta «Revisar»: hay que validar las dosis elegidas dentro del rango de la guía, el texto de control y los signos de alarma, que no proceden de la guía.
2. **Lectura rápida del ECG.** Conserva la etiqueta «Revisar» de la versión 1.1.0.
3. **Códigos del SEM.** Los PDF son imágenes: las cifras se han leído a la vista. Conviene repasarlas contra el tríptico.
4. **Código Sepsis.** La sigla «RA» de la monitorización sigue sin identificar.
5. **Código IAM.** La creatinina consta en mg/dl (el tríptico pone «mg/ml»).
6. **Causas reversibles.** En el adulto, la fuente no detalla la técnica para el taponamiento cardíaco ni para el neumotórax a tensión. En el niño, la fuente tiene tablas cortadas: comprobar las dosis con la tabla de fármacos pediátricos de emergencia.
7. **NEWS2.** La respuesta clínica es la del documento original (hospital británico).

## Pendiente de hacer

- Tratamiento al alta de la insuficiencia cardíaca aguda.
- Tratamientos de pediatría y de traumatología, y el resto de especialidades.

## Comprobado

- Calculadora NEWS2: todos los límites de cada parámetro contra el Chart 1 del RCP y los umbrales de riesgo contra el Chart 2.
- Calculadoras RACE y MINI: suma y umbrales.
- Las 57 plantillas se abren y se copian sin campos sin resolver.
- Favoritos, retoque, plantillas propias, exportar, importar y filtro Familia/Urgencias.
- Compilación web (`npm run web`): contenido válido, archivo único y web con funcionamiento sin conexión.
- Copia y botón Atrás con los puentes de Windows y Android simulados. No se han compilado el instalador de Windows ni el APK.
