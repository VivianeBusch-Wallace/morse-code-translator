// import useState from React >>
import { useState } from "react";

function UserText() {
  // initialize useState with userInput
  const [userInput, setUserInput] = useState("");

  function OnSubmit(e) {
    // prevent default of form >>
    e.preventDefault();
    // string to lower case, to array

    // send conversion into props?
  }

  return (
    <form className="input-form" OnSubmit="OnSubmit">
      <input type="text" className="input-text" value="{userInput}"></input>
      <input type="submit" value="Convert" />
    </form>
  );
}

export default UserText;
