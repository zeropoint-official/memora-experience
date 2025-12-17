"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Sparkles } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { GridPattern } from "@/components/ui/grid-pattern";

export function HeroPink() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-rose-50/30">
      {/* Background Effects */}
      <Spotlight className="z-10" fill="#ec4899" />
      <GridPattern
        className="absolute inset-0 z-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"
        width={50}
        height={50}
        numSquares={40}
        maxOpacity={0.15}
      />

      {/* Gradient Orbs */}
      <div className="absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-pink-300/30 blur-[120px]" />
      <div className="absolute -right-20 bottom-20 h-[500px] w-[500px] rounded-full bg-fuchsia-300/30 blur-[120px]" />
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-300/20 blur-[100px]" />

      {/* Content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/80 px-4 py-2 text-sm font-medium text-pink-600 shadow-sm backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            <span>Option 5: Pink & Fuchsia Theme</span>
          </div>
        </motion.div>

        {/* Main Headline */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl"
          >
            <span className="text-slate-900">Create</span>{" "}
            <span className="bg-gradient-to-r from-pink-500 via-fuchsia-500 to-rose-500 bg-clip-text text-transparent">
              Unforgettable
            </span>
          </motion.h1>

          <TextGenerateEffect
            words="Moments That Last Forever"
            className="text-4xl tracking-tight text-slate-800 sm:text-5xl md:text-6xl lg:text-7xl"
            duration={0.3}
          />
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 max-w-2xl text-center text-lg text-slate-600 sm:text-xl"
        >
          From electrifying student trips to spectacular business expos, Memora
          Experience transforms your vision into extraordinary events across
          Cyprus.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex min-w-[200px] items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-pink-500/25 transition-all"
          >
            <span>Explore Events</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.button>

          <button className="group flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-lg font-medium text-slate-900 shadow-sm transition-all hover:border-pink-300 hover:shadow-md">
            <span>View Planitario</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        {/* Featured Event Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-20 w-full max-w-3xl"
        >
          <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-1 shadow-xl shadow-slate-200/50 transition-all hover:border-pink-200 hover:shadow-2xl hover:shadow-pink-100/50">
            <div className="relative flex flex-col gap-6 rounded-xl bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-fuchsia-500 shadow-lg shadow-pink-500/30">
                  <Sparkles className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">PLANITARIO 2025</h3>
                  <p className="text-slate-500">The Ultimate Night Experience</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-pink-500" />
                  <span>March 15-16</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-pink-500" />
                  <span>Nicosia, Cyprus</span>
                </div>
                <button className="rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-500 px-5 py-2.5 font-semibold text-white shadow-lg shadow-pink-500/30">
                  Get Tickets
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
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
              <div className="bg-gradient-to-r from-pink-600 to-fuchsia-600 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
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


