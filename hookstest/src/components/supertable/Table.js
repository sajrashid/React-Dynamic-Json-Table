import React, { useEffect, useReducer, useState } from 'react'

import { ACTIONS } from './actions'
import DataProvider from './customContext'
import Rows from './children/rows'
import { TableReducer } from './tableReducer'
import Thead from './children/thead'
import useLocalStorage from '../hooks/useLocalStorage'

export default React.memo(function Table(props) {
    const options = props.options || {}
    const json = props.json || []
    const sortDirection ='asc'
    const initialState = { json: json, options: options, selectedRow:{},sortDirection:sortDirection }

    const [state, dispatch] = useReducer(TableReducer, initialState)

   // const [state, selectRowDispatch] = useReducer(TableReducer, { json: data.json })

    const [name, setName] = useLocalStorage('name', () => '')
    //  const [state, counterDispatch]=useReducer(counterReducer,{count:0})

    const styles = options.css || ''
    const cssClasses = `mytable ${styles}`
    function handleSortClick(e) {
        dispatch({ type: ACTIONS.SORT, payload: { id: e.currentTarget.id } })
    }
    const rowClick = (e) => {
        if (options.selectable !== false) {
            if (props.rowClick) {
                props.rowClick(state.selectedRow)
            }
        }
    }
    return (
        <>
            <DataProvider.Provider value={initialState}>
                <table className={cssClasses}>
                    <thead>
                        <tr><Thead dispatch={dispatch} /></tr>
                    </thead>
                    <tbody>

                        <Rows rowClick={rowClick} state={state} dispatch={dispatch} />

                    </tbody>
                </table>
            </DataProvider.Provider>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <span>{state.json.toString()}</span>
            <div>{JSON.stringify(state.selectedRow)}</div>
            <button onClick={handleSortClick}>sort</button>

        </>
    )
})
