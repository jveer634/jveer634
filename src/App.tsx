import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./components/NavBar";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { smoothScrollTo } from "./utils/smoothScroll";

import { Routes, Route } from "react-router-dom";

function App() {
    useEffect(() => {
        const handleAnchorClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest("a");
            if (!target) return;
            const href = target.getAttribute("href");
            if (href && href.startsWith("#") && href.length > 1) {
                const targetElement = document.getElementById(href.substring(1));
                if (targetElement) {
                    e.preventDefault();
                    smoothScrollTo(href);
                    window.history.pushState(null, "", href);
                }
            }
        };

        document.addEventListener("click", handleAnchorClick);
        return () => document.removeEventListener("click", handleAnchorClick);
    }, []);

    return (
        <section className=" font-lora overflow-x-hidden">
            <Nav />
            <ToastContainer theme="dark" limit={2} hideProgressBar={true} />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </section>
    );
}

export default App;
