import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

import { ArrowUpRight } from "lucide-react";

const Tag = ({ name }: { name: string }) => {
    return <p className="rounded-xl bg-gray-100 p-2 font-semibold">{name}</p>;
};

const Projects = () => {
    return (
        <main className="px-10 md:px-16">
            <section className="mx-auto my-24 flex flex-col items-center justify-center gap-8 lg:w-4/5">
                <h3 className="text-2xl font-bold tracking-tighter text-orange-600 drop-shadow-xl lg:text-4xl">
                    PROJECTS
                </h3>

                <p className="text-center tracking-tighter md:ml-0 md:w-3/4 md:text-center">
                    Throughout my journey as a blockchain developer, I’ve led
                    and contributed to various projects that span across NFT
                    marketplaces, decentralized protocols, and advanced protocol
                    implementations. Below are a few of the key projects that
                    highlight my expertise in blockchain development, web3
                    protocols, and frontend architecture.
                </p>

                <div className="mx-auto mt-14 grid gap-4 md:w-4/5 lg:w-auto lg:grid-cols-3">
                    <Card className="flex flex-col justify-between shadow-neutral-600 drop-shadow-xl">
                        <CardHeader>
                            <CardTitle className="">
                                OasisX Marketplace
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p>
                                OasisX is an advanced NFT marketplace and
                                minting engine, where I led the development of
                                the Sui-based minting engine and marketplace
                                functionalities. My role involved building
                                secure, scalable smart contracts and integrating
                                the minting process for NFTs, allowing users to
                                mint and trade digital assets seamlessly.
                            </p>
                            <div className="">
                                <span className="font-semibold">
                                    Technologies:{" "}
                                </span>
                                <div className="flex gap-2">
                                    <Tag name="Sui" />
                                    <Tag name="Move" />
                                    <Tag name="Javascript" />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="">
                            <a
                                href="https://oasisx.world/"
                                target="_blank"
                                className="w-full"
                            >
                                <Button className="flex w-full items-center gap-2 font-bold">
                                    Check it out
                                    <ArrowUpRight />
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>

                    <Card className="flex flex-col justify-between shadow-neutral-600 drop-shadow-xl">
                        <CardHeader>
                            <CardTitle className="">Mintable</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p>
                                Mintable is a leading NFT marketplace, where I
                                served as the Lead Developer. I was responsible
                                for implementing Meta transactions, enabling
                                users to interact with the platform without
                                needing direct gas payments. My work focused on
                                optimizing transaction efficiency and ensuring a
                                seamless user experience in an EVM-compatible
                                environment.
                            </p>
                            <div>
                                <span className="font-semibold">
                                    Technologies:{" "}
                                </span>
                                <div className="flex gap-2">
                                    <Tag name="Solidity" />
                                    <Tag name="Polygon" />
                                    <Tag name="Meta Txs" />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="">
                            <a
                                href="https://mintable.com/"
                                target="_blank"
                                className="w-full"
                            >
                                <Button className="flex w-full items-center gap-2 font-bold">
                                    Check it out
                                    <ArrowUpRight />
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>

                    <Card className="flex flex-col justify-between shadow-neutral-600 drop-shadow-xl">
                        <CardHeader>
                            <CardTitle className="">JDNS</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p>
                                JDNS is a solo project where I built a DNS
                                protocol implementation from scratch using Rust.
                                It processes multiple DNS queries and answers,
                                handling basic query resolution while logging
                                custom events. This project reflects my interest
                                in low-level protocol development and Rust’s
                                powerful performance features.
                            </p>
                            <div>
                                <span className="font-semibold">
                                    Technologies:{" "}
                                </span>
                                <div className="flex gap-2">
                                    <Tag name="Rust" />
                                    <Tag name="UDP" />
                                    <Tag name="TCP" />
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="">
                            <a
                                href="https://github.com/jveer634/jdns"
                                target="_blank"
                                className="w-full"
                            >
                                <Button className="flex w-full items-center gap-2 font-bold">
                                    View Github
                                    <ArrowUpRight />
                                </Button>
                            </a>
                        </CardFooter>
                    </Card>
                </div>
            </section>
        </main>
    );
};

export default Projects;
