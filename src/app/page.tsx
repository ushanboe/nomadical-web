import FloatingImages from "@/components/FloatingImages";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import FeatureDeepDive from "@/components/FeatureDeepDive";
import PricingSection from "@/components/PricingSection";
import RequirementsSection from "@/components/RequirementsSection";
import ContactForm from "@/components/ContactForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

export default function Home() {
  return (
    <>
      <FloatingImages />
      <Navbar />
      <Hero />
      <FeaturesSection />
      <FeatureDeepDive />
      <PricingSection />
      <RequirementsSection />
      <ContactForm />
      <CTA />
      <Footer />
      <ChatWidget />
    </>
  );
}
