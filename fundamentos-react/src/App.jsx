import React from 'react'

import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import Fragmento from './components/basicos/Fragmento'
import NumeroAleatorio from './components/basicos/NumeroAleatorio'


export default (props) => {
    return (
        <div id="app">
            <h1>Fundamentos React (Arrow)</h1>

            <Card titulo="Numero aleatorio">
                <NumeroAleatorio min={10} max={100}></NumeroAleatorio>
            </Card>

            <Card titulo="Fragmento">
                <Fragmento></Fragmento>
            </Card>

            <Card titulo="Segundo componente">
                <ComParametro titulo="Segundo componente" subtitulo="Muito legal!!!"></ComParametro>
            </Card>

            <Card titulo="Primeiro componente">
                <Primeiro></Primeiro>
            </Card>




        </div>
    )
}