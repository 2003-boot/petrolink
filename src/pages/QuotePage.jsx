import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";
import Container from "../components/layout/Container";
import { Link } from "react-router-dom";

export default function QuotePage() {
  const { t } = useTranslation();

  const [service, setService] = useState("approvisionnement");
  const [phone, setPhone] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const canSend = phone.trim().length >= 6 && !loading;

  const submit = async () => {
    if (!canSend) return;

    setLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_QUOTE,
        {
          service,
          phone,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setSent(true);
      setTimeout(() => setSent(false), 2500);
      setPhone("");
      setService("approvisionnement");
    } catch (error) {
      console.error("EmailJS quote error:", error);
      alert("Impossible d'envoyer la demande pour le moment.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10 md:py-14">
      <Container full>
        <div className="mx-auto w-full max-w-[720px]">
          <div className="mb-4">
            <Link
              to="/#home"
              className="inline-flex items-center gap-2 rounded-full bg-white/60 border border-black/10 px-4 py-2 text-sm font-semibold text-black/80 backdrop-blur hover:bg-white/80 transition"
            >
              ‹ {t("quote.back")}
            </Link>
          </div>

          <div className="rounded-[28px] bg-[var(--bg)] p-6 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,.08)]">
            <div>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm shadow-[0_8px_20px_rgba(0,0,0,.08)]">
                <span>★</span>
                <span className="font-medium">{t("quote.badge")}</span>
              </div>

              <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-[1.08] tracking-tight">
                {t("quote.title")}
              </h1>

              <p className="mt-3 text-[var(--muted)] leading-relaxed">
                {t("quote.desc")}
              </p>
            </div>

            <div className="mt-8 rounded-[22px] bg-white border border-[#E7ECF2] p-5 md:p-8 shadow-[0_12px_35px_rgba(0,0,0,.06)]">
              <div className="space-y-5">
                <div className="rounded-2xl border border-black/10 p-4">
                  <label className="text-xs text-black/60">
                    {t("quote.service")}
                  </label>

                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3 py-3 text-sm outline-none"
                  >
                    <option value="approvisionnement">
                      {t("quote.services.approvisionnement")}
                    </option>
                    <option value="assistance">
                      {t("quote.services.assistance")}
                    </option>
                    <option value="etudes">
                      {t("quote.services.etudes")}
                    </option>
                  </select>
                </div>

                <div className="rounded-2xl border border-black/10 p-4">
                  <label className="text-xs text-black/60">
                    {t("quote.phone")}
                  </label>
                  <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t("quote.phonePlaceholder")}
                    className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3 py-3 text-sm outline-none"
                    inputMode="tel"
                  />
                </div>

                <button
                  onClick={submit}
                  disabled={!canSend}
                  className={[
                    "w-full h-12 rounded-full text-sm font-bold transition",
                    canSend
                      ? "bg-orange-500 text-black hover:opacity-90"
                      : "bg-black/20 text-white/60 cursor-not-allowed",
                  ].join(" ")}
                >
                  {loading ? "Envoi..." : t("quote.send")}
                </button>
              </div>
            </div>
          </div>

          <div
            className={[
              "fixed left-1/2 bottom-6 -translate-x-1/2 z-[80]",
              "transition-all duration-300",
              sent
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3 pointer-events-none",
            ].join(" ")}
          >
            <div className="rounded-full bg-black text-white px-5 py-3 text-sm shadow-[0_18px_40px_rgba(0,0,0,.25)]">
              {t("quote.success")}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}