import React from "react";
import Athirai from '../assets/Images/Athirai.jpg'
import Balaji from '../assets/Images/Balaji.png'
import Ganapati from '../assets/Images/Ganapati.png'
import Rajarajan from '../assets/Images/Rajarajan.png'
import Shamik from '../assets/Images/Shamik.jpg'
import shlomi from '../assets/Images/shlomi.jpg'
import Sumitra from '../assets/Images/Sumitra.png'

const SpeakerCard = ({ 
  image, 
  name, 
  title, 
  organization, 
  topic 
}) => (
  <div className="bg-slate-100 rounded-xl shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
    <div className="aspect-square overflow-hidden">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6 bg-gradient-to-br from-slate-50 to-slate-100">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 font-medium mb-1">{title}</p>
      <p className="text-gray-600 mb-3 text-sm">{organization}</p>
      {topic && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm font-medium text-gray-900">Topic:</p>
          <p className="text-sm text-gray-600 italic">{topic}</p>
        </div>
      )}
    </div>
  </div>
);

const SectionTitle = ({ title }) => (
  <div className="w-full text-center mb-12">
    <h2 className="text-4xl font-bold text-blue-800 mb-3">{title}</h2>
    <div className="w-24 h-1 bg-blue-700/50 mx-auto rounded-full"></div>
  </div>
);

function Speakers() {
  const keynotes = [
    {
      image: shlomi,
      name: "Dr. Shlomi Dolev",
      title: "Professor",
      organization: "Ben-Gurion University of the Negev, Israel",
      topic: "Post Quantum Security"
    },
    {
      image: Balaji,
      name: "Dr. Balaji Palanisamy",
      title: "Director of Graduate Studies",
      organization: "University of Pittsburgh, USA",
      topic: "Protecting Data Privacy in an Eve-growing Data-rich World"
    },
    {
      image: Shamik,
      name: "Dr. Shamik Sural",
      title: "Professor",
      organization: "IIT Kharagpur",
      topic: "Advanced Security Paradigms"
    }
  ];

  const invited = [
    {
      image: Sumitra,
      name: "Dr. S. Sumitra",
      title: "Professor",
      organization: "Indian Institute of Space Science and Technology, Thiruvananthapuram",
      topic: "Machine Learning for Graph Analysis"
    }
  ];

  const industry = [
    {
      image: Rajarajan,
      name: "Dr. Rajarajan Sivaraj",
      title: "Group Director, RAN AI Systems Architecture",
      organization: "Mavenir, USA",
      topic: "Scalable and Practical AI for Generating Intelligence and Improving Performance in Large-scale Telecommunication Deployments"
    },
    {
      image: Athirai,
      name: "Athirai A.",
      title: "Principal Machine Learning Engineer",
      organization: "Applied Science, Walmart, USA",
      topic: "Gen AI: Above and Beyond"
    },
    {
      image: Ganapati,
      name: "Mr. Ganapathi Subramaniam",
      title: "Information Security Director, Europe and ISMEA",
      organization: "UPS Limited UK",
      topic: "AI Ethics: A Holy Grail or a Poisoned Chalice? Navigating Bias, Autonomy, and Accountability"
    }
  ];

  return (
    <div className="min-h-screen w-screen bg-gradient-to-r from-slate-200 via-white to-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold text-black mt-4 mb-4">
            Distinguished Speakers
          </h1>
          <p className="text-xl text-gray-700">
            Join us in welcoming world-renowned experts in technology and innovation
          </p>
        </div>

        <div className="space-y-24">
          <section>
            <SectionTitle title="Keynote Speakers" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {keynotes.map((speaker, idx) => (
                <SpeakerCard key={idx} {...speaker} />
              ))}
            </div>
          </section>

          <section>
            <SectionTitle title="Invited Speakers" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {invited.map((speaker, idx) => (
                <SpeakerCard key={idx} {...speaker} />
              ))}
            </div>
          </section>

          <section>
            <SectionTitle title="Industry Leaders" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industry.map((speaker, idx) => (
                <SpeakerCard key={idx} {...speaker} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Speakers;