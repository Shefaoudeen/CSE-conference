import React from "react";

const CallForPapers = () => {
  return (
    <div className="max-w-7xl mx-auto my-16 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 border-b-4 border-blue-500 pb-3">
        Call for Papers for Conference
      </h1>
      <p className="mt-6 text-lg text-gray-700 text-center mx-auto max-w-3xl leading-relaxed">
         The ICAISDA-2025 invites researchers, academicians, scientists, and industry 
         experts to submit their original research papers, case studies, survey works, 
         and innovative applications in the fields of <b>Artificial Intelligence</b> and 
        <b> Secure Data Analytics</b> for presentation at the conference.
     </p>

      {/* Scope Section */}
      <h2 className="text-2xl font-bold text-blue-700 mt-12 border-b-2 border-blue-500 pb-2">
        Scope
      </h2>
      <p className="mt-4 text-gray-700">
        The scope of the conference tentatively includes, but is not limited to:
      </p>

      {/* Topics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Artificial Intelligence Section */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-blue-600 border-b-2 border-blue-400 pb-2">
            Artificial Intelligence
          </h3>
          <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
            {[
              "Machine Learning and Deep Learning",
              "Large Language Models and Transformers",
              "AI Algorithms and Architectures",
              "Reinforcement Learning and Autonomous Systems",
              "AI for Sustainable Development",
              "Generative, Responsive and Explainable AI",
              "Quantum Algorithms and Quantum Machine Learning",
              "Automated Code Generation and Algorithm Optimization",
              "Information Theory for AI",
              "Statistical Learning Theory in AI",
              "Graphical Models and Probabilistic Inference",
              "Representation Learning and Feature Engineering",
              "Human-machine Interaction and Data Capturing Techniques",
              "AI and Blockchain Technology",
              "AI Model Optimization and Efficiency",
              "Bias and Fairness in AI Models",
              "AI and Quantum Computing",
              "AI and Internet of Things (IoT)",
              "AI-powered Cloud Resource Allocation",
              "AI for Natural Language Processing and Speech Recognition",
              "Computer Vision and Image Processing",
              "Agentic AI and its Impact",
              "AI and Emerging Technologies",
            ].map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>

        {/* Secure Data Analytics Section */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold text-blue-600 border-b-2 border-blue-400 pb-2">
            Secure Data Analytics
          </h3>
          <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
            {[
              "Privacy-preserving Machine Learning and Artificial Intelligence",
              "Encryption Methods for Data Analysis",
              "Applications of Data Analytics in Security Domains",
              "Data Analytics for Security Attacks and Defenses",
              "Secure Social Network Analysis and Mining",
              "Stream Data Analytics for Cyber Security",
              "Privacy in Big Data Management and Analytics",
              "Security Issues in Supply Chain Analytics",
              "Security Issues in Computer Vision and Video Analytics",
              "Industry Applications of Privacy-preserving in Big Data Analytics",
              "Network and Information Security Using Data Analytics",
              "Fraud Detection and Risk Management",
              "Threat Intelligence and Incident Response",
              "Blockchain and Data Security",
              "Privacy, Surveillance and AI Ethics",
              "Secure Software Development",
              "Leveraging AI for Enhanced Cybersecurity",
              "Advances in Data Science and Analytics",
            ].map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CallForPapers;
