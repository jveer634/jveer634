import Programmer from "./assets/programmer.svg";
import Logo from "./assets/logo.png";

function App() {
    return (
        <div className="bg-slate-300 px-8">
            <div className="min-h-screen">
                <nav className="sticky leading-10 py-5  flex justify-between ">
                    <h1>
                        <a href="/">
                            <img src={Logo} className=" rounded-full h-10" />
                        </a>
                    </h1>
                    <ul className="flex ">
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

                <main className="h-full text-center flex flex-col">
                    <div className="mt-36 leading-7 w-2/3 mx-auto">
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

                    <img src={Programmer} className="w-2/3 mx-auto mt-24" />
                </main>
            </div>

            <div id="projects" className="pb-16">
                <h2 className="text-3xl text-center font-semibold pt-7 text-blue-700">
                    Projects
                </h2>
                <div className="">
                    <div className="w-10/12 mx-auto mt-10">
                        <div className="text-2xl">Arcade Relayer Bridge</div>
                        <ul className="text-lg mt-4 leading-7 opacity-70">
                            <li>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vitae repellat ut
                                necessitatibus deserunt exercitationem.
                            </li>
                            <li>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Fuga, harum quaerat! Alias
                                modi official
                            </li>
                            <li>Tech Used: </li>
                        </ul>
                    </div>

                    <div className="w-10/12 mx-auto mt-10">
                        <div className="text-2xl">Arcade Relayer Bridge</div>
                        <ul className="text-lg mt-4 leading-7 opacity-70">
                            <li>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vitae repellat ut
                                necessitatibus deserunt exercitationem.
                            </li>
                            <li>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Fuga, harum quaerat! Alias
                                modi official
                            </li>
                            <li>Tech Used: </li>
                        </ul>
                    </div>

                    <div className="w-10/12 mx-auto mt-10">
                        <div className="text-2xl">Arcade Relayer Bridge</div>
                        <ul className="text-lg mt-4 leading-7 opacity-70">
                            <li>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Vitae repellat ut
                                necessitatibus deserunt exercitationem.
                            </li>
                            <li>
                                Lorem ipsum dolor, sit amet consectetur
                                adipisicing elit. Fuga, harum quaerat! Alias
                                modi official
                            </li>
                            <li>Tech Used: </li>
                        </ul>
                    </div>
                </div>

                <h2
                    className="text-3xl text-center mt-10 font-semibold text-blue-700"
                    id="experience"
                >
                    Experience
                </h2>

                <div className="mt-8 space-y-8 ">
                    <div className="text-left border-slate-500 p-4 rounded-2xl border-2">
                        <h4 className="text-lg font-medium ">
                            Nonceblox Pvt Ltd
                        </h4>
                        <h6 className="text-sm opacity-90 font-thin">
                            Jan 10 - Present
                        </h6>
                        <p className="mt-2 opacity-80">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Molestiae, nesciunt unde rerum
                        </p>
                    </div>
                    <div className="text-left border-slate-500 p-4 rounded-2xl border-2">
                        <h4 className="text-lg font-medium ">
                            Nonceblox Pvt Ltd
                        </h4>
                        <h6>Jan 10 - Present</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Molestiae, nesciunt unde rerum
                        </p>
                    </div>
                    <div className="text-left border-slate-500 p-4 rounded-2xl border-2">
                        <h4 className="text-lg font-medium ">
                            Nonceblox Pvt Ltd
                        </h4>
                        <h6>Jan 10 - Present</h6>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Molestiae, nesciunt unde rerum
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-3" id="contact">
                <h4 className="text-xl">You can connect with me on : </h4>
                <ul className="my-2 flex gap-3">
                    <li>
                        <a href="#">L</a>
                    </li>
                    <li>
                        <a href="#">M</a>
                    </li>
                    <li>
                        <a href="#">G</a>
                    </li>
                </ul>
                <p className="font-medium">Or drop your details down here</p>

                <form method="post" className="flex flex-col py-2">
                    <label htmlFor="name" className="py-2">
                        Your Name:
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="py-2 rounded-md"
                    />
                    <label htmlFor="email" className="py-2">
                        Your email:{" "}
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        className="py-2 rounded-md"
                    />
                    <label htmlFor="message" className="py-2">
                        Message
                    </label>
                    <textarea
                        className="py-2 rounded-md"
                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                    ></textarea>
                    <button
                        type="submit"
                        className="py-2 mt-6 mb-12 bg-blue-800 text-white "
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default App;
