"use client";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BrandedTextProps {
  children: string;
  className?: string;
  variant?: "default" | "large" | "small";
  showExperience?: boolean;
}

/**
 * BrandedText component that mimics the logo's two-tone style
 * Splits text into parts and applies gray to first part, gold to second part
 */
export function BrandedText({ 
  children, 
  className,
  variant = "default",
  showExperience = false 
}: BrandedTextProps) {
  // Split text into words
  const words = children.split(" ");
  
  // For "memora" or similar, split at "mem" and "ora"
  // For other text, split at the middle or at specific words
  const renderBrandedText = () => {
    // Check if it's "memora" or contains "memora"
    if (children.toLowerCase().includes("memora")) {
      const parts = children.split(/(memora|Memora|MEMORA)/i);
      return (
        <>
          {parts.map((part, index) => {
            if (part.toLowerCase() === "memora") {
              return (
                <span key={index}>
                  <span className="text-[#6B6B6B]">mem</span>
                  <span className="text-[#D4A574]">ora</span>
                </span>
              );
            }
            return <span key={index}>{part}</span>;
          })}
        </>
      );
    }
    
    // For other text, split words and alternate or highlight key words
    // First word(s) in gray, last word(s) in gold
    if (words.length === 1) {
      // Single word - split in half if possible
      const mid = Math.floor(words[0].length / 2);
      return (
        <>
          <span className="text-[#6B6B6B]">{words[0].slice(0, mid)}</span>
          <span className="text-[#D4A574]">{words[0].slice(mid)}</span>
        </>
      );
    }
    
    // Multiple words - first half gray, second half gold
    const mid = Math.ceil(words.length / 2);
    return (
      <>
        {words.slice(0, mid).map((word, i) => (
          <span key={i} className="text-[#6B6B6B]">
            {word}{i < mid - 1 ? " " : ""}
          </span>
        ))}
        {" "}
        {words.slice(mid).map((word, i) => (
          <span key={i + mid} className="text-[#D4A574]">
            {word}{i < words.slice(mid).length - 1 ? " " : ""}
          </span>
        ))}
      </>
    );
  };

  const sizeClasses = {
    small: "text-sm",
    default: "text-base",
    large: "text-lg",
  };

  return (
    <span className={cn("font-bold", sizeClasses[variant], className)}>
      {renderBrandedText()}
      {showExperience && (
        <span className="block text-xs font-light text-[#6B6B6B] mt-0.5 tracking-wide">
          experience
        </span>
      )}
    </span>
  );
}

/**
 * BrandedHeading component for headings with two-tone style
 */
interface BrandedHeadingProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  splitAt?: number; // Word index to split at (0-based)
}

export function BrandedHeading({ 
  children, 
  className,
  as: Component = "h1",
  splitAt 
}: BrandedHeadingProps) {
  const words = children.split(" ");
  
  // Default split: first half gray, second half gold
  const splitIndex = splitAt !== undefined 
    ? splitAt 
    : Math.ceil(words.length / 2);
  
  const firstPart = words.slice(0, splitIndex).join(" ");
  const secondPart = words.slice(splitIndex).join(" ");

  return (
    <Component className={className}>
      <span className="text-[#6B6B6B]">{firstPart}</span>
      {secondPart && (
        <>
          {" "}
          <span className="text-[#D4A574]">{secondPart}</span>
        </>
      )}
    </Component>
  );
}

/**
 * BrandedTextSplit - More flexible component for custom splits
 */
interface BrandedTextSplitProps {
  grayText: string;
  goldText: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "span" | "p";
}

export function BrandedTextSplit({ 
  grayText, 
  goldText, 
  className,
  as: Component = "span"
}: BrandedTextSplitProps) {
  return (
    <Component className={className}>
      <span className="text-[#6B6B6B]">{grayText}</span>
      {" "}
      <span className="text-[#D4A574]">{goldText}</span>
    </Component>
  );
}
