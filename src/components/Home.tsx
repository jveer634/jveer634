import { useEffect } from "react";
import Me from "../assets/Me.jpg";

import gsap from "gsap";
import { Link } from "react-router-dom";

import Marquee from "react-fast-marquee";

const Home = () => {
    useEffect(() => {
        const timeline = gsap.timeline({ defaults: { ease: "power1.out" } });

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
        timeline.to(
            ".animate",
            {
                opacity: "100%",
                duration: 1,
                stagger: 0.1,
            },
            "-=1.25"
        );

        timeline.to(
            ".img",
            { opacity: "100%", duration: 1.5, ease: "power2.in" },
            "-=1"
        );
    }, []);

    return (
        <div className="bg-black text-slate-100 ">
            <section className=" intro z-20 w-full h-full bg-black fixed font-extrabold text-4xl md:text-6xl top-0 left-0 flex items-center justify-center">
                <div className="leading-normal">
                    <h1 className="text opacity-0">Thinking of levelling </h1>
                    <h1 className="text opacity-0">up your</h1>
                    <h1 className="text opacity-0">business ?</h1>
                </div>
            </section>
            <section className="h-screen flex flex-col md:flex-row ">
                <div className="md:w-1/2 h-1/2 md:h-full ">
                    <img
                        src={Me}
                        alt=""
                        className="object-cover h-full w-full opacity-0 img"
                    />
                </div>
                <div className="md:w-1/2 md:h-full md:flex md:items-center  ">
                    <div className="p-10  space-y-6  ">
                        <div className="  relative top-12 opacity-0 animate">
                            <h1 className="text-3xl sm:text-xl lg:text-6xl font-nostalgia font">
                                I am
                                <span className="text-6xl lg:text-8xl  ml-5 ">
                                    Jay Nalam
                                </span>
                            </h1>
                        </div>

                        <div className="relative top-12 opacity-0 animate ">
                            <h2 className="text-lg font-extralight  lg:w-10/12 ">
                                A{" "}
                                <span className="font-bold">
                                    FREELANCE WEB DEVELOPER
                                </span>{" "}
                                and Blockchain Developer from India.
                                <br /> And I create websites that level up the
                                standards of your business and will boost up
                                your network.
                            </h2>
                        </div>

                        <Link
                            to="/contact"
                            className="text-black relative top-20 bg-slate-100  p-3 rounded-sm opacity-0 animate"
                        >
                            Connect With Me &nbsp;
                        </Link>
                    </div>
                </div>
            </section>

            <div className="w-10/12 md:w-8/12 my-36 md:my-48 mx-auto text-xl text-center">
                <h2 className="m-8 text-2xl ">My Skills</h2>
                <Marquee
                    autoFill
                    speed={55}
                    pauseOnHover
                    gradient={true}
                    gradientColor="black"
                >
                    <p className=" m-2 text-slate-300">Django</p>
                    <p className=" m-2 text-slate-300">React Js</p>
                    <p className=" m-2 text-slate-300">REST API</p>
                    <p className=" m-2 text-slate-300">MySQL</p>
                </Marquee>
                <Marquee
                    autoFill
                    pauseOnHover
                    gradient={true}
                    gradientColor="black"
                >
                    <p className="text-slate-300 m-2">EVM Blockchains</p>
                    <p className="text-slate-300 m-2">Solidity</p>
                    <p className="text-slate-300 m-2">GoLang</p>
                    <p className="text-slate-300 m-2">Hardhat</p>
                </Marquee>
            </div>

            <section className="h-screen font-poppins  grid grid-rows-7 gap-10 ">
                <div className="text-2xl  m-auto mb-0 ">My Previous Works</div>

                <div className=" row-span-2 bg-react bg-cover bg-center bg-no-repeat  ">
                    <div className=" min-w-[80%] flex gap-10 items-center mx-auto px-4 md:px-10 h-full ">
                        <h1 className=" text-2xl w-1/3">Manam Arts Academy</h1>
                        <ul className=" font-thin space-y-2 text-sm md:text-lg w-2/3 ">
                            <li>
                                An art academy that teaches musical instruments,
                                paintings and caligraphy.
                            </li>
                            <li>
                                Designed and developed a website that reprsents
                                the enviroment of the class and fun way of
                                starting the users creative journey.
                            </li>

                            <li>
                                A react based websited that has cool transitions
                                along with a variety of animations.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className=" row-span-2 bg-eth bg-cover bg-center bg-no-repeat  ">
                    <div className="  min-w-[80%] flex gap-10 items-center mx-auto px-4 md:px-10 h-full ">
                        <h1 className=" text-2xl w-1/3">
                            Arcade Relayer Bridge
                        </h1>
                        <ul className=" font-thin space-y-2 text-sm md:text-lg w-2/3 ">
                            <li>
                                Acting as lead blockchain developer in the
                                relayer bridge, staking portals and other web3
                                dApps.
                            </li>
                            <li>
                                Leading teams to optimize performance and
                                deliver user-centric solutions
                            </li>
                            <li>
                                Guiding development and planning for future
                                iterations.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className=" row-span-2 bg-eth2 bg-cover bg-center bg-no-repeat ">
                    <div className="  min-w-[80%] flex gap-10 items-center mx-auto px-4 md:px-10 h-full ">
                        <h1 className=" text-2xl w-1/3">Pacific DeFi</h1>
                        <ul className=" font-thin space-y-2 text-sm md:text-lg w-2/3 ">
                            <li>
                                A DEX aggregator that supplies your stake to
                                multiple decentralized exchanges in one
                                transaction.
                            </li>
                            <li>
                                Developed smart contracts and integrated with
                                frontend to interact with 3 different DEXs and
                                10 supports different tokens at the inital
                                stage.
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <footer className="min-h-10 mt-10  text-center">
                <h2 className="p-4 w-80 mx-auto border-white border-t-2 ">
                    Thanks for visiting
                </h2>
            </footer>
        </div>
    );
};

export default Home;
