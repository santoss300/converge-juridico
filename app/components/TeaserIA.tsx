import Reveal from "./Reveal";

/* 03 — CONVERGE IA
   Va después de Perfil: el abogado que te atiende es el que construye
   la herramienta. No compite con el CTA principal: su acción es otra
   (acceso anticipado por mail), no "consultar".

   Regla de copy: nada que no coincida con lo que el producto hace hoy.
   Es RAG sobre una biblioteca propia, no un modelo "entrenado". */

const CAPACIDADES = [
  {
    folio: "a",
    titulo: "Consultas con cita",
    desc: "Pregunta en lenguaje natural sobre códigos, doctrina y manuales. Cada respuesta indica de qué artículo y de qué página sale, para poder verificarla.",
  },
  {
    folio: "b",
    titulo: "Análisis de expedientes",
    desc: "Lee el expediente —también a partir de una foto tomada con el celular— y marca partes, plazos y puntos a revisar.",
  },
  {
    folio: "c",
    titulo: "Escritos en .docx",
    desc: "Arma el borrador a partir de los modelos del propio estudio, listo para abrir en Word y corregir.",
  },
  {
    folio: "d",
    titulo: "En Tribunales",
    desc: "Funciona desde el celular, para consultar en el pasillo antes de entrar a una audiencia.",
  },
];

/* Ejemplo ilustrativo de una respuesta. Las citas son artículos reales
   del Código Civil y Comercial; el caso es inventado. */
const FUENTES = [
  { n: "1", ref: "CCyC art. 498", nota: "División de gananciales por mitades" },
  { n: "2", ref: "CCyC art. 2433", nota: "Cónyuge en concurrencia con descendientes" },
  { n: "3", ref: "CCyC art. 2426", nota: "Los hijos heredan por partes iguales" },
];

const MAILTO =
  "mailto:contacto@convergejuridico.com?subject=" +
  encodeURIComponent("Acceso anticipado — Converge IA");

export default function TeaserIA() {
  return (
    <section id="ia" className="section">
      <div className="container">
        <Reveal i={0} style={{ marginBottom: "var(--sp-6)" }}>
          <p className="t-label" style={{ marginBottom: "var(--sp-4)" }}>
            <span className="t-accent">03</span>
            <span style={{ margin: "0 0.75em", opacity: 0.4 }}>—</span>
            Converge IA
          </p>
          <h2 className="t-h2" style={{ maxWidth: "24ch" }}>
            La herramienta de IA que usamos en el estudio, todos los días.
          </h2>
          <hr className="rule-accent" style={{ margin: "var(--sp-5) 0" }} />
          <p className="t-lead" style={{ maxWidth: "58ch" }}>
            La construimos nosotros, sobre Claude. Busca en una biblioteca propia
            de códigos, doctrina y manuales, y responde con la cita exacta:
            artículo y página. Hoy la usamos en cada caso; pronto, en otros
            estudios jurídicos.
          </p>
        </Reveal>

        <div className="ia-layout">
          {/* La maqueta: mostrar el producto en vez de describirlo */}
          <Reveal i={1} as="figure" className="ia-demo" aria-label="Ejemplo ilustrativo de una respuesta de Converge IA">
            <div className="ia-demo-bar">
              <span className="t-folio t-accent">Converge IA</span>
              <span className="t-folio">Ejemplo ilustrativo</span>
            </div>

            <div className="ia-demo-body">
              <p className="ia-demo-q">
                <span className="t-accent" aria-hidden="true">›</span> Causante
                casado, dos hijos. Inmueble ganancial. ¿Qué parte le corresponde
                al cónyuge?
              </p>

              <p className="ia-demo-a">
                El cónyuge conserva su mitad como ganancial
                <sup className="t-accent">1</sup>. Sobre la mitad del causante no
                hereda: concurre con descendientes y no tiene parte en los
                gananciales del prefallecido<sup className="t-accent">2</sup>. Esa
                mitad se divide entre los dos hijos por partes iguales
                <sup className="t-accent">3</sup>.
              </p>

              <ol className="ia-demo-fuentes">
                {FUENTES.map((f) => (
                  <li key={f.n}>
                    <span className="t-folio t-accent">{f.n}</span>
                    <span className="ia-demo-ref">{f.ref}</span>
                    <span className="ia-demo-nota">{f.nota}</span>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <div className="ia-grid">
            {CAPACIDADES.map((a, n) => (
              <Reveal key={a.folio} i={n + 2} className="ia-item">
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
        </div>

        <Reveal i={6} className="ia-pie">
          <p className="t-body" style={{ maxWidth: "60ch", color: "var(--text-muted)" }}>
            No firma ni decide: el criterio y la firma son siempre del abogado. Si
            nos consultás por tu caso, esto significa una cosa: el tiempo que antes
            se iba en buscar ahora va a tu expediente.
          </p>
          <a href={MAILTO} className="btn btn-ghost">
            Quiero acceso anticipado
          </a>
        </Reveal>
      </div>
    </section>
  );
}
