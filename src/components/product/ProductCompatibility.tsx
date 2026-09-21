"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertTriangle, Car, ChevronDown, ChevronUp, Wrench } from "lucide-react";
import { Product } from "@/types";
import { useGarageStore } from "@/store/useGarageStore";
import { getGenerationsByIds } from "@/lib/data/vehicles";

interface ProductCompatibilityProps {
  product: Product;
}

export function ProductCompatibility({ product }: ProductCompatibilityProps) {
  const [isListExpanded, setIsListExpanded] = useState(false);
  const { selectedVehicle, openModal } = useGarageStore();

  const compatibleList = getGenerationsByIds(product.compatibleGenerations);

  const isCurrentVehicleCompatible =
    selectedVehicle &&
    product.compatibleGenerations.includes(selectedVehicle.generation.id);

  return (
    <div className="rounded-xl border border-neutral-800 bg-neutral-900/60 p-4 md:p-5 overflow-hidden">
      {/* Header status based on active garage */}
      {selectedVehicle ? (
        isCurrentVehicleCompatible ? (
          <div className="flex items-start gap-3 bg-emerald-950/40 border border-emerald-500/40 rounded-lg p-3.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                  Compatibilidad Confirmada
                </span>
                <span className="text-xs text-neutral-400">100% Plug & Play / Direct Fit</span>
              </div>
              <p className="text-sm font-semibold text-white mt-1">
                Compatible con tu {selectedVehicle.make.name} {selectedVehicle.model.name} (
                {selectedVehicle.generation.code || selectedVehicle.year})
              </p>
              <p className="text-xs text-neutral-400 mt-0.5 font-mono">
                Motor: {selectedVehicle.generation.engine}
              </p>
            </div>
            <button
              type="button"
              onClick={openModal}
              className="text-xs text-neutral-400 hover:text-white underline whitespace-nowrap ml-2"
            >
              Cambiar
            </button>
          </div>
        ) : (
          <div className="flex items-start gap-3 bg-amber-950/30 border border-amber-500/40 rounded-lg p-3.5">
            <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                  No Confirmado para tu Auto
                </span>
              </div>
              <p className="text-sm font-semibold text-white mt-1">
                Este producto no está marcado como compatible directo con tu {selectedVehicle.make.name}{" "}
                {selectedVehicle.model.name}.
              </p>
              <p className="text-xs text-neutral-400 mt-0.5">
                Revisa la lista de plataformas compatibles o consúltanos por WhatsApp para evaluar adaptaciones o alternativas para tu motor.
              </p>
            </div>
            <button
              type="button"
              onClick={openModal}
              className="text-xs text-neutral-400 hover:text-white underline whitespace-nowrap ml-2"
            >
              Cambiar
            </button>
          </div>
        )
      ) : (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-neutral-950/60 border border-neutral-800 rounded-lg p-3.5">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-red-600/10 border border-red-500/30 rounded-lg text-red-400">
              <Car className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">¿Este componente le queda a tu auto?</p>
              <p className="text-xs text-neutral-400">
                Selecciona tu modelo en el garaje virtual para verificar compatibilidad exacta.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={openModal}
            className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-xs font-heading font-bold uppercase tracking-wider text-white border border-neutral-700 hover:border-neutral-500 transition-colors"
          >
            <Car className="w-3.5 h-3.5 text-red-500" />
            <span>Seleccionar Auto</span>
          </button>
        </div>
      )}

      {/* Expandable Compatible Models List */}
      <div className="mt-3 pt-3 border-t border-neutral-800/80">
        <button
          type="button"
          onClick={() => setIsListExpanded(!isListExpanded)}
          className="w-full flex items-center justify-between text-xs font-mono text-neutral-400 hover:text-white transition-colors"
        >
          <span className="flex items-center gap-1.5">
            <Wrench className="w-3.5 h-3.5 text-red-500" />
            <span>
              Ver todas las plataformas compatibles ({compatibleList.length}{" "}
              {compatibleList.length === 1 ? "vehículo" : "vehículos"})
            </span>
          </span>
          {isListExpanded ? (
            <ChevronUp className="w-4 h-4 text-neutral-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-neutral-500" />
          )}
        </button>

        {isListExpanded && (
          <div className="mt-3 space-y-2 max-h-60 overflow-y-auto pr-1 text-xs">
            {compatibleList.length > 0 ? (
              compatibleList.map((gen) => (
                <div
                  key={gen.id}
                  className="flex items-start justify-between p-2.5 rounded-lg bg-neutral-950/80 border border-neutral-800/80"
                >
                  <div>
                    <p className="font-semibold text-white">{gen.name}</p>
                    <p className="text-neutral-400 text-[11px] font-mono mt-0.5">
                      {gen.engine} · {gen.trim}
                    </p>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-neutral-800 text-neutral-300 rounded border border-neutral-700 whitespace-nowrap ml-2">
                    {gen.yearFrom}–{gen.yearTo || "Presente"}
                  </span>
                </div>
              ))
            ) : (
              <p className="text-neutral-400 p-2 italic">
                Apto para proyectos custom o múltiples plataformas universales. Consultar con taller ZRPM.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
