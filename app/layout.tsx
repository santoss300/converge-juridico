import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

/* Etapa 2 — dos familias variables, self-hosteadas.
   Ver docs/design-system.md § Etapa 2. */
const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono-brand",
});

const grotesk = Hanken_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://convergejuridico.com"),
  title: {
    default: "Estudio Jurídico Converge | Abogados en Salta",
    template: "%s | Converge",
  },
  description:
    "Sucesiones, juicios ejecutivos, cobro de deudas, pagarés, alimentos y divorcios en Salta. En la primera reunión te decimos si tenés caso, cuánto cuesta y cuánto puede tardar.",
  keywords: [
    "abogado Salta",
    "sucesiones Salta",
    "juicio ejecutivo",
    "cobro de pagaré",
    "cuota alimentaria",
    "divorcio Salta",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "Estudio Jurídico Converge",
    title: "Estudio Jurídico Converge | Abogados en Salta",
    description:
      "Sucesiones, ejecutivos, cobros, alimentos y divorcios en Salta. Te decimos si tenés caso, cuánto cuesta y cuánto tarda.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Estudio Jurídico Converge | Abogados en Salta",
    description:
      "Sucesiones, ejecutivos, cobros, alimentos y divorcios en Salta.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0E1A",
  colorScheme: "dark",
};

/* Marca <html> antes del primer paint. Sin esta clase los reveals no se
   aplican y el contenido se ve igual — si el JS falla, nada queda oculto. */
const JS_LOADED = `document.documentElement.classList.add('js-loaded')`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR" className={`${mono.variable} ${grotesk.variable}`}>
      <body>
        {/* Corre antes de que pinte el resto del body. No va en <head>:
            Next 16 no admite un <head> manual en el root layout. */}
        <script dangerouslySetInnerHTML={{ __html: JS_LOADED }} />
        {children}
      </body>
    </html>
  );
}
