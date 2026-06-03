import Image from "next/image";

export default function Perfil() {
  return (
    <section id="perfil" style={{ background: "var(--bg-1)", borderBottom: "1px solid var(--line-1)" }}>
      <div className="container section">
        <div className="responsive-grid-2" style={{ alignItems: "center" }}>
          {/* Portrait placeholder */}
          <div style={{ position: "relative" }}>
            <div
              style={{
                width: "100%",
                aspectRatio: "3/4",
                maxWidth: "420px",
                background: "var(--bg-2)",
                borderRadius: "var(--r-lg)",
                border: "1px solid var(--line-2)",
                boxShadow: "var(--shadow-md)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <Image
                src="/foto-ignacio.jpg"
                alt="Ignacio Facundo Ruiz — Abogado"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />

              {/* Fade bottom */}
              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                height: "28%",
                background: "linear-gradient(to top, var(--bg-1) 0%, transparent 100%)",
                pointerEvents: "none",
              }} />
              {/* Fade esquina inferior derecha — tapa logo */}
              <div style={{
                position: "absolute",
                bottom: 0, right: 0,
                width: "55%",
                height: "22%",
                background: "linear-gradient(to top left, var(--bg-1) 30%, transparent 75%)",
                pointerEvents: "none",
              }} />
            </div>
            {/* Gold accent line */}
            <div
              style={{
                position: "absolute",
                bottom: "-1px",
                left: "0",
                width: "80px",
                height: "3px",
                background: "var(--gold-500)",
                borderRadius: "var(--r-pill)",
              }}
            />
          </div>

          {/* Bio */}
          <div>
            <p className="eyebrow" style={{ marginBottom: "24px" }}>
              El estudio
            </p>
            <h2 className="display-2" style={{ marginBottom: "24px", textAlign: "center" }}>
              Ignacio Facundo<br />Ruíz
            </h2>
            <span className="rule-gold" style={{ marginBottom: "28px", display: "block" }} />

            <p className="meta" style={{ marginBottom: "24px", color: "var(--gold-400)" }}>
              Abogado · Matrícula profesional
            </p>

            <p className="body-text" style={{ marginBottom: "24px" }}>
              En Converge, cada caso se aborda con la atención que merece.
              El compromiso con el cliente no termina en la firma de un documento
              — acompaña cada etapa del proceso hasta su resolución.
            </p>

            <p className="body-text" style={{ marginBottom: "40px" }}>
              Con enfoque en el derecho de familia, sucesiones y cobros,
              el estudio trabaja con claridad y cercanía, sin tecnicismos
              innecesarios. Porque entender lo que está pasando es parte
              del servicio.
            </p>

            <a
              href="#contacto"
              style={{
                display: "inline-block",
                fontFamily: "var(--font-body)",
                fontSize: "14px",
                fontWeight: 500,
                color: "var(--gold-400)",
                border: "1px solid var(--line-gold)",
                padding: "12px 28px",
                borderRadius: "var(--r-pill)",
                textDecoration: "none",
                letterSpacing: "0.03em",
                transition: "all var(--dur-fast) var(--ease-soft)",
              }}
            >
              Iniciar una consulta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
