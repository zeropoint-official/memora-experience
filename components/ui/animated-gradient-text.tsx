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
        "bg-gradient-to-r from-orange-500 via-rose-500 to-orange-500",
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


