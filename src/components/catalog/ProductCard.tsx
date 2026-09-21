"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types";
import { formatCLP } from "@/lib/utils";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingBag, ArrowRight, Check, Car } from "lucide-react";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCartStore();
  const [added, setAdded] = useState(false);

  const hasDiscount = product.isOnSale && product.originalPriceCLP;
  const discountPct = hasDiscount
    ? Math.round(
        ((product.originalPriceCLP! - product.priceCLP) / product.originalPriceCLP!) * 100
      )
    : 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className="group bg-surface rounded-2xl border border-surface-border hover:border-motorsport-red/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-motorsport-card hover:-translate-y-1">
      {/* Top Image Container */}
      <div className="relative w-full aspect-square bg-surface-muted overflow-hidden border-b border-surface-border">
        <Link href={`/catalogo/${product.slug}`} className="block w-full h-full">
          {product.images[0] ? (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-motorsport-steel font-mono text-sm">
              ZRPM RACING
            </div>
          )}
        </Link>

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
          {hasDiscount && (
            <span className="px-2 py-0.5 rounded bg-motorsport-red text-white text-[10px] font-mono font-black shadow">
              -{discountPct}%
            </span>
          )}
          <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm border border-white/10 text-neutral-300 text-[10px] font-mono uppercase font-bold">
            {product.brand.name}
          </span>
        </div>

        {/* Availability Badge */}
        <div className="absolute bottom-3 right-3 pointer-events-none">
          <span
            className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase backdrop-blur-sm ${
              product.availability === "in_stock"
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
            }`}
          >
            {product.availability === "in_stock" ? "En Taller" : "A Pedido USA"}
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & SKU */}
          <div className="flex items-center justify-between text-[10px] font-mono uppercase text-motorsport-steel mb-1">
            <span className="truncate max-w-[150px]">{product.category.name}</span>
            <span className="font-bold">SKU: {product.sku}</span>
          </div>

          {/* Product Title */}
          <h3 className="font-heading font-bold text-white text-sm leading-snug line-clamp-2 group-hover:text-motorsport-red transition-colors mb-2">
            <Link href={`/catalogo/${product.slug}`}>{product.name}</Link>
          </h3>

          {/* Compatible Vehicle Badge */}
          {product.compatibleGenerations.length > 0 && (
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 bg-surface-100 px-2 py-1 rounded-md border border-surface-border mb-3 w-fit">
              <Car className="w-3 h-3 text-motorsport-red shrink-0" />
              <span className="truncate max-w-[200px]">
                {product.compatibleGenerations.length === 1
                  ? "Compatibilidad específica"
                  : `${product.compatibleGenerations.length} modelos compatibles`}
              </span>
            </div>
          )}

          {/* Short Description */}
          <p className="text-xs text-motorsport-steel line-clamp-2 font-sans mb-4">
            {product.shortDescription}
          </p>
        </div>

        {/* Bottom Price & Actions */}
        <div className="pt-4 border-t border-surface-border">
          <div className="flex items-baseline gap-2 mb-3">
            <span className="font-mono text-lg font-black text-white">
              {formatCLP(product.priceCLP)}
            </span>
            {hasDiscount && (
              <span className="font-mono text-xs text-motorsport-steel line-through">
                {formatCLP(product.originalPriceCLP!)}
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/catalogo/${product.slug}`}
              className="py-2.5 px-3 rounded-lg border border-surface-border hover:border-motorsport-steel bg-surface-100 hover:bg-surface-muted text-white text-xs font-heading font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-1"
            >
              <span>Detalles</span>
              <ArrowRight className="w-3 h-3 text-motorsport-steel" />
            </Link>

            <button
              onClick={handleAddToCart}
              className={`py-2.5 px-3 rounded-lg text-white text-xs font-heading font-bold uppercase tracking-wider text-center transition-all flex items-center justify-center gap-1.5 shadow-motorsport-glow ${
                added
                  ? "bg-emerald-600 hover:bg-emerald-500"
                  : "bg-motorsport-red hover:bg-motorsport-red-light"
              }`}
            >
              {added ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Agregado</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Comprar</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
