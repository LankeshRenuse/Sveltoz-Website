
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import CareerPage from "./pages/CareerPage";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Story from "./components/Story";
import Vision from "./components/Vision";
import Mission from "./components/Mission";
import Culture from "./components/Culture";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import BackgroundFX from "./components/BackgroundFX";
import ParticleBackground from "./components/ParticleBackground";
import ScrollTopButton from "./components/ScrollTopButton";
import FloatingSocialBar from "./components/FloatingSocialBar";

import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconMail,
} from "@tabler/icons-react";

function HomePage() {
  const location = useLocation();


 useEffect(() => {
  if (location.hash) {
    const id = location.hash.replace("#", "");

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 200);
  }
}, [location]);

  return (
    <div className="text-white relative overflow-hidden">
      {/* Background Text */}
      <div className="bg-title">SVELTOZ</div>

      {/* Floating UI */}
      <FloatingSocialBar />
      <ScrollTopButton />

      {/* Effects */}
      <BackgroundFX />
      <ParticleBackground />

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <Hero />

      <div className="max-w-[1400px] mx-auto px-3 md:px-10">
        <main>
          <div className="space-y-24 mt-24">
            <About />
          </div>

         

          <Story />
          <Vision />
          <Mission />
          <Culture />
          <Services />
          <Contact />

          {/* Mobile Social Icons */}
          <div className="md:hidden flex justify-center items-center gap-4 py-6">
            {[
              {
                icon: <IconBrandInstagram size={20} stroke={1.8} />,
                link:
                  "https://www.instagram.com/sveltoz?igsh=MXIzbHVieXlrcjYweg==",
                gradient: "from-pink-500 via-fuchsia-500 to-purple-600",
              },
              {
                icon: <IconBrandLinkedin size={20} stroke={1.8} />,
                link:
                  "https://www.linkedin.com/company/sveltoz-solutions-pvt-ltd/posts/?feedView=all",
                gradient: "from-blue-500 via-cyan-500 to-sky-600",
              },
              {
                icon: <IconBrandFacebook size={20} stroke={1.8} />,
                link:
                  "https://www.facebook.com/people/Sveltoz-S/100091750241431/#",
                gradient: "from-blue-600 via-indigo-500 to-blue-800",
              },
              {
                icon: <IconMail size={20} stroke={1.8} />,
                link: "mailto:business@sveltoz.com",
                gradient: "from-emerald-500 to-green-700",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center h-12 w-12 rounded-2xl overflow-hidden bg-black/40 backdrop-blur-lg border border-white/10 shadow-lg group"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-0 group-hover:opacity-25 blur-[4px] transition-opacity duration-300`}
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-r ${social.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                />

                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />

                <div className="relative z-10 text-white">
                  <div className="p-1.5 rounded-xl bg-white/5 border border-white/10 shadow-inner">
                    {social.icon}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/careers" element={<CareerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

