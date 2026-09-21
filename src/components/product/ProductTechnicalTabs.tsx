"use client";

import React, { useState } from "react";
import { Wrench, FileText, Gauge, Truck } from "lucide-react";
import { Product } from "@/types";

interface ProductTechnicalTabsProps {
  product: Product;
}

export function ProductTechnicalTabs({ product }: ProductTechnicalTabsProps) {
  const [activeTab, setActiveTab] = useState<"specs" | "desc" | "workshop" | "shipping">(
    "specs"
  );

  const specsList = Object.entries(product.specifications || {});

  return (
    <div className="mt-12 rounded-2xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm overflow-hidden">
      {/* Tabs Header */}
      <div className="flex border-b border-neutral-800 overflow-x-auto scrollbar-none bg-neutral-950/60">
        <button
          type="button"
          onClick={() => setActiveTab("specs")}
          className={`flex items-center gap-2 px-5 py-4 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-colors whitespace-nowrap border-b-2 ${
            activeTab === "specs"
              ? "border-red-600 text-red-500 bg-red-950/20"
              : "border-transparent text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50"
          }`}
        >
          <Gauge className="w-4 h-4" />
          <span>Especificaciones Técnicas</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("desc")}
          className={`flex items-center gap-2 px-5 py-4 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-colors whitespace-nowrap border-b-2 ${
            activeTab === "desc"
              ? "border-red-600 text-red-500 bg-red-950/20"
              : "border-transparent text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50"
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Descripción de Ingeniería</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("workshop")}
          className={`flex items-center gap-2 px-5 py-4 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-colors whitespace-nowrap border-b-2 ${
            activeTab === "workshop"
              ? "border-red-600 text-red-500 bg-red-950/20"
              : "border-transparent text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50"
          }`}
        >
          <Wrench className="w-4 h-4" />
          <span>Instalación & Dinamómetro</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("shipping")}
          className={`flex items-center gap-2 px-5 py-4 text-xs sm:text-sm font-heading font-bold uppercase tracking-wider transition-colors whitespace-nowrap border-b-2 ${
            activeTab === "shipping"
              ? "border-red-600 text-red-500 bg-red-950/20"
              : "border-transparent text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/50"
          }`}
        >
          <Truck className="w-4 h-4" />
          <span>Despacho & Garantía</span>
        </button>
      </div>

      {/* Tab Body */}
      <div className="p-6 md:p-8">
        {/* Specifications Tab */}
        {activeTab === "specs" && (
          <div className="space-y-6">
            <h3 className="text-base font-heading font-bold uppercase tracking-wider text-white">
              Ficha Técnica de Fabricación & Performance
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/80 border border-neutral-800">
                <span className="text-neutral-400 font-mono text-xs uppercase">Fabricante</span>
                <span className="font-heading font-bold text-white">{product.brand.name}</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/80 border border-neutral-800">
                <span className="text-neutral-400 font-mono text-xs uppercase">Código SKU</span>
                <span className="font-mono text-red-400 font-bold">{product.sku}</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/80 border border-neutral-800">
                <span className="text-neutral-400 font-mono text-xs uppercase">Categoría</span>
                <span className="text-white font-medium">{product.category.name}</span>
              </div>

              <div className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/80 border border-neutral-800">
                <span className="text-neutral-400 font-mono text-xs uppercase">Disponibilidad</span>
                <span className="text-emerald-400 font-mono font-semibold">
                  {product.availability === "in_stock"
                    ? "Inmediata"
                    : `Importación (${product.estimatedDeliveryDays || 14} días)`}
                </span>
              </div>

              {specsList.map(([key, val]) => (
                <div
                  key={key}
                  className="flex items-center justify-between p-3 rounded-lg bg-neutral-900/80 border border-neutral-800"
                >
                  <span className="text-neutral-400 font-mono text-xs">{key}</span>
                  <span className="font-mono text-white text-right font-medium max-w-[60%]">
                    {val}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Description Tab */}
        {activeTab === "desc" && (
          <div className="space-y-4 max-w-4xl text-neutral-300 leading-relaxed">
            <h3 className="text-base font-heading font-bold uppercase tracking-wider text-white">
              Análisis y Desarrollo de Producto
            </h3>
            <p className="text-sm md:text-base">{product.description}</p>
            <p className="text-sm md:text-base text-neutral-400">
              En ZRPM Racing Engine seleccionamos únicamente piezas que han demostrado su eficiencia tanto en banco de pruebas como en condiciones de alta exigencia (pista de aceleración, circuitos y calle deportiva). Cada componente se somete a rigurosa inspección dimensional y de materiales antes de su entrega.
            </p>
          </div>
        )}

        {/* Workshop Tab */}
        {activeTab === "workshop" && (
          <div className="space-y-4 max-w-4xl text-neutral-300 text-sm md:text-base leading-relaxed">
            <h3 className="text-base font-heading font-bold uppercase tracking-wider text-white">
              Servicio de Instalación en ZRPM Racing Engine
            </h3>
            <p>
              Todos los componentes adquiridos en nuestro catálogo cuentan con la opción de ser instalados directamente por nuestro equipo de mecánicos e ingenieros especializados en nuestro taller central de Santiago:
            </p>
            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 font-mono text-xs space-y-1.5 text-neutral-300">
              <p>📍 <strong>Dirección:</strong> Victoria 8766, La Cisterna, Región Metropolitana</p>
              <p>⏱️ <strong>Horario:</strong> Lunes a Viernes de 09:00 a 19:00 hrs</p>
              <p>🔬 <strong>Equipamiento:</strong> Dinamómetro de chasis para medición de HP y torque antes/después de la modificación.</p>
            </div>
            <p className="text-neutral-400">
              * El valor de mano de obra e instalación se cotiza de forma independiente según la complejidad de la plataforma vehicular. Coordina tu turno de taller por WhatsApp indicando tu número de pedido o SKU.
            </p>
          </div>
        )}

        {/* Shipping Tab */}
        {activeTab === "shipping" && (
          <div className="space-y-4 max-w-4xl text-neutral-300 text-sm md:text-base leading-relaxed">
            <h3 className="text-base font-heading font-bold uppercase tracking-wider text-white">
              Logística de Despacho y Cobertura Nacional
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                <h4 className="font-heading font-bold text-white uppercase text-xs tracking-wider mb-2 text-red-400">
                  Despachos a Regiones (Chile Continental)
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Envíos diarios por pagar o pagados vía Starken, Chilexpress o Pullman Cargo. Embalaje reforzado para proteger componentes mecánicos y electrónicos de alta gama. Plazo habitual de tránsito: 24 a 72 horas hábiles.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800">
                <h4 className="font-heading font-bold text-white uppercase text-xs tracking-wider mb-2 text-red-400">
                  Retiro Presencial en Santiago
                </h4>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Puedes retirar sin costo adicional en nuestras instalaciones de Victoria 8766, La Cisterna, previa confirmación de preparación de pedido por parte de nuestro equipo.
                </p>
              </div>
            </div>
            <p className="text-xs text-neutral-400">
              Todos los productos cuentan con garantía legal chilena de 6 meses ante defectos de manufactura y respaldo directo de las marcas oficiales representadas.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
