"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface GridPatternProps {
  className?: string;
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  strokeDasharray?: string;
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
}

export function GridPattern({
  className,
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  numSquares = 50,
  maxOpacity = 0.5,
  duration = 4,
}: GridPatternProps) {
  const id = `grid-pattern-${Math.random().toString(36).substr(2, 9)}`;

  const getRandomPosition = () => ({
    row: Math.floor(Math.random() * 20),
    col: Math.floor(Math.random() * 20),
  });

  const squares = Array.from({ length: numSquares }, () => getRandomPosition());

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/30 stroke-neutral-400/30",
        className
      )}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map(({ row, col }, idx) => (
          <motion.rect
            key={idx}
            width={width - 1}
            height={height - 1}
            x={col * width + 1}
            y={row * height + 1}
            className="fill-neutral-400"
            strokeWidth={0}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, maxOpacity, 0],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay: Math.random() * duration,
              repeatType: "loop",
            }}
          />
        ))}
      </svg>
    </svg>
  );
}



