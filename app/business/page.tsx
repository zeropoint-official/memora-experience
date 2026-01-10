"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Handshake,
  Users,
  TrendingUp,
  Award,
  Star,
  ShoppingBag,
  Utensils,
  Camera,
  Music,
  Wrench,
  Calendar,
  MapPin,
  CheckCircle,
  Building2,
  Mail,
  Phone,
  User,
  MessageSquare,
  ChevronDown,
  Target,
  Eye,
  Megaphone,
  Sparkles,
  Quote,
} from "lucide-react";
import Image from "next/image";
import { GridPattern } from "@/components/ui/grid-pattern";

// ============================================
// PARTNER LOGOS
// ============================================
const partnerLogos = [
  "/Content/logos/Red Bull Energy Logo.png",
  "/Content/logos/Shell Logo.png",
  "/Content/logos/images_logos_Client1.png",
  "/Content/logos/images_logos_Client2.png",
  "/Content/logos/images_logos_Client3.png",
  "/Content/logos/images_logos_Client11.png",
];

// ============================================
// PARTNERSHIP TYPES
// ============================================
const partnershipTypes = [
  {
    id: "sponsor",
    title: "Event Sponsor",
    description:
      "Maximum brand visibility with logo placement, VIP access, and inclusion in all marketing materials.",
    icon: Award,
    benefits: [
      "Logo on all event materials",
      "VIP area access",
      "Social media promotion",
      "Speaking opportunities",
    ],
    color: "from-orange-500 to-rose-500",
  },
  {
    id: "exhibitor",
    title: "Exhibitor / Booth",
    description:
      "Showcase your products or services directly to thousands of engaged attendees.",
    icon: ShoppingBag,
    benefits: [
      "Premium booth location",
      "Direct customer access",
      "Lead generation",
      "Product demonstrations",
    ],
    color: "from-blue-500 to-indigo-500",
  },
  {
    id: "vendor",
    title: "Food & Beverage",
    description:
      "Join our curated selection of food vendors in high-traffic locations.",
    icon: Utensils,
    benefits: [
      "High foot traffic areas",
      "Exclusive zones",
      "Brand exposure",
      "Revenue opportunities",
    ],
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: "media",
    title: "Media Partner",
    description:
      "Cross-promotional opportunities for media outlets and content creators.",
    icon: Camera,
    benefits: [
      "Press access",
      "Content collaboration",
      "Cross-promotion",
      "Exclusive interviews",
    ],
    color: "from-violet-500 to-purple-500",
  },
  {
    id: "entertainment",
    title: "Entertainment Partner",
    description:
      "Performance opportunities for artists, DJs, and entertainment providers.",
    icon: Music,
    benefits: [
      "Stage time",
      "Audience exposure",
      "Portfolio building",
      "Networking",
    ],
    color: "from-pink-500 to-rose-500",
  },
  {
    id: "services",
    title: "Service Provider",
    description:
      "Technical, logistics, and support service partnerships for our events.",
    icon: Wrench,
    benefits: [
      "Long-term contracts",
      "Multiple events",
      "Industry recognition",
      "B2B networking",
    ],
    color: "from-amber-500 to-orange-500",
  },
];

// ============================================
// EVENTS DATA
// ============================================
const eventsForPartnership = [
  {
    id: "kratiki-ekthesi",
    title: "Kratiki Ekthesi 2026",
    date: "May 20-25, 2026",
    location: "Nicosia, Cyprus",
    attendance: "100,000+",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop",
    href: "/events/kratiki-ekthesi",
  },
  {
    id: "planitario",
    title: "Planitario 2026",
    date: "March 15-16, 2026",
    location: "Nicosia, Cyprus",
    attendance: "15,000+",
    image: "/Content/planitatio/The Cyprus Planetarium 2025.jpg",
    href: "https://planetarium.memora-experience.com",
  },
  {
    id: "summer-festival",
    title: "Summer Festival 2026",
    date: "June 15-17, 2026",
    location: "Limassol, Cyprus",
    attendance: "25,000+",
    image:
      "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&h=400&fit=crop",
    href: "/events/summer-festival",
  },
  {
    id: "student-trips",
    title: "Student Trips 2026",
    date: "Various Dates",
    location: "Europe",
    attendance: "2,000+",
    image:
      "https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=600&h=400&fit=crop",
    href: "/events#student-trip",
  },
];

