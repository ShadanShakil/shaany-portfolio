"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
    {
        name: "Basic Edit",
        price: "$299",
        description: "Perfect for short-form content and quick social media posts.",
        features: [
            "Up to 60 seconds",
            "Basic color correction",
            "Standard transitions",
            "1 revision round",
            "3-day delivery",
        ],
        highlight: false,
    },
    {
        name: "Pro Production",
        price: "$899",
        description: "Ideal for commercials, YouTube videos, and brand storytelling.",
        features: [
            "Up to 5 minutes",
            "Advanced color grading",
            "Motion graphics & titles",
            "Sound design & mixing",
            "2 revision rounds",
            "7-day delivery",
        ],
        highlight: true,
    },
    {
        name: "Premium Retainer",
        price: "$2,499",
        description: "Ongoing partnership for businesses needing consistent content.",
        features: [
            "Up to 4 videos/month",
            "Priority editing & support",
            "Dedicated creative strategy",
            "Custom animation assets",
            "Unlimited revisions",
            "48-hour delivery/video",
        ],
        highlight: false,
    },
];

export function Pricing() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
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
        <section id="pricing" className="py-24 bg-background relative border-t border-black/5">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-flex items-center gap-2 mb-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm"
                    >
                        <span className="text-sm font-semibold text-black tracking-wide">
                            Pricing
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-2"
                    >
                        Simple & Transparent <span className="text-[#589E00]">Pricing</span>
                    </motion.h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            variants={cardVariants}
                            className={cn(
                                "group relative p-8 rounded-[40px] border transition-all duration-300 shadow-sm flex flex-col",
                                plan.highlight
                                    ? "bg-black border-black/10 text-white shadow-2xl ring-1 ring-black/5 scale-105 z-10"
                                    : "bg-white border-black/5 text-black hover:border-black/10 hover:shadow-md"
                            )}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-green text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Most Popular
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <p className={cn("text-sm h-10", plan.highlight ? "text-white/60" : "text-black/60")}>
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mb-8">
                                <span className="text-5xl font-bold">{plan.price}</span>
                                {plan.name === "Premium Retainer" && <span className="text-lg opacity-60">/mo</span>}
                            </div>

                            <div className="space-y-4 mb-8 flex-1">
                                {plan.features.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle2 className={cn("w-5 h-5 shrink-0", plan.highlight ? "text-[#589E00]" : "text-black/80")} />
                                        <span className={cn("font-medium", plan.highlight ? "text-white/80" : "text-black/80")}>
                                            {feature}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <a
                                href="#contact"
                                className={cn(
                                    "w-full py-4 rounded-full font-bold transition-colors flex items-center justify-center",
                                    plan.highlight
                                        ? "bg-primary-green text-black hover:bg-zinc-800"
                                        : "bg-surface-medium text-black hover:bg-zinc-200 border border-black/5"
                                )}
                            >
                                Get Started
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
