import { NextRequest, NextResponse } from "next/server";

const rateLimit = new Map<string, { count: number; resetAt: number }>();
const MAX_REQUESTS = 2;
const WINDOW_MS = 20 * 60 * 1000; // 20 minutos

function escapeHtml(str: string) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  const now = Date.now();
  const entry = rateLimit.get(ip);

  if (entry && now < entry.resetAt) {
    if (entry.count >= MAX_REQUESTS) {
      return NextResponse.json({ error: "Demasiados intentos. Intentá más tarde." }, { status: 429 });
    }
    entry.count++;
  } else {
    rateLimit.set(ip, { count: 1, resetAt: now + WINDOW_MS });
  }

  if (!req.headers.get("content-type")?.includes("application/json")) {
    return NextResponse.json({ error: "Formato inválido" }, { status: 415 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Formato inválido" }, { status: 400 });
  }
  const nombre  = typeof body.nombre  === "string" ? body.nombre.trim().slice(0, 30) : "";
  const telefono = typeof body.telefono === "string" ? body.telefono.trim().slice(0, 20) : "";
  const mensaje = typeof body.mensaje  === "string" ? body.mensaje.trim().slice(0, 200) : "";

  if (!nombre || !mensaje) {
    return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Sin configuración de mail" }, { status: 500 });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: "Converge Web <noreply@convergejuridico.com>",
      to: ["ignacioabogado22@gmail.com"],
      subject: `Nueva consulta de ${escapeHtml(nombre)}`,
      html: `
        <h2>Nueva consulta desde convergejuridico.com.ar</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
        ${telefono ? `<p><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>` : ""}
        <p><strong>Consulta:</strong></p>
        <p>${escapeHtml(mensaje).replace(/\n/g, "<br/>")}</p>
      `,
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Error al enviar" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
