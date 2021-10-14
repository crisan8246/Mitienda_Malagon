import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Main from './components/Main/Main';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/products">
          <ItemListContainer />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
