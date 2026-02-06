"use client";

import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  Store,
  Megaphone,
  Check,
  Mail,
  Phone,
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
  const isFormInView = useInView(formRef, { once: true, margin: "-80px" });

  return (
    <section
      id="contact-form"
      ref={formRef}
      className="relative bg-[#FAF8F5] py-20 sm:py-28 lg:py-36"
    >
      {/* Subtle warm gradient at the top */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#E8C9A0]/40 to-transparent" />

      <div className="relative mx-auto max-w-2xl px-5 sm:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isFormInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-12 sm:mb-14 text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574] mb-5">
            Work with us
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 leading-tight">
            Let&apos;s Create Something
            <br />
            <span className="text-[#C8965F]">Together</span>
          </h2>
          <p className="mt-4 text-base text-slate-500 leading-relaxed max-w-md mx-auto">
            Vend at our events or become a sponsor — either way,
            we&apos;d love to work with you.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isFormInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="rounded-2xl bg-white border border-slate-100 shadow-sm shadow-slate-200/50 p-6 sm:p-8 lg:p-10"
        >
          {formSubmitted ? (
            /* ========== SUCCESS STATE ========== */
            <div className="py-12 text-center">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4A574]"
              >
                <Check className="h-6 w-6 text-white" />
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                We&apos;ll be in touch
              </h3>
              <p className="text-sm text-slate-500 max-w-sm mx-auto leading-relaxed">
                Thank you for your {activeTab === "vendor" ? "vendor application" : "sponsorship inquiry"}.
                We typically respond within 24–48 hours.
              </p>
            </div>
          ) : (
            /* ========== FORM ========== */
            <>
              {/* Tab Switcher */}
              <div className="flex gap-1.5 rounded-xl bg-[#F7F4F0] p-1.5 mb-8">
                {[
                  { key: "vendor" as const, label: "Vendor", icon: Store },
                  { key: "sponsor" as const, label: "Sponsor", icon: Megaphone },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    onClick={() => setActiveTab(tab.key)}
                    className={`relative flex flex-1 items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      activeTab === tab.key
                        ? "bg-white text-slate-900 shadow-sm"
                        : "text-slate-400 hover:text-slate-600"
                    }`}
                  >
                    <tab.icon className={`h-3.5 w-3.5 ${activeTab === tab.key ? "text-[#D4A574]" : ""}`} />
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Form Content */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <input type="hidden" name="type" value={activeTab} />

                    <div className="space-y-5">
                      {/* Name & Email */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-[13px] font-medium text-slate-600 mb-1.5">
                            Full name <span className="text-[#D4A574]">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Smith"
                            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-300 transition-all focus:border-[#D4A574]/50 focus:ring-1 focus:ring-[#D4A574]/20 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[13px] font-medium text-slate-600 mb-1.5">
                            Email <span className="text-[#D4A574]">*</span>
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@example.com"
                            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-300 transition-all focus:border-[#D4A574]/50 focus:ring-1 focus:ring-[#D4A574]/20 focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Phone & Company */}
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <label className="block text-[13px] font-medium text-slate-600 mb-1.5">
                            Phone
                            <span className="ml-1 font-normal text-slate-300">(optional)</span>
                          </label>
                          <input
                            type="tel"
                            placeholder="+357 99 123 456"
                            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-300 transition-all focus:border-[#D4A574]/50 focus:ring-1 focus:ring-[#D4A574]/20 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[13px] font-medium text-slate-600 mb-1.5">
                            {activeTab === "vendor" ? "Business name" : "Company name"}
                            {activeTab === "sponsor" && <span className="text-[#D4A574] ml-0.5">*</span>}
                          </label>
                          <input
                            type="text"
                            required={activeTab === "sponsor"}
                            placeholder={activeTab === "vendor" ? "Your business" : "Your company"}
                            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-300 transition-all focus:border-[#D4A574]/50 focus:ring-1 focus:ring-[#D4A574]/20 focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Vendor-specific fields */}
                      {activeTab === "vendor" && (
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label className="block text-[13px] font-medium text-slate-600 mb-1.5">
                              Category <span className="text-[#D4A574]">*</span>
                            </label>
                            <select
                              required
                              className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition-all focus:border-[#D4A574]/50 focus:ring-1 focus:ring-[#D4A574]/20 focus:outline-none"
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
                            <label className="block text-[13px] font-medium text-slate-600 mb-1.5">
                              Interested event
                            </label>
                            <select
                              className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 transition-all focus:border-[#D4A574]/50 focus:ring-1 focus:ring-[#D4A574]/20 focus:outline-none"
                            >
                              <option value="">Any / All Events</option>
                              <option value="kratiki-ekthesi">Kratiki Ekthesi 2026</option>
                              <option value="planitario">Planitario 2026</option>
                              <option value="summer-festival">Summer Festival 2026</option>
                            </select>
                          </div>
                        </div>
                      )}

                      {/* Message */}
                      <div>
                        <label className="block text-[13px] font-medium text-slate-600 mb-1.5">
                          {activeTab === "vendor"
                            ? "Tell us about your products or services"
                            : "Describe your partnership goals"}
                          <span className="text-[#D4A574] ml-0.5">*</span>
                        </label>
                        <textarea
                          required
                          rows={4}
                          placeholder={
                            activeTab === "vendor"
                              ? "What you'd like to offer, your experience, and any requirements..."
                              : "Your brand, target audience, and what you hope to achieve..."
                          }
                          className="w-full resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 placeholder:text-slate-300 transition-all focus:border-[#D4A574]/50 focus:ring-1 focus:ring-[#D4A574]/20 focus:outline-none"
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#D4A574] py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#C8965F] active:scale-[0.99]"
                      >
                        {activeTab === "vendor" ? "Submit application" : "Submit inquiry"}
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </button>

                      {/* Privacy */}
                      <p className="text-center text-xs text-slate-400">
                        By submitting, you agree to our{" "}
                        <a href="#" className="underline underline-offset-2 hover:text-[#D4A574] transition-colors">
                          Privacy Policy
                        </a>
                      </p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </form>
            </>
          )}
        </motion.div>

        {/* Contact info — warm, below form */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isFormInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-8"
        >
          <a
            href="mailto:partners@memoraexperience.com"
            className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-[#D4A574]"
          >
            <Mail className="h-3.5 w-3.5" />
            partners@memoraexperience.com
          </a>
          <span className="hidden sm:block h-3.5 w-px bg-slate-200" />
          <a
            href="tel:+35799123456"
            className="group flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-[#D4A574]"
          >
            <Phone className="h-3.5 w-3.5" />
            +357 99 123 456
          </a>
        </motion.div>
      </div>
    </section>
  );
}
