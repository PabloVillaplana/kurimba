"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqs } from "@/config/site";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type Props = {
  items?: { question: string; answer: string }[];
  title?: string;
  text?: string;
  /** Oculta el encabezado de sección (útil en páginas con su propio H1). */
  hideHeading?: boolean;
  id?: string;
  className?: string;
};

export function FAQ({
  items = faqs,
  title = "Resolvemos tus dudas",
  text = "Si tenés alguna otra pregunta, escribinos por WhatsApp y con gusto te respondemos.",
  hideHeading = false,
  id = "preguntas",
  className = "bg-cream py-24 sm:py-32",
}: Props) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id={id} className={className}>
      <div className="container-k">
        {hideHeading ? null : (
          <Reveal>
            <SectionHeading eyebrow="Preguntas frecuentes" title={title} text={text} />
          </Reveal>
        )}

        <Reveal delay={150}>
          <div
            className={cn(
              "mx-auto max-w-3xl divide-y divide-clay/70 rounded-[2rem] border border-clay/60 bg-linen/50 px-6 sm:px-10",
              !hideHeading && "mt-14",
            )}
          >
            {items.map((faq, i) => {
              const isOpen = open === i;
              const panelId = `faq-panel-${i}`;
              const buttonId = `faq-button-${i}`;
              return (
                <div key={faq.question}>
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpen(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-6 py-6 text-left transition-colors hover:text-terracotta-dark"
                    >
                      <span className="font-display text-xl leading-snug font-medium sm:text-2xl">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={cn(
                          "size-5 shrink-0 text-terracotta transition-transform duration-400",
                          isOpen && "rotate-180",
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={cn(
                      "grid transition-[grid-template-rows,opacity] duration-400 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-6 leading-relaxed text-stone">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
