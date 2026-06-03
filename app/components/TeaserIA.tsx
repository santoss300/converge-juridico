const agentes = [
  {
    icon: "ph-magnifying-glass",
    title: "Agente de investigación",
    desc: "Búsquedas en lenguaje natural sobre el Código Civil, Penal, Comercial, Laboral, resoluciones y jurisprudencia. Una herramienta de apoyo que reduce el tiempo de investigación sin reemplazar el criterio del profesional.",
  },
  {
    icon: "ph-file-text",
    title: "Agente de análisis documental",
    desc: "Asiste al abogado en la revisión de contratos, escrituras y expedientes, señalando cláusulas, plazos y puntos de atención. El análisis final y la estrategia siempre quedan en manos del profesional.",
  },
  {
    icon: "ph-pen-nib",
    title: "Agente de redacción",
    desc: "Sugiere estructuras y fundamentos normativos para demandas, contestaciones y escritos. Un punto de partida que el abogado adapta, corrige y firma con su criterio y experiencia.",
  },
  {
    icon: "ph-clock-countdown",
    title: "Disponible 24 horas",
    desc: "Apoyo disponible en cualquier momento para consultas de investigación o revisión de documentos. Un complemento para el estudio, no un sustituto del profesional que conoce el caso.",
  },
];

export default function TeaserIA() {
  return (
    <section
      style={{
        background: "var(--bg-0)",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid var(--line-1)",
      }}
    >
      {/* Large ambient glow */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "600px",
          background: "radial-gradient(ellipse, rgba(197,162,88,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div className="container section" style={{ position: "relative" }}>

        {/* Header */}
        <div style={{ textAlign: "center", maxWidth: "720px", margin: "0 auto 72px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "24px" }}>
            <i className="ph-thin ph-robot" style={{ fontSize: "22px", color: "var(--gold-400)" }} />
            <p className="eyebrow">Tecnología · Próximamente</p>
          </div>

          <h2 className="display-2" style={{ marginBottom: "24px" }}>
            Inteligencia artificial{" "}
            <em className="display-em">al servicio</em>
            <br />
            del derecho argentino.
          </h2>

          <span className="rule-gold" style={{ display: "block", margin: "0 auto 28px", width: "48px" }} />

          <p className="lead" style={{ marginBottom: "12px" }}>
            Converge está desarrollando el primer sistema de agentes de IA especializado
            en legislación argentina. No es un chatbot genérico — son agentes entrenados
            sobre los códigos, la jurisprudencia y la práctica procesal del país.
          </p>
          <p className="body-text" style={{ color: "var(--fg-3)" }}>
            Pensado para estudios jurídicos que quieren investigar más rápido,
            cometer menos errores y dedicar el tiempo a lo que realmente importa: sus clientes.
          </p>
        </div>

        {/* Agents grid */}
        <div className="responsive-grid-2-cards" style={{ marginBottom: "72px" }}>
          {agentes.map((a) => (
            <div
              key={a.title}
              className="card card-gold"
              style={{ padding: "32px", display: "flex", gap: "20px", alignItems: "flex-start" }}
            >
              <i
                className={`ph-thin ${a.icon}`}
                style={{ fontSize: "32px", color: "var(--gold-400)", flexShrink: 0, marginTop: "2px" }}
              />
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "var(--fg-1)",
                    marginBottom: "10px",
                  }}
                >
                  {a.title}
                </h3>
                <p className="body-text" style={{ fontSize: "15px", color: "var(--fg-2)", lineHeight: 1.65 }}>
                  {a.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA bottom */}
        <div
          style={{
            textAlign: "center",
            padding: "56px 48px",
            border: "1px solid var(--line-gold)",
            borderRadius: "var(--r-lg)",
            background: "var(--bg-2)",
            boxShadow: "var(--shadow-gold)",
            maxWidth: "680px",
            margin: "0 auto",
          }}
        >
          <i className="ph-thin ph-brain" style={{ fontSize: "44px", color: "var(--gold-400)", display: "block", marginBottom: "20px" }} />
          <h3 className="h2" style={{ marginBottom: "16px" }}>
            Sumate a la lista de acceso anticipado.
          </h3>
          <p className="body-text" style={{ color: "var(--fg-3)", marginBottom: "32px", maxWidth: "480px", margin: "0 auto 32px" }}>
            El sistema estará disponible para un grupo reducido de estudios antes del lanzamiento público.
            Si querés ser de los primeros, dejanos tus datos.
          </p>
          <a
            href="#contacto"
            style={{
              display: "inline-block",
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              fontWeight: 600,
              color: "var(--fg-on-gold)",
              background: "var(--gold-500)",
              padding: "14px 36px",
              borderRadius: "var(--r-pill)",
              textDecoration: "none",
              letterSpacing: "0.04em",
              boxShadow: "var(--shadow-gold)",
              transition: "background var(--dur-fast) var(--ease-soft)",
            }}
          >
            Quiero acceso anticipado
          </a>
        </div>

      </div>
    </section>
  );
}
