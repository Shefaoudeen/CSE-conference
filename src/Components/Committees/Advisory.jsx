import React from "react";
import {
  dept_advisory,
  international_advisory,
  national_advisory,
  state_advisory,
} from "../../Data/Committee";

const Advisory = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center gap-10 py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">Department Advisory Committee</h1>
        <div className="text-xl flex flex-col gap-2">
          {dept_advisory.map((ele, ind) => {
            return (
              <div
                key={ind}
                className="border p-2 hover:scale-105 duration-200 bg-slate-200 hover:bg-slate-300 ease-linear"
              >
                {ele}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">State Advisory Committee</h1>
        <div className="text-xl flex flex-col gap-2">
          {state_advisory.map((ele, ind) => {
            return (
              <div
                key={ind}
                className="border p-2 hover:scale-105 duration-200 bg-slate-200 hover:bg-slate-300 ease-linear"
              >
                {ele}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">National Advisory Committee</h1>
        <div className="text-xl flex flex-col gap-2">
          {national_advisory.map((ele, ind) => {
            return (
              <div
                key={ind}
                className="border p-2 hover:scale-105 duration-200 bg-slate-200 hover:bg-slate-300 ease-linear"
              >
                {ele}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-3xl font-bold">International Advisory Committee</h1>
        <div className="text-xl flex flex-col gap-2">
          {international_advisory.map((ele, ind) => {
            return (
              <div
                key={ind}
                className="border p-2 hover:scale-105 duration-200 bg-slate-200 hover:bg-slate-300 ease-linear"
              >
                {ele}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Advisory;
