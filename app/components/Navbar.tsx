"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background var(--dur) var(--ease-soft), backdrop-filter var(--dur) var(--ease-soft)",
        background: scrolled ? "rgba(10,10,12,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--line-1)" : "1px solid transparent",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 32px",
        }}
      >
        <a href="#hero" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <Image src="/logo-gold.png" alt="Converge" width={36} height={36} style={{ objectFit: "contain" }} />
          <span
            style={{
              fontFamily: "var(--font-label)",
              fontSize: "15px",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--fg-1)",
            }}
          >
            Converge
          </span>
        </a>

        <nav style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <a
            href="#practicas"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 400,
              color: "var(--fg-3)",
              textDecoration: "none",
              transition: "color var(--dur-fast) var(--ease-soft)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--fg-2)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--fg-3)")}
          >
            Realizá tus prácticas con nosotros
          </a>
          <a
            href="#contacto"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "13px",
              fontWeight: 500,
              color: "var(--fg-on-gold)",
              background: "var(--gold-500)",
              padding: "9px 20px",
              borderRadius: "var(--r-pill)",
              textDecoration: "none",
              transition: "background var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--gold-400)";
              e.currentTarget.style.boxShadow = "var(--shadow-gold)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--gold-500)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Consultanos
          </a>
        </nav>
      </div>
    </header>
  );
}
