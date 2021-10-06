import React, { useState } from 'react'

const ItemCount = ({ stock, img}) => {

    console.log(stock)

    const [clicks, setClicks] = useState(0)

    const addClick = () => {

        if (clicks < stock) setClicks(clicks + 1)
    }

    const removeClick = () => {

        if (clicks > 0) setClicks(clicks - 1)

    }


    return (

        <div>

            <h1>buso</h1>
            <img src={img} class="d-block w-25" />
            <div>
                <h3>{clicks}</h3>
                <button onClick={() => addClick()} class="btn btn-primary">Add</button>
                <button onClick={() => removeClick()} class="btn btn-primary">Remove</button>
                <button type="button" class="btn btn-success">Agregar a Carrito</button>
            </div>


        </div>



    )
}

export default ItemCount


