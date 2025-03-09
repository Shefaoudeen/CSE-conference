import React from "react";

const Speakers = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center mt-[20vh] pb-20">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="font-bold text-3xl">KEYNOTE SPEAKERS</h1>
        <div className="flex">
          <div className="rounded-xl overflow-hidden border-2">
            <div className="px-4 py-2 flex flex-col gap-4 min-h-[25vh]">
              IMG
            </div>
            <div className="bg-slate-400 px-4 py-2 text-center">
              <h1>Dr. Balaji Palanisamy</h1>
              <h1>Director of Graduate Studies</h1>
              <h1>University of Pittsburgh, USA</h1>
              <h1>
                Topic: Protecting Data Privacy in an Eve-growing Data-rich World
              </h1>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border-2">
            <div className="px-4 py-2 flex flex-col gap-4 min-h-[25vh]">
              IMG
            </div>
            <div className="bg-slate-400 px-4 py-2 text-center">
              <h1>Dr. Rajarajan Sivaraj</h1>
              <h1>Group Director, RAN AI Systems </h1>
              <h1>Architecture, Mavenir, USA</h1>
              <h1>Topic: Scalable and Practical AI for Generating Intelligence and 
               </h1> 
               <h1>
                Improving Performance in Large-scale Telecommunication Deployments
              </h1>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="rounded-xl overflow-hidden border-2">
            <div className="px-4 py-2 flex flex-col gap-4 min-h-[25vh]">
              IMG
            </div>
            <div className="bg-slate-400 px-4 py-2 text-center">
              <h1>Dr. S. Sumitra </h1>
              <h1>Professor</h1>
              <h1>Indian Institute of Space Science and Technology,
                 Valiamala,</h1>
              <h1>Thiruvananthapuram, Kerala, India</h1>
              <h1>
                Topic: "Machine Learning for Graph Analysis".
              </h1>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden border-2">
            <div className="px-4 py-2 flex flex-col gap-4 min-h-[25vh]">
              IMG
            </div>
            <div className="bg-slate-400 px-4 py-2 text-center">
              <h1>Mr. Ganapathi Subramaniam, </h1>
              <h1>Information Security Director, Europe and ISMEA,</h1>
              <h1>UPS Limited UK</h1>
              <h1>
                Topic: AI Ethics: A Holy Grail or a Poisoned Chalice? Navigating Bias, Autonomy, 
                and Accountability  [online]
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
