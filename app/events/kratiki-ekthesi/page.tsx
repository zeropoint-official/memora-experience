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
  Utensils,
  ShoppingBag,
  Sparkles,
  ChevronDown,
  Star,
  Car,
  CreditCard,
  Baby,
  Handshake,
  Camera,
  Building2,
  Mail,
  Phone,
  User,
  MessageSquare,
  CheckCircle,
  X,
  Lock,
  Shield,
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
        className="flex w-full items-center justify-between py-5 text-left transition-colors hover:text-orange-600"
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
    src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop",
    alt: "Festival crowd",
  },
  {
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    alt: "Exhibition booth",
  },
  {
    src: "https://images.unsplash.com/photo-1472653431158-6364773b2a56?w=800&h=600&fit=crop",
    alt: "Fairground rides",
  },
  {
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop",
    alt: "Night lights",
  },
  {
    src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop",
    alt: "Food stalls",
  },
  {
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop",
    alt: "Entertainment",
  },
];

// ============================================
// SCHEDULE DATA
// ============================================
const scheduleData = [
  {
    day: "Day 1 - Wed, May 20",
    events: [
      { time: "10:00", title: "Grand Opening Ceremony", icon: Sparkles },
      { time: "11:00", title: "Exhibition Halls Open", icon: ShoppingBag },
      { time: "14:00", title: "Local Artisan Showcase", icon: Star },
      { time: "18:00", title: "Live Music Performance", icon: Music },
      { time: "20:00", title: "Fireworks Display", icon: Sparkles },
    ],
  },
  {
    day: "Day 2 - Thu, May 21",
    events: [
      { time: "10:00", title: "Agricultural Exhibition", icon: Star },
      { time: "12:00", title: "Traditional Food Festival", icon: Utensils },
      { time: "15:00", title: "Kids Entertainment Zone", icon: Baby },
      { time: "17:00", title: "Fashion Show", icon: Star },
      { time: "20:00", title: "DJ Night", icon: Music },
    ],
  },
  {
    day: "Day 3 - Fri, May 22",
    events: [
      { time: "10:00", title: "Business Networking", icon: Users },
      { time: "13:00", title: "Wine Tasting Experience", icon: Utensils },
      { time: "16:00", title: "Cultural Performances", icon: Music },
      { time: "19:00", title: "Comedy Night", icon: Star },
      { time: "21:00", title: "Concert Night", icon: Music },
    ],
  },
  {
    day: "Day 4 - Sat, May 23",
    events: [
      { time: "10:00", title: "Family Fun Day", icon: Baby },
      { time: "12:00", title: "International Cuisine Fair", icon: Utensils },
      { time: "15:00", title: "Talent Competition", icon: Star },
      { time: "18:00", title: "Special Guest Performance", icon: Music },
      { time: "22:00", title: "Midnight Party", icon: Sparkles },
    ],
  },
  {
    day: "Day 5 - Sun, May 24",
    events: [
      { time: "10:00", title: "Sunday Brunch Market", icon: Utensils },
      { time: "13:00", title: "Art Exhibition", icon: Camera },
      { time: "16:00", title: "Awards Ceremony", icon: Star },
      { time: "18:00", title: "Closing Ceremony", icon: Sparkles },
    ],
  },
];

