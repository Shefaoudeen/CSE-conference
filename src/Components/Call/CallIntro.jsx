import React from "react";

const CallIntro = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-10 justify-center items-center pt-[25vh]">
      <div className="w-[75%] text-xl text-justify flex flex-col gap-5">
        <h1 className="text-3xl">CALL FOR PAPERS</h1>
        <p>
          The ICAISCDS-2025 invite researchers, academicians, scientists and
          industry experts to submit their original research papers, case
          studies, survey works and innovative applications in the fields of{" "}
          <strong>
            Artificial Intelligence (AI), Secured Computing(SC) and Data
            Science(DS)
          </strong>{" "}
          for presentation at the Conference. Submissions are encouraged on a
          wide range of topics, including but not limited to the following:
        </p>
      </div>
      <div className="w-[75%] flex flex-col gap-20 justify-center items-center  rounded-full relative">
        <div className="absolute min-h-[110%] border-4 min-w-[45%] rounded-full -z-20"></div>
        <div className="w-[50%] flex justify-between">
          <div className="border-2  p-5 text-center bg-slate-200 rounded-xl">
            <h1>TRACK - 1</h1>ARTIFICIAL INTELLIGENCE
          </div>
          <div className="border-2  p-5 text-center bg-slate-200 rounded-xl">
            <h1>TRACK - 2</h1>DATA SCIENCE & BIG DATA
          </div>
        </div>
        <div className="w-[80%] flex justify-between">
          <div className="border-2  p-5 text-center bg-slate-200 rounded-xl">
            <h1>TRACK - 3</h1>AI & DATA SCIENCE APPLICATIONS
          </div>
          <div className="border-2  p-5 text-center bg-slate-200 rounded-xl">
            <h1>TRACK - 4</h1>AI & DATA SCIENCE IN COMMUNICATIONS
          </div>
        </div>
        <div className="w-[60%] flex justify-between">
          <div className="border-2  p-5 text-center bg-slate-200 rounded-xl">
            <h1>TRACK - 5</h1>AI & DATA SCIENCE IN COMPUTING
          </div>
          <div className="border-2  p-5 text-center bg-slate-200 rounded-xl">
            <h1>TRACK - 6</h1>AI & DATA SCIENCE IN SECURITY
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallIntro;
