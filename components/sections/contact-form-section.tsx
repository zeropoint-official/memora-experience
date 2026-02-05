"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  User,
  Building2,
  MessageSquare,
  Send,
  CheckCircle,
  Store,
  Megaphone,
  Globe,
  MapPin,
  Tag,
  ArrowRight,
  Briefcase,
} from "lucide-react";

const vendorCategories = [
  "Food & Beverage",
  "Entertainment",
  "Retail / Merchandise",
  "Services",
  "Other",
];

export function ContactFormSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"vendor" | "sponsor">("vendor");
  const formRef = useRef(null);
  const isFormInView = useInView(formRef, { once: true, margin: "-100px" });

  return (
    <section
      id="contact-form"
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
            <MessageSquare className="h-4 w-4" />
            Get in Touch
          </span>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            Partner With Us
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
            Whether you&apos;re looking to vend at our events or become a sponsor,
            we&apos;d love to hear from you
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
                  Thank You for Reaching Out!
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
  );
}
