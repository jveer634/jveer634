import MadaraCutout from "../assets/madara_cutout.png";
import Logo from "../assets/logo.svg";
import { BsArrowRight } from "react-icons/bs";

const Hero = () => {
    return (
        <section className="relative min-h-screen bg-[#070709] text-white flex flex-col justify-between pt-24 pb-12 px-6 sm:px-10 md:px-16 overflow-hidden">
            {/* Top Micro-Header Bar (Exact from reference) */}
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6 text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                <div
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center gap-3 cursor-pointer group"
                    title="Back to Top"
                >
                    <img
                        src={Logo}
                        alt="Logo"
                        className="w-6 h-6 rounded-full border border-white/20 group-hover:border-[#ff1744] transition-colors"
                    />
                    <span className="text-zinc-200 font-bold group-hover:text-white transition-colors">
                        SENIOR SYSTEMS & BLOCKCHAIN ENGINEER
                    </span>
                </div>
                <div className="flex items-center gap-2 text-[#ff1744] font-semibold">
                    <span className="w-2 h-2 rounded-full bg-[#ff1744] animate-ping" />
                    <span>AVAILABLE FOR FULL-TIME ROLES</span>
                    <span className="text-zinc-600">✦</span>
                </div>
            </div>

            {/* Main Hero Container */}
            <div className="relative flex-1 flex flex-col justify-center items-center my-auto w-full">
                {/* 1. Giant Background Text: "PORTFOLIO" (Exact from Reference) */}
                <div className="w-full text-center pointer-events-none select-none z-0 overflow-hidden">
                    <h1 className="font-bebas text-[22vw] sm:text-[20vw] md:text-[18vw] text-[#ff1744]/20 tracking-wider uppercase leading-none select-none">
                        PORTFOLIO
                    </h1>
                </div>

                {/* 2. Main Stage: Symmetrical 3 - 6 - 3 Grid for Exact Center Alignment */}
                <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center -mt-[14vw] sm:-mt-[12vw] md:-mt-[11vw]">
                    {/* Left Column (Span 3): Personal Brand */}
                    <div className="lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left z-20 space-y-3">
                        <div className="font-caveat text-3xl sm:text-4xl text-[#ff1744] font-bold">
                            Hello, I'm
                        </div>

                        <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl leading-[0.85] tracking-wide text-white uppercase select-none">
                            JAY
                            <br />
                            NALAM
                        </h2>

                        <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#ff1744] font-bold">
                            BACKEND & BLOCKCHAIN ENGINEER
                        </div>

                        <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed max-w-sm pt-1">
                            I architect high-throughput distributed systems, sub-microsecond Rust
                            matching engines, and robust cross-chain infrastructure.
                        </p>

                        <div className="pt-3">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-mono text-zinc-300">
                                <span className="w-2 h-2 rounded-full bg-[#ff1744]" />
                                <span>BASED IN BENGALURU, INDIA</span>
                            </div>
                        </div>

                        <div className="pt-2">
                            <a
                                href="#case-studies"
                                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-lg bg-[#ff1744] text-black font-mono font-bold text-xs tracking-wider uppercase hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(255,23,68,0.5)]"
                            >
                                <span>VIEW PROJECTS</span>
                                <BsArrowRight size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Center Column (Span 6): 100% Dead-Center Aligned with Letter 'F' in PORTFOLIO */}
                    <div className="lg:col-span-6 flex items-center justify-center relative z-10 my-6 lg:my-0">
                        <div className="relative w-full max-w-[460px] sm:max-w-[560px] md:max-w-[650px] lg:max-w-[740px] aspect-square flex items-center justify-center mx-auto">
                            {/* Ambient Susanoo Glow Behind Cutout */}
                            <div className="absolute inset-4 rounded-full bg-[#8b5cf6]/35 blur-3xl opacity-85 pointer-events-none" />
                            <div className="absolute inset-10 rounded-full bg-[#ff1744]/25 blur-2xl opacity-75 pointer-events-none" />

                            {/* Transparent Cutout PNG of Madara - Dead Centered */}
                            <img
                                src={MadaraCutout}
                                alt="Madara Uchiha with Susanoo"
                                className="w-full h-full object-contain relative z-10 filter contrast-115 drop-shadow-[0_15px_45px_rgba(0,0,0,0.95)] pointer-events-none transform scale-110 sm:scale-120 md:scale-130 lg:scale-135 origin-bottom"
                            />
                        </div>
                    </div>

                    {/* Right Column (Span 3): Floating Pill & Vertical Stat Counter */}
                    <div className="lg:col-span-3 flex flex-col items-center lg:items-end text-center lg:text-right z-20 space-y-6">
                        {/* Floating Micro-Pill */}
                        <div className="p-3.5 rounded-xl bg-white/[0.04] border border-white/10 backdrop-blur-md text-xs text-zinc-300 max-w-[220px] text-left space-y-1">
                            <div className="text-[10px] font-mono text-[#ff1744] font-bold uppercase tracking-wider flex items-center gap-1.5">
                                <span>✦ REALITY OVER ILLUSION</span>
                            </div>
                            <p className="text-[11px] text-zinc-400 font-light leading-snug">
                                "Power is not will. It is the phenomenon of physically making things
                                happen."
                            </p>
                        </div>

                        {/* Vertical Stacked Stats (Exact from Reference) */}
                        <div className="space-y-5 pt-2">
                            <div>
                                <div className="font-bebas text-5xl sm:text-6xl text-[#ff1744] leading-none tracking-tight">
                                    717K+
                                </div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mt-1">
                                    MATCHING ENGINE OPS/SEC
                                </div>
                            </div>

                            <div>
                                <div className="font-bebas text-5xl sm:text-6xl text-white leading-none tracking-tight">
                                    8,000+
                                </div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mt-1">
                                    GO MICROSERVICES TPS
                                </div>
                            </div>

                            <div>
                                <div className="font-bebas text-5xl sm:text-6xl text-[#8b5cf6] leading-none tracking-tight">
                                    9+
                                </div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mt-1">
                                    CROSS-CHAIN PROTOCOLS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Section Divider: Prepares Transition to Selected Projects */}
            <div className="w-full flex items-center justify-between border-t border-white/[0.08] pt-6 mt-8 text-xs font-mono uppercase tracking-widest text-zinc-500">
                <div className="flex items-center gap-2">
                    <span className="text-[#ff1744] font-bold">01 // 03</span>
                    <span className="text-zinc-600">•</span>
                    <span>SYSTEM ARCHITECTURE ARCHIVE</span>
                </div>
                <a
                    href="#case-studies"
                    className="hover:text-white transition-colors flex items-center gap-1 text-zinc-400"
                >
                    <span>SCROLL TO EXPLORE</span>
                    <BsArrowRight size={12} />
                </a>
            </div>
        </section>
    );
};

export default Hero;
