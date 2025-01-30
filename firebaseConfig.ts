import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAam4jeg1DH0Y8Myzi1vulnMBZkltt3IlU",
  authDomain: "rn-expense-tracker-4c6c2.firebaseapp.com",
  databaseURL: "https://rn-expense-tracker-4c6c2-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "rn-expense-tracker-4c6c2",
  storageBucket: "rn-expense-tracker-4c6c2.firebasestorage.app",
  messagingSenderId: "425692287873",
  appId: "1:425692287873:web:1e0cf0129fd0ca4d62ce80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth }