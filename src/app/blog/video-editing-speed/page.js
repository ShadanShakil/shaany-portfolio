"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react";

export default function BlogPostVideoEditingSpeed() {
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
                    src="/blog-thumb-speed.png"
                    alt="10 Tips for Better Video Editing Speed"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 container mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 bg-[#B7FF3C] text-black text-xs font-bold uppercase tracking-widest rounded-full mb-4">Workflow</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
                            10 Tips for Better Video Editing Speed
                        </h1>
                        <div className="flex flex-wrap gap-6 mt-4 text-white/60 text-sm">
                            <span className="flex items-center gap-2"><Calendar size={14} /> Oct 24, 2024</span>
                            <span className="flex items-center gap-2"><Clock size={14} /> 8 min read</span>
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
                        Speed in video editing doesn't mean rushing — it means working smarter. After years of professional editing, here are the 10 most impactful habits you can build to cut your editing time in half without sacrificing quality.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">1. Master Your Keyboard Shortcuts</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        The single biggest time-saver is learning keyboard shortcuts cold. In Premiere Pro, DaVinci Resolve, or Final Cut Pro, every click you eliminate adds up. Map your most-used functions — razor, ripple delete, in/out points — to keys you can hit without looking.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">2. Use Proxy Footage</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        Working with 4K or 6K footage directly on a lower-end machine is a guaranteed recipe for lag and frustration. Create low-resolution proxy files for editing, then relink to your originals for export. This workflow alone can make editing 3-4x faster.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">3. Organize Your Project Before You Start</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        A well-organized project bin means you're never hunting for footage. Create folders for raw footage, music, SFX, graphics, and exports. Label your bins and sequences with clear names. Ten minutes of organization saves hours of confusion.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">4. Build and Use Templates</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        Every client has recurring needs — lower thirds, outro animations, color looks. Build a personal template library in After Effects or your NLE of choice. What once took 30 minutes to recreate from scratch becomes a 2-minute drag-and-drop.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">5. Use Auto-Transcription for Interview Edits</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        Tools like Adobe's Speech to Text, DaVinci Resolve's transcription, or Descript can produce a transcript of your interview footage in minutes. Editing by deleting text is 2-3x faster than scrubbing through video for the perfect take.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">6. Edit to Music First</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        For commercial and social content, dropping in your music track first creates a natural rhythm guide. Sync your cuts to the beat or energy changes in the music. This is faster than deciding cut points in silence and gives edits a professional, polished feel.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">7. Use Multi-Camera Sequences</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        If you're editing footage from multiple cameras, sync them into a multi-cam sequence. You can then switch between angles in real-time as the video plays, effectively editing in one pass rather than cutting each clip individually.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">8. Learn Batch Operations</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        Color matching, audio normalization, and applying effects can all be done in batches. In DaVinci Resolve, use Remote Grades. In Premiere, use Paste Attributes. Apply LUTs and correction to all clips at once instead of one by one.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">9. Keep a "B-Roll Library" Ready</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        Build a growing library of stock footage, self-shot b-roll, and motion backgrounds organized by category. When you need a cutaway or filler shot, you're pulling from a curated collection — not endlessly searching stock sites mid-edit.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">10. Optimize Your Export Settings</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        Use hardware-accelerated encoding (GPU export). Create preset export settings for common deliverables — H.264 for web, ProRes for client delivery, etc. Queue multiple exports to run overnight so you wake up to finished files.
                    </p>

                    <div className="mt-16 p-8 bg-[#0A0A0A] rounded-[32px] text-white">
                        <p className="text-[#B7FF3C] font-bold text-lg mb-2">💡 Pro Takeaway</p>
                        <p className="text-white/70 leading-relaxed">
                            Speed is a skill, not a talent. The editors who seem "fast" aren't working frantically — they've automated and optimized every step. Start with one habit from this list this week and build from there.
                        </p>
                    </div>
                </motion.article>
            </div>
        </main>
    );
}
