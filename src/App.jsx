import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Perfumesforher from "./Components/perfumesforher";
import Perfumesforhim from "./Components/Perfumesforhim";
import BudgetSeries from "./Components/BudgetSeries";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Perfumesforhim" element={<Perfumesforhim />} />
            <Route path="/Perfumesforher" element={<Perfumesforher />} />
            <Route path="/BudgetSeries" element={<BudgetSeries />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
