import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import "../../App.css";

function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="mt-17 min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-16 flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold mb-6 text-center">
          About ContactBook
        </h1>

        {/* Description */}
        <p className="max-w-3xl text-center text-lg text-gray-100 mb-12">
          ContactBook is your modern solution to manage, organize, and access
          your contacts securely and effortlessly. With a sleek interface and
          smart features, it makes storing, searching, and connecting with
          people easier than ever.
        </p>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl cursor-pointer">
          <div className="animate-fadeIn duration-300 bg-white text-center text-gray-800 p-6 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl font-bold mb-2">Simple & Intuitive</h2>
            <p className="text-gray-600">
              Manage your contacts in a clean and easy-to-use interface designed
              to save your time and effort.
            </p>
          </div>

          <div className="bg-white animate-fadeIn duration-300 text-center text-gray-800 p-6 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl font-bold mb-2">Secure Storage</h2>
            <p className="text-gray-600">
              Your data is always safe with encrypted storage, ensuring privacy
              and protection at all times.
            </p>
          </div>

          <div className="bg-white animate-fadeIn duration-300 text-center text-gray-800 p-6 rounded-2xl shadow-lg transform transition hover:scale-105 hover:shadow-xl">
            <h2 className="text-xl font-bold mb-2 ">Always Accessible</h2>
            <p className="text-gray-600">
              Access your contacts anywhere, anytime, on any device with a
              smooth and responsive experience.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <Link
            to="/contact"
            className="bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
          >
            Get in Touch
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutPage;
