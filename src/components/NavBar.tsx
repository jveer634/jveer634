import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <nav
                className={`p-6 md:px-16 text-lg absolute text-white z-10 top-0 left-0 flex w-full justify-between items-around md:py-16 `}
            >
                <h1>
                    <Link to="/">
                        <img
                            src={Logo}
                            className=" rounded-full h-10 md:h-12"
                        />
                    </Link>
                </h1>

                <div className="space-x-4">
                    <Link
                        to="https://blog.jnalam.dev"
                        className="bg-neutral-50 text-black py-2 px-4 rounded-lg shadow"
                    >
                        Blog
                    </Link>

                    <Link
                        to="/contact"
                        className=" bg-neutral-50 text-black py-2 px-4 rounded-lg shadow"
                    >
                        Contact
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
