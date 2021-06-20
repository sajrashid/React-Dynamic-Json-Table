import React, { useEffect, useReducer, useState } from 'react'

import { ACTIONS } from './actions'
import DataProvider from './customContext'
import Rows from './children/rows'
import { TableReducer } from './tableReducer'
import Thead from './children/thead'

export default React.memo(function Table(props) {
    const options = props.options || {}
    const json = props.json || []
    const sortDirection ='asc'
    const initialState = { json: json, options: options, selectedRow:{},sortDirection:sortDirection }

    const [state, dispatch] = useReducer(TableReducer, initialState)


    const styles = options.css || ''
    const cssClasses = `mytable ${styles}`
   
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
                        <tr ><Thead className={cssClasses} dispatch={dispatch} /></tr>
                    </thead>
                    <tbody>
                        <Rows className={cssClasses} rowClick={rowClick} state={state} dispatch={dispatch} />
                    </tbody>
                </table>
            </DataProvider.Provider>
        </>
    )
})
