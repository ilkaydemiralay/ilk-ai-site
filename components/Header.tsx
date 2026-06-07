"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/lib/i18n";

export function Header() {
  const { t, toggle, lang } = useLang();
  const [open, setOpen] = useState(false);
  const other = lang === "tr" ? "EN" : "TR";

  const links = [
    { href: "/#projects", label: t.nav.projects },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 glass border-b border-line">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="ilk.ai" className="font-display text-xl font-extrabold tracking-tight text-ink">
          ilk<span className="text-accent">.ai</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-ink-soft transition-colors hover:text-accent">
              {l.label}
            </Link>
          ))}
          <button
            onClick={toggle}
            className="rounded-full border border-line px-3.5 py-1.5 text-xs font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            {other}
          </button>
        </nav>

        <button className="md:hidden text-2xl leading-none" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-paper px-6 py-4">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-1 text-ink-soft hover:text-accent">
                {l.label}
              </Link>
            ))}
            <button onClick={() => { toggle(); setOpen(false); }} className="self-start rounded-full border border-line px-3.5 py-1.5 text-xs font-semibold">
              {other}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
