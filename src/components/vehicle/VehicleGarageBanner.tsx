"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Car, CheckCircle2, ArrowRight, RotateCcw, Wrench, Gauge } from "lucide-react";
import { useGarageStore } from "@/store/useGarageStore";
import { getProductCountForGeneration } from "@/lib/data/products";

export function VehicleGarageBanner() {
  const { selectedVehicle, clearVehicle, openModal } = useGarageStore();

  if (!selectedVehicle) return null;

  const compatibleCount = getProductCountForGeneration(selectedVehicle.generation.id);
  const imageSrc =
    selectedVehicle.generation.imageUrl ||
    "/images/cars/mustang-biturbo.jpg";

  return (
    <div className="relative overflow-hidden rounded-2xl border border-red-500/40 bg-gradient-to-r from-red-950/40 via-neutral-900/90 to-neutral-900 p-6 sm:p-8 shadow-2xl mb-10">
      {/* Background ambient red glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

      <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
          {/* Car Image Thumbnail */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-28 rounded-xl bg-neutral-950 border border-neutral-700 overflow-hidden flex-shrink-0 shadow-lg">
            <Image
              src={imageSrc}
              alt={selectedVehicle.generation.name}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-1 left-2 text-[10px] font-mono text-neutral-300">
              {selectedVehicle.generation.code}
            </div>
          </div>

          {/* Car Details */}
          <div>
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-red-600 text-white shadow-sm">
                <CheckCircle2 className="w-3 h-3" />
                Vehículo Activo en tu Garaje
              </span>
              <span className="text-xs font-mono text-neutral-400">
                Filtro de compatibilidad activo
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl font-heading font-black text-white uppercase tracking-tight">
              {selectedVehicle.make.name} {selectedVehicle.model.name}
            </h2>

            <p className="text-xs sm:text-sm text-neutral-300 font-medium mt-0.5">
              {selectedVehicle.generation.name} · {selectedVehicle.generation.trim}
            </p>

            {/* Engine & Power Metrics */}
            <div className="flex items-center gap-4 mt-3 text-xs font-mono text-neutral-400 flex-wrap">
              <div className="flex items-center gap-1.5">
                <Wrench className="w-3.5 h-3.5 text-red-500" />
                <span>Motor: <strong className="text-neutral-200">{selectedVehicle.generation.engine}</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Gauge className="w-3.5 h-3.5 text-red-500" />
                <span>Potencia Stock: <strong className="text-red-400">{selectedVehicle.generation.stockHP} HP</strong> / {selectedVehicle.generation.stockTorqueNM} Nm</span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
          <Link
            href={`/catalogo?generacion=${selectedVehicle.generation.id}`}
            className="px-5 py-3 rounded-xl bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-950/50 transition-all active:scale-[0.98]"
          >
            <span>Ver Repuestos Compatibles ({compatibleCount})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            type="button"
            onClick={openModal}
            className="px-4 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700 text-xs font-heading font-bold uppercase tracking-wider transition-colors"
          >
            Cambiar Auto
          </button>

          <button
            type="button"
            onClick={clearVehicle}
            className="p-3 rounded-xl text-neutral-500 hover:text-red-400 hover:bg-neutral-900/60 border border-transparent hover:border-neutral-800 transition-colors flex items-center justify-center"
            title="Quitar vehículo de garaje"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
