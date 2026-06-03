const areas = [
  {
    icon: "ph-scroll",
    title: "Derecho Sucesorio",
    desc: "Acompañamos el proceso de herencias y sucesiones con claridad y respeto por los tiempos de cada familia.",
  },
  {
    icon: "ph-gavel",
    title: "Proceso Ejecutivo",
    desc: "Iniciamos y gestionamos procesos ejecutivos para la protección efectiva de derechos patrimoniales.",
  },
  {
    icon: "ph-hand-coins",
    title: "Cobro de Deudas",
    desc: "Recuperación judicial y extrajudicial de acreencias, con estrategia y seguimiento en cada etapa.",
  },
  {
    icon: "ph-note",
    title: "Cobro de Pagarés",
    desc: "Ejecución de títulos valores. Defendemos su crédito con los instrumentos que la ley provee.",
  },
  {
    icon: "ph-baby",
    title: "Alimentos",
    desc: "Fijación, modificación y ejecución de cuotas alimentarias. Los derechos de los menores, primero.",
  },
  {
    icon: "ph-house-line",
    title: "Divorcios",
    desc: "Separaciones con o sin acuerdo, con un enfoque que prioriza el bienestar de toda la familia.",
  },
];

export default function Areas() {
  return (
    <section id="areas" style={{ background: "var(--bg-0)", borderBottom: "1px solid var(--line-1)" }}>
      <div className="container section">
        <div style={{ textAlign: "center", marginBottom: "72px" }}>
          <p className="eyebrow" style={{ marginBottom: "20px" }}>
            Áreas de práctica
          </p>
          <h2 className="h1">Lo que hacemos, bien hecho.</h2>
        </div>

        <div className="responsive-grid-3">
          {areas.map((area) => (
            <div key={area.title} className="card" style={{ padding: "36px 32px" }}>
              <i
                className={`ph-thin ${area.icon}`}
                style={{
                  fontSize: "36px",
                  color: "var(--gold-400)",
                  display: "block",
                  marginBottom: "20px",
                }}
              />
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 600,
                  fontSize: "20px",
                  color: "var(--fg-1)",
                  marginBottom: "12px",
                  lineHeight: 1.2,
                }}
              >
                {area.title}
              </h3>
              <p className="body-text" style={{ fontSize: "15px", color: "var(--fg-3)" }}>
                {area.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
