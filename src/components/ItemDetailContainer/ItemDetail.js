import React, { useState, useEffect } from 'react'
import { Apis } from '../Utils/Apis';
import CardDetail from '../Card/CardDetail';
import Loader from "react-loader-spinner";


const ItemDetail = () => {

    const endpoint = "/products/1";
    const [Item, setItem] = useState ([])
    const [loading, setLoading] = useState(true)

    useEffect (() => {

        Apis.get(endpoint)
             .then(response => {
                console.log(response)
                setItem(response)
             })

             setTimeout(() => {
                 setLoading(false)
             }, 2000)

    }, [endpoint])

    return (
        <div>

{
                loading
                ?
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
                />
                :
                < CardDetail key={Item.id} Item={Item} />


            }

            
        </div>
    )
}

export default ItemDetail
