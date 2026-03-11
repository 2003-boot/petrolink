import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function ContactStickyButton({
  whatsappNumber = "2250000000000",
  whatsappMessage = "Bonjour, je voudrais un devis / des informations.",
}) {
  const { t } = useTranslation();

  const [emailOpen, setEmailOpen] = useState(false);
  const [sentToast, setSentToast] = useState(false);
  const [open, setOpen] = useState(false);
  const [sending, setSending] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const toastTimer = useRef(null);

  const waLink = useMemo(() => {
    const msg = encodeURIComponent(whatsappMessage);
    return `https://wa.me/${whatsappNumber}?text=${msg}`;
  }, [whatsappNumber, whatsappMessage]);

  const openWhatsapp = () => {
    window.open(waLink, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setEmailOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!sentToast) return;
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setSentToast(false), 2200);
    return () => clearTimeout(toastTimer.current);
  }, [sentToast]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_POPUP,
        {
          name: form.name,
          email: form.email,
          title: form.subject || t("contact.emailDefaultSubject"),
          message: form.message,
        },
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setEmailOpen(false);
      setSentToast(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS popup error:", error);
      alert("Impossible d'envoyer le message pour le moment.");
    } finally {
      setSending(false);
    }
  };

  if (typeof document === "undefined" || !document.body) return null;

  return createPortal(
    <>
      <div className="fixed bottom-6 right-6 z-[90] hidden md:block">
        <div className="group relative">
          <div
            className="h-16 w-[250px] rounded-full bg-[#10E4D4]
                       shadow-[0_16px_40px_rgba(0,0,0,.18)]
                       flex items-center justify-center gap-4
                       transition-all duration-300"
          >
            <div
              className="w-10 h-10 rounded-full bg-black/10
                         flex items-center justify-center
                         transition-all duration-300
                         group-hover:opacity-0 group-hover:scale-95"
            >
              <ChatIcon />
            </div>

            <span
              className="text-black text-lg font-medium
                         transition-all duration-300
                         group-hover:opacity-0 group-hover:translate-y-1"
            >
              {t("contact.cta")}
            </span>

            <div
              className="absolute inset-0 rounded-full
                         flex items-center justify-center gap-3
                         opacity-0 pointer-events-none
                         group-hover:opacity-100 group-hover:pointer-events-auto
                         transition-all duration-300"
            >
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/90 hover:bg-white
                           flex items-center justify-center transition"
                aria-label={t("contact.whatsapp")}
              >
                <WhatsAppIcon />
              </a>

              <button
                type="button"
                onClick={() => setEmailOpen(true)}
                className="cursor-pointer w-12 h-12 rounded-full bg-white/90 hover:bg-white
                           flex items-center justify-center transition"
                aria-label={t("contact.email")}
              >
                <MailIcon />
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed z-[90] md:hidden
                  h-12 w-12 rounded-full bg-white/90 border border-black/10
                  backdrop-blur-md shadow-[0_18px_40px_rgba(0,0,0,.25)]
                  flex items-center justify-center"
        style={{
          right: "max(16px, env(safe-area-inset-right))",
          bottom: "max(24px, env(safe-area-inset-bottom))",
        }}
        aria-label={t("contact.open")}
      >
        <ChatIcon className="text-black" />
      </button>

      {open && (
        <div className="fixed bottom-20 right-5 z-[90] md:hidden flex flex-col gap-3">
          <button
            onClick={openWhatsapp}
            className="h-12 w-12 rounded-full bg-white shadow
                       flex items-center justify-center"
            aria-label={t("contact.whatsapp")}
          >
            <WhatsAppIcon className="text-[#25D366]" />
          </button>

          <button
            onClick={() => {
              setOpen(false);
              setEmailOpen(true);
            }}
            className="h-12 w-12 rounded-full bg-white shadow
                       flex items-center justify-center cursor-pointer"
            aria-label={t("contact.email")}
          >
            <MailIcon />
          </button>
        </div>
      )}

      {emailOpen && (
        <div
          className="fixed inset-0 z-[1000] bg-black/40 backdrop-blur-sm
                     flex items-center justify-center p-4"
          onMouseDown={() => setEmailOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-[24px] bg-white
                       shadow-[0_20px_70px_rgba(0,0,0,.25)]
                       p-5 md:p-6"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">{t("contact.modalTitle")}</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {t("contact.modalDesc")} <b>{t("contact.send")}</b>.
                </p>
              </div>

              <button
                onClick={() => setEmailOpen(false)}
                className="w-10 h-10 rounded-full bg-[#F2F4F7]
                           hover:bg-[#E9EDF3] transition
                           flex items-center justify-center"
                aria-label={t("contact.close")}
              >
                ✕
              </button>
            </div>

            <form onSubmit={onSubmit} className="mt-5 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input
                  label={t("contact.fields.name")}
                  value={form.name}
                  onChange={(v) => setForm((s) => ({ ...s, name: v }))}
                  required
                />
                <Input
                  label={t("contact.fields.email")}
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm((s) => ({ ...s, email: v }))}
                  required
                />
              </div>

              <Input
                label={t("contact.fields.subject")}
                value={form.subject}
                onChange={(v) => setForm((s) => ({ ...s, subject: v }))}
                placeholder={t("contact.placeholders.subject")}
              />

              <Textarea
                label={t("contact.fields.message")}
                value={form.message}
                onChange={(v) => setForm((s) => ({ ...s, message: v }))}
                placeholder={t("contact.placeholders.message")}
                required
              />

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setEmailOpen(false)}
                  className="px-4 py-2 rounded-full bg-[#F2F4F7]
                             hover:bg-[#E9EDF3] transition text-sm"
                >
                  {t("contact.cancel")}
                </button>

                <button
                  type="submit"
                  disabled={sending}
                  className="px-5 py-2 rounded-full bg-black text-white
                             hover:opacity-90 transition text-sm disabled:opacity-60"
                >
                  {sending ? "Envoi..." : t("contact.send")}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {sentToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[96]">
          <div
            className="rounded-full bg-black text-white px-5 py-3
                       shadow-[0_14px_40px_rgba(0,0,0,.25)] text-sm"
          >
            {t("contact.toastSuccess")}
          </div>
        </div>
      )}
    </>,
    document.documentElement
  );
}

function Input({ label, type = "text", value, onChange, required, placeholder }) {
  return (
    <label className="block">
      <span className="text-xs text-[var(--muted)]">{label}</span>
      <input
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1 w-full rounded-xl bg-[#F2F4F7]
                   px-4 py-3 text-sm outline-none
                   focus:ring-2 focus:ring-black/10"
      />
    </label>
  );
}

function Textarea({ label, value, onChange, required, placeholder }) {
  return (
    <label className="block">
      <span className="text-xs text-[var(--muted)]">{label}</span>
      <textarea
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        rows={5}
        className="mt-1 w-full rounded-xl bg-[#F2F4F7]
                   px-4 py-3 text-sm outline-none resize-none
                   focus:ring-2 focus:ring-black/10"
      />
    </label>
  );
}

function ChatIcon({ className = "text-black" }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 2H4C2.9 2 2 2.9 2 4v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 11H6v-2h12v2zm0-3H6V8h12v2z" />
    </svg>
  );
}

function WhatsAppIcon({ className = "text-[#25D366]" }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.57 2 2.13 6.44 2.13 11.9c0 1.98.58 3.82 1.58 5.39L2 22l4.83-1.65a9.86 9.86 0 0 0 5.21 1.47h.01c5.47 0 9.91-4.44 9.91-9.9C21.96 6.44 17.52 2 12.04 2zm5.78 14.27c-.24.68-1.43 1.3-1.98 1.38-.52.08-1.18.11-1.9-.12-.44-.14-1-.33-1.73-.65-3.05-1.32-5.04-4.37-5.2-4.6-.16-.23-1.23-1.64-1.23-3.13 0-1.49.78-2.23 1.05-2.54.27-.31.6-.39.8-.39.2 0 .4 0 .57.01.18.01.41-.07.64.49.24.56.81 1.93.88 2.07.07.14.12.31.02.5-.1.2-.16.31-.31.48-.16.17-.33.38-.47.5-.16.14-.32.29-.14.57.18.28.81 1.33 1.74 2.15 1.2 1.07 2.22 1.4 2.5 1.56.28.16.44.14.6-.09.16-.23.69-.81.88-1.09.19-.28.38-.23.64-.14.26.09 1.66.78 1.95.92.29.14.48.21.55.33.07.12.07.69-.17 1.37z" />
    </svg>
  );
}

function MailIcon({ className = "text-black" }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
    </svg>
  );
}