import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Estudio Jurídico Converge | Salta, Argentina",
  description: "Soluciones jurídicas claras para problemas reales. Derecho sucesorio, ejecutivo, cobros, familia y más en Salta.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/thin/style.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/light/style.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
