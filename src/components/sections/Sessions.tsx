import { ArrowRight, Home, MessageCircle } from "lucide-react";
import { homeService, routes, sessions } from "@/config/site";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SessionCard } from "./SessionCard";

type Props = {
  /** En la página /sesiones se oculta el encabezado porque ya hay un H1. */
  hideHeading?: boolean;
  showAllLink?: boolean;
};

export function Sessions({ hideHeading = false, showAllLink = true }: Props) {
  return (
    <section id="sesiones" className="texture-grain bg-sand py-24 sm:py-32">
      <div className="container-k">
        {hideHeading ? null : (
          <Reveal>
            <SectionHeading
              eyebrow="Sesiones"
              title="Experiencias para tu bienestar"
              text="Cada sesión es un espacio para bajar el ritmo y darte lo que necesitás hoy. Elegí la que más resuene con vos, o escribinos y te ayudamos a decidir."
            />
          </Reveal>
        )}

        <ul className={cn("grid gap-8 sm:grid-cols-2 lg:grid-cols-3", !hideHeading && "mt-16")}>
          {sessions.map((session, i) => (
            <Reveal key={session.id} as="li" delay={i * 120} className="h-full">
              <SessionCard session={session} />
            </Reveal>
          ))}
        </ul>

        {homeService.enabled ? (
          <Reveal delay={200}>
            <div className="mt-14 flex flex-col gap-6 rounded-[2rem] border border-clay/60 bg-cream p-7 sm:p-9 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-start gap-5">
                <span className="flex size-14 shrink-0 items-center justify-center rounded-blob bg-sage-light text-forest">
                  <Home className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="eyebrow mb-2">A domicilio</p>
                  <h3 className="font-display text-3xl leading-tight font-medium text-bark">
                    {homeService.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-stone">
                    {homeService.text} Cobertura: {homeService.coverage}. {homeService.note}
                  </p>
                </div>
              </div>
              <Button href={WHATSAPP_URL} variant="whatsapp" className="shrink-0">
                <MessageCircle className="size-4" aria-hidden="true" />
                Consultar a domicilio
              </Button>
            </div>
          </Reveal>
        ) : null}

        {showAllLink ? (
          <div className="mt-12 text-center">
            <Button href={routes.sessions} variant="secondary">
              Ver todas las sesiones
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
