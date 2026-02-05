"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedGradientText({
  children,
  className,
}: AnimatedGradientTextProps) {
  return (
    <motion.span
      className={cn(
        "animate-gradient bg-[length:200%_auto] bg-clip-text text-transparent",
        "bg-gradient-to-r from-[#D4A574] via-[#C8965F] to-[#D4A574]",
        className
      )}
      initial={{ backgroundPosition: "0% center" }}
      animate={{ backgroundPosition: "200% center" }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {children}
    </motion.span>
  );
}




