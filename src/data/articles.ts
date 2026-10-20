import type { Article, Category } from "./types";
import { articles as auto } from "./auto";
import { articles as moto } from "./moto";
import { articles as electrique } from "./electrique";
import { articles as guides } from "./guides";
import { articles as sport } from "./sport";
import { articles as pratique } from "./pratique";
import { articles as drive } from "./drive";

export type { Article, Category } from "./types";

export const SITE_URL = "https://zone-rouge-media.vercel.app";
export const SITE_NAME = "Zone Rouge";

export const CATEGORIES: Record<Category, { label: string; color: string; tagline: string }> = {
  auto: { label: "Auto", color: "#ff2a12", tagline: "Le marché, les modèles, la culture." },
  moto: { label: "Moto", color: "#ffb400", tagline: "Deux roues, zéro compromis." },
  electrique: { label: "Électrique", color: "#00e08a", tagline: "La mobilité qui se branche." },
  guides: { label: "Guides", color: "#4da3ff", tagline: "Bien choisir, bien acheter." },
  sport: { label: "Sport auto", color: "#ff6a00", tagline: "Circuits, rallyes et paddocks." },
  pratique: { label: "Pratique", color: "#d4d4d4", tagline: "Entretien, permis, assurance." },
};

export const CATEGORY_ORDER = Object.keys(CATEGORIES) as Category[];

export const ARTICLES: Article[] = [...auto, ...moto, ...electrique, ...guides, ...sport, ...pratique, ...drive].sort(
  (a, b) => b.date.localeCompare(a.date),
);

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

export function byTag(tag: string) {
  return ARTICLES.filter((a) => a.tags?.includes(tag));
}

export function byCategory(category: Category) {
  return ARTICLES.filter((a) => a.category === category);
}

export function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function shortDate(iso: string) {
  return new Date(iso + "T12:00:00")
    .toLocaleDateString("fr-FR", { day: "2-digit", month: "short" })
    .replace(".", "");
}
