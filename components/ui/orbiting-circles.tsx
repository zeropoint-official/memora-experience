"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface OrbitingCirclesProps {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  delay = 0,
  radius = 150,
  path = true,
}: OrbitingCirclesProps) {
  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 h-full w-full"
        >
          <circle
            className="stroke-slate-200 stroke-1"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}
      <motion.div
        style={{
          "--duration": `${duration}s`,
          "--radius": `${radius}px`,
          "--delay": `${delay}s`,
        } as React.CSSProperties}
        className={cn(
          "absolute flex h-full w-full items-center justify-center",
          className
        )}
        animate={{
          rotate: reverse ? -360 : 360,
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          delay: delay,
        }}
      >
        <div
          className="absolute"
          style={{
            transform: `translateX(${radius}px)`,
          }}
        >
          <motion.div
            animate={{
              rotate: reverse ? 360 : -360,
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              ease: "linear",
              delay: delay,
            }}
          >
            {children}
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}




