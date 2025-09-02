import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Logo from "../../assets/contact-information.png";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <Navbar />

      <section className="flex flex-col md:flex-row items-center justify-between px-10 pt-32 pb-20 max-w-7xl mx-auto">
        <div className="max-w-lg animate-fadeIn">
          <h2 className="text-6xl font-extrabold leading-tight">
            Manage Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
              Contacts
            </span>{" "}
            Smarter
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Organize, favorite and remember every important connection. A modern
            contact manager powered by cloud.
          </p>
          <div className="mt-8 flex gap-4">
            <Link to={"/login"}>
              <Button text="Get Started" type="primary" />
            </Link>
            <Link to={"/about"}>
              <Button text="Learn More" type="secondary" />
            </Link>
          </div>
        </div>
        <img
          src={Logo}
          alt="Contact Illustration"
          className="w-96 mt-10 md:mt-0 animate-slideIn"
        />
      </section>

      <section className="px-10 py-20 bg-gradient-to-br from-gray-50 to-gray-100 text-center">
        <h3 className="text-4xl font-extrabold mb-14 text-gray-800 tracking-tight">
          Why Choose Our Contact Manager?
        </h3>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto cursor-pointer">
          <div className="animate-fadeIn p-8 bg-white rounded-3xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-3xl font-bold">
              +
            </div>
            <h4 className="text-2xl font-semibold mb-3">Add & Manage</h4>
            <p className="text-gray-600">
              Quickly add, update, and delete contacts with an easy-to-use
              interface.
            </p>
          </div>

          <div className="animate-fadeIn p-8 bg-white rounded-3xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-green-100 text-green-600 rounded-full text-3xl font-bold">
              ★
            </div>
            <h4 className="text-2xl font-semibold mb-3">Groups & Favorites</h4>
            <p className="text-gray-600">
              Keep your contacts organized with groups and mark favorites
              easily.
            </p>
          </div>

          <div className="animate-fadeIn p-8 bg-white rounded-3xl shadow-md hover:shadow-2xl transition-transform transform hover:-translate-y-2 duration-300">
            <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-pink-100 text-pink-600 rounded-full text-3xl font-bold">
              🎂
            </div>
            <h4 className="text-2xl font-semibold mb-3">Birthday Reminders</h4>
            <p className="text-gray-600">
              Get smart reminders so you’ll never miss a special day again.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
