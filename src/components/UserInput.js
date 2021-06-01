// import useState

function UserText() {
  function OnSubmit(e) {
    // prevent default of form >>
    e.preventDefault();
    // string to array
    // switch case for morse code conversion?
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
