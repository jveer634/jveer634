import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

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
                    import.meta.env.VITE_SERVICE_ID,
                    import.meta.env.VITE_TEMPLATE_ID,
                    form.current as any,
                    import.meta.env.VITE_PUBLIC_KEY
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
        <div className="bg-black text-slate-100 min-h-screen  px-16 ">
            <section className=" md:max-w-5xl space-y-4 md:pt-[20%] lg:[pt:10%] pt-[40%] mx-auto font-thin">
                <h1 className="text-6xl font-nostalgia ">
                    Let's get Connected...
                </h1>
                <h4> You can reach out to me on the following </h4>
                <div className=" flex gap-5 ">
                    <a href="https://www.linkedin.com/in/jveernalam/">
                        <BsLinkedin size={24} />
                        LinkedIn
                    </a>
                    <a href="https://www.github.com/jveer634/">
                        <BsGithub size={24} />
                        Github
                    </a>
                    <a href="https://www.instagram.com/jveer634/">
                        <BsInstagram size={24} /> Instagram
                    </a>
                </div>

                <p>Or drop your details down here</p>
                <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-2 "
                >
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="user_name"
                        id="name"
                        className="p-3 rounded-md text-black"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="user_email"
                        id="email"
                        className="p-3 rounded-md text-black"
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        className="p-3 rounded-md text-black"
                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                    ></textarea>
                    <input type="submit" className="p-3 bg-white text-black " />
                </form>
            </section>
        </div>
    );
};

export default Contact;
