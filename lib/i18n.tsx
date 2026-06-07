"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { UI, type Lang } from "./content";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void; t: (typeof UI)["tr"] };
const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  useEffect(() => {
    const saved = (typeof localStorage !== "undefined" && localStorage.getItem("ilkai_lang")) as Lang | null;
    if (saved === "tr" || saved === "en") setLangState(saved);
    else if (typeof navigator !== "undefined" && navigator.language.toLowerCase().startsWith("en")) setLangState("en");
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("ilkai_lang", l); } catch {}
  };
  const toggle = () => setLang(lang === "tr" ? "en" : "tr");

  return <LangContext.Provider value={{ lang, setLang, toggle, t: UI[lang] }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
