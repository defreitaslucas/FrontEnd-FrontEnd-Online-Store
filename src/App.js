import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import ShoppingCart from './pages/ShoppingCart';
import Main from './pages/Main';
import Details from './pages/Details';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/cart" component={ ShoppingCart } />
        <Route path="/details/:id" render={ (props) => <Details { ...props } /> } />
        <Route exact path="/" component={ Main } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
