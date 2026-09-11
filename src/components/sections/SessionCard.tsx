import { Check, Clock, MessageCircle, Tag } from "lucide-react";
import type { Session } from "@/config/site";
import { whatsapp } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { iconMap } from "@/components/ui/icons";

type Props = { session: Session };

/** Tarjeta reutilizable de sesión. Los datos vienen de `src/config/site.ts`. */
export function SessionCard({ session }: Props) {
  const Icon = iconMap[session.icon];
  const comingSoon = session.status === "coming-soon";

  return (
    <article
      id={`sesion-${session.id}`}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-[2rem] border bg-cream transition-all duration-500",
        comingSoon
          ? "border-dashed border-clay"
          : "border-clay/60 shadow-soft hover:-translate-y-1.5 hover:shadow-lift",
      )}
    >
      <div className="relative aspect-[4/3]">
        <ImagePlaceholder
          hint={session.imageHint}
          image={session.image}
          tone={comingSoon ? "linen" : "sand"}
          showSymbol={false}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="rounded-none shadow-none"
        />
        <span className="absolute top-4 left-4 flex size-11 items-center justify-center rounded-full bg-cream/90 text-terracotta shadow-soft backdrop-blur-sm">
          <Icon className="size-5" aria-hidden="true" />
        </span>
        {comingSoon ? (
          <span className="absolute top-4 right-4 rounded-full bg-bark/85 px-3 py-1 text-[0.65rem] font-medium tracking-[0.2em] text-cream uppercase">
            Próximamente
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-7">
        <h3 className="font-display text-3xl leading-tight font-medium text-bark">{session.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-stone">{session.description}</p>

        <dl className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <div className="flex items-center gap-2 text-bark/80">
            <Clock className="size-4 text-terracotta" aria-hidden="true" />
            <dt className="sr-only">Duración</dt>
            <dd>{session.duration}</dd>
          </div>
          <div className="flex items-center gap-2 text-bark/80">
            <Tag className="size-4 text-terracotta" aria-hidden="true" />
            <dt className="sr-only">Precio</dt>
            <dd>{session.price ?? "Consultá el precio"}</dd>
          </div>
        </dl>

        <ul className="mt-5 space-y-2 border-t border-clay/60 pt-5">
          {session.benefits.map((b) => (
            <li key={b} className="flex items-start gap-2.5 text-sm text-bark/85">
              <Check className="mt-0.5 size-4 shrink-0 text-sage-deep" aria-hidden="true" />
              {b}
            </li>
          ))}
        </ul>

        <div className="mt-auto pt-7">
          {comingSoon ? (
            <Button href={buildWhatsAppUrl(whatsapp.defaultMessage)} variant="secondary" className="w-full">
              Avisame cuando esté lista
            </Button>
          ) : (
            <Button href={buildWhatsAppUrl(whatsapp.sessionMessage(session.name))} className="w-full">
              <MessageCircle className="size-4" aria-hidden="true" />
              Quiero agendar
            </Button>
          )}
        </div>
      </div>
    </article>
  );
}
