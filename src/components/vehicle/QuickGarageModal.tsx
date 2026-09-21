"use client";

import { useState } from "react";
import { useGarageStore } from "@/store/useGarageStore";
import { VEHICLE_MAKES, VEHICLE_MODELS, VEHICLE_GENERATIONS } from "@/lib/data/vehicles";
import { VehicleMake, VehicleModel, VehicleGeneration } from "@/types";
import { X, Car, Check, ChevronRight, RotateCcw } from "lucide-react";

export function QuickGarageModal() {
  const { isModalOpen, closeModal, selectedVehicle, setVehicle, clearVehicle } = useGarageStore();

  const [selectedMake, setSelectedMake] = useState<VehicleMake | null>(null);
  const [selectedModel, setSelectedModel] = useState<VehicleModel | null>(null);

  if (!isModalOpen) return null;

  const availableModels = selectedMake
    ? VEHICLE_MODELS.filter((m) => m.makeId === selectedMake.id)
    : [];

  const availableGenerations = selectedModel
    ? VEHICLE_GENERATIONS.filter((g) => g.modelId === selectedModel.id)
    : [];

  const handleSelectGeneration = (generation: VehicleGeneration) => {
    if (selectedMake && selectedModel) {
      setVehicle({
        make: selectedMake,
        model: selectedModel,
        generation,
        year: generation.yearFrom,
      });
      closeModal();
    }
  };

  const resetSelection = () => {
    setSelectedMake(null);
    setSelectedModel(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-surface rounded-2xl border border-surface-border shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-border bg-surface-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-motorsport-red/10 border border-motorsport-red/30 flex items-center justify-center text-motorsport-red">
              <Car className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-white text-base tracking-wide">
                MI VEHÍCULO EN GARAJE
              </h3>
              <p className="text-xs text-motorsport-steel">
                Selecciona tu modelo para filtrar piezas 100% compatibles
              </p>
            </div>
          </div>
          <button
            onClick={closeModal}
            className="p-1.5 rounded-lg text-motorsport-steel hover:text-white hover:bg-surface-muted transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6">
          {/* Active vehicle notification if already chosen */}
          {selectedVehicle && (
            <div className="mb-6 p-4 rounded-xl bg-motorsport-red/5 border border-motorsport-red/20 flex items-center justify-between">
              <div>
                <div className="text-xs text-motorsport-red font-mono uppercase tracking-wider font-semibold">
                  Vehículo Activo Actualmente
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  {selectedVehicle.make.name} {selectedVehicle.generation.name}
                </div>
                <div className="text-xs text-motorsport-steel font-mono mt-0.5">
                  Motor: {selectedVehicle.generation.engine}
                </div>
              </div>
              <button
                onClick={() => clearVehicle()}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-motorsport-steel hover:text-white bg-surface-muted hover:bg-surface-border rounded-lg transition-colors border border-surface-border"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Desvincular
              </button>
            </div>
          )}

          {/* Stepper Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono mb-4 text-motorsport-steel">
            <span className={!selectedMake ? "text-motorsport-red font-bold" : "text-white"}>
              1. Fabricante
            </span>
            <ChevronRight className="w-3 h-3" />
            <span
              className={
                selectedMake && !selectedModel
                  ? "text-motorsport-red font-bold"
                  : selectedModel
                  ? "text-white"
                  : "text-motorsport-steel/50"
              }
            >
              2. Modelo
            </span>
            <ChevronRight className="w-3 h-3" />
            <span
              className={
                selectedModel ? "text-motorsport-red font-bold" : "text-motorsport-steel/50"
              }
            >
              3. Generación / Motor
            </span>
          </div>

          {/* Step 1: Makes */}
          {!selectedMake && (
            <div className="grid grid-cols-2 gap-3">
              {VEHICLE_MAKES.map((make) => (
                <button
                  key={make.id}
                  onClick={() => setSelectedMake(make)}
                  className="p-4 rounded-xl border border-surface-border bg-surface-100 hover:border-motorsport-red hover:bg-surface-muted text-left transition-all group flex items-center justify-between"
                >
                  <span className="font-heading font-bold text-white group-hover:text-motorsport-red tracking-wide">
                    {make.name}
                  </span>
                  <ChevronRight className="w-4 h-4 text-motorsport-steel group-hover:text-motorsport-red transition-transform group-hover:translate-x-1" />
                </button>
              ))}
            </div>
          )}

          {/* Step 2: Models */}
          {selectedMake && !selectedModel && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-motorsport-steel font-mono">
                  Fabricante: <strong className="text-white">{selectedMake.name}</strong>
                </span>
                <button
                  onClick={resetSelection}
                  className="text-xs text-motorsport-red hover:underline"
                >
                  Cambiar fabricante
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {availableModels.map((model) => (
                  <button
                    key={model.id}
                    onClick={() => setSelectedModel(model)}
                    className="p-4 rounded-xl border border-surface-border bg-surface-100 hover:border-motorsport-red hover:bg-surface-muted text-left transition-all group flex items-center justify-between"
                  >
                    <span className="font-heading font-bold text-white group-hover:text-motorsport-red tracking-wide">
                      {model.name}
                    </span>
                    <ChevronRight className="w-4 h-4 text-motorsport-steel group-hover:text-motorsport-red transition-transform group-hover:translate-x-1" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Generations */}
          {selectedMake && selectedModel && (
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs text-motorsport-steel font-mono">
                  {selectedMake.name} &gt; <strong className="text-white">{selectedModel.name}</strong>
                </span>
                <button
                  onClick={() => setSelectedModel(null)}
                  className="text-xs text-motorsport-red hover:underline"
                >
                  Cambiar modelo
                </button>
              </div>
              <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
                {availableGenerations.map((gen) => (
                  <button
                    key={gen.id}
                    onClick={() => handleSelectGeneration(gen)}
                    className="w-full p-3.5 rounded-xl border border-surface-border bg-surface-100 hover:border-motorsport-red hover:bg-surface-muted text-left transition-all group flex items-center justify-between"
                  >
                    <div>
                      <div className="font-heading font-bold text-white group-hover:text-motorsport-red tracking-wide text-sm">
                        {gen.name}
                      </div>
                      <div className="text-xs text-motorsport-steel font-mono mt-0.5">
                        {gen.engine} • {gen.stockHP} HP Stock
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-motorsport-red/10 text-motorsport-red text-xs font-mono group-hover:bg-motorsport-red group-hover:text-white transition-colors">
                      Elegir
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
