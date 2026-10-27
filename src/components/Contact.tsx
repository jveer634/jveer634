import React, { useRef, useState } from "react";
import {
    BsGithub,
    BsLinkedin,
    BsBook,
    BsEnvelope,
    BsCheck2,
    BsCopy,
    BsArrowRight,
} from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);
    const [copiedEmail, setCopiedEmail] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("jveer.nalam@gmail.com");
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
            className="py-24 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto bg-[#070709] text-white"
        >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left Column: Let's Work Together info (Exact from Reference) */}
                <div className="lg:col-span-5 space-y-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#ff1744] font-bold">
                            <span>✦ GET IN TOUCH</span>
                        </div>

                        <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl tracking-wide uppercase leading-none text-white">
                            LET'S WORK
                            <br />
                            <span className="text-[#ff1744]">TOGETHER</span> ✦
                        </h2>

                        <p className="text-zinc-400 font-light text-xs sm:text-sm leading-relaxed max-w-md">
                            I'm currently open for new opportunities and engineering challenges in
                            Low-Latency Trading, Distributed Systems, and Blockchain Core
                            Engineering. Let's build something deterministic that scales.
                        </p>

                        <div className="pt-2">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-[#ff1744]/30 text-xs font-mono text-[#ff1744]">
                                <span className="w-2 h-2 rounded-full bg-[#ff1744] animate-ping" />
                                <span>AVAILABLE FOR FULL-TIME ROLES</span>
                            </div>
                        </div>
                    </div>

                    {/* Direct Contact Details list matching reference */}
                    <div className="space-y-4 pt-2">
                        {/* Email with copy */}
                        <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#0e0e14] border border-white/[0.08] max-w-md">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-[#ff1744]/10 text-[#ff1744] flex items-center justify-center">
                                    <BsEnvelope size={15} />
                                </div>
                                <span className="text-xs sm:text-sm font-mono text-zinc-200">
                                    jveer.nalam@gmail.com
                                </span>
                            </div>
                            <button
                                onClick={handleCopyEmail}
                                className="px-2.5 py-1 rounded-md bg-white/[0.05] hover:bg-[#ff1744] hover:text-black text-[11px] font-mono text-zinc-300 transition-colors flex items-center gap-1"
                            >
                                {copiedEmail ? (
                                    <>
                                        <BsCheck2 size={12} className="text-emerald-400" />
                                        <span>Copied</span>
                                    </>
                                ) : (
                                    <>
                                        <BsCopy size={11} />
                                        <span>Copy</span>
                                    </>
                                )}
                            </button>
                        </div>

                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/jveernalam/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3.5 rounded-xl bg-[#0e0e14] border border-white/[0.08] hover:border-[#ff1744]/50 max-w-md transition-colors group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/[0.04] text-zinc-400 group-hover:text-[#ff1744] flex items-center justify-center transition-colors">
                                    <BsLinkedin size={15} />
                                </div>
                                <span className="text-xs sm:text-sm font-mono text-zinc-300 group-hover:text-white">
                                    linkedin.com/in/jveernalam
                                </span>
                            </div>
                            <BsArrowRight
                                size={13}
                                className="text-zinc-500 group-hover:text-white transition-colors"
                            />
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://www.github.com/jveer634/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3.5 rounded-xl bg-[#0e0e14] border border-white/[0.08] hover:border-[#ff1744]/50 max-w-md transition-colors group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/[0.04] text-zinc-400 group-hover:text-[#ff1744] flex items-center justify-center transition-colors">
                                    <BsGithub size={15} />
                                </div>
                                <span className="text-xs sm:text-sm font-mono text-zinc-300 group-hover:text-white">
                                    github.com/jveer634
                                </span>
                            </div>
                            <BsArrowRight
                                size={13}
                                className="text-zinc-500 group-hover:text-white transition-colors"
                            />
                        </a>

                        {/* Blog */}
                        <a
                            href="https://blog.jnalam.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-3.5 rounded-xl bg-[#0e0e14] border border-white/[0.08] hover:border-[#ff1744]/50 max-w-md transition-colors group"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-white/[0.04] text-zinc-400 group-hover:text-[#ff1744] flex items-center justify-center transition-colors">
                                    <BsBook size={15} />
                                </div>
                                <span className="text-xs sm:text-sm font-mono text-zinc-300 group-hover:text-white">
                                    blog.jnalam.dev
                                </span>
                            </div>
                            <BsArrowRight
                                size={13}
                                className="text-zinc-500 group-hover:text-white transition-colors"
                            />
                        </a>
                    </div>
                </div>

                {/* Right Column: Functional Message Form */}
                <div className="lg:col-span-7 p-6 sm:p-10 rounded-2xl bg-[#0e0e14] border border-white/[0.08] shadow-2xl space-y-6">
                    <div className="border-b border-white/[0.06] pb-4 flex items-center justify-between">
                        <h3 className="font-bebas text-2xl tracking-wide uppercase text-white">
                            SEND A DIRECT MESSAGE
                        </h3>
                        <span className="text-[10px] font-mono uppercase text-[#ff1744] font-bold">
                            Direct to Jay
                        </span>
                    </div>

                    <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                                    Your Name *
                                </label>
                                <input
                                    type="text"
                                    name="user_name"
                                    required
                                    placeholder="Rayhan Aditya"
                                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-[#ff1744] transition-colors"
                                />
                            </div>

                            <div className="space-y-1.5">
                                <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                                    Your Email *
                                </label>
                                <input
                                    type="email"
                                    name="user_email"
                                    required
                                    placeholder="name@company.com"
                                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-[#ff1744] transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                                Subject / Role
                            </label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Senior Systems Engineer / Collaboration"
                                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-[#ff1744] transition-colors"
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-[11px] font-mono uppercase tracking-wider text-zinc-400 block">
                                Message *
                            </label>
                            <textarea
                                name="message"
                                rows={4}
                                required
                                placeholder="Tell me about the system, team, or challenge you're solving..."
                                className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-xs font-mono text-white placeholder-zinc-600 focus:outline-none focus:border-[#ff1744] transition-colors resize-none"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-[#ff1744] hover:bg-white text-black font-mono font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_25px_rgba(255,23,68,0.4)] flex items-center justify-center gap-2"
                        >
                            <span>DISPATCH MESSAGE</span>
                            <BsArrowRight size={14} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
