import { redirect } from "next/navigation";
import type { NextRequest } from "next/server";
import { sessions, whatsapp } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

/**
 * /agendar → redirige a WhatsApp con el mensaje precargado.
 *
 * Uso:
 *   /agendar                  mensaje general
 *   /agendar?sesion=reiki     mensaje para una sesión concreta (usa el id de `sessions`)
 *
 * Ideal para compartir en Instagram, códigos QR o material impreso.
 * El número y los mensajes se editan en `src/config/site.ts`.
 */
export function GET(request: NextRequest) {
  const slug = request.nextUrl.searchParams.get("sesion");
  const session = slug ? sessions.find((s) => s.id === slug && s.status === "available") : null;
  const message = session ? whatsapp.sessionMessage(session.name) : whatsapp.defaultMessage;

  redirect(buildWhatsAppUrl(message));
}
