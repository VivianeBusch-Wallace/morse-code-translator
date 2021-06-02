// import React and useState from React >>
import React from "react";

function UserText({ userInput, changeUserInput, codedInput, convertedInput }) {
  // morse alphabet table >>
  const internationalMorseAlphabet = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    ".": "......",
    ",": ".-.-.-",
    ";": "-.-.-.",
    ":": "---...",
    "?": "..--..",
    "!": "--..--",
    "(": "-.--.",
    ")": "-.--.-",
    "/": "-..-.",
    "-": "-....-",
    "@": ".--.-.",
    "=": "-...-",
    "+": ".-.-.",
    $: "...-..-",
    "'": ".----.",
    "&": ".-...",
    " ": "/",
  };
  // attach userInput to useState and convert it to lower case >>
  function inputChanges(e) {
    changeUserInput(e.target.value.toLowerCase());
  }

  // what should happen on submit (clicking 'Convert') >>
  function OnSubmit(e) {
    // prevent default of form >>
    e.preventDefault();

    // convert text into code using the morse code object >>
    let codedString = "";
    for (let letter of userInput) {
      codedString += " " + internationalMorseAlphabet[letter];
    }
    // send converted text to parent as an argument in our function >>
    convertedInput(codedString);
  }
  // reset userInput to blank on click of button 'Clear Text' >>
  function clearInput() {
    changeUserInput("");
  }

  return (
    <form className="input-form" onSubmit={OnSubmit}>
      <textarea
        type="text"
        className="textarea"
        value={userInput}
        onChange={inputChanges}
      ></textarea>
      <input type="submit" value="Convert" />
      <button onClick={clearInput}>Clear Text</button>
    </form>
  );
}

export default UserText;

// string to lower case, to array
// loop through table, find match with input array
// put value of key into new array, join(" ")
// send conversion result into props?

// check if has paragraphs, make user write it as a symbol?
// put paragraphs into element with ASCII?
// OR only check line by line of userinput...?
