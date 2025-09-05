import { useState } from "react";
import Input from "./Input";
import { auth, db } from "../firebase";
import { addDoc, collection, doc, Timestamp, updateDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

function AddContactModal({ isOpen, onClose, checkMode, contactID }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [image, setImage] = useState();
  const [category, setCategory] = useState("Friends");
  const [uid, setUID] = useState("");

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUID(user.uid);
    }
  });

  const fileUpload = async () => {
    let formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "ContactBook");

    try {
      let res = await fetch(
        "https://api.cloudinary.com/v1_1/dsdnmgnpr/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );
      let data = await res.json();
      return data.secure_url;
    } catch (error) {
      console.log(error.message);
    }
  };

  const addData = async () => {
    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        name,
        email,
        phone,
        category,
        image:
          (await fileUpload()) ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8UcJiZxXc_q-Zr-1dohkW5sd8lTxvpPj-g&s",
        created_At: Timestamp.now(),
        isFavorite: false,
        uid,
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (!isOpen) return null;

  
  const updateContact = async () => {
    const dbRef = doc(db, "contacts", contactID);

    await updateDoc(dbRef, {
      name,
      email,
      phone,
      category,
      image:
        (await fileUpload()) ||
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl8UcJiZxXc_q-Zr-1dohkW5sd8lTxvpPj-g&s",
      created_At: Timestamp.now(),
      isFavorite: false,
      uid,
    });
  };


  const handleSubmit = () => {

    if (checkMode === "add") {
      addData();
    } else {
      updateContact();
    }

    setTimeout(() => {
      onClose();
    }, 2000);

    setEmail("");
    setName("");
    setPhone("");
    setImage();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg h-[96%] relative">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 border-b pb-3">
          Add New Contact
        </h2>

        <div className="flex flex-col gap-5">
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

          <div>
            <label className="block text-sm text-center font-medium text-gray-600 mb-2">
              Profile Picture
            </label>

            <div className="flex flex-col items-center">
              <label className="flex flex-col items-center justify-center w-32 h-32 rounded-lg border-2 border-dashed border-gray-300 cursor-pointer bg-white hover:border-indigo-400 hover:bg-indigo-50 transition-colors duration-200">
                <span className="text-sm font-medium text-gray-500">
                  {image ? image.name : "Click to Upload"}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  name="image"
                  className="hidden"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-3.5">
          <button
            onClick={() => {
              onClose();
              setImage();
            }}
            className="px-5 py-2 cursor-pointer rounded-xl border border-gray-300 bg-gray-100 hover:bg-gray-200 transition"
          >
            Cancel
          </button>
          <button
            className="px-6 py-2 rounded-xl cursor-pointer bg-indigo-500 text-white font-medium shadow-md hover:bg-indigo-600 transition"
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
