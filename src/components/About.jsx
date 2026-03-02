"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

export function About() {
    const features = [
        "5+ Years Experience",
        "Adobe Creative Suite Master",
        "High-End Visual Effects",
        "Fast Turnaround Times",
        "Data-Driven Storytelling",
        "Client-Centric Workflow",
    ];

    return (
        <section id="about" className="py-32 bg-surface-medium relative border-t border-black/5">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col justify-center order-2 lg:order-1"
                    >
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white border border-black/5 w-fit shadow-sm">
                            <span className="text-sm font-semibold text-black tracking-wide">
                                About Me
                            </span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-[1.2]">
                            Designing with Purpose, <br />
                            Creating for Impact, <br />
                            Innovating for You.
                        </h2>

                        <p className="text-lg text-black/60 mb-8 leading-relaxed max-w-lg">
                            Based in the creative hub of digital media, I specialize in crafting visual stories that command attention.
                            My approach blends technical precision with a deep understanding of pacing, psychology, and modern aesthetics.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 text-black/80">
                                    <span className="w-6 h-6 rounded-full bg-primary-green flex items-center justify-center shrink-0">
                                        <CheckCircle2 className="w-4 h-4 text-black" />
                                    </span>
                                    <span className="font-semibold text-sm">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="relative h-[600px] rounded-[40px] overflow-hidden bg-white border border-black/5 shadow-xl order-1 lg:order-2"
                    >
                        <Image
                            src="/about-studio.png"
                            alt="Professional video editing studio setup"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
