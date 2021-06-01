// import useState from React >>
import { useState } from "react";

function UserText() {
  // initialize useState with userInput >>
  const [userInput, setUserInput] = useState("");
  function inputChanges(e) {
    setUserInput(e.target.value);
  }

  // what should happen on submit >>
  function OnSubmit(e) {
    // prevent default of form >>
    e.preventDefault();

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
    };

    // string to lower case, to array
    // loop through table, find match with input array
    // put value of key into new array, join(" ")
    // send conversion result into props?

    // check if has paragraphs, make user write it as a symbol?
    // put paragraphs into element with ASCII?
    // OR only check line by line of userinput...?

    // reset userInput to blank >>
    setUserInput("");
  }

  return (
    <form className="input-form" onSubmit={OnSubmit}>
      <input
        type="text"
        className="input-text"
        value={userInput}
        onChange={inputChanges}
      ></input>
      <input type="submit" value="Convert" />
    </form>
  );
}

export default UserText;
