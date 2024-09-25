import Me from "../assets/Me.jpg";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "./ui/card";

import Solidity from "../assets/icons/solidity.png";
import Python from "../assets/icons/python.png";
import JavaScript from "../assets/icons/javascript.png";
import Rust from "../assets/icons/rust.png";
import Go from "../assets/icons/golang.png";
import Move from "../assets/icons/move.png";
import Typescript from "../assets/icons/typescript.png";

import React from "../assets/icons/reactjs.png";
import Django from "../assets/icons/django.png";
import MySQL from "../assets/icons/mysql.png";
import Redis from "../assets/icons/redis.png";
import PostgreSQL from "../assets/icons/postgres.png";

const About = () => {
    return (
        <main className="px-10 md:px-16">
            <section className="mt-10 flex flex-col items-center justify-around gap-6 lg:flex-row">
                <img src={Me} alt="" className="w-72 rounded-full lg:w-1/3" />

                <div className="w-[90%] space-y-2 text-center lg:w-1/2 lg:text-left">
                    <h2 className="font-mono text-lg italic text-orange-500 md:text-xl">
                        Blockchain Developer & Fullstack Engineer
                    </h2>
                    <p className="py-4 text-2xl font-semibold tracking-tighter">
                        👋 Hello. I’m{" "}
                        <span className="text-3xl font-bold text-orange-700">
                            Jay
                        </span>
                        , a blockchain developer who loves building
                        decentralized solutions.
                    </p>
                    <p className="">
                        I’ve worked extensively with EVM-based networks, smart
                        contracts, and Web3 protocols, focusing on creating
                        secure and scalable applications. My experience includes
                        developing NFTs, DeFi platforms, and custom blockchain
                        contracts. Alongside Solidity and JavaScript, I’ve been
                        working with Rust to take on high-performance blockchain
                        projects, bringing more flexibility and power to my work
                        in the decentralized space.
                    </p>
                </div>
            </section>

            <section className="mt-24">
                <h3 className="text-center text-xl font-bold tracking-tighter text-orange-500 md:text-2xl lg:text-3xl">
                    My Story
                </h3>

                <div className="mx-auto mt-4 space-y-4 text-center tracking-tight md:w-2/3">
                    <p>
                        Hey there! Here’s a bit about my journey in blockchain
                        development.
                    </p>
                    <p>
                        I kicked off my blockchain journey as a technical writer
                        at Tosh Innovations, where I found my passion for the
                        technology again. That led me to Nonceblox Pvt Ltd as a
                        Blockchain Engineer, where I got to work on some cool
                        projects, including leading a team on one of the top 10
                        NFT marketplaces on Ethereum.
                    </p>
                    <p>
                        I’m really excited about the future of blockchain and
                        the endless possibilities of decentralized tech. Complex
                        technologies like zero-knowledge proofs and distributed
                        systems can create groundbreaking applications, and I
                        want to be the developer whose work, though not always
                        in the spotlight, is essential to making projects
                        succeed.
                    </p>
                    <p>
                        Currently, I’m diving into Go and Rust for systems
                        programming. Rust is not only great for that but also
                        crucial for smart contract development on Solana. Plus,
                        the Move language used in Sui takes inspiration from
                        Rust, so I’m all in on learning it!
                    </p>
                    <p>
                        Feel free to reach out if you want to chat about
                        blockchain or collaborate on exciting projects!
                    </p>
                </div>
            </section>

            <section className="mt-24">
                <h2 className="mb-8 text-center text-lg font-bold tracking-tighter text-orange-500 md:text-xl lg:text-2xl">
                    Technologies I worked
                </h2>

                <div className="mx-auto grid grid-rows-2 gap-4 md:w-max md:grid-cols-2 md:grid-rows-1">
                    <Card>
                        <CardHeader>
                            <CardTitle>📝 Languages</CardTitle>
                            <CardDescription>
                                Here are the languages I use day-to-day for the
                                day to day activities.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid grid-cols-2 gap-3">
                                <li className="flex items-center gap-2 text-xl">
                                    <img src={Solidity} className="w-6" />
                                    <span>Solidity</span>
                                </li>
                                <li className="flex items-center gap-2 text-xl">
                                    <img src={Python} className="w-6" />
                                    <span>Python</span>
                                </li>
                                <li className="flex items-center gap-2 text-xl">
                                    <img src={JavaScript} className="w-6" />
                                    <span>JavaScript</span>
                                </li>
                                <li className="flex items-center gap-2 text-xl">
                                    <img src={Typescript} className="w-6" />
                                    <span>Typescript</span>
                                </li>
                                <li className="flex items-center gap-2 text-xl">
                                    <img src={Rust} className="w-6" />
                                    <span>Rust</span>
                                </li>
                                <li className="flex items-center gap-2 text-xl">
                                    <img src={Move} className="w-6" />
                                    <span>Move</span>
                                </li>
                                <li className="flex items-center gap-2 text-xl">
                                    <img src={Go} className="w-6" />
                                    <span>Go</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>🖥️ Fullstack Development</CardTitle>
                            <CardDescription>
                                Here are the technologies that I use day-to-day
                                to deliver fullstack web apps.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid grid-cols-2 gap-3">
                                <li className="flex items-center gap-2 text-xl">
                                    <img src={React} className="w-6" />
                                    <span>ReactJS</span>
                                </li>
                                <li className="flex items-center gap-2 text-xl">
                                    <img src={Django} className="w-6" />
                                    <span>Django</span>
                                </li>
                                <li className="flex items-center gap-2 text-xl">
                                    <img src={Redis} className="w-6" />
                                    <span>Redis</span>
                                </li>
                                <li className="flex items-center gap-2 text-xl">
                                    <img src={MySQL} className="w-6" />
                                    <span>MySQL</span>
                                </li>
                                <li className="flex items-center gap-2 text-xl">
                                    <img src={PostgreSQL} className="w-6" />
                                    <span>PostgreSQL</span>
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="mt-24">
                <h2 className="mb-4 text-center text-xl font-bold italic tracking-tighter lg:text-2xl">
                    Beyond coding and Debugging
                </h2>

                <p className="mx-auto text-center tracking-tighter md:w-2/3">
                    When I’m not deep into blockchain development, I spend my
                    time exploring photography, watching anime, cooking up new
                    dishes, and staying active at the gym. My love for music and
                    dance keeps me grounded, and I find joy in discovering
                    creativity in all its forms. These hobbies fuel my
                    problem-solving and innovation in tech.
                </p>
            </section>

            <section className="my-24">
                <blockquote className="text-center text-lg font-semibold italic tracking-tighter ">
                    <p>Do you know why do programmers prefer dark mode?</p>
                    <p className="text-orange-700">Because the light attracts bugs.</p>
                </blockquote>
            </section>
        </main>
    );
};

export default About;
