import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { brand, contact, seo, whatsapp } from "@/config/site";
import { JsonLd } from "@/components/ui/JsonLd";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: seo.homeTitle,
    template: `%s · ${brand.name}`,
  },
  description: seo.homeDescription,
  applicationName: brand.name,
  keywords: [
    "Kurimba",
    "Reiki Costa Rica",
    "Reiki a domicilio",
    "sesiones holísticas Costa Rica",
    "terapias holísticas",
    "bienestar",
    "equilibrio",
    "relajación",
  ],
  openGraph: {
    type: "website",
    locale: brand.locale,
    siteName: brand.name,
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/brand/kurimba-simbolo.svg",
    apple: "/brand/kurimba-simbolo.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  ...(seo.googleSiteVerification
    ? { verification: { google: seo.googleSiteVerification } }
    : {}),
};

export const viewport: Viewport = {
  themeColor: "#faf7f2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CR" className={`${cormorant.variable} ${jost.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-bark focus:px-4 focus:py-2 focus:text-cream"
        >
          Saltar al contenido
        </a>
        <Navbar />
        <main id="contenido" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppFloat />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${brand.url}/#organization`,
                name: brand.name,
                url: brand.url,
                logo: `${brand.url}/brand/kurimba-logo-transparente.png`,
                email: contact.email,
                telephone: `+${whatsapp.number}`,
                sameAs: [contact.instagram.url],
              },
              {
                "@type": "WebSite",
                "@id": `${brand.url}/#website`,
                url: brand.url,
                name: brand.name,
                description: seo.homeDescription,
                inLanguage: "es-CR",
                publisher: { "@id": `${brand.url}/#organization` },
              },
            ],
          }}
        />
      </body>
    </html>
  );
}
