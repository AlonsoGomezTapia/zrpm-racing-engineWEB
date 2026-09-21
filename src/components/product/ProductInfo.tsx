"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ShoppingCart,
  Check,
  Plus,
  Minus,
  Truck,
  MapPin,
  ShieldCheck,
  Gauge,
  Share2,
} from "lucide-react";
import { Product } from "@/types";
import { formatCLP, createWhatsAppLink } from "@/lib/utils";
import { useCartStore } from "@/store/useCartStore";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { ProductCompatibility } from "./ProductCompatibility";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [addedAnimation, setAddedAnimation] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = () => {
    addItem(product, quantity);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleIncrement = () => {
    if (quantity < (product.stock || 10)) {
      setQuantity((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const whatsappMessage = `Hola ZRPM Racing Engine, me interesa el producto "${product.name}" (SKU: ${product.sku}). Quisiera consultar sobre disponibilidad, compatibilidad o costo de instalación en el taller de La Cisterna.`;
  const whatsappUrl = createWhatsAppLink(whatsappMessage);

  return (
    <div className="flex flex-col space-y-6">
      {/* Header: Brand, Category, Share */}
      <div>
        <div className="flex items-center justify-between gap-3 text-xs mb-2">
          <div className="flex items-center gap-2">
            <Link
              href={`/catalogo?marca=${product.brand.slug}`}
              className="font-heading font-bold uppercase tracking-wider text-red-500 hover:text-red-400 bg-red-950/40 border border-red-500/30 px-2.5 py-0.5 rounded transition-colors"
            >
              {product.brand.name}
            </Link>
            <span className="text-neutral-600">•</span>
            <Link
              href={`/catalogo?categoria=${product.category.slug}`}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              {product.category.name}
            </Link>
          </div>

          <button
            type="button"
            onClick={handleCopyLink}
            className="flex items-center gap-1 text-neutral-400 hover:text-white transition-colors text-xs"
            title="Copiar enlace"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{copiedLink ? "¡Copiado!" : "Compartir"}</span>
          </button>
        </div>

        {/* Product Title */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black tracking-tight text-white leading-tight">
          {product.name}
        </h1>

        {/* SKU & Technical Identifier */}
        <div className="flex items-center gap-3 mt-2 text-xs font-mono text-neutral-400">
          <span>
            SKU: <strong className="text-neutral-200">{product.sku}</strong>
          </span>
          <span className="text-neutral-700">|</span>
          <span className="text-emerald-400 font-bold">
            {product.availability === "in_stock"
              ? "En Stock (La Cisterna)"
              : product.availability === "import_order"
              ? `A Pedido (${product.estimatedDeliveryDays || 14} días hábiles)`
              : "Consultar Stock"}
          </span>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="p-4 rounded-xl bg-neutral-900/80 border border-neutral-800">
        <div className="flex items-baseline gap-3 flex-wrap">
          <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-red-500">
            {formatCLP(product.priceCLP)}
          </span>

          {product.isOnSale && product.originalPriceCLP && (
            <span className="text-lg font-mono text-neutral-500 line-through">
              {formatCLP(product.originalPriceCLP)}
            </span>
          )}

          <span className="text-xs font-mono text-neutral-400 self-center">IVA Incluido</span>
        </div>

        {product.isOnSale && product.originalPriceCLP && (
          <p className="text-xs font-mono text-emerald-400 mt-1">
            Ahorras {formatCLP(product.originalPriceCLP - product.priceCLP)} en este upgrade
          </p>
        )}

        <div className="mt-3 pt-3 border-t border-neutral-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-red-500" />
            <span>Envíos a todo Chile vía Starken / Chilexpress</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-red-500" />
            <span>Retiro gratis en Victoria 8766, La Cisterna</span>
          </div>
        </div>
      </div>

      {/* Short Description */}
      <p className="text-neutral-300 text-sm leading-relaxed border-l-2 border-red-600 pl-3.5 italic bg-neutral-900/30 py-2 rounded-r">
        {product.shortDescription}
      </p>

      {/* Vehicle Compatibility Box */}
      <ProductCompatibility product={product} />

      {/* Actions: Quantity & CTA Buttons */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-3">
          {/* Quantity selector */}
          <div className="flex items-center border border-neutral-700 bg-neutral-900 rounded-lg overflow-hidden h-12">
            <button
              type="button"
              onClick={handleDecrement}
              disabled={quantity <= 1}
              className="px-3 h-full text-neutral-400 hover:text-white hover:bg-neutral-800 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
              aria-label="Disminuir cantidad"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-12 text-center font-mono font-bold text-white text-base">
              {quantity}
            </span>
            <button
              type="button"
              onClick={handleIncrement}
              disabled={quantity >= (product.stock || 10)}
              className="px-3 h-full text-neutral-400 hover:text-white hover:bg-neutral-800 disabled:opacity-40 disabled:hover:bg-transparent transition-colors"
              aria-label="Aumentar cantidad"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className={`flex-1 h-12 rounded-lg font-heading font-extrabold uppercase tracking-wider text-sm flex items-center justify-center gap-2 shadow-lg transition-all duration-200 ${
              addedAnimation
                ? "bg-emerald-600 text-white shadow-emerald-950/50 scale-[0.99]"
                : "bg-red-600 hover:bg-red-500 text-white shadow-red-950/50 hover:shadow-red-600/30 active:scale-[0.98]"
            }`}
          >
            {addedAnimation ? (
              <>
                <Check className="w-5 h-5" />
                <span>¡Agregado al Carro!</span>
              </>
            ) : (
              <>
                <ShoppingCart className="w-5 h-5" />
                <span>Agregar al Carro</span>
              </>
            )}
          </button>
        </div>

        {/* WhatsApp Quote / Consultation */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full h-12 rounded-lg font-heading font-bold uppercase tracking-wider text-sm bg-neutral-900 hover:bg-neutral-800 text-emerald-400 border border-emerald-500/40 hover:border-emerald-400 flex items-center justify-center gap-2 transition-all shadow-md"
        >
          <WhatsAppIcon className="w-5 h-5 fill-current" />
          <span>Consultar por WhatsApp / Instalación</span>
        </a>
      </div>

      {/* Workshop Security & Trust Badges */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-neutral-800/80">
        <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-neutral-900/40 border border-neutral-800/60 text-xs">
          <ShieldCheck className="w-4 h-4 text-red-500 flex-shrink-0" />
          <span className="text-neutral-300">Garantía Directa ZRPM</span>
        </div>
        <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-neutral-900/40 border border-neutral-800/60 text-xs">
          <Gauge className="w-4 h-4 text-red-500 flex-shrink-0" />
          <span className="text-neutral-300">Calibración en Dinamómetro</span>
        </div>
        <div className="flex items-center gap-2.5 p-2.5 rounded-lg bg-neutral-900/40 border border-neutral-800/60 text-xs">
          <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
          <span className="text-neutral-300">Taller Victoria 8766</span>
        </div>
      </div>
    </div>
  );
}
