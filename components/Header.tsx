"use client";

import Link from "next/link";
import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { Logo } from "./Logo";

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#projects", label: t.nav.projects },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 glass border-b border-line">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" aria-label="ilk.ai">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm font-medium text-ink-soft transition-colors hover:text-accent">
              {l.label}
            </Link>
          ))}
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
          </div>
        </div>
      )}
    </header>
  );
}
