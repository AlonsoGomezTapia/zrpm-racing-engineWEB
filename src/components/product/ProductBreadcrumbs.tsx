import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Product } from "@/types";

interface ProductBreadcrumbsProps {
  product: Product;
}

export function ProductBreadcrumbs({ product }: ProductBreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center space-x-2 text-xs md:text-sm text-neutral-400 py-3 overflow-x-auto whitespace-nowrap scrollbar-none"
    >
      <Link
        href="/"
        className="flex items-center hover:text-white transition-colors text-neutral-500"
      >
        <Home className="w-3.5 h-3.5 mr-1" />
        <span>Inicio</span>
      </Link>
      <ChevronRight className="w-3.5 h-3.5 text-neutral-600 flex-shrink-0" />

      <Link
        href="/catalogo"
        className="hover:text-white transition-colors text-neutral-500"
      >
        Catálogo
      </Link>
      <ChevronRight className="w-3.5 h-3.5 text-neutral-600 flex-shrink-0" />

      <Link
        href={`/catalogo?categoria=${product.category.slug}`}
        className="hover:text-white transition-colors text-neutral-400 font-medium"
      >
        {product.category.name}
      </Link>
      <ChevronRight className="w-3.5 h-3.5 text-neutral-600 flex-shrink-0" />

      <span className="text-white font-medium truncate max-w-[200px] md:max-w-md">
        {product.name}
      </span>
    </nav>
  );
}
