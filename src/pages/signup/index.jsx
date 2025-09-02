import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

function SignupPage() {
  return (
    <>
      <Navbar />
      <div className="mt-17 min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 px-6">
        <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
          {/* Heading */}
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Create Account
          </h1>
          <p className="text-gray-500 text-center mb-6">
            Join us and start managing your contacts efficiently 
          </p>

          {/* Form */}
          <form  className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Button */}
            <Button text="Sign Up" type="primary"  />
          </form>

          {/* Footer */}
          <p className="text-sm text-gray-500 text-center mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-semibold hover:underline"
            >
              Login here
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SignupPage;
