"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  CalendarDays,
  MapPin,
  Users,
  Building2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Star,
  Clock,
  Shield,
  Zap,
  Heart,
  Award,
  TrendingUp,
  Mail,
  Phone,
  User,
  MessageSquare,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import { GridPattern } from "@/components/ui/grid-pattern";

// ============================================
// SERVICE OFFERINGS DATA
// ============================================
const mainServices = [
  {
    id: "event-planning",
    icon: CalendarDays,
    title: "Event Planning & Production",
    shortDescription: "End-to-end event management from concept to execution",
    fullDescription:
      "Transform your vision into reality with our comprehensive event planning services. From intimate gatherings to large-scale productions, we handle every detail with precision and creativity.",
    features: [
      "Complete timeline management",
      "Budget planning & optimization",
      "Theme & concept development",
      "Day-of coordination",
      "Post-event analysis",
    ],
    benefits: [
      "Stress-free planning experience",
      "Professional execution",
      "Attention to every detail",
    ],
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-50 to-amber-50",
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
  },
  {
    id: "venue-sourcing",
    icon: MapPin,
    title: "Venue Sourcing & Selection",
    shortDescription: "Access to Cyprus's most exclusive and unique venues",
    fullDescription:
      "Whether you need a beachfront paradise, historic landmark, or modern event space, our extensive network gives you access to the finest venues across Cyprus.",
    features: [
      "Exclusive venue partnerships",
      "Site visits & walkthroughs",
      "Contract negotiation",
      "Custom layout & floor planning",
      "Technical requirements assessment",
    ],
    benefits: [
      "Prime locations guaranteed",
      "Best rates & availability",
      "Perfect match for your vision",
    ],
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50",
    image:
      "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&h=600&fit=crop",
  },
  {
    id: "vendor-coordination",
    icon: Users,
    title: "Vendor Coordination & Management",
    shortDescription: "Curated network of trusted event professionals",
    fullDescription:
      "Access our extensive network of vetted vendors including caterers, entertainers, decorators, photographers, and technical production teams. We coordinate everything seamlessly.",
    features: [
      "Vetted vendor partnerships",
      "Quality assurance",
      "Contract management",
      "On-site coordination",
      "Seamless integration",
    ],
    benefits: [
      "Trusted professionals only",
      "No surprises or disappointments",
      "Cohesive event execution",
    ],
    gradient: "from-purple-500 to-violet-500",
    bgGradient: "from-purple-50 to-violet-50",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
  },
  {
    id: "corporate-events",
    icon: Building2,
    title: "Corporate Events & Conferences",
    shortDescription: "Professional events that elevate your brand",
    fullDescription:
      "From high-stakes conferences to team-building retreats and brand activations, we create corporate events that impress clients, motivate teams, and strengthen your brand presence.",
    features: [
      "Brand integration & activation",
      "Keynote speaker coordination",
      "Networking facilitation",
      "Audio-visual production",
      "Attendee management",
    ],
    benefits: [
      "Professional polish",
      "Enhanced brand reputation",
      "Measurable ROI",
    ],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    image:
      "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop",
  },
];

// ============================================
// WHY CHOOSE US DATA
// ============================================
const whyChooseUs = [
  {
    icon: Clock,
    title: "10+ Years Experience",
    description:
      "Over a decade of creating unforgettable events across Cyprus.",
  },
  {
    icon: Award,
    title: "Award-Winning Team",
    description:
      "Recognized for excellence in event production and customer service.",
  },
  {
    icon: Shield,
    title: "Fully Insured",
    description: "Comprehensive coverage for peace of mind at every event.",
  },
  {
    icon: Zap,
    title: "Rapid Response",
    description:
      "Quick turnaround times and flexible planning for urgent events.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description:
      "Every event is unique and receives our full attention and care.",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description:
      "95% client retention rate and thousands of successful events.",
  },
];

// ============================================
// STATS DATA
// ============================================
const stats = [
  { value: "500+", label: "Events Executed", icon: CalendarDays },
  { value: "100K+", label: "Attendees", icon: Users },
  { value: "150+", label: "Venue Partners", icon: MapPin },
  { value: "95%", label: "Client Satisfaction", icon: Star },
];

// ============================================
// TESTIMONIALS DATA
// ============================================
const testimonials = [
  {
    quote:
      "Memora transformed our corporate conference into an unforgettable experience. Their attention to detail and professionalism exceeded all expectations.",
    author: "Andreas Georgiou",
    role: "CEO",
    company: "TechCorp Cyprus",
  },
  {
    quote:
      "Finding the perfect venue seemed impossible until Memora stepped in. They secured us a stunning beachfront location at an amazing rate.",
    author: "Maria Christodoulou",
    role: "Event Manager",
    company: "Cyprus Tourism Board",
  },
  {
    quote:
      "The vendor network Memora provided was exceptional. Every supplier was professional, on-time, and delivered exactly what was promised.",
    author: "Elena Papadopoulos",
    role: "Marketing Director",
    company: "Luxury Hotels Cyprus",
  },
];

