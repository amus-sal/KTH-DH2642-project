// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsThhGxolp1gBBWtlZOxZmWRfn6_MzBNs",
  authDomain: "kth-abdo-dh2642.firebaseapp.com",
  projectId: "kth-abdo-dh2642",
  storageBucket: "kth-abdo-dh2642.firebasestorage.app",
  messagingSenderId: "697269829794",
  appId: "1:697269829794:web:d5bf01e305465d9792d7fb",
  measurementId: "G-1T248MDBB6",
  databaseURL : "https://kth-abdo-dh2642-default-rtdb.europe-west1.firebasedatabase.app/"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
