"use client";

import React, { useState } from "react";
import { X, CheckCircle2, Send, FileText, Building2, User, Phone, Mail, MapPin, AlertCircle } from "lucide-react";
import { CartItem } from "@/types";
import { formatCLP, createWhatsAppLink, validateChileanRut } from "@/lib/utils";
import { WhatsAppIcon } from "@/components/ui/Icons";

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  subtotalCLP: number;
  deliveryMethod: string;
  wantsInstallation: boolean;
  vehicleNotes: string;
}

export function QuotationModal({
  isOpen,
  onClose,
  items,
  subtotalCLP,
  deliveryMethod,
  wantsInstallation,
  vehicleNotes,
}: QuotationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    rut: "",
    phone: "",
    email: "",
    city: "",
    additionalNotes: vehicleNotes || "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quoteId, setQuoteId] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  if (!isOpen) return null;

  const isRutInvalid = Boolean(formData.rut && formData.rut.trim().length > 3 && !validateChileanRut(formData.rut));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);

    if (formData.rut && formData.rut.trim() && !validateChileanRut(formData.rut)) {
      setFormError("El RUT ingresado no es válido (formato: 12.345.678-9 con dígito verificador correcto).");
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        rut: formData.rut ? formData.rut.trim() : undefined,
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        city: formData.city.trim(),
        items: items.map((i) => ({ productId: i.product.id, quantity: i.quantity })),
        deliveryMethod,
        wantsInstallation,
        vehicleNotes: formData.additionalNotes ? formData.additionalNotes.trim() : undefined,
      };

      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        setFormError(data.message || "Error al procesar la cotización. Revisa los datos ingresados.");
        return;
      }

      setQuoteId(data.quoteId || `ZRPM-COT-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitted(true);
    } catch {
      setFormError("Error de conexión con el servidor. Puedes contactarnos directamente por WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };


  const whatsappMessage = `*NUEVA SOLICITUD DE COTIZACIÓN ZRPM*
*N° Cotización:* ${quoteId}
----------------------------------------
*Cliente:* ${formData.name}
*RUT:* ${formData.rut || "No especificado"}
*Teléfono:* ${formData.phone}
*Email:* ${formData.email}
*Ciudad/Comuna:* ${formData.city}
*Entrega:* ${deliveryMethod}
*Instalación en Taller:* ${wantsInstallation ? "Sí, cotizar dinamómetro/montaje" : "No requerida"}
*Vehículo / Notas:* ${formData.additionalNotes || "No especificado"}
----------------------------------------
*Items Cotizados:*
${items
  .map(
    ({ product, quantity }) =>
      `• [${quantity}x] ${product.name} (SKU: ${product.sku}) - ${formatCLP(
        product.priceCLP * quantity
      )}`
  )
  .join("\n")}
----------------------------------------
*Total Estimado:* ${formatCLP(subtotalCLP)} (IVA incluido)`;

  const whatsappUrl = createWhatsAppLink(whatsappMessage);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative w-full max-w-xl bg-neutral-900 border border-neutral-800 rounded-2xl p-6 sm:p-8 shadow-2xl">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          /* Success Screen */
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-400">
                Cotización Registrada
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-white uppercase mt-1">
                ¡Solicitud Recibida con Éxito!
              </h3>
              <p className="text-xs font-mono text-neutral-400 mt-2 bg-neutral-950 p-2.5 rounded border border-neutral-800 inline-block">
                ID de Referencia: <strong className="text-red-400">{quoteId}</strong>
              </p>
            </div>

            <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
              Hemos registrado los detalles de tu carro por un monto de{" "}
              <strong className="text-white">{formatCLP(subtotalCLP)}</strong>. Un especialista de
              ZRPM Racing Engine revisará compatibilidad y disponibilidad.
            </p>

            <div className="pt-2 flex flex-col gap-2.5">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-heading font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4 fill-current" />
                <span>Enviar Cotización a WhatsApp de ZRPM</span>
              </a>

              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-heading font-bold uppercase tracking-wider transition-colors"
              >
                Cerrar y Volver
              </button>
            </div>
          </div>
        ) : (
          /* Form Screen */
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-mono text-red-500 uppercase tracking-widest mb-1">
                <FileText className="w-4 h-4" />
                <span>Cotización Formal ZRPM</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-white uppercase">
                Solicitar Cotización de Carro
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Recibe la cotización por correo o WhatsApp con desglose de factura y disponibilidad.
              </p>
            </div>

            {formError && (
              <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/40 text-xs text-red-300 flex items-start gap-2.5 mb-4">
                <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <div className="flex-1">
                  <span>{formError}</span>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                    Nombre Completo *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="Ej: Claudio Valenzuela"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>

                {/* RUT */}
                <div>
                  <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                    RUT (Para Factura / Boleta)
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="12.345.678-9"
                      value={formData.rut}
                      onChange={(e) => setFormData({ ...formData, rut: e.target.value })}
                      className={`w-full bg-neutral-950 border rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none transition-colors ${
                        isRutInvalid
                          ? "border-red-500 focus:border-red-500"
                          : "border-neutral-800 focus:border-red-500"
                      }`}
                    />
                  </div>
                  {isRutInvalid && (
                    <span className="text-[10px] font-mono text-red-400 mt-1 block">
                      RUT chileno inválido (revisa el dígito verificador)
                    </span>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                    Teléfono / WhatsApp *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+56 9 1234 5678"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                    Correo Electrónico *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="tu-correo@ejemplo.cl"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-500 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* City */}
              <div>
                <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                  Ciudad / Comuna de Despacho *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Ej: Santiago, Las Condes / Antofagasta"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
              </div>

              {/* Vehicle / Remarks */}
              <div>
                <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                  Detalles del Vehículo & Observaciones Técnicas
                </label>
                <textarea
                  rows={3}
                  placeholder="Indica marca, modelo, año, motor o si tienes dudas sobre adaptaciones requeridas..."
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-500 transition-colors resize-none"
                />
              </div>

              {/* Summary box */}
              <div className="p-3.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs flex justify-between items-center">
                <span className="text-neutral-400">
                  Total Carro ({items.length} {items.length === 1 ? "producto" : "productos"}):
                </span>
                <span className="font-mono font-bold text-red-500 text-base">
                  {formatCLP(subtotalCLP)}
                </span>
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 disabled:bg-red-800/60 disabled:cursor-not-allowed text-white font-heading font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-950/50 transition-all active:scale-[0.99]"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Generando Cotización...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Generar Solicitud de Cotización</span>
                  </>
                )}
              </button>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}
