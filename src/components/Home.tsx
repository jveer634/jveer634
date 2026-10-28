import { useEffect } from "react";
import gsap from "gsap";
import { BsGithub, BsLinkedin, BsBook } from "react-icons/bs";

import Hero from "./Hero";
import ArchitecturalDossier from "./ArchitecturalDossier";

const Home = () => {
    useEffect(() => {
        // Reset states for a pristine execution
        gsap.set(".intro-curtain", { display: "flex", y: "0%" });
        gsap.set(".intro-text", { opacity: 0, y: 24 });

        const timeline = gsap.timeline({
            defaults: { ease: "power3.out" },
            onComplete: () => {
                gsap.set(".intro-curtain", { display: "none" });
            },
        });

        timeline
            .to(".intro-text", {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.22,
                ease: "power3.out",
                delay: 0.1,
            })
            .to(
                ".intro-text",
                {
                    opacity: 0.85,
                    duration: 0.35,
                },
                "+=0.45"
            )
            .to(".intro-curtain", {
                y: "-100%",
                duration: 1.15,
                ease: "power4.inOut",
            });

        return () => {
            timeline.kill();
        };
    }, []);

    return (
        <div className="bg-[#040406] text-zinc-100 min-h-screen selection:bg-[#ff1744]/25 selection:text-[#ff1744]">
            {/* GSAP Entrance Curtain Overlay - z-[100] so it sits above fixed navbar */}
            <section className="bg-[#040406] intro-curtain z-[100] h-screen w-full font-display font-black text-2xl sm:text-4xl md:text-5xl flex flex-col justify-center items-center fixed top-0 left-0 pointer-events-none">
                <div className="space-y-3 text-center px-4">
                    <div className="intro-text opacity-0 font-light text-[#ff1744] text-xs sm:text-sm font-mono tracking-[0.35rem] uppercase">
                        Wake up to reality
                    </div>
                    <div className="intro-text opacity-0 text-zinc-100 font-syne font-black text-3xl sm:text-5xl md:text-6xl tracking-tight uppercase text-balance">
                        Absolute Determinism
                    </div>
                    <div className="intro-text opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-[#8b5cf6] via-purple-300 to-[#ff1744] text-xl sm:text-3xl font-syne font-extrabold uppercase tracking-wide text-balance">
                        & Sub-Microsecond Architecture
                    </div>
                </div>
            </section>

            {/* Hero Section */}
            <Hero />

            {/* Framed Architectural Dossier: Matching Hero Width Exactly */}
            <ArchitecturalDossier />

            {/* Footer: Flush with Hero and Dossier margins */}
            <footer className="border-t border-white/[0.08] w-full px-4 sm:px-10 md:px-16 py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-400 font-mono">
                <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
                    <span>© {new Date().getFullYear()} Jay Nalam.</span>
                    <span className="hidden sm:inline text-zinc-600">•</span>
                    <span className="text-zinc-400 italic">
                        “Power is not will. It is the phenomenon of physically making things
                        happen.” — Madara Uchiha
                    </span>
                </div>

                <div className="flex items-center gap-6 text-zinc-400">
                    <a
                        href="https://www.linkedin.com/in/jveernalam/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#ff1744] active:scale-95 flex items-center gap-1.5 transition-[transform,color] duration-150"
                    >
                        <BsLinkedin size={15} />
                        <span>LinkedIn</span>
                    </a>
                    <a
                        href="https://www.github.com/jveer634/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-[#8b5cf6] active:scale-95 flex items-center gap-1.5 transition-[transform,color] duration-150"
                    >
                        <BsGithub size={15} />
                        <span>GitHub</span>
                    </a>
                    <a
                        href="https://blog.jnalam.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white active:scale-95 flex items-center gap-1.5 transition-[transform,color] duration-150"
                    >
                        <BsBook size={15} />
                        <span>Web3 Engineering Blog</span>
                    </a>
                </div>
            </footer>
        </div>
    );
};

export default Home;
