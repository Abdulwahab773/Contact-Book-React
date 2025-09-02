import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function LoginPage() {
  return (
    <>
    <Navbar/>
      <div className="flex items-center justify-center min-h-screen mt-17 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
          {/* Heading */}
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Login to Contact Book
          </h2>

          {/* Form */}
          <form className="flex flex-col gap-4">
            {/* Email */}
            <div>
              <label className="block text-gray-900 font-medium mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-900 font-medium mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>

            {/* Login Button */}
            <Button text="Login" type="primary" onClick={() => {}} />

            {/* Extra Links */}
            <p className="text-center text-gray-500 mt-4">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="text-blue-600 font-medium hover:underline"
              >
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default LoginPage;
