import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  useSearchParams } from "react-router"
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  useEffect(() => {
    const auth = getAuth();
    const email = searchParams.get('email');
    console.log(email)

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const q = query(collection(db, "users"), where("email", "==", email));

        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const doc = querySnapshot.docs[0];
          console.log(doc.data());
          setUserData(doc.data());
        } else {
          console.log("No user document found!");
        }
      } else {
        navigate("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600">
        <p className="text-xl font-semibold text-white animate-bounce">
          Loading your profile...
        </p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-gradient-to-br from-blue-200 via-blue-400 to-blue-600">
      <div className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-xl text-center transition-all duration-500 border-4 border-blue-200 hover:scale-105 hover:border-blue-400">
        <h1 className="text-4xl font-bold text-blue-600 mb-6 animate-pulse drop-shadow-lg">
          ✨ Welcome, {userData?.firstName || "Your Profile"}!
        </h1>

        <div className="text-left space-y-4 text-gray-700 text-lg mb-6 font-medium">
          <p>
            <span className="text-blue-500 font-semibold">First Name:</span>{" "}
            {userData?.firstName || "N/A"}
          </p>
          <p>
            <span className="text-blue-500 font-semibold">Last Name:</span>{" "}
            {userData?.lastName || "N/A"}
          </p>
          <p>
            <span className="text-blue-500 font-semibold">Email:</span>{" "}
            {userData?.email || "N/A"}
          </p>
          <p>
            <span className="text-blue-500 font-semibold">Phone:</span>{" "}
            {userData?.phone || "N/A"}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <button
            onClick={() => navigate("/workshop")}
            className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300"
          >
            🎓 Workshop Registration
          </button>

          <button
            onClick={() => navigate("/PaperRegistration")}
            className="bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800 text-white font-bold py-2 px-6 rounded-full shadow-lg transition duration-300"
          >
            📄 Paper Registration
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
