// import React from React >>
import React from "react";
import UserText from "./UserInput";

function MorseCode({ convertedInput }) {
  console.log(convertedInput); // << shows only on convert because rendering
  return (
    <div className="wrapper-morse-code">
      <div className="result">{convertedInput}</div>
    </div>
  );
}

export default MorseCode;
