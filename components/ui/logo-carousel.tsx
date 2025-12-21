"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export interface Logo {
  src: string;
  alt: string;
}

export interface LogoCarouselProps {
  logos: Logo[];
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  className?: string;
}

export function LogoCarousel({
  logos,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className = "",
}: LogoCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      {/* Gradient masks for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex items-center gap-8 sm:gap-12 md:gap-16"
        animate={{
          x: direction === "left" ? [0, -100 * logos.length + "%"] : [-100 * logos.length + "%", 0],
        }}
        transition={{
          x: {
            duration: speed,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        }}
        style={{
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="flex-shrink-0 flex items-center justify-center h-16 w-32 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              className="object-contain max-h-14 w-auto"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// Alternative version with CSS animation for better performance
export function LogoCarouselCSS({
  logos,
  speed = 30,
  direction = "left",
  pauseOnHover = true,
  className = "",
}: LogoCarouselProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      {/* Gradient masks for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        className="flex items-center gap-8 sm:gap-12 md:gap-16 w-max"
        style={{
          animation: `scroll-${direction} ${speed}s linear infinite`,
          animationPlayState: isHovered ? "paused" : "running",
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={`${logo.alt}-${index}`}
            className="flex-shrink-0 flex items-center justify-center h-16 w-32 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={60}
              className="object-contain max-h-12 w-auto"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}

