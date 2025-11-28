import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white fixed w-full z-20 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wider">
          NaijaStyle Atelier
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm">
          <Link
            to="/gallery"
            className="hover:text-[#D4B78F] transition-colors"
          >
            Gallery
          </Link>
          <Link to="/about" className="hover:text-[#D4B78F] transition-colors">
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#D4B78F] transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            className="cursor-pointer z-30 relative"
          >
            {isOpen ? (
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 flex flex-col gap-4 px-4 pb-4 bg-black z-20 relative">
          <Link
            to="/gallery"
            className="hover:text-[#D4B78F]"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className="hover:text-[#D4B78F]"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-[#D4B78F]"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;









