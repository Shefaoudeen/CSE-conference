import React from "react";
import CallIntro from "../Components/Call/CallIntro";
import Tracks from "../Components/Call/Tracks";

const CallforPaper = () => {
  return (
    <div
      className="relative w-full min-h-screen bg-call-background bg-cover bg-center bg-fixed"
    >
      
      {/* Content Box */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <CallIntro />
        <Tracks />
      </div>
    </div>
  );
};

export default CallforPaper;
