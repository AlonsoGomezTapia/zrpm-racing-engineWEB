import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  PlaneTakeoff,
  ShieldCheck,
  PackageCheck,
  CheckCircle2,
  Clock,
  MapPin,
  MessageSquare,
  HelpCircle,
  Truck,
  FileCheck,
  Calculator,
} from "lucide-react";
import { BRANDS } from "@/lib/data/brands";
import { createWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Importación Directa de Repuestos USA | ZRPM Racing Engine Chile",
  description:
    "Traemos a pedido componentes de competición desde Estados Unidos: Roush, Whipple, Hellion, Steeda, Brembo, JLT y más. Nacionalización completa y entrega en Victoria 8766, La Cisterna.",
  openGraph: {
    title: "Importación Directa de Repuestos USA | ZRPM Racing Engine",
    description:
      "Kits de inducción, sobrealimentación y piezas forjadas traídas directamente desde USA con asesoría técnica y despacho a todo Chile.",
    url: "https://zrpm.cl/importaciones",
    siteName: "ZRPM Racing Engine",
    locale: "es_CL",
    type: "website",
    images: ["/images/cars/mustang-biturbo.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Importación Directa de Repuestos USA | ZRPM Racing Engine",
    description:
      "Piezas originales y de alto rendimiento traídas de Estados Unidos con garantía y soporte de instalación en taller La Cisterna.",
    images: ["/images/cars/mustang-biturbo.jpg"],
  },
  alternates: {
    canonical: "https://zrpm.cl/importaciones",
  },
};

export default function ImportacionesPage() {
  const whatsappImportLink = createWhatsAppLink(
    "Hola ZRPM Racing Engine! Necesito cotizar la importación de una pieza / kit de rendimiento desde USA."
  );

  return (
    <main className="min-h-screen bg-[#08080A] text-neutral-100 pb-24">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 overflow-hidden border-b border-surface-border">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cars/mustang-biturbo.jpg"
            alt="Proyectos de Importación ZRPM"
            fill
            priority
            className="object-cover object-center opacity-20 filter brightness-50 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080A] via-[#08080A]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/10 border border-red-500/30 text-red-400 text-xs font-mono tracking-widest uppercase mb-6">
            <PlaneTakeoff className="w-3.5 h-3.5 text-red-500" />
            Servicio de Importación & Gestión Aduanera
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight text-white uppercase max-w-4xl mx-auto leading-tight">
            Importación Directa <span className="text-red-600">USA</span> a Chile
          </h1>

          <p className="mt-6 text-base sm:text-lg text-neutral-300 max-w-3xl mx-auto font-sans leading-relaxed">
            Traemos los componentes más exclusivos del mercado norteamericano para tu Ford Mustang, F-150, Chevrolet Camaro, Corvette o Dodge. Gestionamos flete internacional, internación aduanera y entrega garantizada en nuestro taller o en la puerta de tu casa.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappImportLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-red-600 hover:bg-red-700 text-white font-display font-bold uppercase tracking-wider text-sm shadow-lg shadow-red-600/20 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
              Cotizar Pieza Especial por WhatsApp
            </a>
            <Link
              href="/catalogo"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-surface-100 hover:bg-surface-muted border border-surface-border hover:border-red-600/50 text-white font-display font-semibold text-sm transition-all"
            >
              Ver Catálogo Disponible
            </Link>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-20 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-red-500 uppercase font-semibold">
              Alianzas & Proveedores
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight text-white mt-2">
              Marcas Líderes en Competición
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-sans">
              Trabajamos con las fábricas y distribuidores oficiales más reconocidos del automovilismo estadounidense.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
            {BRANDS.map((brand) => (
              <div
                key={brand.id}
                className="p-6 rounded-xl bg-surface border border-surface-border hover:border-red-600/50 transition-all text-center flex flex-col items-center justify-center group"
              >
                <div className="text-lg sm:text-xl font-bold font-display text-white group-hover:text-red-500 transition-colors uppercase">
                  {brand.name}
                </div>
                <div className="text-xs font-mono text-neutral-400 mt-1">
                  Origen: {brand.country}
                </div>
                {brand.isPopular && (
                  <span className="mt-3 px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-red-600/10 text-red-400 border border-red-500/20">
                    Línea Oficial
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4 Steps Section */}
      <section className="py-20 bg-surface-100/50 border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono tracking-widest text-red-500 uppercase font-semibold">
              Proceso Transparente
            </span>
            <h2 className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight text-white mt-2">
              ¿Cómo Funciona la Importación en ZRPM?
            </h2>
            <p className="text-neutral-400 text-sm sm:text-base mt-4 font-sans">
              Cero dolores de cabeza con aduanas o retenciones. Nosotros nos encargamos de todo el proceso legal y logístico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-xl bg-surface border border-surface-border relative">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-500/30 text-red-500 flex items-center justify-center font-display font-black text-lg mb-4">
                01
              </div>
              <h3 className="text-base font-bold font-display uppercase text-white">Asesoría Técnica</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Revisamos el número de parte o el objetivo que buscas para tu auto. Confirmamos compatibilidad con tu motor y chasis antes de ordenar.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-surface-border relative">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-500/30 text-red-500 flex items-center justify-center font-display font-black text-lg mb-4">
                02
              </div>
              <h3 className="text-base font-bold font-display uppercase text-white">Presupuesto en CLP</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Cotización formal en pesos chilenos con todo incluido: costo de la pieza en USA, flete internacional, aranceles aduaneros e IVA.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-surface-border relative">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-500/30 text-red-500 flex items-center justify-center font-display font-black text-lg mb-4">
                03
              </div>
              <h3 className="text-base font-bold font-display uppercase text-white">Tránsito & Seguimiento</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Coordinación aérea semanal desde bodegas en Miami / Texas. Te mantenemos informado del estado de tu embarque.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-surface border border-surface-border relative">
              <div className="w-10 h-10 rounded-lg bg-red-600/10 border border-red-500/30 text-red-500 flex items-center justify-center font-display font-black text-lg mb-4">
                04
              </div>
              <h3 className="text-base font-bold font-display uppercase text-white">Entrega o Montaje</h3>
              <p className="text-xs text-neutral-400 mt-2 leading-relaxed">
                Puedes retirar presencialmente o agendar montaje en nuestro taller en Victoria 8766, La Cisterna, o solicitar envío a regiones vía Starken / Chilexpress.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="p-10 rounded-3xl bg-gradient-to-b from-surface-100 to-surface border border-surface-border shadow-2xl">
            <PlaneTakeoff className="w-12 h-12 text-red-500 mx-auto mb-4" />
            <h2 className="text-2xl sm:text-4xl font-black font-display uppercase tracking-tight text-white">
              ¿Buscas una pieza específica que no está en catálogo?
            </h2>
            <p className="mt-4 text-sm text-neutral-400 max-w-xl mx-auto font-sans leading-relaxed">
              Escríbenos por WhatsApp con el modelo de tu vehículo, año y la pieza o marca que necesitas. Te respondemos con cotización puesta en Chile.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={whatsappImportLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-display font-bold uppercase tracking-wider text-sm shadow-xl shadow-red-600/30 transition-all inline-flex items-center gap-3"
              >
                <MessageSquare className="w-5 h-5 text-green-400" />
                Cotizar Importación por WhatsApp (+56 9 9055 0474)
              </a>
            </div>

            <div className="mt-6 flex items-center justify-center gap-6 text-xs font-mono text-neutral-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-red-500" /> 100% Repuestos Originales
              </span>
              <span className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-red-500" /> Despacho a Todo Chile
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}