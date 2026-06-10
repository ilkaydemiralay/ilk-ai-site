"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useLang } from "@/lib/i18n";
import { HOME, PROJECTS, ASSETS, SLUG } from "@/lib/content";
import { OrbField } from "./OrbField";

function highlight(text: string, word: string) {
  const i = text.indexOf(word);
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <span className="bg-gradient-to-r from-indigo-600 via-violet-500 to-sky-500 bg-clip-text text-transparent">
        {word}
      </span>
      {text.slice(i + word.length)}
    </>
  );
}

export function Hero() {
  const { lang } = useLang();
  const d = HOME[lang];
  const accentWord = lang === "tr" ? "yapay zeka" : "AI";

  const tile = (k: "wsd" | "osto" | "dreamercell", className: string, aspect: string) => {
    const p = PROJECTS[k][lang];
    return (
      <Link
        href={`/${SLUG[k]}`}
        className={`group relative overflow-hidden rounded-2xl border border-line bg-card shadow-soft transition-all duration-300 hover:shadow-soft-lg ${className}`}
      >
        <div className={`relative ${aspect}`}>
          <Image src={ASSETS[k].banner} alt={p.title} fill sizes="320px" className="object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>
        <div className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-black/70 to-transparent p-3">
          <span className="text-sm font-semibold text-white drop-shadow">{p.title}</span>
        </div>
      </Link>
    );
  };

  return (
    <section className="relative isolate overflow-hidden">
      <OrbField fade="bottom" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pt-16 pb-20 md:pt-24 md:pb-28 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent shadow-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {d.heroNote}
          </span>
          <h1 className="font-display mt-6 text-5xl font-extrabold leading-[1.03] tracking-tight text-ink md:text-6xl">
            {highlight(d.heroTitle, accentWord)}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{d.heroSub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#projects" className="glow-accent rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-accent-deep">
              {d.heroPrimary}
            </Link>
            <Link href="#contact" className="rounded-full border border-line bg-card px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-ink">
              {d.heroSecondary}
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-2 gap-3"
        >
          {tile("wsd", "col-span-2", "aspect-[16/9]")}
          {tile("osto", "", "aspect-[4/3]")}
          {tile("dreamercell", "", "aspect-[4/3]")}
        </motion.div>
      </div>
    </section>
  );
}
