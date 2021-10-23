import React, { useState, useEffect } from 'react'
import { Apis } from '../Utils/Apis';
import CardDetail from '../Card/CardDetail';
import Loader from "react-loader-spinner";
import { useParams } from 'react-router-dom';


const ItemDetail = () => {

    const { id } = useParams ();
    const endpoint = `/products/${id}`;
    const [item, setItem] = useState ([])
    const [loading, setLoading] = useState(true)

    useEffect (() => {

        
        Apis.get(endpoint)
             .then(response => {
                console.log(response)
                setItem(response.data)
             })

             setTimeout(() => {
                 setLoading(false)
             }, 2000)

    }, [endpoint])

    return (
        <div className="d-flex justify-content-center">

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
                < CardDetail key={item.id} item={item} />


            }

            
        </div>
    )
}

export default ItemDetail
