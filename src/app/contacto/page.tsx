import type { Metadata } from "next";
import { routes } from "@/config/site";
import { PageHeader } from "@/components/ui/PageHeader";
import { Contact } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contacto · Agendá tu sesión por WhatsApp",
  description:
    "Escribinos por WhatsApp, Instagram o correo para agendar tu sesión de Reiki o tu sesión holística personalizada en Kurimba, Costa Rica.",
  alternates: { canonical: routes.contact },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contacto"
        title="Hablemos"
        text="La forma más rápida de agendar es por WhatsApp. Si preferís, dejanos un mensaje con el formulario y te escribimos en horario de atención."
        crumbs={[{ label: "Contacto" }]}
      />
      <Contact hideHeading />
    </>
  );
}
