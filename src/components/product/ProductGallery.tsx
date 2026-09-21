"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Maximize2, ShieldCheck, Flame } from "lucide-react";
import { Product } from "@/types";

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const images =
    product.images && product.images.length > 0
      ? product.images
      : ["/images/cars/mustang-biturbo.jpg"];

  const currentImage = images[selectedImageIndex] || images[0];

  const discountPercent =
    product.isOnSale && product.originalPriceCLP
      ? Math.round(
          ((product.originalPriceCLP - product.priceCLP) / product.originalPriceCLP) * 100
        )
      : null;

  return (
    <div className="flex flex-col gap-4">
      {/* Main Image Container */}
      <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800 group select-none">
        <Image
          src={currentImage}
          alt={product.name}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className={`object-cover object-center transition-all duration-500 ease-out cursor-zoom-in ${
            isZoomed ? "scale-125" : "scale-100 group-hover:scale-105"
          }`}
          onClick={() => setIsZoomed(!isZoomed)}
        />

        {/* Ambient Gradient overlay on bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {discountPercent && (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-heading font-black tracking-wider uppercase bg-red-600 text-white rounded shadow-lg shadow-red-950/50">
              <Flame className="w-3.5 h-3.5" />
              -{discountPercent}% OFF
            </span>
          )}

          {product.availability === "in_stock" ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold tracking-wider uppercase bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Stock Inmediato
            </span>
          ) : product.availability === "import_order" ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono font-bold tracking-wider uppercase bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded backdrop-blur-md">
              Importación USA Directa
            </span>
          ) : null}
        </div>

        {/* Brand Tag Top Right */}
        <div className="absolute top-3 right-3 z-10">
          <span className="px-2.5 py-1 text-xs font-heading font-bold uppercase tracking-wider bg-neutral-900/90 text-neutral-300 border border-neutral-700/80 rounded backdrop-blur-md">
            {product.brand.name}
          </span>
        </div>

        {/* Zoom Hint / Fullscreen button */}
        <button
          type="button"
          onClick={() => setIsZoomed(!isZoomed)}
          className="absolute bottom-3 right-3 p-2 rounded-lg bg-neutral-900/80 hover:bg-neutral-800 border border-neutral-700 text-neutral-300 hover:text-white transition-all backdrop-blur-md shadow-lg"
          title={isZoomed ? "Reducir zoom" : "Ampliar imagen"}
        >
          <Maximize2 className="w-4 h-4" />
        </button>

        {/* Performance Spec watermark / Authenticity */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 backdrop-blur-sm bg-black/40 px-2 py-0.5 rounded">
          <ShieldCheck className="w-3.5 h-3.5 text-red-500" />
          <span>ZRPM Verified Component</span>
        </div>
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
          {images.map((img, idx) => {
            const isSelected = idx === selectedImageIndex;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setSelectedImageIndex(idx);
                  setIsZoomed(false);
                }}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 bg-neutral-900 ${
                  isSelected
                    ? "border-red-500 ring-2 ring-red-500/30 scale-105"
                    : "border-neutral-800 hover:border-neutral-600 opacity-70 hover:opacity-100"
                }`}
              >
                <Image
                  src={img}
                  alt={`${product.name} miniatura ${idx + 1}`}
                  fill
                  sizes="120px"
                  className="object-cover object-center"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
