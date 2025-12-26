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
import { Menu, MoveRight, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

function Header1() {
    const navigationItems = [
        {
            title: "Home",
            href: "/",
            description: "",
        },
        {
            title: "Events",
            description: "Discover extraordinary events, unforgettable trips, and legendary nights across Cyprus.",
            items: [
                {
                    title: "Planitario 2025",
                    href: "/events/planitario",
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
                    title: "Event Planning",
                    href: "/services/planning",
                },
                {
                    title: "Venue Sourcing",
                    href: "/services/venues",
                },
                {
                    title: "Vendor Coordination",
                    href: "/services/vendors",
                },
                {
                    title: "Corporate Events",
                    href: "/services/corporate",
                },
            ],
        },
    ];

    const [isOpen, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
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
                                    {item.href ? (
                                        <Link href={item.href} legacyBehavior passHref>
                                            <NavigationMenuLink>
                                                <Button variant="ghost" className="text-slate-700 hover:text-orange-600 hover:bg-white/50">
                                                    {item.title}
                                                </Button>
                                            </NavigationMenuLink>
                                        </Link>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="font-medium text-sm text-slate-700 hover:text-orange-600 hover:bg-white/50 data-[state=open]:bg-white/50 data-[state=open]:text-orange-600 bg-transparent border-0 shadow-none">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4 bg-white border border-slate-200 shadow-xl">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base font-semibold text-slate-900">{item.title}</p>
                                                            <p className="text-slate-600 text-sm mt-1">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <Button size="sm" className="mt-10 bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-0">
                                                            Explore Events
                                                        </Button>
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
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
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                
                {/* Logo - Center on desktop, Left on mobile */}
                <div className="flex lg:justify-center flex-1 lg:flex-none">
                    <Link href="/" className="flex items-center gap-2">
                        <Sparkles className={`h-5 w-5 transition-colors duration-300 lg:text-orange-500 ${
                            scrolled ? "text-orange-500" : "text-orange-400"
                        }`} />
                        <p className={`font-bold text-xl transition-colors duration-300 lg:text-slate-900 ${
                            scrolled ? "text-slate-900" : "text-white"
                        }`}>Memora Experience</p>
                    </Link>
                </div>
                
                {/* Desktop Actions - Right (hidden on mobile) */}
                <div className="hidden lg:flex justify-end w-full gap-3">
                    <Button variant="ghost" className="text-slate-700 hover:text-orange-600 hover:bg-white/50">
                        Contact Us
                    </Button>
                    <div className="border-r border-slate-300/50"></div>
                    <Button variant="outline" className="border-slate-300 bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white hover:border-orange-300 hover:text-orange-600">
                        Sign in
                    </Button>
                    <Button className="bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-0 shadow-lg shadow-orange-500/25">
                        Get Started
                    </Button>
                </div>
                
                {/* Mobile Menu Button - Only visible on mobile */}
                <div className="flex lg:hidden items-center justify-end">
                    <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => setOpen(!isOpen)} 
                        className={`transition-colors duration-300 h-10 w-10 ${
                            scrolled 
                                ? "text-slate-700 hover:bg-white/50" 
                                : "text-white hover:bg-white/10"
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
                            <Button variant="outline" className="w-full border-slate-300 text-slate-700 hover:bg-slate-50">
                                Sign in
                            </Button>
                            <Button className="w-full bg-gradient-to-r from-orange-500 to-rose-500 hover:from-orange-600 hover:to-rose-600 text-white border-0">
                                Get Started
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export { Header1 };

