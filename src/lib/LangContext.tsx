"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { defaultContent } from "@/lib/siteContent";
import { useContent } from "@/lib/ContentContext";

type Lang = "en" | "ms";

interface LangContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
  t: (key) => defaultContent.translations.en[key] ?? key,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const content = useContent();
  const [lang, setLang] = useState<Lang>("en");

  const t = (key: string) =>
    content.translations?.[lang]?.[key] ??
    content.translations?.en?.[key] ??
    defaultContent.translations[lang][key] ??
    defaultContent.translations.en[key] ??
    key;

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
