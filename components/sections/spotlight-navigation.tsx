"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight,
  Calendar,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// ============================================
// COUNTDOWN — minimal inline style
// ============================================
function useCountdown(targetDate: Date) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = targetDate.getTime() - Date.now();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
      });
    };
    calc();
    const t = setInterval(calc, 60_000);
    return () => clearInterval(t);
  }, [targetDate]);

  return timeLeft;
}

// ============================================
// FEATURED EVENT CARD
// ============================================
function FeaturedCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const eventDate = new Date("2026-10-03T10:00:00");
  const countdown = useCountdown(eventDate);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemVariants}
    >
      <a
        href="https://planetarium.memora-experience.com"
        className="group block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="relative overflow-hidden rounded-2xl">
          {/* Image */}
          <div className="relative aspect-[16/9] sm:aspect-[2/1]">
            <img
              src="/Content/planitatio/The Cyprus Planetarium 2025.jpg"
              alt="Cyprus Planetarium"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
            {/* Simple dark gradient from bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/5" />
          </div>

          {/* Content overlay — bottom */}
          <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
            {/* Top row: label + countdown */}
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-[#E8C9A0]">
                Featured
              </span>
              <span className="h-3 w-px bg-white/20" />
              <span className="text-[11px] text-white/50">
                {countdown.days}d {countdown.hours}h {countdown.minutes}m
              </span>
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight mb-2 sm:mb-3">
              Planitario 2026
            </h3>

            {/* Date & location */}
            <div className="flex items-center gap-4 text-[13px] text-white/60 mb-5 sm:mb-6">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                Oct 3–4, 2026
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                Nicosia, Cyprus
              </span>
            </div>

            {/* CTA */}
            <span className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition-all group-hover:bg-[#D4A574] group-hover:text-white">
              Get Tickets
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

// ============================================
// NAVIGATION CARD
// ============================================
interface NavCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  badge?: string;
}

function NavCard({ title, description, image, href, badge }: NavCardProps) {
  return (
    <a href={href} className="group block">
      <div className="relative overflow-hidden rounded-2xl">
        <div className="aspect-[4/3]">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          {badge && (
            <span className="mb-2 inline-block text-[10px] font-medium uppercase tracking-[0.15em] text-white/50">
              {badge}
            </span>
          )}
          <h4 className="text-base sm:text-lg font-semibold text-white mb-1">
            {title}
          </h4>
          <p className="text-[13px] text-white/50 leading-relaxed line-clamp-2 mb-3">
            {description}
          </p>
          <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/70 transition-colors group-hover:text-white">
            Explore
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </a>
  );
}

// ============================================
// QUICK LINKS — simple text row
// ============================================
function QuickLinks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={itemVariants}
      className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
    >
      {[
        { label: "Business Events", href: "/business" },
        { label: "Contact Us", href: "/contact" },
      ].map((link) => (
        <a
          key={link.label}
          href={link.href}
          className="group flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-[#D4A574]"
        >
          {link.label}
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      ))}
    </motion.div>
  );
}

// ============================================
// MAIN EXPORT
// ============================================
export function SpotlightNavigation() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-60px" });

  const navItems: NavCardProps[] = [
    {
      title: "Events",
      description: "Planetarium, Boat Party, and unforgettable nights across Cyprus.",
      image: "/Content/yacth1.jpg",
      href: "/events",
      badge: "2 Upcoming",
    },
    {
      title: "Student Trips",
      description: "Epic 3-day adventures designed for students.",
      image: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600&h=400&fit=crop",
      href: "/student-trips",
      badge: "Coming Soon",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#FAF8F5] py-14 sm:py-20 lg:py-28"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-10 sm:mb-14"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574] mb-4">
            Explore
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
            Find Your Next
            <br />
            <span className="text-[#C8965F]">Experience</span>
          </h2>
        </motion.div>

        <div className="space-y-8 sm:space-y-10">
          {/* Featured Planitario */}
          <FeaturedCard />

          {/* Navigation Cards */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.2 },
              },
            }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {navItems.map((item) => (
              <motion.div key={item.title} variants={itemVariants}>
                <NavCard {...item} />
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Links */}
          <QuickLinks />
        </div>
      </div>
    </section>
  );
}
