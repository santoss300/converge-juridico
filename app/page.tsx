import Navbar from "./components/Navbar";
import Rail from "./components/Rail";
import Hero from "./components/Hero";
import Perfil from "./components/Perfil";
import Areas from "./components/Areas";
import Contacto from "./components/Contacto";
import Practicas from "./components/Practicas";
import TeaserIA from "./components/TeaserIA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

/* Orden foliado 01 → 07. Ver docs/design-system.md § Anatomía. */

export default function Home() {
  return (
    <>
      <Navbar />
      <Rail />
      <main>
        <Hero />
        <Perfil />
        <Areas />
        <Contacto />
        <Practicas />
        <TeaserIA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
