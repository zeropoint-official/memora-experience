"use client";

import { motion } from "framer-motion";
import { ArrowRight, Ticket, Briefcase, Calendar, MapPin, Sparkles, Star } from "lucide-react";
import { TextRotate } from "@/components/ui/text-rotate";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { Spotlight } from "@/components/ui/spotlight";
import { GridPattern } from "@/components/ui/grid-pattern";

const eventImages = [
  {
    url: "/Content/planitatio/The Cyprus Planetarium 2025.jpg",
    alt: "Cyprus Planetarium Event",
  },
  {
    url: "/Content/planitatio/Cyprus Planetarium Lobby.jpg",
    alt: "Planetarium Lobby",
  },
  {
    url: "/Content/planitatio/Cyprus Planetarium Cosmonaut Astronaut.jpg",
    alt: "Cosmonaut Experience",
  },
  {
    url: "/Content/planitatio/image.png",
    alt: "Planitario Event",
  },
  {
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&h=600&fit=crop",
    alt: "Festival Crowd",
  },
  {
    url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=600&fit=crop",
    alt: "Event Production",
  },
];

// Floating sparkle component
function FloatingSparkle({ delay, x, y }: { delay: number; x: string; y: string }) {
  return (
    <motion.div
      className="absolute pointer-events-none"
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

export function LandingHero() {
  return (
    <section className="relative min-h-screen w-full overflow-x-hidden overflow-y-hidden md:overflow-y-visible bg-zinc-50">
      {/* Spotlight effect */}
      <Spotlight className="z-10" fill="#f97316" />
      
      {/* Grid pattern background */}
      <GridPattern
        className="absolute inset-0 z-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"
        width={50}
        height={50}
        numSquares={40}
        maxOpacity={0.15}
      />

      {/* Background glows */}
      <div className="absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-orange-300/30 blur-[120px]" />
      <div className="absolute -right-20 bottom-20 h-[500px] w-[500px] rounded-full bg-rose-300/30 blur-[120px]" />
      <div className="absolute left-1/3 top-1/2 h-[400px] w-[400px] rounded-full bg-amber-200/20 blur-[100px]" />

      {/* Floating sparkles */}
      <FloatingSparkle delay={0} x="10%" y="20%" />
      <FloatingSparkle delay={0.5} x="25%" y="35%" />
      <FloatingSparkle delay={1} x="15%" y="60%" />
      <FloatingSparkle delay={1.5} x="85%" y="25%" />
      <FloatingSparkle delay={2} x="75%" y="55%" />
      <FloatingSparkle delay={2.5} x="90%" y="70%" />

      {/* Parallax floating images */}
      <Floating sensitivity={-0.5} className="h-full z-20">
        {/* Top left - small */}
        <FloatingElement
          depth={0.5}
          className="hidden sm:block top-[22%] left-[2%] md:top-[26%] md:left-[5%]"
        >
          <motion.img
            src={eventImages[0].url}
            alt={eventImages[0].alt}
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-200 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        {/* Top left - larger */}
        <FloatingElement
          depth={1}
          className="top-[10%] left-[6%] sm:top-[8%] sm:left-[10%] md:top-[12%] md:left-[12%]"
        >
          <motion.img
            src={eventImages[1].url}
            alt={eventImages[1].alt}
            className="w-28 h-20 sm:w-40 sm:h-32 md:w-52 md:h-40 object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-200 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        {/* Bottom left - large square */}
        <FloatingElement
          depth={2}
          className="top-[80%] left-[-14%] sm:top-[72%] sm:left-[3%] md:top-[68%] md:left-[6%]"
        >
          <motion.img
            src={eventImages[2].url}
            alt={eventImages[2].alt}
            className="w-28 h-28 sm:w-44 sm:h-44 md:w-56 md:h-56 object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-200 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        {/* Top right - medium */}
        <FloatingElement
          depth={1.5}
          className="top-[10%] left-[68%] sm:top-[8%] sm:left-[75%] md:top-[10%] md:left-[78%]"
        >
          <motion.img
            src={eventImages[3].url}
            alt={eventImages[3].alt}
            className="w-28 h-22 sm:w-44 sm:h-36 md:w-56 md:h-44 object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-200 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        {/* Right middle - small */}
        <FloatingElement
          depth={0.8}
          className="hidden md:block top-[46%] left-[85%] md:top-[44%] md:left-[88%]"
        >
          <motion.img
            src={eventImages[4].url}
            alt={eventImages[4].alt}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-200 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>

        {/* Bottom right - large */}
        <FloatingElement
          depth={1.2}
          className="top-[78%] left-[72%] sm:top-[70%] sm:left-[72%] md:top-[65%] md:left-[75%]"
        >
          <motion.img
            src={eventImages[5].url}
            alt={eventImages[5].alt}
            className="w-32 h-32 sm:w-52 sm:h-52 md:w-64 md:h-64 object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-200 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          />
        </FloatingElement>
      </Floating>

      {/* Main content */}
      <div className="relative z-30 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pointer-events-none pt-16 md:pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 pointer-events-auto"
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
          className="text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] text-slate-900">
            <span className="flex w-full items-baseline justify-center whitespace-nowrap translate-x-1">
              <span className="shrink-0">Create&nbsp;</span>
              {/* Reserve space so only the rotating word animates (Create stays put) */}
              <span className="inline-flex min-w-[10ch] items-baseline justify-start overflow-visible pb-1">
                <TextRotate
                  texts={["Legendary", "Memorable", "Spectacular", "Fantastic"]}
                  mainClassName="inline-flex items-baseline justify-start whitespace-nowrap [&>div]:pb-2 [&>div]:overflow-visible"
                  elementLevelClassName="bg-gradient-to-r from-orange-500 via-rose-500 to-red-500 bg-clip-text text-transparent"
                  staggerDuration={0.03}
                  staggerFrom="last"
                  rotationInterval={2500}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                />
              </span>
            </span>
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mt-1">
            Moments
          </h1>
        </motion.div>

        <motion.p
          className="mt-6 md:mt-8 max-w-2xl text-center text-base sm:text-lg md:text-xl text-slate-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          From electrifying Planitario nights to epic student adventures, 
          we transform your vision into extraordinary experiences across Cyprus.
        </motion.p>

        {/* Event info badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 pointer-events-auto"
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-orange-200 bg-white/80 backdrop-blur-sm px-4 py-2 text-sm shadow-lg">
            <span className="text-slate-500">Next Event</span>
            <div className="h-4 w-px bg-slate-200" />
            <span className="font-semibold text-slate-900">Planetarium Cyprus</span>
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-1.5 text-slate-600">
              <Calendar className="h-4 w-4 text-orange-500" />
              <span className="font-medium">March 15-16</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-4 pointer-events-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-8 py-4 text-lg font-semibold text-white shadow-xl shadow-orange-500/25 transition-shadow hover:shadow-2xl hover:shadow-orange-500/40"
          >
            <Ticket className="h-5 w-5" />
            <span>Get Tickets</span>
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-2 rounded-full border-2 border-slate-900 bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition-all hover:bg-slate-900 hover:text-white"
          >
            <Briefcase className="h-5 w-5" />
            <span>Business with Us</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-50 to-transparent z-40" />
    </section>
  );
}
