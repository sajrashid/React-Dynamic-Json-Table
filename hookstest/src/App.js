import React, {  createContext  } from "react";
import './App.css';
import {BrowserRouter,  Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Examples from './pages/examples'
import TopMenu from './components/menu/topMenu'
import Simple from "./pages/simple";

function App() {
  const [select, setSelect] = React.useState()
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
       
        </Switch>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
