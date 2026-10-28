import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BsBriefcase, BsSearch, BsCpu, BsDiagram3, BsShieldCheck } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const ExperienceTimeline = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(
                ".exp-header",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 82%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Staggered 3-column reveal
            gsap.fromTo(
                ".exp-col",
                {
                    opacity: 0,
                    y: 60,
                    scale: 0.97,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.9,
                    stagger: 0.18,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".exp-grid",
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Staggered process steps micro-animation
            gsap.fromTo(
                ".process-step-item",
                { opacity: 0, x: -20 },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".process-steps-container",
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const skills = [
        "Go (Golang)",
        "Rust",
        "Kafka (KRaft)",
        "gRPC with mTLS",
        "Redis",
        "PostgreSQL",
        "TimescaleDB",
        "Ethereum PoS",
        "Solidity",
        "Solana Runtime",
        "Sui Move",
        "Perpetuals",
    ];

    const workProcess = [
        {
            step: "01",
            icon: BsSearch,
            title: "INGRESS & AUTH",
            desc: "WebSocket/REST client intake, RS256 JWT validation, rate limiting, and mTLS termination.",
        },
        {
            step: "02",
            icon: BsDiagram3,
            title: "EVENT JOURNAL",
            desc: "Kafka KRaft sequential immutable event streaming replicating order intents across worker pools.",
        },
        {
            step: "03",
            icon: BsCpu,
            title: "MATCHING ENGINE",
            desc: "Single-core in-memory SBE orderbook execution operating at sub-microsecond median latency.",
        },
        {
            step: "04",
            icon: BsShieldCheck,
            title: "RISK & MARGIN",
            desc: "Real-time perpetuals mark price derivation, dynamic maintenance margin, and automated liquidation.",
        },
        {
            step: "05",
            icon: BsBriefcase,
            title: "SETTLEMENT",
            desc: "Transactional persistence into TimescaleDB & PostgreSQL with high-availability Redis cache.",
        },
    ];

    return (
        <section
            ref={sectionRef}
            id="experience"
            className="py-24 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto bg-[#040406] text-white relative overflow-hidden"
        >
            {/* Ambient Background Light Orbs */}
            <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#ff1744]/10 blur-[130px] pointer-events-none" />
            <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-[#8b5cf6]/10 blur-[130px] pointer-events-none" />

            {/* Section Header */}
            <div className="exp-header flex items-center justify-between gap-4 border-b border-white/[0.08] pb-5 mb-12 relative z-10">
                <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8b5cf6] shadow-[0_0_12px_#8b5cf6]" />
                    <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl tracking-wider uppercase text-white">
                        EXPERIENCE & ARCHITECTURAL PROCESS
                    </h2>
                </div>
                <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-zinc-400">
                    <span className="text-[#ff1744]">✦</span>
                    <span>PRODUCTION VERIFIED SYSTEMS</span>
                </div>
            </div>

            <div className="exp-grid grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative z-10">
                {/* 1. Left Column: Experience & Education (Glassmorphic) */}
                <div className="exp-col lg:col-span-4 p-6 sm:p-8 rounded-3xl border border-white/[0.12] bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] flex flex-col justify-between space-y-6 hover:border-white/20 transition-all duration-300">
                    <div>
                        <div className="flex items-center justify-between mb-5">
                            <h3 className="font-bebas text-2xl sm:text-3xl tracking-wider text-white uppercase">
                                CAREER TRACK RECORD
                            </h3>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-zinc-400">
                                2021 – PRESENT
                            </span>
                        </div>

                        <div className="space-y-5">
                            {/* Role 1 */}
                            <div className="border-b border-white/[0.06] pb-4">
                                <div className="flex items-center justify-between text-xs font-mono">
                                    <span className="text-[#ff1744] font-bold flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff1744] animate-ping" />
                                        2025 – Present
                                    </span>
                                    <span className="text-zinc-500">Bengaluru, IN</span>
                                </div>
                                <div className="text-base font-syne font-bold text-white mt-1">
                                    Senior Blockchain Engineer
                                </div>
                                <div className="text-xs text-zinc-400 mt-0.5">
                                    Blockstack Pvt Ltd • DexPop Centralized Exchange
                                </div>
                                <p className="text-[11px] text-zinc-400 font-light mt-1.5 leading-relaxed">
                                    Leading Go exchange microservices, Kafka transaction
                                    replication, and Rust matching engine integration.
                                </p>
                            </div>

                            {/* Role 2 */}
                            <div className="border-b border-white/[0.06] pb-4">
                                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                                    <span className="text-purple-400 font-semibold">
                                        2024 – 2025
                                    </span>
                                    <span className="text-zinc-500">Kanpur, IN</span>
                                </div>
                                <div className="text-base font-syne font-bold text-white mt-1">
                                    Blockchain Developer
                                </div>
                                <div className="text-xs text-zinc-400 mt-0.5">
                                    ITH Technologies • TDMM DEX Aggregator
                                </div>
                                <p className="text-[11px] text-zinc-400 font-light mt-1.5 leading-relaxed">
                                    Engineered cross-chain routing across Ethereum, Solana, and Sui
                                    Move with audited smart contracts.
                                </p>
                            </div>

                            {/* Degree */}
                            <div>
                                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                                    <span className="text-zinc-400">Graduated 2021</span>
                                    <span className="text-zinc-500">Amalapuram, IN</span>
                                </div>
                                <div className="text-sm font-syne font-bold text-white mt-1">
                                    B.Tech in Computer Science & Engineering
                                </div>
                                <div className="text-xs text-zinc-500">BVC Engineering College</div>
                            </div>
                        </div>
                    </div>

                    {/* Core Skills Glass Chips */}
                    <div className="border-t border-white/[0.06] pt-5">
                        <div className="text-[11px] font-mono uppercase tracking-widest text-[#ff1744] font-bold mb-3 flex items-center justify-between">
                            <span>CORE ARSENAL</span>
                            <span className="text-[10px] text-zinc-500">L4 - PRODUCTION</span>
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:border-[#ff1744]/60 hover:bg-[#ff1744]/10 hover:text-white transition-all cursor-default backdrop-blur-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. Middle Column: Work Process Timeline (Glassmorphic) */}
                <div className="exp-col lg:col-span-5 p-6 sm:p-8 rounded-3xl border border-white/[0.12] bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent backdrop-blur-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] space-y-6 hover:border-white/20 transition-all duration-300 flex flex-col justify-between">
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bebas text-2xl sm:text-3xl tracking-wider text-white uppercase">
                                DISTRIBUTED WORK PROCESS
                            </h3>
                            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-zinc-400">
                                5-STAGE PIPELINE
                            </span>
                        </div>

                        <div className="process-steps-container space-y-4">
                            {workProcess.map((proc, index) => {
                                const Icon = proc.icon;
                                return (
                                    <div
                                        key={proc.step}
                                        className="process-step-item flex items-start gap-4 group"
                                    >
                                        <div className="flex flex-col items-center">
                                            <div className="w-9 h-9 rounded-xl border border-white/20 bg-white/[0.04] group-hover:border-[#ff1744] group-hover:bg-[#ff1744]/15 group-hover:shadow-[0_0_15px_rgba(255,23,68,0.3)] flex items-center justify-center text-xs font-mono font-bold text-[#ff1744] transition-all shrink-0 backdrop-blur-sm">
                                                {proc.step}
                                            </div>
                                            {index < workProcess.length - 1 && (
                                                <div className="w-[1px] h-6 bg-gradient-to-b from-white/20 to-white/5 my-1" />
                                            )}
                                        </div>

                                        <div className="pt-0.5">
                                            <div className="text-xs font-mono uppercase font-bold text-white tracking-wider flex items-center gap-2">
                                                <span>{proc.title}</span>
                                                <Icon
                                                    size={12}
                                                    className="text-zinc-500 group-hover:text-[#ff1744] transition-colors"
                                                />
                                            </div>
                                            <p className="text-[11px] text-zinc-400 font-light leading-relaxed mt-1">
                                                {proc.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs font-mono text-zinc-400">
                        <span className="text-zinc-500">Benchmark Guarantee:</span>
                        <span className="text-zinc-300 font-semibold">
                            Sub-Microsecond Determinism
                        </span>
                    </div>
                </div>

                {/* 3. Right Column: Crimson Crystal Quote Card (Glassmorphic) */}
                <div className="exp-col lg:col-span-3 rounded-3xl bg-gradient-to-br from-[#ff1744]/30 via-[#991b1b]/35 to-[#8b5cf6]/25 border border-[#ff1744]/40 p-8 text-white flex flex-col justify-between shadow-[0_20px_50px_rgba(255,23,68,0.25),inset_0_1px_2px_rgba(255,255,255,0.3)] hover:shadow-[0_25px_60px_rgba(255,23,68,0.35),inset_0_1px_2px_rgba(255,255,255,0.4)] backdrop-blur-3xl relative overflow-hidden group transition-[box-shadow,border-color] duration-250 ease-[cubic-bezier(0.23,1,0.32,1)] min-h-[480px]">
                    {/* Atmospheric sheen glow */}
                    <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-[#ff1744]/30 blur-3xl pointer-events-none group-hover:scale-115 transition-transform duration-250 ease-[cubic-bezier(0.23,1,0.32,1)]" />
                    <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-[#8b5cf6]/30 blur-3xl pointer-events-none" />

                    {/* Quotation Content */}
                    <div className="space-y-5 relative z-10">
                        <div className="font-serif text-6xl text-white/40 leading-none select-none">
                            “
                        </div>
                        <p className="font-syne font-extrabold text-xl sm:text-2xl leading-snug tracking-tight text-white drop-shadow-md">
                            Power is not will. It is the phenomenon of physically making things
                            happen.
                        </p>
                        <p className="text-xs font-light text-red-100/90 leading-relaxed">
                            In high-throughput distributed systems, latency spikes and race
                            conditions yield only to deterministic memory architecture and lock-free
                            mechanical sympathy.
                        </p>
                    </div>

                    {/* Card Footer: Signature & CTA */}
                    <div className="pt-6 border-t border-white/20 space-y-4 relative z-10">
                        <div>
                            <div className="font-caveat text-4xl text-white font-bold tracking-wide drop-shadow-sm">
                                Jay Nalam
                            </div>
                            <div className="text-[10px] font-mono tracking-widest uppercase text-red-200 mt-1 font-semibold">
                                Systems & Blockchain Architect
                            </div>
                        </div>

                        <a
                            href="#contact"
                            className="block text-center py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white text-white hover:text-black font-mono text-[11px] uppercase tracking-widest font-bold border border-white/20 active:scale-[0.97] transition-[transform,background-color,color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] backdrop-blur-md shadow-md cursor-pointer"
                        >
                            LET'S ARCHITECT TOGETHER ✦
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
