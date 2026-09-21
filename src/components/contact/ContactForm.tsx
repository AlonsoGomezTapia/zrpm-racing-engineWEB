"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, User, Phone, Mail, Car, HelpCircle, MessageSquare, AlertCircle } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/Icons";
import { createWhatsAppLink } from "@/lib/utils";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    serviceType: "Reprogramación de ECU (Stage 1 / Stage 2 / Stage 3)",
    vehicle: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [requestId, setRequestId] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.message || "Error al enviar la solicitud. Revisa los datos ingresados.");
        return;
      }

      setRequestId(data.referenceId || `ZRPM-SOL-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitted(true);
    } catch {
      setErrorMessage("Error de conexión al enviar el formulario. Puedes contactarnos directamente por WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = `*NUEVA CONSULTA DE TALLER ZRPM*
*N° Solicitud:* ${requestId}
----------------------------------------
*Cliente:* ${formData.name}
*Teléfono:* ${formData.phone}
*Email:* ${formData.email}
*Vehículo:* ${formData.vehicle || "No especificado"}
*Servicio Solicitado:* ${formData.serviceType}
----------------------------------------
*Mensaje:*
${formData.message}
----------------------------------------
Hola ZRPM Racing Engine, quisiera coordinar una respuesta o turno para esta solicitud.`;

  const whatsappUrl = createWhatsAppLink(whatsappMessage);

  return (
    <div className="rounded-2xl border border-neutral-800 bg-neutral-900/80 p-6 sm:p-8 backdrop-blur-md">
      {isSubmitted ? (
        <div className="py-8 text-center space-y-4 animate-in fade-in duration-300">
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
              Mensaje Registrado
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-black text-white uppercase mt-1">
              ¡Tu Solicitud Fue Recibida!
            </h3>
            <p className="text-xs font-mono text-neutral-400 mt-2 bg-neutral-950 p-2 rounded border border-neutral-800 inline-block">
              Código de Seguimiento: <strong className="text-red-400">{requestId}</strong>
            </p>
          </div>

          <p className="text-xs sm:text-sm text-neutral-300 max-w-md mx-auto leading-relaxed">
            Nuestro equipo de ingeniería revisará los datos de tu vehículo ({formData.vehicle || "tu consulta"}) y se comunicará contigo a la brevedad.
          </p>

          <div className="pt-3 flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-emerald-950/40 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4 fill-current" />
              <span>Enviar por WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  phone: "",
                  email: "",
                  serviceType: "Reprogramación de ECU (Stage 1 / Stage 2 / Stage 3)",
                  vehicle: "",
                  message: "",
                });
              }}
              className="py-3 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-heading font-bold uppercase tracking-wider transition-colors"
            >
              Nueva Consulta
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-2 text-xs font-mono text-red-500 uppercase tracking-widest mb-1">
              <MessageSquare className="w-4 h-4" />
              <span>Formulario de Contacto & Agendamiento</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-black text-white uppercase">
              Escríbenos a ZRPM
            </h2>
            <p className="text-xs text-neutral-400 mt-1">
              Completa el formulario y te responderemos con asesoría técnica para tu proyecto.
            </p>
          </div>

          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-500/40 text-xs text-red-300 flex items-start gap-2.5 mb-4">
              <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Nombre */}
              <div>
                <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                  Nombre Completo *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Ej: Marcelo González"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
              </div>

              {/* Teléfono */}
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
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

              {/* Vehículo */}
              <div>
                <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                  Vehículo (Marca, Modelo, Año, Motor) *
                </label>
                <div className="relative">
                  <Car className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                  <input
                    type="text"
                    required
                    placeholder="Ej: Ford Mustang GT 2017 5.0L"
                    value={formData.vehicle}
                    onChange={(e) => setFormData({ ...formData, vehicle: e.target.value })}
                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-9 pr-3 py-2.5 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Servicio Requerido */}
            <div>
              <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                Tipo de Consulta / Servicio *
              </label>
              <div className="relative">
                <HelpCircle className="w-4 h-4 text-neutral-500 absolute left-3 top-3 pointer-events-none" />
                <select
                  value={formData.serviceType}
                  onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl pl-9 pr-8 py-2.5 text-xs text-white focus:outline-none focus:border-red-500 transition-colors appearance-none cursor-pointer"
                >
                  <option value="Reprogramación de ECU (Stage 1 / Stage 2 / Stage 3)">
                    Reprogramación de ECU (Stage 1 / Stage 2 / Stage 3)
                  </option>
                  <option value="Medición de Potencia en Dinamómetro">
                    Medición de Potencia en Dinamómetro
                  </option>
                  <option value="Kit Bi-Turbo Custom / Sobrealimentación">
                    Kit Bi-Turbo Custom / Sobrealimentación Supercharger
                  </option>
                  <option value="Cotización de Repuestos & Importación USA">
                    Cotización de Repuestos & Importación USA
                  </option>
                  <option value="Mantención Deportiva & Mecánica de Competición">
                    Mantención Deportiva & Mecánica de Competición
                  </option>
                  <option value="Otra Consulta">Otra Consulta Técnica</option>
                </select>
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <label className="block text-xs font-mono text-neutral-300 mb-1.5">
                Mensaje o Requerimientos Técnicos *
              </label>
              <textarea
                rows={4}
                required
                placeholder="Cuéntanos sobre tu proyecto, objetivos de potencia, modificaciones previas o disponibilidad deseada..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-xl p-3 text-xs text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-500 transition-colors resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 disabled:bg-red-800/60 disabled:cursor-not-allowed text-white font-heading font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2 shadow-lg shadow-red-950/50 transition-all active:scale-[0.99]"
            >
              {isSubmitting ? (
                <>
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Enviando solicitud...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Enviar Mensaje a ZRPM Racing</span>
                </>
              )}
            </button>

          </form>
        </div>
      )}
    </div>
  );
}
