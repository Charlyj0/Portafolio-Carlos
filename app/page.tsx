import Image from "next/image";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Footer from "@/components/footer";
import Contacto from "@/components/contacto";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Navbar />

      <div className="flex-1">
        <Hero />
        <Projects />
        <Contacto />
      </div>
      <Footer />
    </main>      
  );
}
