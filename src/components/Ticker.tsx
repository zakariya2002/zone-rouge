import Link from "next/link";
import { ARTICLES, CATEGORIES } from "@/data/articles";

export default function Ticker() {
  const items = ARTICLES.slice(0, 12);
  const row = (key: string) => (
    <div className="ticker-row" key={key} aria-hidden={key === "b"}>
      {items.map((a) => (
        <Link key={a.slug} href={`/articles/${a.slug}`} tabIndex={key === "b" ? -1 : undefined}>
          <b style={{ color: CATEGORIES[a.category].color }}>{CATEGORIES[a.category].label}</b>
          {a.title}
        </Link>
      ))}
    </div>
  );
  return (
    <div className="ticker">
      <span className="ticker-label">En continu</span>
      <div className="ticker-viewport">
        <div className="ticker-track">
          {row("a")}
          {row("b")}
        </div>
      </div>
    </div>
  );
}
