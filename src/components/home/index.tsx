import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Logo from "../../assets/Logo.png";
import { Quote } from "./Quote";
import { StackedCards } from "./StackedCards";
import { useRef } from "react";

const Home = () => {
	const intro = useRef(null);
	useGSAP(() => {
		const timeline = gsap.timeline();

		timeline.from(".main-heading", {
			opacity: 0,
			stagger: 0.5,
		});

		timeline.from("#subheading", {
			opacity: 0,
			ease: "back.out",
			duration: 1,
		});

		gsap.from(intro.current, {
			opacity: 0,
			scrollTrigger: "view",
			duration: 1,
			delay: 0.5,
		});
	});

	return (
		<main className="px-10">
			<section className="grid h-[80vh] grid-cols-2 align-middle gap-4 text-center md:text-left items-center font-bebas">
				<div className="col-span-2  md:col-span-1 place-self-center mt-12">
					<h1 className="md:text-7xl text-5xl text-blue-900">
						<p className="main-heading">
							I don’t just solve problems;
						</p>
						<p className="main-heading">I craft new realities.</p>
					</h1>
					<h3
						className="opacity-85 md:text-2xl text-lg"
						id="subheading"
					>
						Every project is a new challenge, and I’m here to break
						the boundaries of possibility.
					</h3>
				</div>
				<div className="hidden md:inline-block place-self-center">
					<img src={Logo} alt="logo" />
				</div>
			</section>

			<div className="text-justify grid place-content-center h-[80vh] p-4  w-full bg-neutral-200 text- md:text-2xl  tracking-tight font-semibold ">
				<p className="max-w-2xl" ref={intro}>
					I am{" "}
					<span className="text-orange-500 scale-150 uppercase">
						Jay Nalam
					</span>
					, a relentless problem-solver with a passion for coding.
					Each line of code is a chance to challenge the status quo
					and push the boundaries of what's possible in the world of
					software development.
				</p>
			</div>

			<section className="mt-28">
				<h3 className="font-bebas text-orange-500 text-3xl md:text-5xl text-center">
					Technologies
				</h3>
				<p className="text-center text-lg">
					Here are the list of technologies I am good at.
				</p>
				<StackedCards />
			</section>
			<Quote />

			<section className="my-28">
				<h3 className="font-bebas text-orange-500 text-3xl md:text-5xl text-center">
					Previous Work
				</h3>
				<p className="text-center text-lg">
					Here are the list of technologies I am good at.
				</p>

				{/* <div className="grid grid-cols-2 grid-rows-2 gap-2 *:p-8 *:hover:drop-shadow-2xl h-[50vh]">
					<div className="row-span-2 bg-green-500">
						<h1 className="font-nostalgia  text-4xl">
							BundlesBets Staking
						</h1>

						<p></p>
					</div>
					<div className="bg-amber-400">2</div>
					<div className="bg-red-300">3</div>
				</div> */}
			</section>
		</main>
	);
};

export default Home;
