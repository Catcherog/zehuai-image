import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandStory from "@/components/BrandStory";
import PricingSection from "@/components/PricingSection";
import StyleShowcase from "@/components/StyleShowcase";
import ServiceFlow from "@/components/ServiceFlow";
import StudioInfo from "@/components/StudioInfo";
import FAQSection from "@/components/FAQSection";
import AboutSection from "@/components/AboutSection";
import ActivitySection from "@/components/ActivitySection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <HeroSection />
        <BrandStory />
        <PricingSection />
        <StyleShowcase />
        <ServiceFlow />
        <StudioInfo />
        <FAQSection />
        <AboutSection />
        <ActivitySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
