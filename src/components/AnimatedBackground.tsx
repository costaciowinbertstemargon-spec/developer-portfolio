"use client";

import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const [mouse, setMouse] = useState({ x: 50, y: 50 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="animated-background">
      {/* Moving grid */}
      <div className="background-grid" />

      {/* Ambient glow */}
      <div className="ambient-light light-one" />
      <div className="ambient-light light-two" />
      <div className="ambient-light light-three" />

      {/* Cursor glow */}
      <div
        className="mouse-glow"
        style={{
          left: `${mouse.x}%`,
          top: `${mouse.y}%`,
        }}
      />

      {/* Floating particles */}
      <div className="particle particle-one" />
      <div className="particle particle-two" />
      <div className="particle particle-three" />
      <div className="particle particle-four" />
      <div className="particle particle-five" />
      <div className="particle particle-six" />
      <div className="particle particle-seven" />

      {/* Subtle vignette */}
      <div className="background-vignette" />
    </div>
  );
}