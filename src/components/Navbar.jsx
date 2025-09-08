import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text text-2xl md:text-3xl font-bold cursor-pointer hover:scale-105 duration-300">
            <Link to={"/"}>ContactBook</Link>
          </h1>

          <ul className="hidden md:flex gap-8 font-medium text-gray-700">
            <li className="hover:text-blue-600 transition cursor-pointer">
              <NavLink  className={({isActive}) => isActive ? "text-blue-600 font-semibold" : "text-gray-600" }   to={"/"}>Home</NavLink>
            </li>
            <li className="hover:text-blue-600 transition cursor-pointer">
              <NavLink  className={({isActive}) => isActive ? "text-blue-600 font-semibold" : "text-gray-600" }  to={"/about"}>About</NavLink>
            </li>
            <li className="hover:text-blue-600 transition cursor-pointer">
              <NavLink  className={({isActive}) => isActive ? "text-blue-600 font-semibold" : "text-gray-600" }  to={"/contact"}>Contact</NavLink>
            </li>
          </ul>

          <button
            onClick={() => setIsOpen(true)}
            className="md:hidden text-3xl text-blue-600 focus:outline-none cursor-pointer"
          >
            ☰
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div
          className={`absolute top-0 left-0 h-full w-48 bg-white shadow-lg p-6 space-y-6 transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="text-2xl cursor-pointer text-gray-700 hover:text-red-500"
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>

          <nav className="flex flex-col gap-6 text-lg font-medium text-gray-700">
            <Link
              to={"/"}
              className="hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              to={"/about"}
              className="hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              to={"/contact"}
              className="hover:text-blue-600 transition"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
