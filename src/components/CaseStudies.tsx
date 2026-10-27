import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    BsArrowRight,
    BsGithub,
    BsCheckCircleFill,
    BsLightningCharge,
    BsLayers,
    BsGlobe,
    BsChevronDown,
    BsShieldCheck,
    BsCpu,
} from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const CaseStudies = () => {
    const [expandedProject, setExpandedProject] = useState<number | null>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(
                ".case-studies-header",
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

            // Staggered Cards Entrance Animation
            gsap.fromTo(
                ".project-glass-card",
                {
                    opacity: 0,
                    y: 60,
                    scale: 0.96,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.9,
                    stagger: 0.18,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".project-glass-grid",
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const projects = [
        {
            num: "01",
            title: "MATCHER",
            subtitle: "SUB-MICROSECOND RUST MATCHING ENGINE",
            badge: "Low-Latency Systems",
            kpi: "717,000 OPS/SEC",
            kpiSub: "p50: 0.47 µs • p99: 1.82 µs",
            desc: "Single-core financial order matching engine built with Simple Binary Encoding (SBE) zero-copy deserialization and sequential Write-Ahead Log (WAL).",
            details: [
                "Zero-copy serialization using SBE flat buffers eliminating serde overhead.",
                "Lock-free single-core execution model eliminating thread contention and cache thrashing.",
                "Sequential append-only WAL ensuring 100% deterministic state recovery across restarts.",
                "Automated Criterion stress benchmarks achieving 54MB peak memory footprint (RSS).",
            ],
            tech: ["Rust", "SBE", "WAL", "Criterion", "Zero-Alloc"],
            github: "https://github.com/jveer634/matcher",
            icon: BsLightningCharge,
            accentColor: "#ff1744",
            glowClass: "from-[#ff1744]/20 via-[#ff1744]/5 to-transparent",
            borderHoverClass: "group-hover:border-[#ff1744]/70",
            shadowHoverClass:
                "group-hover:shadow-[0_20px_50px_rgba(255,23,68,0.22),inset_0_1px_2px_rgba(255,255,255,0.25)]",
            telemetry: {
                type: "latency",
                primary: "0.47 µs",
                secondary: "54MB RSS",
                tags: ["ZERO-COPY", "APPEND-WAL"],
            },
        },
        {
            num: "02",
            title: "DEXPOP",
            subtitle: "GO EXCHANGE MICROSERVICES PLATFORM",
            badge: "Production FinTech",
            kpi: "8,000 ORDERS/SEC",
            kpiSub: "Kafka KRaft • Zero-Trust mTLS",
            desc: "Enterprise centralized crypto exchange microservices communicating over zero-trust mutual TLS gRPC, Kafka event log replication, and Redis cache.",
            details: [
                "Architected Go microservices (Gateway, Matching, Order, Market, Transaction).",
                "Internal PKI issuing mutual TLS certificates for zero-trust service-to-service communication.",
                "Kafka KRaft event stream replicating transaction log across decoupled workers.",
                "Engineered perpetual futures: mark price derivation, dynamic margin, and liquidations.",
            ],
            tech: ["Go", "Kafka (KRaft)", "gRPC / mTLS", "Redis", "Postgres", "Perpetuals"],
            icon: BsLayers,
            accentColor: "#8b5cf6",
            glowClass: "from-[#8b5cf6]/20 via-[#8b5cf6]/5 to-transparent",
            borderHoverClass: "group-hover:border-[#8b5cf6]/70",
            shadowHoverClass:
                "group-hover:shadow-[0_20px_50px_rgba(139,92,246,0.22),inset_0_1px_2px_rgba(255,255,255,0.25)]",
            telemetry: {
                type: "microservices",
                primary: "mTLS gRPC",
                secondary: "Kafka KRaft",
                tags: ["ZERO-TRUST", "PERPETUALS"],
            },
        },
        {
            num: "03",
            title: "TDMM & ARC BRIDGE",
            subtitle: "CROSS-CHAIN DEX AGGREGATOR & RELAYER",
            badge: "Multi-Chain Liquidity",
            kpi: "10,000+ TXNS/DAY",
            kpiSub: "ETH ⟷ SOL ⟷ SUI • 9 DEXs",
            desc: "Cross-chain liquidity aggregator and relayer routing trades across 9+ decentralized exchanges on Ethereum, Solana, and Sui Move.",
            details: [
                "Abstracted chain-specific RPC differences to deliver normalized trade routing.",
                "Cross-chain relayer validating multi-sig state proofs across heterogeneous ecosystems.",
                "Engineered algorithmic trading execution mechanisms minimizing slippage.",
                "Deployed smart contracts audited and battle-tested across 99.9% uptime.",
            ],
            tech: ["Rust", "Solidity", "Solana", "Sui Move", "NestJS", "Python"],
            icon: BsGlobe,
            accentColor: "#38bdf8",
            glowClass: "from-[#38bdf8]/20 via-[#38bdf8]/5 to-transparent",
            borderHoverClass: "group-hover:border-[#38bdf8]/70",
            shadowHoverClass:
                "group-hover:shadow-[0_20px_50px_rgba(56,189,248,0.22),inset_0_1px_2px_rgba(255,255,255,0.25)]",
            telemetry: {
                type: "bridge",
                primary: "3 Chains",
                secondary: "Multi-Sig Relayer",
                tags: ["9 DEXs", "SLIPPAGE GUARD"],
            },
        },
    ];

    return (
        <section
            ref={sectionRef}
            id="case-studies"
            className="py-24 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto bg-[#040406] text-white relative overflow-hidden"
        >
            {/* Ambient Background Light Orbs for Glassmorphic Depth */}
            <div className="absolute top-1/4 left-1/12 w-96 h-96 rounded-full bg-[#ff1744]/10 blur-[140px] pointer-events-none" />
            <div className="absolute top-1/3 right-1/12 w-96 h-96 rounded-full bg-[#8b5cf6]/10 blur-[140px] pointer-events-none" />
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-64 rounded-full bg-blue-500/5 blur-[160px] pointer-events-none" />

            {/* Header matching Rayhan Aditya Reference */}
            <div className="case-studies-header flex items-center justify-between gap-4 border-b border-white/[0.08] pb-5 mb-12 relative z-10">
                <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff1744] shadow-[0_0_12px_#ff1744]" />
                    <h2 className="font-bebas text-3xl sm:text-4xl md:text-5xl tracking-wider uppercase text-white">
                        SELECTED PROJECTS
                    </h2>
                </div>
                <a
                    href="https://github.com/jveer634?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-[#ff1744] flex items-center gap-2 transition-colors py-1.5 px-3 rounded-lg border border-white/[0.06] hover:border-[#ff1744]/40 bg-white/[0.02] backdrop-blur-md"
                >
                    <span>VIEW ALL REPOSITORIES</span>
                    <BsArrowRight size={13} />
                </a>
            </div>

            {/* 3 Horizontal Glassmorphic Cards Grid */}
            <div className="project-glass-grid grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                {projects.map((proj, idx) => {
                    const Icon = proj.icon;
                    const isExpanded = expandedProject === idx;

                    return (
                        <div
                            key={proj.num}
                            className={`project-glass-card rounded-3xl border border-white/[0.12] bg-gradient-to-b from-white/[0.07] via-white/[0.02] to-transparent backdrop-blur-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] group ${proj.borderHoverClass} ${proj.shadowHoverClass} hover:-translate-y-2`}
                        >
                            {/* Card Content Top */}
                            <div>
                                {/* Frosted Glass Micro-Telemetry Viewport */}
                                <div className="h-48 sm:h-52 w-full rounded-2xl bg-[#09090f]/75 border border-white/[0.08] relative overflow-hidden p-5 flex flex-col justify-between mb-6 group-hover:border-white/20 transition-all backdrop-blur-md">
                                    {/* Ambient card inner glow */}
                                    <div
                                        className={`absolute -top-10 -right-10 w-36 h-36 rounded-full bg-gradient-to-b ${proj.glowClass} blur-2xl pointer-events-none`}
                                    />

                                    {/* Top Row: Badge & Status */}
                                    <div className="flex items-center justify-between relative z-10">
                                        <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-md bg-white/[0.06] border border-white/10 text-zinc-300 backdrop-blur-sm flex items-center gap-1.5">
                                            <span
                                                className="w-1.5 h-1.5 rounded-full animate-pulse"
                                                style={{ backgroundColor: proj.accentColor }}
                                            />
                                            {proj.badge}
                                        </span>
                                        <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-zinc-400 group-hover:text-white transition-colors">
                                            <Icon size={16} />
                                        </div>
                                    </div>

                                    {/* Center Graphic: Dynamic Telemetry Display */}
                                    <div className="relative z-10 py-1">
                                        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-1.5 mb-1">
                                            <span>TELEMETRY VERIFIED</span>
                                            <span className="text-zinc-600">•</span>
                                            <span className="text-zinc-300 font-bold">
                                                PRODUCTION GRADE
                                            </span>
                                        </div>
                                        <div className="font-mono text-xl sm:text-2xl font-black text-white tracking-tight flex items-baseline gap-2">
                                            <span>{proj.kpi}</span>
                                        </div>
                                        <div className="text-xs font-mono text-zinc-400 mt-1 flex items-center gap-2">
                                            <span
                                                className="font-semibold"
                                                style={{ color: proj.accentColor }}
                                            >
                                                {proj.kpiSub}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Bottom telemetry pill bar */}
                                    <div className="flex items-center gap-1.5 relative z-10 border-t border-white/[0.06] pt-2.5">
                                        {proj.telemetry.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="text-[9px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06] text-zinc-400"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                        <span className="text-[9px] font-mono text-zinc-500 ml-auto">
                                            {proj.telemetry.primary}
                                        </span>
                                    </div>
                                </div>

                                {/* Project Identity & Number */}
                                <div className="flex items-baseline gap-3 mb-2.5">
                                    <span
                                        className="font-bebas text-4xl sm:text-5xl leading-none select-none transition-transform group-hover:scale-105 duration-300"
                                        style={{ color: proj.accentColor }}
                                    >
                                        {proj.num}
                                    </span>
                                    <div>
                                        <h3 className="font-bebas text-2xl sm:text-3xl text-white tracking-wide leading-none group-hover:text-white transition-colors">
                                            {proj.title}
                                        </h3>
                                        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mt-1">
                                            {proj.subtitle}
                                        </div>
                                    </div>
                                </div>

                                <p className="text-xs text-zinc-300 font-light leading-relaxed mt-3">
                                    {proj.desc}
                                </p>
                            </div>

                            {/* Card Bottom: Expandable Architecture Drawer & Actions */}
                            <div className="pt-5 mt-5 border-t border-white/[0.08] space-y-3">
                                <button
                                    onClick={() => setExpandedProject(isExpanded ? null : idx)}
                                    className="w-full flex items-center justify-between text-xs font-mono text-zinc-400 hover:text-white transition-colors py-1.5 px-2 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/[0.05]"
                                >
                                    <span className="flex items-center gap-1.5">
                                        <BsCpu size={12} className="text-zinc-500" />
                                        <span>
                                            {isExpanded
                                                ? "Close Architecture Specs"
                                                : "View Architecture Specs"}
                                        </span>
                                    </span>
                                    <BsChevronDown
                                        size={12}
                                        className={`transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {isExpanded && (
                                    <div className="space-y-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-md animate-fadeIn">
                                        {proj.details.map((detail, dIdx) => (
                                            <div
                                                key={dIdx}
                                                className="flex items-start gap-2 text-[11px] text-zinc-300 font-light leading-relaxed"
                                            >
                                                <BsCheckCircleFill
                                                    size={11}
                                                    className="shrink-0 mt-0.5"
                                                    style={{ color: proj.accentColor }}
                                                />
                                                <span>{detail}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <div className="flex items-center justify-between pt-1">
                                    <div className="flex flex-wrap gap-1.5">
                                        {proj.tech.slice(0, 3).map((t) => (
                                            <span
                                                key={t}
                                                className="text-[9px] font-mono px-2 py-0.5 rounded-md bg-white/[0.04] border border-white/[0.08] text-zinc-400 group-hover:text-zinc-200 transition-colors"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {proj.github ? (
                                        <a
                                            href={proj.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-9 h-9 rounded-xl bg-white/[0.05] border border-white/10 hover:bg-[#ff1744] hover:text-black hover:border-[#ff1744] flex items-center justify-center text-zinc-300 transition-all shadow-sm"
                                            title="View GitHub Repository"
                                        >
                                            <BsGithub size={14} />
                                        </a>
                                    ) : (
                                        <div className="w-9 h-9 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center text-zinc-500">
                                            <BsShieldCheck size={14} />
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default CaseStudies;
