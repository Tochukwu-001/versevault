// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCh4F0Rxa-zABg0u35o_uC8d2v6xZztBuI",
  authDomain: "versevault-3f9d2.firebaseapp.com",
  projectId: "versevault-3f9d2",
  storageBucket: "versevault-3f9d2.firebasestorage.app",
  messagingSenderId: "284873673962",
  appId: "1:284873673962:web:269ff914d6cbc98dd91b93",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