// ============================================
// FAQ DATA
// ============================================
const faqData = [
  {
    question: "What are the opening hours?",
    answer:
      "The fair is open daily from 10:00 AM to 11:00 PM. On opening day (May 20), gates open at 9:30 AM for the grand opening ceremony. On closing day (May 25), the fair closes at 9:00 PM after the closing ceremony.",
  },
  {
    question: "Is there parking available?",
    answer:
      "Yes, there is ample parking available at the venue. We have over 2,000 parking spaces with dedicated areas for disabled visitors. Parking costs €5 per day. We also recommend using public transport as there are direct bus routes to the fairgrounds.",
  },
  {
    question: "Are children allowed? Is there an age restriction?",
    answer:
      "Kratiki Ekthesi is a family-friendly event! Children of all ages are welcome. Kids under 12 enter free when accompanied by a paying adult. We have dedicated kids' zones with age-appropriate entertainment and activities.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept cash, credit/debit cards, and contactless payments throughout the venue. ATM machines are available at multiple locations within the fairgrounds. Most vendors also accept mobile payments.",
  },
  {
    question: "Can I bring food and drinks?",
    answer:
      "Outside food and beverages are not permitted. However, we have a wide variety of food stalls and restaurants offering local and international cuisine at reasonable prices. Water fountains are available throughout the venue.",
  },
  {
    question: "Is the venue accessible for people with disabilities?",
    answer:
      "Yes, the entire venue is wheelchair accessible. We provide free wheelchair rentals at the main entrance, accessible restrooms, and designated viewing areas at all stages. Service animals are welcome.",
  },
];

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function KratikiEkthesiPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeDay, setActiveDay] = useState(0);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedTicketType, setSelectedTicketType] = useState<{
    type: string;
    price: number;
  } | null>(null);

  const heroRef = useRef(null);
  const infoRef = useRef(null);
  const galleryRef = useRef(null);
  const scheduleRef = useRef(null);
  const ticketsRef = useRef(null);
  const partnerRef = useRef(null);
  const faqRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isInfoInView = useInView(infoRef, { once: true, margin: "-100px" });
  const isGalleryInView = useInView(galleryRef, { once: true, margin: "-100px" });
  const isScheduleInView = useInView(scheduleRef, { once: true, margin: "-100px" });
  const isTicketsInView = useInView(ticketsRef, { once: true, margin: "-100px" });
  const isPartnerInView = useInView(partnerRef, { once: true, margin: "-100px" });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" });
  
  const [formSubmitted, setFormSubmitted] = useState(false);

  const eventDate = new Date("2026-05-20T10:00:00");

  const highlights = [
    {
      icon: ShoppingBag,
      title: "500+ Exhibitors",
      description: "Discover products from local and international vendors",
    },
    {
      icon: Music,
      title: "Live Entertainment",
      description: "Non-stop music, performances, and shows daily",
    },
    {
      icon: Utensils,
      title: "Food Paradise",
      description: "Over 100 food stalls with local and international cuisine",
    },
    {
      icon: Users,
      title: "100,000+ Visitors",
      description: "Join Cyprus's biggest annual gathering",
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
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop"
            alt="Kratiki Ekthesi"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-rose-900/40 via-transparent to-orange-900/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 pt-16 sm:pt-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-4 sm:mb-6 inline-flex items-center gap-1.5 sm:gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-semibold text-white shadow-lg"
            >
              <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
              Cyprus State Fair 2026
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 sm:mb-6 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
            >
              Kratiki Ekthesi
              <span className="block bg-gradient-to-r from-orange-300 to-rose-300 bg-clip-text text-transparent">
                2026
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 sm:mb-8 px-2 text-base sm:text-lg md:text-xl text-white/80"
            >
              The biggest exhibition event of the year. Six days of
              entertainment, discovery, and unforgettable experiences.
            </motion.p>

            {/* Date & Location */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6 sm:mb-10 flex flex-col items-center gap-2 sm:gap-3 text-white/90 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6"
            >
              <span className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400" />
                <span className="font-medium">May 20-25, 2026</span>
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400" />
                <span className="font-medium">Nicosia Fairgrounds, Cyprus</span>
              </span>
              <span className="flex items-center gap-1.5 sm:gap-2 text-sm sm:text-base">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400" />
                <span className="font-medium">10:00 AM - 11:00 PM</span>
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
                Event starts in
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
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-xl shadow-orange-500/30 transition-all hover:shadow-2xl active:scale-95 sm:hover:scale-105"
              >
                <Ticket className="h-4 w-4 sm:h-5 sm:w-5" />
                Get Tickets
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#partner"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-medium text-white backdrop-blur-sm transition-all active:scale-95 sm:hover:bg-white/20"
              >
                <Handshake className="h-4 w-4 sm:h-5 sm:w-5" />
                Become a Partner
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
        <div className="absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-orange-200/40 blur-[120px]" />
        <div className="absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-rose-200/40 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInfoInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm">
              <Star className="h-4 w-4" />
              About The Event
            </span>
            <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Cyprus&apos;s Biggest{" "}
              <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                Annual Fair
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Kratiki Ekthesi (State Fair) is Cyprus&apos;s premier exhibition
              event, bringing together hundreds of exhibitors, thousands of
              products, and non-stop entertainment for the whole family. From
              local artisans to international brands, from traditional cuisine
              to world-class performances.
            </p>
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
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 shadow-lg transition-transform group-hover:scale-110">
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
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600">
              <Camera className="h-4 w-4" />
              Gallery
            </span>
            <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
              Experience the Magic
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Glimpses from previous years and what awaits you at this year&apos;s fair
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
      {/* SCHEDULE SECTION */}
      {/* ============================================ */}
      <section
        id="schedule"
        ref={scheduleRef}
        className="relative overflow-hidden bg-slate-900 py-12 sm:py-20 md:py-28"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute -left-40 top-40 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-40 h-[400px] w-[400px] rounded-full bg-rose-500/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isScheduleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Clock className="h-4 w-4" />
              Schedule
            </span>
            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              6 Days of{" "}
              <span className="bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
                Non-Stop Action
              </span>
            </h2>
          </motion.div>

          {/* Day Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isScheduleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-10 flex flex-wrap justify-center gap-2"
          >
            {scheduleData.map((day, index) => (
              <button
                key={index}
                onClick={() => setActiveDay(index)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
                  activeDay === index
                    ? "bg-gradient-to-r from-orange-500 to-rose-500 text-white shadow-lg"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
              >
                Day {index + 1}
              </button>
            ))}
          </motion.div>

          {/* Schedule Content */}
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-2xl"
          >
            <h3 className="mb-8 text-center text-xl font-semibold text-white">
              {scheduleData[activeDay].day}
            </h3>
            <div className="space-y-4">
              {scheduleData[activeDay].events.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-4 rounded-xl bg-white/5 p-4 backdrop-blur-sm transition-colors hover:bg-white/10"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500/20 to-rose-500/20">
                    <event.icon className="h-6 w-6 text-orange-400" />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-white">{event.title}</p>
                  </div>
                  <span className="text-sm font-mono text-white/60">
                    {event.time}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TICKETS CTA SECTION */}
      {/* ============================================ */}
      <section
        id="tickets"
        ref={ticketsRef}
        className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-rose-500 to-orange-600 py-12 sm:py-20 md:py-28"
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
              Don&apos;t miss out on Cyprus&apos;s biggest annual fair. Purchase
              your tickets now and be part of an unforgettable experience.
            </p>

            {/* Pricing Cards */}
            <div className="mb-10 grid gap-4 sm:gap-6 sm:grid-cols-3">
              {[
                { type: "Day Pass", price: 15, desc: "Single day entry" },
                {
                  type: "Weekend Pass",
                  price: 35,
                  desc: "Sat & Sun entry",
                  popular: true,
                },
                { type: "Full Pass", price: 60, desc: "All 6 days entry" },
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
                      ? "bg-white text-slate-900 shadow-2xl ring-2 ring-orange-500"
                      : "bg-white/10 text-white backdrop-blur-sm hover:bg-white/20"
                  }`}
                >
                  {ticket.popular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-3 py-1 text-xs font-bold text-white">
                      POPULAR
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
                    className={`text-xs sm:text-sm ${
                      ticket.popular ? "text-slate-500" : "text-white/60"
                    }`}
                  >
                    {ticket.desc}
                  </p>
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
              Get Tickets Now
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
                <Baby className="h-4 w-4" />
                Kids under 12 free
              </span>
              <span className="flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                Secure payment
              </span>
              <span className="flex items-center gap-2">
                <Car className="h-4 w-4" />
                Free parking included
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PARTNER SECTION */}
      {/* ============================================ */}
      <section
        id="partner"
        ref={partnerRef}
        className="relative overflow-hidden bg-white py-12 sm:py-20 md:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left - Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isPartnerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600">
                <Handshake className="h-4 w-4" />
                Partnership Opportunities
              </span>
              <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
                Partner With{" "}
                <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                  Kratiki Ekthesi
                </span>
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Join Cyprus&apos;s biggest exhibition as a partner and connect
                with over 100,000 visitors. We offer various partnership
                opportunities tailored to your business needs.
              </p>

              {/* Benefits */}
              <div className="mt-8 space-y-4">
                {[
                  "Premium booth locations with high foot traffic",
                  "Brand visibility across all marketing channels",
                  "VIP networking events with industry leaders",
                  "Dedicated support from our partnership team",
                  "Custom activation opportunities",
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isPartnerInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-500" />
                    <span className="text-slate-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              {/* Partnership Types */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                {[
                  { label: "Exhibitor", icon: ShoppingBag },
                  { label: "Sponsor", icon: Star },
                  { label: "Media", icon: Camera },
                ].map((type, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center rounded-xl border border-slate-200 bg-slate-50 p-4 text-center"
                  >
                    <type.icon className="mb-2 h-6 w-6 text-orange-500" />
                    <span className="text-sm font-medium text-slate-700">
                      {type.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isPartnerInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {formSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-slate-200 bg-slate-50 p-8 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-rose-500">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-2xl font-bold text-slate-900">
                    Thank You!
                  </h3>
                  <p className="text-slate-600">
                    We&apos;ve received your inquiry and will get back to you
                    within 24-48 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setFormSubmitted(true);
                  }}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8"
                >
                  <h3 className="mb-6 text-xl font-bold text-slate-900">
                    Partnership Inquiry
                  </h3>

                  <div className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          required
                          placeholder="John Smith"
                          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 text-slate-900 placeholder-slate-400 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Company Name *
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                        <input
                          type="text"
                          required
                          placeholder="Your Company Ltd"
                          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 text-slate-900 placeholder-slate-400 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                        <input
                          type="email"
                          required
                          placeholder="john@company.com"
                          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 text-slate-900 placeholder-slate-400 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                        <input
                          type="tel"
                          placeholder="+357 99 123 456"
                          className="w-full rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 text-slate-900 placeholder-slate-400 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>
                    </div>

                    {/* Partnership Type */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Partnership Interest *
                      </label>
                      <select
                        required
                        className="w-full appearance-none rounded-xl border border-slate-300 bg-white py-3 pl-4 pr-10 text-slate-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      >
                        <option value="">Select an option</option>
                        <option value="exhibitor">Exhibitor / Booth</option>
                        <option value="sponsor">Event Sponsor</option>
                        <option value="media">Media Partner</option>
                        <option value="food">Food & Beverage Vendor</option>
                        <option value="entertainment">Entertainment Partner</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="mb-2 block text-sm font-medium text-slate-700">
                        Message
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                        <textarea
                          rows={4}
                          placeholder="Tell us about your company and partnership goals..."
                          className="w-full resize-none rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 text-slate-900 placeholder-slate-400 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/30"
                    >
                      Submit Inquiry
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
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
              Everything you need to know about Kratiki Ekthesi
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
                className="font-semibold text-orange-600 hover:text-orange-700"
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
            className="inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-orange-600"
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
  placeholder,
  required = false,
  icon: Icon,
  maxLength,
  pattern,
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
          pattern={pattern}
          className={`w-full rounded-xl border-2 bg-white px-4 text-slate-900 transition-all duration-200 ${
            Icon ? "pl-12" : "pl-4"
          } ${
            isFocused || hasValue
              ? "border-orange-500 bg-orange-50/30 shadow-lg shadow-orange-500/10 pt-6 pb-2"
              : "border-slate-200 hover:border-slate-300 py-4"
          } focus:outline-none focus:ring-2 focus:ring-orange-500/20`}
        />
        <label
          className={`pointer-events-none absolute transition-all duration-200 ${
            Icon ? "left-12" : "left-4"
          } ${
            isFocused || hasValue
              ? "top-2 text-xs font-semibold text-orange-600"
              : "top-1/2 -translate-y-1/2 text-slate-500"
          }`}
        >
          {label}
          {required && <span className="ml-1 text-orange-500">*</span>}
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
        className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-slate-200 bg-white text-slate-700 transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
      >
        <span className="text-xl font-bold">−</span>
      </motion.button>
      <motion.div
        key={value}
        initial={{ scale: 1.2, color: "#f97316" }}
        animate={{ scale: 1, color: "#0f172a" }}
        className="flex h-12 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-orange-50 to-rose-50 border-2 border-orange-200"
      >
        <span className="text-2xl font-bold text-slate-900">{value}</span>
      </motion.div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onChange(Math.min(max, value + 1))}
        disabled={value >= max}
        className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-slate-200 bg-white text-slate-700 transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:border-orange-500 hover:bg-orange-50 hover:text-orange-600"
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
    { type: "Day Pass", price: 15, desc: "Single day entry" },
    { type: "Weekend Pass", price: 35, desc: "Sat & Sun entry", popular: true },
    { type: "Full Pass", price: 60, desc: "All 6 days entry" },
  ];

  // Update internal state when prop changes
  useEffect(() => {
    if (selectedTicketType) {
      // Find matching ticket from options to get full details
      const matchingTicket = ticketOptions.find(t => t.type === selectedTicketType.type && t.price === selectedTicketType.price);
      setInternalSelectedTicketType(matchingTicket || { ...selectedTicketType, desc: "", popular: false });
      setStep("details");
    }
  }, [selectedTicketType]);

  const currentTicket: TicketType = internalSelectedTicketType || ticketOptions[1];
  const subtotal = currentTicket.price * quantity;
  const serviceFee = 2.5;
  const total = subtotal + serviceFee;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Mock payment processing with animation
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
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={step === "success" ? resetModal : onClose}
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl sm:rounded-3xl bg-white shadow-2xl"
            >
              {/* Header */}
              <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200 bg-gradient-to-r from-white to-orange-50/30 px-4 py-4 sm:px-6 backdrop-blur-sm">
                <div className="flex items-center gap-3">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 shadow-lg"
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
                                ? "w-6 bg-orange-500"
                                : i < ["ticket", "details", "payment"].indexOf(step)
                                ? "w-1.5 bg-green-500"
                                : "w-1.5 bg-slate-300"
                            }`}
                          />
                        ))}
                      </div>
                      <p className="text-xs text-slate-500">Kratiki Ekthesi 2026</p>
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
                      <h3 className="mb-4 text-lg font-semibold text-slate-900">Select Ticket Type</h3>
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
                                ? "border-orange-500 bg-gradient-to-br from-orange-50 to-rose-50 shadow-lg shadow-orange-500/20"
                                : "border-slate-200 bg-white hover:border-orange-300 hover:shadow-md"
                            }`}
                          >
                            {ticket.popular && (
                              <motion.div
                                animate={{ rotate: [0, 5, -5, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-orange-400 to-rose-400 opacity-20 blur-xl"
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
                                      className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-2.5 py-1 text-xs font-bold text-white shadow-md"
                                    >
                                      <Sparkles className="h-3 w-3" />
                                      POPULAR
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
                                <p className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                                  €{ticket.price}
                                </p>
                                <p className="text-xs text-slate-500 mt-1">per ticket</p>
                              </div>
                            </div>
                            <motion.div
                              className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-orange-500 to-rose-500"
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
                      className="relative overflow-hidden rounded-2xl border-2 border-orange-200 bg-gradient-to-br from-orange-50 via-white to-rose-50 p-5 shadow-lg"
                    >
                      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br from-orange-200/40 to-rose-200/40 blur-2xl" />
                      <div className="relative">
                        <div className="mb-4 flex items-center justify-between">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <Ticket className="h-5 w-5 text-orange-600" />
                              <p className="text-lg font-bold text-slate-900">{currentTicket.type}</p>
                            </div>
                            <p className="text-sm text-slate-600">{currentTicket.desc}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                              €{currentTicket.price}
                            </p>
                            <p className="text-xs text-slate-500">per ticket</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between rounded-xl border-2 border-orange-100 bg-white/80 p-4 backdrop-blur-sm">
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
                        <User className="h-5 w-5 text-orange-600" />
                        <h3 className="text-lg font-semibold text-slate-900">Your Details</h3>
                      </div>
                      <div className="space-y-5">
                        <FloatingInput
                          label="Full Name"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="John Smith"
                          required
                          icon={User}
                        />
                        <FloatingInput
                          label="Email Address"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          required
                          icon={Mail}
                        />
                        <FloatingInput
                          label="Phone Number"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+357 99 123 456"
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
                        className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:shadow-xl hover:shadow-orange-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
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
                        <CreditCard className="h-5 w-5 text-orange-600" />
                        <h3 className="text-lg font-semibold text-slate-900">Payment Method</h3>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <motion.button
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedPaymentMethod("card")}
                          className={`group relative overflow-hidden rounded-xl border-2 p-4 text-left transition-all ${
                            selectedPaymentMethod === "card"
                              ? "border-orange-500 bg-gradient-to-br from-orange-50 to-rose-50 shadow-lg"
                              : "border-slate-200 bg-white hover:border-orange-300"
                          }`}
                        >
                          {selectedPaymentMethod === "card" && (
                            <motion.div
                              layoutId="paymentMethod"
                              className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-100/50 to-rose-100/50"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
                          <div className="relative">
                            <CreditCard className={`mb-2 h-7 w-7 transition-colors ${
                              selectedPaymentMethod === "card" ? "text-orange-600" : "text-slate-400"
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
                              ? "border-orange-500 bg-gradient-to-br from-orange-50 to-rose-50 shadow-lg"
                              : "border-slate-200 bg-white hover:border-orange-300"
                          }`}
                        >
                          {selectedPaymentMethod === "paypal" && (
                            <motion.div
                              layoutId="paymentMethod"
                              className="absolute inset-0 rounded-xl bg-gradient-to-br from-orange-100/50 to-rose-100/50"
                              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                            />
                          )}
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
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-5"
                      >
                        {/* Card Preview */}
                        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 p-6 text-white shadow-2xl">
                          <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
                          <div className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-orange-500/20 blur-xl" />
                          <div className="relative">
                            <div className="mb-6 flex items-center justify-between">
                              <div className="text-2xl font-bold">MEMORA</div>
                              <div className="h-8 w-12 rounded bg-gradient-to-br from-orange-400 to-rose-400" />
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
                          placeholder="1234 5678 9012 3456"
                          required
                          icon={CreditCard}
                          maxLength={19}
                        />
                        <FloatingInput
                          label="Cardholder Name"
                          type="text"
                          value={formData.cardName}
                          onChange={(e) => setFormData({ ...formData, cardName: e.target.value.toUpperCase() })}
                          placeholder="JOHN SMITH"
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
                            placeholder="MM/YY"
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
                            placeholder="123"
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
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <Shield className="h-5 w-5 text-green-600" />
                      </motion.div>
                      <span className="text-sm font-medium text-slate-700">
                        Secure payment encrypted with SSL
                      </span>
                      <Lock className="h-4 w-4 text-green-600" />
                    </motion.div>

                    {/* Order Summary */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-lg"
                    >
                      <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-gradient-to-br from-orange-100 to-rose-100 blur-xl opacity-50" />
                      <div className="relative">
                        <div className="mb-4 flex items-center gap-2">
                          <CreditCard className="h-5 w-5 text-slate-600" />
                          <h4 className="text-sm font-semibold text-slate-900">Order Summary</h4>
                        </div>
                        <div className="space-y-3 text-sm">
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center justify-between rounded-lg bg-white/60 p-2.5 backdrop-blur-sm"
                          >
                            <span className="text-slate-600">
                              {currentTicket.type} × {quantity}
                            </span>
                            <span className="font-semibold text-slate-900">€{subtotal.toFixed(2)}</span>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center justify-between rounded-lg bg-white/60 p-2.5 backdrop-blur-sm"
                          >
                            <span className="text-slate-600">Service Fee</span>
                            <span className="font-semibold text-slate-900">€{serviceFee.toFixed(2)}</span>
                          </motion.div>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center justify-between rounded-xl border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-rose-50 p-4"
                          >
                            <span className="text-base font-bold text-slate-900">Total</span>
                            <span className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-transparent">
                              €{total.toFixed(2)}
                            </span>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>

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
                          className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:shadow-xl hover:shadow-orange-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
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
                    {/* Success Animation */}
                    <div className="relative mx-auto mb-6 h-24 w-24">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: "spring", bounce: 0.5 }}
                        className="absolute inset-0 flex items-center justify-center rounded-full bg-gradient-to-br from-green-500 to-emerald-500 shadow-2xl shadow-green-500/30"
                      >
                        <CheckCircle className="h-12 w-12 text-white" />
                      </motion.div>
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0] }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="absolute inset-0 rounded-full bg-green-500"
                      />
                    </div>

                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="mb-3 text-3xl font-bold text-slate-900"
                    >
                      Payment Successful! 🎉
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="mb-6 text-slate-600"
                    >
                      Your tickets have been confirmed. A confirmation email has been sent to{" "}
                      <span className="font-semibold text-orange-600">{formData.email || "your email"}</span>
                    </motion.p>

                    {/* Ticket Details Card */}
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
                          <span className="font-medium text-slate-900">Kratiki Ekthesi 2026</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Ticket Type</span>
                          <span className="font-medium text-slate-900">{currentTicket.type}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-600">Quantity</span>
                          <span className="font-medium text-slate-900">{quantity}</span>
                        </div>
                        <div className="flex justify-between border-t border-green-200 pt-2">
                          <span className="text-slate-600">Order Number</span>
                          <span className="font-mono font-bold text-green-600">ORD-{Date.now().toString().slice(-8)}</span>
                        </div>
                      </div>
                    </motion.div>

                    {/* Actions */}
                    <div className="flex flex-col gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={resetModal}
                        className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:shadow-xl hover:shadow-orange-500/40"
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

