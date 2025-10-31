import { HeroSection } from "./components/HeroSection";
import { OfferSection } from "./components/OfferSection";
import { LearningSection } from "./components/LearningSection";
import { AboutSection } from "./components/AboutSection";
import { GuaranteeSection } from "./components/GuaranteeSection";
import { FAQSection } from "./components/FAQSection";
import { FinalCTA } from "./components/FinalCTA";

export default function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">
      <HeroSection />
      <OfferSection />
      <LearningSection />
      <AboutSection />
      <GuaranteeSection />
      <FAQSection />
      <FinalCTA />
    </div>
  );
}