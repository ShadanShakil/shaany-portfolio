"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export function Hero() {
    // Badges around the avatar
    const badges = [
        { text: "Video Editor", position: "-top-6 -left-12", delay: 0.1 },
        { text: "Motion Graphics", position: "top-10 -right-16", delay: 0.2 },
        { text: "Product Design", position: "bottom-12 -left-14", delay: 0.3 },
        { text: "Graphic Design", position: "bottom-48 -right-8", delay: 0.4 },
    ];

    return (
        <section className="relative min-h-[90vh] flex flex-col pt-24 pb-0 overflow-hidden bg-[#0A0A0A] z-0">
            {/* Background Glows (Left and Right as seen in image) */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary-green/20 blur-[130px] rounded-full pointer-events-none -z-10" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary-green/20 blur-[130px] rounded-full pointer-events-none -z-10" />

            <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center z-10 relative flex-grow">
                {/* Decorative top badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 flex items-center gap-2"
                >
                    <div className="w-6 h-6 rounded-full border border-primary-green flex items-center justify-center">
                        <span className="text-[10px] text-primary-green">🏆</span>
                    </div>
                    <span className="text-sm font-medium tracking-wide text-primary-green">
                        Outstanding Product Design 2024
                    </span>
                </motion.div>

                {/* Main Headline - Responsive font size */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-5xl sm:text-7xl md:text-[100px] font-bold tracking-tight text-[#1A1A1A] leading-[0.95] md:leading-[0.9] max-w-5xl mb-8 md:mb-12 uppercase"
                >
                    Hello i'm Shany
                    <br className="hidden md:block" /> Video Editor
                </motion.h1>

                {/* Main Image & Elements Container */}
                <div className="relative w-full max-w-5xl mx-auto flex-grow flex flex-col items-center justify-end">

                    {/* Hero Image - Responsive height, flush bottom */}
                    <div className="relative w-full h-[300px] sm:h-[450px] md:h-[600px] flex items-end justify-center">
                        <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative w-full h-full"
                        >
                            <Image
                                src="/hero1.png"
                                alt="Shany Abbas"
                                fill
                                className="object-contain object-bottom"
                                priority
                                fetchPriority="high"
                            />
                        </motion.div>

                        {/* Floating Skill Badges - Solid Green Style (Matched) */}
                        {badges.map((badge, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4 + badge.delay, duration: 0.5 }}
                                className={`absolute ${badge.position} px-6 py-3 border border-primary-green bg-primary-green shadow-[0_0_30px_rgba(183,255,60,0.4)] z-20 hidden md:block rounded-full`}
                            >
                                <span className="text-sm font-bold text-black">
                                    {badge.text}
                                </span>
                            </motion.div>
                        ))}

                        {/* CTA Buttons - Centered bottom, overlapping image base */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className="absolute bottom-6 flex flex-wrap items-center justify-center p-1.5 bg-transparent rounded-full z-30 gap-2 w-full px-4 md:px-0"
                        >
                            <a
                                href="#contact"
                                className="h-12 md:h-14 px-6 md:px-8 rounded-full bg-primary-green text-black font-bold flex items-center justify-center transition-transform hover:scale-105 text-sm md:text-base whitespace-nowrap"
                            >
                                Collaborate With Me
                            </a>
                            <a
                                href="#work"
                                className="h-12 md:h-14 px-6 md:px-8 rounded-full bg-white text-black font-bold flex items-center justify-center transition-transform hover:scale-105 text-sm md:text-base whitespace-nowrap"
                            >
                                Discover My Works
                            </a>
                        </motion.div>
                    </div>

                    {/* 90K Happy Clients Box - Responsive visibility/positioning */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className="absolute bottom-20 right-0 md:bottom-10 md:right-0 flex flex-col items-end gap-2 md:gap-3 z-30 scale-75 md:scale-100 origin-right"
                    >
                        <div className="flex items-center gap-2 md:gap-3">
                            <div className="flex -space-x-3">
                                {[
                                    { bg: "from-[#B7FF3C] to-[#7acc00]", text: "S" },
                                    { bg: "from-purple-400 to-pink-500", text: "J" },
                                    { bg: "from-blue-400 to-cyan-500", text: "A" },
                                ].map((av, i) => (
                                    <div key={i} className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-black bg-gradient-to-br ${av.bg} flex items-center justify-center text-black font-bold text-xs`}>
                                        {av.text}
                                    </div>
                                ))}
                            </div>
                            <span className="text-3xl md:text-4xl font-bold text-primary-green">90K</span>
                        </div>
                        <p className="text-base md:text-lg font-medium text-white">Happy Clients</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
