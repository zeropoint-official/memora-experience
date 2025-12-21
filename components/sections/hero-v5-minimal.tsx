"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ChevronRight } from "lucide-react";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

export function HeroV5Minimal() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Minimal decorative elements */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-rose-200 to-transparent" />

      {/* Corner accents */}
      <div className="absolute left-8 top-8 h-24 w-px bg-gradient-to-b from-orange-300 to-transparent" />
      <div className="absolute left-8 top-8 h-px w-24 bg-gradient-to-r from-orange-300 to-transparent" />
      <div className="absolute bottom-8 right-8 h-24 w-px bg-gradient-to-t from-rose-300 to-transparent" />
      <div className="absolute bottom-8 right-8 h-px w-24 bg-gradient-to-l from-rose-300 to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-600">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span>V5: Typing Animation + Minimal Design</span>
          </div>
        </motion.div>

        {/* Main content */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-slate-400"
          >
            MEMORA EXPERIENCE
          </motion.div>

          <div className="relative">
            <h1 className="text-6xl font-light tracking-tight text-slate-900 sm:text-7xl md:text-8xl lg:text-9xl">
              <TypingAnimation
                text="Create"
                className="font-light"
                duration={0.08}
              />
            </h1>
            <h1 className="mt-2 text-6xl font-light tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
              <AnimatedGradientText className="font-semibold">
                Moments
              </AnimatedGradientText>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mx-auto mt-8 max-w-lg text-lg font-light text-slate-500"
          >
            Cyprus&apos;s leading event experience company. Crafting memories
            through Planitario, student trips, and business expos.
          </motion.p>
        </div>

        {/* Minimal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-6 sm:flex-row"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group inline-flex items-center gap-3 rounded-full bg-slate-900 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-slate-800"
          >
            <span>Explore Events</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.button>

          <button className="group flex items-center gap-2 text-lg font-medium text-slate-600 transition-colors hover:text-slate-900">
            <span>Learn More</span>
            <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Bottom links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-12 left-0 right-0 flex justify-center"
        >
          <div className="flex items-center gap-8 text-sm text-slate-400">
            {[
              { label: "Planitario", href: "#" },
              { label: "Student Trips", href: "#" },
              { label: "Business Expos", href: "#" },
              { label: "Contact", href: "#" },
            ].map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                className="group flex items-center gap-1 transition-colors hover:text-slate-900"
                whileHover={{ y: -2 }}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Side stats */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4 }}
          className="absolute left-8 top-1/2 hidden -translate-y-1/2 flex-col gap-8 lg:flex"
        >
          {[
            { value: "50+", label: "Events" },
            { value: "10K", label: "Attendees" },
            { value: "5yr", label: "Experience" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl font-semibold text-slate-900">{stat.value}</div>
              <div className="text-xs uppercase tracking-wider text-slate-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}



