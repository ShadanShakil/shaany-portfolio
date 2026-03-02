"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function Contact() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 },
        },
    };

    const [formState, setFormState] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("idle"); // idle, submitting, success

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: "48e0fc7f-db8c-453f-8e3b-1ec31aeea006",
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                    subject: `New Portfolio Message from ${formState.name}`,
                    from_name: "Portfolio Contact Form"
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus("success");
                setFormState({ name: "", email: "", message: "" });
            } else {
                console.error("Form submission failed", result);
                setStatus("idle");
                alert("Sorry, something went wrong. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting form", error);
            setStatus("idle");
            alert("Sorry, something went wrong. Please try again later.");
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    };

    return (
        <section id="contact" className="py-24 bg-[#0A0A0A] relative border-t border-white/5 overflow-hidden">
            {/* Dark Green Radial Gradient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary-green/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto z-10 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

                    {/* Left Side: Branding & Socials */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex flex-col gap-8 justify-center"
                    >
                        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1]">
                            Follow Us
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-white/60 text-lg leading-relaxed max-w-md">
                            Stay connected and inspired! Follow us on our social media platforms to keep up with the latest design trends, project updates, and behind-the-scenes insights.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex gap-4 items-center mt-4">
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-primary-green text-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-primary-green text-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                                <span className="font-extrabold text-xl font-serif">Bē</span>
                            </a>
                            <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-primary-green text-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm8.441-11.411c-.347-1.428-1.527-2.451-2.924-2.585l-1.353-.131a4.015 4.015 0 00-.737.039c-.58.125-1.12.355-1.597.676-.516.347-1.135.836-1.536 1.4-1.17 1.644-1.928 3.513-3.132 5.093l-.155.203c-.22.288-.475.545-.758.761-.318.243-.68.411-1.07.498-.56.126-1.15-.027-1.56-.445-.37-.38-.56-.93-.41-1.45.16-.54.51-1.02.93-1.4.52-.46 1.13-.81 1.76-1.07a8.623 8.623 0 011.69-.47 4.194 4.194 0 011.16-.01c.71.07 1.33.4 1.83.87l.21.2c.28.28.53.59.73.93.63 1.05 1.48 2.37 2.45 3.32.74.72 1.63 1.25 2.62 1.54a5.57 5.57 0 002.39.06c.92-.16 1.78-.65 2.44-1.34 1.16-1.21 1.74-2.88 1.54-4.57z" /></svg>
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-14 h-14 rounded-full bg-primary-green text-black flex items-center justify-center hover:scale-110 transition-transform shadow-lg">
                                <Linkedin className="w-6 h-6 fill-current" />
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Side: Contact Form Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="w-full max-w-lg mx-auto lg:ml-auto"
                    >
                        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-[40px] p-8 md:p-12 shadow-2xl">
                            <h3 className="text-3xl font-bold text-white mb-2">Let's Work Together!</h3>
                            <p className="text-white/60 mb-8">We're here to help you</p>

                            <form className="space-y-6" onSubmit={handleSubmit}>
                                <AnimatePresence mode="wait">
                                    {status === "success" ? (
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            className="flex flex-col items-center justify-center py-12 text-center"
                                        >
                                            <div className="w-20 h-20 rounded-full bg-primary-green/20 flex items-center justify-center mb-6">
                                                <CheckCircle2 size={40} className="text-primary-green" />
                                            </div>
                                            <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                                            <p className="text-white/60">I'll get back to you within 24 hours.</p>
                                            <button
                                                type="button"
                                                onClick={() => setStatus("idle")}
                                                className="mt-8 text-primary-green font-bold hover:underline"
                                            >
                                                Send another message
                                            </button>
                                        </motion.div>
                                    ) : (
                                        <motion.div key="form" className="space-y-6">
                                            <div>
                                                <input
                                                    type="text"
                                                    required
                                                    placeholder="Name"
                                                    value={formState.name}
                                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                                    className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-green transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <input
                                                    type="email"
                                                    required
                                                    placeholder="Email Address"
                                                    value={formState.email}
                                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                                    className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-green transition-colors"
                                                />
                                            </div>
                                            <div>
                                                <textarea
                                                    required
                                                    placeholder="Message"
                                                    rows={4}
                                                    value={formState.message}
                                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                                    className="w-full bg-transparent border-b border-white/20 pb-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary-green transition-colors resize-none"
                                                ></textarea>
                                            </div>

                                            <div className="pt-4">
                                                <button
                                                    type="submit"
                                                    disabled={status === "submitting"}
                                                    className="w-full py-4 rounded-full bg-primary-green text-black font-bold text-lg hover:bg-primary-green-hover transition-colors shadow-[0_0_30px_rgba(183,255,60,0.3)] flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {status === "submitting" ? (
                                                        <div className="w-6 h-6 border-2 border-black/20 border-t-black rounded-full animate-spin" />
                                                    ) : (
                                                        <>
                                                            Send Message
                                                            <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </form>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/40">
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
                    </div>
                    <p>© {new Date().getFullYear()} Shany Abbas, All right reserved</p>
                </div>
            </div>
        </section>
    );
}
