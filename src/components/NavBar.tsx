import { useState } from "react";
import Logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

import { smoothScrollTo } from "../utils/smoothScroll";

const Nav = () => {
    const location = useLocation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const isHome = location.pathname === "/";

    const navLinks = [
        { name: "Explore", href: isHome ? "#overview" : "/#overview" },
        { name: "Technology", href: isHome ? "#technology" : "/#technology" },
        { name: "Experience", href: isHome ? "#experience" : "/#experience" },
        { name: "Journal", href: "https://blog.jnalam.dev", external: true },
        { name: "Contact", href: "/contact", isRoute: true },
    ];

    const handleLogoClick = (e: React.MouseEvent) => {
        setMobileMenuOpen(false);
        if (location.pathname === "/") {
            e.preventDefault();
            smoothScrollTo(0, 1.25);
        }
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        setMobileMenuOpen(false);
        if (href.startsWith("#")) {
            e.preventDefault();
            smoothScrollTo(href, 1.25);
            window.history.pushState(null, "", href);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
            <div className="w-full px-4 sm:px-10 md:px-16 py-3.5 flex justify-between items-center">
                <div className="flex items-center gap-4">
                    {/* Smooth Animated Hamburger / Close Morph Button */}
                    <button
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        className="lg:hidden text-zinc-300 hover:text-[#ff1744] active:scale-95 p-2.5 rounded-none bg-white/[0.04] border border-white/10 hover:border-[#ff1744]/40 cursor-pointer transition-[transform,colors,border-color] duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                        aria-label="Toggle Navigation Menu"
                        aria-expanded={mobileMenuOpen}
                    >
                        <div className="w-4 h-3.5 flex flex-col justify-between items-center relative">
                            <span
                                className={`w-full h-0.5 bg-current transition-transform duration-250 ease-[cubic-bezier(0.23,1,0.32,1)] origin-center ${
                                    mobileMenuOpen ? "rotate-45 translate-y-[6px] bg-[#ff1744]" : ""
                                }`}
                            />
                            <span
                                className={`w-full h-0.5 bg-current transition-opacity duration-150 ${
                                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                                }`}
                            />
                            <span
                                className={`w-full h-0.5 bg-current transition-transform duration-250 ease-[cubic-bezier(0.23,1,0.32,1)] origin-center ${
                                    mobileMenuOpen
                                        ? "-rotate-45 -translate-y-[6px] bg-[#ff1744]"
                                        : ""
                                }`}
                            />
                        </div>
                    </button>

                    <Link
                        to="/"
                        onClick={handleLogoClick}
                        className="flex items-center gap-3 group cursor-pointer active:scale-[0.98] transition-transform duration-150 ease-[cubic-bezier(0.23,1,0.32,1)]"
                        title="Back to Top"
                    >
                        <img
                            src={Logo}
                            alt="Jay Nalam Logo"
                            className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#ff1744]/70 group-hover:shadow-[0_0_15px_rgba(255,23,68,0.5)] transition-[border-color,box-shadow] duration-200"
                        />
                        <span className="text-zinc-100 font-bebas text-xl tracking-[0.18em] uppercase group-hover:text-[#ff1744] transition-colors duration-150 leading-none pt-0.5">
                            Jay Nalam
                        </span>
                        {/* Refined radar status beacon */}
                        <span className="relative flex h-2 w-2 items-center justify-center">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-[#ff1744] opacity-50 animate-pulse-subtle" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#ff1744]" />
                        </span>
                    </Link>
                </div>

                {/* Right: Clean Navigation Links with Tactile Feedback */}
                <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] font-mono tracking-[0.25em] uppercase text-zinc-400">
                    {navLinks.map((link) => {
                        const linkClasses =
                            "relative py-1 text-zinc-400 hover:text-white active:scale-95 transition-[transform,color] duration-150 cursor-pointer group flex items-center gap-1";
                        const underline = (
                            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#ff1744] group-hover:w-full transition-[width] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_0_8px_#ff1744]" />
                        );

                        if (link.external) {
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={linkClasses}
                                >
                                    <span>{link.name}</span>
                                    <span className="text-[10px] text-zinc-600 group-hover:text-[#ff1744] transition-colors duration-150">
                                        ↗
                                    </span>
                                    {underline}
                                </a>
                            );
                        }
                        if (link.isRoute) {
                            const isCurrent = location.pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`relative py-1 active:scale-95 ${
                                        isCurrent
                                            ? "text-[#ff1744] font-bold"
                                            : "text-zinc-400 hover:text-white"
                                    } transition-[transform,color] duration-150 cursor-pointer group flex items-center gap-1`}
                                >
                                    <span>{link.name}</span>
                                    <span
                                        className={`absolute bottom-0 left-0 h-[2px] bg-[#ff1744] transition-[width] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-[0_0_8px_#ff1744] ${
                                            isCurrent ? "w-full" : "w-0 group-hover:w-full"
                                        }`}
                                    />
                                </Link>
                            );
                        }

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className={linkClasses}
                            >
                                <span>{link.name}</span>
                                {underline}
                            </a>
                        );
                    })}
                </nav>
            </div>

            {/* Mobile Dropdown with CSS Grid 0fr -> 1fr (No layout reflow thrash) */}
            <div
                className={`lg:hidden border-t border-white/10 bg-black/98 px-6 sm:px-10 transition-[grid-template-rows,opacity,padding] duration-250 ease-[cubic-bezier(0.23,1,0.32,1)] grid ${
                    mobileMenuOpen
                        ? "grid-rows-[1fr] py-5 opacity-100"
                        : "grid-rows-[0fr] py-0 opacity-0 pointer-events-none"
                } font-mono text-xs uppercase tracking-widest backdrop-blur-2xl`}
            >
                <div className="overflow-hidden space-y-4">
                    {navLinks.map((link) => {
                        const isCurrent = link.isRoute && location.pathname === link.href;

                        if (link.external) {
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="block text-zinc-300 hover:text-[#ff1744] active:scale-95 py-1.5 transition-[transform,color] duration-150"
                                >
                                    {link.name} ↗
                                </a>
                            );
                        }

                        if (link.isRoute) {
                            return (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`block active:scale-95 ${
                                        isCurrent ? "text-[#ff1744] font-bold" : "text-zinc-300"
                                    } hover:text-[#ff1744] py-1.5 transition-[transform,color] duration-150`}
                                >
                                    {link.name}
                                </Link>
                            );
                        }

                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="block text-zinc-300 hover:text-[#ff1744] active:scale-95 py-1.5 cursor-pointer transition-[transform,color] duration-150"
                            >
                                {link.name}
                            </a>
                        );
                    })}
                </div>
            </div>
        </header>
    );
};

export default Nav;
