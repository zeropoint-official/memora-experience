"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Users,
  Music,
  ChevronDown,
  Anchor,
  Crown,
  Phone,
  CheckCircle,
  UtensilsCrossed,
  PartyPopper,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

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
    <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
      {[
        { value: timeLeft.days, label: "Days" },
        { value: timeLeft.hours, label: "Hours" },
        { value: timeLeft.minutes, label: "Min" },
        { value: timeLeft.seconds, label: "Sec" },
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-lg sm:rounded-xl bg-white/20 backdrop-blur-sm font-mono text-lg sm:text-2xl md:text-3xl font-bold text-white shadow-lg">
            {String(item.value).padStart(2, "0")}
          </div>
          <span className="mt-1.5 sm:mt-2 text-[10px] sm:text-xs text-white/70 font-medium uppercase tracking-wide">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

// ============================================
// FAQ ACCORDION COMPONENT
// ============================================
function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-[#D4A574]"
      >
        <span className="text-base sm:text-lg font-medium text-slate-900 pr-4">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 transition-all duration-300 ${
            isOpen ? "rotate-180 text-[#D4A574]" : "text-slate-400"
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-slate-600 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================
// GALLERY DATA
// ============================================
const galleryImages = [
  { src: "/Content/yacth2.avif", alt: "Sunset boat party" },
  { src: "/Content/yacth3.png", alt: "Luxury yacht interior" },
  { src: "/Content/yacth5.webp", alt: "Mediterranean cruise" },
  { src: "/Content/yacth6.jpg", alt: "Party on the sea" },
];

// ============================================
// TIMELINE DATA
// ============================================
const timelineEvents = [
  {
    time: "4:30 PM",
    title: "Boarding Begins",
    description: "Arrive at Protaras - Ayianapa for check-in and boarding. Grab your welcome drink and find your spot.",
    icon: Anchor,
  },
  {
    time: "5:00 PM",
    title: "Departure & DJ Truenoo",
    description: "We set sail! DJ Truenoo kicks off the party with 1.5 hours of the best pop & house tracks as the sun starts to set.",
    icon: Music,
  },
  {
    time: "6:30 PM",
    title: "Mystery Dance Show",
    description: "A surprise performance from our talented dancers — an unforgettable show you won't want to miss.",
    icon: PartyPopper,
  },
  {
    time: "7:00 PM",
    title: "Finger Foods Served",
    description: "Delicious finger foods served on deck. Refuel and enjoy the Mediterranean views.",
    icon: UtensilsCrossed,
  },
  {
    time: "7:30 PM",
    title: "DJ Viera Takes Over",
    description: "The energy goes up a notch as DJ Viera brings the heat for the final stretch of the night.",
    icon: Music,
  },
  {
    time: "10:00 PM",
    title: "Return to Marina",
    description: "We dock back at Protaras - Ayianapa. The memories stay with you forever.",
    icon: Anchor,
  },
];

// ============================================
// FAQ DATA
// ============================================
const faqData = [
  {
    question: "What time does the boat depart?",
    answer:
      "The boat departs at 5:00 PM sharp from Protaras - Ayianapa. Please arrive at 4:30 PM for check-in and boarding. Late arrivals cannot be accommodated once the boat has left.",
  },
  {
    question: "What's included in the Normal ticket?",
    answer:
      "The Normal ticket (€89) includes the full boat cruise, open bar with standard drinks (beer, wine, spirits, soft drinks & water), finger foods, DJ entertainment, and all shows and performances.",
  },
  {
    question: "How do I get the VIP experience?",
    answer:
      "First purchase a regular ticket, then call us at +357 96 751375 to reserve your VIP upgrade. VIP includes everything in the regular ticket plus a premium open bar (top-shelf spirits, champagne), your own dedicated service, a spot close to the DJ, VIP couch seating, and priority boarding. VIP spots are limited.",
  },
  {
    question: "Can I buy premium drinks with a Normal ticket?",
    answer:
      "Yes! Normal ticket holders can purchase premium drinks at an additional cost throughout the cruise. You still get the standard open bar included in your ticket.",
  },
  {
    question: "Is there a dress code?",
    answer:
      "Smart casual beach attire is recommended. Think stylish swimwear, cover-ups, summer dresses, and linen shirts. Bring a light jacket as it can get breezy in the evening. Non-marking shoes only on deck.",
  },
  {
    question: "What should I bring?",
    answer:
      "Bring your ID, sunscreen, sunglasses, camera, and good vibes! Towels are provided. We recommend leaving valuables at your accommodation as lockers have limited availability.",
  },
  {
    question: "Is there an age restriction?",
    answer:
      "Yes, this is an 18+ event. Valid ID is required for boarding. No exceptions will be made.",
  },
];

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function BoatPartyPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const heroRef = useRef(null);
  const infoRef = useRef(null);
  const timelineRef = useRef(null);
  const galleryRef = useRef(null);
  const ticketsRef = useRef(null);
  const faqRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isInfoInView = useInView(infoRef, { once: true, margin: "-100px" });
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" });
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" });
  const isTicketsInView = useInView(ticketsRef, { once: true, margin: "-100px" });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" });

  const eventDate = new Date("2026-07-04T17:00:00");

  // highlights removed — replaced with editorial layout below

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section
        ref={heroRef}
        className="relative min-h-screen w-full overflow-hidden"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/Content/yacth1.jpg"
            alt="Summer Boat Party"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-16 sm:pt-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-white/15 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white/90"
            >
              <Anchor className="h-3 w-3 sm:h-4 sm:w-4" />
              Summer 2026
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 sm:mb-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight text-white"
            >
              Ayia Napa{" "}
              <span className="text-[#D4A574]">Boat Party</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 sm:mb-8 px-2 text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto"
            >
              Two DJs, dance shows, drone coverage, finger foods, open bar — all on a luxury yacht under the Ayia Napa sunset.
            </motion.p>

            {/* Date & Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 sm:mb-10 flex flex-col items-center gap-2 sm:gap-3 text-white/90 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6"
            >
              <span className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-[#D4A574]" />
                <span className="font-medium">July 4, 2026</span>
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-[#D4A574]" />
                <span className="font-medium">Protaras - Ayianapa</span>
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-[#D4A574]" />
                <span className="font-medium">5:00 PM – 10:00 PM</span>
              </span>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6 sm:mb-10 flex flex-col items-center"
            >
              <p className="mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider text-white/50">
                Set sail in
              </p>
              <div className="flex justify-center">
                <CountdownTimer targetDate={eventDate} />
              </div>
            </motion.div>

            {/* CTA — ticket-shaped button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a href="#tickets">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-block cursor-pointer"
                >
                  <div
                    className="relative bg-[#D4A574] transition-colors group-hover:bg-[#C8965F]"
                    style={{
                      borderRadius: "14px",
                      clipPath: `polygon(
                        0 0, 100% 0,
                        100% calc(50% - 9px), calc(100% - 4.5px) 50%, 100% calc(50% + 9px),
                        100% 100%, 0 100%,
                        0 calc(50% + 9px), 4.5px 50%, 0 calc(50% - 9px)
                      )`,
                    }}
                  >
                    <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" style={{ borderRadius: "14px 14px 0 0" }} />
                    <div className="relative flex items-center justify-center gap-2.5 px-10 py-4">
                      <span className="text-base font-semibold text-white tracking-wide">
                        Get Tickets
                      </span>
                      <ArrowRight className="h-[18px] w-[18px] text-white/80 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </motion.div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* EVENT INFO SECTION — editorial layout */}
      {/* ============================================ */}
      <section ref={infoRef} className="relative overflow-hidden bg-[#FAF8F5] py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Top: description + feature image */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center mb-20">
            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574]">
                About The Party
              </p>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
                The ultimate sunset cruise{" "}
                <span className="text-[#D4A574]">experience</span>
              </h2>
              <p className="mt-5 text-slate-600 leading-relaxed">
                Set sail from Protaras - Ayianapa on a luxury 30-meter yacht. Two incredible DJ sets,
                live dance shows, professional photographers, drone coverage, finger foods, and an
                open bar — all while the sun sets over the Mediterranean.
              </p>

              {/* Inline features — simple text, no cards */}
              <div className="mt-8 space-y-4">
                {[
                  "Two DJ sets by Truenoo & Viera",
                  "Dance shows from talented performers",
                  "Professional photographers & drone coverage",
                  "Open bar & finger foods for everyone",
                  "5-hour cruise on a luxury yacht",
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-[#D4A574] flex-shrink-0" />
                    <span className="text-sm text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right — image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl"
            >
              <Image
                src="/Content/yacth3.png"
                alt="Luxury yacht experience"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          {/* DJs — clean lineup strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-3xl"
          >
            <p className="mb-6 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574]">
              Lineup
            </p>
            <div className="divide-y divide-slate-100">
              {/* DJ Truenoo */}
              <div className="flex items-center justify-between py-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Truenoo</h3>
                  <p className="text-sm text-slate-500 mt-0.5">Pop · House</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-900">5:00 PM</p>
                  <p className="text-xs text-slate-400 mt-0.5">Opening set · 1.5h</p>
                </div>
              </div>
              {/* Mystery Show */}
              <div className="flex items-center justify-between py-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Dance Show</h3>
                  <p className="text-sm text-slate-500 mt-0.5">Mystery performance</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-900">6:30 PM</p>
                  <p className="text-xs text-slate-400 mt-0.5">Live dancers</p>
                </div>
              </div>
              {/* DJ Viera */}
              <div className="flex items-center justify-between py-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Viera</h3>
                  <p className="text-sm text-slate-500 mt-0.5">House · Deep House</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-slate-900">7:30 PM</p>
                  <p className="text-xs text-slate-400 mt-0.5">Closing set</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TIMELINE SECTION */}
      {/* ============================================ */}
      <section ref={timelineRef} className="relative bg-white py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574]">
              Schedule
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
              Event{" "}
              <span className="text-[#D4A574]">Timeline</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-slate-600">
              Here&apos;s how the evening unfolds
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-slate-200" />

            <div className="space-y-8 sm:space-y-10">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isTimelineInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex gap-5 sm:gap-6"
                >
                  {/* Icon dot */}
                  <div className="relative z-10 flex h-12 w-12 sm:h-16 sm:w-16 flex-shrink-0 items-center justify-center rounded-xl bg-[#D4A574] text-white shadow-sm">
                    <event.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1 sm:pt-2">
                    <p className="text-xs font-medium uppercase tracking-wider text-[#D4A574] mb-1">
                      {event.time}
                    </p>
                    <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-1">
                      {event.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PHOTO GALLERY SECTION */}
      {/* ============================================ */}
      <section ref={galleryRef} className="relative bg-[#FAF8F5] py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574]">
              Gallery
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
              What Awaits{" "}
              <span className="text-[#D4A574]">You</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Get a taste of the incredible experience that awaits
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 max-w-4xl mx-auto">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isGalleryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TICKETS SECTION */}
      {/* ============================================ */}
      <section
        id="tickets"
        ref={ticketsRef}
        className="relative bg-white py-16 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTicketsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574]">
              Tickets
            </p>
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
              Get Your{" "}
              <span className="text-[#D4A574]">Tickets</span>
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-600">
              Includes the full boat cruise, two DJ sets, dance shows, photographer & drone coverage, open bar, and finger foods.
            </p>

            {/* Ticket Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTicketsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mx-auto max-w-lg rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 text-left shadow-sm"
            >
              <p className="text-4xl sm:text-5xl font-semibold text-slate-900 mb-2">
                €89
              </p>
              <p className="text-sm text-slate-500 mb-6">per person</p>
              <ul className="space-y-3 text-sm text-slate-600 mb-6">
                {[
                  "Standard open bar (beer, wine, spirits, soft drinks)",
                  "Finger foods included",
                  "Can purchase premium drinks on board",
                  "Full DJ sets & dance shows",
                  "Photographer & drone coverage",
                  "5-hour sunset cruise",
                ].map((feature, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#D4A574]" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                disabled
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 py-3.5 text-sm font-semibold text-white opacity-80 cursor-not-allowed"
              >
                <ExternalLink className="h-4 w-4" />
                Buy Tickets — Coming Soon
              </button>
              <p className="mt-2 text-center text-xs text-slate-400">
                Online ticket sales opening soon
              </p>
            </motion.div>

            {/* VIP Upgrade Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTicketsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto mt-5 max-w-lg rounded-xl border border-[#D4A574]/20 bg-[#D4A574]/5 p-5 sm:p-6"
            >
              <div className="flex items-center gap-2 mb-3">
                <Crown className="h-4 w-4 text-[#D4A574]" />
                <p className="text-sm font-semibold text-slate-900">Want the VIP experience?</p>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                Upgrade to VIP for premium open bar (top-shelf spirits, champagne), dedicated service, seating close to the DJ, VIP couch area, and priority boarding. First purchase a regular ticket, then call us to reserve your VIP spot.
              </p>
              <a
                href="tel:+35796751375"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#D4A574] transition-colors hover:text-[#C8965F]"
              >
                <Phone className="h-4 w-4" />
                +357 96 751375
              </a>
              <p className="mt-1 text-xs text-slate-500">VIP spots are limited</p>
            </motion.div>

            {/* Notes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isTicketsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-slate-500"
            >
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                18+ Only
              </span>
              <span className="flex items-center gap-2">
                <Anchor className="h-4 w-4" />
                Departs 5 PM
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ SECTION */}
      {/* ============================================ */}
      <section ref={faqRef} className="relative bg-[#FAF8F5] py-16 sm:py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574]">
              FAQ
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
              Frequently Asked{" "}
              <span className="text-[#D4A574]">Questions</span>
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to know about the boat party
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm sm:p-8"
          >
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openFaq === index}
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 text-center"
          >
            <p className="text-slate-600">
              Still have questions?{" "}
              <a
                href="/contact"
                className="font-semibold text-[#D4A574] hover:text-[#C8965F] transition-colors"
              >
                Contact us
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BACK TO EVENTS */}
      {/* ============================================ */}
      <section className="border-t border-slate-100 bg-[#FAF8F5] py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <a
            href="/events"
            className="inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-[#D4A574]"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to All Events
          </a>
        </div>
      </section>

    </main>
  );
}
