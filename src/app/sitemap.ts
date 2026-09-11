import type { MetadataRoute } from "next";
import { brand, routes, sessions } from "@/config/site";

/** Sitemap generado automáticamente en /sitemap.xml */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const base = brand.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}${routes.home}`, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}${routes.sessions}`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}${routes.about}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}${routes.faq}`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}${routes.contact}`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}${routes.privacy}`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const sessionPages: MetadataRoute.Sitemap = sessions
    .filter((s) => s.status === "available" && s.page)
    .map((s) => ({
      url: `${base}${routes.session(s.id)}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    }));

  return [...staticPages, ...sessionPages];
}
