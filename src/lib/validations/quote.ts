import { z } from "zod";
import { validateChileanRut } from "@/lib/utils";
import { sanitizeInput } from "@/lib/security";

export const quoteItemSchema = z.object({
  productId: z
    .string({ required_error: "ID de producto requerido" })
    .transform(sanitizeInput)
    .pipe(z.string().min(1).max(100)),
  quantity: z
    .number({ required_error: "Cantidad requerida" })
    .int("La cantidad debe ser un número entero")
    .min(1, "La cantidad mínima es 1")
    .max(50, "La cantidad máxima por producto es 50"),
});

export const quoteRequestSchema = z.object({
  name: z
    .string({ required_error: "El nombre es obligatorio" })
    .transform(sanitizeInput)
    .pipe(
      z
        .string()
        .min(2, "El nombre debe tener al menos 2 caracteres válidos")
        .max(100, "El nombre no puede superar los 100 caracteres")
    ),

  rut: z
    .string()
    .transform(sanitizeInput)
    .optional()
    .refine(
      (val) => {
        if (!val || val.trim() === "") return true;
        return validateChileanRut(val);
      },
      {
        message: "El RUT ingresado no es válido en Chile (formato: 12.345.678-9)",
      }
    ),

  phone: z
    .string({ required_error: "El teléfono es obligatorio" })
    .transform(sanitizeInput)
    .pipe(
      z
        .string()
        .min(8, "Ingresa un número telefónico válido (+56 9 ...)")
        .max(25, "El teléfono es demasiado largo")
    ),

  email: z
    .string({ required_error: "El correo electrónico es obligatorio" })
    .trim()
    .toLowerCase()
    .email("Ingresa un correo electrónico válido")
    .max(120, "El correo no puede superar los 120 caracteres"),

  city: z
    .string({ required_error: "La ciudad o comuna es obligatoria" })
    .transform(sanitizeInput)
    .pipe(
      z
        .string()
        .min(2, "Indica ciudad o comuna de despacho")
        .max(100, "La ciudad no puede superar los 100 caracteres")
    ),

  items: z
    .array(quoteItemSchema, {
      required_error: "El carro debe contener al menos un producto",
    })
    .min(1, "Debes incluir al menos un producto para cotizar")
    .max(50, "No se pueden incluir más de 50 ítems distintos por cotización"),

  deliveryMethod: z
    .string()
    .transform(sanitizeInput)
    .default("Retiro en Taller ZRPM (La Cisterna)"),

  wantsInstallation: z.boolean().default(false),

  vehicleNotes: z
    .string()
    .optional()
    .transform((val) => (val ? sanitizeInput(val) : undefined))
    .pipe(z.string().max(2000).optional()),
});

export type QuoteItemData = z.infer<typeof quoteItemSchema>;
export type QuoteRequestData = z.infer<typeof quoteRequestSchema>;
