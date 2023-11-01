import { BsGithub } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";

import emailjs from "@emailjs/browser";
import { useRef } from "react";

import { toast } from "react-toastify";

const Contact = () => {
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
        <div className="space-y-3 mt-12 md:mt-0 mx-auto max-w-4xl" id="contact">
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
    );
};

export default Contact;
