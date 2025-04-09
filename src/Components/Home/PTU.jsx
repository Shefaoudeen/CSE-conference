import React from "react";
import ptuImg from "../../assets/Images/cs1.jpg";
import { PTULogo } from "../../assets";

const PTU = () => {
  return (
    <div className="w-screen relative flex justify-center items-center py-20">
      <div className="md:w-[75%] text-justify text-lg flex flex-col md:flex-row items-center gap-6 tracking-wide leading-relaxed ">
        <img
          src={PTULogo}
          alt="logo"
          className="w-[300px] absolute bottom-[40%] md:top-[30%] md:right-[10%] -z-10 opacity-20"
        />
        <div className="w-[90%] md:w-[40%]">
          <img src={ptuImg} className="h-96 object-cover" alt="ptu" />
        </div>
        <div className="w-[90%] md:w-[60%] px-1 md:px-0">
          <h1 className="text-3xl font-bold pb-10 text-blue-800">Puducherry Technological University-(PTU)</h1>
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Puducherry Technological
            University (PTU) is the first state University of Union Territory of
            Puducherry. It seamlessly came into existence on 5th September 2020
            upon the elevation of erstwhile Pondicherry Engineering College -
            PEC (established in the year 1985 under the 7th five-year plan) with
            the University status. NIRF, MHRD, Govt. of India has ranked the
            University at 150 under the category of engineering education. PTU
            alumin are spread far and wide across the global holding eminent
            positions in top global Corporates, Universities and Civil Services.
            The university offers nine undergraduate, thirteen post-graduate
            courses and Ph.D programmes. The National Board of Accreditation
            (NBA) of AICTE had accredited five undergraduate courses. PTU-ATAL
            Incubation center is fully supported and funded by ATAL Innovation
            Mission (AIM), National Institution for Transforming India (NITI)
            Aayog, Government of India. PTU has been a prolific recipient of
            research funding from the Indian government agencies including
            Ministry of Human Resource Development (MHRD), Department of Science
            & Technology (DST), Council of Scientific & Industrial Research
            (CSIR) etc. through several research projects undertaken by the
            faculty. PTU has been selected by MHRD, Government of India to
            receive Technical Education Quality Improvement Programme (TEQIP)
            and Rashtriya Uchchatar Shiksha Abhiyan (RUSA) grants.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PTU;
