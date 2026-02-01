import Container from "./Container";

export default function Footer() {
  return (
    <footer className="mt-16" id="footer">
      <Container>
        <div className="rounded-[28px] bg-white shadow-[0_10px_30px_rgba(0,0,0,.08)] px-6 md:px-10 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {/* Brand */}
            <div>
              <h3 className="text-xl font-semibold tracking-tight">
                PetroLinkService
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] max-w-xs">
                Des solutions logistiques intelligentes qui font avancer votre entreprise avec
                Fiabilité et innovation.
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex md:justify-center gap-6 text-sm whitespace-nowrap">
              <a href="#home" className="text-[var(--muted)] hover:text-[var(--ink)] transition">
                accueil
              </a>
              <a href="#why-us" className="text-[var(--muted)] hover:text-[var(--ink)] transition">
                Pourquoi nous
              </a>
              <a href="#service" className="text-[var(--muted)] hover:text-[var(--ink)] transition">
                Services
              </a>
              <a href="#contact" className="text-[var(--muted)] hover:text-[var(--ink)] transition">
                Nous contacter
              </a>
            </nav>

            {/* Socials */}
            <div className="flex md:justify-end gap-3">
              <SocialButton label="Facebook">
                <FacebookIcon />
              </SocialButton>

              <SocialButton label="Instagram">
                <InstagramIcon />
              </SocialButton>

              <SocialButton label="TikTok">
                <TikTokIcon />
              </SocialButton>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px bg-[#E7ECF2]" />

          {/* Bottom */}
          <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[var(--muted)]">
            <span>© {new Date().getFullYear()} Petrolink service Tous droits réservés.</span>
            <span>Conçu et construit avec soin 🚚</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

/* ---------- UI components ---------- */

function SocialButton({ children, label }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="w-11 h-11 rounded-full bg-[#F2F4F7] flex items-center justify-center
                 hover:bg-black hover:text-white transition-all duration-300"
    >
      {children}
    </a>
  );
}

/* ---------- Icons (SVG inline) ---------- */

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.3V12h2.3V9.8c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.4l-.4 2.9h-2v7A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 9A3.5 3.5 0 1 1 15.5 13 3.5 3.5 0 0 1 12 16.5zm5.8-9.9a1.3 1.3 0 1 1-1.3-1.3 1.3 1.3 0 0 1 1.3 1.3z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 8.1c-1.5 0-3-.5-4.2-1.5v7.1a6.5 6.5 0 1 1-5.6-6.4v3.2a3.3 3.3 0 1 0 2.3 3.1V2h3c.3 1.9 1.7 3.6 4.5 3.8v2.3z" />
    </svg>
  );
}
