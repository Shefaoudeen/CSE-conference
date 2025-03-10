import React from "react";
import cseImg from "../../assets/Images/cs3.jpg"

const CSE = () => {
  return (
    <div className="w-screen flex justify-center items-center mt-10 mb-5 pb-5 border-b border-gray-300">
      <div className="w-[75%] text-justify text-xl flex flex-col gap-6 leading-[28px]">
        <img src={cseImg} className="rounded-3xl h-96 object-cover" alt="" />
        <h1 className="text-3xl font-bold">
          COMPUTER SCIENCE AND ENGINEERING DEPARTMENT
        </h1>
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The Department of Computer
          Science and Engineering of Puducherry Technological University has
          twenty-two highly experienced faculty with all doctoral degree holders
          from Top Indian University’s. Currently more than fifty scholars are
          perusing research in various fields of computer science and
          engineering. Every year good number of papers are published in the
          reputed indexed journal by the faculty and scholar. The Department
          offers one Undergraduate course, three specialized Post Graduate
          Programmes in Data Science, Information Security, Master of Computer
          Applications and is a recognized research center for Quality
          Improvement Programme by MHRD. The department has well equipped
          computer laboratories with more than 400 computers and a Research
          Laboratory to carry out research and project implementations. The
          Department faculty are actively involved in implementing various
          Consultancy and Collaborative projects funded by Central and State
          Government.
        </p>
      </div>
    </div>
  );
};

export default CSE;
