import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { about, routes } from "@/config/site";
import { PageHeader } from "@/components/ui/PageHeader";
import { About } from "@/components/sections/About";
import { Intro } from "@/components/sections/Intro";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = buildMetadata({
  title: "Nosotros · Bienestar holístico en Costa Rica",
  description:
    "Conocé Kurimba, un espacio de bienestar holístico en Costa Rica creado para ayudarte a hacer una pausa y reconectar con vos, en el estudio o a domicilio.",
  path: routes.about,
});

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
