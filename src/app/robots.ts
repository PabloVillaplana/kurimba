import type { MetadataRoute } from "next";
import { brand } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/agendar"] }],
    sitemap: `${brand.url}/sitemap.xml`,
    host: brand.url,
  };
}
