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
  Globe,
  Briefcase,
  Tag,
  Store,
  Send,
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
    color: "from-[#D4A574] to-[#C8965F]",
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
    color: "from-[#D4A574] to-[#C8965F]",
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
    color: "from-[#D4A574] to-[#C8965F]",
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
    color: "from-[#D4A574] to-[#C8965F]",
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
    color: "from-[#D4A574] to-[#C8965F]",
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
    color: "from-[#D4A574] to-[#C8965F]",
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
// VENDOR CATEGORIES
// ============================================
const vendorCategories = [
  "Food & Beverage",
  "Entertainment",
  "Retail / Merchandise",
  "Services",
  "Other",
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
        className="flex w-full items-center justify-between py-3 sm:py-4 md:py-5 text-left transition-colors active:text-[#D4A574] sm:hover:text-[#D4A574]"
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
  const [activeTab, setActiveTab] = useState<"vendor" | "sponsor">("vendor");

  const heroRef = useRef(null);
  const whyRef = useRef(null);
  const typesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const formRef = useRef(null);
  const faqRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isWhyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const isTypesInView = useInView(typesRef, { once: true, margin: "-100px" });
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
        <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-[#D4A574]/10 blur-[120px]" />
        <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[120px]" />
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
              className="mb-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A574] to-[#C8965F] px-4 py-2 text-sm font-semibold text-white shadow-lg"
            >
              <Handshake className="h-4 w-4" />
              Partnership Opportunities
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 sm:mb-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight px-2"
            >
              <span className="text-white">Partner With Cyprus&apos;s</span>
              <span className="block text-[#D4A574]">Premier Event Company</span>
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
                  <stat.icon className="mx-auto mb-2 sm:mb-3 h-6 w-6 sm:h-8 sm:w-8 text-[#D4A574]" />
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
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4A574] to-[#C8965F] px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-[#D4A574]/30 transition-all hover:scale-105 hover:shadow-2xl"
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
        <div className="absolute -right-40 top-40 h-[400px] w-[400px] rounded-full bg-[#D4A574]/30 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A574]/30 bg-white px-4 py-2 text-sm font-medium text-[#D4A574] shadow-sm">
              <Star className="h-4 w-4" />
              Why Memora
            </span>
            <h2 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
              <span className="text-[#6B6B6B]">Why Partner</span>{" "}
              <span className="text-[#D4A574]">With Us</span>
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
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4A574] to-[#C8965F] shadow-lg transition-transform group-hover:scale-110">
                  <reason.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 text-xl md:text-2xl font-semibold tracking-normal leading-tight text-slate-900">
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
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A574]/30 bg-[#D4A574]/10 px-4 py-2 text-sm font-medium text-[#D4A574]">
              <Handshake className="h-4 w-4" />
              Partnership Options
            </span>
            <h2 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
              <span className="text-[#6B6B6B]">Find Your Perfect</span>{" "}
              <span className="text-[#D4A574]">Partnership</span>
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
                <h3 className="mb-2 text-lg md:text-xl font-semibold tracking-normal leading-tight text-slate-900">
                  {type.title}
                </h3>
                <p className="mb-3 sm:mb-4 text-sm sm:text-base text-slate-600">{type.description}</p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {type.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-600"
                    >
                      <CheckCircle className="h-3.5 w-3.5 sm:h-4 sm:w-4 flex-shrink-0 text-[#D4A574]" />
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
        className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-16 sm:py-24 md:py-32"
      >
        {/* Ambient Background Elements */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-[#D4A574]/8 blur-[150px]" />
          <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-amber-500/6 blur-[120px]" />
          <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#D4A574]/5 blur-[100px]" />
        </div>

        {/* Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A574]/30 bg-[#D4A574]/10 px-4 py-2 text-sm font-medium text-[#D4A574] backdrop-blur-sm">
              <Handshake className="h-4 w-4" />
              Partnership Inquiry
            </span>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
              Start Your Partnership Journey
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
              Fill out the form below and our partnership team will get back to you within 24-48 hours.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Left Info Panel */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="hidden lg:col-span-2 lg:block"
            >
              <div className="sticky top-8 space-y-6">
                {/* Info Card */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <h3 className="mb-4 text-lg font-semibold text-white">
                    Why Partner With Memora?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { icon: Globe, text: "Access to 100,000+ annual attendees" },
                      { icon: MapPin, text: "Premium locations across Cyprus" },
                      { icon: Megaphone, text: "Comprehensive marketing support" },
                      { icon: Briefcase, text: "Dedicated partnership manager" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#D4A574]/20">
                          <item.icon className="h-4 w-4 text-[#D4A574]" />
                        </div>
                        <span className="pt-1 text-sm text-slate-300">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <h3 className="mb-4 text-lg font-semibold text-white">
                    Prefer to Talk?
                  </h3>
                  <div className="space-y-3">
                    <a
                      href="mailto:partners@memoraexperience.com"
                      className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-[#D4A574]"
                    >
                      <Mail className="h-4 w-4" />
                      partners@memoraexperience.com
                    </a>
                    <a
                      href="tel:+35799123456"
                      className="flex items-center gap-3 text-sm text-slate-300 transition-colors hover:text-[#D4A574]"
                    >
                      <Phone className="h-4 w-4" />
                      +357 99 123 456
                    </a>
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="rounded-2xl bg-gradient-to-br from-[#D4A574]/20 to-[#C8965F]/10 p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D4A574]">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">500+</p>
                      <p className="text-sm text-slate-300">Happy Partners</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-3"
            >
              {formSubmitted ? (
                <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm sm:p-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#D4A574] to-[#C8965F]"
                  >
                    <CheckCircle className="h-10 w-10 text-white" />
                  </motion.div>
                  <h3 className="mb-4 text-2xl font-bold text-white">
                    Thank You for Your Interest!
                  </h3>
                  <p className="mb-8 text-slate-400">
                    We&apos;ve received your {activeTab === "vendor" ? "vendor application" : "sponsorship inquiry"} and
                    will get back to you within 24-48 business hours.
                  </p>
                  <a
                    href="/"
                    className="inline-flex items-center gap-2 text-[#D4A574] font-semibold transition-colors hover:text-[#C8965F]"
                  >
                    <ArrowRight className="h-4 w-4 rotate-180" />
                    Back to Home
                  </a>
                </div>
              ) : (
                <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-2xl backdrop-blur-sm">
                  {/* Enhanced Tabs */}
                  <div className="border-b border-white/10 bg-white/5 p-2">
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => setActiveTab("vendor")}
                        className={`group relative flex flex-1 items-center justify-center gap-2.5 rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                          activeTab === "vendor"
                            ? "bg-gradient-to-r from-[#D4A574] to-[#C8965F] text-white shadow-lg shadow-[#D4A574]/25"
                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <Store className={`h-4 w-4 transition-transform ${activeTab === "vendor" ? "scale-110" : "group-hover:scale-105"}`} />
                        <span>Vendor Application</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab("sponsor")}
                        className={`group relative flex flex-1 items-center justify-center gap-2.5 rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                          activeTab === "sponsor"
                            ? "bg-gradient-to-r from-[#D4A574] to-[#C8965F] text-white shadow-lg shadow-[#D4A574]/25"
                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <Megaphone className={`h-4 w-4 transition-transform ${activeTab === "sponsor" ? "scale-110" : "group-hover:scale-105"}`} />
                        <span>Sponsorship Inquiry</span>
                      </button>
                    </div>
                  </div>

                  {/* Form Content */}
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setFormSubmitted(true);
                    }}
                    className="p-5 sm:p-6 md:p-8"
                  >
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Context Text */}
                        <p className="mb-6 text-sm text-slate-400">
                          {activeTab === "vendor"
                            ? "Interested in showcasing your products or services at our events? Fill out the form below."
                            : "Looking for brand exposure and partnership opportunities? Let us know how we can collaborate."}
                        </p>

                        {/* Hidden field for tab selection */}
                        <input type="hidden" name="type" value={activeTab} />

                        <div className="space-y-5">
                          {/* Row 1: Name & Email */}
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                              <label className="mb-2 flex items-center gap-1.5 text-sm font-medium text-slate-300">
                                <User className="h-3.5 w-3.5 text-slate-500" />
                                Full Name <span className="text-[#D4A574]">*</span>
                              </label>
                              <input
                                type="text"
                                required
                                placeholder="John Smith"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 transition-all duration-200 focus:border-[#D4A574]/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D4A574]/20"
                              />
                            </div>
                            <div>
                              <label className="mb-2 flex items-center gap-1.5 text-sm font-medium text-slate-300">
                                <Mail className="h-3.5 w-3.5 text-slate-500" />
                                Email Address <span className="text-[#D4A574]">*</span>
                              </label>
                              <input
                                type="email"
                                required
                                placeholder="john@example.com"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 transition-all duration-200 focus:border-[#D4A574]/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D4A574]/20"
                              />
                            </div>
                          </div>

                          {/* Row 2: Phone & Company */}
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                              <label className="mb-2 flex items-center gap-1.5 text-sm font-medium text-slate-300">
                                <Phone className="h-3.5 w-3.5 text-slate-500" />
                                Phone Number
                                <span className="font-normal text-slate-500">(optional)</span>
                              </label>
                              <input
                                type="tel"
                                placeholder="+357 99 123 456"
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 transition-all duration-200 focus:border-[#D4A574]/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D4A574]/20"
                              />
                            </div>
                            <div>
                              <label className="mb-2 flex items-center gap-1.5 text-sm font-medium text-slate-300">
                                <Building2 className="h-3.5 w-3.5 text-slate-500" />
                                {activeTab === "vendor" ? "Business Name" : "Company Name"}
                                {activeTab === "sponsor" && <span className="text-[#D4A574]">*</span>}
                              </label>
                              <input
                                type="text"
                                required={activeTab === "sponsor"}
                                placeholder={activeTab === "vendor" ? "Your Business Name" : "Your Company Ltd"}
                                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 transition-all duration-200 focus:border-[#D4A574]/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D4A574]/20"
                              />
                            </div>
                          </div>

                          {/* Row 3: Vendor Fields */}
                          {activeTab === "vendor" && (
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div>
                                <label className="mb-2 flex items-center gap-1.5 text-sm font-medium text-slate-300">
                                  <Tag className="h-3.5 w-3.5 text-slate-500" />
                                  Vendor Category <span className="text-[#D4A574]">*</span>
                                </label>
                                <select
                                  required
                                  className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-all duration-200 focus:border-[#D4A574]/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D4A574]/20"
                                >
                                  <option value="" className="bg-slate-800">Select category</option>
                                  {vendorCategories.map((cat) => (
                                    <option key={cat} value={cat.toLowerCase().replace(/ /g, "-")} className="bg-slate-800">
                                      {cat}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div>
                                <label className="mb-2 flex items-center gap-1.5 text-sm font-medium text-slate-300">
                                  <MapPin className="h-3.5 w-3.5 text-slate-500" />
                                  Interested Event
                                </label>
                                <select className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white transition-all duration-200 focus:border-[#D4A574]/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D4A574]/20">
                                  <option value="" className="bg-slate-800">Any / All Events</option>
                                  <option value="kratiki-ekthesi" className="bg-slate-800">Kratiki Ekthesi 2026</option>
                                  <option value="planitario" className="bg-slate-800">Planitario 2026</option>
                                  <option value="summer-festival" className="bg-slate-800">Summer Festival 2026</option>
                                </select>
                              </div>
                            </div>
                          )}

                          {/* Row 4: Message */}
                          <div>
                            <label className="mb-2 flex items-center gap-1.5 text-sm font-medium text-slate-300">
                              <MessageSquare className="h-3.5 w-3.5 text-slate-500" />
                              {activeTab === "vendor" ? "Tell us about your products/services" : "Describe your partnership goals"}
                              <span className="text-[#D4A574]">*</span>
                            </label>
                            <textarea
                              required
                              rows={4}
                              placeholder={
                                activeTab === "vendor"
                                  ? "Describe what you'd like to offer at our events, your experience, and any special requirements..."
                                  : "Tell us about your brand, target audience, and what you hope to achieve through this partnership..."
                              }
                              className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-slate-500 transition-all duration-200 focus:border-[#D4A574]/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#D4A574]/20"
                            />
                          </div>

                          {/* Submit Button */}
                          <button
                            type="submit"
                            className="group relative mt-2 flex w-full items-center justify-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-r from-[#D4A574] to-[#C8965F] py-4 text-base font-semibold text-white shadow-lg shadow-[#D4A574]/25 transition-all duration-300 hover:shadow-xl hover:shadow-[#D4A574]/30 active:scale-[0.98]"
                          >
                            <span className="relative z-10">
                              {activeTab === "vendor" ? "Submit Application" : "Submit Inquiry"}
                            </span>
                            <Send className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                          </button>

                          {/* Privacy Note */}
                          <p className="text-center text-xs text-slate-500">
                            By submitting, you agree to our{" "}
                            <a href="#" className="text-slate-400 underline hover:text-[#D4A574]">
                              Privacy Policy
                            </a>
                            . We&apos;ll never share your information.
                          </p>
                        </div>
                      </motion.div>
                    </AnimatePresence>
                  </form>
                </div>
              )}
            </motion.div>
          </div>

          {/* Mobile Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 grid gap-4 sm:grid-cols-2 lg:hidden"
          >
            <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
              <h3 className="mb-3 text-sm font-semibold text-white">Quick Contact</h3>
              <div className="space-y-2.5">
                <a
                  href="mailto:partners@memoraexperience.com"
                  className="flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-[#D4A574]"
                >
                  <Mail className="h-4 w-4" />
                  partners@memoraexperience.com
                </a>
                <a
                  href="tel:+35799123456"
                  className="flex items-center gap-2.5 text-sm text-slate-300 transition-colors hover:text-[#D4A574]"
                >
                  <Phone className="h-4 w-4" />
                  +357 99 123 456
                </a>
              </div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-[#D4A574]/20 to-[#C8965F]/10 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D4A574]">
                  <CheckCircle className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xl font-bold text-white">500+</p>
                  <p className="text-xs text-slate-300">Happy Partners</p>
                </div>
              </div>
            </div>
          </motion.div>
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
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A574]/30 bg-white px-4 py-2 text-sm font-medium text-[#D4A574] shadow-sm">
              <Quote className="h-4 w-4" />
              Partner Stories
            </span>
            <h2 className="mt-6 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
              <span className="text-[#6B6B6B]">What Our Partners</span>{" "}
              <span className="text-[#D4A574]">Say</span>
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
                <Quote className="mb-4 h-8 w-8 text-[#D4A574]/30" />
                <p className="mb-6 text-slate-600 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#D4A574] to-[#C8965F] text-lg font-bold text-white">
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
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight">
              <span className="text-[#6B6B6B]">Partnership</span>{" "}
              <span className="text-[#D4A574]">FAQ</span>
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
                className="font-semibold text-[#D4A574] hover:text-[#C8965F]"
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
            className="inline-flex items-center gap-2 text-slate-600 transition-colors hover:text-[#D4A574]"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}

