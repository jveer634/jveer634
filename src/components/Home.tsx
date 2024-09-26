import { Link } from "react-router-dom";

import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

import Arcade from "../assets/arcadenetwork.jpeg";
import Pacific from "../assets/pacific.jpeg";

const Home = () => {
    return (
        <main className="px-10 md:px-16">
            <section className="my-40 text-center">
                <div className="space-y-1">
                    <h2 className="text-3xl font-bold tracking-tighter text-orange-500 md:text-5xl lg:text-7xl">
                        Building the Future of Web3
                    </h2>
                    <h3 className="font-mono tracking-tighter opacity-75 md:text-xl lg:text-2xl">
                        Crafting blockchain solutions that drive innovation
                    </h3>
                </div>

                <ul className="mt-3 flex justify-center gap-3">
                    <li>
                        <Link to="#">
                            <Button variant="secondary"> See My Work </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <Button variant="default">Get in Touch</Button>
                        </Link>
                    </li>
                </ul>
            </section>
            <section className="mt-24">
                <h2 className="font-nostalgia mb-8 text-center text-lg tracking-[0.25rem] md:text-xl lg:text-2xl">
                    SERVICES
                </h2>

                <div className="mx-auto grid w-11/12 gap-2 border-x-2 border-x-primary/50 md:w-10/12 lg:w-8/12">
                    <Card className="border-none bg-transparent shadow-none">
                        <CardHeader>
                            <CardTitle className="font-mono text-lg font-bold uppercase italic text-orange-700 lg:text-xl">
                                1. Smart Contracts
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>
                                Building secure, scalable smart contracts on
                                Ethereum, Solana, and Sui. My contracts are
                                optimized for performance, ensuring reliability
                                and security for decentralized applications.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="border-none bg-transparent shadow-none">
                        <CardHeader className="font-mono text-lg font-bold uppercase italic text-orange-700 lg:text-xl">
                            2. dApp Development
                        </CardHeader>
                        <CardContent>
                            <p>
                                Providing complete front-end and back-end
                                solutions for decentralized applications. I
                                deliver responsive, secure, and scalable dApps
                                that integrate seamlessly with blockchain
                                networks.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="border-none bg-transparent shadow-none">
                        <CardHeader className="font-mono text-lg font-bold uppercase italic text-orange-700 lg:text-xl">
                            3. Blockchain Consulting
                        </CardHeader>
                        <CardContent>
                            <p>
                                Helping businesses leverage blockchain with
                                strategic consulting. I guide you through the
                                complexities of decentralized systems, ensuring
                                practical and effective blockchain integration.
                            </p>
                        </CardContent>
                    </Card>
                </div>
                <div className="mt-4 text-center">
                    <Button className="">
                        <Link to="/contact">Let's Work Together</Link>
                    </Button>
                </div>
            </section>
            <section className="mt-24">
                <h2 className="font-nostalgia mb-8 text-center text-lg tracking-[0.25rem] md:text-xl lg:text-2xl">
                    PROJECTS
                </h2>

                <div className="mx-auto grid w-11/12 gap-4 md:w-10/12 md:grid-flow-row lg:w-8/12">
                    <Card className="grid md:grid-flow-col">
                        <CardHeader className="flex flex-col items-center justify-center space-y-3">
                            <div className="object-fit">
                                <img
                                    src={Arcade}
                                    alt=""
                                    className="w-60 md:w-40"
                                />
                            </div>
                            <CardTitle className="">
                                Arc Relayer Bridge
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="m-auto">
                            <ul className="space-y-2 text-center tracking-tight md:text-left">
                                <li>
                                    Worked as lead blockchain developer in the
                                    relayer bridge, staking portals and other
                                    web3 dApps.
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
                        </CardContent>
                    </Card>

                    <Card className="grid md:grid-flow-col">
                        <CardHeader className="flex flex-col items-center justify-center space-y-3">
                            <div className="object-fit">
                                <img
                                    src={Arcade}
                                    alt=""
                                    className="w-60 md:w-40"
                                />
                            </div>
                            <CardTitle className="">
                                Manam Arts Academy
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="m-auto">
                            <ul className="space-y-2 text-center tracking-tight md:text-left">
                                <li>
                                    An art academy that teaches musical
                                    instruments, paintings and caligraphy.
                                </li>
                                <li>
                                    Designed and developed a website that
                                    reprsents the enviroment of the class and
                                    fun way of starting the users creative
                                    journey.
                                </li>
                                <li>
                                    A react based websited that has cool
                                    transitions along with a variety of
                                    animations.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="grid md:grid-flow-col">
                        <CardHeader className="flex flex-col items-center justify-center space-y-3">
                            <div className="object-fit">
                                <img
                                    src={Pacific}
                                    alt=""
                                    className="w-60 md:w-40"
                                />
                            </div>
                            <CardTitle className="">Pacific DeFi</CardTitle>
                        </CardHeader>
                        <CardContent className="m-auto">
                            <ul className="space-y-2 text-center tracking-tight md:text-left">
                                <li>
                                    A DEX aggregator that supplies your stake to
                                    multiple decentralized exchanges in one
                                    transaction.
                                </li>
                                <li>
                                    Developed smart contracts and integrated
                                    with frontend to interact with 3 different
                                    DEXs and 10 supports different tokens at the
                                    inital stage.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* <section className="my-10">
                <h2 className="mb-8 text-center text-lg font-bold tracking-tighter md:text-xl lg:text-2xl">
                    Technologies I worked
                </h2>

                <ul className="space-y-2">
                    <li>
                        <span className="mr-2 font-bold">Blockchains: </span>
                        <span>Ethereum, Polygon, BSC, Sui, Solana etc </span>
                    </li>

                    <li>
                        <span className="mr-2 font-bold">Fullstack: </span>
                        <span>ReactJS, Django etc </span>
                    </li>
                    <li>
                        <span className="mr-2 font-bold">
                            Programming Languages:{" "}
                        </span>
                        <span>
                            Solidity, Rust, Javascript / Typescript etc{" "}
                        </span>
                    </li>
                </ul>
                <div className="my-4 text-center">
                    <Button>
                        <Link to="/about">Explore Full Skillset</Link>
                    </Button>
                </div>
            </section> */}
        </main>
    );
};

export default Home;
