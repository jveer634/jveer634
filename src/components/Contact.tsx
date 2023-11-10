import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

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
        <div className="bg-black text-slate-100 px-8  min-h-screen pb-5">
            <div className="h-[15vh] md:h-[20vh]"></div>
            <section className="  md:max-w-4xl space-y-4 mx-auto font-thin">
                <h1 className="text-5xl font-nostalgia">
                    Let's get Connected...
                </h1>
                <h4> You can reach out to me on the following </h4>
                <div className=" flex justify-between w-80">
                    <Link
                        to="https://www.linkedin.com/in/jveernalam/"
                        className="inline-block "
                    >
                        <BsLinkedin size={20} className="my-2 mx-auto" />
                        <p>LinkedIn</p>
                    </Link>
                    <Link to="https://www.github.com/jveer634/">
                        <BsGithub size={20} className="my-2 mx-auto" />
                        <p>Github</p>
                    </Link>
                    <Link to="https://www.instagram.com/jveer634/">
                        <BsInstagram size={20} className="my-2 mx-auto" />
                        <p>Instagram</p>
                    </Link>
                </div>

                <p>Or drop your details down here</p>
                <form
                    ref={form}
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-2 md:space-y-4 "
                >
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="user_name"
                        id="name"
                        className="p-3 text-black outline-black"
                    />
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="user_email"
                        id="email"
                        className="p-3 text-black outline-black"
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        className="p-3 text-black outline-black"
                        name="message"
                        id="message"
                        cols={30}
                        rows={10}
                    />
                    <input type="submit" className="p-3  bg-white text-black" />
                </form>
            </section>
        </div>
    );
};

export default Contact;
