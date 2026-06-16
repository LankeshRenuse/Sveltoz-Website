import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

export default function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShow(window.scrollY > 300);
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
 <button
  onClick={scrollToTop}
  className={`fixed bottom-8 right-6 z-50
  h-12 w-12 rounded-full
  border border-white/10
  bg-black/[0.04]
  backdrop-blur-2xl
  text-[#22c55e]
  shadow-[0_0_25px_rgba(34,197,94,0.12)]
  flex items-center justify-center
  transition-all duration-300
  hover:scale-110
  hover:bg-white/[0.08]
  active:scale-95
  ${
    show
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-5 pointer-events-none"
  }`}
>
  <ChevronUp size={22} />
</button>
  );
}