import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Button from "../../components/Button";
import Input from "../../components/Input";

function SignupPage() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [fullName, setFullName] = useState("");

  const navigate = useNavigate();

  const signupUser = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await updateProfile(response.user, {
        displayName: fullName,
      });

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const formHandler = (e) => {
    e.preventDefault();
    signupUser();
  };

  return (
    <>
      <Navbar />
      <div className="mt-17 min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 px-6">
        <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-md">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Create Account
          </h1>
          <p className="text-gray-500 text-center mb-6">
            Join us and start managing your contacts efficiently
          </p>

          <form onSubmit={formHandler} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-600">
                Full Name
              </label>
              <Input
                placeholder={"Enter Your Full Name"}
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Email Address
              </label>
              <Input
                placeholder={"Enter your email"}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <Input
                placeholder={"Enter your password"}
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>

            <Button text="Sign Up" type="primary" />
          </form>

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
