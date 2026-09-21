"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { PRODUCTS } from "@/lib/data/products";
import { CATEGORIES } from "@/lib/data/categories";
import { BRANDS } from "@/lib/data/brands";
import { VEHICLE_MAKES, VEHICLE_GENERATIONS } from "@/lib/data/vehicles";
import { useGarageStore } from "@/store/useGarageStore";
import { ProductCard } from "@/components/catalog/ProductCard";
import { FilterSidebar } from "@/components/catalog/FilterSidebar";
import { MobileFiltersDrawer } from "@/components/catalog/MobileFiltersDrawer";
import { SortSelector, SortOption } from "@/components/catalog/SortSelector";
import { ActiveFiltersBar } from "@/components/catalog/ActiveFiltersBar";
import { SlidersHorizontal, PackageSearch, RotateCcw } from "lucide-react";

export function CatalogClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Local state for filters
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get("category") || null
  );
  const [selectedBrand, setSelectedBrand] = useState<string | null>(
    searchParams.get("brand") || null
  );
  const [selectedMake, setSelectedMake] = useState<string | null>(
    searchParams.get("make") || null
  );
  const [selectedGeneration, setSelectedGeneration] = useState<string | null>(
    searchParams.get("generacion") || searchParams.get("generation") || null
  );
  const [selectedAvailability, setSelectedAvailability] = useState<string | null>(
    searchParams.get("availability") || null
  );
  const [filterByGarage, setFilterByGarage] = useState<boolean>(false);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const { selectedVehicle } = useGarageStore();

  // Sync state if URL search parameters change
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat !== selectedCategory) setSelectedCategory(cat);
    const brand = searchParams.get("brand");
    if (brand !== selectedBrand) setSelectedBrand(brand);
    const make = searchParams.get("make");
    if (make !== selectedMake) setSelectedMake(make);
    const gen = searchParams.get("generacion") || searchParams.get("generation");
    if (gen !== selectedGeneration) setSelectedGeneration(gen);
  }, [searchParams]);

  // Reset all filters
  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedBrand(null);
    setSelectedMake(null);
    setSelectedGeneration(null);
    setSelectedAvailability(null);
    setFilterByGarage(false);
    setSortBy("featured");
    router.replace("/catalogo");
  };

  const hasActiveFilters = Boolean(
    searchQuery ||
      selectedCategory ||
      selectedBrand ||
      selectedMake ||
      selectedGeneration ||
      selectedAvailability ||
      filterByGarage
  );

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Text Search (name, SKU, description)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(query);
        const matchesSku = product.sku.toLowerCase().includes(query);
        const matchesDesc = product.shortDescription.toLowerCase().includes(query);
        const matchesBrand = product.brand.name.toLowerCase().includes(query);
        if (!matchesName && !matchesSku && !matchesDesc && !matchesBrand) return false;
      }

      // 2. Category
      if (selectedCategory && product.category.slug !== selectedCategory) {
        return false;
      }

      // 3. Brand
      if (selectedBrand && product.brand.slug !== selectedBrand) {
        return false;
      }

      // 4. Vehicle Make
      if (selectedMake) {
        // Find which generations belong to this make
        const makeGenerations = VEHICLE_GENERATIONS.filter((g) => {
          if (selectedMake === "ford") return g.name.toLowerCase().includes("ford");
          if (selectedMake === "chevrolet") return g.name.toLowerCase().includes("chevrolet") || g.name.toLowerCase().includes("camaro") || g.name.toLowerCase().includes("corvette");
          if (selectedMake === "dodge") return g.name.toLowerCase().includes("dodge") || g.name.toLowerCase().includes("challenger") || g.name.toLowerCase().includes("charger");
          if (selectedMake === "jeep") return g.name.toLowerCase().includes("jeep");
          return false;
        }).map((g) => g.id);

        const hasMatch = product.compatibleGenerations.some((genId) =>
          makeGenerations.includes(genId)
        );
        if (!hasMatch) return false;
      }

      // 5. Active Garage Vehicle
      if (filterByGarage && selectedVehicle) {
        const isCompatible = product.compatibleGenerations.includes(
          selectedVehicle.generation.id
        );
        if (!isCompatible) return false;
      }

      // 5b. Specific Generation URL Filter
      if (selectedGeneration) {
        const isCompatible = product.compatibleGenerations.includes(selectedGeneration);
        if (!isCompatible) return false;
      }

      // 6. Availability
      if (selectedAvailability && product.availability !== selectedAvailability) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === "price-asc") return a.priceCLP - b.priceCLP;
      if (sortBy === "price-desc") return b.priceCLP - a.priceCLP;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [
    searchQuery,
    selectedCategory,
    selectedBrand,
    selectedMake,
    selectedAvailability,
    filterByGarage,
    selectedVehicle,
    sortBy,
  ]);

  // Active filter chips
  const activeChips = useMemo(() => {
    const chips: { id: string; label: string; onRemove: () => void }[] = [];

    if (searchQuery) {
      chips.push({
        id: "search",
        label: `Búsqueda: "${searchQuery}"`,
        onRemove: () => setSearchQuery(""),
      });
    }

    if (selectedCategory) {
      const cat = CATEGORIES.find((c) => c.slug === selectedCategory);
      chips.push({
        id: "cat",
        label: `Categoría: ${cat?.name || selectedCategory}`,
        onRemove: () => setSelectedCategory(null),
      });
    }

    if (selectedBrand) {
      const brand = BRANDS.find((b) => b.slug === selectedBrand);
      chips.push({
        id: "brand",
        label: `Marca: ${brand?.name || selectedBrand}`,
        onRemove: () => setSelectedBrand(null),
      });
    }

    if (selectedMake) {
      const make = VEHICLE_MAKES.find((m) => m.slug === selectedMake);
      chips.push({
        id: "make",
        label: `Auto: ${make?.name || selectedMake}`,
        onRemove: () => setSelectedMake(null),
      });
    }

    if (filterByGarage && selectedVehicle) {
      chips.push({
        id: "garage",
        label: `Garaje: ${selectedVehicle.make.name} ${selectedVehicle.model.name}`,
        onRemove: () => setFilterByGarage(false),
      });
    }

    if (selectedAvailability) {
      chips.push({
        id: "avail",
        label:
          selectedAvailability === "in_stock"
            ? "En Stock Inmediato"
            : "A Pedido USA",
        onRemove: () => setSelectedAvailability(null),
      });
    }

    return chips;
  }, [
    searchQuery,
    selectedCategory,
    selectedBrand,
    selectedMake,
    filterByGarage,
    selectedVehicle,
    selectedAvailability,
  ]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Catalog Header */}
      <div className="mb-8 border-b border-surface-border pb-6">
        <div className="text-xs font-mono font-bold uppercase tracking-widest text-motorsport-red mb-2">
          ZRPM RACING STORE
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight uppercase">
              CATÁLOGO DE PERFORMANCE & REPUESTOS
            </h1>
            <p className="text-xs sm:text-sm text-motorsport-steel font-sans mt-1">
              Componentes para Mustang, Camaro, Corvette, Challenger, Charger y camionetas de competición.
            </p>
          </div>

          {/* Sort & Mobile Filter Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileDrawerOpen(true)}
              className="lg:hidden py-2 px-3.5 rounded-xl border border-surface-border bg-surface-100 text-xs font-mono font-bold text-white flex items-center gap-2 hover:bg-surface-muted transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4 text-motorsport-red" />
              <span>Filtros ({activeChips.length})</span>
            </button>
            <SortSelector value={sortBy} onChange={setSortBy} />
          </div>
        </div>

        {/* Active Filter Chips */}
        <div className="mt-4 pt-4 border-t border-surface-border/60">
          <ActiveFiltersBar
            activeChips={activeChips}
            totalResults={filteredProducts.length}
            onClearAll={handleResetFilters}
          />
        </div>
      </div>

      {/* Main Layout: Sidebar + Product Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block lg:col-span-3">
          <FilterSidebar
            categories={CATEGORIES}
            brands={BRANDS}
            makes={VEHICLE_MAKES}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
            selectedBrand={selectedBrand}
            onSelectBrand={setSelectedBrand}
            selectedMake={selectedMake}
            onSelectMake={setSelectedMake}
            selectedAvailability={selectedAvailability}
            onSelectAvailability={setSelectedAvailability}
            filterByGarage={filterByGarage}
            onToggleFilterByGarage={() => setFilterByGarage((prev) => !prev)}
            onResetFilters={handleResetFilters}
            hasActiveFilters={hasActiveFilters}
          />
        </div>

        {/* Product Grid Area */}
        <div className="lg:col-span-9">
          {filteredProducts.length === 0 ? (
            <div className="bg-surface rounded-3xl border border-surface-border p-12 text-center flex flex-col items-center justify-center min-h-[400px]">
              <div className="w-16 h-16 rounded-full bg-surface-muted flex items-center justify-center text-motorsport-steel mb-4 border border-surface-border">
                <PackageSearch className="w-8 h-8" />
              </div>
              <h3 className="font-heading font-bold text-xl text-white uppercase tracking-wider mb-2">
                No se encontraron piezas para esta combinación
              </h3>
              <p className="text-xs text-motorsport-steel max-w-md mb-6 font-sans">
                Prueba relajando los filtros seleccionados o cotiza la pieza directamente mediante nuestro formulario de importación especial.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={handleResetFilters}
                  className="py-2.5 px-5 rounded-xl border border-surface-border bg-surface-100 hover:bg-surface-muted text-white text-xs font-mono font-bold uppercase transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Limpiar Filtros</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileFiltersDrawer
        isOpen={mobileDrawerOpen}
        onClose={() => setMobileDrawerOpen(false)}
        categories={CATEGORIES}
        brands={BRANDS}
        makes={VEHICLE_MAKES}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
        selectedBrand={selectedBrand}
        onSelectBrand={setSelectedBrand}
        selectedMake={selectedMake}
        onSelectMake={setSelectedMake}
        selectedAvailability={selectedAvailability}
        onSelectAvailability={setSelectedAvailability}
        filterByGarage={filterByGarage}
        onToggleFilterByGarage={() => setFilterByGarage((prev) => !prev)}
        onResetFilters={handleResetFilters}
        hasActiveFilters={hasActiveFilters}
        totalResultsCount={filteredProducts.length}
      />
    </div>
  );
}
