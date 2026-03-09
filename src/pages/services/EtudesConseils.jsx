import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Container from "../../components/layout/Container";
import { CrossfadeImage } from "../../components/ui/CrossfadeImage";

const blocks = [
  {
    id: "expertise",
    titleKey: "consult.blocks.expertise",
    icon: "expertise",
    itemsKeys: [
      "consult.items.expertise.1",
      "consult.items.expertise.2",
      "consult.items.expertise.3",
    ],
    images: ["consulting/expertise1.webp", "consulting/expertise2.webp"],
  },
  {
    id: "ingenierie",
    titleKey: "consult.blocks.ingenierie",
    icon: "engineering",
    itemsKeys: [
      "consult.items.ingenierie.1",
      "consult.items.ingenierie.2",
      "consult.items.ingenierie.3",
    ],
    images: ["consulting/engineering1.webp", "consulting/engineering2.webp"],
  },
];

export default function EtudesConseils() {
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
                <span className="font-medium">{t("consult.badge")}</span>
              </div>

              <h1 className="mt-5 text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
                {t("consult.title")}
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
              ← {t("consult.backServices")}
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
                      alt={`${t(b.titleKey)} — ${t("consult.altIllustration")}`}
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

  if (type === "expertise") {
    return (
      <svg width="44" height="44" viewBox="0 0 576 512" {...common}>
        <path d="M288 0c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144S367.5 0 288 0zM96 512c0-106 86-192 192-192s192 86 192 192H96z" />
      </svg>
    );
  }

  // engineering
  return (
    <svg width="44" height="44" viewBox="0 0 512 512" {...common}>
      <path d="M487.4 315.7l-42.6-24.6c2.9-15.1 2.9-30.7 0-45.8l42.6-24.6c15.1-8.7 20.3-28 11.6-43.1l-43.6-75.5c-8.7-15.1-28-20.3-43.1-11.6l-42.6 24.6c-11.9-10-25.4-17.8-40.1-23.2V24.6C287.6 10.9 276.7 0 263 0h-87.2c-13.7 0-24.6 10.9-24.6 24.6v49.2c-14.7 5.4-28.2 13.2-40.1 23.2L68.5 72.4c-15.1-8.7-34.4-3.5-43.1 11.6L-18.2 159.5c-8.7 15.1-3.5 34.4 11.6 43.1l42.6 24.6c-2.9 15.1-2.9 30.7 0 45.8l-42.6 24.6c-15.1 8.7-20.3 28-11.6 43.1l43.6 75.5c8.7 15.1 28 20.3 43.1 11.6l42.6-24.6c11.9 10 25.4 17.8 40.1 23.2v49.2c0 13.7 10.9 24.6 24.6 24.6H263c13.7 0 24.6-10.9 24.6-24.6v-49.2c14.7-5.4 28.2-13.2 40.1-23.2l42.6 24.6c15.1 8.7 34.4 3.5 43.1-11.6l43.6-75.5c8.7-15.1 3.5-34.4-11.6-43.1zM219.4 336c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z" />
    </svg>
  );
}
