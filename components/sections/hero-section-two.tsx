"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star, Users, Zap } from "lucide-react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { MovingBorder } from "@/components/ui/moving-border";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { SparklesText } from "@/components/ui/sparkles";

export function HeroSectionTwo() {
  return (
    <AuroraBackground className="bg-white">
      <FloatingParticles className="opacity-40" quantity={20} />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Top Navigation Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <MovingBorder
            as="div"
            duration={3000}
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900"
            containerClassName="rounded-full"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span>New: Student Trips Now Booking for Summer 2025</span>
            </div>
          </MovingBorder>
        </motion.div>

        {/* Main Content */}
        <div className="text-center">
          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl">
              Experience
              <br />
              <SparklesText
                className="bg-gradient-to-r from-orange-500 via-rose-500 to-purple-600 bg-clip-text text-transparent"
                colors={{ first: "#f97316", second: "#f43f5e" }}
              >
                MEMORA
              </SparklesText>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mx-auto mt-8 max-w-xl text-lg text-slate-600 sm:text-xl"
          >
            Where extraordinary moments come to life. Cyprus&apos;s leading event
            experience company crafting memories that last a lifetime.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <button className="group relative inline-flex min-w-[200px] items-center justify-center gap-2 overflow-hidden rounded-full bg-slate-900 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105">
              <span className="relative z-10">Discover Events</span>
              <ArrowRight className="relative z-10 h-5 w-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-rose-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </button>

            <button className="group flex items-center gap-3 rounded-full border-2 border-slate-200 bg-white/50 px-8 py-4 text-lg font-semibold text-slate-900 backdrop-blur-sm transition-all hover:border-orange-500 hover:bg-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500 text-white">
                <Play className="h-4 w-4 fill-current" />
              </span>
              Watch Highlights
            </button>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {[
            {
              icon: Zap,
              title: "Planitario",
              description: "Epic 2-day festival experience",
              color: "from-orange-500 to-amber-500",
            },
            {
              icon: Users,
              title: "Student Trips",
              description: "3-day unforgettable adventures",
              color: "from-rose-500 to-pink-500",
            },
            {
              icon: Star,
              title: "Business Expos",
              description: "Connect & grow your brand",
              color: "from-purple-500 to-violet-500",
            },
          ].map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-6 backdrop-blur-sm transition-all hover:border-transparent hover:shadow-2xl"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity group-hover:opacity-5`}
              />
              <div
                className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color}`}
              >
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                {feature.title}
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                {feature.description}
              </p>
              <div className="mt-4 flex items-center text-sm font-medium text-slate-900">
                <span>Learn more</span>
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          <div className="flex items-center gap-2 text-slate-600">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-orange-400 to-rose-400 text-xs font-bold text-white"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <span className="text-sm font-medium">
              Join 10,000+ happy attendees
            </span>
          </div>
          <div className="flex items-center gap-1 text-slate-600">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-amber-400 text-amber-400"
              />
            ))}
            <span className="ml-2 text-sm font-medium">
              4.9/5 from 500+ reviews
            </span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-slate-400"
          >
            <span className="text-xs font-medium uppercase tracking-wider">
              Scroll to explore
            </span>
            <div className="h-12 w-6 rounded-full border-2 border-slate-300 p-1">
              <motion.div
                animate={{ y: [0, 16, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-slate-400"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </AuroraBackground>
  );
}


