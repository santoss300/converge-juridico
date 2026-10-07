"use client";

import { useState, useCallback } from "react";

const CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

function randomCode(len = 5) {
  return Array.from(
    { length: len },
    () => CHARS[Math.floor(Math.random() * CHARS.length)],
  ).join("");
}

interface LetterProp {
  rot: number;
  dy: number;
  size: number;
  acento: boolean;
}

interface Props {
  onConfirm: () => void;
  onCancel: () => void;
}

/* Desafío completo en una función pura: se genera de forma perezosa en
   useState, no dentro de un efecto (evita renders en cascada). */
function makeChallenge() {
  const code = randomCode();
  return {
    code,
    letters: Array.from({ length: code.length }, (_, i) => ({
      rot: Math.random() * 22 - 11,
      dy: Math.random() * 7 - 3.5,
      size: Math.random() * 8 + 20,
      acento: i % 3 === 1,
    })) as LetterProp[],
  };
}

export default function Captcha({ onConfirm, onCancel }: Props) {
  const [challenge, setChallenge] = useState(makeChallenge);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const { code, letters } = challenge;

  const generate = useCallback((clearError = false) => {
    setChallenge(makeChallenge());
    setInput("");
    if (clearError) setError(false);
  }, []);

  const verify = () => {
    if (input.trim().toUpperCase() === code) {
      onConfirm();
    } else {
      setError(true);
      generate();
    }
  };

  return (
    <div className="captcha">
      <p className="t-label" style={{ color: "var(--accent)" }}>
        Verificación
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "var(--sp-2)" }}>
        <div className="captcha-code" aria-hidden="true">
          {[35, 55, 70].map((top, i) => (
            <span
              key={i}
              className="captcha-ruido"
              style={{
                top: `${top}%`,
                opacity: 0.1 + i * 0.05,
                transform: `rotate(${-3 + i * 3}deg)`,
              }}
            />
          ))}
          {code.split("").map((char, i) => (
            <span
              key={`${code}-${i}`}
              style={{
                display: "inline-block",
                fontFamily: "var(--font-mono-brand), ui-monospace, monospace",
                fontWeight: 600,
                fontSize: `${letters[i]?.size ?? 22}px`,
                color: letters[i]?.acento ? "var(--accent)" : "var(--text)",
                transform: `rotate(${letters[i]?.rot ?? 0}deg) translateY(${letters[i]?.dy ?? 0}px)`,
              }}
            >
              {char}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => generate(true)}
          className="captcha-refresh"
          aria-label="Generar un código nuevo"
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M20 12a8 8 0 1 1-2.34-5.66M20 4v5h-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </div>

      <label htmlFor="captcha-input" className="sr-only">
        Escribí el código que aparece en la imagen
      </label>
      <div style={{ display: "flex", gap: "var(--sp-2)" }}>
        <input
          id="captcha-input"
          className="field"
          type="text"
          maxLength={5}
          placeholder="Escribí el código"
          value={input}
          autoFocus
          autoComplete="off"
          aria-invalid={error}
          style={{ letterSpacing: "0.12em" }}
          onChange={(e) => {
            setInput(e.target.value.toUpperCase());
            setError(false);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault();
              verify();
            }
          }}
        />
        <button type="button" onClick={verify} className="btn btn-primary">
          Confirmar
        </button>
      </div>

      <p role="alert" aria-live="assertive" style={{ minHeight: "1.5em" }}>
        {error && (
          <span className="t-sm" style={{ color: "var(--danger)" }}>
            Esas letras no coinciden. Probá con las nuevas.
          </span>
        )}
      </p>

      <button type="button" onClick={onCancel} className="captcha-cancelar">
        Cancelar
      </button>
    </div>
  );
}
