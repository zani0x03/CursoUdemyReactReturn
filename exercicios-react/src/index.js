
//com jsx
// import React from 'react'
// import ReactDOM from 'react-dom'

// const elemento = document.getElementById('root')

// ReactDOM.render(
//     <ul>
//         <li>3) Pedro</li>
//         <li>4) Gabi</li>
//     </ul>
    
//     , elemento
// )


//sem jsx
// const lista = document.createElement('ul')

// let item = document.createElement('li')
// let texto = document.createTextNode('1) Pedro')
// item.appendChild(texto)
// lista.appendChild(item)

// let item2 = document.createElement('li')
// let texto2 = document.createTextNode('2) Gabi')
// item2.appendChild(texto2)
// lista.appendChild(item2)

// const elemento = document.getElementById('root')
// elemento.appendChild(lista)


import React from 'react'
import ReactDOM from 'react-dom'
import PrimeiroComponente from './Componentes/PrimeiroComponente'

const elemento = document.getElementById('root')

ReactDOM.render(<div>
    <PrimeiroComponente></PrimeiroComponente>
</div>
    , elemento)