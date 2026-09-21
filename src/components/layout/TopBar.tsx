import Link from "next/link";
import { MapPin, Clock, Phone, ShieldCheck } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-[#050507] border-b border-surface-border/70 text-xs text-motorsport-steel py-2 px-4 select-none">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        {/* Left: Location and Hours */}
        <div className="flex flex-wrap items-center gap-4 text-[11px] sm:text-xs">
          <div className="flex items-center gap-1.5 hover:text-white transition-colors">
            <MapPin className="w-3.5 h-3.5 text-motorsport-red shrink-0" />
            <span>Victoria 8766, La Cisterna, Santiago</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 border-l border-surface-border pl-4">
            <Clock className="w-3.5 h-3.5 text-motorsport-red shrink-0" />
            <span>Lun – Vie: 10:00 a 19:00 hrs</span>
          </div>
        </div>

        {/* Right: Guarantee & WhatsApp */}
        <div className="flex items-center justify-between md:justify-end gap-4 text-[11px] sm:text-xs">
          <div className="hidden lg:flex items-center gap-1.5 text-emerald-400/90 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Garantía de Potencia & Puesta a Punto Dyno</span>
          </div>
          <div className="flex items-center gap-3 border-surface-border md:border-l md:pl-4">
            <Link
              href="https://wa.me/56990550474?text=Hola%20ZRPM,%20necesito%20asesor%C3%ADa%20técnica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white font-medium hover:text-motorsport-red transition-colors"
            >
              <Phone className="w-3 h-3 text-emerald-400 shrink-0" />
              <span>+569 90550474</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
