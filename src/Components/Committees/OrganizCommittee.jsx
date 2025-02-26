import React from "react";
import {
  Joint_Secretaries,
  Organizing_Secretaries,
} from "../../Data/Committee";

const OrganizCommittee = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center pt-[10vh]">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-3xl font-bold">ORGANIZING COMMITTEE</h1>
        <div className="p-5 border text-center bg-slate-200 rounded-xl">
          <h1 className="text-2xl font-semibold">Chief Patron</h1>
          <h1 className="text-4xl font-bold">Prof. Dr. S. Mohan</h1>
          <h1 className="text-xl">Vice Chancellor, PTU</h1>
        </div>
        <div className="p-5 border text-center bg-slate-200 rounded-xl">
          <h1 className="text-2xl font-semibold">Patron</h1>
          <h1 className="text-4xl font-bold">Prof. E. ILAVARASAN</h1>
          <h1 className="text-xl">Professor and Head </h1>
          <h1 className="text-xl">Computer Science and Engineering, PTU</h1>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold">Organizing Secretaries</h1>
            <div>
              {Organizing_Secretaries.map((ele, ind) => {
                return (
                  <h1 key={ind} className="text-xl">
                    {ele}
                  </h1>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-semibold">JOINT Secretaries</h1>
            <div>
              {Joint_Secretaries.map((ele, ind) => {
                return (
                  <h1 key={ind} className="text-xl">
                    {ele}
                  </h1>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizCommittee;
