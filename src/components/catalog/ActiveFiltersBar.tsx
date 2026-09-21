"use client";

import { X } from "lucide-react";

interface ActiveFiltersBarProps {
  activeChips: { id: string; label: string; onRemove: () => void }[];
  totalResults: number;
  onClearAll: () => void;
}

export function ActiveFiltersBar({
  activeChips,
  totalResults,
  onClearAll,
}: ActiveFiltersBarProps) {
  if (activeChips.length === 0) {
    return (
      <div className="flex items-center justify-between text-xs font-mono text-motorsport-steel py-2">
        <span>Mostrando <strong className="text-white">{totalResults}</strong> repuestos disponibles</span>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2 py-2">
      <span className="text-xs font-mono text-motorsport-steel mr-1">
        Filtros activos ({totalResults}):
      </span>
      {activeChips.map((chip) => (
        <span
          key={chip.id}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-surface-100 border border-surface-border text-xs font-mono text-white"
        >
          <span>{chip.label}</span>
          <button
            onClick={chip.onRemove}
            className="hover:text-motorsport-red transition-colors p-0.5"
            aria-label={`Eliminar filtro ${chip.label}`}
          >
            <X className="w-3 h-3" />
          </button>
        </span>
      ))}
      <button
        onClick={onClearAll}
        className="text-xs font-mono text-motorsport-red hover:underline ml-2"
      >
        Limpiar todos
      </button>
    </div>
  );
}
