"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useLang } from "@/lib/i18n";
import { PROJECTS, ASSETS, LINKS, type ProjectKey } from "@/lib/content";
import { Reveal } from "./Reveal";

export function ProjectDetail({ pkey }: { pkey: ProjectKey }) {
  const { lang, t } = useLang();
  const p = PROJECTS[pkey][lang];
  const a = ASSETS[pkey];
  const primaryHref = LINKS[p.proofLinks[0].key];
  const secondary = p.proofLinks[1];

  return (
    <main>
      <section className="mx-auto max-w-6xl px-6">
        <Link href="/" className="inline-block pt-8 text-sm text-ink-soft transition-colors hover:text-accent">
          {t.backHome}
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-5 overflow-hidden rounded-[1.75rem] border border-line bg-paper-2 shadow-soft-lg"
        >
          <div className="relative aspect-[16/6]">
            <Image src={a.banner} alt={`${p.title} banner`} fill priority sizes="100vw" className="object-cover" />
          </div>
        </motion.div>

        <div className="relative -mt-10 flex items-end gap-5 px-2">
          <Image
            src={a.avatar}
            alt={p.title}
            width={92}
            height={92}
            className="h-23 w-23 rounded-3xl border-4 border-paper object-cover shadow-soft-lg"
          />
          <div className="pb-2">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">{p.kicker}</span>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-ink md:text-5xl">{p.title}</h1>
          </div>
        </div>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">{p.sub}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener"
            className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-accent-deep hover:shadow-soft-lg"
          >
            {p.ctaPrimary}
          </a>
          {p.ctaSecondary && secondary && (
            <a
              href={LINKS[secondary.key]}
              target="_blank"
              rel="noopener"
              className="rounded-full border border-line bg-card px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-ink"
            >
              {p.ctaSecondary}
            </a>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">{p.whatTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{p.whatBody}</p>
        </Reveal>
      </section>

      <section className="border-y border-line bg-paper-2">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">{p.highlightsTitle}</h2>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            {p.highlights.map((h, i) => (
              <Reveal key={i} delay={i * 0.07}>
                <div className="h-full rounded-3xl border border-line bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                  <h3 className="font-display text-lg font-semibold text-ink">{h.t}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{h.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink md:text-3xl">{p.proofTitle}</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            {p.proofLinks.map((x) => (
              <a
                key={x.key}
                href={LINKS[x.key]}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-2 rounded-full border border-line bg-card px-5 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:border-accent hover:text-accent"
              >
                {x.label} <span className="text-accent">↗</span>
              </a>
            ))}
          </div>
        </Reveal>
      </section>
    </main>
  );
}
