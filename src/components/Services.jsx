"use client";

import { motion } from "framer-motion";
import { Copy, MonitorPlay, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
    {
        title: "Video Editing",
        description: "High-impact editing for commercials and social media.",
        icon: MonitorPlay,
        highlight: false,
    },
    {
        title: "UI/UX Design",
        description: "Crafting intuitive digital experiences and user interfaces.",
        icon: Copy,
        highlight: true,
    },
    {
        title: "Motion Graphics",
        description: "Custom animations and visual effects that elevate brands.",
        icon: Sparkles,
        highlight: false,
    },
];

export function Services() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 20 },
        },
    };

    return (
        <section id="services" className="py-32 bg-surface-medium relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-flex items-center gap-2 mb-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm"
                    >
                        <span className="text-sm font-semibold text-black tracking-wide">
                            Services
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-2"
                    >
                        My <span className="text-[#589E00]">Expertise</span>
                    </motion.h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className={cn(
                                "group relative p-8 rounded-[40px] border border-black/5 transition-all duration-300 shadow-md hover:shadow-xl",
                                service.highlight ? "bg-primary-green" : "bg-white hover:border-black/10"
                            )}
                        >
                            <div className="relative z-10 flex flex-col items-center text-center h-full">
                                <div
                                    className={cn(
                                        "w-16 h-16 rounded-3xl flex items-center justify-center mb-8 border transition-all duration-300",
                                        service.highlight
                                            ? "bg-black/10 border-black/10 text-black group-hover:scale-110 group-hover:bg-black/20"
                                            : "bg-surface-medium border-black/5 text-black group-hover:bg-primary-green group-hover:text-black group-hover:border-primary-green group-hover:scale-110"
                                    )}
                                >
                                    <service.icon className="w-8 h-8" />
                                </div>

                                <h3 className={cn(
                                    "text-2xl font-bold mb-4",
                                    service.highlight ? "text-black" : "text-black"
                                )}>
                                    {service.title}
                                </h3>

                                <p className={cn(
                                    "leading-relaxed mt-auto font-medium",
                                    service.highlight ? "text-black/70" : "text-black/60"
                                )}>
                                    {service.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
