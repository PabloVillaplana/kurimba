import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

/** Botón flotante de WhatsApp, visible en toda la página. */
export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="group fixed right-5 bottom-5 z-40 flex items-center gap-3 sm:right-7 sm:bottom-7"
    >
      <span className="pointer-events-none hidden translate-x-2 rounded-full bg-bark px-4 py-2 text-sm text-cream opacity-0 shadow-soft transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block">
        Agendá por WhatsApp
      </span>
      <span className="relative flex size-14 items-center justify-center rounded-full bg-forest text-cream shadow-lift transition-transform duration-300 group-hover:-translate-y-1 group-hover:bg-sage-deep">
        <span
          className="absolute inset-0 rounded-full bg-forest/60 animate-pulse-soft"
          aria-hidden="true"
        />
        <MessageCircle className="relative size-6" aria-hidden="true" />
      </span>
    </a>
  );
}
