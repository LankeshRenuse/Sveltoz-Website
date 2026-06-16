import { useEffect, useRef } from "react";

export default function ParticleBackground() {

  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {

    let canvas, ctx;
    let width, height, dpr;
    let particles = [];

    let mouse = {
      x: window.innerWidth / 2,
      y: window.innerHeight / 2
    };

    const moveMouse = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener("mousemove", moveMouse);

    // =========================
    // CREATE PARTICLES
    // =========================
    const createParticles = () => {

      if (canvasRef.current) return;

      canvas = document.createElement("canvas");
      ctx = canvas.getContext("2d");

      canvas.style.position = "fixed";
      canvas.style.top = "0";
      canvas.style.left = "0";

      canvas.style.width = "100%";
      canvas.style.height = "100%";

    canvas.style.zIndex = "-1";

      canvas.style.pointerEvents = "none";

      document.body.appendChild(canvas);

      canvasRef.current = canvas;

      init();
      animate();
    };

    // =========================
    // DESTROY
    // =========================
    const destroyParticles = () => {

      if (!canvasRef.current) return;

      cancelAnimationFrame(animationRef.current);

      canvasRef.current.remove();

      canvasRef.current = null;
    };

    // =========================
    // INIT
    // =========================
    const init = () => {

      dpr = window.devicePixelRatio || 1;

      width = window.innerWidth;
      height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = width + "px";
      canvas.style.height = height + "px";

      ctx.setTransform(1, 0, 0, 1, 0, 0);

      ctx.scale(dpr, dpr);

      const count = 120;

      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 0.5,
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 0.2 + 0.05,
        connect: Math.random() > 0.5
      }));
    };

    // =========================
    // ANIMATION
    // =========================
    const animate = () => {

      ctx.clearRect(0, 0, width, height);

      const radius = 120;
      const radiusSq = radius * radius;

      // PARTICLES
      particles.forEach(p => {

        p.angle += 0.005;

        p.x += Math.cos(p.angle) * p.speed;
        p.y += Math.sin(p.angle) * p.speed;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;

        const distSq = dx * dx + dy * dy;

        let near = false;

        if (distSq < radiusSq) {

          const force =
            (radiusSq - distSq) / radiusSq;

          p.x += dx * force * 0.03;
          p.y += dy * force * 0.03;

          near = true;
        }

        // WRAP
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();

        ctx.arc(
          p.x,
          p.y,
          p.r,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = near
          ? "rgba(143,255,214,1)"
          : "rgba(30,255,150,0.3)";

        ctx.fill();
      });

      // CONNECTIONS
      const maxDist = 80;
      const maxDistSq = maxDist * maxDist;

      for (let i = 0; i < particles.length; i++) {

        const p1 = particles[i];

        if (!p1.connect) continue;

        let connections = 0;

        for (let j = i + 1; j < particles.length; j++) {

          const p2 = particles[j];

          if (!p2.connect) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;

          const distSq = dx * dx + dy * dy;

          if (
            distSq < maxDistSq &&
            connections < 2
          ) {

            connections++;

            ctx.beginPath();

            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            ctx.strokeStyle =
              "rgba(143,255,214,0.08)";

            ctx.lineWidth = 0.8;

            ctx.stroke();
          }
        }
      }

      animationRef.current =
        requestAnimationFrame(animate);
    };

    // =========================
    // RESPONSIVE
    // =========================
    const handleResize = () => {

      if (window.innerWidth <= 640) {

        destroyParticles();

      } else {

        createParticles();
      }
    };

    handleResize();

    window.addEventListener(
      "resize",
      handleResize
    );

    return () => {

      destroyParticles();

      window.removeEventListener(
        "resize",
        handleResize
      );

      window.removeEventListener(
        "mousemove",
        moveMouse
      );
    };

  }, []);

  return null;
}
