"use client";

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/543874199487?text=Hola%2C%20quisiera%20hacer%20una%20consulta."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Consultar por WhatsApp"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "28px",
        zIndex: 100,
        width: "56px",
        height: "56px",
        borderRadius: "50%",
        background: "var(--gold-500)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "var(--shadow-md), var(--shadow-gold)",
        transition: "transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-fast) var(--ease-out)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "var(--shadow-lg), var(--shadow-gold)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "var(--shadow-md), var(--shadow-gold)";
      }}
    >
      <i className="ph-light ph-whatsapp-logo" style={{ fontSize: "28px", color: "var(--fg-on-gold)" }} />
    </a>
  );
}
