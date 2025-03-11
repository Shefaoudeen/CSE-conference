import React from "react";

const ContactHome = () => {

  return (
    <div className="w-screen min-h-screen flex justify-center items-center mt-[20vh] pb-20">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="font-bold text-5xl text-white">Contact</h1>
        <div className="rounded-xl overflow-hidden border-2 mt-5">
          <div className="bg-white px-4 py-5 border-b-gray-300 border-b-2">
            <h1 className=" text-2xl font-bold text-center">
              QUERIES RELATED TO PUBLICATION
            </h1>
          </div>
          <div className="px-4 py-5 flex bg-white flex-col gap-4">
            <div className="border p-2 px-4 rounded-xl hover:scale-105 transition-all hover:bg-slate-50 text-start shadow-lg">
              <h1 className=" font-bold ">Dr. R. Kalpana</h1>
              <h1>Professor, CSE, Puducherry Technological University</h1>
              <h1>Cell: +91 9443051212</h1>
              <h1>Mail Id: icaiscc-2025@gmail.com</h1>
            </div>
            <div className="border p-2 px-4 rounded-xl hover:scale-105 transition-all hover:bg-slate-50 text-start shadow-lg">
              <h1 className=" font-bold">Dr. K. Saruladha</h1>
              <h1>Professor, CSE, Puducherry Technological University</h1>
              <h1>Cell: +91 9442396080</h1>
              <h1>Mail Id: icaiscc-2025@gmail.com</h1>
            </div>
            <div className="border p-2 px-4 rounded-xl hover:scale-105 transition-all hover:bg-slate-50 text-start shadow-lg">
              <h1 className=" font-bold">Dr. V. Akila</h1>
              <h1>Professor, CSE, Puducherry Technological University</h1>
              <h1>Cell: +91 9786853753</h1>
              <h1>Mail Id: icaiscc-2025@gmail.com</h1>
            </div>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden border-2">
          <div className=" bg-white px-4 py-5 border-b-gray-300 border-b-2">
            <h1 className=" text-2xl font-bold text-center">
              QUERIES RELATED TO HOSPITALITY AND LOCAL SIGHTSEEING
            </h1>
          </div>
          <div className="px-4 py-5 flex bg-white flex-col gap-4">
            <div className="border p-2 px-4 rounded-xl hover:scale-105 transition-all hover:bg-slate-50 text-start shadow-lg">
              <h1 className=" font-bold">Dr. M. Thirumaran</h1>
              <h1>Professor, CSE, Puducherry Technological University</h1>
              <h1>Cell: +91 9894593367</h1>
              <h1>Mail Id: icaiscc-2025@gmail.com</h1>
            </div>
            <div className="border p-2 px-4 rounded-xl hover:scale-105 transition-all hover:bg-slate-50 text-start shadow-lg">
              <h1 className=" font-bold">Dr. N. Sivakumar</h1>
              <h1>Professor, CSE, Puducherry Technological University</h1>
              <h1>Cell: +91 9840901054</h1>
              <h1>Mail Id: icaiscc-2025@gmail.com</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