// ============================================
// TESTIMONIALS
// ============================================
const testimonials = [
  {
    quote:
      "Partnering with Memora for Kratiki Ekthesi was the best marketing decision we made. The exposure to over 100,000 visitors transformed our brand awareness in Cyprus.",
    author: "Maria Christodoulou",
    role: "Marketing Director",
    company: "Cyprus Foods Ltd",
  },
  {
    quote:
      "The team at Memora truly understands partnership. They went above and beyond to ensure our booth had prime positioning and helped us generate over 500 qualified leads.",
    author: "Andreas Georgiou",
    role: "CEO",
    company: "TechStart Cyprus",
  },
  {
    quote:
      "As a media partner, we received incredible access and content opportunities. The collaboration was seamless and mutually beneficial.",
    author: "Elena Papadopoulos",
    role: "Editor-in-Chief",
    company: "Cyprus Today Magazine",
  },
];

// ============================================
// FAQ DATA
// ============================================
const faqData = [
  {
    question: "What partnership packages are available?",
    answer:
      "We offer tiered partnership packages ranging from basic booth rentals to premium title sponsorships. Each package is customizable based on your goals, budget, and the specific event. Contact us for a detailed breakdown of options and pricing.",
  },
  {
    question: "How far in advance should I apply for partnership?",
    answer:
      "We recommend applying at least 3-6 months before the event for the best positioning and package options. Premium sponsorship spots fill up quickly, especially for major events like Kratiki Ekthesi.",
  },
  {
    question: "Can I partner for multiple events?",
    answer:
      "Absolutely! We offer multi-event partnership packages with significant discounts. Many of our partners choose annual partnerships that cover all Memora events for maximum brand consistency and exposure.",
  },
  {
    question: "What marketing support do partners receive?",
    answer:
      "Partners receive comprehensive marketing support including logo placement, social media promotion, email marketing inclusion, press release mentions, and on-site branding. Premium partners also get dedicated marketing campaigns.",
  },
  {
    question: "Are there exclusive category partnerships available?",
    answer:
      "Yes, we offer category exclusivity for certain partnership levels. This means you would be the only partner in your industry category, ensuring maximum visibility without competitor presence.",
  },
];

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
        className="flex w-full items-center justify-between py-3 sm:py-4 md:py-5 text-left transition-colors active:text-orange-600 sm:hover:text-orange-600"
      >
        <span className="pr-3 sm:pr-4 text-base sm:text-lg font-semibold text-slate-900">
          {question}
        </span>
        <ChevronDown
          className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${
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
            <p className="pb-3 sm:pb-4 md:pb-5 text-sm sm:text-base leading-relaxed text-slate-600">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function BusinessPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const heroRef = useRef(null);
  const whyRef = useRef(null);
  const typesRef = useRef(null);
  const eventsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const formRef = useRef(null);
  const faqRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isWhyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const isTypesInView = useInView(typesRef, { once: true, margin: "-100px" });
  const isEventsInView = useInView(eventsRef, { once: true, margin: "-100px" });
  const isTestimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-100px",
  });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" });

  const stats = [
    { value: "100K+", label: "Annual Attendees", icon: Users },
    { value: "50+", label: "Events Organized", icon: Calendar },
    { value: "500+", label: "Happy Partners", icon: Handshake },
    { value: "95%", label: "Partner Retention", icon: TrendingUp },
  ];

  const whyReasons = [
    {
      icon: Target,
      title: "Targeted Audience",
      description:
        "Reach your ideal customers at events curated for specific demographics and interests.",
    },
    {
      icon: Eye,
      title: "Maximum Visibility",
      description:
        "Your brand front and center at Cyprus's most attended events with premium placement.",
    },
    {
      icon: Megaphone,
      title: "Amplified Marketing",
      description:
        "Integrated marketing campaigns across digital, social, and traditional channels.",
    },
    {
      icon: Handshake,
      title: "Dedicated Support",
      description:
        "Personal partnership manager ensuring your goals are met at every step.",
    },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* ============================================ */}
      {/* HERO SECTION */}
      {/* ============================================ */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-slate-900 pb-20 pt-32 sm:pb-28 sm:pt-40"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-rose-500/10 blur-[120px]" />
        <GridPattern
          className="absolute inset-0 z-0 opacity-20 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
          width={50}
          height={50}
          numSquares={30}
          maxOpacity={0.1}
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg"
            >
              <Handshake className="h-4 w-4" />
              Partnership Opportunities
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 sm:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white px-2"
            >
              Partner With Cyprus&apos;s
              <span className="block bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
                Premier Event Company
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-8 sm:mb-12 max-w-3xl px-4 text-base sm:text-lg md:text-xl text-slate-300"
            >
              Join forces with Memora Experience and connect your brand with
              hundreds of thousands of engaged attendees across Cyprus&apos;s
              most anticipated events.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-8 sm:mb-12 grid grid-cols-2 gap-3 sm:gap-6 sm:grid-cols-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-sm"
                >
                  <stat.icon className="mx-auto mb-2 sm:mb-3 h-6 w-6 sm:h-8 sm:w-8 text-orange-400" />
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs sm:text-sm text-slate-400">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="#inquiry"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-orange-500/30 transition-all hover:scale-105 hover:shadow-2xl"
              >
                Start Your Partnership
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHY PARTNER WITH US SECTION */}
      {/* ============================================ */}
      <section ref={whyRef} className="relative overflow-hidden bg-zinc-50 py-12 sm:py-20 md:py-28">
        <div className="absolute -right-40 top-40 h-[400px] w-[400px] rounded-full bg-orange-200/40 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm">
              <Star className="h-4 w-4" />
              Why Memora
            </span>
            <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Why Partner{" "}
              <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                With Us
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              For over a decade, Memora Experience has been at the forefront of
              event excellence in Cyprus. Our partners don&apos;t just get
              visibility—they get results.
            </p>
          </motion.div>

          {/* Why Cards */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 shadow-lg transition-transform group-hover:scale-110">
                  <reason.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {reason.title}
                </h3>
                <p className="text-slate-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Partner Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16"
          >
            <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-slate-400">
              Trusted by leading brands
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {partnerLogos.map((logo, index) => (
                <div
                  key={index}
                  className="relative h-12 w-24 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                >
                  <Image
                    src={logo}
                    alt="Partner logo"
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PARTNERSHIP TYPES SECTION */}
      {/* ============================================ */}
      <section ref={typesRef} className="relative bg-white py-12 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTypesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600">
              <Handshake className="h-4 w-4" />
              Partnership Options
            </span>
            <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
              Find Your Perfect Partnership
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              We offer diverse partnership opportunities tailored to your
              business goals and budget.
            </p>
          </motion.div>

          {/* Partnership Type Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isTypesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-xl sm:rounded-2xl border border-slate-200 bg-white p-4 sm:p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg sm:rounded-xl bg-gradient-to-br ${type.color} shadow-lg`}
                >
                  <type.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h3 className="mb-2 text-lg sm:text-xl font-bold text-slate-900">
                  {type.title}
                </h3>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base text-slate-600">{type.description}</p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {type.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600"
                    >
                      <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-orange-500" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* PARTNERSHIP INQUIRY FORM */}
      {/* ============================================ */}
      <section
        id="inquiry"
        ref={formRef}
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

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Sparkles className="mx-auto mb-6 h-12 w-12 text-white/90" />
            <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
              Start Your Partnership Journey
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90">
              Fill out the form below and our partnership team will get back to
              you within 24-48 hours.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {formSubmitted ? (
              <div className="rounded-2xl bg-white p-8 text-center shadow-2xl sm:p-12">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-rose-500">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  Thank You for Your Interest!
                </h3>
                <p className="mb-6 text-slate-600">
                  We&apos;ve received your partnership inquiry. Our team will
                  review your submission and reach out within 24-48 business
                  hours.
                </p>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:text-orange-700"
                >
                  <ArrowRight className="h-4 w-4 rotate-180" />
                  Back to Home
                </a>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="rounded-xl sm:rounded-2xl bg-white p-4 sm:p-6 md:p-8 shadow-2xl"
              >
                <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
                  {/* Full Name */}
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
                        className="w-full rounded-lg sm:rounded-xl border border-slate-300 bg-white py-2.5 sm:py-3 pl-10 sm:pl-12 pr-3 sm:pr-4 text-sm sm:text-base text-slate-900 placeholder-slate-400 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
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
                        className="w-full rounded-lg sm:rounded-xl border border-slate-300 bg-white py-2.5 sm:py-3 pl-10 sm:pl-12 pr-3 sm:pr-4 text-sm sm:text-base text-slate-900 placeholder-slate-400 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
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
                        className="w-full rounded-lg sm:rounded-xl border border-slate-300 bg-white py-2.5 sm:py-3 pl-10 sm:pl-12 pr-3 sm:pr-4 text-sm sm:text-base text-slate-900 placeholder-slate-400 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
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
                        className="w-full rounded-lg sm:rounded-xl border border-slate-300 bg-white py-2.5 sm:py-3 pl-10 sm:pl-12 pr-3 sm:pr-4 text-sm sm:text-base text-slate-900 placeholder-slate-400 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  {/* Event Selection */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Interested Event <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <select
                      className="w-full appearance-none rounded-lg sm:rounded-xl border border-slate-300 bg-white py-2.5 sm:py-3 pl-3 sm:pl-4 pr-8 sm:pr-10 text-sm sm:text-base text-slate-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    >
                      <option value="">Select an event (optional)</option>
                      <option value="kratiki-ekthesi">
                        Kratiki Ekthesi 2026
                      </option>
                      <option value="planitario">Planitario 2026</option>
                      <option value="summer-festival">
                        Summer Festival 2026
                      </option>
                      <option value="student-trips">Student Trips 2026</option>
                      <option value="corporate">Corporate Events</option>
                      <option value="multiple">Multiple Events</option>
                      <option value="other">Other / Not Sure</option>
                      <option value="none">Not specified</option>
                    </select>
                  </div>

                  {/* Partnership Type */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Partnership Type *
                    </label>
                    <select
                      required
                      className="w-full appearance-none rounded-lg sm:rounded-xl border border-slate-300 bg-white py-2.5 sm:py-3 pl-3 sm:pl-4 pr-8 sm:pr-10 text-sm sm:text-base text-slate-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    >
                      <option value="">Select partnership type</option>
                      <option value="sponsor">Event Sponsor</option>
                      <option value="exhibitor">Exhibitor / Booth</option>
                      <option value="vendor">Food & Beverage Vendor</option>
                      <option value="media">Media Partner</option>
                      <option value="entertainment">
                        Entertainment Partner
                      </option>
                      <option value="services">Service Provider</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Budget (Full Width) */}
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Estimated Budget Range
                    </label>
                    <select className="w-full appearance-none rounded-xl border border-slate-300 bg-white py-3 pl-4 pr-10 text-slate-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20">
                      <option value="">Select budget range (optional)</option>
                      <option value="under-1k">Under €1,000</option>
                      <option value="1k-5k">€1,000 - €5,000</option>
                      <option value="5k-10k">€5,000 - €10,000</option>
                      <option value="10k-25k">€10,000 - €25,000</option>
                      <option value="25k-50k">€25,000 - €50,000</option>
                      <option value="50k+">€50,000+</option>
                    </select>
                  </div>

                  {/* Message (Full Width) */}
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Tell Us About Your Goals *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                      <textarea
                        required
                        rows={4}
                        placeholder="Tell us about your company, partnership goals, and what you hope to achieve..."
                        className="w-full resize-none rounded-lg sm:rounded-xl border border-slate-300 bg-white py-2.5 sm:py-3 pl-10 sm:pl-12 pr-3 sm:pr-4 text-sm sm:text-base text-slate-900 placeholder-slate-400 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-lg sm:rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 py-3 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg shadow-orange-500/25 transition-all active:scale-95 sm:hover:shadow-xl sm:hover:shadow-orange-500/30"
                    >
                      Submit Partnership Inquiry
                      <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* OUR EVENTS SECTION */}
      {/* ============================================ */}
      <section
        ref={eventsRef}
        className="relative overflow-hidden bg-slate-900 py-12 sm:py-20 md:py-28"
      >
        <div className="absolute -left-40 top-40 h-[400px] w-[400px] rounded-full bg-orange-500/10 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isEventsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
              <Calendar className="h-4 w-4" />
              Available Events
            </span>
            <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
              Events Open for Partnership
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              Choose from our portfolio of high-impact events
            </p>
          </motion.div>

          {/* Event Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {eventsForPartnership.map((event, index) => (
              <motion.a
                key={event.id}
                href={event.href}
                initial={{ opacity: 0, y: 30 }}
                animate={isEventsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="relative h-40 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                      {event.attendance} expected
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="mb-2 font-bold text-white">{event.title}</h3>
                  <div className="space-y-1 text-sm text-slate-400">
                    <p className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {event.date}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </p>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TESTIMONIALS SECTION */}
      {/* ============================================ */}
      <section ref={testimonialsRef} className="relative bg-zinc-50 py-12 sm:py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm">
              <Quote className="h-4 w-4" />
              Partner Stories
            </span>
            <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
              What Our Partners Say
            </h2>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <Quote className="mb-4 h-8 w-8 text-orange-200" />
                <p className="mb-6 text-slate-600 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-rose-500 text-lg font-bold text-white">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ SECTION */}
      {/* ============================================ */}
      <section ref={faqRef} className="relative bg-white py-12 sm:py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Partnership FAQ
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Common questions about partnering with Memora
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
              Have more questions?{" "}
              <a
                href="/contact"
                className="font-semibold text-orange-600 hover:text-orange-700"
              >
                Contact our team
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BACK LINK */}
      {/* ============================================ */}
      <section className="border-t border-slate-200 bg-zinc-50 py-12">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-orange-600"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}

