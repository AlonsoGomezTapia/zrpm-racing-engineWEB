import Link from "next/link";
import {
  MapPin,
  Clock,
  Phone,
  Mail,
  ShieldCheck,
  Gauge,
  Wrench,
  Navigation,
} from "lucide-react";

export function WorkshopTrust() {
  return (
    <section className="py-20 bg-background border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Workshop credentials */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-mono font-bold tracking-widest text-motorsport-red uppercase mb-2">
                TALLER ESPECIALIZADO EN SANTIAGO DE CHILE
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-white tracking-tight uppercase leading-tight">
                MÁS QUE UNA TIENDA: <br />
                INGENIERÍA MECÁNICA REAL
              </h2>
            </div>

            <p className="text-motorsport-steel text-sm sm:text-base leading-relaxed font-sans">
              En ZRPM no solo comercializamos partes de performance: las instalamos, las ponemos a prueba y las calibramos en nuestro dinamómetro de rodillos en La Cisterna. Contamos con instrumental especializado para bloques V8 americanos, turboalimentados y vehículos de competición.
            </p>

            {/* Feature Bullets */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-surface-100 border border-surface-border text-motorsport-red shrink-0">
                  <Gauge className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-white uppercase">
                    Banco Dinamómetro de Precisión
                  </h4>
                  <p className="text-xs text-motorsport-steel mt-0.5">
                    Medición fidedigna de potencia a las ruedas (WHP), torque y monitoreo de mezcla estequiométrica (AFR) en tiempo real.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-surface-100 border border-surface-border text-motorsport-red shrink-0">
                  <Wrench className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-white uppercase">
                    Mecánica de Precisión & Mantenciones
                  </h4>
                  <p className="text-xs text-motorsport-steel mt-0.5">
                    Cambio de aceites sintéticos de alta gama, bujías frías, bombas de aceite reforzadas y kits de distribución para motores de alto caballaje.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-surface-100 border border-surface-border text-motorsport-red shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-heading font-bold text-white uppercase">
                    Garantía y Asistencia Post-Tuning
                  </h4>
                  <p className="text-xs text-motorsport-steel mt-0.5">
                    Respaldamos cada trabajo realizado con soporte técnico directo y diagnóstico computarizado especializado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Workshop Location & Contact Card */}
          <div className="lg:col-span-6 bg-surface rounded-3xl border border-surface-border p-8 sm:p-10 shadow-motorsport-card">
            <h3 className="text-xl font-heading font-black text-white uppercase tracking-wide mb-6 pb-4 border-b border-surface-border">
              Visítanos en Nuestro Taller
            </h3>

            <div className="space-y-4 text-xs font-mono mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-motorsport-red shrink-0 mt-1" />
                <div>
                  <span className="text-white font-bold block text-sm">Dirección Taller:</span>
                  <span className="text-motorsport-steel">Victoria 8766, La Cisterna, Región Metropolitana, Chile</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-motorsport-red shrink-0 mt-1" />
                <div>
                  <span className="text-white font-bold block text-sm">Horario de Atención:</span>
                  <span className="text-motorsport-steel">Lunes a Viernes: 10:00 a 19:00 hrs</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                <div>
                  <span className="text-white font-bold block text-sm">Línea Directa / WhatsApp:</span>
                  <span className="text-motorsport-steel">+569 90550474</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-motorsport-red shrink-0 mt-1" />
                <div>
                  <span className="text-white font-bold block text-sm">Correo Técnico:</span>
                  <span className="text-motorsport-steel">contactalapotencia@zrpm.cl</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <Link
                href="https://maps.google.com/?q=Victoria+8766,+La+Cisterna,+Chile"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl border border-surface-border hover:border-motorsport-steel bg-surface-100 hover:bg-surface-muted text-white text-xs font-heading font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4 text-motorsport-red" />
                <span>Cómo Llegar (Maps)</span>
              </Link>

              <Link
                href="https://wa.me/56990550474?text=Hola%20ZRPM,%20deseo%20visitar%20el%20taller%20o%20agendar%20un%20servicio"
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-heading font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2 shadow-motorsport-glow"
              >
                <Phone className="w-4 h-4" />
                <span>Contactar Taller</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
