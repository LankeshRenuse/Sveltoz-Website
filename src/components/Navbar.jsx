import { useEffect, useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
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

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < 200) {
        setActive("home");
        return;
      }

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (scrollY >= top - 150 && scrollY < top + height - 150) {
            current = id;
          }
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    active === id
      ? "text-[#22c55e] border-b border-[#22c55e]"
      : "hover:text-[#22c55e]";

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#020404]/90 xl:bg-black/60 backdrop-blur-md border-b border-[#22c55e]/20 xl:border-b-0">

        <div className="flex justify-between items-center px-4 xl:px-10 py-3 xl:py-5">

          {/* LOGO */}
          <a href="#home">
            <img
              src="/logo.png"
              alt="logo"
              className="h-9 xl:h-12 object-contain"
            />
          </a>

          {/* ================= DESKTOP ================= */}
          <div className="hidden xl:flex space-x-8 text-white text-sm  ">
            <a href="#home" className={linkClass("home") }>HOME</a>
            <a href="#about" className={linkClass("about")}>ABOUT</a>
            <a href="#story" className={linkClass("story")}>OUR STORY</a>
            <a href="#vision" className={linkClass("vision")}>OUR VISION</a>
            <a href="#mission" className={linkClass("mission")}>MISSION</a>
            <a href="#culture" className={linkClass("culture")}>CULTURE</a>
            <a href="#services" className={linkClass("services")}>SERVICES</a>
            <a href="#contact" className={linkClass("contact")}>CONTACT</a>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setOpen(true)}
            className="xl:hidden flex flex-col gap-1"
          >
            <span className="w-6 h-[2px] bg-[#22c55e]"></span>
            <span className="w-6 h-[2px] bg-[#22c55e]"></span>
            <span className="w-6 h-[2px] bg-[#22c55e]"></span>
          </button>

        </div>
      </nav>

      {/* ================= OVERLAY ================= */}
      <div
        onClick={() => setOpen(false)}
        className={`
          fixed inset-0 bg-black/60 backdrop-blur-sm z-40
          transition-all duration-300
          ${open ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[min(82vw,320px)]
          bg-[#020404]/95 text-[#EFFFFA] z-50
          transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}
          shadow-2xl shadow-[#22c55e]/20 border-l border-[#22c55e]/25
        `}
      >

        {/* HEADER */}
        <div className="flex justify-between items-center px-4 py-4 border-b border-[#22c55e]/25">
          <img src="/logo.png" className="h-8" />
          <button onClick={() => setOpen(false)} className="text-lg">✕</button>
        </div>

        {/* MENU */}
        <div className="flex flex-col gap-6 px-6 py-6 text-sm uppercase tracking-wide">

          <a onClick={() => setOpen(false)} href="#home" className="hover:text-[#22c55e] transition-colors">Home</a>
          <a onClick={() => setOpen(false)} href="#about" className="hover:text-[#22c55e] transition-colors">About</a>
          <a onClick={() => setOpen(false)} href="#story" className="hover:text-[#22c55e] transition-colors">Our Story</a>
          <a onClick={() => setOpen(false)} href="#vision" className="hover:text-[#22c55e] transition-colors">Our Vision</a>
          <a onClick={() => setOpen(false)} href="#mission" className="hover:text-[#22c55e] transition-colors">Mission</a>
          <a onClick={() => setOpen(false)} href="#culture" className="hover:text-[#22c55e] transition-colors">Culture</a>
          <a onClick={() => setOpen(false)} href="#services" className="hover:text-[#22c55e] transition-colors">Services</a>
          <a onClick={() => setOpen(false)} href="#contact" className="hover:text-[#22c55e] transition-colors">Contact</a>

        </div>
      </div>
    </>
  );
}
