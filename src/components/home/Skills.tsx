import { RiNextjsFill } from "react-icons/ri";
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
    SiDocker,
    SiLinux,
} from "react-icons/si";
import { GiDatabase } from "react-icons/gi";
import { FaNetworkWired } from "react-icons/fa6";

import { Card, CardContent, CardDescription, CardTitle, CardHeader } from "../ui/card";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";

type Skill = {
    title: string;
    description: string;   
    icons: any[];

};

const cards: Skill[] = [
    {
        title: "Blockchain Techonology",
        icons: [SiSolidity, SiEthereum, SiSui, SiRust],

        description:
            "I’ve developed staking platforms, NFT engines, marketplaces, and gaming smart contracts across Ethereum, Polygon, BSC, and Sui, showcasing innovative and scalable blockchain solutions.",
    },
    {
        title: "Frontend Development",
        icons: [SiReact, RiNextjsFill, SiVite, SiTailwindcss],

        description:
            "I’ve developed responsive Web3 frontends using ReactJS and NextJS, delivering seamless, user-friendly interfaces for dApps with smooth blockchain integration and optimized performance.",
    },

    {
        title: "Backend Development",
        icons: [SiRust, SiDjango, GiDatabase , SiPython],

        description:
            "Proficient in backend development using Python with Django, MySQL for database management, and currently expanding my knowledge of Rust for building high-performance systems.",
    },

    {
        title: "Rust & Systems Engineering",
        icons: [SiRust, SiDocker, SiLinux,  FaNetworkWired ],

        description:
            "I specialize in Rust programming and systems engineering, with expertise in network protocols like TCP, UDP, and HTTP. I excel at designing scalable, high-performance systems and robust solutions.",
    },
];

// const cards2: Skill[] = [
//     {
//         title: "Blockchain Techonology",
//         icons: [{icon: SiSolidity, color: "#627EEA"}, {icon: SiEthereum, color: "#627EEA"}, {icon: SiSui, color: "#4F46E5"}, {icon: SiRust, color: "#DEA584"}],

//         description:
//             "I’ve developed staking platforms, NFT engines, marketplaces, and gaming smart contracts across Ethereum, Polygon, BSC, and Sui, showcasing innovative and scalable blockchain solutions.",
//     },
//     {
//         title: "Frontend Development",
//         icons: [{icon: SiReact, color: "#DEA584"}, {icon: RiNextjsFill, color: "#fff"}, {icon: SiVite, color:"#646CFF"}, {icon: SiTailwindcss, color: "#06B6D4"}],

//         description:
//             "I’ve developed responsive Web3 frontends using ReactJS and NextJS, delivering seamless, user-friendly interfaces for dApps with smooth blockchain integration and optimized performance.",
//     },

//     {
//         title: "Backend Development",
//         icons: [{icon: SiRust, color: "#DEA584"}, {icon: SiDjango, color: "#092E20"}, {icon: GiDatabase, color: "#fff"} , {icon: SiPython, color: "#3776AB"}],

//         description:
//             "Proficient in backend development using Python with Django, MySQL for database management, and currently expanding my knowledge of Rust for building high-performance systems.",
//     },

//     {
//         title: "Rust & Systems Engineering",
//         icons: [{icon: SiRust, color: "#DEA584"}, {icon: SiDocker, color: "#fff"}, {icon: SiLinux, color:"#fff"},  {icon: FaNetworkWired, color: "#fff"}         ],

//         description:
//             "I specialize in Rust programming and low-level systems engineering, with expertise in network protocols like TCP, UDP, and HTTP. My skills include designing scalable, high-performance systems and implementing robust solutions for complex challenges",
//     },
// ];


const SkillsSection = () => {

    const sectionRef = useRef(null)

    useGSAP(() => {
        const section = sectionRef.current;
        gsap.from(section, {
            ease: "power1.inOut",
            opacity: 0,
            duration:1,
            scrollTrigger: {
                trigger: section,
                // start: "bottom"
                start: "top 90%",
                // end: "bottom 20%",
                // markers: true,
                // toggleClass: "opacity-100"
            }
        })

    })

  return (
    <section ref={sectionRef} className="bg-black/95 min-h-screen p-10 flex gap-16 flex-col justify-center items-stretch">
            <div className=" ">
                <h3 className="font-bebas text-orange-500 text-3xl md:text-5xl text-center">
					Technologies
				</h3>
			    <p className="text-center text-lg text-neutral-300">
					Here are the list of technologies I am good at.
				</p>
            </div>
                

			<div className="grid self-center bg--100 grid-cols-2  gap-8  ">
			    {
                    cards.map((card, index) => 
                        (<Card key={index} className="bg-white/10 hover:scale-105  col-span-2 md:col-span-1  max-w-lg  text-white border-none shadow-lg shadow-white/15   backdrop-blur-lg">
                            <CardHeader>
                                <CardTitle className="text-orange-500 mb-3 ">{card.title}</CardTitle>
                                <CardDescription className="flec items-center">

                                  
						{card.icons.map((icon, index) => {
							const IconComponent = icon;
							return (
								<IconComponent
									className="fill-white/70 mr-2 inline-flex hover:fill-white transition-all ease-in-out delay-100 opacity-90 hover:opacity-100"
									size={24}
									key={index}
								/>
							);
						})}
					
                                </CardDescription>
                            </CardHeader>

                            <CardContent>
                                <p className="text-neutral-300">
                                    {card.description}
                                </p>
                            </CardContent>

                        </Card>))
                }

			</div>
	</section>
  )
}

export default SkillsSection