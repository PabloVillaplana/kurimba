import { steps } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="texture-grain bg-forest py-24 text-cream sm:py-32">
      <div className="container-k">
        <Reveal>
          <SectionHeading
            tone="light"
            eyebrow="Cómo funciona"
            title="Cómo es una sesión en Kurimba"
            text="Sin protocolos complicados. Un proceso sencillo, respetuoso y a tu ritmo."
          />
        </Reveal>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Línea conectora en escritorio */}
          <div
            aria-hidden="true"
            className="absolute top-8 right-[16%] left-[16%] hidden h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent md:block"
          />
          {steps.map((step, i) => (
            <Reveal key={step.title} as="li" delay={i * 150} className="relative text-center">
              <span className="relative mx-auto flex size-16 items-center justify-center rounded-full border border-gold/60 bg-forest font-display text-2xl text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 font-display text-3xl font-medium">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-clay/90">
                {step.text}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
