"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Car,
  Check,
  ChevronRight,
  ArrowRight,
  Gauge,
  Flame,
  Wrench,
  RotateCcw,
} from "lucide-react";
import {
  VEHICLE_MAKES,
  VEHICLE_MODELS,
  VEHICLE_GENERATIONS,
  getModelsByMakeId,
  getGenerationsByModelId,
} from "@/lib/data/vehicles";
import { getProductCountForGeneration } from "@/lib/data/products";
import { useGarageStore } from "@/store/useGarageStore";
import { VehicleMake, VehicleModel, VehicleGeneration } from "@/types";

export function VehicleSelectorWizard() {
  const [selectedMake, setSelectedMake] = useState<VehicleMake | null>(null);
  const [selectedModel, setSelectedModel] = useState<VehicleModel | null>(null);
  const [selectedGen, setSelectedGen] = useState<VehicleGeneration | null>(null);

  const { setVehicle, selectedVehicle } = useGarageStore();

  const models = selectedMake ? getModelsByMakeId(selectedMake.id) : [];
  const generations = selectedModel ? getGenerationsByModelId(selectedModel.id) : [];

  const handleSelectMake = (make: VehicleMake) => {
    setSelectedMake(make);
    setSelectedModel(null);
    setSelectedGen(null);
  };

  const handleSelectModel = (model: VehicleModel) => {
    setSelectedModel(model);
    setSelectedGen(null);
  };

  const handleSelectGeneration = (gen: VehicleGeneration) => {
    setSelectedGen(gen);
  };

  const handleConfirmVehicle = () => {
    if (selectedMake && selectedModel && selectedGen) {
      setVehicle({
        make: selectedMake,
        model: selectedModel,
        generation: selectedGen,
        year: selectedGen.yearFrom,
      });
    }
  };

  const handleReset = () => {
    setSelectedMake(null);
    setSelectedModel(null);
    setSelectedGen(null);
  };

  const isCurrentActive =
    selectedVehicle &&
    selectedGen &&
    selectedVehicle.generation.id === selectedGen.id;

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/60 p-6 sm:p-8 backdrop-blur-md">
      {/* Wizard Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-red-500 uppercase tracking-widest mb-1">
            <Car className="w-3.5 h-3.5" />
            <span>Vehicle Finder Guiado</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-heading font-black uppercase text-white tracking-tight">
            Selecciona Tu Plataforma Automotriz
          </h2>
          <p className="text-xs text-neutral-400 mt-1">
            Filtra repuestos verificados, curvas de reprogramación y accesorios para tu motor específico.
          </p>
        </div>

        {(selectedMake || selectedModel || selectedGen) && (
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-red-400 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reiniciar Selector</span>
          </button>
        )}
      </div>

      {/* Breadcrumb Steps indicator */}
      <div className="flex items-center gap-2 py-4 text-xs font-mono overflow-x-auto scrollbar-none text-neutral-500">
        <button
          type="button"
          onClick={() => {
            setSelectedModel(null);
            setSelectedGen(null);
          }}
          className={`font-bold transition-colors ${
            selectedMake ? "text-neutral-300 hover:text-white" : "text-red-500"
          }`}
        >
          1. Marca {selectedMake && `(${selectedMake.name})`}
        </button>

        <ChevronRight className="w-3 h-3 text-neutral-700 flex-shrink-0" />

        <button
          type="button"
          disabled={!selectedMake}
          onClick={() => setSelectedGen(null)}
          className={`font-bold transition-colors disabled:opacity-40 ${
            selectedModel
              ? "text-neutral-300 hover:text-white"
              : selectedMake
              ? "text-red-500"
              : "text-neutral-600"
          }`}
        >
          2. Modelo {selectedModel && `(${selectedModel.name})`}
        </button>

        <ChevronRight className="w-3 h-3 text-neutral-700 flex-shrink-0" />

        <span
          className={`font-bold ${
            selectedGen ? "text-white" : selectedModel ? "text-red-500" : "text-neutral-600"
          }`}
        >
          3. Generación / Motor {selectedGen && `(${selectedGen.code})`}
        </span>
      </div>

      {/* Step 1: Makes Grid */}
      <div className="mt-4">
        <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
          Paso 1: Selecciona la Marca
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {VEHICLE_MAKES.map((make) => {
            const isSelected = selectedMake?.id === make.id;
            const modelsCount = getModelsByMakeId(make.id).length;

            return (
              <button
                key={make.id}
                type="button"
                onClick={() => handleSelectMake(make)}
                className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                  isSelected
                    ? "border-red-500 bg-red-950/30 ring-2 ring-red-500/40 shadow-lg shadow-red-950/50 scale-[1.02]"
                    : "border-neutral-800 bg-neutral-950 hover:border-neutral-700 hover:bg-neutral-900/80"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] font-mono text-neutral-500 uppercase">
                    {make.country}
                  </span>
                  {isSelected && <Check className="w-4 h-4 text-red-500" />}
                </div>
                <p className="font-heading font-black text-lg text-white tracking-wide">
                  {make.name}
                </p>
                <p className="text-[11px] font-mono text-neutral-400 mt-0.5">
                  {modelsCount} modelos disponibles
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Step 2: Models Grid (Visible when make selected) */}
      {selectedMake && (
        <div className="mt-8 pt-6 border-t border-neutral-800 animate-in fade-in duration-300">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
            Paso 2: Selecciona el Modelo de {selectedMake.name}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {models.map((model) => {
              const isSelected = selectedModel?.id === model.id;
              const gens = getGenerationsByModelId(model.id);

              return (
                <button
                  key={model.id}
                  type="button"
                  onClick={() => handleSelectModel(model)}
                  className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                    isSelected
                      ? "border-red-500 bg-red-950/30 ring-2 ring-red-500/40 shadow-lg shadow-red-950/50 scale-[1.02]"
                      : "border-neutral-800 bg-neutral-950 hover:border-neutral-700 hover:bg-neutral-900/80"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-mono text-red-400 uppercase">
                      {gens.length} plataformas
                    </span>
                    {isSelected && <Check className="w-4 h-4 text-red-500" />}
                  </div>
                  <p className="font-heading font-black text-base text-white tracking-wide">
                    {model.name}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Step 3: Generations Grid (Visible when model selected) */}
      {selectedModel && (
        <div className="mt-8 pt-6 border-t border-neutral-800 animate-in fade-in duration-300">
          <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
            Paso 3: Selecciona la Versión / Generación / Motor
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {generations.map((gen) => {
              const isSelected = selectedGen?.id === gen.id;
              const partsCount = getProductCountForGeneration(gen.id);

              return (
                <div
                  key={gen.id}
                  onClick={() => handleSelectGeneration(gen)}
                  className={`p-5 rounded-xl border cursor-pointer transition-all duration-200 flex flex-col justify-between ${
                    isSelected
                      ? "border-red-500 bg-red-950/30 ring-2 ring-red-500/40 shadow-xl shadow-red-950/50"
                      : "border-neutral-800 bg-neutral-950 hover:border-neutral-700 hover:bg-neutral-900/80"
                  }`}
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-neutral-800 text-neutral-300 border border-neutral-700">
                          {gen.code} · {gen.yearFrom}–{gen.yearTo || "Pres."}
                        </span>
                        <h4 className="font-heading font-bold text-white text-base mt-1.5">
                          {gen.name}
                        </h4>
                      </div>
                      {isSelected && (
                        <div className="p-1 rounded-full bg-red-600 text-white">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}
                    </div>

                    <div className="space-y-1.5 my-3 text-xs font-mono text-neutral-400">
                      <div className="flex items-center gap-1.5">
                        <Wrench className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                        <span className="text-neutral-300 font-medium">{gen.engine}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Gauge className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
                        <span>Potencia Stock: <strong className="text-white">{gen.stockHP} HP</strong> / {gen.stockTorqueNM} Nm</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-neutral-800 flex items-center justify-between text-xs">
                    <span className="font-mono text-emerald-400">
                      {partsCount} repuestos disponibles
                    </span>
                    <span className="font-mono text-[11px] text-neutral-400 group-hover:text-white">
                      {isSelected ? "Seleccionado ✓" : "Click para elegir →"}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Final Action Bar when a vehicle is chosen */}
      {selectedGen && selectedMake && selectedModel && (
        <div className="mt-8 pt-6 border-t border-neutral-800 bg-neutral-950/80 p-5 rounded-xl border border-red-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-in fade-in duration-300">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono text-red-400 font-bold uppercase">
                Vehículo Listo:
              </span>
              <span className="text-xs text-white font-bold">
                {selectedMake.name} {selectedModel.name} ({selectedGen.name})
              </span>
            </div>
            <p className="text-xs text-neutral-400 font-mono">
              Motor: {selectedGen.engine} · {selectedGen.stockHP} HP de fábrica
            </p>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleConfirmVehicle}
              className={`flex-1 sm:flex-initial px-4 py-3 rounded-xl font-heading font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-all ${
                isCurrentActive
                  ? "bg-emerald-600 text-white shadow-emerald-950/40"
                  : "bg-red-600 hover:bg-red-500 text-white shadow-lg shadow-red-950/50 active:scale-[0.98]"
              }`}
            >
              {isCurrentActive ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>En tu Garaje Activo</span>
                </>
              ) : (
                <>
                  <Car className="w-4 h-4" />
                  <span>Guardar en Mi Garaje</span>
                </>
              )}
            </button>

            <Link
              href={`/catalogo?generacion=${selectedGen.id}`}
              className="flex-1 sm:flex-initial px-4 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700 font-heading font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <span>Ver Catálogo</span>
              <ArrowRight className="w-4 h-4 text-red-500" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
