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
  Sparkles,
  ChevronDown,
  Star,
  CreditCard,
  Anchor,
  Waves,
  Wine,
  Crown,
  Mail,
  Phone,
  User,
  CheckCircle,
  X,
  Lock,
  Shield,
  Sun,
} from "lucide-react";
import Image from "next/image";
import { GridPattern } from "@/components/ui/grid-pattern";

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
    <div className="border-b border-slate-200 last:border-0">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-cyan-600"
      >
        <span className="text-lg font-semibold text-slate-900 pr-4">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
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
  {
    src: "/Content/yacth1.jpg",
    alt: "Yacht party deck",
  },
  {
    src: "/Content/yacth2.avif",
    alt: "Sunset boat party",
  },
  {
    src: "/Content/yacth3.png",
    alt: "Luxury yacht interior",
  },
  {
    src: "/Content/yacth4.jpg",
    alt: "Boat party atmosphere",
  },
  {
    src: "/Content/yacth5.webp",
    alt: "Mediterranean cruise",
  },
  {
    src: "/Content/yacth6.jpg",
    alt: "Party on the sea",
  },
];

// ============================================
// FAQ DATA
// ============================================
const faqData = [
  {
    question: "What time does the boat depart?",
    answer:
      "The boat departs at 5:00 PM sharp from Ayia Napa Marina. Please arrive at least 30 minutes early (4:30 PM) for check-in and boarding. Late arrivals cannot be accommodated once the boat has left.",
  },
  {
    question: "What's included in the Open Bar package?",
    answer:
      "The Open Bar package (€70) includes unlimited beer, wine, vodka, rum, and whiskey mixed drinks, plus soft drinks and water for the duration of the cruise. Premium spirits and champagne are available at additional cost.",
  },
  {
    question: "What's included in the VIP Open Bar?",
    answer:
      "The VIP Open Bar package (€130) includes everything in the standard package PLUS premium spirits (Grey Goose, Hendricks Gin, premium whiskeys), champagne, exclusive VIP deck access with private bar, priority boarding, and a dedicated server.",
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
  const galleryRef = useRef(null);
  const ticketsRef = useRef(null);
  const faqRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isInfoInView = useInView(infoRef, { once: true, margin: "-100px" });
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" });
  const isTicketsInView = useInView(ticketsRef, { once: true, margin: "-100px" });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" });

  const eventDate = new Date("2026-07-20T17:00:00");

  const highlights = [
    {
      icon: Anchor,
      title: "Luxury Yacht",
      description: "Cruise on a stunning 30-meter yacht with multiple decks",
    },
    {
      icon: Music,
      title: "Live DJ Set",
      description: "Eirinei Sterianou spinning the best pop & house tracks",
    },
    {
      icon: Wine,
      title: "Open Bar",
      description: "Unlimited drinks throughout the entire cruise",
    },
    {
      icon: Sun,
      title: "Sunset Views",
      description: "Witness the magical Ayia Napa sunset from the sea",
    },
  ];

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
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/50 via-transparent to-blue-900/50" />
        </div>

        {/* Animated Waves Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
          <motion.div
            animate={{ x: [0, -100, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 left-0 right-0 h-20"
            style={{
              background: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120' preserveAspectRatio='none'%3E%3Cpath d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z' fill='%23ffffff' opacity='.3'%3E%3C/path%3E%3C/svg%3E\") repeat-x",
              backgroundSize: "1200px 120px",
              width: "200%",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-16 sm:pt-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-lg"
            >
              <Anchor className="h-3 w-3 sm:h-4 sm:w-4" />
              Summer Boat Party 2026
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 sm:mb-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
            >
              Ayia Napa
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Boat Party
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 sm:mb-8 px-2 text-base sm:text-lg md:text-xl text-white/80"
            >
              The ultimate summer experience. Dance under the sunset with{" "}
              <span className="font-semibold text-cyan-300">DJ Eirinei Sterianou</span>{" "}
              spinning the hottest pop & house tracks.
            </motion.p>

            {/* Date & Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 sm:mb-10 flex flex-col items-center gap-2 sm:gap-3 text-white/90 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6"
            >
              <span className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                <span className="font-medium">July 20, 2026</span>
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                <span className="font-medium">Ayia Napa Marina, Cyprus</span>
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-cyan-400" />
                <span className="font-medium">5:00 PM - 11:00 PM</span>
              </span>
            </motion.div>

            {/* Countdown */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6 sm:mb-10 flex flex-col items-center"
            >
              <p className="mb-3 sm:mb-4 text-xs sm:text-sm uppercase tracking-wider text-white/60">
                Set sail in
              </p>
              <div className="flex justify-center">
                <CountdownTimer targetDate={eventDate} />
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto sm:flex-row sm:justify-center"
            >
              <a
                href="#tickets"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-xl shadow-cyan-500/30 transition-all hover:shadow-2xl active:scale-95 sm:hover:scale-105"
              >
                <Ticket className="h-4 w-4 sm:h-5 sm:w-5" />
                Get Tickets
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-white/50"
            >
              <span className="text-xs uppercase tracking-widest">Scroll</span>
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* EVENT INFO SECTION */}
      {/* ============================================ */}
      <section ref={infoRef} className="relative overflow-hidden bg-zinc-50 py-12 sm:py-20 md:py-28">
        {/* Background */}
        <GridPattern
          className="absolute inset-0 z-0 opacity-30 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
          width={50}
          height={50}
          numSquares={30}
          maxOpacity={0.1}
        />
        <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-cyan-200/40 blur-[120px]" />
        <div className="absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-blue-200/40 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-medium text-cyan-600 shadow-sm">
              <Waves className="h-4 w-4" />
              About The Party
            </span>
            <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              The Ultimate{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
                Summer Experience
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Set sail from Ayia Napa on a stunning luxury yacht for an unforgettable
              sunset cruise. Dance to the beats of <strong>DJ Eirinei Sterianou</strong> as
              she spins the best pop and house tracks while you enjoy unlimited drinks
              and the breathtaking Mediterranean views.
            </p>
          </motion.div>

          {/* DJ Feature */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-16 mx-auto max-w-2xl"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-1">
              <div className="rounded-[22px] bg-white p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                  <div className="relative">
                    <div className="relative h-24 w-24 overflow-hidden rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-xl ring-4 ring-white">
                      <Image
                        src="/Content/DJ.png"
                        alt="DJ Eirinei Sterianou"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute -bottom-1 -right-1 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg"
                    >
                      <Music className="h-4 w-4" />
                    </motion.div>
                  </div>
                  <div className="text-center sm:text-left">
                    <p className="text-sm font-medium text-cyan-600 uppercase tracking-wider mb-1">Featured DJ</p>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Eirinei Sterianou</h3>
                    <p className="text-slate-600">
                      One of Cyprus&apos;s most exciting DJs, known for her electrifying
                      sets blending pop anthems with deep house grooves.
                    </p>
                    <div className="mt-3 flex items-center justify-center sm:justify-start gap-2">
                      <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-medium text-cyan-700">Pop</span>
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">House</span>
                      <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">Deep House</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg transition-transform group-hover:scale-110">
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PHOTO GALLERY SECTION */}
      {/* ============================================ */}
      <section ref={galleryRef} className="relative bg-white py-12 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isGalleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-600">
              <Sparkles className="h-4 w-4" />
              Gallery
            </span>
            <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
              What Awaits You
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Get a taste of the incredible experience that awaits
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isGalleryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TICKETS CTA SECTION */}
      {/* ============================================ */}
      <section
        id="tickets"
        ref={ticketsRef}
        className="relative overflow-hidden bg-gradient-to-br from-cyan-500 via-blue-500 to-cyan-600 py-12 sm:py-20 md:py-28"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTicketsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Ticket className="mx-auto mb-6 h-16 w-16 text-white/90" />
            <h2 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
              Get Your Tickets
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-white/90">
              Secure your spot on the boat. Both packages include boat cruise,
              DJ entertainment, and drinks.
            </p>

            {/* Pricing Cards */}
            <div className="mb-10 grid gap-4 sm:gap-6 sm:grid-cols-2">
              {[
                {
                  type: "Open Bar",
                  price: 70,
                  desc: "Unlimited standard drinks",
                  features: [
                    "Beer, wine & spirits",
                    "Soft drinks & water",
                    "Main deck access",
                    "6-hour cruise",
                  ],
                },
                {
                  type: "VIP Open Bar",
                  price: 130,
                  desc: "Premium experience",
                  popular: true,
                  features: [
                    "All standard drinks",
                    "Premium spirits",
                    "Champagne service",
                    "VIP deck access",
                    "Priority boarding",
                    "Dedicated server",
                  ],
                },
              ].map((ticket, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isTicketsInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => {
                    setSelectedTicketType({ type: ticket.type, price: ticket.price });
                    setIsPaymentModalOpen(true);
                  }}
                  className={`relative rounded-2xl p-5 sm:p-6 text-left transition-all hover:scale-105 active:scale-95 ${
                    ticket.popular
                      ? "bg-white text-slate-900 shadow-2xl ring-2 ring-cyan-300"
                      : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                  }`}
                >
                  {ticket.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-3 py-1 text-xs font-bold text-white flex items-center gap-1">
                      <Crown className="h-3 w-3" />
                      VIP
                    </span>
                  )}
                  <p
                    className={`text-sm font-medium ${
                      ticket.popular ? "text-slate-600" : "text-white/70"
                    }`}
                  >
                    {ticket.type}
                  </p>
                  <p
                    className={`my-2 text-3xl sm:text-4xl font-bold ${
                      ticket.popular ? "text-slate-900" : "text-white"
                    }`}
                  >
                    €{ticket.price}
                  </p>
                  <p
                    className={`text-xs sm:text-sm mb-4 ${
                      ticket.popular ? "text-slate-500" : "text-white/60"
                    }`}
                  >
                    {ticket.desc}
                  </p>
                  <ul className={`space-y-2 text-xs sm:text-sm ${ticket.popular ? "text-slate-600" : "text-white/80"}`}>
                    {ticket.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className={`h-4 w-4 ${ticket.popular ? "text-cyan-500" : "text-cyan-300"}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.button>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isTicketsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              onClick={() => setIsPaymentModalOpen(true)}
              className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 sm:px-10 sm:py-5 text-lg sm:text-xl font-bold text-slate-900 shadow-2xl transition-all hover:scale-105 active:scale-95"
            >
              <Ticket className="h-5 w-5 sm:h-6 sm:w-6" />
              Book Your Spot
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 transition-transform group-hover:translate-x-1" />
            </motion.button>

            {/* Notes */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isTicketsInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-white/70"
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
                Departs 5PM
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ SECTION */}
      {/* ============================================ */}
      <section ref={faqRef} className="relative bg-zinc-50 py-12 sm:py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Frequently Asked Questions
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
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
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
                className="font-semibold text-cyan-600 hover:text-cyan-700"
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
      <section className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <a
            href="/events"
            className="inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-cyan-600"
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
          className={`w-full rounded-xl border-2 bg-white px-4 text-slate-900 transition-all duration-200 ${
            Icon ? "pl-12" : "pl-4"
          } ${
            isFocused || hasValue
              ? "border-cyan-500 bg-cyan-50/30 shadow-lg shadow-cyan-500/10 pt-6 pb-2"
              : "border-slate-200 hover:border-slate-300 py-4"
          } focus:outline-none focus:ring-2 focus:ring-cyan-500/20`}
        />
        <label
          className={`pointer-events-none absolute transition-all duration-200 ${
            Icon ? "left-12" : "left-4"
          } ${
            isFocused || hasValue
              ? "top-2 text-xs font-semibold text-cyan-600"
              : "top-1/2 -translate-y-1/2 text-slate-500"
          }`}
        >
          {label}
          {required && <span className="ml-1 text-cyan-500">*</span>}
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
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onChange(Math.max(min, value - 1))}
        disabled={value <= min}
        className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-slate-200 bg-white text-slate-700 transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600"
      >
        <span className="text-xl font-bold">−</span>
      </motion.button>
      <motion.div
        key={value}
        initial={{ scale: 1.2, color: "#06b6d4" }}
        animate={{ scale: 1, color: "#0f172a" }}
        className="flex h-12 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-200"
      >
        <span className="text-2xl font-bold text-slate-900">{value}</span>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-slate-200 bg-white text-slate-700 transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-600"
      >
        <span className="text-xl font-bold">+</span>
      </motion.button>
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
    { type: "Open Bar", price: 70, desc: "Unlimited standard drinks" },
    { type: "VIP Open Bar", price: 130, desc: "Premium experience", popular: true },
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
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-white to-cyan-50/30 px-4 py-4 sm:px-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 shadow-lg"
                  >
                    <Ticket className="h-5 w-5 text-white" />
                  </motion.div>
                  <div>
                    <h2 className="text-lg font-bold text-slate-900">Purchase Tickets</h2>
                    <div className="flex items-center gap-2">
                      <div className="flex gap-1">
                        {["ticket", "details", "payment"].map((s, i) => (
                          <div
                            key={s}
                            className={`h-1.5 rounded-full transition-all ${
                              step === s
                                ? "w-6 bg-cyan-500"
                                : i < ["ticket", "details", "payment"].indexOf(step)
                                ? "w-1.5 bg-green-500"
                                : "w-1.5 bg-slate-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-slate-500">Boat Party 2026</p>
                    </div>
                  </div>
                </div>
                {step !== "success" && (
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="rounded-lg p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900"
                  >
                    <X className="h-5 w-5" />
                  </motion.button>
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
                          <motion.button
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ scale: 1.02, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => {
                              setInternalSelectedTicketType(ticket);
                              setTimeout(() => setStep("details"), 200);
                            }}
                            className={`group relative w-full overflow-hidden rounded-2xl border-2 p-5 text-left transition-all ${
                              ticket.popular
                                ? "border-cyan-500 bg-gradient-to-br from-cyan-50 to-blue-50 shadow-lg shadow-cyan-500/20"
                                : "border-slate-200 bg-white hover:border-cyan-300 hover:shadow-md"
                            }`}
                          >
                            {ticket.popular && (
                              <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 opacity-20 blur-xl"
                              />
                            )}
                            <div className="relative flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <p className="text-lg font-bold text-slate-900">{ticket.type}</p>
                                  {ticket.popular && (
                                    <motion.span
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-2.5 py-1 text-xs font-bold text-white shadow-md"
                                    >
                                      <Crown className="h-3 w-3" />
                                      VIP
                                    </motion.span>
                                  )}
                                </div>
                                <p className="text-sm text-slate-600">{ticket.desc}</p>
                                <div className="mt-3 flex items-center gap-2 text-xs text-slate-500">
                                  <CheckCircle className="h-3.5 w-3.5 text-green-500" />
                                  <span>Instant confirmation</span>
                                </div>
                              </div>
                              <div className="ml-4 text-right">
                                <p className="text-3xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                                  €{ticket.price}
                                </p>
                                <p className="text-xs text-slate-500 mt-1">per person</p>
                              </div>
                            </div>
                            <motion.div
                              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500"
                              initial={{ width: 0 }}
                              whileHover={{ width: "100%" }}
                              transition={{ duration: 0.3 }}
                            />
                          </motion.button>
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
                    <motion.div
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="relative overflow-hidden rounded-2xl border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-5 shadow-lg"
                    >
                      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-200/40 to-blue-200/40 blur-2xl" />
                      <div className="relative">
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Ticket className="h-5 w-5 text-cyan-600" />
                              <p className="text-lg font-bold text-slate-900">{currentTicket.type}</p>
                            </div>
                            <p className="text-sm text-slate-600">{currentTicket.desc}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                              €{currentTicket.price}
                            </p>
                            <p className="text-xs text-slate-500">per person</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between rounded-xl border-2 border-cyan-100 bg-white/80 p-4 backdrop-blur-sm">
                          <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-1">Quantity</label>
                            <p className="text-xs text-slate-500">Select number of tickets</p>
                          </div>
                          <QuantitySelector value={quantity} onChange={setQuantity} />
                        </div>
                      </div>
                    </motion.div>

                    {/* Customer Details */}
                    <div>
                      <div className="mb-4 flex items-center gap-2">
                        <User className="h-5 w-5 text-cyan-600" />
                        <h3 className="text-lg font-semibold text-slate-900">Your Details</h3>
                      </div>
                      <div className="space-y-5">
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
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
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
                          <span className="text-xl font-bold text-slate-900">€{total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setStep("ticket")}
                        className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-4 py-3.5 font-medium text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
                      >
                        <ArrowRight className="h-4 w-4 rotate-180" />
                        Back
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setStep("payment")}
                        disabled={!formData.fullName || !formData.email}
                        className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all hover:shadow-xl hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Continue to Payment
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </motion.button>
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
                        <CreditCard className="h-5 w-5 text-cyan-600" />
                        <h3 className="text-lg font-semibold text-slate-900">Payment Method</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <motion.button
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedPaymentMethod("card")}
                          className={`group relative overflow-hidden rounded-xl border-2 p-4 text-left transition-all ${
                            selectedPaymentMethod === "card"
                              ? "border-cyan-500 bg-gradient-to-br from-cyan-50 to-blue-50 shadow-lg"
                              : "border-slate-200 bg-white hover:border-cyan-300"
                          }`}
                        >
                          <div className="relative">
                            <CreditCard className={`mb-2 h-7 w-7 transition-colors ${
                              selectedPaymentMethod === "card" ? "text-cyan-600" : "text-slate-400"
                            }`} />
                            <p className={`text-sm font-semibold transition-colors ${
                              selectedPaymentMethod === "card" ? "text-slate-900" : "text-slate-600"
                            }`}>Card</p>
                            <p className="text-xs text-slate-500 mt-1">Visa, Mastercard</p>
                          </div>
                          {selectedPaymentMethod === "card" && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute right-2 top-2"
                            >
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            </motion.div>
                          )}
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedPaymentMethod("paypal")}
                          className={`group relative overflow-hidden rounded-xl border-2 p-4 text-left transition-all ${
                            selectedPaymentMethod === "paypal"
                              ? "border-cyan-500 bg-gradient-to-br from-cyan-50 to-blue-50 shadow-lg"
                              : "border-slate-200 bg-white hover:border-cyan-300"
                          }`}
                        >
                          <div className="relative">
                            <div className="mb-2 flex h-7 w-7 items-center justify-center rounded bg-gradient-to-br from-blue-500 to-blue-600">
                              <span className="text-xs font-bold text-white">PP</span>
                            </div>
                            <p className={`text-sm font-semibold transition-colors ${
                              selectedPaymentMethod === "paypal" ? "text-slate-900" : "text-slate-600"
                            }`}>PayPal</p>
                            <p className="text-xs text-slate-500 mt-1">Secure & Fast</p>
                          </div>
                          {selectedPaymentMethod === "paypal" && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute right-2 top-2"
                            >
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            </motion.div>
                          )}
                        </motion.button>
                      </div>
                    </div>

                    {selectedPaymentMethod === "card" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="space-y-5"
                      >
                        {/* Card Preview */}
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-600 via-blue-700 to-cyan-800 p-6 text-white shadow-2xl">
                          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                          <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-cyan-500/20 blur-xl" />
                          <div className="relative">
                            <div className="mb-6 flex items-center justify-between">
                              <div className="text-2xl font-bold">MEMORA</div>
                              <div className="h-8 w-12 rounded bg-gradient-to-br from-cyan-400 to-blue-400" />
                            </div>
                            <div className="mb-4 font-mono text-xl tracking-wider">
                              {formData.cardNumber || "•••• •••• •••• ••••"}
                            </div>
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="text-xs text-white/60 mb-1">CARDHOLDER</p>
                                <p className="text-sm font-medium uppercase">
                                  {formData.cardName || "YOUR NAME"}
                                </p>
                              </div>
                              <div>
                                <p className="text-xs text-white/60 mb-1">EXPIRES</p>
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
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 text-center">
                        <p className="text-slate-600">You will be redirected to PayPal to complete your payment</p>
                      </div>
                    )}

                    {/* Security Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center justify-center gap-2 rounded-xl border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-4"
                    >
                      <Shield className="h-5 w-5 text-green-600" />
                      <span className="text-sm font-medium text-slate-700">
                        Secure payment encrypted with SSL
                      </span>
                      <Lock className="h-4 w-4 text-green-600" />
                    </motion.div>

                    {/* Order Summary */}
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
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
                          <span className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">€{total.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setStep("details")}
                        className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-4 py-3.5 font-medium text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
                      >
                        <ArrowRight className="h-4 w-4 rotate-180" />
                        Back
                      </motion.button>
                      <form onSubmit={handleSubmit} className="flex-1">
                        <motion.button
                          type="submit"
                          disabled={
                            isProcessing ||
                            (selectedPaymentMethod === "card" &&
                              (!formData.cardNumber || !formData.cardName || !formData.expiryDate || !formData.cvv))
                          }
                          whileHover={!isProcessing ? { scale: 1.02 } : {}}
                          whileTap={!isProcessing ? { scale: 0.98 } : {}}
                          className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all hover:shadow-xl hover:shadow-cyan-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
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
                              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </>
                          )}
                        </motion.button>
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
                    <div className="relative mx-auto mb-6 h-24 w-24">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-2xl shadow-green-500/30"
                      >
                        <CheckCircle className="h-12 w-12 text-white" />
                      </motion.div>
                    </div>

                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mb-3 text-3xl font-bold text-slate-900"
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
                      <span className="font-semibold text-cyan-600">{formData.email || "your email"}</span>
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="mb-6 rounded-2xl border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 p-5 text-left"
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
                          <span className="font-medium text-slate-900">July 20, 2026 • 5PM</span>
                        </div>
                        <div className="flex justify-between border-t border-green-200 pt-2">
                          <span className="text-slate-600">Order Number</span>
                          <span className="font-mono font-bold text-green-600">BP-{Date.now().toString().slice(-8)}</span>
                        </div>
                      </div>
                    </motion.div>

                    <div className="flex flex-col gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={resetModal}
                        className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-cyan-500/30 transition-all hover:shadow-xl hover:shadow-cyan-500/40"
                      >
                        Done
                      </motion.button>
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href="/account"
                        className="flex items-center justify-center gap-2 rounded-xl border-2 border-slate-300 bg-white px-6 py-3.5 font-medium text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50"
                      >
                        <Ticket className="h-4 w-4" />
                        View My Tickets
                      </motion.a>
                    </div>
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
