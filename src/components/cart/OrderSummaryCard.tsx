"use client";

import React, { useState } from "react";
import {
  ShieldCheck,
  Truck,
  MapPin,
  Wrench,
  FileText,
  Car,
  Check,
} from "lucide-react";
import { CartItem } from "@/types";
import { formatCLP, createWhatsAppLink } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { useGarageStore } from "@/store/useGarageStore";
import { QuotationModal } from "./QuotationModal";

interface OrderSummaryCardProps {
  items: CartItem[];
  subtotalCLP: number;
}

export function OrderSummaryCard({ items, subtotalCLP }: OrderSummaryCardProps) {
  const [deliveryMethod, setDeliveryMethod] = useState<"pickup" | "dispatch">("pickup");
  const [wantsInstallation, setWantsInstallation] = useState(false);
  const [vehicleNotes, setVehicleNotes] = useState("");
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const { selectedVehicle, openModal } = useGarageStore();

  const netAmount = Math.round(subtotalCLP / 1.19);
  const ivaAmount = subtotalCLP - netAmount;

  const deliveryText =
    deliveryMethod === "pickup"
      ? "Retiro en Taller ZRPM (Victoria 8766, La Cisterna) - Sin costo"
      : "Despacho Express Starken / Chilexpress (Por pagar en destino)";

  const vehicleText = selectedVehicle
    ? `${selectedVehicle.make.name} ${selectedVehicle.model.name} (${selectedVehicle.generation.code || selectedVehicle.year}) - ${selectedVehicle.generation.engine}`
    : vehicleNotes || "No especificado";

  // Build formatted WhatsApp order message
  const whatsappMessage = `*PEDIDO / COTIZACIÓN ZRPM RACING ENGINE*
----------------------------------------
*Productos Seleccionados:*
${items
  .map(
    ({ product, quantity }) =>
      `• [${quantity}x] ${product.name} (SKU: ${product.sku}) - ${formatCLP(
        product.priceCLP * quantity
      )}`
  )
  .join("\n")}
----------------------------------------
*Subtotal:* ${formatCLP(subtotalCLP)} (IVA incluido)
*Método de Entrega:* ${deliveryText}
*Vehículo del Cliente:* ${vehicleText}
*Instalación en Taller:* ${
    wantsInstallation
      ? "SÍ, deseo cotizar instalación y calibración en dinamómetro"
      : "Solo compra de repuestos"
  }
----------------------------------------
Hola ZRPM Racing Engine, me gustaría coordinar la disponibilidad, pago y entrega de este pedido.`;

  const whatsappUrl = createWhatsAppLink(whatsappMessage);

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 backdrop-blur-md p-5 sm:p-6 space-y-6 sticky top-24">
      {/* Title */}
      <div className="pb-3 border-b border-neutral-800">
        <h2 className="text-base font-heading font-black uppercase tracking-wider text-white">
          Resumen de tu Pedido
        </h2>
        <p className="text-xs text-neutral-400 mt-0.5">
          {items.reduce((sum, item) => sum + item.quantity, 0)} artículos en tu carro
        </p>
      </div>

      {/* Subtotal & IVA breakdown */}
      <div className="space-y-2 text-xs font-mono">
        <div className="flex justify-between text-neutral-400">
          <span>Subtotal Neto:</span>
          <span>{formatCLP(netAmount)}</span>
        </div>
        <div className="flex justify-between text-neutral-400">
          <span>IVA (19% Informativo):</span>
          <span>{formatCLP(ivaAmount)}</span>
        </div>
        <div className="pt-2 border-t border-neutral-800 flex justify-between items-baseline">
          <span className="text-sm font-heading font-bold uppercase text-white">
            Total Carro:
          </span>
          <span className="text-2xl font-mono font-black text-red-500">
            {formatCLP(subtotalCLP)}
          </span>
        </div>
        <p className="text-[10px] text-neutral-500 text-right">
          Precios válidos para Chile continental con IVA incluido
        </p>
      </div>

      {/* Delivery Method Options */}
      <div className="space-y-2 pt-2 border-t border-neutral-800">
        <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
          Método de Recepción / Entrega:
        </label>

        {/* Option 1: Pickup in Workshop */}
        <label
          onClick={() => setDeliveryMethod("pickup")}
          className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
            deliveryMethod === "pickup"
              ? "border-red-500 bg-red-950/20 text-white"
              : "border-neutral-800 hover:border-neutral-700 bg-neutral-950 text-neutral-400"
          }`}
        >
          <input
            type="radio"
            name="delivery"
            checked={deliveryMethod === "pickup"}
            onChange={() => setDeliveryMethod("pickup")}
            className="mt-0.5 text-red-600 focus:ring-red-500"
          />
          <div className="flex-1 text-xs">
            <div className="flex items-center justify-between font-bold">
              <span className="flex items-center gap-1.5 text-white">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                Retiro en Taller ZRPM
              </span>
              <span className="text-emerald-400 font-mono">GRATIS</span>
            </div>
            <p className="text-[11px] text-neutral-400 mt-0.5">
              Victoria 8766, La Cisterna (Lun-Vie 09:00 a 19:00)
            </p>
          </div>
        </label>

        {/* Option 2: Dispatch */}
        <label
          onClick={() => setDeliveryMethod("dispatch")}
          className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
            deliveryMethod === "dispatch"
              ? "border-red-500 bg-red-950/20 text-white"
              : "border-neutral-800 hover:border-neutral-700 bg-neutral-950 text-neutral-400"
          }`}
        >
          <input
            type="radio"
            name="delivery"
            checked={deliveryMethod === "dispatch"}
            onChange={() => setDeliveryMethod("dispatch")}
            className="mt-0.5 text-red-600 focus:ring-red-500"
          />
          <div className="flex-1 text-xs">
            <div className="flex items-center justify-between font-bold">
              <span className="flex items-center gap-1.5 text-white">
                <Truck className="w-3.5 h-3.5 text-red-500" />
                Despacho a Regiones / Santiago
              </span>
              <span className="text-neutral-400 font-mono">Por Pagar</span>
            </div>
            <p className="text-[11px] text-neutral-400 mt-0.5">
              Vía Starken o Chilexpress con número de seguimiento
            </p>
          </div>
        </label>
      </div>

      {/* Vehicle Compatibility Banner / Garage Link */}
      <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs">
        <div className="flex items-center justify-between gap-2 mb-1.5">
          <span className="flex items-center gap-1.5 font-bold text-white">
            <Car className="w-3.5 h-3.5 text-red-500" />
            Vehículo de Referencia
          </span>
          <button
            type="button"
            onClick={openModal}
            className="text-[11px] text-red-400 hover:text-red-300 underline font-mono"
          >
            {selectedVehicle ? "Cambiar" : "Seleccionar"}
          </button>
        </div>

        {selectedVehicle ? (
          <div className="bg-neutral-900 p-2 rounded border border-neutral-800">
            <p className="font-semibold text-white">
              {selectedVehicle.make.name} {selectedVehicle.model.name}
            </p>
            <p className="text-[11px] text-neutral-400 font-mono">
              {selectedVehicle.generation.engine} ({selectedVehicle.generation.code || selectedVehicle.year})
            </p>
          </div>
        ) : (
          <div>
            <p className="text-neutral-400 text-[11px] mb-2">
              Indica tu vehículo para que nuestro equipo técnico confirme compatibilidad antes del despacho.
            </p>
            <input
              type="text"
              placeholder="Ej: Mustang GT 2018 5.0L / Camaro SS 2017"
              value={vehicleNotes}
              onChange={(e) => setVehicleNotes(e.target.value)}
              className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-500"
            />
          </div>
        )}
      </div>

      {/* Workshop Installation Add-on Checkbox */}
      <label className="flex items-start gap-3 p-3 rounded-xl bg-neutral-950 border border-neutral-800 cursor-pointer hover:border-neutral-700 transition-colors">
        <input
          type="checkbox"
          checked={wantsInstallation}
          onChange={(e) => setWantsInstallation(e.target.checked)}
          className="mt-0.5 rounded text-red-600 focus:ring-red-500"
        />
        <div className="text-xs">
          <span className="flex items-center gap-1.5 font-bold text-white">
            <Wrench className="w-3.5 h-3.5 text-red-500" />
            ¿Deseas cotizar instalación en banco dinamómetro?
          </span>
          <p className="text-[11px] text-neutral-400 mt-0.5">
            Mano de obra, calibración electrónica y medición de potencia comprobada en taller ZRPM La Cisterna.
          </p>
        </div>
      </label>

      {/* Action Buttons */}
      <div className="space-y-3 pt-2">
        {/* Main WhatsApp CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-4 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-heading font-extrabold uppercase tracking-wider text-xs sm:text-sm flex items-center justify-center gap-2 shadow-xl shadow-red-950/60 hover:shadow-red-600/30 transition-all active:scale-[0.99]"
        >
          <WhatsAppIcon className="w-5 h-5 fill-current" />
          <span>Finalizar Pedido por WhatsApp</span>
        </a>

        {/* Secondary Formal Quote CTA */}
        <button
          type="button"
          onClick={() => setIsQuoteModalOpen(true)}
          className="w-full py-3 px-4 rounded-xl bg-neutral-950 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-800 hover:border-neutral-700 font-heading font-bold uppercase tracking-wider text-xs flex items-center justify-center gap-2 transition-colors"
        >
          <FileText className="w-4 h-4 text-red-500" />
          <span>Solicitar Cotización Formal (Email / Factura)</span>
        </button>
      </div>

      {/* Trust guarantees */}
      <div className="space-y-2 pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
          <span>Piezas genuinas importadas directamente de USA</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-3.5 h-3.5 text-red-500 flex-shrink-0" />
          <span>Taller oficial y banco dinamómetro en La Cisterna</span>
        </div>
      </div>

      {/* Formal Quote Modal */}
      <QuotationModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        items={items}
        subtotalCLP={subtotalCLP}
        deliveryMethod={deliveryText}
        wantsInstallation={wantsInstallation}
        vehicleNotes={vehicleNotes || (selectedVehicle ? selectedVehicle.generation.name : "")}
      />
    </div>
  );
}
