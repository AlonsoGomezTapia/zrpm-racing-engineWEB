"use client";

import { useState } from "react";
import Link from "next/link";
import { TUNING_STAGES } from "@/lib/data/stages";
import { TuningStageData } from "@/types";
import { formatCLP } from "@/lib/utils";
import {
  Gauge,
  Cpu,
  CheckCircle2,
  AlertCircle,
  Phone,
  ArrowRight,
} from "lucide-react";

export function StageSimulator() {
  const [selectedStage, setSelectedStage] = useState<TuningStageData>(TUNING_STAGES[0]);

  return (
    <section className="py-20 bg-[#08080A] border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold tracking-widest text-motorsport-red uppercase mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>CALIBRACIÓN ELECTRÓNICA & DINAMÓMETRO</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight uppercase">
            STAGES DE REPROGRAMACIÓN ZRPM
          </h2>
          <p className="text-motorsport-steel text-sm sm:text-base mt-3 font-sans leading-relaxed">
            Ajuste fino de parámetros en banco de potencia de rodillos. Cada mapa se personaliza según el estado y los componentes de tu vehículo.
          </p>
        </div>

        {/* Stage Selector Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto mb-10">
          {TUNING_STAGES.map((s) => {
            const isSelected = s.stage === selectedStage.stage;
            return (
              <button
                key={s.stage}
                onClick={() => setSelectedStage(s)}
                className={`p-4 rounded-xl font-heading text-center transition-all border ${
                  isSelected
                    ? "bg-motorsport-red text-white border-motorsport-red shadow-motorsport-glow scale-[1.02]"
                    : "bg-surface border-surface-border text-motorsport-steel hover:text-white hover:bg-surface-100"
                }`}
              >
                <div className="text-xs font-mono font-bold uppercase opacity-80 mb-1">
                  NIVEL DE POTENCIA
                </div>
                <div className="text-lg sm:text-xl font-black uppercase tracking-wider">
                  {s.title}
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Detail Card */}
        <div className="max-w-4xl mx-auto bg-surface rounded-3xl border border-surface-border p-6 sm:p-10 shadow-motorsport-card">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Gains visualization */}
            <div className="md:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-mono font-bold text-motorsport-red uppercase tracking-wider">
                  {selectedStage.tagline}
                </span>
                <h3 className="text-2xl font-heading font-black text-white uppercase mt-1">
                  {selectedStage.title}
                </h3>
                <p className="text-xs text-motorsport-steel font-sans leading-relaxed mt-2">
                  {selectedStage.description}
                </p>
              </div>

              {/* Power Gains Meters */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-surface-100 border border-surface-border">
                  <div className="text-[10px] font-mono uppercase text-motorsport-steel">
                    Ganancia Estimada Potencia
                  </div>
                  <div className="text-2xl sm:text-3xl font-heading font-black text-motorsport-red mt-1">
                    +{selectedStage.gainHPEstimate} HP
                  </div>
                  <div className="w-full bg-surface-muted h-1.5 rounded-full overflow-hidden mt-3">
                    <div
                      className="bg-motorsport-red h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${Math.min(100, (selectedStage.gainHPEstimate / 350) * 100)}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-100 border border-surface-border">
                  <div className="text-[10px] font-mono uppercase text-motorsport-steel">
                    Ganancia Estimada Torque
                  </div>
                  <div className="text-2xl sm:text-3xl font-heading font-black text-white mt-1">
                    +{selectedStage.gainTorqueEstimateNM} Nm
                  </div>
                  <div className="w-full bg-surface-muted h-1.5 rounded-full overflow-hidden mt-3">
                    <div
                      className="bg-white h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${Math.min(100, (selectedStage.gainTorqueEstimateNM / 480) * 100)}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Hardware requirements & Price */}
            <div className="md:col-span-6 bg-surface-100 p-6 sm:p-8 rounded-2xl border border-surface-border flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div>
                  <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-motorsport-red" />
                    <span>Requerimientos Obligatorios:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-motorsport-steel">
                    {selectedStage.requiredHardware.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-motorsport-red font-mono">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                    <span>Mejoras Recomendadas:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-motorsport-steel">
                    {selectedStage.recommendedHardware.map((rec, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-400 font-mono">•</span>
                        <span>{rec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-4 border-t border-surface-border">
                <div className="text-[11px] font-mono text-motorsport-steel uppercase">
                  Valor Reprogramación en Dinamómetro:
                </div>
                <div className="flex items-baseline gap-2 mt-0.5 mb-4">
                  <span className="text-2xl font-mono font-black text-white">
                    {formatCLP(selectedStage.priceCLPNeto)}
                  </span>
                  <span className="text-xs font-mono text-motorsport-steel">
                    + IVA
                  </span>
                </div>

                <Link
                  href={`https://wa.me/56990550474?text=Hola%20ZRPM,%20deseo%20agendar%20reprogramaci%C3%B3n%20${encodeURIComponent(
                    selectedStage.title
                  )}%20para%20mi%20veh%C3%ADculo`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-motorsport-red hover:bg-motorsport-red-light text-white font-heading font-bold text-xs uppercase tracking-wider text-center transition-all shadow-motorsport-glow flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Agendar en Dinamómetro</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
