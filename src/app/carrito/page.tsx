import React, { Suspense } from "react";
import { Metadata } from "next";
import { CartClient } from "@/components/cart/CartClient";

export const metadata: Metadata = {
  title: "Carro de Compras & Cotización | ZRPM Racing Engine",
  description:
    "Revisa tu selección de repuestos de alto rendimiento, calcula subtotal en CLP y coordina despacho a todo Chile o instalación en taller La Cisterna.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function CartPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 pb-20">
      <Suspense
        fallback={
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
          </div>
        }
      >
        <CartClient />
      </Suspense>
    </div>
  );
}
