import Logo from "../assets/logo.svg";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
    const location = useLocation();

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-[#070709]/70 backdrop-blur-md border-b border-zinc-900/60">
            <div className="max-w-6xl mx-auto px-6 py-4 md:px-12 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-3 group">
                    <img
                        src={Logo}
                        className="rounded-full h-8 w-8 md:h-10 md:w-10 border border-zinc-800 group-hover:border-violet-500/40 transition-colors duration-300"
                        alt="Logo"
                    />
                    <span className="text-zinc-100 font-display font-bold tracking-tight text-sm md:text-base">
                        Jay Nalam
                    </span>
                </Link>

                <nav className="flex items-center gap-6 md:gap-8">
                    <a
                        href="https://blog.jnalam.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-zinc-100 text-sm font-medium transition-colors duration-300"
                    >
                        Blog
                    </a>

                    <Link
                        to="/contact"
                        className={`text-sm font-semibold px-4 py-2.5 rounded-xl tracking-wide transition-all duration-300 ${
                            location.pathname === "/contact"
                                ? "bg-violet-600 text-white shadow-lg shadow-violet-600/10 hover:bg-violet-500"
                                : "bg-zinc-100 text-zinc-950 hover:bg-white hover:shadow-lg hover:shadow-white/5"
                        }`}
                    >
                        Contact
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Nav;
