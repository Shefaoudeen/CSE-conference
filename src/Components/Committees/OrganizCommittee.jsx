import React, { useState, useEffect } from "react";
import backgroundImage1 from "../../assets/Images/cs10.jpg"; // Ensure the image path is correct
import backgroundImage2 from "../../assets/Images/cs7.jpg"; // Example second background image
import backgroundImage3 from "../../assets/Images/cs8.jpg"; // Example third background image

// Assuming these are the arrays from your Data/Committee file
const Organizing_Secretaries = [
  "Dr. j. Jayabharathy",
  "Dr. k. Sathyamurthy"
];

const Joint_Secretaries = [
  "Dr. k. Saruladha",
  "Dr. N. Sivakumar",
  "Dr. V. Akila"
];

const CommitteeCard = ({ 
  title, 
  name, 
  position, 
  department 
}) => (
  <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all duration-300 w-full max-w-md">
    <div className="text-center">
      <h3 className="text-gray-600 font-semibold text-xl mb-3">{title}</h3>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">{name}</h2>
      {position && <p className="text-lg text-gray-700">{position}</p>}
      {department && <p className="text-gray-600">{department}</p>}
    </div>
  </div>
);

const SecretarySection = ({ 
  title, 
  members 
}) => (
  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-lg">
    <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center border-b-2 border-gray-400 pb-2">{title}</h3>
    <ul className="space-y-2">
      {members.map((member, index) => (
        <li 
          key={index}
          className="text-gray-700 text-center font-medium py-1 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200"
        >
          {member}
        </li>
      ))}
    </ul>
  </div>
);

function OrganizCommittee() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = [
    backgroundImage1, backgroundImage2, backgroundImage3
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Smooth Transition */}
      {backgroundImages.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
            opacity: currentImageIndex === index ? 1 : 0,
          }}
        />
      ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mt-3 text-white mb-4">
              Organizing Committee
            </h1>
            <div className="w-32 h-1 bg-white/30 mx-auto rounded-full"></div>
          </div>

          {/* Main Committee Members */}
          <div className="space-y-8 mb-16 mx-auto flex flex-col items-center">
            <CommitteeCard
              title="Chief Patron"
              name="Prof. Dr. S. Mohan"
              position="Vice Chancellor"
              department="Puducherry Technological University"
            />
            
            <CommitteeCard
              title="Patron"
              name="Prof. E. Ilavarasan"
              position="Professor and Head"
              department="Department of Computer Science and Engineering"
            />

           <CommitteeCard
              title="Co-Patron"
              name="Dr. R. Kalpana"
              position="Professor"
              department="Department of Computer Science and Engineering"
            />
          </div>


          {/* Secretaries Grid */}
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <SecretarySection
              title="Organizing Secretaries"
              members={Organizing_Secretaries}
            />
            
            <SecretarySection
              title=" Joint Secretaries"
              members={Joint_Secretaries}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrganizCommittee;