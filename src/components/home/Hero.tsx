import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Gauge, Wrench, ShieldCheck, Flame } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden border-b border-surface-border bg-[#08080A]">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=80"
          alt="Vehículo de competición ZRPM"
          fill
          priority
          className="object-cover object-center opacity-30 filter contrast-125 saturate-50"
        />
        {/* Deep Dark Gradients to enforce dark aesthetic */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/85 to-[#08080A]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08080A] via-transparent to-[#08080A]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(239,35,60,0.15)_0%,_transparent_70%)]" />
      </div>

      {/* Subtle Carbon/Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 text-center flex flex-col items-center">
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-motorsport-red/10 border border-motorsport-red/30 text-xs font-mono tracking-wider uppercase text-motorsport-red mb-6">
          <Flame className="w-3.5 h-3.5 text-motorsport-red" />
          <span>Ingeniería Automotriz & Modificaciones a Pedido</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white max-w-4xl leading-[1.08] mb-6 uppercase">
          PERFORMANCE <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-motorsport-red">
            SIN COMPROMISOS
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-motorsport-steel text-base sm:text-lg lg:text-xl max-w-2xl font-sans leading-relaxed mb-10">
          Componentes de competición, kits Twin-Turbo armados a medida, sobrealimentación y reprogramaciones de ECU en banco dinamómetro para llevar tu vehículo al siguiente nivel.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/catalogo"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-motorsport-red hover:bg-motorsport-red-light text-white font-heading font-bold text-sm tracking-wider uppercase transition-all shadow-motorsport-glow hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
          >
            <span>Ver Productos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/servicios"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-surface-100 hover:bg-surface-muted border border-surface-border hover:border-motorsport-steel text-white font-heading font-bold text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2"
          >
            <span>Conocer ZRPM & Taller</span>
          </Link>
        </div>

        {/* Performance Metric Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 max-w-4xl w-full border-t border-surface-border/60 pt-10">
          <div className="p-4 rounded-xl bg-surface-100/80 border border-surface-border backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 text-motorsport-red mb-1">
              <Gauge className="w-4 h-4" />
              <span className="font-heading font-black text-2xl text-white">1.000+ HP</span>
            </div>
            <p className="text-[11px] font-mono text-motorsport-steel uppercase">
              Proyectos Twin-Turbo Dyno
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-100/80 border border-surface-border backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 text-motorsport-red mb-1">
              <Wrench className="w-4 h-4" />
              <span className="font-heading font-black text-2xl text-white">Stage 1 - 3</span>
            </div>
            <p className="text-[11px] font-mono text-motorsport-steel uppercase">
              Reprogramaciones a Medida
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-100/80 border border-surface-border backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 text-motorsport-red mb-1">
              <Flame className="w-4 h-4" />
              <span className="font-heading font-black text-2xl text-white">A Pedido</span>
            </div>
            <p className="text-[11px] font-mono text-motorsport-steel uppercase">
              Forced Induction Custom
            </p>
          </div>

          <div className="p-4 rounded-xl bg-surface-100/80 border border-surface-border backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 text-motorsport-red mb-1">
              <ShieldCheck className="w-4 h-4" />
              <span className="font-heading font-black text-2xl text-white">100%</span>
            </div>
            <p className="text-[11px] font-mono text-motorsport-steel uppercase">
              Garantía en Dinamómetro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
