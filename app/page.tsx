import { LandingHero } from "@/components/sections/landing-hero";
import { SpotlightNavigation } from "@/components/sections/spotlight-navigation";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { AboutSection } from "@/components/sections/about-section";
import { LandingServices } from "@/components/sections/landing-services";

export default function Home() {
  return (
    <main>
      <LandingHero />
      <SpotlightNavigation />
      <ReviewsSection />
      <AboutSection />
      <LandingServices />
    </main>
  );
}
