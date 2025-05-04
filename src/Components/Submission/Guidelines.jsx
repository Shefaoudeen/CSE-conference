import React from "react";
import { ScrollText, Award, CreditCard } from "lucide-react";

// Title & Paragraph Data
const content = [
  {
    title: "GUIDELINES FOR AUTHORS",
    icon: <ScrollText className="w-10 h-10" />,
    paragraph: ["Prospective authors are encouraged to submit research papers not exceeding 10 pages in single line spacing, including all figures, tables, and references.",
               "Further details on formatting will be provided once the publishers/journals are finalized.", 
               "Only original papers that have not been published or submitted for publication elsewhere will be considered.", 
               "Every submission must be accompanied by a plagiarism report, with a similarity index not exceeding 10%.",
               "The ICAISDA will ensure quality through a rigorous review process.",
               "Submissions can be made to the main conference or co-located workshops.",
               "Papers not accepted for the main conference will be considered for the workshop if the contributions of the papers are suitable for the workshop.",
               "The organizers may transfer papers between tracks with the consent of the authors."
    ]
  },
  {
    title: "Registration Fee and Article Publication Charges",
    icon: <CreditCard className="w-10 h-10" />,
    paragraph:`Each submission may have one main author and up to three co-authors. Only papers that are registered and presented at the main conference or co-located workshops will be considered for publication. The organizers are currently in negotiations with leading publishers of conference proceedings and journals. Once these negotiations are finalized, authors will be required to pay the Registration Fee and Article Processing Charges (APC). Updates will be posted on the website and communicated via email.`
   },
  {
    title: "Best Paper Award",
    icon: <Award className="w-10  h-10" />,
    paragraph: [
      "The Best Paper Award will be awarded.",
      "More details about the award will be updated on the conference website."
    ]
  }
];

const Guidelines = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-200 px-3 md:px-6">
      
      {/* FULLY CENTERED CONTENT CONTAINER */}
      <div className="w-full mt-40 max-w-20xl bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 mb-8 p-6 md:p-16 rounded-2xl shadow-2xl text-white text-justify flex flex-col items-center">

        
        <h1 className="text-3xl text-center  md:text-5xl font-bold text-white mb-5 md:mb-10">
          Conference Guidelines
        </h1>
        
        {content.map((section, index) => (
          <div 
            key={index} 
            className="w-full mb-8 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-4 md:p-8 text-justify"
          >
            <div className="flex flex-col items-center gap-4 mb-6">
              <div className="p-4 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 text-purple-600">
                {section.icon}
              </div>
              <h2 className="text-xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                {section.title}
              </h2>
            </div>
              
            {Array.isArray(section.paragraph) ? (
              <ul className="space-y-4 text-gray-700 md:text-lg list-disc px-5">
                {section.paragraph.map((point, idx) => (
                  <li key={idx} className="leading-relaxed">
                    {point}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-lg leading-relaxed text-gray-700 whitespace-pre-line">
                {section.paragraph}
              </p>
            )}
          </div>
        ))}
        
        <div className="text-justify mt-6 text-white/80 text-dt">
          © 2025 ICAISDA Conference. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Guidelines;
