"use client";

import { useState } from "react";
import Captcha from "./Captcha";
import Reveal from "./Reveal";

/* 06 — PRÁCTICAS
   Secundario por anatomía: cede protagonismo al contacto.
   Copy honesto (no es un puesto rentado) — dicho antes, no después. */

const RAMAS = [
  "Derecho Civil",
  "Derecho de Familia",
  "Derecho Sucesorio",
  "Derecho Comercial",
  "Derecho Laboral",
  "Derecho Penal",
  "Derecho Administrativo",
  "Otra",
];

const QUE_SE_HACE = [
  {
    folio: "01",
    titulo: "Escritos que se presentan",
    desc: "Demandas, oficios y presentaciones que ingresan efectivamente ante los tribunales.",
  },
  {
    folio: "02",
    titulo: "Expedientes vivos",
    desc: "Seguimiento de causas activas: cédulas, plazos, notificaciones y estado procesal.",
  },
  {
    folio: "03",
    titulo: "Entrevistas con clientes",
    desc: "Participación en reuniones y comunicaciones, siempre con supervisión directa.",
  },
];

type Estado = "idle" | "enviando" | "ok" | "error" | "limite";

const MENSAJES: Record<string, { texto: string; tono: "ok" | "mal" }> = {
  ok: {
    texto:
      "Recibimos tu postulación. Si el perfil encaja te escribimos por mail o WhatsApp.",
    tono: "ok",
  },
  error: {
    texto:
      "No pudimos enviar tu postulación. Escribinos por WhatsApp al 387 419-9487.",
    tono: "mal",
  },
  limite: {
    texto: "Ya recibimos tu postulación. No hace falta que la repitas.",
    tono: "mal",
  },
};

const VACIO = {
  nombre: "",
  apellido: "",
  whatsapp: "",
  correo: "",
  rama: "",
  experiencia: "",
};

export default function Practicas() {
  const [form, setForm] = useState(VACIO);
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
      const res = await fetch("/api/practicas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setEstado("ok");
        setForm(VACIO);
      } else if (res.status === 429) {
        setEstado("limite");
      } else {
        setEstado("error");
      }
    } catch {
      setEstado("error");
    }
  };

  const set = (k: keyof typeof VACIO) => (v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  const aviso = MENSAJES[estado];

  return (
    <section id="practicas" className="section">
      <div className="container">
        <Reveal i={0} style={{ marginBottom: "var(--sp-6)" }}>
          <p className="t-label" style={{ marginBottom: "var(--sp-4)" }}>
            <span className="t-accent">06</span>
            <span style={{ margin: "0 0.75em", opacity: 0.4 }}>—</span>
            Prácticas
          </p>
          <h2 className="t-h2" style={{ maxWidth: "22ch" }}>
            Si estás estudiando derecho en Salta.
          </h2>
          <hr className="rule-accent" style={{ margin: "var(--sp-5) 0" }} />
          <p className="t-lead" style={{ maxWidth: "58ch" }}>
            No es un puesto rentado ni una promesa de trabajo, y preferimos
            decirlo antes que después. Es entrar a un expediente real: leerlo,
            seguirlo y ver cómo se decide cada paso.
          </p>
        </Reveal>

        <div className="ia-grid" style={{ marginBottom: "var(--sp-7)" }}>
          {QUE_SE_HACE.map((b, n) => (
            <Reveal key={b.folio} i={n + 1} className="ia-item">
              <span className="t-folio t-accent">{b.folio}</span>
              <h3
                className="t-h3"
                style={{
                  marginBlock: "var(--sp-2)",
                  fontSize: "var(--step-lead)",
                }}
              >
                {b.titulo}
              </h3>
              <p className="t-sm" style={{ color: "var(--text-muted)" }}>
                {b.desc}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal i={4}>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--sp-3)",
              maxWidth: "640px",
            }}
          >
            <div className="campo-par">
              <div>
                <label htmlFor="p-nombre" className="t-label campo-label">
                  Nombre
                </label>
                <input
                  id="p-nombre"
                  className="field"
                  type="text"
                  required
                  autoComplete="given-name"
                  value={form.nombre}
                  onChange={(e) => set("nombre")(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="p-apellido" className="t-label campo-label">
                  Apellido
                </label>
                <input
                  id="p-apellido"
                  className="field"
                  type="text"
                  required
                  autoComplete="family-name"
                  value={form.apellido}
                  onChange={(e) => set("apellido")(e.target.value)}
                />
              </div>
            </div>

            <div className="campo-par">
              <div>
                <label htmlFor="p-wa" className="t-label campo-label">
                  WhatsApp
                </label>
                <input
                  id="p-wa"
                  className="field"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={form.whatsapp}
                  onChange={(e) => set("whatsapp")(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="p-mail" className="t-label campo-label">
                  Correo
                </label>
                <input
                  id="p-mail"
                  className="field"
                  type="email"
                  required
                  autoComplete="email"
                  value={form.correo}
                  onChange={(e) => set("correo")(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="p-rama" className="t-label campo-label">
                Rama que te interesa
              </label>
              <select
                id="p-rama"
                className="field"
                required
                value={form.rama}
                onChange={(e) => set("rama")(e.target.value)}
              >
                <option value="">Elegí una</option>
                {RAMAS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="p-exp" className="t-label campo-label">
                En qué año estás y qué te interesa
              </label>
              <textarea
                id="p-exp"
                className="field"
                required
                placeholder="Contanos en qué año de la carrera estás y por qué te interesa esta rama."
                value={form.experiencia}
                onChange={(e) => set("experiencia")(e.target.value)}
                style={{ minHeight: "120px", resize: "vertical" }}
              />
            </div>

            {!showCaptcha && (
              <button
                type="submit"
                className="btn btn-ghost"
                disabled={estado === "enviando"}
                aria-busy={estado === "enviando"}
                style={{ justifyContent: "center" }}
              >
                {estado === "enviando" ? "Enviando…" : "Postularme"}
              </button>
            )}

            {showCaptcha && (
              <Captcha
                onConfirm={sendForm}
                onCancel={() => setShowCaptcha(false)}
              />
            )}

            <p role="status" aria-live="polite" className="aviso-wrap">
              {aviso && (
                <span className="t-sm aviso" data-tono={aviso.tono}>
                  {aviso.texto}
                </span>
              )}
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
