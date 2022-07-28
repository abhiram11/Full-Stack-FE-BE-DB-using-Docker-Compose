import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Abhi's Frontend</p>
        <a
          className="App-link"
          href="https://abhiramsatpute.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Portfolio
        </a>
      </header>
    </div>
  );
}

export default App;
