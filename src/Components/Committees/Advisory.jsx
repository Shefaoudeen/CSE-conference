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

const advisorySections = [
  { title: "Department Advisory", data: dept_advisory },
  { title: "State Advisory", data: state_advisory },
  { title: "National Advisory", data: national_advisory },
  { title: "International Advisory", data: international_advisory },
];

const Advisory = () => {
  const images = [backgroundImage1, backgroundImage2, backgroundImage3];
  const [currentImage, setCurrentImage] = useState(0);
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Background image changes every 30 seconds

    return () => clearInterval(imageInterval);
  }, []);

  useEffect(() => {
    const sectionInterval = setInterval(() => {
      setCurrentSection((prev) => (prev + 1) % advisorySections.length);
    }, 3000); // Section changes every 30 seconds

    return () => clearInterval(sectionInterval);
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
      {/* Title */}
      <h1 className="relative z-10 text-4xl font-bold text-white mb-8 text-center">
        Advisory Committees
      </h1>

      {/* Advisory Section - Only One Visible at a Time */}
      <div className="relative z-10 w-full max-w-3xl px-6">
        <div className="text-center p-6 bg-white/20 backdrop-blur-md rounded-xl border border-white/40 transition-opacity duration-1000">
          <h2 className="text-2xl font-bold text-white mb-3">
            {advisorySections[currentSection].title}
          </h2>
          <div className="text-lg flex flex-col gap-2">
            {[].concat(...advisorySections[currentSection].data).map((ele, ind) => (
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
