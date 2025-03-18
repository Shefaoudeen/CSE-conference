import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  dept_advisory,
  international_advisory,
  national_advisory,
  state_advisory,
} from "../../Data/Committee";
import backgroundImage1 from "../../assets/Images/cs6.jpg";
import backgroundImage2 from "../../assets/Images/cs7.jpg";
import backgroundImage3 from "../../assets/Images/cs8.jpg";

const advisorySections = [
  { title: "Department Advisory", data: dept_advisory },
  { title: "State Advisory", data: state_advisory },
  { title: "National Advisory", data: national_advisory },
  { title: "International Advisory", data: international_advisory },
];

const Advisory = () => {
  const [currentSection, setCurrentSection] = useState(0);

  const handlePrevious = () => {
    setCurrentSection(
      (prev) => (prev - 1 + advisorySections.length) % advisorySections.length
    );
  };

  const handleNext = () => {
    setCurrentSection((prev) => (prev + 1) % advisorySections.length);
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-gray-800 via-blue-600 to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Advisory Committees
          </h1>
          <div className="w-32 h-1 bg-white/30 mx-auto rounded-full"></div>
        </div>

        {/* Navigation Dots 
        <div className="flex justify-center gap-2 mb-8">
          {advisorySections.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSection 
                  ? "bg-white scale-125" 
                  : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to ${advisorySections[index].title}`}
            />
          ))}
        </div>
          */}
        {/* Section Title Display */}
        <div className="flex flex-wrap justify-center m-8 gap-4">
          {advisorySections.map((section, index) => (
            <button
              key={index}
              onClick={() => setCurrentSection(index)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                index === currentSection
                  ? "bg-white text-blue-900 font-semibold"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            aria-label="Previous section"
          >
            <ChevronLeft className="w-8 h-8 text-white" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
            aria-label="Next section"
          >
            <ChevronRight className="w-8 h-8 text-white" />
          </button>

          {/* Committee Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
            <h2 className="text-3xl font-bold text-white text-center mb-8">
              {advisorySections[currentSection].title}
            </h2>

            {/* Scrollable Grid Container */}
            <div className="max-h-[60vh] overflow-y-auto pr-4 custom-scrollbar">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {advisorySections[currentSection].data.map((member, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300 transform hover:scale-[1.02]"
                  >
                    <p className="text-white text-base font-medium">{member}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advisory;
