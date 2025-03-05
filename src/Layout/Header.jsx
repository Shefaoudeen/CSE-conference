import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-center items-center w-full fixed z-[50]">
      <div className="flex w-full justify-around py-3 px-8 bg-slate-200 shadow-lg shadow-black/20">
        <NavLink className={"py-2 px-4 rounded-lg"} to="/">
          <div>HOME</div>
        </NavLink>
        <NavLink className={"py-2 px-4 rounded-lg"} to="/callforpaper">
          <div>CALL FOR PAPERS</div>
        </NavLink>
        <NavLink className={"py-2 px-4 rounded-lg"} to="/papersubmission">
          <div>PAPER SUBMISSION</div>
        </NavLink>
        <NavLink className={"py-2 px-4 rounded-lg"} to="/registration">
          <div>REGISTRATION</div>
        </NavLink>
        <NavLink className={"py-2 px-4 rounded-lg"} to="/venue">
          <div>VENUE</div>
        </NavLink>
        <NavLink className={"py-2 px-4 rounded-lg"} to="/speakers">
          <div>SPEAKERS</div>
        </NavLink>
        <NavLink className={"py-2 px-4 rounded-lg"} to="/committees">
          <div>COMMITTEES</div>
        </NavLink>
        <NavLink className={"py-2 px-4 rounded-lg"} to="/timeline">
          <div>TIMELINES</div>
        </NavLink>
        <NavLink className={"py-2 px-4 rounded-lg"} to="/contact">
          <div>CONTACT</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
