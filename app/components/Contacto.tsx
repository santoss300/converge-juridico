"use client";

import { useState } from "react";
import Captcha from "./Captcha";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", telefono: "", mensaje: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [showCaptcha, setShowCaptcha] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCaptcha(true);
  };

  const sendForm = async () => {
    setShowCaptcha(false);
    setStatus("sending");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("ok");
        setForm({ nombre: "", telefono: "", mensaje: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--bg-3)",
    border: "1px solid var(--line-2)",
    borderRadius: "var(--r-md)",
    padding: "14px 16px",
    fontFamily: "var(--font-body)",
    fontSize: "15px",
    color: "var(--fg-1)",
    outline: "none",
    transition: "border-color var(--dur-fast) var(--ease-soft)",
  };

  return (
    <section id="contacto" style={{ background: "var(--bg-1)" }}>
      <div className="container section">
        <div className="responsive-grid-2" style={{ alignItems: "start" }}>

          {/* Left: info */}
          <div>
            <p className="eyebrow" style={{ marginBottom: "24px" }}>Contacto</p>
            <h2 className="display-2" style={{ marginBottom: "24px" }}>
              Hablemos de tu caso.
            </h2>
            <span className="rule-gold" style={{ display: "block", marginBottom: "28px" }} />
            <p className="body-text" style={{ marginBottom: "0" }}>
              Contanos tu situación lo más detalladamente posible y nos ponemos en contacto a la brevedad. Honorarios reducidos con facilidades de pago.
            </p>
          </div>

          {/* Right: form */}
          <div>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div>
                <label className="meta" style={{ display: "block", marginBottom: "8px" }}>Nombre completo</label>
                <input
                  style={inputStyle}
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                />
              </div>
              <div>
                <label className="meta" style={{ display: "block", marginBottom: "8px" }}>Teléfono</label>
                <input
                  style={inputStyle}
                  type="tel"
                  placeholder="Tu número de contacto"
                  value={form.telefono}
                  onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                />
              </div>
              <div>
                <label className="meta" style={{ display: "block", marginBottom: "8px" }}>Consulta</label>
                <textarea
                  style={{ ...inputStyle, minHeight: "140px", resize: "vertical" }}
                  required
                  placeholder="Describí brevemente tu caso..."
                  value={form.mensaje}
                  onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                />
              </div>

              {!showCaptcha && (
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    width: "100%",
                    padding: "16px",
                    background: status === "sending" ? "var(--gold-700)" : "var(--gold-500)",
                    color: "var(--fg-on-gold)",
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "15px",
                    border: "none",
                    borderRadius: "var(--r-md)",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    letterSpacing: "0.03em",
                    transition: "background var(--dur-fast) var(--ease-soft), box-shadow var(--dur-fast) var(--ease-soft)",
                    boxShadow: status !== "sending" ? "var(--shadow-gold)" : "none",
                  }}
                >
                  {status === "sending" ? "Enviando..." : "Enviar consulta"}
                </button>
              )}

              {showCaptcha && (
                <Captcha
                  onConfirm={sendForm}
                  onCancel={() => setShowCaptcha(false)}
                />
              )}

              {status === "ok" && (
                <p style={{ color: "var(--success)", fontFamily: "var(--font-body)", fontSize: "14px", textAlign: "center" }}>
                  Consulta enviada. Nos comunicamos a la brevedad.
                </p>
              )}
              {status === "error" && (
                <p style={{ color: "var(--danger)", fontFamily: "var(--font-body)", fontSize: "14px", textAlign: "center" }}>
                  Hubo un error. Podés escribirnos directamente al WhatsApp.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
