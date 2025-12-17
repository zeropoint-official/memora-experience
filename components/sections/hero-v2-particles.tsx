"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { WordRotate } from "@/components/ui/word-rotate";
import { BlurFade } from "@/components/ui/blur-fade";

export function HeroV2Particles() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-orange-50/50 via-white to-rose-50/30">
      <FloatingParticles
        className="opacity-60"
        quantity={40}
        colors={["#f97316", "#f43f5e", "#fb923c", "#fda4af"]}
      />

      {/* Decorative blobs */}
      <div className="absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-orange-200/40 to-rose-200/40 blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-tl from-rose-200/40 to-orange-200/40 blur-[100px]" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <BlurFade delay={0}>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-5 py-2.5 text-sm font-medium text-orange-600 shadow-lg shadow-orange-100">
            <Star className="h-4 w-4 fill-orange-500 text-orange-500" />
            <span>V2: Word Rotate + Floating Particles</span>
          </div>
        </BlurFade>

        <div className="text-center">
          <BlurFade delay={0.1}>
            <h1 className="mb-6 text-5xl font-black tracking-tight text-slate-900 sm:text-6xl md:text-7xl lg:text-8xl">
              We Create
            </h1>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="flex h-[1.2em] items-center justify-center text-5xl font-black tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <WordRotate
                words={["Memories", "Experiences", "Magic", "Moments"]}
                className="bg-gradient-to-r from-orange-500 via-rose-500 to-orange-600 bg-clip-text text-transparent"
                duration={2000}
              />
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <p className="mx-auto mt-8 max-w-xl text-lg text-slate-600 sm:text-xl">
              Cyprus&apos;s premier event company. From Planitario nights to
              unforgettable student adventures.
            </p>
          </BlurFade>
        </div>

        <BlurFade delay={0.4}>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 rounded-2xl bg-slate-900 px-8 py-4 text-lg font-semibold text-white shadow-2xl transition-all hover:bg-slate-800"
            >
              <span>Explore Events</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-rose-500 opacity-0 transition-opacity group-hover:opacity-100" style={{ zIndex: -1 }} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-slate-900 shadow-xl transition-all hover:shadow-2xl"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-orange-500 to-rose-500">
                <Play className="h-4 w-4 fill-white text-white" />
              </span>
              <span>Watch Reel</span>
            </motion.button>
          </div>
        </BlurFade>

        {/* Event showcase cards */}
        <BlurFade delay={0.5}>
          <div className="mt-20 grid w-full max-w-4xl gap-4 sm:grid-cols-3">
            {[
              { title: "Planitario", desc: "2-Day Festival", emoji: "🎉" },
              { title: "Student Trips", desc: "3-Day Adventures", emoji: "✈️" },
              { title: "Business Expos", desc: "Networking Events", emoji: "💼" },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-xl transition-all hover:border-orange-200 hover:shadow-2xl"
              >
                <div className="absolute -right-4 -top-4 text-6xl opacity-20 transition-all group-hover:opacity-40">
                  {item.emoji}
                </div>
                <div className="relative">
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                  <div className="mt-4 flex items-center text-sm font-medium text-orange-600">
                    <span>Learn more</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </BlurFade>

        {/* Trust badges */}
        <BlurFade delay={0.6}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-slate-500">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-orange-400 to-rose-400 text-xs font-bold text-white"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium">10K+ Attendees</span>
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
              <span className="ml-2 text-sm font-medium">4.9/5 Rating</span>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}


