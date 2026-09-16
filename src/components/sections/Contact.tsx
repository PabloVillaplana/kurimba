import { ArrowRight, Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { contact, homeService, whatsapp } from "@/config/site";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { InstagramIcon } from "@/components/ui/icons";
import { KurimbaSymbol } from "@/components/ui/KurimbaSymbol";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

type Props = { hideHeading?: boolean };

function formatPhone(digits: string) {
  const cc = digits.slice(0, 3);
  const rest = digits.slice(3);
  return `+${cc} ${rest.slice(0, 4)} ${rest.slice(4)}`;
}

export function Contact({ hideHeading = false }: Props) {
  const channels = [
    {
      icon: InstagramIcon,
      label: "Instagram",
      value: contact.instagram.handle,
      href: contact.instagram.url,
    },
    {
      icon: Mail,
      label: "Correo",
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: homeService.enabled
        ? `${contact.location.short} · también a domicilio`
        : contact.location.short,
      href: contact.location.mapsUrl,
    },
  ];

  return (
    <section id="contacto" className="bg-cream py-24 sm:py-32">
      <div className="container-k">
        {hideHeading ? null : (
          <Reveal>
            <SectionHeading
              eyebrow="Contacto"
              title="Hablemos"
              text="La forma más rápida de agendar es por WhatsApp. Escribinos y coordinamos el día y la hora que mejor te funcione."
            />
          </Reveal>
        )}

        <div
          className={cn(
            "grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10",
            !hideHeading && "mt-16",
          )}
        >
          {/* WhatsApp destacado */}
          <Reveal>
            <div className="texture-grain relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] bg-forest p-8 text-cream sm:p-10">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-16 size-64 rounded-blob bg-sage/30 blur-3xl"
              />
              <div className="relative">
                <KurimbaSymbol className="h-8 text-gold" />
                <h3 className="mt-6 font-display text-4xl leading-tight font-medium">
                  Escribinos por WhatsApp
                </h3>
                <p className="mt-4 max-w-md leading-relaxed text-clay">
                  Contanos qué buscás y te respondemos con la disponibilidad. Si es tu primera
                  sesión, también te ayudamos a elegir la experiencia que mejor va con vos.
                </p>
                <p className="mt-6 font-display text-2xl text-cream/90">
                  {formatPhone(whatsapp.number)}
                </p>
              </div>
              <div className="relative mt-8">
                <Button href={WHATSAPP_URL} size="lg" className="w-full sm:w-auto">
                  <MessageCircle className="size-5" aria-hidden="true" />
                  Agendá tu cita por WhatsApp
                  <ArrowRight className="size-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </Reveal>

          {/* Otros canales + horarios */}
          <div className="flex flex-col gap-4">
            {channels.map(({ icon: Icon, label, value, href }, i) => (
              <Reveal key={label} delay={80 + i * 60}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-clay/60 bg-linen/60 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta/40 hover:shadow-soft"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-cream text-terracotta-dark transition-colors group-hover:bg-terracotta-dark group-hover:text-cream">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block text-xs tracking-[0.2em] text-stone uppercase">
                      {label}
                    </span>
                    <span className="block text-sm text-bark">{value}</span>
                  </span>
                </a>
              </Reveal>
            ))}

            <Reveal delay={300}>
              <div className="rounded-2xl border border-clay/60 bg-linen/60 px-5 py-4">
                <p className="flex items-center gap-2 text-xs tracking-[0.2em] text-stone uppercase">
                  <Clock className="size-4 text-terracotta-dark" aria-hidden="true" />
                  Horarios
                </p>
                <ul className="mt-3 space-y-1.5 text-sm">
                  {contact.hours.map((h) => (
                    <li key={h.days} className="flex justify-between gap-4">
                      <span className="text-bark">{h.days}</span>
                      <span className="text-stone">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
