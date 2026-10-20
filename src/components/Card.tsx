import Link from "next/link";
import { CATEGORIES, shortDate, type Article } from "@/data/articles";

type Variant = "lead" | "tall" | "row" | "plain";

export default function Card({ article, variant = "plain" }: { article: Article; variant?: Variant }) {
  const cat = CATEGORIES[article.category];
  return (
    <Link
      href={`/articles/${article.slug}`}
      className={`card card--${variant}`}
      style={{ "--cat": cat.color } as React.CSSProperties}
    >
      <div className="card-media">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={article.image}
          alt={article.imageAlt}
          loading={variant === "lead" ? "eager" : "lazy"}
          style={{ objectPosition: article.imagePosition }}
        />
      </div>
      <div className="card-body">
        <p className="card-meta">
          <span className="card-cat">{cat.label}</span>
          <span>{shortDate(article.date)}</span>
          <span>{article.readTime} min</span>
        </p>
        <h3 className="card-title">{article.title}</h3>
        {(variant === "lead" || variant === "tall") && <p className="card-excerpt">{article.excerpt}</p>}
      </div>
    </Link>
  );
}
