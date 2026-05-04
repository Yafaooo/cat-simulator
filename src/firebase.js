import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDh6eQXS18ZDs7IkH9IsLILZ4_ZGUoVf0g",
  authDomain: "phtc-cat.firebaseapp.com",
  databaseURL: "https://phtc-cat-default-rtdb.firebaseio.com",
  projectId: "phtc-cat",
  storageBucket: "phtc-cat.firebasestorage.app",
  messagingSenderId: "411079653739",
  appId: "1:411079653739:web:30ca223d5f747057fab42e",
  measurementId: "G-LC18K5Y7D2"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
