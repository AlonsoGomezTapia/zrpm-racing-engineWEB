"use client";

import Link from "next/link";
import Image from "next/image";
import { useGarageStore } from "@/store/useGarageStore";
import {
  X,
  Car,
  ShoppingBag,
  Gauge,
  Wrench,
  PlaneTakeoff,
  MapPin,
  Phone,
  ChevronRight,
} from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const NAV_LINKS = [
  { href: "/catalogo", label: "Tienda & Repuestos", icon: ShoppingBag },
  { href: "/vehiculos", label: "Vehicle Finder", icon: Car },
  { href: "/servicios", label: "Reprogramaciones & Stages", icon: Gauge },
  { href: "/servicios#mantenciones", label: "Mantenciones de Taller", icon: Wrench },
  { href: "/importaciones", label: "Importación Directa USA", icon: PlaneTakeoff },
  { href: "/contacto", label: "Taller & Ubicación", icon: MapPin },
];

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { selectedVehicle, openModal } = useGarageStore();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 left-0 max-w-full flex pr-10">
        <div className="w-screen max-w-xs bg-surface border-r border-surface-border flex flex-col shadow-2xl">
          {/* Header with ZRPM Logo */}
          <div className="p-4 border-b border-surface-border flex items-center justify-between bg-surface-100">
            <Link href="/" onClick={onClose} className="relative block w-32 h-9">
              <Image
                src="/images/logo/zrpm-logo.png"
                alt="ZRPM Racing Engine"
                fill
                priority
                className="object-contain object-left"
              />
            </Link>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-motorsport-steel hover:text-white hover:bg-surface-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Garage Vehicle Banner in Mobile Menu */}
          <div className="p-4 border-b border-surface-border bg-surface-200">
            <button
              onClick={() => {
                onClose();
                openModal();
              }}
              className="w-full p-3 rounded-xl border border-surface-border bg-surface-100 hover:border-motorsport-red text-left transition-all flex items-center justify-between"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-motorsport-red/10 border border-motorsport-red/30 flex items-center justify-center text-motorsport-red shrink-0">
                  <Car className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] text-motorsport-red font-mono uppercase font-semibold">
                    Garaje Activo
                  </div>
                  <div className="text-xs font-bold text-white truncate">
                    {selectedVehicle
                      ? `${selectedVehicle.make.name} ${selectedVehicle.model.name}`
                      : "Vincular mi auto"}
                  </div>
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-motorsport-steel shrink-0" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto p-4 space-y-1">
            {NAV_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-medium text-motorsport-steel hover:text-white hover:bg-surface-muted transition-colors group"
                >
                  <Icon className="w-4 h-4 text-motorsport-red group-hover:scale-110 transition-transform" />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Footer with Address and WhatsApp */}
          <div className="p-4 border-t border-surface-border bg-surface-100 space-y-3">
            <div className="text-[11px] text-motorsport-steel space-y-1">
              <div className="font-bold text-white">ZRPM Racing Engine</div>
              <div>Victoria 8766, La Cisterna, Santiago</div>
              <div>Lun – Vie: 10:00 – 19:00 hrs</div>
            </div>

            <Link
              href="https://wa.me/56990550474?text=Hola%20ZRPM,%20necesito%20consultar%20por%20servicios%20o%20repuestos"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              WhatsApp Taller
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
