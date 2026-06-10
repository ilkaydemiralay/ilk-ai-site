"use client";

import { motion } from "motion/react";

/* Hero arka planı için hafif aurora animasyonu — açık havadar zemin.
   3D sahne yüklenene kadar placeholder ve reduced-motion/mobil için fallback.
   Performanslı (transform + opacity). */
export function HeroAnimation() {
  const orbs = [
    { c: "bg-indigo-300/45", s: "h-[30rem] w-[30rem]", pos: "left-[-8rem] top-[-10rem]", dur: 10, x: [0, 60, -30, 0], y: [0, 40, -20, 0], sc: [1, 1.18, 0.95, 1] },
    { c: "bg-pink-300/40", s: "h-[24rem] w-[24rem]", pos: "right-[-4rem] top-[-4rem]", dur: 12, x: [0, -50, 30, 0], y: [0, 30, -40, 0], sc: [1, 0.92, 1.15, 1] },
    { c: "bg-sky-300/40", s: "h-[22rem] w-[22rem]", pos: "left-[42%] top-[4rem]", dur: 13, x: [0, 40, -60, 0], y: [0, -30, 30, 0], sc: [1, 1.12, 0.9, 1] },
    { c: "bg-violet-300/35", s: "h-[20rem] w-[20rem]", pos: "right-[20%] bottom-[-4rem]", dur: 11, x: [0, -30, 40, 0], y: [0, -40, 20, 0], sc: [1, 1.1, 0.92, 1] },
  ];
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full blur-3xl ${o.c} ${o.s} ${o.pos}`}
          animate={{ x: o.x, y: o.y, scale: o.sc }}
          transition={{ duration: o.dur, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
