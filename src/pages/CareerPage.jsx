"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import BackgroundFX from "../components/BackgroundFX";
import ParticleBackground from "../components/ParticleBackground";

export default function CareerPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  const [glow, setGlow] = useState(false);

  const [magnet, setMagnet] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    visible: false,
  });

  const moveMagnet = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const parent = e.currentTarget.closest(".magnet-container");

    if (!parent) return;

    const parentRect = parent.getBoundingClientRect();

    setMagnet({
      x: rect.left - parentRect.left,
      y: rect.top - parentRect.top,
      width: rect.width,
      height: rect.height,
      visible: true,
    });
  };

  const resetMagnet = () => {
    setMagnet((prev) => ({ ...prev, visible: false }));
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen text-white relative overflow-hidden pt-20">
      

        <BackgroundFX />
        <ParticleBackground />

        <div className="max-w-6xl mx-auto px-6 py-10 relative z-10">

          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-center mb-10"
          >
            <p className="text-[#22c55e] uppercase text-4xl mb-4">
  Careers
</p>

            <h1 className="text-3xl font-bold mb-3 font-['Orbitron']">
              Build The Future With Sveltoz
            </h1>

            <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
              Join Sveltoz and contribute to next-generation web platforms,
              AI-driven applications, and modern digital experiences.
            </p>
          </motion.div>

          {/* FORM */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1 }}
  onMouseEnter={() => setGlow(true)}
  onMouseLeave={() => {
    setGlow(false);
    resetMagnet();
  }}
  className="
    glow-target
    magnet-container
    relative overflow-hidden
    max-w-5xl mx-auto
    rounded-3xl
    border border-white/10
    bg-black/[0.03]
    backdrop-blur-xl
    p-5 md:p-6
  "
>

  {/* GLOW */}
  <motion.div
    animate={{
      opacity: glow ? 1 : 0,
      scale: glow ? 1 : 0.8,
    }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="absolute inset-0 pointer-events-none"
  >
    <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[420px] h-[240px] bg-[#22c55e]/20 blur-[120px] rounded-full" />
  </motion.div>

  {/* TARGET EFFECT */}
  <motion.div
    animate={{
      opacity: magnet.visible ? 1 : 0,
      x: magnet.x,
      y: magnet.y,
      width: magnet.width,
      height: magnet.height,
    }}
    transition={{
      type: "spring",
      stiffness: 350,
      damping: 25,
    }}
    className="absolute top-0 left-0 pointer-events-none z-50"
  >
    <span className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-[#22c55e] rounded-tl-md" />
    <span className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-[#22c55e] rounded-tr-md" />
    <span className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-[#22c55e] rounded-bl-md" />
    <span className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-[#22c55e] rounded-br-md" />
  </motion.div>

  <div className="relative z-10">
    <h2 className="text-3xl text-[#22c55e] md:text-4xl font-bold mb-8">
      Apply Now
    </h2>

    <form className="grid md:grid-cols-2 gap-6">

      <input
        type="text"
        placeholder="Full Name"
        className="input"
        onMouseEnter={moveMagnet}
        onFocus={moveMagnet}
        onBlur={resetMagnet}
      />

      <input
        type="email"
        placeholder="Email Address"
        className="input"
        onMouseEnter={moveMagnet}
        onFocus={moveMagnet}
        onBlur={resetMagnet}
      />

      <input
        type="tel"
        placeholder="Phone Number"
        className="input"
        onMouseEnter={moveMagnet}
        onFocus={moveMagnet}
        onBlur={resetMagnet}
      />

      <input
        type="text"
        placeholder="Position Applying For"
        className="input"
        onMouseEnter={moveMagnet}
        onFocus={moveMagnet}
        onBlur={resetMagnet}
      />

      <div className="md:col-span-2">
        <input
          type="file"
          className="file"
          onMouseEnter={moveMagnet}
          onFocus={moveMagnet}
          onBlur={resetMagnet}
        />
      </div>

      <div className="md:col-span-2">
        <textarea
          rows="5"
          placeholder="Tell us about yourself..."
          className="input resize-none"
          onMouseEnter={moveMagnet}
          onFocus={moveMagnet}
          onBlur={resetMagnet}
        />
      </div>

      <div className="md:col-span-2">
        <button className="btn">
          Submit Application
        </button>
      </div>

    </form>
  </div>
</motion.div>

{/* STYLES */}
<style jsx>{`
  .input {
    width: 100%;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 18px;
    padding: 14px 18px;
    outline: none;
    color: white;
    transition: 0.3s;
  }

  .input:focus {
    border-color: #22c55e;
    box-shadow: 0 0 0 3px rgba(34, 197, 94, 0.2),
      0 0 25px rgba(34, 197, 94, 0.15);
  }

  .file {
    width: 100%;
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 18px;
    padding: 14px;
    color: white;
  }

  .btn {
    padding: 14px 34px;
    border-radius: 18px;
    border: 1px solid rgba(34, 197, 94, 0.3);
    color: #22c55e;
    transition: 0.3s;
  }

  .btn:hover {
    background: rgba(34, 197, 94, 0.08);
    box-shadow: 0 0 30px rgba(34, 197, 94, 0.25);
  }
`}</style>
        </div>
      </div>
    </>
  );
}