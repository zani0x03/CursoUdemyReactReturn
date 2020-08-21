import React, { Component } from "react";

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

// export default class Contador extends React.Component{

// }

class Contador extends React.Component {
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  // inc() {
  //   this.setState({
  //     numero: this.state.numero + 1,
  //   });
  // }

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  // setPasso = (e) => {
  //   this.setState({
  //     passo: +e.target.value,
  //   })
  // }

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    })
  }

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     numero: this.props.numeroInicial,
  //   };
  // }

  render() {
    return (
      <div>
        <h2>Contador</h2>
        <h3><Display numero={this.state.numero}></Display></h3>
        <PassoForm passo={this.state.passo} setPasso={this.setPasso}></PassoForm>
        <Botoes incrementar={this.inc} decrementar={this.dec}></Botoes>
      </div>
    );
  }
}

export default Contador;
