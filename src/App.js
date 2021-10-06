import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
     <Navbar />
     <ItemListContainer />
    </div>
  );
}

export default App;
