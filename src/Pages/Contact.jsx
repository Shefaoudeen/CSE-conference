import React, { useState, useEffect } from "react";
import ContactHome from "../Components/Contact/ContactHome";

// Path to images in public folder
const images = [
  "/images/cs1.jpg",
  "/images/cs2.jpg",
  "/images/cs3.jpg",
];

const Contact = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // Cycle through images
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1500 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${img})`, // Dynamically set background image
              backgroundPosition: "center",
              backgroundSize: "cover", // Ensure the image covers the area without stretching
            }}
          />
        ))}
      </div>

      

      {/* Content */}
      <div className="relative z-10">
        <ContactHome />
      </div>
    </div>
  );
};

export default Contact;