// ============================================
// PROCESS STEPS
// ============================================
const processSteps = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We learn about your vision, goals, budget, and requirements.",
  },
  {
    number: "02",
    title: "Proposal & Planning",
    description:
      "Receive a detailed proposal with venue options, vendors, and timeline.",
  },
  {
    number: "03",
    title: "Coordination",
    description:
      "We manage all logistics, vendors, and details leading up to your event.",
  },
  {
    number: "04",
    title: "Event Execution",
    description:
      "On the day, we ensure flawless execution while you enjoy the moment.",
  },
];

// ============================================
// FAQ DATA
// ============================================
const faqData = [
  {
    question: "What types of events do you specialize in?",
    answer:
      "We specialize in corporate events, conferences, festivals, private celebrations, product launches, team building activities, and large-scale public events. Our team has experience with events ranging from 20 to 100,000+ attendees.",
  },
  {
    question: "How far in advance should I book your services?",
    answer:
      "We recommend booking at least 3-6 months in advance for major events to ensure venue and vendor availability. However, we can accommodate shorter timelines for smaller events or urgent requests. Contact us to discuss your specific needs.",
  },
  {
    question: "Do you only work in Cyprus?",
    answer:
      "While Cyprus is our primary market and where we have the strongest network, we also organize student trips and events across Europe. Our team can travel to coordinate events in select international locations.",
  },
  {
    question: "What's included in your event planning services?",
    answer:
      "Our comprehensive service includes concept development, venue sourcing, vendor coordination, budget management, timeline creation, on-site coordination, and post-event wrap-up. We can customize our package based on your specific needs and budget.",
  },
  {
    question: "How do you charge for your services?",
    answer:
      "Our pricing depends on the event size, complexity, and services required. We offer both flat-fee packages and percentage-based pricing. After our initial consultation, we provide a transparent proposal with all costs clearly outlined.",
  },
];

// ============================================
// COMPONENTS
// ============================================

// FAQ Item Component
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
        className="flex w-full items-center justify-between py-4 sm:py-5 text-left transition-colors hover:text-orange-600"
      >
        <span className="pr-4 text-base sm:text-lg font-semibold text-slate-900">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-slate-400 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pb-5 text-sm sm:text-base leading-relaxed text-slate-600">
            {answer}
          </p>
        </motion.div>
      )}
    </div>
  );
}

