"use client";

import { useCartStore } from "@/store/useCartStore";
import { formatCLP } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from "lucide-react";

export function CartDrawer() {
  const { isOpen, closeCart, items, updateQuantity, removeItem, getSubtotalCLP, getTotalItems } =
    useCartStore();

  if (!isOpen) return null;

  const subtotal = getSubtotalCLP();
  const totalItems = getTotalItems();

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-surface border-l border-surface-border flex flex-col shadow-2xl">
          {/* Drawer Header */}
          <div className="p-5 border-b border-surface-border flex items-center justify-between bg-surface-100">
            <div className="flex items-center gap-2.5">
              <ShoppingBag className="w-5 h-5 text-motorsport-red" />
              <h2 className="font-heading font-bold text-white text-base tracking-wide">
                CARRO DE COMPRAS ({totalItems})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 rounded-lg text-motorsport-steel hover:text-white hover:bg-surface-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto p-5 divide-y divide-surface-border">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 rounded-full bg-surface-muted flex items-center justify-center text-motorsport-steel mb-4 border border-surface-border">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg mb-1">
                  Tu carro está vacío
                </h3>
                <p className="text-xs text-motorsport-steel max-w-xs mb-6">
                  Explora nuestros repuestos y accesorios de competición para tu vehículo.
                </p>
                <Link
                  href="/catalogo"
                  onClick={closeCart}
                  className="px-5 py-2.5 rounded-lg bg-motorsport-red hover:bg-motorsport-red-light text-white text-xs font-bold uppercase tracking-wider transition-colors inline-flex items-center gap-2"
                >
                  Explorar Catálogo
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="space-y-4 pt-1">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="pt-4 first:pt-0 flex gap-4">
                    <div className="relative w-20 h-20 bg-surface-muted rounded-lg border border-surface-border overflow-hidden shrink-0">
                      {product.images[0] ? (
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-motorsport-steel text-xs font-mono">
                          ZRPM
                        </div>
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] text-motorsport-red font-mono uppercase font-semibold tracking-wider">
                        {product.brand.name}
                      </div>
                      <h4 className="text-sm font-bold text-white truncate hover:text-motorsport-red transition-colors">
                        <Link href={`/catalogo/${product.slug}`} onClick={closeCart}>
                          {product.name}
                        </Link>
                      </h4>
                      <div className="text-xs font-mono font-bold text-white mt-1">
                        {formatCLP(product.priceCLP)}
                      </div>

                      <div className="flex items-center justify-between mt-2.5">
                        {/* Quantity selector */}
                        <div className="flex items-center border border-surface-border rounded bg-surface-100">
                          <button
                            onClick={() => updateQuantity(product.id, quantity - 1)}
                            className="p-1 text-motorsport-steel hover:text-white"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-2.5 text-xs font-mono text-white">
                            {quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(product.id, quantity + 1)}
                            className="p-1 text-motorsport-steel hover:text-white"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Remove */}
                        <button
                          onClick={() => removeItem(product.id)}
                          className="text-motorsport-steel hover:text-motorsport-red transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Drawer Footer */}
          {items.length > 0 && (
            <div className="p-5 border-t border-surface-border bg-surface-100 space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-motorsport-steel">
                  <span>Subtotal estimado</span>
                  <span className="font-mono text-white font-bold text-sm">
                    {formatCLP(subtotal)}
                  </span>
                </div>
                <div className="flex justify-between text-[11px] text-motorsport-steel/70">
                  <span>Despacho o Retiro en taller</span>
                  <span>Calculado en Checkout</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  href="/carrito"
                  onClick={closeCart}
                  className="w-full py-2.5 px-3 rounded-lg border border-surface-border hover:border-motorsport-steel bg-surface hover:bg-surface-muted text-white text-xs font-bold uppercase tracking-wider text-center transition-colors"
                >
                  Ver Carro
                </Link>
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="w-full py-2.5 px-3 rounded-lg bg-motorsport-red hover:bg-motorsport-red-light text-white text-xs font-bold uppercase tracking-wider text-center transition-colors shadow-motorsport-glow"
                >
                  Finalizar Pedido
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
