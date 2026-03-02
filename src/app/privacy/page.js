"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Mail, Cookie, Trash2 } from "lucide-react";

export default function PrivacyPage() {
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
                    className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8"
                >
                    <div className="w-16 h-16 rounded-2xl bg-primary-green/20 flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-8 h-8 text-[#589E00]" />
                    </div>
                    <div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">Privacy Policy</h1>
                        <p className="text-xl text-black/60 leading-relaxed">
                            We respect your privacy. Here is a transparent breakdown of how we handle your data.
                        </p>
                    </div>
                </motion.div>

                <div className="grid gap-6 mt-16">
                    <PrivacyCard delay={0.1} title="Data Collection" icon={<ShieldCheck className="w-8 h-8 text-black/70" />}>
                        We only collect the minimum amount of information necessary to provide you with a smooth experience. This may include basic analytics like page views, which are completely anonymized and untraceable.
                    </PrivacyCard>
                    <PrivacyCard delay={0.2} title="Contact Information" icon={<Mail className="w-8 h-8 text-black/70" />}>
                        When you reach out via our contact form, your email and message are kept strictly confidential. We will never sell, rent, or share your personal information with any third-party marketing agencies.
                    </PrivacyCard>
                    <PrivacyCard delay={0.3} title="Cookies" icon={<Cookie className="w-8 h-8 text-black/70" />}>
                        We use essential cookies to ensure the site functions properly. We do not use intrusive tracking cookies or third-party advertising cookies on this portfolio. Your browsing habits remain yours alone.
                    </PrivacyCard>
                    <PrivacyCard delay={0.4} title="Your Rights" icon={<Trash2 className="w-8 h-8 text-black/70" />}>
                        You have the right to request the deletion of any personal data you have shared with us. Simply contact us through the regular channels, and we will promptly remove your information from our records.
                    </PrivacyCard>
                </div>
            </div>
        </div>
    );
}

function PrivacyCard({ title, children, delay, icon }) {
    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="p-8 rounded-3xl bg-surface-medium border border-black/5 hover:border-primary-green/50 transition-colors flex flex-col md:flex-row gap-6 items-start group relative overflow-hidden"
        >
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-black/5 group-hover:bg-primary-green/20 transition-colors shrink-0 z-10 relative">
                {icon}
            </div>
            <div className="z-10 relative">
                <h2 className="text-2xl font-bold mb-3 group-hover:text-[#589E00] transition-colors">{title}</h2>
                <p className="text-black/70 leading-relaxed text-lg">
                    {children}
                </p>
            </div>
        </motion.div>
    );
}
