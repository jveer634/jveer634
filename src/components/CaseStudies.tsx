import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
    BsArrowRight,
    BsGithub,
    BsLightningCharge,
    BsLayers,
    BsGlobe,
    BsShieldCheck,
    BsCpu,
    BsTerminal,
    BsActivity,
    BsBoxArrowUpRight,
} from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

// Percentile benchmark dataset for the interactive live chart
const latencyPercentiles = [
    { label: "p50", latency: "0.47 µs", ops: "717k ops/s", alloc: "0 bytes", x: 10, y: 80 },
    { label: "p75", latency: "0.65 µs", ops: "680k ops/s", alloc: "0 bytes", x: 30, y: 72 },
    { label: "p90", latency: "0.92 µs", ops: "640k ops/s", alloc: "0 bytes", x: 50, y: 60 },
    { label: "p99", latency: "1.82 µs", ops: "590k ops/s", alloc: "0 bytes", x: 75, y: 35 },
    { label: "p99.9", latency: "4.10 µs", ops: "510k ops/s", alloc: "0 bytes", x: 95, y: 15 },
];

const CaseStudies = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [activePercentile, setActivePercentile] = useState(latencyPercentiles[0]);
    const [activeChain, setActiveChain] = useState<"eth" | "sol" | "sui">("sol");

    // 3D Card Tilt Effect handler
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const tiltX = (y / (rect.height / 2)) * -4;
        const tiltY = (x / (rect.width / 2)) * 4;

        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(-4px)`;
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const card = e.currentTarget;
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)`;
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo(
                ".bento-header",
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

            // Staggered 3D Bento Grid Cards Entrance
            gsap.fromTo(
                ".bento-cell",
                {
                    opacity: 0,
                    y: 70,
                    scale: 0.95,
                },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.9,
                    stagger: 0.12,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".bento-grid-container",
                        start: "top 80%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Chart Line SVG Stroke Animation
            gsap.fromTo(
                ".chart-stroke-path",
                { strokeDashoffset: 400, strokeDasharray: 400 },
                {
                    strokeDashoffset: 0,
                    duration: 1.6,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: ".chart-stroke-path",
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="case-studies"
            className="py-24 px-4 sm:px-8 md:px-12 lg:px-16 max-w-7xl mx-auto bg-[#040406] text-white relative overflow-hidden"
        >
            {/* Ambient Background Light Orbs */}
            <div className="absolute top-1/4 left-1/12 w-[500px] h-[500px] rounded-full bg-[#ff1744]/10 blur-[150px] pointer-events-none" />
            <div className="absolute top-1/2 right-1/12 w-[500px] h-[500px] rounded-full bg-[#8b5cf6]/10 blur-[150px] pointer-events-none" />
            <div className="absolute bottom-10 left-1/3 w-[600px] h-[300px] rounded-full bg-cyan-500/5 blur-[160px] pointer-events-none" />

            {/* Section Header */}
            <div className="bento-header flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/[0.08] pb-6 mb-12 relative z-10">
                <div>
                    <div className="flex items-center gap-2.5 mb-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#ff1744] shadow-[0_0_12px_#ff1744] animate-pulse" />
                        <span className="text-xs font-mono uppercase tracking-[0.25rem] text-[#ff1744]">
                            SYSTEM ARCHITECTURE BENTO
                        </span>
                    </div>
                    <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wider uppercase text-white">
                        ENGINEERING CASE STUDIES
                    </h2>
                </div>
                <div className="flex items-center gap-4">
                    <a
                        href="https://github.com/jveer634?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono uppercase tracking-widest text-zinc-300 hover:text-white flex items-center gap-2 py-2 px-4 rounded-xl border border-white/[0.12] hover:border-[#ff1744]/60 bg-white/[0.03] hover:bg-white/[0.07] backdrop-blur-xl transition-all shadow-sm"
                    >
                        <span>VIEW ALL REPOSITORIES</span>
                        <BsArrowRight size={13} className="text-[#ff1744]" />
                    </a>
                </div>
            </div>

            {/* =========================================================================
                ASYMMETRICAL 3D BENTO GRID CONTAINER
                ========================================================================= */}
            <div className="bento-grid-container grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">
                {/* ---------------------------------------------------------------------
                    BENTO CELL 1: FLAGSHIP HERO (Cols 1-8)
                    MATCHER: Sub-Microsecond Rust Order Matching Engine + Live Chart
                    --------------------------------------------------------------------- */}
                <div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="bento-cell lg:col-span-8 rounded-3xl border border-white/[0.12] bg-gradient-to-br from-white/[0.08] via-zinc-950/60 to-black/80 backdrop-blur-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_20px_40px_rgba(0,0,0,0.6)] group hover:border-[#ff1744]/60 hover:shadow-[0_25px_60px_rgba(255,23,68,0.2),inset_0_1px_2px_rgba(255,255,255,0.3)]"
                >
                    {/* Floating Badges */}
                    <div className="absolute top-5 right-6 flex items-center gap-2 z-20 pointer-events-none">
                        <div className="animate-float px-3 py-1 rounded-full bg-[#ff1744]/15 border border-[#ff1744]/40 text-[#ff1744] text-[10px] font-mono font-bold tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_rgba(255,23,68,0.3)]">
                            ✦ 717K OPS/SEC
                        </div>
                        <div className="animate-float-reverse px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-zinc-300 text-[10px] font-mono tracking-wider uppercase backdrop-blur-md">
                            ZERO-ALLOC
                        </div>
                    </div>

                    <div>
                        {/* Top Identification */}
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-[#ff1744]/15 border border-[#ff1744]/30 flex items-center justify-center text-[#ff1744]">
                                <BsLightningCharge size={18} />
                            </div>
                            <div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                                    SYS.01 // ULTRA LOW-LATENCY SYSTEMS
                                </div>
                                <h3 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide leading-none mt-0.5">
                                    matcher: Sub-Microsecond Rust Financial Trading Engine
                                </h3>
                            </div>
                        </div>

                        <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed mb-6 max-w-2xl">
                            Single-core in-memory limit orderbook utilizing Simple Binary Encoding
                            (SBE) zero-copy deserialization and sequential Write-Ahead Log (WAL)
                            memory pre-allocation.
                        </p>

                        {/* Interactive Live Latency Distribution Chart */}
                        <div className="rounded-2xl border border-white/[0.08] bg-[#08080d]/80 p-5 backdrop-blur-xl mb-6 relative overflow-hidden">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-white/[0.06]">
                                <div className="flex items-center gap-2 text-xs font-mono">
                                    <BsActivity size={14} className="text-[#ff1744]" />
                                    <span className="font-bold text-white uppercase tracking-wider">
                                        Empirical Latency Profile
                                    </span>
                                    <span className="text-[10px] text-zinc-500">
                                        (Criterion Benchmarks)
                                    </span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    {latencyPercentiles.map((p) => (
                                        <button
                                            key={p.label}
                                            onClick={() => setActivePercentile(p)}
                                            className={`text-[10px] font-mono px-2 py-0.5 rounded transition-all ${
                                                activePercentile.label === p.label
                                                    ? "bg-[#ff1744] text-white font-bold shadow-[0_0_10px_#ff1744]"
                                                    : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08]"
                                            }`}
                                        >
                                            {p.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Live SVG Chart */}
                            <div className="h-32 w-full relative">
                                <svg
                                    className="w-full h-full overflow-visible"
                                    viewBox="0 0 100 100"
                                    preserveAspectRatio="none"
                                >
                                    <defs>
                                        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                                            <stop
                                                offset="0%"
                                                stopColor="#ff1744"
                                                stopOpacity="0.3"
                                            />
                                            <stop
                                                offset="100%"
                                                stopColor="#ff1744"
                                                stopOpacity="0.0"
                                            />
                                        </linearGradient>
                                    </defs>
                                    {/* Area fill */}
                                    <path
                                        d="M 0 100 L 10 80 L 30 72 L 50 60 L 75 35 L 95 15 L 100 10 L 100 100 Z"
                                        fill="url(#chartGrad)"
                                    />
                                    {/* Line curve */}
                                    <path
                                        className="chart-stroke-path"
                                        d="M 0 85 Q 10 80, 30 72 T 50 60 T 75 35 T 100 10"
                                        fill="none"
                                        stroke="#ff1744"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                    />
                                    {/* Percentile Markers */}
                                    {latencyPercentiles.map((p) => (
                                        <circle
                                            key={p.label}
                                            cx={p.x}
                                            cy={p.y}
                                            r={activePercentile.label === p.label ? "3.5" : "2"}
                                            className={`transition-all duration-300 cursor-pointer ${
                                                activePercentile.label === p.label
                                                    ? "fill-white stroke-[#ff1744] stroke-[2px]"
                                                    : "fill-[#ff1744] hover:fill-white"
                                            }`}
                                            onClick={() => setActivePercentile(p)}
                                        />
                                    ))}
                                </svg>
                            </div>

                            {/* Active Metric Reading HUD */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-white/[0.06] mt-2">
                                <div>
                                    <div className="text-[9px] font-mono text-zinc-500 uppercase">
                                        Percentile
                                    </div>
                                    <div className="text-sm font-mono font-bold text-white">
                                        {activePercentile.label}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[9px] font-mono text-zinc-500 uppercase">
                                        Roundtrip
                                    </div>
                                    <div className="text-sm font-mono font-bold text-[#ff1744]">
                                        {activePercentile.latency}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[9px] font-mono text-zinc-500 uppercase">
                                        Throughput
                                    </div>
                                    <div className="text-sm font-mono font-bold text-zinc-200">
                                        {activePercentile.ops}
                                    </div>
                                </div>
                                <div>
                                    <div className="text-[9px] font-mono text-zinc-500 uppercase">
                                        Heap Alloc
                                    </div>
                                    <div className="text-sm font-mono font-bold text-emerald-400">
                                        {activePercentile.alloc}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Actions & Tech Pills */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/[0.08]">
                        <div className="flex flex-wrap gap-1.5">
                            {["Rust", "SBE", "Append-WAL", "Criterion", "L1-Friendly"].map((t) => (
                                <span
                                    key={t}
                                    className="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-zinc-300"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        <a
                            href="https://github.com/jveer634/matcher"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 py-2 px-4 rounded-xl bg-white/[0.06] hover:bg-[#ff1744] hover:text-black font-mono text-xs font-bold text-white transition-all shadow-sm"
                        >
                            <BsGithub size={14} />
                            <span>github.com/jveer634/matcher</span>
                            <BsBoxArrowUpRight size={11} />
                        </a>
                    </div>
                </div>

                {/* ---------------------------------------------------------------------
                    BENTO CELL 2: ENGINE DETERMINISM & HARDWARE WIDGET (Cols 9-12)
                    --------------------------------------------------------------------- */}
                <div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="bento-cell lg:col-span-4 rounded-3xl border border-white/[0.12] bg-gradient-to-br from-white/[0.08] via-zinc-950/60 to-black/80 backdrop-blur-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_20px_40px_rgba(0,0,0,0.6)] group hover:border-[#8b5cf6]/60 hover:shadow-[0_25px_60px_rgba(139,92,246,0.2),inset_0_1px_2px_rgba(255,255,255,0.3)]"
                >
                    {/* Floating Badge */}
                    <div className="absolute top-5 right-6 z-20 pointer-events-none">
                        <div className="animate-float px-2.5 py-1 rounded-full bg-[#8b5cf6]/15 border border-[#8b5cf6]/40 text-purple-300 text-[10px] font-mono font-bold tracking-wider uppercase backdrop-blur-md">
                            NO GC JITTER
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 flex items-center justify-center text-[#8b5cf6]">
                                <BsCpu size={18} />
                            </div>
                            <div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                                    SYS.TELEMETRY
                                </div>
                                <h4 className="font-bebas text-2xl text-white tracking-wide leading-none">
                                    CORE DETERMINISM MATRIX
                                </h4>
                            </div>
                        </div>

                        {/* Circular Determinism Gauge */}
                        <div className="my-5 p-4 rounded-2xl bg-[#08080d]/80 border border-white/[0.06] flex items-center gap-4">
                            <div className="relative w-16 h-16 shrink-0">
                                <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="15"
                                        className="stroke-zinc-800"
                                        strokeWidth="3"
                                        fill="none"
                                    />
                                    <circle
                                        cx="18"
                                        cy="18"
                                        r="15"
                                        className="stroke-[#ff1744] animate-pulse"
                                        strokeWidth="3"
                                        strokeDasharray="94.2"
                                        strokeDashoffset="0"
                                        strokeLinecap="round"
                                        fill="none"
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center text-xs font-mono font-bold text-white">
                                    100%
                                </div>
                            </div>
                            <div>
                                <div className="text-xs font-mono font-bold text-white">
                                    DETERMINISTIC REPLAY
                                </div>
                                <p className="text-[11px] text-zinc-400 font-light mt-0.5">
                                    100% state recreation via sequential binary append logs.
                                </p>
                            </div>
                        </div>

                        {/* Hardware Telemetry List */}
                        <div className="space-y-2.5 font-mono text-xs">
                            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-between">
                                <span className="text-zinc-400">ISOLCPUS PIN</span>
                                <span className="text-emerald-400 font-bold">
                                    CORE 0 (NO PREEMPTION)
                                </span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-between">
                                <span className="text-zinc-400">PEAK MEM (RSS)</span>
                                <span className="text-white font-bold">54MB (FLAT SLAB)</span>
                            </div>
                            <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] flex items-center justify-between">
                                <span className="text-zinc-400">GC PAUSE OVERHEAD</span>
                                <span className="text-emerald-400 font-bold">0.000 µs (NONE)</span>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-white/[0.08] mt-4 flex items-center justify-between text-xs font-mono text-zinc-400">
                        <span className="flex items-center gap-1.5 text-emerald-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                            Hardware Sympathy Verified
                        </span>
                        <span>x86-64 SIMD</span>
                    </div>
                </div>

                {/* ---------------------------------------------------------------------
                    BENTO CELL 3: DEXPOP MICROSERVICES PLATFORM (Cols 1-5)
                    Go Exchange Architecture + Live Topology Nodes
                    --------------------------------------------------------------------- */}
                <div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="bento-cell lg:col-span-5 rounded-3xl border border-white/[0.12] bg-gradient-to-br from-white/[0.08] via-zinc-950/60 to-black/80 backdrop-blur-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_20px_40px_rgba(0,0,0,0.6)] group hover:border-[#8b5cf6]/60 hover:shadow-[0_25px_60px_rgba(139,92,246,0.2),inset_0_1px_2px_rgba(255,255,255,0.3)]"
                >
                    {/* Floating Badge */}
                    <div className="absolute top-5 right-6 z-20 pointer-events-none">
                        <div className="animate-float px-3 py-1 rounded-full bg-[#8b5cf6]/15 border border-[#8b5cf6]/40 text-purple-300 text-[10px] font-mono font-bold tracking-wider uppercase backdrop-blur-md">
                            8,000 TXNS/SEC
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 flex items-center justify-center text-[#8b5cf6]">
                                <BsLayers size={18} />
                            </div>
                            <div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                                    SYS.02 // PRODUCTION FINTECH
                                </div>
                                <h3 className="font-bebas text-3xl text-white tracking-wide leading-none mt-0.5">
                                    DexPop: Go Exchange Platform
                                </h3>
                            </div>
                        </div>

                        <p className="text-xs text-zinc-300 font-light leading-relaxed mb-5">
                            High-concurrency centralized crypto exchange microservices connected
                            through zero-trust mutual TLS gRPC, Kafka KRaft transaction journals,
                            and Redis cache clusters.
                        </p>

                        {/* Interactive Live Topology Service Mesh Graph */}
                        <div className="p-4 rounded-2xl bg-[#08080d]/80 border border-white/[0.06] backdrop-blur-xl mb-5 space-y-3">
                            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 pb-2 border-b border-white/[0.05]">
                                <span>DISTRIBUTED SERVICE MESH</span>
                                <span className="text-purple-400 font-bold">mTLS gRPC</span>
                            </div>

                            {/* Node pipeline representation */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/[0.04]">
                                    <div className="flex items-center gap-2 text-xs font-mono">
                                        <BsTerminal size={12} className="text-purple-400" />
                                        <span className="text-white">API Gateway</span>
                                    </div>
                                    <span className="text-[10px] font-mono text-zinc-400">
                                        RS256 JWT • Rate Limit
                                    </span>
                                </div>
                                <div className="flex justify-center my-0.5">
                                    <div className="w-0.5 h-3 bg-purple-500/40" />
                                </div>
                                <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/[0.04]">
                                    <div className="flex items-center gap-2 text-xs font-mono">
                                        <BsActivity size={12} className="text-[#ff1744]" />
                                        <span className="text-white">Kafka KRaft Bus</span>
                                    </div>
                                    <span className="text-[10px] font-mono text-emerald-400">
                                        Sequential Replication
                                    </span>
                                </div>
                                <div className="flex justify-center my-0.5">
                                    <div className="w-0.5 h-3 bg-purple-500/40" />
                                </div>
                                <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03] border border-white/[0.04]">
                                    <div className="flex items-center gap-2 text-xs font-mono">
                                        <BsCpu size={12} className="text-cyan-400" />
                                        <span className="text-white">Matching Workers</span>
                                    </div>
                                    <span className="text-[10px] font-mono text-zinc-400">
                                        Perpetuals Mark Engine
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                        <div className="flex flex-wrap gap-1.5">
                            {["Go", "Kafka", "gRPC", "Redis", "TimescaleDB"].map((t) => (
                                <span
                                    key={t}
                                    className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-zinc-400"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                        <span className="text-xs font-mono text-[#8b5cf6] font-semibold flex items-center gap-1">
                            <span>Production Core</span>
                            <BsShieldCheck size={13} />
                        </span>
                    </div>
                </div>

                {/* ---------------------------------------------------------------------
                    BENTO CELL 4: TDMM & ARC BRIDGE (Cols 6-12)
                    Cross-Chain Aggregator + Interactive Liquidity Router Matrix
                    --------------------------------------------------------------------- */}
                <div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="bento-cell lg:col-span-7 rounded-3xl border border-white/[0.12] bg-gradient-to-br from-white/[0.08] via-zinc-950/60 to-black/80 backdrop-blur-3xl p-6 sm:p-7 flex flex-col justify-between relative overflow-hidden transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_20px_40px_rgba(0,0,0,0.6)] group hover:border-cyan-400/60 hover:shadow-[0_25px_60px_rgba(6,182,212,0.2),inset_0_1px_2px_rgba(255,255,255,0.3)]"
                >
                    {/* Floating Badges */}
                    <div className="absolute top-5 right-6 flex items-center gap-2 z-20 pointer-events-none">
                        <div className="animate-float px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 text-[10px] font-mono font-bold tracking-wider uppercase backdrop-blur-md">
                            10,000+ TXNS/DAY
                        </div>
                        <div className="animate-float-reverse px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/10 text-zinc-300 text-[10px] font-mono tracking-wider uppercase backdrop-blur-md">
                            9 DEXs
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                                <BsGlobe size={18} />
                            </div>
                            <div>
                                <div className="text-[10px] font-mono uppercase tracking-widest text-zinc-400">
                                    SYS.03 // MULTI-CHAIN LIQUIDITY
                                </div>
                                <h3 className="font-bebas text-3xl text-white tracking-wide leading-none mt-0.5">
                                    TDMM & Arc Relayer: Cross-Chain DEX Aggregator
                                </h3>
                            </div>
                        </div>

                        <p className="text-xs text-zinc-300 font-light leading-relaxed mb-5 max-w-xl">
                            Algorithmic liquidity routing engine abstracting RPC divergence across
                            Ethereum, Solana, and Sui Move to guarantee atomic execution and
                            sub-0.05% slippage tolerance.
                        </p>

                        {/* Interactive Cross-Chain Routing Matrix */}
                        <div className="rounded-2xl border border-white/[0.06] bg-[#08080d]/80 p-4 backdrop-blur-xl mb-5">
                            <div className="flex items-center justify-between text-xs font-mono text-zinc-400 pb-2 border-b border-white/[0.05] mb-3">
                                <span>CROSS-CHAIN ROUTING BENCHMARK</span>
                                <div className="flex items-center gap-2">
                                    {(["eth", "sol", "sui"] as const).map((chain) => (
                                        <button
                                            key={chain}
                                            onClick={() => setActiveChain(chain)}
                                            className={`uppercase px-2 py-0.5 rounded text-[10px] transition-colors ${
                                                activeChain === chain
                                                    ? "bg-cyan-500 text-black font-bold"
                                                    : "bg-white/[0.04] text-zinc-400 hover:text-white"
                                            }`}
                                        >
                                            {chain}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Dynamic route visualizer card */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                                    <div className="text-[10px] font-mono text-zinc-500 uppercase">
                                        Ethereum (EVM)
                                    </div>
                                    <div className="text-base font-mono font-bold text-white mt-1">
                                        Uniswap V3 / Curve
                                    </div>
                                    <div className="text-[11px] font-mono text-cyan-400 mt-1">
                                        Atomic Multi-Hop
                                    </div>
                                </div>
                                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                                    <div className="text-[10px] font-mono text-zinc-500 uppercase">
                                        Solana (SVM)
                                    </div>
                                    <div className="text-base font-mono font-bold text-white mt-1">
                                        Raydium / Orca
                                    </div>
                                    <div className="text-[11px] font-mono text-emerald-400 mt-1">
                                        400ms Finality
                                    </div>
                                </div>
                                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                                    <div className="text-[10px] font-mono text-zinc-500 uppercase">
                                        Sui (Move)
                                    </div>
                                    <div className="text-base font-mono font-bold text-white mt-1">
                                        Cetus / DeepBook
                                    </div>
                                    <div className="text-[11px] font-mono text-purple-400 mt-1">
                                        Object-Centric Orderbook
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-2">
                        <div className="flex flex-wrap gap-1.5">
                            {["Rust", "Solidity", "Solana", "Sui Move", "NestJS", "Python"].map(
                                (t) => (
                                    <span
                                        key={t}
                                        className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-zinc-400"
                                    >
                                        {t}
                                    </span>
                                )
                            )}
                        </div>
                        <span className="text-xs font-mono text-cyan-400 font-semibold">
                            99.9% Uptime Verified
                        </span>
                    </div>
                </div>

                {/* ---------------------------------------------------------------------
                    BENTO CELL 5: COMPARATIVE BENCHMARK MATRIX (Cols 1-12)
                    Why Tier-1 High-Frequency FinTech Chooses This Architecture
                    --------------------------------------------------------------------- */}
                <div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className="bento-cell lg:col-span-12 rounded-3xl border border-white/[0.12] bg-gradient-to-br from-white/[0.08] via-zinc-950/60 to-black/80 backdrop-blur-3xl p-6 sm:p-8 flex flex-col md:flex-row items-stretch justify-between gap-8 relative overflow-hidden transition-all duration-300 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2),0_20px_40px_rgba(0,0,0,0.6)] group hover:border-[#ff1744]/40"
                >
                    <div className="md:w-1/3 space-y-3">
                        <div className="text-xs font-mono uppercase tracking-widest text-[#ff1744] font-bold">
                            BENCHMARK COMPARISON
                        </div>
                        <h4 className="font-bebas text-3xl sm:text-4xl text-white tracking-wide leading-none">
                            LATENCY BREAKDOWN VS INDUSTRY ALTERNATIVES
                        </h4>
                        <p className="text-xs text-zinc-400 font-light leading-relaxed">
                            Single-core mechanical sympathy vs multi-threaded GC overhead. Zero
                            memory allocation guarantees stable percentile tails under peak market
                            volatility.
                        </p>
                    </div>

                    <div className="md:w-2/3 space-y-4 flex flex-col justify-center">
                        {/* Bar 1: Jay's Rust SBE Engine */}
                        <div>
                            <div className="flex justify-between text-xs font-mono mb-1">
                                <span className="text-white font-bold flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-[#ff1744]" />
                                    Jay Nalam (matcher - Rust SBE Zero-Alloc)
                                </span>
                                <span className="text-[#ff1744] font-bold">0.47 µs (p50)</span>
                            </div>
                            <div className="w-full h-3 rounded-full bg-white/[0.04] p-0.5 border border-white/[0.06] overflow-hidden">
                                <div className="h-full rounded-full bg-gradient-to-r from-[#ff1744] to-[#8b5cf6] w-[12%] shadow-[0_0_12px_#ff1744]" />
                            </div>
                        </div>

                        {/* Bar 2: Standard Java Aeron */}
                        <div>
                            <div className="flex justify-between text-xs font-mono mb-1">
                                <span className="text-zinc-400">
                                    Standard Aeron / LMAX Disruptor (Java)
                                </span>
                                <span className="text-zinc-400">2.80 µs (p50)</span>
                            </div>
                            <div className="w-full h-3 rounded-full bg-white/[0.04] p-0.5 border border-white/[0.06] overflow-hidden">
                                <div className="h-full rounded-full bg-zinc-600 w-[38%]" />
                            </div>
                        </div>

                        {/* Bar 3: Traditional Go JSON Microservice */}
                        <div>
                            <div className="flex justify-between text-xs font-mono mb-1">
                                <span className="text-zinc-500">
                                    Standard Go Microservice (Serde JSON / HTTP)
                                </span>
                                <span className="text-zinc-500">14.50 µs (p50)</span>
                            </div>
                            <div className="w-full h-3 rounded-full bg-white/[0.04] p-0.5 border border-white/[0.06] overflow-hidden">
                                <div className="h-full rounded-full bg-zinc-800 w-[85%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CaseStudies;
