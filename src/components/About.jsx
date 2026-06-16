"use client";

import { motion } from "framer-motion";

export default function About() {
  // --- ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.12,
      },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
  <section
  id="about"
  className="scroll-mt-28 py-10 md:py-4 px-4 md:px-8 lg:px-12 bg-[url('/bg.jpg')] bg-cover bg-center overflow-hidden"
>
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-10 items-center">
        
        {/* LEFT SIDE - APPROACH CARD */}
        <motion.div 
          className="glow-target bg-white/1 backdrop-blur-lg border border-[#22c55e]/20 rounded-2xl p-8 shadow-xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          
          viewport={{ once: true, amount: 0.2 }} 
        >
          <motion.h3 variants={lineVariants} className="text-xl md:text-2xl lg:text-3xl text-[#22c55e] mb-4 font-semibold text-center md:text-left">
            <span className="text-white">Our </span>
            <span className="text-[#22c55e]">Approach</span>
          </motion.h3>

          <motion.p variants={lineVariants} className="text-gray-300 mb-5 md:mb-6 leading-relaxed text-sm md:text-base lg:text-lg text-center md:text-left">
            We follow a{" "}
            <span className="text-white font-semibold">
              human-first, innovation-driven
            </span>{" "}
            approach where technology empowers{" "}
            <span className="text-[#22c55e]">
              growth, efficiency, and transformation
            </span>.
          </motion.p>

          <ul className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base lg:text-lg">
            <motion.li variants={lineVariants} className="flex gap-3 items-start">
              <span className="text-[#22c55e] mt-1 text-3xl">▸</span>
              <span>AI-powered solutions for real-world impact</span>
            </motion.li>

            <motion.li variants={lineVariants} className="flex gap-3 items-start">
              <span className="text-[#22c55e] mt-1 text-3xl">▸</span>
              <span>Secure and scalable digital ecosystems</span>
            </motion.li>

            <motion.li variants={lineVariants} className="flex gap-3 items-start">
              <span className="text-[#22c55e] mt-1 text-3xl">▸</span>
              <span>Collaborative culture with continuous learning</span>
            </motion.li>
          </ul>
        </motion.div>

        {/* RIGHT SIDE - ABOUT */}
        <motion.div 
          className="space-y-5 md:space-y-6 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          
          viewport={{ once: true, amount: 0.2 }} 
        >
          <motion.h2 variants={lineVariants} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-widest font-bold leading-tight">
            <span className="text-white">ABOUT </span>
            <span className="text-[#22c55e]">SVELTOZ</span>
          </motion.h2>

          <motion.h3 variants={lineVariants} className="text-lg md:text-xl lg:text-2xl text-white font-semibold">
            Innovating the Future
          </motion.h3>

          <motion.p variants={lineVariants} className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg max-w-xl mx-auto md:mx-0">
            At <b className="text-white">Sveltoz</b>, we are a next-generation technology
            company driving innovation at the intersection of{" "}
            <b className="text-white">AI, Machine Learning</b>,
            and <b className="text-white">Digital Transformation</b>.
          </motion.p>

          <motion.p variants={lineVariants} className="text-gray-300 leading-relaxed text-sm md:text-base lg:text-lg max-w-xl mx-auto md:mx-0">
            Our vision is to empower businesses to scale intelligently — building
            solutions that are{" "}
            <span className="text-[#22c55e]">smart, secure, and sustainable</span>.
            We turn complex cshallenges into measurable impact.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}