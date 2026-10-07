"use client";

import { useEffect, useState } from "react";

/* ═══ SIGNATURE ELEMENT — "El rail de foliado" ═══
   En tribunales el expediente se folia: cada hoja lleva su número
   correlativo. Acá el sitio se folia.

   Escrito a mano, como manda el protocolo: el gesto de firma nunca
   sale de una librería. Ver docs/design-system.md § Signature element. */

export const SECCIONES = [
  { id: "hero", folio: "01", label: "Inicio" },
  { id: "perfil", folio: "02", label: "Quién te atiende" },
  { id: "areas", folio: "03", label: "Áreas" },
  { id: "contacto", folio: "04", label: "Contacto" },
  { id: "practicas", folio: "05", label: "Prácticas" },
  { id: "ia", folio: "06", label: "En desarrollo" },
  { id: "footer", folio: "07", label: "Estudio" },
] as const;

export default function Rail() {
  const [activa, setActiva] = useState<string>("hero");

  useEffect(() => {
    /* La regla que se dibuja. Solo escribe una custom property —
       el pintado lo resuelve CSS con transform: scaleY(). */
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const recorrido =
          document.documentElement.scrollHeight - window.innerHeight;
        const p = recorrido > 0 ? window.scrollY / recorrido : 0;
        document.documentElement.style.setProperty(
          "--rail-progress",
          String(Math.min(1, Math.max(0, p))),
        );
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    /* Sección activa */
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiva(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    for (const s of SECCIONES) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      {/* Desktop ≥1280px: el rail completo */}
      <nav className="rail" aria-label="Índice de secciones">
        <span className="rail-line" aria-hidden="true" />
        {SECCIONES.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rail-item"
            data-active={activa === s.id}
            aria-current={activa === s.id ? "true" : undefined}
          >
            <span className="t-folio" style={{ color: "inherit" }}>
              {s.folio}
            </span>
            <span className="rail-item-label">{s.label}</span>
          </a>
        ))}
      </nav>

      {/* Mobile: el signature sobrevive como barra de 2px */}
      <div className="rail-mobile" aria-hidden="true" />
    </>
  );
}
