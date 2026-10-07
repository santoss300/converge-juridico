import Image from "next/image";

export default function Footer() {
  return (
    <footer
      id="footer"
      className="section"
      style={{ paddingBlock: "var(--sp-6)" }}
    >
      <div className="container">
        <p className="t-label" style={{ marginBottom: "var(--sp-5)" }}>
          <span className="t-accent">07</span>
          <span style={{ margin: "0 0.75em", opacity: 0.4 }}>—</span>
          Estudio
        </p>

        <div className="footer-grid">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "var(--sp-2)",
            }}
          >
            <Image
              src="/logo-white.png"
              alt=""
              width={26}
              height={26}
              style={{ objectFit: "contain", opacity: 0.6 }}
            />
            <span className="t-label" style={{ color: "var(--text-muted)" }}>
              Converge
            </span>
          </div>

          <div>
            <p className="t-sm">Estudio Jurídico Converge</p>
            <p className="t-sm">Salta, Argentina</p>
          </div>

          <div>
            <a
              href="https://wa.me/543874199487"
              className="t-sm nav-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp · 387 419-9487
            </a>
          </div>

          <div>
            <p className="t-sm">
              © {new Date().getFullYear()} · Todos los derechos reservados.
            </p>
            <p className="t-sm">
              Hecha por{" "}
              <a href="mailto:neworld555@gmail.com" className="nav-link">
                neworld555@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
