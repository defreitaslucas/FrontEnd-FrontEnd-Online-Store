import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Search from './pages/Search';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Search } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
