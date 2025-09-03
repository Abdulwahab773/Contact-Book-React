import { onAuthStateChanged } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import Input from "../../components/Input";
import Button from "../../components/Button";
import AddContactModal from "../../components/AddContactModal";

import {
  Star,
  Edit,
  Trash2,
  UserCircle,
  LogOut,
  Plus,
  UserCircle2,
  Settings,
} from "lucide-react";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSaveContact = (contact) => {
    console.log("New Contact:", contact);
  };

  const [contacts] = useState([
    {
      id: 1,
      name: "John Doe",
      phone: "123-456-7890",
      email: "john@mail.com",
      category: "Friends",
      favorite: false,
      image: "https://i.pravatar.cc/100?img=1",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-sm px-6 py-3 flex items-center justify-between">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text text-3xl font-bold cursor-pointer hover:scale-105 duration-300">
          ContactBook
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <img
              src="https://via.placeholder.com/40"
              alt="User"
              className="w-12 h-12 rounded-full border"
            />
            <span className="font-medium text-gray-700">Abdul Wahab</span>
          </div>

          <button className="flex items-center gap-2 px-3 py-1.5 cursor-pointer rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-medium shadow-md hover:from-red-600 hover:to-red-700 hover:shadow-lg active:scale-95 transition-all duration-200">
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </nav>

      {/* Filters */}
      <div className="flex md:flex-row md:items-center w-full justify-center gap-5 mb-10 mt-5 ">
        <input
          type="text"
          placeholder="Search contacts..."
          className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full md:w-72 transition"
        />

        <select className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer transition w-full md:w-40">
          <option value="all">All</option>
          <option value="friends">Friends</option>
          <option value="family">Family</option>
          <option value="work">Work</option>
        </select>

        {/* Add Contact Button */}
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-center gap-2 cursor-pointer px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-medium shadow-md hover:from-indigo-600 hover:to-indigo-700 hover:shadow-lg active:scale-95 transition-all duration-200 w-full md:w-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4v16m8-8H4"
            />
          </svg>
          Add Contact
        </button>

        <AddContactModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSave={handleSaveContact}
        />
      </div>

      {/* Contacts Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto w-[93%]">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className="bg-white rounded-2xl shadow-md p-4 flex flex-col"
          >
            {/* Profile */}
            <div className="flex items-center gap-4 mb-3">
              <img
                src={contact.image}
                alt={contact.name}
                className="w-14 h-14 rounded-full border"
              />
              <div>
                <h2 className="text-lg font-semibold text-gray-800">
                  {contact.name}
                </h2>
                <p className="text-sm text-gray-600">{contact.phone}</p>
                <p className="text-sm text-gray-600">{contact.email}</p>
              </div>
            </div>

            {/* Category Badge */}
            <span className="inline-block w-fit px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full mb-4">
              {contact.category}
            </span>

            {/* Actions */}
            <div className="mt-auto flex justify-between items-center border-t pt-3">
              {/* Favorite */}
              <button className="text-yellow-500 hover:scale-110 transition">
                <Star
                  className={`w-5 h-5 ${
                    contact.favorite ? "fill-yellow-500" : "fill-none"
                  }`}
                />
              </button>

              {/* Edit & Delete */}
              <div className="flex gap-3">
                <button className="text-blue-500 hover:scale-110 transition">
                  <Edit className="w-5 h-5" />
                </button>
                <button className="text-red-500 hover:scale-110 transition">
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
