import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Perfil from "./components/Perfil";
import Areas from "./components/Areas";
import Enfoque from "./components/Enfoque";
import TeaserIA from "./components/TeaserIA";
import Practicas from "./components/Practicas";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <Navbar />
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
