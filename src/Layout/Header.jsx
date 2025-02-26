import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center items-center w-full px-20 py-5 fixed z-[50]">
      <div className="flex w-full justify-around py-5 bg-slate-400 rounded-xl shadow-md shadow-black">
        <Link to="/">
          <div>HOME</div>
        </Link>
        <Link to="/callforpaper">
          <div>CALL FOR PAPERS</div>
        </Link>
        <Link to="/papersubmission">
          <div>PAPER SUBMISSION</div>
        </Link>
        <Link to="/registration">
          <div>REGISTRATION</div>
        </Link>
        <Link to="/">
          <div>VENUE</div>
        </Link>
        <Link to="/speakers">
          <div>SPEAKERS</div>
        </Link>
        <Link to="/committees">
          <div>COMMITTEES</div>
        </Link>
        <Link to="/timeline">
          <div>TIMELINES</div>
        </Link>
        <Link to="/contact">
          <div>CONTACT</div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
