import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-['Montserrat'] text-4xl font-bold">
          INAR
        </Link>

        <ul className="hidden md:flex space-x-6 text-sm font-semibold">
          <li>
            <Link
              to="/"
              className="hover:text-gray-300 transition duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/About"
              className="hover:text-gray-300 transition duration-200"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Perfumesforhim"
              className="hover:text-gray-300 transition duration-200"
            >
              Perfumes for Him
            </Link>
          </li>
          <li>
            <Link
              to="/Perfumesforher"
              className="hover:text-gray-300 transition duration-200"
            >
              Perfumes for Her
            </Link>
          </li>
          <li>
            <Link
              to="/BudgetSeries"
              className="hover:text-gray-300 transition duration-200"
            >
              Budget Series
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="hover:text-gray-300 transition duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="flex items-center space-x-4">
          {isSearchOpen && (
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-white px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-600"
            />
          )}
          <button
            onClick={toggleSearch}
            className="text-white hover:text-gray-300 transition duration-200"
          >
            <FaSearch className="h-5 w-5" />
          </button>
          <Link
            to="/cart"
            className="text-white hover:text-gray-300 transition duration-200"
          >
            <FaShoppingCart className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
