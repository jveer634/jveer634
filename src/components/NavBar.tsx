import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Nav = () => {
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

                <Link to="/contact" className=" bg-neutral-50 text-black p-2">
                    Contact
                </Link>
            </nav>
        </>
    );
};

export default Nav;
