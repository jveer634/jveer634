function Footer() {
    return (
        <footer className="grid grid-cols-1 items-center md:grid-cols-2 p-10 bg-black text-white md:p-16  gap-10 ">
            <div className="space-y-2 ">
                <h2 className="font-bold text-2xl text-orange-600">
                    Let's talk.
                </h2>
                <blockquote className="text-lg">
                    Great things in business are never done by one person;
                    they’re done by a team of people
                </blockquote>
                <p className="italic">- Steve Jobs</p>
            </div>
            <div className="md:place-self-center ">
                <h3 className=" text-md font-bold text-neutral-600 uppercase text-muted my-2">
                    Socials
                </h3>
                <div className="*:p-2 from-neutral-900 flex md:flex-col gap-3">
                    <a
                        target="_blank"
                        href="mailto:jveer.nalam@gmail.com"
                        className="hover:underline"
                    >
                        GMail
                    </a>

                    <a
                        target="_blank"
                        href="https://www.github.com/jveer634/"
                        className="hover:underline"
                    >
                        Github
                    </a>

                    <a
                        target="_blank"
                        href="https://www.linkedin.com/in/jveernalam/"
                        className="hover:underline"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
