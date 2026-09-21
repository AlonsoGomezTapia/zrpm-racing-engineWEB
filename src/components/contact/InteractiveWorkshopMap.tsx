import React from "react";
import { MapPin, Navigation, ExternalLink, Compass } from "lucide-react";

export function InteractiveWorkshopMap() {
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Victoria+8766,+La+Cisterna,+Region+Metropolitana,+Chile";
  const wazeUrl =
    "https://waze.com/ul?q=Victoria%208766%20La%20Cisterna%20Santiago";

  // Google Maps embed query for Victoria 8766, La Cisterna
  const embedUrl =
    "https://maps.google.com/maps?q=Victoria%208766,%20La%20Cisterna,%20Santiago,%20Chile&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 sm:p-8 backdrop-blur-md flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between gap-2 mb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-red-500 uppercase tracking-widest mb-1">
              <Compass className="w-4 h-4" />
              <span>Cómo Llegar al Taller</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-black text-white uppercase">
              Ubicación en La Cisterna
            </h2>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <span>Maps</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href={wazeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-2 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 transition-colors"
            >
              <Navigation className="w-3.5 h-3.5 text-cyan-400" />
              <span>Waze</span>
            </a>
          </div>
        </div>

        {/* Embedded Responsive Map */}
        <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950">
          <iframe
            src={embedUrl}
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa del Taller ZRPM Racing Engine en Victoria 8766, La Cisterna"
          />
        </div>

        {/* Travel instructions */}
        <div className="mt-4 space-y-2 text-xs text-neutral-300">
          <div className="flex items-start gap-2">
            <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <p>
              <strong>Dirección:</strong> Victoria 8766, comuna de La Cisterna, Santiago.
            </p>
          </div>
          <p className="text-neutral-400 text-[11px] leading-relaxed pl-6">
            Fácil conectividad desde <strong>Autopista Vespucio Sur (Salida Gran Avenida)</strong> y Autopista Central. Contamos con estacionamiento cerrado para recepción de vehículos en remolque o rodando.
          </p>
        </div>
      </div>

      {/* Mobile Action Buttons */}
      <div className="sm:hidden grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-neutral-800">
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-1.5"
        >
          <span>Google Maps</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
        <a
          href={wazeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-3 rounded-lg bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-1.5"
        >
          <Navigation className="w-3.5 h-3.5 text-cyan-400" />
          <span>Waze</span>
        </a>
      </div>
    </div>
  );
}
