"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Ticket, Briefcase, Calendar, Sparkles, Star, Users, MapPin, Flame, ChevronLeft, ChevronRight, Zap, Heart, Play } from "lucide-react";
import { TextRotate } from "@/components/ui/text-rotate";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { Spotlight } from "@/components/ui/spotlight";
import { GridPattern } from "@/components/ui/grid-pattern";
import { SparklesText } from "@/components/ui/sparkles-text";
import { MagicCard } from "@/components/ui/magic-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { Ripple } from "@/components/ui/ripple";
import { useRef, useState, useEffect, useCallback } from "react";

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
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
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
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

// ============================================
// MOBILE HERO - Video Background with White Grid Transition
// ============================================
function MobileHero() {
  const [ticketsRemaining, setTicketsRemaining] = useState(127);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Simulate tickets selling (social proof urgency)
  useEffect(() => {
    const interval = setInterval(() => {
      setTicketsRemaining((prev) => {
        if (prev <= 50) return 127;
        return prev - Math.floor(Math.random() * 3 + 1);
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  // iOS Safari sometimes ignores autoplay on initial render unless we explicitly call play()
  // (even when muted + playsInline are set).
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Ensure muted/inline playback is applied as early as possible
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const playPromise = video.play();
    if (playPromise && typeof playPromise.catch === "function") {
      playPromise.catch(() => {
        // Autoplay can still be blocked by the browser; poster will remain visible in that case.
      });
    }
  }, []);

  return (
    <section className="relative w-full overflow-hidden md:hidden">
      {/* ============================================ */}
      {/* PART 1: FULL-SCREEN VIDEO HERO */}
      {/* ============================================ */}
      <div className="relative min-h-[85svh] w-full overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/Content/planitatio/The Cyprus Planetarium 2025.jpg"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectFit: "cover" }}
        >
          {/* Prefer the new background video; fall back gracefully for broader device support */}
          <source src="/backround-video.webm" type="video/webm" />
          <source src="/background-video.webm" type="video/webm" />
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60" />
        
        {/* Subtle vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.25)_100%)]" />

        {/* Hero Content Overlay */}
        <div
          className="absolute inset-0 z-10 flex flex-col px-5"
          style={{
            paddingTop: "calc(env(safe-area-inset-top) + 6rem)",
            paddingBottom: "calc(env(safe-area-inset-bottom) + 2.5rem)",
          }}
        >
          {/* Top: Badge - with proper spacing */}
          <motion.div
            initial={{ opacity: 0, filter: "blur(8px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
            className="flex justify-center pt-2"
          >
            <div className="inline-flex items-center gap-2.5 rounded-full bg-white/15 backdrop-blur-xl border border-white/25 px-5 py-2.5 shadow-2xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
              </span>
              <span className="text-[13px] font-semibold text-white/95 tracking-wide">Cyprus Event Experiences</span>
            </div>
          </motion.div>

          {/* Center: Main Title - properly centered with balanced spacing */}
          <div className="flex flex-1 flex-col items-center justify-center py-8">
            <motion.div
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
              className="text-center"
            >
              <h1 className="text-[2.5rem] sm:text-[2.75rem] font-black tracking-tight leading-[1.05] text-white drop-shadow-2xl">
                <span className="block">Create</span>
                <span className="relative inline-block my-2">
                  <TextRotate
                    texts={["Legendary", "Memorable", "Spectacular", "Fantastic"]}
                    mainClassName="inline-flex items-baseline justify-center whitespace-nowrap"
                    elementLevelClassName="bg-gradient-to-r from-orange-300 via-rose-300 to-amber-200 bg-clip-text text-transparent drop-shadow-lg"
                    staggerDuration={0.02}
                    staggerFrom="last"
                    rotationInterval={3000}
                    transition={{ type: "spring", damping: 35, stiffness: 300 }}
                  />
                </span>
                <span className="block">Moments</span>
              </h1>
            </motion.div>

            {/* Event Info Pill - more breathing room */}
            <motion.div
              initial={{ opacity: 0, filter: "blur(8px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              className="mt-6"
            >
              <div className="inline-flex items-center gap-3 rounded-2xl bg-white/12 backdrop-blur-xl border border-white/20 px-5 py-3 shadow-2xl">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 shadow-lg">
                  <Calendar className="h-5 w-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-white/70 uppercase tracking-wider font-medium">Next Event</span>
                  <span className="text-[15px] font-bold text-white">Planitario • Mar 15-16</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom: Scroll indicator only */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col items-center pb-16"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-1"
            >
              <span className="text-[11px] text-white/60 font-medium tracking-wide">Scroll</span>
              <ChevronLeft className="h-5 w-5 text-white/50 rotate-[-90deg]" />
            </motion.div>
          </motion.div>
        </div>

        {/* Curved transition to white section */}
        <div className="absolute -bottom-1 left-0 right-0">
          <svg 
            viewBox="0 0 1440 120" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path 
              d="M0 120L0 60C240 20 480 0 720 0C960 0 1200 20 1440 60L1440 120L0 120Z" 
              fill="white"
            />
          </svg>
        </div>
      </div>

      {/* ============================================ */}
      {/* PART 2: WHITE SECTION WITH GRID */}
      {/* ============================================ */}
      <div className="relative bg-white">
        {/* Subtle dot pattern background */}
        <div 
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.07) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}
        />

        {/* Content container */}
        <div className="relative z-10 px-5 pt-6 pb-10">
          
          {/* ===== URGENCY BANNER ===== */}
          <BlurFade delay={0.1} yOffset={8}>
            <div className="relative mx-auto max-w-sm overflow-hidden rounded-2xl bg-gradient-to-r from-orange-50 via-white to-rose-50 border border-orange-100 shadow-lg shadow-orange-100/50">
              <div className="relative p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 shadow-lg shadow-orange-500/30"
                    >
                      <Flame className="h-5 w-5 text-white" />
                    </motion.div>
                    <div>
                      <p className="text-[11px] text-slate-500 font-medium uppercase tracking-wider">Selling fast</p>
                      <p className="text-sm font-bold text-slate-900">
                        Only{" "}
                        <motion.span
                          key={ticketsRemaining}
                          initial={{ scale: 1.3, color: "#ea580c" }}
                          animate={{ scale: 1, color: "#ea580c" }}
                          className="inline-block"
                        >
                          {ticketsRemaining}
                        </motion.span>
                        {" "}tickets left!
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-full bg-green-50 border border-green-200 px-3 py-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                    </span>
                    <span className="text-[10px] font-bold text-green-700">LIVE</span>
                  </div>
                </div>
              </div>
              {/* Animated border accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 via-rose-500 to-orange-400" />
            </div>
          </BlurFade>

          {/* ===== CTA BUTTONS ===== */}
          <BlurFade delay={0.2} yOffset={8}>
            <div className="mt-5 flex flex-col gap-3 mx-auto max-w-sm">
              <ShimmerButton
                className="w-full rounded-2xl py-4 text-base shadow-xl shadow-orange-500/25"
                shimmerColor="#ffffff"
                shimmerDuration="2s"
              >
                <Ticket className="h-5 w-5" />
                <span className="font-bold">Get Tickets Now</span>
                <ArrowRight className="h-5 w-5" />
              </ShimmerButton>

              <motion.button 
                whileTap={{ scale: 0.98 }}
                className="w-full rounded-2xl border-2 border-slate-900 bg-white px-6 py-3.5 text-sm font-bold text-slate-900 transition-all active:scale-[0.98]"
              >
                <span className="flex items-center justify-center gap-2">
                  <Briefcase className="h-4 w-4" />
                  <span>Partner With Us</span>
                </span>
              </motion.button>
            </div>
          </BlurFade>

          {/* ===== STATS GRID ===== */}
          <BlurFade delay={0.3} yOffset={8}>
            <div className="mt-8 mx-auto max-w-sm">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "10K+", label: "Guests", icon: Users, gradient: "from-orange-500 to-amber-500", bg: "bg-orange-50" },
                  { value: "50+", label: "Events", icon: Sparkles, gradient: "from-rose-500 to-pink-500", bg: "bg-rose-50" },
                  { value: "5.0", label: "Rating", icon: Star, gradient: "from-violet-500 to-purple-500", bg: "bg-violet-50" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                    className={`rounded-2xl ${stat.bg} border border-slate-100 p-4 text-center shadow-sm`}
                  >
                    <div className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} shadow-md`}>
                      <stat.icon className="h-5 w-5 text-white" />
                    </div>
                    <p className="text-xl font-bold text-slate-900">{stat.value}</p>
                    <p className="mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </BlurFade>

          {/* ===== TRUST FOOTER ===== */}
          <BlurFade delay={0.5} yOffset={4}>
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-rose-500 fill-rose-500" />
                <span className="text-xs font-medium text-slate-500">Trusted by 10,000+ event-goers across Cyprus</span>
              </div>
              
              {/* Subtle decorative line */}
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-orange-200 via-rose-200 to-orange-200" />
            </div>
          </BlurFade>
        </div>
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
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm">
            <Sparkles className="h-4 w-4" />
            <span>Cyprus Event Experiences</span>
          </div>
        </motion.div>

        {/* Title with rotating word */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
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
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        >
          From electrifying Planitario nights to epic student adventures, 
          we transform your vision into extraordinary experiences across Cyprus.
        </motion.p>

        {/* Event info badge */}
        <motion.div
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
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
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
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
