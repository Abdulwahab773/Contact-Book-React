import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function ContactPage() {
  return (
    <>
      <Navbar />
      <section className="px-6 py-20 bg-gray-50 min-h-screen flex items-center justify-center mt-15">
        <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-10">
          {/* Heading */}
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
            Contact Us
          </h2>
          <p className="text-center text-gray-600 mb-12">
            Have questions or feedback about{" "}
            <span className="font-semibold text-indigo-600">Contact Book</span>?
            Fill out the form below, and we’ll get back to you shortly.
          </p>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex flex-col">
              <label className="text-gray-700 mb-2 font-medium">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label className="text-gray-700 mb-2 font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>

            <div className="md:col-span-2 flex flex-col">
              <label className="text-gray-700 mb-2 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              ></textarea>
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-indigo-600 cursor-pointer hover:bg-indigo-700 text-white px-8 py-3 rounded-full font-medium shadow-md transition"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ContactPage;
