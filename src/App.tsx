import { useRef } from "react";

import Programmer from "./assets/programmer.svg";
import Logo from "./assets/logo.svg";

import { BsGithub } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    const form = useRef(null);

    const handleSubmit = async (event: any) => {
        event.preventDefault();
        toast
            .promise(
                emailjs.sendForm(
                    "service_rpjqf9d",
                    "template_8twr1em",
                    form.current as any,
                    "0NvkpDqbOT69_JTcZ"
                ),
                {
                    pending: "Sending message...",
                    success: "Successfully sent",
                    error: "Facing issues right now. Try again..",
                }
            )
            .then(() => event.target.reset())
            .catch((error) => console.log(error));
    };

    return (
        <div className="bg-slate-50 px-10 md:py-6 ">
            <ToastContainer limit={2} hideProgressBar={true} />
            <div className="min-h-screen ">
                <nav className="sticky leading-10 py-5 text-lg flex justify-between">
                    <h1>
                        <a href="/">
                            <img src={Logo} className=" rounded-full h-10" />
                        </a>
                    </h1>
                    <ul className="flex">
                        <li className="hover:text-white hover:bg-blue-800 px-3 rounded-md ">
                            <a href="#projects">Projects</a>
                        </li>
                        <li className="hover:text-white hover:bg-blue-800 px-3 rounded-md">
                            <a href="#experience">Experience</a>
                        </li>
                        <li className="hover:text-white hover:bg-blue-800 px-3 rounded-md">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <main className="text-center flex flex-col w-2/3 mx-auto max-w-4xl">
                    <div className="mt-36 leading-7">
                        <h2 className="text-blue-800 text-6xl">Jay Nalam</h2>
                        <p className=" mt-8 opacity-80 text-xl font-thin">
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
            </div>

            <div id="projects" className="md:py-32 mx-auto max-w-4xl">
                <h2 className="text-3xl text-center font-semibold pt-7 text-blue-700">
                    Projects
                </h2>
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    <div className=" mx-auto mt-10 bg-gray-300 p-8 rounded-2xl drop-shadow-2xl">
                        <div className="text-2xl">Arcade Network</div>
                        <ul className="text-lg mt-4 leading-7 opacity-70">
                            <li>
                                Acting as lead blockchain developer in the
                                relayer bridge, staking portals and other web3
                                dApps.
                            </li>
                            <li>
                                Leading teams to optimize performance and
                                deliver user-centric solutions.
                            </li>
                            <li>
                                Guiding development and planning for future
                                iterations.
                            </li>
                        </ul>
                    </div>

                    <div className="  mx-auto mt-10 bg-gray-300 p-8 rounded-2xl drop-shadow-2xl">
                        <div className="text-2xl">Pacific Defi</div>
                        <ul className="text-lg mt-4 leading-7 opacity-70">
                            <li>
                                A DEX aggregator that supplies your stake to
                                multiple decentralized exchanges in one
                                transaction.
                            </li>
                            <li>
                                Developed the onchain smart contracts and
                                intgreated them on a react frontend which
                                interacts with 3 different DEXs and 10 supports
                                different tokens at the inital stage.
                            </li>
                        </ul>
                    </div>

                    <div className="  mx-auto mt-10 bg-gray-300 p-8 rounded-2xl drop-shadow-2xl md:col-span-2 md:w-1/2">
                        <div className="text-2xl">NFT Marketplace</div>
                        <ul className="text-lg mt-4 leading-7 opacity-70">
                            <li>
                                Helped the team in expanding the marketplace
                                funcationalities to a new blockchain network.
                            </li>
                            <li>
                                Had integrated a new technology called Biconomy
                                in order to provide meta transactions support
                                and optimized the smart contract.
                            </li>
                            <li>
                                Helped the team to build a transaction indexer
                                which can be used to store the nft transaction
                                history.
                            </li>
                        </ul>
                    </div>
                </div>

                <h2
                    className="text-3xl text-center mt-10 font-semibold text-blue-700"
                    id="experience"
                >
                    Experience
                </h2>

                <div className="mt-8 space-y-8 md:px-24">
                    <div className="text-left border-slate-500 p-4 rounded-2xl border-2">
                        <h3 className="text-xl font-medium mt-1">
                            Blockchain Technical Lead
                        </h3>
                        <h4 className="text-md ">Nonceblox Pvt Ltd</h4>
                        <h6 className="text-sm opacity-90 ">
                            Aug 2023 - Present
                        </h6>
                        <ul className="mt-2 opacity-80">
                            <li>
                                Spearheaded research on emerging web3 products
                                and devised efficient strategies for seamless
                                integration into products and development life
                                cycle.
                            </li>
                            <li>
                                Directed product development by formulating
                                visionary strategies, designing roadmaps, and
                                conducting market research to diversify product
                                use cases.
                            </li>
                        </ul>
                    </div>
                    <div className="text-left border-slate-500 p-4 rounded-2xl border-2">
                        <h3 className="text-xl font-medium mt-1">
                            Blockchain Engineer
                        </h3>
                        <h4 className="text-md ">Nonceblox Pvt Ltd</h4>
                        <h6 className="text-sm opacity-90">
                            Jan 2022 - Aug 2023
                        </h6>
                        <ul className="mt-2 opacity-80">
                            <li>
                                Led smart contract development and audits,
                                ensuring security and compliance.
                            </li>
                            <li>
                                Conducted unit testing, deployment, and research
                                for blockchain apps.
                            </li>
                            <li>
                                Collaborated with management to optimize
                                blockchain tech.
                            </li>

                            <li>
                                Crafted tailored blockchain solutions,
                                overseeing network launch.
                            </li>
                        </ul>
                    </div>
                    <div className="text-left border-slate-500 p-4 rounded-2xl border-2">
                        <h3 className="text-xl font-medium mt-1">
                            Associate Software Engineer
                        </h3>
                        <h4 className="text-md ">DXC India</h4>
                        <h6 className="text-sm opacity-90">
                            Jul 2021 - Jan 2022
                        </h6>
                        <p className="mt-2 opacity-80">
                            As an Associate Software Engineer, I worked with
                            enterprise tools like Nagios. My role involves
                            working with legacy software and languages. I
                            collaborated with the team to design, implement, and
                            troubleshoot the issues happening in the network
                            pipeline, contributing to efficient and reliable
                            operations
                        </p>
                    </div>
                </div>
            </div>

            <div
                className="space-y-3 mt-12 md:mt-0 mx-auto max-w-4xl"
                id="contact"
            >
                <h4 className="text-xl">You can connect with me on : </h4>
                <div className="my-1 flex gap-5">
                    <a
                        href="https://www.linkedin.com/in/jveernalam/"
                        className="text-lg py-2 "
                    >
                        <FiLinkedin size={28} />
                        LinkedIn
                    </a>

                    <a
                        href="https://www.github.com/jveer634/"
                        className="text-lg py-2"
                    >
                        <BsGithub size={28} /> Github
                    </a>
                </div>
                <p className="font-medium">Or drop your details down here</p>

                <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="flex flex-col py-2"
                >
                    <label htmlFor="name" className="py-2">
                        Your Name:
                    </label>
                    <input
                        type="text"
                        name="user_name"
                        id="name"
                        className="p-3 rounded-md"
                    />
                    <label htmlFor="email" className="py-2">
                        Your email: &nbsp;
                    </label>
                    <input
                        type="email"
                        name="user_email"
                        id="email"
                        className="p-3 rounded-md"
                    />
                    <label htmlFor="message" className="py-2">
                        Message
                    </label>
                    <textarea
                        className="p-3 rounded-md"
                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                    ></textarea>
                    <button
                        type="submit"
                        className="p-3 mt-6 mb-12 bg-blue-800 text-white "
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
