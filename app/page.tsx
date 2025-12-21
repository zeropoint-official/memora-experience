import { LandingHero } from "@/components/sections/landing-hero";
import { SpotlightNavigation } from "@/components/sections/spotlight-navigation";
import { PastEventsGallery } from "@/components/sections/past-events-gallery";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { AboutSection } from "@/components/sections/about-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <main>
      {/* Hero - The first impression */}
      <LandingHero />
      
      {/* Featured Event + Navigation Cards */}
      <SpotlightNavigation />
      
      {/* Past Events Gallery - Social proof */}
      <PastEventsGallery />
      
      {/* Reviews/Testimonials - Trust building */}
      <ReviewsSection />
      
      {/* About Section - Company story */}
      <AboutSection />
      
      {/* Final CTA - Conversion push */}
      <CTASection />
    </main>
  );
}
