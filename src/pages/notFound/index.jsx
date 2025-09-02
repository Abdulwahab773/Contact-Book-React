import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <Navbar />
      <div className="mt-17 flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6">
        <h1 className="text-9xl font-extrabold">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mt-4">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-200 text-center max-w-md">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="mt-6 inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
          Go Back Home
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default NotFoundPage;
