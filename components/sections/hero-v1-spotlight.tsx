"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Sparkles, Ticket } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { GridPattern } from "@/components/ui/grid-pattern";
import Image from "next/image";

export function HeroV1Spotlight() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-zinc-50">
      <Spotlight className="z-10" fill="#f97316" />
      <GridPattern
        className="absolute inset-0 z-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"
        width={50}
        height={50}
        numSquares={40}
        maxOpacity={0.15}
      />

      <div className="absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-orange-300/30 blur-[120px]" />
      <div className="absolute -right-20 bottom-20 h-[500px] w-[500px] rounded-full bg-rose-300/30 blur-[120px]" />

      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 px-4 py-2 text-sm font-medium text-orange-600 shadow-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>V1: Spotlight + Text Generate Effect</span>
          </div>
        </motion.div>

        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="text-slate-900">Create</span>{" "}
            <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-red-500 bg-clip-text text-transparent">
              Unforgettable
            </span>
          </motion.h1>

          <TextGenerateEffect
            words="Moments That Last Forever"
            className="text-4xl tracking-tight text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl"
            duration={0.3}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 max-w-2xl text-center text-lg text-slate-600 sm:text-xl"
        >
          From electrifying student trips to spectacular business expos, Memora
          Experience transforms your vision into extraordinary events across Cyprus.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex min-w-[200px] items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-orange-500/25"
          >
            <span>Explore Events</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.button>

          <a href="https://planetarium.memora-experience.com" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-lg font-medium text-slate-900 shadow-sm transition-all hover:border-orange-300 hover:shadow-md">
            <span>View Planitario</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </motion.div>

        {/* Planitario Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-20 w-full max-w-4xl perspective-1000"
        >
          <motion.div
            whileHover={{ rotateX: 2, rotateY: -2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="group relative overflow-hidden rounded-3xl shadow-2xl shadow-slate-300/50"
          >
            {/* Image Background */}
            <div className="relative h-[280px] sm:h-[320px] w-full overflow-hidden">
              <Image
                src="/Content/planitatio/image.png"
                alt="Planitario Venue"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
              />
              {/* Gradient Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-transparent to-rose-600/20 mix-blend-overlay" />
              
              {/* Animated Glow Effect */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-orange-500/40 blur-[80px]"
              />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
              {/* Top Badge */}
              <div className="absolute left-6 top-6 sm:left-8 sm:top-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                  </span>
                  <span>Tickets Available</span>
                </motion.div>
              </div>

              {/* Main Content */}
              <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
                <div className="space-y-3">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.3 }}
                    className="flex items-center gap-2"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 shadow-lg shadow-orange-500/50">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-medium uppercase tracking-wider text-orange-400">
                      Featured Event
                    </span>
                  </motion.div>
                  
                  <h3 className="text-3xl font-bold text-white sm:text-4xl">
                    PLANITARIO 2025 (Oct 9-10)
                  </h3>
                  <p className="text-lg text-white/80">
                    The Ultimate Night Experience
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-white/70">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-orange-400" />
                      <span>October 9-10, 2025</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-orange-400" />
                      <span>Nicosia, Cyprus</span>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/btn relative overflow-hidden rounded-2xl bg-white px-8 py-4 font-bold text-slate-900 shadow-xl transition-all hover:shadow-2xl hover:shadow-orange-500/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <Ticket className="h-5 w-5" />
                    <span>Get Tickets</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-rose-500 opacity-0 transition-opacity group-hover/btn:opacity-100" />
                  <span className="absolute inset-0 z-10 flex items-center justify-center gap-2 font-bold text-white opacity-0 transition-opacity group-hover/btn:opacity-100">
                    <Ticket className="h-5 w-5" />
                    <span>Get Tickets</span>
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </motion.button>
              </div>
            </div>

            {/* Decorative Corner Elements */}
            <div className="pointer-events-none absolute right-4 top-4 h-20 w-20 rounded-full border border-white/10 sm:right-8 sm:top-8 sm:h-32 sm:w-32" />
            <div className="pointer-events-none absolute right-8 top-8 h-12 w-12 rounded-full border border-white/5 sm:right-16 sm:top-16 sm:h-20 sm:w-20" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {[
            { value: "50+", label: "Events Hosted" },
            { value: "10K+", label: "Happy Attendees" },
            { value: "100+", label: "Partner Brands" },
            { value: "5", label: "Years Experience" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-gradient-to-r from-orange-600 to-rose-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

