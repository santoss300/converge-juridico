"use client";

import { useState } from "react";
import Captcha from "./Captcha";
import Reveal from "./Reveal";

/* 05 — CONTACTO
   Estados de UI (Etapa 3): enviando · éxito · error del usuario ·
   error del sistema · rate limit. Ninguno termina en callejón:
   todos ofrecen WhatsApp como salida. */

type Estado = "idle" | "enviando" | "ok" | "error" | "limite";

const MENSAJES: Record<string, { texto: string; tono: "ok" | "mal" }> = {
  ok: {
    texto:
      "Listo. Te respondemos dentro de las próximas 24 a 48 horas hábiles. Si es urgente, escribinos por WhatsApp.",
    tono: "ok",
  },
  error: {
    texto:
      "No pudimos enviar tu consulta. Escribinos por WhatsApp al 387 419-9487 y lo resolvemos por ahí.",
    tono: "mal",
  },
  limite: {
    texto:
      "Ya recibimos tu consulta. Si necesitás agregar algo, mandanos un WhatsApp.",
    tono: "mal",
  },
};

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", telefono: "", mensaje: "" });
  const [estado, setEstado] = useState<Estado>("idle");
  const [showCaptcha, setShowCaptcha] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCaptcha(true);
  };

  const sendForm = async () => {
    setShowCaptcha(false);
    setEstado("enviando");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setEstado("ok");
        setForm({ nombre: "", telefono: "", mensaje: "" });
      } else if (res.status === 429) {
        setEstado("limite");
      } else {
        setEstado("error");
      }
    } catch {
      setEstado("error");
    }
  };

  const aviso = MENSAJES[estado];

  return (
    <section id="contacto" className="section" style={{ background: "var(--bg-1)" }}>
      <div className="container">
        <Reveal i={0} style={{ marginBottom: "var(--sp-6)" }}>
          <p className="t-label">
            <span className="t-accent">05</span>
            <span style={{ margin: "0 0.75em", opacity: 0.4 }}>—</span>
            Contacto
          </p>
        </Reveal>

        <div className="grid-2" style={{ alignItems: "start" }}>
          <Reveal i={1}>
            <h2 className="t-h2">Contanos qué pasó.</h2>
            <hr className="rule-accent" style={{ margin: "var(--sp-5) 0" }} />
            <p className="t-body" style={{ maxWidth: "48ch" }}>
              Escribí lo que puedas con tus palabras. Si falta algún dato lo
              preguntamos nosotros — no hace falta que sepas cómo se llama tu
              problema para poder consultarlo.
            </p>
          </Reveal>

          <Reveal i={2}>
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "var(--sp-3)",
              }}
            >
              <div>
                <label htmlFor="c-nombre" className="t-label campo-label">
                  Nombre completo
                </label>
                <input
                  id="c-nombre"
                  className="field"
                  type="text"
                  required
                  autoComplete="name"
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="c-tel" className="t-label campo-label">
                  Teléfono
                </label>
                <input
                  id="c-tel"
                  className="field"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Para poder llamarte"
                  value={form.telefono}
                  onChange={(e) =>
                    setForm({ ...form, telefono: e.target.value })
                  }
                />
              </div>

              <div>
                <label htmlFor="c-msg" className="t-label campo-label">
                  Tu consulta
                </label>
                <textarea
                  id="c-msg"
                  className="field"
                  required
                  placeholder="Qué pasó, desde cuándo y qué necesitás resolver."
                  value={form.mensaje}
                  onChange={(e) =>
                    setForm({ ...form, mensaje: e.target.value })
                  }
                  style={{ minHeight: "150px", resize: "vertical" }}
                />
              </div>

              {!showCaptcha && (
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={estado === "enviando"}
                  aria-busy={estado === "enviando"}
                  style={{ justifyContent: "center" }}
                >
                  {estado === "enviando"
                    ? "Enviando tu consulta…"
                    : "Enviar consulta"}
                </button>
              )}

              {showCaptcha && (
                <Captcha
                  onConfirm={sendForm}
                  onCancel={() => setShowCaptcha(false)}
                />
              )}

              {/* Los estados se anuncian al lector de pantalla */}
              <p role="status" aria-live="polite" className="aviso-wrap">
                {aviso && (
                  <span
                    className="t-sm aviso"
                    data-tono={aviso.tono}
                  >
                    {aviso.texto}
                  </span>
                )}
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
