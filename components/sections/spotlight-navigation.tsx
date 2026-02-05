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
} from "lucide-react";

// ============================================
// SHARED STATE: Track active card for scroll hover
// ============================================
const activeCardState = {
  activeId: null as string | null,
  setActive: (id: string | null) => {
    if (activeCardState.activeId !== id) {
      activeCardState.activeId = id;
      activeCardState.listeners.forEach(listener => listener(id));
    }
  },
  listeners: new Set<(id: string | null) => void>(),
  subscribe: (listener: (id: string | null) => void) => {
    activeCardState.listeners.add(listener);
    return () => activeCardState.listeners.delete(listener);
  },
  findMostCenteredCard: (): string | null => {
    const allCards = document.querySelectorAll<HTMLElement>('[data-card-id]');
    if (allCards.length === 0) return null;

    const windowHeight = window.innerHeight;
    const centerY = windowHeight / 2;
    let mostCenteredCard: HTMLElement | null = null;
    let minDistance = Infinity;

    Array.from(allCards).forEach((card: HTMLElement) => {
      const rect = card.getBoundingClientRect();
      // Card must be visible and in viewport
      if (rect.top < windowHeight && rect.bottom > 0 && rect.left < window.innerWidth && rect.right > 0) {
        const cardCenterY = rect.top + rect.height / 2;
        const distanceFromCenter = Math.abs(cardCenterY - centerY);
        
        // Prefer cards that are more centered (within 60% of viewport height)
        if (distanceFromCenter < minDistance && rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2) {
          minDistance = distanceFromCenter;
          mostCenteredCard = card;
        }
      }
    });

    if (!mostCenteredCard) return null;
    const cardId = (mostCenteredCard as HTMLElement).getAttribute('data-card-id');
    return cardId;
  },
};

