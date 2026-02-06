"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";

// ============================================
// TYPES
// ============================================
interface Event {
  id: string;
  title: string;
  category: "special" | "student-trip" | "business" | "past";
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  href: string;
  badge?: string;
  featured?: boolean;
}

// ============================================
// EVENTS DATA
// ============================================
const eventsData: Event[] = [
  {
    id: "planitario-2026",
    title: "Planetarium 2026",
    category: "special",
    date: "March 15-16, 2026",
    location: "Nicosia, Cyprus",
    description:
      "The Ultimate Night Experience — Cyprus' most anticipated event returns with an unforgettable show.",
    imageUrl: "/Content/planitatio/The Cyprus Planetarium 2025.jpg",
    href: "https://planetarium.memora-experience.com",
    badge: "Featured",
    featured: true,
  },
  {
    id: "boat-party-2026",
    title: "Summer Boat Party",
    category: "special",
    date: "July 20, 2026",
    location: "Ayia Napa, Cyprus",
    description:
      "Set sail for the ultimate sunset party with DJ Englezos & DJ MrUnknown — Open bar included.",
    imageUrl: "/Content/yacth1.jpg",
    href: "/events/boat-party",
    badge: "Hot",
  },
];

// ============================================
// SECTION CONFIG
// ============================================
const sections = [
  {
    id: "special",
    title: "Special Events",
    label: "EVENTS",
    subtitle: "Extraordinary experiences you won't want to miss",
  },
  {
    id: "student-trip",
    title: "Student Trips",
    label: "TRIPS",
    subtitle: "Epic adventures designed for unforgettable memories",
  },
  {
    id: "business",
    title: "Business Events",
    label: "BUSINESS",
    subtitle: "Professional gatherings that inspire and connect",
  },
];

