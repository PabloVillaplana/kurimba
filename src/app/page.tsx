import { Hero } from "@/components/sections/Hero";
import { Intro } from "@/components/sections/Intro";
import { Sessions } from "@/components/sections/Sessions";
import { Benefits } from "@/components/sections/Benefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { ReikiSpotlight } from "@/components/sections/ReikiSpotlight";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { Contact } from "@/components/sections/Contact";
import { JsonLd } from "@/components/ui/JsonLd";
import type { Metadata } from "next";
import { brand, contact, homeService, seo, sessions, whatsapp } from "@/config/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: seo.homeTitle,
  description: seo.homeDescription,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Sessions />
      <Benefits />
      <HowItWorks />
      <ReikiSpotlight />
      <About />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "HealthAndBeautyBusiness",
          "@id": `${brand.url}/#business`,
          name: brand.name,
          description: seo.homeDescription,
          url: brand.url,
          email: contact.email,
          telephone: `+${whatsapp.number}`,
          image: `${brand.url}/opengraph-image`,
          logo: `${brand.url}/brand/kurimba-logo-transparente.png`,
          address: {
            "@type": "PostalAddress",
            addressLocality: contact.location.short,
            addressCountry: "CR",
          },
          areaServed: homeService.enabled
            ? [{ "@type": "Country", name: "Costa Rica" }, { "@type": "Place", name: homeService.coverage }]
            : { "@type": "Country", name: "Costa Rica" },
          openingHoursSpecification: contact.openingHours.map((h) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: h.days,
            opens: h.opens,
            closes: h.closes,
          })),
          sameAs: [contact.instagram.url],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Sesiones y experiencias holísticas",
            itemListElement: sessions
              .filter((s) => s.status === "available")
              .map((s) => ({
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: s.name,
                  description: s.description,
                  url: `${brand.url}/sesiones/${s.id}`,
                },
              })),
          },
        }}
      />
    </>
  );
}
