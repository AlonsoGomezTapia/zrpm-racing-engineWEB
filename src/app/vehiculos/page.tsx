import React, { Suspense } from "react";
import { Metadata } from "next";
import { VehicleClient } from "@/components/vehicle/VehicleClient";

export const metadata: Metadata = {
  title: "Buscador de Vehículos & Garaje Virtual | ZRPM Racing Engine",
  description:
    "Selecciona tu Ford Mustang, F-150, Chevrolet Camaro, Corvette, Dodge Challenger o Charger y encuentra repuestos de alto rendimiento con compatibilidad verificada en Chile.",
  openGraph: {
    title: "Buscador de Vehículos & Garaje Virtual | ZRPM Racing Engine",
    description:
      "Filtra piezas de competición, inducciones, escapes y reprogramaciones 100% compatibles con tu auto deportivo o camioneta americana.",
    url: "https://zrpm.cl/vehiculos",
    siteName: "ZRPM Racing Engine",
    locale: "es_CL",
    type: "website",
    images: ["/images/cars/mustang-biturbo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buscador de Vehículos & Garaje Virtual | ZRPM Racing Engine",
    description:
      "Filtra piezas de competición, inducciones, escapes y reprogramaciones 100% compatibles con tu auto deportivo o camioneta americana.",
    images: ["/images/cars/mustang-biturbo.jpg"],
  },
  alternates: {
    canonical: "https://zrpm.cl/vehiculos",
  },
};

export default function VehiclesPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pb-20">
      <Suspense
        fallback={
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <VehicleClient />
      </Suspense>
    </div>
  );
}
