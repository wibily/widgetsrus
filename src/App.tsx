import React from "react";
import logo from "./logo.png";
import "papercss/dist/paper.css";
import Input from "./features/input/Input";
import Profit from "./features/profit/Profit";

function App() {
  return (
    <div className="App paper">
      <header className="App-header row border">
        <div className="col-3 col">
          <img
            className="no-responsive no-border"
            src={logo}
            alt="Money bag logo"
          />
        </div>
        <h1 className="col-9 col">PROFIT!!!!!!</h1>
      </header>
      <main className="container">
        <Input />
        <Profit />
      </main>
    </div>
  );
}

export default App;
