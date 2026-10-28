import { useState } from "react";
import {
    BsLightningCharge,
    BsCpu,
    BsDiagram3,
    BsRobot,
    BsShieldCheck,
    BsGithub,
    BsCheckCircleFill,
} from "react-icons/bs";

type TabKey = "rust-engine" | "go-exchange" | "multichain-dex" | "ai-pipeline";

const InteractiveExplorer = () => {
    const [activeTab, setActiveTab] = useState<TabKey>("rust-engine");
    const [selectedService, setSelectedService] = useState<string>("engine");

    const tabs: { key: TabKey; label: string; icon: typeof BsCpu; tag: string }[] = [
        {
            key: "rust-engine",
            label: "Rust Trading Engine (matcher)",
            icon: BsLightningCharge,
            tag: "717K ops/s • Sub-µs",
        },
        {
            key: "go-exchange",
            label: "Go Exchange Topology (DexPop)",
            icon: BsCpu,
            tag: "8K ops/s • Kafka / mTLS",
        },
        {
            key: "multichain-dex",
            label: "Multi-Chain DEX (TDMM)",
            icon: BsDiagram3,
            tag: "ETH • SOL • SUI",
        },
        {
            key: "ai-pipeline",
            label: "AI-Assisted Architecture",
            icon: BsRobot,
            tag: "Multi-Agent • MCP",
        },
    ];

    const exchangeServices: Record<
        string,
        {
            title: string;
            role: string;
            protocol: string;
            storage: string;
            throughput: string;
            latency: string;
        }
    > = {
        gateway: {
            title: "API Gateway Microservice",
            role: "Ingresses REST/WebSocket client requests, terminates external TLS, validates RS256 JWTs, and handles rate limiting.",
            protocol: "HTTP/2, WebSocket → gRPC",
            storage: "Redis (Session state)",
            throughput: "12,000 req/sec",
            latency: "< 2.1 ms",
        },
        engine: {
            title: "Order Matching Engine (Go)",
            role: "Core in-memory matching logic handling limit, market, and perpetual orders. Communicates via zero-trust mTLS.",
            protocol: "gRPC with mutual TLS",
            storage: "In-memory state + Kafka event journal",
            throughput: "8,000 orders/sec (real Docker/Kafka)",
            latency: "< 1.2 ms p99",
        },
        kafka: {
            title: "Kafka KRaft Event Pipeline",
            role: "Distributed event streaming backbone replicating order state, market events, and trade executions without ZooKeeper.",
            protocol: "Kafka Protocol (KRaft mode)",
            storage: "Persistent event logs (NVMe backed)",
            throughput: "25,000 msgs/sec",
            latency: "< 0.8 ms",
        },
        settlement: {
            title: "Transaction & Settlement Engine",
            role: "Processes funding rate distributions, margin balance checks, and perpetual liquidations into transactional databases.",
            protocol: "gRPC internal worker pool",
            storage: "PostgreSQL & TimescaleDB",
            throughput: "4,000 tx/sec",
            latency: "< 5.0 ms",
        },
    };

    return (
        <section id="systems" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
                <div className="inline-flex items-center gap-2 text-xs uppercase font-mono tracking-[0.25rem] text-[#ff1744] font-bold bg-[#ff1744]/10 px-3.5 py-1 rounded-full border border-[#ff1744]/25">
                    <span className="relative flex h-2 w-2 items-center justify-center">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-[#ff1744] opacity-50 animate-pulse-subtle" />
                        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#ff1744]" />
                    </span>
                    <span>SYS.02 // ARCHITECTURAL DOSSIER</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-syne font-extrabold text-zinc-100 tracking-tight uppercase">
                    Interactive Systems & Benchmarks
                </h2>
                <p className="text-xs md:text-sm font-mono text-zinc-400 font-light italic max-w-2xl mx-auto">
                    "Power is not will. It is the phenomenon of physically making things happen." —
                    Inspect single-core microsecond percentiles and zero-trust microservice
                    topologies.
                </p>
            </div>

            {/* Tab Bar */}
            <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#0a0a0f] border border-white/[0.08] rounded-2xl mb-8 max-w-4xl mx-auto">
                {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.key;
                    return (
                        <button
                            key={tab.key}
                            onClick={() => setActiveTab(tab.key)}
                            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs font-mono tracking-wider active:scale-[0.97] transition-[transform,background-color,color,box-shadow] duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer ${
                                isActive
                                    ? "bg-[#ff1744] text-white shadow-lg shadow-[#ff1744]/30"
                                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]"
                            }`}
                        >
                            <Icon size={14} className={isActive ? "text-white" : "text-zinc-500"} />
                            <span className="font-semibold">{tab.label}</span>
                            <span
                                className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                                    isActive
                                        ? "bg-white/20 text-white"
                                        : "bg-white/[0.05] text-zinc-400"
                                }`}
                            >
                                {tab.tag}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Tab Content Panes */}
            <div className="bg-[#08080d]/90 border border-white/[0.08] rounded-2xl p-6 md:p-10 backdrop-blur-md shadow-2xl">
                {/* 1. Rust Engine (matcher) */}
                {activeTab === "rust-engine" && (
                    <div className="space-y-8 animate-fadeIn">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
                            <div>
                                <span className="text-[11px] font-mono uppercase tracking-wider text-[#ff1744] bg-[#ff1744]/10 px-2.5 py-1 rounded-md border border-[#ff1744]/25">
                                    Sub-Microsecond Determinism
                                </span>
                                <h3 className="text-2xl font-display font-bold text-zinc-100 mt-2">
                                    matcher: Sub-Microsecond Rust Financial Trading Engine
                                </h3>
                                <p className="text-sm text-zinc-400 font-light mt-1">
                                    Single-threaded sharded order book with Simple Binary Encoding
                                    (SBE) zero-copy deserialization and sequential Write-Ahead Log
                                    (WAL).
                                </p>
                            </div>

                            <a
                                href="https://github.com/jveer634/matcher"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-zinc-900 border border-[#272d3c] hover:border-indigo-500/50 text-xs font-mono text-zinc-200 hover:text-white active:scale-[0.97] transition-[transform,border-color,background-color,color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] shrink-0"
                            >
                                <BsGithub size={15} />
                                <span>github.com/jveer634/matcher ↗</span>
                            </a>
                        </div>

                        {/* Benchmark Stat Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 font-mono">
                            <div className="p-4 rounded-xl bg-[#151821] border border-[#272d3c]">
                                <span className="text-xs text-zinc-500 block">
                                    Single-Core Throughput
                                </span>
                                <span className="text-2xl font-extrabold text-emerald-400 mt-1 block">
                                    717,000
                                </span>
                                <span className="text-[11px] text-zinc-400">
                                    orders matched / sec
                                </span>
                            </div>

                            <div className="p-4 rounded-xl bg-[#151821] border border-[#272d3c]">
                                <span className="text-xs text-zinc-500 block">
                                    4-Core Sharded Scaling
                                </span>
                                <span className="text-2xl font-extrabold text-indigo-400 mt-1 block">
                                    1,870,000
                                </span>
                                <span className="text-[11px] text-zinc-400">
                                    orders matched / sec
                                </span>
                            </div>

                            <div className="p-4 rounded-xl bg-[#151821] border border-[#272d3c]">
                                <span className="text-xs text-zinc-500 block">
                                    Execution Latency (p50)
                                </span>
                                <span className="text-2xl font-extrabold text-cyan-400 mt-1 block">
                                    0.47 µs
                                </span>
                                <span className="text-[11px] text-zinc-400">
                                    sub-microsecond response
                                </span>
                            </div>

                            <div className="p-4 rounded-xl bg-[#151821] border border-[#272d3c]">
                                <span className="text-xs text-zinc-500 block">
                                    Tail Latency (p99) & RAM
                                </span>
                                <span className="text-2xl font-extrabold text-amber-400 mt-1 block">
                                    5.2 µs
                                </span>
                                <span className="text-[11px] text-zinc-400">
                                    54 MB peak RSS memory
                                </span>
                            </div>
                        </div>

                        {/* Latency Percentile Bar Breakdown */}
                        <div className="space-y-3 p-5 rounded-xl bg-[#151821] border border-[#272d3c]">
                            <div className="flex items-center justify-between text-xs font-mono text-zinc-300">
                                <span className="font-bold">
                                    Latency Percentile Breakdown (Microseconds)
                                </span>
                                <span className="text-zinc-500">
                                    Benchmark on Intel Core i7 / Linux
                                </span>
                            </div>

                            <div className="space-y-2 pt-2">
                                <div>
                                    <div className="flex justify-between text-[11px] font-mono text-zinc-400 mb-1">
                                        <span>p50 (Median Match Duration)</span>
                                        <span className="text-emerald-400 font-bold">0.47 µs</span>
                                    </div>
                                    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                                        <div
                                            className="bg-emerald-400 h-full rounded-full"
                                            style={{ width: "9%" }}
                                        ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-[11px] font-mono text-zinc-400 mb-1">
                                        <span>p90 (90th Percentile)</span>
                                        <span className="text-cyan-400 font-bold">1.82 µs</span>
                                    </div>
                                    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                                        <div
                                            className="bg-cyan-400 h-full rounded-full"
                                            style={{ width: "35%" }}
                                        ></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-[11px] font-mono text-zinc-400 mb-1">
                                        <span>p99 (Tail Latency Boundary)</span>
                                        <span className="text-amber-400 font-bold">5.20 µs</span>
                                    </div>
                                    <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                                        <div
                                            className="bg-amber-400 h-full rounded-full"
                                            style={{ width: "100%" }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Engineering Design Decisions */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                            <div className="p-4 rounded-xl bg-[#12141c] border border-[#272d3c]/60 space-y-2">
                                <span className="text-xs font-display font-bold text-zinc-200 flex items-center gap-1.5">
                                    <BsCheckCircleFill className="text-emerald-400" size={13} />
                                    Zero-Copy SBE Deserialization
                                </span>
                                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                                    Eliminates string parsing and JSON overhead; incoming packets
                                    deserialize in-place using Simple Binary Encoding buffers.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-[#12141c] border border-[#272d3c]/60 space-y-2">
                                <span className="text-xs font-display font-bold text-zinc-200 flex items-center gap-1.5">
                                    <BsCheckCircleFill className="text-emerald-400" size={13} />
                                    Sequential Write-Ahead Log
                                </span>
                                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                                    Disk I/O is strictly append-only with periodic memory
                                    snapshotting, avoiding random disk seeks and fsync stalls.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-[#12141c] border border-[#272d3c]/60 space-y-2">
                                <span className="text-xs font-display font-bold text-zinc-200 flex items-center gap-1.5">
                                    <BsCheckCircleFill className="text-emerald-400" size={13} />
                                    Lock-Free Sharded Concurrency
                                </span>
                                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                                    Each trading pair or order book shard is pinned to dedicated
                                    threads, eliminating lock contention and context-switching
                                    jitter.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* 2. Go Exchange Topology (DexPop) */}
                {activeTab === "go-exchange" && (
                    <div className="space-y-8 animate-fadeIn">
                        <div className="border-b border-[#272d3c] pb-6">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                                Distributed Microservices Architecture
                            </span>
                            <h3 className="text-2xl font-display font-bold text-zinc-100 mt-2">
                                DexPop: Production White-Label Cryptocurrency Exchange
                            </h3>
                            <p className="text-sm text-zinc-400 font-light mt-1">
                                Go microservices communicating over zero-trust gRPC with mutual TLS
                                (mTLS), powered by Kafka KRaft, Redis cache, and PostgreSQL
                                persistence handling 8K orders/sec on real infrastructure.
                            </p>
                        </div>

                        {/* Interactive Node Selector */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {Object.entries(exchangeServices).map(([key, svc]) => (
                                <button
                                    key={key}
                                    onClick={() => setSelectedService(key)}
                                    className={`p-3.5 rounded-xl border text-left active:scale-[0.97] transition-[transform,border-color,background-color,box-shadow] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer ${
                                        selectedService === key
                                            ? "border-indigo-500 bg-indigo-600/10 shadow-md"
                                            : "border-[#272d3c] bg-[#151821] hover:border-zinc-700"
                                    }`}
                                >
                                    <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider">
                                        Click to inspect
                                    </div>
                                    <div className="text-xs font-display font-bold text-zinc-200 mt-1">
                                        {svc.title.split(" (")[0]}
                                    </div>
                                </button>
                            ))}
                        </div>

                        {/* Selected Node Spec Inspector */}
                        <div className="p-6 rounded-xl bg-[#151821] border border-[#272d3c] space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-3">
                                <h4 className="text-base font-display font-bold text-indigo-300">
                                    {exchangeServices[selectedService].title}
                                </h4>
                                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                                    Throughput: {exchangeServices[selectedService].throughput}
                                </span>
                            </div>

                            <p className="text-sm text-zinc-300 font-light leading-relaxed">
                                {exchangeServices[selectedService].role}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-mono">
                                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                                    <span className="text-zinc-500 block text-[10px]">
                                        Communication Protocol
                                    </span>
                                    <span className="text-zinc-200 font-semibold">
                                        {exchangeServices[selectedService].protocol}
                                    </span>
                                </div>
                                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                                    <span className="text-zinc-500 block text-[10px]">
                                        Storage / Cache Engine
                                    </span>
                                    <span className="text-zinc-200 font-semibold">
                                        {exchangeServices[selectedService].storage}
                                    </span>
                                </div>
                                <div className="p-3 rounded-lg bg-zinc-900/60 border border-zinc-800">
                                    <span className="text-zinc-500 block text-[10px]">
                                        Service Latency SLA
                                    </span>
                                    <span className="text-cyan-400 font-semibold">
                                        {exchangeServices[selectedService].latency}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Perpetual Futures Mechanics Feature Card */}
                        <div className="p-5 rounded-xl bg-gradient-to-r from-indigo-950/20 to-blue-950/20 border border-indigo-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-indigo-400 font-bold uppercase">
                                    Financial Engineering Capability
                                </span>
                                <h5 className="text-sm font-display font-bold text-zinc-100">
                                    Perpetual Futures Engine: Mark Price, Dynamic Margin &
                                    Liquidation
                                </h5>
                                <p className="text-xs text-zinc-400 font-light max-w-2xl">
                                    Implemented mark price calculation from multi-source indexes,
                                    real-time maintenance margin checks, and automated liquidation
                                    order dispatch into the central order book.
                                </p>
                            </div>
                            <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-3 py-1.5 rounded-lg border border-zinc-800 shrink-0">
                                Go • Kafka • TimescaleDB
                            </span>
                        </div>
                    </div>
                )}

                {/* 3. Multi-Chain DEX Routing (TDMM) */}
                {activeTab === "multichain-dex" && (
                    <div className="space-y-8 animate-fadeIn">
                        <div className="border-b border-[#272d3c] pb-6">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-md border border-blue-500/20">
                                Multi-Chain Protocol Infrastructure
                            </span>
                            <h3 className="text-2xl font-display font-bold text-zinc-100 mt-2">
                                TDMM & Arc Bridge: Multi-Chain Liquidity & Cross-Chain State Sync
                            </h3>
                            <p className="text-sm text-zinc-400 font-light mt-1">
                                Abstracting protocol differences across EVM, Solana, and Sui
                                blockchains to execute optimal algorithmic trade routes across 9+
                                decentralized exchanges.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-5 rounded-xl bg-[#151821] border border-blue-500/30 space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-mono font-bold text-blue-400 uppercase">
                                        Ethereum Layer
                                    </span>
                                    <span className="text-[10px] font-mono text-zinc-500">
                                        EVM Architecture
                                    </span>
                                </div>
                                <h4 className="text-base font-display font-bold text-zinc-200">
                                    Uniswap & Curve Routing
                                </h4>
                                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                                    Optimized calldata execution, gas-efficient ERC-20 batch
                                    approval flows, and atomic flash-routing across Ethereum &
                                    Arbitrum.
                                </p>
                            </div>

                            <div className="p-5 rounded-xl bg-[#151821] border border-purple-500/30 space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-mono font-bold text-purple-400 uppercase">
                                        Solana Layer
                                    </span>
                                    <span className="text-[10px] font-mono text-zinc-500">
                                        Sealevel Parallel
                                    </span>
                                </div>
                                <h4 className="text-base font-display font-bold text-zinc-200">
                                    Raydium & Orca AMM
                                </h4>
                                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                                    Account-keyed instruction routing, handling parallel transaction
                                    execution and dynamic compute budget optimization.
                                </p>
                            </div>

                            <div className="p-5 rounded-xl bg-[#151821] border border-cyan-500/30 space-y-3">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase">
                                        Sui Layer
                                    </span>
                                    <span className="text-[10px] font-mono text-zinc-500">
                                        Move Object Model
                                    </span>
                                </div>
                                <h4 className="text-base font-display font-bold text-zinc-200">
                                    Cetus & DeepBook Integration
                                </h4>
                                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                                    Object-centric programmable transaction blocks (PTBs),
                                    eliminating consensus bottlenecks for single-owner asset
                                    transactions.
                                </p>
                            </div>
                        </div>

                        {/* Oasis TEE Integration Note */}
                        <div className="p-4 rounded-xl bg-[#12141c] border border-[#272d3c] flex items-center justify-between gap-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                                    <BsShieldCheck size={20} />
                                </div>
                                <div>
                                    <span className="text-xs font-display font-bold text-zinc-200 block">
                                        Confidential Compute Integration (Oasis TEE)
                                    </span>
                                    <span className="text-xs text-zinc-400 font-light">
                                        Engineered a ROFL (Runtime Open Financial Logic) application
                                        executing privacy-preserving trading logic inside hardware
                                        enclaves.
                                    </span>
                                </div>
                            </div>
                            <span className="hidden sm:inline-block text-[11px] font-mono text-zinc-500 bg-zinc-900 px-2.5 py-1 rounded border border-zinc-800">
                                Oasis ROFL
                            </span>
                        </div>
                    </div>
                )}

                {/* 4. AI-Assisted Architecture */}
                {activeTab === "ai-pipeline" && (
                    <div className="space-y-8 animate-fadeIn">
                        <div className="border-b border-[#272d3c] pb-6">
                            <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-md border border-amber-500/20">
                                Engineering Productivity Multiplier
                            </span>
                            <h3 className="text-2xl font-display font-bold text-zinc-100 mt-2">
                                Multi-Agent Context Engineering & Automated Workflows
                            </h3>
                            <p className="text-sm text-zinc-400 font-light mt-1">
                                Building and scaling systems using multi-agent context pipelines,
                                MCP (Model Context Protocol) tool providers, and test-driven
                                verification loops.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="p-5 rounded-xl bg-[#151821] border border-[#272d3c] space-y-3">
                                <span className="text-xs font-mono font-bold text-amber-400 uppercase">
                                    Context Engineering Standards
                                </span>
                                <h4 className="text-base font-display font-bold text-zinc-200">
                                    AGENTS.md & SKILL.md Architecture
                                </h4>
                                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                                    Authoring modular agent skills and repository-level guidance to
                                    guarantee deterministic code generation, strict test gate
                                    enforcement, and architectural consistency across engineering
                                    teams.
                                </p>
                            </div>

                            <div className="p-5 rounded-xl bg-[#151821] border border-[#272d3c] space-y-3">
                                <span className="text-xs font-mono font-bold text-indigo-400 uppercase">
                                    Tool & Protocol Integration
                                </span>
                                <h4 className="text-base font-display font-bold text-zinc-200">
                                    Custom MCP Servers & Antigravity IDE
                                </h4>
                                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                                    Connecting AI models to local compile targets, live
                                    documentation servers (Context7), and automated E2E test suites
                                    to accelerate feature velocity without compromising code
                                    quality.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default InteractiveExplorer;
