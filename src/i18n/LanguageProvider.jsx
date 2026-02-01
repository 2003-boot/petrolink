/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  // ✅ Init direct depuis localStorage (évite setState au montage)
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("site_lang");
    return saved === "fr" || saved === "en" ? saved : "fr";
  });

  useEffect(() => {
    localStorage.setItem("site_lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(() => ({ lang, setLang }), [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang doit être utilisé dans <LanguageProvider>");
  return ctx;
}
