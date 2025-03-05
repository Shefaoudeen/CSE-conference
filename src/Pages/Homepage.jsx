import React, { useState, useEffect } from "react";
import Hero from "../Components/Home/Hero"; // Adjust the path if necessary
import Intro from "../Components/Home/Intro";
import PTU from "../Components/Home/PTU";
import CSE from "../Components/Home/CSE";
import Speakers from "../Components/Home/Speakers";

const Homepage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div>
      <Hero />
      <Intro />
      <PTU />
      <CSE />
      <Speakers/>
    </div>
  );
};

export default Homepage;
