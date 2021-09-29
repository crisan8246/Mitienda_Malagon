import React from 'react'

const Saludo = "Bienvenido"
const Nombre = prompt("ingresa tu nombre");

function ItemListContainer() {


    return (
        <div>
            <h2> {Saludo} {Nombre}</h2>
        </div>
    )
}

export default ItemListContainer


