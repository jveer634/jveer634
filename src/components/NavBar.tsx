import { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { BsList, BsX } from "react-icons/bs";

const Nav = () => {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isHome = location.pathname === "/";

    const navLinks = [
        { name: "Explore", href: isHome ? "#overview" : "/#overview" },
        { name: "Technology", href: isHome ? "#technology" : "/#technology" },
        { name: "Experience", href: isHome ? "#experience" : "/#experience" },
        { name: "Journal", href: "https://blog.jnalam.dev", external: true },
        { name: "Contact", href: isHome ? "#contact" : "/#contact" },
    ];

    const handleLogoClick = (e: React.MouseEvent) => {
        setMobileMenuOpen(false);
        if (location.pathname === "/") {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setMobileMenuOpen(false);
        if (href.startsWith("#")) {
            e.preventDefault();
            const targetId = href.substring(1);
            const el = document.getElementById(targetId);
            if (el) {
                el.scrollIntoView({ behavior: "smooth" });
                window.history.pushState(null, "", href);
            }
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
            <div className="w-full px-4 sm:px-10 md:px-16 py-3.5 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        className="lg:hidden text-zinc-300 hover:text-white transition-colors p-2 rounded-none bg-white/[0.04] border border-white/10 cursor-pointer"
                        aria-label="Toggle Navigation Menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        {mobileMenuOpen ? <BsX size={20} /> : <BsList size={20} />}
                    </button>

                    <Link
                        to="/"
                        onClick={handleLogoClick}
                        className="flex items-center gap-3 group cursor-pointer"
                        title="Back to Top"
                    >
                        <img
                            src={Logo}
                            alt="Jay Nalam Logo"
                            className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#ff1744]/70 group-hover:shadow-[0_0_15px_rgba(255,23,68,0.5)] transition-all duration-300"
                        />
                        <span className="text-zinc-100 font-syne font-black text-sm tracking-[0.2em] uppercase group-hover:text-[#ff1744] transition-colors">
                            Jay Nalam
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ff1744] animate-ping" />
                    </Link>
                </div>

                {/* Right: Clean Navigation Links for Large Screens */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] font-mono tracking-[0.25em] uppercase text-zinc-400">
                    {navLinks.map((link) => {
                        if (link.external) {
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white transition-colors duration-200"
                                >
                                    {link.name}
                                </a>
                            );
                        }
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="hover:text-white transition-colors duration-200 cursor-pointer"
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </nav>
            </div>

            {/* Mobile Dropdown */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-t border-white/10 bg-black/98 px-6 sm:px-10 py-5 space-y-4 font-mono text-xs uppercase tracking-widest backdrop-blur-2xl">
                    {navLinks.map((link) => {
                        if (link.external) {
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-zinc-300 hover:text-[#ff1744] py-1.5"
                                >
                                    {link.name} ↗
                                </a>
                            );
                        }
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="block text-zinc-300 hover:text-[#ff1744] py-1.5 cursor-pointer"
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </div>
            )}
        </header>
    );
};

export default Nav;
