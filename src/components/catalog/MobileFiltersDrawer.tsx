"use client";

import { ProductCategory, ProductBrand, VehicleMake } from "@/types";
import { X, Filter, RotateCcw } from "lucide-react";
import { FilterSidebar } from "./FilterSidebar";

interface MobileFiltersDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  categories: ProductCategory[];
  brands: ProductBrand[];
  makes: VehicleMake[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: string | null;
  onSelectCategory: (slug: string | null) => void;
  selectedBrand: string | null;
  onSelectBrand: (slug: string | null) => void;
  selectedMake: string | null;
  onSelectMake: (slug: string | null) => void;
  selectedAvailability: string | null;
  onSelectAvailability: (val: string | null) => void;
  filterByGarage: boolean;
  onToggleFilterByGarage: () => void;
  onResetFilters: () => void;
  hasActiveFilters: boolean;
  totalResultsCount: number;
}

export function MobileFiltersDrawer({
  isOpen,
  onClose,
  totalResultsCount,
  ...props
}: MobileFiltersDrawerProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-sm bg-surface border-l border-surface-border flex flex-col shadow-2xl">
          {/* Header */}
          <div className="p-4 border-b border-surface-border flex items-center justify-between bg-surface-100">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-motorsport-red" />
              <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider">
                Filtros del Catálogo
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-motorsport-steel hover:text-white hover:bg-surface-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body */}
          <div className="flex-1 overflow-y-auto p-4">
            <FilterSidebar {...props} />
          </div>

          {/* Sticky Bottom Actions */}
          <div className="p-4 border-t border-surface-border bg-surface-100 flex items-center gap-3">
            {props.hasActiveFilters && (
              <button
                onClick={props.onResetFilters}
                className="py-3 px-4 rounded-xl border border-surface-border bg-surface text-motorsport-steel hover:text-white text-xs font-mono font-bold uppercase transition-colors"
              >
                Limpiar
              </button>
            )}
            <button
              onClick={onClose}
              className="flex-1 py-3 px-4 rounded-xl bg-motorsport-red hover:bg-motorsport-red-light text-white text-xs font-heading font-bold uppercase tracking-wider text-center transition-all shadow-motorsport-glow"
            >
              Ver {totalResultsCount} Resultados
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
