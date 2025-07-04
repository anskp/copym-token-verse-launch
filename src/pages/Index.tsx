import { useState } from "react";
import Preloader from "@/components/Preloader";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PlatformSection from "@/components/PlatformSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import IdentitySection from "@/components/IdentitySection";
import MarketplaceSection from "@/components/MarketplaceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <Preloader onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <PlatformSection />
      <AboutSection />
      <ProjectsSection />
      <IdentitySection />
      <MarketplaceSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
