"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Youtube,
  ArrowUpRight,
} from "lucide-react";

const footerLinks = {
  events: [
    { name: "Planitario 2025", href: "/planitario" },
    { name: "Student Trips", href: "/student-trips" },
    { name: "Corporate Events", href: "/events/corporate" },
    { name: "Festivals", href: "/events/festivals" },
    { name: "All Events", href: "/events" },
  ],
  services: [
    { name: "Event Planning", href: "/services/planning" },
    { name: "Venue Sourcing", href: "/services/venues" },
    { name: "Vendor Coordination", href: "/services/vendors" },
    { name: "Corporate Solutions", href: "/services/corporate" },
    { name: "Business with Us", href: "/business" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Story", href: "/about#story" },
    { name: "Past Events", href: "/experiences" },
    { name: "Become a Sponsor", href: "/become-a-sponsor" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/memoraexperience" },
  { name: "Facebook", icon: Facebook, href: "https://facebook.com/memoraexperience" },
  { name: "YouTube", icon: Youtube, href: "https://youtube.com/@memoraexperience" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-orange-500/10 blur-[120px]" />
        <div className="absolute -right-40 -bottom-40 h-80 w-80 rounded-full bg-rose-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Main footer content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20"
        >
          {/* Top section - Logo and description */}
          <motion.div variants={itemVariants} className="mb-12 lg:mb-16">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              {/* Logo and tagline */}
              <div className="max-w-md">
                <Link href="/" className="inline-flex items-center gap-2 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-rose-500 shadow-lg shadow-orange-500/25">
                    <Sparkles className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-2xl font-bold text-white">Memora Experience</span>
                </Link>
                <p className="text-slate-400 leading-relaxed mb-6">
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
                      className="group flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-slate-400 transition-all hover:bg-gradient-to-br hover:from-orange-500 hover:to-rose-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/25"
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact info */}
              <div className="flex flex-col gap-4">
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  Get in Touch
                </h4>
                <a
                  href="mailto:hello@memoraexperience.com"
                  className="group flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 group-hover:bg-slate-700 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <span>hello@memoraexperience.com</span>
                </a>
                <a
                  href="tel:+35799123456"
                  className="group flex items-center gap-3 text-slate-300 hover:text-orange-400 transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 group-hover:bg-slate-700 transition-colors">
                    <Phone className="h-5 w-5" />
                  </div>
                  <span>+357 99 123 456</span>
                </a>
                <div className="flex items-center gap-3 text-slate-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span>Nicosia, Cyprus</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Links grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 py-12 border-t border-slate-800"
          >
            {/* Events */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
                Events
              </h4>
              <ul className="space-y-3">
                {footerLinks.events.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-slate-400 hover:text-orange-400 transition-colors"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-slate-400 hover:text-orange-400 transition-colors"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
                Company
              </h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-slate-400 hover:text-orange-400 transition-colors"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
                Legal
              </h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-1 text-slate-400 hover:text-orange-400 transition-colors"
                    >
                      <span>{link.name}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Bottom bar */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-800"
          >
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Memora Experience. All rights reserved.
            </p>
            <p className="text-sm text-slate-500">
              Made by Zeropoint Labs
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}

