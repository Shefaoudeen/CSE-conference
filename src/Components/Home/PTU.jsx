import React from "react";
import ptuImg from "../../assets/Images/cs1.jpg";
import { PTULogo } from "../../assets";

const PTU = () => {
  return (
    <div className="w-screen flex justify-center items-center py-20">
      <div className="w-[75%] text-justify text-lg flex items-center gap-6 tracking-wide leading-relaxed ">
        <img
          src={PTULogo}
          alt="logo"
          className="w-[300px] absolute -right-20 -z-10 opacity-20"
        />
        <div className="w-[40%]">
          <img src={ptuImg} className="h-96 object-cover" alt="ptu" />
        </div>
        <div className="w-[60%]">
          <h1 className="text-3xl font-bold pb-10 text-blue-800">About PTU</h1>
          <p>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Puducherry Technological
            University (PTU) is the first state University of Union Territory of
            Puducherry. It seamlessly came into existence on 5thSeptember 2020
            upon the elevation of erstwhile Pondicherry Engineering College -
            PEC (established in the year 1985 under the 7thfive-year plan)with
            the University status. NIRF, MHRD, Govt. of India has ranked the
            University at 150 under the category of engineering education. PTU
            alumni are spread far and wide across the globe holding eminent
            positions in topg lobal Corporates, Universities and Civil Services.
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
