import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">INAR</h2>
            <p className="text-sm">Exquisite fragrances for every occasion.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/About"
                  className="hover:text-gray-400 transition duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/Contact"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/Perfumesforhim"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Perfumes for Him
                </Link>
              </li>
              <li>
                <Link
                  to="/Perfumesforher"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Perfumes for Her
                </Link>
              </li>
              <li>
                <Link
                  to="/BudgetSeries"
                  className="hover:text-gray-400 transition duration-200"
                >
                  Budget Series
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="flex items-center mb-2">
              <FaWhatsapp className="mr-2" />
              Whatsapp: +92 339 2005399
            </p>
            <p className="mb-4">
              Studio: Plot 38C 24th Commercial St, Phase 2 Commercial Area Ext,
              Karachi, Sindh 75500
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-gray-400 transition duration-200"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-200"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-gray-400 transition duration-200"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          © {new Date().getFullYear()} INAR Perfumes. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
