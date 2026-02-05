import { LandingHero } from "@/components/sections/landing-hero";
import { SpotlightNavigation } from "@/components/sections/spotlight-navigation";
import { AboutSection } from "@/components/sections/about-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <main>
      {/* Hero - The first impression */}
      <LandingHero />
      
      {/* Featured Event + Navigation Cards */}
      <SpotlightNavigation />
      
      {/* About Section - Company story */}
      <AboutSection />
      
      {/* Final CTA - Conversion push */}
      <CTASection />
    </main>
  );
}
