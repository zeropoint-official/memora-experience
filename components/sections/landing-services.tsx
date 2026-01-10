"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import {
  Sparkles,
  CalendarDays,
  MapPin,
  Users,
  Building2,
  Plane,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  accentColor: string;
  image: string;
  delay: number;
}

function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  gradient,
  accentColor,
  image,
  delay,
}: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-200/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-100/50 hover:border-orange-200 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Icon badge */}
        <div
          className={`absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl ${gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}
        >
          <Icon className="h-6 w-6 text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-slate-900">{title}</h3>
        <p className="mb-4 text-sm text-slate-600 leading-relaxed">{description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-2 mb-5">
          {features.map((feature, i) => (
            <span
              key={i}
              className={`inline-flex items-center gap-1 rounded-full ${accentColor} px-2.5 py-1 text-xs font-medium`}
            >
              <CheckCircle2 className="h-3 w-3" />
              {feature}
            </span>
          ))}
        </div>

        {/* CTA */}
        <button className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors">
          Learn more
          <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
        </button>
      </div>
    </motion.div>
  );
}

const services = [
  {
    icon: CalendarDays,
    title: "Event Planning",
    description: "End-to-end event management that transforms your vision into unforgettable experiences.",
    features: ["Full Production", "Timeline Control"],
    gradient: "bg-gradient-to-br from-orange-500 to-amber-500",
    accentColor: "bg-orange-50 text-orange-700",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=400&fit=crop",
  },
  {
    icon: MapPin,
    title: "Venue Sourcing",
    description: "Access Cyprus's most exclusive locations – from beachfront settings to historic landmarks.",
    features: ["Exclusive Access", "Custom Layouts"],
    gradient: "bg-gradient-to-br from-rose-500 to-pink-500",
    accentColor: "bg-rose-50 text-rose-700",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&h=400&fit=crop",
  },
  {
    icon: Users,
    title: "Vendor Network",
    description: "Our curated network ensures excellence in catering, entertainment, décor, and more.",
    features: ["Vetted Partners", "Quality Assurance"],
    gradient: "bg-gradient-to-br from-purple-500 to-violet-500",
    accentColor: "bg-purple-50 text-purple-700",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=400&fit=crop",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Professionally executed conferences, team building, and brand activations.",
    features: ["Brand Integration", "Networking"],
    gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
    accentColor: "bg-blue-50 text-blue-700",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&h=400&fit=crop",
  },
  {
    icon: Plane,
    title: "Student Trips",
    description: "Expertly organized student trips across Europe with all logistics handled.",
    features: ["All-Inclusive", "Safety Priority"],
    gradient: "bg-gradient-to-br from-emerald-500 to-teal-500",
    accentColor: "bg-emerald-50 text-emerald-700",
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=500&h=400&fit=crop",
  },
];

export function LandingServices() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 lg:py-28">
      {/* Background decorations */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
      <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-orange-200/30 blur-[120px]" />
      <div className="absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-rose-200/30 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={headerRef} className="mb-12 text-center lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm"
          >
            <Sparkles className="h-4 w-4" />
            <span>Our Services</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Everything You Need
            <br />
            <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-orange-600 bg-clip-text text-transparent">
              Under One Roof
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-base sm:text-lg text-slate-600"
          >
            Comprehensive event services designed to make your planning effortless
            and your experiences extraordinary.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 lg:mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xl shadow-slate-200/50">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center text-white text-xs font-bold shadow-md"
                  >
                    {["M", "E", "X", "P"][i - 1]}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-900">Ready to get started?</p>
                <p className="text-sm text-slate-500">Join 10,000+ happy customers</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/40"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}



