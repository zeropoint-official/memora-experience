"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { DestinationCard } from "@/components/ui/card-21";
import { Sparkles, Calendar, ArrowRight } from "lucide-react";

const upcomingEvents = [
  {
    id: 1,
    name: "PLANITARIO 2025",
    emoji: "🚀",
    stats: "March 15-16 • Nicosia",
    description: "The Ultimate Night Experience",
    imageUrl: "/Content/planitatio/The Cyprus Planetarium 2025.jpg",
    href: "https://planetarium.memora-experience.com",
    themeColor: "25 95% 50%", // Orange
    featured: true,
  },
  {
    id: 2,
    name: "Barcelona Trip",
    emoji: "🇪🇸",
    stats: "April 20-25 • Spain",
    description: "Student Adventure 2025",
    imageUrl: "https://images.unsplash.com/photo-1583422409516-2895a77efded?q=80&w=2070&auto=format&fit=crop",
    href: "/events/barcelona",
    themeColor: "340 80% 45%", // Rose/Pink
    featured: false,
  },
  {
    id: 3,
    name: "Summer Festival",
    emoji: "🎉",
    stats: "June 15-17 • Limassol",
    description: "Beach Party Cyprus",
    imageUrl: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=2070&auto=format&fit=crop",
    href: "/events/summer-festival",
    themeColor: "200 80% 45%", // Blue
    featured: false,
  },
];

export function EventsSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const featuredEvent = upcomingEvents.find((e) => e.featured);
  const otherEvents = upcomingEvents.filter((e) => !e.featured);

  return (
    <section className="relative overflow-hidden bg-zinc-50 py-24 lg:py-32">
      {/* Background decorations */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
      <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-orange-200/30 blur-[100px]" />
      <div className="absolute -right-40 bottom-40 h-80 w-80 rounded-full bg-rose-200/30 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="mb-16 text-center lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm"
          >
            <Calendar className="h-4 w-4" />
            <span>Upcoming Events</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl"
          >
            Don&apos;t Miss Out
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-orange-600 bg-clip-text text-transparent">
              On The Action
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-slate-600"
          >
            From legendary nights at Planitario to unforgettable student adventures, 
            secure your spot at Cyprus&apos;s most anticipated events.
          </motion.p>
        </div>

        {/* Events Grid */}
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Featured Event - Planitario */}
          {featuredEvent && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:row-span-2"
            >
              <div className="relative mb-4">
                <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/25">
                  <Sparkles className="h-4 w-4" />
                  Featured Event
                </span>
              </div>
              <div className="h-[500px] lg:h-[calc(100%-3rem)]">
                <DestinationCard
                  imageUrl={featuredEvent.imageUrl}
                  location={featuredEvent.name}
                  flag={featuredEvent.emoji}
                  stats={`${featuredEvent.stats} • ${featuredEvent.description}`}
                  href={featuredEvent.href}
                  themeColor={featuredEvent.themeColor}
                  priority={true}
                />
              </div>
            </motion.div>
          )}

          {/* Other Events */}
          <div className="flex flex-col gap-8">
            {otherEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="h-[280px]"
              >
                <DestinationCard
                  imageUrl={event.imageUrl}
                  location={event.name}
                  flag={event.emoji}
                  stats={`${event.stats} • ${event.description}`}
                  href={event.href}
                  themeColor={event.themeColor}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <a
            href="/events"
            className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-slate-900/25 transition-all hover:bg-slate-800 hover:shadow-xl"
          >
            <span>View All Events</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

