import React from "react";
import ptuImg from "../../assets/Images/cs11.jpg"

const Accommodation = () => {
  return (
    <div className="w-screen relative h-screen flex justify-center items-center">
      <div className="w-[75%] text-justify text-xl flex flex-col gap-6 leading-[28px]">
       <img src={ptuImg} className="rounded-3xl h-96 object-cover" alt="ptu" />
        <h1 className="text-3xl font-bold">Accommodation Details</h1>
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The organizing committee 
          is pleased to offer a variety of accommodation options for 
          participants attending the ICAISDA-2025 Conference.
          Several hotels are located in close proximity to Puducherry Technological University
          and in Puducherry Town, which is 7 km away from the University. 
          These hotels offer a range of comfort and pricing to suit different 
          preferences. For those seeking more affordable options, numerous
          guesthouses and budget hotels are situated within 5 km of the 
          University, providing basic amenities for a comfortable stay. 
          Additionally, accommodation in hostels can be arranged 
          upon request.
          Hotel bookings will be made upon advance request from 
          participants, with payment required at the 
          time of booking. {" "}
        </p>
      </div>
    </div>
  );
};

export default Accommodation;
