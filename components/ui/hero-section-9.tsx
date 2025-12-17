"use client";

import { motion } from 'framer-motion';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';
import { SparklesText } from '@/components/ui/sparkles-text';
import { Spotlight } from '@/components/ui/spotlight';
import { GridPattern } from '@/components/ui/grid-pattern';

// Define the props for reusability
interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

interface ActionProps {
  text: string;
  onClick: () => void;
  variant?: ButtonProps['variant'];
  className?: string;
  icon?: React.ReactNode;
}

interface HeroSectionProps {
  title: React.ReactNode;
  sparkleTitle?: string;
  subtitle: string;
  actions: ActionProps[];
  stats: StatProps[];
  images: string[];
  className?: string;
}

// Animation variants for Framer Motion
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const imageContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 40 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -12, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
    },
  },
};

const pulseVariants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [0.5, 0.8, 0.5],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

const shimmerVariants = {
  animate: {
    backgroundPosition: ['200% 0', '-200% 0'],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

const HeroSection9 = ({ title, sparkleTitle, subtitle, actions, stats, images, className }: HeroSectionProps) => {
  return (
    <section className={cn('relative w-full overflow-hidden py-16 sm:py-24', className)}>
      {/* Background Effects - Same as Hero V1 */}
      <Spotlight className="z-10" fill="#f97316" />
      <GridPattern
        className="absolute inset-0 z-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]"
        width={50}
        height={50}
        numSquares={40}
        maxOpacity={0.15}
      />
      
      {/* Glow Effects */}
      <div className="absolute -left-20 top-20 h-[500px] w-[500px] rounded-full bg-orange-300/30 blur-[120px]" />
      <div className="absolute -right-20 bottom-20 h-[500px] w-[500px] rounded-full bg-rose-300/30 blur-[120px]" />

      <div className="relative z-20 mx-auto max-w-7xl grid grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Title with Sparkles */}
          <motion.div variants={itemVariants}>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {title}
              {sparkleTitle && (
                <span className="relative inline-block">
                  <SparklesText 
                    className="text-4xl sm:text-5xl lg:text-6xl"
                    sparklesCount={5}
                    colors={{ first: "#f97316", second: "#f43f5e" }}
                  >
                    <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                      {sparkleTitle}
                    </span>
                  </SparklesText>
                </span>
              )}
            </h1>
          </motion.div>

          {/* Subtitle with fade */}
          <motion.p 
            className="mt-6 max-w-lg text-lg text-slate-600"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>

          {/* CTA Buttons with enhanced hover */}
          <motion.div 
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
            variants={itemVariants}
          >
            {actions.map((action, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  onClick={action.onClick} 
                  variant={action.variant} 
                  size="lg" 
                  className={cn(
                    "relative overflow-hidden transition-all duration-300",
                    action.variant === 'default' && "shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/40",
                    action.className
                  )}
                >
                  {/* Shimmer effect for primary button */}
                  {action.variant === 'default' && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      variants={shimmerVariants}
                      animate="animate"
                      style={{ backgroundSize: '200% 100%' }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    {action.icon}
                    {action.text}
                  </span>
                </Button>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats with staggered entrance */}
          <motion.div 
            className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                className="group flex items-center gap-3"
                whileHover={{ scale: 1.05, x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <motion.div 
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-100 to-rose-100 shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:shadow-orange-200/50"
                  whileHover={{ rotate: 10 }}
                >
                  {stat.icon}
                </motion.div>
                <div>
                  <motion.p 
                    className="text-2xl font-bold text-slate-900"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                  >
                    {stat.value}
                  </motion.p>
                  <p className="text-sm text-slate-500">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Image Collage */}
        <motion.div
          className="relative h-[450px] w-full sm:h-[550px]"
          variants={imageContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Decorative Shapes with continuous animation */}
          <motion.div
            className="absolute -top-4 left-1/4 h-20 w-20 rounded-full bg-gradient-to-br from-orange-300/60 to-amber-200/60"
            variants={pulseVariants}
            animate="animate"
          />
          <motion.div
            className="absolute bottom-12 right-12 h-14 w-14 rounded-xl bg-gradient-to-br from-rose-300/60 to-pink-200/60"
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-4 h-8 w-8 rounded-full bg-gradient-to-br from-amber-400/60 to-yellow-300/60"
            animate={{
              y: [0, -15, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Images with hover effects */}
          <motion.div
            className="absolute left-1/2 top-4 -translate-x-1/2"
            variants={imageVariants}
          >
            <motion.div
              className="group relative h-52 w-52 overflow-hidden rounded-2xl bg-white p-2 shadow-2xl shadow-slate-300/50 sm:h-64 sm:w-64"
              variants={floatingVariants}
              animate="animate"
              whileHover={{ scale: 1.05, rotate: -2, zIndex: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <img 
                src={images[0]} 
                alt="Event moment 1" 
                className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute right-4 top-1/3"
            variants={imageVariants}
          >
            <motion.div
              className="group relative h-44 w-44 overflow-hidden rounded-2xl bg-white p-2 shadow-2xl shadow-slate-300/50 sm:h-52 sm:w-52"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              whileHover={{ scale: 1.05, rotate: 2, zIndex: 10 }}
            >
              <img 
                src={images[1]} 
                alt="Event moment 2" 
                className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute bottom-4 left-8"
            variants={imageVariants}
          >
            <motion.div
              className="group relative h-40 w-40 overflow-hidden rounded-2xl bg-white p-2 shadow-2xl shadow-slate-300/50 sm:h-48 sm:w-48"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              whileHover={{ scale: 1.05, rotate: -3, zIndex: 10 }}
            >
              <img 
                src={images[2]} 
                alt="Event moment 3" 
                className="h-full w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection9;
