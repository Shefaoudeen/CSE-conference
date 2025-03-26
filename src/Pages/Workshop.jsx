import React from "react";

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
    title:
      "1st International Workshop on Advancements in Secure Communications and Computing",
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
  return (
    <div className="max-w-6xl mx-auto my-16 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 border-b-4 border-blue-500 pb-3">
        Workshops
      </h1>
      <p className="mt-6 text-lg text-gray-700 text-center">
        Co-located with ICAISDA-2025, two workshops will be conducted:
      </p>

      {/* Workshops Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {workshops.map((workshop, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-400 pb-2">
              {workshop.title}
            </h2>
            <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
              {workshop.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-6 text-lg text-gray-700 text-center mx-auto max-w-3xl leading-relaxed">
        <h1>The workshops will include a combination of regular papers and invited talks. Their 
        main purpose is to provide a platform for presenting new ideas in these focused areas. 
        These workshops enable stimulating discussions on state-of-the-art, emerging, visionary, 
        and possibly provocative topics. Workshop papers are planned to be published along with 
        the main conference proceedings.</h1>
      </p>
    </div>
  );
};

export default Workshops;
