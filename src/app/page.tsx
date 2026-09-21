import { Hero } from "@/components/home/Hero";
import { BrandBar } from "@/components/home/BrandBar";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { CustomBuildsShowcase } from "@/components/home/CustomBuildsShowcase";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { StageSimulator } from "@/components/home/StageSimulator";
import { ImportBanner } from "@/components/home/ImportBanner";
import { WorkshopTrust } from "@/components/home/WorkshopTrust";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col">
      {/* 1. Hero Principal Motorsport */}
      <Hero />

      {/* 2. Marcas Oficiales & Aftermarket */}
      <BrandBar />

      {/* 3. Categorías Técnicas (incluyendo Modificación a Pedido) */}
      <CategoryGrid />

      {/* 4. Proyectos Reales ZRPM & Twin-Turbo (Inspirados en Instagram ZRPM) */}
      <CustomBuildsShowcase />

      {/* 5. Productos Destacados & Upgrades con Precios en CLP */}
      <FeaturedProducts />

      {/* 6. Simulador Interactivo de Stages en Dinamómetro */}
      <StageSimulator />

      {/* 7. Banner de Importaciones Directas USA */}
      <ImportBanner />

      {/* 8. Taller Central en La Cisterna, Dinamómetro & Confianza */}
      <WorkshopTrust />
    </main>
  );
}
