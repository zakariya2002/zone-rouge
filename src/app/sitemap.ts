import type { MetadataRoute } from "next";
import { ARTICLES, CATEGORY_ORDER, SITE_URL } from "@/data/articles";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/a-propos", ...CATEGORY_ORDER.map((c) => `/${c}`)].map((p) => ({
    url: `${SITE_URL}${p}`,
    changeFrequency: "daily" as const,
    priority: p === "" ? 1 : 0.8,
  }));
  const articles = ARTICLES.map((a) => ({
    url: `${SITE_URL}/articles/${a.slug}`,
    lastModified: a.date,
    changeFrequency: "weekly" as const,
    priority: 0.7,
    images: [a.image],
  }));
  return [...pages, ...articles];
}
