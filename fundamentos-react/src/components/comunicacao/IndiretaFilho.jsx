import React from "react";

export default (props) => {
  return (
    <div>
      Filho
      {/* <button onClick={
          function (e){
              props.quandoClicar('João',54,true)
          }
      }>Fornecer informações</button> */}
      <button onClick={e => props.quandoClicar("João", 54, true)}>
        Fornecer informações
      </button>
    </div>
  );
};
