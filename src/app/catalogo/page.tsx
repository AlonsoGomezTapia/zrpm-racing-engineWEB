import { Metadata } from "next";
import { Suspense } from "react";
import { CatalogClient } from "./CatalogClient";

export const metadata: Metadata = {
  title: "Catálogo de Repuestos & Upgrades de Competición | ZRPM Racing Engine",
  description:
    "Encuentra piezas compatibles para Ford Mustang, Chevy Camaro, Corvette, Dodge Challenger y Charger. Inducción JLT, superchargers Roush, kits Twin-Turbo y frenos Brembo.",
  openGraph: {
    title: "Catálogo Aftermarket & Repuestos de Competición | ZRPM Racing Engine",
    description: "Componentes originales y de alto rendimiento para motorsport en Chile.",
    url: "https://zrpm.cl/catalogo",
    siteName: "ZRPM Racing Engine",
    locale: "es_CL",
    type: "website",
    images: ["/images/products/xpipe-exhaust.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catálogo Aftermarket | ZRPM Racing Engine",
    description: "Componentes originales y de alto rendimiento para motorsport en Chile.",
    images: ["/images/products/xpipe-exhaust.jpg"],
  },
  alternates: {
    canonical: "https://zrpm.cl/catalogo",
  },
};

export default function CatalogPage() {
  return (
    <main className="flex-1 bg-background">
      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto px-4 py-20 text-center text-xs font-mono text-motorsport-steel">
            Cargando catálogo de ingeniería...
          </div>
        }
      >
        <CatalogClient />
      </Suspense>
    </main>
  );
}
