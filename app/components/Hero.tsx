import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "var(--bg-0)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Radial vignette */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(197,162,88,0.05) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Hairline top border */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: "var(--line-1)" }} />

      <div className="container hero-inner">
        <div style={{ maxWidth: "760px" }}>
          {/* Eyebrow */}
          <p className="eyebrow" style={{ marginBottom: "32px" }}>
            Estudio Jurídico · Salta, Argentina
          </p>

          {/* Headline */}
          <h1 className="display-1" style={{ marginBottom: "32px" }}>
            Soluciones jurídicas{" "}
            <em className="display-em">claras</em>
            <br />
            para problemas reales.
          </h1>

          {/* Hairline */}
          <span className="rule-gold" style={{ marginBottom: "32px" }} />

          {/* Lead */}
          <p className="lead" style={{ maxWidth: "520px", marginBottom: "48px", marginTop: "32px" }}>
            Acompañamos a personas y familias en los momentos que más importan,
            con criterio, compromiso y claridad en cada paso del proceso.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="#contacto"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--fg-on-gold)",
                background: "var(--gold-500)",
                padding: "14px 32px",
                borderRadius: "var(--r-pill)",
                textDecoration: "none",
                letterSpacing: "0.03em",
                transition: "background var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)",
                boxShadow: "var(--shadow-gold)",
              }}
            >
              Solicitar una consulta en nuestro estudio jurídico
            </a>
          </div>
        </div>

        {/* Decorative logo mark — large, faint, right side */}
        <div
          className="hide-on-mobile"
          style={{
            position: "absolute",
            right: "64px",
            top: "50%",
            transform: "translateY(-50%)",
            opacity: 0.04,
            pointerEvents: "none",
          }}
        >
          <Image src="/logo-white.png" alt="" width={400} height={400} style={{ objectFit: "contain" }} />
        </div>
      </div>

      {/* Bottom hairline */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "1px", background: "var(--line-1)" }} />
    </section>
  );
}
