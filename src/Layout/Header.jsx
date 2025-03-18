import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { MainLogo } from "../assets";

const Header = () => {
  const [scrollY, setScrollY] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);
  const { id } = useParams();
  const location = useLocation();
  const [currentId, setCurrentId] = useState("");

  useEffect(() => {
    const handleResize = () => {
      setViewportHeight(window.innerHeight);
    };
    console.log(location);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setCurrentId(id || location.pathname.split("/")[1] || "Home");
  }, [location, id]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY || document.documentElement.scrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    console.log(scrollY);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-center items-center h-[15vh] w-full  z-[500] ${
        scrollY < viewportHeight
          ? "bg-white absolute"
          : "bg-white shadow-lg shadow-black/20 fixed"
      } transition-all  duration-500 ease-linear`}
    >
      <div className="flex w-[85%] justify-around items-center py-3 px-8  text-xs">
        <div className="flex items-center justify-center w-[30%]">
          <img src={MainLogo} width={70} className="mr-5" />
          <h1 className="text-xl font-medium">ICAISDA 2025</h1>
        </div>

        <Link
          className={`py-2 px-4 rounded-lg ${
            currentId === "Home" ? "text-black font-semibold" : "text-gray-500"
          }`}
          to="/"
        >
          <div>HOME</div>
        </Link>
        <Link
          className={`py-2 px-4 rounded-lg ${
            currentId === "callforpaper"
              ? "text-black font-semibold"
              : "text-gray-500"
          }`}
          to="/callforpaper"
        >
          <div>CALL FOR PAPERS</div>
        </Link>
        <Link
          className={`py-2 px-4 rounded-lg ${
            currentId === "papersubmission"
              ? "text-black font-semibold"
              : "text-gray-500"
          }`}
          to="/papersubmission"
        >
          <div>PAPER SUBMISSION</div>
        </Link>
        <Link
          className={`py-2 px-4 rounded-lg ${
            currentId === "registration"
              ? "text-black font-semibold"
              : "text-gray-500"
          }`}
          to="/registration"
        >
          <div>REGISTRATION</div>
        </Link>
        <Link
          className={`py-2 px-4 rounded-lg ${
            currentId === "speakers"
              ? "text-black font-semibold"
              : "text-gray-500"
          }`}
          to="/speakers"
        >
          <div>SPEAKERS</div>
        </Link>
        <Link
          className={`py-2 px-4 rounded-lg ${
            currentId === "committees"
              ? "text-black font-semibold"
              : "text-gray-500"
          }`}
          to="/committees"
        >
          <div>COMMITTEES</div>
        </Link>
        <Link
          className={`py-2 px-4 rounded-lg ${
            currentId === "contact"
              ? "text-black font-semibold"
              : "text-gray-500"
          }`}
          to="/contact"
        >
          <div>CONTACT</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
