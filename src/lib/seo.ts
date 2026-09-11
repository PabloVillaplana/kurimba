import type { Metadata } from "next";
import { brand } from "@/config/site";

type Args = {
  /** Título de la página (sin el sufijo "· Kurimba", se agrega solo). */
  title: string;
  /** Descripción para buscadores. Ideal: 120–155 caracteres. */
  description: string;
  /** Ruta relativa, por ejemplo "/sesiones/reiki". */
  path: string;
  /** Si es true, el título se usa tal cual, sin sufijo. */
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

/**
 * Construye la metadata SEO completa de una página:
 * título, descripción, canónica, Open Graph y Twitter coherentes entre sí.
 */
export function buildMetadata({ title, description, path, absoluteTitle, noIndex }: Args): Metadata {
  const url = path === "/" ? brand.url : `${brand.url}${path}`;
  const fullTitle = absoluteTitle ? title : `${title} · ${brand.name}`;
  const image = {
    url: "/opengraph-image",
    width: 1200,
    height: 630,
    alt: `${brand.name} · ${brand.slogan}`,
  };

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: brand.locale,
      siteName: brand.name,
      url,
      title: fullTitle,
      description,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image.url],
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  };
}
