import Working from "../assets/services.png";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const Services = () => {
    return (
        <main className="px-10 md:px-16">
            <section className="mx-auto my-24 flex flex-col items-center justify-center gap-8 lg:w-4/5">
                <img src={Working} alt="" className="md:w-2/3" />
                <div className="text-justify tracking-tighter first-letter:ml-10 md:ml-0 md:text-center">
                    I offer a range of blockchain and full-stack development
                    services, specializing in creating efficient, secure, and
                    scalable solutions. Whether you're building a DeFi protocol,
                    an NFT marketplace, or a custom web3 solution, I'm here to
                    bring your vision to life.
                </div>
            </section>

            <section className="mt-24">
                <div className="mx-auto grid gap-4 md:w-4/5 lg:grid-cols-3">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-orange-500 drop-shadow-lg">
                                Custom Web Development
                            </CardTitle>
                            <CardDescription>
                                Tailored web applications that adapt and grow
                                with your business, ensuring a user-friendly
                                experience and scalability.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <ol className="list-disc px-6">
                                <li>
                                    <span className="font-semibold">
                                        E-commerce Platforms:
                                    </span>{" "}
                                    Custom-built online stores with smooth user
                                    experiences and integrated payment gateways.
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Business Websites:
                                    </span>{" "}
                                    Professional websites tailored to showcase
                                    your brand and services.
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Web Portals:
                                    </span>{" "}
                                    Interactive portals for internal and
                                    externals user, such as employee dashboards
                                    or client access platforms.
                                </li>
                            </ol>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-orange-500 drop-shadow-lg">
                                Blockchain Solutions
                            </CardTitle>
                            <CardDescription>
                                Secure, decentralized applications designed to
                                help your business benefit from blockchain
                                technology.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <ol className="list-disc px-6">
                                <li>
                                    <span className="font-semibold">
                                        NFT Marketplaces:
                                    </span>{" "}
                                    Developing feature-rich platforms for
                                    buying, selling and trading NFTs.
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Defi Protocols:
                                    </span>{" "}
                                    Building decentralized finance solutions
                                    like lending platforms or token exchanges.
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Custom Smart Contracts:
                                    </span>{" "}
                                    Secure and safe custom smart contracts for
                                    the usecase on networks like ethereum, sui
                                    etc.,
                                </li>
                            </ol>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="text-orange-500 drop-shadow-lg">
                                Fullstack Development
                            </CardTitle>
                            <CardDescription>
                                Complete web development solutions, from
                                front-end user experiences to back-end server
                                logic.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                            <ol className="list-disc px-6">
                                <li>
                                    <span className="font-semibold">
                                        Frontend Development (React):
                                    </span>{" "}
                                    Building dynamic user interfaces for
                                    interactive web applications.
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Backend Development (Django):
                                    </span>{" "}
                                    Robust, scalable server-side development for
                                    handling business logic and data management.
                                </li>
                                <li>
                                    <span className="font-semibold">
                                        Database Design (PostgreSQL, MySQL):
                                    </span>{" "}
                                    Optimizing data storage and retrieval for
                                    fast, secure performance.
                                </li>
                            </ol>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="mx-auto my-24 md:w-4/5">
                <h2 className="p-5 text-center text-lg font-semibold drop-shadow-lg lg:text-xl">
                    Frequently Asked Questions
                </h2>
                <Accordion type="single" collapsible className="space-y-3">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            1. What type of projects do you specialize in ?
                        </AccordionTrigger>
                        <AccordionContent>
                            I specialize in blockchain development, custom web
                            applications, and full-stack development. From NFT
                            marketplaces and DeFi protocols to building complex
                            web platforms and APIs, I offer a wide range of
                            solutions tailored to meet your business needs.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            2. How do you handle security in blockchain
                            projects?
                        </AccordionTrigger>
                        <AccordionContent>
                            Security is a top priority. I follow best practices
                            for smart contract development, including code
                            reviews, extensive testing like unit testing, fuzzy
                            testing and using industry grade auditing tools to
                            ensure security of your blockchain applications.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            3. What technology stacks do you work with ?
                        </AccordionTrigger>
                        <AccordionContent>
                            I work with a variety of tech stacks, including:
                            <ol className="list-disc">
                                <li>Blockchain: Solidity, Rust and Move.</li>
                                <li>
                                    Full-Stack Development: React, Django,
                                    PostgreSQL, MySQL, Redis.
                                </li>
                                <li>
                                    APIs: Custom API development and third-party
                                    integrations.
                                </li>
                            </ol>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger>
                            4. How long does it take to complete a project ?
                        </AccordionTrigger>
                        <AccordionContent>
                            The timeline depends on the project’s complexity and
                            scope. For smaller projects, it can take a few
                            weeks, while larger applications may take several
                            months. I work closely with clients to establish
                            realistic timelines and ensure timely delivery.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-5">
                        <AccordionTrigger>
                            5. Do you offer post-launch support ?
                        </AccordionTrigger>
                        <AccordionContent>
                            Yes, I offer maintenance and post-launch support to
                            ensure your application continues to run smoothly.
                            This includes bug fixes, updates, and feature
                            enhancements as needed.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-6">
                        <AccordionTrigger>
                            6. How do you price your services ?
                        </AccordionTrigger>
                        <AccordionContent>
                            My pricing model is flexible and depends on the
                            project’s scope, complexity, and timeline. I usually
                            work on project-based pricing.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger>
                            7. Can you help me with existing projects ?
                        </AccordionTrigger>
                        <AccordionContent>
                            Absolutely! I can jump in at any stage of your
                            project to provide assistance, whether it’s
                            troubleshooting, adding new features, or optimizing
                            performance.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </main>
    );
};

export default Services;
