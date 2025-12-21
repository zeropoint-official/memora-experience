"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  Sparkles,
  Users,
  Calendar,
  MapPin,
  Trophy,
  Target,
  Zap,
} from "lucide-react";

// Animated counter component
function AnimatedCounter({ 
  value, 
  suffix = "", 
  prefix = "" 
}: { 
  value: number; 
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = Date.now();
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Easing function for smooth animation
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setDisplayValue(Math.floor(value * easeOut));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

// Stats data
const stats = [
  {
    icon: Calendar,
    value: 50,
    suffix: "+",
    label: "Events Hosted",
    description: "Unforgettable experiences",
  },
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Happy Attendees",
    description: "Across all our events",
  },
  {
    icon: MapPin,
    value: 15,
    suffix: "+",
    label: "Unique Venues",
    description: "Across Cyprus & Europe",
  },
  {
    icon: Trophy,
    value: 5,
    suffix: "★",
    label: "Average Rating",
    description: "From verified reviews",
  },
];


export function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-20 lg:py-28"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-orange-100/50 blur-[120px]" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-rose-100/50 blur-[120px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #f97316 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600"
          >
            <Sparkles className="h-4 w-4" />
            <span>About Memora</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-5 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
          >
            Crafting{" "}
            <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-orange-600 bg-clip-text text-transparent">
              Unforgettable
            </span>
            <br />
            Moments in Cyprus
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Born from a love for bringing people together, Memora Experience is Cyprus's 
            premier event company. From the electric energy of Planitario nights to 
            unforgettable student adventures across Europe, we turn your wildest visions 
            into reality.
          </motion.p>
        </div>

        {/* Stats - Mobile Compact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 md:hidden"
        >
          <div className="relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-4 shadow-lg shadow-slate-100/50">
            <div className="flex items-center justify-between gap-2">
              {stats.map((stat, index) => (
                <div key={stat.label} className="flex flex-1 flex-col items-center text-center">
                  <div className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-500 to-rose-500 shadow-md shadow-orange-500/20">
                    <stat.icon className="h-4 w-4 text-white" />
                  </div>
                  <div className="text-lg font-bold text-slate-900">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-[10px] font-medium text-slate-600 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Stats Grid - Desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 hidden md:grid grid-cols-2 gap-6 lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-6 shadow-lg shadow-slate-100/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-100/50 hover:border-orange-200"
            >
              {/* Icon */}
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 shadow-lg shadow-orange-500/20 transition-transform duration-300 group-hover:scale-110">
                <stat.icon className="h-5 w-5 text-white" />
              </div>
              
              {/* Value */}
              <div className="mb-1 text-3xl font-bold text-slate-900">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              
              {/* Label */}
              <p className="text-sm font-semibold text-slate-700">{stat.label}</p>
              <p className="text-xs text-slate-500">{stat.description}</p>

              {/* Hover accent */}
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-orange-500/10 to-rose-500/10 blur-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <div className="mt-20 lg:mt-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image Collage */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Main image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-200/60">
                  <img
                    src="/Content/planitatio/The Cyprus Planetarium 2025.jpg"
                    alt="Memora Experience Event"
                    className="w-full h-72 sm:h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-4 py-2 shadow-lg">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-rose-500">
                      <Zap className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Featured Event</p>
                      <p className="text-sm font-semibold text-slate-900">Planitario Cyprus</p>
                    </div>
                  </div>
                </div>

                {/* Secondary image - floating */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="absolute -bottom-6 -right-4 sm:-right-8 w-36 sm:w-44 overflow-hidden rounded-2xl border-4 border-white shadow-xl"
                >
                  <img
                    src="/Content/planitatio/Cyprus Planetarium Lobby.jpg"
                    alt="Event atmosphere"
                    className="h-24 sm:h-28 w-full object-cover"
                  />
                </motion.div>

                {/* Decorative element */}
                <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br from-orange-400 to-rose-400 opacity-20 blur-xl" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="mb-4 text-2xl font-bold text-slate-900 sm:text-3xl">
                Our Story
              </h3>
              <p className="mb-6 text-slate-600 leading-relaxed">
                What started as a passion project among friends has grown into Cyprus's 
                most exciting event experience company. We believe every gathering—whether 
                it's a wild night under the stars at Planitario, a life-changing student 
                trip to Barcelona, or a polished corporate conference—deserves to be 
                nothing short of extraordinary.
              </p>
              <p className="mb-8 text-slate-600 leading-relaxed">
                Our team combines local expertise with international flair, connecting 
                you to the best venues, vendors, and experiences the Mediterranean has 
                to offer. We don't just plan events; we create memories that last a lifetime.
              </p>

              {/* Mission statement */}
              <div className="relative overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-br from-orange-50 to-rose-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 shadow-lg shadow-orange-500/20">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-slate-900">Our Mission</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      To transform every event into an unforgettable experience, 
                      connecting people through joy, adventure, and shared moments 
                      that define their stories.
                    </p>
                  </div>
                </div>
                
                {/* Decorative gradient */}
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-orange-300/30 to-rose-300/30 blur-3xl" />
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
}

