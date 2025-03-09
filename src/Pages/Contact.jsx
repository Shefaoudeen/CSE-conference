import React, { useState, useEffect } from "react";
import ContactHome from "../Components/Contact/ContactHome";

// Array of images for the slideshow (If you're using the public folder)
const images = [
  "/images/cs1.jpg",  // Image 1
  "/images/cs2.jpg",  // Image 2
  "/images/cs3.jpg",  // Image 3
  "/images/cs4.jpg",  // Image 4
  "/images/cs5.jpg",  // Image 5
];

const Contact = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length); // Cycle images every 4 seconds
    }, 4000); // 4 seconds per image

    return () => clearInterval(interval); // Cleanup when component unmounts
  }, []);

  return (
    <div
      className="relative min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${images[currentImage]})`, // Dynamic background image
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-center w-full h-full p-6 text-white">
        <ContactHome />
      </div>
    </div>
  );
};

export default Contact;
