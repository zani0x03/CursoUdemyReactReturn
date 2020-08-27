import React from "react";
import {connect} from 'react-redux'
import Card from "./Card";

function Sorteio (props)  {
  //sem redux
  // const { min, max } = props;
  // const aleatorio = parseInt(Math.random() * (max - min));

  // return (
  //   <Card title="Sorteio de um número" purple>
  //     <div>
  //       <span>
  //         <span>Resultado: </span>
  //         <strong>{aleatorio}</strong>
  //       </span>
  //     </div>
  //   </Card>
  // );
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min));
  return (
    <Card title="Sorteio de um número" purple>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{aleatorio}</strong>
        </span>
      </div>
    </Card>
  );  
};

function mapStateToProps(state){
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  }
}

export default connect(mapStateToProps)(Sorteio);