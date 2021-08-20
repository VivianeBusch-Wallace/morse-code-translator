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
      {/* page title >> */}
      <header className="App-header">
        <h1>Morse Code Converter</h1>
      </header>

      {/* morse code image >> */}
      <section className="explanation-img-container">
        <div className="image-container">
          <img
            src={process.env.PUBLIC_URL + "/images/morse-code-unsplash.jpg"}
          />
        </div>

        {/* displayed text >> */}
        <div className="explanation-text-container">
          <h4>The alphabet is based on the international morse code</h4>
          <h3>How to use</h3>
          <p>
            Characters allowed: standard English alphabet, number digits,
            special characters: @ $ &, punctuation: . , ; : ? ! () / - = + '
            [space]
          </p>
          <p>
            Type in the text that you would like to convert into the text box
            below and then click "Convert".
          </p>
          <p>You can empty the textbox by clicking on "Clear Text".</p>
          <p>Spaces are converted to '/' in the morse code.</p>
        </div>
        <div className="table-container">
          <table>
            <tr>
              <th>Aa</th>
              <th>Bb</th>
              <th>Cc</th>
              <th>Dd</th>
              <th>Ee</th>
              <th>Ff</th>
              <th>Gg</th>
              <th>Hh</th>
              <th>Ii</th>
              <th>Jj</th>
              <th>Kk</th>
              <th>Ll</th>
              <th>Mm</th>
              <th>Nn</th>
              <th>Oo</th>
              <th>Pp</th>
              <th>Qq</th>
              <th>Rr</th>
              <th>Ss</th>
              <th>Tt</th>
              <th>Uu</th>
              <th>Vv</th>
              <th>Ww</th>
              <th>Xx</th>
              <th>Yy</th>
              <th>Zz</th>
              <th>0</th>
              <th>1</th>
              <th>2</th>
              <th>3</th>
              <th>4</th>
              <th>5</th>
              <th>6</th>
              <th>7</th>
              <th>8</th>
              <th>9</th>
              <th>.</th>
              <th>,</th>
              <th>;</th>
              <th>:</th>
              <th>?</th>
              <th>!</th>
              <th>(</th>
              <th>)</th>
              <th>/</th>
              <th>-</th>
              <th>@</th>
              <th>=</th>
              <th>+</th>
              <th>$</th>
              <th>0</th>
              <th>' (=apostrophe)</th>
              <th>"</th>
              <th>&</th>
              <th>[empty space]</th>
              <th>4</th>
              <th>5</th>
            </tr>
            <tr>
              <td>.-</td>
            </tr>
          </table>
          <p>
            a: ".-", b: "-...", c: "-.-.", d: "-..", e: ".", f: "..-.", g:
            "--.", h: "....", i: "..", j: ".---", k: "-.-", l: ".-..", m: "--",
            n: "-.", o: "---", p: ".--.", q: "--.-", r: ".-.", s: "...", t: "-",
            u: "..-", v: "...-", w: ".--", x: "-..-", y: "-.--", z: "--..", 0:
            "-----", 1: ".----", 2: "..---", 3: "...--", 4: "....-", 5: ".....",
            6: "-....", 7: "--...", 8: "---..", 9: "----.", ".": "......",
            ",":".-.-.-", ";": "-.-.-.", ":": "---...", "?": "..--..",
            "!":"--..--", "(": "-.--.", ")": "-.--.-", "/": "-..-.", "-":
            "-....-", "@": ".--.-.", "=": "-...-", "+": ".-.-.", $: "...-..-",
            "'":".----.", "&": ".-...", " ": "/",
          </p>
        </div>
      </section>

      <section className="converter-container">
        {/* user input box (text to convert) >> */}
        <UserText
          userInput={userInput}
          changeUserInputChild={changeUserInputParent}
          convertedInput={convertedInput}
        />

        {/* output box (converted text to be displayed) >> */}
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
