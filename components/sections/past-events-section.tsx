"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { LayoutGroup, motion, useInView } from "framer-motion"
import { TextRotate } from "@/components/ui/text-rotate"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"
import { Camera, ArrowRight, Sparkles } from "lucide-react"

const pastEventsImages = [
  {
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Planitario 2024",
    author: "Memora Experience",
  },
  {
    url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Student Trip Barcelona",
    author: "Memora Experience",
  },
  {
    url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Corporate Event 2024",
    author: "Memora Experience",
  },
  {
    url: "https://images.unsplash.com/photo-1478147427282-58a87a120781?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Summer Festival",
    author: "Memora Experience",
  },
  {
    url: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Music Night",
    author: "Memora Experience",
  },
  {
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Festival Experience",
    author: "Memora Experience",
  },
  {
    url: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Business Expo",
    author: "Memora Experience",
  },
  {
    url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Team Building",
    author: "Memora Experience",
  },
]

export function PastEventsSection() {
  const headerRef = useRef(null)
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" })
  const sectionRef = useRef(null)
  const isSectionInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section 
      ref={sectionRef}
      className="relative w-full min-h-screen overflow-hidden md:overflow-visible flex flex-col items-center justify-center py-24 lg:py-32 bg-zinc-50"
    >
      {/* Background decorations */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
      <div className="absolute -left-40 top-40 h-80 w-80 rounded-full bg-orange-200/30 blur-[100px]" />
      <div className="absolute -right-40 bottom-40 h-80 w-80 rounded-full bg-rose-200/30 blur-[100px]" />

      {/* Floating Images */}
      <Floating sensitivity={-0.8} className="h-full">
        <FloatingElement
          depth={0.8}
          className="top-[15%] left-[2%] md:top-[25%] md:left-[5%]"
        >
          <motion.img
            src={pastEventsImages[0].url}
            alt={pastEventsImages[0].title}
            className="w-16 h-12 sm:w-24 sm:h-16 md:w-28 md:h-20 lg:w-32 lg:h-24 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-[3deg] shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1.5}
          className="top-[0%] left-[8%] md:top-[6%] md:left-[11%]"
        >
          <motion.img
            src={pastEventsImages[1].url}
            alt={pastEventsImages[1].title}
            className="w-40 h-28 sm:w-48 sm:h-36 md:w-56 md:h-44 lg:w-60 lg:h-48 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform -rotate-12 shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={2.5}
          className="top-[90%] left-[6%] md:top-[80%] md:left-[8%]"
        >
          <motion.img
            src={pastEventsImages[2].url}
            alt={pastEventsImages[2].title}
            className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-64 lg:h-64 object-cover -rotate-[4deg] hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rounded-xl"
            initial={{ opacity: 0 }}
            animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.9 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1.8}
          className="top-[0%] left-[87%] md:top-[2%] md:left-[83%]"
        >
          <motion.img
            src={pastEventsImages[3].url}
            alt={pastEventsImages[3].title}
            className="w-40 h-36 sm:w-48 sm:h-44 md:w-60 md:h-52 lg:w-64 lg:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[6deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.1 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={2}
          className="top-[78%] left-[83%] md:top-[68%] md:left-[83%]"
        >
          <motion.img
            src={pastEventsImages[4].url}
            alt={pastEventsImages[4].title}
            className="w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[19deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.3 }}
          />
        </FloatingElement>

        <FloatingElement
          depth={1.2}
          className="top-[50%] left-[85%] md:top-[45%] md:left-[88%]"
        >
          <motion.img
            src={pastEventsImages[5].url}
            alt={pastEventsImages[5].title}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-cover hover:scale-105 duration-200 cursor-pointer transition-transform shadow-2xl rotate-[-8deg] rounded-xl"
            initial={{ opacity: 0 }}
            animate={isSectionInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1.5 }}
          />
        </FloatingElement>
      </Floating>

      {/* Content */}
      <div className="relative z-50 flex flex-col justify-center items-center w-[250px] sm:w-[300px] md:w-[500px] lg:w-[700px] pointer-events-auto">
        {/* Header */}
        <div ref={headerRef} className="mb-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-white px-4 py-2 text-sm font-medium text-orange-600 shadow-sm"
          >
            <Camera className="h-4 w-4" />
            <span>Past Events</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 text-center"
          >
            <LayoutGroup>
              <motion.span layout className="flex whitespace-pre flex-col sm:flex-row items-baseline justify-center gap-2">
                <span>Relive Our</span>
                <TextRotate
                  texts={[
                    "Memories",
                    "Moments",
                    "Experiences",
                    "Celebrations",
                    "Adventures",
                    "Events",
                  ]}
                  mainClassName="overflow-hidden pr-3 py-0 pb-2 md:pb-4 rounded-xl"
                  elementLevelClassName="bg-gradient-to-r from-orange-500 via-rose-500 to-orange-600 bg-clip-text text-transparent"
                  staggerDuration={0.03}
                  staggerFrom="last"
                  rotationInterval={3000}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                />
              </motion.span>
            </LayoutGroup>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mx-auto max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 mb-8"
          >
            Take a journey through our unforgettable events and see why Memora Experience 
            creates moments that last a lifetime.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4 items-center mt-4"
        >
          <motion.button
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-white shadow-lg shadow-orange-500/25 transition-all hover:shadow-xl hover:shadow-orange-500/40"
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/memories" className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              <span>View Memories</span>
            </Link>
          </motion.button>

          <motion.button
            className="group inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold text-slate-900 shadow-lg transition-all hover:bg-slate-50 hover:border-orange-300"
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", damping: 30, stiffness: 400 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/events" className="flex items-center gap-2">
              <span>Current Events</span>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

