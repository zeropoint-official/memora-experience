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
import { Menu, MoveRight, X, Sparkles, User } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

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
            description: "Discover extraordinary events, unforgettable trips, and legendary nights across Cyprus.",
            items: [
                {
                    title: "Planitario 2025",
                    href: "https://planetarium.memora-experience.com",
                },
                {
                    title: "Student Trips",
                    href: "/events/student-trips",
                },
                {
                    title: "Corporate Events",
                    href: "/events/corporate",
                },
                {
                    title: "Festivals",
                    href: "/events/festivals",
                },
            ],
        },
        {
            title: "Services",
            description: "Comprehensive event solutions that bring your vision to life.",
            items: [
                {
                    title: "Event Management Services",
                    href: "/services",
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
        "/services",
        "/business",
        "/account",
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
                                                        ? "text-white hover:text-orange-300 hover:bg-white/10" 
                                                        : "text-slate-700 hover:text-orange-600 hover:bg-white/50"
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
                                                        ? "text-white hover:text-orange-300 hover:bg-white/10 data-[state=open]:bg-white/10 data-[state=open]:text-orange-300" 
                                                        : "text-slate-700 hover:text-orange-600 hover:bg-white/50 data-[state=open]:bg-white/50 data-[state=open]:text-orange-600"
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
                                            <NavigationMenuContent className={`bg-white border border-slate-200 shadow-xl ${
                                                item.title === "Services" 
                                                    ? "!w-[280px] p-3" 
                                                    : "!w-[450px] p-4"
                                            }`}>
                                                {item.title === "Services" ? (
                                                    // Compact layout for Services (only 2 links)
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
                                                ) : (
                                                    // Full layout for Events (with description and button)
                                                    <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                        <div className="flex flex-col h-full justify-between">
                                                            <div className="flex flex-col">
                                                                <p className="text-base font-semibold text-slate-900">{item.title}</p>
                                                                <p className="text-slate-600 text-sm mt-1">
                                                                    {item.description}
                                                                </p>
                                                            </div>
                                                            <Link href="/events" legacyBehavior passHref>
                                                                <NavigationMenuLink asChild>
                                                                    <Button size="sm" className="mt-10 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-0">
                                                                        Explore Events
                                                                    </Button>
                                                                </NavigationMenuLink>
                                                            </Link>
                                                        </div>
                                                        <div className="flex flex-col text-sm h-full justify-end">
                                                            {item.items?.map((subItem) => {
                                                                const isExternal = subItem.href.startsWith('http');
                                                                return isExternal ? (
                                                                    <a
                                                                        href={subItem.href}
                                                                        key={subItem.title}
                                                                        target="_blank"
                                                                        rel="noopener noreferrer"
                                                                        className="flex flex-row justify-between items-center hover:bg-slate-50 py-2 px-4 rounded transition-colors"
                                                                    >
                                                                        <span className="text-slate-700">{subItem.title}</span>
                                                                        <MoveRight className="w-4 h-4 text-slate-400" />
                                                                    </a>
                                                                ) : (
                                                                    <Link
                                                                        href={subItem.href}
                                                                        key={subItem.title}
                                                                        legacyBehavior
                                                                        passHref
                                                                    >
                                                                        <NavigationMenuLink className="flex flex-row justify-between items-center hover:bg-slate-50 py-2 px-4 rounded transition-colors">
                                                                            <span className="text-slate-700">{subItem.title}</span>
                                                                            <MoveRight className="w-4 h-4 text-slate-400" />
                                                                        </NavigationMenuLink>
                                                                    </Link>
                                                                );
                                                            })}
                                                        </div>
                                                    </div>
                                                )}
                                            </NavigationMenuContent>
                                        </>
                                    ) : null}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                
                {/* Logo - Center on desktop, Left on mobile */}
                <div className="flex lg:justify-center flex-1 lg:flex-none">
                    <Link href="/" className="flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-orange-500 transition-colors duration-300" />
                        <p className={`font-bold text-xl transition-colors duration-300 ${
                            shouldShowWhiteText ? "text-white" : "text-slate-900"
                        }`}>Memora Experience</p>
                    </Link>
                </div>
                
                {/* Desktop Actions - Right (hidden on mobile) */}
                <div className="hidden lg:flex justify-end w-full gap-3">
                    <Link href="/contact">
                        <Button variant="ghost" className={`transition-colors duration-300 ${
                            shouldShowWhiteText
                                ? "text-white hover:text-orange-300 hover:bg-white/10" 
                                : "text-slate-700 hover:text-orange-600 hover:bg-white/50"
                        }`}>
                            Contact Us
                        </Button>
                    </Link>
                    <div className={`transition-colors duration-300 ${
                        shouldShowWhiteText ? "border-r border-white/30" : "border-r border-slate-300/50"
                    }`}></div>
                    <SignedOut>
                        <SignInButton mode="modal">
                            <Button variant="outline" className={`transition-all duration-300 ${
                                shouldShowWhiteText
                                    ? "border-white/30 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50" 
                                    : "border-slate-300 bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white hover:border-orange-300 hover:text-orange-600"
                            }`}>
                                Sign in
                            </Button>
                        </SignInButton>
                        <SignUpButton mode="modal">
                            <Button className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-0 shadow-lg shadow-orange-500/25">
                                Get Started
                            </Button>
                        </SignUpButton>
                    </SignedOut>
                    <SignedIn>
                        <Link href="/account">
                            <Button 
                                variant="ghost" 
                                className={`transition-colors duration-300 ${
                                    shouldShowWhiteText
                                        ? "text-white hover:text-orange-300 hover:bg-white/10" 
                                        : "text-slate-700 hover:text-orange-600 hover:bg-white/50"
                                }`}
                            >
                                <User className="h-4 w-4 mr-2" />
                                Account
                            </Button>
                        </Link>
                        <UserButton 
                            appearance={{
                                elements: {
                                    avatarBox: "h-9 w-9",
                                },
                            }}
                        />
                    </SignedIn>
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
                                            className="flex justify-between items-center text-slate-700 hover:text-orange-600 transition-colors"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="text-lg font-medium">{item.title}</span>
                                            <MoveRight className="w-4 h-4 stroke-1 text-slate-400" />
                                        </Link>
                                    ) : (
                                        <p className="text-lg font-semibold text-slate-900">{item.title}</p>
                                    )}
                                    {item.items &&
                                        item.items.map((subItem) => (
                                            <Link
                                                key={subItem.title}
                                                href={subItem.href}
                                                className="flex justify-between items-center text-slate-600 hover:text-orange-600 transition-colors py-1"
                                                onClick={() => setOpen(false)}
                                            >
                                                <span className="text-muted-foreground">
                                                    {subItem.title}
                                                </span>
                                                <MoveRight className="w-4 h-4 stroke-1 text-slate-400" />
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        ))}
                        <div className="flex flex-col gap-3 pt-4 border-t border-slate-200">
                            <Link href="/contact" onClick={() => setOpen(false)}>
                                <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50">
                                    Contact Us
                                </Button>
                            </Link>
                            <SignedOut>
                                <SignInButton mode="modal">
                                    <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50">
                                        Sign in
                                    </Button>
                                </SignInButton>
                                <SignUpButton mode="modal">
                                    <Button className="w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-0">
                                        Get Started
                                    </Button>
                                </SignUpButton>
                            </SignedOut>
                            <SignedIn>
                                <Link href="/account" onClick={() => setOpen(false)}>
                                    <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50">
                                        <User className="h-4 w-4 mr-2" />
                                        Account
                                    </Button>
                                </Link>
                                <div className="flex justify-center">
                                    <UserButton 
                                        appearance={{
                                            elements: {
                                                avatarBox: "h-10 w-10",
                                            },
                                        }}
                                    />
                                </div>
                            </SignedIn>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export { Header1 };

