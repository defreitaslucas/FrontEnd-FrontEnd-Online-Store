import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Route, Switch } from 'react-router-dom';
import Main from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={ Main } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
