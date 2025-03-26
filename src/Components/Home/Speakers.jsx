import React from "react";
import profilePlaceHolder from "../../assets/Images/profilePlaceHolder.jpg";
import speaker1 from "../../assets/Images/profiles/speaker1.png";
import speaker2 from "../../assets/Images/profiles/speaker2.png";
import speaker3 from "../../assets/Images/profiles/speaker3.png";

const Speakers = () => {
  const speakers = [
    {
      image: speaker1,
      name: "Dr. Shlomi Dolev",
      designation: "Professor",
      university: "Ben-Gurion University of the Negev, Israel",
    },
    {
      image: speaker2,
      name: "Dr. Balaji Palanisamy",
      designation: "Director of Graduate Studies",
      university: "University of Pittsburgh, USA",
    },
    {
      image: speaker3,
      name: "Dr. Shamik Sural",
      designation: "Professor",
      university: "IIT Kharagpur",
    },
  ];

  return (
    <div className="flex mx-auto max-w-fit flex-col items-center justify-center my-20">
      <h2 className="font-semibold text-3xl text-center border-b-[3px] pb-0.5 border-blue-700 max-w-fit">
        Keynote Speakers
      </h2>
      <div className="mt-14 grid grid-cols-3 gap-40">
        {speakers.map((ele, ind) => (
          <div className="flex flex-col items-center" key={ind}>
            <div className="min-w-52 mt-40 min-h-52 max-w-52 max-h-52 relative rounded-full flex justify-center items-center group cursor-pointer">
              <div className="absolute bg-blue-800 w-full h-full rounded-full -z-10 -translate-x-2 -translate-y-2"></div>
              <img
                src={ele.image}
                alt="Team Member Picture"
                className="absolute w-52 h-52 rounded-full"
              />
            </div>
            <div className="text-center">
              <p className="font-bold text-blue-700 text-xl mt-3">{ele.name}</p>
              <p>{ele.designation}</p>
              <p>{ele.university}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Updated Important Dates Section */}
      <div className="relative z-10 flex flex-col items-center gap-6 border mt-20 border-gray-400 bg-gradient-to-r from-indigo-800 via-purple-700 to-blue-800 p-8 rounded-xl shadow-2xl max-w-3xl w-full mx-4 text-center">
        <h1 className="text-4xl font-bold text-yellow-400 drop-shadow-lg">
          Important Dates
        </h1>

        <table className="text-lg border-separate border-spacing-3 text-white w-full">
          <tbody>
            {[
              ["Full Paper Submission Deadline", "1st August 2025"],
              ["Acceptance Intimation", "1st September 2025"],
              ["Registration Deadline", "1st October 2025"],
              ["Conference Date", "29-30 December 2025"],
            ].map((row, index) => (
              <tr
                key={index}
                className="bg-black/40 border border-white/50 rounded-lg transition duration-300 hover:bg-yellow-400 hover:text-black"
              >
                <th className="font-medium px-4 py-3 text-left border border-gray-400 rounded-lg drop-shadow-lg">
                  {row[0]}
                </th>
                <th className="font-medium px-4 py-3 text-left border border-gray-400 rounded-lg drop-shadow-lg">
                  {row[1]}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Speakers;
