import logo from "./logo.svg";
import "./App.css";
import UnderComChange from "./components/UnderComChange";
import UpComChange from "./components/UpComChange";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UnderComChange />
        <UpComChange />
      </header>
    </div>
  );
}

export default App;
