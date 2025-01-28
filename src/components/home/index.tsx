import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import Logo from "../../assets/Logo.png";
import { Quote } from "./Quote";
import { StackedCards } from "./StackedCards";
import { useRef } from "react";
import SkillsSection from "./Skills";

gsap.registerPlugin(ScrollTrigger)

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

		const el = intro.current;

		gsap.from(el, {
			opacity: 0,
			scrollTrigger: el,
			duration: 1,
			delay: 0.5,
		});
	});

	return (
		<main>
			<section className="px-10  h-[90vh]  flex items-center justify-around text-center md:text-left font-bebas">
				<div className="lg:w-1/2 w-3/5">
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
				<div className="hidden md:inline-block">
					<img src={Logo} alt="logo" className="contain" />
				</div>
			</section>

			<div className="text-justify h-screen px-10 grid place-content-center p-4  w-full bg-neutral-200 text- md:text-2xl  tracking-tight font-semibold ">
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

			<SkillsSection />
			
			<Quote />

			<section className="my-28 p-10">
				<h3 className="font-bebas text-orange-500 text-3xl md:text-5xl text-center">
					Previous Work
				</h3>
				<p className="text-center text-lg">
					Here are the list of technologies I am good at.
				</p>
				<StackedCards />
			</section>

			
		</main>
	);
};

export default Home;
