"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const testimonials = [
  {
    id: 1,
    name: "Maria Konstantinou",
    role: "Event Coordinator",
    company: "University of Cyprus",
    content:
      "Memora Experience transformed our annual student festival into something extraordinary. The Planitario event exceeded all expectations – the production quality, the atmosphere, everything was perfect. Our students are still talking about it months later!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Andreas Georgiou",
    role: "Marketing Director",
    company: "TechCorp Cyprus",
    content:
      "We hired Memora for our annual business expo and the results were outstanding. Professional, creative, and incredibly detail-oriented. They handled everything from venue sourcing to vendor coordination flawlessly. Highly recommend!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Elena Christodoulou",
    role: "Student",
    company: "European University",
    content:
      "The Barcelona student trip organized by Memora was the highlight of my university experience! Every detail was planned perfectly – the accommodation, activities, and nightlife were amazing. Can't wait for the next adventure!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Nikos Papadopoulos",
    role: "CEO",
    company: "Innovate Nicosia",
    content:
      "Memora's team brought an incredible energy to our corporate conference. From the stunning venue setup to the seamless coordination of speakers and networking sessions – they truly understand how to create impactful business events.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Christina Loizou",
    role: "Party Enthusiast",
    company: "Planitario Regular",
    content:
      "I've been to every Planitario event and each one gets better than the last. The production, the artists, the vibes – it's Cyprus's best night out, hands down. Memora knows how to throw an unforgettable party!",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
  },
];

const trustedPartners = [
  "University of Cyprus",
  "Frederick University",
  "European University",
  "KPMG Cyprus",
  "Hilton Nicosia",
];

export function ReviewsSection() {
  return (
    <AnimatedTestimonials
      title="Loved by Cyprus"
      subtitle="From unforgettable student trips to spectacular business events, hear what our community has to say about their Memora experiences."
      badgeText="500+ 5-Star Reviews"
      testimonials={testimonials}
      autoRotateInterval={5000}
      trustedCompanies={trustedPartners}
      trustedCompaniesTitle="Trusted by universities and businesses across Cyprus"
    />
  );
}


