"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

/* ────────────────────────────────────────────────────────────────────────────
   Navigation data
   ──────────────────────────────────────────────────────────────────────────── */

interface SubItem {
  title: string;
  href: string;
  description?: string;
  external?: boolean;
}

interface NavItem {
  title: string;
  href: string;
  description?: string;
  items?: SubItem[];
}

const navigationItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Events",
    href: "/events",
    description:
      "Discover extraordinary events and legendary nights across Cyprus.",
    items: [
      {
        title: "Planetarium",
        href: "https://planetarium.memora-experience.com",
        description: "An immersive cosmic experience",
        external: true,
      },
      {
        title: "Boat Party",
        href: "/events/boat-party",
        description: "Luxury yacht events on the Mediterranean",
      },
      {
        title: "Business with Us",
        href: "/business",
        description: "Partner & collaborate with Memora",
      },
    ],
  },
];

/* ────────────────────────────────────────────────────────────────────────────
   Dark-hero-page detection
   ──────────────────────────────────────────────────────────────────────────── */

const darkHeroPages = [
  "/",
  "/events/kratiki-ekthesi",
  "/events/planitario",
  "/events/boat-party",
  "/business",
];

/* ────────────────────────────────────────────────────────────────────────────
   Hamburger icon (animated)
   ──────────────────────────────────────────────────────────────────────────── */

function MenuToggle({
  isOpen,
  light,
  onClick,
}: {
  isOpen: boolean;
  light: boolean;
  onClick: () => void;
}) {
  const stroke = light ? "#fff" : "#1A1A1A";
  return (
    <button
      onClick={onClick}
      aria-label="Toggle menu"
      className="relative z-50 flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10 focus:outline-none"
    >
      <svg width="22" height="18" viewBox="0 0 22 18" className="overflow-visible">
        <motion.line
          x1="1"
          y1="1"
          x2="21"
          y2="1"
          stroke={isOpen ? "#1A1A1A" : stroke}
          strokeWidth="2"
          strokeLinecap="round"
          animate={isOpen ? { rotate: 45, y: 8, x: 0 } : { rotate: 0, y: 0, x: 0 }}
          transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
          style={{ transformOrigin: "center" }}
        />
        <motion.line
          x1="1"
          y1="9"
          x2="21"
          y2="9"
          stroke={isOpen ? "#1A1A1A" : stroke}
          strokeWidth="2"
          strokeLinecap="round"
          animate={isOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        />
        <motion.line
          x1="1"
          y1="17"
          x2="21"
          y2="17"
          stroke={isOpen ? "#1A1A1A" : stroke}
          strokeWidth="2"
          strokeLinecap="round"
          animate={isOpen ? { rotate: -45, y: -8, x: 0 } : { rotate: 0, y: 0, x: 0 }}
          transition={{ duration: 0.35, ease: [0.76, 0, 0.24, 1] }}
          style={{ transformOrigin: "center" }}
        />
      </svg>
    </button>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   Desktop dropdown
   ──────────────────────────────────────────────────────────────────────────── */

function DesktopDropdown({
  item,
  lightText,
}: {
  item: NavItem;
  lightText: boolean;
}) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 150);
  };

  const isActive =
    pathname === item.href ||
    item.items?.some((sub) => pathname === sub.href);

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <button
        className={cn(
          "group flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
          lightText
            ? "text-white/90 hover:text-white hover:bg-white/10"
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60",
          isActive && (lightText ? "text-white" : "text-slate-900")
        )}
        onClick={() => setOpen(!open)}
      >
        {item.title}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.76, 0, 0.24, 1] }}
        >
          <ChevronDown className="h-3.5 w-3.5" />
        </motion.span>
      </button>

      {/* Active indicator dot */}
      {isActive && (
        <motion.div
          layoutId="nav-active-dot"
          className={cn(
            "absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full",
            lightText ? "bg-white" : "bg-[#D4A574]"
          )}
        />
      )}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-1/2 top-full z-50 mt-2 w-[320px] -translate-x-1/2"
          >
            {/* Arrow */}
            <div className="flex justify-center">
              <div className="h-2.5 w-2.5 rotate-45 rounded-tl-[2px] border-l border-t border-slate-200/80 bg-white" />
            </div>
            <div className="-mt-[5px] overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_16px_48px_-12px_rgba(0,0,0,0.12)]">
              {/* Header */}
              <div className="border-b border-slate-100 bg-gradient-to-br from-slate-50/80 to-white px-5 py-4">
                <p className="text-sm font-semibold text-slate-900 font-heading">
                  {item.title}
                </p>
                {item.description && (
                  <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">
                    {item.description}
                  </p>
                )}
              </div>
              {/* Links */}
              <div className="p-2">
                {item.items?.map((subItem, idx) => {
                  const isExternal = subItem.external || subItem.href.startsWith("http");
                  const isBusinessLink = subItem.title === "Business with Us";
                  const Comp = isExternal ? "a" : Link;
                  const extraProps = isExternal
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {};
                  return (
                    <Comp
                      key={subItem.title}
                      href={subItem.href}
                      {...(extraProps as Record<string, string>)}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "group/item flex items-center gap-3 rounded-xl px-3 py-3 transition-all duration-200",
                        "hover:bg-slate-50"
                      )}
                    >
                      {/* Icon circle */}
                      <span
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
                          isBusinessLink
                            ? "bg-[#D4A574]/10 text-[#D4A574] group-hover/item:bg-[#D4A574]/20"
                            : "bg-slate-100 text-slate-500 group-hover/item:bg-slate-200 group-hover/item:text-slate-700"
                        )}
                      >
                        {isExternal ? (
                          <ExternalLink className="h-4 w-4" />
                        ) : (
                          <ArrowRight className="h-4 w-4 transition-transform group-hover/item:translate-x-0.5" />
                        )}
                      </span>
                      <div className="flex-1 min-w-0">
                        <span
                          className={cn(
                            "block text-sm font-medium",
                            isBusinessLink
                              ? "text-[#D4A574]"
                              : "text-slate-700 group-hover/item:text-slate-900"
                          )}
                        >
                          {subItem.title}
                        </span>
                        {subItem.description && (
                          <span className="block text-xs text-slate-400 mt-0.5 truncate">
                            {subItem.description}
                          </span>
                        )}
                      </div>
                    </Comp>
                  );
                })}
              </div>
              {/* Footer CTA */}
              <div className="border-t border-slate-100 p-3">
                <Link
                  href="/events"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#D4A574] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#C8965F] hover:shadow-md active:scale-[0.98]"
                >
                  View All Events
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   Desktop nav link (simple, e.g. Home)
   ──────────────────────────────────────────────────────────────────────────── */

