import { LandingHero } from "@/components/sections/landing-hero";
import { SpotlightNavigation } from "@/components/sections/spotlight-navigation";
import { ContactFormSection } from "@/components/sections/contact-form-section";
import { AboutSection } from "@/components/sections/about-section";
import { CTASection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <main>
      {/* Hero - The first impression */}
      <LandingHero />
      
      {/* Featured Event + Navigation Cards */}
      <SpotlightNavigation />
      
      {/* Contact Form Section */}
      <ContactFormSection />
      
      {/* About Section - Company story */}
      <AboutSection />
      
      {/* Final CTA - Conversion push */}
      <CTASection />
    </main>
  );
}
