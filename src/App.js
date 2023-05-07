import "./App.css";
import Pokedex from "./Pokedex";
import items from "./items";

function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
      <Pokedex items={items} />
    </div>
  );
}

export default App;
