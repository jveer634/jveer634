import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SplitType from "split-type";

export const Quote = () => {
	const container = useRef(null);
	useGSAP(
		() => {
			new SplitType("#quote", {
				split: "words",
			});

			gsap.from(".word", {
				opacity: 0,
				stagger: 0.25,
				scrollTrigger: container.current,
			});
		},
		{ scope: container }
	);

	return (
		<section className=" x:w-1/2 p-20 xl:text-left text-center" ref={container}>
			<p
				className="font-bebas text-6xl xl:text-8xl text-center"
				id="quote"
			>
				In this world, wherever there is code, there are bugs to be
				found.
			</p>
		</section>
	);
};
