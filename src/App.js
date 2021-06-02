// import React and useState from React >>
import React, { useState } from "react";
// importing user input >>
import UserText from "./components/UserInput";
// importing converted morse code >>
import MorseCode from "./components/MorseCode";

function App() {
  // initialize useState with userInput >>
  const [userInput, setUserInput] = useState("");
  const [codedInput, setCodedInput] = useState("");

  const changeUserInputApp = (value) => {
    setUserInput(value);
  };
  const convertedInput = (value) => {
    setCodedInput(value);
    console.log(value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a Morse Code Converter</h1>
      </header>
      <div>
        <p>
          Characters allowed: standard English alphabet, number digits, special
          characters: @ $ &, punctuation: . , ; : ? ! () / - = + ' [space]
        </p>
        <p>
          Type in the text that you would like to convert into morse code into
          the text box below and then click "Convert".
        </p>
        <p>You can empty the textbox by clicking on "Clear Text".</p>
        <p>Words are seperated by '/' in the morse code.</p>
      </div>
      <section className="converter-container">
        {/* user input text to convert >> */}
        <UserText
          userInput={userInput}
          changeUserInput={changeUserInputApp}
          codedInput={codedInput}
          convertedInput={convertedInput}
        />
        {/* converted text to be displayed >> */}
        <MorseCode convertedInput={codedInput} />
      </section>
    </div>
  );
}

export default App;
