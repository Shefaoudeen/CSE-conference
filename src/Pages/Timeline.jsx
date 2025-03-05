import React from "react";

const Timeline = () => {
  return (
    <div
      className="relative w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/cs1.jpg)' }} // Simple background image
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content Box */}
      <div className="relative z-10 flex flex-col items-center gap-8 bg-white/20 p-10 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/40">
        <h1 className="text-4xl font-bold text-white">Important Dates</h1>
        <table className="text-start text-xl border-separate border-spacing-3 text-white">
          <tbody>
            {[
              ["Full Paper Submission Deadline", "1st August 2025"],
              ["Acceptance Intimation", "1st September 2025"],
              ["Registration Deadline", "1st October 2025"],
              ["Conference Date", "29-30 December 2025"],
            ].map((row, index) => (
              <tr key={index} className="bg-white/20 border border-white/30">
                <th className="font-normal text-start px-4 py-2">{row[0]}</th>
                <th className="font-normal text-start px-4 py-2">{row[1]}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timeline;
