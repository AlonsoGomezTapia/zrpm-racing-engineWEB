"use client";

import Link from "next/link";
import Image from "next/image";
import { PRODUCTS } from "@/lib/data/products";
import { formatCLP } from "@/lib/utils";
import { useCartStore } from "@/store/useCartStore";
import { ShoppingBag, ArrowRight, Check, Sparkles } from "lucide-react";

export function FeaturedProducts() {
  const { addItem } = useCartStore();
  const featured = PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <section className="py-20 bg-background border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-motorsport-red uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EQUIPAMIENTO DESTACADO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight uppercase">
              COMPONENTES & UPGRADES DE POTENCIA
            </h2>
          </div>
          <Link
            href="/catalogo"
            className="text-xs font-mono font-bold uppercase tracking-wider text-motorsport-steel hover:text-motorsport-red transition-colors inline-flex items-center gap-1.5 self-start md:self-end"
          >
            <span>Ver todos los repuestos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((product) => {
            const hasDiscount = product.isOnSale && product.originalPriceCLP;
            const discountPct = hasDiscount
              ? Math.round(
                  ((product.originalPriceCLP! - product.priceCLP) /
                    product.originalPriceCLP!) *
                    100
                )
              : 0;

            return (
              <div
                key={product.id}
                className="group bg-surface rounded-2xl border border-surface-border hover:border-motorsport-red/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-motorsport-card hover:-translate-y-1"
              >
                {/* Image Container */}
                <div className="relative w-full aspect-square bg-surface-muted overflow-hidden border-b border-surface-border">
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

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    {hasDiscount && (
                      <span className="px-2 py-0.5 rounded bg-motorsport-red text-white text-[10px] font-mono font-black">
                        -{discountPct}%
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded bg-black/80 backdrop-blur-sm border border-white/10 text-neutral-300 text-[10px] font-mono uppercase">
                      {product.brand.name}
                    </span>
                  </div>

                  {/* Availability badge */}
                  <div className="absolute bottom-3 right-3">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase ${
                        product.availability === "in_stock"
                          ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                          : "bg-amber-500/20 text-amber-400 border border-amber-500/30"
                      }`}
                    >
                      {product.availability === "in_stock" ? "En Taller" : "A Pedido USA"}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-motorsport-steel font-bold tracking-wider mb-1">
                      SKU: {product.sku}
                    </div>

                    <h3 className="font-heading font-bold text-white text-sm leading-snug line-clamp-2 group-hover:text-motorsport-red transition-colors mb-3">
                      <Link href={`/catalogo/${product.slug}`}>{product.name}</Link>
                    </h3>

                    <p className="text-xs text-motorsport-steel line-clamp-2 mb-4 font-sans">
                      {product.shortDescription}
                    </p>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-4 border-t border-surface-border">
                    <div className="flex items-baseline gap-2 mb-4">
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
                        className="py-2.5 px-3 rounded-lg border border-surface-border hover:border-motorsport-steel bg-surface-100 hover:bg-surface-muted text-white text-xs font-heading font-bold uppercase tracking-wider text-center transition-colors"
                      >
                        Detalles
                      </Link>
                      <button
                        onClick={() => addItem(product, 1)}
                        className="py-2.5 px-3 rounded-lg bg-motorsport-red hover:bg-motorsport-red-light text-white text-xs font-heading font-bold uppercase tracking-wider text-center transition-colors shadow-motorsport-glow flex items-center justify-center gap-1.5"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Comprar</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
