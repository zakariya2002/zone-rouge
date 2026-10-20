import Link from "next/link";
import Logo from "./Logo";
import { CATEGORIES, CATEGORY_ORDER } from "@/data/articles";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-news">
        <div>
          <p className="kicker">Newsletter</p>
          <h2>Le plein d’actu, chaque vendredi.</h2>
        </div>
        <form className="footer-form" action="#">
          <input type="email" required placeholder="ton@email.fr" aria-label="Adresse email" />
          <button type="submit">S’abonner</button>
        </form>
      </div>
      <div className="footer-grid">
        <div>
          <p className="kicker">Rubriques</p>
          <ul>
            {CATEGORY_ORDER.map((c) => (
              <li key={c}>
                <Link href={`/${c}`}>{CATEGORIES[c].label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="kicker">Zone Rouge</p>
          <ul>
            <li>
              <Link href="/drive">Dossier Drive</Link>
            </li>
            <li>
              <Link href="/a-propos">À propos</Link>
            </li>
            <li>
              <Link href="/a-propos#contact">Contact</Link>
            </li>
            <li>
              <Link href="/a-propos#mentions">Mentions légales</Link>
            </li>
          </ul>
        </div>
        <div className="footer-pitch">
          <p>
            Zone Rouge décrypte l’automobile, la moto et le sport mécanique sans langue de bois.
            Guides, analyses, culture : tout ce qui roule, à fond.
          </p>
        </div>
      </div>
      <div className="footer-giant" aria-hidden>
        <Logo size={1} />
      </div>
      <p className="footer-legal">© 2026 Zone Rouge · Tous droits réservés</p>
    </footer>
  );
}
