"use client";

import Image from "next/image";
import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { HOME, PROJECTS, ASSETS, PROJECT_ORDER, SLUG, SITE, type ProjectKey } from "@/lib/content";
import { Reveal } from "./Reveal";

function SectionHead({ eyebrow, title, lead, center }: { eyebrow: string; title: string; lead?: string; center?: boolean }) {
  return (
    <Reveal className={center ? "text-center" : ""}>
      <span className="text-xs font-semibold uppercase tracking-widest text-accent">{eyebrow}</span>
      <h2 className={`font-display mt-3 text-3xl font-bold tracking-tight text-ink md:text-4xl ${center ? "mx-auto max-w-3xl" : "max-w-2xl"}`}>{title}</h2>
      {lead && <p className={`mt-4 text-lg text-ink-soft [text-wrap:pretty] ${center ? "mx-auto max-w-2xl" : "max-w-2xl"}`}>{lead}</p>}
    </Reveal>
  );
}

const PILLAR_ICONS = [
  // fikir & yön
  <svg key="0" viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.7.7 1 1.2 1 2.5h6c0-1.3.3-1.8 1-2.5A6 6 0 0 0 12 3Z" /></svg>,
  // üretim
  <svg key="1" viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 3 8l9 5 9-5-9-5Z" /><path d="m3 16 9 5 9-5M3 12l9 5 9-5" /></svg>,
  // yayın & büyüme
  <svg key="2" viewBox="0 0 24 24" fill="none" className="h-6 w-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4 20-7Z" /><path d="M22 2 11 13" /></svg>,
];

export function Pillars() {
  const { lang, t } = useLang();
  const d = HOME[lang];
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <SectionHead center eyebrow={t.approach} title={d.howTitle} lead={d.howBody} />
      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {d.pillars.map((p, i) => (
          <Reveal key={i} delay={i * 0.08}>
            <div className="h-full rounded-3xl border border-line bg-card p-7 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-wash text-accent">{PILLAR_ICONS[i]}</div>
              <h3 className="font-display mt-5 text-xl font-semibold text-ink">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function StatsStrip() {
  const { lang } = useLang();
  const d = HOME[lang];
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">{d.statsEyebrow}</span>
          <h2 className="font-display mt-3 max-w-2xl text-2xl font-bold tracking-tight text-ink md:text-3xl">{d.statsTitle}</h2>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {d.stats.map((s, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <div>
                <div className="font-display text-4xl font-extrabold tracking-tight text-accent md:text-5xl">{s.v}</div>
                <div className="mt-1 text-sm text-ink-soft">{s.l}</div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-line pt-8">
            <span className="text-sm text-ink-faint">{d.platformsTitle}:</span>
            {d.platforms.map((p) => (
              <span key={p} className="rounded-full border border-line bg-card px-4 py-1.5 text-sm font-semibold text-ink shadow-soft">{p}</span>
            ))}
          </div>
        </Reveal>
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
            <Image src={a.banner} alt={`${p.title} banner`} fill sizes="(max-width: 768px) 100vw, 500px" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
          </div>
          <Image src={a.avatar} alt={p.title} width={52} height={52} className="absolute bottom-4 left-4 h-13 w-13 rounded-2xl border-2 border-white object-cover shadow-soft" />
        </div>
        <div className="flex flex-1 flex-col p-7">
          <div className="flex items-center gap-2.5">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">{p.cardTag}</span>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-emerald-600">{t.live}</span>
          </div>
          <h3 className="font-display mt-3 text-2xl font-bold tracking-tight text-ink">{p.title}</h3>
          <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{p.cardDesc}</p>
          <span className="mt-auto pt-5 text-sm font-semibold text-accent">
            {t.viewDetails} <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
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
    <section id="projects" className="relative">
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
      <SectionHead center eyebrow={t.value} title={d.whyTitle} lead={d.whyBody} />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {d.whyPoints.map((p, i) => {
          const accent = i === 0;
          return (
            <Reveal key={i} delay={i * 0.07}>
              <div className={`h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1 ${accent ? "bg-accent text-white glow-accent" : "border border-line bg-card shadow-soft hover:shadow-soft-lg"}`}>
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
    <section className="mx-auto max-w-6xl px-6 py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-ink px-8 py-16 md:px-16 md:py-20">
          <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">{d.ctaTitle}</h2>
              <p className="mt-3 max-w-md text-lg text-zinc-300">{d.ctaBody}</p>
              <a href={`mailto:${SITE.email}`} className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-ink transition-all duration-300 hover:bg-accent hover:text-white">
                {t.contactCta}
              </a>
            </div>
            <ul className="flex flex-col gap-4">
              {d.ctaPoints.map((p) => (
                <li key={p} className="flex items-center gap-3 text-zinc-200">
                  <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent text-white">
                    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                  </span>
                  <span className="text-[15px]">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export function FAQ() {
  const { lang } = useLang();
  const d = HOME[lang];
  return (
    <section className="mx-auto max-w-3xl px-6 pb-24">
      <SectionHead center eyebrow={d.faqEyebrow} title={d.faqTitle} />
      <div className="mt-10 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-card shadow-soft">
        {d.faq.map((f, i) => (
          <details key={i} className="group p-6 open:bg-paper-2/40">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display font-semibold text-ink [&::-webkit-details-marker]:hidden">
              {f.q}
              <span className="flex-none text-2xl leading-none text-accent transition-transform duration-300 group-open:rotate-45">+</span>
            </summary>
            <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
