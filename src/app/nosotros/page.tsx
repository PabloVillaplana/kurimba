import type { Metadata } from "next";
import { about, routes } from "@/config/site";
import { PageHeader } from "@/components/ui/PageHeader";
import { About } from "@/components/sections/About";
import { Intro } from "@/components/sections/Intro";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = {
  title: "Sobre Kurimba · Estudio de bienestar holístico en Costa Rica",
  description:
    "Conocé la historia y el propósito de Kurimba, un espacio de bienestar holístico en Costa Rica creado para ayudarte a hacer una pausa, escucharte y reconectar con vos.",
  alternates: { canonical: routes.about },
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nosotros"
        title={about.title}
        text={about.intro}
        crumbs={[{ label: "Nosotros" }]}
      />
      <About hideHeading />
      <Intro />
      <Testimonials />
      <CTA />
    </>
  );
}
