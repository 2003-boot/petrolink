import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Hero from "../sections/hero/Hero";
import WhyUs from "../sections/WhyUs/WhyUs";
import Services from "../sections/services/Services";
import Testimonials from "../sections/testimonials/Testimonials";
import ContactStickyButton from "../components/ui/ContactStickyButton";
import BackToTop from "../components/ui/BackToTop";

export default function HomePage() {
  return (
    <div className="min-h-screen">
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