// ============================================
// HOOK: Scroll-based hover effect for mobile
// ============================================
function useScrollHover(cardId: string) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    // Subscribe to active card changes
    const unsubscribe = activeCardState.subscribe((activeId) => {
      setIsHovered(activeId === cardId);
    });

    const updateActiveCard = () => {
      const mostCentered = activeCardState.findMostCenteredCard();
      activeCardState.setActive(mostCentered);
    };

    const handleScroll = () => {
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Update immediately during scroll
      updateActiveCard();

      // After scroll stops, do a final check
      scrollTimeoutRef.current = setTimeout(() => {
        updateActiveCard();
      }, 150);
    };

    // Use Intersection Observer for more accurate detection
    const observer = new IntersectionObserver(
      () => {
        updateActiveCard();
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-15% 0px -15% 0px", // Only trigger when in center 70% of viewport
      }
    );

    // Only enable on mobile
    const isMobile = window.innerWidth < 640;
    
    if (isMobile) {
      window.addEventListener("scroll", handleScroll, { passive: true });
      observer.observe(card);
      // Initial check
      setTimeout(updateActiveCard, 100);
    }

    // Handle window resize
    const handleResize = () => {
      const stillMobile = window.innerWidth < 640;
      if (!stillMobile && activeCardState.activeId === cardId) {
        activeCardState.setActive(null);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
      unsubscribe();
      // If this card was active, clear it
      if (activeCardState.activeId === cardId) {
        activeCardState.setActive(null);
      }
    };
  }, [cardId]);

  return { cardRef, isHovered };
}

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
    <div className="flex items-center gap-1 sm:gap-2">
      {[
        { value: timeLeft.days, label: "D" },
        { value: timeLeft.hours, label: "H" },
        { value: timeLeft.minutes, label: "M" },
        { value: timeLeft.seconds, label: "S" },
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-0.5 sm:gap-1">
          <div className="flex h-7 w-7 sm:h-10 sm:w-10 items-center justify-center rounded-md sm:rounded-lg bg-white/20 backdrop-blur-sm font-mono text-xs sm:text-base font-bold text-white">
            {String(item.value).padStart(2, "0")}
          </div>
          <span className="text-[9px] sm:text-xs text-white/70 font-medium">
            {item.label}
          </span>
          {i < 3 && <span className="text-white/40 mx-0.5 hidden sm:inline">:</span>}
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
  const cardId = "planitario-hero";
  const { cardRef, isHovered } = useScrollHover(cardId);

  // March 15, 2025 event date
  const eventDate = new Date("2025-03-15T18:00:00");

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full"
    >
      <a href="https://planetarium.memora-experience.com" className="block group" target="_blank" rel="noopener noreferrer">
        <div ref={cardRef} data-card-id={cardId} className="relative overflow-hidden rounded-2xl sm:rounded-3xl">
          {/* Background Image */}
          <div className="relative h-[50vh] min-h-[320px] max-h-[450px] sm:h-[55vh] sm:min-h-[380px] sm:max-h-[550px] md:h-[50vh]">
            <img
              src="/Content/planitatio/The Cyprus Planetarium 2025.jpg"
              alt="Cyprus Planetarium"
              className={`absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${isHovered ? 'scale-105' : ''}`}
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
          <div className="absolute inset-0 flex flex-col justify-between p-4 sm:p-8">
            {/* Top: Featured Badge */}
            <div className="flex items-start justify-between gap-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-[#E8C9A0] to-[#D4A574] px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg shadow-[#D4A574]/30"
              >
                <Star className="h-3 w-3 sm:h-4 sm:w-4 fill-white text-white" />
                <span className="text-xs sm:text-sm font-bold text-white">
                  Featured
                </span>
              </motion.div>

              {/* Live indicator */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/10 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1.5 border border-white/20"
              >
                <span className="relative flex h-2 w-2 sm:h-2.5 sm:w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 sm:h-2.5 sm:w-2.5 rounded-full bg-emerald-500" />
                </span>
                <span className="text-[10px] sm:text-xs font-medium text-white/90">
                  Tickets
                </span>
              </motion.div>
            </div>

            {/* Bottom: Content */}
            <div className="space-y-2 sm:space-y-4">
              {/* Countdown - Hidden on very small screens */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
                transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
                className="hidden xs:block"
              >
                <p className="text-[10px] sm:text-sm text-white/60 mb-1 sm:mb-2 font-medium tracking-wide uppercase">
                  Starts in
                </p>
                <CountdownTimer targetDate={eventDate} />
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
                transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              >
                <h3 className="text-xl md:text-2xl lg:text-3xl font-medium tracking-normal leading-tight text-white mb-2 sm:mb-3">
                  Planitario
                  <span className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-transparent">
                    {" "}
                    2025
                  </span>
                </h3>
              </motion.div>

              {/* Date & Location - Stacked below title */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
                transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
                className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-white/80"
              >
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">March 15-16, 2025</span>
                  <span className="sm:hidden">Mar 15-16</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">Nicosia, Cyprus</span>
                  <span className="sm:hidden">Cyprus</span>
                </span>
              </motion.div>

              {/* CTA Button - Below date/location */}
              <motion.div
                initial={{ opacity: 0, filter: "blur(8px)" }}
                animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
                transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
                className="pt-2 sm:pt-3"
              >
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-slate-900 shadow-xl transition-all group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-500 group-hover:text-white group-hover:shadow-purple-500/25">
                  Get Tickets
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
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
  cardId: string;
}

function CarouselCard({
  title,
  description,
  image,
  href,
  gradient,
  icon: Icon,
  badge,
  cardId,
}: CarouselCardProps) {
  const { cardRef, isHovered } = useScrollHover(cardId);

  return (
    <a href={href} className="block group flex-shrink-0 w-[75vw] sm:w-[300px]">
      <div ref={cardRef} data-card-id={cardId} className="relative overflow-hidden rounded-xl h-[200px] sm:h-[240px]">
        {/* Background Image */}
        <img
          src={image}
          alt={title}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 ${isHovered ? 'scale-110' : ''}`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t ${gradient} opacity-80`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          {/* Top */}
          <div className="flex items-start justify-between">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-sm shadow-lg`}
            >
              <Icon className="h-5 w-5 text-white" />
            </div>
            {badge && (
              <span className="rounded-full bg-white/20 backdrop-blur-sm px-2.5 py-1 text-[11px] font-medium text-white border border-white/20">
                {badge}
              </span>
            )}
          </div>

          {/* Bottom */}
          <div>
            <h4 className="text-lg font-bold text-white mb-1">{title}</h4>
            <p className="text-white/80 text-xs leading-relaxed mb-2 line-clamp-2">
              {description}
            </p>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white group-hover:gap-2 transition-all">
              Explore
              <ArrowRight className="h-3.5 w-3.5" />
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
        "Discover Planetarium, Boat Party, and unforgettable nights across Cyprus.",
      image:
        "/Content/yacth1.jpg",
      href: "/events",
      gradient: "from-[#D4A574]/90 to-[#C8965F]/90",
      icon: PartyPopper,
      badge: "2 Upcoming",
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
      badge: "Coming Soon",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
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
      <div className="-mx-5 sm:-mx-0">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth pb-4 pl-5 pr-5 sm:pl-0 sm:pr-0 scroll-pl-5 sm:scroll-pl-0"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {carouselItems.map((item, index) => (
            <div 
              key={index} 
              style={{ scrollSnapAlign: "start" }}
            >
              <CarouselCard {...item} cardId={`carousel-card-${index}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator (Mobile) */}
      <div className="flex justify-center gap-2 mt-4 sm:hidden">
        {carouselItems.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all ${
              index === 0 ? "w-6 bg-[#D4A574]" : "w-1.5 bg-slate-300"
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
      color: "from-[#D4A574] to-[#C8965F]",
      bgHover: "hover:bg-[#FAF7F2]",
    },
  ];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
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
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={isInView ? { opacity: 1, filter: "blur(0px)" } : {}}
            transition={{ delay: 0.5 + index * 0.1, duration: 0.5, ease: "easeOut" }}
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
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] py-6 sm:py-12 lg:py-16">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50 via-slate-50 to-slate-100" />
      <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-purple-200/30 blur-[120px]" />
      <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#E8C9A0]/30 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Header - More compact on mobile */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4 sm:mb-8 flex items-center gap-2 sm:gap-3"
        >
          <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br from-[#D4A574] to-[#C8965F] shadow-lg">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold tracking-tight leading-tight">
              <span className="text-[#6B6B6B]">Explore</span>{" "}
              <span className="text-[#D4A574]">Memora</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 hidden sm:block">
              Find your next adventure
            </p>
          </div>
        </motion.div>

        {/* Main Content Stack */}
        <div className="space-y-5 sm:space-y-10">
          {/* Events & Student Trips Carousel */}
          <NavigationCarousel />

          {/* Featured Planitario Card */}
          <PlanitarioHeroCard />

          {/* Quick Links (Business, Contact) */}
          <QuickLinks />
        </div>
      </div>
    </section>
  );
}

