import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <h4 className="text-2xl font-extrabold mb-4 tracking-wide">
            ContactBook
          </h4>
          <p className="text-gray-200 leading-relaxed">
            The modern way to organize and access your contacts. <br />
            Secure, simple, and stylish.
          </p>
        </div>

        <div>
          <h4 className="text-2xl font-extrabold mb-4 tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-3 text-gray-200">
            <li className="hover:text-white hover:translate-x-1 transform transition cursor-pointer hover:underline">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:text-white hover:translate-x-1 transform transition cursor-pointer hover:underline">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="hover:text-white hover:translate-x-1 transform transition cursor-pointer hover:underline">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-2xl font-extrabold mb-4 tracking-wide">
            Follow Us
          </h4>
          <div className="flex gap-6 text-2xl">
            <a
              href="#"
              className="hover:text-blue-400 transition transform hover:scale-110"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="hover:text-blue-600 transition transform hover:scale-110"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="#"
              className="hover:text-pink-500 transition transform hover:scale-110"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition transform hover:scale-110"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>

      <div className="bg-black/30 py-4 text-center text-sm border-t border-white/10">
        © {new Date().getFullYear()} ContactBook. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
