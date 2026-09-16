import { about } from "@/config/site";
import { cn } from "@/lib/utils";
import { Artwork } from "@/components/ui/Artwork";
import { KurimbaSymbol } from "@/components/ui/KurimbaSymbol";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type Props = { hideHeading?: boolean };

export function About({ hideHeading = false }: Props) {
  return (
    <section id="nosotros" className="bg-cream py-24 sm:py-32">
      <div className="container-k">
        {hideHeading ? null : (
          <Reveal>
            <SectionHeading eyebrow="Nosotros" title={about.title} text={about.intro} />
          </Reveal>
        )}

        <div
          className={cn(
            "grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20",
            !hideHeading && "mt-16",
          )}
        >
          <Reveal className="mx-auto w-full max-w-md lg:max-w-none">
            <div className="relative aspect-[4/5] w-full">
              <Artwork variant="petals" tone="sage" shape="blob-2" fill />
              <div
                aria-hidden="true"
                className="absolute -bottom-5 -left-5 flex size-20 items-center justify-center rounded-full bg-cream shadow-soft"
              >
                <KurimbaSymbol className="h-8 text-terracotta" />
              </div>
            </div>
          </Reveal>

          <div>
            <div className="space-y-5">
              {about.paragraphs.map((text, i) => (
                <Reveal key={i} delay={i * 80}>
                  <p
                    className={cn(
                      "leading-relaxed text-pretty",
                      i === 0 ? "font-display text-2xl text-bark sm:text-3xl" : "text-stone",
                    )}
                  >
                    {text}
                  </p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={300}>
              <ul className="mt-10 grid gap-4 sm:grid-cols-3">
                {about.values.map((v) => (
                  <li
                    key={v.title}
                    className="rounded-2xl border border-clay/60 bg-linen/70 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-soft"
                  >
                    <p className="font-display text-2xl text-terracotta italic">{v.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-stone">{v.text}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
