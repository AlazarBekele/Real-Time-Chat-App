// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAY57XER9OrGxrc84dagmTBnm1wVOF-7O0",
  authDomain: "nexchat-295ba.firebaseapp.com",
  projectId: "nexchat-295ba",
  storageBucket: "nexchat-295ba.firebasestorage.app",
  messagingSenderId: "657605085304",
  appId: "1:657605085304:web:857c6135c74f9d119c458d",
  measurementId: "G-QL3TZVREZW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Authentication
export const auth = getAuth(app);
// Firebase Profile DB
export const db = getFirestore(app);
// const analytics = getAnalytics(app);
