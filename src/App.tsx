import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/NavBar";
import Contact from "./components/Contact";
import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";

function App() {
    return (
        <div className="grid grid-rows-[auto_1fr_auto]">
            <Navbar />
            <ToastContainer limit={2} hideProgressBar={true} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
