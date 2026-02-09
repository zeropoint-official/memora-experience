"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Music, Plane, Star, Users, Zap } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";

export function HeroV4Bento() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-slate-50 py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-600"
          >
            <Zap className="h-4 w-4" />
            <span>V4: Bento Grid + Border Beam Effect</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-black tracking-tight text-slate-900 sm:text-6xl lg:text-7xl"
          >
            Events <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">Reimagined</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-slate-600"
          >
            Discover our curated experiences designed to create lasting memories
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          {/* Main feature card - spans 2 cols and 2 rows */}
          <div className="group relative col-span-2 row-span-2 overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 to-rose-500 p-8 text-white">
            <BorderBeam size={300} duration={10} colorFrom="#fff" colorTo="#fff" />
            <div className="relative z-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-sm">
                <Star className="h-4 w-4" />
                <span>Featured Event</span>
              </div>
              <h2 className="text-4xl font-bold">PLANITARIO 2025 (Oct 9-10)</h2>
              <p className="mt-2 text-lg text-white/80">The Ultimate 2-Day Festival Experience</p>
              
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>October 9-10</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Nicosia</span>
                </div>
              </div>

              <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-orange-600 transition-transform hover:scale-105">
                <span>Get Tickets</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-white/10 blur-3xl" />
          </div>

          {/* Student Trips */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl transition-all"
          >
            <BorderBeam size={150} duration={12} delay={2} />
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-rose-100">
              <Plane className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Student Trips</h3>
            <p className="mt-2 text-sm text-slate-500">3-day adventures for young explorers</p>
            <div className="mt-4 flex items-center text-sm font-medium text-orange-600">
              <span>Explore</span>
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.div>

          {/* Business Expos */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl transition-all"
          >
            <BorderBeam size={150} duration={12} delay={4} />
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-100 to-rose-100">
              <Users className="h-6 w-6 text-rose-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900">Business Expos</h3>
            <p className="mt-2 text-sm text-slate-500">Connect and grow your brand</p>
            <div className="mt-4 flex items-center text-sm font-medium text-orange-600">
              <span>Learn More</span>
              <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.div>

          {/* Stats card */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-3xl bg-slate-900 p-6 text-white"
          >
            <BorderBeam size={150} duration={12} delay={6} />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-slate-400">Events</div>
              </div>
              <div>
                <div className="text-3xl font-bold">10K</div>
                <div className="text-sm text-slate-400">Attendees</div>
              </div>
            </div>
          </motion.div>

          {/* Music Events */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-white"
          >
            <BorderBeam size={150} duration={12} delay={8} />
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <Music className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold">Live Music</h3>
            <p className="mt-2 text-sm text-slate-400">Top artists & DJs</p>
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <button className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-slate-800">
            <span>View All Events</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}




