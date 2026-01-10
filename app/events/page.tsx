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
  History,
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
  emoji: string;
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
    emoji: "🚀",
  },
  {
    id: "kratiki-ekthesi-2026",
    title: "Cyprus State Fair",
    category: "special",
    date: "May 20-25, 2026",
    location: "Nicosia, Cyprus",
    description: "Cyprus State Fair - The biggest exhibition event of the year",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    href: "/events/kratiki-ekthesi",
    themeColor: "340 80% 45%",
    badge: "Annual",
    emoji: "🎪",
  },
  {
    id: "summer-festival-2026",
    title: "Summer Festival",
    category: "special",
    date: "June 15-17, 2026",
    location: "Limassol, Cyprus",
    description: "Beach Party Cyprus - Three days of sun, music, and unforgettable memories",
    imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
    href: "/events/summer-festival",
    themeColor: "200 80% 45%",
    badge: "Beach Party",
    emoji: "🎉",
  },

  // STUDENT TRIPS
  {
    id: "barcelona-trip-2026",
    title: "Barcelona Trip",
    category: "student-trip",
    date: "April 20-25, 2026",
    location: "Barcelona, Spain",
    description: "Student Adventure 2026 - Explore the vibrant streets of Barcelona",
    imageUrl: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&h=600&fit=crop",
    href: "/events/barcelona",
    themeColor: "340 80% 45%",
    badge: "5 Days",
    emoji: "🇪🇸",
  },
  {
    id: "rome-trip-2026",
    title: "Rome Adventure",
    category: "student-trip",
    date: "May 5-10, 2026",
    location: "Rome, Italy",
    description: "Discover ancient history and Italian culture in the Eternal City",
    imageUrl: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800&h=600&fit=crop",
    href: "/events/rome",
    themeColor: "25 90% 45%",
    badge: "6 Days",
    emoji: "🇮🇹",
  },
  {
    id: "paris-trip-2026",
    title: "Paris Getaway",
    category: "student-trip",
    date: "September 10-15, 2026",
    location: "Paris, France",
    description: "The City of Lights awaits - Art, culture, and unforgettable experiences",
    imageUrl: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=600&fit=crop",
    href: "/events/paris",
    themeColor: "220 80% 45%",
    badge: "6 Days",
    emoji: "🇫🇷",
  },

  // BUSINESS EVENTS
  {
    id: "tech-summit-2026",
    title: "Tech Summit Cyprus",
    category: "business",
    date: "April 10-12, 2026",
    location: "Limassol, Cyprus",
    description: "Connect with industry leaders and explore the future of technology",
    imageUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    href: "/events/tech-summit",
    themeColor: "220 80% 50%",
    badge: "Conference",
    emoji: "💼",
  },
  {
    id: "corporate-retreat-2026",
    title: "Corporate Retreat",
    category: "business",
    date: "July 5-8, 2026",
    location: "Paphos, Cyprus",
    description: "Team building and strategic planning in a stunning Mediterranean setting",
    imageUrl: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop",
    href: "/events/corporate-retreat",
    themeColor: "160 70% 40%",
    badge: "Team Building",
    emoji: "🏢",
  },
  {
    id: "business-expo-2026",
    title: "Business Expo 2026",
    category: "business",
    date: "October 15-18, 2026",
    location: "Nicosia, Cyprus",
    description: "The largest B2B exhibition in Cyprus - Network, learn, and grow",
    imageUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop",
    href: "/events/business-expo",
    themeColor: "25 85% 50%",
    badge: "B2B",
    emoji: "📊",
  },

  // PAST EVENTS
  {
    id: "planitario-2025",
    title: "Planetarium 2025",
    category: "past",
    date: "March 15-16, 2025",
    location: "Nicosia, Cyprus",
    description: "A legendary night that made history - Thank you to everyone who attended",
    imageUrl: "/Content/planitatio/Cyprus Planetarium Lobby.jpg",
    href: "https://planetarium.memora-experience.com",
    themeColor: "260 70% 50%",
    badge: "Sold Out",
    emoji: "✨",
  },
  {
    id: "winter-gala-2024",
    title: "Winter Gala 2024",
    category: "past",
    date: "December 20, 2024",
    location: "Limassol, Cyprus",
    description: "An elegant evening of celebration and memories",
    imageUrl: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&h=600&fit=crop",
    href: "/events/winter-gala-2024",
    themeColor: "200 60% 40%",
    badge: "Completed",
    emoji: "❄️",
  },
  {
    id: "amsterdam-trip-2024",
    title: "Amsterdam Trip 2024",
    category: "past",
    date: "October 5-10, 2024",
    location: "Amsterdam, Netherlands",
    description: "An unforgettable student adventure through the canals of Amsterdam",
    imageUrl: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=800&h=600&fit=crop",
    href: "/events/amsterdam-2024",
    themeColor: "25 80% 45%",
    badge: "Completed",
    emoji: "🇳🇱",
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
    gradient: "from-orange-500 to-rose-500",
    bgGradient: "from-orange-50 to-rose-50",
  },
  {
    id: "student-trip",
    title: "Student Trips",
    subtitle: "Epic adventures designed for unforgettable memories",
    icon: Plane,
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    id: "business",
    title: "Business Events",
    subtitle: "Professional gatherings that inspire and connect",
    icon: Building2,
    gradient: "from-blue-500 to-indigo-500",
    bgGradient: "from-blue-50 to-indigo-50",
  },
  {
    id: "past",
    title: "Past Events",
    subtitle: "Relive the magic of our previous experiences",
    icon: History,
    gradient: "from-violet-500 to-purple-500",
    bgGradient: "from-violet-50 to-purple-50",
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

          {/* Emoji */}
          <div className="absolute right-4 top-4 text-2xl">{event.emoji}</div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="mb-2 text-xl font-bold text-slate-900 transition-colors group-hover:text-orange-600">
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
              {event.category === "past" ? "View Gallery" : "View Details"}
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
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-orange-500/30">
              <Sparkles className="h-4 w-4" />
              Featured Event
            </span>
            <span className="text-3xl">{event.emoji}</span>
          </div>

          {/* Bottom */}
          <div>
            <h3 className="mb-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
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

            <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-xl transition-all group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-rose-500 group-hover:text-white">
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
}: {
  section: typeof sections[0];
  events: Event[];
  showFeatured?: boolean;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredEvent = showFeatured ? events.find((e) => e.featured) : null;
  const regularEvents = showFeatured
    ? events.filter((e) => !e.featured)
    : events;

  if (events.length === 0) return null;

  return (
    <section
      ref={ref}
      className={`relative py-12 sm:py-16 md:py-20 ${
        section.id === "past" ? "bg-slate-900" : ""
      }`}
    >
      {/* Background for non-past sections */}
      {section.id !== "past" && (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${section.bgGradient} opacity-30`}
        />
      )}

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
              <h2
                className={`text-2xl font-bold sm:text-3xl ${
                  section.id === "past" ? "text-white" : "text-slate-900"
                }`}
              >
                {section.title}
              </h2>
              <p
                className={`text-sm sm:text-base ${
                  section.id === "past" ? "text-slate-400" : "text-slate-600"
                }`}
              >
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
  const pastEvents = eventsData.filter((e) => e.category === "past");

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
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-orange-200/40 blur-[120px]" />
        <div className="absolute -right-40 top-60 h-[400px] w-[400px] rounded-full bg-rose-200/40 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div ref={headerRef} className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm"
            >
              <Calendar className="h-4 w-4" />
              <span>All Events</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 sm:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 px-2"
            >
              Discover{" "}
              <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-orange-600 bg-clip-text text-transparent">
                Extraordinary
              </span>
              <br />
              Experiences
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
        <EventSection section={sections[1]} events={studentTrips} />
      </div>

      {/* Business Events Section */}
      <div id="business">
        <EventSection section={sections[2]} events={businessEvents} />
      </div>

      {/* Past Events Section */}
      <div id="past">
        <EventSection section={sections[3]} events={pastEvents} />
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
            <h2 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
              Can&apos;t find what you&apos;re looking for?
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-slate-600">
              We&apos;re always creating new experiences. Get in touch with our
              team and let us help you find or create the perfect event.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-xl shadow-orange-500/25 transition-all active:scale-95 sm:hover:shadow-2xl"
              >
                Contact Us
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium text-slate-900 transition-all active:scale-95 sm:hover:border-orange-300"
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
