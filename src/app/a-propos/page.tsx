import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
  description: "Zone Rouge, média indépendant consacré à l’automobile, à la moto et au sport mécanique.",
  alternates: { canonical: "/a-propos" },
};

export default function About() {
  return (
    <section className="about">
      <p className="kicker">À propos</p>
      <h1>On roule pour vous.</h1>
      <p>
        Zone Rouge est un média indépendant consacré à l’automobile, à la moto et au sport mécanique. Notre
        ambition : rendre la passion accessible, aider chacun à mieux choisir, entretenir et comprendre ce qui
        roule, sans jargon ni publi-rédactionnel déguisé.
      </p>
      <h2 id="contact">Contact</h2>
      <p>Une idée de sujet, une remarque, un partenariat ? Le formulaire de contact arrive très bientôt.</p>
      <h2 id="mentions">Mentions légales</h2>
      <p>
        Zone Rouge, publication en ligne. Les photographies d’illustration proviennent d’Unsplash et sont
        utilisées conformément à sa licence.
      </p>
    </section>
  );
}
