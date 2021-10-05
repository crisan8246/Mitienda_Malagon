
import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import Navbar from '../Navbar/Navbar'

const Main = () => {

    const [items1, setItems1] = useState(0);


    return (
        <div>
            <Navbar items1={items1}/>
            <ItemListContainer  items1={items1} setItems1={setItems1}/>
            
        </div>
    )
}

export default Main
