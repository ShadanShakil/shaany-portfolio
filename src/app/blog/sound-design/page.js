"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";

export default function BlogPostSoundDesign() {
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
                    src="/blog-thumb-sound.png"
                    alt="Why Sound Design is Half the Video"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 container mx-auto">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block px-4 py-1.5 bg-[#B7FF3C] text-black text-xs font-bold uppercase tracking-widest rounded-full mb-4">Opinion</span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight max-w-3xl">
                            Why Sound Design is Half the Video
                        </h1>
                        <div className="flex flex-wrap gap-6 mt-4 text-white/60 text-sm">
                            <span className="flex items-center gap-2"><Calendar size={14} /> Oct 12, 2024</span>
                            <span className="flex items-center gap-2"><Clock size={14} /> 7 min read</span>
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
                        Mute any blockbuster and it immediately feels cheap. The same clip with a perfectly designed soundscape transforms into something cinematic. Sound isn't a finishing touch — it's a co-creator of the entire emotional experience.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">The Invisible Storyteller</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        Studies in film cognition consistently show that audiences attribute up to 50% of their emotional response to audio. The picture sets the scene, but the sound tells you how to feel about it. A door creaking is just wood and metal — a door creaking with the right lowered tone and reverb is dread.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">Sound Design vs. Music: What's the Difference?</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        Music is the emotional layer — it sets mood, pace, and energy. Sound design is the physical layer — it makes your world feel real and textured. The best videos layer both: a pulsing music bed underneath carefully placed foley effects and ambient room tone. Neither can replace the other.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">The Power of Silence</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        Novice editors fear silence. Experienced ones weaponize it. A beat of near-silence before an impact hit makes the hit feel thunderous. Pulling the music out completely under a speaker's most important sentence makes it land with gravity. Silence is a sound choice, not the absence of one.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">Foley: The Art of Making Things Sound Real</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        Most of what you hear in professional commercials is not the original on-set audio. Foley artists re-record everyday sounds — footsteps, fabric, glass, liquid — in a controlled environment. This gives editors control over texture that on-set audio can never provide, and it's what separates polished work from raw footage.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">Audio Mixing: The Final Step That Changes Everything</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        Even perfect sound design sounds amateur if it's not mixed well. Levels, panning, compression, and EQ work together to create space for each element. The voiceover needs to cut through music. SFX need to punch without overwhelming dialogue. A properly mixed commercial sounds full but never cluttered.
                    </p>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">Practical Tools for Independent Editors</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        You don't need a professional sound stage to achieve great audio. Here's what I use:
                    </p>
                    <ul className="space-y-3 mb-8 text-black/70">
                        <li className="flex gap-3"><span className="text-[#B7FF3C] font-bold">→</span> <span><strong>Epidemic Sound / Artlist</strong> — for high-quality music with licensing included.</span></li>
                        <li className="flex gap-3"><span className="text-[#B7FF3C] font-bold">→</span> <span><strong>Freesound.org</strong> — a massive library of free, community-contributed SFX.</span></li>
                        <li className="flex gap-3"><span className="text-[#B7FF3C] font-bold">→</span> <span><strong>Adobe Audition / DaVinci Fairlight</strong> — for precision mixing and noise reduction.</span></li>
                        <li className="flex gap-3"><span className="text-[#B7FF3C] font-bold">→</span> <span><strong>iZotope RX</strong> — for fixing problematic on-set audio (wind, background noise, room echo).</span></li>
                    </ul>

                    <h2 className="text-3xl font-bold text-black mt-12 mb-4">My Workflow for Commercial Sound</h2>
                    <p className="text-black/70 leading-relaxed mb-6">
                        I always work audio in three passes: First, I lay the music bed and get the rough edit in sync. Second, I add ambience and foley to ground the visual world. Finally, I mix everything together — pulling levels, adding room tone, and fine-tuning the emotional impact of every sound moment.
                    </p>

                    <div className="mt-16 p-8 bg-[#0A0A0A] rounded-[32px] text-white">
                        <p className="text-[#B7FF3C] font-bold text-lg mb-2">💡 Pro Takeaway</p>
                        <p className="text-white/70 leading-relaxed">
                            The next time a client says "it just needs to sound a bit better," treat that as an invitation to completely reimagine the audio layer. Sound design isn't a polish step — it's your opportunity to make good footage feel extraordinary.
                        </p>
                    </div>
                </motion.article>
            </div>
        </main>
    );
}
