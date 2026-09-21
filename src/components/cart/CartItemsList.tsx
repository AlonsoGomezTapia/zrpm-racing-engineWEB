"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, ArrowLeft, RotateCcw } from "lucide-react";
import { CartItem } from "@/types";
import { formatCLP } from "@/lib/utils";

interface CartItemsListProps {
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export function CartItemsList({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}: CartItemsListProps) {
  return (
    <div className="space-y-4">
      {/* Header with item count and clear cart */}
      <div className="flex items-center justify-between pb-3 border-b border-neutral-800">
        <h2 className="text-sm font-heading font-bold uppercase tracking-wider text-neutral-400">
          Componentes Seleccionados ({items.reduce((sum, item) => sum + item.quantity, 0)})
        </h2>
        <button
          type="button"
          onClick={() => {
            if (window.confirm("¿Estás seguro de que deseas vaciar tu carro de compras?")) {
              onClearCart();
            }
          }}
          className="text-xs font-mono text-neutral-500 hover:text-red-400 flex items-center gap-1.5 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Vaciar Carro</span>
        </button>
      </div>

      {/* Items list */}
      <div className="divide-y divide-neutral-800/80">
        {items.map(({ product, quantity }) => {
          const itemTotal = product.priceCLP * quantity;
          const imageSrc =
            product.images && product.images.length > 0
              ? product.images[0]
              : "/images/cars/mustang-biturbo.jpg";

          return (
            <div
              key={product.id}
              className="py-4 sm:py-5 flex flex-col sm:flex-row sm:items-center gap-4 group"
            >
              {/* Product Image */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-neutral-900 border border-neutral-800 overflow-hidden flex-shrink-0">
                <Link href={`/catalogo/${product.slug}`}>
                  <Image
                    src={imageSrc}
                    alt={product.name}
                    fill
                    sizes="96px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </Link>
              </div>

              {/* Product Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[10px] font-heading font-bold uppercase tracking-wider text-red-400 bg-red-950/50 border border-red-500/30 px-2 py-0.5 rounded">
                    {product.brand.name}
                  </span>
                  <span className="text-xs font-mono text-neutral-500">
                    SKU: {product.sku}
                  </span>
                </div>

                <Link
                  href={`/catalogo/${product.slug}`}
                  className="font-heading font-bold text-white hover:text-red-400 transition-colors text-sm sm:text-base line-clamp-2"
                >
                  {product.name}
                </Link>

                <p className="text-xs font-mono text-neutral-400 mt-1">
                  Precio unitario:{" "}
                  <strong className="text-neutral-200">{formatCLP(product.priceCLP)}</strong>
                  {product.originalPriceCLP && product.isOnSale && (
                    <span className="line-through text-neutral-600 ml-1.5">
                      {formatCLP(product.originalPriceCLP)}
                    </span>
                  )}
                </p>
              </div>

              {/* Quantity Controls & Line Total */}
              <div className="flex items-center justify-between sm:justify-end gap-6 sm:gap-8 pt-2 sm:pt-0 border-t sm:border-t-0 border-neutral-800/60">
                {/* Quantity buttons */}
                <div className="flex items-center border border-neutral-700 bg-neutral-900 rounded-lg overflow-hidden h-9">
                  <button
                    type="button"
                    onClick={() => onUpdateQuantity(product.id, quantity - 1)}
                    disabled={quantity <= 1}
                    className="px-2.5 h-full text-neutral-400 hover:text-white hover:bg-neutral-800 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
                    aria-label="Disminuir cantidad"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-9 text-center font-mono font-bold text-white text-xs">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                    disabled={quantity >= (product.stock || 10)}
                    className="px-2.5 h-full text-neutral-400 hover:text-white hover:bg-neutral-800 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
                    aria-label="Aumentar cantidad"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Subtotal */}
                <div className="text-right min-w-[100px]">
                  <span className="block text-base sm:text-lg font-mono font-black text-red-500">
                    {formatCLP(itemTotal)}
                  </span>
                  <span className="text-[10px] font-mono text-neutral-500">IVA incl.</span>
                </div>

                {/* Remove button */}
                <button
                  type="button"
                  onClick={() => onRemoveItem(product.id)}
                  className="p-2 text-neutral-500 hover:text-red-400 hover:bg-neutral-900 rounded-lg transition-colors"
                  title="Eliminar producto"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Back to catalog button */}
      <div className="pt-4 border-t border-neutral-800">
        <Link
          href="/catalogo"
          className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider text-neutral-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-red-500" />
          <span>Continuar comprando en el catálogo</span>
        </Link>
      </div>
    </div>
  );
}
