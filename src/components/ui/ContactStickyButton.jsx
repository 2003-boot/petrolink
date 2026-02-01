import { useEffect, useMemo, useRef, useState } from "react";

export default function ContactStickyButton({
  // ⚠️ Mets ton numéro au format international sans "+"
  // ex Côte d’Ivoire: 2250102030405
  whatsappNumber = "2250000000000",
  whatsappMessage = "Bonjour, je voudrais un devis / des informations.",
  companyEmail = "contact@swiftmove.com",
}) {
  const [emailOpen, setEmailOpen] = useState(false);
  const [sentToast, setSentToast] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const toastTimer = useRef(null);

  const waLink = useMemo(() => {
    const msg = encodeURIComponent(whatsappMessage);
    // wa.me marche mobile + desktop (WhatsApp Web si pas d’app)
    return `https://wa.me/${whatsappNumber}?text=${msg}`;
  }, [whatsappNumber, whatsappMessage]);

  // ESC pour fermer modal
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setEmailOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // toast auto-hide
  useEffect(() => {
    if (!sentToast) return;
    clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setSentToast(false), 2200);
    return () => clearTimeout(toastTimer.current);
  }, [sentToast]);

  const onSubmit = (e) => {
    e.preventDefault();

    // ✅ MODE SIMPLE : ouvre le client mail du visiteur (mailto)
    const subject = encodeURIComponent(form.subject || "Demande d'information");
    const body = encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${companyEmail}?subject=${subject}&body=${body}`;

    // UI feedback
    setEmailOpen(false);
    setSentToast(true);

    // reset
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      {/* Sticky Button */}
      <div className="fixed bottom-6 right-6 z-[60]">
        <div className="group relative">
          {/* Base pill */}
          <div
            className={[
              "h-16 w-[250px] rounded-full",
              "bg-[#10E4D4] shadow-[0_16px_40px_rgba(0,0,0,.18)]",
              "flex items-center justify-center gap-4",
              "transition-all duration-300",
            ].join(" ")}
          >
            {/* icon bubble */}
            <div
              className={[
                "w-10 h-10 rounded-full bg-black/10",
                "flex items-center justify-center",
                "transition-all duration-300 group-hover:opacity-0 group-hover:scale-95",
              ].join(" ")}
            >
              <ChatIcon />
            </div>

            <span
              className={[
                "text-black text-lg font-medium tracking-tight",
                "transition-all duration-300",
                "group-hover:opacity-0 group-hover:translate-y-1",
              ].join(" ")}
            >
              Contactez-nous
            </span>

            {/* Hover layer with 2 icons */}
            <div
              className={[
                "absolute inset-0 rounded-full",
                "flex items-center justify-center gap-3",
                "opacity-0 pointer-events-none",
                "group-hover:opacity-100 group-hover:pointer-events-auto",
                "transition-all duration-300",
              ].join(" ")}
            >
              {/* WhatsApp */}
              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition"
                aria-label="Ouvrir WhatsApp"
                title="WhatsApp"
              >
                <WhatsAppIcon />
              </a>

              {/* Email */}
              <button
                type="button"
                onClick={() => setEmailOpen(true)}
                className="w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center transition cursor-pointer"
                aria-label="Envoyer un email"
                title="Email"
              >
                <MailIcon />
              </button>
            </div>
          </div>

          {/* petit hint (optionnel) */}
          <div className="absolute -top-9 right-0 hidden md:block opacity-0 group-hover:opacity-100 transition text-xs text-black/70">
            WhatsApp ou Email
          </div>
        </div>
      </div>

      {/* Email Modal */}
      {emailOpen && (
        <div
          className="fixed inset-0 z-[70] bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onMouseDown={() => setEmailOpen(false)}
        >
          <div
            className="w-full max-w-lg rounded-[24px] bg-white shadow-[0_20px_70px_rgba(0,0,0,.25)] p-5 md:p-6"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">Envoyer un email</h3>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  Rédige ton message, puis clique sur <b>Envoyer</b>.
                </p>
              </div>

              <button
                onClick={() => setEmailOpen(false)}
                className="w-10 h-10 rounded-full bg-[#F2F4F7] hover:bg-[#E9EDF3] transition flex items-center justify-center"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={onSubmit} className="mt-5 space-y-3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <Input
                  label="Nom"
                  value={form.name}
                  onChange={(v) => setForm((s) => ({ ...s, name: v }))}
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm((s) => ({ ...s, email: v }))}
                  required
                />
              </div>

              <Input
                label="Objet"
                value={form.subject}
                onChange={(v) => setForm((s) => ({ ...s, subject: v }))}
                placeholder="Demande de devis…"
              />

              <Textarea
                label="Message"
                value={form.message}
                onChange={(v) => setForm((s) => ({ ...s, message: v }))}
                placeholder="Bonjour, je vous contacte pour…"
                required
              />

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setEmailOpen(false)}
                  className="px-4 py-2 rounded-full bg-[#F2F4F7] hover:bg-[#E9EDF3] transition text-sm"
                >
                  Annuler
                </button>

                <button
                  type="submit"
                  className="px-5 py-2 rounded-full bg-black text-white hover:opacity-90 transition text-sm"
                >
                  Envoyer
                </button>
              </div>

              <p className="text-xs text-[var(--muted)]">
                * Mode simple : l’envoi se fait via l’application mail du visiteur.
                (On peut brancher un vrai envoi serveur ensuite.)
              </p>
            </form>
          </div>
        </div>
      )}

      {/* Toast success */}
      {sentToast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[80]">
          <div className="rounded-full bg-black text-white px-5 py-3 shadow-[0_14px_40px_rgba(0,0,0,.25)] text-sm">
            Email envoyé avec succès ✅
          </div>
        </div>
      )}
    </>
  );
}

/* ---------- Small form components ---------- */

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
        className="mt-1 w-full rounded-xl bg-[#F2F4F7] px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-black/10"
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
        className="mt-1 w-full rounded-xl bg-[#F2F4F7] px-4 py-3 text-sm outline-none resize-none focus:ring-2 focus:ring-black/10"
      />
    </label>
  );
}

/* ---------- Icons ---------- */

function ChatIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-black">
      <path d="M12 3C6.5 3 2 6.8 2 11.5c0 2.3 1.2 4.5 3.1 6.1L4 22l4.8-2.1c1 .3 2.1.5 3.2.5 5.5 0 10-3.8 10-8.5S17.5 3 12 3zm-3 9h6v2H9v-2zm0-4h10v2H9V8z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-black">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8 8 0 1 1 20 12a8 8 0 0 1-8 8zm4.4-6.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-1.1-.5-2.1-1.2-2.9-2.1-.2-.2-.2-.4 0-.6l.6-.7c.2-.2.2-.4.1-.6-.1-.2-.6-1.3-.7-1.5-.1-.2-.2-.3-.4-.3h-.6c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 2 0 1.2.8 2.4.9 2.6 1.2 2 3 3.5 5.3 4.3.6.2 1.1.3 1.5.2.5-.1 1.2-.5 1.4-1 .2-.5.2-1 .1-1.1-.1-.1-.2-.2-.4-.3z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-black">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5L4 8V6l8 5 8-5v2z" />
    </svg>
  );
}
