"use client";

import { cn } from "@/lib/utils";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface SparkleProps {
  id: string;
  createdAt: number;
  color: string;
  size: number;
  style: {
    top: string;
    left: string;
  };
}

const DEFAULT_COLOR = "#f97316";

const generateSparkle = (color: string): SparkleProps => {
  return {
    id: String(Math.random()),
    createdAt: Date.now(),
    color,
    size: Math.random() * 10 + 5,
    style: {
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
    },
  };
};

export function SparklesText({
  children,
  className,
  sparklesCount = 10,
  colors = { first: "#f97316", second: "#f43f5e" },
}: {
  children: React.ReactNode;
  className?: string;
  sparklesCount?: number;
  colors?: { first: string; second: string };
}) {
  const [sparkles, setSparkles] = useState<SparkleProps[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const sparkle = generateSparkle(
        Math.random() > 0.5 ? colors.first : colors.second
      );
      setSparkles((s) => [...s, sparkle]);

      setTimeout(() => {
        setSparkles((s) => s.filter((sp) => sp.id !== sparkle.id));
      }, 750);
    }, 100);

    const initialSparkles = Array.from({ length: sparklesCount }, () =>
      generateSparkle(Math.random() > 0.5 ? colors.first : colors.second)
    );
    setSparkles(initialSparkles);

    return () => clearInterval(interval);
  }, [sparklesCount, colors]);

  return (
    <span className={cn("relative inline-block", className)}>
      {sparkles.map((sparkle) => (
        <Sparkle
          key={sparkle.id}
          color={sparkle.color}
          size={sparkle.size}
          style={sparkle.style}
        />
      ))}
      <strong className="relative z-10 font-bold">{children}</strong>
    </span>
  );
}

function Sparkle({
  color,
  size,
  style,
}: {
  color: string;
  size: number;
  style: { top: string; left: string };
}) {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [0, 1, 0],
      rotate: [0, 180],
      opacity: [1, 1, 0],
    });
  }, [controls]);

  return (
    <motion.span
      className="pointer-events-none absolute z-20"
      style={style}
      animate={controls}
      transition={{ duration: 0.75, ease: "easeOut" }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 68 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M26.5 25.5C19.0043 33.3697 0 34 0 34C0 34 19.1013 35.3684 26.5 43.5C33.234 50.901 34 68 34 68C34 68 36.9884 50.7065 44.5 43.5C51.6431 36.647 68 34 68 34C68 34 51.6947 32.0939 44.5 25.5C36.5605 18.2235 34 0 34 0C34 0 33.6591 17.9837 26.5 25.5Z"
          fill={color}
        />
      </svg>
    </motion.span>
  );
}

