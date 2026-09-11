import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { brand } from "@/config/site";
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

const title = `${brand.name} · ${brand.slogan}`;

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: title,
    template: `%s · ${brand.name}`,
  },
  description: brand.description,
  keywords: [
    "Kurimba",
    "Reiki Costa Rica",
    "sesiones holísticas",
    "bienestar",
    "equilibrio",
    "relajación",
    "terapias holísticas Costa Rica",
  ],
  openGraph: {
    type: "website",
    locale: brand.locale,
    url: brand.url,
    siteName: brand.name,
    title,
    description: brand.description,
    images: [
      {
        url: "/brand/kurimba-logo-fondo-oscuro.png",
        width: 1040,
        height: 1040,
        alt: `${brand.name} · ${brand.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: brand.description,
    images: ["/brand/kurimba-logo-fondo-oscuro.png"],
  },
  icons: {
    icon: "/brand/kurimba-simbolo.svg",
    apple: "/brand/kurimba-simbolo.png",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#faf7f2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es-CR" className={`${cormorant.variable} ${jost.variable} h-full`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
