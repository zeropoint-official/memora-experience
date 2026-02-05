"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Calendar,
  MapPin,
  ArrowRight,
  Sparkles,
  PartyPopper,
  Plane,
  Building2,
} from "lucide-react";
import Image from "next/image";
import { GridPattern } from "@/components/ui/grid-pattern";

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
  themeColor: string;
  badge?: string;
  featured?: boolean;
}

// ============================================
// SAMPLE EVENTS DATA
// ============================================
const eventsData: Event[] = [
  // SPECIAL EVENTS
  {
    id: "planitario-2026",
    title: "Planetarium 2026",
    category: "special",
    date: "March 15-16, 2026",
    location: "Nicosia, Cyprus",
    description: "The Ultimate Night Experience - Cyprus' most anticipated event returns",
    imageUrl: "/Content/planitatio/The Cyprus Planetarium 2025.jpg",
    href: "https://planetarium.memora-experience.com",
    themeColor: "25 95% 50%",
    badge: "Featured",
    featured: true,
  },
  {
    id: "boat-party-2026",
    title: "Summer Boat Party",
    category: "special",
    date: "July 20, 2026",
    location: "Ayia Napa, Cyprus",
    description: "Set sail for the ultimate sunset party with DJ Eirinei Sterianou - Open bar included",
    imageUrl: "/Content/yacth1.jpg",
    href: "/events/boat-party",
    themeColor: "190 80% 45%",
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
    subtitle: "Extraordinary experiences you won't want to miss",
    icon: PartyPopper,
    gradient: "from-[#D4A574] to-[#C8965F]",
    bgGradient: "from-[#D4A574]/10 to-amber-50",
  },
  {
    id: "student-trip",
    title: "Student Trips",
    subtitle: "Epic adventures designed for unforgettable memories",
    icon: Plane,
    gradient: "from-[#D4A574] to-[#C8965F]",
    bgGradient: "from-[#D4A574]/10 to-amber-50",
  },
  {
    id: "business",
    title: "Business Events",
    subtitle: "Professional gatherings that inspire and connect",
    icon: Building2,
    gradient: "from-[#D4A574] to-[#C8965F]",
    bgGradient: "from-[#D4A574]/10 to-amber-50",
  },
];


