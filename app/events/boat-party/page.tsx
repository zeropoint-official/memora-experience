"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Ticket,
  Users,
  Music,
  ChevronDown,
  CreditCard,
  Anchor,
  Crown,
  Mail,
  Phone,
  User,
  CheckCircle,
  X,
  Lock,
  Shield,
  UtensilsCrossed,
  PartyPopper,
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
  { src: "/Content/yacth1.jpg", alt: "Yacht party deck" },
  { src: "/Content/yacth2.avif", alt: "Sunset boat party" },
  { src: "/Content/yacth3.png", alt: "Luxury yacht interior" },
  { src: "/Content/yacth4.jpg", alt: "Boat party atmosphere" },
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
    description: "Arrive at Ayia Napa Marina for check-in and boarding. Grab your welcome drink and find your spot.",
    icon: Anchor,
  },
  {
    time: "5:00 PM",
    title: "Departure & DJ Englezos",
    description: "We set sail! DJ Englezos kicks off the party with 1.5 hours of the best pop & house tracks as the sun starts to set.",
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
    title: "DJ MrUnknown Takes Over",
    description: "The energy goes up a notch as DJ MrUnknown brings the heat for the final stretch of the night.",
    icon: Music,
  },
  {
    time: "10:00 PM",
    title: "Return to Marina",
    description: "We dock back at Ayia Napa Marina. The memories stay with you forever.",
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
      "The boat departs at 5:00 PM sharp from Ayia Napa Marina. Please arrive at 4:30 PM for check-in and boarding. Late arrivals cannot be accommodated once the boat has left.",
  },
  {
    question: "What's included in the Normal ticket?",
    answer:
      "The Normal ticket (€80) includes the full boat cruise, open bar with standard drinks (beer, wine, spirits, soft drinks & water), finger foods, DJ entertainment, and all shows and performances.",
  },
  {
    question: "What's included in the VIP ticket?",
    answer:
      "The VIP ticket (€130) includes everything in the Normal ticket PLUS a premium open bar (top-shelf spirits, champagne), your own dedicated service, a spot close to the DJ, VIP couch seating, and priority boarding.",
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
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedTicketType, setSelectedTicketType] = useState<{
    type: string;
    price: number;
  } | null>(null);

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
                <span className="font-medium">Ayia Napa Marina, Cyprus</span>
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
                Set sail from Ayia Napa Marina on a luxury 30-meter yacht. Two incredible DJ sets,
                live dance shows, professional photographers, drone coverage, finger foods, and an
                open bar — all while the sun sets over the Mediterranean.
              </p>

              {/* Inline features — simple text, no cards */}
              <div className="mt-8 space-y-4">
                {[
                  "Two DJ sets by Englezos & MrUnknown",
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
              {/* DJ Englezos */}
              <div className="flex items-center justify-between py-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900">Englezos</h3>
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
              {/* DJ MrUnknown */}
              <div className="flex items-center justify-between py-5">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-900">MrUnknown</h3>
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
          <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
              Both packages include the full boat cruise, DJ sets, dance shows, photographer & drone coverage, and finger foods.
            </p>

            {/* Pricing Cards */}
            <div className="mb-10 grid gap-5 sm:grid-cols-2">
              {/* Normal Ticket */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isTicketsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                onClick={() => {
                  setSelectedTicketType({ type: "Normal", price: 80 });
                  setIsPaymentModalOpen(true);
                }}
                className="group rounded-2xl border border-slate-100 bg-white p-6 sm:p-8 text-left shadow-sm transition-all hover:shadow-lg hover:border-[#D4A574]/30"
              >
                <p className="text-sm font-medium text-slate-500 mb-1">Normal</p>
                <p className="text-4xl sm:text-5xl font-semibold text-slate-900 mb-2">
                  €80
                </p>
                <p className="text-sm text-slate-500 mb-5">per person</p>
                <ul className="space-y-3 text-sm text-slate-600 text-left">
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
                <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition-colors group-hover:bg-[#D4A574]">
                  Select Normal
                  <ArrowRight className="h-4 w-4" />
                </div>
              </motion.button>

              {/* VIP Ticket */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isTicketsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                onClick={() => {
                  setSelectedTicketType({ type: "VIP", price: 130 });
                  setIsPaymentModalOpen(true);
                }}
                className="group relative rounded-2xl border-2 border-[#D4A574] bg-white p-6 sm:p-8 text-left shadow-sm transition-all hover:shadow-lg"
              >
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#D4A574] px-3 py-1 text-xs font-semibold text-white flex items-center gap-1">
                  <Crown className="h-3 w-3" />
                  VIP
                </span>
                <p className="text-sm font-medium text-slate-500 mb-1">VIP</p>
                <p className="text-4xl sm:text-5xl font-semibold text-slate-900 mb-2">
                  €130
                </p>
                <p className="text-sm text-slate-500 mb-5">per person</p>
                <ul className="space-y-3 text-sm text-slate-600 text-left">
                  {[
                    "Premium open bar (top-shelf spirits, champagne)",
                    "Finger foods included",
                    "Your own dedicated service",
                    "Spot close to the DJ",
                    "VIP couch seating",
                    "Priority boarding",
                    "Full DJ sets & dance shows",
                    "Photographer & drone coverage",
                  ].map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle className="h-4 w-4 mt-0.5 flex-shrink-0 text-[#D4A574]" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#D4A574] py-3 text-sm font-semibold text-white transition-colors group-hover:bg-[#C8965F]">
                  Select VIP
                  <ArrowRight className="h-4 w-4" />
                </div>
              </motion.button>
            </div>

            {/* Notes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isTicketsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 text-sm text-slate-500"
            >
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                18+ Only
              </span>
              <span className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Secure payment
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

      {/* ============================================ */}
      {/* PAYMENT MODAL */}
      {/* ============================================ */}
      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => {
          setIsPaymentModalOpen(false);
          setSelectedTicketType(null);
        }}
        selectedTicketType={selectedTicketType}
      />
    </main>
  );
}

// ============================================
// FLOATING LABEL INPUT COMPONENT
// ============================================
function FloatingInput({
  label,
  type = "text",
  value,
  onChange,
  required = false,
  icon: Icon,
  maxLength,
  className = "",
}: {
  label: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  icon?: React.ElementType;
  maxLength?: number;
  pattern?: string;
  className?: string;
}) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className={`relative ${className}`}>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400 transition-colors" />
        )}
        <input
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder=""
          required={required}
          maxLength={maxLength}
          className={`w-full rounded-xl border bg-white px-4 text-slate-900 transition-all duration-200 ${
            Icon ? "pl-12" : "pl-4"
          } ${
            isFocused || hasValue
              ? "border-[#D4A574] shadow-sm pt-6 pb-2"
              : "border-slate-200 hover:border-slate-300 py-4"
          } focus:outline-none focus:ring-2 focus:ring-[#D4A574]/20`}
        />
        <label
          className={`pointer-events-none absolute transition-all duration-200 ${
            Icon ? "left-12" : "left-4"
          } ${
            isFocused || hasValue
              ? "top-2 text-xs font-medium text-[#D4A574]"
              : "top-1/2 -translate-y-1/2 text-slate-500"
          }`}
        >
          {label}
          {required && <span className="ml-1 text-[#D4A574]">*</span>}
        </label>
      </div>
    </div>
  );
}

