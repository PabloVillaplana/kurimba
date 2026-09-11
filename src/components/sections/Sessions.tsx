import { sessions } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SessionCard } from "./SessionCard";

export function Sessions() {
  return (
    <section id="sesiones" className="texture-grain bg-sand py-24 sm:py-32">
      <div className="container-k">
        <Reveal>
          <SectionHeading
            eyebrow="Sesiones"
            title="Experiencias para tu bienestar"
            text="Cada sesión es un espacio para bajar el ritmo y darte lo que necesitás hoy. Elegí la que más resuene con vos, o escribinos y te ayudamos a decidir."
          />
        </Reveal>

        <ul className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {sessions.map((session, i) => (
            <Reveal key={session.id} as="li" delay={i * 120} className="h-full">
              <SessionCard session={session} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
