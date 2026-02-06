"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="relative bg-white py-20 sm:py-28 lg:py-36 overflow-hidden"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-100 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Images — offset overlap */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15, delayChildren: 0.05 },
              },
            }}
            className="relative lg:order-2"
          >
            {/* Wrapper with aspect ratio to hold the composition */}
            <div className="relative w-full" style={{ paddingBottom: "110%" }}>
              {/* Primary image — large, positioned top-right */}
              <motion.div
                variants={itemVariants}
                className="absolute top-0 right-0 w-[78%] z-10"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg shadow-slate-200/60">
                  <img
                    src="/Content/planitatio/The Cyprus Planetarium 2025.jpg"
                    alt="Cyprus Planetarium 2025"
                    className="w-full aspect-[4/5] object-cover"
                  />
                </div>
              </motion.div>

              {/* Secondary image — smaller, offset bottom-left, overlapping */}
              <motion.div
                variants={itemVariants}
                className="absolute bottom-0 left-0 w-[55%] z-20"
              >
                <div className="overflow-hidden rounded-2xl shadow-xl shadow-slate-300/40 ring-4 ring-white">
                  <img
                    src="/Content/yacth1.jpg"
                    alt="Memora Boat Party"
                    className="w-full aspect-[3/4] object-cover"
                  />
                </div>
              </motion.div>

              {/* Subtle accent — small warm square behind composition */}
              <div className="absolute top-[8%] -right-3 w-24 h-24 rounded-xl bg-[#F5EDE4] -z-0" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.15 },
              },
            }}
            className="lg:order-1"
          >
            <motion.p
              variants={itemVariants}
              className="text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574] mb-5"
            >
              About us
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900 leading-tight mb-6"
            >
              Born from a love for
              <br />
              <span className="text-[#C8965F]">bringing people together</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base text-slate-500 leading-relaxed mb-5"
            >
              What started as a passion project among friends has grown into
              Cyprus&apos;s most exciting event experience company. We believe every
              gathering — whether it&apos;s a legendary night at Kratiki Ekthesi, an
              epic boat party, or a mountain adventure — deserves to be nothing
              short of extraordinary.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-base text-slate-500 leading-relaxed mb-10"
            >
              Our team combines local expertise with international flair,
              connecting you to the best venues, vendors, and experiences the
              Mediterranean has to offer.
            </motion.p>

            {/* Mission — left-border accent */}
            <motion.div
              variants={itemVariants}
              className="border-l-2 border-[#D4A574] pl-5"
            >
              <p className="text-[13px] font-medium uppercase tracking-[0.15em] text-[#D4A574] mb-2">
                Our mission
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                To transform every event into an unforgettable experience,
                connecting people through joy, adventure, and shared moments
                that define their stories.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
