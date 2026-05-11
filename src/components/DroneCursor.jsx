import { useEffect, useRef } from "react";

export default function DroneCursor() {

  const droneRef = useRef(null);
  const pathRef = useRef(null);
  const particleRef = useRef(null);

  const lockedRef = useRef(null);
  const lockStrength = useRef(0);

  useEffect(() => {

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let x = mouseX;
    let y = mouseY;

    let currentAngle = 0;
    let time = 0;

    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // 🎯 GET ANTENNA TIP (SVG → SCREEN)
    const getAntennaTip = (antenna) => {
      const svg = antenna.querySelector("svg");
      const tip = antenna.querySelector("circle[cx='50'][cy='8']");

      if (!svg || !tip) return null;

      const pt = svg.createSVGPoint();
      pt.x = tip.cx.baseVal.value;
      pt.y = tip.cy.baseVal.value;

      const screen = pt.matrixTransform(svg.getScreenCTM());

      return { x: screen.x, y: screen.y, el: antenna };
    };

    // 🎯 GET DRONE CENTER (REAL VISUAL CENTER)
    const getDroneCenter = () => {
      const centerEl = droneRef.current?.querySelector(".center");

      if (centerEl) {
        const r = centerEl.getBoundingClientRect();
        return {
          x: r.left + r.width / 2,
          y: r.top + r.height / 2
        };
      }

      // fallback
      const r = droneRef.current?.getBoundingClientRect();
      if (!r) return null;

      return {
        x: r.left + r.width / 2,
        y: r.top + r.height / 2
      };
    };

    // 🌊 WAVE
    const createWavePath = (x1, y1, x2, y2) => {
      const segments = 20;
      const amplitude = 8;
      const frequency = 6;
      const tNow = Date.now() * 0.002;

      let path = `M ${x1} ${y1}`;

      for (let i = 1; i <= segments; i++) {
        const t = i / segments;

        const baseX = x1 + (x2 - x1) * t;
        const baseY = y1 + (y2 - y1) * t;

        const edgeFade = Math.sin(Math.PI * t);

        const offset =
          Math.sin(t * Math.PI * frequency + tNow) *
          amplitude *
          edgeFade;

        const angle = Math.atan2(y2 - y1, x2 - x1);

        const waveX = baseX + offset * Math.sin(angle);
        const waveY = baseY + offset * Math.cos(angle);

        path += ` L ${waveX} ${waveY}`;
      }

      return path;
    };

    const animate = () => {
      time += 0.05;

      // smooth follow
      x += (mouseX - x) * 0.08;
      y += (mouseY - y) * 0.08;

      // floating
      const floatX = Math.sin(time) * 2;
      const floatY = Math.cos(time * 1.2) * 2;

      const finalX = x + floatX;
      const finalY = y + floatY;

      // rotation
      const dx = mouseX - x;
      const dy = mouseY - y;

      let targetAngle = 0;
      if (dx !== 0 || dy !== 0) {
        targetAngle = Math.atan2(dy, dx) * (180 / Math.PI);
      }

      currentAngle += (targetAngle - currentAngle) * 0.08;

      if (droneRef.current) {
        droneRef.current.style.transform =
          `translate(${finalX}px, ${finalY}px)
           translate(-50%, -50%)
           rotate(${currentAngle + 90}deg)`;
      }

      // =========================
      // 🧠 ANTENNA TRACKING
      // =========================
      const antennas = document.querySelectorAll(".antenna");

      let best = null;
      let bestScore = Infinity;

      antennas.forEach((a) => {
        const tip = getAntennaTip(a);
        if (!tip) return;

        const dist = Math.hypot(finalX - tip.x, finalY - tip.y);

        if (dist < bestScore) {
          bestScore = dist;
          best = tip;
        }
      });

      // 🔒 LOCK
      if (lockedRef.current) {
        const dist = Math.hypot(
          finalX - lockedRef.current.x,
          finalY - lockedRef.current.y
        );

        if (dist < 420) {
          best = lockedRef.current;
          lockStrength.current = Math.min(lockStrength.current + 0.05, 1);
        } else {
          lockedRef.current = null;
          lockStrength.current = 0;
        }
      }

      if (!lockedRef.current && best) {
        lockedRef.current = best;
      }

      const target = lockedRef.current;

      // =========================
      // 🌊 DRAW SIGNAL
      // =========================
      if (target && pathRef.current) {

        const droneCenter = getDroneCenter();
        if (!droneCenter) return;

        pathRef.current.setAttribute(
          "d",
          createWavePath(target.x, target.y, droneCenter.x, droneCenter.y)
        );

        pathRef.current.style.opacity = 0.6 + lockStrength.current * 0.4;

        // particle
        if (particleRef.current) {
          const len = pathRef.current.getTotalLength();
          const t = (Date.now() % 3000) / 3000;

          const point = pathRef.current.getPointAtLength(len * t);

          particleRef.current.setAttribute("cx", point.x);
          particleRef.current.setAttribute("cy", point.y);
        }
      }

      antennas.forEach(a => a.classList.remove("active"));
      if (target?.el) target.el.classList.add("active");

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", moveMouse);
    animate();

    return () => window.removeEventListener("mousemove", moveMouse);

  }, []);

  return (
    <>
      {/* ANTENNAS */}
      <div className="antenna left-antenna">
        <div className="antenna-wave"></div>
        <svg viewBox="0 0 100 100" className="antenna-svg">
          <g stroke="#8fffd65a" strokeWidth="2" fill="#8fffd65a">
            <line x1="50" y1="10" x2="50" y2="30" />
            <circle cx="50" cy="8" r="5" fill="#8fffd674" />
            <rect x="30" y="30" width="40" height="25" rx="5" />
            <path d="M30 40 Q15 55 25 75" />
            <path d="M70 40 Q85 55 75 75" />
          </g>
        </svg>
      </div>

      <div className="antenna right-antenna">
        <div className="antenna-wave"></div>
        <svg viewBox="0 0 100 100" className="antenna-svg">
          <g stroke="#8fffd65a" strokeWidth="2" fill="#8fffd65a">
            <line x1="50" y1="10" x2="50" y2="30" />
            <circle cx="50" cy="8" r="5" fill="#8fffd66f" />
            <rect x="30" y="30" width="40" height="25" rx="5" />
            <path d="M30 40 Q15 55 25 75" />
            <path d="M70 40 Q85 55 75 75" />
          </g>
        </svg>
      </div>

      {/* SIGNAL */}
      <svg className="signal-svg">
        <path ref={pathRef} className="signal-path" />
        <circle ref={particleRef} r="3" fill="#8fffd6" />
      </svg>

      {/* DRONE */}
      <div ref={droneRef} className="drone">
        <div className="drone-radar">
          <div className="radar-ring"></div>
          <div className="radar-ring delay"></div>
          <div className="radar-sweep"></div>
        </div>

        {/* 🔥 THIS is the true center */}
        <div className="center"></div>

        <div className="arm a1"><div className="rotor"></div></div>
        <div className="arm a2"><div className="rotor"></div></div>
        <div className="arm a3"><div className="rotor"></div></div>
        <div className="arm a4"><div className="rotor"></div></div>
      </div>
    </>
  );
}