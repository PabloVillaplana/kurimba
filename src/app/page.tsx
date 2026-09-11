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
import { brand, contact } from "@/config/site";

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
          name: brand.name,
          description: brand.description,
          url: brand.url,
          email: contact.email,
          image: `${brand.url}/brand/kurimba-logo-fondo-oscuro.png`,
          address: {
            "@type": "PostalAddress",
            addressLocality: contact.location.short,
            addressCountry: "CR",
          },
          sameAs: [contact.instagram.url],
        }}
      />
    </>
  );
}
