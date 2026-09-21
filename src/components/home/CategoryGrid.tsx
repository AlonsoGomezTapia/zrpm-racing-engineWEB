import Link from "next/link";
import Image from "next/image";
import { CATEGORIES } from "@/lib/data/categories";
import { ArrowRight, Flame } from "lucide-react";

export function CategoryGrid() {
  return (
    <section className="py-20 bg-background border-b border-surface-border select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-motorsport-red uppercase mb-2 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-motorsport-red" />
              <span>LÍNEAS & VEHÍCULOS DE COMPETICIÓN ZRPM</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight uppercase">
              CATEGORÍAS DE ESPECIALIDAD
            </h2>
            <p className="text-xs sm:text-sm text-motorsport-steel font-sans mt-2 max-w-2xl">
              Equipamiento probado en pista y calle sobre las plataformas más reconocidas de nuestro taller.
            </p>
          </div>
          <Link
            href="/catalogo"
            className="text-xs font-mono font-bold uppercase tracking-wider text-motorsport-steel hover:text-motorsport-red transition-colors inline-flex items-center gap-1.5 self-start md:self-end"
          >
            <span>Ver todo el catálogo</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Categories Grid with Real Photos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((category) => {
            const isTwinTurbo = category.slug === "modificacion-a-pedido";

            return (
              <Link
                key={category.id}
                href={`/catalogo?category=${category.slug}`}
                className={`group relative rounded-2xl border overflow-hidden transition-all duration-300 flex flex-col justify-between h-96 ${
                  isTwinTurbo
                    ? "border-motorsport-red shadow-motorsport-glow ring-1 ring-motorsport-red/40"
                    : "border-surface-border hover:border-motorsport-steel"
                }`}
              >
                {/* Real Car Photo Background */}
                <div className="absolute inset-0 z-0 bg-surface-100">
                  {category.imageUrl ? (
                    <Image
                      src={category.imageUrl}
                      alt={category.name}
                      fill
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : null}
                  {/* Dark gradients for perfect text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/75 to-black/40" />
                  <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />
                </div>

                {/* Top Badge */}
                <div className="relative z-10 p-5 flex items-start justify-between">
                  {category.isPopularBadge ? (
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-mono font-black uppercase tracking-wider backdrop-blur-md shadow-md ${
                        isTwinTurbo
                          ? "bg-motorsport-red text-white animate-pulse"
                          : "bg-white/90 text-black"
                      }`}
                    >
                      {category.isPopularBadge}
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-white/10 text-neutral-300 text-[10px] font-mono uppercase">
                      LÍNEA TALLER
                    </span>
                  )}

                  {category.carModel && (
                    <span className="text-[11px] font-mono text-white/90 font-bold bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                      {category.carModel}
                    </span>
                  )}
                </div>

                {/* Bottom Content */}
                <div className="relative z-10 p-5 pt-0">
                  <h3 className="text-xl sm:text-2xl font-heading font-black text-white group-hover:text-motorsport-red transition-colors tracking-wide uppercase mb-2 leading-tight drop-shadow-md">
                    {category.name}
                  </h3>

                  <p className="text-xs text-neutral-300 leading-relaxed font-sans line-clamp-2 mb-4 drop-shadow">
                    {category.description}
                  </p>

                  <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-mono font-bold text-white group-hover:text-motorsport-red transition-colors">
                    <span>EXPLORAR CATEGORÍA</span>
                    <ArrowRight className="w-4 h-4 text-motorsport-red group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
