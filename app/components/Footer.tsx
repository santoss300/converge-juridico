import Image from "next/image";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-0)",
        borderTop: "1px solid var(--line-1)",
        padding: "48px 32px",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Image src="/logo-gold.png" alt="Converge" width={28} height={28} style={{ objectFit: "contain", opacity: 0.7 }} />
          <span className="meta" style={{ color: "var(--fg-4)" }}>
            Estudio Jurídico Converge · Salta, Argentina - Hecha por <span style={{ textTransform: "none" }}>neworld555@gmail.com</span>
          </span>
        </div>
        <p className="small" style={{ color: "var(--fg-4)" }}>
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
