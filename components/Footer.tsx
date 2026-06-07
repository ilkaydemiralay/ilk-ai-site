"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { SITE } from "@/lib/content";

export function Footer() {
  const { t } = useLang();
  return (
    <footer id="contact" className="mt-auto border-t border-line bg-paper-2">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 sm:flex-row sm:items-end sm:justify-between">
        <div className="flex flex-col gap-3">
          <Image src="/img/logo-dark.png" alt="ilk.ai" width={110} height={32} className="h-8 w-auto" />
          <p className="max-w-xs text-sm text-ink-soft">{t.footerTag}</p>
        </div>
        <div className="sm:text-right">
          <a href={`mailto:${SITE.email}`} className="font-display text-lg font-semibold text-ink transition-colors hover:text-accent">
            {SITE.email}
          </a>
          <p className="mt-1.5 text-xs text-ink-faint">
            © {SITE.year} {SITE.brand} — {t.footerRights}
          </p>
        </div>
      </div>
    </footer>
  );
}
