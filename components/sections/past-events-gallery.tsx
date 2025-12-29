"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Camera,
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Star,
  Plane,
  PartyPopper,
} from "lucide-react";
import Link from "next/link";

// All events data
const allEventsData = [
  {
    id: 1,
    title: "Kratiki Ekthesi 2024",
    category: "Festival",
    date: "October 2024",
    location: "Nicosia",
    attendees: "5,000+",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    featured: true,
  },
  {
    id: 2,
    title: "Ayia Napa Boat Party",
    category: "Party",
    date: "August 2024",
    location: "Ayia Napa",
    attendees: "350",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
  },
  {
    id: 3,
    title: "Troodos Student Trip",
    category: "Adventure",
    date: "February 2024",
    location: "Troodos",
    attendees: "120",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop",
  },
  {
    id: 4,
    title: "Limassol Beach Festival",
    category: "Festival",
    date: "July 2024",
    location: "Limassol",
    attendees: "2,800+",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop",
  },
  {
    id: 5,
    title: "Paphos Wine Experience",
    category: "Experience",
    date: "September 2024",
    location: "Paphos",
    attendees: "180",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&h=400&fit=crop",
  },
  {
    id: 6,
    title: "Larnaca Sunset Cruise",
    category: "Party",
    date: "June 2024",
    location: "Larnaca",
    attendees: "200",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
  },
];

// Mobile slider data
const featuredEvents = allEventsData.filter(e => e.featured || e.category === "Festival");
const studentTrips = allEventsData.filter(e => e.category === "Adventure");
const partyEvents = allEventsData.filter(e => e.category === "Party" || e.category === "Experience");

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

// Event card component
interface EventCardProps {
  event: {
    id: number;
    title: string;
    category: string;
    date: string;
    location: string;
    attendees: string;
    image: string;
    featured?: boolean;
  };
  className?: string;
}

function EventCard({ event, className = "" }: EventCardProps) {
  return (
    <motion.div
      variants={cardVariants}
      className={`group relative overflow-hidden rounded-2xl ${className}`}
    >
      {/* Image */}
      <img
        src={event.image}
        alt={event.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

      {/* Category badge */}
      <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
        <span className="inline-flex items-center rounded-full bg-white/20 backdrop-blur-md px-2.5 py-1 text-[11px] sm:text-xs font-semibold text-white border border-white/20">
          {event.category}
        </span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
        <h4 className="font-bold text-white text-sm sm:text-base lg:text-lg mb-1.5 line-clamp-1">
          {event.title}
        </h4>
        
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-white/80 text-[11px] sm:text-xs">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {event.date}
          </span>
          <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {event.location}
          </span>
          <span className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            {event.attendees}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

// Mobile horizontal scroll slider component
interface EventSliderProps {
  title: string;
  icon: React.ElementType;
  iconColor: string;
  events: EventCardProps["event"][];
  viewAllHref?: string;
}

function EventSlider({ title, icon: Icon, iconColor, events, viewAllHref = "/experiences" }: EventSliderProps) {
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
      const scrollAmount = 300;
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

  if (events.length === 0) return null;

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center gap-2">
          <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${iconColor}`}>
            <Icon className="h-4 w-4 text-white" />
          </div>
          <h3 className="text-base font-semibold text-slate-900">{title}</h3>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all ${
              canScrollLeft
                ? "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                : "border-slate-200 bg-slate-50 text-slate-300 cursor-not-allowed"
            }`}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`flex h-7 w-7 items-center justify-center rounded-full border transition-all ${
              canScrollRight
                ? "border-slate-300 bg-white text-slate-700 hover:bg-slate-50"
                : "border-slate-200 bg-slate-50 text-slate-300 cursor-not-allowed"
            }`}
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-auto scrollbar-hide scroll-smooth pb-1 -mx-4 px-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {events.map((event) => (
          <div 
            key={event.id} 
            className="flex-shrink-0 w-[260px] h-[180px]"
            style={{ scrollSnapAlign: "start" }}
          >
            <EventCard event={event} className="h-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PastEventsGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-white py-16 lg:py-24">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-80 w-80 rounded-full bg-violet-100/50 blur-[120px]" />
        <div className="absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-purple-100/50 blur-[120px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Section Header */}
        <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-600 mb-4">
            <Camera className="h-4 w-4" />
            <span>Past Memories</span>
          </span>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-900 mb-3">
            Memories Made{" "}
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              Across Cyprus
            </span>
          </h2>

          <p className="max-w-xl text-base sm:text-lg text-slate-600">
            From Kratiki Ekthesi to Troodos adventures—explore the moments that brought Cyprus together.
          </p>
        </motion.div>

        {/* MOBILE: Slider Layout */}
        <div className="md:hidden space-y-8">
          <motion.div variants={itemVariants}>
            <EventSlider
              title="Featured Events"
              icon={Star}
              iconColor="bg-gradient-to-br from-amber-500 to-orange-500"
              events={featuredEvents}
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <EventSlider
              title="Student Trips"
              icon={Plane}
              iconColor="bg-gradient-to-br from-emerald-500 to-teal-500"
              events={studentTrips}
              viewAllHref="/student-trips"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <EventSlider
              title="All Events"
              icon={PartyPopper}
              iconColor="bg-gradient-to-br from-violet-500 to-purple-500"
              events={partyEvents}
            />
          </motion.div>
        </div>

        {/* DESKTOP: Grid Layout */}
        <motion.div
          variants={containerVariants}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {allEventsData.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              className={`h-[280px] ${event.featured ? 'md:col-span-2 lg:col-span-1' : ''}`}
            />
          ))}
        </motion.div>

        {/* View All Link - Desktop */}
        <motion.div variants={itemVariants} className="hidden md:flex justify-center mt-10">
          <Link
            href="/experiences"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-xl hover:shadow-violet-500/30"
          >
            View All Events
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          variants={itemVariants}
          className="mt-10 sm:mt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-16 py-6 sm:py-8 px-4 sm:px-6 rounded-2xl bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100"
        >
          <div className="text-center min-w-[70px]">
            <p className="text-2xl sm:text-3xl font-bold text-slate-900">50+</p>
            <p className="text-xs sm:text-sm text-slate-600">Events</p>
          </div>
          <div className="h-8 sm:h-12 w-px bg-violet-200 hidden sm:block" />
          <div className="text-center min-w-[70px]">
            <p className="text-2xl sm:text-3xl font-bold text-slate-900">10K+</p>
            <p className="text-xs sm:text-sm text-slate-600">Attendees</p>
          </div>
          <div className="h-8 sm:h-12 w-px bg-violet-200 hidden sm:block" />
          <div className="text-center min-w-[70px]">
            <p className="text-2xl sm:text-3xl font-bold text-slate-900">6+</p>
            <p className="text-xs sm:text-sm text-slate-600">Locations</p>
          </div>
          <div className="h-8 sm:h-12 w-px bg-violet-200 hidden sm:block" />
          <div className="text-center min-w-[70px]">
            <p className="text-2xl sm:text-3xl font-bold text-slate-900">5.0</p>
            <p className="text-xs sm:text-sm text-slate-600">Rating</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
