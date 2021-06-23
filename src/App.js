import React from "react";
import './App.css';
import {BrowserRouter,  Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Examples from './pages/examples'
import TopMenu from './pages/menu/topMenu'
import Simple from "./pages/simple";
import Advanced from "./pages/advanced";
function App() {
  return (
    <div className="h-full App">
      
      <BrowserRouter>
      <header className="App-header">
      <TopMenu  />
      </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/examples' component={Examples} />
          <Route path='/simple' component={Simple} />
          <Route path='/advanced' component={Advanced} />
       
        </Switch>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
