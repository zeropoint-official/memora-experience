"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Camera,
  Calendar,
  MapPin,
  Users,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Play,
} from "lucide-react";
import Link from "next/link";

const pastEvents = [
  {
    id: 1,
    title: "Kratiki Ekthesi 2024",
    category: "Festival",
    date: "October 2024",
    location: "Nicosia, Cyprus",
    attendees: "5,000+",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    images: [],
    featured: true,
  },
  {
    id: 2,
    title: "Ayia Napa Boat Party",
    category: "Party",
    date: "August 2024",
    location: "Ayia Napa, Cyprus",
    attendees: "350",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop",
    images: [],
  },
  {
    id: 3,
    title: "Troodos Student Trip",
    category: "Adventure",
    date: "February 2024",
    location: "Troodos, Cyprus",
    attendees: "120",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop",
    images: [],
  },
  {
    id: 4,
    title: "Limassol Beach Festival",
    category: "Festival",
    date: "July 2024",
    location: "Limassol, Cyprus",
    attendees: "2,800+",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop",
    images: [],
  },
  {
    id: 5,
    title: "Paphos Wine Experience",
    category: "Experience",
    date: "September 2024",
    location: "Paphos, Cyprus",
    attendees: "180",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=600&h=400&fit=crop",
    images: [],
  },
  {
    id: 6,
    title: "Larnaca Sunset Cruise",
    category: "Party",
    date: "June 2024",
    location: "Larnaca, Cyprus",
    attendees: "200",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&h=400&fit=crop",
    images: [],
  },
];

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

function EventCard({ event, onClick }: { event: typeof pastEvents[0]; onClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
        event.featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      <div className={`relative ${event.featured ? "h-[400px] md:h-full" : "h-64"}`}>
        {/* Image */}
        <motion.img
          src={event.image}
          alt={event.title}
          className="absolute inset-0 h-full w-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-md px-3 py-1.5 text-xs font-semibold text-white border border-white/20">
            {event.category}
          </span>
        </div>

        {/* Play button for featured */}
        {event.featured && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0.7, scale: isHovered ? 1.1 : 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30 transition-transform">
              <Play className="h-6 w-6 text-white fill-white ml-1" />
            </div>
          </motion.div>
        )}

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
          <h3 className={`font-bold text-white mb-2 ${event.featured ? "text-2xl sm:text-3xl" : "text-lg"}`}>
            {event.title}
          </h3>
          
          <div className="flex flex-wrap items-center gap-3 text-white/80 text-xs sm:text-sm">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5" />
              {event.date}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="h-3.5 w-3.5" />
              {event.location}
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              {event.attendees}
            </span>
          </div>

          {/* Hover indicator */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
            className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-white"
          >
            <Camera className="h-4 w-4" />
            <span>View Gallery</span>
            <ArrowRight className="h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function LightboxModal({
  event,
  onClose,
}: {
  event: typeof pastEvents[0];
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = event.images.length > 0 ? event.images : [event.image];

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Image */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-5xl w-full"
      >
        <img
          src={images[currentIndex]}
          alt={event.title}
          className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
        />

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === index ? "w-6 bg-white" : "w-2 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Event info */}
        <div className="mt-4 text-center text-white">
          <h3 className="text-xl font-bold">{event.title}</h3>
          <p className="text-white/70 text-sm mt-1">
            {event.date} • {event.location}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function PastEventsGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedEvent, setSelectedEvent] = useState<typeof pastEvents[0] | null>(null);

  return (
    <>
      <section ref={ref} className="relative overflow-hidden bg-white py-20 lg:py-28">
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
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <motion.div variants={itemVariants} className="mb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-600">
                  <Camera className="h-4 w-4" />
                  <span>Past Memories</span>
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4"
              >
                Memories Made
                <br />
                <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
                  Across Cyprus
                </span>
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="max-w-xl text-lg text-slate-600"
              >
                From Kratiki Ekthesi to Troodos adventures—explore the moments 
                that brought Cyprus together. Your next memory awaits.
              </motion.p>
            </div>

            <motion.div variants={itemVariants}>
              <Link href="/experiences">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-white px-6 py-3 font-semibold text-slate-900 transition-all hover:bg-slate-900 hover:text-white"
                >
                  <span>View All Events</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Gallery Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 auto-rows-[200px] md:auto-rows-[250px]"
          >
            {pastEvents.map((event) => (
              <EventCard
                key={event.id}
                event={event}
                onClick={() => setSelectedEvent(event)}
              />
            ))}
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 lg:gap-16 py-8 px-6 rounded-2xl bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100"
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">50+</p>
              <p className="text-sm text-slate-600">Events Hosted</p>
            </div>
            <div className="h-12 w-px bg-violet-200 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">10,000+</p>
              <p className="text-sm text-slate-600">Happy Attendees</p>
            </div>
            <div className="h-12 w-px bg-violet-200 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">6+</p>
              <p className="text-sm text-slate-600">Cyprus Locations</p>
            </div>
            <div className="h-12 w-px bg-violet-200 hidden sm:block" />
            <div className="text-center">
              <p className="text-3xl font-bold text-slate-900">5.0</p>
              <p className="text-sm text-slate-600">Average Rating</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <LightboxModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

