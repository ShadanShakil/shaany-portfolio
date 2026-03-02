"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What is your typical turnaround time?",
        answer: "For standard projects like social media shorts or basic commercials, turnaround time is usually 3-5 business days. More complex motion graphics or long-form editing may take 1-2 weeks depending on the scope.",
    },
    {
        question: "Do you offer revisions?",
        answer: "Yes, every primary package includes up to 2 rounds of revisions to ensure the final product aligns perfectly with your vision. Additional revisions can be accommodated at an hourly rate.",
    },
    {
        question: "What software do you use?",
        answer: "I primarily use the Adobe Creative Suite, focusing on Premiere Pro for editing, After Effects for motion graphics and VFX, and DaVinci Resolve for professional color grading.",
    },
    {
        question: "How do we get started?",
        answer: "You can reach out via the contact form below or email me directly. We'll set up a brief discovery call to discuss your project needs, timeline, and budget.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <section id="faq" className="py-24 bg-surface-medium relative border-t border-black/5">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-flex items-center gap-2 mb-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm"
                    >
                        <span className="text-sm font-semibold text-black tracking-wide">
                            FAQ
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-2"
                    >
                        Frequently Asked <span className="text-[#589E00]">Questions</span>
                    </motion.h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="space-y-4"
                >
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={false}
                            animate={{ backgroundColor: openIndex === index ? "var(--color-primary-green)" : "#ffffff" }}
                            className={cn(
                                "rounded-3xl border border-black/5 overflow-hidden transition-colors duration-300 shadow-sm",
                                openIndex === index ? "bg-primary-green" : "bg-white hover:border-black/10"
                            )}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                                className="w-full px-6 py-6 flex items-center justify-between focus:outline-none"
                            >
                                <span className="text-lg font-bold text-black text-left">
                                    {faq.question}
                                </span>
                                <span className={cn(
                                    "w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0 ml-4",
                                    openIndex === index
                                        ? "bg-black text-[#589E00] border-black rotate-180"
                                        : "bg-surface-medium text-black border-black/10"
                                )}>
                                    <ChevronDown className="w-5 h-5" />
                                </span>
                            </button>
                            <AnimatePresence initial={false}>
                                {openIndex === index && (
                                    <motion.div
                                        initial="collapsed"
                                        animate="open"
                                        exit="collapsed"
                                        variants={{
                                            open: { opacity: 1, height: "auto", marginBottom: 24 },
                                            collapsed: { opacity: 0, height: 0, marginBottom: 0 }
                                        }}
                                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <div className="px-6 text-black/70 font-medium leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
