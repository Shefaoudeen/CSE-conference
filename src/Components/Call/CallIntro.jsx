import React, { useState } from "react";
import { Brain, Shield, Calendar, MapPin, Users } from "lucide-react";

const workshops = [
  { title: "1st International Workshop on AI-driven Smart Applications", topics: [
    "AI for Smart Healthcare and Telemedicine","Intelligence Automations in Finance, Business and Economics", 
    "AI for Smart IoT Applications","AI for Personalized Learning in Education",
    "Applications of AI-powered Digital Twins","AI for Intelligent Transportation Systems",
    "Gen AI for Creativity and Content creation","UAV Networks and Mobile Robots",
    "AI in Healthcare and Bioinformatics","AI for Smart Cities and IoT",
    "AI for Recommendation Systems","AI in Gaming, AR and VR",
    "AI for Autonomous Vehicles","AI for Language Translation Tools",
    "AI in Agriculture and Food Technologies","AI and Drones Technologies",
    "AI in Additive Manufacturing","Industry 4.0 or 5.0",
    "AI for Water Networks Automation",
    
    ]},
  { title: "1st International Workshop on Advancements in Secure Communications and Computing", topics: [
    "Secure Edge, Fog Computing and Mobile Offloading","Secure Next Generation High Performance Computing",
    "Pervasive and Mobile Computing","Prompt and Cognitive Computing","Quantum Computing",
    "Secure Wireless Communication","Network Protocol and Congestion Control",
    "Sustainable Communication and Computing","Quantum Communication and Cryptography",
    "Secure Vehicular Networks and Communication","Intelligence Sensors and Sensor Networks",
    "Blockchain for Secure Communication","Secure Next Generation Networks",
    "Multimedia Processing and Communication","Privacy Enhancing Communication",
    "Ad-hoc, PAN and Mesh Networks","Communication Challenges in IoT and other Tiny Devices",
    "Network Function Virtualization and Software Defined Networking",
    "Networking and Computing for Sustainability, Society, and Development",
    
    ]}
];

