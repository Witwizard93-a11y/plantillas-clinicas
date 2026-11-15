/* =====================================================================
   RCP · Soporte vital avanzado (adulto y pediátrico)
   Fuente: European Resuscitation Council Guidelines 2025.
   - Adulto: Soar J, et al. Adult Advanced Life Support.
     Resuscitation 2025;215 Suppl 1:110769.
   - Pediátrico: Djakow J, et al. Paediatric Life Support.
     Resuscitation 2025;215 Suppl 1:110767 (póster del algoritmo).

   Tipos de bloque que entiende la app:
     paso   { titulo, items?, texto?, tono? }   tono: "inicio" | "accion" | "decision" | "farmaco" | "fin"
     ramas  { ramas: [ { titulo, subtitulo?, tono, bloques: [...] } ] }
     lista  { titulo, items }
     tabla  { titulo, columnas, filas, nota? }
     nota   { texto }
   ===================================================================== */

window.CONTENIDO = window.CONTENIDO || {};

window.CONTENIDO.rcp = {
  titulo: "RCP",
  subtitulo: "Soporte vital avanzado · ERC 2025",

  versiones: [
    {
      id: "adulto",
      nombre: "Adulto",
      bloques: [
        { tipo: "paso", tono: "inicio", titulo: "No responde y no respira con normalidad",
          items: ["Avisar al equipo de reanimación o al 112.", "RCP 30:2.", "Colocar el desfibrilador/monitor."] },
        { tipo: "paso", tono: "decision", titulo: "Valorar el ritmo" },
        { tipo: "ramas", ramas: [
          {
            titulo: "Desfibrilable",
            subtitulo: "FV / TV sin pulso",
            tono: "desfibrilable",
            bloques: [
              { tipo: "paso", tono: "accion", titulo: "1 descarga",
                items: [
                  "Bifásica: al menos 150 J la primera (130-150 J si es bifásica pulsada).",
                  "Si falla y el aparato lo permite, es razonable subir la energía. Si no se conocen los ajustes del aparato: la energía máxima.",
                  "Pausa predescarga inferior a 5 segundos."
                ] },
              { tipo: "paso", tono: "accion", titulo: "Reanudar la RCP de inmediato, 2 minutos",
                texto: "Reanudar las compresiones justo después de la descarga. Revalorar el ritmo al final de cada ciclo de 2 minutos." },
              { tipo: "paso", tono: "farmaco", titulo: "Fármacos",
                items: [
                  "Adrenalina 1 mg IV tras la 3.ª descarga; después, cada 3-5 minutos.",
                  "Amiodarona 300 mg IV tras la 3.ª descarga; 150 mg IV tras la 5.ª.",
                  "Alternativa a la amiodarona: lidocaína 100 mg IV; 50 mg más tras la 5.ª descarga."
                ] },
              { tipo: "paso", tono: "accion", titulo: "FV refractaria (persiste tras 3 descargas)",
                items: [
                  "Comprobar la posición anterolateral de los parches.",
                  "Valorar cambiar los parches a posición anteroposterior.",
                  "La desfibrilación secuencial doble no se recomienda de rutina."
                ] }
            ]
          },
          {
            titulo: "No desfibrilable",
            subtitulo: "AESP / asistolia",
            tono: "nodesfibrilable",
            bloques: [
              { tipo: "paso", tono: "accion", titulo: "Reanudar la RCP de inmediato, 2 minutos",
                texto: "Revalorar el ritmo al final de cada ciclo de 2 minutos." },
              { tipo: "paso", tono: "farmaco", titulo: "Fármacos",
                items: ["Adrenalina 1 mg IV lo antes posible; después, cada 3-5 minutos."] }
            ]
          }
        ] },
        { tipo: "lista", titulo: "Durante la RCP",
          items: [
            "Compresiones torácicas de alta calidad, con las mínimas interrupciones.",
            "Oxígeno a la mayor concentración posible.",
            "Capnografía con forma de onda.",
            "Con vía aérea avanzada: compresiones continuas y unas 10 ventilaciones por minuto.",
            "Acceso IV; intraóseo si no se consigue el IV en dos intentos.",
            "Adrenalina cada 3-5 minutos.",
            "Fluidos solo si la parada se debe a hipovolemia.",
            "No administrar de rutina calcio, bicarbonato sódico ni corticoides.",
            "Identificar y tratar las causas reversibles (4 H y 4 T)."
          ] },
        { tipo: "lista", titulo: "Valorar",
          items: [
            "Cambiar los parches a posición anteroposterior tras 3 descargas.",
            "Ecografía para identificar causas reversibles.",
            "Compresiones mecánicas para facilitar el traslado o el tratamiento.",
            "RCP extracorpórea y/o coronariografía e intervención coronaria percutánea."
          ] },
        { tipo: "tabla", titulo: "Causas reversibles · 4 H y 4 T",
          columnas: ["Causa", "Qué hacer"],
          filas: [
            ["Hipoxia", "Oxígeno al 100 % y ventilación eficaz."],
            ["Hipovolemia", "Bolo de cristaloides i.v. y valorar la respuesta. En el traumatismo: control de la hemorragia."],
            ["Hiperpotasemia", "Cloruro cálcico al 10 %, 10 ml i.v., y bicarbonato sódico 50 mmol i.v. (por vías separadas o lavando entre ambos). Insulina rápida 10 UI con 25 g de glucosa i.v. Valorar diálisis y RCP extracorpórea."],
            ["Hipopotasemia", "Cloruro potásico 20 mmol i.v./i.o. en 2-3 min; después, 10 mmol en 2 min. Corregir a la vez el déficit de magnesio."],
            ["Hipotermia", "Recalentar (ECMO venoarterial si está disponible). Si la FV persiste tras 3 descargas, retrasar las siguientes hasta superar los 30 °C. Adrenalina 1 mg cuando se alcancen los 30 °C; entre 30 y 35 °C, una dosis cada 6-10 min. Compresiones mecánicas si el traslado es prolongado."],
            ["Hipertermia", "Medir la temperatura central y llevar a un entorno fresco. En el golpe de calor: enfriamiento activo rápido (inmersión en agua fría, hielo)."],
            ["Trombosis pulmonar", "Fibrinólisis ante la sospecha de embolia pulmonar; tras ella, valorar mantener la RCP 60-90 min. Alternativas si la embolia está confirmada: embolectomía quirúrgica o trombectomía percutánea."],
            ["Trombosis coronaria", "Si no hay recuperación sostenida de la circulación: traslado a un centro con intervención coronaria percutánea, salvo que la reanimación sea fútil. Con circulación recuperada y elevación del ST: coronariografía en menos de 120 min."],
            ["Neumotórax a tensión", "Descompresión torácica precoz."],
            ["Taponamiento cardíaco", "Ecografía para identificarlo. La fuente consultada no detalla la técnica de drenaje."],
            ["Tóxicos", "Antídoto en cuanto esté disponible, descontaminación y técnicas de eliminación. Reanimación prolongada. Consultar con un centro de toxicología. Protegerse de la contaminación."]
          ],
          nota: "Columna «Qué hacer»: resumen de las guías de circunstancias especiales de 2025 (ERC, a través del Resuscitation Council UK)." },
        { tipo: "paso", tono: "fin", titulo: "Tras la recuperación de la circulación espontánea",
          items: [
            "Valoración ABCDE.",
            "SpO2 94-98 % y PaCO2 normal.",
            "TAS superior a 100 mmHg.",
            "ECG de 12 derivaciones.",
            "Identificar y tratar la causa.",
            "Control de la temperatura."
          ] }
      ],
      fuentes: [
        { titulo: "ERC Guidelines 2025 · Adult Advanced Life Support", url: "https://doi.org/10.1016/j.resuscitation.2025.110769" },
        { titulo: "Resuscitation Council UK 2025 · Special circumstances (basado en ERC 2025)", url: "https://www.resus.org.uk/print/pdf/node/36442" }
      ]
    },

    {
      id: "pediatrico",
      nombre: "Pediátrico",
      bloques: [
        { tipo: "paso", tono: "inicio", titulo: "Reconocer la parada cardíaca",
          texto: "Sin signos de vida y/o bradicardia inferior a 60 lpm con mala perfusión.",
          items: ["Avisar al equipo de reanimación o al 112.", "5 ventilaciones de rescate; después, RCP 15:2.", "Colocar el desfibrilador/monitor."] },
        { tipo: "paso", tono: "decision", titulo: "Valorar el ritmo" },
        { tipo: "ramas", ramas: [
          {
            titulo: "Desfibrilable",
            subtitulo: "FV / TV sin pulso",
            tono: "desfibrilable",
            bloques: [
              { tipo: "paso", tono: "accion", titulo: "1 descarga · 4 J/kg" },
              { tipo: "paso", tono: "accion", titulo: "Reanudar la RCP de inmediato, 2 minutos" },
              { tipo: "paso", tono: "accion", titulo: "Descargas",
                items: [
                  "Continuar con descargas cada 2 minutos a 4 J/kg.",
                  "FV/TV sin pulso refractaria: si es necesario, subir hasta 8 J/kg (máximo 360 J) a partir de la 5.ª descarga."
                ] },
              { tipo: "paso", tono: "farmaco", titulo: "Fármacos",
                items: [
                  "Adrenalina IV/IO 10 µg/kg (máximo 1 mg): a los 4 minutos; después, cada 4 minutos.",
                  "Amiodarona IV/IO 5 mg/kg (máximo 300 mg) tras la 3.ª descarga.",
                  "Amiodarona IV/IO 5 mg/kg (máximo 150 mg) tras la 5.ª descarga."
                ] }
            ]
          },
          {
            titulo: "No desfibrilable",
            subtitulo: "Bradicardia, asistolia, AESP",
            tono: "nodesfibrilable",
            bloques: [
              { tipo: "paso", tono: "farmaco", titulo: "Adrenalina IV/IO lo antes posible",
                items: ["10 µg/kg (máximo 1 mg).", "Repetir cada 4 minutos (ciclos alternos)."] },
              { tipo: "paso", tono: "accion", titulo: "Reanudar la RCP de inmediato, 2 minutos" }
            ]
          }
        ] },
        { tipo: "lista", titulo: "Durante la RCP",
          items: [
            "Compresiones torácicas de alta calidad: frecuencia, profundidad y reexpansión.",
            "Ventilación con bolsa y mascarilla con oxígeno al 100 % (técnica de 2 personas).",
            "Con tubo traqueal o dispositivo supraglótico: compresiones continuas."
          ] },
        { tipo: "tabla", titulo: "Ventilaciones por minuto con vía aérea avanzada",
          columnas: ["Edad", "Ventilaciones/min"],
          filas: [["< 1 año", "25"], ["1-8 años", "20"], ["8-12 años", "15"], ["> 12 años", "10"]] },
        { tipo: "tabla", titulo: "Causas reversibles",
          columnas: ["Causa", "Qué hacer"],
          filas: [
            ["Hipoxia", "Ventilar con oxígeno al 100 %. Vía aérea avanzada si la ventilación con bolsa y mascarilla no es adecuada. Comprobar la elevación del tórax, las fugas, la entrada de aire y la distensión abdominal."],
            ["Hipovolemia", "Bolo de 10 ml/kg de cristaloide isotónico; repetir si es necesario. Shock hemorrágico: limitar los cristaloides (máximo 20 ml/kg) y hemoderivados en cuanto estén disponibles. Ácido tranexámico en traumatismo o hemorragia vital: 15-20 mg/kg (máximo 1 g) i.v. en 10 min; después, 2 mg/kg/h."],
            ["Hiperpotasemia", "Insulina rápida 0,1 UI/kg (máximo 10 UI) con 5 ml/kg de glucosa al 10 % (máximo 250 ml) en bolo i.v. No usar calcio en el niño en parada cardíaca."],
            ["Hipopotasemia", "Potasio 1 mmol/kg (máximo 30 mmol): a 2 mmol/min durante 10 min y el resto, si hace falta, en 5-10 min. Si hay hipomagnesemia: sulfato de magnesio 30-50 mg/kg i.v."],
            ["Hipoglucemia", "Glucosa 0,2 g/kg en bolo i.v. (2 ml/kg de glucosa al 10 %). Repetir el control a los 5-10 min."],
            ["Otras alteraciones metabólicas (calcio, magnesio)", "Corregirlas durante la parada sin interrumpir la RCP de calidad. Valorar soporte extracorpóreo."],
            ["Hipotermia", "Por debajo de 30 °C: una sola dosis de adrenalina, sin amiodarona y un máximo de 3 descargas. Entre 30 y 35 °C: adrenalina cada 8 min, amiodarona a los 8 min y descargas cada 2 min. Por encima de 35 °C: algoritmo normal. Recalentar al menos 1 °C/h; fluidos i.v./i.o. calentados a 39-42 °C."],
            ["Hipertermia (golpe de calor, más de 40 °C)", "Enfriamiento agresivo, preferiblemente inmersión hasta el cuello en agua fría. Parar el enfriamiento agresivo a 39 °C y todo enfriamiento activo a 38 °C."],
            ["Tóxicos", "Antídotos si están disponibles y consulta con un centro de toxicología. Bolo de 10 ml/kg de cristaloide isotónico si hay hipotensión. Valorar la RCP extracorpórea si falla la convencional."],
            ["Taponamiento cardíaco", "Pericardiocentesis urgente, minitoracotomía o toracotomía de reanimación, según el entorno y la experiencia."],
            ["Neumotórax a tensión", "Toracocentesis con aguja en el 4.º o 5.º espacio intercostal, línea axilar anterior, o en el 2.º espacio intercostal, línea medioclavicular; después, drenaje torácico. En el traumatismo: toracostomía digital en el 4.º o 5.º espacio intercostal, línea axilar anterior (bilateral en la parada traumática)."],
            ["Tromboembolia pulmonar", "Alteplasa 0,3-0,5 mg/kg (máximo 50 mg) i.v. en 2 min; se puede repetir a los 15 min. Si falla: embolectomía quirúrgica y soporte extracorpóreo."],
            ["Trombosis coronaria", "La fuente consultada no indica un tratamiento específico."]
          ],
          nota: "Columna «Qué hacer»: guías pediátricas de 2025 (ERC, a través del Resuscitation Council UK). Comprobar las dosis con la tabla de fármacos pediátricos de emergencia." },
        { tipo: "paso", tono: "fin", titulo: "Tras la recuperación de la circulación espontánea",
          items: [
            "Valoración ABCDE.",
            "Oxigenación controlada (SpO2 94-98 %) y ventilación (PaCO2 35-45 mmHg).",
            "Mantener la TA sistólica y media por encima del percentil 10 para la edad.",
            "Evitar o tratar la hipertermia.",
            "Comprobar la glucemia y mantenerla en valores normales.",
            "Tratar las causas desencadenantes."
          ] }
      ],
      fuentes: [
        { titulo: "ERC Guidelines 2025 · Paediatric Life Support", url: "https://doi.org/10.1016/j.resuscitation.2025.110767" },
        { titulo: "Resuscitation Council UK 2025 · Paediatric life support (basado en ERC 2025)", url: "https://www.resus.org.uk/print/pdf/node/36439" }
      ]
    }
  ]
};
