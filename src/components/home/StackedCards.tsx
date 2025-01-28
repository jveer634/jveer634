import { Link } from "react-router-dom";

import {
	SiDjango,
	SiEthereum,
	SiPython,
	SiReact,
	SiRust,
	SiSolidity,
	SiSui,
	SiTailwindcss,
	SiVite,
	SiMysql,
} from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

type CardType = {
	title: string;
	description: string;
	bgColor: string;
	icons: any[];
	titleColor: string;
};

const cards: CardType[] = [
	{
		title: "Blockchain Techonology",
		bgColor: "bg-orange-100",
		icons: [SiSolidity, SiEthereum, SiSui],
		titleColor: "text-blue-900",
		description:
			"I’ve developed staking platforms, NFT engines, marketplaces, and gaming smart contracts across Ethereum, Polygon, BSC, and Sui, showcasing innovative and scalable blockchain solutions.",
	},
	{
		title: "Frontend Development",
		bgColor: "bg-emerald-100",
		icons: [SiReact, RiNextjsFill, SiVite, SiTailwindcss],
		titleColor: "text-red-700",
		description:
			"I’ve developed responsive Web3 frontends using ReactJS and NextJS, delivering seamless, user-friendly interfaces for dApps with smooth blockchain integration and optimized performance.",
	},

	{
		title: "Backend Development",
		bgColor: "bg-pink-100",
		icons: [SiRust, SiDjango, SiMysql, SiPython],
		titleColor: "text-violet-700",
		description:
			"Proficient in backend development using Python with Django, MySQL for database management, and currently expanding my knowledge of Rust for building high-performance systems.",
	},
];

export const StackedCards = () => {
	return cards.map((card, index) => <Card key={index} {...card} />);
};

const Card = ({ title, description, bgColor, icons, titleColor }: CardType) => {
	const container = useRef(null);
	const card = useRef(null);

	useGSAP(
		() => {
			gsap.from(card.current, {
				scale: 1.25,
				duration: 1,
				delay: 0.7,
				ease: "power1.inOut",
				scrollTrigger: {
					trigger: container.current,
					start: "start center",
					end: "center center",
					scrub: true,
				},
			});
		},
		{ scope: container }
	);

	return (
		<div
			className="sticky top-0  flex items-center justify-center h-screen"
			ref={container}
		>
			<div
				className={`max-w-[1000px] w-full h-[400px] grid grid-rows-2 ${bgColor} rounded-[3rem] p-10`}
				ref={card}
			>
				<div className="self-start  h-full col-span-2 md:col-span-1">
					<h4
						className={`text-2xl md:text-4xl lg:text-6xl font-bebas ${titleColor}`}
					>
						{title}
					</h4>

					<div className="flex gap-1 mt-2">
						{icons.map((icon, index) => {
							const IconComponent = icon;
							return (
								<IconComponent
									className="fill-black hover:scale-110 transition-all ease-in-out delay-100 opacity-90 hover:opacity-100"
									size={20}
									key={index}
								/>
							);
						})}
					</div>
				</div>
				<div className=" h-full flex items-end flex-col justify-end  row-start-2 col-start-2  self-end justify-self-end text-right">
					<p className="tracking-tight">{description}</p>

					<Link
						to="#"
						className="text-blue-900 font-bold flex underline underline-offset-4 items-center justify-end"
					>
						View more
					</Link>
				</div>
			</div>
		</div>
	);
};
