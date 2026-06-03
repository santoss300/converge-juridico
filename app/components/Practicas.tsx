"use client";

import { useState } from "react";
import Captcha from "./Captcha";

const ramas = [
  "Derecho Civil",
  "Derecho de Familia",
  "Derecho Sucesorio",
  "Derecho Comercial",
  "Derecho Laboral",
  "Derecho Penal",
  "Derecho Administrativo",
  "Otra",
];

const beneficios = [
  {
    icon: "ph-file-text",
    title: "Redacción de escritos reales",
    desc: "Demandas, oficios y presentaciones que ingresan efectivamente ante los tribunales.",
  },
  {
    icon: "ph-folder-open",
    title: "Manejo de expedientes",
    desc: "Seguimiento de causas activas: cédulas, plazos, notificaciones y estado procesal.",
  },
  {
    icon: "ph-users",
    title: "Contacto con clientes",
    desc: "Participación en entrevistas y comunicaciones bajo supervisión directa del estudio.",
  },
  {
    icon: "ph-graduation-cap",
    title: "Formación práctica real",
    desc: "No simulaciones — trabajo sobre casos vivos con orientación profesional constante.",
  },
];

export default function Practicas() {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    whatsapp: "",
    correo: "",
    rama: "",
    experiencia: "",
  });
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
      const res = await fetch("/api/practicas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("ok");
        setForm({ nombre: "", apellido: "", whatsapp: "", correo: "", rama: "", experiencia: "" });
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
    <section id="practicas" style={{ background: "var(--bg-0)", borderBottom: "1px solid var(--line-1)" }}>
      <div className="container section">

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "72px", maxWidth: "680px", margin: "0 auto 72px" }}>
          <p className="eyebrow" style={{ marginBottom: "20px" }}>Pasantías</p>
          <h2 className="h1" style={{ marginBottom: "24px" }}>
            Tu primer caso real te está esperando.
          </h2>
          <span className="rule-gold" style={{ display: "block", margin: "0 auto 28px", width: "48px" }} />
          <p className="body-text" style={{ color: "var(--fg-2)" }}>
            En Converge abrimos las puertas a estudiantes de derecho que quieran dejar atrás
            la teoría y sumergirse en la práctica profesional real — con supervisión, criterio
            y casos que importan.
          </p>
        </div>

        {/* Benefits carousel */}
        <div className="carousel" style={{ marginBottom: "80px" }}>
          {beneficios.map((b) => (
            <div
              key={b.title}
              className="card carousel-item"
              style={{ padding: "28px", display: "flex", gap: "20px", alignItems: "flex-start" }}
            >
              <i
                className={`ph-thin ${b.icon}`}
                style={{ fontSize: "28px", color: "var(--gold-400)", flexShrink: 0, marginTop: "2px" }}
              />
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-body)",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "var(--fg-1)",
                    marginBottom: "8px",
                  }}
                >
                  {b.title}
                </h3>
                <p className="body-text" style={{ fontSize: "15px", color: "var(--fg-3)", lineHeight: 1.6 }}>
                  {b.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Form section */}
        <div className="responsive-grid-2" style={{ alignItems: "start" }}>
          {/* Left: pitch */}
          <div className="sticky-desktop">
            <p className="eyebrow" style={{ marginBottom: "24px" }}>Postulate</p>
            <h2 className="display-2" style={{ marginBottom: "28px" }}>
              Empezá a construir tu experiencia.
            </h2>
            <span className="rule-gold" style={{ display: "block", marginBottom: "28px" }} />
            <p className="body-text" style={{ marginBottom: "20px", color: "var(--fg-2)" }}>
              Completá el formulario y nos ponemos en contacto para coordinar una
              entrevista. No hace falta experiencia previa — sí hace falta compromiso
              y ganas de aprender haciendo.
            </p>
          </div>

          {/* Right: form */}
          <div>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                <div>
                  <label className="meta" style={{ display: "block", marginBottom: "8px" }}>Nombre</label>
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
                  <label className="meta" style={{ display: "block", marginBottom: "8px" }}>Apellido</label>
                  <input
                    style={inputStyle}
                    type="text"
                    required
                    placeholder="Tu apellido"
                    value={form.apellido}
                    onChange={(e) => setForm({ ...form, apellido: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="meta" style={{ display: "block", marginBottom: "8px" }}>WhatsApp</label>
                <input
                  style={inputStyle}
                  type="tel"
                  required
                  placeholder="+54 9 387 000-0000"
                  value={form.whatsapp}
                  onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                />
              </div>

              <div>
                <label className="meta" style={{ display: "block", marginBottom: "8px" }}>Correo electrónico</label>
                <input
                  style={inputStyle}
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  value={form.correo}
                  onChange={(e) => setForm({ ...form, correo: e.target.value })}
                />
              </div>

              <div>
                <label className="meta" style={{ display: "block", marginBottom: "8px" }}>
                  Rama del derecho que te interesa
                </label>
                <select
                  style={{ ...inputStyle, appearance: "none", cursor: "pointer" }}
                  required
                  value={form.rama}
                  onChange={(e) => setForm({ ...form, rama: e.target.value })}
                >
                  <option value="" disabled>Seleccioná una rama...</option>
                  {ramas.map((r) => (
                    <option key={r} value={r} style={{ background: "var(--bg-3)" }}>{r}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="meta" style={{ display: "block", marginBottom: "8px" }}>
                  Experiencia previa{" "}
                  <span style={{ color: "var(--fg-4)", fontFamily: "var(--font-body)", fontSize: "12px", textTransform: "none", letterSpacing: 0 }}>
                    (opcional)
                  </span>
                </label>
                <textarea
                  style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
                  placeholder="Contanos si hiciste alguna pasantía, trabajaste en un estudio, o tenés alguna experiencia relacionada con el derecho..."
                  value={form.experiencia}
                  onChange={(e) => setForm({ ...form, experiencia: e.target.value })}
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
                  {status === "sending" ? "Enviando..." : "Enviar postulación"}
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
                  ¡Recibimos tu postulación! Te contactamos a la brevedad.
                </p>
              )}
              {status === "error" && (
                <p style={{ color: "var(--danger)", fontFamily: "var(--font-body)", fontSize: "14px", textAlign: "center" }}>
                  Hubo un error. Escribinos directamente al WhatsApp.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
