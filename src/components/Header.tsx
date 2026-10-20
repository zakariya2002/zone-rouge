"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { CATEGORIES, CATEGORY_ORDER } from "@/data/articles";

export default function Header({ today }: { today: string }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="header">
      <div className="topbar">
        <span>{today}</span>
        <span className="topbar-mid">Le média auto · moto · sport mécanique</span>
        <Link href="/a-propos">À propos</Link>
      </div>
      <div className="mainbar">
        <Link href="/" className="header-logo" onClick={() => setOpen(false)}>
          <Logo />
        </Link>
        <nav className={`nav ${open ? "is-open" : ""}`}>
          {CATEGORY_ORDER.map((c) => (
            <Link
              key={c}
              href={`/${c}`}
              onClick={() => setOpen(false)}
              className={pathname === `/${c}` ? "is-active" : ""}
              style={{ "--cat": CATEGORIES[c].color } as React.CSSProperties}
            >
              {CATEGORIES[c].label}
            </Link>
          ))}
        </nav>
        <button
          className={`burger ${open ? "is-open" : ""}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
