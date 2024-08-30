import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="px-10 py-4 md:px-16  flex items-center justify-between  items-around ">
            <Link
                to="/"
                className="font-bold tracking-tighter text-2xl  p-2 border-black"
            >
                <p>Jay Nalam</p>
            </Link>

            <div className="flex relative  gap-4 items-center font-mono uppercase tracking-tight rounded-xl">
                <Link to="#">About Me</Link>
                {/* <Link to="#">Services</Link> */}
                <Link to="#">Projects</Link>
                <Link to="https://blog.jnalam.dev" target="_blank">
                    Blog
                </Link>
                <Link to="/contact" className="relative underline  rounded-2xl">
                    Connect
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
