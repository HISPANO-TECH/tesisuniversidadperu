import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";
import { UNIVERSITIES } from "@/lib/universities";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["/", "/sobre-nosotros/", "/contacto/", ...UNIVERSITIES.map((u) => `/${u.slug}/`)];
  return pages.map((p) => ({
    url: `${SITE.url}${p}`,
    changeFrequency: "monthly",
    priority: p === "/" ? 1 : p.startsWith("/tesis") || p.startsWith("/asesoria") ? 0.9 : 0.6,
  }));
}
