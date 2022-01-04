import React from "react";
import './App.css';
import Tiktacktoe, { Game } from "./component/Tiktacktoe";


function App() {
  return (
    <div>
    <h1>HI</h1>
    <div className="App">
      <center>
      <Tiktacktoe/>
      <Game/>
      </center>
    </div>
    </div>
  );
}

export default App;