const App = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [activeWorkshop, setActiveWorkshop] = useState(0);

  return (
    <div className="min-h-screen mt-40 w-full bg-gradient-to-b from-blue-100 to-white flex flex-col">
      {/* Header Section */}
      <div className="bg-blue-900 text-white py-20 px-6 text-center w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center space-x-3 mb-6">
          </div>
          <h1 className="text-6xl font-bold">ICAISDA-2025</h1>
          <p className="text-2xl text-white max-w-4xl mx-auto mt-2">
            First International Conference on Artificial Intelligence and Secure Data Analytics
          </p>
         
        </div>
      </div>

      {/* Main Content Section */}
      <div className="flex-1 w-full max-w-7xl mx-auto px-6 py-16">
        {/* Call for Papers */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Call for Papers</h2>
          <p className="text-lg text-gray-700">
            Submit research papers in <span className="font-bold text-blue-700">Artificial Intelligence</span> and <span className="font-bold text-blue-700">Secure Data Analytics</span>.
          </p>
          <div className="mt-8 flex flex-col md:flex-row justify-center gap-4">
            {[
              ['ai', 'Artificial Intelligence Topics', <Brain className="w-5 h-5" />],
              ['security', 'Secure Data Analytics Topics', <Shield className="w-5 h-5" />],
              ['workshops', 'Workshops', <Users className="w-5 h-5" />]
            ].map(([id, label, icon]) => (
              <button key={id} onClick={() => setActiveSection(activeSection === id ? null : id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg text-lg font-bold transition ${activeSection === id ? 'bg-blue-600 text-white font-bold' : 'bg-blue-200 text-blue-700 hover:bg-blue-200'}`}>
                {icon}<span>{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Sections */}
        {activeSection === 'ai' && <Section title="Artificial Intelligence Topics" topics={[
          "Machine Learning and Deep Learning", "Large Language Models", "AI Algorithms and Architectures",
          "Reinforcement Learning", "AI for Sustainable Development", "Computer Vision and Image Processing",
          "AI in Emerging Technologies", "Bias and Fairness in AI Models", "AI and Blockchain Technology",
          "AI Model Optimization and Efficiency",	"Bias and Fairness in AI Models","AI and Quantum Computing",
          "AI and Internet of Things (IoT)","AI-powered Cloud Resource Allocation","AI for Natural Language Processing and Speech Recognition",
          "Computer Vision and Image Processing","Agentic AI and its Impact","AI and Emerging Technologies",
        ]} />}
        {activeSection === 'security' && <Section title="Secure Data Analytics Topics" topics={[
          	"Privacy-preserving Machine Learning and Artificial Intelligence","Encryption Methods for Data Analysis",
            "Applications of Data Analytics in Security Domains","Data analytics for Security Attacks and Defenses",
            "Secure Social Network Analysis and Mining","Stream Data Analytics for Cyber Security",
            "Privacy in Big Data Management and Analytics","Security Issues in Supply Chain Analytics",
            "Security Issues in Computer Vision and Video Analytics","Industry Applications of Privacy-preserving in Big Data Analytic",
            "Network and Information Security Using Data Analytics","Fraud Detection and Risk Management",
            "Threat Intelligence and Incident Response","Blockchain and Data Security",
            "Privacy, Surveillance and AI Ethics","Secure Software Development",
            "Leveraging AI for Enhanced Cybersecurity","Advances in Data Science and Analytics",
          
        ]} />}
        {activeSection === 'workshops' && <WorkshopSection activeWorkshop={activeWorkshop} setActiveWorkshop={setActiveWorkshop} />}
      </div>
    </div>
  );
};

const Section = ({ title, topics }) => (
  <div className="bg-white rounded-2xl shadow-xl p-8 animate-fadeIn w-full">
    <h3 className="text-2xl font-bold text-gray-800 mb-6">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {topics.map((topic, index) => (
        <div key={index} className="flex items-start font-bold space-x-2 p-3 rounded-lg hover:bg-blue-100">
          <span className="text-blue-500 mt-1">•</span>
          <span className="text-white-800">{topic}</span>
        </div>
      ))}
      {/* Highlighted "Not limited to above topics" as a separate entry */}
      <div className="col-span-1 md:col-span-2 flex justify-center">
        <div className="p-3 rounded-lg bg-purple-200 text-blue-700 font-bold text-center w-full">
          Not limited to above topics
        </div>
      </div>
    </div>
  </div>
);

const WorkshopSection = ({ activeWorkshop, setActiveWorkshop }) => (
  <div className="animate-fadeIn w-full">
    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Workshops</h2>
      <div className="flex justify-center gap-4">
        {workshops.map((_, idx) => (
          <button key={idx} onClick={() => setActiveWorkshop(idx)}
            className={`px-6 py-3 rounded-lg font-medium ${activeWorkshop === idx ? 'bg-blue-600 text-white' : 'bg-gray-100 text-blue-600 hover:bg-gray-200'}`}>
            Workshop {idx + 1}
          </button>
        ))}
      </div>
    </div>
    <div className="bg-white rounded-2xl shadow-xl p-8 animate-fadeIn">
      <h3 className="text-2xl font-bold text-gray-800 mb-6">{workshops[activeWorkshop].title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {workshops[activeWorkshop].topics.map((topic, index) => (
          <div key={index} className="p-4 rounded-lg border font-bold bg-gray-50 rounded-lg hover:bg-blue-100">{topic}</div>
        ))}
        {/* Highlighted "Not limited to above topics" as a separate entry */}
      <div className="col-span-1 md:col-span-2 flex justify-center">
        <div className="p-3 rounded-lg bg-puprle-300 text-blue-700 font-bold text-center w-full">
          Not limited to above topics
        </div>
      </div>
      </div>
    </div>
  </div>
);

export default App;
