import { ArrowRight } from "lucide-react";
import { routes, sessions } from "@/config/site";
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
