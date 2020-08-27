import React from "react";
import {connect} from 'react-redux'

import Card from "./Card";

function Media(props) {
  //sem redux
  // const min = props.min;
  // const max = props.max;

  // return (
  //   <Card title="Média dos números" green>
  //     <div>
  //       <span>
  //         <span>Resultado: </span>
  //         <strong>{(max + min) / 2}</strong>
  //       </span>
  //     </div>
  //   </Card>
  // );

  const {min, max} = props
  return (
    <Card title="Média dos números" green>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{(min + max) / 2}</strong>
        </span>
      </div>
    </Card>
  );
}

function mapStateToProps(state){
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  }
}

export default connect(mapStateToProps)(Media);
