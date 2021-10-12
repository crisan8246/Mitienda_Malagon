import React, { useState, useEffect } from 'react'
import { Apis } from '../Utils/Apis';
import Carta1 from '../Card/Carta1';
import Loader from "react-loader-spinner";



// import ItemCount from '../ItemCount/ItemCount'



const ItemListContainer = () => {


    const endpoint = '/products';
    const [products, setProducts] = useState ([])
    const [loading, setLoading] = useState(true)

    useEffect (() => {

        Apis.get(endpoint)
             .then(response => {
                console.log(response)
                setProducts(response.data)
             })

             setTimeout(() => {
                 setLoading(false)
             }, 2000)

    }, [endpoint])

   
    return (        

        <div className="row">

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
                products.map(product => < Carta1 key={product.id} product={product} />)


            }

            
            

        </div>

        
            

                

        /* <ItemCount        
           img="https://www.cottonopolis.com.co/wp-content/uploads/2020/09/Portada_tienda_negro-600x752.png"
           stock= {8} */
                                    
        
    )
}

export default ItemListContainer



