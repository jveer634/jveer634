import Me from "../assets/Me.jpg";


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
                        I’m{" "}
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

            <section className="mt-10">
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

            <section className="my-10">
                <div className="mx-auto w-10/12">Hello</div>
            </section>
        </main>
    );
};

export default About;
