import { ACTIONS } from '../reducers/actions'
import Cells from './cells'
import React from "react"

const Rows = ({ state, dispatch, rowClick }) => {
    const options = state.options || {}
    const styles = options.rowCss || ''
    const selectedRowCss = options.selectedRowCss || ''
    const cssClasses = `selected ${styles}`
    const idColIdx = options.idCol ? Object.keys(state.json[0]).indexOf(options.idCol) : 0
    const isEditable = options.editable || false

    function handleRowClick(e) {

        if (!e.currentTarget.classList.contains('selected')) {
            // navigated to new row test if state is same or reset
             if(JSON.stringify(state.selectedRow)===JSON.stringify(state.selectedRowCopy)){
             }else{
                // Send both rows to tables row click
                // let the use decide if the want to cancel
                rowClick(state.selectedRow,state.selectedRowCopy,state.userAction )
                // reset the use action
                state.userAction=ACTIONS.NOACTION

                return
             }

            let selectedRow = {}
            state.json.forEach(row => {
                const rowId = row[Object.keys(row)[idColIdx]]
                if (rowId.toString() === e.currentTarget.id.toString())
                    selectedRow = row
            });
            rowClick(selectedRow)
            dispatch({ type: ACTIONS.SELECTEDROW, payload: { row: selectedRow } })
        }
        else {
            console.log("else")
        }
    }

    const createRows = () => {
        return state.json.map((row, index) => {
            const rowId = row[Object.keys(row)[idColIdx]] // eslint-disable-next-line
            if (state.selectedRow === row && isEditable === true) {
                return <tr key={index} className={state.selectedRow === row ? `${cssClasses}` : ""} id={rowId} onClick={handleRowClick} >
                    <Cells dispatch={dispatch} state={state} row={row} editable={true} />
                </tr>
            } else {
                return <tr key={index} className={state.selectedRow === row ? `${cssClasses}` : ""} id={rowId} onClick={handleRowClick} >
                    <Cells dispatch={dispatch} state={state} row={row} editable={false} />
                </tr>
            }

        })
    }

    return (createRows())
}
export default Rows


