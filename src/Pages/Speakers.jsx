import React from "react";
import cs3 from '../assets/Images/cs3.jpg'
import Athirai from '../assets/Images/Athirai.jpg'
import Balaji from '../assets/Images/Balaji.png'
import Ganapati from '../assets/Images/Ganapati.png'
import Rajarajan from '../assets/Images/Rajarajan.png'
import Shamik from '../assets/Images/Shamik.jpg'
import shlomi from '../assets/Images/shlomi.jpg'
import Sumitra from '../assets/Images/Sumitra.png'

const Speakers = () => { 
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div className="fixed inset-0 w-full h-full">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-70"
          style={{ 
            backgroundImage: `url(${cs3})`
          }}
        />
      </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      {/* Content Overlay */}
      <div className="relative z-10 w-full flex flex-col min-h-screen">
        <div className="flex-grow flex justify-center items-start py-20">
          <div className="flex flex-col gap-8 items-center max-w-7xl mx-auto px-4">
            <h1 className="font-bold text-3xl text-white">KEYNOTE SPEAKERS</h1>
            <div className="flex gap-4 flex-wrap justify-center">
              <div className="rounded-xl overflow-hidden border-2 bg-white/80 w-[400px]">
                <div className="px-4 py-2 flex flex-col gap-4 min-h-[25vh]">
                  <img src={shlomi} alt="Dr. Shlomi Dolev" className="w-full h-full object-contain" />
                </div>
                <div className="bg-slate-400 px-4 py-12 text-center">
                  <h1>Dr. Shlomi Dolev</h1>
                  <h1>Professor</h1>
                  <h1>Ben-Gurion University of the Negev, Israel</h1>
                  <h1>Topic: Post Quantum Security</h1>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden border-2 bg-white/80 w-[400px]">
                <div className="px-4 py-2 flex flex-col gap-4 min-h-[25vh]">
                  <img src={Balaji} alt="Dr. Balaji Palanisamy" className="w-full h-full object-contain" />
                </div>
                <div className="bg-slate-400 px-4 py-14 text-center">
                  <h1>Dr. Balaji Palanisamy</h1>
                  <h1>Director of Graduate Studies</h1>
                  <h1>University of Pittsburgh, USA</h1>
                  <h1>Topic: Protecting Data Privacy in an Eve-growing Data-rich World</h1>
                </div>
              </div>
            </div>
            <div className="flex gap-4 flex-wrap justify-center px-20">
              <div className="rounded-xl overflow-hidden border-2 bg-white/80 w-[600px]">
                <div className="px-4 py-2 flex flex-col gap-4 min-h-[25vh]">
                  <img src={Shamik} alt="Dr. Shamik Sural" className="w-full h-full object-contain" />
                </div>
                <div className="bg-slate-400 px-4 py-8 text-center">
                  <h1>Dr. Shamik Sural, Professor</h1>
                  <h1>IIT Kharagpur</h1>
                </div>
              </div>
            </div>

            <h1 className="font-bold text-3xl text-white mt-16">INVITED SPEAKERS</h1>
            <div className="flex gap-4 flex-wrap justify-center">
              <div className="rounded-xl overflow-hidden border-2 bg-white/80">
                <div className="px-4 py-2 flex flex-col gap-4 min-h-[25vh]">
                  <img src={Sumitra} alt="Dr. S. Sumitra" className="w-full h-full object-contain" />
                </div>
                <div className="bg-slate-400 px-4 py-8 text-center">
                  <h1>Dr. S. Sumitra </h1>
                  <h1>Professor</h1>
                  <h1>Indian Institute of Space Science and Technology, Valiamala,</h1>
                  <h1>Thiruvananthapuram, Kerala, India</h1>
                  <h1>Topic: "Machine Learning for Graph Analysis"</h1>
                </div>
              </div>
            </div>

            <h1 className="font-bold text-3xl text-white mt-16">INVITED SPEAKERS FROM INDUSTRIES</h1>
            <div className="flex gap-4 flex-wrap justify-center">
              <div className="rounded-xl overflow-hidden border-2 bg-white/80">
                <div className="px-4 py-2 flex flex-col gap-4 min-h-[25vh]">
                  <img src={Rajarajan} alt="Dr. Rajarajan Sivaraj" className="w-full h-full object-contain" />
                </div>
                <div className="bg-slate-400 px-4 py-11 text-center">
                  <h1>Dr. Rajarajan Sivaraj</h1>
                  <h1>Group Director, RAN AI Systems Architecture,</h1>
                  <h1>Mavenir, USA</h1>
                  <h1>Topic: Scalable and Practical AI for Generating Intelligence and</h1>
                  <h1>Improving Performance in Large-scale Telecommunication Deployments</h1>
                </div>
              </div>

              <div className="rounded-xl overflow-hidden border-2 bg-white/80">
                <div className="px-4 py-2 flex flex-col gap-4 min-h-[25vh]">
                  <img src={Athirai} alt="Athirai A." className="w-full h-full object-contain" />
                </div>
                <div className="bg-slate-400 px-4 py-14 text-center">
                  <h1>Athirai A.</h1>
                  <h1>Principal Machine Learning Engineer,
                  Applied Science, Walmart, USA</h1>
                  <h1>Topic: Gen AI: Above and Beyond</h1>
                </div>
              </div>
            </div>

            <div className="flex gap-4 flex-wrap justify-center mt-4">
              <div className="rounded-xl overflow-hidden border-2 bg-white/80">
                <div className="px-4 py-2 flex flex-col gap-4 min-h-[25vh]">
                  <img src={Ganapati} alt="Mr. Ganapathi Subramaniam" className="w-full h-full object-contain" />
                </div>
                <div className="bg-slate-400 px-4 py-8 text-center">
                  <h1>Mr. Ganapathi Subramaniam</h1>
                  <h1>Information Security Director, Europe and ISMEA,</h1>
                  <h1>UPS Limited UK</h1>
                  <h1>Topic: AI Ethics: A Holy Grail or a Poisoned Chalice?
                  Navigating Bias, Autonomy, and Accountability</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
