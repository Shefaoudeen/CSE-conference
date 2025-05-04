// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"; // ✅ Add this line

const firebaseConfig = {
  apiKey: "AIzaSyAXcbQlqNzv6uHm2L-zRiYyrF8VBb3ilfY",
  authDomain: "icaisda25-43acf.firebaseapp.com",
  databaseURL: "https://icaisda25-43acf-default-rtdb.firebaseio.com",
  projectId: "icaisda25-43acf",
  storageBucket: "icaisda25-43acf.appspot.com",
  messagingSenderId: "796803977834",
  appId: "1:796803977834:web:25a6b6961f5d8317e1b013"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // ✅ Add this line
