import { Link } from "react-router-dom";
import { X, MenuIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="px-10 py-4 md:px-16  flex items-center justify-between  items-around ">
            <Link
                to="/"
                className="font-bold text-orange-700 tracking-tighter  text-lg md:text-2xl  p-2 border-black"
            >
                <p>Jay Nalam</p>
            </Link>

            <div className="relative hidden md:flex gap-4 items-center font-mono uppercase tracking-tight rounded-xl">
                <Link to="#">About Me</Link>
                <Link to="#">Services</Link>
                <Link to="#">Projects</Link>
                <Link to="https://blog.jnalam.dev" target="_blank">
                    Blog
                </Link>
                <Link to="/contact" className="relative underline  rounded-2xl">
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
