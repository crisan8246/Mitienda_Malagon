import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="App">

     <Main/>      
     <ItemListContainer/>
    
     
    </div>
  );
}

export default App;
