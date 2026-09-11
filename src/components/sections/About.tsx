import { Award } from "lucide-react";
import { facilitator } from "@/config/site";
import { cn } from "@/lib/utils";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type Props = { hideHeading?: boolean };

export function About({ hideHeading = false }: Props) {
  return (
    <section id="nosotros" className="bg-cream py-24 sm:py-32">
      <div className="container-k">
        {hideHeading ? null : (
          <Reveal>
            <SectionHeading
              eyebrow="Nosotros"
              title="Sobre Kurimba"
              text="Un proyecto que nace del deseo de crear un lugar donde cualquier persona pueda detenerse, respirar y volver a sentirse en casa consigo misma."
            />
          </Reveal>
        )}

        <div
          className={cn(
            "grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20",
            !hideHeading && "mt-16",
          )}
        >
          <Reveal className="mx-auto w-full max-w-sm lg:sticky lg:top-28">
            <div className="relative aspect-[4/5]">
              <ImagePlaceholder
                shape="rounded"
                tone="sage"
                fill
                hint={facilitator.photoHint}
                />
              <div className="absolute inset-x-6 -bottom-6 rounded-2xl border border-clay/60 bg-cream px-5 py-4 shadow-soft">
                <p className="font-display text-2xl leading-tight text-bark">{facilitator.name}</p>
                <p className="mt-1 text-xs tracking-[0.2em] text-terracotta uppercase">
                  {facilitator.role}
                </p>
              </div>
            </div>
          </Reveal>

          <div className="space-y-10 pt-6 lg:pt-0">
            <Reveal delay={100}>
              <h3 className="font-display text-3xl font-medium text-bark">Mi historia</h3>
              <p className="mt-3 leading-relaxed text-stone">{facilitator.story}</p>
            </Reveal>

            <Reveal delay={200}>
              <h3 className="font-display text-3xl font-medium text-bark">Por qué nace Kurimba</h3>
              <p className="mt-3 leading-relaxed text-stone">{facilitator.motivation}</p>
            </Reveal>

            <Reveal delay={300}>
              <h3 className="font-display text-3xl font-medium text-bark">Formación</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {facilitator.certifications.map((c) => (
                  <li
                    key={c}
                    className="flex items-center gap-3 rounded-2xl border border-clay/60 bg-linen/70 px-4 py-3 text-sm text-bark/85"
                  >
                    <Award className="size-4 shrink-0 text-terracotta" aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-stone/80">
                Sección editable en <code className="rounded bg-sand px-1">src/config/site.ts</code>.
                Completar con formación real; no se incluyen certificaciones inventadas.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
