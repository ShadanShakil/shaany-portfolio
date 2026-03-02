"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#work" },
    { name: "Services", href: "#services" },
    { name: "Blog", href: "#blog" },
    { name: "FAQ", href: "#faq" },
    { name: "Pricing", href: "#pricing" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Active section detection
            const sections = document.querySelectorAll("section[id]");
            let current = "";

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 150) {
                    current = section.getAttribute("id");
                }
            });

            if (window.scrollY < 100) {
                current = ""; // Home section
            }

            setActiveSection(current);
        };
        window.addEventListener("scroll", handleScroll);
        // Fire once on mount
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMobileMenuOpen]);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled || isMobileMenuOpen
                    ? "bg-white/90 backdrop-blur-md border-b border-black/5 shadow-sm"
                    : "bg-transparent"
            )}
        >
            <div className="flex items-center justify-between px-6 py-4 md:py-4">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 w-48 z-50">
                    <span className={cn(
                        "text-2xl font-bold tracking-tighter transition-colors",
                        scrolled || isMobileMenuOpen ? "text-black" : "text-white"
                    )}>
                        Shany Abbas
                    </span>
                </Link>

                <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-[15px] font-semibold transition-all duration-300",
                                (activeSection === link.href.substring(1) || (activeSection === "" && link.href === "#"))
                                    ? (scrolled || isMobileMenuOpen ? "text-[#589E00]" : "text-primary-green")
                                    : (scrolled || isMobileMenuOpen ? "text-black/60 hover:text-black" : "text-white/70 hover:text-white")
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center justify-end w-48">
                    <Link
                        href="#contact"
                        className="relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full font-semibold text-black bg-primary-green px-8 transition-all hover:bg-primary-green-hover shadow-sm"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Contact Me
                        </span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className={cn(
                        "md:hidden relative z-50 p-2 transition-colors",
                        scrolled || isMobileMenuOpen ? "text-black" : "text-white"
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 top-[72px] bg-white z-40 flex flex-col items-center pt-12 gap-8 md:hidden"
                    >
                        {navLinks.map((link, idx) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-semibold text-black hover:text-[#589E00] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mt-8"
                        >
                            <Link
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="inline-flex h-14 items-center justify-center rounded-full font-semibold text-black bg-primary-green px-10"
                            >
                                Contact Me
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
