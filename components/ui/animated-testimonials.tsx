"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { LogoCarouselCSS, Logo } from "@/components/ui/logo-carousel"
import { Quote, Star } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  rating: number
  avatar: string
}

export interface AnimatedTestimonialsProps {
  title?: string
  subtitle?: string
  badgeText?: string
  testimonials?: Testimonial[]
  autoRotateInterval?: number
  trustedCompanies?: string[]
  trustedLogos?: Logo[]
  trustedCompaniesTitle?: string
  className?: string
}

export function AnimatedTestimonials({
  title = "Loved by the community",
  subtitle = "Don't just take our word for it. See what developers and companies have to say about our starter template.",
  badgeText = "Trusted by developers",
  testimonials = [],
  autoRotateInterval = 6000,
  trustedCompanies = [],
  trustedLogos = [],
  trustedCompaniesTitle = "Trusted by developers from companies worldwide",
  className,
}: AnimatedTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Refs for scroll animations
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const controls = useAnimation()

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  // Trigger animations when section comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  // Auto rotate testimonials
  useEffect(() => {
    if (autoRotateInterval <= 0 || testimonials.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, autoRotateInterval)

    return () => clearInterval(interval)
  }, [autoRotateInterval, testimonials.length])

  if (testimonials.length === 0) {
    return null
  }

  return (
    <section ref={sectionRef} id="testimonials" className={`py-12 md:py-24 overflow-hidden bg-white ${className || ""}`}>
      <div className="px-4 md:px-6 max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 gap-12 md:gap-16 w-full md:grid-cols-2 lg:gap-24"
        >
          {/* Left side: Heading and navigation */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className="space-y-4 md:space-y-6">
              {badgeText && (
                <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium bg-gradient-to-r from-orange-100 to-rose-100 text-orange-600 border border-orange-200">
                  <Star className="mr-2 h-3 w-3 md:h-4 md:w-4 fill-orange-500 text-orange-500" />
                  <span>{badgeText}</span>
                </div>
              )}

              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {title.split(" ").map((word, i) => (
                  <span key={i}>
                    {i === title.split(" ").length - 1 ? (
                      <span className="bg-gradient-to-r from-orange-500 to-rose-500 bg-clip-text text-transparent">
                        {word}
                      </span>
                    ) : (
                      word + " "
                    )}
                  </span>
                ))}
              </h2>

              <p className="max-w-[600px] text-slate-600 text-base md:text-lg leading-relaxed">{subtitle}</p>

              <div className="flex items-center gap-3 pt-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      activeIndex === index 
                        ? "w-12 bg-gradient-to-r from-orange-500 to-rose-500" 
                        : "w-3 bg-slate-200 hover:bg-slate-300"
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right side: Testimonial cards */}
          <motion.div variants={itemVariants} className="relative min-h-[400px] md:min-h-[420px]">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="absolute inset-0"
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 100,
                  scale: activeIndex === index ? 1 : 0.9,
                }}
                transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                style={{ zIndex: activeIndex === index ? 10 : 0 }}
              >
                <div className="bg-white border border-slate-200 shadow-xl shadow-slate-200/50 rounded-3xl p-6 md:p-8 min-h-full flex flex-col overflow-hidden">
                  <div className="mb-4 md:mb-6 flex gap-1 flex-shrink-0">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-amber-400 text-amber-400" />
                      ))}
                  </div>

                  <div className="relative mb-4 md:mb-6 flex-1 min-h-0">
                    <Quote className="absolute top-0 left-0 h-8 w-8 md:h-10 md:w-10 text-orange-200 rotate-180" />
                    <p className="relative z-10 text-base md:text-lg font-medium leading-relaxed text-slate-700 pl-5 md:pl-6 break-words overflow-hidden">
                      "{testimonial.content}"
                    </p>
                  </div>

                  <Separator className="my-3 md:my-4 bg-slate-100 flex-shrink-0" />

                  <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
                    <Avatar className="h-12 w-12 md:h-14 md:w-14 border-2 border-orange-100 flex-shrink-0">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback className="bg-gradient-to-br from-orange-100 to-rose-100 text-orange-600 font-semibold">
                        {testimonial.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-slate-900 text-sm md:text-base truncate">{testimonial.name}</h3>
                      <p className="text-xs md:text-sm text-slate-500 truncate">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Decorative elements */}
            <div className="hidden md:block absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl bg-gradient-to-br from-orange-100 to-rose-100"></div>
            <div className="hidden md:block absolute -top-6 -right-6 h-24 w-24 rounded-2xl bg-gradient-to-br from-orange-100 to-rose-100"></div>
          </motion.div>
        </motion.div>

        {/* Logo cloud */}
        {(trustedLogos.length > 0 || trustedCompanies.length > 0) && (
          <motion.div variants={itemVariants} initial="hidden" animate={controls} className="mt-16 md:mt-24 text-center px-4">
            <h3 className="text-xs md:text-sm font-medium text-slate-500 mb-6 md:mb-8 uppercase tracking-wider">{trustedCompaniesTitle}</h3>
            
            {trustedLogos.length > 0 ? (
              <LogoCarouselCSS 
                logos={trustedLogos} 
                speed={25} 
                direction="left" 
                pauseOnHover={true}
              />
            ) : (
              <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
                {trustedCompanies.map((company) => (
                  <div key={company} className="text-2xl font-bold text-slate-300 hover:text-orange-500 transition-colors cursor-default">
                    {company}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </section>
  )
}



