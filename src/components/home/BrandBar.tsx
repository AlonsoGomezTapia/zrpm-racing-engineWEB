import { BRANDS } from "@/lib/data/brands";
import Link from "next/link";

export function BrandBar() {
  return (
    <section className="border-b border-surface-border bg-[#050507] py-6 overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[11px] font-mono uppercase tracking-widest text-motorsport-steel font-bold shrink-0">
            Marcas Oficiales & Equipamiento:
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-8 gap-y-3">
            {BRANDS.map((brand) => (
              <Link
                key={brand.id}
                href={`/catalogo?brand=${brand.slug}`}
                className="font-heading font-black text-sm tracking-wider uppercase text-motorsport-steel hover:text-white transition-colors duration-200"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
