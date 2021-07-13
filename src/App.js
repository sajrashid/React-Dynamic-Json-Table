import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Advanced from "./pages/advanced";
import Home from './pages/home'
import React from "react";
import TopMenu from './pages/menu/topMenu'

function App() {
  return (
    <div className="h-full App">
      
      <BrowserRouter>
      <header className="App-header">
      <TopMenu  />
      </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/advanced' component={Advanced} />
        </Switch>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
