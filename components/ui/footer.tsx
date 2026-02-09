"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  events: [
    { name: "All Events", href: "/events" },
    { name: "Planetarium", href: "https://planetarium.memora-experience.com", external: true },
    { name: "Boat Party", href: "/events/boat-party" },
    { name: "Business Events", href: "/events/kratiki-ekthesi" },
  ],
  company: [
    { name: "Business with Us", href: "/business" },
    { name: "Contact", href: "/contact" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/memoraexperience_cy" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-[#D4A574]/10 blur-[120px]" />
        <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-[#C8965F]/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-16 lg:py-20"
        >
          {/* Main content grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 lg:mb-16">
            {/* Logo and description */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <a href="/" className="inline-flex items-center mb-6">
                <div className="relative drop-shadow-lg drop-shadow-[0_0_8px_rgba(212,165,116,0.4)]">
                  <Image 
                    src="/Content/Memora logo.png" 
                    alt="Memora Experience Logo" 
                    width={170} 
                    height={57}
                    className="h-12 md:h-14 w-auto object-contain"
                    style={{ 
                      opacity: 1,
                      filter: 'none',
                      imageRendering: 'crisp-edges'
                    }}
                  />
                </div>
              </a>
              <p className="text-slate-400 leading-relaxed text-sm mb-6">
                Cyprus's premier event experience company. From electrifying Planitario nights 
                to epic student adventures, we transform your vision into extraordinary memories.
              </p>
              {/* Social links */}
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-all hover:bg-gradient-to-br hover:from-[#D4A574] hover:to-[#C8965F] hover:text-white hover:shadow-lg hover:shadow-[#D4A574]/25"
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Events */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 mb-5">
                Events
              </h4>
              <ul className="space-y-3">
                {footerLinks.events.map((link) => {
                  const isExternal = link.external || link.href.startsWith('http');
                  return (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-[#E8C9A0] transition-colors"
                      >
                        <span>{link.name}</span>
                        {isExternal && (
                          <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                        )}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 mb-5">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-[#E8C9A0] transition-colors"
                    >
                      <span>{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500 mb-5">
                Get in Touch
              </h4>
              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:info@memora-experience.com"
                    className="group flex items-center gap-3 text-sm text-slate-400 hover:text-[#E8C9A0] transition-colors"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800 group-hover:bg-slate-700 transition-colors">
                      <Mail className="h-4 w-4" />
                    </div>
                    <span className="break-all">info@memora-experience.com</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:99116020"
                    className="group flex items-center gap-3 text-sm text-slate-400 hover:text-[#E8C9A0] transition-colors"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800 group-hover:bg-slate-700 transition-colors">
                      <Phone className="h-4 w-4" />
                    </div>
                    <span>99116020</span>
                  </a>
                </li>
                <li>
                  <div className="flex items-center gap-3 text-sm text-slate-400">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <span>Cyprus</span>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Bottom bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800"
          >
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Memora Experience. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">
              Made by <span className="text-[#D4A574]">Zeropoint Labs</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
