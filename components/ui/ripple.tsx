"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface RippleProps {
  mainCircleSize?: number;
  mainCircleOpacity?: number;
  numCircles?: number;
  className?: string;
}

export function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
}: RippleProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 flex items-center justify-center overflow-hidden",
        className
      )}
    >
      {Array.from({ length: numCircles }, (_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full border border-orange-500/20 bg-orange-500/5"
          style={{
            width: mainCircleSize + i * 70,
            height: mainCircleSize + i * 70,
            opacity: mainCircleOpacity - i * 0.02,
          }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [mainCircleOpacity - i * 0.02, 0, mainCircleOpacity - i * 0.02],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}



