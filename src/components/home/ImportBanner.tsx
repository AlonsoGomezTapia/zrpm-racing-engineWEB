import Link from "next/link";
import { PlaneTakeoff, ShieldCheck, Clock, ArrowRight } from "lucide-react";

export function ImportBanner() {
  return (
    <section className="py-16 bg-[#060608] border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-r from-surface to-surface-100 border border-surface-border p-8 sm:p-12 overflow-hidden shadow-motorsport-card">
          {/* Subtle grid and glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-motorsport-red/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-motorsport-red/10 border border-motorsport-red/30 text-xs font-mono font-bold tracking-widest text-motorsport-red uppercase">
                <PlaneTakeoff className="w-3.5 h-3.5" />
                <span>SERVICIO DE IMPORTACIÓN DIRECTA</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white uppercase tracking-tight">
                ¿NO ENCUENTRAS LA PIEZA EXACTA PARA TU AUTO?
              </h2>

              <p className="text-motorsport-steel text-sm sm:text-base leading-relaxed font-sans max-w-2xl">
                Importamos directamente desde Estados Unidos componentes Roush, Whipple, kits Twin-Turbo Hellion, piezas Steeda, frenos Brembo y repuestos OEM de alto rendimiento con nacionalización completa y despacho a todo Chile.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-motorsport-steel">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Garantía de procedencia 100% original</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-motorsport-red" />
                  <span>Plazos estimados de 10 a 15 días hábiles</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                href="/importaciones"
                className="w-full py-4 px-6 rounded-xl bg-motorsport-red hover:bg-motorsport-red-light text-white font-heading font-bold text-xs uppercase tracking-wider text-center transition-all shadow-motorsport-glow flex items-center justify-center gap-2 group"
              >
                <span>Solicitar Cotización de Importación</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="https://wa.me/56990550474?text=Hola%20ZRPM,%20necesito%20cotizar%20la%20importaci%C3%B3n%20de%20un%20repuesto%20espec%C3%ADfico"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 rounded-xl bg-surface-muted hover:bg-surface-border text-motorsport-steel hover:text-white font-heading font-bold text-xs uppercase tracking-wider text-center transition-colors border border-surface-border"
              >
                Consultar por WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
