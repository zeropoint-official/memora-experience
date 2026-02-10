// components/sections/navigation-cards-section.tsx

"use client";

import { motion } from "framer-motion";
import { GradientCard } from "@/components/ui/gradient-card";
import { Sparkles } from "lucide-react";

// Navigation card data for Memora Experience
const navigationCards = [
  {
    badgeText: "Browse All",
    badgeColor: "#F59E0B", // Amber
    title: "All Events",
    description:
      "Discover our complete collection of upcoming and past events across Cyprus. From expos to exclusive nights.",
    ctaText: "Explore events",
    ctaHref: "/events",
    imageUrl:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=400&fit=crop",
    gradient: "orange" as const,
  },
  {
    badgeText: "Featured Event",
    badgeColor: "#8B5CF6", // Purple
    title: "Planitario",
    description:
      "Experience the magic of the Cyprus Planetarium. An immersive journey through the cosmos awaits you.",
    ctaText: "Learn more",
    ctaHref: "https://planetarium.memora-experience.com",
    imageUrl:
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&h=400&fit=crop",
    gradient: "purple" as const,
  },
  {
    badgeText: "Coming Soon",
    badgeColor: "#10B981", // Green
    title: "Student Trips",
    description:
      "Epic 3-day adventures designed for students. Create unforgettable memories with friends across stunning destinations.",
    ctaText: "Coming Soon",
    ctaHref: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=400&h=400&fit=crop",
    gradient: "green" as const,
  },
  {
    badgeText: "Join Our Team",
    badgeColor: "#EC4899", // Pink/Rose
    title: "Work With Us",
    description:
      "Be part of Cyprus's most exciting event company. We're looking for passionate individuals to create magic.",
    ctaText: "Get in touch",
    ctaHref: "/contact",
    imageUrl:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop",
    gradient: "rose" as const,
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.42, 0, 0.58, 1] as const,
    },
  },
};

export function NavigationCardsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-20 md:py-28">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />
      <div className="absolute -left-32 top-1/4 h-64 w-64 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute -right-32 bottom-1/4 h-64 w-64 rounded-full bg-purple-200/30 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm">
            <Sparkles className="h-4 w-4" />
            <span>Explore Memora</span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
            <span className="text-[#6B6B6B]">Where Would You Like to</span>{" "}
            <span className="text-[#D4A574]">Go?</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-slate-600">
            Navigate through our experiences and find what excites you most.
            Every journey starts with a single click.
          </p>
        </motion.div>

        {/* Navigation Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8"
        >
          {navigationCards.map((card, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GradientCard
                badgeText={card.badgeText}
                badgeColor={card.badgeColor}
                title={card.title}
                description={card.description}
                ctaText={card.ctaText}
                ctaHref={card.ctaHref}
                imageUrl={card.imageUrl}
                gradient={card.gradient}
                className="min-h-[280px]"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-500">
            Can&apos;t find what you&apos;re looking for?{" "}
            <a
              href="/contact"
              className="font-semibold text-orange-500 hover:text-orange-600 transition-colors"
            >
              Contact us
            </a>{" "}
            and let&apos;s create something amazing together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}



