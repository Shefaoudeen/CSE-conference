import React from "react";
import icdnLogo from "../../assets/Images/logos/mainLogo.png";

const Intro = () => {
  return (
    <div className="w-screen relative md:min-h-screen flex justify-center items-center pt-10 md:pt-[35vh]">
      <div className="w-[90%] md:w-[75%] text-justify text-lg tracking-wide leading-relaxed flex flex-col gap-6">
        <img
          src={icdnLogo}
          alt="logo"
          className="w-[500px] absolute -left-32 -z-10 opacity-20"
        />

        <h1 className="text-3xl font-bold text-blue-800">
          The ICAISDA - 2025
        </h1>
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The First International Conference 
          on Artificial Intelligence and Secure Data Analytics (ICAISDA-2025) 
          provides a global platform for researchers, academics, scientists, 
          industry professionals, and students to discuss advancements in 
          Artificial Intelligence and Secure Data Analytics. AI replicates 
          human intelligence, driving innovation and addressing global challenges, 
          while security in Data Analytics ensures data confidentiality, integrity, 
          and availability through encryption and privacy-preserving techniques, 
          essential for sectors like healthcare, finance, and government.{" "}
        </p>
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;The integration of Artificial Intelligence
           and Secure Data Analytics is key to advancing technology while safeguarding privacy, 
           security, and efficiency in the digital age, protecting digital ecosystems and countering 
           cyber threats. ICAISDA-2025 fosters collaboration among global academic institutions, 
           scientific organizations, and industry leaders, offering valuable networking and research 
           opportunities. It encourages presentations, sharing best practices, and proposing actionable 
           strategies to leverage Artificial Intelligence and Secure Data Analytics in addressing evolving 
           technological demands. The conference is planned to be held in a hybrid format; however, 
           the organizers strongly encourage participants to attend in person whenever possible. 
        </p>
      </div>
    </div>
  );
};

export default Intro;
