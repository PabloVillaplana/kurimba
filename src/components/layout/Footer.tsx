import { Clock, Mail, MapPin, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/ui/icons";
import Link from "next/link";
import { brand, contact, navLinks, routes, whatsapp } from "@/config/site";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { Logo } from "@/components/ui/Logo";

function formatPhone(digits: string) {
  // 50688889999 → +506 8888 9999
  const cc = digits.slice(0, 3);
  const rest = digits.slice(3);
  return `+${cc} ${rest.slice(0, 4)} ${rest.slice(4)}`;
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="texture-grain bg-bark text-clay">
      <div className="container-k grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        {/* Marca */}
        <div className="max-w-sm">
          <Logo variant="light" withTagline />
          <p className="mt-6 font-display text-xl leading-snug text-cream/90 italic">
            {brand.slogan}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-clay/80">
            Sesiones y experiencias holísticas en Costa Rica para bajar el ritmo, liberar tensiones
            y reconectar con vos.
          </p>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="eyebrow text-gold">Contacto</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 transition-colors hover:text-cream"
              >
                <MessageCircle className="size-4 text-terracotta" aria-hidden="true" />
                {formatPhone(whatsapp.number)}
              </a>
            </li>
            <li>
              <a
                href={contact.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 transition-colors hover:text-cream"
              >
                <InstagramIcon className="size-4 text-terracotta" />
                {contact.instagram.handle}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${contact.email}`}
                className="inline-flex items-center gap-2.5 transition-colors hover:text-cream"
              >
                <Mail className="size-4 text-terracotta" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
            <li>
              <a
                href={contact.location.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-2.5 transition-colors hover:text-cream"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-terracotta" aria-hidden="true" />
                <span>
                  {contact.location.short}
                  <br />
                  <span className="text-clay/70">{contact.location.address}</span>
                </span>
              </a>
            </li>
          </ul>
        </div>

        {/* Horarios */}
        <div>
          <h3 className="eyebrow text-gold">Horarios</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {contact.hours.map((h) => (
              <li key={h.days} className="flex items-start gap-2.5">
                <Clock className="mt-0.5 size-4 shrink-0 text-terracotta" aria-hidden="true" />
                <span>
                  <span className="block text-cream/90">{h.days}</span>
                  <span className="text-clay/70">{h.time}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Enlaces */}
        <div>
          <h3 className="eyebrow text-gold">Enlaces rápidos</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-cream">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href={routes.privacy} className="transition-colors hover:text-cream">
                Aviso de privacidad
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-k flex flex-col gap-4 py-6 text-xs text-clay/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {brand.name}. Todos los derechos reservados.
          </p>
          <p className="max-w-xl leading-relaxed">
            Las sesiones holísticas son prácticas complementarias de bienestar y no sustituyen la
            atención médica o psicológica profesional.
          </p>
        </div>
      </div>
    </footer>
  );
}
