import { Info } from "lucide-react";
import { benefits, disclaimer } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { iconMap } from "@/components/ui/icons";

export function Benefits() {
  return (
    <section id="beneficios" className="bg-cream py-24 sm:py-32">
      <div className="container-k">
        <Reveal>
          <SectionHeading
            eyebrow="Beneficios"
            title="Lo que podés sentir después de una sesión"
            text="Cada persona vive la experiencia de forma distinta. Estos son algunos de los beneficios que suelen acompañar una sesión."
          />
        </Reveal>

        <ul className="mt-16 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => {
            const Icon = iconMap[b.icon];
            return (
              <Reveal key={b.title} as="li" delay={i * 80}>
                <div className="group flex gap-5">
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-blob bg-sage-light text-forest transition-all duration-500 group-hover:rounded-full group-hover:bg-sage group-hover:text-cream">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-2xl leading-tight font-medium text-bark">
                      {b.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-stone">{b.text}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={200}>
          <p className="mx-auto mt-16 flex max-w-2xl items-start gap-3 rounded-2xl border border-clay/60 bg-linen px-5 py-4 text-xs leading-relaxed text-stone sm:text-sm">
            <Info className="mt-0.5 size-4 shrink-0 text-terracotta" aria-hidden="true" />
            {disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
