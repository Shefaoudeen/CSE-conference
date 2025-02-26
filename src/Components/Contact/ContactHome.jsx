import React from "react";

const ContactHome = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center mt-[20vh] pb-20">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="font-bold text-3xl">CONTACT</h1>
        <div className="rounded-xl overflow-hidden border-2">
          <div className="bg-slate-400 px-4 py-2">
            <h1>QUERIES RELATED TO PUBLICATION</h1>
          </div>
          <div className="px-4 py-2 flex flex-col gap-4">
            <div className="border p-2 rounded-xl text-center shadow-lg">
              <h1>Dr. R. Kalpana</h1>
              <h1>Professor, CSE, Puducherry Technological University</h1>
              <h1>Cell: +91 9443051212</h1>
              <h1>Mail Id: icaiscc-2025@gmail.com</h1>
            </div>
            <div className="border p-2 rounded-xl text-center shadow-lg">
              <h1>Dr. K. Saruladha</h1>
              <h1>Professor, CSE, Puducherry Technological University</h1>
              <h1>Cell: +91 9442396080</h1>
              <h1>Mail Id: icaiscc-2025@gmail.com</h1>
            </div>
            <div className="border p-2 rounded-xl text-center shadow-lg">
              <h1>Dr. V. Akila</h1>
              <h1>Professor, CSE, Puducherry Technological University</h1>
              <h1>Cell: +91 9786853753</h1>
              <h1>Mail Id: icaiscc-2025@gmail.com</h1>
            </div>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden border-2">
          <div className="bg-slate-400 px-4 py-2">
            <h1>QUERIES RELATED TO HOSPITALITY AND LOCAL SIGHTSEEING</h1>
          </div>
          <div className="px-4 py-2 flex flex-col gap-4">
            <div className="border p-2 rounded-xl text-center shadow-lg">
              <h1>Dr. M. Thirumaran</h1>
              <h1>Professor, CSE, Puducherry Technological University</h1>
              <h1>Cell: +91 9894593367</h1>
              <h1>Mail Id: icaiscc-2025@gmail.com</h1>
            </div>
            <div className="border p-2 rounded-xl text-center shadow-lg">
              <h1>Dr. N. Sivakumar</h1>
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
