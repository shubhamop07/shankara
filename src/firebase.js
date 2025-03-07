// Import necessary Firebase modules  
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage"; // Import Firebase Storage

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbY20hFUkjoc-aGQN-sjMGLoqcTMjQPIk",
  authDomain: "wild-life-intruder.firebaseapp.com",
  databaseURL: "https://wild-life-intruder-default-rtdb.firebaseio.com",
  projectId: "wild-life-intruder",
  storageBucket: "wild-life-intruder.firebasestorage.app",
  messagingSenderId: "19706664116",
  appId: "1:19706664116:web:ce0d087ef2df051c0433e1",
  measurementId: "G-LJ4KLG13S2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app); // Initialize Realtime Database
const analytics = getAnalytics(app); // Initialize Analytics
const storage = getStorage(app); // Initialize Firebase Storage

export { app, db, analytics, storage };
