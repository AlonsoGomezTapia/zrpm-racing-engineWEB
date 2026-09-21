import React from "react";
import { MapPin, Gauge, Wrench, ShieldCheck } from "lucide-react";

export function ContactHero() {
  return (
    <div className="relative pb-10 mb-10 border-b border-neutral-800">
      <div className="max-w-4xl">
        <div className="flex items-center gap-2 text-xs font-mono text-red-500 uppercase tracking-widest mb-2">
          <MapPin className="w-4 h-4" />
          <span>Taller Central & Laboratorio Dyno en Santiago</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-white uppercase leading-tight">
          Contacto & Ubicación <br />
          <span className="text-red-500">ZRPM Racing Engine</span>
        </h1>

        <p className="text-sm sm:text-base text-neutral-300 mt-4 leading-relaxed max-w-2xl">
          Instalaciones de alto rendimiento ubicadas en Victoria 8766, La Cisterna. Especialistas en calibración de ECU, sobrealimentación forzada y preparación mecánica para vehículos de calle y pista.
        </p>

        {/* Feature badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs">
            <Gauge className="w-4 h-4 text-red-500 shrink-0" />
            <span className="text-neutral-300 font-medium">Banco Dinamómetro</span>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs">
            <Wrench className="w-4 h-4 text-red-500 shrink-0" />
            <span className="text-neutral-300 font-medium">Montaje Especializado</span>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs">
            <ShieldCheck className="w-4 h-4 text-red-500 shrink-0" />
            <span className="text-neutral-300 font-medium">Garantía de Trabajo</span>
          </div>

          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-neutral-900/80 border border-neutral-800 text-xs">
            <MapPin className="w-4 h-4 text-red-500 shrink-0" />
            <span className="text-neutral-300 font-medium">La Cisterna, Stgo</span>
          </div>
        </div>
      </div>
    </div>
  );
}
