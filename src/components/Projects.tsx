const Projects = () => {
    return (
        <div id="projects" className="my-12 mx-auto max-w-4xl  ">
            <h2 className="text-4xl text-center font-semibold text-blue-700 p-3 drop-shadow-xl">
                Projects
            </h2>
            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                <div className=" mx-auto mt-10 bg-gray-300 p-8 rounded-2xl drop-shadow-2xl">
                    <div className="text-2xl">Arcade Network</div>
                    <ul className="text-lg mt-4 leading-7 opacity-70">
                        <li>
                            Acting as lead blockchain developer in the relayer
                            bridge, staking portals and other web3 dApps.
                        </li>
                        <li>
                            Leading teams to optimize performance and deliver
                            user-centric solutions.
                        </li>
                        <li>
                            Guiding development and planning for future
                            iterations.
                        </li>
                    </ul>
                </div>

                <div className=" mx-auto mt-10 bg-gray-300 p-8 rounded-2xl drop-shadow-2xl">
                    <div className="text-2xl">Pacific Defi</div>
                    <ul className="text-lg mt-4 leading-7 opacity-70">
                        <li>
                            A DEX aggregator that supplies your stake to
                            multiple decentralized exchanges in one transaction.
                        </li>
                        <li>
                            Developed the onchain smart contracts and intgreated
                            them on a react frontend which interacts with 3
                            different DEXs and 10 supports different tokens at
                            the inital stage.
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
                            Had integrated a new technology called Biconomy in
                            order to provide meta transactions support and
                            optimized the smart contract.
                        </li>
                        <li>
                            Helped the team to build a transaction indexer which
                            can be used to store the nft transaction history.
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
                    <h6 className="text-sm opacity-90 ">Aug 2023 - Present</h6>
                    <ul className="mt-2 opacity-80">
                        <li>
                            Spearheaded research on emerging web3 products and
                            devised efficient strategies for seamless
                            integration into products and development life
                            cycle.
                        </li>
                        <li>
                            Directed product development by formulating
                            visionary strategies, designing roadmaps, and
                            conducting market research to diversify product use
                            cases.
                        </li>
                    </ul>
                </div>
                <div className="text-left border-slate-500 p-4 rounded-2xl border-2">
                    <h3 className="text-xl font-medium mt-1">
                        Blockchain Engineer
                    </h3>
                    <h4 className="text-md ">Nonceblox Pvt Ltd</h4>
                    <h6 className="text-sm opacity-90">Jan 2022 - Aug 2023</h6>
                    <ul className="mt-2 opacity-80">
                        <li>
                            Led smart contract development and audits, ensuring
                            security and compliance.
                        </li>
                        <li>
                            Conducted unit testing, deployment, and research for
                            blockchain apps.
                        </li>
                        <li>
                            Collaborated with management to optimize blockchain
                            tech.
                        </li>

                        <li>
                            Crafted tailored blockchain solutions, overseeing
                            network launch.
                        </li>
                    </ul>
                </div>
                <div className="text-left border-slate-500 p-4 rounded-2xl border-2">
                    <h3 className="text-xl font-medium mt-1">
                        Associate Software Engineer
                    </h3>
                    <h4 className="text-md ">DXC India</h4>
                    <h6 className="text-sm opacity-90">Jul 2021 - Jan 2022</h6>
                    <p className="mt-2 opacity-80">
                        As an Associate Software Engineer, I worked with
                        enterprise tools like Nagios. My role involves working
                        with legacy software and languages. I collaborated with
                        the team to design, implement, and troubleshoot the
                        issues happening in the network pipeline, contributing
                        to efficient and reliable operations
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Projects;
