"use client";

import { useEffect, useRef } from "react";
import type { ElementType, ReactNode } from "react";

/* Reveal al scroll — uno de los tres "gratis" del protocolo.
   Siempre sube ("esto llegó"), nunca baja. Stagger por --i.

   Dos garantías de que NADA queda oculto (el bug de forthetimes.law):
   1. Sin la clase js-loaded en <html>, el CSS no oculta nada.
   2. Lo que ya está en pantalla al montar se revela de inmediato,
      sin depender de que el IntersectionObserver dispare a tiempo
      — que es exactamente lo que fallaba y dejaba el hero en negro. */

export default function Reveal({
  children,
  as: Tag = "div",
  i = 0,
  className = "",
  style,
  ...rest
}: {
  children: ReactNode;
  as?: ElementType;
  i?: number;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: unknown;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const mostrar = () => el.classList.add("is-visible");

    /* 2 — ya visible al montar: no esperamos al observer */
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      mostrar();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          mostrar();
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.1 },
    );
    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={{ "--i": i, ...style } as React.CSSProperties}
      {...rest}
    >
      {children}
    </Tag>
  );
}
