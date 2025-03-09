import React, { useState, useEffect } from "react";
import {
  dept_advisory,
  international_advisory,
  national_advisory,
  state_advisory,
} from "../../Data/Committee";
import backgroundImage1 from "../../assets/Images/cs6.jpg";
import backgroundImage2 from "../../assets/Images/cs7.jpg";
import backgroundImage3 from "../../assets/Images/cs8.jpg";

const Advisory = () => {
  const images = [backgroundImage1, backgroundImage2, backgroundImage3];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative w-screen min-h-screen flex flex-col justify-center items-center py-10 bg-cover bg-center"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        transition: "background-image 1s ease-in-out",
      }}
    >
      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Title */}
      <h1 className="relative z-10 text-4xl font-bold text-white mb-8 text-center">
        Advisory Committees
      </h1>

      {/* Vertical Layout for all Advisory sections */}
      <div className="relative z-10 w-full max-w-7xl px-4 grid grid-cols-1 gap-6">
        {/* Department Advisory */}
        <div className="text-center p-5 bg-white/20 backdrop-blur-md rounded-xl border border-white/40 max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">Department Advisory</h2>
          <div className="text-lg flex flex-col gap-2">
            {dept_advisory.map((ele, ind) => (
              <div
                key={ind}
                className="border border-white/50 text-white p-2 hover:scale-105 duration-200 bg-white/20 hover:bg-white/30 ease-linear rounded-lg"
              >
                {ele}
              </div>
            ))}
          </div>
        </div>

        {/* State Advisory */}
        <div className="text-center p-5 bg-white/20 backdrop-blur-md rounded-xl border border-white/40 max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">State Advisory</h2>
          <div className="text-lg flex flex-col gap-2">
            {state_advisory.map((ele, ind) => (
              <div
                key={ind}
                className="border border-white/50 text-white p-2 hover:scale-105 duration-200 bg-white/20 hover:bg-white/30 ease-linear rounded-lg"
              >
                {ele}
              </div>
            ))}
          </div>
        </div>

        {/* National Advisory */}
        <div className="text-center p-5 bg-white/20 backdrop-blur-md rounded-xl border border-white/40 max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">National Advisory</h2>
          <div className="text-lg flex flex-col gap-2">
            {national_advisory.map((ele, ind) => (
              <div
                key={ind}
                className="border border-white/50 text-white p-2 hover:scale-105 duration-200 bg-white/20 hover:bg-white/30 ease-linear rounded-lg"
              >
                {ele}
              </div>
            ))}
          </div>
        </div>

        {/* International Advisory */}
        <div className="text-center p-5 bg-white/20 backdrop-blur-md rounded-xl border border-white/40 max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-white mb-3">International Advisory</h2>
          <div className="text-lg flex flex-col gap-2">
            {international_advisory.map((ele, ind) => (
              <div
                key={ind}
                className="border border-white/50 text-white p-2 hover:scale-105 duration-200 bg-white/20 hover:bg-white/30 ease-linear rounded-lg"
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
