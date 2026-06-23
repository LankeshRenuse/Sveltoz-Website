"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { BadgeCheck, Users, Cpu, ShieldCheck } from "lucide-react";

const slides = [
  {
    title: " 17+ YEARS OF PROVEN ENTERPRISE SOFTWARE DEVELOPMENT",
    subtitle:
      "Modern enterprise software, scalable applications and secure digital platforms for growing businesses. Built to streamline operations and support long-term digital growth.",
    image: "/img/software.webp",
    bg: "/img/software-bg.webp",
  },
  {
    title: "AI / ML SOLUTIONS",
    subtitle:
      "Intelligent AI systems, machine learning models, predictive analytics and automation solutions. Designed to turn data into actionable intelligence for smarter decisions.",
    image: "/img/AI-ML.webp",
    bg: "/img/AI-bg.webp",
  },
  {
    title: "DATA ENGINEERING & ANALYTICS",
    subtitle:
      "Real-time analytics, big data pipelines and intelligent business intelligence systems. Helping organizations unlock insights from complex data ecosystems.",
    image: "/img/data.webp",
    bg: "/img/data-bg.webp",
  },
  {
    title: "QUALITY ASSURANCE & TESTING",
    subtitle:
      "Automated QA systems, performance testing and software reliability optimization services. Ensuring stable, secure and high-quality digital product delivery.",
    image: "/img/QA.webp",
    bg: "/img/QA-bg.webp",
  },
  {
    title: "SAP CONSULTING & IMPLEMENTATION",
    subtitle:
      "Enterprise SAP consulting, implementation, migration and integration solutions. Enabling seamless business process transformation across systems.",
    image: "/img/sap.webp",
    bg: "/img/sap-bg.webp",
  },
  {
    title: "CLOUD & INFRASTRUCTURE SERVICES",
    subtitle:
      "Secure cloud architecture, DevOps infrastructure and scalable deployment environments. Optimized for performance, security, and enterprise-grade reliability.",
    image: "/img/cloud.webp",
    bg: "/img/cloud-bg.webp",
  },
  {
    title: "AUTOMATION & DIGITAL TRANSFORMATION",
    subtitle:
      "Business workflow automation and digital transformation solutions for modern enterprises. Reducing manual effort while increasing operational efficiency.",
    image: "/img/auto.webp",
    bg: "/img/auto-bg.webp",
  },
  {
    title: "TECHNOLOGY CONSULTING & INNOVATION",
    subtitle:
      "Innovation-driven consulting services helping startups and enterprises scale with technology. Focused on strategy, growth, and future-ready digital solutions.",
    image: "/img/inno.webp",
    bg: "/img/inno-bg.webp",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        setCurrent((prev) => (prev + 1) % slides.length);
      }

      if (e.key === "ArrowLeft") {
        setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const stats = [
    {
      icon: BadgeCheck,
      value: "16+ Years",
      label: "Experience",
    },
    {
      icon: Users,
      value: "300+",
      label: "Satisfied Clients",
    },
    {
      icon: Cpu,
      value: "AI & Software",
      label: "Expert Team",
    },
    {
      icon: ShieldCheck,
      value: "Enterprise",
      label: "Ready Systems",
    },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleDragEnd = (event, info) => {
    const offsetX = info.offset.x;
    const velocityX = info.velocity.x;

    if (offsetX < -80 || velocityX < -500) {
      setCurrent((prev) => (prev + 1) % slides.length);
    }

    if (offsetX > 80 || velocityX > 500) {
      setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden flex items-center justify-center bg-black touch-pan-y"
      onTouchStart={(e) => (window.touchStartX = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        const endX = e.changedTouches[0].clientX;
        const diff = window.touchStartX - endX;

        if (diff > 60) {
          setCurrent((prev) => (prev + 1) % slides.length);
        }

        if (diff < -60) {
          setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
        }
      }}
    >
      {/* BACKGROUND IMAGE CAROUSEL FX */}
      <div className="absolute inset-0 z-0 overflow-hidden hidden lg:block">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.0 }}
            className="absolute inset-0"
          >
            <img
              src={slide.bg || slide.image}
              alt="background"
              className="w-full h-full object-cover blur-sm opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#010712]/40 via-black/40 to-black" />
          </motion.div>
        </AnimatePresence>

        {/* GREEN GLOW AMBIENCE - Also hidden on mobile/tablet */}
        <div className="absolute top-[-250px] left-[-250px] w-[650px] h-[650px] bg-green-500/10 blur-[180px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-250px] right-[-250px] w-[650px] h-[650px] bg-emerald-500/10 blur-[180px] rounded-full pointer-events-none" />
      </div>

      {/* MAIN CONTENT LAYOUT CONTAINER */}
      <div className="relative z-[5] w-full max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-10 sm:py-12 md:py-14 lg:py-4 grid grid-cols-1 lg:grid-cols-2 gap-7 sm:gap-8 md:gap-10 lg:gap-6 items-center lg:text-left">
        {/* LEFT CONTENT COLUMN */}
        <div className="flex flex-col justify-center min-h-0 md:min-h-[500px] mt-14 md:mt-8 lg:mt-16">
          <div className="flex items-center justify-center sm:justify-start gap-3 mb-4 sm:mb-5">
            <span className="  translate-x-1   text-green-400 uppercase tracking-[3px] text-sm font-semibold">
              SVELTOZ SOLUTIONS PVT. LTD.
            </span>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* title */}
              <h1 className="leading-tight max-w-[900px] text-center sm:text-left">
                {/* FIRST LINE */}
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-['Inter'] font-bold text-white/90">
                  {slide.title.split(" ").slice(0, -1).join(" ")}
                </span>

                {/* LAST WORD GREEN */}
                <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-4xl font-bold text-[#22c55e] drop-shadow-[0_0_20px_rgba(34,197,94,0.45)]">
                  {slide.title.split(" ").slice(-1)}
                </span>
              </h1>

              {/* Gradient line */}
              <div className="h-[2px] w-[130px] rounded-full mt-5 sm:mt-6 mx-auto sm:mx-0 bg-gradient-to-r from-green-400 to-emerald-500" />

              {/* Subtitle */}
              <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-white/70 max-w-xl leading-relaxed text-center sm:text-left">
                {slide.subtitle}
              </p>
              {current === 0 && (
                <div className="mt-8 text-xs text-white/20 sm:hidden w-full text-center pr-2">
                  ← Swipe left or right to change →
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-start text-left gap-3 sm:gap-4 mt-7 sm:mt-10">
            <button
              onClick={() => scrollToSection("services")}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-green-500 text-black hover:bg-green-600 transition-all duration-300  hover:shadow-[0_0_20px_rgba(16,185,129,0.8),0_0_50px_rgba(16,185,129,0.5)] hover:border-emerald-300"
            >
              Explore Services
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl border border-emerald-400/40 bg-white/5 text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(16,185,129,0.8),0_0_50px_rgba(16,185,129,0.5)] hover:border-emerald-300"
            >
              Contact Us
            </button>
          </div>


        
        {/* STATS icon */}
<div className="mt-8 sm:mt-10 flex flex-wrap gap-6">
  {stats.map((item, index) => {
    const Icon = item.icon;

    return (
      <div
        key={index}
        className="flex items-center gap-2 pr-2 border-r border-white/15 last:border-r-0"
      >
        <Icon
          size={28}
          className="text-green-400 shrink-0"
        />

        <div>
          <h3 className="text-white font-semibold text-sm whitespace-nowrap">
            {item.value}
          </h3>

          <p className="text-xs text-white/60 whitespace-nowrap">
            {item.label}
          </p>
        </div>
      </div>
    );
  })}
</div>
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.image}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.7}
              onDragEnd={handleDragEnd}
              whileTap={{ cursor: "grabbing" }}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative flex w-full max-w-[420px] sm:max-w-[520px] md:max-w-[600px] flex-col items-center justify-center mt-1 sm:mt-2 md:mt-6 lg:justify-start lg:mt-12"
            >
              {/* GLOWS - These will now move/animate with the frame */}
              <div className="absolute -inset-1 sm:-inset-2 md:-inset-2 bg-green-500/25 sm:bg-green-500/30 blur-[45px] sm:blur-[70px] md:blur-[80px] rounded-full " />

              {/* FRAME */}
              <div className="relative w-full max-w-[570px] overflow-hidden rounded-[20px] border border-white/10 backdrop-blur-xl bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.6)]">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="h-[300px] sm:h-[360px] md:h-[410px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slider Dots Below Image */}
          <div className="flex justify-center lg:justify-center gap-3 mt-5 sm:mt-6 w-full">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  current === index
                    ? "w-8 bg-green-400"
                    : "w-2 bg-white/30 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
