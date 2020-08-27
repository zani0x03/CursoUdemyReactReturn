import React from "react";
import {connect} from 'react-redux'
import Card from "./Card";

function Soma(props)  {
  //sem redux
  // const { min, max } = props;

  // return (
  //   <Card title="Soma dos números" blue>
  //     <div>
  //       <span>
  //         <span>Resultado: </span>
  //         <strong>{min + max}</strong>
  //       </span>
  //     </div>
  //   </Card>
  // );
  const {min, max} = props
  return (
    <Card title="Soma dos números" blue>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{max + min}</strong>
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

export default connect(mapStateToProps)(Soma);
