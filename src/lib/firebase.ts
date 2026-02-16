// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF-fcrobMhcq6Ag_dVuVRNgvdH8vhS-6Y",
  authDomain: "nexgrey-8961c.firebaseapp.com",
  projectId: "nexgrey-8961c",
  storageBucket: "nexgrey-8961c.firebasestorage.app",
  messagingSenderId: "386699033298",
  appId: "1:386699033298:web:988ca7d9e019571f4ecb0b",
  measurementId: "G-HHX7ZN8SE5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
