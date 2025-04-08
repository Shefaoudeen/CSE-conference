import React from "react";
import heroMain from "../../assets/Images/icaHome.png";
import { FaCalendarAlt } from "react-icons/fa";
import icdnLogo from "../../assets/Images/logos/ptulogo2.png";
import { Parallax } from "react-scroll-parallax";
const Hero = () => {
  return (
    <div className="h-screen flex items-center">
  <div className="flex items-center justify-between flex-1">
    <div className="py-4 pl-24">
      <img src={icdnLogo} alt="logo" className="w-36"/>
      <h1 className="text-3xl text-blue-800 font-semibold leading-relaxed">
        FIRST INTERNATIONAL CONFERENCE ON ARTIFICIAL INTELLIGENCE AND SECURE DATA ANALYTICS
      </h1>
      <h2 className="py-2 mt-2 px-4 bg-blue-800 text-white text-2xl rounded-full max-w-fit">
        ICAISDA-2025
      </h2>
      <div className="mt-4 flex items-center gap-3 text-xl">
        <FaCalendarAlt />
        <p>December 29-30, 2025</p>
      </div>

      {/* Move "DEPARTMENT OF COMPUTER SCIENCE" Down */}
      <h2 className="py-2 mt-5 px-5 bg-blue-800 text-white text-xl rounded-full max-w-fit">
        DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
      </h2>
    </div>
  </div>
      <Parallax speed={-15} opacity={[2, 0]}>
        <img src={heroMain} alt="main-img" className="h-screen relative" />
      </Parallax>
    </div>
  );
};

export default Hero;
