import Reveal from "./Reveal";

/* 01 — HERO
   Composición editorial/rota: el titular no está centrado ni es un bloque.
   Las tres líneas se escalonan como las entradas de un expediente. */

const LINEAS = [
  "Una sucesión que no avanza.",
  "Una cuota que no llega.",
  "Un pagaré que nadie paga.",
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        isolation: "isolate",
      }}
    >
      <div className="ambient" aria-hidden="true" />

      {/* Grid visible — eje 8 de Editorial/Swiss */}
      <div
        aria-hidden="true"
        className="hide-mobile"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -1,
          backgroundImage:
            "repeating-linear-gradient(to right, var(--line-1) 0 1px, transparent 1px calc(100% / 12))",
          backgroundSize: "100% 100%",
          opacity: 0.6,
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ paddingBlock: "var(--sp-8)" }}>
        <Reveal i={0}>
          <p className="t-label" style={{ marginBottom: "var(--sp-5)" }}>
            <span className="t-accent">01</span>
            <span style={{ margin: "0 0.75em", opacity: 0.4 }}>—</span>
            Salta · Argentina
          </p>
        </Reveal>

        <h1 className="t-h1" style={{ marginBottom: "var(--sp-4)" }}>
          {LINEAS.map((linea, n) => (
            <Reveal
              as="span"
              key={linea}
              i={n + 1}
              className="hero-linea"
              style={
                {
                  display: "block",
                  "--indent": `${n * 1.5}ch`,
                } as React.CSSProperties
              }
            >
              {linea}
            </Reveal>
          ))}
        </h1>

        <Reveal i={4}>
          <hr className="rule-accent" style={{ margin: "var(--sp-5) 0" }} />
        </Reveal>

        <Reveal i={5}>
          <p className="t-lead" style={{ maxWidth: "54ch" }}>
            En la primera reunión te decimos tres cosas: si tenés caso, cuánto
            cuesta y cuánto puede tardar. Nada más, y nada menos.
          </p>
        </Reveal>

        <Reveal
          i={6}
          style={{
            display: "flex",
            gap: "var(--sp-3)",
            flexWrap: "wrap",
            marginTop: "var(--sp-6)",
          }}
        >
          <a href="#contacto" className="btn btn-primary">
            Contanos tu caso
          </a>
          <a
            href="https://wa.me/543874199487"
            className="btn btn-ghost"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </Reveal>

        <Reveal i={7}>
          <a href="#ia" className="t-label hero-ia">
            <span className="t-accent">03</span>
            Converge IA — la herramienta que usamos en el estudio →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
