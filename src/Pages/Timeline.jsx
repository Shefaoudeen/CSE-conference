import React from "react";

const Timeline = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col  items-center gap-8">
        <h1 className="text-3xl font-bold">Important Date</h1>
        <table className="text-start text-xl border-separate border-spacing-3">
          <tr className="text-start bg-slate-100 ">
            <th className="font-normal text-start px-4 py-2">
              Full Paper Submission Deadline
            </th>
            <th className="font-normal text-start px-4 py-2">
              1st August 2025
            </th>
          </tr>
          <tr className="text-start bg-slate-100">
            <th className="font-normal text-start px-4 py-2">
              Acceptance Intimation
            </th>
            <th className="font-normal text-start px-4 py-2">
              1st September 2025
            </th>
          </tr>
          <tr className="text-start bg-slate-100">
            <th className="font-normal text-start px-4 py-2">
              Registration Deadline
            </th>
            <th className="font-normal text-start px-4 py-2">
              1st October 2025
            </th>
          </tr>
          <tr className="text-start bg-slate-100">
            <th className="font-normal text-start px-4 py-2">
              Conference Date
            </th>
            <th className="font-normal text-start px-4 py-2">
              29-30 December 2025
            </th>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Timeline;
