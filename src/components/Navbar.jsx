"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { name: "home", type: "section" },
  { name: "about", type: "section" },
  { name: "story", type: "section" },
  { name: "vision", type: "section" },
  { name: "mission", type: "section" },
  { name: "culture", type: "section" },
  { name: "services", type: "section" },
  { name: "careers", type: "page", path: "/careers" },
  { name: "contact", type: "section" },
];
export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/careers") {
      setActive("careers");
      return;
    }

    if (location.pathname === "/") {
      if (location.hash) {
        setActive(location.hash.replace("#", ""));
        return;
      }

      setActive("home");
    }
  }, [location.pathname, location.hash]);

  // ACTIVE PAGE
  useEffect(() => {
    // Only track sections if we are on the home page
    if (location.pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
            window.history.replaceState(
              null,
              "",
              `#${entry.target.id}`,
            );
          }
        });
      },
      {
        root: null,
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    const observedElements = new Set();

    const observeAvailableSections = () => {
      navItems.forEach((item) => {
        if (item.type !== "section") return;

        const element = document.getElementById(item.name);
        if (element && !observedElements.has(element)) {
          observedElements.add(element);
          observer.observe(element);
        }
      });
    };

    observeAvailableSections();

    const mutationObserver = new MutationObserver(() => {
      observeAvailableSections();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname]);

  const goToSection = (name) => {
    if (location.pathname === "/") {
      document.getElementById(name)?.scrollIntoView({
        behavior: "smooth",
      });

      window.history.replaceState(null, "", `#${name}`);

      setActive(name);
    } else {
      navigate(`/#${name}`);

      setActive(name);
    }

    setOpen(false);
  };

  const logoSrcSet =
    "/img/logo-480.webp 480w, /img/logo-768.webp 768w";

  // MOBILE MENU ANIMATION
  const menuVars = {
    initial: { x: "100%" },
    animate: {
      x: 0,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
    exit: {
      x: "100%",
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.07,
        staggerDirection: 1,
      },
    },
  };

  const linkVars = {
    initial: {
      opacity: 0,
      x: 20,
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 w-full z-50 bg-[#020404]/90 xl:bg-black/70 backdrop-blur-sm border-b border-[#22c55e]/20"
      >
        <div className="flex justify-between items-center px-6 xl:px-8 py-4 max-w-8xl mx-auto">
          {/* LOGO */}
          <button
            type="button"
            onClick={() => goToSection("home")}
            className="z-50 relative flex items-center"
          >
            <img
              src="/img/logo-480.webp"
              srcSet={logoSrcSet}
              alt="logo"
              sizes="60px"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="h-11 w-auto object-contain scale-[1.33]"
            />
          </button>
          {/* DESKTOP MENU */}
          <div className="hidden xl:flex space-x-2 text-white text-sm items-center">
            {navItems.map((item) =>
              item.type === "section" ? (
                <motion.a
                  key={item.name}
                  href={`#${item.name}`}
                  whileHover={{ y: -2 }}
                  onClick={(e) => {
                    e.preventDefault();
                    goToSection(item.name);
                  }}
                  className={`relative px-2 py-1 uppercase transition-colors duration-300 ${
                    active === item.name
                      ? "text-[#22c55e]"
                      : "hover:text-[#22c55e]"
                  }`}
                >
                  {item.name}

                  <motion.span
                    aria-hidden="true"
                    initial={false}
                    animate={{
                      scaleX: active === item.name ? 1 : 0,
                      opacity: active === item.name ? 1 : 0,
                    }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="absolute left-0 right-0 -bottom-1 h-[2px] origin-left bg-[#22c55e]"
                  />
                </motion.a>
              ) : (
                <motion.button
                  key={item.name}
                  whileHover={{ y: -2 }}
                  onClick={() => {
                    navigate(item.path);
                    setActive(item.name);
                  }}
                  className={`relative px-2 py-1 uppercase transition-colors duration-300 ${
                    active === item.name
                      ? "text-[#22c55e]"
                      : "hover:text-[#22c55e]"
                  }`}
                >
                  {item.name}
                  <motion.span
                    aria-hidden="true"
                    initial={false}
                    animate={{
                      scaleX: active === item.name ? 1 : 0,
                      opacity: active === item.name ? 1 : 0,
                    }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="absolute left-0 right-0 -bottom-1 h-[2px] origin-left bg-[#22c55e]"
                  />
                </motion.button>
              ),
            )}
          </div>{" "}
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => setOpen(!open)}
            className="xl:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 p-2 z-[60]"
          >
            <motion.span
              animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="w-5 h-[2px] bg-[#22c55e] rounded-full"
            />

            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-[2px] bg-[#22c55e] rounded-full"
            />

            <motion.span
              animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="w-5 h-[2px] bg-[#22c55e] rounded-full"
            />
          </motion.button>
        </div>
      </motion.nav>

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

              <div className="h-14 border-b border-[#22c55e]/10 w-full"></div>

              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="flex flex-col items-center gap-1 px-6 py-4 text-base uppercase tracking-wider h-full overflow-y-auto"
              >
                {navItems.map((item) => (
                  <div key={item.name} className="overflow-hidden">
                    {item.type === "section" ? (
                      <motion.button
                        variants={linkVars}
                        whileHover={{ x: 6 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          goToSection(item.name);
                        }}
                        className={`block w-full py-3 text-center transition-colors ${
                          active === item.name
                            ? "text-[#22c55e] font-bold"
                            : "text-white/80 hover:text-white"
                        }`}
                      >
                        {item.name}
                      </motion.button>
                    ) : (
                      <motion.button
                        variants={linkVars}
                        whileHover={{ x: 6 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setOpen(false);
                          navigate(item.path);
                          setActive(item.name);
                        }}
                        className={`block w-full py-3 text-center transition-colors ${
                          active === item.name
                            ? "text-[#22c55e] font-bold"
                            : "text-white/80 hover:text-white"
                        }`}
                      >
                        {item.name}
                      </motion.button>
                    )}
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
