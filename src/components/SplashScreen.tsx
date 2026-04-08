"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 5000);
    const hideTimer = setTimeout(() => setVisible(false), 5800);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: fading ? 0 : 1,
        transition: "opacity 0.8s ease",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      <Image
        src="/youooo_logo.png"
        alt="Youooo"
        width={420}
        height={211}
        priority
        style={{
          width: "min(420px, 80vw)",
          height: "auto",
          animation: "splashPulse 1.2s ease-in-out infinite alternate",
        }}
      />
      <style>{`
        @keyframes splashPulse {
          from { transform: scale(1); opacity: 0.9; }
          to   { transform: scale(1.04); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
