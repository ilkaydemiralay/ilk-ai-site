"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useLang } from "@/lib/i18n";
import { HOME, PROJECTS, ASSETS, PROJECT_ORDER, SLUG } from "@/lib/content";
import { HeroAnimation } from "./HeroAnimation";

function highlight(text: string, word: string) {
  const i = text.indexOf(word);
  if (i < 0) return text;
  return (
    <>
      {text.slice(0, i)}
      <span className="text-accent">{word}</span>
      {text.slice(i + word.length)}
    </>
  );
}

export function Hero() {
  const { lang } = useLang();
  const d = HOME[lang];
  const accentWord = lang === "tr" ? "yapay zeka" : "AI";

  return (
    <section className="relative overflow-hidden">
      <HeroAnimation />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pt-20 pb-16 md:pt-28 md:pb-24 lg:grid-cols-12">
        <motion.div
          className="lg:col-span-7"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block rounded-full border border-line bg-card px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
            {d.heroKicker}
          </span>
          <h1 className="font-display mt-6 text-5xl font-extrabold leading-[1.04] tracking-tight text-ink md:text-6xl">
            {highlight(d.heroTitle, accentWord)}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{d.heroSub}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-accent-deep hover:shadow-soft-lg"
            >
              {d.heroPrimary}
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-line bg-card px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-ink"
            >
              {d.heroSecondary}
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="rounded-3xl border border-line bg-card/80 p-5 shadow-soft-lg backdrop-blur">
            <div className="flex items-center gap-2 px-1 pb-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm font-semibold text-ink">{d.heroNote}</span>
            </div>
            <div className="flex flex-col gap-2.5">
              {PROJECT_ORDER.map((k) => {
                const p = PROJECTS[k][lang];
                return (
                  <Link
                    key={k}
                    href={`/${SLUG[k]}`}
                    className="group flex items-center gap-3 rounded-2xl border border-transparent bg-paper-2 p-3 transition-all duration-300 hover:border-line hover:bg-card hover:shadow-soft"
                  >
                    <Image
                      src={ASSETS[k].avatar}
                      alt={p.title}
                      width={44}
                      height={44}
                      className="h-11 w-11 rounded-xl object-cover"
                    />
                    <div className="min-w-0">
                      <div className="truncate font-semibold text-ink">{p.title}</div>
                      <div className="truncate text-xs text-ink-faint">{p.cardTag}</div>
                    </div>
                    <span className="ml-auto text-ink-faint transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-accent">
                      →
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
