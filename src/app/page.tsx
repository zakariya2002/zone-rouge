import Link from "next/link";
import Card from "@/components/Card";
import { ARTICLES, CATEGORIES, CATEGORY_ORDER, byCategory } from "@/data/articles";

export default function Home() {
  const featured = ARTICLES.filter((a) => a.featured);
  const lead = featured[0] ?? ARTICLES[0];
  const side = ARTICLES.filter((a) => a !== lead).slice(0, 4);
  const used = new Set([lead, ...side].map((a) => a.slug));
  const guide = byCategory("guides").find((a) => a.featured && !used.has(a.slug)) ?? byCategory("guides")[0];
  used.add(guide.slug);

  return (
    <>
      <section className="hero">
        <Card article={lead} variant="lead" />
        <div className="hero-side">
          <p className="kicker">À la une</p>
          {side.map((a) => (
            <Card key={a.slug} article={a} variant="row" />
          ))}
        </div>
      </section>

      {CATEGORY_ORDER.slice(0, 3).map((c) => (
        <CategoryBlock key={c} category={c} used={used} />
      ))}

      <section className="spotlight" style={{ "--cat": CATEGORIES.guides.color } as React.CSSProperties}>
        <div className="spotlight-text">
          <p className="kicker">Le guide de la semaine</p>
          <h2>{guide.title}</h2>
          <p>{guide.excerpt}</p>
          <Link href={`/articles/${guide.slug}`} className="btn">
            Lire le guide
          </Link>
        </div>
        <div className="spotlight-media">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={guide.image} alt={guide.imageAlt} loading="lazy" />
        </div>
      </section>

      {CATEGORY_ORDER.slice(3).map((c) => (
        <CategoryBlock key={c} category={c} used={used} />
      ))}
    </>
  );
}

function CategoryBlock({ category, used }: { category: keyof typeof CATEGORIES; used: Set<string> }) {
  const cat = CATEGORIES[category];
  const list = byCategory(category).filter((a) => !used.has(a.slug)).slice(0, 4);
  list.forEach((a) => used.add(a.slug));
  if (!list.length) return null;
  return (
    <section className="block" style={{ "--cat": cat.color } as React.CSSProperties}>
      <header className="block-head">
        <h2>{cat.label}</h2>
        <p>{cat.tagline}</p>
        <Link href={`/${category}`} className="block-all">
          Tout voir →
        </Link>
      </header>
      <div className="block-grid">
        <Card article={list[0]} variant="tall" />
        <div className="block-list">
          {list.slice(1).map((a) => (
            <Card key={a.slug} article={a} variant="row" />
          ))}
        </div>
      </div>
    </section>
  );
}
