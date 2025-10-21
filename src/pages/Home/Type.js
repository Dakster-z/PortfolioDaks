import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "AI Integration Specialist",
          "Full-Stack Developer",
          "Business Automation Expert",
          "OpenAI API Developer",
          "Intelligent Web App Builder",
          "AI-Powered Solutions Creator",
          "Modern Tech Innovator",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
