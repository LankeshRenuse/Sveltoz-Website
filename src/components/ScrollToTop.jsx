import React, { useEffect, useState } from "react";

function ScrollTopDrone() {
  const [show, setShow] = useState(false);
  const [flying, setFlying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    setFlying(true);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 150);

    setTimeout(() => {
      setFlying(false);
    }, 1200);
  };

  return (
    <>
      {show && (
        <button
          onClick={handleClick}
          aria-label="Scroll to top"
          style={{
            position: "fixed",
            bottom: flying ? "120px" : "25px",
            left: "15px",
            width: "30px",
            height: "30px",
            cursor: "pointer",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.6s ease",
            border: "none",
            background: "transparent",
          }}
        >
          {/* 🔥 Particle Trail */}
          <div style={{ position: "absolute" }}>
            {[...Array(6)].map((_, i) => (
              <span
                key={i}
                style={{
                  position: "absolute",
                  width: flying ? "6px" : "4px",
                  height: flying ? "6px" : "4px",
                  borderRadius: "50%",
                  background: "rgba(0, 255, 89, 0.24)",
                  boxShadow: "0 0 10px rgba(17, 255, 0, 0.19)",
                  opacity: flying ? 1 : 0,
                  transform: `translate(${(i - 3) * 6}px, ${10 + i * 6}px)`,
                  animation: flying
                    ? `trail 0.6s infinite ${i * 0.1}s`
                    : "none",
                }}
              />
            ))}
          </div>

          {/* Glow ring */}
          <div
            style={{
              position: "absolute",
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              background: "rgba(0, 255, 76, 0.08)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(0, 255, 30, 0.35)",
              boxShadow: flying
                ? "0 0 25px rgba(0, 255, 110, 0.25)"
                : "0 0 12px rgba(13, 255, 0, 0.26)",
              transition: "all 0.5s ease",
            }}
          />

          {/* ⬆️ ARROW */}
          <svg
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#30e68b8f"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              zIndex: 3,
              filter: "drop-shadow(0 0 8px rgba(0, 255, 98, 0))",
              animation: flying
                ? "bounceUp 0.6s ease-in-out infinite"
                : "bounceIdle 1.5s ease-in-out infinite",
              transform: flying ? "scale(1.1)" : "scale(1)",
              transition: "all 0.3s ease",
            }}
          >
            <path d="M12 19V5" />
            <path d="M5 12l7-7 7 7" />
          </svg>

          {/* ⚡ ANIMATIONS */}
          <style>
            {`
              @keyframes trail {
                0% { transform: translateY(0px) scale(1); opacity: 1; }
                100% { transform: translateY(100px) scale(0.2); opacity: 0; }
              }

              @keyframes bounceUp {
                0% { transform: translateY(0px) scale(1.05); }
                50% { transform: translateY(-6px) scale(1.1); }
                100% { transform: translateY(0px) scale(1.05); }
              }

              @keyframes bounceIdle {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-3px); }
                100% { transform: translateY(0px); }
              }
            `}
          </style>
        </button>
      )}
    </>
  );
}

export default ScrollTopDrone;