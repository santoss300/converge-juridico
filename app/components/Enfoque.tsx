const valores = [
  {
    icon: "ph-handshake",
    title: "Compromiso real",
    desc: "Cada caso recibe atención personalizada. No somos un número de expediente — somos el estudio que atiende el teléfono.",
  },
  {
    icon: "ph-eye",
    title: "Claridad ante todo",
    desc: "Explicamos el proceso en términos simples. El cliente siempre sabe en qué etapa está su caso y qué se puede esperar.",
  },
  {
    icon: "ph-scales",
    title: "Criterio profesional",
    desc: "Cada decisión se toma con fundamento. La experiencia en litigio respalda cada estrategia que adoptamos.",
  },
];

export default function Enfoque() {
  return (
    <section style={{ background: "var(--bg-1)", borderBottom: "1px solid var(--line-1)" }}>
      <div className="container section">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Left: text */}
          <div style={{ position: "sticky", top: "120px" }}>
            <p className="eyebrow" style={{ marginBottom: "24px" }}>
              Nuestro enfoque
            </p>
            <h2 className="display-2" style={{ marginBottom: "28px" }}>
              El derecho al servicio de las personas.
            </h2>
            <span className="rule-gold" style={{ display: "block", marginBottom: "28px" }} />
            <p className="body-text" style={{ marginBottom: "20px" }}>
              En Converge creemos que un buen abogado no es solo quien conoce la ley,
              sino quien sabe acompañar al cliente en momentos de incertidumbre.
            </p>
            <p className="body-text">
              Trabajamos con discreción, respeto y una comunicación constante que
              permite tomar decisiones con información real. Porque el proceso legal
              no debería ser una caja negra para quien lo atraviesa.
            </p>
          </div>

          {/* Right: value cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {valores.map((v) => (
              <div
                key={v.title}
                className="card"
                style={{ padding: "28px 28px", display: "flex", gap: "20px", alignItems: "flex-start" }}
              >
                <i
                  className={`ph-thin ${v.icon}`}
                  style={{
                    fontSize: "28px",
                    color: "var(--gold-400)",
                    flexShrink: 0,
                    marginTop: "2px",
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-body)",
                      fontWeight: 600,
                      fontSize: "16px",
                      color: "var(--fg-1)",
                      marginBottom: "8px",
                    }}
                  >
                    {v.title}
                  </h3>
                  <p className="body-text" style={{ fontSize: "15px", color: "var(--fg-3)", lineHeight: 1.6 }}>
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
