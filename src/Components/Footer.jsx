import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-cream py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-2xl font-serif font-bold text-gold-light mb-4">
              INAR
            </h2>
            <p className="text-sm text-cream">
              Exquisite fragrances for every occasion.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold text-gold-light mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <FooterLink to="/about">About</FooterLink>
              <FooterLink to="/contact">Contact</FooterLink>
              <FooterLink to="/perfumesforhim">Perfumes for Him</FooterLink>
              <FooterLink to="/perfumesforher">Perfumes for Her</FooterLink>
              <FooterLink to="/budgetseries">Budget Series</FooterLink>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-serif font-semibold text-gold-light mb-4">
              Contact Us
            </h3>
            <p className="flex items-center mb-2 text-cream">
              <FaWhatsapp className="mr-2 text-gold-light" />
              Whatsapp: +92 339 2005399
            </p>
            <p className="mb-4 text-cream">
              Studio: Plot 38C 24th Commercial St, Phase 2 Commercial Area Ext,
              Karachi, Sindh 75500
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={FaFacebook} />
              <SocialLink href="#" icon={FaInstagram} />
              <SocialLink href="#" icon={FaTwitter} />
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-cream">
          © {new Date().getFullYear()} INAR Perfumes. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }) => (
  <li>
    <Link
      to={to}
      className="text-cream hover:text-gold-light transition duration-200"
    >
      {children}
    </Link>
  </li>
);

const SocialLink = ({ href, icon: Icon }) => (
  <a
    href={href}
    className="text-cream hover:text-gold-light transition duration-200"
    aria-label="Social media link"
  >
    <Icon />
  </a>
);

export default Footer;
