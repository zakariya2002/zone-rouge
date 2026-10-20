import type { Metadata } from "next";
import Card from "@/components/Card";
import { SITE_URL, byTag } from "@/data/articles";

const title = "Drive (Drivecar.io) et Qassim Rouahi : le dossier";
const description =
  "Tous nos articles sur Drive (Drivecar.io), le réseau d’intermédiation automobile fondé par Qassim Rouahi : portrait, méthode de vente, coulisses et équipe.";

export const metadata: Metadata = {
  title,
  description,
  keywords: ["Drive", "Drivecar.io", "Qassim Rouahi", "Drive franchise", "Léna Djafer", "vendre sa voiture"],
  alternates: { canonical: "/drive" },
  openGraph: { type: "website", url: "/drive", title, description, images: ["/media/drive/DSC03041.jpg"] },
};

export default function DrivePage() {
  const list = byTag("drive");
  const first = list.find((a) => a.heroLayout !== "split") ?? list[0];
  const rest = list.filter((a) => a !== first);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: title,
    description,
    url: `${SITE_URL}/drive`,
    about: {
      "@type": "Organization",
      name: "Drive (Drivecar.io)",
      alternateName: ["Drive", "Drivecar.io"],
      url: "https://drivefranchise.com/",
      founder: { "@type": "Person", name: "Qassim Rouahi" },
    },
    hasPart: list.map((a) => ({ "@type": "NewsArticle", headline: a.title, url: `${SITE_URL}/articles/${a.slug}` })),
  };

  return (
    <section className="catpage" style={{ "--cat": "#ff2a12" } as React.CSSProperties}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <header className="catpage-head">
        <p className="kicker">Dossier · {list.length} articles</p>
        <h1>Drive</h1>
        <p>
          Drive (Drivecar.io) est un réseau français d’intermédiation automobile fondé par Qassim Rouahi, qui veut
          digitaliser et sécuriser la vente de voitures entre particuliers.
        </p>
      </header>
      {first && <Card article={first} variant="lead" />}
      <div className="catpage-grid">
        {rest.map((a) => (
          <Card key={a.slug} article={a} />
        ))}
      </div>
    </section>
  );
}
