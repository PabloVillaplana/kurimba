import { ArrowRight } from "lucide-react";
import { whatsapp } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { KurimbaSymbol } from "@/components/ui/KurimbaSymbol";
import { Reveal } from "@/components/ui/Reveal";

export function ReikiSpotlight() {
  return (
    <section id="reiki" className="relative overflow-hidden bg-linen py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 -left-40 size-[30rem] -translate-y-1/2 rounded-blob-2 bg-sand/80 blur-3xl"
      />
      <div className="container-k relative grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto aspect-[5/4] w-full max-w-lg">
            <ImagePlaceholder
              shape="blob-2"
              tone="sand"
              fill
              hint="Foto sugerida: manos en actitud de calma cerca de una persona recostada, sin contacto directo, luz suave. Evitar símbolos religiosos o esotéricos."
            />
            <div
              aria-hidden="true"
              className="absolute -top-5 -right-5 flex size-24 items-center justify-center rounded-full bg-cream shadow-soft"
            >
              <KurimbaSymbol className="h-9 text-terracotta" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={150} className="order-1 lg:order-2">
          <p className="eyebrow mb-4">Reiki</p>
          <h2 className="font-display text-4xl leading-[1.1] font-medium text-balance text-bark sm:text-5xl">
            ¿Nunca probaste Reiki y no sabés exactamente qué es?
          </h2>
          <p className="mt-6 text-base leading-relaxed text-pretty text-stone sm:text-lg">
            El Reiki es una técnica de liberación y balance energético. Trabajamos con la energía
            vital para desbloquear, armonizar y restaurar la energía de nuestro cuerpo. La sesión se
            realiza con las manos, sin tocar directamente el cuerpo. Es un espacio para bajar el
            ritmo, liberar tensiones y volver a conectar con tu bienestar.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {["Sin contacto directo", "Con la ropa puesta", "Apto para principiantes"].map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-clay bg-cream px-4 py-1.5 text-xs tracking-wide text-bark/80"
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <Button href={buildWhatsAppUrl(whatsapp.sessionMessage("Reiki"))} size="lg">
              Quiero vivir la experiencia
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
