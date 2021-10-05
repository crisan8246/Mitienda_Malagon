import React from 'react'
import './Item.css'

const Item1 = ({img,title,text,setItems1,items1}) => {
    return (
        
            <div>
            <img src= {img} class="tama"/>      
            <h3>{title}</h3>
            <p>{text}</p>
            <button onClick={()=>setItems1(items1+1)} >Add</button>
            </div>
        
    )
}

export default Item1

