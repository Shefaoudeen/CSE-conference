import React from "react";
import heroMain from "../../assets/Images/heroMain.jpg"
import { FaCalendarAlt } from "react-icons/fa";
import icdnLogo from "../../assets/Images/logos/mainLogo.png"

const Hero = () => {
  return (
    <div className="h-screen flex items-center ">
      <div className="flex items-center justify-between flex-1">
        <div className="py-4 pl-24">
          <img src={icdnLogo} alt="logo" className="w-36"/>
          <h1 className="text-3xl text-blue-800 font-semibold leading-relaxed">
            INTERNATIONAL CONFERENCE ON ARTIFICIAL INTELLIGENCE AND SECURE DATA ANALYTICS
          </h1>
          <h2 className=" py-2 mt-2 px-4 bg-blue-800 text-white text-2xl rounded-full max-w-fit">ICAISDA-2025</h2>
          <div className="mt-4 flex items-center gap-3 text-xl">
            <FaCalendarAlt />
            <p>December 29- 30, 2025</p>
          </div>
        </div>
        <img src={heroMain} alt="main-img" className="h-screen relative left-10 opacity-80" />
      </div>
    </div>
  )
};

export default Hero;
