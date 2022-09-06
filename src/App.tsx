import React from "react";
import "./App.css";

// ! Change the following line to load up another playground.
import CurrentPlayground from "./components/MultiUser";

function App() {
  return (
    <div className="App">
      <h4>
        <b>Assembless</b> Hooks Playground
      </h4>

      <CurrentPlayground />
    </div>
  );
}

export default App;
