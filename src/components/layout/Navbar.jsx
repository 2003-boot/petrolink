import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "./Container";
import logo from "../../assets/images/site-2-logo.webp";

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const links = [
    { key: "nav.home", href: "#home" },
    { key: "nav.why", href: "#why-us" },
    { key: "nav.services", href: "#service" },
    { key: "nav.partners", href: "#partners" },
    { key: "nav.socials", href: "#footer" },
  ];

  const [active, setActive] = useState("#home");
  const [open, setOpen] = useState(false);

  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null);

  const current = (i18n.resolvedLanguage || i18n.language || "fr").startsWith("en")
    ? "en"
    : "fr";

  useEffect(() => {
    const onDown = (e) => {
      if (!langRef.current) return;
      if (!langRef.current.contains(e.target)) setLangOpen(false);
    };
    window.addEventListener("mousedown", onDown);
    return () => window.removeEventListener("mousedown", onDown);
  }, []);

  const setLang = (lng) => {
    i18n.changeLanguage(lng);
    setLangOpen(false);
    setOpen(false);
  };

  return (
    <header className="absolute top-10 left-0 right-0 z-[120]">
      <Container full>
        <div className="flex items-center justify-between gap-3">
          <a
            href="#home"
            className="flex items-center gap-2 shrink-0"
            onClick={() => setActive("#home")}
          >
            <img
              src={logo}
              alt="Petrolink logo"
              className="w-32 object-contain"
              data-aos="fade-down"
              data-aos-duration="300"
            />
          </a>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 shadow-[0_10px_26px_rgba(0,0,0,.18)] backdrop-blur-md"
            data-aos="fade-down"
            data-aos-duration="400"
          >
            {links.map((l) => {
              const isActive = active === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => {
                    setActive(l.href);
                    setOpen(false);
                  }}
                  className={[
                    "rounded-full px-4 py-2 text-[13px] font-semibold transition whitespace-nowrap",
                    isActive ? "bg-black text-white" : "text-black/70 hover:text-black",
                  ].join(" ")}
                >
                  {t(l.key)}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 shrink-0" data-aos="fade-down" data-aos-duration="500">
            {/* ✅ Language dropdown (desktop) */}
            <div className="hidden md:block relative right-5" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangOpen((v) => !v)}
                className="
                  cursor-pointer
                  flex items-center gap-2
                  rounded-full px-4 py-2
                  bg-white/90 border border-black/10
                  backdrop-blur-md
                  text-black text-xs font-semibold
                  shadow-[0_10px_26px_rgba(0,0,0,.18)]
                  hover:bg-white transition
                "
                aria-label={t("common.language")}
              >
                <FlagIcon code={current} />
                <span className="opacity-95">{current === "fr" ? "FR" : "EN"}</span>
                <ChevronDown className={`transition ${langOpen ? "rotate-180" : ""}`} />
              </button>

              {langOpen && (
                <div
                  className="
                    absolute right-0 mt-2 w-44
                    rounded-2xl bg-white
                    shadow-[0_18px_50px_rgba(0,0,0,.22)]
                    border border-black/5
                    overflow-hidden
                    z-[200]
                  "
                >
                  <button
                    onClick={() => setLang("fr")}
                    className="w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-black/5 transition"
                    type="button"
                  >
                    <FlagIcon code="fr" />
                    <span className="font-medium text-[var(--ink)]">Français</span>
                  </button>

                  <div className="h-px bg-black/5" />

                  <button
                    onClick={() => setLang("en")}
                    className="w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-black/5 transition"
                    type="button"
                  >
                    <FlagIcon code="en" />
                    <span className="font-medium text-[var(--ink)]">English</span>
                  </button>
                </div>
              )}
            </div>

            {/* Hamburger (mobile) */}
            <button
              type="button"
              onClick={() => setOpen((s) => !s)}
              className="md:hidden inline-flex h-9 w-10 items-center justify-center rounded-xl border border-white/30 bg-white/15 backdrop-blur-md mr-2"
              aria-label={t("nav.openMenu")}
            >
              <div className="flex flex-col gap-1">
                <span className="h-[2px] w-[18px] rounded-full bg-white" />
                <span className="h-[2px] w-[18px] rounded-full bg-white" />
                <span className="h-[2px] w-[18px] rounded-full bg-white" />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
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
                    }}
                    className={[
                      "px-4 py-3 rounded-xl text-sm font-medium transition",
                      isActive ? "bg-black text-white" : "text-black hover:bg-black/5",
                    ].join(" ")}
                  >
                    {t(l.key)}
                  </a>
                );
              })}
            </div>

            {/* ✅ Language chooser (mobile) */}
            <div className="mt-2 rounded-xl bg-black/5 px-4 py-3">
              <div className="text-xs font-semibold text-black/70 mb-2">{t("common.language")}</div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLang("fr")}
                  className={[
                    "flex-1 rounded-xl px-3 py-2 text-sm font-semibold transition flex items-center justify-center gap-2",
                    current === "fr" ? "bg-black text-white" : "bg-white text-black hover:bg-black/5",
                  ].join(" ")}
                >
                  <FlagIcon code="fr" />
                  Français
                </button>

                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={[
                    "flex-1 rounded-xl px-3 py-2 text-sm font-semibold transition flex items-center justify-center gap-2",
                    current === "en" ? "bg-black text-white" : "bg-white text-black hover:bg-black/5",
                  ].join(" ")}
                >
                  <FlagIcon code="en" />
                  English
                </button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}

function ChevronDown({ className = "" }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M7 10l5 5 5-5H7z" />
    </svg>
  );
}

/**
 * ✅ Drapeaux SVG (toujours visibles)
 */
function FlagIcon({ code = "fr" }) {
  if (code === "en") {
    // UK-ish simple flag
    return (
      <span className="inline-flex h-5 w-7 overflow-hidden rounded-[4px] ring-1 ring-black/10">
        <svg viewBox="0 0 60 40" width="28" height="20" aria-hidden="true">
          <rect width="60" height="40" fill="#012169" />
          <path d="M0 0 L60 40 M60 0 L0 40" stroke="#FFF" strokeWidth="8" />
          <path d="M0 0 L60 40 M60 0 L0 40" stroke="#C8102E" strokeWidth="4" />
          <path d="M30 0 V40 M0 20 H60" stroke="#FFF" strokeWidth="10" />
          <path d="M30 0 V40 M0 20 H60" stroke="#C8102E" strokeWidth="6" />
        </svg>
      </span>
    );
  }

  // France flag
  return (
    <span className="inline-flex h-5 w-7 overflow-hidden rounded-[4px] ring-1 ring-black/10">
      <svg viewBox="0 0 60 40" width="28" height="20" aria-hidden="true">
        <rect width="20" height="40" x="0" fill="#0055A4" />
        <rect width="20" height="40" x="20" fill="#FFFFFF" />
        <rect width="20" height="40" x="40" fill="#EF4135" />
      </svg>
    </span>
  );
}