// Service Card Component
function ServiceCard({
  service,
  index,
}: {
  service: (typeof mainServices)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-orange-200"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        {/* Icon Badge */}
        <div
          className={`absolute bottom-6 left-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} shadow-xl transition-transform duration-300 group-hover:scale-110`}
        >
          <service.icon className="h-7 w-7 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 sm:p-8">
        <h3 className="mb-3 text-2xl font-bold text-slate-900">
          {service.title}
        </h3>
        <p className="mb-6 text-slate-600 leading-relaxed">
          {service.fullDescription}
        </p>

        {/* Features */}
        <div className="mb-6 space-y-2">
          <p className="text-sm font-semibold text-slate-900 mb-3">
            What&apos;s Included:
          </p>
          {service.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2">
              <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-orange-500 mt-0.5" />
              <span className="text-sm text-slate-600">{feature}</span>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
          {service.benefits.map((benefit, i) => (
            <span
              key={i}
              className={`rounded-full bg-gradient-to-r ${service.gradient} bg-opacity-10 px-3 py-1 text-xs font-medium text-slate-700`}
            >
              {benefit}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const whyRef = useRef(null);
  const processRef = useRef(null);
  const testimonialsRef = useRef(null);
  const formRef = useRef(null);
  const faqRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-100px" });
  const isWhyInView = useInView(whyRef, { once: true, margin: "-100px" });
  const isProcessInView = useInView(processRef, { once: true, margin: "-100px" });
  const isTestimonialsInView = useInView(testimonialsRef, {
    once: true,
    margin: "-100px",
  });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" });

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
              <Sparkles className="h-4 w-4" />
              Event Management Services
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white"
            >
              From Vision to Reality
              <span className="block bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
                We Handle Everything
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-12 max-w-3xl text-lg sm:text-xl text-slate-300 px-4"
            >
              Comprehensive event solutions including planning, venue sourcing,
              vendor coordination, and corporate event management. Over 10 years
              of excellence in Cyprus.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-6 backdrop-blur-sm"
                >
                  <stat.icon className="mx-auto mb-3 h-8 w-8 text-orange-400" />
                  <p className="text-2xl sm:text-3xl font-bold text-white">
                    {stat.value}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-orange-500/30 transition-all hover:scale-105 hover:shadow-2xl"
              >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/20 hover:border-white/40"
              >
                Explore Services
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* MAIN SERVICES SECTION */}
      {/* ============================================ */}
      <section
        id="services"
        ref={servicesRef}
        className="relative overflow-hidden bg-slate-50 py-20 sm:py-28"
      >
        <div className="absolute -right-40 top-40 h-[400px] w-[400px] rounded-full bg-orange-200/40 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isServicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm">
              <Star className="h-4 w-4" />
              Our Services
            </span>
            <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
              Complete Event{" "}
              <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                Solutions
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              From concept to execution, we provide everything you need to
              create extraordinary events that leave lasting impressions.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid gap-8 lg:grid-cols-2">
            {mainServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* WHY CHOOSE US SECTION */}
      {/* ============================================ */}
      <section ref={whyRef} className="relative bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isWhyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600">
              <Award className="h-4 w-4" />
              Why Choose Memora
            </span>
            <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
              The Memora Difference
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Experience, expertise, and dedication that sets us apart.
            </p>
          </motion.div>

          {/* Why Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((reason, index) => (
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
        </div>
      </section>

      {/* ============================================ */}
      {/* PROCESS SECTION */}
      {/* ============================================ */}
      <section ref={processRef} className="relative bg-slate-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Our Process
            </span>
            <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
              How We Work
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              A streamlined process designed for your success.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isProcessInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-4 text-5xl font-bold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                    {step.number}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-slate-600">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-300 to-rose-300" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* TESTIMONIALS SECTION */}
      {/* ============================================ */}
      <section
        ref={testimonialsRef}
        className="relative bg-white py-20 sm:py-28"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600">
              <Star className="h-4 w-4" />
              Client Success Stories
            </span>
            <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
              Trusted by the Best
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
                <div className="mb-4 flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>
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
      {/* CONTACT FORM SECTION */}
      {/* ============================================ */}
      <section
        id="contact"
        ref={formRef}
        className="relative overflow-hidden bg-gradient-to-br from-orange-500 via-rose-500 to-orange-600 py-20 sm:py-28"
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
            <h2 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              Let&apos;s Create Something Amazing
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90">
              Tell us about your event and we&apos;ll get back to you within 24
              hours with a custom proposal.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {formSubmitted ? (
              <div className="rounded-2xl bg-white p-12 text-center shadow-2xl">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-rose-500">
                  <CheckCircle2 className="h-10 w-10 text-white" />
                </div>
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  Thank You!
                </h3>
                <p className="mb-6 text-slate-600">
                  We&apos;ve received your inquiry. Our team will review your
                  request and get back to you within 24 hours.
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
                className="rounded-2xl bg-white p-8 shadow-2xl"
              >
                <div className="grid gap-6 sm:grid-cols-2">
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

                  {/* Event Type */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Event Type *
                    </label>
                    <select
                      required
                      className="w-full appearance-none rounded-xl border border-slate-300 bg-white py-3 pl-4 pr-10 text-slate-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    >
                      <option value="">Select event type</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="conference">Conference</option>
                      <option value="festival">Festival</option>
                      <option value="private">Private Celebration</option>
                      <option value="product-launch">Product Launch</option>
                      <option value="team-building">Team Building</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Attendees */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Expected Attendees
                    </label>
                    <select className="w-full appearance-none rounded-xl border border-slate-300 bg-white py-3 pl-4 pr-10 text-slate-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20">
                      <option value="">Select range</option>
                      <option value="0-50">0-50</option>
                      <option value="51-100">51-100</option>
                      <option value="101-250">101-250</option>
                      <option value="251-500">251-500</option>
                      <option value="500+">500+</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Estimated Budget
                    </label>
                    <select className="w-full appearance-none rounded-xl border border-slate-300 bg-white py-3 pl-4 pr-10 text-slate-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20">
                      <option value="">Select budget range</option>
                      <option value="under-5k">Under €5,000</option>
                      <option value="5k-10k">€5,000 - €10,000</option>
                      <option value="10k-25k">€10,000 - €25,000</option>
                      <option value="25k-50k">€25,000 - €50,000</option>
                      <option value="50k+">€50,000+</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Tell Us About Your Event *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                      <textarea
                        required
                        rows={4}
                        placeholder="Describe your event vision, goals, and any specific requirements..."
                        className="w-full resize-none rounded-xl border border-slate-300 bg-white py-3 pl-12 pr-4 text-slate-900 placeholder-slate-400 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 py-4 text-lg font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/30"
                    >
                      Submit Inquiry
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* FAQ SECTION */}
      {/* ============================================ */}
      <section ref={faqRef} className="relative bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Everything you need to know about our services
            </p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
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
                Get in touch with our team
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================ */}
      {/* BACK LINK */}
      {/* ============================================ */}
      <section className="border-t border-slate-200 bg-slate-50 py-12">
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
