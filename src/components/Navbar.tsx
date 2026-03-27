import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { getCartCount } = useCart();
  const cartCount = getCartCount();

  // Check if user is logged in
  const user = localStorage.getItem("user");
  const isLoggedIn = !!user;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <nav className="bg-black text-white fixed w-full z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wider">
          NaijaStyle Atelier
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm items-center">
          <Link to="/gallery" className="hover:text-[#D4B78F] transition-colors">
            Gallery
          </Link>

          {isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="hover:text-[#D4B78F] transition-colors"
            >
              Logout
            </button>
          ) : (
            <>
              <Link to="/login" className="hover:text-[#D4B78F] transition-colors">
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-[#D4B78F] text-black px-4 py-1.5 rounded-lg font-semibold hover:bg-[#b99b6f] transition"
              >
                Sign Up
              </Link>
            </>
          )}

          {/* Cart Icon */}
          <Link to="/cart" className="relative">
            <FaShoppingCart className="w-5 h-5 hover:text-[#D4B78F] transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D4B78F] text-black rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="md:hidden flex items-center gap-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="w-5 h-5 hover:text-[#D4B78F] transition-colors" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D4B78F] text-black rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            className="cursor-pointer z-50 relative"
          >
            {isOpen ? (
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <>
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
          />
        )}

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-white text-black shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } flex flex-col justify-center items-center`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-black text-3xl font-bold"
            aria-label="Close Menu"
          >
            &times;
          </button>

          <div className="flex flex-col gap-10 text-center">
            <Link to="/gallery" className="hover:text-[#D4B78F] font-semibold text-lg" onClick={() => setIsOpen(false)}>
              Gallery
            </Link>

            {isLoggedIn ? (
              <button
                onClick={() => { handleLogout(); setIsOpen(false); }}
                className="hover:text-[#D4B78F] font-semibold text-lg"
              >
                Logout
              </button>
            ) : (
              <>
                <Link to="/login" className="hover:text-[#D4B78F] font-semibold text-lg" onClick={() => setIsOpen(false)}>
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="bg-[#D4B78F] text-black px-5 py-2 rounded-lg font-semibold hover:bg-[#b99b6f] transition"
                  onClick={() => setIsOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </>
    </nav>
  );
};

export default Navbar;




























