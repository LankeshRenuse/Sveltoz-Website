"use client";

import { motion } from "framer-motion";

export default function Culture() {
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

  return (
    <section id="culture" className="py-16 px-4 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-10 lg:gap-10">
        
        {/* LEFT GLASS CARD */}
        <div className="w-full md:w-1/2">
          <motion.div 
            className="glow-target bg-white/1 backdrop-blur-lg border border-[#22c55e]/20 rounded-2xl p-8 shadow-xl"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            // UPDATED: Set once to true to lock the layout after entering the viewport
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.h3 variants={lineVariants} className="text-xl md:text-2xl lg:text-3xl text-[#22c55e] mb-4 font-semibold text-center md:text-left">
               <span className="text-white">CULTURE </span>
               <span className="text-[#22c55e]"> & VALUES</span>   
            </motion.h3>

  {/* Justified Paragraph */}
  <motion.p variants={lineVariants} className="text-gray-300 mb-5 md:mb-6 leading-relaxed text-sm md:text-base lg:text-lg text-justify">
    At <b className="text-white">Sveltoz</b>, we believe that great technology begins with great people. 
    Our culture is built on <span className="text-[#22c55e]">curiosity, collaboration, and continuous learning</span> — 
    the forces that drive innovation every day.
  </motion.p>

  {/* Justified List */}
  <ul className="space-y-3 md:space-y-4 text-gray-300 text-sm md:text-base lg:text-lg">
    {[
      { title: "Innovation:", desc: "Embracing what’s next" },
      { title: "Integrity:", desc: "Transparency & trust" },
      { title: "Excellence:", desc: "Precision & quality" },
      { title: "Collaboration:", desc: "Growing together" }
    ].map((item, idx) => (
      <motion.li key={idx} variants={lineVariants} className="flex gap-3 items-start">
        <span className="text-[#22c55e] mt-0.5 text-xl flex-shrink-0">▸</span>
        <span className="text-justify w-full block">
          <b className="text-white">{item.title}</b> {item.desc}
        </span>
      </motion.li>
    ))}
  </ul>

  {/* Justified Bottom Paragraph */}
  <motion.p variants={lineVariants} className="text-gray-400 mt-5 md:mt-6 text-xs md:text-sm leading-relaxed text-justify">
    Every Sveltoz project is more than a task — it’s a shared journey toward innovation.
  </motion.p>
</motion.div>
        </div>

        {/* RIGHT IMAGE: REALISTIC, SLOW 3D SLIDE-IN */}
        <div className="w-full md:w-1/2 flex justify-center relative overflow-hidden md:overflow-visible">
          
          {/* Added 'perspective' so the rotateY actually looks 3D */}
          <div style={{ perspective: "1200px" }} className="w-full">
            <motion.div
              className="relative w-full rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] border border-white/10"
              
              // 1. Starts pushed right, faded out, slightly blurred, and angled away in 3D
              initial={{ opacity: 0, x: 120, rotateY: -15, filter: "blur(12px)" }} 
              
              // 2. Glides to normal, clears blur, flattens out perfectly
              whileInView={{ opacity: 1, x: 0, rotateY: 0, filter: "blur(0px)" }} 
              
              // 3. Ultra slow duration (2 full seconds) with heavy, natural momentum
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }} 
              // UPDATED: Set once to true to prevent re-triggering when scrolling up/down
              viewport={{ once: true, amount: 0.3 }}

              // 4. Subtle, heavy 3D physical hover effect
              whileHover={{ 
                scale: 1.02, 
                rotateY: -2, // Tilts slightly back when hovered
                boxShadow: "0 40px 80px rgba(34,197,94,0.15)",
                transition: { duration: 1, ease: "easeOut" } 
              }}
            >
              <motion.img
                src="/img/culture.webp"
                alt="Culture"
                className="w-full h-auto object-cover"
                // Inner image scales down slightly as it comes in to create camera depth
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
              />
              
              <div className="absolute inset-0 bg-black/10 pointer-events-none hover:bg-transparent transition-colors duration-1000" />
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}