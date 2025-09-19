// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrp6MmrGnXr8Q88P7jj7-l_P0IJr9nxTg",
  authDomain: "versevault-873d1.firebaseapp.com",
  projectId: "versevault-873d1",
  storageBucket: "versevault-873d1.firebasestorage.app",
  messagingSenderId: "381547509447",
  appId: "1:381547509447:web:6210fcc8827caa493d30e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db}