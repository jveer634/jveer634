import Logo from "../assets/logo.svg";

import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <nav className="px-16 text-lg bg-transparent absolute text-white z-10 top-0 left-0 flex w-full justify-between items-around md:py-16 p-4 ">
                <h1 className="drop-shadow-lg shadow-slate-300">
                    <Link to="/">
                        <img src={Logo} className=" rounded-full h-10" />
                    </Link>
                </h1>
                <ul className="flex ">
                    <li className=" p-2 rounded-lg border-white border-2  ">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Nav;
