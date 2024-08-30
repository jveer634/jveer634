import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Navbar from "./components/NavBar";
import Contact from "./components/Contact";
import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer";

function App() {
    return (
        <div className=" bg-sky-50 grid grid-rows-[auto_1fr_auto]">
            <Navbar />
            <ToastContainer limit={2} hideProgressBar={true} />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
