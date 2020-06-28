import React from 'react'

export default (props) => {
    // const min = props.Min;
    // const max = props.Max;

    const {min, max} = props;

    const aleatorio = parseInt(Math.random() * (max - min)) + min;
    return (
        <div>
            <h2>Min: {min}</h2>
            <h2>Max: {max}</h2>
            <p>{aleatorio}</p>
        </div>
    )
}