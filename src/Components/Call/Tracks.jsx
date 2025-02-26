import React, { useState } from "react";
import { Tracks_details } from "../../Data/Tracks";

const Tracks = () => {
  const [trackno, SetTrackNo] = useState(0);
  const tracks = [
    "ARTIFICAL INTELLIGENCE",
    "DATA SCIENCE & BIG DATA",
    "AI & DATA SCIENCE APPLICATIONS",
    "AI & DATA SCIENCE IN COMMUNICATIONS",
    "AI & DATA SCIENCE IN COMPUTING",
    "AI & DATA SCIENCE IN SECURITY",
  ];
  return (
    <div className="w-screen mt-20 min-h-screen flex justify-center items-center pb-20">
      <div className="w-[75%] border flex flex-col gap-5 items-center">
        <div className="flex w-full justify-around text-xl">
          <button
            onClick={() => {
              SetTrackNo(0);
            }}
          >
            Track-1
          </button>
          <button
            onClick={() => {
              SetTrackNo(1);
            }}
          >
            Track-2
          </button>
          <button
            onClick={() => {
              SetTrackNo(2);
            }}
          >
            Track-3
          </button>
          <button
            onClick={() => {
              SetTrackNo(3);
            }}
          >
            Track-4
          </button>
          <button
            onClick={() => {
              SetTrackNo(4);
            }}
          >
            Track-5
          </button>
          <button
            onClick={() => {
              SetTrackNo(5);
            }}
          >
            Track-6
          </button>
        </div>
        <div className="text-center text-2xl">
          <h1>
            <strong>Title: </strong>
            {tracks[trackno]}
          </h1>
        </div>
        <div className="w-[80%]">
          <ul className="text-xl flex flex-col gap-2">
            {Tracks_details[trackno].map((ele, index) => {
              return (
                <li className="border p-2 hover:scale-105 duration-200 bg-slate-200 hover:bg-slate-300 ease-linear">
                  {ele}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
