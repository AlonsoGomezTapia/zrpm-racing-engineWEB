import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldAlert,
  CreditCard,
  Truck,
  Wrench,
} from "lucide-react";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "@/components/ui/Icons";

export function Footer() {
  return (
    <footer className="bg-[#050507] border-t border-surface-border text-motorsport-steel text-sm select-none">
      {/* Upper Footer: Value Props */}
      <div className="border-b border-surface-border/60 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-surface border border-surface-border text-motorsport-red shrink-0">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider">
                Ingeniería & Dyno Tuning
              </h4>
              <p className="text-xs text-motorsport-steel mt-1">
                Reprogramaciones electrónicas a medida con verificación de potencia en banco.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-surface border border-surface-border text-motorsport-red shrink-0">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider">
                Envíos a Todo Chile
              </h4>
              <p className="text-xs text-motorsport-steel mt-1">
                Despachos rápidos por Starken, Chilexpress o retiro directo en nuestro taller.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-surface border border-surface-border text-motorsport-red shrink-0">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider">
                Pago Seguro Transbank
              </h4>
              <p className="text-xs text-motorsport-steel mt-1">
                Aceptamos tarjetas de débito, crédito en cuotas y transferencias bancarias directas.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="p-2.5 rounded-lg bg-surface border border-surface-border text-motorsport-red shrink-0">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider">
                Importación Directa USA
              </h4>
              <p className="text-xs text-motorsport-steel mt-1">
                Traemos kits Roush, Whipple, JLT, Brembo y repuestos especiales bajo encargo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info & Mission */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="relative block w-52 h-14">
              <Image
                src="/images/logo/zrpm-logo.png"
                alt="ZRPM Racing Engine"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-xs leading-relaxed text-motorsport-steel max-w-sm">
              Taller y tienda especializada en performance automotriz, upgrades mecánicos, sobrealimentación, inducciones y reprogramación de software de alta gama para vehículos deportivos y de competición en Chile.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="https://www.instagram.com/zrpm_racing_engines/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface hover:bg-surface-muted border border-surface-border text-motorsport-steel hover:text-white transition-colors"
                aria-label="Instagram de ZRPM Racing Engines"
              >
                <InstagramIcon className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.facebook.com/p/ZRPM-100063803010310/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface hover:bg-surface-muted border border-surface-border text-motorsport-steel hover:text-white transition-colors"
                aria-label="Facebook de ZRPM Racing Engines"
              >
                <FacebookIcon className="w-4 h-4" />
              </Link>
              <Link
                href="https://wa.me/56990550474"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface hover:bg-surface-muted border border-surface-border text-emerald-400 hover:text-emerald-300 transition-colors"
                aria-label="WhatsApp ZRPM"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Col 2: Tienda & Plataformas */}
          <div>
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-surface-border pb-2">
              Plataformas
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/catalogo?make=ford" className="hover:text-motorsport-red transition-colors">
                  Ford Mustang GT & Mach 1
                </Link>
              </li>
              <li>
                <Link href="/catalogo?make=chevrolet" className="hover:text-motorsport-red transition-colors">
                  Chevrolet Camaro SS & V6
                </Link>
              </li>
              <li>
                <Link href="/catalogo?make=chevrolet" className="hover:text-motorsport-red transition-colors">
                  Chevrolet Corvette C7 Stingray
                </Link>
              </li>
              <li>
                <Link href="/catalogo?make=dodge" className="hover:text-motorsport-red transition-colors">
                  Dodge Challenger SRT & ScatPack
                </Link>
              </li>
              <li>
                <Link href="/catalogo?make=dodge" className="hover:text-motorsport-red transition-colors">
                  Dodge Charger HEMI
                </Link>
              </li>
              <li>
                <Link href="/catalogo?make=jeep" className="hover:text-motorsport-red transition-colors">
                  Jeep Grand Cherokee SRT
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Servicios & Taller */}
          <div>
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-surface-border pb-2">
              Servicios
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/servicios" className="hover:text-motorsport-red transition-colors">
                  Reprogramaciones Stage 1, 2 y 3
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-motorsport-red transition-colors">
                  Pruebas en Dinamómetro
                </Link>
              </li>
              <li>
                <Link href="/servicios#mantenciones" className="hover:text-motorsport-red transition-colors">
                  Mantención Preventiva por KM
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-motorsport-red transition-colors">
                  Instalación de Superchargers
                </Link>
              </li>
              <li>
                <Link href="/importaciones" className="hover:text-motorsport-red transition-colors">
                  Cotizador de Importaciones USA
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-motorsport-red transition-colors">
                  Diagnóstico Electrónico
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Taller Físico */}
          <div>
            <h4 className="font-heading font-bold text-white text-xs uppercase tracking-wider mb-4 border-b border-surface-border pb-2">
              Taller Central
            </h4>
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-motorsport-red shrink-0 mt-0.5" />
                <span>Victoria 8766, La Cisterna, Santiago, Chile</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-motorsport-red shrink-0" />
                <span>+569 90550474</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-motorsport-red shrink-0" />
                <span className="truncate">contactalapotencia@zrpm.cl</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-motorsport-red shrink-0 mt-0.5" />
                <span>Lunes a Viernes: 10:00 a 19:00 hrs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-surface-border/60 py-5 px-4 sm:px-6 lg:px-8 bg-[#030304]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-motorsport-steel/70">
          <div>
            © {new Date().getFullYear()} ZRPM Racing Engine. Todos los derechos reservados.
          </div>
          <div className="flex items-center gap-4 text-[11px] font-mono">
            <span>Santiago, Chile</span>
            <span>•</span>
            <span className="text-white">Motorsport Engineering</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
