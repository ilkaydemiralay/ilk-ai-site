"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { UI, type Lang } from "./content";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void; t: (typeof UI)["tr"] };
const LangContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Site şu an yalnızca EN. TR çevirileri content.ts'te hazır duruyor ama
  // aktif değil. TR'yi geri açmak için: localStorage geri yüklemesini ekle,
  // setLang/toggle'ı eski (gerçek dil değiştiren) haline döndür ve
  // Header'daki dil butonunu geri koy.
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = () => setLangState("en");
  const toggle = () => setLangState("en");

  return <LangContext.Provider value={{ lang, setLang, toggle, t: UI[lang] }}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
