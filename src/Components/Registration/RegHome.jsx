import React from "react";
import Hero from "../../Components/Home/Hero"; // Check if the path is correct
import Highlights from "../../Components/Home/Highlights"; // Check if the path is correct
import Intro from "../../Components/Home/Intro"; // Check if the path is correct
import PTU from "../../Components/Home/PTU"; // Check if the path is correct
import CSE from "../../Components/Home/CSE"; // Check if the path is correct
import cs1 from "../../assets/Images/cs6.jpg"; // Ensure the image path is correct

const RegHome = () => {
  return (
    <div className="relative w-screen min-h-screen bg-gray-100">
      {/* Background Slideshow */}
      <div className="absolute inset-0 w-full h-full bg-cover bg-center opacity-50" 
           style={{
             backgroundImage: `url(${cs1})`, // Wrap the image path in 'url()' for CSS background-image
           }}></div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Intro />
        <PTU />
        <CSE />
        <Highlights />
      </div>
    </div>
  );
};

export default RegHome;
