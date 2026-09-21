"use client";

import React, { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FAQItem[] = [
  {
    question: "¿Cómo agendo una medición o calibración en el banco dinamómetro?",
    answer:
      "Puedes agendar directamente vía WhatsApp (+56 9 9055 0474) o mediante el formulario indicando modelo, motor y objetivo de potencia. Coordinamos tu turno para que traigas tu auto a nuestras instalaciones en Victoria 8766, La Cisterna. Las pruebas incluyen reporte impreso/digital de potencia a las ruedas (WHP), torque y mezcla estequiométrica (AFR).",
  },
  {
    question: "¿Hacen envíos de repuestos y kits a regiones fuera de Santiago?",
    answer:
      "Sí, despachamos a diario a todo Chile continental mediante Starken, Chilexpress y Pullman Cargo por pagar o pagado. Cada componente viaja con embalaje reforzado y seguro de transporte para resguardar la integridad de piezas mecánicas y electrónicas.",
  },
  {
    question: "¿Qué plataformas automotrices atienden en el taller?",
    answer:
      "Somos especialistas en plataformas americanas de alto caballaje: Ford Mustang (Coyote 5.0L Gen 1, 2 y 3, Mach 1, Shelby), Ford F-150 Supercharged, Chevrolet Camaro SS / ZL1 (LT1, LT4, LS3), Chevrolet Corvette (C6, C7 Z06, C8), Dodge Challenger / Charger (HEMI 5.7, 6.4 392, Hellcat) y Jeep Grand Cherokee SRT / Trackhawk.",
  },
  {
    question: "¿Puedo llevar piezas que compré por mi cuenta para que las instalen?",
    answer:
      "Sí, realizamos montaje mecánico, alineación de suspensión y reprogramación de centralita para repuestos provistos por el cliente, previa inspección técnica para verificar su compatibilidad y estado funcional.",
  },
  {
    question: "¿Qué medios de pago aceptan para productos y mano de obra?",
    answer:
      "Aceptamos transferencias bancarias electrónicas, tarjetas de débito y crédito a través de Webpay / Transbank (con opción de cuotas según tu banco) y pago directo en el taller. Emitimos boleta o factura según sea requerido por el cliente o empresa.",
  },
];

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="mt-14 pt-10 border-t border-neutral-800">
      <div className="max-w-3xl mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-red-500 uppercase tracking-widest mb-1">
          <HelpCircle className="w-4 h-4" />
          <span>Resolución de Dudas Frecuentes</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-heading font-black text-white uppercase">
          Preguntas Frecuentes de Clientes
        </h2>
        <p className="text-xs text-neutral-400 mt-1">
          Todo lo que necesitas saber antes de traer tu vehículo o solicitar repuestos a ZRPM.
        </p>
      </div>

      <div className="space-y-3 max-w-4xl">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className="rounded-xl border border-neutral-800 bg-neutral-900/60 overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggleItem(idx)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 text-sm font-heading font-bold text-white hover:text-red-400 transition-colors"
              >
                <span>{item.question}</span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-red-500 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-neutral-500 flex-shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-5 text-xs text-neutral-300 leading-relaxed border-t border-neutral-800/80 pt-3">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
