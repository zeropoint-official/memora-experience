"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Timeline } from "@/components/ui/timeline";
import {
  Sparkles,
  CalendarDays,
  MapPin,
  Users,
  Building2,
  Plane,
  ArrowRight,
  Star,
  CheckCircle2,
} from "lucide-react";

function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  stats,
  gradient,
  accentColor,
  images,
}: {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  stats: { value: string; label: string }[];
  gradient: string;
  accentColor: string;
  images: { src: string; alt: string }[];
}) {
  return (
    <div className="space-y-5">
      {/* Main Service Card */}
      <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-xl shadow-slate-200/50 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-100/50 hover:border-orange-200">
        {/* Background gradient decoration */}
        <div
          className={`absolute -right-16 -top-16 h-32 w-32 rounded-full ${gradient} opacity-20 blur-3xl transition-all duration-500 group-hover:opacity-40 group-hover:scale-150`}
        />
        <div
          className={`absolute -left-8 -bottom-8 h-24 w-24 rounded-full ${gradient} opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-30`}
        />

        <div className="relative z-10">
          {/* Header Row */}
          <div className="flex items-start gap-4 mb-5">
            <div
              className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${gradient} shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}
            >
              <Icon className="h-7 w-7 text-white" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg md:text-xl lg:text-2xl font-semibold tracking-normal leading-tight text-slate-900 mb-1">
                {title}
              </h4>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-2 text-sm text-slate-500">Top Rated</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-slate-600 mb-6 leading-relaxed">{description}</p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-6">
            {features.map((feature, i) => (
              <span
                key={i}
                className={`inline-flex items-center gap-1.5 rounded-full ${accentColor} px-3 py-1.5 text-sm font-medium transition-all hover:scale-105`}
              >
                <CheckCircle2 className="h-3.5 w-3.5" />
                {feature}
              </span>
            ))}
          </div>

          {/* Stats & CTA Row */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-slate-100">
            <div className="flex flex-wrap gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
            <button className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-700 transition-colors">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((image, i) => (
          <div
            key={i}
            className="group/img relative overflow-hidden rounded-2xl"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={500}
              height={500}
              className="object-cover h-28 md:h-40 lg:h-48 w-full transition-transform duration-500 group-hover/img:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover/img:translate-y-0 transition-transform duration-300">
              <span className="text-white text-sm font-medium drop-shadow-lg">
                {image.alt}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ServicesTimeline() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  const timelineData = [
    {
      title: "Events",
      content: (
        <ServiceCard
          icon={CalendarDays}
          title="Event Planning & Production"
          description="From concept to execution, we deliver end-to-end event management that transforms your vision into unforgettable experiences. Our team handles every detail with precision and creativity."
          features={["Full Production", "Budget Management", "Timeline Control"]}
          stats={[
            { value: "50+", label: "Events" },
            { value: "10K+", label: "Attendees" },
            { value: "98%", label: "Satisfaction" },
          ]}
          gradient="bg-gradient-to-br from-orange-500 to-amber-500"
          accentColor="bg-orange-50 text-orange-700"
          images={[
            {
              src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=500&fit=crop",
              alt: "Conference Event",
            },
            {
              src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=500&fit=crop",
              alt: "Festival Production",
            },
          ]}
        />
      ),
    },
    {
      title: "Venues",
      content: (
        <ServiceCard
          icon={MapPin}
          title="Venue Sourcing & Design"
          description="Access Cyprus's most exclusive locations – from stunning beachfront settings to historic landmarks. We negotiate contracts, design layouts, and transform spaces into spectacular environments."
          features={["Exclusive Access", "Contract Negotiation", "Custom Layouts"]}
          stats={[
            { value: "30+", label: "Venues" },
            { value: "Island", label: "Coverage" },
            { value: "VIP", label: "Treatment" },
          ]}
          gradient="bg-gradient-to-br from-rose-500 to-pink-500"
          accentColor="bg-rose-50 text-rose-700"
          images={[
            {
              src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=500&h=500&fit=crop",
              alt: "Luxury Venue Setup",
            },
            {
              src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&h=500&fit=crop",
              alt: "Beachfront Location",
            },
          ]}
        />
      ),
    },
    {
      title: "Vendors",
      content: (
        <ServiceCard
          icon={Users}
          title="Vendor & Partner Network"
          description="Our curated network of Cyprus's finest vendors ensures excellence in every aspect – catering, entertainment, décor, AV production, and more. Every partner is vetted for quality and reliability."
          features={["Vetted Partners", "Quality Assurance", "Seamless Integration"]}
          stats={[
            { value: "100+", label: "Vendors" },
            { value: "5★", label: "Avg. Rating" },
            { value: "24/7", label: "Support" },
          ]}
          gradient="bg-gradient-to-br from-purple-500 to-violet-500"
          accentColor="bg-purple-50 text-purple-700"
          images={[
            {
              src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=500&fit=crop",
              alt: "Premium Catering",
            },
            {
              src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=500&h=500&fit=crop",
              alt: "Live Entertainment",
            },
          ]}
        />
      ),
    },
    {
      title: "Corporate",
      content: (
        <ServiceCard
          icon={Building2}
          title="Corporate & Business Events"
          description="Elevate your company's presence with professionally executed conferences, team building experiences, product launches, and brand activations that leave lasting impressions."
          features={["Brand Integration", "Keynote Support", "Networking Events"]}
          stats={[
            { value: "25+", label: "Clients" },
            { value: "500+", label: "Guests" },
            { value: "ROI", label: "Focused" },
          ]}
          gradient="bg-gradient-to-br from-blue-500 to-cyan-500"
          accentColor="bg-blue-50 text-blue-700"
          images={[
            {
              src: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=500&h=500&fit=crop",
              alt: "Corporate Conference",
            },
            {
              src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=500&h=500&fit=crop",
              alt: "Team Building Event",
            },
          ]}
        />
      ),
    },
    {
      title: "Travel",
      content: (
        <ServiceCard
          icon={Plane}
          title="Student Trips & Adventures"
          description="Create memories that last a lifetime with our expertly organized student trips across Europe. From Barcelona adventures to Amsterdam explorations, we handle all logistics for worry-free travel."
          features={["All-Inclusive", "Safety Priority", "Local Experiences"]}
          stats={[
            { value: "20+", label: "Trips" },
            { value: "1000+", label: "Students" },
            { value: "15+", label: "Destinations" },
          ]}
          gradient="bg-gradient-to-br from-emerald-500 to-teal-500"
          accentColor="bg-emerald-50 text-emerald-700"
          images={[
            {
              src: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=500&h=500&fit=crop",
              alt: "European Adventure",
            },
            {
              src: "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=500&h=500&fit=crop",
              alt: "Student Group Trip",
            },
          ]}
        />
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      {/* Background decorations */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
      <div className="absolute -left-40 top-1/4 h-96 w-96 rounded-full bg-orange-200/40 blur-[120px]" />
      <div className="absolute -right-40 top-1/2 h-96 w-96 rounded-full bg-rose-200/40 blur-[120px]" />
      <div className="absolute -left-20 bottom-1/4 h-80 w-80 rounded-full bg-purple-200/30 blur-[100px]" />

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
            <span>Full-Service Solutions</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight text-slate-900"
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
            className="mx-auto max-w-2xl text-lg text-slate-600"
          >
            Discover our comprehensive range of services designed to make your
            event planning effortless and your experiences extraordinary.
          </motion.p>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <Timeline data={timelineData} />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-orange-400 to-rose-500 flex items-center justify-center text-white text-xs font-bold shadow-md"
                  >
                    {["M", "E", "X", "P"][i - 1]}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="font-semibold text-slate-900">
                  Ready to get started?
                </p>
                <p className="text-sm text-slate-500">
                  Join 10,000+ happy customers
                </p>
              </div>
            </div>
            <button className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-3 font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/40 hover:scale-105">
              <span>Book a Consultation</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
