import React, { useEffect, useState, useRef } from "react";
import { FaGraduationCap, FaMobileAlt } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min";

const ProfessorCard = (props) => {
  return (
    <div className="border bg-white p-2 px-4 rounded-xl hover:scale-105 text-center transition-all hover:bg-blue-50 shadow-lg shadow-blue-900">
      <h1 className=" font-bold text-blue-800 text-lg">{props.name}</h1>
      <h1 className="flex items-center gap-2">
        <span className="inline">
          <FaGraduationCap className="text-blue-700" />
        </span>
        Professor, CSE, Puducherry Technological University
      </h1>
      <h1 className="flex gap-2 items-center">
        <FaMobileAlt className="text-blue-700" /> Cell: {props.number}
      </h1>
      <h1 className="flex gap-2 items-center">
        <AiOutlineMail className="text-blue-700" />
        Mail Id: icaiscc-2025@gmail.com
      </h1>
    </div>
  );
};

const ContactHome = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const myRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: myRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x234881,
          backgroundColor: 0xffffff,
          points: 15.0,
          maxDistance: 29.0,
          spacing: 18.0,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="w-screen relative flex justify-center items-center">
      <div
        ref={myRef}
        className="fixed opacity-50 inset-0 bg-cover bg-center"
      />

      <div className="flex flex-col gap-8 items-center relative z-[200]">
        <h1 className="font-bold text-5xl text-white">Contact</h1>
        <div className="rounded-xl overflow-hidden  mt-5">
          <div className=" px-4 py-5  ">
            <h1 className=" text-2xl font-bold text-center">
              QUERIES RELATED TO PUBLICATION
            </h1>
          </div>
          <div className="px-4 py-5 flex  gap-8">
            <ProfessorCard name={"Dr. R. Kalpana"} number={"+91 9443051212"} />
            <ProfessorCard
              name={"Dr. K. Saruladha"}
              number={"+91 9442396080"}
            />
            <ProfessorCard name={"Dr. V. Akila"} number={"++91 9786853753"} />
          </div>
        </div>
        <div className="rounded-xl overflow-hidden ">
          <div className="  px-4 py-5  ">
            <h1 className=" text-2xl font-bold text-center">
              QUERIES RELATED TO HOSPITALITY AND LOCAL SIGHTSEEING
            </h1>
          </div>
          <div className="px-4 py-5 flex   gap-8">
            <ProfessorCard
              name={"Dr. M. Thirumaran"}
              number={"+91 9894593367"}
            />
            <ProfessorCard
              name={"Dr. N. Sivakumar"}
              number={"+91 9840901054"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
