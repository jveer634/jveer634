import { BsArrowUpRight, BsClock, BsCalendar3 } from "react-icons/bs";

const Publications = () => {
    const articles = [
        {
            title: "Perpetuals — The Crypto Derivatives",
            url: "https://blog.jnalam.dev/perpetuals-the-crypto-derivates",
            date: "Oct 17, 2025",
            readTime: "5 min read",
            summary:
                "Comprehensive breakdown of perpetual futures: mark price derivation, funding rate mechanisms, dynamic maintenance margin, and automated liquidation order dispatch.",
            tags: ["Perpetuals", "FinTech", "Risk Engine", "Derivatives"],
            highlight: "FinTech Bar Essential",
        },
        {
            title: "A Deep Dive into Ethereum's Proof of Stake System",
            url: "https://blog.jnalam.dev/a-deep-dive-into-ethereums-proof-of-stake-system",
            date: "Jul 8, 2025",
            readTime: "5 min read",
            summary:
                "Architectural exploration of the Ethereum beacon chain, validator lifecycle, attestation aggregation, and finality via Casper FFG and LMD-GHOST consensus.",
            tags: ["Ethereum Core", "Consensus", "Beacon Chain", "PoS"],
            highlight: "Consensus Internals",
        },
        {
            title: "Blockchain Interoperability and Cross-Chain Solutions",
            url: "https://blog.jnalam.dev/blockchain-interoperability-and-cross-chain-solutions",
            date: "Oct 15, 2024",
            readTime: "4 min read",
            summary:
                "Technical analysis of cross-chain communication vectors: light client verification, optimistic relayers, cryptographic state synchronization, and bridge security trade-offs.",
            tags: ["Cross-Chain", "Bridges", "Relayers", "Security"],
        },
        {
            title: "Remote Procedure Call (RPC): Communication Protocol of Nodes",
            url: "https://blog.jnalam.dev/remote-procedure-call",
            date: "Nov 7, 2024",
            readTime: "3 min read",
            summary:
                "How blockchain nodes handle inter-process and external network communications over JSON-RPC, WebSocket duplex streams, and high-throughput gateway routing.",
            tags: ["Distributed Systems", "RPC", "Networking", "Gateways"],
        },
        {
            title: "Demystifying Ethereum Transactions",
            url: "https://blog.jnalam.dev/demystifying-the-ethereum-transactions",
            date: "May 14, 2025",
            readTime: "6 min read",
            summary:
                "Analysis of EVM transaction types, EIP-1559 priority fee dynamics, blob transactions, and state transition processing within the execution client.",
            tags: ["EVM", "EIP-1559", "Gas Mechanics", "State Transition"],
        },
        {
            title: "ERC-6909: Minimal Multi-Token Interface",
            url: "https://blog.jnalam.dev/erc-6909-minimal-multi-token-interface",
            date: "Feb 13, 2025",
            readTime: "5 min read",
            summary:
                "Gas optimization audit comparing ERC-1155 vs ERC-6909: simplifying multi-token storage slots, reducing runtime bytecode overhead, and optimizing batch transfers.",
            tags: ["Solidity", "ERC-6909", "Gas Optimization", "Smart Contracts"],
        },
    ];

    return (
        <section
            id="publications"
            className="py-20 px-6 sm:px-10 md:px-16 max-w-7xl mx-auto border-t border-white/[0.08]"
        >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 mb-10 border-b border-white/[0.08]">
                <div className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#ff1744]" />
                    <h2 className="font-bebas text-3xl sm:text-4xl tracking-wider uppercase text-white">
                        TECHNICAL PUBLICATIONS & JOURNAL
                    </h2>
                </div>

                <a
                    href="https://blog.jnalam.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono uppercase tracking-widest text-zinc-400 hover:text-[#ff1744] flex items-center gap-1.5 transition-colors"
                >
                    <span>38 ARTICLES ON BLOG.JNALAM.DEV</span>
                    <BsArrowUpRight size={12} />
                </a>
            </div>

            {/* Articles Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                    <a
                        key={article.title}
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col justify-between p-6 rounded-2xl bg-[#0e0e14] border border-white/[0.08] hover:border-[#ff1744]/40 active:scale-[0.99] backdrop-blur-md transition-[transform,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:translate-y-[-3px] hover:shadow-xl hover:shadow-[#ff1744]/5 space-y-5"
                    >
                        <div className="space-y-3">
                            <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                                <span className="flex items-center gap-1.5">
                                    <BsCalendar3 size={11} className="text-zinc-500" />
                                    {article.date}
                                </span>
                                <span className="flex items-center gap-1 text-zinc-400">
                                    <BsClock size={11} className="text-zinc-500" />
                                    {article.readTime}
                                </span>
                            </div>

                            {article.highlight && (
                                <span className="inline-block text-[10px] font-mono uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#ff1744]/10 text-[#ff1744] border border-[#ff1744]/25">
                                    {article.highlight}
                                </span>
                            )}

                            <h3 className="text-base font-syne font-bold text-zinc-100 group-hover:text-[#ff1744] transition-colors duration-150 leading-snug">
                                {article.title}
                            </h3>

                            <p className="text-xs text-zinc-400 font-light leading-relaxed line-clamp-3">
                                {article.summary}
                            </p>
                        </div>

                        <div className="pt-4 border-t border-white/[0.06] space-y-3">
                            <div className="flex flex-wrap gap-1.5">
                                {article.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.03] text-zinc-400 border border-white/[0.06]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <div className="flex items-center justify-between text-xs font-mono text-indigo-400 group-hover:text-indigo-300 pt-1">
                                <span>Read on Hashnode</span>
                                <BsArrowUpRight
                                    size={13}
                                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150"
                                />
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            {/* Bottom CTA to all 38 articles */}
            <div className="mt-14 text-center">
                <a
                    href="https://blog.jnalam.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0e1017] hover:bg-[#151821] border border-[#272d3c] hover:border-indigo-500/50 active:scale-[0.97] text-xs font-display font-bold uppercase tracking-wider text-zinc-200 hover:text-white transition-[transform,background-color,border-color,color] duration-160 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-lg cursor-pointer"
                >
                    <span>Explore All 38 Publications on Web3 Engineering</span>
                    <BsArrowUpRight size={14} className="text-indigo-400" />
                </a>
            </div>
        </section>
    );
};

export default Publications;
