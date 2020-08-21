import "./App.css";

import React from "react";

import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
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
        <Card titulo="Contador" color="#080">
          <Contador numeroInicial={10}></Contador>
        </Card>

        <Card titulo="Componente controlado" color="#080">
          <Input></Input>
        </Card>

        <Card titulo="Comunicacao indireta!" color="#080">
          <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo="Comunicacao direta!" color="#080">
          <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="Par ou Impar" color="#080">
          <ParOuImpar numero="03"></ParOuImpar>
          <UsuarioInfo usuario={{ nome: "Fernando" }}></UsuarioInfo>
          <UsuarioInfo usuario={{ email: "ztiago@gmail.com" }}></UsuarioInfo>
        </Card>

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
