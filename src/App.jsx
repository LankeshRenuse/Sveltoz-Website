import { useEffect } from "react";

import Navbar from './components/Navbar'
import About from './components/About'
import Story from './components/Story'
import Vision from './components/Vision'
import Mission from './components/Mission'
import Culture from './components/Culture'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Services from './components/Services'
import DroneCursor from "./components/DroneCursor"
import Contact from './components/Contact'
import BackgroundFX from './components/BackgroundFX'
import ParticleBackground from './components/ParticleBackground'
import ScrollTopButton from "./components/ScrollTopButton";




export default function App() {

  // ✅ RELOAD WHEN USER RETURNS TO TAB
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        window.location.reload();
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <div className="text-white relative">


      <div className="antenna-global">
        <div className="antenna-core"></div>
        <div className="antenna-wave wave1"></div>
        <div className="antenna-wave wave2"></div>
        
      </div>

      {/* ✅ BACKGROUND */}
      <div className="bg-title">SVELTOZ</div>


    <ScrollTopButton />
      <DroneCursor />

      {/* OPTIONAL FX */}
      <BackgroundFX />
      <ParticleBackground />

   
      <Navbar />

      {/* MAIN */}
    <main className="space-y-17">

  <div id="drone" className="drone"></div>
  <section id="home"></section>

  {/* HERO */}
  <Hero />

  {/* OTHER SECTIONS */}
  <div className="py-[1rem]">


  <div className="mobile-section"><About /></div>
  <div className="mobile-section"><Story /></div>
  <div className="mobile-section"><Vision /></div>
  <div className="mobile-section"><Mission /></div>
  <div className="mobile-section"><Culture /></div>
  <div className="mobile-section"><Services /></div>
  <div className="mobile-section"><Contact /></div>


    <Footer />

  </div>

</main>
    </div>
  )
}