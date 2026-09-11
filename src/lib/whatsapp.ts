import { whatsapp } from "@/config/site";

/**
 * Construye el enlace de WhatsApp con el mensaje precargado.
 * El número se toma de `src/config/site.ts`.
 */
export function buildWhatsAppUrl(message: string = whatsapp.defaultMessage): string {
  return `https://wa.me/${whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_URL = buildWhatsAppUrl();
