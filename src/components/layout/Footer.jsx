import { useTranslation } from "react-i18next";
import Container from "./Container";

const withBase = (path) => {
  const base = import.meta.env.BASE_URL || "/";
  return `${base}${String(path).replace(/^\//, "")}`;
};

export default function Footer() {
  const { t } = useTranslation();
  const portfolioLink = "#";

  return (
    <footer className="mt-16" id="footer">
      <Container full>
        <div className="rounded-[28px] bg-white shadow-[0_10px_30px_rgba(0,0,0,.08)] px-6 md:px-10 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start md:items-center">
            <div data-aos="fade-down" data-aos-duration="300">
              <div className="flex items-center gap-3">
                <img
                  src={withBase("/logo.webp")}
                  alt="Petrolink Service"
                  className="h-24 w-auto object-contain"
                  loading="lazy"
                />
              </div>

              <p className="text-sm text-[var(--muted)] max-w-sm leading-relaxed">
                {t("footer.about")}
              </p>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="500"
              className="flex flex-col items-center md:justify-center -mt-3"
            >
              <a
                href="#"
                aria-label="LinkedIn"
                className="
                  w-12 h-12 rounded-xl
                  bg-[#0B6B66]
                  flex items-center justify-center
                  shadow-[0_10px_25px_rgba(0,0,0,.15)]
                  hover:scale-105 transition-all duration-300
                "
              >
                <LinkedInIcon />
              </a>

              <span className="mt-2 text-xs font-medium text-[var(--muted)]">
                {t("footer.linkedin")}
              </span>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="700"
              className="flex flex-col gap-6 md:items-end"
            >
              {/* <div className="flex gap-3 md:justify-end">
                <div className="mt-1 text-[#0B6B66]">
                  <LocationIcon />
                </div>

                <div className="text-sm">
                  <div className="font-semibold text-[var(--ink)]">
                    {t("footer.addressTitle")}
                  </div>
                  <div className="text-[var(--muted)] leading-relaxed">
                    {t("footer.addressLine1")} <br />
                    {t("footer.addressLine2")}
                  </div>
                </div>
              </div> */}

              <div className="flex gap-3 md:justify-end">
                <div className="mt-1 text-[#0B6B66]">
                  <PhoneIcon />
                </div>

                <div className="text-sm">
                  <div className="font-semibold text-[var(--ink)]">
                    {t("footer.contactsTitle")}
                  </div>
                  <div className="text-[var(--muted)] leading-relaxed">
                    {t("footer.phoneDirect")} <br />
                    {/* {t("footer.phoneManager")} */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 h-px bg-[#E7ECF2]" />

          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[var(--muted)]">
            <span>
              © {new Date().getFullYear()} Petrolink service. {t("footer.rights")}
            </span>

            <span className="text-center">
              {t("footer.designedBy")}{" "}
              <a
                href={portfolioLink}
                className="text-[var(--ink)] underline underline-offset-4 hover:opacity-80 transition"
              >
                Benjamin AKA
              </a>
            </span>

            <span>{t("footer.builtWithCare")}</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/* ================= Icons ================= */

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.94 6.5A2.44 2.44 0 1 1 4.5 4.06 2.44 2.44 0 0 1 6.94 6.5zM4.7 20.5h4.5V9h-4.5zM21 20.5h-4.5v-6c0-1.6-.03-3.7-2.25-3.7-2.25 0-2.6 1.76-2.6 3.58v6.12H7.2V9h4.3v1.57h.06c.6-1.14 2.06-2.35 4.24-2.35 4.53 0 5.36 2.98 5.36 6.86z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M6.6 10.8c1.5 2.9 3.7 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1.1-.3 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.6 22 2 13.4 2 3c0-.6.4-1 1-1h3.9c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1.1L6.6 10.8z" />
    </svg>
  );
}
