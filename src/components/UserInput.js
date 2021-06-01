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

    // string to lower case, to array

    // send conversion into props?
  }

  return (
    <form className="input-form" OnSubmit={OnSubmit}>
      <input
        type="text"
        className="input-text"
        value="{userInput}"
        onChange={inputChanges}
      ></input>
      <input type="submit" value="Convert" />
    </form>
  );
}

export default UserText;
