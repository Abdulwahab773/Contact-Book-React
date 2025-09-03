import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyArj0ZoM67xuVfxmzoKfHIuHo33CDdfop0",
  authDomain: "contactbook-2d679.firebaseapp.com",
  projectId: "contactbook-2d679",
  storageBucket: "contactbook-2d679.firebasestorage.app",
  messagingSenderId: "19999910186",
  appId: "1:19999910186:web:6c77642db2c49432b2d653"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {
    auth,
    createUserWithEmailAndPassword,
    db
}