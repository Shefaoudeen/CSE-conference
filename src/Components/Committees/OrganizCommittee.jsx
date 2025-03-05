import React, { useState, useEffect } from "react";
import {
  Joint_Secretaries,
  Organizing_Secretaries,
} from "../../Data/Committee";
import backgroundImage1 from "../../assets/Images/cs10.jpg"; // Ensure the image path is correct
import backgroundImage2 from "../../assets/Images/cs7.jpg"; // Example second background image
import backgroundImage3 from "../../assets/Images/cs8.jpg"; // Example third background image

const OrganizCommittee = () => {
  const images = [backgroundImage1, backgroundImage2, backgroundImage3]; // Array of images
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // Cycle through images
    }, 5000); // Change background image every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div
      className="relative w-screen min-h-screen flex justify-center items-center pt-[10vh] bg-cover bg-center"
      style={{
        backgroundImage: `url(${images[currentImage]})`, // Dynamically setting the background image
        transition: "background-image 1s ease-in-out", // Smooth transition for image change
      }}
    >
      {/* Dark Overlay to make content readable */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col gap-4 items-center">
        <h1 className="text-3xl font-bold text-white">ORGANIZING COMMITTEE</h1>
        <div className="p-5 border text-center bg-slate-200 rounded-xl">
          <h1 className="text-2xl font-semibold">Chief Patron</h1>
          <h1 className="text-4xl font-bold">Prof. Dr. S. Mohan</h1>
          <h1 className="text-xl">Vice Chancellor, PTU</h1>
        </div>
        <div className="p-5 border text-center bg-slate-200 rounded-xl">
          <h1 className="text-2xl font-semibold">Patron</h1>
          <h1 className="text-4xl font-bold">Prof. E. ILAVARASAN</h1>
          <h1 className="text-xl">Professor and Head</h1>
          <h1 className="text-xl">Computer Science and Engineering, PTU</h1>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold text-white">Organizing Secretaries</h1>
            <div>
              {Organizing_Secretaries.map((ele, ind) => {
                return (
                  <h1 key={ind} className="text-xl text-white">
                    {ele}
                  </h1>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold text-white">JOINT Secretaries</h1>
            <div>
              {Joint_Secretaries.map((ele, ind) => {
                return (
                  <h1 key={ind} className="text-xl text-white">
                    {ele}
                  </h1>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizCommittee;
