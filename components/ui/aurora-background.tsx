"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AuroraBackgroundProps {
  children: ReactNode;
  className?: string;
  showRadialGradient?: boolean;
}

export function AuroraBackground({
  children,
  className,
  showRadialGradient = true,
}: AuroraBackgroundProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-zinc-50 text-slate-950 transition-bg",
        className
      )}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0.0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className={cn(
            `
            pointer-events-none
            absolute
            -inset-[10px]
            [background-image:repeating-linear-gradient(100deg,var(--aurora-1)_10%,var(--aurora-2)_15%,var(--aurora-3)_20%,var(--aurora-4)_25%,var(--aurora-1)_30%)]
            [background-size:300%_300%]
            [background-position:50%_50%]
            opacity-50
            blur-[10px]
            invert
            filter
            will-change-transform
            [--aurora-1:#f97316]
            [--aurora-2:#f43f5e]
            [--aurora-3:#8b5cf6]
            [--aurora-4:#06b6d4]
            animate-aurora
          `,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,transparent_70%)]`
          )}
        />
      </div>
      {children}
    </div>
  );
}