// ============================================
// ANIMATED QUANTITY SELECTOR
// ============================================
function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 10,
}: {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}) {
  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#D4A574] hover:text-[#D4A574]"
      >
        <span className="text-xl font-bold">−</span>
      </button>
      <div className="flex h-12 w-16 items-center justify-center rounded-xl border border-[#D4A574]/30 bg-[#D4A574]/5">
        <span className="text-2xl font-bold text-slate-900">{value}</span>
      </div>
      <button
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#D4A574] hover:text-[#D4A574]"
      >
        <span className="text-xl font-bold">+</span>
      </button>
    </div>
  );
}

// ============================================
// PAYMENT MODAL COMPONENT
// ============================================
type TicketType = {
  type: string;
  price: number;
  desc: string;
  popular?: boolean;
};

function PaymentModal({
  isOpen,
  onClose,
  selectedTicketType,
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedTicketType: { type: string; price: number } | null;
}) {
  const [quantity, setQuantity] = useState(1);
  const [step, setStep] = useState<"ticket" | "details" | "payment" | "success">("ticket");
  const [internalSelectedTicketType, setInternalSelectedTicketType] = useState<TicketType | null>(
    selectedTicketType ? { ...selectedTicketType, desc: "", popular: false } : null
  );
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<"card" | "paypal">("card");
  const [isProcessing, setIsProcessing] = useState(false);

  const ticketOptions: TicketType[] = [
    { type: "Normal", price: 80, desc: "Standard open bar + finger foods" },
    { type: "VIP", price: 130, desc: "Premium open bar + VIP perks", popular: true },
  ];

  useEffect(() => {
    if (selectedTicketType) {
      const matchingTicket = ticketOptions.find(t => t.type === selectedTicketType.type && t.price === selectedTicketType.price);
      setInternalSelectedTicketType(matchingTicket || { ...selectedTicketType, desc: "", popular: false });
      setStep("details");
    }
  }, [selectedTicketType]);

  const currentTicket: TicketType = internalSelectedTicketType || ticketOptions[0];
  const subtotal = currentTicket.price * quantity;
  const serviceFee = 3.5;
  const total = subtotal + serviceFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsProcessing(false);
    setStep("success");
  };

  const resetModal = () => {
    setStep("ticket");
    setQuantity(1);
    setInternalSelectedTicketType(null);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      cardNumber: "",
      cardName: "",
      expiryDate: "",
      cvv: "",
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={step === "success" ? resetModal : onClose}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-white shadow-2xl"
            >
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-100 bg-white px-4 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4A574] shadow-sm">
                    <Ticket className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-slate-900">Purchase Tickets</h2>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {["ticket", "details", "payment"].map((s, i) => (
                          <div
                            key={s}
                            className={`h-1.5 rounded-full transition-all ${
                              step === s
                                ? "w-6 bg-[#D4A574]"
                                : i < ["ticket", "details", "payment"].indexOf(step)
                                ? "w-1.5 bg-green-500"
                                : "w-1.5 bg-slate-200"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-slate-500">Boat Party 2026</p>
                    </div>
                  </div>
                </div>
                {step !== "success" && (
                  <button
                    onClick={onClose}
                    className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                {step === "ticket" && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    <div>
                      <h3 className="mb-4 text-lg font-semibold text-slate-900">Select Package</h3>
                      <div className="space-y-3">
                        {ticketOptions.map((ticket, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              setInternalSelectedTicketType(ticket);
                              setTimeout(() => setStep("details"), 200);
                            }}
                            className={`relative w-full overflow-hidden rounded-2xl border p-5 text-left transition-all hover:shadow-md ${
                              ticket.popular
                                ? "border-[#D4A574] bg-[#D4A574]/5"
                                : "border-slate-200 bg-white hover:border-[#D4A574]/50"
                            }`}
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <p className="text-lg font-semibold text-slate-900">{ticket.type}</p>
                                  {ticket.popular && (
                                    <span className="inline-flex items-center gap-1 rounded-full bg-[#D4A574] px-2.5 py-1 text-xs font-semibold text-white">
                                      <Crown className="h-3 w-3" />
                                      VIP
                                    </span>
                                  )}
                                </div>
                                <p className="text-sm text-slate-600">{ticket.desc}</p>
                              </div>
                              <div className="ml-4 text-right">
                                <p className="text-3xl font-semibold text-slate-900">
                                  €{ticket.price}
                                </p>
                                <p className="text-xs text-slate-500 mt-1">per person</p>
                              </div>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === "details" && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    {/* Ticket Summary */}
                    <div className="rounded-2xl border border-[#D4A574]/20 bg-[#D4A574]/5 p-5">
                      <div className="mb-4 flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <Ticket className="h-5 w-5 text-[#D4A574]" />
                            <p className="text-lg font-semibold text-slate-900">{currentTicket.type}</p>
                          </div>
                          <p className="text-sm text-slate-600">{currentTicket.desc}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-semibold text-slate-900">
                            €{currentTicket.price}
                          </p>
                          <p className="text-xs text-slate-500">per person</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between rounded-xl border border-[#D4A574]/20 bg-white p-4">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">Quantity</label>
                          <p className="text-xs text-slate-500">Select number of tickets</p>
                        </div>
                        <QuantitySelector value={quantity} onChange={setQuantity} />
                      </div>
                    </div>

                    {/* Customer Details */}
                    <div>
                      <div className="mb-4 flex items-center gap-2">
                        <User className="h-5 w-5 text-[#D4A574]" />
                        <h3 className="text-lg font-semibold text-slate-900">Your Details</h3>
                      </div>
                      <div className="space-y-4">
                        <FloatingInput
                          label="Full Name"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          required
                          icon={User}
                        />
                        <FloatingInput
                          label="Email Address"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          icon={Mail}
                        />
                        <FloatingInput
                          label="Phone Number"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          icon={Phone}
                        />
                      </div>
                    </div>

                    {/* Order Summary */}
                    <div className="rounded-xl border border-slate-100 bg-[#FAF8F5] p-4">
                      <h4 className="mb-3 text-sm font-semibold text-slate-900">Order Summary</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">
                            {currentTicket.type} × {quantity}
                          </span>
                          <span className="font-medium text-slate-900">€{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Service Fee</span>
                          <span className="font-medium text-slate-900">€{serviceFee.toFixed(2)}</span>
                        </div>
                        <div className="border-t border-slate-200 pt-2 flex justify-between">
                          <span className="font-semibold text-slate-900">Total</span>
                          <span className="text-xl font-semibold text-slate-900">€{total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => setStep("ticket")}
                        className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3.5 font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
                      >
                        <ArrowRight className="h-4 w-4 rotate-180" />
                        Back
                      </button>
                      <button
                        onClick={() => setStep("payment")}
                        disabled={!formData.fullName || !formData.email}
                        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#D4A574] px-4 py-3.5 font-semibold text-white transition-all hover:bg-[#C8965F] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Continue to Payment
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === "payment" && (
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="space-y-6"
                  >
                    {/* Payment Method Selection */}
                    <div>
                      <div className="mb-4 flex items-center gap-2">
                        <CreditCard className="h-5 w-5 text-[#D4A574]" />
                        <h3 className="text-lg font-semibold text-slate-900">Payment Method</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <button
                          onClick={() => setSelectedPaymentMethod("card")}
                          className={`relative rounded-xl border p-4 text-left transition-all ${
                            selectedPaymentMethod === "card"
                              ? "border-[#D4A574] bg-[#D4A574]/5"
                              : "border-slate-200 bg-white hover:border-[#D4A574]/50"
                          }`}
                        >
                          <CreditCard className={`mb-2 h-7 w-7 transition-colors ${
                            selectedPaymentMethod === "card" ? "text-[#D4A574]" : "text-slate-400"
                          }`} />
                          <p className="text-sm font-semibold text-slate-900">Card</p>
                          <p className="text-xs text-slate-500 mt-1">Visa, Mastercard</p>
                          {selectedPaymentMethod === "card" && (
                            <CheckCircle className="absolute right-2 top-2 h-5 w-5 text-green-500" />
                          )}
                        </button>
                        <button
                          onClick={() => setSelectedPaymentMethod("paypal")}
                          className={`relative rounded-xl border p-4 text-left transition-all ${
                            selectedPaymentMethod === "paypal"
                              ? "border-[#D4A574] bg-[#D4A574]/5"
                              : "border-slate-200 bg-white hover:border-[#D4A574]/50"
                          }`}
                        >
                          <div className="mb-2 flex h-7 w-7 items-center justify-center rounded bg-blue-500">
                            <span className="text-xs font-bold text-white">PP</span>
                          </div>
                          <p className="text-sm font-semibold text-slate-900">PayPal</p>
                          <p className="text-xs text-slate-500 mt-1">Secure & Fast</p>
                          {selectedPaymentMethod === "paypal" && (
                            <CheckCircle className="absolute right-2 top-2 h-5 w-5 text-green-500" />
                          )}
                        </button>
                      </div>
                    </div>

                    {selectedPaymentMethod === "card" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-4"
                      >
                        {/* Card Preview */}
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 p-6 text-white shadow-xl">
                          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/5 blur-2xl" />
                          <div className="relative">
                            <div className="mb-6 flex items-center justify-between">
                              <div className="text-2xl font-bold">MEMORA</div>
                              <div className="h-8 w-12 rounded bg-[#D4A574]" />
                            </div>
                            <div className="mb-4 font-mono text-xl tracking-wider">
                              {formData.cardNumber || "•••• •••• •••• ••••"}
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-xs text-white/50 mb-1">CARDHOLDER</p>
                                <p className="text-sm font-medium uppercase">
                                  {formData.cardName || "YOUR NAME"}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs text-white/50 mb-1">EXPIRES</p>
                                <p className="text-sm font-medium">{formData.expiryDate || "MM/YY"}</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <FloatingInput
                          label="Card Number"
                          type="text"
                          value={formData.cardNumber}
                          onChange={(e) => {
                            const value = e.target.value.replace(/\s/g, "").replace(/\D/g, "");
                            const formatted = value.match(/.{1,4}/g)?.join(" ") || value;
                            setFormData({ ...formData, cardNumber: formatted });
                          }}
                          required
                          icon={CreditCard}
                          maxLength={19}
                        />
                        <FloatingInput
                          label="Cardholder Name"
                          type="text"
                          value={formData.cardName}
                          onChange={(e) => setFormData({ ...formData, cardName: e.target.value.toUpperCase() })}
                          required
                          icon={User}
                        />
                        <div className="grid grid-cols-2 gap-4">
                          <FloatingInput
                            label="Expiry Date"
                            type="text"
                            value={formData.expiryDate}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, "");
                              const formatted = value.length >= 2 ? `${value.slice(0, 2)}/${value.slice(2, 4)}` : value;
                              setFormData({ ...formData, expiryDate: formatted });
                            }}
                            required
                            maxLength={5}
                            className="col-span-1"
                          />
                          <FloatingInput
                            label="CVV"
                            type="text"
                            value={formData.cvv}
                            onChange={(e) => {
                              const value = e.target.value.replace(/\D/g, "").slice(0, 3);
                              setFormData({ ...formData, cvv: value });
                            }}
                            required
                            icon={Lock}
                            maxLength={3}
                            className="col-span-1"
                          />
                        </div>
                      </motion.div>
                    )}

                    {selectedPaymentMethod === "paypal" && (
                      <div className="rounded-xl border border-slate-100 bg-[#FAF8F5] p-6 text-center">
                        <p className="text-slate-600">You will be redirected to PayPal to complete your payment</p>
                      </div>
                    )}

                    {/* Security Badge */}
                    <div className="flex items-center justify-center gap-2 rounded-xl border border-green-200 bg-green-50 p-4">
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium text-slate-700">
                        Secure payment encrypted with SSL
                      </span>
                      <Lock className="h-4 w-4 text-green-600" />
                    </div>

                    {/* Order Summary */}
                    <div className="rounded-xl border border-slate-100 bg-[#FAF8F5] p-4">
                      <h4 className="mb-3 text-sm font-semibold text-slate-900">Order Summary</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">
                            {currentTicket.type} × {quantity}
                          </span>
                          <span className="font-medium text-slate-900">€{subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Service Fee</span>
                          <span className="font-medium text-slate-900">€{serviceFee.toFixed(2)}</span>
                        </div>
                        <div className="border-t border-slate-200 pt-2 flex justify-between">
                          <span className="font-semibold text-slate-900">Total</span>
                          <span className="text-xl font-semibold text-slate-900">€{total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => setStep("details")}
                        className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3.5 font-medium text-slate-700 transition-all hover:border-slate-300 hover:bg-slate-50"
                      >
                        <ArrowRight className="h-4 w-4 rotate-180" />
                        Back
                      </button>
                      <form onSubmit={handleSubmit} className="flex-1">
                        <button
                          type="submit"
                          disabled={
                            isProcessing ||
                            (selectedPaymentMethod === "card" &&
                              (!formData.cardNumber || !formData.cardName || !formData.expiryDate || !formData.cvv))
                          }
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4A574] px-4 py-3.5 font-semibold text-white transition-all hover:bg-[#C8965F] disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isProcessing ? (
                            <>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="h-5 w-5 rounded-full border-2 border-white border-t-transparent"
                              />
                              <span>Processing...</span>
                            </>
                          ) : (
                            <>
                              <Lock className="h-4 w-4" />
                              Pay €{total.toFixed(2)}
                            </>
                          )}
                        </button>
                      </form>
                    </div>
                  </motion.div>
                )}

                {step === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-8 text-center"
                  >
                    <div className="relative mx-auto mb-6 h-20 w-20">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center rounded-full bg-green-500 shadow-lg"
                      >
                        <CheckCircle className="h-10 w-10 text-white" />
                      </motion.div>
                    </div>

                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mb-3 text-xl md:text-2xl font-semibold text-slate-900"
                    >
                      You&apos;re Onboard! 🚢
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mb-6 text-slate-600"
                    >
                      Your tickets have been confirmed. A confirmation email has been sent to{" "}
                      <span className="font-semibold text-[#D4A574]">{formData.email || "your email"}</span>
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mb-6 rounded-2xl border border-green-200 bg-green-50 p-5 text-left"
                    >
                      <div className="mb-4 flex items-center gap-2">
                        <Ticket className="h-5 w-5 text-green-600" />
                        <p className="font-semibold text-slate-900">Ticket Details</p>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-slate-600">Event</span>
                          <span className="font-medium text-slate-900">Ayia Napa Boat Party 2026</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Package</span>
                          <span className="font-medium text-slate-900">{currentTicket.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Quantity</span>
                          <span className="font-medium text-slate-900">{quantity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Date</span>
                          <span className="font-medium text-slate-900">July 4, 2026 · 5 PM</span>
                        </div>
                        <div className="flex justify-between border-t border-green-200 pt-2">
                          <span className="text-slate-600">Order Number</span>
                          <span className="font-mono font-semibold text-green-600">BP-{Date.now().toString().slice(-8)}</span>
                        </div>
                      </div>
                    </motion.div>

                    <button
                      onClick={resetModal}
                      className="w-full rounded-xl bg-[#D4A574] px-6 py-3.5 font-semibold text-white transition-all hover:bg-[#C8965F]"
                    >
                      Done
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
