"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Sparkles,
  Star,
  Calendar,
  MapPin,
  ArrowRight,
  Plane,
  PartyPopper,
  Building2,
  Phone,
  Wrench,
  ChevronLeft,
  ChevronRight,
  History,
} from "lucide-react";

// ============================================
// COUNTDOWN TIMER COMPONENT
// ============================================
function CountdownTimer({ targetDate }: { targetDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex items-center gap-1.5 sm:gap-2">
      {[
        { value: timeLeft.days, label: "D" },
        { value: timeLeft.hours, label: "H" },
        { value: timeLeft.minutes, label: "M" },
        { value: timeLeft.seconds, label: "S" },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-1">
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm font-mono text-sm sm:text-base font-bold text-white">
            {String(item.value).padStart(2, "0")}
          </div>
          <span className="text-[10px] sm:text-xs text-white/70 font-medium">
            {item.label}
          </span>
          {i < 3 && <span className="text-white/40 mx-0.5">:</span>}
        </div>
      ))}
    </div>
  );
}

// ============================================
// FEATURED PLANITARIO CARD (Hero Treatment)
// ============================================
function PlanitarioHeroCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // March 15, 2025 event date
  const eventDate = new Date("2025-03-15T18:00:00");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full"
    >
      <a href="/planitario" className="block group">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background Image */}
          <div className="relative h-[65vh] min-h-[420px] max-h-[600px] md:h-[55vh] md:min-h-[380px]">
            <img
              src="/Content/planitatio/The Cyprus Planetarium 2025.jpg"
              alt="Cyprus Planetarium"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/40 via-transparent to-indigo-900/40" />

            {/* Animated Stars Background Effect */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute h-1 w-1 rounded-full bg-white"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 60}%`,
                  }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-between p-5 sm:p-8">
            {/* Top: Featured Badge */}
            <div className="flex items-start justify-between">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 px-4 py-2 shadow-lg shadow-amber-500/30"
              >
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Star className="h-4 w-4 fill-white text-white" />
                </motion.div>
                <span className="text-sm font-bold text-white">
                  Featured Event
                </span>
              </motion.div>

              {/* Live indicator */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-3 py-1.5 border border-white/20"
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-white/90">
                  Tickets Available
                </span>
              </motion.div>
            </div>

            {/* Bottom: Content */}
            <div className="space-y-4">
              {/* Countdown */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <p className="text-xs sm:text-sm text-white/60 mb-2 font-medium tracking-wide uppercase">
                  Event starts in
                </p>
                <CountdownTimer targetDate={eventDate} />
              </motion.div>

              {/* Title & Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                  Planitario
                  <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                    {" "}
                    2025
                  </span>
                </h3>
                <p className="text-white/70 text-sm sm:text-base max-w-md leading-relaxed">
                  Journey through the cosmos at Cyprus's most immersive
                  planetarium experience. A night of wonder awaits.
                </p>
              </motion.div>

              {/* Meta & CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2"
              >
                <div className="flex items-center gap-4 text-sm text-white/60">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" />
                    March 15-16, 2025
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4" />
                    Nicosia, Cyprus
                  </span>
                </div>

                <div className="sm:ml-auto">
                  <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-xl transition-all group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 group-hover:text-white group-hover:shadow-purple-500/25">
                    Get Tickets
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </a>
    </motion.div>
  );
}

// ============================================
// CAROUSEL CARD COMPONENT
// ============================================
interface CarouselCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
  gradient: string;
  icon: React.ElementType;
  badge?: string;
}

function CarouselCard({
  title,
  description,
  image,
  href,
  gradient,
  icon: Icon,
  badge,
}: CarouselCardProps) {
  return (
    <a href={href} className="block group flex-shrink-0 w-[85vw] sm:w-[340px]">
      <div className="relative overflow-hidden rounded-2xl h-[280px] sm:h-[320px]">
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-80`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-5">
          {/* Top */}
          <div className="flex items-start justify-between">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm shadow-lg`}
            >
              <Icon className="h-6 w-6 text-white" />
            </div>
            {badge && (
              <span className="rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white border border-white/20">
                {badge}
              </span>
            )}
          </div>

          {/* Bottom */}
          <div>
            <h4 className="text-2xl font-bold text-white mb-2">{title}</h4>
            <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-2">
              {description}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:gap-3 transition-all">
              Explore
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

// ============================================
// HORIZONTAL SCROLL CAROUSEL
// ============================================
function NavigationCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 360;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      return () => ref.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const carouselItems = [
    {
      title: "Events",
      description:
        "Discover Kratiki Ekthesi, festivals, and unforgettable nights across Cyprus.",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
      href: "/events",
      gradient: "from-orange-600/90 to-rose-600/90",
      icon: PartyPopper,
      badge: "12 Upcoming",
    },
    {
      title: "Student Trips",
      description:
        "Epic 3-day adventures designed for students. Create memories that last forever.",
      image:
        "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600&h=400&fit=crop",
      href: "/student-trips",
      gradient: "from-emerald-600/90 to-teal-600/90",
      icon: Plane,
      badge: "New Destinations",
    },
    {
      title: "Past Events",
      description:
        "Relive the magic. Browse our gallery of legendary events and unforgettable moments.",
      image:
        "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&h=400&fit=crop",
      href: "/past-events",
      gradient: "from-violet-600/90 to-purple-600/90",
      icon: History,
      badge: "50+ Events",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="relative"
    >
      {/* Section Label */}
      <div className="flex items-center justify-between mb-4 px-1">
        <h3 className="text-lg font-semibold text-slate-900">
          Explore Experiences
        </h3>

        {/* Desktop Navigation Arrows */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
              canScrollLeft
                ? "border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400"
                : "border-slate-200 bg-slate-50 text-slate-300 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
              canScrollRight
                ? "border-slate-300 bg-white text-slate-700 hover:bg-slate-50 hover:border-slate-400"
                : "border-slate-200 bg-slate-50 text-slate-300 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4 -mx-5 px-5 sm:-mx-0 sm:px-0"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {carouselItems.map((item, index) => (
          <div key={index} style={{ scrollSnapAlign: "start" }}>
            <CarouselCard {...item} />
          </div>
        ))}
      </div>

      {/* Scroll Indicator (Mobile) */}
      <div className="flex justify-center gap-2 mt-4 sm:hidden">
        {carouselItems.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              index === 0 ? "w-6 bg-orange-500" : "w-1.5 bg-slate-300"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ============================================
// QUICK LINKS (Icon Pills)
// ============================================
function QuickLinks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const links = [
    {
      title: "Business",
      description: "Corporate & B2B",
      icon: Building2,
      href: "/business",
      color: "from-blue-500 to-indigo-500",
      bgHover: "hover:bg-blue-50",
    },
    {
      title: "Contact",
      description: "Get Help",
      icon: Phone,
      href: "/contact",
      color: "from-rose-500 to-pink-500",
      bgHover: "hover:bg-rose-50",
    },
    {
      title: "Services",
      description: "What We Offer",
      icon: Wrench,
      href: "/services",
      color: "from-amber-500 to-orange-500",
      bgHover: "hover:bg-amber-50",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {/* Section Label */}
      <h3 className="text-lg font-semibold text-slate-900 mb-4 px-1">
        Quick Links
      </h3>

      {/* Links Grid */}
      <div className="grid grid-cols-3 gap-3">
        {links.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 + index * 0.1 }}
            className={`group flex flex-col items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 text-center transition-all hover:border-slate-300 hover:shadow-lg ${link.bgHover}`}
          >
            <div
              className={`flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-gradient-to-br ${link.color} shadow-lg transition-transform group-hover:scale-110`}
            >
              <link.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div>
              <p className="font-semibold text-slate-900 text-sm sm:text-base">
                {link.title}
              </p>
              <p className="text-xs text-slate-500 hidden sm:block">
                {link.description}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}

// ============================================
// MAIN EXPORT
// ============================================
export function SpotlightNavigation() {
  return (
    <section className="relative w-full overflow-hidden bg-slate-50 py-8 sm:py-12 lg:py-16">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-slate-50 to-slate-100" />
      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-purple-200/30 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-orange-200/30 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Optional Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 sm:mb-8 flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 shadow-lg">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Explore Memora
            </h2>
            <p className="text-sm text-slate-500">
              Find your next adventure
            </p>
          </div>
        </motion.div>

        {/* Main Content Stack */}
        <div className="space-y-8 sm:space-y-10">
          {/* Featured Planitario Card */}
          <PlanitarioHeroCard />

          {/* Events & Student Trips Carousel */}
          <NavigationCarousel />

          {/* Quick Links (Business, Contact, Services) */}
          <QuickLinks />
        </div>
      </div>
    </section>
  );
}

