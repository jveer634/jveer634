import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Nav from "./components/NavBar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="px-10 font-poppins overflow-x-hidden">
            <Nav />
            <ToastContainer limit={2} hideProgressBar={true} />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
        </div>
    );
}

export default App;
