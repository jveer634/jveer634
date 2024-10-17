import { Link } from "react-router-dom";
import { X, MenuIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="items-around flex items-center justify-between px-10 py-4 md:px-16">
            <Link
                to="/"
                className="border-black p-2 text-lg font-bold tracking-tighter text-orange-700 md:text-2xl"
            >
                <p>Jay Nalam</p>
            </Link>

            <div className="relative hidden items-center gap-4 rounded-xl font-mono uppercase tracking-tight md:flex">
                <Link to="/about">About Me</Link>
                <Link to="/services">Services</Link>
                <Link to="/projects">Projects</Link>
                <Link to="https://blog.jnalam.dev" target="_blank">
                    Blog
                </Link>
                <Link to="/contact" className="relative rounded-2xl underline">
                    Connect
                </Link>
            </div>

            <Button
                variant="ghost"
                className="md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X /> : <MenuIcon />}
            </Button>
        </nav>
    );
};

export default Navbar;
