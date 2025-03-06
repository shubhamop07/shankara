// Import necessary Firebase modules
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Import Realtime Database functions

// Your Firebase configuration
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

// Get the Realtime Database instance
const db = getDatabase(app); // Pass the app instance to get the database

// Export the initialized app and db for use in other parts of your app
export { app, db };
