import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
    BsGithub,
    BsLinkedin,
    BsBook,
    BsEnvelope,
    BsCheck2,
    BsCopy,
    BsArrowRight,
    BsGeoAlt,
    BsArrowLeft,
} from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import AnimeMeCutout from "../assets/anime_me_cutout.png";

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("contact@jnalam.dev");
        setCopiedEmail(true);
        toast.success("Email copied to clipboard!");
        setTimeout(() => setCopiedEmail(false), 2000);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!form.current) return;

        toast
            .promise(
                emailjs.sendForm(
                    import.meta.env.VITE_SERVICE_ID || "",
                    import.meta.env.VITE_TEMPLATE_ID || "",
                    form.current,
                    import.meta.env.VITE_PUBLIC_KEY || ""
                ),
                {
                    pending: "Sending message...",
                    success: "Message successfully sent to Jay Nalam!",
                    error: "Unable to dispatch message right now. Please email directly.",
                }
            )
            .then(() => {
                form.current?.reset();
            })
            .catch((error) => console.log(error));
    };

    return (
        <section
            id="contact"
            className="min-h-screen pt-20 pb-12 px-4 sm:px-8 md:px-12 xl:px-16 w-full bg-[#070709] text-white relative overflow-hidden flex flex-col justify-between"
        >
            {/* Subtle Ambient Red Glow (No Purple) */}
            <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] rounded-full bg-[#ff1744]/5 blur-[150px] pointer-events-none" />

            {/* Mobile View: True Centered Fullscreen Watermark */}
            <div className="lg:hidden fixed inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0 overflow-hidden select-none">
                <img
                    src={AnimeMeCutout}
                    alt=""
                    aria-hidden="true"
                    className="w-auto h-[90vh] max-w-[95vw] object-contain object-center opacity-50 filter contrast-125 brightness-105"
                />
            </div>

            <div className="relative z-10 w-full flex-1 flex flex-col justify-center">
                {/* Top Return Link */}
                <div className="mb-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-[#ff1744] active:scale-95 transition-[transform,color] duration-150 group cursor-pointer"
                    >
                        <BsArrowLeft
                            size={14}
                            className="group-hover:-translate-x-1 transition-transform duration-150"
                        />
                        <span>RETURN TO OVERVIEW</span>
                    </Link>
                </div>

                {/* Main 50 / 50 Fluid Stage Matching User Screenshot Ratio */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-14 items-center">
                    {/* Left Column (Desktop): Free-Standing Zoomed Cutout Matching Screenshot Ratio */}
                    <div className="hidden lg:flex lg:col-span-5 xl:col-span-6 flex-col items-center justify-end self-stretch relative min-h-[75vh] overflow-hidden">
                        {/* Subtle Warm Amber/Red Halo behind Head (No Purple) */}
                        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] rounded-full bg-[#ff1744]/10 blur-[120px] pointer-events-none" />

                        {/* Free-Standing Zoomed Cutout Image - Anchored Bottom, Proportional to Screenshot */}
                        <img
                            src={AnimeMeCutout}
                            alt="Jay Nalam"
                            className="w-auto h-[100vh] xl:h-[100vh] max-h-[880px] object-contain object-bottom relative z-10 filter contrast-110 brightness-105 drop-shadow-[0_20px_50px_rgba(0,0,0,0.95)] pointer-events-none -mb-[14%] lg:-mb-[15%] transform scale-120 xl:scale-130 origin-bottom"
                        />
                    </div>

                    {/* Right Column (Desktop): Header, Direct Coordinates Bar & Form */}
                    <div className="lg:col-span-7 xl:col-span-6 flex flex-col justify-center space-y-4 relative z-10">
                        {/* Header Section */}
                        <div className="space-y-2.5">
                            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ff1744] font-bold">
                                <span>✦ DIRECT COMMS</span>
                                <span className="text-zinc-600">•</span>
                                <span className="text-zinc-400 font-normal">ENCRYPTED INBOX</span>
                            </div>

                            <h1 className="font-bebas text-5xl sm:text-6xl md:text-7xl tracking-wide uppercase leading-none text-white text-balance">
                                LET'S WORK <span className="text-[#ff1744]">TOGETHER</span>
                            </h1>

                            <p className="text-zinc-300 font-normal text-sm sm:text-base leading-relaxed max-w-2xl">
                                Available for Senior Backend, Distributed Systems, and Blockchain
                                Core architecture roles{" "}
                                <span className="text-[#ff1744] font-mono font-medium">
                                    (Bengaluru or Remote only)
                                </span>
                                .
                            </p>
                        </div>

                        {/* Direct Coordinates & Social Connect Bar (Moved to Right Side) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
                            {/* Email with Interactive Copy */}
                            <div className="flex items-center justify-between p-3 rounded-none bg-white/[0.03] border border-white/[0.08] hover:border-white/20 transition-colors">
                                <a
                                    href="mailto:contact@jnalam.dev"
                                    className="flex items-center gap-2.5 text-zinc-200 hover:text-[#ff1744] transition-colors truncate"
                                >
                                    <BsEnvelope size={14} className="text-[#ff1744] shrink-0" />
                                    <span className="truncate">contact@jnalam.dev</span>
                                </a>
                                <button
                                    type="button"
                                    onClick={handleCopyEmail}
                                    className="px-2.5 py-1 rounded-none bg-white/[0.06] hover:bg-[#ff1744] hover:text-black active:scale-90 text-[10px] uppercase font-bold tracking-wider transition-[transform,background-color,color] duration-120 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer shrink-0 ml-2"
                                    title="Copy email address"
                                >
                                    {copiedEmail ? (
                                        <span className="text-emerald-400 font-bold flex items-center gap-1">
                                            <BsCheck2 size={12} /> COPIED
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1">
                                            <BsCopy size={11} /> COPY
                                        </span>
                                    )}
                                </button>
                            </div>

                            {/* Location & Social Connections */}
                            <div className="flex items-center justify-between p-3 rounded-none bg-white/[0.03] border border-white/[0.08] text-zinc-300">
                                <div className="flex items-center gap-2 text-xs">
                                    <BsGeoAlt size={14} className="text-[#8b5cf6] shrink-0" />
                                    <span>Bengaluru, India</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <a
                                        href="https://www.linkedin.com/in/jveernalam/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-400 hover:text-[#ff1744] active:scale-90 transition-[transform,color] duration-150 p-1"
                                        title="LinkedIn"
                                    >
                                        <BsLinkedin size={15} />
                                    </a>
                                    <a
                                        href="https://www.github.com/jveer634/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-400 hover:text-[#8b5cf6] active:scale-90 transition-[transform,color] duration-150 p-1"
                                        title="GitHub"
                                    >
                                        <BsGithub size={15} />
                                    </a>
                                    <a
                                        href="https://blog.jnalam.dev"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-zinc-400 hover:text-white active:scale-90 transition-[transform,color] duration-150 p-1"
                                        title="Web3 Blog"
                                    >
                                        <BsBook size={15} />
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form Card without Heavy Box Borders */}
                        <div className="p-6 sm:p-8 bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative">
                            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label
                                            htmlFor="user_name"
                                            className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block cursor-pointer"
                                        >
                                            YOUR NAME *
                                        </label>
                                        <input
                                            id="user_name"
                                            type="text"
                                            name="user_name"
                                            autoComplete="name"
                                            required
                                            placeholder="Satoshi Nakamoto"
                                            className="w-full px-4 py-3 rounded-none bg-black/60 border border-white/10 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-[#ff1744] focus:shadow-[0_0_15px_rgba(255,23,68,0.25)] hover:border-white/20 transition-[border-color,box-shadow] duration-150 ease-out"
                                        />
                                    </div>

                                    <div className="space-y-1.5">
                                        <label
                                            htmlFor="user_email"
                                            className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block cursor-pointer"
                                        >
                                            YOUR EMAIL *
                                        </label>
                                        <input
                                            id="user_email"
                                            type="email"
                                            name="user_email"
                                            autoComplete="email"
                                            spellCheck={false}
                                            required
                                            placeholder="satoshi@bitcoin.org"
                                            className="w-full px-4 py-3 rounded-none bg-black/60 border border-white/10 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-[#ff1744] focus:shadow-[0_0_15px_rgba(255,23,68,0.25)] hover:border-white/20 transition-[border-color,box-shadow] duration-150 ease-out"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label
                                        htmlFor="subject"
                                        className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block cursor-pointer"
                                    >
                                        SUBJECT / ARCHITECTURAL ROLE
                                    </label>
                                    <input
                                        id="subject"
                                        type="text"
                                        name="subject"
                                        placeholder="Senior Systems Engineer / Low-Latency Engine"
                                        className="w-full px-4 py-3 rounded-none bg-black/60 border border-white/10 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-[#ff1744] focus:shadow-[0_0_15px_rgba(255,23,68,0.25)] hover:border-white/20 transition-[border-color,box-shadow] duration-150 ease-out"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label
                                        htmlFor="message"
                                        className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 block cursor-pointer"
                                    >
                                        SPECIFICATION / MESSAGE *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        placeholder="Describe your system throughput goals, consensus challenges, or infrastructure requirements…"
                                        className="w-full px-4 py-3 rounded-none bg-black/60 border border-white/10 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-[#ff1744] focus:shadow-[0_0_15px_rgba(255,23,68,0.25)] hover:border-white/20 transition-[border-color,box-shadow] duration-150 ease-out resize-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-3.5 px-6 rounded-none bg-[#ff1744] hover:bg-white active:scale-[0.98] text-black font-mono font-bold text-xs tracking-widest uppercase transition-[transform,background-color,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_0_25px_rgba(255,23,68,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                                >
                                    <span>SEND</span>
                                    <BsArrowRight size={14} />
                                </button>
                            </form>

                            {/* Telemetry Footer with AA contrast compliant text-zinc-400 */}
                            <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest pt-4 mt-4 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-2">
                                <span>RESPONSE LATENCY: &lt; 24 HOURS</span>
                                <span className="text-[#ff1744]">✦ ENCRYPTED IN TRANSIT</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
