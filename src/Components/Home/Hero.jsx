import React from "react";
import heroMain from "../../assets/Images/icaHome.png";
import heroSub from "../../assets/Images/cs10.jpg";
import { FaCalendarAlt } from "react-icons/fa";
import icdnLogo from "../../assets/Images/logos/ptulogo2.png";
import { Parallax } from "react-scroll-parallax";
const Hero = () => {
  return (
    <div className="mt-[7vh] md:mt-0 md:h-screen flex items-center py-4 relative">
      <div className="flex items-center justify-between flex-1">
        <div className="py-4 px-6 md:pl-24">
          <img src={icdnLogo} alt="logo" className="w-20 md:w-36" />
          <h1 className="text-xl md:text-3xl text-blue-800 font-semibold leading-relaxed">
            FIRST INTERNATIONAL CONFERENCE ON ARTIFICIAL INTELLIGENCE AND SECURE DATA ANALYTICS
          </h1>
          <h2 className="py-2 mt-2 px-4 bg-blue-800 text-white text-xl md:text-2xl rounded-full max-w-fit">
            ICAISDA-2025
          </h2>
          <div className="mt-4 flex items-center gap-3 md:text-xl">
            <FaCalendarAlt />
            <p>December 29-30, 2025</p>
          </div>

          {/* Move "DEPARTMENT OF COMPUTER SCIENCE" Down */}
          <h2 className="py-2 mt-5 px-5 bg-blue-800 text-white md:text-xl rounded-full max-w-fit">
            DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
          </h2>
        </div>
      </div>
      <Parallax speed={-15} opacity={[2, 0]}>
        <img src={heroMain} alt="main-img" className="h-screen relative hidden md:block" />
      </Parallax>
        <img
          src={heroSub}
          alt="main-img"
          className="h-full blur-[2px] -z-10 inset-0 absolute w-screen block md:hidden"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white opacity-50 -z-10 md:hidden" />
    </div>
  );
};

export default Hero;
