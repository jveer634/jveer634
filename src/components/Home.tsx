import { useEffect } from "react";
import Me from "../assets/Me.jpg";
import gsap from "gsap";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const Home = () => {
    useEffect(() => {
        const timeline = gsap.timeline({ defaults: { ease: "power2.out" } });

        timeline.to(
            ".text",
            {
                opacity: 1,
                duration: 0.8,
                stagger: 0.5,
                delay: 0.3,
            },
            "+=0.3"
        );
        timeline.to(".intro", { y: "-100%", duration: 1.2, ease: "power4.inOut" });
        timeline.to(
            ".animate",
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.1,
            },
            "-=0.6"
        );

        timeline.to(
            ".img",
            { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" },
            "-=0.8"
        );
    }, []);

    return (
        <div className="bg-[#070709] text-zinc-100 min-h-screen">
            {/* Loader / Intro Screen */}
            <section className="bg-[#070709] intro z-50 h-screen w-full font-display font-extrabold text-3xl md:text-5xl flex flex-col justify-center items-center fixed top-0 left-0">
                <div className="space-y-2 text-center px-4">
                    <h1 className="text opacity-0 font-light text-zinc-400">Thinking of</h1>
                    <h1 className="text opacity-0 text-zinc-100">leveling up your</h1>
                    <h1 className="text opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">business?</h1>
                </div>
            </section>

            {/* Hero Section */}
            <section className="relative flex items-center justify-center min-h-screen pt-28 pb-16 px-6 md:px-12 max-w-6xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16 items-center w-full">
                    {/* Avatar Display */}
                    <div className="md:col-span-5 flex justify-center">
                        <div className="relative group w-full max-w-[320px] md:max-w-none aspect-[4/5]">
                            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 opacity-20 blur-xl group-hover:opacity-40 transition duration-1000"></div>
                            <img
                                src={Me}
                                className="relative rounded-2xl object-cover w-full h-full shadow-2xl border border-zinc-800/80 opacity-0 scale-95 img transition-all duration-500"
                                alt="Jay Nalam"
                            />
                        </div>
                    </div>

                    {/* Intro Details */}
                    <div className="md:col-span-7 space-y-6">
                        <div className="space-y-3 opacity-0 translate-y-4 animate">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20">
                                Available for Freelance
                            </span>
                            <h1 className="text-3xl md:text-5xl font-display font-black leading-tight tracking-tight">
                                I am <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400">Jay Nalam</span>
                            </h1>
                        </div>

                        <div className="opacity-0 translate-y-4 animate space-y-6">
                            <h2 className="text-lg md:text-xl font-light text-zinc-300 leading-relaxed">
                                A <span className="font-semibold text-zinc-100">Freelance Web Developer</span> and Blockchain Developer from India. I create web platforms that elevate your business standards and expand your brand network.
                            </h2>
                            
                            <div className="pt-2">
                                <Link
                                    to="/contact"
                                    className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold tracking-wide hover:shadow-lg hover:shadow-white/5 transition-all duration-300 font-display"
                                >
                                    Connect With Me
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="py-20 bg-zinc-950/40 border-y border-zinc-900/50">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-xs uppercase tracking-[0.25rem] text-zinc-500 font-bold text-center mb-10 font-display">
                        Skills & Technologies
                    </h2>

                    <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,_transparent_0%,_black_10%,_black_90%,_transparent_100%)] space-y-4">
                        <Marquee
                            autoFill
                            speed={45}
                            pauseOnHover
                            gradient={false}
                        >
                            <span className="bg-zinc-900/40 border border-zinc-800/80 text-zinc-300 hover:border-violet-500/30 hover:text-zinc-100 px-5 py-2.5 rounded-full text-sm font-medium mx-3 transition-colors duration-300 flex items-center gap-2 backdrop-blur-sm">Django</span>
                            <span className="bg-zinc-900/40 border border-zinc-800/80 text-zinc-300 hover:border-violet-500/30 hover:text-zinc-100 px-5 py-2.5 rounded-full text-sm font-medium mx-3 transition-colors duration-300 flex items-center gap-2 backdrop-blur-sm">React Js</span>
                            <span className="bg-zinc-900/40 border border-zinc-800/80 text-zinc-300 hover:border-violet-500/30 hover:text-zinc-100 px-5 py-2.5 rounded-full text-sm font-medium mx-3 transition-colors duration-300 flex items-center gap-2 backdrop-blur-sm">REST API</span>
                            <span className="bg-zinc-900/40 border border-zinc-800/80 text-zinc-300 hover:border-violet-500/30 hover:text-zinc-100 px-5 py-2.5 rounded-full text-sm font-medium mx-3 transition-colors duration-300 flex items-center gap-2 backdrop-blur-sm">MySQL</span>
                        </Marquee>

                        <Marquee
                            autoFill
                            speed={35}
                            pauseOnHover
                            gradient={false}
                            direction="right"
                        >
                            <span className="bg-zinc-900/40 border border-zinc-800/80 text-zinc-300 hover:border-violet-500/30 hover:text-zinc-100 px-5 py-2.5 rounded-full text-sm font-medium mx-3 transition-colors duration-300 flex items-center gap-2 backdrop-blur-sm">EVM Blockchains</span>
                            <span className="bg-zinc-900/40 border border-zinc-800/80 text-zinc-300 hover:border-violet-500/30 hover:text-zinc-100 px-5 py-2.5 rounded-full text-sm font-medium mx-3 transition-colors duration-300 flex items-center gap-2 backdrop-blur-sm">Solidity</span>
                            <span className="bg-zinc-900/40 border border-zinc-800/80 text-zinc-300 hover:border-violet-500/30 hover:text-zinc-100 px-5 py-2.5 rounded-full text-sm font-medium mx-3 transition-colors duration-300 flex items-center gap-2 backdrop-blur-sm">GoLang</span>
                            <span className="bg-zinc-900/40 border border-zinc-800/80 text-zinc-300 hover:border-violet-500/30 hover:text-zinc-100 px-5 py-2.5 rounded-full text-sm font-medium mx-3 transition-colors duration-300 flex items-center gap-2 backdrop-blur-sm">Hardhat</span>
                        </Marquee>
                    </div>
                </div>
            </section>

            {/* Previous Works Section */}
            <section className="py-24 max-w-6xl mx-auto px-6">
                <h2 className="text-xs uppercase tracking-[0.25rem] text-zinc-500 font-bold text-center mb-16 font-display">
                    Previous Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Project 1 */}
                    <div className="group relative rounded-2xl border border-zinc-800/50 bg-zinc-900/10 overflow-hidden min-h-[440px] flex flex-col justify-end p-6 hover:border-zinc-700/50 transition-all duration-500">
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-10"></div>
                            <div className="absolute inset-0 bg-react bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" />
                        </div>
                        
                        <div className="relative z-10 space-y-4">
                            <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-violet-500/10 text-violet-400 border border-violet-500/20 font-display">
                                Web UX / Branding
                            </span>
                            <h3 className="text-2xl font-display font-extrabold text-zinc-100 group-hover:text-violet-400 transition-colors duration-300">
                                Manam Arts Academy
                            </h3>
                            <p className="text-sm text-zinc-400 font-light leading-relaxed">
                                An art academy focused on painting, music, and calligraphy. Designed an interactive web presence replicating creative classroom environments.
                            </p>
                            <ul className="text-xs text-zinc-500 font-medium space-y-1.5 pt-1">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                                    Smooth framer-based transitions
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                                    Vibrant visual branding
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div className="group relative rounded-2xl border border-zinc-800/50 bg-zinc-900/10 overflow-hidden min-h-[440px] flex flex-col justify-end p-6 hover:border-zinc-700/50 transition-all duration-500">
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-10"></div>
                            <div className="absolute inset-0 bg-eth bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" />
                        </div>
                        
                        <div className="relative z-10 space-y-4">
                            <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 font-display">
                                Blockchain / Web3
                            </span>
                            <h3 className="text-2xl font-display font-extrabold text-zinc-100 group-hover:text-indigo-400 transition-colors duration-300">
                                Arcade Relayer Bridge
                            </h3>
                            <p className="text-sm text-zinc-400 font-light leading-relaxed">
                                Acted as Lead Blockchain Developer for the bridge mechanism, portal setups, and multiple cross-chain decentralized applications.
                            </p>
                            <ul className="text-xs text-zinc-500 font-medium space-y-1.5 pt-1">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                                    Performant contract architecture
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                                    Secure staking & relay mechanisms
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div className="group relative rounded-2xl border border-zinc-800/50 bg-zinc-900/10 overflow-hidden min-h-[440px] flex flex-col justify-end p-6 hover:border-zinc-700/50 transition-all duration-500">
                        <div className="absolute inset-0 z-0 overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-10"></div>
                            <div className="absolute inset-0 bg-eth2 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105" />
                        </div>
                        
                        <div className="relative z-10 space-y-4">
                            <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider bg-fuchsia-500/10 text-fuchsia-400 border border-fuchsia-500/20 font-display">
                                DeFi / Smart Contracts
                            </span>
                            <h3 className="text-2xl font-display font-extrabold text-zinc-100 group-hover:text-fuchsia-400 transition-colors duration-300">
                                Pacific DeFi
                            </h3>
                            <p className="text-sm text-zinc-400 font-light leading-relaxed">
                                A dex aggregator distributing stakes across decentralised exchanges in single-execution transactions. Engineered solidity core.
                            </p>
                            <ul className="text-xs text-zinc-500 font-medium space-y-1.5 pt-1">
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                                    Supports 10+ core token assets
                                </li>
                                <li className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400" />
                                    Aggregated multi-dex routing
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="border-t border-zinc-900 max-w-6xl mx-auto py-12 px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
                <span className="text-xs text-zinc-500 font-light">
                    © {new Date().getFullYear()} Jay Nalam. All rights reserved.
                </span>
                
                <div className="flex gap-x-6 text-zinc-500">
                    <a href="https://www.linkedin.com/in/jveernalam/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors duration-300">
                        <BsLinkedin size={18} />
                    </a>
                    <a href="https://www.github.com/jveer634/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors duration-300">
                        <BsGithub size={18} />
                    </a>
                    <a href="https://www.instagram.com/jveer634/" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-300 transition-colors duration-300">
                        <BsInstagram size={18} />
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Home;
