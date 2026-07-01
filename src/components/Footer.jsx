import React from "react";

export default function Footer() {
  return (
   <footer className="relative overflow-hidden border-t border-[#22c55e]/40 bg-[#010712] text-white  shadow-[0_-10px_40px_rgba(34,197,94,0.12)]">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        {/* TOP GLOW */}
        <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-emerald-400/10 blur-[180px] rounded-full" />

        {/* BOTTOM GLOW */}
        <div className="absolute bottom-[-300px] left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-emerald-400/10 blur-[200px] rounded-full" />

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* BIG TEXT */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <h1 className="text-[12vw] md:text-[5vw] font-black tracking-[0.2em] text-emerald-400/[0.04] select-none">
            SVELTOZ
          </h1>
        </div>
        {/* VIGNETTE */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-center">
          <p className="text-sm tracking-[0.15em] text-white/40 text-center">
            © 2026 Sveltoz Solutions Pvt Ltd. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
