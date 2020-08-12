import React from "react";
// import FamiliaMembro from "./FamiliaMembro";

export default (props) => {
  return (
    <div>
      {/* <FamiliaMembro nome="Pedro"></FamiliaMembro>
      <FamiliaMembro nome="Tiago"></FamiliaMembro>
      <FamiliaMembro nome="Diego"></FamiliaMembro> */}

      {/* {React.cloneElement(props.children)}

      {props.children} */}

      {/* {
        React.Children.map(props.children, (child) => {
          return React.cloneElement(child, props)
        })
      } */}
      {/* 
      {  
        props.children.map((child) => {
          return React.cloneElement(child, props)
        })
      } */}

      {props.children.map((child, i) => {
        return React.cloneElement(child, { ...props, Key: i });
      })}
    </div>
  );
};
