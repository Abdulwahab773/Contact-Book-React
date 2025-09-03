import { useState } from "react";
import Input from "./Input";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

function AddContactModal({ isOpen, onClose, onSave }) {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   phone: "",
  //   email: "",
  //   category: "Friends",
  //   image: "",
  // });

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const addData = async () => {
   
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        name,
        email,
        phone,
        category
      });
      
      console.log(docRef)

    } catch (error) {
      console.log(error);
    }
  };



  if (!isOpen) return null;

  const handleSubmit = () => {
    // onSave(formData);
    addData();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg h-[96%] relative">
        {/* Heading */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
          Add New Contact
        </h2>

        {/* Form Fields */}
        <div  className="flex flex-col gap-5">
          <Input
            type="text"
            name="name"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Category
            </label>
            <select
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer transition"
            >
              <option value="Friends">Friends</option>
              <option value="Family">Family</option>
              <option value="Work">Work</option>
            </select>
          </div>

          {/* Image Upload */}
          {/* <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Profile Picture
            </label>

            <div className="flex items-center gap-5">

              {formData.image ? null : (
                <label className="flex flex-col items-center justify-center w-32 h-32 rounded-xl border-2 border-dashed border-gray-300 cursor-pointer bg-gray-50 hover:border-indigo-500 hover:text-indigo-500 transition text-gray-400">
                  <span className="text-sm font-medium">Click to Upload</span>
                  <input
                    type="file"
                    accept="image/*"
                    name="image"
                    className="hidden"
                    onChange={(e) =>
                      setFormData({ ...formData, image: e.target.files[0] })
                    }
                  />
                </label>
              )}
              {formData.image && (
                <div className="relative">
                  <img
                    src={URL.createObjectURL(formData.image)}
                    alt="preview"
                    className="w-32 h-32 rounded-xl object-cover shadow-md border"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, image: null })}
                    className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow hover:bg-red-600 transition"
                  >
                    ✕
                  </button>
                </div>
              )}
            </div>
          </div> */}
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4 mt-3">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl border border-gray-300 bg-gray-100 hover:bg-gray-200 transition"
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 rounded-xl bg-indigo-500 text-white font-medium shadow-md hover:bg-indigo-600 transition"
            onClick={handleSubmit}
          >
            Save Contact
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddContactModal;
