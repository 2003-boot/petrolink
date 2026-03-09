// Hero.jsx
import { useTranslation } from "react-i18next";
import Container from "../../components/layout/Container";
import { Link } from "react-router-dom";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="home" className="pb-6">
      <Container full>
        <div className="relative overflow-hidden rounded-[28px] shadow-[0_18px_45px_rgba(0,0,0,.18)]">
          <div className="relative min-h-[90vh] bg-[url('/hero-bg.webp')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-black/20" />

            <div className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-4 text-center">
              <div className="mt-16 md:mt-20">
                <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/15 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                  <span>★</span>
                  {t("hero.badge")}
                </div>

                <h1
                  data-aos="zoom-in"
                  className="mt-4 max-w-[1000px] text-white font-extrabold leading-[1.05] tracking-[-0.6px] text-[38px] md:text-[68px]"
                >
                  {t("hero.title1")} <br />
                  {t("hero.title2")}
                </h1>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    to="/devis"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-orange-500 px-6 text-sm font-bold text-black shadow-[0_14px_30px_rgba(0,0,0,.3)] transition hover:translate-y-[-1px]"
                  >
                    {t("hero.ctaQuote")} <span>›</span>
                  </Link>

                  <button
                    onClick={() =>
                      document.getElementById("why-us")?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="cursor-pointer inline-flex h-11 items-center gap-2 rounded-full border border-white/25 bg-white/15 px-6 text-sm font-bold text-white backdrop-blur-md transition hover:bg-white/20"
                  >
                    {t("hero.ctaLearn")} <span>›</span>
                  </button>
                </div>
              </div>

              {/* LEFT card */}
              <div className="absolute bottom-6 left-6 hidden md:flex items-center gap-3 rounded-2xl border border-white/25 bg-white/15 px-4 py-3 text-white backdrop-blur-md shadow-[0_18px_40px_rgba(0,0,0,.25)]">
                <div className="flex -space-x-2">
                  <img src="avatars/av1.webp" alt={t("hero.avatarAlt1")} className="h-8 w-8 rounded-full object-cover ring-2 ring-white/25" />
                  <img src="avatars/av2.jpg" alt={t("hero.avatarAlt2")} className="h-8 w-8 rounded-full object-cover ring-2 ring-white/25" />
                  <img src="avatars/av3.webp" alt={t("hero.avatarAlt3")} className="h-8 w-8 rounded-full object-cover ring-2 ring-white/25" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-extrabold">{t("hero.cardLeftValue")}</div>
                  <div className="text-[12px] opacity-90">{t("hero.cardLeftLabel")}</div>
                </div>
              </div>

              {/* RIGHT card */}
              <div className="absolute bottom-6 right-6 hidden md:flex items-center gap-3 rounded-2xl border border-white/25 bg-white/15 px-4 py-3 text-white backdrop-blur-md shadow-[0_18px_40px_rgba(0,0,0,.25)]">
                <div className="h-12 w-12 overflow-hidden rounded-xl bg-white/20">
                  <img src="card-image.webp" alt={t("hero.cardRightAlt")} className="h-full w-full object-cover" />
                </div>
                <div className="text-left">
                  <div className="text-sm font-extrabold">{t("hero.cardRightValue")}</div>
                  <div className="text-[12px] opacity-90">{t("hero.cardRightLabel")}</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
