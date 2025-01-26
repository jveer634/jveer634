import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="grid grid-cols-1 gap-10 bg-black p-10 text-white md:grid-cols-2 md:p-16">
            <div className="space-y-2 text-center md:text-left">
                <h2 className="text-2xl font-bold text-orange-600">
                    Let's talk.
                </h2>
                <blockquote className="text-lg">
                    Great things in business are never done by one person;
                    they’re done by a team of people
                </blockquote>
                <p className="italic">- Steve Jobs</p>
            </div>
            <div className="bg-red flex flex-col items-center justify-around gap-6 text-center md:w-full md:flex-row md:place-self-center md:text-left">
                <div>
                    <h3 className="text-md my-2 font-bold uppercase text-muted text-neutral-500">
                        Socials
                    </h3>
                    <div className="*:p-2 flex gap-3 md:flex-col">
                        <Link
                            target="_blank"
                            to="https://www.linkedin.com/in/jveernalam/"
                            className="hover:text-orange-200"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            target="_blank"
                            to="https://hashnode.com/@jveer634"
                            className="hover:text-orange-200"
                        >
                            Hashnode
                        </Link>

                        <Link
                            target="_blank"
                            to="https://www.github.com/jveer634/"
                            className="hover:text-orange-200"
                        >
                            Github
                        </Link>
                    </div>
                </div>
                <div>
                    <h3 className="text-md my-2 font-bold uppercase text-muted text-neutral-500">
                        Links
                    </h3>
                    <div className="*:p-2 flex gap-3 md:flex-col">
                        <Link to="/" className="hover:text-orange-200">
                            Home
                        </Link>
                        <Link to="/projects" className="hover:text-orange-200">
                            Projects
                        </Link>

                        <Link to="/services" className="hover:text-orange-200">
                            Services
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
