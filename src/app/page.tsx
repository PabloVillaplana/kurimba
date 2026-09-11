import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
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
import { brand, contact } from "@/config/site";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: brand.name,
    description: brand.description,
    url: brand.url,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: contact.location.short,
      addressCountry: "CR",
    },
    sameAs: [contact.instagram.url],
  };

  return (
    <>
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-bark focus:px-4 focus:py-2 focus:text-cream"
      >
        Saltar al contenido
      </a>
      <Navbar />
      <main id="contenido" className="flex-1">
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
      </main>
      <Footer />
      <WhatsAppFloat />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
