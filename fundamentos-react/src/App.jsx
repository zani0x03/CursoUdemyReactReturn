import React from 'react'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'


export default (props) => {
    return (
        <div id="app">
            <h1>Fundamentos React (Arrow)</h1>

            <Fragmento></Fragmento>

            <ComParametro titulo="Segundo componente" subtitulo="Muito legal!!!"></ComParametro>

            <Primeiro></Primeiro>
        </div>
    )
}