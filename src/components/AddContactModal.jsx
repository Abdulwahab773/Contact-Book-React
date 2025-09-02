import { useState } from "react";
import Input from "./Input";

function AddContactModal({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    category: "Friends",
    image: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(formData);
    setFormData({
      name: "",
      phone: "",
      email: "",
      category: "Friends",
      image: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-2xl shadow-2xl w-96 relative">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Contact</h2>

        <div className="flex flex-col gap-4">
          <Input
            type="text"
            name="name"
            placeholder="Enter name"
            value={formData.name}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
          />
          <Input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
          />
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer transition"
          >
            <option value="Friends">Friends</option>
            <option value="Family">Family</option>
            <option value="Work">Work</option>
          </select>
          <Input
            type="text"
            name="image"
            placeholder="Enter image URL"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl border border-gray-300 bg-gray-100 hover:bg-gray-200 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-xl bg-indigo-500 text-white shadow-md hover:bg-indigo-600 transition"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddContactModal;
