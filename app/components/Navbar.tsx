"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="nav" data-scrolled={scrolled}>
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "var(--sp-3)",
          paddingBlock: "var(--sp-3)",
        }}
      >
        <a
          href="#hero"
          style={{ display: "flex", alignItems: "center", gap: "var(--sp-2)" }}
        >
          <Image
            src="/logo-white.png"
            alt=""
            width={30}
            height={30}
            style={{ objectFit: "contain" }}
          />
          <span
            className="t-label"
            style={{ color: "var(--text)", letterSpacing: "0.22em" }}
          >
            Converge
          </span>
        </a>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--sp-4)",
          }}
        >
          <a href="#areas" className="t-label nav-link hide-mobile">
            Áreas
          </a>
          <a href="#practicas" className="t-label nav-link hide-mobile">
            Prácticas
          </a>
          <a
            href="#contacto"
            className="btn btn-primary"
            style={{ padding: "10px var(--sp-3)" }}
          >
            Contanos tu caso
          </a>
        </nav>
      </div>
    </header>
  );
}
