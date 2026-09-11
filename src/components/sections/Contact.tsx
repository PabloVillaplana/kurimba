import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import { contact } from "@/config/site";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "./ContactForm";

type Props = { hideHeading?: boolean };

export function Contact({ hideHeading = false }: Props) {
  const items = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Escribinos y coordinamos tu cita",
      href: WHATSAPP_URL,
    },
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
      value: contact.location.short,
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
              text="La forma más rápida de agendar es por WhatsApp. Si preferís, dejanos un mensaje y te escribimos."
            />
          </Reveal>
        )}

        <div
          className={cn(
            "grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16",
            !hideHeading && "mt-16",
          )}
        >
          <Reveal>
            <ul className="space-y-4">
              {items.map(({ icon: Icon, label, value, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-2xl border border-clay/60 bg-linen/60 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta/40 hover:shadow-soft"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-cream text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-cream">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-xs tracking-[0.2em] text-stone uppercase">
                        {label}
                      </span>
                      <span className="block text-sm text-bark">{value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-2xl border border-clay/60 bg-linen/60 px-5 py-4">
              <p className="flex items-center gap-2 text-xs tracking-[0.2em] text-stone uppercase">
                <Clock className="size-4 text-terracotta" aria-hidden="true" />
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

          <Reveal delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
