"use client";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  borderWidth = 1.5,
  colorFrom = "#f97316",
  colorTo = "#f43f5e",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      style={{
        "--size": size,
        "--duration": `${duration}s`,
        "--border-width": `${borderWidth}px`,
        "--color-from": colorFrom,
        "--color-to": colorTo,
        "--delay": `${delay}s`,
      } as React.CSSProperties}
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width))_solid_transparent]",
        "[background:padding-box_linear-gradient(to_right,transparent,transparent),border-box_conic-gradient(from_calc(var(--angle)-60deg)_at_50%_50%,transparent,var(--color-from),var(--color-to),transparent)]",
        "animate-border-beam",
        className
      )}
    />
  );
}




