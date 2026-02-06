"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Handshake,
  Users,
  TrendingUp,
  Award,
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
  Quote,
  Globe,
  Briefcase,
  Tag,
  Store,
  Send,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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
    <div className="border-b border-slate-100 last:border-0">
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-4 sm:py-5 text-left transition-colors hover:text-[#D4A574]"
      >
        <span className="pr-4 text-base sm:text-lg font-medium text-slate-900">
          {question}
        </span>
        <ChevronDown
          className={`h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 transition-all duration-300 ${
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
            <p className="pb-4 sm:pb-5 text-sm sm:text-base leading-relaxed text-slate-500">
              {answer}
            </p>
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
    { value: "100K+", label: "Annual Attendees" },
    { value: "50+", label: "Events Organized" },
    { value: "500+", label: "Happy Partners" },
    { value: "95%", label: "Partner Retention" },
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
        className="relative overflow-hidden bg-slate-900 pb-16 pt-32 sm:pb-20 sm:pt-36"
      >
        {/* Subtle background */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800" />
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-[#D4A574]/8 blur-[160px]" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574]"
            >
              Partnership Opportunities
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.1] text-white"
            >
              Partner With Cyprus&apos;s{" "}
              <span className="text-[#D4A574]">Premier Event Company</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-10 max-w-2xl text-base sm:text-lg text-slate-400"
            >
              Join forces with Memora Experience and connect your brand with
              hundreds of thousands of engaged attendees across Cyprus&apos;s
              most anticipated events.
            </motion.p>

            {/* Stats — inline row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-10 flex items-center justify-center gap-6 sm:gap-10 flex-wrap"
            >
              {stats.map((stat, i, arr) => (
                <div key={stat.label} className="flex items-center gap-6 sm:gap-10">
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl font-semibold text-white">{stat.value}</p>
                    <p className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.15em] text-slate-500 mt-0.5">
                      {stat.label}
                    </p>
                  </div>
                  {i < arr.length - 1 && <div className="hidden sm:block h-8 w-px bg-white/10" />}
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 rounded-xl bg-[#D4A574] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#C8965F]"
              >
                Start Your Partnership
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHY PARTNER WITH US SECTION */}
      {/* ============================================ */}
      <section ref={whyRef} className="relative bg-[#FAF8F5] py-16 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574]">
              Why Memora
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
              Why Partner <span className="text-[#D4A574]">With Us</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-500">
              For over a decade, Memora Experience has been at the forefront of
              event excellence in Cyprus. Our partners don&apos;t just get
              visibility—they get results.
            </p>
          </motion.div>

          {/* Why Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyReasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-100 bg-white p-6 transition-all hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5EDE4]">
                  <reason.icon className="h-5 w-5 text-[#D4A574]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {reason.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">{reason.description}</p>
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
            <p className="mb-8 text-center text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
              Trusted by leading brands
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
              {partnerLogos.map((logo, index) => (
                <div
                  key={index}
                  className="relative h-10 w-20 opacity-40 grayscale transition-all hover:opacity-80 hover:grayscale-0"
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
      <section ref={typesRef} className="relative bg-white py-16 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTypesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574]">
              Partnership Options
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
              Find Your Perfect <span className="text-[#D4A574]">Partnership</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-slate-500">
              We offer diverse partnership opportunities tailored to your
              business goals and budget.
            </p>
          </motion.div>

          {/* Partnership Type Cards */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {partnershipTypes.map((type, index) => (
              <motion.div
                key={type.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isTypesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="group rounded-2xl border border-slate-100 bg-white p-5 sm:p-6 transition-all hover:shadow-md"
              >
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5EDE4]">
                  <type.icon className="h-5 w-5 text-[#D4A574]" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-slate-900">
                  {type.title}
                </h3>
                <p className="mb-4 text-sm text-slate-500 leading-relaxed">{type.description}</p>
                <ul className="space-y-2">
                  {type.benefits.map((benefit, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-sm text-slate-600"
                    >
                      <CheckCircle className="h-3.5 w-3.5 flex-shrink-0 text-[#D4A574]" />
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
        className="relative bg-[#FAF8F5] py-16 sm:py-24 md:py-28"
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574]">
              Get Started
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
              Start Your <span className="text-[#D4A574]">Partnership Journey</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base sm:text-lg text-slate-500">
              Fill out the form below and our partnership team will get back to you within 24-48 hours.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Left Info Panel — desktop only */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={isFormInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hidden lg:col-span-2 lg:block"
            >
              <div className="sticky top-28 space-y-5">
                {/* Info Card */}
                <div className="rounded-2xl border border-slate-100 bg-white p-6">
                  <h3 className="mb-4 text-base font-semibold text-slate-900">
                    Why Partner With Memora?
                  </h3>
                  <ul className="space-y-3.5">
                    {[
                      { icon: Globe, text: "Access to 100,000+ annual attendees" },
                      { icon: MapPin, text: "Premium locations across Cyprus" },
                      { icon: Megaphone, text: "Comprehensive marketing support" },
                      { icon: Briefcase, text: "Dedicated partnership manager" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#F5EDE4]">
                          <item.icon className="h-4 w-4 text-[#D4A574]" />
                        </div>
                        <span className="pt-1 text-sm text-slate-600">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Quick Contact */}
                <div className="rounded-2xl border border-slate-100 bg-white p-6">
                  <h3 className="mb-3 text-base font-semibold text-slate-900">
                    Prefer to Talk?
                  </h3>
                  <div className="space-y-2.5">
                    <a
                      href="mailto:partners@memoraexperience.com"
                      className="flex items-center gap-2.5 text-sm text-slate-500 transition-colors hover:text-[#D4A574]"
                    >
                      <Mail className="h-4 w-4" />
                      partners@memoraexperience.com
                    </a>
                    <a
                      href="tel:+35799123456"
                      className="flex items-center gap-2.5 text-sm text-slate-500 transition-colors hover:text-[#D4A574]"
                    >
                      <Phone className="h-4 w-4" />
                      +357 99 123 456
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isFormInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="lg:col-span-3"
            >
              {formSubmitted ? (
                <div className="rounded-2xl border border-slate-100 bg-white p-8 text-center sm:p-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#F5EDE4]"
                  >
                    <CheckCircle className="h-8 w-8 text-[#D4A574]" />
                  </motion.div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">
                    Thank You for Your Interest!
                  </h3>
                  <p className="mb-6 text-slate-500">
                    We&apos;ve received your {activeTab === "vendor" ? "vendor application" : "sponsorship inquiry"} and
                    will get back to you within 24-48 business hours.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#D4A574] transition-colors hover:text-[#C8965F]"
                  >
                    <ArrowRight className="h-4 w-4 rotate-180" />
                    Back to Home
                  </Link>
                </div>
              ) : (
                <div className="rounded-2xl border border-slate-100 bg-white shadow-sm overflow-hidden">
                  {/* Tabs */}
                  <div className="border-b border-slate-100 bg-[#FAF8F5] p-1.5">
                    <div className="flex gap-1">
                      <button
                        type="button"
                        onClick={() => setActiveTab("vendor")}
                        className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                          activeTab === "vendor"
                            ? "bg-white text-slate-900 shadow-sm"
                            : "text-slate-500 hover:text-slate-700"
                        }`}
                      >
                        <Store className="h-4 w-4" />
                        <span>Vendor Application</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setActiveTab("sponsor")}
                        className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                          activeTab === "sponsor"
                            ? "bg-white text-slate-900 shadow-sm"
                            : "text-slate-500 hover:text-slate-700"
                        }`}
                      >
                        <Megaphone className="h-4 w-4" />
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
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* Context Text */}
                        <p className="mb-6 text-sm text-slate-500">
                          {activeTab === "vendor"
                            ? "Interested in showcasing your products or services at our events? Fill out the form below."
                            : "Looking for brand exposure and partnership opportunities? Let us know how we can collaborate."}
                        </p>

                        <input type="hidden" name="type" value={activeTab} />

                        <div className="space-y-4">
                          {/* Row 1: Name & Email */}
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                                Full Name <span className="text-[#D4A574]">*</span>
                              </label>
                              <input
                                type="text"
                                required
                                placeholder="John Smith"
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-[#D4A574] focus:outline-none focus:ring-1 focus:ring-[#D4A574]"
                              />
                            </div>
                            <div>
                              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                                Email Address <span className="text-[#D4A574]">*</span>
                              </label>
                              <input
                                type="email"
                                required
                                placeholder="john@example.com"
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-[#D4A574] focus:outline-none focus:ring-1 focus:ring-[#D4A574]"
                              />
                            </div>
                          </div>

                          {/* Row 2: Phone & Company */}
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div>
                              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                                Phone Number
                                <span className="ml-1 font-normal text-slate-400">(optional)</span>
                              </label>
                              <input
                                type="tel"
                                placeholder="+357 99 123 456"
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-[#D4A574] focus:outline-none focus:ring-1 focus:ring-[#D4A574]"
                              />
                            </div>
                            <div>
                              <label className="mb-1.5 block text-sm font-medium text-slate-700">
                                {activeTab === "vendor" ? "Business Name" : "Company Name"}
                                {activeTab === "sponsor" && <span className="text-[#D4A574]"> *</span>}
                              </label>
                              <input
                                type="text"
                                required={activeTab === "sponsor"}
                                placeholder={activeTab === "vendor" ? "Your Business Name" : "Your Company Ltd"}
                                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-[#D4A574] focus:outline-none focus:ring-1 focus:ring-[#D4A574]"
                              />
                            </div>
                          </div>

                          {/* Row 3: Vendor Fields */}
                          {activeTab === "vendor" && (
                            <div className="grid gap-4 sm:grid-cols-2">
                              <div>
                                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                                  Vendor Category <span className="text-[#D4A574]">*</span>
                                </label>
                                <select
                                  required
                                  className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition-all focus:border-[#D4A574] focus:outline-none focus:ring-1 focus:ring-[#D4A574]"
                                >
                                  <option value="">Select category</option>
                                  {vendorCategories.map((cat) => (
                                    <option key={cat} value={cat.toLowerCase().replace(/ /g, "-")}>
                                      {cat}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div>
                                <label className="mb-1.5 block text-sm font-medium text-slate-700">
                                  Interested Event
                                </label>
                                <select className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition-all focus:border-[#D4A574] focus:outline-none focus:ring-1 focus:ring-[#D4A574]">
                                  <option value="">Any / All Events</option>
                                  <option value="kratiki-ekthesi">Kratiki Ekthesi 2026</option>
                                  <option value="planitario">Planitario 2026</option>
                                  <option value="summer-festival">Summer Festival 2026</option>
                                </select>
                              </div>
                            </div>
                          )}

                          {/* Row 4: Message */}
                          <div>
                            <label className="mb-1.5 block text-sm font-medium text-slate-700">
                              {activeTab === "vendor" ? "Tell us about your products/services" : "Describe your partnership goals"}
                              <span className="text-[#D4A574]"> *</span>
                            </label>
                            <textarea
                              required
                              rows={4}
                              placeholder={
                                activeTab === "vendor"
                                  ? "Describe what you'd like to offer at our events, your experience, and any special requirements..."
                                  : "Tell us about your brand, target audience, and what you hope to achieve through this partnership..."
                              }
                              className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-all focus:border-[#D4A574] focus:outline-none focus:ring-1 focus:ring-[#D4A574]"
                            />
                          </div>

                          {/* Submit Button */}
                          <button
                            type="submit"
                            className="mt-1 flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4A574] py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#C8965F]"
                          >
                            {activeTab === "vendor" ? "Submit Application" : "Submit Inquiry"}
                            <Send className="h-4 w-4" />
                          </button>

                          {/* Privacy Note */}
                          <p className="text-center text-xs text-slate-400">
                            By submitting, you agree to our{" "}
                            <a href="#" className="underline hover:text-[#D4A574]">
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
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-6 grid gap-4 sm:grid-cols-2 lg:hidden"
          >
            <div className="rounded-xl border border-slate-100 bg-white p-5">
              <h3 className="mb-2.5 text-sm font-semibold text-slate-900">Quick Contact</h3>
              <div className="space-y-2">
                <a
                  href="mailto:partners@memoraexperience.com"
                  className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-[#D4A574]"
                >
                  <Mail className="h-4 w-4" />
                  partners@memoraexperience.com
                </a>
                <a
                  href="tel:+35799123456"
                  className="flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-[#D4A574]"
                >
                  <Phone className="h-4 w-4" />
                  +357 99 123 456
                </a>
              </div>
            </div>
            <div className="rounded-xl border border-slate-100 bg-white p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F5EDE4]">
                  <CheckCircle className="h-5 w-5 text-[#D4A574]" />
                </div>
                <div>
                  <p className="text-lg font-semibold text-slate-900">500+</p>
                  <p className="text-xs text-slate-500">Happy Partners</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TESTIMONIALS SECTION */}
      {/* ============================================ */}
      <section ref={testimonialsRef} className="relative bg-white py-16 sm:py-24 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574]">
              Partner Stories
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
              What Our Partners <span className="text-[#D4A574]">Say</span>
            </h2>
          </motion.div>

          {/* Testimonial Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-2xl border border-slate-100 bg-white p-6"
              >
                <Quote className="mb-4 h-6 w-6 text-[#D4A574]/30" />
                <p className="mb-6 text-sm sm:text-base text-slate-600 leading-relaxed italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5EDE4] text-sm font-semibold text-[#D4A574]">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-slate-500">
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
      <section ref={faqRef} className="relative bg-[#FAF8F5] py-16 sm:py-24 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574]">
              FAQ
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
              Partnership <span className="text-[#D4A574]">FAQ</span>
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-500">
              Common questions about partnering with Memora
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
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
            <p className="text-slate-500">
              Have more questions?{" "}
              <Link
                href="/contact"
                className="font-medium text-[#D4A574] hover:text-[#C8965F] transition-colors"
              >
                Contact our team
              </Link>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BACK LINK */}
      {/* ============================================ */}
      <section className="border-t border-slate-100 bg-[#FAF8F5] py-10">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-[#D4A574]"
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
