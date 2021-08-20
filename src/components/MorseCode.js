// import React from React >>
import React from "react";

function MorseCode({ convertedInput }) {
  console.log(convertedInput); // << shows only on convert because rendering
  return <div className="result">{convertedInput}</div>;
}

export default MorseCode;
