"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";

interface SpotlightProps {
  className?: string;
  fill?: string;
}

export function Spotlight({ className, fill = "white" }: SpotlightProps) {
  const divRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!divRef.current) return;
      const rect = divRef.current.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    },
    [mouseX, mouseY]
  );

  useEffect(() => {
    setIsMounted(true);
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const spotlightBackground = useMotionTemplate`radial-gradient(600px at ${mouseX}px ${mouseY}px, ${fill}15, transparent 80%)`;

  if (!isMounted) return null;

  return (
    <motion.div
      ref={divRef}
      className={cn(
        "pointer-events-none absolute inset-0 z-30 transition duration-300",
        className
      )}
      style={{
        background: spotlightBackground,
      }}
    />
  );
}


