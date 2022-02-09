import React from 'react';
import Search from './pages/Search';
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';

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
