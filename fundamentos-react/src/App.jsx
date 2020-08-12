import "./App.css";

import React from "react";

import ListaAlunos from "./components/repeticao/ListaAlunos";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Familia from "./components/basicos/Familia";
import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import NumeroAleatorio from "./components/basicos/NumeroAleatorio";

export default (props) => {
  return (
    <div className="App">
      <h1>Fundamentos React (Arrow)</h1>

      <div className="Cards">
        <Card titulo="Lista de repetição" color="#080">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="Componente com filhos" color="#080">
          <Familia>
            <FamiliaMembro nome="Pedro"></FamiliaMembro>
            <FamiliaMembro nome="Tiago"></FamiliaMembro>
            <FamiliaMembro nome="Diego"></FamiliaMembro>
          </Familia>
        </Card>

        <Card titulo="Numero aleatorio" color="#080">
          <NumeroAleatorio min={10} max={100}></NumeroAleatorio>
        </Card>

        <Card titulo="Fragmento">
          <Fragmento></Fragmento>
        </Card>

        <Card titulo="Segundo componente">
          <ComParametro
            titulo="Segundo componente"
            subtitulo="Muito legal!!!"
          ></ComParametro>
        </Card>

        <Card titulo="Primeiro componente">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
};
