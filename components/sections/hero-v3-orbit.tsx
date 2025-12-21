"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Music, Plane, Users, Sparkles, Building2 } from "lucide-react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { Ripple } from "@/components/ui/ripple";

export function HeroV3Orbit() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-rose-50" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        {/* Left content */}
        <div className="flex-1 pr-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600">
              <Sparkles className="h-4 w-4" />
              <span>V3: Orbiting Circles + Ripple Effect</span>
            </div>

            <h1 className="text-5xl font-black leading-tight tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Events That
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-rose-500 to-orange-600 bg-clip-text text-transparent">
                Orbit Around
              </span>
              <br />
              You
            </h1>

            <p className="mt-6 max-w-md text-lg text-slate-600">
              At the center of every Memora event is you. We build experiences
              that revolve around creating unforgettable memories.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-orange-500/25"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.button>

              <button className="flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-lg font-medium text-slate-900 transition-all hover:border-orange-300">
                <Calendar className="h-5 w-5 text-orange-500" />
                <span>View Calendar</span>
              </button>
            </div>

            {/* Quick stats */}
            <div className="mt-12 flex gap-8">
              {[
                { value: "50+", label: "Events" },
                { value: "10K", label: "Attendees" },
                { value: "5yr", label: "Experience" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <div className="text-3xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-sm text-slate-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right side - Orbiting animation */}
        <div className="relative hidden h-[600px] w-[600px] flex-shrink-0 lg:block">
          <Ripple mainCircleSize={100} numCircles={6} />

          {/* Center logo */}
          <div className="absolute left-1/2 top-1/2 z-20 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-orange-500 to-rose-500 shadow-2xl shadow-orange-500/40">
            <span className="text-3xl font-black text-white">M</span>
          </div>

          {/* Orbiting icons */}
          <OrbitingCircles radius={120} duration={25} delay={0}>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
              <Music className="h-6 w-6 text-orange-500" />
            </div>
          </OrbitingCircles>

          <OrbitingCircles radius={120} duration={25} delay={6}>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
              <Users className="h-6 w-6 text-rose-500" />
            </div>
          </OrbitingCircles>

          <OrbitingCircles radius={120} duration={25} delay={12}>
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">
              <Sparkles className="h-6 w-6 text-amber-500" />
            </div>
          </OrbitingCircles>

          <OrbitingCircles radius={200} duration={35} delay={0} reverse>
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-xl">
              <Plane className="h-7 w-7 text-orange-500" />
            </div>
          </OrbitingCircles>

          <OrbitingCircles radius={200} duration={35} delay={10} reverse>
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-xl">
              <Building2 className="h-7 w-7 text-rose-500" />
            </div>
          </OrbitingCircles>

          <OrbitingCircles radius={200} duration={35} delay={20} reverse>
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white shadow-xl">
              <Calendar className="h-7 w-7 text-purple-500" />
            </div>
          </OrbitingCircles>

          <OrbitingCircles radius={280} duration={45} delay={5}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
              <span className="text-lg">🎉</span>
            </div>
          </OrbitingCircles>

          <OrbitingCircles radius={280} duration={45} delay={20}>
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-rose-100">
              <span className="text-lg">✨</span>
            </div>
          </OrbitingCircles>
        </div>
      </div>
    </section>
  );
}



