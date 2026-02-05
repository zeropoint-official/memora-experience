"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Star, Users, Heart, ExternalLink, Calendar, Trophy } from "lucide-react";
import { FaUsers, FaCalendarCheck, FaStar } from "react-icons/fa";
import Link from "next/link";
import { TextRotate } from "@/components/ui/text-rotate";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { Spotlight } from "@/components/ui/spotlight";
import { GridPattern } from "@/components/ui/grid-pattern";
import { BlurFade } from "@/components/ui/blur-fade";
import { useRef, useState, useEffect } from "react";

// ============================================
// NEXT EVENT - Sleek minimal design with countdown
// ============================================
interface NextEventProps {
  variant?: "light" | "dark";
  className?: string;
  eventDate?: Date; // Target event date
  eventName?: string;
}

function NextEvent({ 
  variant = "light", 
  className = "",
  eventDate, // Will default to July 4, 2025 5 PM if not provided
  eventName = "Boat Party"
}: NextEventProps) {
  const [spotsLeft, setSpotsLeft] = useState(56);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0 });

  // Calculate countdown
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      // Default to July 4, 2026 at 5 PM (Boat Party event)
      let target: Date;
      if (eventDate) {
        target = eventDate instanceof Date ? eventDate : new Date(eventDate);
      } else {
        // Default: July 4, 2026 at 5 PM
        target = new Date(2026, 6, 4, 17, 0, 0); // Month is 0-indexed, so 6 = July
      }
      
      const diff = target.getTime() - now.getTime();
      
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/e1906a4b-ef88-46e4-99b4-2054bf7a986c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'landing-hero.tsx:calculateTimeLeft',message:'Countdown calc',data:{nowISO:now.toISOString(),targetISO:target.toISOString(),diffMs:diff,diffIsNegative:diff<=0},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A-date-comparison'})}).catch(()=>{});
      // #endregion
      
      if (diff <= 0) {
        // #region agent log
        fetch('http://127.0.0.1:7244/ingest/e1906a4b-ef88-46e4-99b4-2054bf7a986c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'landing-hero.tsx:diff<=0',message:'Event in past - setting 0',data:{diff},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A-past-event'})}).catch(()=>{});
        // #endregion
        setTimeLeft({ days: 0, hours: 0 });
        return;
      }
      
      const totalHours = Math.floor(diff / (1000 * 60 * 60));
      const days = Math.floor(totalHours / 24);
      const hours = totalHours % 24;
      
      // #region agent log
      fetch('http://127.0.0.1:7244/ingest/e1906a4b-ef88-46e4-99b4-2054bf7a986c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'landing-hero.tsx:countdown-result',message:'Countdown computed',data:{days,hours,totalHours},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'A-result'})}).catch(()=>{});
      // #endregion
      
      setTimeLeft({ days, hours });
    };

    // #region agent log
    fetch('http://127.0.0.1:7244/ingest/e1906a4b-ef88-46e4-99b4-2054bf7a986c',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'landing-hero.tsx:useEffect',message:'useEffect running',data:{hasEventDate:!!eventDate},timestamp:Date.now(),sessionId:'debug-session',hypothesisId:'B-useEffect'})}).catch(()=>{});
    // #endregion

    // Calculate immediately
    calculateTimeLeft();
    // Then update every minute
    const interval = setInterval(calculateTimeLeft, 1000 * 60);
    return () => clearInterval(interval);
  }, [eventDate]);

  // Animate spots left
  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft((prev) => {
        if (prev <= 20) return 56;
        return prev - Math.floor(Math.random() * 2 + 1);
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const isDark = variant === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.5 }}
      className={`flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 ${className}`}
    >
      {/* Mobile: Line 1 - Next + Event name */}
      {/* Desktop: Part of single line */}
      <div className="flex items-center gap-2">
        <span className={`text-xs font-medium uppercase tracking-[0.2em] ${isDark ? "text-white/40" : "text-slate-400"}`}>
          Next
        </span>
        <div className={`w-6 md:w-8 h-px ${isDark ? "bg-white/20" : "bg-slate-200"}`} />
        <span className={`text-sm font-medium ${isDark ? "text-white/90" : "text-slate-700"}`}>
          {eventName}
        </span>
      </div>

      {/* Mobile: Line 2 - Countdown + Tickets */}
      {/* Desktop: Part of single line */}
      <div className="flex items-center gap-3">
        {/* Divider - only show on desktop */}
        <div className={`hidden md:block w-4 h-px ${isDark ? "bg-white/20" : "bg-slate-200"}`} />
        
        {/* Countdown */}
        <div className="flex items-baseline gap-1.5">
          <span className={`text-sm font-semibold ${isDark ? "text-[#E8C9A0]" : "text-[#D4A574]"}`}>
            {timeLeft.days}
          </span>
          <span className={`text-xs ${isDark ? "text-white/40" : "text-slate-400"}`}>
            d
          </span>
          <span className={`text-xs ${isDark ? "text-white/30" : "text-slate-300"}`}>
            ·
          </span>
          <span className={`text-sm font-semibold ${isDark ? "text-[#E8C9A0]" : "text-[#D4A574]"}`}>
            {timeLeft.hours}
          </span>
          <span className={`text-xs ${isDark ? "text-white/40" : "text-slate-400"}`}>
            h
          </span>
        </div>
        
        {/* Divider */}
        <div className={`w-px h-3 md:h-4 ${isDark ? "bg-white/20" : "bg-slate-200"}`} />
        
        {/* Tickets left */}
        <div className="flex items-center gap-1.5">
          <span className={`text-sm font-semibold ${isDark ? "text-[#E8C9A0]" : "text-[#D4A574]"}`}>
            {spotsLeft}
          </span>
          <span className={`text-xs ${isDark ? "text-white/40" : "text-slate-400"}`}>
            left
          </span>
        </div>
      </div>
    </motion.div>
  );
}

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

