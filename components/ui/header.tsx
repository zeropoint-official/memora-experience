"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X, Sparkles, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

function Header1() {
    const navigationItems = [
        {
            title: "Home",
            href: "/",
            description: "",
        },
        {
            title: "Events",
            href: "/events",
            description: "Discover extraordinary events and legendary nights across Cyprus.",
            items: [
                {
                    title: "Planetarium",
                    href: "https://planetarium.memora-experience.com",
                },
                {
                    title: "Boat Party",
                    href: "/events/boat-party",
                },
                {
                    title: "Business with Us",
                    href: "/business",
                },
            ],
        },
    ];

    const [isOpen, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    // Pages with dark hero sections that need white text
    const darkHeroPages = [
        "/",
        "/events/kratiki-ekthesi",
        "/events/planitario",
        "/events/boat-party",
        "/business",
        "/contact",
        // Add other dark hero pages here
    ];
    
    // Check if current path matches dark hero pages (exact match or starts with, but exclude /events itself)
    const hasDarkHero = darkHeroPages.some(page => {
        if (page === "/") {
            // Only match exact "/" for homepage, not paths that start with "/"
            return pathname === "/";
        }
        return pathname?.startsWith(page);
    });
    const isHomePage = pathname === "/";
    
    // On desktop homepage, always show black text (light background)
    // On mobile homepage, show white text when at top (dark video background)
    // On other dark hero pages, show white text when at top
    const shouldShowWhiteText = !scrolled && hasDarkHero && !(isHomePage && isDesktop);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        const handleResize = () => {
            setIsDesktop(window.innerWidth >= 768); // md breakpoint
        };

        // Check initial size
        handleResize();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    
    return (
        <header 
            className={`w-full z-50 fixed top-0 left-0 transition-all duration-300 ${
                scrolled 
                    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/50" 
                    : isHomePage && isDesktop 
                        ? "bg-white border-b border-slate-200/50"
                        : "bg-transparent"
            }`}
        >
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center px-4 sm:px-6 lg:px-8">
                {/* Desktop Navigation - Left */}
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start [&>div:last-child>div]:bg-white [&>div:last-child>div]:border-slate-200 [&>div:last-child>div]:shadow-lg">
                        <NavigationMenuList className="flex justify-start gap-2 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href && !item.items ? (
                                        // Simple link (like Home)
                                        <Link href={item.href} legacyBehavior passHref>
                                            <NavigationMenuLink>
                                                <Button variant="ghost" className={`transition-colors duration-300 ${
                                                    shouldShowWhiteText
                                                        ? "text-white hover:text-[#E8C9A0] hover:bg-white/10" 
                                                        : "text-slate-700 hover:text-[#D4A574] hover:bg-white/50"
                                                }`}>
                                                    {item.title}
                                                </Button>
                                            </NavigationMenuLink>
                                        </Link>
                                    ) : item.items ? (
                                        // Dropdown menu (Events or Services)
                                        <>
                                            <NavigationMenuTrigger 
                                                className={`font-medium text-sm transition-colors duration-300 bg-transparent border-0 shadow-none ${
                                                    shouldShowWhiteText
                                                        ? "text-white hover:text-[#E8C9A0] hover:bg-white/10 data-[state=open]:bg-white/10 data-[state=open]:text-[#E8C9A0]" 
                                                        : "text-slate-700 hover:text-[#D4A574] hover:bg-white/50 data-[state=open]:bg-white/50 data-[state=open]:text-[#D4A574]"
                                                }`}
                                                onClick={(e) => {
                                                    // Navigate on click if href exists (dropdown opens on hover, so click navigates)
                                                    if (item.href) {
                                                        e.preventDefault();
                                                        router.push(item.href);
                                                    }
                                                }}
                                            >
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="bg-white border border-slate-200 shadow-xl !w-[320px] p-4">
                                                {/* Full layout for Events (with description and button) */}
                                                <div className="flex flex-col gap-4">
                                                    <div className="flex flex-col">
                                                        <p className="text-base font-semibold text-slate-900">{item.title}</p>
                                                        <p className="text-slate-600 text-sm mt-1">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                    <div className="flex flex-col gap-1">
                                                        {item.items?.map((subItem) => {
                                                            const isExternal = subItem.href.startsWith('http');
                                                            return isExternal ? (
                                                                <a
                                                                    href={subItem.href}
                                                                    key={subItem.title}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    className="flex flex-row justify-between items-center hover:bg-slate-50 py-2.5 px-3 rounded transition-colors"
                                                                >
                                                                    <span className="text-sm font-medium text-slate-700">{subItem.title}</span>
                                                                    <MoveRight className="w-4 h-4 text-slate-400" />
                                                                </a>
                                                            ) : (
                                                                <Link
                                                                    href={subItem.href}
                                                                    key={subItem.title}
                                                                    legacyBehavior
                                                                    passHref
                                                                >
                                                                    <NavigationMenuLink className="flex flex-row justify-between items-center hover:bg-slate-50 py-2.5 px-3 rounded transition-colors">
                                                                        <span className="text-sm font-medium text-slate-700">{subItem.title}</span>
                                                                        <MoveRight className="w-4 h-4 text-slate-400" />
                                                                    </NavigationMenuLink>
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                    <Link href="/events" legacyBehavior passHref>
                                                        <NavigationMenuLink asChild>
                                                            <Button size="sm" className="mt-2 bg-gradient-to-r from-[#D4A574] to-[#C8965F] hover:from-[#C8965F] hover:to-[#B8874A] text-white border-0">
                                                                View All Events
                                                            </Button>
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    ) : null}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                
                {/* Logo - Center on desktop, Left on mobile */}
                <div className="flex lg:justify-center flex-1 lg:flex-none relative z-10">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="relative drop-shadow-lg drop-shadow-[0_0_8px_rgba(212,165,116,0.4)]">
                            <Image 
                                src="/Content/Memora logo.png" 
                                alt="Memora Experience Logo" 
                                width={150} 
                                height={50}
                                className="h-10 md:h-11 w-auto object-contain"
                                style={{ 
                                    opacity: 1,
                                    filter: 'none',
                                    imageRendering: 'crisp-edges'
                                }}
                                priority
                            />
                        </div>
                    </Link>
                </div>
                
                {/* Desktop Actions - Right (hidden on mobile) */}
                <div className="hidden lg:flex justify-end w-full">
                    <Link href="/contact">
                        <Button className={`group relative overflow-hidden transition-all duration-300 ${
                            shouldShowWhiteText
                                ? "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/40" 
                                : "bg-gradient-to-r from-[#D4A574] to-[#C8965F] hover:from-[#C8965F] hover:to-[#B8874A] text-white border-0 shadow-lg shadow-[#D4A574]/25 hover:shadow-xl hover:shadow-[#D4A574]/40"
                        }`}>
                            <Mail className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                            <span className="font-semibold">Contact Us</span>
                            <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                                shouldShowWhiteText 
                                    ? "bg-gradient-to-r from-white/10 to-white/5" 
                                    : "bg-gradient-to-r from-white/20 to-transparent"
                            }`} />
                        </Button>
                    </Link>
                </div>
                
                {/* Mobile Menu Button - Only visible on mobile */}
                <div className="flex lg:hidden items-center justify-end">
                    <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => setOpen(!isOpen)} 
                        className={`transition-colors duration-300 h-10 w-10 ${
                            shouldShowWhiteText
                                ? "text-white hover:bg-white/10" 
                                : "text-slate-700 hover:bg-white/50"
                        }`}
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                </div>
            </div>
            
            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="lg:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-md shadow-lg border-t border-slate-200/50">
                    <div className="container mx-auto py-6 px-4 sm:px-6 flex flex-col gap-6">
                        {navigationItems.map((item) => (
                            <div key={item.title}>
                                <div className="flex flex-col gap-2">
                                    {item.href ? (
                                        <Link
                                            href={item.href}
                                            className="flex justify-between items-center text-slate-700 hover:text-[#D4A574] transition-colors"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="text-lg font-medium">{item.title}</span>
                                            <MoveRight className="w-4 h-4 stroke-1 text-slate-400" />
                                        </Link>
                                    ) : (
                                        <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                                    )}
                                    {item.items &&
                                        item.items.map((subItem) => {
                                            const isExternal = subItem.href.startsWith('http');
                                            return isExternal ? (
                                                <a
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex justify-between items-center text-slate-600 hover:text-[#D4A574] transition-colors py-1"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="text-muted-foreground">
                                                        {subItem.title}
                                                    </span>
                                                    <MoveRight className="w-4 h-4 stroke-1 text-slate-400" />
                                                </a>
                                            ) : (
                                                <Link
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className="flex justify-between items-center text-slate-600 hover:text-[#D4A574] transition-colors py-1"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className="text-muted-foreground">
                                                        {subItem.title}
                                                    </span>
                                                    <MoveRight className="w-4 h-4 stroke-1 text-slate-400" />
                                                </Link>
                                            );
                                        })}
                                </div>
                            </div>
                        ))}
                        <div className="flex flex-col gap-3 pt-4 border-t border-slate-200">
                            <Link href="/contact" onClick={() => setOpen(false)}>
                                <Button className="group relative w-full overflow-hidden bg-gradient-to-r from-[#D4A574] to-[#C8965F] hover:from-[#C8965F] hover:to-[#B8874A] text-white border-0 shadow-lg shadow-[#D4A574]/25 hover:shadow-xl hover:shadow-[#D4A574]/40 transition-all duration-300">
                                    <Mail className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:scale-110" />
                                    <span className="font-semibold">Contact Us</span>
                                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-white/20 to-transparent" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export { Header1 };

