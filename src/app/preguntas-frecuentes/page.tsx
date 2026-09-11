import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { faqs, routes } from "@/config/site";
import { JsonLd } from "@/components/ui/JsonLd";
import { PageHeader } from "@/components/ui/PageHeader";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

export const metadata: Metadata = buildMetadata({
  title: "Preguntas frecuentes · Reiki y sesiones holísticas",
  description:
    "Dudas comunes antes de tu primera sesión en Kurimba: cómo prepararte, cuánto dura, si se toca el cuerpo, sesiones a domicilio y cómo agendar por WhatsApp.",
  path: routes.faq,
});

export default function FAQPage() {
  return (
    <>
      <PageHeader
        eyebrow="Preguntas frecuentes"
        title="Resolvemos tus dudas"
        text="Si es tu primera vez en una sesión holística, es normal tener preguntas. Aquí respondemos las más comunes. Si tenés otra, escribinos por WhatsApp."
        crumbs={[{ label: "Preguntas frecuentes" }]}
      />
      <FAQ hideHeading />
      <CTA />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }}
      />
    </>
  );
}
