import React, { useRef } from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!form.current) return;

        toast
            .promise(
                emailjs.sendForm(
                    import.meta.env.VITE_SERVICE_ID || "",
                    import.meta.env.VITE_TEMPLATE_ID || "",
                    form.current,
                    import.meta.env.VITE_PUBLIC_KEY || ""
                ),
                {
                    pending: "Sending message...",
                    success: "Successfully sent",
                    error: "Facing issues right now. Try again..",
                }
            )
            .then(() => {
                form.current?.reset();
            })
            .catch((error) => console.log(error));
    };

    return (
        <div className="bg-[#070709] text-zinc-100 px-6 md:px-12 min-h-screen pb-20">
            <div className="h-[15vh] md:h-[22vh]"></div>
            
            <section className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
                    
                    {/* Left Panel: Info & Socials */}
                    <div className="md:col-span-5 space-y-8 flex flex-col justify-between">
                        <div className="space-y-4">
                            <span className="text-violet-500 font-display text-sm font-semibold tracking-widest uppercase">
                                Connect
                            </span>
                            <h1 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight leading-tight">
                                Let's build<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400">
                                    something great.
                                </span>
                            </h1>
                            <p className="text-zinc-400 font-light leading-relaxed max-w-sm pt-2">
                                I'm always open to discussing new web design concepts, smart contracts, or branding integrations. Feel free to reach out!
                            </p>
                        </div>

                        <div className="space-y-6 pt-6 md:pt-0">
                            <h4 className="text-zinc-500 text-xs font-semibold uppercase tracking-wider">
                                Find me on
                            </h4>
                            <div className="grid grid-cols-3 gap-4">
                                <Link
                                    to="https://www.linkedin.com/in/jveernalam/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-zinc-900/30 hover:bg-violet-600/10 border border-zinc-800/80 hover:border-violet-500/40 rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 group"
                                >
                                    <BsLinkedin size={22} className="text-zinc-400 group-hover:text-violet-400 transition-colors duration-300" />
                                    <span className="text-xs text-zinc-500 group-hover:text-zinc-300 mt-2 font-medium transition-colors duration-300">LinkedIn</span>
                                </Link>
                                <Link 
                                    to="https://www.github.com/jveer634/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-zinc-900/30 hover:bg-violet-600/10 border border-zinc-800/80 hover:border-violet-500/40 rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 group"
                                >
                                    <BsGithub size={22} className="text-zinc-400 group-hover:text-violet-400 transition-colors duration-300" />
                                    <span className="text-xs text-zinc-500 group-hover:text-zinc-300 mt-2 font-medium transition-colors duration-300">GitHub</span>
                                </Link>
                                <Link 
                                    to="https://www.instagram.com/jveer634/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-zinc-900/30 hover:bg-violet-600/10 border border-zinc-800/80 hover:border-violet-500/40 rounded-xl p-4 flex flex-col items-center justify-center transition-all duration-300 group"
                                >
                                    <BsInstagram size={22} className="text-zinc-400 group-hover:text-violet-400 transition-colors duration-300" />
                                    <span className="text-xs text-zinc-500 group-hover:text-zinc-300 mt-2 font-medium transition-colors duration-300">Instagram</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right Panel: Material Minimal Form */}
                    <div className="md:col-span-7 bg-zinc-900/20 border border-zinc-800/50 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-xl">
                        <h3 className="text-xl font-display font-bold mb-8 text-zinc-200">
                            Send a Message
                        </h3>
                        <form
                            ref={form}
                            onSubmit={handleSubmit}
                            className="space-y-8"
                        >
                            <div className="relative group">
                                <input
                                    type="text"
                                    name="user_name"
                                    id="name"
                                    required
                                    placeholder=" "
                                    className="peer w-full bg-transparent border-b border-zinc-800 focus:border-violet-500 px-0 py-3 text-zinc-100 placeholder-transparent outline-none transition-all duration-300 font-sans"
                                />
                                <label 
                                    htmlFor="name" 
                                    className="absolute left-0 top-3 text-zinc-500 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-violet-400 peer-[:not(:placeholder-shown)]:top-[-12px] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-violet-400 font-medium"
                                >
                                    Name
                                </label>
                            </div>

                            <div className="relative group">
                                <input
                                    type="email"
                                    name="user_email"
                                    id="email"
                                    required
                                    placeholder=" "
                                    className="peer w-full bg-transparent border-b border-zinc-800 focus:border-violet-500 px-0 py-3 text-zinc-100 placeholder-transparent outline-none transition-all duration-300 font-sans"
                                />
                                <label 
                                    htmlFor="email" 
                                    className="absolute left-0 top-3 text-zinc-500 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-violet-400 peer-[:not(:placeholder-shown)]:top-[-12px] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-violet-400 font-medium"
                                >
                                    Email Address
                                </label>
                            </div>

                            <div className="relative group">
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={5}
                                    placeholder=" "
                                    className="peer w-full bg-transparent border-b border-zinc-800 focus:border-violet-500 px-0 py-3 text-zinc-100 placeholder-transparent outline-none transition-all duration-300 font-sans resize-none"
                                />
                                <label 
                                    htmlFor="message" 
                                    className="absolute left-0 top-3 text-zinc-500 text-sm transition-all duration-300 pointer-events-none peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-placeholder-shown:text-zinc-500 peer-focus:top-[-12px] peer-focus:text-xs peer-focus:text-violet-400 peer-[:not(:placeholder-shown)]:top-[-12px] peer-[:not(:placeholder-shown)]:text-xs peer-[:not(:placeholder-shown)]:text-violet-400 font-medium"
                                >
                                    Message
                                </label>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 px-6 rounded-xl bg-zinc-100 hover:bg-white text-zinc-950 font-semibold tracking-wide hover:shadow-lg hover:shadow-white/5 transition-all duration-300 text-center cursor-pointer font-display"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Contact;
