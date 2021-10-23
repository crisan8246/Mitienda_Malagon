
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Main = () => {

        

    return (
        <div class="text-center fs-1 ">
            <p>
                Aqui encontraras lo que necesites
            </p>
            <Link to={"/products"} className="btn btn-primary">valida nuestros product</Link>

            
            {/* <Navbar/>
            { children } */}
            {/* <ItemCount/> */}
            
        </div>
    )
}

export default Main
