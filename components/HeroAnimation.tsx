"use client";

import { motion } from "motion/react";

/* Hero arka planı için sürekli hareket eden, yumuşak aurora animasyonu.
   Performanslı (transform + opacity), video benzeri canlı his; açık premium tema. */
export function HeroAnimation() {
  const orbs = [
    { c: "bg-indigo-400/35", s: "h-[26rem] w-[26rem]", pos: "left-[-6rem] top-[-8rem]", dur: 20, x: [0, 60, -30, 0], y: [0, 40, -20, 0], sc: [1, 1.18, 0.95, 1] },
    { c: "bg-violet-400/30", s: "h-[22rem] w-[22rem]", pos: "right-[-4rem] top-[-6rem]", dur: 24, x: [0, -50, 30, 0], y: [0, 30, -40, 0], sc: [1, 0.92, 1.15, 1] },
    { c: "bg-sky-300/30", s: "h-[20rem] w-[20rem]", pos: "left-[40%] top-[2rem]", dur: 28, x: [0, 40, -60, 0], y: [0, -30, 30, 0], sc: [1, 1.12, 0.9, 1] },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden>
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${o.c} ${o.s} ${o.pos}`}
          animate={{ x: o.x, y: o.y, scale: o.sc }}
          transition={{ duration: o.dur, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
      {/* aşağı doğru beyaza erime — içerik okunaklı kalsın */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-paper" />
    </div>
  );
}
