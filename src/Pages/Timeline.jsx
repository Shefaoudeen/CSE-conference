import React, { useState, useEffect } from "react";

const images = [
  "/Images/cs1.jpg",
  "/Images/cs2.jpg",
  "/Images/cs3.jpg",
  "/Images/cs4.jpg",
  "/Images/cs5.jpg"
]; // Images must be in 'public/Images/'

const Timeline = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      {/* Background Slideshow */}
      <div className="absolute inset-0 w-full h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* Content Box */}
      <div className="relative z-10 flex flex-col items-center gap-6 bg-white/20 p-8 rounded-lg shadow-lg backdrop-blur-md border border-white/30 max-w-3xl w-full mx-4 text-center">
        <h1 className="text-4xl font-bold text-white">Important Dates</h1>

        <table className="text-lg border-separate border-spacing-3 text-white w-full">
          <tbody>
            {[
              ["Full Paper Submission Deadline", "1st August 2025"],
              ["Acceptance Intimation", "1st September 2025"],
              ["Registration Deadline", "1st October 2025"],
              ["Conference Date", "29-30 December 2025"],
            ].map((row, index) => (
              <tr key={index} className="bg-white/30 border border-white/40 rounded-lg">
                <th className="font-medium px-4 py-2 text-left">{row[0]}</th>
                <th className="font-medium px-4 py-2 text-left">{row[1]}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Timeline;
