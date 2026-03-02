"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function Lightbox({ isOpen, videoSrc, onClose, title }) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(false);
    const [isBuffering, setIsBuffering] = useState(true);

    // Close on Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) videoRef.current.pause();
            else videoRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8"
                    onClick={onClose}
                >
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute top-6 right-6 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
                        onClick={onClose}
                    >
                        <X size={24} />
                    </motion.button>

                    <motion.div
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        exit={{ scale: 0.9, y: 20, opacity: 0 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="relative w-full max-w-5xl aspect-video rounded-[32px] overflow-hidden bg-black shadow-2xl border border-white/10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <video
                            ref={videoRef}
                            src={videoSrc}
                            className="w-full h-full object-contain"
                            autoPlay
                            playsInline
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            onWaiting={() => setIsBuffering(true)}
                            onPlaying={() => setIsBuffering(false)}
                            onCanPlay={() => setIsBuffering(false)}
                        />

                        {/* Animated Loader Overlay */}
                        <AnimatePresence>
                            {isBuffering && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 bg-black/40 flex items-center justify-center backdrop-blur-sm z-10 pointer-events-none"
                                >
                                    <div className="relative flex items-center justify-center">
                                        {/* Outer spinning ring */}
                                        <motion.div
                                            animate={{ rotate: 360 }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                            className="w-16 h-16 rounded-full border-t-2 border-r-2 border-primary-green opacity-80"
                                        />
                                        {/* Inner pulsing dot */}
                                        <motion.div
                                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                                            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                                            className="absolute w-4 h-4 rounded-full bg-primary-green"
                                        />
                                        {/* Glow effect */}
                                        <div className="absolute w-16 h-16 rounded-full bg-primary-green/20 blur-xl animate-pulse" />
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Custom Controls Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 md:p-10">
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex flex-col">
                                    <span className="text-white/60 text-sm font-medium mb-1">Now Playing</span>
                                    <h3 className="text-white text-xl font-bold">{title}</h3>
                                </div>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={toggleMute}
                                        className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-md transition-all"
                                    >
                                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                                    </button>
                                    <button
                                        onClick={togglePlay}
                                        className="w-16 h-16 rounded-full bg-primary-green flex items-center justify-center text-black hover:scale-110 transition-transform active:scale-95"
                                    >
                                        {isPlaying ? <Pause size={24} fill="currentColor" /> : <Play size={24} fill="currentColor" className="ml-1" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
