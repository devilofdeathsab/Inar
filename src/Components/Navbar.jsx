import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch, FaShoppingCart, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="bg-black text-cream shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="font-serif text-4xl font-bold text-gold-light"
          >
            INAR
          </Link>

          <div className="hidden md:flex items-center space-x-6">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/perfumesforhim">For Him</NavLink>
            <NavLink to="/perfumesforher">For Her</NavLink>
            <NavLink to="/budgetseries">Budget Series</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <div className="flex items-center space-x-4">
            {isSearchOpen && (
              <input
                type="text"
                placeholder="Search..."
                className="bg-cream text-black px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-gold-light"
              />
            )}
            <button
              onClick={toggleSearch}
              className="text-cream hover:text-gold-light transition duration-200"
              aria-label="Search"
            >
              <FaSearch className="h-5 w-5" />
            </button>
            <Link
              to="/cart"
              className="text-cream hover:text-gold-light transition duration-200"
              aria-label="Cart"
            >
              <FaShoppingCart className="h-5 w-5" />
            </Link>
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-cream hover:text-gold-light transition duration-200"
              aria-label="Menu"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-4 md:hidden">
            <NavLink to="/" mobile>
              Home
            </NavLink>
            <NavLink to="/about" mobile>
              About
            </NavLink>
            <NavLink to="/perfumesforhim" mobile>
              For Him
            </NavLink>
            <NavLink to="/perfumesforher" mobile>
              For Her
            </NavLink>
            <NavLink to="/budgetseries" mobile>
              Budget Series
            </NavLink>
            <NavLink to="/contact" mobile>
              Contact
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLink = ({ to, children, mobile }) => (
  <Link
    to={to}
    className={`${
      mobile ? "block py-2" : "inline-block"
    } text-sm uppercase tracking-wider font-medium hover:text-gold-light transition duration-200`}
  >
    {children}
  </Link>
);

export default Navbar;
