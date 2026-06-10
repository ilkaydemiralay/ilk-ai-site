"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { HeroAnimation } from "./HeroAnimation";

// 3D sahne yalnızca client'ta yüklenir (WebGL SSR'de yok).
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

// WebGL desteğini test et — desteklenmeyen ortamlarda 3D'yi hiç deneme.
function webglAvailable() {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

// reduced-motion, küçük ekran ve WebGL yokluğunda 3D'yi devre dışı bırak, hafif fallback'e düş.
function useEnable3D() {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 768px)").matches;
    setEnabled(!reduce && !small && webglAvailable());
  }, []);
  return enabled;
}

/* Yüzen renkli küre arka planı — hem hero (üst) hem sayfa sonunda (alt) kullanılır.
   fade: hangi kenara doğru maskeyle eritileceği (sert kesim/dikiş olmasın diye). */
export function OrbField({ fade = "bottom" }: { fade?: "bottom" | "top" }) {
  const enable3D = useEnable3D();
  const mask =
    fade === "bottom"
      ? "linear-gradient(to bottom, #000 50%, transparent 92%)"
      : "linear-gradient(to top, #000 50%, transparent 92%)";
  return (
    <div
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      style={{ maskImage: mask, WebkitMaskImage: mask }}
      aria-hidden
    >
      <HeroAnimation />
      {enable3D && (
        <div className="absolute inset-0">
          <HeroScene />
        </div>
      )}
    </div>
  );
}
