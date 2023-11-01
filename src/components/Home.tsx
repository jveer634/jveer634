import { useEffect } from "react";
import Programmer from "../assets/programmer.svg";

import gsap from "gsap";

const Home = () => {
    useEffect(() => {
        const timeline = gsap.timeline({
            defaults: { ease: "power1.out" },
        });

        timeline.to(
            ".text",
            {
                opacity: 100,
                duration: 1,
                stagger: 0.75,
                delay: 0.5,
            },
            "+=0.5"
        );
        timeline.to(".intro", { y: "-100%", duration: 1.5 });
    }, []);
    return (
        <>
            <section className="min-h-[90vh]">
                <main className=" text-left flex flex-col mx-auto max-w-4xl">
                    <div className="mt-36 leading-7">
                        <h2 className="text-blue-800 font-bold text-7xl ">
                            Jay Nalam
                        </h2>
                        <p className=" mt-6 font-normal text-slate-600  text-xl ">
                            A seasoned Blockchain Developer and Tech Lead,
                            specializing in blockchain networks, solidity smart
                            contracts, and web3 protocols. With a track record
                            of creating NFTs, marketplaces, and DeFi solutions,
                            crypto bridges, I'm on a mission to deepen my
                            expertise in blockchain engineering.
                        </p>
                    </div>

                    <img
                        src={Programmer}
                        className=" mx-auto mt-24 md:max-w-lg"
                    />
                </main>
            </section>

            <div className=" intro w-full h-full bg-black fixed text-white font-extrabold text-4xl md:text-6xl top-0 left-0 flex items-center justify-center">
                <div className="leading-normal p-4">
                    <h1 className="text opacity-0">Wake up to the Reality</h1>
                    <h1 className="text opacity-0">
                        Nothing ever goes as planned
                    </h1>
                    <h1 className="text opacity-0">in this accursed world</h1>
                </div>
            </div>
        </>
    );
};

export default Home;
