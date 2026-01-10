"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  User,
  Building2,
  CheckCircle,
  ChevronDown,
  Sparkles,
  Send,
  Globe,
  Calendar,
} from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";

// ============================================
// FAQ DATA
// ============================================
const faqData = [
  {
    question: "How quickly will I receive a response?",
    answer:
      "We aim to respond to all inquiries within 24-48 business hours. For urgent matters, please call us directly at +357 99 123 456.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer:
      "Yes! We offer both in-person and virtual consultations to accommodate your schedule and location. Simply mention your preference when booking.",
  },
  {
    question: "What information should I include in my inquiry?",
    answer:
      "Please include your event type, preferred dates, estimated number of attendees, budget range, and any specific requirements or questions you have.",
  },
  {
    question: "Can I visit your office in person?",
    answer:
      "Absolutely! Our office is located in Nicosia, Cyprus. We recommend scheduling an appointment to ensure someone is available to assist you.",
  },
  {
    question: "Do you handle events outside of Cyprus?",
    answer:
      "Yes, we organize events throughout Europe and can coordinate international events. Contact us to discuss your specific needs and location.",
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
            <p className="pb-3 sm:pb-4 md:pb-5 text-sm sm:text-base leading-relaxed text-slate-600">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================
// CONTACT METHODS
// ============================================
const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    contact: "hello@memoraexperience.com",
    href: "mailto:hello@memoraexperience.com",
    color: "from-orange-500 to-rose-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak with our team",
    contact: "+357 99 123 456",
    href: "tel:+35799123456",
    color: "from-blue-500 to-indigo-500",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Come see us in person",
    contact: "Nicosia, Cyprus",
    href: "https://maps.google.com/?q=Nicosia+Cyprus",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "When we're available",
    contact: "Mon-Fri: 9AM-6PM",
    href: "#",
    color: "from-violet-500 to-purple-500",
  },
];

// ============================================
// MAIN PAGE COMPONENT
// ============================================
export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const heroRef = useRef(null);
  const methodsRef = useRef(null);
  const formRef = useRef(null);
  const faqRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isMethodsInView = useInView(methodsRef, { once: true, margin: "-100px" });
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-100px" });

  const stats = [
    { value: "24-48h", label: "Response Time", icon: Clock },
    { value: "100%", label: "Response Rate", icon: CheckCircle },
    { value: "500+", label: "Happy Clients", icon: User },
    { value: "10+", label: "Years Experience", icon: Calendar },
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
              <MessageSquare className="h-4 w-4" />
              Get in Touch
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-4 sm:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white px-2"
            >
              We&apos;d Love to
              <span className="block bg-gradient-to-r from-orange-400 to-rose-400 bg-clip-text text-transparent">
                Hear From You
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mx-auto mb-8 sm:mb-12 max-w-3xl px-4 text-base sm:text-lg md:text-xl text-slate-300"
            >
              Have a question about our events? Need help planning your next experience?
              Our team is here to help and ready to assist you.
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
                  <p className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                    {stat.value}
                  </p>
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
                href="#contact-form"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-orange-500/30 transition-all hover:scale-105 hover:shadow-2xl"
              >
                Send Us a Message
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CONTACT METHODS SECTION */}
      {/* ============================================ */}
      <section ref={methodsRef} className="relative overflow-hidden bg-zinc-50 py-12 sm:py-20 md:py-28">
        <div className="absolute -right-40 top-40 h-[400px] w-[400px] rounded-full bg-orange-200/40 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isMethodsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm">
              <Phone className="h-4 w-4" />
              Contact Options
            </span>
            <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
              Choose Your Preferred
              <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                {" "}
                Contact Method
              </span>
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Reach out to us through any of these channels. We&apos;re here to help
              and respond promptly to all inquiries.
            </p>
          </motion.div>

          {/* Contact Method Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                href={method.href}
                target={method.href.startsWith("http") ? "_blank" : undefined}
                rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 30 }}
                animate={isMethodsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className={`mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${method.color} shadow-lg transition-transform group-hover:scale-110`}
                >
                  <method.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-slate-900">
                  {method.title}
                </h3>
                <p className="mb-3 text-sm text-slate-600">{method.description}</p>
                <p className="text-base font-semibold text-slate-900">{method.contact}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================ */}
      {/* CONTACT FORM SECTION */}
      {/* ============================================ */}
      <section
        id="contact-form"
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
              Send Us a Message
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-white/90">
              Fill out the form below and we&apos;ll get back to you as soon as
              possible, usually within 24-48 hours.
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
                  Thank You for Contacting Us!
                </h3>
                <p className="mb-6 text-slate-600">
                  We&apos;ve received your message and will get back to you within
                  24-48 business hours. We appreciate your patience.
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
                        placeholder="john@example.com"
                        className="w-full rounded-lg sm:rounded-xl border border-slate-300 bg-white py-2.5 sm:py-3 pl-10 sm:pl-12 pr-3 sm:pr-4 text-sm sm:text-base text-slate-900 placeholder-slate-400 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Phone Number <span className="text-slate-400 font-normal">(optional)</span>
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

                  {/* Subject */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Subject *
                    </label>
                    <select
                      required
                      className="w-full appearance-none rounded-lg sm:rounded-xl border border-slate-300 bg-white py-2.5 sm:py-3 pl-3 sm:pl-4 pr-8 sm:pr-10 text-sm sm:text-base text-slate-900 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="student-trips">Student Trips</option>
                      <option value="sponsorship">Sponsorship / Partnership</option>
                      <option value="business">Business / Corporate Events</option>
                      <option value="events">Event Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Company (Full Width) */}
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Company / Organization <span className="text-slate-400 font-normal">(optional)</span>
                    </label>
                    <div className="relative">
                      <Building2 className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Your Company Ltd"
                        className="w-full rounded-lg sm:rounded-xl border border-slate-300 bg-white py-2.5 sm:py-3 pl-10 sm:pl-12 pr-3 sm:pr-4 text-sm sm:text-base text-slate-900 placeholder-slate-400 transition-colors focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/20"
                      />
                    </div>
                  </div>

                  {/* Message (Full Width) */}
                  <div className="sm:col-span-2">
                    <label className="mb-2 block text-sm font-medium text-slate-700">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-3.5 h-5 w-5 text-slate-400" />
                      <textarea
                        required
                        rows={5}
                        placeholder="Tell us how we can help you..."
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
                      Send Message
                      <Send className="h-4 w-4 sm:h-5 sm:w-5 transition-transform group-hover:translate-x-1" />
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
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Common questions about contacting Memora Experience
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
                href="#contact-form"
                className="font-semibold text-orange-600 hover:text-orange-700"
              >
                Send us a message
              </a>{" "}
              or{" "}
              <a
                href="tel:+35799123456"
                className="font-semibold text-orange-600 hover:text-orange-700"
              >
                call us directly
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
