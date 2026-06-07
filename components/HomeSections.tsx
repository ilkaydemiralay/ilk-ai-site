"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { HOME, PROJECTS, ASSETS, PROJECT_ORDER, SLUG, SITE, type ProjectKey } from "@/lib/content";
import { Reveal } from "./Reveal";

function SectionHead({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <Reveal>
      <span className="text-xs font-semibold uppercase tracking-widest text-accent">{eyebrow}</span>
      <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-ink md:text-4xl">{title}</h2>
      {lead && <p className="mt-4 max-w-2xl text-lg text-ink-soft">{lead}</p>}
    </Reveal>
  );
}

export function Pillars() {
  const { lang, t } = useLang();
  const d = HOME[lang];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHead eyebrow={t.approach} title={d.howTitle} lead={d.howBody} />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {d.pillars.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="h-full rounded-3xl border border-line bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
              <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
              <h3 className="font-display mt-4 text-xl font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function ProjectCard({ k, wide, delay }: { k: ProjectKey; wide?: boolean; delay?: number }) {
  const { lang, t } = useLang();
  const p = PROJECTS[k][lang];
  const a = ASSETS[k];
  return (
    <Reveal delay={delay} className={wide ? "md:col-span-2" : ""}>
      <Link
        href={`/${SLUG[k]}`}
        className={`group flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-card shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg ${
          wide ? "md:flex-row" : ""
        }`}
      >
        <div className={`relative overflow-hidden bg-paper-2 ${wide ? "md:w-[46%]" : ""}`}>
          <div className={wide ? "aspect-[16/10] md:h-full md:aspect-auto" : "aspect-[16/9]"}>
            <Image
              src={a.banner}
              alt={`${p.title} banner`}
              fill
              sizes="(max-width: 768px) 100vw, 500px"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
          <Image
            src={a.avatar}
            alt={p.title}
            width={52}
            height={52}
            className="absolute bottom-4 left-4 h-13 w-13 rounded-2xl border-2 border-white object-cover shadow-soft"
          />
        </div>
        <div className="flex flex-1 flex-col p-7">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">{p.cardTag}</span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-emerald-600">
              {t.live}
            </span>
          </div>
          <h3 className="font-display mt-3 text-2xl font-bold tracking-tight text-ink">{p.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{p.cardDesc}</p>
          <span className="mt-auto pt-5 text-sm font-semibold text-accent">
            {t.viewDetails}{" "}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

export function Projects() {
  const { t, lang } = useLang();
  const d = HOME[lang];
  return (
    <section id="projects" className="border-y border-line bg-paper-2">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <SectionHead eyebrow={t.portfolio} title={d.proofTitle} lead={d.proofBody} />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <ProjectCard k={PROJECT_ORDER[0]} wide delay={0} />
          <ProjectCard k={PROJECT_ORDER[1]} delay={0.08} />
          <ProjectCard k={PROJECT_ORDER[2]} delay={0.12} />
        </div>
      </div>
    </section>
  );
}

export function Why() {
  const { lang, t } = useLang();
  const d = HOME[lang];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHead eyebrow={t.value} title={d.whyTitle} lead={d.whyBody} />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {d.whyPoints.map((p, i) => {
          const accent = i === 0;
          return (
            <Reveal key={i} delay={i * 0.07}>
              <div
                className={`h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 ${
                  accent
                    ? "bg-accent text-white glow-accent"
                    : "border border-line bg-card shadow-soft hover:shadow-soft-lg"
                }`}
              >
                <h3 className={`font-display text-lg font-bold ${accent ? "text-white" : "text-ink"}`}>{p.k}</h3>
                <p className={`mt-2 text-[15px] leading-relaxed ${accent ? "text-indigo-100" : "text-ink-soft"}`}>{p.v}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function CTA() {
  const { lang, t } = useLang();
  const d = HOME[lang];
  return (
    <section className="mx-auto max-w-6xl px-6 pb-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-16 text-center md:py-20">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">{d.ctaTitle}</h2>
            <p className="mx-auto mt-3 max-w-lg text-lg text-zinc-300">{d.ctaBody}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:bg-accent hover:text-white"
            >
              {t.contactCta}
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
