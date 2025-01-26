import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const links = [
	{
		title: "About",
		url: "/about",
	},
	{
		title: "Projects",
		url: "/projects",
	},
	{
		title: "Blog",
		url: "https://blog.jnalam.dev",
	},
	{
		title: "Connect",
		url: "/connect",
	},
];

const Navbar = () => {
	return (
		<nav className="flex justify-between items-center p-10">
			<Link
				to="/"
				className="font-bold text-orange-500 tracking-tighter text-2xl"
			>
				<h1 className="">Jay Nalam</h1>
			</Link>

			<div className="hidden xl:flex gap-4 items-center font-mono uppercase tracking-tight rounded-xl">
				{links.map((link) => {
					return (
						<Link
							to={link.url}
							key={link.url}
							className=" ease-in transition-all duration-100  hover:border-b-2 border-b-orange-500"
						>
							{link.title}
						</Link>
					);
				})}
			</div>

			<GiHamburgerMenu className="fill-black xl:hidden" size={18} />

			{/* todo: add mobile click menu */}
		</nav>
	);
};

export default Navbar;
