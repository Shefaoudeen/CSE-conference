import React, { useState, useEffect } from "react";
import ContactHome from "../Components/Contact/ContactHome";
import contact from '../assets/Images/contact.png'

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
    <div className="relative w-full min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-70"
          style={{ 
            backgroundImage: `url(${contact})`
          }}
        />
      </div>
      {/* Dark Overlay with Blur */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 w-full flex items-center justify-center">
        <ContactHome />
      </div>
    </div>
  );
};

export default Contact;
