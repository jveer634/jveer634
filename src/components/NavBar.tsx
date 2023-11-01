import Logo from "../assets/logo.svg";

import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <nav className="text-lg flex justify-between items-center h-[10vh] ">
                <h1>
                    <Link to="/">
                        <img src={Logo} className=" rounded-full h-10" />
                    </Link>
                </h1>

                <ul className="flex ">
                    <li className="hover:text-white hover:bg-blue-800 p-3 rounded-md ">
                        <Link className="block" to="/projects">
                            Projects
                        </Link>
                    </li>
                    {/* <li className="hover:text-white hover:bg-blue-800 p-3 rounded-md">
                        <Link to="/experience">Experience</Link>
                    </li> */}
                    <li className="hover:text-white hover:bg-blue-800 p-3 rounded-md">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
