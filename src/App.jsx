import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import About from "./pages/About";
import Perfumesforher from "./Components/perfumesforher";
import Perfumesforhim from "./Components/Perfumesforhim";
import BudgetSeries from "./Components/BudgetSeries";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-black text-cream font-sans">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/perfumesforhim" element={<Perfumesforhim />} />
            <Route path="/perfumesforher" element={<Perfumesforher />} />
            <Route path="/budgetseries" element={<BudgetSeries />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
