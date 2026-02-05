"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Plane,
  Users,
  Star,
  Calendar,
  MapPin,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  PartyPopper,
  Utensils,
  Bed,
  Camera,
} from "lucide-react";
import Link from "next/link";

// Coming Soon placeholder - no trips available yet
const trips: Array<{
  id: number;
  destination: string;
  country: string;
  image: string;
  dates: string;
  price: string;
  originalPrice: string;
  spotsLeft: number;
  rating: number;
  features: string[];
}> = [];

const whatsIncluded = [
  { icon: Bed, text: "3-Night Accommodation" },
  { icon: Plane, text: "Return Flights" },
  { icon: PartyPopper, text: "Nightlife Experiences" },
  { icon: Utensils, text: "Selected Meals" },
  { icon: Camera, text: "Guided Activities" },
  { icon: Users, text: "Group Coordination" },
];

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
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

function TripCard({ trip, index }: { trip: typeof trips[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      custom={index}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <Link href={`/student-trips/${trip.destination.toLowerCase()}`}>
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-200/60 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-500/20">
          {/* Image */}
          <div className="relative h-48 sm:h-56 overflow-hidden">
            <motion.img
              src={trip.image}
              alt={trip.destination}
              className="h-full w-full object-cover"
              animate={{ scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* Spots left badge */}
            <div className="absolute top-4 left-4 flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1.5 text-xs font-semibold shadow-lg">
              <span className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-slate-700">Only {trip.spotsLeft} spots left</span>
            </div>

            {/* Rating badge */}
            <div className="absolute top-4 right-4 flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-sm px-2.5 py-1 text-xs font-semibold shadow-lg">
              <Star className="h-3.5 w-3.5 text-yellow-500 fill-yellow-500" />
              <span className="text-slate-700">{trip.rating}</span>
            </div>

            {/* Destination overlay */}
            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl md:text-2xl font-semibold tracking-normal leading-tight text-white">{trip.destination}</h3>
              <div className="flex items-center gap-1.5 text-white/80 text-sm">
                <MapPin className="h-3.5 w-3.5" />
                <span>{trip.country}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Date */}
            <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
              <Calendar className="h-4 w-4" />
              <span>{trip.dates}</span>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-4">
              {trip.features.map((feature, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                >
                  <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                  {feature}
                </span>
              ))}
            </div>

            {/* Price and CTA */}
            <div className="flex items-end justify-between pt-3 border-t border-slate-100">
              <div>
                <p className="text-xs text-slate-400 line-through">{trip.originalPrice}</p>
                <p className="text-2xl font-bold text-slate-900">
                  {trip.price}
                  <span className="text-sm font-normal text-slate-500">/person</span>
                </p>
              </div>
              <motion.div
                animate={{ x: isHovered ? 5 : 0 }}
                className="flex items-center gap-1 text-orange-500 font-semibold text-sm"
              >
                <span>Book Now</span>
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function StudentTripsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-20 lg:py-28">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-emerald-100/50 blur-[120px]" />
        <div className="absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-cyan-100/50 blur-[120px]" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-medium text-emerald-600">
              <Plane className="h-4 w-4" />
              <span>Epic Student Adventures</span>
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5"
          >
            <span className="text-[#6B6B6B]">3-Day Trips That</span>
            <br />
            <span className="text-[#D4A574]">Change Everything</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed"
          >
            Join hundreds of students on unforgettable European adventures. 
            All-inclusive packages with flights, accommodation, parties, and memories to last a lifetime.
          </motion.p>
        </div>

        {/* What's Included */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 lg:mb-16"
        >
          {whatsIncluded.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center gap-2 rounded-xl bg-white p-4 shadow-sm border border-slate-100"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/20">
                <item.icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium text-slate-600 text-center">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Trip Cards or Coming Soon */}
        {trips.length > 0 ? (
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {trips.map((trip, index) => (
              <TripCard key={trip.id} trip={trip} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center justify-center py-20 px-6 rounded-2xl bg-white/60 backdrop-blur-sm border-2 border-slate-200"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 shadow-lg mb-6">
              <Plane className="h-8 w-8 text-white" />
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-100 to-teal-100 px-6 py-3 border border-emerald-200 mb-4">
              <Sparkles className="h-5 w-5 text-emerald-600" />
              <span className="text-lg font-semibold text-emerald-700">Coming Soon</span>
            </div>
            <p className="text-center text-slate-600 max-w-md">
              We&apos;re working on exciting new student trips for you. Stay tuned!
            </p>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-12 lg:mt-16 text-center"
        >
          <Link href="/student-trips">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-emerald-500/25 transition-shadow hover:shadow-2xl hover:shadow-emerald-500/40"
            >
              <Sparkles className="h-5 w-5" />
              <span>View All Student Trips</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </Link>
          <p className="mt-4 text-sm text-slate-500">
            Early bird discounts available • Group booking perks • Flexible payment plans
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

