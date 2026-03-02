"use client";

import { motion } from "framer-motion";

const clients = [
    "Nike",
    "Red Bull",
    "Samsung",
    "Spotify",
    "Adidas",
    "Sony",
    "Lexus",
    "Porsche",
];

export function ClientMarquee() {
    return (
        <div className="w-full bg-white py-12 overflow-hidden border-y border-black/5 relative flex items-center">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

            <motion.div
                className="flex gap-16 md:gap-32 w-max"
                animate={{
                    x: ["0%", "-50%"],
                }}
                transition={{
                    duration: 20,
                    ease: "linear",
                    repeat: Infinity,
                }}
            >
                {/* Double the array to create infinite loop effect */}
                {[...clients, ...clients].map((client, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-center font-bold text-2xl md:text-3xl text-black/30 tracking-widest uppercase hover:text-black/80 transition-colors cursor-default"
                    >
                        {client}
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
