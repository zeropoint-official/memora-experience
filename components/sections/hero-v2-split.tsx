"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Calendar, MapPin, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import { Spotlight } from "@/components/ui/spotlight";
import { GridPattern } from "@/components/ui/grid-pattern";

const rotatingWords = ["Unforgettable", "Legendary", "Epic", "Magical", "Electric"];

const logos = [
  "/Content/logos/Red Bull Energy Logo.png",
  "/Content/logos/Shell Logo.png",
  "/Content/logos/images_logos_Client1.png",
  "/Content/logos/images_logos_Client2.png",
  "/Content/logos/images_logos_Client3.png",
  "/Content/logos/images_logos_Client11.png",
  "/Content/logos/images_logos_Client12.png",
];

// Floating sparkle component
function FloatingSparkle({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, 1, 0],
        rotate: [0, 180],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 2,
      }}
    >
      <Star className="h-3 w-3 fill-orange-300 text-orange-300" />
    </motion.div>
  );
}

export function HeroV2Split() {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

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

      {/* Background elements matching V1 */}
      <div className="absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-orange-300/30 blur-[120px]" />
      <div className="absolute -right-20 bottom-20 h-[500px] w-[500px] rounded-full bg-rose-300/30 blur-[120px]" />
      
      {/* Floating sparkles - low intensity */}
      <FloatingSparkle delay={0} x="10%" y="20%" />
      <FloatingSparkle delay={0.5} x="25%" y="35%" />
      <FloatingSparkle delay={1} x="15%" y="60%" />
      <FloatingSparkle delay={1.5} x="35%" y="15%" />
      <FloatingSparkle delay={2} x="5%" y="45%" />
      <FloatingSparkle delay={2.5} x="40%" y="70%" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm">
                <Sparkles className="h-4 w-4" />
                <span>Cyprus Event Experiences</span>
              </div>
            </motion.div>

            {/* Title with rotating word */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <h1 className="text-left text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block whitespace-nowrap">
                  Create{" "}
                  <span className="relative inline-block">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentWord}
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -40, opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="inline-block bg-gradient-to-r from-orange-500 via-rose-500 to-red-500 bg-clip-text text-transparent"
                      >
                        {rotatingWords[currentWord]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                </span>
                <span className="mt-2 block">Moments</span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-8 max-w-lg text-left text-lg text-slate-600"
            >
              From electrifying Planitario nights to epic student adventures, 
              we transform your vision into extraordinary experiences across Cyprus.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-12 flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-orange-500/25"
              >
                <span>Explore Events</span>
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </motion.button>
              <button className="group flex items-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 py-4 text-lg font-medium text-slate-900 transition-all hover:border-orange-300">
                <span>Learn More</span>
              </button>
            </motion.div>

            {/* Logo Carousel */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="space-y-4"
            >
              <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
                Trusted by leading brands
              </p>
              <div className="relative overflow-hidden">
                {/* Gradient masks */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-white to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-white to-transparent" />
                
                {/* Scrolling logos */}
                <motion.div
                  className="flex items-center gap-12"
                  animate={{ x: [0, -1200] }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {/* Double the logos for seamless loop */}
                  {[...logos, ...logos, ...logos].map((logo, i) => (
                    <div
                      key={i}
                      className="relative h-10 w-24 shrink-0 opacity-60 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                    >
                      <Image
                        src={logo}
                        alt="Partner logo"
                        fill
                        className="object-contain"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Clean White Planitario Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group relative w-full max-w-md cursor-pointer overflow-hidden rounded-2xl bg-white shadow-2xl shadow-slate-300/50 ring-1 ring-slate-200/50"
            >
              {/* Image Section */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/Content/planitatio/image.png"
                  alt="Planitario Venue"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority
                />
                {/* Subtle gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                
                {/* Date badge - top left */}
                <div className="absolute left-4 top-4 rounded-xl bg-white px-3 py-2 text-center shadow-lg">
                  <div className="text-xs font-bold uppercase text-orange-500">Mar</div>
                  <div className="text-2xl font-black text-slate-900">15</div>
                </div>

                {/* Status badge - top right */}
                <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-lg">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                  <span>Selling Fast</span>
                </div>
              </div>

              {/* Content Section - Pure White */}
              <div className="bg-white p-5">
                <h3 className="mb-1 text-xl font-bold text-slate-900">PLANITARIO 2025</h3>
                <p className="mb-4 text-sm text-slate-500">The Ultimate Night Experience</p>

                {/* Location & Date */}
                <div className="mb-4 flex items-center gap-4 text-sm text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-slate-400" />
                    <span>Nicosia</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-slate-400" />
                    <span>March 15-16</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                  <div>
                    <p className="text-xs text-slate-400">from</p>
                    <p className="text-2xl font-bold text-slate-900">€25</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800"
                  >
                    <span>Get Tickets</span>
                    <ArrowRight className="h-4 w-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

