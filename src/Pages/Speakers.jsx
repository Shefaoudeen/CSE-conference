import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";
import Athirai from "../assets/Images/Athirai.jpg";
import Balaji from "../assets/Images/Balaji.png";
import Ganapati from "../assets/Images/Ganapati.png";
import Rajarajan from "../assets/Images/Rajarajan.png";
import Shamik from "../assets/Images/Shamik.jpg";
import Shlomi from "../assets/Images/shlomi.jpg";
import Sumitra from "../assets/Images/Sumitra.png";

const SpeakerCard = ({ image, name, title, organization, topic }) => (
  <div className="bg-white w-[300px] h-full rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div className="h-[300px] flex justify-center items-center overflow-hidden bg-gray-100">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="p-4">
      <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{name}</h3>
      <p className="text-gray-600 font-medium text-center">{title}</p>
      <p className="text-gray-500 text-sm text-center">{organization}</p>
      {topic && (
        <div className="mt-4 border-t border-gray-200 pt-2">
          <p className="text-sm font-medium text-gray-900">Topic:</p>
          <p className="text-sm text-gray-600 italic">{topic}</p>
        </div>
      )}
    </div>
  </div>
);

const SectionTitle = ({ title }) => (
  <div className="w-full text-center mb-12 relative z-10">
    <h2 className="text-4xl font-bold text-blue-800 mb-2">{title}</h2>
    <div className="w-24 h-1 bg-blue-700/50 mx-auto rounded-full"></div>
  </div>
);

function Speakers() {
  const speakers = {
    keynote: [
      { image: Shlomi, name: "Dr. Shlomi Dolev", title: "Professor", organization: "Ben-Gurion University of the Negev, Israel", topic: "Post Quantum Security" },
      { image: Balaji, name: "Dr. Balaji Palanisamy", title: "Director of Graduate Studies", organization: "University of Pittsburgh, USA", topic: "Protecting Data Privacy in an Ever-growing Data-rich World" },
      { image: Shamik, name: "Dr. Shamik Sural", title: "Professor", organization: "IIT Kharagpur", topic: "Advanced Security Paradigms" }
    ],
    invited: [
      { image: Sumitra, name: "Dr. S. Sumitra", title: "Professor", organization: "Indian Institute of Space Science and Technology, Thiruvananthapuram", topic: "Machine Learning for Graph Analysis" }
    ],
    industry: [
      { image: Rajarajan, name: "Dr. Rajarajan Sivaraj", title: "Group Director, RAN AI Systems Architecture", organization: "Mavenir, USA", topic: "Scalable and Practical AI for Telecommunication" },
      { image: Athirai, name: "Athirai A.", title: "Principal Machine Learning Engineer", organization: "Applied Science, Walmart, USA", topic: "Gen AI: Above and Beyond" }
    ]
  };

  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x234881,
          backgroundColor: 0xffffff,
          points: 12.0,
          maxDistance: 30.0,
          spacing: 22.0
        })
      );
    }
    return () => vantaEffect && vantaEffect.destroy();
  }, [vantaEffect]);

  return (
    <div className="relative mt-40 min-h-screen w-full bg-gray-100 py-20">
      <div ref={vantaRef} className="fixed inset-0 z-0" />
      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-black">Distinguished Speakers</h1>
          <p className="text-xl text-gray-700 mt-2">Join us in welcoming world-renowned experts in technology and innovation</p>
        </div>

        <div className="space-y-24">
          {Object.entries(speakers).map(([category, speakersList]) => (
            <section key={category}>
              <SectionTitle title={category.charAt(0).toUpperCase() + category.slice(1) + " Speakers"} />
              <div className="flex flex-wrap justify-center gap-8">
                {speakersList.map((speaker, idx) => (
                  <SpeakerCard key={idx} {...speaker} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Speakers;
