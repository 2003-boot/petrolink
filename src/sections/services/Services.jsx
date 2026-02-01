import { useState } from "react";
import Container from "../../components/layout/Container";

const services = [
  {
    id: "s1",
    no: "01.",
    title: "approvisionnement et achat",
    desc: "Nous sommes spécialisés dans la gestion efficace de la chaîne d’approvisionnement, assurant la livraison en temps opportun des marchandises et des matériaux pour vos opérations.",
  },
  {
    id: "s2",
    no: "02.",
    title: "le transport et le stockage",
    desc: "Du transport à l’entreposage, nous offrons des solutions sécurisées et fiables pour le transit et le stockage de vos marchandises.",
  },
  {
    id: "s3",
    no: "03.",
    title: "services & conseils",
    desc: "Nos consultants experts fournissent des conseils stratégiques et des solutions innovantes pour optimiser vos processus logistiques et améliorer l’efficacité.",
  },
];

export default function Services() {
  const [openId, setOpenId] = useState("s2"); // (option) ouvre le 2 comme sur ton screen

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section id="service" className="py-10">
      <Container full>
        <div className="rounded-[28px] bg-[var(--bg)] p-6 md:p-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 items-center">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm shadow-[0_8px_20px_rgba(0,0,0,.08)]">
                <span>★</span>
                <span className="font-medium">Nos services</span>
              </div>

              <h2 className="mt-5 text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
                Des solutions logistiques complètes <br />
                pour chaque entreprise
              </h2>
            </div>

            <p className="max-w-md text-[var(--muted)] leading-relaxed pt-1">
              Des livraisons locales au fret international, Petrolink Service
              propose des services fiables, efficaces et axés sur la technologie
              pour faire avancer votre activité.
            </p>
          </div>

          {/* Accordion list */}
          <div className="space-y-5">
            {services.map((s) => {
              const isOpen = openId === s.id;

              return (
                <article
                  key={s.id}
                  className={[
                    "rounded-[22px] border transition-all duration-300 overflow-hidden",
                    isOpen
                      ? "bg-[#0B0C0E] border-[#0B0C0E]"
                      : "bg-white border-[#E7ECF2]",
                  ].join(" ")}
                >
                  {/* Row */}
                  <button
                    type="button"
                    onClick={() => toggle(s.id)}
                    className="w-full text-left"
                  >
                    <div className="flex items-center gap-5 px-6 md:px-8 py-7 md:py-8">
                      {/* Number */}
                      <div
                        className={[
                          "min-w-[56px] text-xl md:text-2xl font-semibold",
                          isOpen ? "text-white/70" : "text-[var(--brand)]",
                        ].join(" ")}
                      >
                        {s.no}
                      </div>

                      {/* Title + description */}
                      <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <h3
                          className={[
                            "text-xl md:text-2xl font-semibold tracking-tight",
                            isOpen ? "text-white" : "text-[var(--ink)]",
                          ].join(" ")}
                        >
                          {s.title}
                        </h3>

                        {!isOpen && (
                          <span className="text-xs text-[var(--muted)] mt-1 md:mt-0">
                            Cliquez sur la flèche pour voir les détails
                          </span>
                        )}

                        {/* Desktop description */}
                        {isOpen && (
                          <p className="hidden md:block max-w-md text-sm leading-relaxed text-white/70">
                            {s.desc}
                          </p>
                        )}
                      </div>

                      {/* Arrow circle */}
                      <div
                        className={[
                          "shrink-0 w-12 h-12 rounded-full flex items-center justify-center",
                          "border transition-all duration-300",
                          !isOpen && "animate-pulse",
                          isOpen
                            ? "border-white/25 text-white"
                            : "border-[var(--brand)] text-[var(--brand)]",
                        ].join(" ")}
                        aria-hidden="true"
                      >
                        <span
                          className={[
                            "inline-block transition-transform duration-300",
                            isOpen ? "rotate-180" : "rotate-0",
                          ].join(" ")}
                        >
                          ↓
                        </span>
                      </div>
                    </div>
                  </button>

                  {/* Mobile description */}
                  <div
                    className={[
                      "md:hidden px-6 pb-6 -mt-2 transition-all duration-300",
                      isOpen ? "block" : "hidden",
                    ].join(" ")}
                  >
                    <p className={isOpen ? "text-white/70" : "text-[var(--muted)]"}>
                      {s.desc}
                    </p>
                  </div>

                  {/* Smooth reveal (optional) */}
                  <div
                    className={[
                      "hidden md:block px-8 pb-7",
                      "transition-all duration-300",
                      isOpen ? "max-h-32 opacity-100" : "max-h-0 opacity-0",
                    ].join(" ")}
                    style={{ overflow: "hidden" }}
                  >
                    {/* contenu futur */}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
