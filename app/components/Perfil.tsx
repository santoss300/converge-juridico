import Image from "next/image";
import Reveal from "./Reveal";

/* 02 — PERFIL
   La foto es el activo de confianza principal de un estudio unipersonal:
   se queda, y se trata como una lámina de expediente — borde de 1px,
   sin radio, sin sombra. */

export default function Perfil() {
  return (
    <section id="perfil" className="section" style={{ background: "var(--bg-1)" }}>
      <div className="container">
        <Reveal i={0} style={{ marginBottom: "var(--sp-6)" }}>
          <p className="t-label">
            <span className="t-accent">02</span>
            <span style={{ margin: "0 0.75em", opacity: 0.4 }}>—</span>
            Quién te atiende
          </p>
        </Reveal>

        <div className="perfil-grid">
          <Reveal i={1}>
            <figure className="perfil-foto">
              <Image
                src="/foto-ignacio.jpg"
                alt="Ignacio Facundo Ruíz, abogado del Estudio Jurídico Converge"
                fill
                sizes="(max-width: 900px) 100vw, 40vw"
                style={{ objectFit: "cover", objectPosition: "center top" }}
                priority
              />
              {/* Degradé que tapa el logo impreso en la esquina de la foto */}
              <span className="perfil-fade" aria-hidden="true" />
            </figure>
          </Reveal>

          <Reveal i={2}>
            <h2 className="t-h2">Ignacio Facundo Ruíz</h2>

            <p
              className="t-label"
              style={{ marginTop: "var(--sp-2)", color: "var(--accent)" }}
            >
              Abogado · Salta
            </p>

            <hr className="rule-accent" style={{ margin: "var(--sp-5) 0" }} />

            <p className="t-body" style={{ marginBottom: "var(--sp-4)" }}>
              Somos un estudio chico, y lo decimos de frente: tu expediente no es
              el número doscientos de una pila. Cuando mandás un mensaje te
              responde el abogado que lo lleva, no una secretaria que toma nota.
            </p>

            <p className="t-body" style={{ marginBottom: "var(--sp-6)" }}>
              Trabajamos con una regla: si no podés explicarle a otro en qué
              estado está tu juicio, no te lo explicamos bien.
            </p>

            <a href="#contacto" className="btn btn-ghost">
              Contanos tu caso
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
