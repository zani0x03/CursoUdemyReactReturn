import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Intervalo from "./components/Intervalo";
import Media from "./components/Media";
import Soma from "./components/Soma";
import Sorteio from "./components/Sorteio";

function App() {
  // sem redux
  // const [min, setMin] = useState(1);
  // const [max, setMax] = useState(10);

  // return (
  //   <div className="App">
  //     <h1>Exercício React-Redux (Simples)</h1>
  //     <div className="linha">
  //       <Intervalo min={min} max={max} onMinChanged={setMin} onMaxChanged={setMax}></Intervalo>
  //     </div>
  //     <div className="linha">
  //       <Media min={min} max={max}></Media>
  //       <Soma min={min} max={max}></Soma>
  //       <Sorteio min={min} max={max}></Sorteio>
  //     </div>
  //   </div>
  // );


  return (
    <div className="App">
      <h1>Exercício React-Redux (Simples)</h1>
      <div className="linha">
        <Intervalo></Intervalo>
      </div>
      <div className="linha">
        <Media></Media>
        <Soma></Soma>
        <Sorteio></Sorteio>
      </div>
    </div>
  );


}

export default App;
