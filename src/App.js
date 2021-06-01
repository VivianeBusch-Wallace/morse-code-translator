// import useState from React >>
import React, { useState } from "react";
// importing user input >>
import UserText from "./components/UserInput";
// importing converted morse code >>
import MorseCode from "./components/MorseCode";

function App() {
  // initialize useState with userInput >>
  const [userInput, setUserInput] = useState("");
  const [codedInput, setCodedInput] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a Morse Code Converter</h1>
      </header>
      <div>
        <p>
          Characters allowed: standard English alphabet, digits, punctuation: .
          , ; : ? ! etc.
        </p>
      </div>
      <section className="converter-container">
        {/* user input text to convert >> */}
        <UserText
          userInput={userInput}
          setUserInput={setUserInput}
          codedInput={codedInput}
          setCodedInput={setCodedInput}
        />
        {/* converted text to be displayed >> */}
        <MorseCode />
      </section>
    </div>
  );
}

export default App;
