import { useMemo, useState } from "react";
import Container from "../components/layout/Container";
import { Link } from "react-router-dom";


const SERVICES = [
  { value: "express", label: "Livraison express" },
  { value: "freight", label: "Fret international" },
  { value: "warehouse", label: "Entreposage & distribution" },
];

function StepPill({ index, current, label }) {
  const done = index < current;
  const active = index === current;

  return (
    <div className="flex items-center gap-3">
      <div
        className={[
          "h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold",
          done
            ? "bg-black text-white"
            : active
            ? "bg-white text-black border border-black/10"
            : "bg-white/60 text-black/50 border border-black/10",
        ].join(" ")}
      >
        {done ? "✓" : index + 1}
      </div>
      <div className={active ? "text-black font-semibold" : "text-black/60"}>
        {label}
      </div>
    </div>
  );
}

export default function QuotePage() {
  const steps = useMemo(
    () => [
      { key: "service", label: "Service" },
      { key: "details", label: "Détails" },
      { key: "contact", label: "Coordonnées" },
      { key: "confirm", label: "Confirmation" },
    ],
    []
  );

  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const [data, setData] = useState({
    service: "express",
    urgency: "standard", // standard | urgent
    fromCity: "",
    toCity: "",
    pickupDate: "",
    weight: "",
    volume: "",
    notes: "",
    name: "",
    email: "",
    phone: "",
    company: "",
  });

  const update = (k, v) => setData((p) => ({ ...p, [k]: v }));

  const canNext = () => {
    if (step === 0) return !!data.service && !!data.urgency;
    if (step === 1) return data.fromCity.trim() && data.toCity.trim();
    if (step === 2) return data.name.trim() && data.email.trim();
    return true;
  };

  const next = () => {
    if (!canNext()) return;
    setStep((s) => Math.min(s + 1, steps.length - 1));
  };

  const prev = () => setStep((s) => Math.max(s - 1, 0));

  const submit = async () => {
    // ✅ Ici tu brancheras EmailJS / API plus tard
    // await sendQuoteRequest(data)

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
    setStep(0);
    setData({
      service: "express",
      urgency: "standard",
      fromCity: "",
      toCity: "",
      pickupDate: "",
      weight: "",
      volume: "",
      notes: "",
      name: "",
      email: "",
      phone: "",
      company: "",
    });
  };

  const progress = ((step + 1) / steps.length) * 100;

  return (
    <section className="py-10 md:py-14">
      <Container full>
        <div className="mx-auto w-full max-w-[1100px]">
            <div className="mb-4">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-full bg-white/60 border border-black/10 px-4 py-2 text-sm font-semibold text-black/80 backdrop-blur hover:bg-white/80 transition"
                >
                    <span className="text-lg leading-none">‹</span> Retour au site
                </Link>
            </div>

          {/* Header */}
          <div className="rounded-[28px] bg-[var(--bg)] p-6 md:p-10 shadow-[0_10px_30px_rgba(0,0,0,.08)]">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm shadow-[0_8px_20px_rgba(0,0,0,.08)]">
                  <span>★</span>
                  <span className="font-medium">Demande de devis</span>
                </div>

                <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-[1.08] tracking-tight">
                  Obtenez un devis <br className="hidden md:block" />
                  personnalisé en quelques étapes
                </h1>

                <p className="mt-3 max-w-2xl text-[var(--muted)] leading-relaxed">
                  Remplissez les informations essentielles. Notre équipe revient vers vous rapidement.
                  <span className="ml-2 text-black/70 font-medium">Sans engagement.</span>
                </p>
              </div>

              {/* Progress */}
              <div className="w-full md:w-[320px]">
                <div className="flex items-center justify-between text-xs text-[var(--muted)]">
                  <span>Progression</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/60 overflow-hidden border border-black/5">
                  <div
                    className="h-full bg-black transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Steps row */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
              {steps.map((s, i) => (
                <div key={s.key} className="bg-white/70 rounded-2xl p-4 border border-black/5">
                  <StepPill index={i} current={step} label={s.label} />
                </div>
              ))}
            </div>

            {/* Card */}
            <div className="mt-8 rounded-[22px] bg-white border border-[#E7ECF2] p-5 md:p-8 shadow-[0_12px_35px_rgba(0,0,0,.06)]">
              {/* STEP 1 */}
              {step === 0 && (
                <div className="space-y-5">
                  <div>
                    <div className="text-lg font-semibold">Quel service souhaitez-vous ?</div>
                    <p className="text-sm text-[var(--muted)] mt-1">
                      Choisissez le service et le niveau d’urgence.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-black/10 p-4">
                      <label className="text-xs text-black/60">Service</label>
                      <select
                        value={data.service}
                        onChange={(e) => update("service", e.target.value)}
                        className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3 py-3 text-sm outline-none"
                      >
                        {SERVICES.map((s) => (
                          <option key={s.value} value={s.value}>
                            {s.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="rounded-2xl border border-black/10 p-4">
                      <label className="text-xs text-black/60">Urgence</label>
                      <div className="mt-2 flex gap-2">
                        <button
                          type="button"
                          onClick={() => update("urgency", "standard")}
                          className={[
                            "flex-1 rounded-xl px-3 py-3 text-sm font-semibold border transition",
                            data.urgency === "standard"
                              ? "bg-black text-white border-black"
                              : "bg-white text-black border-black/10 hover:bg-black/5",
                          ].join(" ")}
                        >
                          Standard
                        </button>
                        <button
                          type="button"
                          onClick={() => update("urgency", "urgent")}
                          className={[
                            "flex-1 rounded-xl px-3 py-3 text-sm font-semibold border transition",
                            data.urgency === "urgent"
                              ? "bg-black text-white border-black"
                              : "bg-white text-black border-black/10 hover:bg-black/5",
                          ].join(" ")}
                        >
                          Urgent
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 1 && (
                <div className="space-y-5">
                  <div>
                    <div className="text-lg font-semibold">Détails de l’expédition</div>
                    <p className="text-sm text-[var(--muted)] mt-1">
                      Les champs poids/volume sont optionnels si vous ne les connaissez pas.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field
                      label="Ville de départ"
                      value={data.fromCity}
                      onChange={(v) => update("fromCity", v)}
                      placeholder="Ex: Abidjan"
                      required
                    />
                    <Field
                      label="Ville de destination"
                      value={data.toCity}
                      onChange={(v) => update("toCity", v)}
                      placeholder="Ex: Bouaké"
                      required
                    />
                    <Field
                      label="Date d’enlèvement (optionnel)"
                      value={data.pickupDate}
                      onChange={(v) => update("pickupDate", v)}
                      placeholder="AAAA-MM-JJ"
                      type="date"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <Field
                        label="Poids (kg) (optionnel)"
                        value={data.weight}
                        onChange={(v) => update("weight", v)}
                        placeholder="Ex: 120"
                      />
                      <Field
                        label="Volume (m³) (optionnel)"
                        value={data.volume}
                        onChange={(v) => update("volume", v)}
                        placeholder="Ex: 2.5"
                      />
                    </div>
                  </div>

                  <div className="rounded-2xl border border-black/10 p-4">
                    <label className="text-xs text-black/60">Informations supplémentaires (optionnel)</label>
                    <textarea
                      value={data.notes}
                      onChange={(e) => update("notes", e.target.value)}
                      className="mt-2 w-full min-h-[110px] rounded-xl border border-black/10 bg-white px-3 py-3 text-sm outline-none"
                      placeholder="Type de marchandise, contraintes, horaires, etc."
                    />
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 2 && (
                <div className="space-y-5">
                  <div>
                    <div className="text-lg font-semibold">Vos coordonnées</div>
                    <p className="text-sm text-[var(--muted)] mt-1">
                      Nous vous recontactons avec une estimation et les prochaines étapes.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Field
                      label="Nom complet"
                      value={data.name}
                      onChange={(v) => update("name", v)}
                      placeholder="Votre nom"
                      required
                    />
                    <Field
                      label="Email"
                      value={data.email}
                      onChange={(v) => update("email", v)}
                      placeholder="exemple@mail.com"
                      type="email"
                      required
                    />
                    <Field
                      label="Téléphone (optionnel)"
                      value={data.phone}
                      onChange={(v) => update("phone", v)}
                      placeholder="+225 ..."
                    />
                    <Field
                      label="Entreprise (optionnel)"
                      value={data.company}
                      onChange={(v) => update("company", v)}
                      placeholder="Nom de l’entreprise"
                    />
                  </div>

                  <div className="rounded-2xl bg-[var(--bg)] border border-black/5 p-4 text-sm text-[var(--muted)]">
                    ⏱ Réponse rapide • 🔒 Données protégées • 📦 Suivi & accompagnement
                  </div>
                </div>
              )}

              {/* STEP 4 */}
              {step === 3 && (
                <div className="space-y-5">
                  <div>
                    <div className="text-lg font-semibold">Vérifiez et confirmez</div>
                    <p className="text-sm text-[var(--muted)] mt-1">
                      Un dernier coup d’œil avant l’envoi.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Summary label="Service" value={SERVICES.find(s => s.value === data.service)?.label} />
                    <Summary label="Urgence" value={data.urgency === "urgent" ? "Urgent" : "Standard"} />
                    <Summary label="Départ" value={data.fromCity || "-"} />
                    <Summary label="Destination" value={data.toCity || "-"} />
                    <Summary label="Date enlèvement" value={data.pickupDate || "-"} />
                    <Summary label="Poids (kg)" value={data.weight || "-"} />
                    <Summary label="Volume (m³)" value={data.volume || "-"} />
                    <Summary label="Nom" value={data.name || "-"} />
                    <Summary label="Email" value={data.email || "-"} />
                    <Summary label="Téléphone" value={data.phone || "-"} />
                    <Summary label="Entreprise" value={data.company || "-"} />
                  </div>

                  {data.notes && (
                    <div className="rounded-2xl border border-black/10 p-4">
                      <div className="text-xs text-black/60">Notes</div>
                      <div className="mt-2 text-sm text-black/80">{data.notes}</div>
                    </div>
                  )}
                </div>
              )}

              {/* Actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                <button
                  type="button"
                  onClick={prev}
                  disabled={step === 0}
                  className={[
                    "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-bold transition border",
                    step === 0
                      ? "border-black/10 text-black/30 bg-black/5 cursor-not-allowed"
                      : "border-black/10 text-black bg-white hover:bg-black/5",
                  ].join(" ")}
                >
                  Retour
                </button>

                <div className="flex gap-3">
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={next}
                      disabled={!canNext()}
                      className={[
                        "inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-bold transition",
                        canNext()
                          ? "bg-black text-white hover:opacity-90"
                          : "bg-black/20 text-white/60 cursor-not-allowed",
                      ].join(" ")}
                    >
                      Continuer
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={submit}
                      className="inline-flex h-11 items-center justify-center rounded-full bg-orange-500 px-6 text-sm font-bold text-black transition hover:opacity-90"
                    >
                      Envoyer la demande
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Toast success */}
          <div
            className={[
              "fixed left-1/2 bottom-6 -translate-x-1/2 z-[80]",
              "transition-all duration-300",
              submitted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3 pointer-events-none",
            ].join(" ")}
          >
            <div className="rounded-full bg-black text-white px-5 py-3 text-sm shadow-[0_18px_40px_rgba(0,0,0,.25)]">
              ✅ Demande envoyée avec succès
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Field({ label, value, onChange, placeholder, required, type = "text" }) {
  return (
    <div className="rounded-2xl border border-black/10 p-4">
      <label className="text-xs text-black/60">
        {label} {required && <span className="text-orange-500">*</span>}
      </label>
      <input
        value={value}
        type={type}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl border border-black/10 bg-white px-3 py-3 text-sm outline-none"
      />
    </div>
  );
}

function Summary({ label, value }) {
  return (
    <div className="rounded-2xl bg-[var(--bg)] border border-black/5 p-4">
      <div className="text-xs text-black/60">{label}</div>
      <div className="mt-1 text-sm font-semibold text-black">{value}</div>
    </div>
  );
}
