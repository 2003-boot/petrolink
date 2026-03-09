import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Container from "../../components/layout/Container";
import { CrossfadeImage } from "../../components/ui/CrossfadeImage";

const blocks = [
  {
    id: "strategy",
    icon: "diagram-project",
    titleKey: "approAchat.sections.strategy.title",
    introKey: "approAchat.sections.strategy.intro",
    itemsKey: "approAchat.sections.strategy.items",
    images: ["appro/procurement1.webp", "appro/procurement2.webp"],
  },
  {
    id: "procurement",
    icon: "boxes-stacked",
    titleKey: "approAchat.sections.procurement.title",
    introKey: "approAchat.sections.procurement.intro",
    itemsKey: "approAchat.sections.procurement.items",
    images: ["appro/approvisionnement1.webp", "appro/approvisionnement2.webp"],
  },
  {
    id: "logistics",
    icon: "energy",
    titleKey: "approAchat.sections.logistics.title",
    introKey: "approAchat.sections.logistics.intro",
    itemsKey: "approAchat.sections.logistics.items",
    images: ["appro/transit1.webp", "appro/transit2.webp"],
  },
];

export default function ApprovisionnementAchat() {
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
                <span className="font-medium">{t("approAchat.badge")}</span>
              </div>

              <h1 className="mt-5 text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
                {t("approAchat.title")}
              </h1>
            </div>

            {/* Retour desktop */}
            <Link
              to="/"
              state={{ scrollTo: "service" }}
              className="hidden md:inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-[0_10px_25px_rgba(0,0,0,.08)] hover:translate-y-[-1px] transition"
            >
              ← {t("approAchat.backServices")}
            </Link>
          </div>

          {/* Retour mobile */}
          <Link
            to="/"
            state={{ scrollTo: "service" }}
            className="mt-5 md:hidden inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold shadow-[0_10px_25px_rgba(0,0,0,.08)]"
          >
            ← {t("approAchat.backServices")}
          </Link>

          {/* Blocks */}
          <div className="mt-10 space-y-6">
            {blocks.map((b, idx) => {
              const items = t(b.itemsKey, { returnObjects: true });

              return (
                <article
                  key={b.id}
                  data-aos="fade-up"
                  data-aos-delay={idx * 120}
                  className="rounded-[24px] bg-white border border-[#E7ECF2] shadow-[0_10px_30px_rgba(0,0,0,.06)] overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-12">
                    {/* LEFT = Images */}
                    <div className="md:col-span-5 relative min-h-[240px] md:min-h-[360px]">
                      <CrossfadeImage
                        images={b.images}
                        interval={3200}
                        fadeMs={900}
                        className="h-full w-full"
                        alt={t(b.titleKey)}
                      />
                      {/* petit overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-black/10 to-transparent pointer-events-none" />
                    </div>

                    {/* RIGHT = Content */}
                    <div className="md:col-span-7 p-6 md:p-8">
                      <div className="flex items-start gap-4">
                        <div className="shrink-0 mt-1">
                          <BlockIcon type={b.icon} />
                        </div>

                        <div className="min-w-0">
                          <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                            {t(b.titleKey)}
                          </h2>

                          <p className="mt-3 text-[15px] leading-7 text-[var(--muted)]">
                            {t(b.introKey)}
                          </p>

                          <ul className="mt-5 space-y-3">
                            {Array.isArray(items) &&
                              items.map((text, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <span className="mt-[10px] inline-block h-2.5 w-2.5 flex-none shrink-0 rounded-full bg-[#0B6B63] shadow-[0_0_0_5px_rgba(11,107,99,.12)]" />
                                  <span className="text-[15px] leading-7 text-[var(--muted)]">
                                    {text}
                                  </span>
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}

            {/* Strengths */}
            <article
              data-aos="fade-up"
              data-aos-delay={520}
              className="rounded-[24px] bg-white border border-[#E7ECF2] shadow-[0_10px_30px_rgba(0,0,0,.06)] overflow-hidden"
            >
              <div className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight">
                  {t("approAchat.strengths.title")}
                </h2>

                <ul className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {t("approAchat.strengths.items", { returnObjects: true }).map(
                    (text, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-[10px] inline-block h-2.5 w-2.5 flex-none shrink-0 rounded-full bg-[#0B6B63] shadow-[0_0_0_5px_rgba(11,107,99,.12)]" />
                        <span className="text-[15px] leading-7 text-[var(--muted)]">
                          {text}
                        </span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ================= Icons ================= */

function BlockIcon({ type }) {
  if (type === "diagram-project") {
    return (
      <svg fill="#0B6B63" width={44} height={44} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M0 80C0 53.5 21.5 32 48 32l96 0c26.5 0 48 21.5 48 48l0 16 128 0 0-16c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-16-128 0 0 16c0 7.3-1.7 14.3-4.6 20.5l68.6 91.5 80 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-7.3 1.7-14.3 4.6-20.5L128 224 48 224c-26.5 0-48-21.5-48-48L0 80z"/>
      </svg>
    );
  }

  if (type === "boxes-stacked") {
    return (
      <svg fill="#0B6B63" width={44} height={44} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <path d="M224 0l0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64 32 0c35.3 0 64 28.7 64 64l0 128c0 5.5-.7 10.9-2 16l-252 0c-1.3-5.1-2-10.5-2-16l0-128c0-35.3 28.7-64 64-64l32 0zm96 512c-11.2 0-21.8-2.9-31-8 9.5-16.5 15-35.6 15-56l0-128c0-20.4-5.5-39.5-15-56 9.2-5.1 19.7-8 31-8l32 0 0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64 32 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64l-128 0zM0 320c0-35.3 28.7-64 64-64l32 0 0 64c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-64 32 0c35.3 0 64 28.7 64 64l0 128c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 320z"/>
      </svg>
    );
  }

  return (
    <svg fill="#0B6B63" width={44} height={44} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
      <path d="M0 142.1L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-240c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 240c0 17.7 14.3 32 32 32s32-14.3 32-32l0-337.9c0-27.5-17.6-52-43.8-60.7L303.2 5.1c-9.9-3.3-20.5-3.3-30.4 0L43.8 81.4C17.6 90.1 0 114.6 0 142.1zM464 256l-352 0 0 64 352 0 0-64zM112 416l352 0 0-64-352 0 0 64zm352 32l-352 0 0 64 352 0 0-64z"/>
    </svg>
  );
}
