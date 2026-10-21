import type { Metadata } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_NAME, SITE_URL } from "@/data/articles";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  axes: ["wdth"],
});
const mono = JetBrains_Mono({ variable: "--font-mono", subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} : le média auto, moto et sport mécanique`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Zone Rouge, le média auto et moto : actualité, guides d’achat, électrique, sport automobile, entretien et conseils pratiques pour passionnés et conducteurs.",
  openGraph: { siteName: SITE_NAME, locale: "fr_FR", type: "website" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${archivo.variable} ${mono.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
