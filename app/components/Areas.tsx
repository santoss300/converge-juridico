import Reveal from "./Reveal";

/* 04 — ÁREAS
   Sin cards. Sin cajas. Sin sombras.
   Un índice foliado separado por reglas de 1px: la gramática del expediente.
   Cada línea nombra LA SITUACIÓN, no la doctrina — el que llega se reconoce. */

const AREAS = [
  {
    folio: "01",
    titulo: "Sucesiones",
    linea:
      "Murió un familiar y quedó una casa, un auto o una cuenta a su nombre. Declaratoria de herederos, partición e inscripción.",
  },
  {
    folio: "02",
    titulo: "Juicio ejecutivo",
    linea:
      "Tenés un documento que ya prueba la deuda. Acá no se discute si te deben: se cobra.",
  },
  {
    folio: "03",
    titulo: "Cobro de deudas",
    linea:
      "Te deben y dejaron de atenderte el teléfono. Primero se intenta el acuerdo; si no, se demanda.",
  },
  {
    folio: "04",
    titulo: "Pagarés",
    linea:
      "Firmaron un pagaré y venció. Es el título más rápido de ejecutar que hay en el código.",
  },
  {
    folio: "05",
    titulo: "Alimentos",
    linea:
      "La cuota no llega, llega tarde o no alcanza. Se puede fijar, aumentar y ejecutar lo que ya se adeuda.",
  },
  {
    folio: "06",
    titulo: "Divorcios",
    linea:
      "Con acuerdo se resuelve en meses. Sin acuerdo también se resuelve, pero conviene saber de antemano en qué te estás metiendo.",
  },
];

export default function Areas() {
  return (
    <section id="areas" className="section">
      <div className="container">
        <Reveal i={0} style={{ marginBottom: "var(--sp-6)" }}>
          <p className="t-label" style={{ marginBottom: "var(--sp-3)" }}>
            <span className="t-accent">04</span>
            <span style={{ margin: "0 0.75em", opacity: 0.4 }}>—</span>
            Áreas de práctica
          </p>
          <h2 className="t-h2" style={{ maxWidth: "20ch" }}>
            Buscá la tuya.
          </h2>
        </Reveal>

        <ul style={{ listStyle: "none" }}>
          {AREAS.map((a, n) => (
            <Reveal as="li" key={a.folio} i={n}>
              <a href="#contacto" className="area-row">
                <span className="t-folio area-folio">{a.folio}</span>
                <span className="t-h3 area-titulo">{a.titulo}</span>
                <span className="t-body area-linea">{a.linea}</span>
                <svg
                  className="area-flecha"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M4 10h12M11 5l5 5-5 5"
                    stroke="currentColor"
                    strokeWidth="1.25"
                    strokeLinecap="square"
                  />
                </svg>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
