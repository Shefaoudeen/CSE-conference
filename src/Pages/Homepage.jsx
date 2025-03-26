import React, { useState, useEffect } from "react";
import Hero from "../Components/Home/Hero"; // Adjust the path if necessary
import Intro from "../Components/Home/Intro";
import PTU from "../Components/Home/PTU";
import CSE from "../Components/Home/CSE";
import Speakers from "../Components/Home/Speakers";
import Accommodation from "../Components/Home/Accommodation";


const Homepage = () => {
  

  return (
    <div>
      <Hero />
      <Intro />
      <PTU />
      <CSE />
      <Accommodation />
      <Speakers /> 
    </div>
  );
};

export default Homepage;
