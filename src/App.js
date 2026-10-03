import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Skills } from "@/components/site/Skills";
import { Work } from "@/components/site/Work";
import { Process } from "@/components/site/Process";
import { Experience } from "@/components/site/Experience";
import { AboutShana } from "@/components/site/AboutShana";
import { Why } from "@/components/site/Why";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true });
    window.__lenis = lenis;
    let id;
    const raf = (t) => {
      lenis.raf(t);
      id = requestAnimationFrame(raf);
    };
    id = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FAF7FC]">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Work />
        <Process />
        <Experience />
        <AboutShana />
        <Why />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
