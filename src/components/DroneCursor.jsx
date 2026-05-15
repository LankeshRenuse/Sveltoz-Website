import { useEffect, useRef } from "react";

export default function DroneCursor() {
  const droneRef = useRef(null);

  useEffect(() => {
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let x = mouseX;
    let y = mouseY;

    let currentAngle = 0;
    let time = 0;

    let hidden = false;
    let animationFrame;

    // ELEMENTS WHERE DRONE SHOULD HIDE
    const hideElements = document.querySelectorAll(`
      button,
      .btn,
      a,
      .hero-btn,
      input,
      textarea,
      select,
      form,
      .contact-form
    `);

    // MOUSE MOVE
    const moveMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // ANIMATION
    const animate = () => {
      time += 0.05;

      // SMOOTH FOLLOW
      x += (mouseX - x) * 0.12;
      y += (mouseY - y) * 0.12;

      // FLOAT EFFECT
      const floatX = Math.sin(time) * 2;
      const floatY = Math.cos(time * 1.2) * 2;

      const finalX = x + floatX;
      const finalY = y + floatY;

      // ROTATION
      const dx = mouseX - x;
      const dy = mouseY - y;

      let targetAngle = 0;

      if (dx !== 0 || dy !== 0) {
        targetAngle =
          Math.atan2(dy, dx) * (180 / Math.PI);
      }

      // SMOOTH ROTATION
      let diff =
        ((targetAngle - currentAngle + 540) %
          360) -
        180;

      currentAngle += diff * 0.08;

      // HIDE DRONE
      hidden = false;

      hideElements.forEach((el) => {
        const rect = el.getBoundingClientRect();

        const offset = 6;

        if (
          finalX >= rect.left + offset &&
          finalX <= rect.right - offset &&
          finalY >= rect.top + offset &&
          finalY <= rect.bottom - offset
        ) {
          hidden = true;
        }
      });

      // APPLY DRONE POSITION
      if (droneRef.current) {
        droneRef.current.style.cssText = `
          transform:
            translate(${finalX}px, ${finalY}px)
            translate(-50%, -50%)
            rotate(${currentAngle + 90}deg)
            scale(${hidden ? 0 : 1});
          opacity: ${hidden ? 0 : 1};
        `;
      }

      animationFrame =
        requestAnimationFrame(animate);
    };

    // EVENTS
    window.addEventListener(
      "mousemove",
      moveMouse
    );

    animate();

    // CLEANUP
    return () => {
      window.removeEventListener(
        "mousemove",
        moveMouse
      );

      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <>
      {/* 🚁 DRONE */}
      <div ref={droneRef} className="drone">
        {/* RADAR */}
        <div className="drone-radar">
          <div className="radar-ring"></div>

          <div className="radar-ring delay"></div>

          <div className="radar-sweep"></div>
        </div>

        {/* CENTER */}
        <div className="center"></div>

        {/* ARMS */}
        <div className="arm a1">
          <div className="rotor"></div>
        </div>

        <div className="arm a2">
          <div className="rotor"></div>
        </div>

        <div className="arm a3">
          <div className="rotor"></div>
        </div>

        <div className="arm a4">
          <div className="rotor"></div>
        </div>
      </div>
    </>
  );
}