import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './pages/home'
import React from "react";

function App() {
  return (
    <div className="h-full App">
      
      <BrowserRouter>
      <header className="App-header">
      </header>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
