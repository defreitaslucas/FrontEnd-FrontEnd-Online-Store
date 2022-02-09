import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Main from './pages/Main';
// import * as api from './services/api';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart" component={ ShoppingCart } />
        <Route path="/" component={ Main } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
