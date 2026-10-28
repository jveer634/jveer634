import MadaraCutout from "../assets/madara_cutout.png";
import { BsArrowRight } from "react-icons/bs";
import { smoothScrollTo } from "../utils/smoothScroll";

const Hero = () => {
    const handleScrollClick = (e: React.MouseEvent, target: string) => {
        e.preventDefault();
        smoothScrollTo(target, 1.3);
        window.history.pushState(null, "", target);
    };
    return (
        <section
            id="overview"
            className="relative min-h-screen bg-[#070709] text-white flex flex-col justify-between pt-24 pb-12 px-4 sm:px-10 md:px-16 overflow-hidden scroll-mt-20"
        >
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

                        <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl leading-[0.85] tracking-wide text-white uppercase select-none text-balance">
                            JAY
                            <br />
                            NALAM
                        </h2>

                        <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#ff1744] font-bold">
                            BACKEND & BLOCKCHAIN ENGINEER
                        </div>

                        <p className="text-sm sm:text-base text-zinc-300 font-normal leading-relaxed max-w-sm pt-1">
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
                                onClick={(e) => handleScrollClick(e, "#case-studies")}
                                className="inline-flex items-center gap-3 px-6 py-2.5 rounded-lg bg-[#ff1744] text-black font-mono font-bold text-xs tracking-wider uppercase hover:bg-white active:scale-[0.97] transition-[transform,background-color,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_0_25px_rgba(255,23,68,0.5)] cursor-pointer"
                            >
                                <span>VIEW PROJECTS</span>
                                <BsArrowRight size={14} />
                            </a>
                        </div>
                    </div>

                    {/* Center Column (Span 6): Perfectly Centered Cutout with Hair and Horns fully visible below navbar */}
                    <div className="lg:col-span-6 flex items-center justify-center relative z-10 my-4 lg:my-0">
                        <div className="relative w-full max-w-[420px] sm:max-w-[500px] md:max-w-[580px] lg:max-w-[660px] aspect-square flex items-center justify-center mx-auto">
                            {/* Ambient Susanoo Glow Behind Cutout */}
                            <div className="absolute inset-4 rounded-full bg-[#8b5cf6]/35 blur-3xl opacity-85 pointer-events-none" />
                            <div className="absolute inset-10 rounded-full bg-[#ff1744]/25 blur-2xl opacity-75 pointer-events-none" />

                            {/* Transparent Cutout PNG of Madara - Fully cleared below navbar */}
                            <img
                                src={MadaraCutout}
                                alt="Madara Uchiha with Susanoo"
                                className="w-full h-full object-contain relative z-10 filter contrast-115 drop-shadow-[0_15px_45px_rgba(0,0,0,0.95)] pointer-events-none transform scale-110 sm:scale-110 md:scale-130 lg:scale-125 origin-bottom"
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
                                “Wake up to reality. Wherever there is light in this world, there
                                are also shadows to be found.”
                            </p>
                        </div>

                        {/* Vertical Stacked Stats (Exact from Reference) */}
                        <div className="space-y-5 pt-2">
                            <div>
                                <div className="font-bebas text-5xl sm:text-6xl text-[#ff1744] leading-none tracking-tight tabular-nums">
                                    717K+
                                </div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mt-1">
                                    MATCHING ENGINE OPS/SEC
                                </div>
                            </div>

                            <div>
                                <div className="font-bebas text-5xl sm:text-6xl text-white leading-none tracking-tight tabular-nums">
                                    8,000+
                                </div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400 mt-1">
                                    GO MICROSERVICES TPS
                                </div>
                            </div>

                            <div>
                                <div className="font-bebas text-5xl sm:text-6xl text-[#8b5cf6] leading-none tracking-tight tabular-nums">
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
                    onClick={(e) => handleScrollClick(e, "#case-studies")}
                    className="hover:text-white active:scale-95 transition-[transform,color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] flex items-center gap-1 text-zinc-400 cursor-pointer"
                >
                    <span>SCROLL TO EXPLORE</span>
                    <BsArrowRight size={12} />
                </a>
            </div>
        </section>
    );
};

export default Hero;
