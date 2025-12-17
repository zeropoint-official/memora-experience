"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ShimmerButtonProps {
  children: ReactNode;
  className?: string;
  shimmerColor?: string;
  shimmerSize?: string;
  shimmerDuration?: string;
  background?: string;
  onClick?: () => void;
}

export function ShimmerButton({
  children,
  className,
  shimmerColor = "#ffffff",
  shimmerSize = "0.1em",
  shimmerDuration = "2s",
  background = "linear-gradient(135deg, #f97316 0%, #f43f5e 100%)",
  onClick,
}: ShimmerButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={cn(
        "group relative inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300",
        className
      )}
      style={{
        background,
      }}
    >
      <span
        className="absolute inset-0 overflow-hidden rounded-full"
        style={{
          mask: "linear-gradient(white, white) content-box, linear-gradient(white, white)",
          maskComposite: "exclude",
        }}
      >
        <span
          className="absolute inset-0 animate-shimmer"
          style={{
            background: `linear-gradient(90deg, transparent, ${shimmerColor}40, transparent)`,
            backgroundSize: "200% 100%",
            animationDuration: shimmerDuration,
          }}
        />
      </span>
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
}