function DesktopNavLink({
  item,
  lightText,
}: {
  item: NavItem;
  lightText: boolean;
}) {
  const pathname = usePathname();
  const isActive = pathname === item.href;

  return (
    <div className="relative">
      <Link
        href={item.href}
        className={cn(
          "relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300",
          lightText
            ? "text-white/90 hover:text-white hover:bg-white/10"
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/60",
          isActive && (lightText ? "text-white" : "text-slate-900")
        )}
      >
        {item.title}
      </Link>
      {isActive && (
        <motion.div
          layoutId="nav-active-dot"
          className={cn(
            "absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full",
            lightText ? "bg-white" : "bg-[#D4A574]"
          )}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   Full-screen mobile menu
   ──────────────────────────────────────────────────────────────────────────── */

function MobileMenu({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.06, delayChildren: 0.15 },
    },
    exit: {
      transition: { staggerChildren: 0.03, staggerDirection: -1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
    exit: {
      opacity: 0,
      y: -10,
      filter: "blur(4px)",
      transition: { duration: 0.2, ease: "easeIn" as const },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-40 lg:hidden"
        >
          {/* Background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-white"
          />

          {/* Content */}
          <div className="relative flex h-full flex-col overflow-y-auto pt-24 pb-8">
            <motion.nav
              variants={containerVariants}
              initial="hidden"
              animate="show"
              exit="exit"
              className="flex-1 px-6 sm:px-8"
            >
              {navigationItems.map((item) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  className="border-b border-slate-100 last:border-0"
                >
                  {item.items ? (
                    // Expandable item
                    <div>
                      <button
                        onClick={() =>
                          setExpandedItem(
                            expandedItem === item.title ? null : item.title
                          )
                        }
                        className="flex w-full items-center justify-between py-5"
                      >
                        <span className="font-heading text-2xl font-semibold text-slate-900">
                          {item.title}
                        </span>
                        <motion.span
                          animate={{
                            rotate: expandedItem === item.title ? 180 : 0,
                          }}
                          transition={{
                            duration: 0.3,
                            ease: [0.76, 0, 0.24, 1],
                          }}
                        >
                          <ChevronDown className="h-5 w-5 text-slate-400" />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {expandedItem === item.title && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.35,
                              ease: [0.16, 1, 0.3, 1],
                            }}
                            className="overflow-hidden"
                          >
                            {item.description && (
                              <p className="mb-3 text-sm text-slate-500 leading-relaxed">
                                {item.description}
                              </p>
                            )}
                            <div className="flex flex-col gap-1 pb-4">
                              {item.items.map((subItem) => {
                                const isExternal =
                                  subItem.external ||
                                  subItem.href.startsWith("http");
                                const isBusinessLink =
                                  subItem.title === "Business with Us";
                                const Comp = isExternal ? "a" : Link;
                                const extraProps = isExternal
                                  ? {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                    }
                                  : {};
                                return (
                                  <Comp
                                    key={subItem.title}
                                    href={subItem.href}
                                    {...(extraProps as Record<string, string>)}
                                    onClick={onClose}
                                    className={cn(
                                      "flex items-center justify-between rounded-xl px-4 py-3 transition-colors",
                                      "active:bg-slate-100",
                                      isBusinessLink
                                        ? "text-[#D4A574]"
                                        : "text-slate-600"
                                    )}
                                  >
                                    <div>
                                      <span
                                        className={cn(
                                          "text-base font-medium",
                                          isBusinessLink
                                            ? "text-[#D4A574]"
                                            : "text-slate-700"
                                        )}
                                      >
                                        {subItem.title}
                                      </span>
                                      {subItem.description && (
                                        <span className="block text-xs text-slate-400 mt-0.5">
                                          {subItem.description}
                                        </span>
                                      )}
                                    </div>
                                    {isExternal ? (
                                      <ExternalLink
                                        className={cn(
                                          "h-4 w-4 shrink-0",
                                          isBusinessLink
                                            ? "text-[#D4A574]"
                                            : "text-slate-400"
                                        )}
                                      />
                                    ) : (
                                      <ArrowRight
                                        className={cn(
                                          "h-4 w-4 shrink-0",
                                          isBusinessLink
                                            ? "text-[#D4A574]"
                                            : "text-slate-400"
                                        )}
                                      />
                                    )}
                                  </Comp>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    // Simple link
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between py-5"
                    >
                      <span className="font-heading text-2xl font-semibold text-slate-900">
                        {item.title}
                      </span>
                      <ArrowRight className="h-5 w-5 text-slate-400" />
                    </Link>
                  )}
                </motion.div>
              ))}

              {/* Mobile CTA */}
              <motion.div variants={itemVariants} className="mt-8">
                <Link
                  href="/contact"
                  onClick={onClose}
                  className="flex items-center justify-center gap-2.5 rounded-2xl bg-[#D4A574] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#D4A574]/20 transition-all active:scale-[0.98] hover:bg-[#C8965F]"
                >
                  <Mail className="h-5 w-5" />
                  Contact Us
                </Link>
              </motion.div>

              {/* Mobile footer accent */}
              <motion.div
                variants={itemVariants}
                className="mt-auto pt-12 flex items-center justify-center"
              >
                <Image
                  src="/Content/Memora logo.png"
                  alt="Memora"
                  width={100}
                  height={34}
                  className="h-7 w-auto opacity-20"
                />
              </motion.div>
            </motion.nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ────────────────────────────────────────────────────────────────────────────
   HeaderV2
   ──────────────────────────────────────────────────────────────────────────── */

export function HeaderV2() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const hasDarkHero = darkHeroPages.some((page) => {
    if (page === "/") return pathname === "/";
    return pathname?.startsWith(page);
  });

  // On transparent / dark hero backgrounds, show white text
  // On homepage desktop, the hero is different so we keep solid bg
  const isTransparent = !scrolled && hasDarkHero && !(isHomePage && isDesktop);
  const lightText = isTransparent && !isOpen;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024);
    handleResize();
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    const headerEl = document.querySelector("header");
    const onHeaderNavCapture = (ev: MouseEvent) => {
      const tgt = ev.target as HTMLElement;
      const anchor = tgt.closest("a");
      const href = anchor?.getAttribute("href") || "";
      const isInternal = href.startsWith("/") && !href.startsWith("//");
      if (isInternal && window.location.pathname === "/") {
        ev.preventDefault();
        window.location.assign(href);
      }
    };

    if (headerEl) {
      headerEl.addEventListener("click", onHeaderNavCapture, true);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (headerEl) {
        headerEl.removeEventListener("click", onHeaderNavCapture, true);
      }
    };
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);


  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          isOpen
            ? "bg-white"
            : isTransparent
              ? "bg-transparent"
              : "bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-[0_1px_3px_0_rgba(0,0,0,0.04)]"
        )}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          {/* ─── Left: Desktop Navigation ─── */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item) =>
              item.items ? (
                <DesktopDropdown
                  key={item.title}
                  item={item}
                  lightText={lightText}
                />
              ) : (
                <DesktopNavLink
                  key={item.title}
                  item={item}
                  lightText={lightText}
                />
              )
            )}
          </nav>

          {/* ─── Center: Logo ─── */}
          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:static lg:translate-x-0 lg:translate-y-0 lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <Image
                src="/Content/Memora logo.png"
                alt="Memora Experience"
                width={150}
                height={50}
                className="h-10 md:h-11 w-auto object-contain"
                style={{ imageRendering: "crisp-edges" }}
                priority
              />
            </motion.div>
          </Link>

          {/* ─── Right: Desktop CTA ─── */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className={cn(
                "group relative flex items-center gap-2 overflow-hidden rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300",
                lightText
                  ? "border border-white/25 text-white hover:bg-white hover:text-slate-900"
                  : "bg-[#D4A574] text-white hover:bg-[#C8965F] shadow-sm hover:shadow-md hover:shadow-[#D4A574]/15"
              )}
            >
              <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>Contact Us</span>
            </Link>
          </div>

          {/* ─── Mobile: Hamburger ─── */}
          <div className="lg:hidden flex items-center">
            <MenuToggle
              isOpen={isOpen}
              light={lightText}
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
