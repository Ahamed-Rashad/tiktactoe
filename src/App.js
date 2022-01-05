import React from "react";
import './App.css';
import Tiktacktoe, { Game } from "./component/Tiktacktoe";


function App() {
  return (
    <div>
    <center><h1>TIK TAC TOE</h1></center>
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
