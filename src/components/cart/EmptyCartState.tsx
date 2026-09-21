import React from "react";
import Link from "next/link";
import { ShoppingBag, ArrowRight, Car, Flame } from "lucide-react";

interface EmptyCartStateProps {
  onOpenGarage?: () => void;
}

export function EmptyCartState({ onOpenGarage }: EmptyCartStateProps) {
  return (
    <div className="py-16 md:py-24 text-center max-w-lg mx-auto">
      <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-red-500 shadow-xl shadow-red-950/20">
        <ShoppingBag className="w-10 h-10" />
      </div>

      <h2 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-tight text-white mb-3">
        Tu carro de compras está vacío
      </h2>

      <p className="text-sm text-neutral-400 mb-8 leading-relaxed">
        Aún no has agregado piezas ni upgrades de rendimiento. Explora nuestro catálogo especializado para marcas americanas y proyectos de alto calibre.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          href="/catalogo"
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-red-950/50 transition-all active:scale-[0.98]"
        >
          <span>Explorar Catálogo</span>
          <ArrowRight className="w-4 h-4" />
        </Link>

        {onOpenGarage && (
          <button
            type="button"
            onClick={onOpenGarage}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700 font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
          >
            <Car className="w-4 h-4 text-red-500" />
            <span>Configurar Mi Auto</span>
          </button>
        )}

        <Link
          href="/#custom-builds"
          className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700 font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
        >
          <Flame className="w-4 h-4 text-amber-500" />
          <span>Ver Proyectos ZRPM</span>
        </Link>
      </div>
    </div>
  );
}
