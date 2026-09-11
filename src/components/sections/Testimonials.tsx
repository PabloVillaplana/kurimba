"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/config/site";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Carrusel accesible de testimonios.
 * En escritorio se muestran como cuadrícula; en móvil como carrusel deslizable.
 */
export function Testimonials() {
  const trackRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState(0);

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const item = track.children[index] as HTMLElement | undefined;
    item?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, []);

  // Sincroniza el indicador con el scroll manual.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const width = track.clientWidth;
      if (!width) return;
      setActive(Math.round(track.scrollLeft / width));
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  const total = testimonials.length;

  return (
    <section id="testimonios" className="texture-grain bg-sand py-24 sm:py-32">
      <div className="container-k">
        <Reveal>
          <SectionHeading
            eyebrow="Testimonios"
            title="Lo que cuentan quienes ya vivieron la experiencia"
          />
        </Reveal>

        <Reveal delay={150}>
          <ul
            ref={trackRef}
            className="mt-14 -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 [scrollbar-width:none] sm:mx-0 sm:px-0 lg:grid lg:grid-cols-3 lg:overflow-visible [&::-webkit-scrollbar]:hidden"
            aria-label="Testimonios"
          >
            {testimonials.map((t, i) => (
              <li
                key={i}
                className="relative flex w-[85%] shrink-0 snap-center flex-col rounded-[2rem] border border-clay/60 bg-cream p-8 shadow-soft transition-transform duration-300 sm:w-[70%] lg:w-auto lg:hover:-translate-y-1"
              >
                {t.isPlaceholder ? (
                  <span className="absolute top-5 right-5 rounded-full border border-dashed border-terracotta/60 px-2.5 py-0.5 text-[0.6rem] tracking-[0.2em] text-terracotta uppercase">
                    Ejemplo
                  </span>
                ) : null}
                <Quote className="size-7 text-gold" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 font-display text-xl leading-snug text-bark italic">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-clay/60 pt-5">
                  <span className="flex size-10 items-center justify-center rounded-full bg-sage-light font-display text-lg text-forest">
                    {t.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-bark">{t.name}</span>
                    <span className="block text-xs text-stone">{t.detail}</span>
                  </span>
                </figcaption>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Controles solo en móvil / tablet */}
        <div className="mt-6 flex items-center justify-center gap-4 lg:hidden">
          <button
            type="button"
            onClick={() => scrollTo((active - 1 + total) % total)}
            aria-label="Testimonio anterior"
            className="flex size-10 items-center justify-center rounded-full border border-clay bg-cream text-bark transition-colors hover:bg-bark hover:text-cream"
          >
            <ChevronLeft className="size-5" />
          </button>
          <div className="flex gap-2" role="tablist" aria-label="Seleccionar testimonio">
            {testimonials.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-label={`Testimonio ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  active === i ? "w-6 bg-terracotta" : "w-2 bg-clay hover:bg-stone",
                )}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => scrollTo((active + 1) % total)}
            aria-label="Testimonio siguiente"
            className="flex size-10 items-center justify-center rounded-full border border-clay bg-cream text-bark transition-colors hover:bg-bark hover:text-cream"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

        <p className="mt-8 text-center text-xs text-stone/80">
          Los testimonios marcados como “Ejemplo” son temporales y deben reemplazarse con
          testimonios reales en <code className="rounded bg-cream px-1">src/config/site.ts</code>.
        </p>
      </div>
    </section>
  );
}
