"use client";

import { motion } from "framer-motion";
import { ArrowRight, Ticket, Briefcase, Calendar, Sparkles, Star, Users, MapPin } from "lucide-react";
import { TextRotate } from "@/components/ui/text-rotate";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { Spotlight } from "@/components/ui/spotlight";
import { GridPattern } from "@/components/ui/grid-pattern";
import { SparklesText } from "@/components/ui/sparkles-text";

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

// Animation variants for mobile hero
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const imageContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

// ============================================
// MOBILE HERO - Simpler, cleaner design
// ============================================
function MobileHero() {
  const stats = [
    { value: '10K+', label: 'Attendees', icon: <Users className="h-4 w-4 text-orange-500" /> },
    { value: 'March 15-16', label: 'Next Event', icon: <Calendar className="h-4 w-4 text-orange-500" /> },
    { value: 'Cyprus', label: 'Location', icon: <MapPin className="h-4 w-4 text-orange-500" /> },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-zinc-50 py-8 pt-20 md:hidden">
      {/* Background Effects */}
      <Spotlight className="z-10" fill="#f97316" />
      <GridPattern
        className="absolute inset-0 z-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"
        width={50}
        height={50}
        numSquares={40}
        maxOpacity={0.15}
      />
      
      {/* Glow Effects */}
      <div className="absolute -left-20 top-20 h-[300px] w-[300px] rounded-full bg-orange-300/30 blur-[100px]" />
      <div className="absolute -right-20 bottom-20 h-[300px] w-[300px] rounded-full bg-rose-300/30 blur-[100px]" />

      {/* Subtle sparkles for mobile */}
      <FloatingSparkle delay={0} x="15%" y="15%" />
      <FloatingSparkle delay={1} x="85%" y="20%" />

      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6">
        {/* Text Content */}
        <motion.div
          className="flex flex-col items-center text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm">
              <Sparkles className="h-4 w-4" />
              <span>Cyprus Event Experiences</span>
            </div>
          </motion.div>

          {/* Title with rotating word */}
          <motion.div variants={itemVariants}>
            <h1 className="text-3xl font-bold tracking-tight leading-tight text-slate-900 sm:text-4xl">
              <span className="flex w-full items-baseline justify-center whitespace-nowrap">
                <span className="shrink-0">Create&nbsp;</span>
                {/* Reserve space so only the rotating word animates */}
                <span className="inline-flex min-w-[9ch] items-baseline justify-start overflow-visible">
                  <TextRotate
                    texts={["Legendary", "Memorable", "Spectacular", "Fantastic"]}
                    mainClassName="inline-flex items-baseline justify-start whitespace-nowrap [&>div]:overflow-visible"
                    elementLevelClassName="bg-gradient-to-r from-orange-500 via-rose-500 to-red-500 bg-clip-text text-transparent"
                    staggerDuration={0.03}
                    staggerFrom="last"
                    rotationInterval={2500}
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  />
                </span>
              </span>
              <span className="block mt-1">Moments</span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p 
            className="mt-4 max-w-lg text-base text-slate-600"
            variants={itemVariants}
          >
            From electrifying Planitario nights to epic student adventures, 
            we transform your vision into extraordinary experiences across Cyprus.
          </motion.p>

          {/* Event Info Badge */}
          <motion.div variants={itemVariants} className="mt-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white/80 backdrop-blur-sm px-3 py-1.5 text-xs shadow-lg">
              <span className="text-slate-500">Next Event</span>
              <div className="h-3 w-px bg-slate-200" />
              <span className="font-semibold text-slate-900">Planetarium Cyprus</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div 
            className="mt-6 flex flex-col gap-3 w-full max-w-xs"
            variants={itemVariants}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 px-6 py-3.5 text-base font-semibold text-white shadow-xl shadow-orange-500/25"
            >
              <Ticket className="h-5 w-5" />
              <span>Get Tickets</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center justify-center gap-2 rounded-full border-2 border-slate-900 bg-white px-6 py-3.5 text-base font-semibold text-slate-900"
            >
              <Briefcase className="h-5 w-5" />
              <span>Business with Us</span>
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="mt-8 flex flex-wrap justify-center gap-6"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-rose-100">
                  {stat.icon}
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold text-slate-900">{stat.value}</p>
                  <p className="text-xs text-slate-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Image Collage */}
        <motion.div
          className="relative mt-8 h-[320px] w-full"
          variants={imageContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Main center image */}
          <motion.div
            className="absolute left-1/2 top-0 -translate-x-1/2"
            variants={imageVariants}
          >
            <motion.div
              className="relative h-44 w-44 overflow-hidden rounded-2xl bg-white p-1.5 shadow-2xl shadow-slate-300/50"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <img 
                src={eventImages[0].url} 
                alt={eventImages[0].alt}
                className="h-full w-full rounded-xl object-cover" 
              />
            </motion.div>
          </motion.div>

          {/* Left image */}
          <motion.div
            className="absolute left-2 top-20"
            variants={imageVariants}
          >
            <motion.div
              className="relative h-36 w-36 overflow-hidden rounded-2xl bg-white p-1.5 shadow-2xl shadow-slate-300/50"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
            >
              <img 
                src={eventImages[2].url} 
                alt={eventImages[2].alt}
                className="h-full w-full rounded-xl object-cover" 
              />
            </motion.div>
          </motion.div>

          {/* Right image */}
          <motion.div
            className="absolute right-2 top-16"
            variants={imageVariants}
          >
            <motion.div
              className="relative h-40 w-40 overflow-hidden rounded-2xl bg-white p-1.5 shadow-2xl shadow-slate-300/50"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
            >
              <img 
                src={eventImages[3].url} 
                alt={eventImages[3].alt}
                className="h-full w-full rounded-xl object-cover" 
              />
            </motion.div>
          </motion.div>

          {/* Decorative shapes */}
          <motion.div
            className="absolute -top-2 right-1/4 h-12 w-12 rounded-full bg-gradient-to-br from-orange-300/60 to-amber-200/60"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-8 left-1/4 h-8 w-8 rounded-xl bg-gradient-to-br from-rose-300/60 to-pink-200/60"
            animate={{ rotate: [0, 90, 180, 270, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </div>
    </section>
  );
}

// ============================================
// DESKTOP HERO - Fancy parallax floating images
// ============================================
function DesktopHero() {
  return (
    <section className="relative hidden md:block min-h-screen w-full overflow-x-hidden overflow-y-visible bg-zinc-50">
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

      {/* Floating sparkles - hidden on mobile, shown on desktop */}
      <div className="hidden md:block">
        <FloatingSparkle delay={0} x="10%" y="20%" />
        <FloatingSparkle delay={0.5} x="25%" y="35%" />
        <FloatingSparkle delay={1} x="15%" y="60%" />
        <FloatingSparkle delay={1.5} x="85%" y="25%" />
        <FloatingSparkle delay={2} x="75%" y="55%" />
        <FloatingSparkle delay={2.5} x="90%" y="70%" />
      </div>

      {/* Parallax floating images */}
      <Floating sensitivity={-0.5} className="h-full z-20">
        {/* Top left - small */}
        <FloatingElement
          depth={0.5}
          className="top-[26%] left-[5%]"
        >
          <motion.img
            src={eventImages[0].url}
            alt={eventImages[0].alt}
            className="w-28 h-28 object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-200 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        {/* Top left - larger */}
        <FloatingElement
          depth={1}
          className="top-[12%] left-[12%]"
        >
          <motion.img
            src={eventImages[1].url}
            alt={eventImages[1].alt}
            className="w-52 h-40 object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-200 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        {/* Bottom left - large square */}
        <FloatingElement
          depth={2}
          className="top-[68%] left-[6%]"
        >
          <motion.img
            src={eventImages[2].url}
            alt={eventImages[2].alt}
            className="w-56 h-56 object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-200 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        {/* Top right - medium */}
        <FloatingElement
          depth={1.5}
          className="top-[10%] left-[78%]"
        >
          <motion.img
            src={eventImages[3].url}
            alt={eventImages[3].alt}
            className="w-56 h-44 object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-200 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        {/* Right middle - small */}
        <FloatingElement
          depth={0.8}
          className="top-[44%] left-[88%]"
        >
          <motion.img
            src={eventImages[4].url}
            alt={eventImages[4].alt}
            className="w-32 h-32 object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-200 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>

        {/* Bottom right - large */}
        <FloatingElement
          depth={1.2}
          className="top-[65%] left-[75%]"
        >
          <motion.img
            src={eventImages[5].url}
            alt={eventImages[5].alt}
            className="w-64 h-64 object-cover rounded-xl shadow-2xl hover:scale-105 transition-transform duration-200 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          />
        </FloatingElement>
      </Floating>

      {/* Main content */}
      <div className="relative z-30 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pointer-events-none pt-20">
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
          <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12] text-slate-900">
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
          <h1 className="text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 mt-1">
            Moments
          </h1>
        </motion.div>

        <motion.p
          className="mt-8 max-w-2xl text-center text-lg md:text-xl text-slate-600"
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
          className="mt-12 flex flex-row items-center gap-4 pointer-events-auto"
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

// ============================================
// MAIN EXPORT - Combines both heroes
// ============================================
export function LandingHero() {
  return (
    <>
      <MobileHero />
      <DesktopHero />
    </>
  );
}
