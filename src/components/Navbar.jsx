import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text text-3xl font-bold cursor-pointer hover:scale-105 duration-300">
          <Link to={"/"}>ContactBook</Link>
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          <li className="hover:text-blue-600 transition cursor-pointer">
            <Link to={"/"}>Home</Link>
          </li>

          <li className="hover:text-blue-600 transition cursor-pointer">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="hover:text-blue-600 transition cursor-pointer">
            <Link to={"/contact"}>Contact</Link>
            
          </li>
        </ul>

        {/* Mobile Menu (optional) */}
        <button className="md:hidden text-2xl text-blue-600">☰</button>
      </div>
    </nav>
  );
};

export default Navbar;
