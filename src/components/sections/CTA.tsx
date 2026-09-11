import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { KurimbaSymbol } from "@/components/ui/KurimbaSymbol";
import { Reveal } from "@/components/ui/Reveal";

export function CTA() {
  return (
    <section id="agenda" className="relative overflow-hidden bg-sand py-8 sm:py-12">
      <div className="container-k">
        <Reveal>
          <div className="texture-grain relative overflow-hidden rounded-[2.5rem] bg-bark px-6 py-16 text-center text-cream sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 -right-16 size-72 rounded-blob bg-terracotta/25 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-16 size-72 rounded-blob-2 bg-sage-deep/30 blur-3xl"
            />
            <div className="relative mx-auto max-w-2xl">
              <KurimbaSymbol className="mx-auto h-10 text-terracotta" />
              <h2 className="mt-6 font-display text-4xl leading-[1.1] font-medium text-balance sm:text-5xl lg:text-6xl">
                Regalate un momento para volver a vos
              </h2>
              <p className="mt-6 text-base leading-relaxed text-pretty text-clay sm:text-lg">
                Descubrí una experiencia creada para ayudarte a bajar el ritmo, encontrar calma y
                reconectar con tu bienestar.
              </p>
              <div className="mt-10">
                <Button href={WHATSAPP_URL} variant="whatsapp" size="lg">
                  <MessageCircle className="size-5" aria-hidden="true" />
                  Agendá tu cita por WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
