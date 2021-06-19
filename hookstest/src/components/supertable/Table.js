import React, { useState, useEffect, useReducer } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'
import { ACTIONS } from './actions'
import { TableReducer } from './tableReducer'
import Thead from './children/thead'

export default function Table(props) {
    const [state, sortDispatch] = useReducer(TableReducer, { sortDirection: false })

    const [name, setName] = useLocalStorage('name', () => '')
    //  const [state, counterDispatch]=useReducer(counterReducer,{count:0})
    const options = props.options || {}
    const styles = options.css || ''
    const cssClasses = ` ${styles}`

    function handleSortClick() {
        sortDispatch({ type: ACTIONS.SORT })
    }

    return (
        <>
            <table className={cssClasses}>
                <thead>{options.filters && <tr></tr>}
                    {props.json.length > 0 && <tr><Thead json={props.json} options={options} /></tr>}
                </thead>
                <tbody></tbody>
            </table>

            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <span>{state.sortDirection.toString()}</span>
            <button onClick={handleSortClick}>sort</button>
        </>
    )
}
