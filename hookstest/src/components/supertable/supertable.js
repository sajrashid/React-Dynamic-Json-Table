import React, { useState, useEffect, createContext, useReducer  } from "react";
import _, { initial } from 'lodash'
import './supertable.css'
import CustomContext from './customContext'
import {counterReducer} from './counterReducer'


export default  function SuperTable(props) {
    const [state, counterDispatch]=useReducer(counterReducer,{count:0})

    const ACTIONS={
        INCREMENT:'increment',
        DECREMENT:'decrement'
         }
        
         
    function increment(){
        counterDispatch({ type:ACTIONS.INCREMENT})
    }
    function decrement(){
        counterDispatch({ type:ACTIONS.DECREMENT})
    }
    return (
       <div>
           <button onClick={decrement}>-</button>
        <span>{state.countb}</span>
        <button onClick={increment}>+</button>

       </div>
    )
}




