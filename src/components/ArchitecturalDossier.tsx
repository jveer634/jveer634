import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    BsSearch,
    BsDiagram3,
    BsCpu,
    BsShieldCheck,
    BsGithub,
    BsLinkedin,
    BsBook,
    BsBoxArrowUpRight,
    BsEnvelope,
    BsGeoAlt,
    BsGlobe,
    BsBriefcase,
    BsMortarboard,
    BsCopy,
    BsCheck,
} from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const ArchitecturalDossier = () => {
    const containerRef = useRef<HTMLElement>(null);
    const [copied, setCopied] = useState(false);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText("jveernalam@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Smooth reveal of the dossier container on scroll
            gsap.fromTo(
                ".dossier-frame",
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.0,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Staggered reveal of featured work cards
            gsap.fromTo(
                ".work-card",
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: ".work-grid",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const processSteps = [
        {
            num: "01",
            icon: BsSearch,
            title: "RESEARCH & SPEC",
            desc: "Formulating deterministic protocols, zero-alloc buffer layouts, and lock-free thread topologies.",
        },
        {
            num: "02",
            icon: BsDiagram3,
            title: "EVENT LOGGING",
            desc: "Kafka KRaft sequential immutable event journals replicating order intents across worker pools.",
        },
        {
            num: "03",
            icon: BsCpu,
            title: "MATCHING CORE",
            desc: "Single-core memory pre-allocated orderbooks executing at sub-microsecond median latency.",
        },
        {
            num: "04",
            icon: BsShieldCheck,
            title: "SETTLEMENT",
            desc: "Zero-trust mTLS microservices and audited multi-chain atomic swaps across EVM and Move.",
        },
    ];

    const featuredWork = [
        {
            num: "01",
            title: "MATCHER TRADING ENGINE",
            category: "RUST / SBE ZERO-COPY / WAL",
            kpi: "717K OPS/SEC • p50: 0.47 µs",
            sub: "Low-Latency FinTech",
            link: "https://github.com/jveer634/matcher",
            gradient: "from-red-950/40 via-[#0e0e14] to-black",
            badgeColor: "#ff1744",
        },
        {
            num: "02",
            title: "DEXPOP CEX PLATFORM",
            category: "GO / KAFKA / GRPC / PERPETUALS",
            kpi: "8,000 ORDERS/SEC • mTLS",
            sub: "Exchange Microservices",
            link: "https://dexpopdev.chainxchange.io/",
            gradient: "from-purple-950/40 via-[#0e0e14] to-black",
            badgeColor: "#8b5cf6",
        },
        {
            num: "03",
            title: "TDMM & ARC BRIDGE",
            category: "CROSS-CHAIN / RUST / SUI MOVE",
            kpi: "10,000+ TXNS/DAY • 9 DEXs",
            sub: "Cross-Chain Liquidity",
            link: undefined,
            gradient: "from-blue-950/40 via-[#0e0e14] to-black",
            badgeColor: "#38bdf8",
        },
        {
            num: "04",
            title: "PACIFIC DEFI PROTOCOL",
            category: "SOLIDITY / SMART CONTRACTS / EVM",
            kpi: "99.9% UPTIME • 0 EXPLOITS",
            sub: "DEX Aggregator & AMM",
            link: undefined,
            gradient: "from-emerald-950/40 via-[#0e0e14] to-black",
            badgeColor: "#10b981",
        },
    ];

    return (
        <section
            ref={containerRef}
            id="case-studies"
            className="w-full px-4 sm:px-10 md:px-16 pb-20 bg-[#070709] text-white scroll-mt-20"
        >
            {/* Master Framed Dossier Container: Flush with Hero Section Margins, Hard Pointed 90-degree Corners */}
            <div className="dossier-frame w-full rounded-none border border-white/[0.12] bg-[#09090e]/95 backdrop-blur-3xl overflow-hidden shadow-[0_30px_90px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.15)] relative">
                {/* Ambient Subtle Red/Purple Glow */}
                <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-[#ff1744]/5 blur-[120px] pointer-events-none" />
                <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-[#8b5cf6]/5 blur-[120px] pointer-events-none" />

                {/* =========================================================================
                    ROW 1: ABOUT ME (LEFT) & ENGINEERING PROCESS (RIGHT)
                    ========================================================================= */}
                <div
                    id="technology"
                    className="grid grid-cols-1 lg:grid-cols-12 items-stretch relative z-10 scroll-mt-24"
                >
                    {/* Left: About Me (Cols 1-5) */}
                    <div className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
                        <div>
                            {/* Availability Badge - Hard Pointed */}
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-between gap-4 px-4 py-2 rounded-none bg-white/[0.04] border border-white/10 hover:border-[#ff1744]/50 transition-colors group mb-6"
                            >
                                <div>
                                    <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">
                                        AVAILABLE FOR
                                    </div>
                                    <div className="text-xs font-mono font-bold text-white tracking-wide group-hover:text-[#ff1744] transition-colors">
                                        FULL-TIME ROLES & ARCHITECTURE
                                    </div>
                                </div>
                                <span className="text-[#ff1744] font-bold text-sm group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                                    ↗
                                </span>
                            </a>

                            {/* Section Title */}
                            <h3 className="text-lg sm:text-xl font-bold font-syne uppercase tracking-wider text-white mb-3 flex items-center gap-2">
                                <span>ABOUT ME</span>
                                <span className="text-[#ff1744]">—</span>
                            </h3>

                            <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                                Senior Backend & Blockchain Engineer specializing in sub-microsecond
                                low-latency systems, zero-copy deterministic memory architectures,
                                and production-scale cross-chain infrastructure.
                            </p>
                        </div>

                        {/* 3 Horizontal Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/[0.08]">
                            <div>
                                <div className="font-bebas text-3xl sm:text-4xl text-[#ff1744] leading-none">
                                    717K+
                                </div>
                                <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider mt-1 leading-tight">
                                    PEAK MATCHING OPS/SEC
                                </div>
                            </div>
                            <div>
                                <div className="font-bebas text-3xl sm:text-4xl text-white leading-none">
                                    8,000+
                                </div>
                                <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider mt-1 leading-tight">
                                    PROD EXCHANGE TPS
                                </div>
                            </div>
                            <div>
                                <div className="font-bebas text-3xl sm:text-4xl text-[#8b5cf6] leading-none">
                                    04+
                                </div>
                                <div className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider mt-1 leading-tight">
                                    YEARS PROD SYSTEMS
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Engineering Process (Cols 6-12) */}
                    <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 lg:border-l lg:border-white/[0.08] flex flex-col justify-between space-y-6">
                        <h3 className="text-lg sm:text-xl font-bold font-syne uppercase tracking-wider text-white flex items-center gap-2">
                            <span>MY ENGINEERING PROCESS</span>
                            <span className="text-[#ff1744]">—</span>
                        </h3>

                        {/* 4 Horizontal Step Blocks - Hard Pointed */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {processSteps.map((step) => {
                                const Icon = step.icon;
                                return (
                                    <div
                                        key={step.num}
                                        className="p-3.5 rounded-none bg-white/[0.02] border border-white/[0.06] hover:border-[#ff1744]/40 hover:bg-white/[0.04] transition-all space-y-2.5 group"
                                    >
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-mono text-zinc-500 font-bold">
                                                {step.num}
                                            </span>
                                            <div className="w-8 h-8 rounded-none bg-white/[0.05] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-[#ff1744] group-hover:border-[#ff1744]/40 transition-colors">
                                                <Icon size={14} />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="text-xs font-mono font-bold text-white tracking-wide uppercase">
                                                {step.title}
                                            </div>
                                            <p className="text-[10px] text-zinc-400 font-light leading-relaxed mt-1">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* =========================================================================
                    ROW 2: FEATURED WORK (4 CARDS IN A ROW - HARD POINTED)
                    ========================================================================= */}
                <div className="border-t border-white/[0.08] p-6 sm:p-8 md:p-10 space-y-6 relative z-10">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg sm:text-xl font-bold font-syne uppercase tracking-wider text-white flex items-center gap-2">
                            <span>FEATURED WORK</span>
                            <span className="text-[#ff1744]">—</span>
                        </h3>
                        <a
                            href="https://github.com/jveer634?tab=repositories"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-white flex items-center gap-1.5 transition-colors"
                        >
                            <span>VIEW ALL REPOSITORIES</span>
                            <BsBoxArrowUpRight size={11} />
                        </a>
                    </div>

                    {/* 4 Project Cards Grid - Hard Pointed */}
                    <div className="work-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
                        {featuredWork.map((work) => {
                            const CardContent = (
                                <>
                                    {/* Top Graphic / Telemetry Preview - Hard Pointed */}
                                    <div
                                        className={`h-48 w-full rounded-none bg-gradient-to-b ${work.gradient} border border-white/[0.08] p-4 flex flex-col justify-between relative overflow-hidden mb-4 ${
                                            work.link ? "group-hover:border-white/20" : ""
                                        } transition-colors`}
                                    >
                                        <div className="flex items-center justify-between relative z-10">
                                            <span className="font-bebas text-2xl text-white/40 leading-none">
                                                {work.num}
                                            </span>
                                            <span
                                                className="text-[9px] font-mono px-2 py-0.5 rounded-none bg-white/[0.06] border border-white/10 text-zinc-300"
                                                style={{ color: work.badgeColor }}
                                            >
                                                {work.sub}
                                            </span>
                                        </div>

                                        {/* Center KPI readout */}
                                        <div className="relative z-10">
                                            <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">
                                                VERIFIED KPI
                                            </div>
                                            <div className="text-xs font-mono font-bold text-white mt-0.5">
                                                {work.kpi}
                                            </div>
                                        </div>

                                        {/* Ambient card corner glow */}
                                        <div
                                            className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-xl opacity-30 pointer-events-none"
                                            style={{ backgroundColor: work.badgeColor }}
                                        />
                                    </div>

                                    {/* Title & Category */}
                                    <div>
                                        <div
                                            className={`text-sm font-bold font-syne text-white uppercase tracking-wide flex items-center justify-between ${
                                                work.link
                                                    ? "group-hover:text-[#ff1744] transition-colors"
                                                    : ""
                                            }`}
                                        >
                                            <span>{work.title}</span>
                                            {work.link ? (
                                                <span className="text-zinc-500 group-hover:text-[#ff1744] text-xs transition-colors">
                                                    ↗
                                                </span>
                                            ) : (
                                                <span className="text-[9px] font-mono text-zinc-600 uppercase tracking-widest">
                                                    CLOSED SOURCE
                                                </span>
                                            )}
                                        </div>
                                        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider mt-1">
                                            {work.category}
                                        </div>
                                    </div>
                                </>
                            );

                            return work.link ? (
                                <a
                                    key={work.num}
                                    href={work.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="work-card rounded-none border border-white/[0.08] bg-white/[0.02] hover:border-white/25 hover:bg-white/[0.04] p-4 flex flex-col justify-between transition-all duration-300 group shadow-md cursor-pointer"
                                >
                                    {CardContent}
                                </a>
                            ) : (
                                <div
                                    key={work.num}
                                    className="work-card rounded-none border border-white/[0.05] bg-white/[0.015] p-4 flex flex-col justify-between opacity-85 cursor-default shadow-md select-none"
                                >
                                    {CardContent}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* =========================================================================
                    ROW 3: EXPERIENCE & EDUCATION (LEFT) & LET'S WORK TOGETHER (RIGHT)
                    ========================================================================= */}
                <div className="border-t border-white/[0.08] grid grid-cols-1 lg:grid-cols-12 items-stretch relative z-10">
                    {/* Left: Career Experience & Education (Cols 1-5) */}
                    <div
                        id="experience"
                        className="lg:col-span-5 p-6 sm:p-8 md:p-10 flex flex-col justify-start space-y-6 scroll-mt-24"
                    >
                        <div>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-lg sm:text-xl font-bold font-syne uppercase tracking-wider text-white flex items-center gap-2">
                                    <span>EXPERIENCE & EDUCATION</span>
                                    <span className="text-[#ff1744]">—</span>
                                </h3>
                                <span className="text-[9px] font-mono uppercase px-2 py-0.5 rounded-none bg-white/[0.05] border border-white/10 text-zinc-400">
                                    2021 – PRESENT
                                </span>
                            </div>
                            <p className="text-xs text-zinc-400 font-light">
                                Proven production engineering pedigree in high-throughput FinTech
                                and Web3 protocols.
                            </p>
                        </div>

                        {/* Experience Timeline Items - Hard Pointed */}
                        <div className="space-y-4 pt-1">
                            {/* Role 1 */}
                            <div className="p-3.5 rounded-none bg-white/[0.02] border border-white/[0.06] hover:border-[#ff1744]/40 transition-colors space-y-1">
                                <div className="flex items-center justify-between text-xs font-mono">
                                    <span className="text-[#ff1744] font-bold flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-none bg-[#ff1744] animate-ping" />
                                        2025 – Present
                                    </span>
                                    <span className="text-zinc-500 text-[10px]">Bengaluru, IN</span>
                                </div>
                                <div className="text-sm font-syne font-bold text-white flex items-center gap-2">
                                    <BsBriefcase size={12} className="text-[#ff1744]" />
                                    <span>Senior Blockchain Engineer</span>
                                </div>
                                <div className="text-xs text-zinc-400 font-mono">
                                    Blockstack Pvt Ltd • DexPop Centralized Exchange
                                </div>
                                <p className="text-[11px] text-zinc-400 font-light leading-relaxed pt-0.5">
                                    Leading Go exchange microservices, Kafka KRaft log replication,
                                    and Rust matching engine integration.
                                </p>
                            </div>

                            {/* Role 2 */}
                            <div className="p-3.5 rounded-none bg-white/[0.02] border border-white/[0.06] hover:border-purple-500/40 transition-colors space-y-1">
                                <div className="flex items-center justify-between text-xs font-mono">
                                    <span className="text-purple-400 font-bold">2024 – 2025</span>
                                    <span className="text-zinc-500 text-[10px]">Kanpur, IN</span>
                                </div>
                                <div className="text-sm font-syne font-bold text-white flex items-center gap-2">
                                    <BsBriefcase size={12} className="text-purple-400" />
                                    <span>Blockchain Developer</span>
                                </div>
                                <div className="text-xs text-zinc-400 font-mono">
                                    ITH Technologies • TDMM DEX Aggregator
                                </div>
                                <p className="text-[11px] text-zinc-400 font-light leading-relaxed pt-0.5">
                                    Engineered cross-chain routing across Ethereum, Solana, and Sui
                                    Move with audited smart contracts.
                                </p>
                            </div>

                            {/* Degree */}
                            <div className="p-3.5 rounded-none bg-white/[0.02] border border-white/[0.06] hover:border-zinc-700 transition-colors space-y-1">
                                <div className="flex items-center justify-between text-xs font-mono">
                                    <span className="text-zinc-400">Graduated 2021</span>
                                    <span className="text-zinc-500 text-[10px]">
                                        Amalapuram, IN
                                    </span>
                                </div>
                                <div className="text-sm font-syne font-bold text-white flex items-center gap-2">
                                    <BsMortarboard size={13} className="text-zinc-400" />
                                    <span>B.Tech in Computer Science & Engineering</span>
                                </div>
                                <div className="text-xs text-zinc-500 font-mono">
                                    BVC Engineering College
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Let's Work Together & Production Toolchain (Cols 6-12) */}
                    <div
                        id="contact"
                        className="lg:col-span-7 p-6 sm:p-8 md:p-10 lg:border-l lg:border-white/[0.08] flex flex-col justify-start space-y-6 scroll-mt-24"
                    >
                        <div>
                            <h3 className="text-lg sm:text-xl font-bold font-syne uppercase tracking-wider text-white mb-2 flex items-center gap-2">
                                <span>LET'S WORK TOGETHER</span>
                                <span className="text-[#ff1744]">—</span>
                            </h3>
                            <p className="text-xs text-zinc-400 font-light">
                                Available for Senior Backend, Distributed Systems, and Blockchain
                                engineering roles worldwide.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                            {/* Direct Communication Channels */}
                            <div className="space-y-3.5">
                                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-500 font-bold">
                                    DIRECT COORDINATES
                                </div>
                                <div className="space-y-2.5 text-xs font-mono text-zinc-300">
                                    <a
                                        href="mailto:jveernalam@gmail.com"
                                        className="flex items-center gap-2 hover:text-[#ff1744] transition-colors p-2.5 rounded-none bg-white/[0.02] border border-white/[0.06]"
                                    >
                                        <BsEnvelope size={14} className="text-[#ff1744] shrink-0" />
                                        <span className="truncate">jveernalam@gmail.com</span>
                                    </a>
                                    <div className="flex items-center gap-2 text-zinc-400 p-2.5 rounded-none bg-white/[0.02] border border-white/[0.06]">
                                        <BsGeoAlt size={14} className="text-[#8b5cf6] shrink-0" />
                                        <span className="truncate">Bengaluru, India</span>
                                    </div>
                                    <a
                                        href="https://blog.jnalam.dev"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 hover:text-white transition-colors p-2.5 rounded-none bg-white/[0.02] border border-white/[0.06]"
                                    >
                                        <BsGlobe size={14} className="text-cyan-400 shrink-0" />
                                        <span className="truncate">https://blog.jnalam.dev</span>
                                    </a>
                                </div>

                                {/* Interactive Copy Email Button */}
                                <button
                                    onClick={handleCopyEmail}
                                    className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-none bg-white/[0.04] hover:bg-white/10 border border-white/10 hover:border-white/30 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white transition-all cursor-pointer"
                                >
                                    {copied ? (
                                        <>
                                            <BsCheck size={16} className="text-emerald-400" />
                                            <span className="text-emerald-400 font-bold">
                                                COPIED TO CLIPBOARD!
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <BsCopy size={12} className="text-zinc-400" />
                                            <span>COPY EMAIL ADDRESS</span>
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Production Arsenal & Action Trigger */}
                            <div className="p-4 rounded-none bg-white/[0.02] border border-white/[0.06] space-y-4">
                                <div className="text-[10px] font-mono uppercase tracking-widest text-[#ff1744] font-bold flex items-center justify-between">
                                    <span>PRODUCTION TOOLCHAIN</span>
                                    <span className="text-zinc-500">L4 ARCHITECTURE</span>
                                </div>

                                <div className="flex flex-wrap gap-1.5">
                                    {[
                                        "Rust",
                                        "Go",
                                        "Kafka (KRaft)",
                                        "gRPC / mTLS",
                                        "Zero-Alloc SBE",
                                        "Solidity",
                                        "Solana (SVM)",
                                        "Sui Move",
                                        "TimescaleDB",
                                        "Redis",
                                    ].map((tech) => (
                                        <span
                                            key={tech}
                                            className="text-[10px] font-mono px-2 py-1 rounded-none bg-white/[0.04] border border-white/[0.08] text-zinc-300 hover:border-[#ff1744]/50 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href="mailto:jveernalam@gmail.com"
                                    className="w-full py-2.5 px-4 rounded-none bg-[#ff1744] hover:bg-white text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_0_20px_rgba(255,23,68,0.3)] mt-2"
                                >
                                    <span>DISCUSS SYSTEM ARCHITECTURE</span>
                                    <span>↗</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =========================================================================
                    ROW 4: SUB-FOOTER INSIDE CONTAINER - HARD POINTED
                    ========================================================================= */}
                <div className="border-t border-white/[0.08] px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400 relative z-10">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-3 text-zinc-400">
                            <a
                                href="https://www.linkedin.com/in/jveernalam/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-none bg-white/[0.04] border border-white/10 hover:border-[#ff1744] hover:text-[#ff1744] flex items-center justify-center transition-colors"
                                title="LinkedIn"
                            >
                                <BsLinkedin size={14} />
                            </a>
                            <a
                                href="https://www.github.com/jveer634/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-none bg-white/[0.04] border border-white/10 hover:border-[#8b5cf6] hover:text-[#8b5cf6] flex items-center justify-center transition-colors"
                                title="GitHub"
                            >
                                <BsGithub size={14} />
                            </a>
                            <a
                                href="https://blog.jnalam.dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-8 h-8 rounded-none bg-white/[0.04] border border-white/10 hover:border-white hover:text-white flex items-center justify-center transition-colors"
                                title="Web3 Engineering Blog"
                            >
                                <BsBook size={14} />
                            </a>
                        </div>

                        <a
                            href="https://github.com/jveer634"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-none bg-white/[0.04] border border-white/10 hover:border-[#ff1744] text-zinc-300 hover:text-white transition-colors"
                        >
                            <span>VISIT GITHUB</span>
                            <span className="text-[#ff1744]">↗</span>
                        </a>
                    </div>

                    <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                        <span>THANK YOU FOR VISITING!</span>
                        <span className="text-[#ff1744]">✦</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ArchitecturalDossier;
