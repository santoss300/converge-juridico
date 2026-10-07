import Reveal from "./Reveal";

/* 06 — EN DESARROLLO
   Cierre. No compite con el CTA principal: su acción es distinta
   (acceso anticipado), no "consultar". */

const AGENTES = [
  {
    folio: "a",
    titulo: "Investigación",
    desc: "Búsqueda en lenguaje natural sobre códigos, resoluciones y jurisprudencia. Devuelve la fuente, no una opinión.",
  },
  {
    folio: "b",
    titulo: "Lectura de documentación",
    desc: "Señala cláusulas, plazos y puntos de atención en contratos, escrituras y expedientes. El criterio sigue siendo del abogado.",
  },
  {
    folio: "c",
    titulo: "Borradores de escritos",
    desc: "Propone estructura y fundamentos normativos. Lo que se presenta lo corrige y lo firma una persona.",
  },
];

export default function TeaserIA() {
  return (
    <section id="ia" className="section">
      <div className="container">
        <Reveal i={0} style={{ marginBottom: "var(--sp-6)" }}>
          <p className="t-label" style={{ marginBottom: "var(--sp-4)" }}>
            <span className="t-accent">06</span>
            <span style={{ margin: "0 0.75em", opacity: 0.4 }}>—</span>
            En desarrollo
          </p>
          <h2 className="t-h2" style={{ maxWidth: "24ch" }}>
            Estamos construyendo una herramienta de IA para estudios jurídicos.
          </h2>
          <hr className="rule-accent" style={{ margin: "var(--sp-5) 0" }} />
          <p className="t-lead" style={{ maxWidth: "56ch" }}>
            No firma, no decide y no reemplaza al abogado: le saca de encima las
            horas que no requieren criterio.
          </p>
        </Reveal>

        <div className="ia-grid">
          {AGENTES.map((a, n) => (
            <Reveal key={a.folio} i={n + 1} className="ia-item">
              <span className="t-folio t-accent">{a.folio}</span>
              <h3
                className="t-h3"
                style={{ marginBlock: "var(--sp-2)", fontSize: "var(--step-lead)" }}
              >
                {a.titulo}
              </h3>
              <p className="t-sm" style={{ color: "var(--text-muted)" }}>
                {a.desc}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal i={4} style={{ marginTop: "var(--sp-6)" }}>
          <a href="#contacto" className="btn btn-ghost">
            Quiero acceso anticipado
          </a>
        </Reveal>
      </div>
    </section>
  );
}
