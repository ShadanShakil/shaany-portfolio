"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background text-foreground pt-32 pb-24 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-green/10 blur-[120px] rounded-full pointer-events-none -z-10" />

            <div className="container px-4 md:px-6 mx-auto max-w-4xl z-10 relative">
                <Link href="/" className="inline-flex items-center gap-2 text-black/60 hover:text-primary-green transition-colors mb-12">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="font-medium">Back to Home</span>
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Terms & Conditions</h1>
                    <p className="text-xl text-black/60 mb-16 leading-relaxed">
                        Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </p>
                </motion.div>

                <div className="space-y-12">
                    <Section delay={0.1} title="1. Acceptance of Terms" index="01">
                        By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Any participation in this service will constitute acceptance of this agreement.
                    </Section>
                    <Section delay={0.2} title="2. Intellectual Property" index="02">
                        All content, designs, videos, and graphics on this portfolio are the exclusive property of Shany Abbas unless otherwise stated. Unauthorized use or reproduction is strictly prohibited and protected by international copyright laws.
                    </Section>
                    <Section delay={0.3} title="3. Services and Collaboration" index="03">
                        Any collaboration or project engagement is subject to a separate, formal agreement that will outline specific deliverables, timelines, and payment structures. The portfolio serves merely as a showcase of past capabilities.
                    </Section>
                    <Section delay={0.4} title="4. Revisions and Modifications" index="04">
                        We reserve the right to modify these terms from time to time at our sole discretion. Therefore, you should review this page periodically. Your continued use of the Website after any such change constitutes your acceptance of the new Terms.
                    </Section>
                </div>
            </div>
        </div>
    );
}

function Section({ title, children, delay, index }) {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="p-8 md:p-10 rounded-3xl bg-surface-medium border border-black/5 hover:border-primary-green/50 transition-colors group relative overflow-hidden"
        >
            <span className="absolute -top-4 -right-4 text-9xl font-bold text-black/5 group-hover:text-primary-green/10 transition-colors select-none">
                {index}
            </span>
            <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4 group-hover:text-[#589E00] transition-colors">{title}</h2>
                <p className="text-black/70 leading-relaxed text-lg">
                    {children}
                </p>
            </div>
        </motion.div>
    );
}
