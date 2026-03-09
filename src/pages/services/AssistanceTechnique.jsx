// src/pages/services/AssistanceTechnique.jsx
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Container from "../../components/layout/Container";
import { CrossfadeImage } from "../../components/ui/CrossfadeImage";

const blocks = [
  {
    id: "portuaire",
    titleKey: "tech.blocks.portuaire",
    icon: "crane",
    itemsKeys: [
      "tech.items.portuaire.1",
      "tech.items.portuaire.2",
      "tech.items.portuaire.3",
      "tech.items.portuaire.4",
      "tech.items.portuaire.5",
      "tech.items.portuaire.6",
      "tech.items.portuaire.7",
      "tech.items.portuaire.8",
    ],
    images: ["portuaire/potuaire1.webp", "portuaire/portuaire2.webp"],
  },
  {
    id: "industrie",
    titleKey: "tech.blocks.industrie",
    icon: "factory",
    itemsKeys: [
      "tech.items.industrie.1",
      "tech.items.industrie.2",
      "tech.items.industrie.3",
    ],
    images: [
      "industrie/industrie1.webp",
      "industrie/industrie2.webp"
    ],
  },
  {
    id: "energie",
    titleKey: "tech.blocks.energie",
    icon: "energy",
    itemsKeys: [
      "tech.items.energie.1",
      "tech.items.energie.2",
      "tech.items.energie.3",
      "tech.items.energie.4",
      "tech.items.energie.5",
      "tech.items.energie.6",
      "tech.items.energie.7",
      "tech.items.energie.8",
      "tech.items.energie.9",
      "tech.items.energie.10",
      "tech.items.energie.11",
      "tech.items.energie.12",
    ],
    images: ["energie/energie1.webp", "energie/energie2.webp"],
  },
];

export default function AssistanceTechnique() {
  const { t } = useTranslation();

  return (
    <section className="py-10">
      <Container full>
        <div className="rounded-[28px] bg-[var(--bg)] p-6 md:p-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
            <div>
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm shadow-[0_8px_20px_rgba(0,0,0,.08)]">
                <span>★</span>
                <span className="font-medium">{t("tech.badge")}</span>
              </div>

              <h1 className="mt-5 text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
                {t("tech.title")}
              </h1>
            </div>

            <Link
              to="/"
              state={{ scrollTo: "service" }}
              className="
                md:self-start
                inline-flex w-full md:w-auto
                items-center justify-center
                rounded-full bg-white px-5 py-3
                text-sm font-semibold
                shadow-[0_10px_25px_rgba(0,0,0,.08)]
                hover:translate-y-[-1px] transition
                mt-4 md:mt-0
              "
            >
              ← {t("tech.backServices")}
            </Link>
          </div>

          {/* Blocks */}
          <div className="mt-10 space-y-6">
            {blocks.map((b, idx) => (
              <article
                key={b.id}
                data-aos="fade-up"
                data-aos-delay={idx * 120}
                className="rounded-[24px] bg-white border border-[#E7ECF2] shadow-[0_10px_30px_rgba(0,0,0,.06)] overflow-hidden"
              >
                <div className="grid grid-cols-1 md:grid-cols-12">
                  {/* LEFT */}
                  <div className="md:col-span-7 p-6 md:p-8">
                    <div className="flex items-start gap-4">
                      <div className="shrink-0 mt-1">
                        <BlockIcon type={b.icon} />
                      </div>

                      <div className="min-w-0">
                        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                          {t(b.titleKey)}
                        </h2>

                        <ul className="mt-5 space-y-3">
                          {b.itemsKeys.map((k) => (
                            <li key={k} className="flex items-start gap-3">
                              <span className="mt-[10px] inline-block h-2.5 w-2.5 flex-none shrink-0 rounded-full bg-[#0B6B63] shadow-[0_0_0_5px_rgba(11,107,99,.12)]" />
                              <span className="text-[15px] leading-7 text-[var(--muted)]">
                                {t(k)}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="md:col-span-5 relative min-h-[240px] md:min-h-[340px]">
                    <CrossfadeImage
                      images={b.images}
                      interval={3200}
                      fadeMs={900}
                      className="h-full w-full"
                      alt={`${t(b.titleKey)} — ${t("tech.altIllustration")}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ================= Icons ================= */

function BlockIcon({ type }) {
  const cls = "text-[#0B6B63]";
  const common = { fill: "currentColor", className: cls, "aria-hidden": true };

  if (type === "crane") {
    return (
      <svg width="44" height="44" viewBox="0 0 576 512" {...common}>
        <path d="M0 142.1L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-240c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 240c0 17.7 14.3 32 32 32s32-14.3 32-32l0-337.9c0-27.5-17.6-52-43.8-60.7L303.2 5.1c-9.9-3.3-20.5-3.3-30.4 0L43.8 81.4C17.6 90.1 0 114.6 0 142.1zM464 256l-352 0 0 64 352 0 0-64zM112 416l352 0 0-64-352 0 0 64zm352 32l-352 0 0 64 352 0 0-64z" />
      </svg>
    );
  }

  if (type === "factory") {
    return (
      <svg width="44" height="44" viewBox="0 0 576 512" {...common}>
        <path d="M0 480H576V448H544V208a16 16 0 0 0-23.2-14.3L416 240V208a16 16 0 0 0-23.2-14.3L288 240V208a16 16 0 0 0-23.2-14.3L160 240V64a32 32 0 0 0-32-32H64A32 32 0 0 0 32 64V448H0zM96 96h32v64H96zm0 96h32v64H96zm0 96h32v64H96zm128 96h32v64H224zm96 0h32v64H320zm96 0h32v64H416z" />
      </svg>
    );
  }

  return (
    <svg width="44" height="44" viewBox="0 0 384 512" {...common}>
      <path d="M216 24.1c0-23.8-28.8-35.7-45.7-18.9L9.5 166C3.4 172.1 0 180.4 0 189v43c0 17.7 14.3 32 32 32h120l-24.6 196.7c-3.4 27.5 18 51.3 45.7 51.3c13.3 0 26-5.3 35.4-14.6L374.5 326c6.1-6.1 9.5-14.4 9.5-23v-43c0-17.7-14.3-32-32-32H232L216 24.1z" />
    </svg>
  );
}
