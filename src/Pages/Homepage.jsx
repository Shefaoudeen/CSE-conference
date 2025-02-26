import React from "react";
import Hero from "../Components/Home/Hero";
import Highlights from "../Components/Home/Highlights";
import Intro from "../Components/Home/Intro";
import PTU from "../Components/Home/PTU";
import CSE from "../Components/Home/CSE";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Intro />
      <PTU />
      <CSE />
    </div>
  );
};

export default Homepage;
