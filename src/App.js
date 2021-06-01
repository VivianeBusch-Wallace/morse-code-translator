// importing user input >>
import UserText from "./javascript components/UserInput";
// importing converted morse code >>
import MorseCode from "./javascript components/MorseCode";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a Morse Code Converter</h1>
      </header>
      {/* user input text to convert >> */}
      <UserText />
      {/* converted text to be displayed >> */}
      <MorseCode />
    </div>
  );
}

export default App;
