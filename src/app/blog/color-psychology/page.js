"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export default function BlogPostColorPsychology() {
    return (
        <main className="min-h-screen bg-[#F8F8F8] relative">
            {/* Back to Home Floating Button */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="fixed top-6 left-6 md:top-8 md:left-8 z-50"
            >
                <Link
                    href="/"
                    className="group flex items-center gap-3 px-5 py-3 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white shadow-lg hover:bg-black transition-all hover:scale-105"
                >
                    <ArrowLeft size={18} className="text-primary-green group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm font-bold tracking-wide">Back to Home</span>
                </Link>
            </motion.div>

            {/* Hero Banner */}
            <div className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
                <Image
                    src="/blog-thumb-color.png"
                    alt="The Psychology of Color in Commercials"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 container mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 bg-[#B7FF3C] text-black text-xs font-bold uppercase tracking-widest rounded-full mb-4">Case Study</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
                            The Psychology of Color in Commercials
                        </h1>
                        <div className="flex flex-wrap gap-6 mt-4 text-white/60 text-sm">
                            <span className="flex items-center gap-2"><Calendar size={14} /> Oct 18, 2024</span>
                            <span className="flex items-center gap-2"><Clock size={14} /> 6 min read</span>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Content */}
            <div className="container px-4 md:px-6 mx-auto max-w-3xl py-16">
                <Link href="/#blog" className="inline-flex items-center gap-2 text-sm font-semibold text-black/60 hover:text-black transition-colors mb-10">
                    <ArrowLeft size={16} /> Back to Blog
                </Link>

                <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="prose prose-lg max-w-none"
                >
                    <p className="text-xl text-black/70 leading-relaxed font-medium mb-10">
                        Color is never neutral. Every shade, saturation, and contrast ratio in a commercial is a deliberate decision — a psychological cue designed to make you feel, want, or act. Here's what you need to know.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">Why Color Matters More Than You Think</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        Research shows that up to 90% of an initial product impression is based on color alone. In a 30-second commercial, there's no time for long copy. Color does the heavy lifting — before a word is spoken or a price is shown.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">Red: Urgency, Energy, and Appetite</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        McDonald's, Coca-Cola, and Netflix all use red. It increases heart rate, stimulates appetite, and creates urgency. "Limited time offer" ads almost always lean red. It's the color of action and immediacy — which is why you'll see it dominating food and retail commercials.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">Blue: Trust, Calm, and Reliability</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        Finance brands (Chase, PayPal), tech giants (Facebook/Meta, Samsung), and healthcare companies lean heavily on blue. It communicates trustworthiness and competence. If your commercial needs to say "we're safe and dependable," blue is your foundation.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">Black & Gold: Luxury and Exclusivity</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        Chanel, Louis Vuitton, and Rolex commercials favor near-black palettes with metallic gold and warm highlights. This combination signals rarity, premium quality, and sophistication. High contrast, minimal color, maximum perceived value.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">Green: Health, Nature, and Progress</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        Whole Foods, Starbucks, John Deere — green equals organic, growth, and environmental care. As sustainability becomes more central to brand identity, green has surged in commercial use, signaling that a brand is forward-looking and responsible.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">Color Grading as Narrative</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        As a colorist and editor, I approach every project thinking about how the grade supports the story. A teal-and-orange grade (common in action blockbusters) creates natural contrast and dynamism. A desaturated, film-like grade suggests authenticity and nostalgia. The grade isn't decoration — it's storytelling.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">Practical Application for Commercial Editors</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        When you receive a brief, ask the client about their target demographic and emotional goal. A commercial targeting young professionals in tech should feel energetic and modern. A luxury watch spot should feel quiet and precise. Let those descriptors guide your color palette before you touch a single slider.
                    </p>

                    <div className="mt-16 p-8 bg-[#0A0A0A] rounded-[32px] text-white">
                        <p className="text-[#B7FF3C] font-bold text-lg mb-2">💡 Pro Takeaway</p>
                        <p className="text-white/70 leading-relaxed">
                            Never choose colors in post-production without referencing the brand guidelines first. The most impactful choice is often the most consistent one — using color to reinforce what the brand already means, not to reinvent it.
                        </p>
                    </div>
                </motion.article>
            </div>
        </main>
    );
}
