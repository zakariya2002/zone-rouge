import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Card from "@/components/Card";
import { CATEGORIES, CATEGORY_ORDER, byCategory, type Category } from "@/data/articles";


export function generateStaticParams() {
  return CATEGORY_ORDER.map((category) => ({ category }));
}

const isCategory = (c: string): c is Category => c in CATEGORIES;

export async function generateMetadata({ params }: PageProps<"/[category]">): Promise<Metadata> {
  const { category } = await params;
  if (!isCategory(category)) return {};
  const cat = CATEGORIES[category];
  return {
    title: `${cat.label} : actualité, analyses et conseils`,
    description: `${cat.label} sur Zone Rouge. ${cat.tagline} Tous nos articles, guides et décryptages.`,
    alternates: { canonical: `/${category}` },
  };
}

export default async function CategoryPage({ params }: PageProps<"/[category]">) {
  const { category } = await params;
  if (!isCategory(category)) notFound();
  const cat = CATEGORIES[category];
  const list = byCategory(category);
  const [first, ...rest] = list;

  return (
    <section className="catpage" style={{ "--cat": cat.color } as React.CSSProperties}>
      <header className="catpage-head">
        <p className="kicker">{list.length} articles</p>
        <h1>{cat.label}</h1>
        <p>{cat.tagline}</p>
      </header>
      {first && <Card article={first} variant="lead" />}
      <div className="catpage-grid">
        {rest.map((a) => (
          <Card key={a.slug} article={a} variant="plain" />
        ))}
      </div>
    </section>
  );
}
