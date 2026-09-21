"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Flame } from "lucide-react";
import { Product } from "@/types";
import { ProductCard } from "@/components/catalog/ProductCard";

interface RelatedProductsProps {
  products: Product[];
  currentCategorySlug?: string;
}

export function RelatedProducts({ products, currentCategorySlug }: RelatedProductsProps) {
  if (!products || products.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-neutral-800">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-red-500 uppercase tracking-widest mb-1">
            <Flame className="w-3.5 h-3.5" />
            <span>Upgrades Relacionados</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-heading font-black tracking-tight text-white uppercase">
            Componentes Recomendados ZRPM
          </h2>
        </div>

        {currentCategorySlug && (
          <Link
            href={`/catalogo?categoria=${currentCategorySlug}`}
            className="inline-flex items-center gap-1.5 text-xs font-heading font-bold uppercase tracking-wider text-neutral-400 hover:text-red-500 transition-colors"
          >
            <span>Ver más en esta categoría</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
