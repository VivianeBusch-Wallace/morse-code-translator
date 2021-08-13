// import React and useState from React >>
import React, { useState } from "react";
// importing user input >>
import UserText from "./components/UserInput";
// importing converted morse code >>
import MorseCode from "./components/MorseCode";

function App() {
  // initialize useState with userInput >>
  const [userInput, setUserInput] = useState("");
  // initialize useState with converted text >>
  const [codedInput, setCodedInput] = useState("");

  const changeUserInputParent = (value) => {
    setUserInput(value);
  };
  const convertedInput = (value) => {
    setCodedInput(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Morse Code Converter</h1>
      </header>
      <div>
        <h4>The alphabet is based on the international morse code</h4>
        <h3>Rules</h3>
        <p>
          Characters allowed: standard English alphabet, number digits, special
          characters: @ $ &, punctuation: . , ; : ? ! () / - = + ' [space]
        </p>
        <p>
          Type in the text that you would like to convert into the text box
          below and then click "Convert".
        </p>
        <p>You can empty the textbox by clicking on "Clear Text".</p>
        <p>Spaces are converted to '/' in the morse code.</p>
      </div>
      <section className="converter-container">
        {/* user input text to convert >> */}
        <UserText
          userInput={userInput}
          changeUserInputChild={changeUserInputParent}
          convertedInput={convertedInput}
        />
        {/* converted text to be displayed >> */}
        <MorseCode convertedInput={codedInput} />
      </section>
    </div>
  );
}

export default App;

// Notes for myself >>
// we want to have the hook useState on userInput and on the converted input as they are changing
// we want the hooks to be in App because it is the parent
// we send the change of the states from child to parent by changing the value
