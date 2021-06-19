import { useCustomContext } from '../customContext'
import React, { useState,useReducer} from "react"
import Cells from './cells'
import { ACTIONS } from '../actions'
import { TableReducer } from '../tableReducer'
//create your forceUpdate hook

 function Row(props) {

    const data= useCustomContext()
    const [state, sortDispatch] = useReducer(TableReducer, { json: data.json  })
    const options = {}
    const styles = options.rowStyles || ''
    const cssClasses = ` ${styles}`
    const idColIdx = options.idCol ? Object.keys(data.json[0]).indexOf(options.idCol) : 0
    const createRows = () => {
        return state.json.map((row, index) => {
            const rowId = row[Object.keys(row)[idColIdx]] // eslint-disable-next-line
            return <tr className={cssClasses}  id={rowId} key={index} >
                <Cells row={row} />
                </tr>
        })
    }

    return (createRows())
}
export default Row


