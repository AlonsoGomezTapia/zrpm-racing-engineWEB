"use client";

import { ProductCategory, ProductBrand, VehicleMake } from "@/types";
import { useGarageStore } from "@/store/useGarageStore";
import { Search, Car, RotateCcw, Filter, Check } from "lucide-react";

interface FilterSidebarProps {
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
}

export function FilterSidebar({
  categories,
  brands,
  makes,
  searchQuery,
  onSearchChange,
  selectedCategory,
  onSelectCategory,
  selectedBrand,
  onSelectBrand,
  selectedMake,
  onSelectMake,
  selectedAvailability,
  onSelectAvailability,
  filterByGarage,
  onToggleFilterByGarage,
  onResetFilters,
  hasActiveFilters,
}: FilterSidebarProps) {
  const { selectedVehicle, openModal } = useGarageStore();

  return (
    <aside className="w-full space-y-6 select-none">
      {/* Search Input */}
      <div className="bg-surface p-4 rounded-2xl border border-surface-border">
        <label className="block text-xs font-mono font-bold uppercase tracking-wider text-motorsport-steel mb-2">
          Buscar Repuesto o SKU
        </label>
        <div className="relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Ej: Inducción, Twin-Turbo, Brembo..."
            className="w-full pl-9 pr-4 py-2.5 rounded-xl bg-surface-100 border border-surface-border text-xs text-white placeholder-motorsport-steel focus:outline-none focus:border-motorsport-red transition-colors"
          />
          <Search className="w-4 h-4 text-motorsport-steel absolute left-3 top-3 pointer-events-none" />
        </div>
      </div>

      {/* Vehicle Garage Filter Card */}
      <div className="bg-surface p-4 rounded-2xl border border-surface-border space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-white uppercase">
            <Car className="w-4 h-4 text-motorsport-red" />
            <span>Vehículo en Garaje</span>
          </div>
          <button
            onClick={openModal}
            className="text-[11px] text-motorsport-red hover:underline font-mono"
          >
            {selectedVehicle ? "Cambiar" : "Elegir auto"}
          </button>
        </div>

        {selectedVehicle ? (
          <div className="p-3 rounded-xl bg-surface-100 border border-surface-border space-y-2">
            <div className="text-xs font-bold text-white">
              {selectedVehicle.make.name} {selectedVehicle.model.name}
            </div>
            <div className="text-[11px] font-mono text-motorsport-steel">
              {selectedVehicle.generation.name}
            </div>

            <label className="flex items-center gap-2 pt-2 border-t border-surface-border cursor-pointer">
              <input
                type="checkbox"
                checked={filterByGarage}
                onChange={onToggleFilterByGarage}
                className="w-4 h-4 rounded bg-surface border-surface-border text-motorsport-red focus:ring-motorsport-red accent-motorsport-red cursor-pointer"
              />
              <span className="text-xs font-mono text-neutral-200">
                Solo compatibles con mi auto
              </span>
            </label>
          </div>
        ) : (
          <button
            onClick={openModal}
            className="w-full p-3 rounded-xl bg-surface-100 hover:bg-surface-muted border border-dashed border-surface-border hover:border-motorsport-red text-center text-xs font-mono text-motorsport-steel hover:text-white transition-all"
          >
            + Seleccionar mi modelo para filtrar
          </button>
        )}
      </div>

      {/* Categories Filter */}
      <div className="bg-surface p-4 rounded-2xl border border-surface-border">
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3">
          Categorías
        </h4>
        <div className="space-y-1.5 max-h-64 overflow-y-auto pr-1">
          <button
            onClick={() => onSelectCategory(null)}
            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
              selectedCategory === null
                ? "bg-motorsport-red text-white font-bold"
                : "text-motorsport-steel hover:text-white hover:bg-surface-100"
            }`}
          >
            <span>Todas las categorías</span>
            {selectedCategory === null && <Check className="w-3.5 h-3.5" />}
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.slug)}
              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                selectedCategory === cat.slug
                  ? "bg-motorsport-red text-white font-bold"
                  : "text-motorsport-steel hover:text-white hover:bg-surface-100"
              }`}
            >
              <span className="truncate pr-2">{cat.name}</span>
              {selectedCategory === cat.slug && <Check className="w-3.5 h-3.5 shrink-0" />}
            </button>
          ))}
        </div>
      </div>

      {/* Brands Filter */}
      <div className="bg-surface p-4 rounded-2xl border border-surface-border">
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3">
          Marcas Aftermarket
        </h4>
        <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1">
          <button
            onClick={() => onSelectBrand(null)}
            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
              selectedBrand === null
                ? "bg-motorsport-red text-white font-bold"
                : "text-motorsport-steel hover:text-white hover:bg-surface-100"
            }`}
          >
            <span>Todas las marcas</span>
            {selectedBrand === null && <Check className="w-3.5 h-3.5" />}
          </button>
          {brands.map((brand) => (
            <button
              key={brand.id}
              onClick={() => onSelectBrand(brand.slug)}
              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
                selectedBrand === brand.slug
                  ? "bg-motorsport-red text-white font-bold"
                  : "text-motorsport-steel hover:text-white hover:bg-surface-100"
              }`}
            >
              <span>{brand.name}</span>
              {selectedBrand === brand.slug && <Check className="w-3.5 h-3.5" />}
            </button>
          ))}
        </div>
      </div>

      {/* Platform / Make Filter */}
      <div className="bg-surface p-4 rounded-2xl border border-surface-border">
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3">
          Fabricante Vehicular
        </h4>
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onSelectMake(null)}
            className={`p-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-colors border text-center ${
              selectedMake === null
                ? "bg-motorsport-red text-white border-motorsport-red"
                : "bg-surface-100 border-surface-border text-motorsport-steel hover:text-white"
            }`}
          >
            Todos
          </button>
          {makes.map((make) => (
            <button
              key={make.id}
              onClick={() => onSelectMake(make.slug)}
              className={`p-2 rounded-lg text-xs font-heading font-bold uppercase tracking-wider transition-colors border text-center ${
                selectedMake === make.slug
                  ? "bg-motorsport-red text-white border-motorsport-red"
                  : "bg-surface-100 border-surface-border text-motorsport-steel hover:text-white"
              }`}
            >
              {make.name}
            </button>
          ))}
        </div>
      </div>

      {/* Availability Filter */}
      <div className="bg-surface p-4 rounded-2xl border border-surface-border">
        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white mb-3">
          Disponibilidad
        </h4>
        <div className="space-y-1.5">
          <button
            onClick={() => onSelectAvailability(null)}
            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
              selectedAvailability === null
                ? "bg-motorsport-red text-white font-bold"
                : "text-motorsport-steel hover:text-white hover:bg-surface-100"
            }`}
          >
            <span>Todos los estados</span>
            {selectedAvailability === null && <Check className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => onSelectAvailability("in_stock")}
            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
              selectedAvailability === "in_stock"
                ? "bg-motorsport-red text-white font-bold"
                : "text-motorsport-steel hover:text-white hover:bg-surface-100"
            }`}
          >
            <span>En Stock en Taller</span>
            {selectedAvailability === "in_stock" && <Check className="w-3.5 h-3.5" />}
          </button>
          <button
            onClick={() => onSelectAvailability("import_order")}
            className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between ${
              selectedAvailability === "import_order"
                ? "bg-motorsport-red text-white font-bold"
                : "text-motorsport-steel hover:text-white hover:bg-surface-100"
            }`}
          >
            <span>A Pedido / Importación USA</span>
            {selectedAvailability === "import_order" && <Check className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Reset Filters */}
      {hasActiveFilters && (
        <button
          onClick={onResetFilters}
          className="w-full py-2.5 px-4 rounded-xl border border-surface-border bg-surface-100 hover:bg-surface-muted text-motorsport-steel hover:text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Limpiar Todos los Filtros</span>
        </button>
      )}
    </aside>
  );
}
