"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

export function MovingBorder({
  children,
  duration = 2000,
  className,
  containerClassName,
  borderClassName,
  as: Component = "button",
  ...otherProps
}: {
  children: ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
  borderClassName?: string;
  as?: React.ElementType;
  [key: string]: unknown;
}) {
  return (
    <Component
      className={cn(
        "relative bg-transparent p-[1px] overflow-hidden",
        containerClassName
      )}
      {...otherProps}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: "inherit" }}
      >
        <MovingBorderGradient duration={duration} className={borderClassName} />
      </div>
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center bg-slate-900/90 backdrop-blur-xl",
          className
        )}
        style={{ borderRadius: "inherit" }}
      >
        {children}
      </div>
    </Component>
  );
}

function MovingBorderGradient({
  duration = 2000,
  className,
}: {
  duration?: number;
  className?: string;
}) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) => {
    const path = pathRef.current;
    if (!path) return 0;
    const point = path.getPointAtLength(val);
    return point.x;
  });

  const y = useTransform(progress, (val) => {
    const path = pathRef.current;
    if (!path) return 0;
    const point = path.getPointAtLength(val);
    return point.y;
  });

  const background = useMotionTemplate`radial-gradient(100px circle at ${x}px ${y}px, #f97316, #f43f5e, transparent 70%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx="16"
          ry="16"
          ref={pathRef}
        />
      </svg>
      <motion.div
        className={cn("absolute inset-0 opacity-80", className)}
        style={{
          background,
        }}
      />
    </>
  );
}



