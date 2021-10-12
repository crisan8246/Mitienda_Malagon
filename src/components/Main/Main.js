
import React, { useState } from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Navbar from '../Navbar/Navbar'


const Main = ({children}) => {

        

    return (
        <div>
            <Navbar/>
            { children }
            
            

            {/* <ItemCount/> */}
            
        </div>
    )
}

export default Main