// ============================================
// EVENT CARD COMPONENT
// ============================================
function EventCard({ event, index }: { event: Event; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group h-full"
    >
      <a
        href={event.href}
        className="relative block h-full overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
        style={{
          boxShadow: `0 0 40px -15px hsl(${event.themeColor} / 0.3)`,
        }}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to top, hsl(${event.themeColor} / 0.8), hsl(${event.themeColor} / 0.3) 50%, transparent)`,
            }}
          />

          {/* Badge */}
          {event.badge && (
            <div className="absolute left-4 top-4">
              <span
                className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-lg backdrop-blur-sm"
                style={{
                  backgroundColor: `hsl(${event.themeColor} / 0.9)`,
                }}
              >
                {event.featured && <Sparkles className="h-3 w-3" />}
                {event.badge}
              </span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="mb-2 text-xl md:text-2xl font-semibold tracking-normal leading-tight text-slate-900 transition-colors group-hover:text-[#D4A574]">
            {event.title}
          </h3>
          <p className="mb-4 text-sm text-slate-600 line-clamp-2">
            {event.description}
          </p>

          {/* Meta */}
          <div className="mb-4 flex flex-wrap items-center gap-3 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-slate-400" />
              {event.date}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-slate-400" />
              {event.location}
            </span>
          </div>

          {/* CTA */}
          <div
            className="flex items-center justify-between rounded-lg px-4 py-3 transition-all duration-300"
            style={{
              backgroundColor: `hsl(${event.themeColor} / 0.1)`,
            }}
          >
            <span className="text-sm font-semibold text-slate-700">
              View Details
            </span>
            <ArrowRight className="h-4 w-4 text-slate-600 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </div>
      </a>
    </motion.div>
  );
}

// ============================================
// FEATURED EVENT CARD (LARGER)
// ============================================
function FeaturedEventCard({ event }: { event: Event }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="group col-span-full"
    >
      <a
        href={event.href}
        className="relative block overflow-hidden rounded-3xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
        style={{
          boxShadow: `0 0 60px -15px hsl(${event.themeColor} / 0.4)`,
        }}
      >
        {/* Image */}
        <div className="relative h-72 overflow-hidden sm:h-96">
          <Image
            src={event.imageUrl}
            alt={event.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 100vw"
            priority
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to right, hsl(${event.themeColor} / 0.4), transparent, hsl(${event.themeColor} / 0.3))`,
            }}
          />
        </div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
          {/* Top */}
          <div className="flex items-start justify-between">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A574] to-[#C8965F] px-4 py-2 text-sm font-bold text-white shadow-lg shadow-[#D4A574]/30">
              <Sparkles className="h-4 w-4" />
              Featured Event
            </span>
          </div>

          {/* Bottom */}
          <div>
            <h3 className="mb-3 text-xl md:text-2xl lg:text-3xl font-medium tracking-normal leading-tight text-white">
              {event.title}
            </h3>
            <p className="mb-4 max-w-xl text-white/80">{event.description}</p>

            <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-white/80">
              <span className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {event.date}
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                {event.location}
              </span>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-xl transition-all group-hover:bg-gradient-to-r group-hover:from-[#D4A574] group-hover:to-[#C8965F] group-hover:text-white">
              Explore Event
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

// ============================================
// EVENT SECTION COMPONENT
// ============================================
function EventSection({
  section,
  events,
  showFeatured = false,
  showComingSoon = false,
}: {
  section: typeof sections[0];
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

  // If showing coming soon, show text message instead
  if (showComingSoon && events.length === 0) {
    return (
      <section
        ref={ref}
        className="relative py-12 sm:py-16 md:py-20"
      >
        {/* Background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${section.bgGradient} opacity-30`}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex items-center gap-4">
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${section.gradient} shadow-lg`}
              >
                <section.icon className="h-7 w-7 text-white" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
                  <span className="text-[#6B6B6B]">{section.title.split(" ")[0]}</span>{" "}
                  <span className="text-[#D4A574]">{section.title.split(" ").slice(1).join(" ")}</span>
                </h2>
                <p className="text-sm sm:text-base text-slate-600">
                  {section.subtitle}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Coming Soon Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center justify-center py-16 px-6 rounded-2xl bg-white/60 backdrop-blur-sm border-2 border-slate-200"
          >
            <div className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${section.gradient} shadow-lg mb-6`}>
              <section.icon className="h-8 w-8 text-white" />
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-slate-100 to-slate-50 px-6 py-3 border border-slate-200 mb-4">
              <Sparkles className="h-5 w-5 text-slate-400" />
              <span className="text-lg font-semibold text-slate-700">Coming Soon</span>
            </div>
            <p className="text-center text-slate-600 max-w-md">
              We&apos;re working on exciting new {section.title.toLowerCase()} for you. Stay tuned!
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  if (events.length === 0) return null;

  return (
    <section
      ref={ref}
      className="relative py-12 sm:py-16 md:py-20"
    >
      {/* Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${section.bgGradient} opacity-30`}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-4">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${section.gradient} shadow-lg`}
            >
              <section.icon className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
                <span className="text-[#6B6B6B]">{section.title.split(" ")[0]}</span>{" "}
                <span className="text-[#D4A574]">{section.title.split(" ").slice(1).join(" ")}</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600">
                {section.subtitle}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Featured Event (if exists) */}
          {featuredEvent && <FeaturedEventCard event={featuredEvent} />}

          {/* Regular Events */}
          {regularEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function EventsPage() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-50px" });

  // Group events by category
  const specialEvents = eventsData.filter((e) => e.category === "special");
  const studentTrips = eventsData.filter((e) => e.category === "student-trip");
  const businessEvents = eventsData.filter((e) => e.category === "business");

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-zinc-50">
      {/* Hero Section */}
      <section className="relative z-10 overflow-hidden bg-zinc-50 pb-6 pt-24 sm:pb-8 sm:pt-32 md:pb-16 md:pt-40">
        {/* Background Elements */}
        <GridPattern
          className="absolute inset-0 z-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
          width={50}
          height={50}
          numSquares={30}
          maxOpacity={0.1}
        />
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#D4A574]/30 blur-[120px]" />
        <div className="absolute -right-40 top-60 h-[400px] w-[400px] rounded-full bg-amber-200/40 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ref={headerRef} className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4A574]/30 bg-white px-4 py-2 text-sm font-medium text-[#D4A574] shadow-sm"
            >
              <Calendar className="h-4 w-4" />
              <span>All Events</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 sm:mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight px-2"
            >
              <span className="text-[#6B6B6B]">Discover</span>{" "}
              <span className="text-[#D4A574]">Extraordinary</span>
              <br />
              <span className="text-[#D4A574]">Experiences</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-2xl px-4 text-base sm:text-lg text-slate-600"
            >
              From legendary nights at Planetarium to unforgettable student
              adventures and prestigious business events, find your next
              experience.
            </motion.p>

            {/* Quick Navigation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 sm:mt-8"
            >
              {/* Mobile: Horizontal Scroll */}
              <div className="flex sm:hidden gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition-all active:shadow-md active:ring-slate-300"
                  >
                    <section.icon className="h-3.5 w-3.5" />
                    {section.title}
                  </a>
                ))}
              </div>
              {/* Desktop: Centered Wrap */}
              <div className="hidden sm:flex flex-wrap items-center justify-center gap-3">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition-all hover:shadow-md hover:ring-slate-300"
                  >
                    <section.icon className="h-4 w-4" />
                    {section.title}
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Events Section */}
      <div id="special">
        <EventSection
          section={sections[0]}
          events={specialEvents}
          showFeatured={true}
        />
      </div>

      {/* Student Trips Section */}
      <div id="student-trip">
        <EventSection section={sections[1]} events={studentTrips} showComingSoon={true} />
      </div>

      {/* Business Events Section */}
      <div id="business">
        <EventSection section={sections[2]} events={businessEvents} showComingSoon={true} />
      </div>

      {/* CTA Section */}
      <section className="relative z-10 border-t border-slate-200 bg-white py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
              <span className="text-[#6B6B6B]">Can&apos;t find what you&apos;re</span>{" "}
              <span className="text-[#D4A574]">looking for?</span>
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-slate-600">
              We&apos;re always creating new experiences. Get in touch with our
              team and let us help you find or create the perfect event.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4A574] to-[#C8965F] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-xl shadow-[#D4A574]/25 transition-all active:scale-95 sm:hover:shadow-2xl"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium text-slate-900 transition-all active:scale-95 sm:hover:border-[#D4A574]/50"
              >
                Back to Home
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
