//Services.jsx
import { useTranslation } from "react-i18next";
import Container from "../../components/layout/Container";
import { Link } from "react-router-dom";

const services = [
  {
    id: "s1",
    titleKey: "services.s1.title",
    descKey: "services.s1.desc",
    icon: "crane",
    link: "/services/approvisionnement-achat",
  },
  {
    id: "s2",
    titleKey: "services.s2.title",
    descKey: "services.s2.desc",
    icon: "manager",
    link: "/services/assistance-technique",
  },
  {
    id: "s3",
    titleKey: "services.s3.title",
    descKey: "services.s3.desc",
    icon: "handshake",
    link: "/services/etudes-conseils",
  },
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="service" className="py-10">
      <Container full>
        <div className="rounded-[28px] bg-[var(--bg)] p-6 md:p-10">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-10">
            <div className="max-w-2xl" data-aos="fade-down" data-aos-duration="300">
              <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-sm shadow-[0_8px_20px_rgba(0,0,0,.08)]">
                <span>★</span>
                <span className="font-medium">{t("servicesSection.badge")}</span>
              </div>

              <h2 className="mt-5 text-3xl md:text-5xl font-semibold leading-[1.05] tracking-tight">
                {t("servicesSection.title1")} <br />
                {t("servicesSection.title2")}
              </h2>
            </div>

            <p
              data-aos="fade-down"
              data-aos-duration="500"
              className="max-w-md text-[var(--muted)] leading-relaxed md:mt-[68px] text-base md:text-lg"
            >
              {t("servicesSection.desc")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, idx) => (
              <article
                key={s.id}
                data-aos="fade-up"
                data-aos-delay={idx * 120}
                className="
                  bg-white rounded-[10px] border border-[#E7ECF2]
                  px-6 py-10 md:py-12
                  text-center
                  shadow-[0_10px_30px_rgba(0,0,0,.06)]
                  flex flex-col
                "
              >
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center">
                  <ServiceIcon type={s.icon} />
                </div>

                <h3 className="text-2xl md:text-[28px] font-semibold tracking-tight text-[var(--ink)] capitalize">
                  {t(s.titleKey)}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-[var(--muted)] max-w-[320px] mx-auto">
                  {t(s.descKey)}
                </p>

                {/* ✅ IMPORTANT: on passe un state pour dire au retour où scroller */}
                <Link
                  to={s.link}
                  state={{ from: "home", scrollBackTo: "service" }}
                  className="
                    md:mt-auto
                    mt-2
                    inline-flex items-center justify-center gap-2
                    rounded-[5px] bg-[#0B6B63] px-6 py-3
                    text-white font-semibold
                    hover:opacity-95 transition
                  "
                >
                  <EyeWinkIcon /> {t("common.seeMore")}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ================= Icons ================= */

function ServiceIcon({ type }) {
  const common = "w-12 h-12";

  if (type === "crane") {
    return (
      <svg className={common} fill="#0B6B66" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" aria-hidden="true">
        <path d="M0 142.1L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-240c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 240c0 17.7 14.3 32 32 32s32-14.3 32-32l0-337.9c0-27.5-17.6-52-43.8-60.7L303.2 5.1c-9.9-3.3-20.5-3.3-30.4 0L43.8 81.4C17.6 90.1 0 114.6 0 142.1zM464 256l-352 0 0 64 352 0 0-64zM112 416l352 0 0-64-352 0 0 64zm352 32l-352 0 0 64 352 0 0-64z" />
      </svg>
    );
  }

  if (type === "manager") {
    return (
      <svg className={common} fill="#0B6B66" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
        <path d="M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z" />
      </svg>
    );
  }

  return (
    <svg className={common} fill="#0B6B66" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true">
      <path d="M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zM240 96c6.7 0 13.1 2.8 17.7 7.8L328.8 181.3 375 135c9.4-9.4 24.6-9.4 33.9 0l64 64c4.5 4.5 7 10.6 7 17l0 112c0 13.3-10.7 24-24 24l-304 0c-13.3 0-24-10.7-24-24l0-112c0-6 2.3-11.8 6.3-16.2l88-96c4.5-5 11-7.8 17.7-7.8z" />
    </svg>
  );
}

function EyeWinkIcon() {
  return (
    <svg className="wink-eye" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 5c-5 0-9.3 3.1-11 7 1.7 3.9 6 7 11 7s9.3-3.1 11-7c-1.7-3.9-6-7-11-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
      <circle className="wink-pupil" cx="12" cy="12" r="2.3" />
    </svg>
  );
}
