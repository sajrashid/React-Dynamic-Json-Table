import React, { useState, useEffect, useReducer } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { ACTIONS } from './actions'
import { TableReducer } from './tableReducer'
import Thead from './children/thead'
import Rows from './children/rows'
import DataProvider from './customContext'
export default function Table(props) {
    const options = props.options || {}
    const json = props.json || []

    const data={json:json,options:options }
   
    const [state, sortDispatch] = useReducer(TableReducer, { json: data.json })

    const [name, setName] = useLocalStorage('name', () => '')
    //  const [state, counterDispatch]=useReducer(counterReducer,{count:0})
   
    const styles = options.css || ''
    const cssClasses = ` ${styles}`
    function handleSortClick(e) {
        sortDispatch({ type: ACTIONS.SORT, payload:{id:e.currentTarget.id}})
    }

    return (
        <>
        <DataProvider.Provider value={data}>
            <table className={cssClasses}>
                <thead>
                    <tr><Thead sortDispatch={sortDispatch}/></tr>
                </thead>
                <tbody>
               
                    <Rows />
               
                </tbody>
            </table>
          </DataProvider.Provider>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <span>{state.json.toString()}</span>
            <button onClick={handleSortClick}>sort</button>
        
        </>
    )
}
