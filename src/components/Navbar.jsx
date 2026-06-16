"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const sections = [
    "home",
    "about",
    "story",
    "vision",
    "mission",
    "culture",
    "services",
    "contact",
  ];

  // --- HANDLE SCROLL HIGHLIGHTING ---
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < bottom
          ) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    // Run once on page load
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // --- MOBILE BODY SCROLL LOCK ---
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // --- MOBILE MENU ANIMATION VARIANTS ---
  const menuVars = {
    initial: { x: "100%" },
    animate: { x: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
    exit: { x: "100%", transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
  };

  const containerVars = {
    initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
    open: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.07,
        staggerDirection: 1,
      },
    },
  };

  const linkVars = {
    initial: { opacity: 0, x: 20 },
    open: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  };

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50 bg-[#020404]/90 xl:bg-black/70 backdrop-blur-sm border-b border-[#22c55e]/20 xl:border-b-0"
      >
        {/* REDUCED vertical padding (py-3) and max-width (max-w-7xl) to pull things closer */}
        <div className="flex justify-between items-center px-6 xl:px-8 py-4 max-w-8xl mx-auto">
          {/* LOGO */}
          <a href="#home" className="z-50 relative flex items-cover h-full">
            <img
              src="/logo.png"
              alt="logo"
              className="h-11 w-auto object-contain scale-[1.33] transition-transform duration-300 hover:scale-[1.45]"
            />
          </a>

          {/* ================= DESKTOP ================= */}
          {/* REDUCED space between links (space-x-6 instead of 8) */}
          <div className="hidden xl:flex space-x-6 text-white text-sm relative items-center">
            {sections.map((id) => (
              <motion.a
                key={id}
                href={`#${id}`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
                className={`relative px-2 py-1 uppercase transition-colors duration-300 ${
                  active === id ? "text-[#22c55e]" : "hover:text-[#22c55e]"
                }`}
              >
                {id}
                {/* MAGIC UNDERLINE ANIMATION */}
                {active === id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#22c55e]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => setOpen(!open)}
            className="xl:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 p-2 z-[60] relative"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-[2px] bg-[#22c55e] block origin-center rounded-full"
            ></motion.span>
            <motion.span
              animate={open ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-[2px] bg-[#22c55e] block rounded-full"
            ></motion.span>
            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-5 h-[2px] bg-[#22c55e] block origin-center rounded-full"
            ></motion.span>
          </motion.button>
        </div>
      </motion.nav>

      {/* ================= MOBILE OVERLAY & DRAWER ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* OVERLAY */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
            />

            {/* DRAWER */}
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 right-0 h-full w-[220px] bg-[#020404]/90 backdrop-blur-2xl text-[#EFFFFA] z-50 shadow-[-10px_0_30px_rgba(34,197,94,0.1)] border-l border-[#22c55e]/20 flex flex-col"
            >
              
<div className="text-center pt-14 pb-4">
  <p className="text-[#22c55e] text-xl font-bold tracking-[6px] uppercase">
    NAVIGATION
  </p>
</div>
              <div className="absolute inset-0 overflow-hidden">
  <div className="absolute top-20 right-[-80px] w-52 h-52 bg-[#22c55e]/15 blur-[90px] rounded-full" />
  <div className="absolute bottom-20 left-[-60px] w-40 h-40 bg-[#22c55e]/10 blur-[70px] rounded-full" />
</div>
              {/* TIGHTER HEADER SPACER */}
              <div className="h-14 border-b border-[#22c55e]/10 w-full"></div>

              {/* MENU LINKS */}
              {/* TIGHTER GAPS: reduced to gap-1, py-4 instead of py-8 */}
              <motion.div
  variants={containerVars}
  initial="initial"
  animate="open"
  exit="initial"
  className="flex flex-col items-center gap-1 px-6 py-4 text-base uppercase tracking-wider h-full overflow-y-auto"
>
                {sections.map((id) => (
                  <div key={id} className="overflow-hidden">
                    <motion.a
                      variants={linkVars}
                      whileHover={{ x: 6 }}
                      whileTap={{ scale: 0.95, x: 6 }}
                      onClick={() => setOpen(false)}
                      href={`#${id}`}
                     className={`block w-full py-3 text-center transition-colors ${
                        active === id
                          ? "text-[#22c55e] font-bold"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {id}
                    </motion.a>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
