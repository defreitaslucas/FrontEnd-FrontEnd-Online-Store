import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import QuerySearch from './pages/QuerySearch';
/* import * as api from './services/api'; */

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ QuerySearch } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