// ============================================
// TICKET BUTTON COMPONENT - Modern Ticket Style
// ============================================
interface TicketButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

function TicketButton({ className = "", size = "md" }: TicketButtonProps) {
  const sizeClasses = {
    sm: { padding: "px-6 py-3", text: "text-sm", notch: 8, arrow: "h-4 w-4" },
    md: { padding: "px-8 py-4", text: "text-base", notch: 10, arrow: "h-5 w-5" },
    lg: { padding: "px-10 py-5", text: "text-lg", notch: 12, arrow: "h-6 w-6" },
  };

  const s = sizeClasses[size];

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className={`group relative cursor-pointer ${className}`}
    >
      {/* Shadow */}
      <div className="absolute inset-0 rounded-2xl bg-[#D4A574]/40 blur-xl translate-y-2 group-hover:translate-y-3 transition-all" />
      
      {/* Main ticket body */}
      <div className="relative overflow-visible">
        {/* The ticket shape with notches */}
        <div 
          className="relative bg-gradient-to-r from-[#D4A574] via-[#C8965F] to-[#D4A574] rounded-2xl"
          style={{
            clipPath: `polygon(
              0 0, 
              calc(100% - 0px) 0, 
              100% 0,
              100% calc(50% - ${s.notch}px),
              calc(100% - ${s.notch/2}px) 50%,
              100% calc(50% + ${s.notch}px),
              100% 100%,
              0 100%,
              0 calc(50% + ${s.notch}px),
              ${s.notch/2}px 50%,
              0 calc(50% - ${s.notch}px)
            )`
          }}
        >
          {/* Inner glow at top */}
          <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/15 to-transparent rounded-t-2xl" />
          
          {/* Subtle horizontal lines texture */}
          <div 
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 4px, rgba(255,255,255,0.5) 4px, rgba(255,255,255,0.5) 5px)`,
            }}
          />

          {/* Dashed perforation line - left side */}
          <div className="absolute left-5 top-2 bottom-2 w-px border-l border-dashed border-white/20" />
          
          {/* Dashed perforation line - right side */}
          <div className="absolute right-5 top-2 bottom-2 w-px border-l border-dashed border-white/20" />

          {/* Shine sweep on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

          {/* Content */}
          <div className={`relative flex items-center justify-center gap-3 ${s.padding}`}>
            <span className={`font-bold text-white ${s.text} tracking-wide`}>
              Get Tickets
            </span>
            <ArrowRight className={`${s.arrow} text-white transition-transform group-hover:translate-x-1`} />
          </div>
        </div>
        
        {/* Notch shadows for depth */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 rounded-full bg-black/10 blur-sm"
          style={{ left: -2, width: s.notch, height: s.notch * 2 }}
        />
        <div 
          className="absolute top-1/2 -translate-y-1/2 rounded-full bg-black/10 blur-sm"
          style={{ right: -2, width: s.notch, height: s.notch * 2 }}
        />
      </div>
    </motion.div>
  );
}

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
      <Star className="h-3 w-3 fill-[#E8C9A0] text-[#E8C9A0]" />
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
  const videoRef = useRef<HTMLVideoElement | null>(null);

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
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight drop-shadow-2xl">
                <span className="block text-white/90">Create</span>
                <span className="relative inline-block my-2">
                  <TextRotate
                    texts={["Legendary", "Memorable", "Spectacular", "Fantastic"]}
                    mainClassName="inline-flex items-baseline justify-center whitespace-nowrap"
                    elementLevelClassName="text-[#D4A574] drop-shadow-lg"
                    staggerDuration={0.02}
                    staggerFrom="last"
                    rotationInterval={3000}
                    transition={{ type: "spring", damping: 35, stiffness: 300 }}
                  />
                </span>
                <span className="block text-white/90">Moments</span>
              </h1>
            </motion.div>

            {/* Next Event - Mobile */}
            <div className="mt-8">
              <NextEvent variant="dark" />
            </div>
          </div>

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

          {/* ===== CTA BUTTONS ===== */}
          <BlurFade delay={0.1} yOffset={8}>
            <div className="mt-5 flex flex-col gap-3 mx-auto max-w-sm">
              <Link href="/events" className="w-full">
                <TicketButton size="md" className="w-full" />
              </Link>

              <Link 
                href="/business"
                className="group mt-4 flex items-center justify-center"
              >
                <span className="relative text-sm font-medium text-slate-600 transition-colors group-hover:text-[#D4A574]">
                  Business with us
                  <ExternalLink className="inline-block ml-1 -translate-y-px text-slate-400/60 transition-colors group-hover:text-[#D4A574]" strokeWidth={1.5} style={{ width: 10, height: 10 }} />
                  <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-slate-300 transition-colors group-hover:bg-[#D4A574]" />
                </span>
              </Link>
            </div>
          </BlurFade>

          {/* ===== STATS GRID ===== */}
          <BlurFade delay={0.2} yOffset={8}>
            <div className="mt-8 mx-auto max-w-sm">
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: "10K+", label: "Guests", icon: FaUsers, gradient: "from-[#D4A574] to-[#C8965F]", bg: "bg-[#FAF7F2]" },
                  { value: "5", label: "Events", icon: FaCalendarCheck, gradient: "from-[#D4A574] to-[#B8874A]", bg: "bg-[#FAF7F2]" },
                  { value: "5.0", label: "Rating", icon: FaStar, gradient: "from-[#D4A574] to-[#C8965F]", bg: "bg-[#FAF7F2]" },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, filter: "blur(8px)" }}
                    animate={{ opacity: 1, filter: "blur(0px)" }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                    className={`group rounded-2xl ${stat.bg} border border-slate-100 p-4 text-center shadow-sm transition-all hover:shadow-md hover:border-slate-200`}
                  >
                    <div className={`mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} shadow-md transition-transform group-hover:scale-110 group-hover:shadow-lg`}>
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
          <BlurFade delay={0.4} yOffset={4}>
            <div className="mt-8 flex flex-col items-center gap-3">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-[#D4A574] fill-[#D4A574]" />
                <span className="text-xs font-medium text-slate-500">Trusted by 10,000+ event-goers across Cyprus</span>
              </div>
              
              {/* Subtle decorative line */}
              <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#E8C9A0] via-[#D4A574] to-[#E8C9A0]" />
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
    <section className="relative hidden md:block min-h-screen w-full overflow-x-hidden overflow-y-visible bg-[#FAFAFA] pt-20">
      {/* Spotlight effect */}
      <Spotlight className="z-10" fill="#D4A574" />
      
      {/* Grid pattern background */}
      <GridPattern
        className="absolute inset-0 z-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"
        width={50}
        height={50}
        numSquares={40}
        maxOpacity={0.15}
      />

      {/* Background glows */}
      <div className="absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-[#E8C9A0]/30 blur-[120px]" />
      <div className="absolute -right-20 bottom-20 h-[500px] w-[500px] rounded-full bg-[#D4A574]/30 blur-[120px]" />
      <div className="absolute left-1/3 top-1/2 h-[400px] w-[400px] rounded-full bg-[#C8965F]/20 blur-[100px]" />

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
          <div className="inline-flex items-center gap-2 rounded-full border border-[#E8C9A0] bg-white px-4 py-2 text-sm font-medium text-[#D4A574] shadow-sm">
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
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
            <span className="flex w-full items-baseline justify-center whitespace-nowrap translate-x-1">
              <span className="shrink-0 text-[#6B6B6B]">Create&nbsp;</span>
              {/* Reserve space so only the rotating word animates (Create stays put) */}
              <span className="inline-flex min-w-[10ch] items-baseline justify-start overflow-visible pb-1">
                <TextRotate
                  texts={["Legendary", "Memorable", "Spectacular", "Fantastic"]}
                  mainClassName="inline-flex items-baseline justify-start whitespace-nowrap [&>div]:pb-2 [&>div]:overflow-visible"
                  elementLevelClassName="text-[#D4A574]"
                  staggerDuration={0.03}
                  staggerFrom="last"
                  rotationInterval={2500}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                />
              </span>
            </span>
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-[#6B6B6B] mt-1">
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

        {/* Next Event */}
        <div className="mt-6 pointer-events-auto">
          <NextEvent variant="light" />
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-3 pointer-events-auto"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
        >
          <Link href="/events">
            <TicketButton size="lg" />
          </Link>

          <Link 
            href="/business"
            className="group mt-4 inline-flex items-center"
          >
            <span className="relative text-base font-medium text-slate-600 transition-colors group-hover:text-[#D4A574]">
              Business with us
              <ExternalLink className="inline-block ml-1 -translate-y-px text-slate-400/60 transition-colors group-hover:text-[#D4A574]" strokeWidth={1.5} style={{ width: 11, height: 11 }} />
              <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-slate-300 transition-colors group-hover:bg-[#D4A574]" />
            </span>
          </Link>
        </motion.div>

        {/* Stats Grid - Desktop */}
        <motion.div
          className="mt-16 pointer-events-auto"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: 0.7, ease: "easeOut" }}
        >
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-6 max-w-md">
              {[
                { value: "10K+", label: "Guests", icon: FaUsers, gradient: "from-[#D4A574] to-[#C8965F]", bg: "bg-[#FAF7F2]" },
                { value: "5", label: "Events", icon: FaCalendarCheck, gradient: "from-[#D4A574] to-[#B8874A]", bg: "bg-[#FAF7F2]" },
                { value: "5.0", label: "Rating", icon: FaStar, gradient: "from-[#D4A574] to-[#C8965F]", bg: "bg-[#FAF7F2]" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5, ease: "easeOut" }}
                  className={`group rounded-2xl ${stat.bg} border border-slate-100 p-5 text-center shadow-sm transition-all hover:shadow-md hover:border-slate-200`}
                >
                  <div className={`mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} shadow-md transition-transform group-hover:scale-110 group-hover:shadow-lg`}>
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-slate-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Trust Footer - Desktop */}
          <motion.div
            className="mt-8 flex flex-col items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-[#D4A574] fill-[#D4A574]" />
              <span className="text-sm font-medium text-slate-500">Trusted by 10,000+ event-goers across Cyprus</span>
            </div>
            <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#E8C9A0] via-[#D4A574] to-[#E8C9A0]" />
          </motion.div>
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
