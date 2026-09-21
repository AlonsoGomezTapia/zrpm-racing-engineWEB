"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CUSTOM_BUILDS, CustomBuild } from "@/lib/data/customBuilds";
import {
  Flame,
  Gauge,
  Zap,
  CheckCircle2,
  Phone,
  ArrowRight,
} from "lucide-react";

export function CustomBuildsShowcase() {
  const [selectedBuild, setSelectedBuild] = useState<CustomBuild>(CUSTOM_BUILDS[0]);

  return (
    <section className="py-20 bg-[#060608] border-b border-surface-border relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-motorsport-red/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-motorsport-red/10 border border-motorsport-red/30 text-xs font-mono font-bold tracking-widest text-motorsport-red uppercase mb-3">
              <Flame className="w-3.5 h-3.5" />
              <span>DESARROLLOS EXTREMOS A MEDIDA</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight uppercase">
              PROYECTOS ZRPM: TWIN-TURBO & SUPERCHARGED
            </h2>
            <p className="text-motorsport-steel text-sm sm:text-base max-w-2xl mt-2 font-sans">
              Autos reales construidos y calibrados en nuestro taller de La Cisterna. Potencia verificada en dinamómetro y armada bajo especificaciones extremas.
            </p>
          </div>

          <Link
            href="https://wa.me/56990550474?text=Hola%20ZRPM,%20estoy%20interesado%20en%20cotizar%20un%20proyecto%20Twin-Turbo%20o%20Sobrealimentado%20a%20pedido"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-xl bg-motorsport-red hover:bg-motorsport-red-light text-white font-heading font-bold text-xs tracking-wider uppercase transition-all shadow-motorsport-glow flex items-center gap-2 self-start md:self-end shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Cotizar Proyecto a Pedido</span>
          </Link>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CUSTOM_BUILDS.map((build) => {
            const isSelected = build.id === selectedBuild.id;
            return (
              <button
                key={build.id}
                onClick={() => setSelectedBuild(build)}
                className={`px-5 py-3 rounded-xl font-heading text-xs font-bold tracking-wider uppercase transition-all shrink-0 border flex items-center gap-2.5 ${
                  isSelected
                    ? "bg-motorsport-red text-white border-motorsport-red shadow-motorsport-glow"
                    : "bg-surface border-surface-border text-motorsport-steel hover:text-white hover:bg-surface-100"
                }`}
              >
                {build.isFlagship && <Flame className="w-4 h-4" />}
                <span>{build.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Project Feature Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-surface rounded-3xl border border-surface-border overflow-hidden p-6 sm:p-8 lg:p-10 shadow-motorsport-card">
          {/* Left / Top: Car Image & Stats Overlay */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-surface-border bg-surface-muted group">
              <Image
                src={selectedBuild.imageUrl}
                alt={selectedBuild.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Badges on Image */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white font-mono text-xs font-bold uppercase">
                  {selectedBuild.vehicle}
                </span>
                <span className="px-3 py-1 rounded-full bg-motorsport-red text-white font-mono text-xs font-bold uppercase">
                  {selectedBuild.category}
                </span>
              </div>

              {/* Bottom stats on photo */}
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2 bg-black/70 backdrop-blur-md p-3.5 rounded-xl border border-white/10">
                <div className="text-center">
                  <div className="text-[10px] font-mono text-motorsport-steel uppercase">Potencia</div>
                  <div className="text-lg sm:text-2xl font-heading font-black text-motorsport-red">
                    {selectedBuild.powerHP} HP
                  </div>
                </div>
                <div className="text-center border-x border-white/10">
                  <div className="text-[10px] font-mono text-motorsport-steel uppercase">Torque</div>
                  <div className="text-lg sm:text-2xl font-heading font-black text-white">
                    {selectedBuild.torqueNM} Nm
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[10px] font-mono text-motorsport-steel uppercase">Boost</div>
                  <div className="text-lg sm:text-2xl font-heading font-black text-amber-400">
                    {selectedBuild.boostPSI} PSI
                  </div>
                </div>
              </div>
            </div>

            {/* Note below image */}
            <div className="mt-4 p-4 rounded-xl bg-surface-100 border border-surface-border flex items-center gap-3">
              <Zap className="w-5 h-5 text-amber-400 shrink-0" />
              <p className="text-xs text-motorsport-steel font-mono">
                {selectedBuild.highlight}
              </p>
            </div>
          </div>

          {/* Right: Technical Engineering Specs */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-mono font-bold text-motorsport-red uppercase tracking-wider mb-1">
                FICHA TÉCNICA DE PROYECTO
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white uppercase tracking-tight mb-3">
                {selectedBuild.title}
              </h3>
              <p className="text-xs text-motorsport-steel leading-relaxed font-sans mb-6">
                {selectedBuild.description}
              </p>

              {/* Modifications List */}
              <div className="space-y-2.5 border-t border-surface-border pt-5">
                <div className="text-xs font-mono text-white uppercase font-bold tracking-wider mb-2">
                  Upgrades & Componentes Instalados:
                </div>
                {selectedBuild.modsList.map((mod, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-motorsport-red shrink-0 mt-0.5" />
                    <span>{mod}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="space-y-3 pt-6 border-t border-surface-border">
              <Link
                href={`https://wa.me/56990550474?text=Hola%20ZRPM,%20me%20gustar%C3%ADa%20hacer%20un%20proyecto%20similar%20al%20${encodeURIComponent(
                  selectedBuild.title
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-xl bg-motorsport-red hover:bg-motorsport-red-light text-white font-heading font-bold text-xs uppercase tracking-wider text-center transition-all shadow-motorsport-glow flex items-center justify-center gap-2"
              >
                <span>Armar Mi Auto con Esta Configuración</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-[11px] font-mono text-center text-motorsport-steel">
                Evaluación previa de compresión y estado del motor en taller
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
