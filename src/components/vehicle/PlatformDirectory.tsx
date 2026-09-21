"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Gauge, Wrench, ArrowRight, Check, Car, Flame } from "lucide-react";
import {
  VEHICLE_GENERATIONS,
  VEHICLE_MAKES,
  VEHICLE_MODELS,
  getMakeById,
  getModelById,
} from "@/lib/data/vehicles";
import { getProductCountForGeneration } from "@/lib/data/products";
import { useGarageStore } from "@/store/useGarageStore";

export function PlatformDirectory() {
  const [selectedBrandFilter, setSelectedBrandFilter] = useState<string>("all");
  const { setVehicle, selectedVehicle } = useGarageStore();

  const filteredGenerations =
    selectedBrandFilter === "all"
      ? VEHICLE_GENERATIONS
      : VEHICLE_GENERATIONS.filter((gen) => {
          const model = getModelById(gen.modelId);
          return model?.makeId === selectedBrandFilter;
        });

  return (
    <section className="mt-14 pt-10 border-t border-neutral-800">
      {/* Directory Title */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-red-500 uppercase tracking-widest mb-1">
            <Flame className="w-3.5 h-3.5" />
            <span>Directorio de Plataformas</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-heading font-black uppercase text-white tracking-tight">
            Plataformas Soportadas por ZRPM
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Especialistas chilenos en motores V8 americanos, turboalimentación e inyección directa.
          </p>
        </div>

        {/* Brand Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          <button
            type="button"
            onClick={() => setSelectedBrandFilter("all")}
            className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
              selectedBrandFilter === "all"
                ? "bg-red-600 text-white shadow-md shadow-red-950/40"
                : "bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800"
            }`}
          >
            Todas ({VEHICLE_GENERATIONS.length})
          </button>

          {VEHICLE_MAKES.map((make) => {
            const isSelected = selectedBrandFilter === make.id;
            return (
              <button
                key={make.id}
                type="button"
                onClick={() => setSelectedBrandFilter(make.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  isSelected
                    ? "bg-red-600 text-white shadow-md shadow-red-950/40"
                    : "bg-neutral-900 hover:bg-neutral-800 text-neutral-400 hover:text-white border border-neutral-800"
                }`}
              >
                {make.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Grid of Platform Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGenerations.map((gen) => {
          const model = getModelById(gen.modelId);
          const make = model ? getMakeById(model.makeId) : null;
          const partsCount = getProductCountForGeneration(gen.id);
          const isCurrentActive = selectedVehicle?.generation.id === gen.id;
          const imageSrc = gen.imageUrl || "/images/cars/mustang-biturbo.jpg";

          return (
            <div
              key={gen.id}
              className={`group rounded-2xl bg-neutral-900 border transition-all duration-300 overflow-hidden flex flex-col justify-between ${
                isCurrentActive
                  ? "border-red-500 ring-2 ring-red-500/40 shadow-xl shadow-red-950/30"
                  : "border-neutral-800 hover:border-neutral-700 hover:shadow-xl"
              }`}
            >
              {/* Image with overlay badge */}
              <div className="relative aspect-[16/10] w-full bg-neutral-950 overflow-hidden">
                <Image
                  src={imageSrc}
                  alt={gen.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-transparent" />

                {/* Make badge top-left */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-heading font-black uppercase tracking-wider bg-black/80 backdrop-blur-md text-white border border-neutral-700">
                    {make?.name}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-red-600/90 text-white">
                    {gen.code}
                  </span>
                </div>

                {/* Years badge top-right */}
                <div className="absolute top-3 right-3">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-neutral-900/90 text-neutral-300 border border-neutral-700">
                    {gen.yearFrom}–{gen.yearTo || "Pres."}
                  </span>
                </div>

                {/* Active checkmark */}
                {isCurrentActive && (
                  <div className="absolute bottom-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500 text-white text-[11px] font-mono font-bold shadow-lg">
                    <Check className="w-3.5 h-3.5" />
                    <span>En tu Garaje</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading font-black text-white text-lg tracking-tight group-hover:text-red-400 transition-colors">
                    {gen.name}
                  </h3>
                  <p className="text-xs text-neutral-400 font-mono mt-0.5">
                    Versión: {gen.trim}
                  </p>

                  <div className="my-4 space-y-1.5 text-xs font-mono text-neutral-400 bg-neutral-950/60 p-3 rounded-xl border border-neutral-800/80">
                    <div className="flex items-center gap-1.5">
                      <Wrench className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                      <span className="text-neutral-300 font-medium">{gen.engine}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Gauge className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                      <span>Stock: <strong className="text-white">{gen.stockHP} HP</strong> / {gen.stockTorqueNM} Nm</span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-3 border-t border-neutral-800/80 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      if (make && model) {
                        setVehicle({
                          make,
                          model,
                          generation: gen,
                          year: gen.yearFrom,
                        });
                      }
                    }}
                    className={`flex-1 py-2 px-3 rounded-lg text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all ${
                      isCurrentActive
                        ? "bg-emerald-600 text-white"
                        : "bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white border border-neutral-700"
                    }`}
                  >
                    <Car className="w-3.5 h-3.5 text-red-500" />
                    <span>{isCurrentActive ? "Activo" : "Elegir Auto"}</span>
                  </button>

                  <Link
                    href={`/catalogo?generacion=${gen.id}`}
                    className="py-2 px-3 rounded-lg bg-red-600/15 hover:bg-red-600 text-red-400 hover:text-white border border-red-500/30 hover:border-red-600 text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-all"
                    title={`Ver repuestos para ${gen.name}`}
                  >
                    <span>Partes ({partsCount})</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
