import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import logo from "../../assets/images/site-2-logo.png";
import { useLang } from "../../i18n/LanguageProvider";
import { translations } from "../../i18n/translations.js";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  // dropdown langue
  const [langOpen, setLangOpen] = useState(false);
  const langWrapRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (!langWrapRef.current) return;
      if (!langWrapRef.current.contains(e.target)) setLangOpen(false);
    };
    window.addEventListener("mousedown", onClickOutside);
    return () => window.removeEventListener("mousedown", onClickOutside);
  }, []);

  const labels = translations[lang].nav;

  // ✅ Liens officiels (avec "Nos réseaux" -> footer)
  const links = [
    { label: labels.home, href: "#home" },
    { label: labels.why, href: "#why-us" },
    { label: labels.service, href: "#service" },
    { label: labels.testimonials, href: "#testimonials" },
    { label: labels.socials, href: "#footer" },
  ];

  return (
    <header className="absolute top-10 left-0 right-3 z-50">
      <Container>
        <div className="flex items-center justify-between gap-3">
          {/* LEFT: logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <img
              src={logo}
              alt="Petrolink logo"
              className="w-32 object-contain"
            />
          </a>

          {/* CENTER: pill menu (desktop only) */}
          <nav
            className="
              hidden md:flex items-center gap-1
              rounded-full bg-white/90 px-2 py-1
              shadow-[0_10px_26px_rgba(0,0,0,.18)] backdrop-blur-md
              max-w-full overflow-x-auto whitespace-nowrap
            "
          >
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setActive(l.href)}
                  className={[
                    "rounded-full px-4 py-2 text-[13px] font-semibold transition whitespace-nowrap shrink-0",
                    isActive
                      ? "bg-black text-white"
                      : "text-black/70 hover:text-black",
                  ].join(" ")}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          {/* RIGHT: lang + hamburger */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Lang selector */}
            <div className="relative" ref={langWrapRef}>
              <button
                type="button"
                onClick={() => setLangOpen((s) => !s)}
                className="h-9 rounded-full border border-white/30 bg-white/15 px-3 text-xs font-semibold text-white backdrop-blur-md"
                aria-haspopup="menu"
                aria-expanded={langOpen}
              >
                {lang.toUpperCase()} <span className="ml-1 opacity-90">▾</span>
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-32 rounded-2xl bg-white/95 shadow-[0_18px_40px_rgba(0,0,0,.25)] backdrop-blur-md p-2">
                  <button
                    type="button"
                    onClick={() => {
                      setLang("fr");
                      setLangOpen(false);
                    }}
                    className={[
                      "w-full px-3 py-2 rounded-xl text-sm font-semibold text-left transition",
                      lang === "fr"
                        ? "bg-black text-white"
                        : "text-black hover:bg-black/5",
                    ].join(" ")}
                  >
                    Français
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setLang("en");
                      setLangOpen(false);
                    }}
                    className={[
                      "mt-1 w-full px-3 py-2 rounded-xl text-sm font-semibold text-left transition",
                      lang === "en"
                        ? "bg-black text-white"
                        : "text-black hover:bg-black/5",
                    ].join(" ")}
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            {/* Hamburger: ONLY mobile */}
            <button
              type="button"
              onClick={() => setOpen((s) => !s)}
              className="md:hidden inline-flex h-9 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/15 backdrop-blur-md"
              aria-label="Open menu"
            >
              <div className="flex flex-col gap-1">
                <span className="h-[2px] w-[18px] rounded-full bg-white" />
                <span className="h-[2px] w-[18px] rounded-full bg-white" />
                <span className="h-[2px] w-[18px] rounded-full bg-white" />
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE dropdown */}
        {open && (
          <div className="mt-3 md:hidden rounded-2xl bg-white/95 shadow-[0_18px_40px_rgba(0,0,0,.25)] backdrop-blur-md p-2">
            <div className="flex flex-col">
              {links.map((l) => {
                const isActive = active === l.href;
                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={() => {
                      setActive(l.href);
                      setOpen(false);
                      setLangOpen(false);
                    }}
                    className={[
                      "px-4 py-3 rounded-xl text-sm font-medium transition",
                      isActive
                        ? "bg-black text-white"
                        : "text-black hover:bg-black/5",
                    ].join(" ")}
                  >
                    {l.label}
                  </a>
                );
              })}
            </div>

            {/* Lang in mobile */}
            <button
              type="button"
              onClick={() => setLangOpen((s) => !s)}
              className="mt-2 w-full rounded-xl bg-black/5 px-4 py-3 text-left text-sm font-medium text-black"
            >
              {lang.toUpperCase()} ▾
            </button>
          </div>
        )}
      </Container>
    </header>
  );
}
