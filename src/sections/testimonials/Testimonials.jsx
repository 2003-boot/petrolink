import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "../../components/layout/Container";

const withBase = (path) => `${import.meta.env.BASE_URL || "/"}${String(path).replace(/^\//, "")}`;

const partners = [
  { id: 1, name: "Partner 1", src: "partners/partner1.webp" },
  { id: 2, name: "Partner 2", src: "partners/partner2.webp" },
];

const trustImages = ["trust/trust1.webp", "trust/trust2.webp", "trust/trust3.webp", "trust/trust4.webp"];

export default function TrustedBy() {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);
  const holdMs = 3500;
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % trustImages.length), holdMs);
    return () => clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    const next = new Image();
    next.src = withBase(trustImages[(index + 1) % trustImages.length]);
  }, [index]);

  const marqueeItems = useMemo(() => [...partners, ...partners, ...partners], []);

  return (
    <section className="py-12 md:py-16" id="partners">
      <Container full>
        <div className="rounded-[28px] bg-[var(--bg)] px-6 md:px-10 py-10">
          <div className="flex justify-center"><div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm shadow-[0_8px_20px_rgba(0,0,0,.08)]"><span>★</span><span className="font-medium">{t("partnersSection.badge")}</span></div></div>
          <h2 className="mt-6 text-center text-3xl md:text-5xl font-semibold leading-[1.1] tracking-tight">{t("partnersSection.title")}</h2>
          <div className="relative mt-12 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 md:w-16 bg-gradient-to-r from-[var(--bg)] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 md:w-16 bg-gradient-to-l from-[var(--bg)] to-transparent" />
            <div className="trust-marquee"><div className="trust-track">{marqueeItems.map((p, i) => (<div key={`${p.id}-${i}`} className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden bg-white border border-black/5 shadow-[0_10px_25px_rgba(0,0,0,.10)] flex items-center justify-center mx-6 flex-shrink-0"><img src={withBase(p.src)} alt={p.name} loading="lazy" decoding="async" draggable="false" className="h-full w-full object-cover" /></div>))}</div></div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div><h3 className="text-3xl md:text-3xl font-semibold leading-tight">{t("partnersSection.textTitle")}</h3><p className="mt-4 text-[var(--muted)] leading-relaxed max-w-lg text-lg">{t("partnersSection.textBody")}</p></div>
            <div className="relative overflow-hidden rounded-[24px] h-[300px] md:h-[360px] bg-black/5">{trustImages.map((src, i) => (<img key={src} src={withBase(src)} alt={t("partnersSection.trustAlt")} loading={i === 0 ? "eager" : "lazy"} decoding="async" draggable="false" className={["absolute inset-0 h-full w-full object-cover transition-opacity duration-[900ms]", i === index ? "opacity-100" : "opacity-0 pointer-events-none"].join(" ")} />))}</div>
          </div>
        </div>
      </Container>
    </section>
  );
}
