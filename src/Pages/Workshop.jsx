import React, { useState } from "react";

const workshops = [
  {
    title: "1st International Workshop on AI-driven Smart Applications",
    topics: [
      "AI for Smart Healthcare and Telemedicine",
      "Intelligence Automations in Finance, Business and Economics",
      "AI for Smart IoT Applications",
      "AI for Personalized Learning in Education",
      "Applications of AI-powered Digital Twins",
      "AI for Intelligent Transportation Systems",
      "Gen AI for Creativity and Content Creation",
      "UAV Networks and Mobile Robots",
      "AI in Healthcare and Bioinformatics",
      "AI for Smart Cities and IoT",
      "AI for Recommendation Systems",
      "AI in Gaming, AR and VR",
      "AI for Autonomous Vehicles",
      "AI for Language Translation Tools",
      "AI in Agriculture and Food Technologies",
      "AI and Drones Technologies",
      "AI in Additive Manufacturing",
      "Industry 4.0 or 5.0",
      "AI for Water Networks Automation",
    ],
  },
  {
    title: "1st International Workshop on Advancements in Secure Communications and Computing",
    topics: [
      "Secure Edge, Fog Computing and Mobile Offloading",
      "Secure Next Generation High Performance Computing",
      "Pervasive and Mobile Computing",
      "Prompt and Cognitive Computing",
      "Quantum Computing",
      "Secure Wireless Communication",
      "Network Protocol and Congestion Control",
      "Sustainable Communication and Computing",
      "Quantum Communication and Cryptography",
      "Secure Vehicular Networks and Communication",
      "Intelligence Sensors and Sensor Networks",
      "Blockchain for Secure Communication",
      "Secure Next Generation Networks",
      "Multimedia Processing and Communication",
      "Privacy Enhancing Communication",
      "Ad-hoc, PAN and Mesh Networks",
      "Communication Challenges in IoT and Other Tiny Devices",
      "Network Function Virtualization and Software Defined Networking",
      "Networking and Computing for Sustainability, Society, and Development",
    ],
  },
];

const Workshops = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="max-w-7xl mt-16 mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block text-blue-600">Workshops</span>
          <span className="block text-2xl mt-3 text-gray-500 font-normal">
            ICAISDA-2025
          </span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
          Co-located with ICAISDA-2025, two workshops will be conducted focusing on cutting-edge technologies and research.
        </p>
      </div>

      <div className="mt-12 flex justify-center space-x-4">
        {workshops.map((workshop, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
              activeTab === idx
                ? "bg-blue-600 text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-gray-50"
            }`}
          >
            Workshop {idx + 1}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {workshops.map((workshop, index) => (
          <div
            key={index}
            className={`transition-all duration-300 ${
              activeTab === index ? "opacity-100" : "hidden opacity-0"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="px-6 py-8 sm:p-10">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
                  {workshop.title}
                </h2>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Topics</h3>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {workshop.topics.map((topic, i) => (
                      <div
                        key={i}
                        className="relative rounded-lg border border-gray-200 bg-gray-100 px-6 py-4 shadow-sm hover:border-blue-400 hover:shadow transition-all duration-200"
                      >
                        <p className="text-lg text-gray-800 font-medium">{topic}</p> {/* Bigger text */}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-inner">
        <p className="text-lg text-gray-700 leading-relaxed">
          The workshops will include a combination of regular papers and invited talks. Their 
          main purpose is to provide a platform for presenting new ideas in these focused areas. 
          These workshops enable stimulating discussions on state-of-the-art, emerging, visionary, 
          and possibly provocative topics. Workshop papers are planned to be published along with 
          the main conference proceedings.
        </p>
      </div>
    </div>
  );
};

export default Workshops;
