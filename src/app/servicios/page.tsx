import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  Gauge,
  Cpu,
  Flame,
  Wrench,
  Activity,
  CheckCircle2,
  Clock,
  MapPin,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { createWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Reprogramación por Stages & Dinamómetro en La Cisterna | ZRPM Racing Engine",
  description:
    "Calibración de ECU por Stages (Stage 1, 2 y 3 Custom), banco dinamómetro de rodillos y mantenciones motorsport especializadas para vehículos americanos en Victoria 8766, La Cisterna.",
  openGraph: {
    title: "Reprogramación por Stages & Dinamómetro | ZRPM Racing Engine Chile",
    description:
      "Aumenta la potencia y torque de tu Ford Mustang, Camaro, Corvette o Dodge en el banco dinamómetro de rodillos de ZRPM en La Cisterna.",
    url: "https://zrpm.cl/servicios",
    siteName: "ZRPM Racing Engine",
    locale: "es_CL",
    type: "website",
    images: ["/images/hero/workshop-dyno.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reprogramación por Stages & Dinamómetro | ZRPM Racing Engine",
    description:
      "Calibración técnica sobre dinamómetro en Santiago de Chile. Potencia garantizada y curvas de torque óptimas.",
    images: ["/images/hero/workshop-dyno.jpg"],
  },
  alternates: {
    canonical: "https://zrpm.cl/servicios",
  },
};

export default function ServiciosPage() {
  const whatsappReproLink = createWhatsAppLink(
    "Hola ZRPM Racing Engine! Quiero consultar por una reprogramación / pasada en dinamómetro para mi vehículo."
  );

  const whatsappMantencionLink = createWhatsAppLink(
    "Hola ZRPM Racing Engine! Quiero agendar una mantención preventiva / cambio de fluidos motorsport en su taller."
  );

  return (
    <main className="min-h-screen bg-[#08080A] text-neutral-100 pb-24">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-surface-border">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/workshop-dyno.jpg"
            alt="Banco Dinamómetro ZRPM Racing Engine"
            fill
            priority
            className="object-cover object-center opacity-25 filter brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/85 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono tracking-widest uppercase mb-6">
            <Gauge className="w-3.5 h-3.5 text-red-500" />
            Ingeniería de Potencia & Taller La Cisterna
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white uppercase max-w-4xl mx-auto leading-tight">
            Reprogramación por Stages <span className="text-red-600">&</span> Banco Dinamómetro
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto font-sans leading-relaxed">
            Optimizamos electrónicamente los mapas de inyección, avance de encendido y presión de sobrealimentación para extraer el máximo potencial de tu motor V8 o turboalimentado, con validación cuantitativa en nuestro banco dinamómetro de rodillos en Victoria 8766.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-display font-bold uppercase tracking-wider text-sm shadow-lg shadow-red-600/20 transition-all"
            >
              <Clock className="w-4 h-4" />
              Agendar en Taller
            </Link>
            <a
              href={whatsappReproLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-100 hover:bg-surface-muted border border-surface-border hover:border-red-600/50 text-white font-display font-semibold text-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 text-green-500" />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Stages Section */}
      <section id="reprogramacion" className="py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-red-500 uppercase font-semibold">
              Niveles de Potenciación
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight text-white mt-2">
              Calibraciones Electrónicas por Stages
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-sans">
              Cada mapa es ajustado a la medida del combustible disponible en Chile (97 octanos / mezclas de competición), considerando las tolerancias mecánicas y temperaturas operativas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stage 1 Card */}
            <div className="p-8 rounded-xl bg-surface border border-surface-border hover:border-red-600/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded bg-red-600/10 text-red-400 font-mono text-xs font-bold uppercase">
                    Stage 1 (OEM+)
                  </span>
                  <Cpu className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold font-display text-white uppercase tracking-wide">
                  Calibración de Software Puro
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  Para vehículos 100% de fábrica o con filtro de aire de alto flujo. Aumenta la respuesta de acelerador, optimiza la curva de torque en rango medio y elimina limitadores de fábrica.
                </p>
                <div className="my-6 p-4 rounded-lg bg-surface-muted border border-surface-border">
                  <div className="text-xs font-mono text-neutral-400">Ganancia esperada:</div>
                  <div className="text-2xl font-black font-display text-red-500 mt-1">+20 a +35 HP</div>
                  <div className="text-xs font-mono text-neutral-400 mt-1">+35 a +50 Nm de torque</div>
                </div>
                <ul className="space-y-2.5 text-xs text-neutral-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    Sin modificaciones mecánicas obligatorias
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    Optimizado para gasolina 97 octanos
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    Medición previa y posterior en dinamómetro
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-surface-border">
                <a
                  href={whatsappReproLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-lg bg-surface-100 hover:bg-red-600 text-white text-center block text-xs font-display font-bold uppercase tracking-wider transition-colors"
                >
                  Cotizar Stage 1
                </a>
              </div>
            </div>

            {/* Stage 2 Card */}
            <div className="p-8 rounded-xl bg-surface border-2 border-red-600/60 shadow-xl shadow-red-950/20 relative flex flex-col justify-between">
              <div className="absolute -top-3 right-6 px-3 py-0.5 rounded-full bg-red-600 text-[10px] font-mono font-bold uppercase tracking-widest text-white">
                MÁS SOLICITADO
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded bg-red-600/20 text-red-400 font-mono text-xs font-bold uppercase">
                    Stage 2 (Bolt-Ons)
                  </span>
                  <Zap className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold font-display text-white uppercase tracking-wide">
                  Admisión & Escape Completo
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  Requiere Cold Air Intake (JLT/Roush) y línea de escape o colectores de escape largos (Headers). Calibración agresiva de chispa, mezcla AFR y tiempo de levas variables.
                </p>
                <div className="my-6 p-4 rounded-lg bg-surface-muted border border-surface-border">
                  <div className="text-xs font-mono text-neutral-400">Ganancia esperada:</div>
                  <div className="text-2xl font-black font-display text-red-500 mt-1">+40 a +70 HP</div>
                  <div className="text-xs font-mono text-neutral-400 mt-1">+60 a +90 Nm de torque</div>
                </div>
                <ul className="space-y-2.5 text-xs text-neutral-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    Requiere CAI e inducción de alto flujo
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    Desactivación selectiva de sensores O2 secundarios
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    Sonido deportivo más agresivo y cortes rápidos
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-surface-border">
                <a
                  href={whatsappReproLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white text-center block text-xs font-display font-bold uppercase tracking-wider transition-colors"
                >
                  Cotizar Stage 2
                </a>
              </div>
            </div>

            {/* Stage 3 Custom Card */}
            <div className="p-8 rounded-xl bg-surface border border-surface-border hover:border-red-600/40 transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded bg-red-600/10 text-red-400 font-mono text-xs font-bold uppercase">
                    Stage 3 / Custom
                  </span>
                  <Flame className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold font-display text-white uppercase tracking-wide">
                  Sobrealimentación & Bi-Turbo
                </h3>
                <p className="text-neutral-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  Para proyectos extremos con compresor volumétrico (Whipple / Roush), turbocompresores gemelos Hellion, inyectores sobredimensionados, bombas de combustible dobles y combustible E85.
                </p>
                <div className="my-6 p-4 rounded-lg bg-surface-muted border border-surface-border">
                  <div className="text-xs font-mono text-neutral-400">Ganancia esperada:</div>
                  <div className="text-2xl font-black font-display text-red-500 mt-1">+150 a +500+ HP</div>
                  <div className="text-xs font-mono text-neutral-400 mt-1">Potencias superiores a 1.000 HP</div>
                </div>
                <ul className="space-y-2.5 text-xs text-neutral-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    Sintonización en tiempo real sobre dinamómetro
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    Monitoreo constante de Knock y sensor Wideband
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                    Mapas multimodales y Launch Control
                  </li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-surface-border">
                <a
                  href={whatsappReproLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 rounded-lg bg-surface-100 hover:bg-red-600 text-white text-center block text-xs font-display font-bold uppercase tracking-wider transition-colors"
                >
                  Consultar Proyecto Custom
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dinamometro Details Section */}
      <section id="dinamometro" className="py-20 bg-surface-100/50 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <span className="text-xs font-mono tracking-widest text-red-500 uppercase font-semibold">
                Medición Precisa en Rodillos
              </span>
              <h2 className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight text-white mt-2">
                Banco Dinamómetro en Victoria 8766
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base mt-4 font-sans leading-relaxed">
                El dinamómetro de rodillos de ZRPM Racing Engine permite registrar en tiempo real la potencia a las ruedas (WHP), torque a las ruedas (WTQ) y relación aire/combustible (AFR).
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-3">
                  <Activity className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-white uppercase font-display">Tiradas de Diagnóstico (Power Run)</div>
                    <div className="text-xs text-neutral-400 mt-0.5">Medición de línea base de potencia para conocer el estado mecánico real antes de modificar.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-white uppercase font-display">Simulación de Carga Real</div>
                    <div className="text-xs text-neutral-400 mt-0.5">Freno parásito para simular subidas o aceleraciones continuadas sin poner en riesgo el vehículo en la calle.</div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Gauge className="w-5 h-5 text-red-500 mt-1 shrink-0" />
                  <div>
                    <div className="text-sm font-bold text-white uppercase font-display">Informe de Rendimiento Impreso</div>
                    <div className="text-xs text-neutral-400 mt-0.5">Entrega de gráfica oficial ZRPM con comparativa antes/después de la calibración.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-surface-border shadow-2xl">
              <Image
                src="/images/hero/workshop-dyno.jpg"
                alt="Banco Dinamómetro ZRPM"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                <div className="text-xs font-mono text-neutral-300 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded border border-white/10">
                  📍 Taller ZRPM Racing Engine — Victoria 8766, La Cisterna
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mantenciones Section */}
      <section id="mantenciones" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-red-500 uppercase font-semibold">
              Servicio Preventivo & Competición
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight text-white mt-2">
              Mantenciones de Taller Especializadas
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-sans">
              Mantener un motor de alta cilindrada o sobrealimentado exige lubricantes de alta resistencia al cizallamiento térmico y componentes verificados.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl bg-surface border border-surface-border">
              <Wrench className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-base font-bold font-display uppercase text-white">Fluidos de Competición</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Cambio de aceite de motor sintético Royal Purple, Motul 300V y filtros de aceite de alto caudal Ford Performance / K&N.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-surface-border">
              <Zap className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-base font-bold font-display uppercase text-white">Bujías Iridium Grado Frío</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Inspección, calibración de gap milimétrico e instalación de bujías NGK Iridium IX para evitar detonación en motores con boost.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-surface-border">
              <ShieldCheck className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-base font-bold font-display uppercase text-white">Líquido de Frenos Racing</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Purga computarizada y reemplazo de líquido de frenos Brembo HTC 64T / Motul RBF 660 para frenadas consistentes sin fatiga.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-surface-border">
              <Gauge className="w-8 h-8 text-red-500 mb-4" />
              <h3 className="text-base font-bold font-display uppercase text-white">Transmisión & Diferencial</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Mantenimiento de cajas manuales Tremec, automáticas de 8/10 velocidades y diferenciales con aditivo anti-fricción para LSD.
              </p>
            </div>
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-red-950/40 via-surface to-surface border border-red-600/30 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold font-display text-white uppercase">¿Quieres agendar mantención o diagnóstico?</h3>
              <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                Atendemos en Victoria 8766, La Cisterna. Coordinamos fecha y hora para que esperes tu auto o lo dejes en taller.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <Link
                href="/contacto"
                className="px-6 py-3 rounded-lg bg-red-600 hover:bg-red-700 text-white text-xs font-display font-bold uppercase tracking-wider transition-colors"
              >
                Agendar Visita
              </Link>
              <a
                href={whatsappMantencionLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-surface-muted hover:bg-surface border border-surface-border text-white text-xs font-display font-semibold transition-colors"
              >
                WhatsApp Directo
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}