import type { Metadata } from "next";
import { routes } from "@/config/site";
import { PageHeader } from "@/components/ui/PageHeader";
import { Sessions } from "@/components/sections/Sessions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Benefits } from "@/components/sections/Benefits";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Sesiones holísticas y Reiki en Costa Rica",
  description:
    "Conocé las sesiones de Kurimba: Reiki, sesión holística personalizada y nuevas experiencias para bajar el ritmo, liberar tensiones y reconectar con tu bienestar.",
  alternates: { canonical: routes.sessions },
};

export default function SessionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sesiones"
        title="Experiencias para tu bienestar"
        text="Cada sesión es un espacio para bajar el ritmo y darte lo que necesitás hoy. Elegí la que más resuene con vos, o escribinos por WhatsApp y te ayudamos a decidir."
        crumbs={[{ label: "Sesiones" }]}
      />
      <Sessions hideHeading showAllLink={false} />
      <HowItWorks />
      <Benefits />
      <CTA />
    </>
  );
}
