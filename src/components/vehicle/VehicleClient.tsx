"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Home, ChevronRight, Car, Sparkles, SlidersHorizontal } from "lucide-react";
import { VehicleGarageBanner } from "./VehicleGarageBanner";
import { VehicleSelectorWizard } from "./VehicleSelectorWizard";
import { PlatformDirectory } from "./PlatformDirectory";

export function VehicleClient() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-red-600 border-t-transparent rounded-full animate-spin" />
          <span className="text-xs font-mono text-neutral-400">Cargando Garage Virtual...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      {/* Breadcrumb Navigation */}
      <nav
        aria-label="Breadcrumb"
        className="flex items-center space-x-2 text-xs text-neutral-400 mb-6"
      >
        <Link href="/" className="flex items-center hover:text-white transition-colors text-neutral-500">
          <Home className="w-3.5 h-3.5 mr-1" />
          <span>Inicio</span>
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-neutral-600" />
        <span className="text-white font-medium">Buscador por Vehículo</span>
      </nav>

      {/* Page Header */}
      <div className="pb-8 mb-8 border-b border-neutral-800">
        <div className="flex items-center gap-2 text-xs font-mono text-red-500 uppercase tracking-widest mb-1.5">
          <Car className="w-4 h-4" />
          <span>Garaje Virtual & Compatibilidad</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black tracking-tight text-white uppercase">
          Encuentra Piezas Para Tu Auto
        </h1>
        <p className="text-sm sm:text-base text-neutral-400 max-w-3xl mt-2 leading-relaxed">
          Configura tu plataforma en el garaje virtual de ZRPM. Garantizamos que cada producto seleccionado sea 100% compatible con la arquitectura de tu motor, chasis y sistema de sobrealimentación.
        </p>
      </div>

      {/* Active Garage Vehicle Banner (if set) */}
      <VehicleGarageBanner />

      {/* Guided 3-Step Wizard */}
      <VehicleSelectorWizard />

      {/* Visual Platform Directory */}
      <PlatformDirectory />
    </div>
  );
}
