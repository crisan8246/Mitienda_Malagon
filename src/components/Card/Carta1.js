import React from 'react'
import { Link } from 'react-router-dom'

const Carta1 = ( {product}) => {

    const{ category, image, title, price, id} = product


    return (

        <div className="card text-center" style={{width:"18rem"}}>
            <img src={image} className="card-img-top" alt={title}/>
            <div className="card-body">
            <h5 className="card-title">{title}</h5>
            {/* <p className ="card-text">{description}</p> */}
            <p className="card-text">{category}</p>
            <p className="card-text">{price}</p>
            <Link to={`/products/${id}`} className="btn btn-primary">Ver detalle</Link>
            </div>
        </div>




    )
}

export default Carta1

