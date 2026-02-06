"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X, Mail } from "lucide-react";
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
    const isHomePage = pathname === "/";
    
    // Fix for homepage navigation issue: use programmatic navigation
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        const isExternal = href.startsWith("http");
        if (isHomePage && !isExternal) {
            e.preventDefault();
            router.push(href);
        }
    };

    // Pages with dark hero sections that need white text (mobile only for homepage)
    const darkHeroPages = [
        "/",
        "/events/kratiki-ekthesi",
        "/events/planitario",
        "/events/boat-party",
        "/business",
    ];
    
    const hasDarkHero = darkHeroPages.some(page => {
        if (page === "/") return pathname === "/";
        return pathname?.startsWith(page);
    });
    const shouldShowWhiteText = !scrolled && hasDarkHero && !(isHomePage && isDesktop);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
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
                    : hasDarkHero && !(isHomePage && isDesktop)
                        ? "bg-transparent"
                        : "bg-white/95 backdrop-blur-md border-b border-slate-200/50"
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
                                        <Button variant="ghost" asChild className={`transition-colors duration-300 ${
                                            shouldShowWhiteText
                                                ? "text-white hover:text-[#E8C9A0] hover:bg-white/10" 
                                                : "text-slate-700 hover:text-[#D4A574] hover:bg-white/50"
                                        }`}>
                                            <Link href={item.href} onClick={(e) => handleNavClick(e, item.href)}>
                                                {item.title}
                                            </Link>
                                        </Button>
                                    ) : item.items ? (
                                        <>
                                            <NavigationMenuTrigger 
                                                className={`font-medium text-sm transition-colors duration-300 bg-transparent border-0 shadow-none ${
                                                    shouldShowWhiteText
                                                        ? "text-white hover:text-[#E8C9A0] hover:bg-white/10 data-[state=open]:bg-white/10 data-[state=open]:text-[#E8C9A0]" 
                                                        : "text-slate-700 hover:text-[#D4A574] hover:bg-white/50 data-[state=open]:bg-white/50 data-[state=open]:text-[#D4A574]"
                                                }`}
                                            >
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="bg-white border border-slate-200 shadow-xl !w-[320px] p-4">
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
                                                            const isBusinessLink = subItem.title === "Business with Us";
                                                            if (isExternal) {
                                                                return (
                                                                    <a
                                                                        href={subItem.href}
                                                                        key={subItem.title}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="flex flex-row justify-between items-center hover:bg-slate-50 py-2.5 px-3 rounded transition-colors"
                                                                    >
                                                                        <span className={`text-sm font-medium ${isBusinessLink ? "text-[#D4A574]" : "text-slate-700"}`}>{subItem.title}</span>
                                                                        <MoveRight className={`w-4 h-4 ${isBusinessLink ? "text-[#D4A574]" : "text-slate-400"}`} />
                                                                    </a>
                                                                );
                                                            }
                                                            return (
                                                                <Link
                                                                    href={subItem.href}
                                                                    key={subItem.title}
                                                                    className="flex flex-row justify-between items-center hover:bg-slate-50 py-2.5 px-3 rounded transition-colors"
                                                                    onClick={(e) => handleNavClick(e, subItem.href)}
                                                                >
                                                                    <span className={`text-sm font-medium ${isBusinessLink ? "text-[#D4A574]" : "text-slate-700"}`}>{subItem.title}</span>
                                                                    <MoveRight className={`w-4 h-4 ${isBusinessLink ? "text-[#D4A574]" : "text-slate-400"}`} />
                                                                </Link>
                                                            );
                                                        })}
                                                    </div>
                                                    <Button size="sm" asChild className="mt-2 bg-[#D4A574] hover:bg-[#C8965F] text-white border-0">
                                                        <Link href="/events" onClick={(e) => handleNavClick(e, "/events")}>
                                                            View All Events
                                                        </Link>
                                                    </Button>
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
                    <Link href="/" className="flex items-center gap-2" onClick={(e) => handleNavClick(e, "/")}>
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
                
                {/* Desktop Actions - Right */}
                <div className="hidden lg:flex justify-end w-full">
                    <Button asChild className={`transition-all duration-300 ${
                        shouldShowWhiteText
                            ? "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:border-white/40" 
                            : "bg-[#D4A574] hover:bg-[#C8965F] text-white border-0"
                    }`}>
                        <Link href="/contact" onClick={(e) => handleNavClick(e, '/contact')}>
                            <Mail className="h-4 w-4 mr-2" />
                            <span className="font-semibold">Contact Us</span>
                        </Link>
                    </Button>
                </div>
                
                {/* Mobile Menu Button */}
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
                                            onClick={(e) => { handleNavClick(e, item.href); setOpen(false); }}
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
                                            const isBusinessLink = subItem.title === "Business with Us";
                                            return isExternal ? (
                                                <a
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className={`flex justify-between items-center transition-colors py-1 ${isBusinessLink ? "text-[#D4A574] hover:text-[#C8965F]" : "text-slate-600 hover:text-[#D4A574]"}`}
                                                    onClick={() => setOpen(false)}
                                                >
                                                    <span className={isBusinessLink ? "font-medium" : "text-muted-foreground"}>
                                                        {subItem.title}
                                                    </span>
                                                    <MoveRight className={`w-4 h-4 stroke-1 ${isBusinessLink ? "text-[#D4A574]" : "text-slate-400"}`} />
                                                </a>
                                            ) : (
                                                <Link
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className={`flex justify-between items-center transition-colors py-1 ${isBusinessLink ? "text-[#D4A574] hover:text-[#C8965F]" : "text-slate-600 hover:text-[#D4A574]"}`}
                                                    onClick={(e) => { handleNavClick(e, subItem.href); setOpen(false); }}
                                                >
                                                    <span className={isBusinessLink ? "font-medium" : "text-muted-foreground"}>
                                                        {subItem.title}
                                                    </span>
                                                    <MoveRight className={`w-4 h-4 stroke-1 ${isBusinessLink ? "text-[#D4A574]" : "text-slate-400"}`} />
                                                </Link>
                                            );
                                        })}
                                </div>
                            </div>
                        ))}
                        <div className="flex flex-col gap-3 pt-4 border-t border-slate-200">
                            <Button asChild className="w-full bg-[#D4A574] hover:bg-[#C8965F] text-white border-0 transition-colors">
                                <Link href="/contact" onClick={(e) => { handleNavClick(e, '/contact'); setOpen(false); }}>
                                    <Mail className="h-4 w-4 mr-2" />
                                    <span className="font-semibold">Contact Us</span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export { Header1 };
