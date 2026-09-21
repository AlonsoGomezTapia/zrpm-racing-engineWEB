"use client";

import React from "react";
import { MapPin, Phone, Clock, Mail, ExternalLink, Navigation } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { createWhatsAppLink } from "@/lib/utils";

export function ContactInfoCards() {
  const whatsappUrl = createWhatsAppLink(
    "Hola equipo ZRPM Racing Engine, quisiera coordinar una visita técnica / consultar por servicios en el taller de La Cisterna."
  );

  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Victoria+8766,+La+Cisterna,+Region+Metropolitana,+Chile";
  const wazeUrl =
    "https://waze.com/ul?q=Victoria%208766%20La%20Cisterna%20Santiago";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      {/* Card 1: Dirección */}
      <div className="p-5 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 rounded-xl bg-red-950/60 border border-red-500/40 text-red-500 flex items-center justify-center mb-3">
            <MapPin className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono text-red-400 uppercase tracking-wider font-bold">
            Taller Principal
          </span>
          <h3 className="font-heading font-bold text-white text-base mt-1">
            Victoria 8766
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            La Cisterna, Región Metropolitana, Santiago de Chile.
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center gap-2">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-[11px] font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-colors"
          >
            <span>Google Maps</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={wazeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 px-2.5 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-[11px] font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-1 transition-colors"
            title="Navegar con Waze"
          >
            <Navigation className="w-3 h-3 text-cyan-400" />
            <span>Waze</span>
          </a>
        </div>
      </div>

      {/* Card 2: WhatsApp */}
      <div className="p-5 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-3">
            <WhatsAppIcon className="w-5 h-5 fill-current" />
          </div>
          <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
            Atención Rápida
          </span>
          <h3 className="font-heading font-bold text-white text-base mt-1">
            +56 9 9055 0474
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Consultas técnicas, cotizaciones y confirmación de turnos.
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-neutral-800/80">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-md shadow-emerald-950/40"
          >
            <WhatsAppIcon className="w-3.5 h-3.5 fill-current" />
            <span>Chatear por WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Card 3: Horarios */}
      <div className="p-5 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 rounded-xl bg-amber-950/60 border border-amber-500/40 text-amber-400 flex items-center justify-center mb-3">
            <Clock className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider font-bold">
            Horario Taller
          </span>
          <h3 className="font-heading font-bold text-white text-base mt-1">
            Lun a Vie: 09:00 – 19:00
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Sábados: Agendamiento previo para banco dinamómetro.
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-neutral-800/80 text-[11px] font-mono text-neutral-500 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Atención presencial en horario de taller</span>
        </div>
      </div>

      {/* Card 4: Correo */}
      <div className="p-5 rounded-2xl bg-neutral-900/70 border border-neutral-800 hover:border-neutral-700 transition-all flex flex-col justify-between">
        <div>
          <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/40 text-cyan-400 flex items-center justify-center mb-3">
            <Mail className="w-5 h-5" />
          </div>
          <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider font-bold">
            Cotizaciones & Empresas
          </span>
          <h3 className="font-heading font-bold text-white text-base mt-1 truncate">
            contacto@zrpm.cl
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Cotizaciones formales, facturas y pedidos de importación.
          </p>
        </div>

        <div className="mt-4 pt-3 border-t border-neutral-800/80">
          <a
            href="mailto:contacto@zrpm.cl"
            className="w-full py-2 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-[11px] font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Enviar Correo</span>
          </a>
        </div>
      </div>
    </div>
  );
}
