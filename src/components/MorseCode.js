// import useState from React >>
import React, { useState } from "react";

function MorseCode({ convertedInput }) {
  console.log(convertedInput);
  return <div className="result">{convertedInput}</div>;
}

export default MorseCode;
