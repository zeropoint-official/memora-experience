"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

// Animation variants for staggered effects
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};


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
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[#FAF7F2]/50 blur-[120px]" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-[#FAF7F2]/50 blur-[120px]" />
        
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #f97316 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            variants={itemVariants}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E8C9A0] bg-[#FAF7F2] px-4 py-2 text-sm font-medium text-[#D4A574]"
          >
            <Sparkles className="h-4 w-4" />
            <span>About Memora</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mb-5 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight leading-tight"
          >
            <span className="text-[#6B6B6B]">Crafting</span>{" "}
            <span className="text-[#D4A574]">Unforgettable</span>
            <br />
            <span className="text-[#6B6B6B]">Moments</span>{" "}
            <span className="text-[#6B6B6B]">in</span>{" "}
            <span className="text-[#D4A574]">Cyprus</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-slate-600 leading-relaxed"
          >
            Born from a love for bringing people together, Memora Experience is Cyprus's 
            premier event company. From legendary Kratiki Ekthesi nights to 
            unforgettable adventures across the island, we turn your wildest visions 
            into reality.
          </motion.p>
        </div>

        {/* Story Section */}
        <motion.div variants={itemVariants} className="mt-16 lg:mt-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
            {/* Image Collage */}
            <motion.div
              variants={itemVariants}
              className="relative"
            >
              <div className="relative mx-auto max-w-lg lg:max-w-none">
                {/* Main image */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-200/60">
                  <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
                    alt="Memora Experience Event"
                    className="w-full h-64 sm:h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  
                  {/* Floating badge */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-white/95 backdrop-blur-sm px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg">
                    <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-gradient-to-br from-[#D4A574] to-[#C8965F]">
                      <Zap className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-white" />
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs text-slate-500">Cyprus Events</p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-900">Memora Experience</p>
                    </div>
                  </div>
                </div>

                {/* Secondary image - floating - hidden on mobile to prevent overlap */}
                <motion.div
                  variants={itemVariants}
                  className="hidden sm:block absolute -bottom-6 -right-8 w-44 overflow-hidden rounded-2xl border-4 border-white shadow-xl"
                >
                  <img
                    src="https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=300&fit=crop"
                    alt="Event atmosphere"
                    className="h-28 w-full object-cover"
                  />
                </motion.div>

                {/* Decorative element */}
                <div className="absolute -left-4 -top-4 h-16 w-16 rounded-full bg-gradient-to-br from-[#E8C9A0] to-[#D4A574] opacity-20 blur-xl" />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              variants={itemVariants}
            >
              <h3 className="mb-4 text-xl md:text-2xl lg:text-3xl font-medium tracking-normal leading-tight text-slate-900">
                Our Story
              </h3>
              <p className="mb-6 text-slate-600 leading-relaxed">
                What started as a passion project among friends has grown into Cyprus's 
                most exciting event experience company. We believe every gathering—whether 
                it's a legendary night at Kratiki Ekthesi, an epic boat party in Ayia Napa, 
                or a Troodos mountain adventure—deserves to be nothing short of extraordinary.
              </p>
              <p className="mb-8 text-slate-600 leading-relaxed">
                Our team combines local expertise with international flair, connecting 
                you to the best venues, vendors, and experiences the Mediterranean has 
                to offer. We don't just plan events; we create memories that last a lifetime.
              </p>

              {/* Mission statement */}
              <div className="relative overflow-hidden rounded-2xl border border-[#E8C9A0] bg-gradient-to-br from-[#FAF7F2] to-[#FAF7F2] p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#D4A574] to-[#C8965F] shadow-lg shadow-[#D4A574]/20">
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
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-[#E8C9A0]/30 to-[#D4A574]/30 blur-3xl" />
              </div>
            </motion.div>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}

