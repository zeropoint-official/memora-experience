"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  CalendarDays,
  MapPin,
  Users,
  Sparkles,
  ArrowRight,
  Building2,
  Music,
  Plane,
} from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: CalendarDays,
    title: "Event Planning",
    description:
      "End-to-end event management from concept to execution. We handle every detail so you can focus on enjoying the moment.",
    features: ["Timeline Management", "Budget Planning", "Vendor Coordination"],
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-50 to-amber-50",
  },
  {
    icon: MapPin,
    title: "Venue Sourcing",
    description:
      "Access to Cyprus's most exclusive venues. From beachfront locations to historic landmarks, we find the perfect setting.",
    features: ["Site Visits", "Contract Negotiation", "Layout Design"],
    gradient: "from-rose-500 to-pink-500",
    bgGradient: "from-rose-50 to-pink-50",
  },
  {
    icon: Users,
    title: "Vendor Coordination",
    description:
      "Our network of trusted partners ensures quality across catering, entertainment, décor, and technical production.",
    features: ["Vetted Partners", "Quality Assurance", "Seamless Integration"],
    gradient: "from-purple-500 to-violet-500",
    bgGradient: "from-purple-50 to-violet-50",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Professional conferences, team building, and brand activations that elevate your company's presence in Cyprus.",
    features: ["Brand Integration", "Keynote Support", "Networking Events"],
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
];

const eventTypes = [
  { icon: Sparkles, label: "Festivals", count: "15+" },
  { icon: Plane, label: "Student Trips", count: "20+" },
  { icon: Building2, label: "Business Expos", count: "10+" },
  { icon: Music, label: "Concerts", count: "25+" },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div
        className={cn(
          "relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-500",
          "hover:border-transparent hover:shadow-2xl hover:shadow-slate-200/50"
        )}
      >
        {/* Background gradient on hover */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
            service.bgGradient
          )}
        />

        {/* Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div
            className={cn(
              "mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-lg transition-transform duration-300 group-hover:scale-110",
              service.gradient
            )}
          >
            <service.icon className="h-7 w-7 text-white" />
          </div>

          {/* Title */}
          <h3 className="mb-3 text-xl md:text-2xl font-semibold tracking-normal leading-tight">
            {(() => {
              const words = service.title.split(" ");
              const mid = Math.ceil(words.length / 2);
              return (
                <>
                  <span className="text-[#6B6B6B]">{words.slice(0, mid).join(" ")}</span>{" "}
                  <span className="text-[#D4A574]">{words.slice(mid).join(" ")}</span>
                </>
              );
            })()}
          </h3>

          {/* Description */}
          <p className="mb-6 text-slate-600 leading-relaxed">
            {service.description}
          </p>

          {/* Features */}
          <div className="mb-6 flex flex-wrap gap-2">
            {service.features.map((feature, i) => (
              <span
                key={i}
                className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-600 transition-colors group-hover:bg-white/80"
              >
                {feature}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center text-sm font-semibold text-slate-900 transition-colors group-hover:text-orange-600">
            <span>Learn more</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>

        {/* Decorative corner */}
        <div
          className={cn(
            "absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-30",
            service.gradient
          )}
        />
      </div>
    </motion.div>
  );
}

export function ServicesSection() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      {/* Background decorations */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
      <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-orange-200/30 blur-[100px]" />
      <div className="absolute -right-40 bottom-40 h-80 w-80 rounded-full bg-rose-200/30 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="mb-16 text-center lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm"
          >
            <Sparkles className="h-4 w-4" />
            <span>What We Offer</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight"
          >
            <span className="text-[#6B6B6B]">Services Tailored</span>
            <br />
            <span className="text-[#D4A574]">For Every Event</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-lg text-slate-600"
          >
            From intimate gatherings to large-scale festivals, we provide
            comprehensive event solutions that bring your vision to life.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="mb-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* Event Types Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-xl shadow-slate-200/50 p-8 lg:p-12"
        >
          {/* Background glow */}
          <div className="absolute left-1/4 top-0 h-64 w-64 rounded-full bg-orange-200/30 blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-rose-200/30 blur-[100px]" />

          <div className="relative z-10 flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            {/* Text */}
            <div className="text-center lg:text-left">
              <h3 className="mb-2 text-xl md:text-2xl lg:text-3xl font-medium tracking-normal leading-tight">
                <span className="text-[#6B6B6B]">Events We&apos;ve Brought to</span>{" "}
                <span className="text-[#D4A574]">Life</span>
              </h3>
              <p className="max-w-md text-slate-600">
                From legendary Planitario nights to unforgettable student
                adventures across Europe.
              </p>
            </div>

            {/* Event type cards */}
            <div className="flex flex-wrap justify-center gap-4">
              {eventTypes.map((type, i) => (
                <motion.div
                  key={type.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ y: -4, scale: 1.05 }}
                  className="flex flex-col items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 transition-all hover:border-orange-300 hover:bg-white hover:shadow-md"
                >
                  <type.icon className="h-6 w-6 text-orange-500" />
                  <span className="text-2xl font-bold text-slate-900">
                    {type.count}
                  </span>
                  <span className="text-sm text-slate-600">{type.label}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="relative z-10 mt-8 flex justify-center lg:justify-start">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/40"
            >
              <span>View All Events</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

