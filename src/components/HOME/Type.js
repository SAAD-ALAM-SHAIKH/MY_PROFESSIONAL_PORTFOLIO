import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "WEB DEVELOPER",
          "IT MANAGEMENT SUPPORT",
          "MOBILE APPLICATION DEVELOPER",
          "DATA VISULIZATION",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
