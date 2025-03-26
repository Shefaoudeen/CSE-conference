import React from "react";
import cs1 from "../../assets/Images/cs6.jpg";

// Title & Paragraph Data
const content = [
  {
    title: "GUIDELINES FOR AUTHORS",
    paragraph: `Prospective authors are encouraged to submit research papers not exceeding 10 pages in single line space, including all figures, tables, and references. Further, details on formatting will be updated once the journals are finalized. Only original papers that have not been published or submitted for publication elsewhere will be considered. The authors must clearly outline the research area, main results, and contributions in the research papers. Every submission must be accompanied by a plagiarism report, with a similarity index not exceeding 10%.
    In order to ensure the quality of the accepted papers in ICAISDA-2025, the ICAISDA conference programme committee will follow a rigorous review process to select the papers for acceptance. Authors may submit their papers either to the main conference or one of the co-located workshops. Papers not accepted for main conference will be considered for the workshop, if the contributions of the papers suitable for the workshop.  The organizers have rights to consider the papers submitted for conference to workshops and vice versa and the same will be intimated to the authors for approval. The details regarding the publication of papers submitted to the workshop will be updated once the publisher / Journals are finalized.`
  },
  {
    title: "Registration Fee and Publications Article Publication Charges",
    paragraph: `Each submission may include one main author and up to two co-authors. Only papers presented at the conference or co-located workshops will be considered for publication.
    Upon acceptance, authors must pay the Article Processing Charges (APC). Further details regarding payment and publisher detail will be communicated via email and will be updated in the website.
    Authors must select a publication option as part of the review process, which is required for forwarding the paper to the journal for further evaluation and publication.
    The details regarding various options for publications will be updated soon.`
    
  },
  {
    title: "Best Paper Award",
    paragraph:[
               "A Best paper award and a Best Student paper award will be considered .",
               "In order to qualify for a Best Student paper award, the first author of the paper should be a full- time student  or research scholar and more than 50% of the contributions of the paper should be from the identified student author.",
               "More details about the Award will be updated in the conference website."
    ]
  }
];

const Guidelines = () => {
  return (
    <div
      className="w-screen min-h-screen flex justify-center items-center bg-cover bg-center p-10"
      style={{ backgroundImage: `url(${cs1})` }} // Background Image
    >
      <div className="w-full mt-40 max-w-4xl bg-black/70 p-10 rounded-lg shadow-lg text-white text-center">
        
        {/* Map through all content */}
        {content.map((section, index) => (
          <div key={index} className="mb-10">
            <h1 className="text-3xl font-bold mb-4">{section.title}</h1>
            <p className="text-lg leading-relaxed text-justify">{section.paragraph}</p>
          </div>
        ))}
        
      </div>
    </div>
  );
};

export default Guidelines;
