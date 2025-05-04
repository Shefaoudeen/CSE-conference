import React from "react";
import profilePlaceHolder from "../../assets/Images/profilePlaceHolder.jpg";
import speaker1 from "../../assets/Images/profiles/speaker1.png";
import Balaji from "../../assets/Images/Balaji.png";
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
      image: Balaji,
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
    <div className="flex mx-auto max-w-fit flex-col items-center justify-center my-20 text-white">
      <h2 className="font-semibold text-4xl text-center border-b-[3px] pb-1 border-blue-500 max-w-fit text-blue-400">
        Keynote Speakers
      </h2>
      <div className="mt-6 md:mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20">
        {speakers.map((ele, ind) => (
          <div className="flex flex-col items-center" key={ind}>
            <div className="min-w-40 min-h-40 md:min-w-52 md:min-h-52 max-w-52 max-h-52 relative rounded-full flex justify-center items-center group cursor-pointer">
              <div className="absolute bg-blue-500 w-full h-full rounded-full -z-10 -translate-x-2 -translate-y-2 shadow-lg"></div>
              <img
                src={ele.image}
                alt="Team Member Picture"
                className="absolute w-40 h-40 md:w-52 md:h-52 rounded-full border-4 border-blue-400"
              />
            </div>
            <div className="text-center mt-4">
              <p className="font-bold text-blue-400 text-xl">{ele.name}</p>
              <p className="text-blue-500">{ele.designation}</p>
              <p className="text-blue-500">{ele.university}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Important Dates Section */}
      <div className="relative z-10 flex flex-col items-center gap-6 border mt-20 border-blue-400 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 p-4 md:p-8 rounded-xl shadow-2xl max-w-3xl w-full mx-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-yellow-300 drop-shadow-lg">
          Important Dates
        </h1>

        <table className="md:text-lg border-separate border-spacing-3 text-white w-full">
          <tbody>
            {[
              ["Full Paper Submission Deadline", "1st July2025"],
              ["Acceptance Intimation", "1st August 2025"],
              ["Registration Deadline", "1st September 2025"],
              ["Conference Date", "29-30 December 2025"],
            ].map((row, index) => (
              <tr
                key={index}
                className="bg-blue-600/80 border border-blue-300 rounded-lg transition duration-500 hover:bg-blue-00 hover:text-yellow-300"
              >
                <th className="font-medium px-4 py-3 text-left border border-blue-300 rounded-lg drop-shadow-lg">
                  {row[0]}
                </th>
                <th className="font-medium px-4 py-3 text-left border border-blue-300 rounded-lg drop-shadow-lg">
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
