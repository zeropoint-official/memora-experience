"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  CheckCircle,
} from "lucide-react";

// ============================================
// FAQ DATA
// ============================================
const faqData = [
  {
    question: "How quickly will I receive a response?",
    answer:
      "We aim to respond to all inquiries within 24-48 business hours. For urgent matters, please call us directly at 99116020.",
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
// FAQ ACCORDION
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
        className="flex w-full items-center justify-between py-4 sm:py-5 text-left transition-colors hover:text-[#C8965F]"
      >
        <span className="pr-4 text-[15px] sm:text-base font-medium text-slate-900">
          {question}
        </span>
        <ChevronDown
          className={`h-4 w-4 flex-shrink-0 text-slate-300 transition-transform duration-300 ${
            isOpen ? "rotate-180 text-[#D4A574]" : ""
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
            <p className="pb-4 sm:pb-5 text-sm sm:text-[15px] leading-relaxed text-slate-500">
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
    title: "Email",
    contact: "info@memora-experience.com",
    href: "mailto:info@memora-experience.com",
  },
  {
    icon: Phone,
    title: "Phone",
    contact: "99116020",
    href: "tel:99116020",
  },
  {
    icon: MapPin,
    title: "Location",
    contact: "Nicosia, Cyprus",
    href: "https://maps.google.com/?q=Nicosia+Cyprus",
  },
];

// ============================================
// MAIN PAGE
// ============================================
export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const heroRef = useRef(null);
  const formRef = useRef(null);
  const faqRef = useRef(null);

  const isHeroInView = useInView(heroRef, { once: true });
  const isFormInView = useInView(formRef, { once: true, margin: "-80px" });
  const isFaqInView = useInView(faqRef, { once: true, margin: "-80px" });

  return (
    <main className="relative min-h-screen w-full bg-[#FAF8F5]">
      {/* ——— HERO ——— */}
      <section
        ref={heroRef}
        className="relative overflow-hidden pb-10 pt-28 sm:pb-16 sm:pt-36 md:pb-20 md:pt-44"
      >
        {/* Subtle glow */}
        <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-[#E8C9A0]/10 blur-[120px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574]"
            >
              Contact
            </motion.p>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5 text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-slate-900"
            >
              We&apos;d Love to{" "}
              <span className="text-[#C8965F]">Hear From You</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mx-auto max-w-lg text-sm sm:text-base text-slate-500 leading-relaxed"
            >
              Have a question about our events? Need help planning your next
              experience? Our team is here to help.
            </motion.p>

            {/* Contact quick links */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-8"
            >
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex items-center gap-2.5 text-sm text-slate-500 transition-colors hover:text-[#C8965F]"
                >
                  <method.icon className="h-4 w-4 text-slate-300 transition-colors group-hover:text-[#D4A574]" />
                  <span className="font-medium">{method.contact}</span>
                </a>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ——— CONTACT FORM ——— */}
      <section
        id="contact-form"
        ref={formRef}
        className="relative py-10 sm:py-16 md:py-20"
      >
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574] mb-3">
              MESSAGE
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
              Send Us a Message
            </h2>
            <p className="mt-3 text-sm text-slate-500">
              Fill out the form and we&apos;ll get back to you within 24-48
              hours.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isFormInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            {formSubmitted ? (
              <div className="rounded-2xl bg-white border border-slate-100 p-8 text-center sm:p-12">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#FAF8F5]">
                  <CheckCircle className="h-7 w-7 text-[#D4A574]" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  Thank You!
                </h3>
                <p className="mb-6 text-sm text-slate-500 leading-relaxed">
                  We&apos;ve received your message and will get back to you
                  within 24-48 business hours.
                </p>
                <a
                  href="/"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[#D4A574] hover:text-[#C8965F]"
                >
                  <ArrowRight className="h-3.5 w-3.5 rotate-180" />
                  Back to Home
                </a>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="rounded-2xl bg-white border border-slate-100 p-5 sm:p-8 shadow-sm"
              >
                <div className="grid gap-5 sm:grid-cols-2">
                  {/* Full Name */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Smith"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-300 transition-colors focus:border-[#D4A574] focus:outline-none focus:ring-1 focus:ring-[#D4A574]/30"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-300 transition-colors focus:border-[#D4A574] focus:outline-none focus:ring-1 focus:ring-[#D4A574]/30"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Phone{" "}
                      <span className="text-slate-300 font-normal">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="tel"
                      placeholder="99116020"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-300 transition-colors focus:border-[#D4A574] focus:outline-none focus:ring-1 focus:ring-[#D4A574]/30"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Subject
                    </label>
                    <select
                      required
                      className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition-colors focus:border-[#D4A574] focus:outline-none focus:ring-1 focus:ring-[#D4A574]/30"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="student-trips">Student Trips</option>
                      <option value="sponsorship">
                        Sponsorship / Partnership
                      </option>
                      <option value="business">
                        Business / Corporate Events
                      </option>
                      <option value="events">Event Information</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Company */}
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Company{" "}
                      <span className="text-slate-300 font-normal">
                        (optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Your Company Ltd"
                      className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-300 transition-colors focus:border-[#D4A574] focus:outline-none focus:ring-1 focus:ring-[#D4A574]/30"
                    />
                  </div>

                  {/* Message */}
                  <div className="sm:col-span-2">
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      className="w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-300 transition-colors focus:border-[#D4A574] focus:outline-none focus:ring-1 focus:ring-[#D4A574]/30"
                    />
                  </div>

                  {/* Submit */}
                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4A574] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#C8965F]"
                    >
                      Send Message
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* ——— FAQ ——— */}
      <section ref={faqRef} className="relative bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574] mb-3">
              FAQ
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isFaqInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {faqData.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openFaq === index}
                onClick={() =>
                  setOpenFaq(openFaq === index ? null : index)
                }
              />
            ))}
          </motion.div>

          {/* Bottom link */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isFaqInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-10 text-center text-sm text-slate-400"
          >
            Still have questions?{" "}
            <a
              href="#contact-form"
              className="font-medium text-[#D4A574] hover:text-[#C8965F]"
            >
              Send us a message
            </a>{" "}
            or{" "}
            <a
              href="tel:99116020"
              className="font-medium text-[#D4A574] hover:text-[#C8965F]"
            >
              call us directly
            </a>
          </motion.p>
        </div>
      </section>

      {/* ——— BACK LINK ——— */}
      <div className="border-t border-slate-100 bg-[#FAF8F5] py-10">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <a
            href="/"
            className="group inline-flex items-center gap-1.5 text-sm text-slate-400 transition-colors hover:text-[#C8965F]"
          >
            <ArrowRight className="h-3.5 w-3.5 rotate-180 transition-transform group-hover:-translate-x-0.5" />
            Back to Home
          </a>
        </div>
      </div>
    </main>
  );
}
