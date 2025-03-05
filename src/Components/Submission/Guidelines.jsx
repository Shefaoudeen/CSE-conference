import React, { useState, useEffect } from "react";
import cs1 from "../../assets/Images/cs6.jpg"; // Ensure the image path is correct
import cs2 from "../../assets/Images/cs7.jpg"; // Add another image (e.g. cs7.jpg)
import cs3 from "../../assets/Images/cs8.jpg"; // Add another image (e.g. cs8.jpg)
import cs4 from "../../assets/Images/cs9.jpg"; // Add another image (e.g. cs8.jpg)
import cs5 from "../../assets/Images/cs11.jpg"; // Add another image (e.g. cs8.jpg)

const images = [cs1, cs2, cs3,cs4,cs5]; // Array of background images

const Guidelines = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div
      className="w-screen h-screen flex justify-center items-center bg-cover bg-center transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[currentImage]})`, // Set the background image dynamically
      }}
    >
      <div className="w-[75%] text-justify text-xl flex flex-col gap-6 leading-[28px] bg-opacity-70 bg-black p-6">
        <h1 className="text-3xl font-bold text-white">GUIDELINES FOR AUTHORS</h1>
        <p className="text-white">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Prospective authors are
          encouraged to prepare research papers not exceeding 10 pages in single
          line space, including all figures, tables, and references. Further,
          details on formatting will be updated once the journals are finalized.
          Only original papers that have not been published or submitted for
          publication elsewhere will be considered. The authors must clearly
          outline the research area, main results, and contributions in the
          research papers. Every submission must be accompanied by a plagiarism
          report, with a similarity index not exceeding 10%.
        </p>
      </div>
    </div>
  );
};

export default Guidelines;
