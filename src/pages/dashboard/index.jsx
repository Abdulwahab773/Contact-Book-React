import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../firebase";
import AddContactModal from "../../components/AddContactModal";
import { Star, Edit, Trash2, LogOut } from "lucide-react";
import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  query,
  updateDoc,
  where,
} from "firebase/firestore";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [userPic, setUserPic] = useState();
  const [userUID, setUserUID] = useState("");
  const [data, setData] = useState([]);
  const [mode , setMode] = useState("");
  const [docID, setDocID] = useState("")
  const navigate = useNavigate();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserName(user.displayName);
      setUserPic(user.photoURL);
      setUserUID(user.uid);
    }
  });

  useEffect(() => {
    getData();
  }, [userUID]);

  const getData = async () => {
    try {
      if (!userUID) return;

      const collectionRef = collection(db, "contacts");
      const dbRef = query(collectionRef, where("uid", "==", userUID));

      let tempArr = [];
      onSnapshot(dbRef, (snapshot) => {
        tempArr = [];

        snapshot.forEach((doc) => {
          tempArr.push({
            ...doc.data(),
            id: doc.id,
          });
        });
        setData(tempArr);
      });
    } catch (error) {
      console.log(error);
    }
  };

  const addToFav = async (id) => {
    const docRef = doc(db, "contacts", id);

    await updateDoc(docRef, {
      isFavorite: true,
    });
    alert("Added To Favorites");
    getData();
  };

  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out successfully.");
        navigate("/");
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  const checkingVal = (catg) => {
    console.log(catg);

    const getData = async () => {
      try {
        if (!userUID) return;

        const collectionRef = collection(db, "contacts");

        const dbRef =
          catg === "all"
            ? query(collectionRef, where("uid", "==", userUID))
            : query(
                collectionRef,
                where("uid", "==", userUID),
                where("category", "==", catg)
              );

        let tempArr = [];
        onSnapshot(dbRef, (snapshot) => {
          tempArr = [];

          snapshot.forEach((doc) => {
            tempArr.push({
              ...doc.data(),
              id: doc.id,
            });
          });
          setData(tempArr);
        });
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  };

  const deleteContact = async (id) => {
    await deleteDoc(doc(db, "contacts", id));
    console.log("deleted successfully");
  };



  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-sm px-6 py-3 flex items-center justify-between">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text text-3xl font-bold cursor-pointer hover:scale-105 duration-300">
            ContactBook
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img
                src={userPic}
                alt="User"
                className="w-12 h-12 rounded-full border border-gray-200"
              />
              <span className="font-medium text-gray-700">{userName}</span>
            </div>

            <button
              onClick={signOutUser}
              className="flex items-center gap-2 px-3 py-1.5 cursor-pointer rounded-xl bg-gradient-to-r from-red-500 to-red-600 text-white font-medium shadow-md hover:from-red-600 hover:to-red-700 hover:shadow-lg active:scale-95 transition-all duration-200"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
          </div>
        </nav>

        <div className="flex md:flex-row md:items-center w-full justify-center gap-5 mb-10 mt-5 ">
          <input
            type="text"
            placeholder="Search contacts..."
            className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 w-full md:w-72 transition"
          />

          <select
            onChange={(e) => {
              checkingVal(e.target.value);
            }}
            className="px-4 py-2 rounded-xl border border-gray-300 bg-white text-gray-700 shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 cursor-pointer transition w-full md:w-40"
          >
            <option value="all">All</option>
            <option value="Friends">Friends</option>
            <option value="Family">Family</option>
            <option value="Work">Work</option>
          </select>

          <button
            onClick={() => {
              setIsModalOpen(true);
              setMode("add");
            }}
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
            checkMode={mode}
            contactID={docID}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mx-auto w-[93%]">
          {data.length > 0 ? (
            data.map((contact) => (
              <div
                key={contact.id}
                className="bg-white rounded-2xl shadow-md p-4 flex flex-col mb-4"
              >
                <div className="flex items-center gap-4 mb-3">
                  <img
                    src={contact.image}
                    alt={contact.name}
                    className="w-14 h-14 rounded-full border border-gray-400"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-gray-800">
                      {contact.name}
                    </h2>
                    <p className="text-sm text-gray-600">{contact.phone}</p>
                    <p className="text-sm text-gray-600">{contact.email}</p>
                  </div>
                </div>
                <span className="inline-block w-fit px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full mb-4">
                  {contact.category}
                </span>

                <div className="mt-auto flex justify-between items-center border-t pt-3">
                  <button
                    onClick={() => {
                      addToFav(contact.id);
                    }}
                    className="text-yellow-500 hover:scale-110 transition"
                  >
                    <Star
                      className={`w-5 h-5 cursor-pointer ${
                        contact.isFavorite ? "fill-yellow-500" : "fill-none"
                      }`}
                    />
                  </button>

                  <div className="flex gap-3">
                    <button
                      onClick={() => {
                        setIsModalOpen(true);
                        setMode("update");
                        setDocID(contact.id)
                      }}
                      className="text-blue-500 hover:scale-110 transition  cursor-pointer"
                    >
                      <Edit className="w-5 h-5" />
                    </button>

                    <button
                      onClick={() => {
                        deleteContact(contact.id);
                      }}
                      className="text-red-500 hover:scale-110 transition cursor-pointer"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center mt-20 justify-center text-center py-12">
              <div className="text-5xl mb-3">📭</div>
              <h2 className="text-lg font-semibold text-gray-700 mb-1">
                No Contacts Found
              </h2>
              <p className="text-sm text-gray-500">
                Start adding your contacts to see them here.
              </p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
