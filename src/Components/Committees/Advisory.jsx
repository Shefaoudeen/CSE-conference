import React, { useState, useEffect } from "react";
import {
  dept_advisory,
  international_advisory,
  national_advisory,
  state_advisory,
} from "../../Data/Committee";
import backgroundImage1 from "../../assets/Images/cs6.jpg"; // Example Image
import backgroundImage2 from "../../assets/Images/cs7.jpg"; // Example Image
import backgroundImage3 from "../../assets/Images/cs8.jpg"; // Example Image

const Advisory = () => {
  const images = [backgroundImage1, backgroundImage2, backgroundImage3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // Cycle through images
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div
      className="relative w-screen min-h-screen flex flex-col justify-center items-center gap-10 py-10 bg-cover bg-center"
      style={{
        backgroundImage: `url(${images[currentImage]})`, // Dynamically set background image
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "background-image 1s ease-in-out", // Smooth transition between background images
      }}
    >
      {/* Dark Overlay to enhance text visibility */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 w-full max-w-4xl px-4">
        {/* Department Advisory */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-white">Department Advisory Committee</h1>
          <div className="text-xl flex flex-col gap-2">
            {dept_advisory.map((ele, ind) => (
              <div
                key={ind}
                className="border p-2 hover:scale-105 duration-200 bg-slate-200 hover:bg-slate-300 ease-linear"
              >
                {ele}
              </div>
            ))}
          </div>
        </div>

        {/* State Advisory */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-white">State Advisory Committee</h1>
          <div className="text-xl flex flex-col gap-2">
            {state_advisory.map((ele, ind) => (
              <div
                key={ind}
                className="border p-2 hover:scale-105 duration-200 bg-slate-200 hover:bg-slate-300 ease-linear"
              >
                {ele}
              </div>
            ))}
          </div>
        </div>

        {/* National Advisory */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-white">National Advisory Committee</h1>
          <div className="text-xl flex flex-col gap-2">
            {national_advisory.map((ele, ind) => (
              <div
                key={ind}
                className="border p-2 hover:scale-105 duration-200 bg-slate-200 hover:bg-slate-300 ease-linear"
              >
                {ele}
              </div>
            ))}
          </div>
        </div>

        {/* International Advisory */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold text-white">International Advisory Committee</h1>
          <div className="text-xl flex flex-col gap-2">
            {international_advisory.map((ele, ind) => (
              <div
                key={ind}
                className="border p-2 hover:scale-105 duration-200 bg-slate-200 hover:bg-slate-300 ease-linear"
              >
                {ele}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisory;
