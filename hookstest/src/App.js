import React, {  createContext  } from "react";
import './App.css';
import {BrowserRouter,  Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import Examples from './pages/examples'
import TopMenu from './components/menu/topMenu'
import theme from "./theme"
import { Select } from "./components/select"

export const ThemeContext = createContext(theme)
console.log(theme)
function App() {
  const [select, setSelect] = React.useState()
  return (
    <div className="h-full App">
      
      <BrowserRouter>
      <header className="App-header">
      <TopMenu  />
      <ThemeContext.Provider value={theme}>
      <Select
        id="select"
        name="select"
        options={[
          { value: "chocolate", label: "Chocolate" },
          { value: "strawberry", label: "Strawberry" },
          { value: "vanilla", label: "Vanilla" },
        ]}
        value={select}
        onChange={option => {
          setSelect(option?.value)
        }}
      />
    </ThemeContext.Provider>
      </header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/examples' component={Examples} />
        </Switch>
        </BrowserRouter>
      
    </div>
  );
}

export default App;
