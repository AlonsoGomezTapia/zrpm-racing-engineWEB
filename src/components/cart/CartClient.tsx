"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, ChevronRight, Home, ShieldCheck, Sparkles } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { useGarageStore } from "@/store/useGarageStore";
import { CartItemsList } from "./CartItemsList";
import { OrderSummaryCard } from "./OrderSummaryCard";
import { EmptyCartState } from "./EmptyCartState";

export function CartClient() {
  const [mounted, setMounted] = useState(false);
  const { items, updateQuantity, removeItem, clearCart, getSubtotalCLP } = useCartStore();
  const { openModal: openGarageModal } = useGarageStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-mono text-neutral-400">Cargando carro de compras...</span>
        </div>
      </div>
    );
  }

  const subtotal = getSubtotalCLP();
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center space-x-2 text-xs text-neutral-400 mb-6"
      >
        <Link href="/" className="flex items-center hover:text-white transition-colors text-neutral-500">
          <Home className="w-3.5 h-3.5 mr-1" />
          <span>Inicio</span>
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
        <Link href="/catalogo" className="hover:text-white transition-colors text-neutral-500">
          Catálogo
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
        <span className="text-white font-medium">Carro de Compras</span>
      </nav>

      {/* Page Header */}
      <div className="pb-6 mb-6 border-b border-neutral-800 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-red-500 uppercase tracking-widest mb-1">
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Gestión de Pedido ZRPM</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black tracking-tight text-white uppercase">
            Carro de Compras
          </h1>
        </div>

        {items.length > 0 && (
          <span className="text-xs font-mono text-neutral-400">
            {totalQuantity} {totalQuantity === 1 ? "unidad" : "unidades"} en tu selección
          </span>
        )}
      </div>

      {/* Cart Content */}
      {items.length === 0 ? (
        <EmptyCartState onOpenGarage={openGarageModal} />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Items List (7 or 8 cols on lg) */}
          <div className="lg:col-span-7 xl:col-span-8 bg-neutral-900/40 rounded-2xl border border-neutral-800/80 p-5 sm:p-6">
            <CartItemsList
              items={items}
              onUpdateQuantity={updateQuantity}
              onRemoveItem={removeItem}
              onClearCart={clearCart}
            />
          </div>

          {/* Right Column: Order Summary & Checkout Card (5 or 4 cols on lg) */}
          <div className="lg:col-span-5 xl:col-span-4">
            <OrderSummaryCard items={items} subtotalCLP={subtotal} />
          </div>
        </div>
      )}
    </div>
  );
}
