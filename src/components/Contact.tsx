import { Link } from "react-router-dom";

import emailjs from "@emailjs/browser";

import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import HashNode from "@/assets/icons/hashnode.png";
import Github from "@/assets/icons/github.png";
import Linkedin from "@/assets/icons/linkedin.png";
import { Textarea } from "./ui/textarea";
import { useRef } from "react";

const Contact = () => {
    const formRef = useRef();

    const onSubmit = async (event: any) => {
        event.preventDefault();
        toast
            .promise(
                emailjs.sendForm(
                    import.meta.env.VITE_SERVICE_ID,
                    import.meta.env.VITE_TEMPLATE_ID,
                    formRef.current as any,
                    import.meta.env.VITE_PUBLIC_KEY,
                ),
                {
                    pending: "Sending message...",
                    success:
                        "Thanks for reaching out! I'll get back to you within 48 hours.",
                    error: "Facing issues right now. Try again..",
                },
            )
            .then(() => {
                console.log("Successfully sent");
                event.target.reset();
            })
            .catch((error) => console.log(error));
    };

    return (
        <main className="px-10 md:px-16">
            <section className="mx-auto my-24 grid grid-cols-2 gap-4  space-y-10">
                <div className="place-self-center space-y-6 col-span-2 lg:col-span-1 ">
                    <div className="space-y-2">
                        <h3 className="text-2xl font-bold tracking-tighter text-orange-600 drop-shadow-xl md:text-3xl lg:text-4xl">
                            Let's talk..
                        </h3>
                        <p className="w-3/4">
                            Feel free to reach out if you have any questions,
                            project inquiries, or just want to connect. I'm
                            always excited to explore new opportunities
                        </p>
                    </div>
                    <div className="space-y-3">
                        <p>
                            Prefer social media? Connect with me via these
                            platforms.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                to="https://www.linkedin.com/in/jveernalam/"
                                target="_blank"
                            >
                                <img
                                    src={Linkedin}
                                    alt="linkedin"
                                    className="w-6"
                                />
                            </Link>
                            <Link
                                to="https://www.github.com/jveer634/"
                                target="_blank"
                            >
                                <img
                                    src={Github}
                                    alt="github"
                                    className="w-6"
                                />
                            </Link>
                            <Link
                                to="https://hashnode.com/@jveer634/"
                                target="_blank"
                            >
                                <img
                                    src={HashNode}
                                    alt="hashnode"
                                    className="w-6"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className=" col-span-2 lg:col-span-1">
                    <h2 className="text-2xl font-semibold tracking-tight text-red-600">
                        Drop me a message
                    </h2>
                    <form
                        onSubmit={onSubmit}
                        className="space-y-8"
                        ref={formRef}
                    >
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                name="user_name"
                                placeholder="madara"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="name">Email</Label>
                            <Input
                                id="name"
                                type="email"
                                name="user_email"
                                placeholder="madara@naruto.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="name">Message</Label>
                            <Textarea id="name" name="message" />
                        </div>
                        <Button type="submit" className="w-full">
                            Submit
                        </Button>
                    </form>
                </div>
            </section>
        </main>
    );
};

export default Contact;
