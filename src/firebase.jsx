import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyBrX6trhSycXc4eQ5XGBUmn-TK2lLE-l5s",
  authDomain: "icaisda25-6d507.firebaseapp.com",
  projectId: "icaisda25-6d507",
  storageBucket: "icaisda25-6d507.firebasestorage.app",
  messagingSenderId: "142927082210",
  appId: "1:142927082210:web:0f94293f75896e2c3c24bb",
  measurementId: "G-7YDV8HYJJV"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); // Ensure storage is exported
