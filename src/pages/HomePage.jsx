//HomePage.jsx
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Hero from "../sections/hero/Hero";
import WhyUs from "../sections/WhyUs/WhyUs";
import Services from "../sections/services/Services";
import Testimonials from "../sections/testimonials/Testimonials";
import Footer from "../components/layout/Footer";

import ContactStickyButton from "../components/ui/ContactStickyButton";
import BackToTop from "../components/ui/BackToTop";

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const target = location.state?.scrollTo || location.state?.scrollBackTo;

  useEffect(() => {
    // ✅ si l’URL contient un hash (ex: /#service), le navigateur scroll tout seul
    // on le nettoie au chargement (sauf si on a explicitement demandé un scroll via state)
    if (!target && window.location.hash) {
      const cleanUrl = window.location.pathname + window.location.search;
      window.history.replaceState(null, "", cleanUrl);
      window.scrollTo({ top: 0, behavior: "auto" });
      return;
    }

    // ✅ scroll contrôlé uniquement via state
    if (target) {
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }, 50);

      // ✅ nettoyer le state (évite répétition)
      navigate(".", { replace: true, state: {} });
    }
  }, [navigate, target]);

  return (
    <div className="min-h-screen overflow-x-clip">
      <Navbar />
      <main className="pt-5 md:pt-6">
        <Hero />
        <WhyUs />
        <Services />
        <Testimonials />
        <Footer />

        <ContactStickyButton
          whatsappNumber="2250584360894"
          whatsappMessage="Bonjour PetroLink Service, je souhaite des informations."
          companyEmail="mamyshow663@gmail.com"
        />

        <BackToTop />
      </main>
    </div>
  );
}
