import { useTranslation } from "react-i18next";
import Container from "../../components/layout/Container";

function IconBadge({ type }) {
  return (
    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/95 shadow-[0_12px_30px_rgba(0,0,0,.18)]">
      {type === "mission" && <svg width="40" height="40" viewBox="0 0 24 24" fill="#00000"><path d="M12 2l2.9 6.3 6.9.6-5.2 4.6 1.5 6.8L12 16.9 5.9 20.3l1.5-6.8L2.2 8.9l6.9-.6L12 2z" /></svg>}
      {type === "vision" && <svg width="40" height="40" viewBox="0 0 24 24" fill="#00000" stroke="white" strokeWidth="2"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" fill="white" /></svg>}
      {type === "valeurs" && <svg width="40" height="40" viewBox="0 0 24 24" fill="#00000" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2l7 4v6c0 5-3.5 9.4-7 10-3.5-.6-7-5-7-10V6l7-4z" /><path d="M9 12l2 2 4-4" /></svg>}
    </div>
  );
}

function Card({ title, desc, img, overlay, icon, aosData, aosDataDuration }) {
  return (
    <div data-aos={aosData} data-aos-duration={aosDataDuration} className="group relative overflow-hidden rounded-[28px] bg-black/5">
      <img src={img} alt={title} loading="lazy" decoding="async" className="h-[260px] md:h-[320px] w-full object-cover" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5"><div className="text-white text-[18px] md:text-[20px] font-extrabold drop-shadow-[0_10px_18px_rgba(0,0,0,.55)]">{title}</div></div>
      <div className={["absolute inset-0 flex flex-col justify-end p-5 transition duration-300", "opacity-0 group-hover:opacity-100"].join(" ")}><div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" /><div className="relative mb-auto"><IconBadge type={icon} /></div><div className="relative"><div className="text-white text-[18px] md:text-[20px] font-extrabold">{title}</div><p className="mt-2 text-white/90 text-sm leading-relaxed max-w-[420px]">{desc}</p></div></div>
      {!overlay && <div className="absolute inset-0 opacity-0 group-hover:opacity-0" />}
    </div>
  );
}

export default function WhyUs() {
  const { t } = useTranslation();
  const withBase = (path) => `${import.meta.env.BASE_URL}${String(path).replace(/^\//, "")}`;
  const items = [
    { title: t("whyUs.items.mission.title"), desc: t("whyUs.items.mission.desc"), img: withBase("value1.webp"), icon: "mission", overlay: false },
    { title: t("whyUs.items.vision.title"), desc: t("whyUs.items.vision.desc"), img: withBase("value2.webp"), icon: "vision", overlay: true },
    { title: t("whyUs.items.values.title"), desc: t("whyUs.items.values.desc"), img: withBase("value3.webp"), icon: "valeurs", overlay: false },
  ];
  return (
    <section id="why-us" className="py-12 md:py-16"><Container full><div className="mx-auto w-full max-w-[1200px]"><div className="flex justify-center"><div data-aos="fade-right" className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-black"><span className="text-black">★</span> {t("whyUs.badge")}</div></div><h2 data-aos="fade-left" className="mt-4 text-center text-[28px] md:text-[44px] font-extrabold tracking-[-0.6px] text-black">{t("whyUs.title1")} <br className="hidden md:block" />{t("whyUs.title2")}</h2><div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-12"><div className="md:col-span-4"><Card {...items[0]} aosData="flip-left" aosDataDuration="300" /></div><div className="md:col-span-4"><Card {...items[1]} aosData="flip-left" aosDataDuration="500" /></div><div className="md:col-span-4"><Card {...items[2]} aosData="flip-left" aosDataDuration="700" /></div></div></div></Container></section>
  );
}
