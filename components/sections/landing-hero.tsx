"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";


import { TextRotate } from "@/components/ui/text-rotate";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";
import { useRef, useState, useEffect } from "react";

// ============================================
// NEXT EVENT — minimal inline countdown
// ============================================
function NextEvent({ variant = "light" }: { variant?: "light" | "dark" }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0 });

  useEffect(() => {
    const calc = () => {
      const target = new Date(2026, 6, 4, 17, 0, 0); // July 4, 2026
      const diff = target.getTime() - Date.now();
      if (diff <= 0) return setTimeLeft({ days: 0, hours: 0 });
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      });
    };
    calc();
    const t = setInterval(calc, 60_000);
    return () => clearInterval(t);
  }, []);

  const isDark = variant === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.6 }}
      className="flex items-center justify-center gap-2.5"
    >
      <span className={`text-[11px] font-medium uppercase tracking-[0.15em] ${isDark ? "text-white/40" : "text-slate-400"}`}>
        Next
      </span>
      <span className={`h-3 w-px ${isDark ? "bg-white/20" : "bg-slate-200"}`} />
      <span className={`text-sm font-medium ${isDark ? "text-white/80" : "text-slate-600"}`}>
        Boat Party
      </span>
      <span className={`h-3 w-px ${isDark ? "bg-white/20" : "bg-slate-200"}`} />
      <span className={`text-[11px] ${isDark ? "text-white/40" : "text-slate-400"}`}>
        <span className={`font-semibold ${isDark ? "text-[#E8C9A0]" : "text-[#D4A574]"}`}>{timeLeft.days}</span>d{" "}
        <span className={`font-semibold ${isDark ? "text-[#E8C9A0]" : "text-[#D4A574]"}`}>{timeLeft.hours}</span>h
      </span>
    </motion.div>
  );
}

// ============================================
// TICKET BUTTON — refined ticket shape
// ============================================
interface TicketButtonProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

function TicketButton({ className = "", size = "md" }: TicketButtonProps) {
  const sizeClasses = {
    sm: { padding: "px-7 py-3", text: "text-sm", notch: 7, arrow: "h-4 w-4" },
    md: { padding: "px-9 py-3.5", text: "text-[15px]", notch: 8, arrow: "h-4 w-4" },
    lg: { padding: "px-10 py-4", text: "text-base", notch: 9, arrow: "h-[18px] w-[18px]" },
  };

  const s = sizeClasses[size];

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`group relative cursor-pointer ${className}`}
    >
      <div
        className="relative bg-[#D4A574] transition-colors group-hover:bg-[#C8965F]"
        style={{
          borderRadius: "14px",
          clipPath: `polygon(
            0 0,
            100% 0,
            100% calc(50% - ${s.notch}px),
            calc(100% - ${s.notch / 2}px) 50%,
            100% calc(50% + ${s.notch}px),
            100% 100%,
            0 100%,
            0 calc(50% + ${s.notch}px),
            ${s.notch / 2}px 50%,
            0 calc(50% - ${s.notch}px)
          )`,
        }}
      >
        {/* Subtle top highlight */}
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none" style={{ borderRadius: "14px 14px 0 0" }} />

        {/* Content */}
        <div className={`relative flex items-center justify-center gap-2.5 ${s.padding}`}>
          <span className={`font-semibold text-white ${s.text} tracking-wide`}>
            Get Tickets
          </span>
          <ArrowRight className={`${s.arrow} text-white/80 transition-transform group-hover:translate-x-0.5`} />
        </div>
      </div>
    </motion.div>
  );
}

// ============================================
// EVENT IMAGES for desktop parallax
// ============================================
const eventImages = [
  { url: "/Content/planitatio/The Cyprus Planetarium 2025.jpg", alt: "Cyprus Planetarium" },
  { url: "/Content/planitatio/Cyprus Planetarium Lobby.jpg", alt: "Planetarium Lobby" },
  { url: "/Content/planitatio/Cyprus Planetarium Cosmonaut Astronaut.jpg", alt: "Cosmonaut Experience" },
  { url: "/Content/yacth1.jpg", alt: "Boat Party" },
  { url: "/Content/yacth4.jpg", alt: "Yacht Sunset" },
  { url: "/Content/planitatio/image.png", alt: "Planitario Event" },
];

