import React from 'react'

export const CardDetail = ({item}) => {

    const{ category, description, image, title, price} = item


    return (

        <div class="card" style={{width:"18rem"}}>
            <img src={image} class="card-img-top" alt={title}/>
            <div class ="card-body">
            <h5 class ="card-title">{title}</h5>
            <p class ="card-text">{description}</p>
            <p class ="card-text">{category}</p>
            <p class ="card-text">{price}</p>
            <a class ="btn btn-primary">on click</a>
            </div>
        </div>
    )
   
}

export default CardDetail
