"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const posts = [
    {
        title: "10 Tips for Better Video Editing Speed",
        category: "Workflow",
        date: "Oct 24, 2024",
        readTime: "8 min read",
        slug: "/blog/video-editing-speed",
        image: "/blog-thumb-speed.png?v=2",
        excerpt: "Speed in video editing doesn't mean rushing — it means working smarter. After years of professional editing, here are the 10 most impactful habits you can build to cut your editing time in half.",
    },
    {
        title: "The Psychology of Color in Commercials",
        category: "Case Study",
        date: "Oct 18, 2024",
        readTime: "6 min read",
        slug: "/blog/color-psychology",
        image: "/blog-thumb-color.png?v=2",
        excerpt: "Color is never neutral. Every shade in a commercial is a deliberate decision — a psychological cue designed to make you feel, want, or act.",
    },
    {
        title: "Why Sound Design is Half the Video",
        category: "Opinion",
        date: "Oct 12, 2024",
        readTime: "7 min read",
        slug: "/blog/sound-design",
        image: "/blog-thumb-sound.png?v=2",
        excerpt: "Mute any blockbuster and it immediately feels cheap. The same clip with a perfectly designed soundscape transforms into something cinematic.",
    },
];

export function Blog() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (isHovered) return;

        const timer = setInterval(() => {
            paginate(1);
        }, 5000);

        return () => clearInterval(timer);
    }, [currentIndex, isHovered]);

    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1,
        },
        exit: (direction) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0,
            scale: 0.9,
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset, velocity) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection) => {
        setDirection(newDirection);
        let nextIndex = currentIndex + newDirection;
        if (nextIndex >= posts.length) nextIndex = 0;
        if (nextIndex < 0) nextIndex = posts.length - 1;
        setCurrentIndex(nextIndex);
    };

    const currentPost = posts[currentIndex];

    return (
        <section id="blog" className="py-24 bg-surface-medium relative border-t border-black/5 overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="inline-flex items-center gap-2 mb-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm"
                        >
                            <span className="text-sm font-semibold text-black tracking-wide">
                                Insights
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4"
                        >
                            Blog & <span className="text-[#589E00]">Articles</span>
                        </motion.h2>
                    </div>

                    {/* Navigation Arrows */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex gap-4"
                    >
                        <button
                            onClick={() => paginate(-1)}
                            className="w-14 h-14 rounded-full bg-white border border-black/10 flex items-center justify-center text-black hover:bg-black/5 transition-colors shadow-sm focus:outline-none"
                            aria-label="Previous post"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <button
                            onClick={() => paginate(1)}
                            className="w-14 h-14 rounded-full bg-primary-green border border-primary-green flex items-center justify-center text-black hover:brightness-95 transition-all shadow-[0_0_20px_rgba(183,255,60,0.3)] focus:outline-none"
                            aria-label="Next post"
                        >
                            <ArrowRight className="w-6 h-6" />
                        </button>
                    </motion.div>
                </div>

                {/* Animated Carousel Area */}
                <div
                    className="relative h-[550px] w-full max-w-4xl mx-auto md:h-[600px] flex items-center justify-center"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <AnimatePresence initial={false} custom={direction}>
                        <motion.article
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                                scale: { duration: 0.4 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            className="absolute w-full group cursor-pointer flex flex-col md:flex-row gap-8 bg-white rounded-[40px] p-6 md:p-8 border border-black/5 shadow-xl"
                        >
                            {/* Image Side */}
                            <Link href={currentPost.slug} className="w-full md:w-1/2 relative aspect-video md:aspect-square rounded-3xl overflow-hidden shadow-sm shrink-0 block">
                                <Image
                                    src={currentPost.image}
                                    alt={currentPost.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 pointer-events-none" />
                                <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 pointer-events-none">
                                    <ArrowUpRight className="w-6 h-6 text-white" />
                                </div>
                            </Link>

                            {/* Content Side */}
                            <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
                                <div className="flex flex-wrap items-center gap-3">
                                    <span className="px-4 py-1.5 bg-surface-medium border border-black/10 rounded-full text-sm font-bold text-black">
                                        {currentPost.category}
                                    </span>
                                    <span className="text-sm font-semibold text-black/50">
                                        {currentPost.date}
                                    </span>
                                    <span className="hidden sm:inline w-1 h-1 rounded-full bg-black/20" />
                                    <span className="text-sm font-semibold text-black/40">
                                        {currentPost.readTime}
                                    </span>
                                </div>

                                <div>
                                    <Link href={currentPost.slug}>
                                        <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-black mb-4 group-hover:text-[#589E00] transition-colors leading-[1.2]">
                                            {currentPost.title}
                                        </h3>
                                    </Link>
                                    <p className="text-base md:text-lg text-black/60 leading-relaxed max-w-md">
                                        {currentPost.excerpt}
                                    </p>
                                </div>

                                <Link
                                    href={currentPost.slug}
                                    className="inline-flex items-center gap-2 mt-2 w-fit font-bold text-black border-b-2 border-black/10 pb-1 hover:border-primary-green hover:text-primary-green transition-all"
                                >
                                    Read Full Article <ArrowUpRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </motion.article>
                    </AnimatePresence>
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center gap-3 mt-12 md:mt-16">
                    {posts.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => {
                                setDirection(i > currentIndex ? 1 : -1);
                                setCurrentIndex(i);
                            }}
                            className={cn(
                                "h-2 rounded-full transition-all duration-500",
                                i === currentIndex ? "w-8 bg-primary-green" : "w-2 bg-black/10 hover:bg-black/20"
                            )}
                            aria-label={`Go to slide ${i + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
