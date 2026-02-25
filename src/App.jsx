import { useState } from "react";
import Loader from "./Component/Loader";

import Navbar from "./Component/Navbar";
import Hero from "./Component/HeroSection";
import About from "./Component/About";
import Projects from "./Component/Project";
import Skills from "./Component/Skills";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <main className="bg-[#0a0a0f] text-[#f1f5f9] font-sans">
      <Loader onComplete={() => setLoading(false)} />

      <div
        className={
          loading ?
            "opacity-0 pointer-events-none"
          : "opacity-100 transition-opacity duration-700"
        }
      >
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

export default App;
