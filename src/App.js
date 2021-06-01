// importing user input >>
import UserText from "./components/UserInput";
// importing converted morse code >>
import MorseCode from "./components/MorseCode";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>This is a Morse Code Converter</h1>
      </header>
      <div>
        <p>
          Characters allowed: standard English alphabet, digits, punctuation:
          comma, period
        </p>
      </div>
      <section className="converter-container">
        {/* user input text to convert >> */}
        <UserText />
        {/* converted text to be displayed >> */}
        {/* <MorseCode /> */}
      </section>
    </div>
  );
}

export default App;
