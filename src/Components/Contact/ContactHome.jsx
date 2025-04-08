import React from "react";
import { FaGraduationCap, FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import backgroundImage from "../../assets/Images/cs2.jpg"; // Add your background image

const ProfessorCard = (props) => {
  return (
    <div className="border bg-white p-4 rounded-xl hover:scale-105 text-center transition-all hover:bg-blue-50 shadow-lg shadow-blue-900">
      <h1 className="font-bold text-blue-800 text-lg">{props.name}</h1>
      <h1 className="flex items-center gap-2">
        <FaGraduationCap className="text-blue-700" />
        Professor, CSE, Puducherry Technological University
      </h1>
      <h1 className="flex gap-2 items-center">
        <FaMobileAlt className="text-blue-700" /> Cell: {props.number}
      </h1>
      <h1 className="flex gap-2 items-center">
        <AiOutlineMail className="text-blue-700" />
        <a href={`mailto:${props.mail}`} className="text-blue-700 underline hover:text-blue-500">
          {props.mail}
        </a>
      </h1>
    </div>
  );
};

const ContactHome = () => {
  return (
    <div 
      className="w-screen min-h-screen flex justify-center items-center bg-cover bg-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }} // Set background image
    >
      <div className="flex flex-col gap-8 items-center relative z-10">
        <h1 className="font-bold text-5xl text-white">Contacts</h1>
        
        {/* Queries related to publication */}
        <div className="rounded-xl overflow-hidden mt-5  p-6 shadow-lg">
          <div className="px-4 py-5">
            <h1 className="text-2xl font-bold text-center text-white">QUERIES RELATED TO PUBLICATION</h1>
          </div>
          <div className="px-4 py-5 flex gap-8 flex-wrap justify-center">
            <ProfessorCard name={"Dr. R. Kalpana"} number={"+91 9443051212"} mail={"icaisda-pub@ptuniv.edu.in"} />
            <ProfessorCard name={"Dr. K. Saruladha"} number={"+91 9442396080"} mail={"icaisda-pub@ptuniv.edu.in"} />
            <ProfessorCard name={"Dr. V. Akila"} number={"+91 9786853753"} mail={"icaisda-pub@ptuniv.edu.in"} />
          </div>
        </div>

        {/* Queries related to hospitality and local sightseeing */}
        <div className="rounded-xl overflow-hidden  p-6 shadow-lg">
          <div className="px-4 py-5">
            <h1 className="text-2xl font-bold text-center text-white">QUERIES RELATED TO HOSPITALITY AND LOCAL SIGHTSEEING</h1>
          </div>
          <div className="px-4 py-5 flex gap-8 flex-wrap justify-center">
            <ProfessorCard name={"Dr. M. Thirumaran"} number={"+91 9894593367"} mail={"icaisda-hos@ptuniv.edu.in"} />
            <ProfessorCard name={"Dr. N. Sivakumar"} number={"+91 9840901054"} mail={"icaisda-hos@ptuniv.edu.in"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
