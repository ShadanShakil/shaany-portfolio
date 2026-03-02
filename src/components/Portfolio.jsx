"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Search } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Lightbox } from "./Lightbox";

const categories = ["All", "Commercials", "Socials/Shorts", "Motion Graphics"];

// Placeholder data representing the drive contents
const projects = [
    { id: 1, title: "Cash Cow Series", category: "Commercials", videoSrc: "/assets/cash-cow.mp4", thumbnail: "/cash-cow-thumb.png?v=2" },
    { id: 2, title: "Gaming Mastery", category: "Socials/Shorts", videoSrc: "/assets/gaming-sample-2.mp4", thumbnail: "/gaming-thumb.png?v=2" },
    { id: 3, title: "Digital Edge", category: "Commercials", videoSrc: "/assets/os-digital-edge-.mp4", thumbnail: "/digital-edge-thumb.png?v=2" },
    { id: 4, title: "SFX Design Final", category: "Commercials", videoSrc: "/assets/complete-sfx.mp4", thumbnail: "/sfx-thumb.png?v=2" },
    { id: 5, title: "Social Content v2", category: "Socials/Shorts", videoSrc: "/assets/social-2.mp4", thumbnail: "/social-thumb.png?v=2" },
    { id: 6, title: "Motion Finale", category: "Motion Graphics", videoSrc: "/assets/finale-2.mp4", thumbnail: "/digital-edge-thumb.png?v=2" },
    { id: 7, title: "Dark Mode UI", category: "Motion Graphics", videoSrc: "/assets/darkmode-2.mp4", thumbnail: "/cash-cow-thumb.png?v=2" },
    { id: 8, title: "Creative Captions", category: "Socials/Shorts", videoSrc: "/assets/captions-1.mp4", thumbnail: "/social-thumb.png?v=2" },
];

function ProjectCard({ project, onClick }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="group relative flex flex-col gap-4 cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            {/* Media Container */}
            <div className="relative aspect-[16/9] rounded-[32px] overflow-hidden bg-surface-medium border border-black/5 shadow-sm">


                <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    className={cn(
                        "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                        isHovered ? "opacity-0" : "opacity-100"
                    )}
                />

                <video
                    src={project.videoSrc}
                    className={cn(
                        "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
                        isHovered ? "opacity-100" : "opacity-0"
                    )}
                    muted
                    loop
                    playsInline
                    autoPlay={false}
                    ref={(el) => {
                        if (el) {
                            if (isHovered) el.play().catch(() => { });
                            else {
                                el.pause();
                                el.currentTime = 0;
                            }
                        }
                    }}
                />

                {/* Fallback Static State / Overlay */}
                <div className={cn(
                    "absolute inset-0 flex items-center justify-center bg-black/5 transition-opacity duration-500",
                    isHovered ? "opacity-0" : "opacity-100"
                )}>
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                        <ArrowUpRight className="w-8 h-8 text-black/40" />
                    </div>
                </div>
            </div>

            {/* Project Meta */}
            <div className="flex items-center justify-between px-2">
                <div>
                    <h3 className="text-xl font-bold text-black mb-1 group-hover:text-[#589E00] transition-colors">{project.title}</h3>
                    <div className="text-sm font-medium text-black/50">
                        {project.category}
                    </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center text-black group-hover:bg-primary-green group-hover:border-primary-green transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                </div>
            </div>
        </motion.div>
    );
}

export function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [selectedProject, setSelectedProject] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [visibleCount, setVisibleCount] = useState(4);

    const filteredProjects = projects.filter((project) => {
        const matchesCategory = activeCategory === "All" || project.category === activeCategory;
        const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const displayedProjects = filteredProjects.slice(0, visibleCount);

    return (
        <section id="work" className="py-24 bg-background relative border-t border-black/5">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center justify-center text-center space-y-4 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="inline-flex items-center gap-2 mb-2 px-4 py-2 rounded-full bg-white border border-black/5 shadow-sm"
                    >
                        <span className="text-sm font-semibold text-black tracking-wide">
                            Selected Works
                        </span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4"
                    >
                        Service & <span className="text-[#589E00]">Portfolio</span>
                    </motion.h2>
                </div>

                {/* Filters and Search Bar Container */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0"
                    >
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={cn(
                                    "px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm border",
                                    activeCategory === category
                                        ? "bg-primary-green text-black border-primary-green"
                                        : "bg-white border-black/5 text-black/60 hover:text-black hover:border-black/20"
                                )}
                            >
                                {category}
                            </button>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative w-full md:w-80"
                    >
                        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-black/40" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search Here"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-white border border-black/10 rounded-full py-3.5 pl-12 pr-4 text-sm font-medium text-black placeholder:text-black/40 focus:outline-none focus:ring-2 focus:ring-primary-green focus:border-transparent shadow-sm transition-all"
                        />
                    </motion.div>
                </div>

                {/* Project Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {displayedProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onClick={() => setSelectedProject(project)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {visibleCount < filteredProjects.length && (
                    <div className="mt-16 flex justify-center">
                        <button
                            onClick={() => setVisibleCount(prev => prev + 2)}
                            className="px-8 py-4 rounded-full bg-white border border-black/10 text-black font-semibold hover:bg-zinc-50 transition-colors shadow-sm"
                        >
                            Load More Projects
                        </button>
                    </div>
                )}

                <Lightbox
                    isOpen={!!selectedProject}
                    videoSrc={selectedProject?.videoSrc}
                    title={selectedProject?.title}
                    onClose={() => setSelectedProject(null)}
                />
            </div>
        </section>
    );
}
