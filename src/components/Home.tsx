import { Link } from "react-router-dom";

import Marquee from "react-fast-marquee";

const Home = () => {
    return (
        <main className=" text-slate-100 ">
            <section className="flex flex-col md:flex-row h-screen ">
                <div className="h-1/2  md:w-1/2 md:h-full flex flex-col justify-center px-8 ">
                    <div className=" animate">
                        <h1 className="text-2xl md:text-3xl font-nostalgia leading-relaxed md:leading-loose ">
                            I am &nbsp;
                            <span className="text-5xl lg:text-8xl">
                                Jay Nalam
                            </span>
                        </h1>
                    </div>
                    <div>
                        <div className=" animate ">
                            <h2 className="text-md md:text-xl font-extralight  leading-relaxed md:leading-loose">
                                A Blockchain Engineer and Blockchain Developer
                                from India. And I create websites that level up
                                the standards of your business and will boost up
                                your network.
                            </h2>
                        </div>
                        <Link
                            to="/contact"
                            className="bg-neutral-50  text-black p-2 inline-block mt-4"
                        >
                            Connect With Me
                        </Link>
                    </div>
                </div>
            </section>
            <div className=" md:w-8/12  h-64 md:h-96 grid content-center mx-auto text-xl text-center">
                <h2 className="text-2xl font-nostalgia tracking-[0.25rem] ">
                    SKILLS
                </h2>
                <Marquee
                    autoFill
                    speed={55}
                    pauseOnHover
                    gradient={true}
                    gradientColor="black"
                    className="mt-10"
                >
                    <p className=" m-2">Django</p>
                    <p className=" m-2">React Js</p>
                    <p className=" m-2">REST API</p>
                    <p className=" m-2">MySQL</p>
                </Marquee>
                <Marquee
                    autoFill
                    pauseOnHover
                    gradient={true}
                    gradientColor="black"
                >
                    <p className="m-2">EVM Blockchains</p>
                    <p className="m-2">Solidity</p>
                    <p className="m-2">GoLang</p>
                    <p className="m-2">Hardhat</p>
                </Marquee>
            </div>
            <section className=" font-poppins grid grid-rows-7 gap-y-10">
                <h2 className="text-2xl font-nostalgia mx-auto tracking-[0.25rem]">
                    PREVIOUS WORKS
                </h2>

                <div className=" row-span-2 bg-react bg-cover bg-center bg-no-repeat  ">
                    <div className=" min-w-[80%] flex gap-10 items-center mx-auto p-4 md:px-10 h-full ">
                        <h1 className=" text-2xl w-1/3">Manam Arts Academy</h1>
                        <ul className=" font-thin space-y-2 py-4 text-sm md:text-lg w-2/3 ">
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
                    <div className="  min-w-[80%] flex gap-10 items-center mx-auto p-4 md:px-10 h-full ">
                        <h1 className=" text-2xl w-1/3">
                            Arcade Relayer Bridge
                        </h1>
                        <ul className=" font-thin space-y-2 py-4 text-sm md:text-lg w-2/3 ">
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
                    <div className="  min-w-[80%] flex gap-10 items-center mx-auto p-4 md:px-10 h-full ">
                        <h1 className=" text-2xl w-1/3">Pacific DeFi</h1>
                        <ul className=" font-thin space-y-2  text-sm md:text-lg w-2/3 ">
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
        </main>
    );
};

export default Home;
