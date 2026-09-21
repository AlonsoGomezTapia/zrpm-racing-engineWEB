import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string({ required_error: "El nombre es obligatorio" })
    .trim()
    .min(2, "El nombre debe tener al menos 2 caracteres")
    .max(100, "El nombre no puede superar los 100 caracteres"),

  phone: z
    .string({ required_error: "El teléfono es obligatorio" })
    .trim()
    .min(8, "Ingresa un número telefónico o WhatsApp válido")
    .max(25, "El teléfono es demasiado largo"),

  email: z
    .string({ required_error: "El correo electrónico es obligatorio" })
    .trim()
    .email("Ingresa un correo electrónico válido")
    .max(120, "El correo no puede superar los 120 caracteres"),

  vehicle: z
    .string({ required_error: "El vehículo es obligatorio" })
    .trim()
    .min(2, "Indica al menos marca y modelo de tu vehículo")
    .max(120, "El campo vehículo no puede superar los 120 caracteres"),

  serviceType: z
    .string({ required_error: "Debes seleccionar un tipo de servicio" })
    .trim()
    .min(3, "Selecciona una opción de servicio"),

  message: z
    .string({ required_error: "El mensaje es obligatorio" })
    .trim()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .max(3000, "El mensaje no puede superar los 3.000 caracteres"),

  preferredDate: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
