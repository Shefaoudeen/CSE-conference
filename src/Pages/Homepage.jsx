import React, { useState, useEffect } from "react";
import Hero from "../Components/Home/Hero"; // Adjust the path if necessary
import Intro from "../Components/Home/Intro";
import PTU from "../Components/Home/PTU";
import CSE from "../Components/Home/CSE";

const images = [
  "/images/cs1.jpg", // Place images in the public folder
  "/images/cs2.jpg",
  "/images/cs3.jpg",
];

const Homepage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${img})` }}
          ></div>
        ))}
      </div>

      {/* Dark Overlay for Readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <Intro />
        <PTU />
        <CSE />
      </div>
    </div>
  );
};

export default Homepage;
