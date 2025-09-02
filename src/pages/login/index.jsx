import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Input from "../../components/Input";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useState } from "react";

function LoginPage() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = async () => {
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const formHandler = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen mt-17 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Login to Contact Book
          </h2>

          <form onSubmit={formHandler} className="flex flex-col gap-4">
            <div>
              <label className="block text-gray-900 font-medium mb-1">
                Email
              </label>
              <Input
                placeholder={"Enter your email"}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>

            <div>
              <label className="block text-gray-900 font-medium mb-1">
                Password
              </label>
              <Input
                placeholder={"Enter your email"}
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                type="password"
              />
            </div>

            <Button text="Login" type="primary" />

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
      <Footer />
    </>
  );
}

export default LoginPage;
