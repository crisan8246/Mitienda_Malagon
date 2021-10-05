import React from 'react'
import Item1 from '../Item/Item1'


const ItemListContainer = ({setItems1,items1}) => {
    return (
        <div>
            <Item1 
            title="buso" 
            text="es de la mejor calidad"
            img="https://www.cottonopolis.com.co/wp-content/uploads/2020/09/Portada_tienda_negro-600x752.png"
            setItems1={setItems1}
            items1={items1}
            />
                       
        </div>
    )
}

export default ItemListContainer



