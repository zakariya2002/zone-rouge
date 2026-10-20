import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Card from "@/components/Card";
import {
  ARTICLES,
  CATEGORIES,
  SITE_NAME,
  SITE_URL,
  byCategory,
  byTag,
  formatDate,
  getArticle,
} from "@/data/articles";


export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/articles/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const title = article.seoTitle ?? article.title;
  const description = article.seoDescription ?? article.excerpt;
  const url = `/articles/${article.slug}`;
  return {
    title,
    description,
    keywords: article.keywords,
    authors: [{ name: article.author }],
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description,
      publishedTime: article.date,
      authors: [article.author],
      tags: article.keywords,
      images: [{ url: article.image, alt: article.imageAlt }],
    },
    twitter: { card: "summary_large_image", title, description, images: [article.image] },
  };
}

export default async function ArticlePage({ params }: PageProps<"/articles/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const cat = CATEGORIES[article.category];
  const isDrive = article.tags?.includes("drive") ?? false;
  const dossier = isDrive ? byTag("drive").filter((a) => a.slug !== article.slug) : [];
  const sameCat = byCategory(article.category).filter((a) => a.slug !== article.slug);
  const sidebar = (dossier.length ? dossier : sameCat).slice(0, 5);
  const more = ARTICLES.filter((a) => a.category !== article.category).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.seoTitle ?? article.title,
    description: article.seoDescription ?? article.excerpt,
    image: [article.image],
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "fr-FR",
    mainEntityOfPage: `${SITE_URL}/articles/${article.slug}`,
    articleSection: cat.label,
    keywords: article.keywords?.join(", "),
    author: { "@type": "Person", name: article.author },
    publisher: { "@type": "NewsMediaOrganization", name: SITE_NAME, url: SITE_URL },
    ...(article.people && { about: article.people.map((p) => ({ "@type": "Person", ...p })) }),
    ...(isDrive && {
      mentions: [
        {
          "@type": "Organization",
          name: "Drive (Drivecar.io)",
          alternateName: ["Drive", "Drivecar.io", "Drive franchise"],
          url: "https://drivefranchise.com/",
          sameAs: ["https://www.linkedin.com/company/drivecar-io/"],
          founder: { "@type": "Person", name: "Qassim Rouahi" },
        },
      ],
    }),
  };

  return (
    <article className="post" style={{ "--cat": cat.color } as React.CSSProperties}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <header className={`post-hero ${article.heroLayout === "split" ? "post-hero--split" : ""}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={article.image} alt={article.imageAlt} style={{ objectPosition: article.imagePosition }} />
        <div className="post-hero-inner">
          <nav className="crumbs">
            <Link href="/">Accueil</Link> / <Link href={`/${article.category}`}>{cat.label}</Link>
          </nav>
          <h1>{article.title}</h1>
          <p className="post-excerpt">{article.excerpt}</p>
          <p className="post-meta">
            <span>Par {article.author}</span>
            <span>{formatDate(article.date)}</span>
            <span>{article.readTime} min de lecture</span>
          </p>
        </div>
      </header>

      <div className="post-layout">
        <div className="post-body">
          {article.body.map((b, i) => {
            switch (b.type) {
              case "h2":
                return <h2 key={i}>{b.text}</h2>;
              case "quote":
                return (
                  <blockquote key={i}>
                    <p>{b.text}</p>
                    {b.source && <cite>{b.source}</cite>}
                  </blockquote>
                );
              case "list":
                return (
                  <ul key={i}>
                    {b.items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                );
              case "img":
                return (
                  <figure key={i}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={b.src} alt={b.alt} loading="lazy" />
                    {b.caption && <figcaption>{b.caption}</figcaption>}
                  </figure>
                );
              default:
                return <p key={i}>{b.text}</p>;
            }
          })}
          {isDrive && (
            <aside className="post-crosslink">
              <p className="kicker">À lire aussi</p>
              <p>
                Retrouvez notre dossier sur Drive et Qassim Rouahi, ainsi que les portraits publiés par{" "}
                <a href="https://le-grand-debrief.vercel.app/drive">Le Grand Débrief</a>.
              </p>
            </aside>
          )}
          {article.tags && (
            <p className="post-tags">
              {article.tags.map((t) => (
                <span key={t}>#{t}</span>
              ))}
            </p>
          )}
        </div>
        <aside className="post-aside">
          <p className="kicker">{dossier.length ? "Dossier Drive" : `Aussi en ${cat.label}`}</p>
          {sidebar.map((a) => (
            <Card key={a.slug} article={a} variant="row" />
          ))}
          <Link href={dossier.length ? "/drive" : `/${article.category}`} className="btn btn--ghost">
            {dossier.length ? "Tout le dossier Drive" : "Toute la rubrique"}
          </Link>
        </aside>
      </div>

      <section className="post-more">
        <p className="kicker">Ça peut vous plaire</p>
        <div className="catpage-grid">
          {more.map((a) => (
            <Card key={a.slug} article={a} />
          ))}
        </div>
      </section>
    </article>
  );
}
