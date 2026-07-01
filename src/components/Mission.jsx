"use client";

import { motion } from "framer-motion";

export default function Mission() {
  // --- TEXT ANIMATION VARIANTS ---
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const missionSrcSet =
    "/img/mission-480.webp 480w, /img/mission-768.webp 768w";

  return (
    <section
      id="mission"
      className="py-16 px-4 glow-card scroll-mt-[-60px]"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <div className="w-full flex justify-center relative overflow-hidden md:overflow-visible">
          <div style={{ perspective: "1200px" }} className="w-full">
            <motion.div
              className="relative w-full rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/10"
              initial={{ opacity: 0, x: -120, rotateY: 15, filter: "blur(12px)" }} 
              whileInView={{ opacity: 1, x: 0, rotateY: 0, filter: "blur(0px)" }} 
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }} 
              // MATCHED: Removed the margin to align trigger timing with other sections
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ 
                scale: 1.02, 
                rotateY: 2,
                boxShadow: "0 40px 80px rgba(34,197,94,0.15)",
                transition: { duration: 1, ease: "easeOut" } 
              }}
            >
              <motion.img
                src="/img/mission-768.webp"
                alt="Mission"
                srcSet={missionSrcSet}
                sizes="(max-width: 768px) 92vw, 50vw"
                loading="lazy"
                decoding="async"
                className="w-full h-auto object-cover"
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
                // MATCHED: Removed separate viewport prop so it syncs perfectly with parent container
              />
              <div className="absolute inset-0 bg-black/10 pointer-events-none hover:bg-transparent transition-colors duration-1000" />
            </motion.div>
          </div>
        </div>

        {/* RIGHT CONTENT CARD */}
        <motion.div 
          className="bg-white/1 backdrop-blur-lg border border-[#22c55e]/20 rounded-2xl p-8 shadow-xl glow-target"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          // MATCHED: Standardized viewport tracking to match other content cards
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2 variants={lineVariants} className="text-3xl md:text-5xl text-[#22c55e] mb-6 font-bold">
            MISSION
          </motion.h2>

          <motion.p variants={lineVariants} className="text-gray-300 mb-5 leading-relaxed text-justify">
  At <b className="text-white">Sveltoz</b>, our mission is to accelerate business transformation through{" "}
  <span className="text-[#22c55e]">intelligence, innovation, and integrity</span>.
</motion.p>
<motion.p variants={lineVariants} className="text-gray-300 mb-6 leading-relaxed text-justify">
  We combine the power of{" "}
  <b className="text-white">AI, Machine Learning, and Cloud Technologies</b>{" "}
  to deliver solutions that make enterprises more agile, efficient, and future-ready.
</motion.p>

  {/* List items with full-width justified text */}
  <ul className="space-y-4 text-gray-300 mb-6">
    <motion.li variants={lineVariants} className="flex gap-3 items-start">
      <span className="text-[#22c55e] text-xl mt-0.5 flex-shrink-0">▸</span>
      <span className="text-justify w-full block">
        <b className="text-white">Innovate Relentlessly:</b> Turning emerging technologies into business advantage.
      </span>
    </motion.li>

    <motion.li variants={lineVariants} className="flex gap-3 items-start">
      <span className="text-[#22c55e] text-xl mt-0.5 flex-shrink-0">▸</span>
      <span className="text-justify w-full block">
        <b className="text-white">Engineer Excellence:</b> Delivering high-quality solutions that exceed expectations.
      </span>
    </motion.li>

    <motion.li variants={lineVariants} className="flex gap-3 items-start">
      <span className="text-[#22c55e] text-xl mt-0.5 flex-shrink-0">▸</span>
      <span className="text-justify w-full block">
        <b className="text-white">Empower Growth:</b> Enabling businesses to scale and succeed.
      </span>
    </motion.li>
  </ul>

  <motion.p variants={lineVariants} className="text-gray-400 leading-relaxed text-justify">
  Our mission is not just to implement solutions — but to co-create the future with our partners, one intelligent system at a time.
</motion.p>
        </motion.div>
      </div>
    </section>
  );
}
