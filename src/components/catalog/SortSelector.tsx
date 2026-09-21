"use client";

import { ArrowUpDown } from "lucide-react";

export type SortOption = "featured" | "price-asc" | "price-desc" | "name";

interface SortSelectorProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

export function SortSelector({ value, onChange }: SortSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-xs font-mono text-motorsport-steel hidden sm:inline-block">
        Ordenar por:
      </span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value as SortOption)}
          className="appearance-none pl-3 pr-8 py-2 rounded-xl bg-surface-100 border border-surface-border text-xs font-mono text-white focus:outline-none focus:border-motorsport-red cursor-pointer transition-colors"
        >
          <option value="featured">Destacados ZRPM</option>
          <option value="price-asc">Precio: Menor a Mayor</option>
          <option value="price-desc">Precio: Mayor a Menor</option>
          <option value="name">Nombre: A – Z</option>
        </select>
        <ArrowUpDown className="w-3.5 h-3.5 text-motorsport-steel absolute right-2.5 top-2.5 pointer-events-none" />
      </div>
    </div>
  );
}
