import React, { useEffect, useState } from "react";
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
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex justify-center items-center h-[15vh] w-full z-[500] ${
        scrollY < viewportHeight
          ? "bg-white absolute"
          : "bg-white shadow-lg shadow-black/20 fixed"
      } transition-all duration-500 ease-linear`}
    >
      <div className="flex w-[85%] justify-around items-center py-3 px-8 text-xs">
        <div className="flex items-center justify-center w-[30%]">
          <img src={MainLogo} width={70} className="mr-5" alt="Logo" />
          <h1 className="text-xl font-medium">ICAISDA 2025</h1>
        </div>

        {[
          { name: "HOME", path: "/" },
          { name: "CALL FOR PAPERS", path: "/callforpaper" },
          { name: "PAPER SUBMISSION", path: "/papersubmission" },
          { name: "WORKSHOP", path: "/workshop" },
          { name: "REGISTRATION", path: "/registration" },
          { name: "SPEAKERS", path: "/speakers" },
          { name: "COMMITTEES", path: "/committees" },
          { name: "CONTACTS", path: "/contact" },
          { name: "VENUE", path: "/venue" },
        ].map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className={`py-2 px-4 rounded-lg font-bold ${
              currentId === path.substring(1) ? "text-black" : "text-gray-500"
            }`}
          >
            {name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
