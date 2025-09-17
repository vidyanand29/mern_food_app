import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="min-h-screen flex flex-col p-4">
            <Router>
                <ToastContainer theme="dark" position="top-right" autoClose={3000} />
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/success" element={<Success />} />
                    </Routes>
                </main>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
