import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCLP(amount: number): string {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatPriceNeto(amountNeto: number): string {
  return `${formatCLP(amountNeto)} + IVA`;
}

export function formatHP(hp: number): string {
  return `${hp} HP`;
}

export function formatTorque(nm: number): string {
  return `${nm} Nm`;
}

export function createWhatsAppLink(message: string, phoneNumber: string = "56990550474"): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${phoneNumber}?text=${encoded}`;
}

export function validateChileanRut(rut: string): boolean {
  if (!rut || typeof rut !== "string") return false;
  const cleanRut = rut.replace(/[^0-9kK]/g, "").toUpperCase();
  if (cleanRut.length < 8 || cleanRut.length > 9) return false;
  const body = cleanRut.slice(0, -1);
  const dv = cleanRut.slice(-1);
  let sum = 0;
  let multiplier = 2;
  for (let i = body.length - 1; i >= 0; i--) {
    sum += parseInt(body[i], 10) * multiplier;
    multiplier = multiplier === 7 ? 2 : multiplier + 1;
  }
  const expectedDv = 11 - (sum % 11);
  const calculatedDv = expectedDv === 11 ? "0" : expectedDv === 10 ? "K" : expectedDv.toString();
  return dv === calculatedDv;
}

