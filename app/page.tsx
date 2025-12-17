import { HeroV3Collage } from "@/components/sections/hero-v3-collage";
import { ServicesTimeline } from "@/components/sections/services-timeline";
import { ReviewsSection } from "@/components/sections/reviews-section";
import { EventsSection } from "@/components/sections/events-section";
import { PastEventsSection } from "@/components/sections/past-events-section";

export default function Home() {
  return (
    <main>
      <HeroV3Collage />
      <ServicesTimeline />
      <ReviewsSection />
      <EventsSection />
      <PastEventsSection />
    </main>
  );
}