// ============================================
// EVENT CARD
// ============================================
function EventCard({ event, index }: { event: Event; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group h-full"
    >
      <a
        href={event.href}
        className="relative block h-full overflow-hidden rounded-2xl bg-white border border-slate-100 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1"
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Subtle bottom gradient */}
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent" />

          {/* Badge */}
          {event.badge && (
            <div className="absolute left-4 top-4">
              <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-slate-800">
                {event.badge}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="mb-1.5 text-lg font-semibold text-slate-900 transition-colors group-hover:text-[#C8965F]">
            {event.title}
          </h3>
          <p className="mb-4 text-sm text-slate-500 leading-relaxed line-clamp-2">
            {event.description}
          </p>

          {/* Meta */}
          <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-slate-400">
            <span>{event.date}</span>
            <span className="hidden sm:inline">·</span>
            <span>{event.location}</span>
          </div>

          {/* CTA */}
          <span className="inline-flex items-center gap-1.5 text-sm font-medium text-[#D4A574] transition-colors group-hover:text-[#C8965F]">
            View Details
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </a>
    </motion.div>
  );
}

// ============================================
// FEATURED EVENT CARD
// ============================================
function FeaturedEventCard({ event }: { event: Event }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="group col-span-full"
    >
      <a
        href={event.href}
        className="relative block overflow-hidden rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-slate-300/40 hover:-translate-y-1"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] sm:aspect-[2.4/1] overflow-hidden">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, 100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
          {/* Top: label */}
          <div>
            <span className="inline-block rounded-full bg-white/90 backdrop-blur-sm px-3.5 py-1.5 text-xs font-semibold text-slate-800">
              Featured
            </span>
          </div>

          {/* Bottom */}
          <div>
            <h3 className="mb-2 text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight">
              {event.title}
            </h3>
            <p className="mb-4 max-w-xl text-sm sm:text-base text-white/70 leading-relaxed">
              {event.description}
            </p>

            <div className="mb-5 flex flex-wrap items-center gap-4 text-sm text-white/50">
              <span>{event.date}</span>
              <span>·</span>
              <span>{event.location}</span>
            </div>

            <span className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-all group-hover:bg-[#D4A574] group-hover:text-white">
              Explore Event
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

// ============================================
// EVENT SECTION
// ============================================
function EventSection({
  section,
  events,
  showFeatured = false,
  showComingSoon = false,
}: {
  section: (typeof sections)[0];
  events: Event[];
  showFeatured?: boolean;
  showComingSoon?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredEvent = showFeatured ? events.find((e) => e.featured) : null;
  const regularEvents = showFeatured
    ? events.filter((e) => !e.featured)
    : events;

  // Coming soon state
  if (showComingSoon && events.length === 0) {
    return (
      <section ref={ref} className="py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574] mb-3">
              {section.label}
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
              {section.title}
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-500">
              {section.subtitle}
            </p>
          </motion.div>

          {/* Coming Soon */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col items-center justify-center py-16 rounded-2xl border border-dashed border-slate-200 bg-white/50"
          >
            <p className="text-sm font-medium text-slate-400 uppercase tracking-[0.15em] mb-2">
              Coming Soon
            </p>
            <p className="text-center text-slate-500 max-w-sm text-sm">
              We&apos;re working on exciting new {section.title.toLowerCase()}.
              Stay tuned!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  if (events.length === 0) return null;

  return (
    <section ref={ref} className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574] mb-3">
            {section.label}
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
            {section.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500">
            {section.subtitle}
          </p>
        </motion.div>

        {/* Events Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredEvent && <FeaturedEventCard event={featuredEvent} />}
          {regularEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// MAIN PAGE
// ============================================
export default function EventsPage() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  const specialEvents = eventsData.filter((e) => e.category === "special");
  const studentTrips = eventsData.filter((e) => e.category === "student-trip");
  const businessEvents = eventsData.filter(
    (e) => e.category === "business"
  );

  return (
    <main className="relative min-h-screen w-full bg-[#FAF8F5]">
      {/* ——— HERO ——— */}
      <section className="relative overflow-hidden pb-8 pt-28 sm:pb-12 sm:pt-36 md:pb-16 md:pt-44">
        {/* Subtle warm glow */}
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-[#E8C9A0]/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ref={headerRef} className="text-center">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574]"
            >
              All Events
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1]"
            >
              <span className="text-slate-900">Discover </span>
              <span className="text-[#C8965F]">Extraordinary</span>
              <br />
              <span className="text-slate-900">Experiences</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-lg text-sm sm:text-base text-slate-500 leading-relaxed"
            >
              From legendary nights at Planetarium to unforgettable student
              adventures and prestigious business events.
            </motion.p>

            {/* Quick Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8"
            >
              {/* Mobile: horizontal scroll */}
              <div className="flex sm:hidden gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="flex-shrink-0 rounded-full bg-white px-4 py-2 text-xs font-medium text-slate-600 border border-slate-150 transition-colors active:bg-slate-50"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
              {/* Desktop */}
              <div className="hidden sm:flex items-center justify-center gap-2">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-600 border border-slate-200 transition-all hover:border-[#D4A574]/40 hover:text-[#C8965F]"
                  >
                    {s.title}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ——— SECTIONS ——— */}
      <div id="special">
        <EventSection
          section={sections[0]}
          events={specialEvents}
          showFeatured={true}
        />
      </div>

      <div id="student-trip">
        <EventSection
          section={sections[1]}
          events={studentTrips}
          showComingSoon={true}
        />
      </div>

      <div id="business">
        <EventSection
          section={sections[2]}
          events={businessEvents}
          showComingSoon={true}
        />
      </div>

      {/* ——— BOTTOM CTA ——— */}
      <section className="border-t border-slate-200/60 bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="mb-4 text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
              Can&apos;t find what you&apos;re{" "}
              <span className="text-[#C8965F]">looking for?</span>
            </h2>
            <p className="mx-auto mb-8 max-w-md text-sm sm:text-base text-slate-500 leading-relaxed">
              We&apos;re always creating new experiences. Get in touch and
              let us help you find or create the perfect event.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D4A574] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#C8965F]"
              >
                Contact Us
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
              >
                Back to Home
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
