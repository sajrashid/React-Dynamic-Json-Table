import React, { useReducer, useState } from "react"

import { ACTIONS } from '../actions'
import Cells from './cells'
import { TableReducer } from '../tableReducer'
import { useCustomContext } from '../customContext'

//create your forceUpdate hook

function Row({ state, dispatch }) {
    const data = useCustomContext()
    const options = data.options || {}
    const styles = options.rowStyles || ''
    const cssClasses = ` ${styles}`
    const idColIdx = options.idCol ? Object.keys(data.json[0]).indexOf(options.idCol) : 0
    function handleRowClick(e) {
      var r=  dispatch({ type: ACTIONS.SELECTROW, payload: { id: e.currentTarget.id } })
        console.log(r)
    }

    const createRows = () => {
        return state.json.map((row, index) => {
            const rowId = row[Object.keys(row)[idColIdx]] // eslint-disable-next-line
            return <tr  key={index} className={state.selectedRowId == rowId ? "selectedRow" : ""} id={rowId} onClick={handleRowClick} >
                <Cells row={row} />
            </tr>
        })
    }

    return (createRows())
}
export default Row


