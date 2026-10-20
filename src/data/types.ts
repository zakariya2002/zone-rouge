export type Category = "auto" | "moto" | "electrique" | "guides" | "sport" | "pratique";

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; source?: string }
  | { type: "list"; items: string[] }
  | { type: "img"; src: string; alt: string; caption?: string };

export type Article = {
  slug: string;
  category: Category;
  title: string;
  excerpt: string;
  image: string; // https://images.unsplash.com/photo-<id>?w=1600&q=80
  imageAlt: string;
  imagePosition?: string;
  author: string;
  date: string; // ISO yyyy-mm-dd
  readTime: number;
  featured?: boolean;
  tags?: string[];
  seoTitle?: string;
  seoDescription?: string;
  keywords?: string[];
  body: Block[];
};
