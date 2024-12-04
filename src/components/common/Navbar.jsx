import React, { useState } from "react";
import logo from "../../assets/Logo1.png";
import { Link } from "react-router-dom";



function Navbar() {
  
 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds a smooth scroll effect
    });
  };

  return (
    <nav className="fixed top-0 w-full  bg-blue-300 font-serif shadow-2xl z-50">
      <div className="flex justify-between items-center px-5 py-1">
        {/* Logo */}
        <a href="/">
          <img src={logo} alt="Logo" className="w-20" />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 text-gray-800">
          <Link
            className="hover:text-pink-500 transition-colors text-xl font-medium"
            to="/home"
            onClick={scrollToTop}
          >
            Home
          </Link>
          <Link
            className="hover:text-pink-500 transition-colors text-xl font-medium"
            to="/about"
            onClick={scrollToTop}
          >
            About
          </Link>
          <Link
            className="hover:text-pink-500 transition-colors text-xl font-medium"
            to="/project"
            onClick={scrollToTop}
          >
            Projects
          </Link>
          <Link
            className="hover:text-pink-500 transition-colors text-xl font-medium"
            to="/contact"
            onClick={scrollToTop}
          >
            Contact
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-gray-800 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white h-full shadow-md flex flex-row items-center w-full  gap-4 px-4cd  py-4">
          <Link
            className=" hover:text-pink-500 transition-colors text-lg font-medium"
            to="/home"
          >
            Home
          </Link>
          <Link
            className=" hover:text-pink-500 transition-colors text-lg font-medium"
            to="/about"
          >
            About
          </Link>
          <Link
            className=" hover:text-pink-500 transition-colors text-lg font-medium"
            to="/project"
          >
            Projects
          </Link>
          <Link
            className=" hover:text-pink-500 transition-colors text-lg font-medium"
            to="/contact"
          >
            Contact
          </Link>

         
        </div>
      )}
    </nav>
  );
}

export default Navbar;
                                                                                                                         