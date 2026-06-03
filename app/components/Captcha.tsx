"use client";

import { useState, useEffect, useCallback } from "react";

const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function randomCode(len = 5) {
  return Array.from({ length: len }, () => CHARS[Math.floor(Math.random() * CHARS.length)]).join("");
}

interface LetterProp { rot: number; dy: number; size: number; gold: boolean; }

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
}

export default function Captcha({ onConfirm, onCancel }: Props) {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);
  const [letters, setLetters] = useState<LetterProp[]>([]);

  const generate = useCallback((clearError = false) => {
    const c = randomCode();
    setCode(c);
    setInput("");
    if (clearError) setError(false);
    setLetters(
      Array.from({ length: c.length }, (_, i) => ({
        rot: Math.random() * 22 - 11,
        dy: Math.random() * 7 - 3.5,
        size: Math.random() * 8 + 20,
        gold: i % 3 === 1,
      }))
    );
  }, []);

  useEffect(() => { generate(true); }, [generate]);

  const verify = () => {
    if (input.trim().toUpperCase() === code) {
      onConfirm();
    } else {
      setError(true);
      generate();
    }
  };

  const inputStyle: React.CSSProperties = {
    flex: 1,
    background: "var(--bg-3)",
    border: "1px solid var(--line-2)",
    borderRadius: "var(--r-md)",
    padding: "12px 16px",
    fontFamily: "var(--font-body)",
    fontSize: "15px",
    color: "var(--fg-1)",
    outline: "none",
    letterSpacing: "0.12em",
  };

  return (
    <div
      style={{
        background: "var(--bg-2)",
        border: "1px solid var(--line-gold)",
        borderRadius: "var(--r-lg)",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        boxShadow: "var(--shadow-gold)",
        animation: "fadeRise 0.3s var(--ease-out) both",
      }}
    >
      <p className="meta" style={{ color: "var(--gold-400)" }}>Verificación de seguridad</p>

      {/* CAPTCHA visual */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            background: "var(--bg-3)",
            border: "1px solid var(--line-2)",
            borderRadius: "var(--r-md)",
            padding: "14px 20px",
            display: "flex",
            alignItems: "center",
            gap: "3px",
            position: "relative",
            overflow: "hidden",
            userSelect: "none",
            minWidth: "160px",
          }}
        >
          {/* Noise lines */}
          {[35, 55, 70].map((top, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                left: 0, right: 0,
                top: `${top}%`,
                height: "1px",
                background: `rgba(197,162,88,${0.08 + i * 0.04})`,
                transform: `rotate(${-3 + i * 3}deg)`,
                pointerEvents: "none",
              }}
            />
          ))}
          {code.split("").map((char, i) => (
            <span
              key={`${code}-${i}`}
              style={{
                display: "inline-block",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: `${letters[i]?.size ?? 22}px`,
                color: letters[i]?.gold ? "var(--gold-400)" : "var(--fg-1)",
                transform: `rotate(${letters[i]?.rot ?? 0}deg) translateY(${letters[i]?.dy ?? 0}px)`,
              }}
            >
              {char}
            </span>
          ))}
        </div>

        {/* Refresh */}
        <button
          type="button"
          onClick={() => generate(true)}
          title="Nuevo código"
          style={{
            background: "transparent",
            border: "1px solid var(--line-2)",
            borderRadius: "var(--r-sm)",
            padding: "10px",
            color: "var(--fg-3)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "color var(--dur-fast) var(--ease-soft), border-color var(--dur-fast) var(--ease-soft)",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.color = "var(--gold-400)"; e.currentTarget.style.borderColor = "var(--line-gold)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.color = "var(--fg-3)"; e.currentTarget.style.borderColor = "var(--line-2)"; }}
        >
          <i className="ph-light ph-arrow-clockwise" style={{ fontSize: "18px" }} />
        </button>
      </div>

      {/* Input + actions */}
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          style={inputStyle}
          type="text"
          maxLength={5}
          placeholder="Ingresá el código"
          value={input}
          autoFocus
          onChange={(e) => { setInput(e.target.value.toUpperCase()); setError(false); }}
          onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); verify(); } }}
        />
        <button
          type="button"
          onClick={verify}
          style={{
            padding: "12px 20px",
            background: "var(--gold-500)",
            color: "var(--fg-on-gold)",
            fontFamily: "var(--font-body)",
            fontWeight: 600,
            fontSize: "14px",
            border: "none",
            borderRadius: "var(--r-md)",
            cursor: "pointer",
            whiteSpace: "nowrap",
            boxShadow: "var(--shadow-gold)",
          }}
        >
          Confirmar
        </button>
      </div>

      {error && (
        <p style={{ color: "var(--danger)", fontFamily: "var(--font-body)", fontSize: "13px" }}>
          Código incorrecto. Ingresá el nuevo código que aparece arriba.
        </p>
      )}

      <button
        type="button"
        onClick={onCancel}
        style={{
          background: "transparent",
          border: "none",
          color: "var(--fg-4)",
          fontFamily: "var(--font-body)",
          fontSize: "13px",
          cursor: "pointer",
          textAlign: "left",
          padding: 0,
        }}
      >
        Cancelar
      </button>
    </div>
  );
}
