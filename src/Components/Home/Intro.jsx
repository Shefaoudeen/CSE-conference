import React from "react";
import icdnLogo from "../../assets/Images/logos/mainLogo.png";

const Intro = () => {
  return (
    <div className="w-screen relative min-h-screen flex justify-center items-center pt-[35vh]">
      <div className="w-[75%] text-justify text-lg tracking-wide leading-relaxed flex flex-col gap-6">
        <img
          src={icdnLogo}
          alt="logo"
          className="w-[500px] absolute -left-32 -z-10 opacity-20"
        />

        <h1 className="text-3xl font-bold text-blue-800">
          The ICAISCDS - 2025
        </h1>
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The International Conference
          on Applications of Artificial Intelligence in Secured Computing, and
          Data Science (ICAISCDS-2025) is a premier global event that serves as
          a platform to globally connect research scholars, academicians,
          scientists, industry professionals, and students to share insights,
          innovations, and recent advancements in the fields of Artificial
          Intelligence (AI), Secured Computing (SC) and Data Science (DS).{" "}
        </p>
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Artificial Intelligence
          plays a critical role in secured computing and data science by
          enhancing security measures and data analysis capabilities. In secured
          computing, AI is used for anomaly detection, intrusion detection, and
          strengthening encryption methods to safeguard systems against cyber
          threats. In data science, AI enables the processing and analysis of
          large datasets through advanced machine learning models, improving
          predictive analytics, automation, and decision-making. Furthermore, AI
          can help protect privacy by applying techniques like differential
          privacy to ensure data is handled securely while still enabling
          valuable insights. Together, AI ensures both the protection of data
          and the effective extraction of knowledge.
        </p>
        <p>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The conference promotes
          collaboration with national and international higher academic
          institutions and scientific organizations, offering valuable
          networking opportunities and fostering research collaborations and
          sharing recent advancements in AI, SC and DS. By amalgamation of
          scholars, academicians, scientists, and industry leaders,
          ICAISCDS-2025 facilitates discussions on ongoing research in various
          fields of AI, SC and DS while strengthening ties between academia and
          industry at national and global level. Participants engage with global
          experts, gain insights into cutting-edge scientific and technological
          advancements, and explore future collaborations. Designed to stimulate
          and exchange ideas, the conference drives innovation and research in
          engineering and technology.
        </p>
      </div>
    </div>
  );
};

export default Intro;