// ============================================
// MOBILE HERO — video bg + clean white section
// ============================================
function MobileHero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    const p = video.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }, []);

  return (
    <section className="relative w-full overflow-hidden md:hidden">
      {/* ——— VIDEO HERO ——— */}
      <div className="relative min-h-[88svh] w-full overflow-hidden">
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
          <source src="/backround-video.webm" type="video/webm" />
          <source src="/background-video.webm" type="video/webm" />
          <source src="/bg-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/25 to-black/60" />

        {/* Content */}
        <div
          className="absolute inset-0 z-10 flex flex-col px-5"
          style={{
            paddingTop: "calc(env(safe-area-inset-top) + 6rem)",
            paddingBottom: "calc(env(safe-area-inset-bottom) + 2.5rem)",
          }}
        >
          {/* Center: title */}
          <div className="flex flex-1 flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center"
            >
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.15]">
                <span className="block text-white/90">Create</span>
                <span className="relative inline-block my-1.5">
                  <TextRotate
                    texts={["Legendary", "Memorable", "Spectacular", "Fantastic"]}
                    mainClassName="inline-flex items-baseline justify-center whitespace-nowrap"
                    elementLevelClassName="text-[#E8C9A0]"
                    staggerDuration={0.02}
                    staggerFrom="last"
                    rotationInterval={3000}
                    transition={{ type: "spring", damping: 35, stiffness: 300 }}
                  />
                </span>
                <span className="block text-white/90">Moments</span>
              </h1>
            </motion.div>

            {/* Next Event */}
            <div className="mt-8">
              <NextEvent variant="dark" />
            </div>
          </div>

          {/* Bottom: CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-center gap-5 pb-4"
          >
            {/* FIX: Use <a> tags for reliable full-page navigation (Next.js Link SPA nav fails on homepage due to Clerk session state) */}
            <a href="/events" className="w-full max-w-xs">
              <TicketButton size="md" className="w-full" />
            </a>
            <a href="/business" className="group flex items-center gap-1">
              <span className="text-[13px] font-medium text-white/50 transition-colors group-hover:text-white/80">
                Business with us
              </span>
              <ArrowUpRight className="h-3 w-3 text-white/30 transition-colors group-hover:text-white/60" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* ——— STATS ROW — clean, minimal ——— */}
      <div className="relative bg-[#FAF8F5]">
        <div className="px-5 py-8">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center gap-8"
          >
            {[
              { value: "10K+", label: "Guests" },
              { value: "5", label: "Events" },
              { value: "5.0", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-lg font-semibold text-slate-900">{stat.value}</p>
                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate-400 mt-0.5">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// ============================================
// DESKTOP HERO — clean with parallax images
// ============================================
function DesktopHero() {
  return (
    <section className="relative hidden md:block min-h-screen w-full overflow-x-hidden overflow-y-visible bg-[#FAF8F5] pt-20">
      {/* Single subtle warm glow */}
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[500px] w-[700px] rounded-full bg-[#E8C9A0]/15 blur-[140px] pointer-events-none" />

      {/* Parallax floating images */}
      <Floating sensitivity={-0.5} className="h-full z-10">
        {/* Top left — small */}
        <FloatingElement depth={0.5} className="top-[26%] left-[5%]">
          <motion.img
            src={eventImages[0].url}
            alt={eventImages[0].alt}
            className="w-28 h-28 object-cover rounded-2xl shadow-lg shadow-slate-200/60 hover:scale-105 transition-transform duration-300 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        {/* Top left — larger */}
        <FloatingElement depth={1} className="top-[12%] left-[12%]">
          <motion.img
            src={eventImages[1].url}
            alt={eventImages[1].alt}
            className="w-52 h-40 object-cover rounded-2xl shadow-lg shadow-slate-200/60 hover:scale-105 transition-transform duration-300 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        {/* Bottom left — large */}
        <FloatingElement depth={2} className="top-[68%] left-[6%]">
          <motion.img
            src={eventImages[2].url}
            alt={eventImages[2].alt}
            className="w-56 h-56 object-cover rounded-2xl shadow-lg shadow-slate-200/60 hover:scale-105 transition-transform duration-300 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        {/* Top right */}
        <FloatingElement depth={1.5} className="top-[10%] left-[78%]">
          <motion.img
            src={eventImages[3].url}
            alt={eventImages[3].alt}
            className="w-56 h-44 object-cover rounded-2xl shadow-lg shadow-slate-200/60 hover:scale-105 transition-transform duration-300 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        {/* Right middle — small */}
        <FloatingElement depth={0.8} className="top-[44%] left-[88%]">
          <motion.img
            src={eventImages[4].url}
            alt={eventImages[4].alt}
            className="w-32 h-32 object-cover rounded-2xl shadow-lg shadow-slate-200/60 hover:scale-105 transition-transform duration-300 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>

        {/* Bottom right — large */}
        <FloatingElement depth={1.2} className="top-[65%] left-[75%]">
          <motion.img
            src={eventImages[5].url}
            alt={eventImages[5].alt}
            className="w-64 h-64 object-cover rounded-2xl shadow-lg shadow-slate-200/60 hover:scale-105 transition-transform duration-300 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          />
        </FloatingElement>
      </Floating>

      {/* Main content */}
      <div className="relative z-20 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pointer-events-none pt-20">
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-[#D4A574] pointer-events-auto"
        >
          Cyprus Event Experiences
        </motion.p>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1]">
            <span className="flex w-full items-baseline justify-center whitespace-nowrap translate-x-1">
              <span className="shrink-0 text-slate-900">Create&nbsp;</span>
              <span className="inline-flex min-w-[10ch] items-baseline justify-start overflow-visible pb-1">
                <TextRotate
                  texts={["Legendary", "Memorable", "Spectacular", "Fantastic"]}
                  mainClassName="inline-flex items-baseline justify-start whitespace-nowrap [&>div]:pb-2 [&>div]:overflow-visible"
                  elementLevelClassName="text-[#C8965F]"
                  staggerDuration={0.03}
                  staggerFrom="last"
                  rotationInterval={2500}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                />
              </span>
            </span>
          </h1>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] text-slate-900 mt-1">
            Moments
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="mt-7 max-w-lg text-center text-base lg:text-lg text-slate-500 leading-relaxed"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          From electrifying Planitario nights to epic student adventures,
          we create extraordinary experiences across Cyprus.
        </motion.p>

        {/* Next Event */}
        <div className="mt-6 pointer-events-auto">
          <NextEvent variant="light" />
        </div>

        {/* CTA */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 pointer-events-auto"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* FIX: Use <a> tags for reliable full-page navigation (Next.js Link SPA nav fails on homepage due to Clerk session state) */}
          <a href="/events">
            <TicketButton size="lg" />
          </a>

          <a href="/business" className="group mt-2 flex items-center gap-1.5">
            <span className="text-sm font-medium text-slate-400 transition-colors group-hover:text-[#D4A574]">
              Business with us
            </span>
            <ArrowUpRight className="h-3.5 w-3.5 text-slate-300 transition-colors group-hover:text-[#D4A574]" />
          </a>
        </motion.div>

        {/* Stats — inline, minimal */}
        <motion.div
          className="mt-16 pointer-events-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <div className="flex items-center justify-center gap-10">
            {[
              { value: "10K+", label: "Guests" },
              { value: "5", label: "Events" },
              { value: "5.0", label: "Rating" },
            ].map((stat, i, arr) => (
              <div key={stat.label} className="flex items-center gap-10">
                <div className="text-center">
                  <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                  <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-slate-400 mt-1">
                    {stat.label}
                  </p>
                </div>
                {i < arr.length - 1 && <div className="h-8 w-px bg-slate-200" />}
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF8F5] to-transparent z-30 pointer-events-none" />
    </section>
  );
}

// ============================================
// MAIN EXPORT
// ============================================
export function LandingHero() {
  return (
    <>
      <MobileHero />
      <DesktopHero />
    </>
  );
}
